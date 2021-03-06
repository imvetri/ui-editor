var selected = "";
function getSelectedDiv(Div) {
    if (Div.selected) {
        selected = Div;
    }
    Div.Div.find(getSelectedDiv)
}

var selectedDivParent = "";

function getSelectedDivParent(Div) {
    if (!selectedDivParent) {
        let selectedDiv = Div.Div.find(div => div.selected);
        if(selectedDiv){
            selectedDivParent = Div;
        }
        if (!selectedDiv) {
            Div.Div.find(getSelectedDivParent)
        }
    }
}

module.exports = {
    copyDiv: function (state) {

        // Find selected DIV
        selected = "";
        state.Div.find(getSelectedDiv)
        console.log(selected)

        // Find the selected DIV's parent
        selectedDivParent = "";
        getSelectedDivParent(state)
        console.log(selectedDivParent)

        // Create the copy
        let copy = JSON.parse(JSON.stringify(selected));

        // Move its position 
        copy.style.top = copy.style.top + 20
        copy.style.left = copy.style.left + 20

        // Push it to parent
        selectedDivParent.Div.push(copy);
    },

    deleteDiv: function (state) {
        // Find selected DIV
        selected = "";
        state.Div.find(getSelectedDiv)
        console.log(selected)

        // Find the selected DIV's parent
        selectedDivParent = "";
        getSelectedDivParent(state)
        console.log(selectedDivParent)

        // Find the index of the div to be deleted
        let index = selectedDivParent.Div.findIndex(div=>div.id===selected.id);

        // Remove it from the parent.
        selectedDivParent.Div.splice(index, 1);
    },

    anySelected: function (state) {
        return JSON.stringify(state).indexOf("selected\":true") !== -1
    }
}