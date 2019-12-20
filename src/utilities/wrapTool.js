export function wrapTool(e){
    let previousTarget = document.querySelectorAll(".droptarget.green");
    if(previousTarget[0]){
        previousTarget[0].classList.remove("droptarget")
        previousTarget[0].classList.remove("green")
        
    }
    e.target.classList.add("droptarget");
    e.target.classList.add("green");
}