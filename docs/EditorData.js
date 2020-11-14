window.sampleComponents = [
  {
    "name": "Resizable",
    "markup": "<div id=\"cover\">\n<div id=\"resizable\" style={state.style}>\n    <div class='resizer' id=\"topLeft\"></div>\n    <div class='resizer' id=\"topRight\"></div>\n    <div class='resizer' id=\"bottomLeft\"></div>\n    <div class='resizer' id=\"bottomRight\"></div>\n</div>\n</div>",
    "events": [
      {
        "name": "onMouseDown",
        "index": 0,
        "id": "topLeft",
        "reducers": [
          {
            "reducer": "state.resizeTopLeft=true;\ne.stopPropagation();",
            "publishes": []
          }
        ]
      },
      {
        "name": "onMouseMove",
        "index": 1,
        "id": "topLeft",
        "reducers": [
          {
            "reducer": "if(state.resizeTopLeft){\n\tlet width = Number(state.style.width.split(\"px\")[0]);\n    let left = Number(state.style.left.split(\"px\")[0]);\n\tstate.style.width = (width + left - e.clientX) + \"px\";\n    state.style.left = e.clientX + \"px\";\n    \n    let height = Number(state.style.height.split(\"px\")[0]);\n    let top = Number(state.style.top.split(\"px\")[0]);\n\tstate.style.height = (height + top - e.clientY) + \"px\";\n    state.style.top = e.clientY + \"px\";\n}\ne.stopPropagation();",
            "publishes": []
          }
        ]
      },
      {
        "name": "onMouseUp",
        "index": 2,
        "id": "topLeft",
        "reducers": [
          {
            "reducer": "state.resizeTopLeft=false;\ne.stopPropagation();",
            "publishes": []
          }
        ]
      },
      {
        "name": "onMouseDown",
        "index": 3,
        "id": "bottomLeft",
        "reducers": [
          {
            "reducer": "state.resizeBottomLeft=true;\ne.stopPropagation();",
            "publishes": []
          }
        ]
      },
      {
        "name": "onMouseMove",
        "index": 4,
        "id": "bottomLeft",
        "reducers": [
          {
            "reducer": "if(state.resizeBottomLeftt){\n\n    let height = Number(state.style.height.split(\"px\")[0]);\n    let top = Number(state.style.top.split(\"px\")[0]);\n    \n    e.target.parentElement.style.height = (e.clientY - top +5 ) + \"px\"\n    \n   \tlet width = Number(state.style.width.split(\"px\")[0]);\n    let left = Number(state.style.left.split(\"px\")[0]);\n    e.target.parentElement.style.width = e.clientX - left + 5 + \"px\";\n\n    \n}\ne.stopPropagation();",
            "publishes": []
          }
        ]
      },
      {
        "name": "onMouseUp",
        "index": 5,
        "id": "bottomLeft",
        "reducers": [
          {
            "reducer": "state.resizeBottomLeft=false;\ne.stopPropagation();",
            "publishes": []
          }
        ]
      },
      {
        "name": "onMouseDown",
        "index": 6,
        "id": "bottomRight",
        "reducers": [
          {
            "reducer": "state.resizeBottomRight=true;\ne.stopPropagation();",
            "publishes": []
          }
        ]
      },
      {
        "name": "onMouseUp",
        "index": 7,
        "id": "bottomRight",
        "reducers": [
          {
            "reducer": "state.resizeBottomRight=false;\ne.stopPropagation();",
            "publishes": []
          }
        ]
      },
      {
        "name": "onMouseMove",
        "index": 8,
        "id": "bottomRight",
        "reducers": [
          {
            "reducer": "if(state.resizeBottomRight){\n\n    let height = Number(state.style.height.split(\"px\")[0]);\n    let top = Number(state.style.top.split(\"px\")[0]);\n\tstate.style.height = (e.clientY - top +5 ) + \"px\";\n    \n   \tlet width = Number(state.style.width.split(\"px\")[0]);\n    let left = Number(state.style.left.split(\"px\")[0]);\n\tstate.style.width =  e.clientX - left + 5 + \"px\";\n\n    \n}\ne.stopPropagation();",
            "publishes": []
          }
        ]
      },
      {
        "name": "onMouseOut",
        "id": "topLeft",
        "reducers": [
          {
            "reducer": "state.resizeTopLeft=false;\ne.stopPropagation();",
            "publishes": []
          }
        ]
      },
      {
        "name": "onMouseOut",
        "id": "bottomLeft",
        "reducers": [
          {
            "reducer": "state.resizeBottomLeft=false;\ne.stopPropagation();",
            "publishes": []
          }
        ]
      },
      {
        "name": "onMouseOut",
        "id": "bottomRight",
        "reducers": [
          {
            "reducer": "state.resizeBottomRight=false;\ne.stopPropagation();",
            "publishes": []
          }
        ]
      },
      {
        "name": "onMouseDown",
        "index": 12,
        "id": "topRight",
        "reducers": [
          {
            "reducer": "state.resizeTopRight=true;\ne.stopPropagation();",
            "publishes": []
          }
        ]
      },
      {
        "name": "onMouseUp",
        "index": 13,
        "id": "topRight",
        "reducers": [
          {
            "reducer": "state.resizeTopRight=false;\ne.stopPropagation();",
            "publishes": []
          }
        ]
      },
      {
        "name": "onMouseOut",
        "index": 14,
        "id": "topRight",
        "reducers": [
          {
            "reducer": "state.resizeTopRight=false;\ne.stopPropagation();",
            "publishes": []
          }
        ]
      },
      {
        "name": "onMouseMove",
        "index": 15,
        "id": "topRight",
        "reducers": [
          {
            "reducer": "if(state.resizeTopRight){\n\tlet width = Number(state.style.width.split(\"px\")[0]);\n    let left = Number(state.style.left.split(\"px\")[0]);\n\tstate.style.width = (e.clientX - left + 5) + \"px\";\n    \n    let height = Number(state.style.height.split(\"px\")[0]);\n    let top = Number(state.style.top.split(\"px\")[0]);\n\tstate.style.height = -e.clientY + height + top + \"px\";\n    state.style.top = e.clientY + \"px\";\n}\ne.stopPropagation();",
            "publishes": []
          }
        ]
      },
      {
        "name": "onMouseDown",
        "id": "resizable",
        "reducers": [
          {
            "reducer": "e.target.style.cursor = \"grabbing\";\nstate.grabbing = true;\n",
            "publishes": []
          }
        ]
      },
      {
        "name": "onMouseUp",
        "id": "resizable",
        "reducers": [
          {
            "reducer": "e.target.style.cursor = \"grab\";\nstate.grabbing = false;\n",
            "publishes": []
          }
        ]
      },
      {
        "name": "onMouseMove",
        "index": 18,
        "id": "resizable",
        "reducers": [
          {
            "reducer": "if(state.grabbing) {\n\tvar rect = e.target.getBoundingClientRect();\n\n    e.target.style.top = e.clientY - rect.height/2  + \"px\";\n    e.target.style.left = e.clientX - rect.width/2 + \"px\";\n}\n",
            "publishes": [
              {
                "publishName": "onMoveFinished",
                "publishCondition": true,
                "publishable": false
              }
            ]
          }
        ]
      },
      {
        "name": "onMouseOut",
        "id": "resizable",
        "reducers": [
          {
            "reducer": "",
            "publishes": [
              {
                "publishName": "onMoveFinished",
                "publishCondition": true,
                "publishable": true
              }
            ]
          }
        ]
      },
      {
        "name": "onContextMenu",
        "index": 20,
        "id": "cover",
        "reducers": [
          {
            "reducer": "e.stopPropagation();",
            "publishes": [
              {
                "publishName": "onRightClicked",
                "publishCondition": true,
                "publishable": true
              }
            ]
          }
        ]
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
        "reducers": [
          {
            "reducer": "e.target.style.cursor = \"grabbing\";\nstate.grabbing = true;\nconsole.log(\"Mousedown\")",
            "publishes": []
          }
        ]
      },
      {
        "name": "onMouseUp",
        "index": 1,
        "id": "resizable",
        "reducers": [
          {
            "reducer": "e.target.style.cursor = \"grab\";\nstate.grabbing = false;\nconsole.log(\"mouseup\")",
            "publishes": []
          }
        ]
      },
      {
        "name": "onMouseMove",
        "index": 2,
        "id": "resizable",
        "reducers": [
          {
            "reducer": "if(state.grabbing) {\n\tvar rect = e.target.getBoundingClientRect();\n\n    e.target.style.top = e.clientY - rect.height/2  + \"px\";\n    e.target.style.left = e.clientX - rect.width/2 + \"px\";\n}\nconsole.log(\"mousemove\")",
            "publishes": []
          }
        ]
      },
      {
        "name": "onMouseDown",
        "id": "movable",
        "reducers": [
          {
            "reducer": "e.target.style.cursor = \"grabbing\";\nstate.grabbing = true;\n",
            "publishes": []
          }
        ]
      },
      {
        "name": "onMouseUp",
        "id": "movable",
        "reducers": [
          {
            "reducer": "e.target.style.cursor = \"grab\";\nstate.grabbing = false;\n",
            "publishes": []
          }
        ]
      },
      {
        "name": "onMouseMove",
        "id": "movable",
        "reducers": [
          {
            "reducer": "if(state.grabbing) {\n\tvar rect = e.target.getBoundingClientRect();\n\n    e.target.style.top = e.clientY - rect.height/2  + \"px\";\n    e.target.style.left = e.clientX - rect.width/2 + \"px\";\n}",
            "publishes": []
          }
        ]
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
        "reducers": [
          {
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
        ]
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
        "reducers": [
          {
            "reducer": "let height = Number(state.height.split(\"px\")[0])-1;\nstate.height = height+\"px\";\n",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onHeightChange",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "name": "onClick",
        "index": 1,
        "id": "moreheight",
        "reducers": [
          {
            "reducer": "let height = Number(state.height.split(\"px\")[0])+1;\nstate.height = height+\"px\";\n",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onHeightChange",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "name": "onClick",
        "index": 2,
        "id": "lesswidth",
        "reducers": [
          {
            "reducer": "let width = Number(state.width.split(\"px\")[0])-1;\nstate.width = width+\"px\";",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onWidthChange",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "name": "onClick",
        "index": 3,
        "id": "morewidth",
        "reducers": [
          {
            "reducer": "let width = Number(state.width.split(\"px\")[0])+1;\nstate.width = width+\"px\";",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onWidthChange",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "name": "onClick",
        "index": 4,
        "id": "lesstop",
        "reducers": [
          {
            "reducer": "let top = Number(state.top.split(\"px\")[0])-1;\nstate.top = top+\"px\";\n",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onTopChange",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "name": "onClick",
        "index": 5,
        "id": "moretop",
        "reducers": [
          {
            "reducer": "let top = Number(state.top.split(\"px\")[0])+1;\nstate.top = top+\"px\";\n",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onTopChange",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "name": "onClick",
        "index": 6,
        "id": "moreleft",
        "reducers": [
          {
            "reducer": "let left = Number(state.left.split(\"px\")[0])-1;\nstate.left = left+\"px\";\n",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onLeftChange",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "name": "onClick",
        "index": 7,
        "id": "lessleft",
        "reducers": [
          {
            "reducer": "let left = Number(state.left.split(\"px\")[0])+1;\nstate.left = left+\"px\";",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onLeftChange",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "name": "onClick",
        "index": 8,
        "id": "lessborder",
        "reducers": [
          {
            "reducer": "let borderWidth = Number(state.borderWidth.split(\"px\")[0])-1;\nstate.borderWidth = borderWidth+\"px\";",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onBorderWidthChange",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "name": "onClick",
        "index": 9,
        "id": "moreborder",
        "reducers": [
          {
            "reducer": "let borderWidth = Number(state.borderWidth.split(\"px\")[0])+1;\nstate.borderWidth = borderWidth+\"px\";",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onBorderWidthChange",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "name": "onClick",
        "index": 10,
        "id": "morespace",
        "reducers": [
          {
            "reducer": "let space = Number(state.space.split(\"px\")[0])+1;\nstate.space = space+\"px\";",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onPaddingChange",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "name": "onClick",
        "index": 11,
        "id": "lessspace",
        "reducers": [
          {
            "reducer": "let space = Number(state.space.split(\"px\")[0])-1;\nstate.space = space+\"px\";",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onPaddingChange",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "name": "onClick",
        "index": 13,
        "id": "lessSize",
        "reducers": [
          {
            "reducer": "let fontSize = Number(state.fontSize.split(\"px\")[0])-1;\nstate.fontSize = fontSize+\"px\";",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onFontSizeChange",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "name": "onClick",
        "index": 14,
        "id": "moreSize",
        "reducers": [
          {
            "reducer": "let fontSize = Number(state.fontSize.split(\"px\")[0])+1;\nstate.fontSize = fontSize+\"px\";\n",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onFontSizeChange",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "id": "id",
        "index": 15,
        "name": "onChange",
        "reducers": [
          {
            "reducer": "state.classes = e.currentTarget.value",
            "publishes": []
          }
        ]
      },
      {
        "id": "fontcolor",
        "index": 16,
        "name": "onChange",
        "reducers": [
          {
            "reducer": "state.fontColor = e.target.value;",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onFontColorChange",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "id": "morecolor",
        "index": 17,
        "name": "onChange",
        "reducers": [
          {
            "reducer": "state.borderColor = e.target.value;",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onBorderColorChange",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "id": "properties",
        "index": 17,
        "name": "onMouseMove",
        "reducers": [
          {
            "reducer": "e.stopPropagation()",
            "publishes": []
          }
        ]
      },
      {
        "id": "properties",
        "index": 18,
        "name": "onMouseDown",
        "reducers": [
          {
            "reducer": "e.stopPropagation()",
            "publishes": []
          }
        ]
      },
      {
        "id": "properties",
        "index": 19,
        "name": "onMouseOver",
        "reducers": [
          {
            "reducer": "\te.stopPropagation()\n",
            "publishes": []
          }
        ]
      },
      {
        "id": "properties",
        "index": 20,
        "name": "onMouseUp",
        "reducers": [
          {
            "reducer": "\te.stopPropagation()\n",
            "publishes": []
          }
        ]
      },
      {
        "id": "borderStyle",
        "index": 21,
        "name": "onChange",
        "reducers": [
          {
            "reducer": "state.borderStyle = e.target.value;\n",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onBorderStyleChange",
                "publishCondition": "true"
              }
            ]
          }
        ]
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
    "markup": "<div className=\"Div\" style={state.style} id=\"DivElement\">\n<select name=\"mode\" value={state.mode} id=\"mode\">\n  <option value=\"Draw\">Draw</option>\n  <option value=\"Move\">Move</option>\n  <option value=\"Resize\">Resize</option>\n  <option value=\"Delete\">Delete</option>\n  <option value=\"Save\">Save</option>\n  <option value=\"Edit\">Edit</option>\n</select>\n<PropertiesControl></PropertiesControl>\n<Div></Div>\n</div>",
    "events": [
      {
        "name": "onMouseOver",
        "index": 0,
        "id": "DivElement",
        "reducers": [
          {
            "reducer": "if(state.mode===\"Draw\"){\n\tstate.style.cursor = \"crosshair\";\n}\n\te.stopPropagation();\n\n",
            "publishes": []
          }
        ]
      },
      {
        "name": "onMouseDown",
        "index": 1,
        "id": "DivElement",
        "reducers": [
          {
            "reducer": "function create(type, x, y, text){\n\t  var item = document.createElement(type);\n      item.style.position = \"fixed\";\n      item.style.left = x+ \"px\";\n      item.style.top = y + \"px\";\n      item.style['border-width'] = \"1px\";\n      item.style['border-color'] = \"green\";\n      item.style['border-style'] = \"solid\";\n      item.id = Math.random();\n      if(text){\n      \titem.innerText = text;\n      }\n      return item;\n}\n\nlet target = e.target;\n\nif(e.button===0 && target.type!==\"text\"){\n  if(state.mode===\"Draw\"){\n\t\n      var div = create(\"div\", e.clientX, e.clientY);\n      var parent = e.target;\n      parent.appendChild(div);\n\n      state.divId = div.id;\n      state.origin = true;\n  }\n}\n\nif(state.mode===\"Move\"){\n\tstate.style.cursor = \"grabbing\";\n    state.grabbing = true;\n}\ndelete window.eClientY;\ndelete window.eClientX;\n\te.stopPropagation()\n\n",
            "publishes": []
          }
        ]
      },
      {
        "name": "onMouseMove",
        "index": 2,
        "id": "DivElement",
        "reducers": [
          {
            "reducer": "if(state.mode===\"Draw\"){\n  if(state.origin){\n      var div= document.getElementById(state.divId);\n      var rect = div.getBoundingClientRect();\n      div.style.width = e.clientX - rect.left;\n      div.style.height = e.clientY - rect.top;\n  }\n}\n\nif(\tstate.style.cursor == \"grabbing\" && state.grabbing) {\n\tvar rect = e.target.getBoundingClientRect();\n\t\n    window.eClientY = window.eClientY || e.clientY;\n\twindow.eClientX = window.eClientX || e.clientX;\n    \n    e.target.style.top = (-window.eClientY + e.clientY) + rect.top  + \"px\";\n    e.target.style.left = (-window.eClientX + e.clientX) + rect.left + \"px\";\n\n\twindow.eClientY = e.clientY;\n\twindow.eClientX = e.clientX;\n}\n\te.stopPropagation()\n\n\n\n",
            "publishes": []
          }
        ]
      },
      {
        "name": "onMouseUp",
        "index": 3,
        "id": "DivElement",
        "reducers": [
          {
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
        ]
      },
      {
        "id": "Div",
        "index": 4,
        "name": "onDrawFinish",
        "reducers": [
          {
            "reducer": "state.Div[e.index] = e.state;\n",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onDrawFinish",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "id": "mode",
        "index": 5,
        "name": "onMouseDown",
        "reducers": [
          {
            "reducer": "e.stopPropagation();",
            "publishes": []
          }
        ]
      },
      {
        "id": "mode",
        "index": 7,
        "name": "onMouseUp",
        "reducers": [
          {
            "reducer": "e.stopPropagation();",
            "publishes": []
          }
        ]
      },
      {
        "id": "Div",
        "index": 8,
        "name": "onMoveFinish",
        "reducers": [
          {
            "reducer": "state.Div[e.index] = e.state;\n",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onMoveFinish",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "id": "Div",
        "index": 9,
        "name": "onResizeFinish",
        "reducers": [
          {
            "reducer": "state.Div[e.index] = e.state;\n",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onResizeFinish",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "id": "Div",
        "index": 10,
        "name": "onDelete",
        "reducers": [
          {
            "reducer": "state.Div.splice(e.index,1);\n",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onModeChange",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "id": "PropertiesControl",
        "index": 11,
        "name": "onHeightChange",
        "reducers": [
          {
            "reducer": "state.style.height = e.state.height;\nstate.PropertiesControl[0].height = state.style.height;\n",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onStyleChange",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "id": "mode",
        "index": 12,
        "name": "onChange",
        "reducers": [
          {
            "reducer": "state.mode = e.target.value;\nif(state.mode === \"Resize\"){\n\tstate.style.resize = \"both\";\n    state.style.overflow = \"auto\";\n} else {\n  delete state.style.resize;\n  delete state.style.overflow;\n} if( state.mode===\"Edit\"){ \n  state.PropertiesControl[0].style.display = \"block\";\n  state.PropertiesControl[0].style.top = \"0px\";\n  state.PropertiesControl[0].style.left = \"-170px\";\n  state.PropertiesControl[0].height = state.style.height;\n  state.PropertiesControl[0].width = state.style.width;\n  state.PropertiesControl[0].top = state.style.top;\n  state.PropertiesControl[0].left = state.style.left;\n  state.PropertiesControl[0].borderWidth = state.style.borderWidth;\n} else {\n  state.PropertiesControl[0].style.display = \"none\";\n} if (state.mode===\"Save\"){ \n  let index = components.findIndex(component=>component.name===\"Div\")\n  components[index].state = JSON.stringify(state);\n  localStorage.setItem(\"ui-editor\", JSON.stringify(components));\n}",
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
        ]
      },
      {
        "id": "Div",
        "index": 13,
        "name": "onStyleChange",
        "reducers": [
          {
            "reducer": "state.Div[e.index] = e.state;\n",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onStyleChange",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "id": "PropertiesControl",
        "index": 14,
        "name": "onWidthChange",
        "reducers": [
          {
            "reducer": "state.style.width = e.state.width;\nstate.PropertiesControl[0].width = state.style.width;\n",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onStyleChange",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "id": "PropertiesControl",
        "index": 15,
        "name": "onTopChange",
        "reducers": [
          {
            "reducer": "state.style.top = e.state.top;\nstate.PropertiesControl[0].top = state.style.top;\n",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onStyleChange",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "id": "PropertiesControl",
        "index": 16,
        "name": "onLeftChange",
        "reducers": [
          {
            "reducer": "state.style.left = e.state.left;\nstate.PropertiesControl[0].left = state.style.left;\n",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onStyleChange",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "id": "PropertiesControl",
        "index": 17,
        "name": "onBorderWidthChange",
        "reducers": [
          {
            "reducer": "state.style['border-width'] = e.state.borderWidth;\nstate.PropertiesControl[0].borderWidth = state.style['border-width'];\n",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onStyleChange",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "id": "Div",
        "index": 18,
        "name": "onModeChange",
        "reducers": [
          {
            "reducer": "state.Div[e.index] = e.state;\n",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onModeChange",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "id": "PropertiesControl",
        "index": 18,
        "name": "onBorderColorChange",
        "reducers": [
          {
            "reducer": "state.style['border-color'] = e.state.borderColor;\nstate.PropertiesControl[0].borderColor = state.style['border-color'];\n",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onStyleChange",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "id": "PropertiesControl",
        "index": 19,
        "name": "onBorderStyleChange",
        "reducers": [
          {
            "reducer": "state.style['border-style'] = e.state.borderStyle;\nstate.PropertiesControl[0].borderStyle = state.style['border-style'];\n",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onStyleChange",
                "publishCondition": "true"
              }
            ]
          }
        ]
      }
    ],
    "state": "{\"style\":{\"position\":\"fixed\",\"top\":\"104px\",\"left\":\"394px\",\"height\":\"254px\",\"width\":\"268px\",\"borderWidth\":\"1px\",\"borderStyle\":\"solid\",\"borderColor\":\"green\",\"cursor\":\"crosshair\",\"border-width\":\"9px\",\"border-color\":\"#545496\",\"border-style\":\"dashed\"},\"Div\":[{\"style\":{\"position\":\"fixed\",\"top\":\"178px\",\"left\":\"452px\",\"height\":\"129px\",\"width\":\"135px\",\"borderWidth\":\"1px\",\"borderStyle\":\"solid\",\"borderColor\":\"green\"},\"Div\":[],\"mode\":\"Draw\",\"PropertiesControl\":[{\"style\":{\"top\":\"0px\",\"left\":\"-170px\",\"position\":\"absolute\",\"display\":\"none\"},\"id\":\"containement\",\"class\":\"black setup\",\"height\":\"254px\",\"width\":\"268px\",\"top\":\"69px\",\"left\":\"369px\",\"color\":\"#874a4a\",\"space\":\"100px\",\"fontSize\":\"10px\",\"borderWidth\":\"9px\",\"borderColor\":\"#545496\",\"borderStyle\":\"dashed\"}]}],\"mode\":\"Save\",\"PropertiesControl\":[{\"style\":{\"top\":\"0px\",\"left\":\"-170px\",\"position\":\"absolute\",\"display\":\"none\"},\"id\":\"containement\",\"class\":\"black setup\",\"height\":\"254px\",\"width\":\"268px\",\"top\":\"69px\",\"left\":\"369px\",\"color\":\"#874a4a\",\"space\":\"100px\",\"fontSize\":\"10px\",\"borderWidth\":\"9px\",\"borderColor\":\"#545496\",\"borderStyle\":\"dashed\"}],\"grabbing\":false,\"origin\":false}",
    "style": ".Div{\n    position: fixed;\n    background-color: black;\n    border: 1px solid red;\n\ttop: 25%;\n    left: 20%;\n    cursor: \"move\";\n}\n",
    "children": [],
    "id": 198,
    "config": "{\"Resizable\":{\"override\":false},\"Div\":{\"override\":true},\"Resizer\":{\"override\":true},\"PropertiesControl\":{\"override\":true}}",
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
    "name": "Button",
    "markup": "<button></button>",
    "events": [],
    "state": "{}",
    "style": "",
    "children": [],
    "id": 523,
    "config": "{}"
  },
  {
    "name": "Span",
    "markup": "<span></span>",
    "events": [],
    "state": "{}",
    "style": "",
    "children": [],
    "id": 245,
    "config": "{}"
  },
  {
    "name": "P",
    "markup": "<p>sdf</p>",
    "events": [],
    "state": "{}",
    "style": "",
    "children": [],
    "id": 787,
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
    "markup": "<div className=\"Div\" style={state.style} id=\"DivElement\">\n<select name=\"mode\" value={state.mode} id=\"mode\">\n  <option value=\"\"></option>\n  <option value=\"Load\">Load</option>\n  <option value=\"Save\">Save</option>\n  <option value=\"Edit\">Edit</option>\n</select>\n<select id=\"components\" value={state.changedComponent}>\n{state.components.map(name=><option>{name}</option>)}\n</select>\n<PropertiesControl></PropertiesControl>\n</div>",
    "events": [
      {
        "name": "onMouseOver",
        "index": 0,
        "id": "DivElement",
        "reducers": [
          {
            "reducer": "if(state.mode===\"Draw\"){\n\tstate.style.cursor = \"crosshair\";\n}\n\te.stopPropagation();\n\n",
            "publishes": []
          }
        ]
      },
      {
        "name": "onMouseDown",
        "index": 1,
        "id": "DivElement",
        "reducers": [
          {
            "reducer": "function create(type, x, y, text){\n\t  var item = document.createElement(type);\n      item.style.position = \"fixed\";\n      item.style.left = x+ \"px\";\n      item.style.top = y + \"px\";\n      item.style['border-width'] = \"1px\";\n      item.style['border-color'] = \"green\";\n      item.style['border-style'] = \"solid\";\n      item.id = Math.random();\n      if(text){\n      \titem.innerText = text;\n      }\n      return item;\n}\n\nlet target = e.target;\n\nif(e.button===0 && target.type!==\"text\"){\n  if(state.mode===\"Draw\"){\n\t\n      var div = create(\"div\", e.clientX, e.clientY);\n      var parent = e.target;\n      parent.appendChild(div);\n\n      state.divId = div.id;\n      state.origin = true;\n  }\n}\n\nif(state.mode===\"Move\"){\n\tstate.style.cursor = \"grabbing\";\n    state.grabbing = true;\n}\ndelete window.eClientY;\ndelete window.eClientX;\n\te.stopPropagation()\n\n",
            "publishes": []
          }
        ]
      },
      {
        "name": "onMouseMove",
        "index": 2,
        "id": "DivElement",
        "reducers": [
          {
            "reducer": "if(state.mode===\"Draw\"){\n  if(state.origin){\n      var div= document.getElementById(state.divId);\n      var rect = div.getBoundingClientRect();\n      div.style.width = e.clientX - rect.left;\n      div.style.height = e.clientY - rect.top;\n  }\n}\n\nif(\tstate.style.cursor == \"grabbing\" && state.grabbing) {\n\tvar rect = e.target.getBoundingClientRect();\n\t\n    window.eClientY = window.eClientY || e.clientY;\n\twindow.eClientX = window.eClientX || e.clientX;\n    \n    e.target.style.top = (-window.eClientY + e.clientY) + rect.top  + \"px\";\n    e.target.style.left = (-window.eClientX + e.clientX) + rect.left + \"px\";\n\n\twindow.eClientY = e.clientY;\n\twindow.eClientX = e.clientX;\n}\n\te.stopPropagation()\n\n\n\n",
            "publishes": []
          }
        ]
      },
      {
        "name": "onMouseUp",
        "index": 3,
        "id": "DivElement",
        "reducers": [
          {
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
        ]
      },
      {
        "id": "Div",
        "index": 4,
        "name": "onDrawFinish",
        "reducers": [
          {
            "reducer": "state.Div[e.index] = e.state;\n",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onDrawFinish",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "id": "mode",
        "index": 5,
        "name": "onMouseDown",
        "reducers": [
          {
            "reducer": "e.stopPropagation();",
            "publishes": []
          }
        ]
      },
      {
        "id": "mode",
        "index": 7,
        "name": "onMouseUp",
        "reducers": [
          {
            "reducer": "e.stopPropagation();",
            "publishes": []
          }
        ]
      },
      {
        "id": "Div",
        "index": 8,
        "name": "onMoveFinish",
        "reducers": [
          {
            "reducer": "state.Div[e.index] = e.state;\n",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onMoveFinish",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "id": "Div",
        "index": 9,
        "name": "onResizeFinish",
        "reducers": [
          {
            "reducer": "state.Div[e.index] = e.state;\n",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onResizeFinish",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "id": "Div",
        "index": 10,
        "name": "onDelete",
        "reducers": [
          {
            "reducer": "state.Div.splice(e.index,1);\n",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onModeChange",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "id": "PropertiesControl",
        "index": 11,
        "name": "onHeightChange",
        "reducers": [
          {
            "reducer": "state.style.height = e.state.height;\nstate.PropertiesControl[0].height = state.style.height;\n",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onStyleChange",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "id": "mode",
        "index": 12,
        "name": "onChange",
        "reducers": [
          {
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
        ]
      },
      {
        "id": "Div",
        "index": 13,
        "name": "onStyleChange",
        "reducers": [
          {
            "reducer": "state.Div[e.index] = e.state;\n",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onStyleChange",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "id": "PropertiesControl",
        "index": 14,
        "name": "onWidthChange",
        "reducers": [
          {
            "reducer": "state.style.width = e.state.width;\nstate.PropertiesControl[0].width = state.style.width;\n",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onStyleChange",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "id": "PropertiesControl",
        "index": 15,
        "name": "onTopChange",
        "reducers": [
          {
            "reducer": "state.style.top = e.state.top;\nstate.PropertiesControl[0].top = state.style.top;\n",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onStyleChange",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "id": "PropertiesControl",
        "index": 16,
        "name": "onLeftChange",
        "reducers": [
          {
            "reducer": "state.style.left = e.state.left;\nstate.PropertiesControl[0].left = state.style.left;\n",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onStyleChange",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "id": "PropertiesControl",
        "index": 17,
        "name": "onBorderWidthChange",
        "reducers": [
          {
            "reducer": "state.style['border-width'] = e.state.borderWidth;\nstate.PropertiesControl[0].borderWidth = state.style['border-width'];\n",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onStyleChange",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "id": "Div",
        "index": 18,
        "name": "onModeChange",
        "reducers": [
          {
            "reducer": "state.Div[e.index] = e.state;\n",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onModeChange",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "id": "PropertiesControl",
        "index": 18,
        "name": "onBorderColorChange",
        "reducers": [
          {
            "reducer": "state.style['border-color'] = e.state.borderColor;\nstate.PropertiesControl[0].borderColor = state.style['border-color'];\n",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onStyleChange",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "id": "PropertiesControl",
        "index": 19,
        "name": "onBorderStyleChange",
        "reducers": [
          {
            "reducer": "state.style['border-style'] = e.state.borderStyle;\nstate.PropertiesControl[0].borderStyle = state.style['border-style'];\n",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onStyleChange",
                "publishCondition": "true"
              }
            ]
          }
        ]
      },
      {
        "id": "components",
        "index": 20,
        "name": "onChange",
        "reducers": [
          {
            "reducer": "debugger;\nlet changedComponent = e.target.value;\nif(changedComponent && !state.changedComponent){\n    components[14].markup = components[14].markup.replace(`<PropertiesControl></PropertiesControl>`,`<PropertiesControl></PropertiesControl><${changedComponent}></${changedComponent}>`)\n}\nelse if(state.changedComponent){\n\tcomponents[14].markup = components[14].markup.replace(`<PropertiesControl></PropertiesControl><${state.changedComponent}></${state.changedComponent}>`,`<PropertiesControl></PropertiesControl><${changedComponent}></${changedComponent}>`)\n}\nstate.changedComponent = changedComponent;\ncomponents[14].state = JSON.stringify(state);\ncomponents.forEach(component=>delete window[component.name]);\nwindow.refreshComponents();",
            "publishes": []
          }
        ]
      }
    ],
    "state": "{\"style\":{\"position\":\"fixed\",\"top\":\"23px\",\"left\":\"185px\",\"height\":\"679px\",\"width\":\"591px\",\"border\":\"1px solid green\",\"cursor\":\"crosshair\"},\"selectedComponent\":\"\",\"mode\":\"\",\"components\":[\"\",\"Resizable\",\"Movable\",\"CanvasControls\",\"PropertiesControl\",\"Div\",\"Input\",\"Button\",\"Span\",\"P\",\"H1\",\"H2\",\"H3\",\"H4\",\"H5\",\"Editor\"],\"PropertiesControl\":[{\"style\":{\"top\":\"0px\",\"left\":\"-170px\",\"position\":\"absolute\",\"display\":\"none\"},\"id\":\"containement\",\"class\":\"black setup\",\"height\":\"679px\",\"width\":\"591px\",\"top\":\"23px\",\"left\":\"185px\",\"color\":\"#874a4a\",\"space\":\"100px\",\"fontSize\":\"10px\"}],\"grabbing\":false,\"divId\":\"0.9794908078276479\",\"origin\":false,\"changedComponent\":\"\"}",
    "style": ".Div{\n    position: fixed;\n    background-color: black;\n    border: 1px solid red;\n\ttop: 25%;\n    left: 20%;\n    cursor: \"move\";\n}\n",
    "children": [],
    "id": 198,
    "config": "{\"Resizable\":{\"override\":false},\"Div\":{\"override\":false},\"Resizer\":{\"override\":true},\"PropertiesControl\":{\"override\":true}}",
    "trueName": "Editor"
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
      "Button",
      "Span",
      "P",
      "Editor"
    ]
  }
]