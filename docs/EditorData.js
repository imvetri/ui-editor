window.sampleComponents =[
  {
    "name": "Resizable",
    "markup": "<div id=\"cover\">\n<div id=\"resizable\" style={state.style}>\n    <div class='resizer' id=\"topLeft\"></div>\n    <div class='resizer' id=\"topRight\"></div>\n    <div class='resizer' id=\"bottomLeft\"></div>\n    <div class='resizer' id=\"bottomRight\"></div>\n</div>\n</div>",
    "events": [
      {
        "name": "onMouseDown",
        "index": 0,
        "id": "topLeft",
        "reducer": {
          "reducer": "state.resizeTopLeft=true;\ne.stopPropagation();",
          "publishes": []
        }
      },
      {
        "name": "onMouseMove",
        "index": 1,
        "id": "topLeft",
        "reducer": {
          "reducer": "if(state.resizeTopLeft){\n\tlet width = Number(state.style.width.split(\"px\")[0]);\n    let left = Number(state.style.left.split(\"px\")[0]);\n\tstate.style.width = (width + left - e.clientX) + \"px\";\n    state.style.left = e.clientX + \"px\";\n    \n    let height = Number(state.style.height.split(\"px\")[0]);\n    let top = Number(state.style.top.split(\"px\")[0]);\n\tstate.style.height = (height + top - e.clientY) + \"px\";\n    state.style.top = e.clientY + \"px\";\n}\ne.stopPropagation();",
          "publishes": []
        }
      },
      {
        "name": "onMouseUp",
        "index": 2,
        "id": "topLeft",
        "reducer": {
          "reducer": "state.resizeTopLeft=false;\ne.stopPropagation();",
          "publishes": []
        }
      },
      {
        "name": "onMouseDown",
        "index": 3,
        "id": "bottomLeft",
        "reducer": {
          "reducer": "state.resizeBottomLeft=true;\ne.stopPropagation();",
          "publishes": []
        }
      },
      {
        "name": "onMouseMove",
        "index": 4,
        "id": "bottomLeft",
        "reducer": {
          "reducer": "if(state.resizeBottomLeftt){\n\n    let height = Number(state.style.height.split(\"px\")[0]);\n    let top = Number(state.style.top.split(\"px\")[0]);\n    \n    e.target.parentElement.style.height = (e.clientY - top +5 ) + \"px\"\n    \n   \tlet width = Number(state.style.width.split(\"px\")[0]);\n    let left = Number(state.style.left.split(\"px\")[0]);\n    e.target.parentElement.style.width = e.clientX - left + 5 + \"px\";\n\n    \n}\ne.stopPropagation();",
          "publishes": []
        }
      },
      {
        "name": "onMouseUp",
        "index": 5,
        "id": "bottomLeft",
        "reducer": {
          "reducer": "state.resizeBottomLeft=false;\ne.stopPropagation();",
          "publishes": []
        }
      },
      {
        "name": "onMouseDown",
        "index": 6,
        "id": "bottomRight",
        "reducer": {
          "reducer": "state.resizeBottomRight=true;\ne.stopPropagation();",
          "publishes": []
        }
      },
      {
        "name": "onMouseUp",
        "index": 7,
        "id": "bottomRight",
        "reducer": {
          "reducer": "state.resizeBottomRight=false;\ne.stopPropagation();",
          "publishes": []
        }
      },
      {
        "name": "onMouseMove",
        "index": 8,
        "id": "bottomRight",
        "reducer": {
          "reducer": "if(state.resizeBottomRight){\n\n    let height = Number(state.style.height.split(\"px\")[0]);\n    let top = Number(state.style.top.split(\"px\")[0]);\n\tstate.style.height = (e.clientY - top +5 ) + \"px\";\n    \n   \tlet width = Number(state.style.width.split(\"px\")[0]);\n    let left = Number(state.style.left.split(\"px\")[0]);\n\tstate.style.width =  e.clientX - left + 5 + \"px\";\n\n    \n}\ne.stopPropagation();",
          "publishes": []
        }
      },
      {
        "name": "onMouseOut",
        "id": "topLeft",
        "reducer": {
          "reducer": "state.resizeTopLeft=false;\ne.stopPropagation();",
          "publishes": []
        }
      },
      {
        "name": "onMouseOut",
        "id": "bottomLeft",
        "reducer": {
          "reducer": "state.resizeBottomLeft=false;\ne.stopPropagation();",
          "publishes": []
        }
      },
      {
        "name": "onMouseOut",
        "id": "bottomRight",
        "reducer": {
          "reducer": "state.resizeBottomRight=false;\ne.stopPropagation();",
          "publishes": []
        }
      },
      {
        "name": "onMouseDown",
        "index": 12,
        "id": "topRight",
        "reducer": {
          "reducer": "state.resizeTopRight=true;\ne.stopPropagation();",
          "publishes": []
        }
      },
      {
        "name": "onMouseUp",
        "index": 13,
        "id": "topRight",
        "reducer": {
          "reducer": "state.resizeTopRight=false;\ne.stopPropagation();",
          "publishes": []
        }
      },
      {
        "name": "onMouseOut",
        "index": 14,
        "id": "topRight",
        "reducer": {
          "reducer": "state.resizeTopRight=false;\ne.stopPropagation();",
          "publishes": []
        }
      },
      {
        "name": "onMouseMove",
        "index": 15,
        "id": "topRight",
        "reducer": {
          "reducer": "if(state.resizeTopRight){\n\tlet width = Number(state.style.width.split(\"px\")[0]);\n    let left = Number(state.style.left.split(\"px\")[0]);\n\tstate.style.width = (e.clientX - left + 5) + \"px\";\n    \n    let height = Number(state.style.height.split(\"px\")[0]);\n    let top = Number(state.style.top.split(\"px\")[0]);\n\tstate.style.height = -e.clientY + height + top + \"px\";\n    state.style.top = e.clientY + \"px\";\n}\ne.stopPropagation();",
          "publishes": []
        }
      },
      {
        "name": "onMouseDown",
        "id": "resizable",
        "reducer": {
          "reducer": "e.target.style.cursor = \"grabbing\";\nstate.grabbing = true;\n",
          "publishes": []
        }
      },
      {
        "name": "onMouseUp",
        "id": "resizable",
        "reducer": {
          "reducer": "e.target.style.cursor = \"grab\";\nstate.grabbing = false;\n",
          "publishes": []
        }
      },
      {
        "name": "onMouseMove",
        "index": 18,
        "id": "resizable",
        "reducer": {
          "reducer": "if(state.grabbing) {\n\tvar rect = e.target.getBoundingClientRect();\n\n    e.target.style.top = e.clientY - rect.height/2  + \"px\";\n    e.target.style.left = e.clientX - rect.width/2 + \"px\";\n}\n",
          "publishes": [
            {
              "publishName": "onMoveFinished",
              "publishCondition": true,
              "publishable": false
            }
          ]
        }
      },
      {
        "name": "onMouseOut",
        "id": "resizable",
        "reducer": {
          "reducer": "",
          "publishes": [
            {
              "publishName": "onMoveFinished",
              "publishCondition": true,
              "publishable": true
            }
          ]
        }
      },
      {
        "name": "onContextMenu",
        "index": 20,
        "id": "cover",
        "reducer": {
          "reducer": "e.stopPropagation();",
          "publishes": [
            {
              "publishName": "onRightClicked",
              "publishCondition": true,
              "publishable": true
            }
          ]
        }
      }
    ],
    "state": "{\n\t\"style\":{\n        \"top\": \"200px\",\n        \"left\": \"200px\",\n        \"height\": \"100px\",\n        \"width\": \"100px\"\n\t}\n}",
    "style": "#cover{\n\tposition:fixed;\n    height: 100vh;\n    width: 100vw;\n}\n#resizable {\n\tposition: fixed;\n    cursor: grab;\n}\n\n\n#resizable {\n  position: absolute;\n  outline: 1px solid #4286f4;\n  box-sizing: border-box;\n}\n\n\n#resizable .resizer{\n  width: 10px;\n  height: 10px;\n  border-radius: 50%; \n  background: white;\n  border: 1px solid #4286f4;\n  position: absolute;\n}\n\n#resizable .resizer#topLeft {\n  left: -5px;\n  top: -5px;\n  cursor: nwse-resize;\n}\n#resizable .resizer#topRight {\n  right: -5px;\n  top: -5px;\n  cursor: nesw-resize;\n}\n#resizable .resizer#bottomLeft {\n  left: -5px;\n  bottom: -5px;\n  cursor: nesw-resize;\n}\n#resizable .resizer#bottomRight {\n  right: -5px;\n  bottom: -5px;\n  cursor: nwse-resize;\n}",
    "children": [],
    "id": 557,
    "config": "{}",
    "trueName": "Resizer"
  },
  {
    "name": "Movable",
    "markup": "<div id=\"movable\" style={state.style}></div>",
    "events": [
      {
        "name": "onMouseDown",
        "index": 0,
        "id": "resizable",
        "reducer": {
          "reducer": "e.target.style.cursor = \"grabbing\";\nstate.grabbing = true;\nconsole.log(\"Mousedown\")",
          "publishes": []
        }
      },
      {
        "name": "onMouseUp",
        "index": 1,
        "id": "resizable",
        "reducer": {
          "reducer": "e.target.style.cursor = \"grab\";\nstate.grabbing = false;\nconsole.log(\"mouseup\")",
          "publishes": []
        }
      },
      {
        "name": "onMouseMove",
        "index": 2,
        "id": "resizable",
        "reducer": {
          "reducer": "if(state.grabbing) {\n\tvar rect = e.target.getBoundingClientRect();\n\n    e.target.style.top = e.clientY - rect.height/2  + \"px\";\n    e.target.style.left = e.clientX - rect.width/2 + \"px\";\n}\nconsole.log(\"mousemove\")",
          "publishes": []
        }
      },
      {
        "name": "onMouseDown",
        "id": "movable",
        "reducer": {
          "reducer": "e.target.style.cursor = \"grabbing\";\nstate.grabbing = true;\n",
          "publishes": []
        }
      },
      {
        "name": "onMouseUp",
        "id": "movable",
        "reducer": {
          "reducer": "e.target.style.cursor = \"grab\";\nstate.grabbing = false;\n",
          "publishes": []
        }
      },
      {
        "name": "onMouseMove",
        "id": "movable",
        "reducer": {
          "reducer": "if(state.grabbing) {\n\tvar rect = e.target.getBoundingClientRect();\n\n    e.target.style.top = e.clientY - rect.height/2  + \"px\";\n    e.target.style.left = e.clientX - rect.width/2 + \"px\";\n}",
          "publishes": []
        }
      }
    ],
    "state": "{\n\t\"style\":{\n        \"top\": \"200px\",\n        \"left\": \"200px\"\n\t}\n}",
    "style": "#movable {\n\tposition: fixed;\n    border: 1px solid green;\n    height: 100px;\n    width: 100px;\n    cursor: grab;\n}",
    "children": [],
    "id": 557,
    "config": "{}",
    "trueName": "Movable"
  },
  {
    "name": "CanvasControls",
    "markup": "<div id=\"menu\" style={state.style}>\n    <div id=\"history-control\">\n        <div className={state.undo}>\n            <i className=\"fa fa-undo\"></i>\n            <span>Undo</span>\n\t\t</div>\n        <div className={state.redo}>\n\t\t\t<i className=\"fa fa-redo\"></i>\n        \t<span>Redo</span>\n\t\t</div>\n    </div>\n    <div id=\"content-control\">\n        <div className={state.draw}>\n            <i className=\"fa fa-edit\"></i>\n        \t<span>Draw</span>\n        </div>\n        <div className={state.text}>\n            <i className=\"fa fa-font\"></i>\n        \t<span>Text</span>\n        </div>\n        <div className={state.image}>\n            <i className=\"fas fa-image\"></i>\n        \t<span>Image</span>\n        </div>\n    </div>\n    <div id=\"edit-control\">\n        <div className={state.edit}>\n            <i className=\"fa fa-edit\"></i>\n        \t<span>Edit</span>\n        </div>\n        <div className={state.delete}>\n            <i className=\"fa fa-trash\"></i>\n        \t<span>Delete</span>\n        </div>\n    </div>\n    <div>\n        <div className={state.select}>\n        \t<i className=\"fa fa-mouse-pointer\"></i>\n        \t<span>Select</span>\n        </div>\n    </div>\n</div>",
    "events": [
      {
        "name": "onClick",
        "index": 0,
        "id": "menu",
        "reducer": {
          "reducer": "state.item = e.target.innerText;\n\nswitch (state.item){\n\tcase \"Draw\":\n\t\tstate.text = \"enabled\";\n        state.select = \"enabled\"\n        break;\n\tcase \"Select\":\n\t\tstate.edit = \"enabled\";\n        break;\n}",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onDraw",
              "publishCondition": "state.item === 'Draw'"
            },
            {
              "publishable": true,
              "publishName": "onText",
              "publishCondition": "state.item === 'Text'"
            },
            {
              "publishable": true,
              "publishName": "onSelect",
              "publishCondition": "state.item === 'Select'"
            },
            {
              "publishable": true,
              "publishName": "onEdit",
              "publishCondition": "state.item === 'Edit'"
            },
            {
              "publishable": true,
              "publishName": "onUndo",
              "publishCondition": "state.item === 'Undo'"
            },
            {
              "publishable": true,
              "publishName": "onRedo",
              "publishCondition": "state.item === 'Redo'"
            }
          ]
        }
      }
    ],
    "state": "{\n\t\"undo\":\"enabled\",\n    \"redo\":\"enabled\",\n\t\"draw\":\"enabled\",\n    \"text\":\"disabled\",\n    \"image\":\"disabled\",\n\t\"group\":\"disabled\",\n    \"ungroup\":\"disabled\",\n\t\"duplicate\":\"disabled\",\n    \"delete\":\"disabled\",\n\t\"select\":\"disabled\",\n    \"edit\":\"disabled\",\n    \"save\":\"disabled\",\n    \"load\":\"disabled\",\n    \"style\" : {\n    \t\"top\": \"100px\",\n        \"left\":\"200px\"\n    }\n}",
    "style": "#menu {\n    position: fixed;\n    font-size:10px;\n    user-select: none;\n    color: rgba(255,255,255,0.5);\n    background: rgb(64, 64, 64);\n}\n\n#menu > div > div:hover:not(.disabled){\n    background: rgb(43, 43, 43);\n    color: white;\n}\n\n.disabled{\n    cursor: not-allowed;\n    background: #333333;\n    color: #4a4a4a;\n}\n\n\n\n#menu > div > div span {\n    padding-left: 9px;\n}\n\n#menu > div > div {\n    box-sizing: border-box;\n    padding: 10px;\n    height: 29px;\n}\n\n#history-control {\n    border: 1px solid #2C3134;\n    height: 60px;\n}\n\n#content-control {\n    border: 1px solid #2C3134;\n    height: 90px;\n}\n\n#edit-control {\n    border: 1px solid #2C3134;\n}\n\n#selection-control {\n    border: 1px solid #2C3134;\n    height: 60px;\n}\n",
    "children": [],
    "id": 550,
    "config": "{}",
    "trueName": "CanvasControls"
  },
  {
    "name": "PropertiesControl",
    "markup": "<div class=\"properties\" id=\"properties\" style={state.style}>\n\n    <div>\n        <div>\n            <span class=\"name\">Height</span>\n            <button class=\"less\" id=\"lessheight\"><i class=\"fa fa-minus\"></i></button>\n            <input type=\"text\" value={state.height}/>\n            <button class=\"more\" id=\"moreheight\"><i class=\"fa fa-plus\"></i></button>\n        </div>\n        <div>\n            <span class=\"name\">Width</span>\n            <button class=\"less\" id=\"lesswidth\"><i class=\"fa fa-minus\"></i></button>\n            <input type=\"text\" value={state.width}/>\n            <button class=\"more\" id=\"morewidth\"><i class=\"fa fa-plus\"></i></button>\n        </div>\n    </div>\n\n    <div>\n        <div>\n            <span class=\"name\">Position</span> \n            <select name=\"position\" value={state.position} id=\"position\">\n                <option>static</option>\n                <option>relative</option>\n                <option>absolute</option>\n                <option>fixed</option>\n            </select>\n        </div>\n        \n        <div>\n            <span class=\"name\">Top</span>\n            <button class=\"less\" id=\"lesstop\"><i class=\"fa fa-minus\"></i></button>\n            <input type=\"text\" value={state.top}/>\n            <button class=\"more\" id=\"moretop\"><i class=\"fa fa-plus\"></i></button>\n        </div>\n        <div>\n            <span class=\"name\">Left</span>\n            <button class=\"less\" id=\"moreleft\"><i class=\"fa fa-minus\"></i></button>\n            <input type=\"text\" value={state.left}/>\n            <button class=\"more\" id=\"lessleft\"><i class=\"fa fa-plus\"></i></button>\n        </div>\n        <div>\n            <span class=\"name\">Right</span>\n            <button class=\"less\" id=\"lessRight\"><i class=\"fa fa-minus\"></i></button>\n            <input type=\"text\" value={state.right}/>\n            <button class=\"more\" id=\"moreRight\"><i class=\"fa fa-plus\"></i></button>\n        </div>\n        <div>\n            <span class=\"name\">Bottom</span>\n            <button class=\"less\" id=\"moreBottom\"><i class=\"fa fa-minus\"></i></button>\n            <input type=\"text\" value={state.bottom}/>\n            <button class=\"more\" id=\"lessBottom\"><i class=\"fa fa-plus\"></i></button>\n        </div>\n    </div>\n\n    <div>\n        <div>\n            <span class=\"name\">Display</span> \n            <select name=\"display\" value={state.display} id=\"display\">\n                <option>block</option>\n                <option>inline</option>\n                <option>inline-block</option>\n                <option>flex</option>\n                <option>grid</option>\n            </select>\n        </div>\n    </div>\n\n    <div>\n        <div>\n            <span class=\"name\">Border</span>\n        </div>\n        <div>\n            <span class=\"name\">Width</span>\n            <button class=\"less\" id=\"lessborder\"><i class=\"fa fa-minus\"></i></button>\n            <input type=\"text\" value={state.borderWidth}/>\n            <button class=\"more\" id=\"moreborder\"><i class=\"fa fa-plus\"></i></button>\n        </div>\n    \n        <div>\n            <span class=\"name\">Color</span>\n            <input type=\"color\" id=\"morecolor\" value={state.borderColor}/>\n        </div>\n        <div>\n            <span class=\"name\">Style</span>\n            <select name=\"borderStyle\" value={state.borderStyle} id=\"borderStyle\">\n                <option>dotted</option>\n                <option>dashed</option>\n                <option>solid</option>\n                <option>double</option>\n                <option>groove</option>\n                <option>ridge</option>\n                <option>inset</option>\n                <option>outset</option>\n                <option>none</option>\n                <option>hidden</option>\n            </select>\n        </div>\n    </div>\n\n    <div>\n        <div>\n            <span class=\"name\">Padding</span> \n        </div>\n        \n        <div >\n            <span class=\"name\">Top</span>\n            <button class=\"less\" id=\"lesspaddingtop\"><i class=\"fa fa-minus\"></i></button>\n            <input type=\"text\" value={state.paddingtop}/>\n            <button class=\"more\" id=\"morepaddingtop\"><i class=\"fa fa-plus\"></i></button>\n        </div>\n        <div >\n            <span class=\"name\">Left</span>\n            <button class=\"less\" id=\"morepaddingleft\"><i class=\"fa fa-minus\"></i></button>\n            <input type=\"text\" value={state.paddingleft}/>\n            <button class=\"more\" id=\"lesspaddingleft\"><i class=\"fa fa-plus\"></i></button>\n        </div>\n        <div >\n            <span class=\"name\">Right</span>\n            <button class=\"less\" id=\"lesspaddingRight\"><i class=\"fa fa-minus\"></i></button>\n            <input type=\"text\" value={state.paddingright}/>\n            <button class=\"more\" id=\"morepaddingRight\"><i class=\"fa fa-plus\"></i></button>\n        </div>\n        <div class=\"bottomPadding\">\n            <span class=\"name\">Bottom</span>\n            <button class=\"less\" id=\"morepaddingBottom\"><i class=\"fa fa-minus\"></i></button>\n            <input type=\"text\" value={state.paddingbottom}/>\n            <button class=\"more\" id=\"lesspaddingBottom\"><i class=\"fa fa-plus\"></i></button>\n        </div>\n    </div>\n\n\n\n    <div>\n\n        <div>\n            <span class=\"name\">Font</span>\n        </div>\n        <div>\n            <span class=\"name\">Family</span>\n            <input type=\"text\" class=\"long\" value={state.fontFamily}/>\n        </div>\n        <div>\n            <span class=\"name\">Size</span>\n            <button class=\"less\" id=\"lessSize\"><i class=\"fa fa-minus\"></i></button>\n            <input type=\"text\"  value={state.fontSize}/>\n            <button class=\"more\" id=\"moreSize\"><i class=\"fa fa-plus\"></i></button>\n        </div>\n\n        <div>\n            <span class=\"name\">Color</span>\n            <input type=\"color\" id=\"fontcolor\" value={state.color}/>\n        </div>\n    </div>\n</div>",
    "events": [
      {
        "name": "onClick",
        "index": 0,
        "id": "lessheight",
        "reducer": {
          "reducer": "let height = Number(state.height.split(\"px\")[0])-1;\nstate.height = height+\"px\";\n",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onHeightChange",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "name": "onClick",
        "index": 1,
        "id": "moreheight",
        "reducer": {
          "reducer": "let height = Number(state.height.split(\"px\")[0])+1;\nstate.height = height+\"px\";\n",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onHeightChange",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "name": "onClick",
        "index": 2,
        "id": "lesswidth",
        "reducer": {
          "reducer": "let width = Number(state.width.split(\"px\")[0])-1;\nstate.width = width+\"px\";",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onWidthChange",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "name": "onClick",
        "index": 3,
        "id": "morewidth",
        "reducer": {
          "reducer": "let width = Number(state.width.split(\"px\")[0])+1;\nstate.width = width+\"px\";",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onWidthChange",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "name": "onClick",
        "index": 4,
        "id": "lesstop",
        "reducer": {
          "reducer": "let top = Number(state.top.split(\"px\")[0])-1;\nstate.top = top+\"px\";\n",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onTopChange",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "name": "onClick",
        "index": 5,
        "id": "moretop",
        "reducer": {
          "reducer": "let top = Number(state.top.split(\"px\")[0])+1;\nstate.top = top+\"px\";\n",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onTopChange",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "name": "onClick",
        "index": 6,
        "id": "moreleft",
        "reducer": {
          "reducer": "let left = Number(state.left.split(\"px\")[0])-1;\nstate.left = left+\"px\";\n",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onLeftChange",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "name": "onClick",
        "index": 7,
        "id": "lessleft",
        "reducer": {
          "reducer": "let left = Number(state.left.split(\"px\")[0])+1;\nstate.left = left+\"px\";",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onLeftChange",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "name": "onClick",
        "index": 8,
        "id": "lessborder",
        "reducer": {
          "reducer": "let borderWidth = Number(state.borderWidth.split(\"px\")[0])-1;\nstate.borderWidth = borderWidth+\"px\";",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onBorderWidthChange",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "name": "onClick",
        "index": 9,
        "id": "moreborder",
        "reducer": {
          "reducer": "let borderWidth = Number(state.borderWidth.split(\"px\")[0])+1;\nstate.borderWidth = borderWidth+\"px\";",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onBorderWidthChange",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "name": "onClick",
        "index": 10,
        "id": "morespace",
        "reducer": {
          "reducer": "let space = Number(state.space.split(\"px\")[0])+1;\nstate.space = space+\"px\";",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onPaddingChange",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "name": "onClick",
        "index": 11,
        "id": "lessspace",
        "reducer": {
          "reducer": "let space = Number(state.space.split(\"px\")[0])-1;\nstate.space = space+\"px\";",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onPaddingChange",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "name": "onClick",
        "index": 13,
        "id": "lessSize",
        "reducer": {
          "reducer": "let fontSize = Number(state.fontSize.split(\"px\")[0])-1;\nstate.fontSize = fontSize+\"px\";",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onFontSizeChange",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "name": "onClick",
        "index": 14,
        "id": "moreSize",
        "reducer": {
          "reducer": "let fontSize = Number(state.fontSize.split(\"px\")[0])+1;\nstate.fontSize = fontSize+\"px\";\n",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onFontSizeChange",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "id": "id",
        "index": 15,
        "name": "onChange",
        "reducer": {
          "reducer": "state.classes = e.currentTarget.value",
          "publishes": []
        }
      },
      {
        "id": "fontcolor",
        "index": 16,
        "name": "onChange",
        "reducer": {
          "reducer": "state.fontColor = e.target.value;",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onFontColorChange",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "id": "morecolor",
        "index": 17,
        "name": "onChange",
        "reducer": {
          "reducer": "state.borderColor = e.target.value;",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onBorderColorChange",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "id": "properties",
        "index": 17,
        "name": "onMouseMove",
        "reducer": {
          "reducer": "e.stopPropagation()",
          "publishes": []
        }
      },
      {
        "id": "properties",
        "index": 18,
        "name": "onMouseDown",
        "reducer": {
          "reducer": "e.stopPropagation()",
          "publishes": []
        }
      },
      {
        "id": "properties",
        "index": 19,
        "name": "onMouseOver",
        "reducer": {
          "reducer": "\te.stopPropagation()\n",
          "publishes": []
        }
      },
      {
        "id": "properties",
        "index": 20,
        "name": "onMouseUp",
        "reducer": {
          "reducer": "\te.stopPropagation()\n",
          "publishes": []
        }
      },
      {
        "id": "borderStyle",
        "index": 21,
        "name": "onChange",
        "reducer": {
          "reducer": "state.borderStyle = e.target.value;\n",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onBorderStyleChange",
              "publishCondition": "true"
            }
          ]
        }
      }
    ],
    "state": "{\n  \"style\":{\n      \"top\": \"100px\",\n      \"left\": \"408px\",\n      \"position\": \"absolute\"\n  },\n  \"height\": \"100px\",\n  \"width\":\"100px\",\n  \"top\":\"100px\",\n  \"left\":\"100px\",\n  \"borderWidth\":\"100px\",\n  \"borderColor\": \"#874a4a\",\n  \"space\" :\"100px\",\n  \"fontSize\": \"10px\",\n  \"color\": \"#ffffff\"\n}",
    "style": ".properties {\nborder: 1px solid #2C3134;\n width: 165px;\n font-size: 10px;\n background: rgb(64, 64, 64);\n color: rgba(255,255,255,0.5);\n}\n\n.properties input{\n    width: 50px;\n    padding: 5px;\n    margin-left: 4px;\n}\n\n.properties input.long{\n\twidth: 100px;\n}\n\n.properties > div {\n    border: 1px solid #2C3134;\n    padding: 8px;\n}\n\n.properties > div > div:not(:first-child){\n    margin-top:7px;\n}\n\nspan.name {\n    display: inline-block;\n    width: 40px;\n}\n\n.properties .space{\n border: 1px solid #2C3134;\n}\n\n.less{\n    height: 21px;\n    width: 21px;\n    border: 1px solid #2C3134;\n}\n\n.more{\n    height: 21px;\n    width: 21px;\n    border: 1px solid #2C3134;\n}\n\n.properties select {\n\tborder: 1px solid black;\n    font-size: 10px;\n    background: #2b2b2b;\n    color: rgba(255,255,255,0.5);\n    width: 100px;\n    padding: 5px;\n    margin-left: 4px;\n}",
    "children": [],
    "id": 285,
    "config": "{}",
    "trueName": "PropertiesControl"
  },
  {
    "name": "Div",
    "markup": "<div className=\"Div\" style={state.style} id=\"div123\" >\n    {\n    state.showOptions?\n    <select name=\"mode\" value={state.mode} id=\"mode\">\n        <optgroup label=\"Tools\">\n            <option value=\"Draw\">Draw</option>\n            <option value=\"Move\">Move</option>\n            <option value=\"Resize\">Resize</option>\n            <option value=\"Delete\">Delete</option>\n            <option value=\"Save\">Save</option>\n            <option value=\"Edit\">Edit</option>\n            <option value=\"Events\">Events</option>\n        </optgroup>\n    </select>\n    :null}\n    <PropertiesControl></PropertiesControl>\n        <EventsBuilder></EventsBuilder>\n    <Div></Div>\n</div>",
    "events": [
      {
        "name": "onMouseOver",
        "index": 0,
        "id": "div123",
        "reducer": {
          "reducer": "if(state.mode===\"Draw\"){\n\tstate.style.cursor = \"crosshair\";\n}\n\te.stopPropagation();\n\n",
          "publishes": []
        }
      },
      {
        "name": "onMouseDown",
        "index": 1,
        "id": "div123",
        "reducer": {
          "reducer": "function create(type, x, y, text){\n\t  var item = document.createElement(type);\n      item.style.position = \"fixed\";\n      item.style.left = x+ \"px\";\n      item.style.top = y + \"px\";\n      item.style['border-width'] = \"1px\";\n      item.style['border-color'] = \"green\";\n      item.style['border-style'] = \"solid\";\n      item.id = \"div\"+~~(Math.random()*100000);\n      if(text){\n      \titem.innerText = text;\n      }\n      return item;\n}\n\nlet target = e.target;\n\nif(e.button===0){\n  if(state.mode===\"Draw\"){\n  \t\t  state.clientX = e.clientX;\n          state.clientY = e.clientY;\n          var div = create(\"div\", e.clientX, e.clientY);\n          var parent = e.target;\n          parent.appendChild(div);\n\n          state.divId = div.id;\n          state.origin = true;\n  }\n}\n\nif(state.mode===\"Move\"){\n\tstate.style.cursor = \"grabbing\";\n    state.grabbing = true;\n}\ndelete window.eClientY;\ndelete window.eClientX;\n\n\n\te.stopPropagation()\n    console.log(\"mouseDown\")",
          "publishes": []
        }
      },
      {
        "name": "onMouseMove",
        "index": 2,
        "id": "div123",
        "reducer": {
          "reducer": "if(state.mode===\"Draw\"){\n  if(state.origin){\n      var div= document.getElementById(state.divId);\n      var rect = div.getBoundingClientRect();\n      div.style.width = e.clientX - rect.left;\n      div.style.height = e.clientY - rect.top;\n  }\n}\n\nif(\tstate.style.cursor == \"grabbing\" && state.grabbing) {\n\tvar rect = e.target.getBoundingClientRect();\n\t\n    window.eClientY = window.eClientY || e.clientY;\n\twindow.eClientX = window.eClientX || e.clientX;\n    \n    e.target.style.top = (-window.eClientY + e.clientY) + rect.top  + \"px\";\n    e.target.style.left = (-window.eClientX + e.clientX) + rect.left + \"px\";\n\n\twindow.eClientY = e.clientY;\n\twindow.eClientX = e.clientX;\n}\n\ne.stopPropagation()\nconsole.log(\"mouseMove\")\n",
          "publishes": []
        }
      },
      {
        "name": "onMouseUp",
        "index": 3,
        "id": "div123",
        "reducer": {
          "reducer": "\nif(state.mode===\"Draw\"){\n\tif(e.button===0){\n\t\tstate.origin = false;\n\t}\n\tlet createdDiv = document.getElementById(state.divId);\n    delete state.divId;\n   \n   if(state.clientX==e.clientX&&state.clientY==e.clientY){\n\t   state.showOptions = !state.showOptions;\n   }\n   else{\n   \n    state.Div.push({\n    \tstyle: {\n          position: createdDiv.style.position,\n          top: createdDiv.style.top,\n          left: createdDiv.style.left,\n          height: createdDiv.style.height,\n          width: createdDiv.style.width,\n          borderWidth: createdDiv.style[\"border-width\"],\n          borderStyle: createdDiv.style[\"border-style\"],\n          borderColor: createdDiv.style[\"border-color\"]\n        },\n        Div: [],\n        id: createdDiv.id,\n        mode:\"Draw\",\n        EventsBuilder:[],\n        PropertiesControl:[state.PropertiesControl[0]]\n    })\n    }\n    createdDiv.remove();\n}\nif(state.mode===\"Move\"){\n\te.target.style.cursor = \"pointer\";\n    state.grabbing = false;\n\tstate.style.top = e.target.style.top;\n    state.style.left = e.target.style.left;\n}\n\nif(state.mode===\"Resize\"){\n\tstate.style.height = e.target.style.height;\n    state.style.width = e.target.style.width;\n}\n\n\te.stopPropagation()\nconsole.log(\"mouseUp\")\n",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onDrawFinish",
              "publishCondition": "state.mode==='Draw' && e.button ===0"
            },
            {
              "publishable": true,
              "publishName": "onMoveFinish",
              "publishCondition": "state.mode===\"Move\""
            },
            {
              "publishable": true,
              "publishName": "onResizeFinish",
              "publishCondition": "state.mode===\"Resize\""
            }
          ]
        }
      },
      {
        "id": "Div",
        "index": 4,
        "name": "onDrawFinish",
        "reducer": {
          "reducer": "state.Div[e.index] = e.state;\n",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onDrawFinish",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "id": "mode",
        "index": 5,
        "name": "onMouseDown",
        "reducer": {
          "reducer": "e.stopPropagation();",
          "publishes": []
        }
      },
      {
        "id": "mode",
        "index": 7,
        "name": "onMouseUp",
        "reducer": {
          "reducer": "e.stopPropagation();",
          "publishes": []
        }
      },
      {
        "id": "Div",
        "index": 8,
        "name": "onMoveFinish",
        "reducer": {
          "reducer": "state.Div[e.index] = e.state;\n",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onMoveFinish",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "id": "Div",
        "index": 9,
        "name": "onResizeFinish",
        "reducer": {
          "reducer": "state.Div[e.index] = e.state;\n",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onResizeFinish",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "id": "Div",
        "index": 10,
        "name": "onDelete",
        "reducer": {
          "reducer": "state.Div.splice(e.index,1);\n",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onModeChange",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "id": "PropertiesControl",
        "index": 11,
        "name": "onHeightChange",
        "reducer": {
          "reducer": "state.style.height = e.state.height;\nstate.PropertiesControl[0].height = state.style.height;\n",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onStyleChange",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "id": "mode",
        "index": 12,
        "name": "onChange",
        "reducer": {
          "reducer": "state.mode = e.target.value;\nif(state.mode === \"Resize\"){\n\tstate.style.resize = \"both\";\n    state.style.overflow = \"auto\";\n} else {\n  \tdelete state.style.resize;\n  \tdelete state.style.overflow;\n} if( state.mode===\"Edit\"){ \n  \tstate.PropertiesControl[0].style.display = \"block\";\n  \tstate.PropertiesControl[0].style.top = \"0px\";\n  \tstate.PropertiesControl[0].style.left = \"-170px\";\n  \tstate.PropertiesControl[0].height = state.style.height;\n  \tstate.PropertiesControl[0].width = state.style.width;\n  \tstate.PropertiesControl[0].top = state.style.top;\n  \tstate.PropertiesControl[0].left = state.style.left;\n  \tstate.PropertiesControl[0].borderWidth = state.style.borderWidth;\n} else {\n  \tstate.PropertiesControl[0].style.display = \"none\";\n} if (state.mode===\"Save\"){ \n  \tlet index = components.findIndex(component=>component.name===\"Div\")\n  \tcomponents[index].state = JSON.stringify(state);\n  \tlocalStorage.setItem(\"ui-editor\", JSON.stringify(components));\n} \n\nif(state.mode===\"Events\"){\ndebugger;\n  \tlet index = components.findIndex(component=>component.name===\"Div\")\n\tlet events = state.events || {\n    \t\"onClick\": \"\"\n    };\n    components[index].events.filter(event=>event.id===state.id).forEach(event=>{\n    \tevents[event.name] = event.reducer.reducer;\n    })\n\tstate.EventsBuilder=[{\n    \"style\": {\n        \"top\": \"0px\",\n        \"left\": \"-150px\",\n        \"position\": \"absolute\"\n    },\n    \"textAreaStyle\": {\n        \"position\": \"absolute\",\n        \"top\": \"40px\",\n        \"left\": \"0px\",\n        \"width\": \"150px\"\n    },\n    \"eventName\": \"onClick\",\n    \"eventReducer\": \"\",\n    \"events\": events\n}];\n}else {\n\tstate.EventsBuilder=[];\n}",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onDelete",
              "publishCondition": "state.mode === \"Delete\""
            },
            {
              "publishable": true,
              "publishName": "onModeChange",
              "publishCondition": "state.mode !== \"Delete\""
            }
          ]
        }
      },
      {
        "id": "Div",
        "index": 13,
        "name": "onStyleChange",
        "reducer": {
          "reducer": "state.Div[e.index] = e.state;\n",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onStyleChange",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "id": "PropertiesControl",
        "index": 14,
        "name": "onWidthChange",
        "reducer": {
          "reducer": "state.style.width = e.state.width;\nstate.PropertiesControl[0].width = state.style.width;\n",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onStyleChange",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "id": "PropertiesControl",
        "index": 15,
        "name": "onTopChange",
        "reducer": {
          "reducer": "state.style.top = e.state.top;\nstate.PropertiesControl[0].top = state.style.top;\n",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onStyleChange",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "id": "PropertiesControl",
        "index": 16,
        "name": "onLeftChange",
        "reducer": {
          "reducer": "state.style.left = e.state.left;\nstate.PropertiesControl[0].left = state.style.left;\n",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onStyleChange",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "id": "PropertiesControl",
        "index": 17,
        "name": "onBorderWidthChange",
        "reducer": {
          "reducer": "state.style['border-width'] = e.state.borderWidth;\nstate.PropertiesControl[0].borderWidth = state.style['border-width'];\n",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onStyleChange",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "id": "Div",
        "index": 18,
        "name": "onModeChange",
        "reducer": {
          "reducer": "state.Div[e.index] = e.state;\n",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onModeChange",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "id": "PropertiesControl",
        "index": 18,
        "name": "onBorderColorChange",
        "reducer": {
          "reducer": "state.style['border-color'] = e.state.borderColor;\nstate.PropertiesControl[0].borderColor = state.style['border-color'];\n",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onStyleChange",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "id": "PropertiesControl",
        "index": 19,
        "name": "onBorderStyleChange",
        "reducer": {
          "reducer": "state.style['border-style'] = e.state.borderStyle;\nstate.PropertiesControl[0].borderStyle = state.style['border-style'];\n",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onStyleChange",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "id": "EventsBuilder",
        "index": 20,
        "name": "onSubmit",
        "reducer": {
          "reducer": "state.EventsBuilder = [e.state];\nstate.events = e.state.events;",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onEventsChange",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "id": "Div",
        "index": 21,
        "name": "onEventsChange",
        "reducer": {
          "reducer": "state.Div[e.index] = e.state;\n",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onEventsChange",
              "publishCondition": "true"
            }
          ]
        }
      }
    ],
    "state": "{\"style\":{\"position\":\"fixed\",\"top\":\"226px\",\"left\":\"398px\",\"height\":\"242px\",\"width\":\"466px\",\"borderWidth\":\"1px\",\"borderStyle\":\"solid\",\"borderColor\":\"green\",\"cursor\":\"crosshair\",\"border-width\":\"9px\",\"border-color\":\"#545496\",\"border-style\":\"dashed\"},\"Div\":[{\"style\":{\"position\":\"fixed\",\"top\":\"280px\",\"left\":\"436px\",\"height\":\"173px\",\"width\":\"353px\",\"borderWidth\":\"1px\",\"borderStyle\":\"solid\",\"borderColor\":\"green\",\"cursor\":\"crosshair\"},\"Div\":[{\"style\":{\"position\":\"fixed\",\"top\":\"341px\",\"left\":\"518px\",\"height\":\"73px\",\"width\":\"97px\",\"borderWidth\":\"1px\",\"borderStyle\":\"solid\",\"borderColor\":\"green\"},\"Div\":[],\"id\":\"div59301\",\"mode\":\"Draw\",\"EventsBuilder\":[],\"PropertiesControl\":[{\"style\":{\"top\":\"0px\",\"left\":\"-170px\",\"position\":\"absolute\",\"display\":\"none\"},\"id\":\"containement\",\"class\":\"black setup\",\"height\":\"242px\",\"width\":\"466px\",\"top\":\"226px\",\"left\":\"398px\",\"color\":\"#874a4a\",\"space\":\"100px\",\"fontSize\":\"10px\",\"borderWidth\":\"1px\",\"borderColor\":\"#545496\",\"borderStyle\":\"dashed\"}]}],\"mode\":\"Draw\",\"EventsBuilder\":[],\"PropertiesControl\":[{\"style\":{\"top\":\"0px\",\"left\":\"-170px\",\"position\":\"absolute\",\"display\":\"none\"},\"id\":\"containement\",\"class\":\"black setup\",\"height\":\"242px\",\"width\":\"466px\",\"top\":\"226px\",\"left\":\"398px\",\"color\":\"#874a4a\",\"space\":\"100px\",\"fontSize\":\"10px\",\"borderWidth\":\"1px\",\"borderColor\":\"#545496\",\"borderStyle\":\"dashed\"}],\"clientX\":518,\"clientY\":341,\"origin\":false,\"showOptions\":true,\"events\":{\"onClick\":\"alert();\"},\"grabbing\":false}],\"mode\":\"Save\",\"PropertiesControl\":[{\"style\":{\"top\":\"0px\",\"left\":\"-170px\",\"position\":\"absolute\",\"display\":\"none\"},\"id\":\"containement\",\"class\":\"black setup\",\"height\":\"242px\",\"width\":\"466px\",\"top\":\"226px\",\"left\":\"398px\",\"color\":\"#874a4a\",\"space\":\"100px\",\"fontSize\":\"10px\",\"borderWidth\":\"1px\",\"borderColor\":\"#545496\",\"borderStyle\":\"dashed\"}],\"grabbing\":false,\"origin\":false,\"divId\":\"div46035\",\"id\":\"div123\",\"showOptions\":true,\"clientX\":468,\"clientY\":345,\"eventReducer\":\"\",\"events\":{\"onClick\":\"alert('onClick success')\",\"onMouseOut\":\"alert('mouse out success')\"},\"EventsBuilder\":[]}",
    "style": ".Div{\n    position: fixed;\n    background-color: black;\n    border: 1px solid red;\n\ttop: 25%;\n    left: 20%;\n    cursor: \"move\";\n}\n",
    "children": [],
    "id": 198,
    "config": "{\"Resizable\":{\"override\":false},\"Div\":{\"override\":true},\"Resizer\":{\"override\":true},\"PropertiesControl\":{\"override\":true},\"Events\":{\"override\":true},\"EventsBuilder\":{\"override\":true}}",
    "trueName": "Div"
  },
  {
    "name": "Input",
    "markup": "<input type=\"text\" value=\"hello\"></input>",
    "events": [],
    "state": "{}",
    "style": "",
    "children": [],
    "id": 604,
    "config": "{}"
  },
  {
    "name": "H1",
    "markup": "<h1>hello</h1>",
    "events": [],
    "state": "{}",
    "style": "",
    "children": [],
    "id": 293,
    "config": "{}"
  },
  {
    "name": "H2",
    "markup": "<h2>Hello</h2>",
    "events": [],
    "state": "{}",
    "style": "",
    "children": [],
    "id": 73,
    "config": "{}"
  },
  {
    "name": "H3",
    "markup": "<h3>Hello</h3>",
    "events": [],
    "state": "{}",
    "style": "",
    "children": [],
    "id": 260,
    "config": "{}"
  },
  {
    "name": "H4",
    "markup": "<h4>Hello</h4>",
    "events": [],
    "state": "{}",
    "style": "",
    "children": [],
    "id": 487,
    "config": "{}"
  },
  {
    "name": "H5",
    "markup": "<h5>Hello</h5>",
    "events": [],
    "state": "{}",
    "style": "",
    "children": [],
    "id": 875,
    "config": "{}"
  },
  {
    "name": "Editor",
    "markup": "<div className=\"Div\" style={state.style} id=\"DivElement\">\n<select name=\"mode\" value={state.mode} id=\"mode\">\n  <option value=\"\"></option>\n  <option value=\"Load\">Load</option>\n  <option value=\"Save\">Save</option>\n  <option value=\"Edit\">Edit</option>\n</select>\n<select id=\"components\" value={state.changedComponent}>\n{state.components.map(name=><option>{name}</option>)}\n</select>\n<PropertiesControl></PropertiesControl><H2></H2>\n</div>",
    "events": [
      {
        "name": "onMouseOver",
        "index": 0,
        "id": "DivElement",
        "reducer": {
          "reducer": "if(state.mode===\"Draw\"){\n\tstate.style.cursor = \"crosshair\";\n}\n\te.stopPropagation();\n\n",
          "publishes": []
        }
      },
      {
        "name": "onMouseDown",
        "index": 1,
        "id": "DivElement",
        "reducer": {
          "reducer": "function create(type, x, y, text){\n\t  var item = document.createElement(type);\n      item.style.position = \"fixed\";\n      item.style.left = x+ \"px\";\n      item.style.top = y + \"px\";\n      item.style['border-width'] = \"1px\";\n      item.style['border-color'] = \"green\";\n      item.style['border-style'] = \"solid\";\n      item.id = Math.random();\n      if(text){\n      \titem.innerText = text;\n      }\n      return item;\n}\n\nlet target = e.target;\n\nif(e.button===0 && target.type!==\"text\"){\n  if(state.mode===\"Draw\"){\n\t\n      var div = create(\"div\", e.clientX, e.clientY);\n      var parent = e.target;\n      parent.appendChild(div);\n\n      state.divId = div.id;\n      state.origin = true;\n  }\n}\n\nif(state.mode===\"Move\"){\n\tstate.style.cursor = \"grabbing\";\n    state.grabbing = true;\n}\ndelete window.eClientY;\ndelete window.eClientX;\n\te.stopPropagation()\n\n",
          "publishes": []
        }
      },
      {
        "name": "onMouseMove",
        "index": 2,
        "id": "DivElement",
        "reducer": {
          "reducer": "if(state.mode===\"Draw\"){\n  if(state.origin){\n      var div= document.getElementById(state.divId);\n      var rect = div.getBoundingClientRect();\n      div.style.width = e.clientX - rect.left;\n      div.style.height = e.clientY - rect.top;\n  }\n}\n\nif(\tstate.style.cursor == \"grabbing\" && state.grabbing) {\n\tvar rect = e.target.getBoundingClientRect();\n\t\n    window.eClientY = window.eClientY || e.clientY;\n\twindow.eClientX = window.eClientX || e.clientX;\n    \n    e.target.style.top = (-window.eClientY + e.clientY) + rect.top  + \"px\";\n    e.target.style.left = (-window.eClientX + e.clientX) + rect.left + \"px\";\n\n\twindow.eClientY = e.clientY;\n\twindow.eClientX = e.clientX;\n}\n\te.stopPropagation()\n\n\n\n",
          "publishes": []
        }
      },
      {
        "name": "onMouseUp",
        "index": 3,
        "id": "DivElement",
        "reducer": {
          "reducer": "if(state.mode===\"Draw\"){\n\tif(e.button===0){\n\t\tstate.origin = false;\n\t}\n\tlet createdDiv = document.getElementById(state.divId);\n    delete state.divId;\n    state.Div.push({\n    \tstyle: {\n          position: createdDiv.style.position,\n          top: createdDiv.style.top,\n          left: createdDiv.style.left,\n          height: createdDiv.style.height,\n          width: createdDiv.style.width,\n          borderWidth: createdDiv.style[\"border-width\"],\n          borderStyle: createdDiv.style[\"border-style\"],\n          borderColor: createdDiv.style[\"border-color\"]\n        },\n        Div: [],\n        mode:\"Draw\",\n        PropertiesControl:[state.PropertiesControl[0]]\n    })\n    createdDiv.remove();\n}\nif(state.mode===\"Move\"){\n\te.target.style.cursor = \"pointer\";\n    state.grabbing = false;\n\tstate.style.top = e.target.style.top;\n    state.style.left = e.target.style.left;\n}\n\nif(state.mode===\"Resize\"){\n\tstate.style.height = e.target.style.height;\n    state.style.width = e.target.style.width;\n}\n\n\te.stopPropagation()\n\n",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onDrawFinish",
              "publishCondition": "state.mode==='Draw' && e.button ===0"
            },
            {
              "publishable": true,
              "publishName": "onMoveFinish",
              "publishCondition": "state.mode===\"Move\""
            },
            {
              "publishable": true,
              "publishName": "onResizeFinish",
              "publishCondition": "state.mode===\"Resize\""
            }
          ]
        }
      },
      {
        "id": "Div",
        "index": 4,
        "name": "onDrawFinish",
        "reducer": {
          "reducer": "state.Div[e.index] = e.state;\n",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onDrawFinish",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "id": "mode",
        "index": 5,
        "name": "onMouseDown",
        "reducer": {
          "reducer": "e.stopPropagation();",
          "publishes": []
        }
      },
      {
        "id": "mode",
        "index": 7,
        "name": "onMouseUp",
        "reducer": {
          "reducer": "e.stopPropagation();",
          "publishes": []
        }
      },
      {
        "id": "Div",
        "index": 8,
        "name": "onMoveFinish",
        "reducer": {
          "reducer": "state.Div[e.index] = e.state;\n",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onMoveFinish",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "id": "Div",
        "index": 9,
        "name": "onResizeFinish",
        "reducer": {
          "reducer": "state.Div[e.index] = e.state;\n",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onResizeFinish",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "id": "Div",
        "index": 10,
        "name": "onDelete",
        "reducer": {
          "reducer": "state.Div.splice(e.index,1);\n",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onModeChange",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "id": "PropertiesControl",
        "index": 11,
        "name": "onHeightChange",
        "reducer": {
          "reducer": "state.style.height = e.state.height;\nstate.PropertiesControl[0].height = state.style.height;\n",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onStyleChange",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "id": "mode",
        "index": 12,
        "name": "onChange",
        "reducer": {
          "reducer": "state.mode = e.target.value;\n\nswitch(state.mode){\n    case \"Edit\":\n        state.PropertiesControl[0].style.display = \"block\";\n        state.PropertiesControl[0].style.top = \"0px\";\n        state.PropertiesControl[0].style.left = \"-170px\";\n        state.PropertiesControl[0].height = state.style.height;\n        state.PropertiesControl[0].width = state.style.width;\n        state.PropertiesControl[0].top = state.style.top;\n        state.PropertiesControl[0].left = state.style.left;\n        state.PropertiesControl[0].borderWidth = state.style.borderWidth;\n        break;\n    case \"Save\":\n        let index = components.findIndex(component=>component.name===\"Div\")\n        components[index].state = JSON.stringify(state);\n        localStorage.setItem(\"ui-editor\", JSON.stringify(components));\n        break;\n    case \"Load\":\n        state.components = [\"\",...components.map(component=>component.name)]\n        break;\n}",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onDelete",
              "publishCondition": "state.mode === \"Delete\""
            },
            {
              "publishable": true,
              "publishName": "onModeChange",
              "publishCondition": "state.mode !== \"Delete\""
            }
          ]
        }
      },
      {
        "id": "Div",
        "index": 13,
        "name": "onStyleChange",
        "reducer": {
          "reducer": "state.Div[e.index] = e.state;\n",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onStyleChange",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "id": "PropertiesControl",
        "index": 14,
        "name": "onWidthChange",
        "reducer": {
          "reducer": "state.style.width = e.state.width;\nstate.PropertiesControl[0].width = state.style.width;\n",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onStyleChange",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "id": "PropertiesControl",
        "index": 15,
        "name": "onTopChange",
        "reducer": {
          "reducer": "state.style.top = e.state.top;\nstate.PropertiesControl[0].top = state.style.top;\n",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onStyleChange",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "id": "PropertiesControl",
        "index": 16,
        "name": "onLeftChange",
        "reducer": {
          "reducer": "state.style.left = e.state.left;\nstate.PropertiesControl[0].left = state.style.left;\n",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onStyleChange",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "id": "PropertiesControl",
        "index": 17,
        "name": "onBorderWidthChange",
        "reducer": {
          "reducer": "state.style['border-width'] = e.state.borderWidth;\nstate.PropertiesControl[0].borderWidth = state.style['border-width'];\n",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onStyleChange",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "id": "Div",
        "index": 18,
        "name": "onModeChange",
        "reducer": {
          "reducer": "state.Div[e.index] = e.state;\n",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onModeChange",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "id": "PropertiesControl",
        "index": 18,
        "name": "onBorderColorChange",
        "reducer": {
          "reducer": "state.style['border-color'] = e.state.borderColor;\nstate.PropertiesControl[0].borderColor = state.style['border-color'];\n",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onStyleChange",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "id": "PropertiesControl",
        "index": 19,
        "name": "onBorderStyleChange",
        "reducer": {
          "reducer": "state.style['border-style'] = e.state.borderStyle;\nstate.PropertiesControl[0].borderStyle = state.style['border-style'];\n",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onStyleChange",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "id": "components",
        "index": 20,
        "name": "onChange",
        "reducer": {
          "reducer": "debugger;\nlet changedComponent = e.target.value;\nif(changedComponent && !state.changedComponent){\n    components[14].markup = components[14].markup.replace(`<PropertiesControl></PropertiesControl>`,`<PropertiesControl></PropertiesControl><${changedComponent}></${changedComponent}>`)\n}\nelse if(state.changedComponent){\n\tcomponents[14].markup = components[14].markup.replace(`<PropertiesControl></PropertiesControl><${state.changedComponent}></${state.changedComponent}>`,`<PropertiesControl></PropertiesControl><${changedComponent}></${changedComponent}>`)\n}\nstate.changedComponent = changedComponent;\ncomponents[14].state = JSON.stringify(state);\ncomponents.forEach(component=>delete window[component.name]);\nwindow.refreshComponents();",
          "publishes": []
        }
      }
    ],
    "state": "{\"style\":{\"position\":\"fixed\",\"top\":\"23px\",\"left\":\"185px\",\"height\":\"679px\",\"width\":\"591px\",\"border\":\"1px solid green\",\"cursor\":\"crosshair\"},\"selectedComponent\":\"\",\"mode\":\"Load\",\"components\":[\"\",\"Resizable\",\"Movable\",\"CanvasControls\",\"PropertiesControl\",\"Div\",\"Input\",\"Button\",\"Span\",\"P\",\"H1\",\"H2\",\"H3\",\"H4\",\"H5\",\"Editor\",\"CanvasControl\",\"H6\",\"EventsBuilder\",\"Hello\"],\"PropertiesControl\":[{\"style\":{\"top\":\"0px\",\"left\":\"-170px\",\"position\":\"absolute\",\"display\":\"none\"},\"id\":\"containement\",\"class\":\"black setup\",\"height\":\"679px\",\"width\":\"591px\",\"top\":\"23px\",\"left\":\"185px\",\"color\":\"#874a4a\",\"space\":\"100px\",\"fontSize\":\"10px\"}],\"grabbing\":false,\"divId\":\"0.9794908078276479\",\"origin\":false,\"changedComponent\":\"H2\"}",
    "style": ".Div{\n    position: fixed;\n    background-color: black;\n    border: 1px solid red;\n\ttop: 25%;\n    left: 20%;\n    cursor: \"move\";\n}\n",
    "children": [],
    "id": 198,
    "config": "{\"Resizable\":{\"override\":false},\"Div\":{\"override\":false},\"Resizer\":{\"override\":true},\"PropertiesControl\":{\"override\":true}}",
    "trueName": "Editor"
  },
  {
    "name": "CanvasControl",
    "markup": "<div id=\"menu\" style={state.style}>\n    <div id=\"history-control\">\n        <div className={state.undo}>\n            <i className=\"fa fa-undo\"></i>\n            <span>Undo</span>\n\t\t</div>\n        <div className={state.redo}>\n\t\t\t<i className=\"fa fa-redo\"></i>\n        \t<span>Redo</span>\n\t\t</div>\n    </div>\n    <div id=\"content-control\">\n        <div className={state.draw}>\n            <i className=\"fa fa-edit\"></i>\n        \t<span>Draw</span>\n        </div>\n        <div className={state.text}>\n            <i className=\"fa fa-font\"></i>\n        \t<span>Text</span>\n        </div>\n        <div className={state.image}>\n            <i className=\"fas fa-image\"></i>\n        \t<span>Image</span>\n        </div>\n    </div>\n    <div id=\"edit-control\">\n        <div className={state.edit}>\n            <i className=\"fa fa-edit\"></i>\n        \t<span>Edit</span>\n        </div>\n        <div className={state.delete}>\n            <i className=\"fa fa-trash\"></i>\n        \t<span>Delete</span>\n        </div>\n    </div>\n    <div>\n        <div className={state.select}>\n        \t<i className=\"fa fa-mouse-pointer\"></i>\n        \t<span>Select</span>\n        </div>\n    </div>\n</div>",
    "events": [
      {
        "name": "onClick",
        "index": 0,
        "id": "menu",
        "reducer": {
          "reducer": "state.item = e.target.innerText;\n\nswitch (state.item){\n\tcase \"Draw\":\n\t\tstate.text = \"enabled\";\n        state.select = \"enabled\"\n        break;\n\tcase \"Select\":\n\t\tstate.edit = \"enabled\";\n        break;\n}",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onDraw",
              "publishCondition": "state.item === 'Draw'"
            },
            {
              "publishable": true,
              "publishName": "onText",
              "publishCondition": "state.item === 'Text'"
            },
            {
              "publishable": true,
              "publishName": "onSelect",
              "publishCondition": "state.item === 'Select'"
            },
            {
              "publishable": true,
              "publishName": "onEdit",
              "publishCondition": "state.item === 'Edit'"
            },
            {
              "publishable": true,
              "publishName": "onUndo",
              "publishCondition": "state.item === 'Undo'"
            },
            {
              "publishable": true,
              "publishName": "onRedo",
              "publishCondition": "state.item === 'Redo'"
            }
          ]
        }
      }
    ],
    "state": "{\n\t\"undo\":\"enabled\",\n    \"redo\":\"enabled\",\n\t\"draw\":\"enabled\",\n    \"text\":\"disabled\",\n    \"image\":\"disabled\",\n\t\"group\":\"disabled\",\n    \"ungroup\":\"disabled\",\n\t\"duplicate\":\"disabled\",\n    \"delete\":\"disabled\",\n\t\"select\":\"disabled\",\n    \"edit\":\"disabled\",\n    \"save\":\"disabled\",\n    \"load\":\"disabled\",\n    \"style\" : {\n    \t\"top\": \"100px\",\n        \"left\":\"200px\"\n    }\n}",
    "style": "#menu {\n    position: fixed;\n    font-size:10px;\n    user-select: none;\n    color: rgba(255,255,255,0.5);\n    background: rgb(64, 64, 64);\n}\n\n#menu > div > div:hover:not(.disabled){\n    background: rgb(43, 43, 43);\n    color: white;\n}\n\n.disabled{\n    cursor: not-allowed;\n    background: #333333;\n    color: #4a4a4a;\n}\n\n\n\n#menu > div > div span {\n    padding-left: 9px;\n}\n\n#menu > div > div {\n    box-sizing: border-box;\n    padding: 10px;\n    height: 29px;\n}\n\n#history-control {\n    border: 1px solid #2C3134;\n    height: 60px;\n}\n\n#content-control {\n    border: 1px solid #2C3134;\n    height: 90px;\n}\n\n#edit-control {\n    border: 1px solid #2C3134;\n}\n\n#selection-control {\n    border: 1px solid #2C3134;\n    height: 60px;\n}\n",
    "children": [],
    "id": 550,
    "config": "{}",
    "trueName": "CanvasControls_copy"
  },
  {
    "name": "H6",
    "markup": "<h6>Hello</h6>",
    "events": [],
    "state": "{}",
    "style": "",
    "children": [],
    "id": 293,
    "config": "{}"
  },
  {
    "name": "EventsBuilder",
    "markup": "<div class=\"eventsBuilder\" id=\"events\" style={state.style}>    \n    <select name=\"mode\" value={state.eventName} id=\"eventName\">\n        <optgroup label=\"Events\">\n            {Object.keys(state.events).map(event=><option value={event}>{event}</option>)}\n        </optgroup>\n    </select>\n    <textarea id=\"textArea\" style={state.textAreaStyle} value={state.events[state.eventName]}></textarea>\n    </div>",
    "events": [
      {
        "id": "events",
        "index": 3,
        "name": "onMouseMove",
        "reducer": {
          "reducer": "e.stopPropagation();",
          "publishes": []
        }
      },
      {
        "id": "events",
        "index": 4,
        "name": "onMouseDown",
        "reducer": {
          "reducer": "e.stopPropagation();",
          "publishes": []
        }
      },
      {
        "id": "events",
        "index": 5,
        "name": "onMouseOver",
        "reducer": {
          "reducer": "e.stopPropagation();",
          "publishes": []
        }
      },
      {
        "id": "events",
        "index": 6,
        "name": "onMouseUp",
        "reducer": {
          "reducer": "e.stopPropagation();",
          "publishes": []
        }
      },
      {
        "id": "eventName",
        "index": 7,
        "name": "onChange",
        "reducer": {
          "reducer": "state.eventName = e.target.value;\ndebugger;\n",
          "publishes": []
        }
      },
      {
        "id": "events",
        "index": 8,
        "name": "onMouseOut",
        "reducer": {
          "reducer": "console.log(\"Mouse out\");",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onSubmit",
              "publishCondition": "true"
            }
          ]
        }
      },
      {
        "id": "textArea",
        "index": 6,
        "name": "onChange",
        "reducer": {
          "reducer": "state.events[state.eventName]=e.currentTarget.value",
          "publishes": []
        }
      }
    ],
    "state": "{\n    \"style\": {\n        \"top\": \"100px\",\n        \"left\": \"408px\",\n        \"position\": \"absolute\"\n    },\n    \"textAreaStyle\": {\n        \"position\": \"absolute\",\n        \"top\": \"40px\",\n        \"left\": \"0px\",\n        \"width\": \"150px\"\n    },\n    \"eventName\": \"onClick\",\n    \"eventReducer\": \"on\",\n    \"events\": {\n        \"onClick\": \"\",\n        \"onMouseOut\": \"Click\"\n    }\n}",
    "style": "",
    "children": [],
    "id": 168,
    "config": "{}",
    "trueName": "EventsBuilder"
  },
  {
    "name": "Hello",
    "markup": "<h1 {...state}>{state.message}</h1>",
    "events": [],
    "state": "{\n    \"message\": \"Hello\"\n}",
    "style": "",
    "children": [],
    "id": 698,
    "config": "{}",
    "trueName": "Hello"
  },
  {
    "name": "TodoInput",
    "markup": "<input id=\"todoInput\" class=\"new-todo\" placeholder=\"What needs to be done?\" value={state.value}></input>",
    "events": [
      {
        "id": "todoInput",
        "index": 0,
        "name": "onChange",
        "reducer": {
          "reducer": "state.value = e.currentTarget.value;",
          "publishes": []
        }
      },
      {
        "id": "todoInput",
        "index": 1,
        "name": "onKeyPress",
        "reducer": {
          "reducer": "if(event.key === 'Enter'){\n\tstate.value=\"\";\n}",
          "publishes": [
            {
              "publishable": true,
              "publishName": "onNewTodo",
              "publishCondition": "event.key === 'Enter' && e.currentTarget.value!==\"\""
            }
          ]
        }
      }
    ],
    "state": "{\n    \"value\": \"\"\n}",
    "style": "\n.new-todo, .edit {\n    position: relative;\n    margin: 0;\n    width: 100%;\n    font-size: 24px;\n    font-family: inherit;\n    font-weight: inherit;\n    line-height: 1.4em;\n    border: 0;\n    color: inherit;\n    padding: 6px;\n    border: 1px solid #999;\n    box-shadow: inset 0 -1px 5px 0 rgb(0 0 0 / 20%);\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n\n.new-todo {\n    padding: 16px 16px 16px 60px;\n    border: none;\n    background: rgba(0, 0, 0, 0.003);\n    box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);\n}\n",
    "children": [],
    "id": 806,
    "config": "{}",
    "trueName": "TodoInput"
  },
  {
    "name": "TodoItem",
    "markup": "<div class=\"view\"><input class=\"toggle\" type=\"checkbox\"></input><label >sadf</label><button class=\"destroy\">x</button></div>",
    "events": [],
    "state": "{}",
    "style": ".view .toggle {\n    text-align: center;\n    width: 40px;\n    height: auto;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    margin: auto 0;\n    border: none;\n    -webkit-appearance: none;\n    appearance: none;\n        opacity: 0;\n}\n\n.view label {\n    word-break: break-all;\n    padding: 15px 15px 15px 60px;\n    display: block;\n    line-height: 1.2;\n    transition: color 0.4s;\n}\n\n.view .destroy {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 10px;\n    bottom: 0;\n    width: 40px;\n    height: 40px;\n    margin: auto 0;\n    font-size: 30px;\n    color: #cc9a9a;\n    margin-bottom: 11px;\n    transition: color 0.2s ease-out;\n}\n\n.view .toggle + label {\n    background-image: url(data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E);\n    background-repeat: no-repeat;\n    background-position: center left;\n}\n\n.view  label {\n    word-break: break-all;\n    padding: 15px 15px 15px 60px;\n    display: block;\n    line-height: 1.2;\n    transition: color 0.4s;\n    font-size: 24px;\n}\n\n.view .toggle:checked+label {\n    color: #d9d9d9;\n    text-decoration: line-through;\n\n}\n.view .toggle:checked + label {\n\tbackground-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');\n}",
    "children": [],
    "id": 98,
    "config": "{}",
    "trueName": "TodoItem"
  },
  {
    "name": "TodoFooter",
    "markup": "<footer class=\"todofooter\">\n\t<span class=\"todo-count\">\n    \t<strong>2</strong>\n    <span></span>\n    <span>items</span>\n    <span> left</span>\n    </span>\n    <ul class=\"filters\">\n    \t<li>\n    \t\t<a href=\"#/\" id=\"all\" class={state.filterAll}>All</a>\n    \t</li>\n    \t<span> </span>\n    \t<li>\n    \t\t<a href=\"#/active\" id=\"active\" class={state.filterActive}>Active</a>\n    \t</li>\n    \t<span> </span>\n    \t<li>\n    \t<a href=\"#/completed\" id=\"completed\" class={state.filterCompleted}>Completed</a>\n    \t</li>\n    </ul>\n    <button class=\"clear-completed\">Clear completed</button>\n</footer>",
    "events": [
      {
        "id": "active",
        "index": 0,
        "name": "onClick",
        "reducer": {
          "reducer": "\n    state.filterAll = \"\";\n    state.filterActive = \"selected\";\n    state.filterCompleted = \"\";\n",
          "publishes": []
        }
      },
      {
        "id": "completed",
        "index": 1,
        "name": "onClick",
        "reducer": {
          "reducer": "\n    state.filterAll = \"\";\n    state.filterActive = \"\";\n    state.filterCompleted = \"selected\";\n",
          "publishes": []
        }
      },
      {
        "id": "all",
        "index": 2,
        "name": "onClick",
        "reducer": {
          "reducer": "\n    state.filterAll = \"selected\";\n    state.filterActive = \"\";\n    state.filterCompleted = \"\";\n",
          "publishes": []
        }
      }
    ],
    "state": "{\n    \"filterAll\": \"selected\",\n    \"filterActive\": \"\",\n    \"filterCompleted\": \"\"\n}",
    "style": ".todofooter {\n    color: #777;\n    padding: 10px 15px;\n    height: 20px;\n    text-align: center;\n    border-top: 1px solid #e6e6e6;\n}\n\n.todofooter:before {\n    content: '';\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    height: 50px;\n    overflow: hidden;\n    box-shadow: 0 1px 1px rgb(0 0 0 / 20%), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgb(0 0 0 / 20%), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgb(0 0 0 / 20%);\n}\n\n.todofooter .todo-count {\n    float: left;\n    text-align: left;\n}\n\n.todofooter .todo-count strong {\n    font-weight: 300;\n}\n\n.todofooter .filters {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    position: absolute;\n    right: 0;\n    left: -510;\n}\n\n.todofooter .filters li {\n    display: inline;\n}\n\n.todofooter .clear-completed, html .clear-completed:active {\n    float: right;\n    position: relative;\n    line-height: 20px;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n.todofooter button {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    background: none;\n    font-size: 100%;\n    vertical-align: baseline;\n    font-family: inherit;\n    font-weight: inherit;\n    color: inherit;\n    -webkit-appearance: none;\n    appearance: none;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n\n.todofooter .filters li a.selected {\n    border-color: rgba(175, 47, 47, 0.2);\n}\n\n.todofooter .filters li a:hover {\n    border-color: rgba(175, 47, 47, 0.1);\n}\n\n.todofooter .filters li a {\n    color: inherit;\n    margin: 3px;\n    padding: 3px 7px;\n    text-decoration: none;\n    border: 1px solid transparent;\n    border-radius: 3px;\n}",
    "children": [],
    "id": 255,
    "config": "{}",
    "trueName": "TodoFooter"
  }
]
window.sampleFolders = [
  {
    "type": "noFolder",
    "name": "noFolder",
    "contents": [
      {
        "name": "Headings",
        "contents": [
          "H6",
          "H5",
          "H4",
          "H3",
          "H2",
          "H1"
        ],
        "type": "folder",
        "status": "closed"
      },
      {
        "name": "References",
        "contents": [
          "Movable",
          "Resizable"
        ],
        "type": "folder",
        "status": "closed"
      },
      "CanvasControls",
      "PropertiesControl",
      "Div",
      "Input",
      "Editor",
      "EventsBuilder",
      "Hello",
      "TodoInput",
      "TodoItem"
    ]
  }
]