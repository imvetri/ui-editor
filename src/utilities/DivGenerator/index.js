export function generateToDivs(imageSrc){
    /**
     * 1. create a canvas
     * 2. Load image into canbas
     * 3. Schan canbas for rectangle
     */
    var img = document.createElement("img");
    img.src = imageSrc;

    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext('2d');
    
    img.onload = function() {

        canvas.height = img.height;
        canvas.width = img.width;
        debugger;
        ctx.drawImage(img, 0, 0);
        document.body.appendChild(canvas)
    };


    function pick( event ) {
        /**
         * pick the selected x,y
         * spread all four direction
         * mark topleft, topright, bottomleft, bottomright.
         * create a div
         * push to parent
         */
        var x = event.layerX;
        var y = event.layerY;

        var pixel = ctx.getImageData(x, y, 1, 1);
        var pickedColor = pixel.data;
        var rect = [];

        function getColor(x,y){
            var pixel = ctx.getImageData(x, y, 1, 1);
            var data = pixel.data;
            return data;
        };
        function spread(x,y){
            rect.push(x,y);
            // check above pixel
            if( getColor(x-1,y-1)[0]===pickedColor[0] &&  getColor(x-1,y-1)[1]===pickedColor[1] &&  getColor(x-1,y-1)[2]===pickedColor[2]){
                spread(x-1,y-1);
            }
            // check previous pixel
            if( getColor(x-1,y)[0]===pickedColor[0] &&  getColor(x-1,y)[1]===pickedColor[1] &&  getColor(x-1,y)[2]===pickedColor[2]){
                spread(x-1,y);
            }
            // check below pixel
            if( getColor(x+1,y+1)[0]===pickedColor[0] &&  getColor(x+1,y+1)[1]===pickedColor[1] &&  getColor(x+1,y+1)[2]===pickedColor[2]){
                spread(x+1,y+1);
            }
            // check next pixel
            if( getColor(x+1,y)[0]===pickedColor[0] &&  getColor(x+1,y)[1]===pickedColor[1] &&  getColor(x+1,y)[2]===pickedColor[2]){
                spread(x+1,y);
            }
            //                     spread(x-1,y-1);
            // spread(x-1,y);                            spread(x+1,y);
            //                     spread(x+1,y+1);
        }

        spread(x,y);

        // paint
        rect.forEach(pixel=>{
            ctx.fillStyle = "green";
            ctx.fillRect (pixel.x, pixel.y, 1, 1);
        })
    }

    canvas.addEventListener('click', function(event) {
        pick(event);
    });

}

