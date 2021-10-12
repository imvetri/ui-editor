export function generateToDivs(that, imageSrc){
    /**
     * 1. create a canvas
     * 2. Load image into canbas
     * 3. Schan canbas for rectangle
     */
    var img = document.createElement("img");
    img.src = imageSrc;

    var canvas, ctx;
    
    img.onload = function() {

        canvas = document.getElementById(that.state.id);
        ctx = canvas.getContext('2d');
        canvas.height = img.height;
        canvas.width = img.width;
        ctx.drawImage(img, 0, 0);
        canvas.addEventListener('click', function(event) {
            pick(event);
        });
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
        ctx.fillStyle = "green";

        var visited = {};
        function spread(x,y){

            if(!visited[x+""+y]){
                visited[x+""+y] = true;
                // rect.push(x,y);
                ctx.fillRect (x, y, 1, 1);

                let aboveColor = ctx.getImageData(x-1, y-1, 1, 1).data;
                // check above pixel
                if( aboveColor[0]===pickedColor[0] &&  aboveColor[1]===pickedColor[1] &&  aboveColor[2]===pickedColor[2]){
                    spread(x-1,y-1);
                }

                let previousColor = ctx.getImageData(x-1, y, 1, 1).data;
                // check previous pixel
                if( previousColor[0]===pickedColor[0] &&  previousColor[1]===pickedColor[1] &&  previousColor[2]===pickedColor[2]){
                    spread(x-1,y);
                }
                let belowColor = ctx.getImageData(x+1, y+1, 1, 1).data;
                // check below pixel
                if( belowColor[0]===pickedColor[0] &&  belowColor[1]===pickedColor[1] &&  belowColor[2]===pickedColor[2]){
                    spread(x+1,y+1);
                }
                let nextColor =ctx.getImageData(x+1, y, 1, 1).data;
                // check next pixel
                if( nextColor[0]===pickedColor[0] &&  nextColor[1]===pickedColor[1] &&  nextColor[2]===pickedColor[2]){
                    spread(x+1,y);
                }
                //                     spread(x-1,y-1);
                // spread(x-1,y);                            spread(x+1,y);
                //                     spread(x+1,y+1);
            }

        }
        spread(x,y);

    }



}

