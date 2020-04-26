let prevPageX, prevPageY;
let maxCount = 50;
let count = 0 ;

function movesAbove(PageX, PageY) {

    return prevPageY < PageY ? true : false
}

function movesBelow(PageX, PageY) {

    return prevPageY > PageY ? false : true
}

function movesRight(PageX, PageY) {
    
    return prevPageY < PageY ? true: false

}

function movesLeft(PageX, PageY) {
    return prevPageY > PageY ? true: false

}

/** Returns the direction of new component insertion */

export function  insertDirection(PageX, PageY){
    prevPageX = prevPageX || PageX;
    prevPageY = prevPageY || PageY;

    count++;
    if(count===maxCount){

        // Check max difference.

        console.log(prevPageX, PageX);

        count =0;
        prevPageY = PageY;
        prevPageX = PageX;

        // if(xDiff>yDiff){``
        //     if(movesRight(PageX, PageY)){
        //         prevPageY = PageY;
        //         prevPageX = PageX;
        //         return "INSERT_RIGHT";
        //     }
        //     if(movesLeft(PageX, PageY)){
        //         prevPageY = PageY;
        //         prevPageX = PageX;
        //         return "INSERT_LEFT";
        //     }
        // }

        // if(yDiff>xDiff){
        //     if(movesAbove(PageX, PageY)){
        //         prevPageY = PageY;
        //         prevPageX = PageX;
        //         return "INSERT_ABOVE";
        //     }
        //     if(movesBelow(PageX, PageY)){
        //         prevPageY = PageY;
        //         prevPageX = PageX;
        //         return "INSERT_BELOW";
        //     }
        // }
    }
}
