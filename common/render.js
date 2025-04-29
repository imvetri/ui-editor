	var changed;
	function render(box) {
	    var d = document.createElement(box.type)
	    d.style.top = box.top
	    d.style.left = box.left
	    d.id=box.id
	    d.style.height = box.height
	    d.style.width = box.width
	    d.src = box.src
	    d.style.position = "absolute"
	    d.style.border = "1px solid black"
		if(Object.keys(box?.decorate || {}).length>0) {
			Object.keys(box?.decorate || {}).forEach(de=>{
				d.style[de]=box.decorate[de]
			})
		}
		if(box.storage){
			d.style.height="fit-content"
			d.style.minHeight="30px"
			if(box.storagemovenext&&box.storagemoveprev){
				setTimeout(()=>{
					boxes[box.storagemovenext].element.addEventListener("click",()=>{
						params.storageindex = params.storageindex==box.storage.length-1?0:params.storageindex+1;
						rresult();
					})
					boxes[box.storagemoveprev].element.addEventListener("click",()=>{
						params.storageindex = params.storageindex==0?box.storage.length-1:params.storageindex-1
						rresult();
					})
				},0)
			}
		}
		box.storage && box.storage.forEach((t,id)=>{
			var i = document.createElement("span")
			if(typeof t=== "object"){
				i.innerHTML= `${id} <br/>`+Object.keys(t).map((e)=>{
				    return `<span>${e} : </span><span>${t[e]}</span>`
				}).join("<br/>")
			}
			else{
		       	i.innerText = t;
			}
			i.style = "border:1px solid black; padding:3px;display:block;"
			d.appendChild(i)
		})
	    if( mode=="annotate" || mode==="wireframe" ){
	        box.rcvalues && box.rcvalues.forEach(t=>{
				var i = document.createElement("span")
				i.innerText = t;
				i.style = "border:1px solid black; padding:3px;display:block;"
				d.appendChild(i)
			})
		}
	    if(d.src && mode!=="result"){
	    	var i = document.createElement("img")
	    	i.src = d.src
	    	d.appendChild(i)
	    }
	    if(mode==="result"){
			if(box.rtype==="content"){
				if(box.rctype==="Text"){
					d.innerText = box.rcvalue
				}
				if(box.rctype==="Image"){
					var i = document.createElement("img")
		    		i.src = box.rcvalue
	        		d.appendChild(i)
				}
				if(box.rctype==="Data source" && !box.storage){
					d.innerText = dChildren[box.rcvalue].storage[params.storageindex || 0][box.rcprop]
				}
				if(box.rctype==="Input" && box.boxChildren.length==0){
					if(box.flow){
						storage(box)
						// if first render
						if(boxrendercount===1){
							box.rcvalue=boxes[box.flow.to].storage[params.storageindex][box.rcname || box.rctypename]
						}
						else{
							box.rcvalue= box.rcvalue 
						}
						if(box.rcvalue===""&&boxrendercount===1){
							box.rcvalue=boxes[box.flow.to].storage[params.storageindex][box.rcname || box.rctypename]
						}
						
						else{
							box.rcvalue= box.rcvalue 
						}
						// if rerender
					}
					var i = document.createElement('input')
					i.value = box.rcvalue;
					i.style.width = d.style.width;
					i.style.height = d.style.height;
					i.style.border = d.style.border;
					i.addEventListener("input",(e)=>{
						box.rcvalue=e.target.value;
						// save value to storage only if valid validator
						// else save to rcvalue
						var valid = validator(box);
						changed = box;
						rresult()
						changed?.element?.children[0]?.focus()
					})
					if(box.flow){
						if(box.flow.on==="ENTER"){
							i.addEventListener("keypress",e=>{
								if(e.key=="Enter"){
									var valid = validator(box);
									if(valid){
										savestorage(box);
									}
									showbox(box);
									
								}
							})
						}
						if(box.flow.on==="CLICK"){
							setTimeout(()=>{
								boxes[box.flow.click].element.addEventListener("click",()=>{
									var valid = validator(box);
									if(valid){
										savestorage(box);
									}
									showbox(box);
								})
							},0)
						}
					}
					d.appendChild(i)
				}
			}	
		}
	    d.json = box
	    document.body.appendChild(d)
	    box.element=d;
	}
	function clean(){
		dChildren.forEach(d=>{
		    delete d.boxChildren
		    delete d.immediateChildren
		    delete d.immediateParent
		    delete d.parents
			delete d.element
		})
		var cleanbox = JSON.parse(localStorage.boxes)
		cleanbox.forEach((e,i)=>{
			boxes[i].top = e.top;
			boxes[i].left = e.left;
		})
	}
	function storage(box){
		boxes[box.flow.to].storage = boxes[box.flow.to].storage || []
		boxes[box.flow.to].storage[params.storageindex] =boxes[box.flow.to].storage[params.storageindex] || {};
	}
	function savestorage(box){
		boxes[box.flow.to].storage[params.storageindex][box.rcname || box.rctypename]=box.rcvalue
		clean()
		box.rcvalue=""
		localStorage.boxes = JSON.stringify(boxes)
	}

function showbox(box){
			clean()

	boxtree()
	var valid = validator(box);
	var movement = box.shows?.filter(s=>s.on===(valid?"VALID":"INVALID"))||[]
	movement.forEach(movement=>{
		movefromto(boxes[movement.this],boxes[movement.here])
	})
	boxtree()
	rresult()

}

function resetBoxtree(){
	dChildren.forEach(d=>{
	    delete d.boxChildren
	    delete d.immediateChildren
	    delete d.immediateParent
	    delete d.parents
	})
	boxtree()
}

function validator(box){
	// type of type type
	if(box.rctypename.includes(".")){
		var type = types.find(t=>t.name==box.rctypename.split(".")[0])
		var inputs = boxes.filter(b=>b?.flow?.to===box?.flow?.to)
		var result = boxes[type.source].storage.every(value=>{
			// no storage should have save value as in inputs
			return inputs.every(inp=>{
				return value[inp.rctypename.split(".")[1]]!==inp.rcvalue
			})
		})
		return result	
	}
	// type of type value
	var type = types.find(t=>t.name==box.rctypename)
		if(!type?.rule) return true;

	var values = boxes[type.source].storage.map(s=>s[type.name]);
	var value = box.rcvalue;
	if(type.rule==="IN"){
		return values.includes(value)
	}if(type.rule==="NOT IN"){
		return !values.includes(value)
	}
	return true
}