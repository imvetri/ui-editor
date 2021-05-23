var selected = "";
function getSelectedDiv(Div) {
    if(Div.selected){
        selected = Div;
    }
    Div.Div.find(getSelectedDiv)
}

var selectedDivParent = "";

function getSelectedDivParent(Div) {
    if(!selectedDivParent){
        let selectedDiv = Div.Div.find(div=>div.selected);
        selectedDivParent = Div;
        if(!selectedDiv){
            Div.Div.find(getSelectedDivParent)
        }
    }
}

module.exports = {
    copyDiv: function (state ){

        // Find selected DIV
        selected = "";
        state.Div.find(getSelectedDiv)
        console.log(selected)

        // Find the selected DIV's parent
        selectedDivParent = "";
        getSelectedDivParent(state)
        console.log(selectedDivParent)

        // Create the copy
        let copy = JSON.parse(JSON.stringify( selected));
        
        // Move its position 
        copy.style.top = Number(copy.style.top.split("px")[0]) + 20 + "px"
        copy.style.left = Number(copy.style.left.split("px")[0]) + 20 + "px"

        // Push it to parent
        selectedDivParent.Div.push(copy);
    },

    anySelected: function (state ){
        return JSON.stringify(state).indexOf("selected\":true") !== -1
    }
}