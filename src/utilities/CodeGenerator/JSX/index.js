var layout = {
    "style": {
        "position": "relative",
        "top": "100px",
        "left": "240px",
        "height": "396px",
        "width": "1144px",
        "cursor": "crosshair",
        "box-sizing": "border-box",
        "resize": "",
        "overflow": "",
        "borderColor": "rgb(76, 175, 80)",
        "borderWidth": "3px"
    },
    "type": "Div",
    "children": [
        {
            "style": {
                "position": "absolute",
                "top": 22,
                "left": 112,
                "height": "63px",
                "width": "968px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "green",
                "resize": "",
                "overflow": "",
                "background": "",
                "cursor": "crosshair"
            },
            "type": "Div",
            "children": [
                {
                    "type": "H1"
                }
            ],
            "id": "div62180",
            "mode": "Draw"
        },
        {
            "style": {
                "position": "absolute",
                "top": 102,
                "left": 113,
                "height": "271px",
                "width": "970px",
                "borderWidth": "1px",
                "borderStyle": "solid",
                "borderColor": "green",
                "resize": "",
                "overflow": "",
                "background": "",
                "cursor": "crosshair"
            },
            "type": "Div",
            "children": [
                {
                    "style": {
                        "position": "absolute",
                        "top": 14,
                        "left": 12,
                        "height": "81px",
                        "width": "464px",
                        "borderWidth": "1px",
                        "borderStyle": "solid",
                        "borderColor": "green",
                        "resize": "",
                        "overflow": "",
                        "background": "",
                        "cursor": "crosshair"
                    },
                    "type": "Div",
                    "children": [
                        {
                            "type": "H2"
                        }
                    ],
                    "id": "div94085",
                    "mode": "Draw"
                },
                {
                    "style": {
                        "position": "absolute",
                        "top": 12,
                        "left": 489,
                        "height": "234px",
                        "width": "453px",
                        "borderWidth": "1px",
                        "borderStyle": "solid",
                        "borderColor": "green",
                        "resize": "",
                        "overflow": "",
                        "background": "",
                        "cursor": "crosshair"
                    },
                    "type": "Div",
                    "children": [
                        {
                            "TodoItem": [],
                            "Todo": [],
                            "TodoFooter": [
                                {
                                    "filterAll": "selected",
                                    "filterActive": "",
                                    "filterCompleted": "",
                                    "count": 0
                                }
                            ],
                            "type": "Todo"
                        }
                    ],
                    "id": "div20223",
                    "mode": "Draw"
                }
            ],
            "id": "div26769",
            "mode": "Draw",
            "clientX": 844,
            "clientY": 216,
            "origin": false
        }
    ],
    "mode": "Draw",
    "grabbing": false,
    "origin": false,
    "divId": "div46035",
    "id": "div123",
    "showOptions": true,
    "clientX": 352,
    "clientY": 201,
    "eventReducer": "",
    "events": {
        "onClick": "console.log('onClick success')",
        "onMouseOut": "console.log('mouse out success')"
    },
    "builderMode": "Select",
    "selected": true
}
console.log([layout].map(buildJSX)[0])
function buildJSX(item){
    var start = `<${item.type}>`;
    var end = `</${item.type}>`;
    if(item.children===undefined){
        return start+end;
    }
    return `${start}
    ${(item.children && (item.children.map(buildJSX).join("\n")))}
${end}`;
}