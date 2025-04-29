var dChildren = boxes;
var shows = boxes.filter(box=>box.show).map(s=>s.show)
var types = boxes[0].types || []
var flows = boxes.filter(box=>box.flows).map(d=>d.flows).flat()
function boxtree(){
	function findChildren(child){
		return dChildren.filter(c=>c!==child&&c.left>=child.left && c.top>=child.top&&c.height+c.top<=child.height+child.top&& c.left+c.width<=child.left+child.width )
	}
	dChildren.forEach((child,i)=>{
		child.index = i ;
		child.boxChildren = findChildren(child).map(e=>dChildren.findIndex(child=>child===e))
	})
	var leaves = dChildren.filter(child=>child.boxChildren.length===0).map(e=>dChildren.findIndex(c=>c===e))
	leaves.forEach(leaf=>{
		dChildren[leaf].parents = dChildren.filter(parent=>{
			return parent.boxChildren.find(boxChild=>boxChild===leaf)
		}).map(e=>dChildren.findIndex(c=>c===e))
	})
	// for each leaf, find hierarchy of parents
	leaves.forEach(leaf=>{
		dChildren[leaf].parents = dChildren[leaf].parents.map(e=>dChildren[e]).sort((a,b)=>a.volume-b.volume).map(e=>dChildren.findIndex(c=>c===e))
	})
	// for each leaf, and for each parent, update immediate parent
	leaves.forEach(leaf=>{
		dChildren[leaf].immediateParent=dChildren[leaf].parents[0];
		// update immediateParent for other parents
		for(var i=0;i<dChildren[leaf].parents.length-1;i++){
			dChildren[dChildren[leaf].parents[i]].immediateParent = dChildren[leaf].parents[i+1];
		}
		// update immediateChildren for parents
		for(var i=dChildren[leaf].parents.length-1;i>0;i--){
			dChildren[dChildren[leaf].parents[i]].immediateChildren = dChildren[dChildren[leaf].parents[i]].immediateChildren|| []
			dChildren[dChildren[leaf].parents[i]].immediateChildren.push(dChildren[leaf].parents[i-1])
		}
		if(dChildren[dChildren[leaf].parents[0]]){
			dChildren[dChildren[leaf].parents[0]].immediateChildren = dChildren[dChildren[leaf].parents[0]].immediateChildren || [];
			dChildren[dChildren[leaf].parents[0]].immediateChildren.push(leaf)
		}
	})
	// dedupe immediatechildren
	dChildren.forEach(d=>{
		if(d.immediateChildren){
			d.immediateChildren = [... new Set(d.immediateChildren)]
		}
	})
}
boxtree()
var f;
function addFocus(){
	f&&f.remove();
	f=document.createElement("div")
	var eleHeight = Number(dChildren[currentParent].element.style.height.split("px")[0])
	var eleWidth = Number(dChildren[currentParent].element.style.width.split("px")[0])
	var firstpointx, firstpointy;
	firstpointx = document.body.scrollLeft
	firstpointy = document.body.scrollTop
	var secondpointx, secondpointy
	secondpointy = ~~(zoom*Number(dChildren[currentParent].element.style.top.split("px")[0])-window.innerHeight/2+eleHeight/2);
	secondpointx = ~~(zoom*Number(dChildren[currentParent].element.style.left.split("px")[0])-window.innerWidth/2+eleWidth/2)
	firstpointx, firstpointy, secondpointx, secondpointy;
	// find the direction - above, below, right, left.
	function findDirection(){
		// once the values are same, dont touch it
		if(secondpointx!==firstpointx){
			if(secondpointx>firstpointx) firstpointx=~~(firstpointx+1);
			else firstpointx=~~(firstpointx-1)
		}
		if(secondpointy!==firstpointy){
			if(secondpointy>firstpointy) firstpointy= ~~(firstpointy+1)
			else firstpointy=~~(firstpointy-1)
		}
	}
	findDirection()
	while(!(firstpointx==secondpointx && firstpointy==secondpointy)){
		// push it to queue
		findDirection()
	}
	document.body.scrollTo({
   		top:firstpointy,   		
		left:firstpointx,
		behavior: "smooth"
	})
	var rect = dChildren[currentParent].element.getBoundingClientRect()
	f.style.position="absolute"
	f.style.left=dChildren[currentParent].element.offsetLeft;
	f.style.top=dChildren[currentParent].element.offsetTop;
	f.style.width=eleWidth
	f.style.height=eleHeight 
	f.style.boxSizing="border-box"
	f.style.border="3px dashed black"
	f.style.zIndex=1;
	document.body.appendChild(f)
	f.element=f
}
function getChild(div){
	return div.immediateChildren[0];
}
var currentParent=0;
var currentChild=0;
function nextChild(){
	currentChild = currentChild+1;
	if(currentChild< dChildren[dChildren[currentParent].immediateParent].immediateChildren.length)
		currentParent = dChildren[dChildren[currentParent].immediateParent].immediateChildren[currentChild]
	else
		currentChild = currentChild-1
}
function prevChild(){
	currentChild = currentChild-1
	if(currentChild>=0){}
	else{
		currentChild = 0
	}
	currentParent = dChildren[dChildren[currentParent].immediateParent].immediateChildren[currentChild]
}
function aboveParent(){
	currentChild=0;
	if(dChildren[currentParent].immediateParent>=0)
		currentParent=dChildren[currentParent].immediateParent;
}
function belowParent(){
	currentChild=0;
	if(dChildren[currentParent].immediateChildren && dChildren[currentParent].immediateChildren.length!=0)
		currentParent=dChildren[currentParent].immediateChildren[0]
}
function move(direction, target){
	if(direction==="right"){
		target.element.style.left = Number(target.element.style.left.split("px")[0])+speed;
	}
	if(direction==="left"){	
		target.element.style.left = Number(target.element.style.left.split("px")[0])-speed;
	}
	if(direction==="up"){
		target.element.style.top = Number(target.element.style.top.split("px")[0])-speed;
	}
	if(direction==="down"){
		target.element.style.top = Number(target.element.style.top.split("px")[0])+speed;
	}
	target.immediateChildren && target.immediateChildren.forEach((c)=>{
		move(direction,dChildren[c])
	})
}
function size(command, element){
	if(command==="increasewidth"){element.style.width=Number(getComputedStyle(element).width.split("px")[0])+speed}
	if(command==="increaseheight"){element.style.height=Number(getComputedStyle(element).height.split("px")[0])+speed}
	if(command==="decreasewidth"){element.style.width=Number(getComputedStyle(element).width.split("px")[0])-speed}
	if(command==="decreaseheight"){element.style.height=Number(getComputedStyle(element).height.split("px")[0])-speed}
}
var l = dChildren.filter(child=>child.boxChildren.length===0).map(e=>dChildren.findIndex(c=>c===e))
l = l.map(i=>dChildren[i])