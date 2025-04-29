boxes = localStorage.boxes?JSON.parse(localStorage.boxes): boxes
var boxrendercount=0;
var result = (box, target)=>{
	boxrendercount++;
	document.body.innerHTML=""
	var a ,b;
	if(target===undefined){	
		a = box.top;
		b = box.left;
		box.top = 0; 
		box.left = 0; 
	}
	if(target){
		a = box.top;
		b = box.left;
		box.top = target.top
		box.left = target.left
		target.element.remove()
		target.boxChildren.forEach(d=>{
			dChildren[d].element.remove()
		})
	}
	render(box)
	box.boxChildren?.map(i=>dChildren[i]).forEach(i=>{
		i.top = i.top-a+box.top;
		i.left = i.left-b+box.left;
		render(i)
	})
}

var params = {};
window.location.search.substr(1).split(";").map(e=>{params[e.split(":")[0]]=Number(e.split(":")[1])})
var box, rresult;

setTimeout(()=>{
	box = dChildren[params.index]
	rresult = result.bind(this,box)
	setTimeout(rresult,0)
},1)

function movefromto(from, to){
	from.boxChildren.forEach(c=>{
		c=dChildren[c]
		c.top = - from.top + c.top + to.top
		c.left = - from.left + c.left + to.left	
	})
	from.top = to.top
	from.left = to.left
}
