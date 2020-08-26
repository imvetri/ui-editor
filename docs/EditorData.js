window.sampleComponents =[
  {
    "name": "Canvas",
    "markup": "<div className=\"canvasComponent\" style={state.style} id=\"canvas\" dangerouslySetInnerHTML={{ __html:`${state.innerHTML}` }}>\n</div>",
    "events": [
      {
        "name": "onMouseOver",
        "index": 0,
        "id": "canvas",
        "reducers": [
          {
            "reducer": "if(state.mode===\"Draw\"){\n\tstate.style.cursor = \"crosshair\";\n}\nif(state.mode===\"Text\"){\n\tstate.style.cursor = \"text\";\n}\nif(state.mode===\"Select\"){\n\tstate.style.cursor = \"cursor\";\n}\n",
            "publishes": []
          }
        ]
      },
      {
        "name": "onMouseDown",
        "index": 1,
        "id": "canvas",
        "reducers": [
          {
            "reducer": "function create(type, x, y, text){\n\t  var item = document.createElement(type);\n      item.style.position = \"fixed\";\n      item.style.left = x+ \"px\";\n      item.style.top = y + \"px\";\n      item.style.border = \"1px solid green\";\n      item.id = Math.random();\n      if(text){\n      \titem.innerText = text;\n      }\n      return item;\n}\n\n\n\nfunction convertToSpan(e){\n\n\tlet value = e.target.value;\n    let x = e.target.style.left.split(\"px\")[0];\n    let y = e.target.style.top.split(\"px\")[0];\n    let span = create(\"span\", x,y ,value);\n    e.target.parentElement.appendChild(span);\n     span.style.width = e.target.style.width;\n      span.style.height = e.target.style.height;\n    span.style.border = e.target.style.border;\n    span.style.font =  getComputedStyle(e.target).font;\n    span.style.background = getComputedStyle(e.target).background;\n    span.style.padding = getComputedStyle(e.target).padding;\n    span.style.color = getComputedStyle(e.target).color;\n    e.target.remove();\n}\n\nlet target = e.target;\n\nif(e.button===0 && target.type!==\"text\"){\n  if(state.mode===\"Draw\"){\n\t\n      var div = create(\"div\", e.clientX, e.clientY);\n      var parent = e.target;\n      parent.appendChild(div);\n\n      state.divId = div.id;\n      state.origin = true;\n  }\n  if(state.mode===\"Text\"){\n\n      var x = e.clientX, y = e.clientY;\n      var input = create(\"input\", e.clientX, e.clientY);\n      input.type=\"text\";\n\t  var parent = e.target;\n      parent.appendChild(input);\n      input.addEventListener(\"keypress\", function(e){e.stopPropagation()})\n      input.addEventListener(\"mouseup\", function(e){e.stopImmediatePropagation()})\n      input.addEventListener(\"mouseleave\", convertToSpan)\n  }\n  if(state.mode===\"Select\"){\n\n      state.selected=!state.selected;\n      \n      target.classList.toggle(\"selectedForEdit\")\n\n  }\n}",
            "publishes": []
          }
        ]
      },
      {
        "name": "onMouseMove",
        "index": 2,
        "id": "canvas",
        "reducers": [
          {
            "reducer": "if(state.mode===\"Draw\"){\n  if(state.origin){\n      var div= document.getElementById(state.divId);\n      var rect = div.getBoundingClientRect();\n      div.style.width = e.clientX - rect.left;\n      div.style.height = e.clientY - rect.top;\n  }\n}\n\nif(state.mode===\"Select\" && state.selected){\n\n  e.target.style.cursor = \"move\";\n  \n\tvar rect = e.target.getBoundingClientRect();\n\n    e.target.style.top = e.clientY - rect.height/2  + \"px\";\n    e.target.style.left = e.clientX - rect.width/2 + \"px\";\n\n}",
            "publishes": []
          }
        ]
      },
      {
        "name": "onMouseUp",
        "index": 3,
        "id": "canvas",
        "reducers": [
          {
            "reducer": "if(state.mode===\"Draw\"){\n\tif(e.button===0){\n\t\tstate.origin = false;\n\t}\n\n}\n\nif(state.mode===\"Select\" && state.selected){\n\n    state.selected=false;\n    e.target.style.cursor = \"\";\n    \n}\n",
            "publishes": [
              {
                "publishable": true,
                "publishName": "onDrawFinish",
                "publishCondition": "state.mode==='Draw' && e.button ===0"
              },
              {
                "publishable": true,
                "publishName": "onSelection",
                "publishCondition": "state.mode===\"Select\""
              }
            ]
          }
        ]
      },
      {
        "name": "onMoveFinished",
        "id": "Resizable",
        "reducers": [
          {
            "reducer": "debugger;",
            "publishes": []
          }
        ]
      }
    ],
    "state": "{\"style\":{\"cursor\":\"pointer\"},\"divs\":[],\"mode\":\"Draw\"}",
    "style": ".canvasComponent{\n\theight:100vh;\n    width:100vw;\n    position: fixed;\n    background-color: black;\n\ttop: 0px;\n    left: 0px;\n    cursor: \"move\";\n}\n",
    "children": [],
    "id": 198,
    "config": "{\"Resizable\":{\"override\":false}}",
    "trueName": "Canvas"
  },
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
            "reducer": "if(state.resizeBottomLeft){\n\n\tlet width = Number(state.style.width.split(\"px\")[0]);\n    let left = Number(state.style.left.split(\"px\")[0]);\n\tstate.style.width = (width + left - e.clientX) + \"px\";\n    state.style.left = e.clientX + \"px\";\n\n    let height = Number(state.style.height.split(\"px\")[0]);\n    let top = Number(state.style.top.split(\"px\")[0]);\n\tstate.style.height = e.clientY -top+10  + \"px\";\n}\ne.stopPropagation();",
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
    "trueName": "Resizable"
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
    "name": "Editor",
    "markup": "<div id=\"editor\" tabIndex=\"0\">\n\t<Canvas></Canvas>\n    <CanvasControls></CanvasControls>\n    <PropertiesControl></PropertiesControl>\n</div>",
    "events": [
      {
        "name": "onShowContextMenu",
        "index": 0,
        "id": "Canvas",
        "reducers": [
          {
            "reducer": "state.Canvas[0].innerHTML = e.currentTarget.innerHTML;\n\n",
            "publishes": []
          }
        ]
      },
      {
        "name": "onHide",
        "index": 0,
        "id": "PropertiesControl",
        "reducers": [
          {
            "reducer": "state.PropertiesControl = [];\n\nlet element = document.querySelector(\"#canvas\");\n\n\nstate.current = state.current+1;\nstate.innerHTMLs[state.current] = element.innerHTML;\n\n\nstate.Canvas[0].innerHTML = state.innerHTMLs[state.current];\n",
            "publishes": []
          }
        ]
      },
      {
        "name": "onMoveFinished",
        "index": 0,
        "id": "Resizable",
        "reducers": [
          {
            "reducer": "var top = e.target.style.top;\nvar left = e.target.style.left;\nvar height = e.target.style.height;\nvar width = e.target.style.width;\n\nstate.Resizable = [{\n\t\"style\":{\n    \t\"top\":top,\n        \"left\":left,\n        \"height\":height,\n        \"width\":width\n        }\n    }]\n    \nvar selected = document.querySelector(\".selectedForEdit\");\n\nselected.style.top = top;\nselected.style.left = left;\nselected.style.height = height;\nselected.style.width = width;\n\nstate.Canvas[0].innerHTML =  document.getElementById(\"canvas\").innerHTML\n\n",
            "publishes": []
          }
        ]
      },
      {
        "name": "onRightClicked",
        "index": 1,
        "id": "Resizable",
        "reducers": [
          {
            "reducer": "state.Canvas[0].innerHTML =  document.getElementById(\"canvas\").innerHTML\nstate.Resizable = [];\nstate.CanvasControls=[{\n        \"undo\": \"enabled\",\n        \"redo\": \"enabled\",\n        \"draw\": \"enabled\",\n        \"text\": \"disabled\",\n        \"image\": \"disabled\",\n        \"group\": \"enabled\",\n        \"ungroup\": \"disabled\",\n        \"duplicate\": \"enabled\",\n        \"delete\": \"enabled\",\n        \"select\": \"disabled\",\n        \"deselect\": \"enabled\",\n         \"edit\":\"enabled\",\n        \"style\": {\n            \"top\": e.clientY + \"px\",\n            \"left\": e.clientX + \"px\"\n        }\n    }]",
            "publishes": []
          }
        ]
      },
      {
        "id": "CanvasControls",
        "index": 6,
        "name": "onDraw",
        "reducers": [
          {
            "reducer": "\nstate.Canvas[0].mode = \"Draw\";\n",
            "publishes": []
          }
        ]
      },
      {
        "id": "CanvasControls",
        "index": 7,
        "name": "onText",
        "reducers": [
          {
            "reducer": "\nstate.Canvas[0].mode = \"Text\";\n",
            "publishes": []
          }
        ]
      },
      {
        "id": "CanvasControls",
        "index": 10,
        "name": "onEdit",
        "reducers": [
          {
            "reducer": "let element = document.querySelectorAll(\".selectedForEdit\")[0];\n\tlet elementStyle = getComputedStyle(element);\n\tstate.CanvasMode = \"MultiGroup\";\n    state.PropertiesControl = [\n      {\n          \"style\":{\t\n              \"top\": e.clientY-150+ \"px\",\n              \"left\": e.clientX + \"px\"\n          },\n          \"top\": elementStyle.top,\n          \"left\": elementStyle.left,\n          \"height\": elementStyle.height,\n          \"width\": elementStyle.width,\n          \"borderWidth\": elementStyle.borderWidth,\n          \"borderStyle\": elementStyle.borderStyle,\n          \"borderColor\": elementStyle.borderColor,\n          \"fontSize\" : elementStyle.fontSize,\n          \"color\": elementStyle.color,\n          \"fontFamily\" : elementStyle.fontFamily\n      }\n  ]\n  \nstate.CanvasControls=[];\n",
            "publishes": []
          }
        ]
      },
      {
        "id": "Canvas",
        "index": 10,
        "name": "onDrawFinish",
        "reducers": [
          {
            "reducer": "\nstate.current = state.current+1;\nstate.innerHTMLs[state.current] = e.currentTarget.innerHTML;\n\n\nstate.Canvas[0].innerHTML = state.innerHTMLs[state.current];\n",
            "publishes": []
          }
        ]
      },
      {
        "id": "Canvas",
        "index": 11,
        "name": "onSelection",
        "reducers": [
          {
            "reducer": "\nstate.current = state.current+1;\nstate.innerHTMLs[state.current] = e.currentTarget.innerHTML;\n\n\nstate.Canvas[0].innerHTML = state.innerHTMLs[state.current];\n",
            "publishes": []
          }
        ]
      },
      {
        "id": "CanvasControls",
        "index": 11,
        "name": "onUndo",
        "reducers": [
          {
            "reducer": "state.current = state.current >=0 ? state.current-1 : 0;\nstate.CanvasControls=[];\n\nstate.Canvas[0].innerHTML = state.innerHTMLs[state.current];\n",
            "publishes": []
          }
        ]
      },
      {
        "id": "CanvasControls",
        "index": 12,
        "name": "onRedo",
        "reducers": [
          {
            "reducer": "state.current = state.current < state.innerHTMLs.length-1 ? state.current+1 : state.innerHTMLs.length-1;\nstate.CanvasControls=[];\n\nstate.Canvas[0].innerHTML = state.innerHTMLs[state.current];\n",
            "publishes": []
          }
        ]
      },
      {
        "id": "CanvasControls",
        "index": 11,
        "name": "onSelect",
        "reducers": [
          {
            "reducer": "state.Canvas[0].mode = \"Select\"",
            "publishes": []
          }
        ]
      }
    ],
    "state": "{\"CanvasMode\":\"New\",\"Canvas\":[{\"style\":{\"cursor\":\"pointer\"},\"innerHTML\":\"\",\"divs\":[],\"mode\":\"\"}],\"PropertiesControl\":[],\"innerHTMLs\":[],\"current\":0}",
    "style": ".selectedForEdit{\n\toutline: 1px solid red;\n    cursor: move;\n}",
    "children": [],
    "id": 707,
    "config": "{\"CanvasControls\":{\"override\":false},\"Canvas\":{\"override\":true},\"PropertiesControl\":{\"override\":true},\"Resizable\":{\"override\":true}}",
    "trueName": "Editor"
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
    "markup": "<div class=\"properties\" id=\"properties\" style={state.style}>\n\n    <div class=\"attributes\">\n        <div class=\"id\">\n            <span class=\"name\">Id</span>\n            <input type=\"text\" class=\"long\" id=\"id\" value={state.id}/>\n        </div>\n        <div class=\"class\">\n            <span class=\"name\">Classes</span>\n            <input type=\"text\"  id=\"class\" class=\"long\" value={state.classes}/>\n        </div>\n    </div>\n\n    <div class=\"size\">\n        <div class=\"height\">\n            <span class=\"name\">Height</span>\n            <button class=\"less\" id=\"lessheight\"><i class=\"fa fa-minus\"></i></button>\n            <input type=\"text\" value={state.height}/>\n            <button class=\"more\" id=\"moreheight\"><i class=\"fa fa-plus\"></i></button>\n        </div>\n        <div class=\"width\">\n            <span class=\"name\">Width</span>\n            <button class=\"less\" id=\"lesswidth\"><i class=\"fa fa-minus\"></i></button>\n            <input type=\"text\" value={state.width}/>\n            <button class=\"more\" id=\"morewidth\"><i class=\"fa fa-plus\"></i></button>\n        </div>\n    </div>\n\n    <div class=\"position\">\n        <div class=\"top\">\n            <span class=\"name\">Top</span>\n            <button class=\"less\" id=\"lesstop\"><i class=\"fa fa-minus\"></i></button>\n            <input type=\"text\" value={state.top}/>\n            <button class=\"more\" id=\"moretop\"><i class=\"fa fa-plus\"></i></button>\n        </div>\n        <div class=\"left\">\n            <span class=\"name\">Left</span>\n            <button class=\"less\" id=\"moreleft\"><i class=\"fa fa-minus\"></i></button>\n            <input type=\"text\" value={state.left}/>\n            <button class=\"more\" id=\"lessleft\"><i class=\"fa fa-plus\"></i></button>\n        </div>\n    </div>\n\n    <div clas=\"border\">\n        <div class=\"borderSize\">\n            <span class=\"name\">Border</span>\n            <button class=\"less\" id=\"lessborder\"><i class=\"fa fa-minus\"></i></button>\n            <input type=\"text\" value={state.borderWidth}/>\n            <button class=\"more\" id=\"moreborder\"><i class=\"fa fa-plus\"></i></button>\n        </div>\n    \n        <div class=\"borderColor\">\n            <span class=\"name\">Color</span>\n            <input type=\"color\" id=\"morecolor\" value={state.color}/>\n        </div>\n        <div class=\"borderType\">\n            <span class=\"name\">Type</span>\n            <button class=\"downArrow\"></button>\n        </div>\n    </div>\n\n    <div class=\"space\">\n        <span class=\"name\">Space</span>\n        <button class=\"less\" id=\"lessspace\"><i class=\"fa fa-minus\"></i></button>\n        <input type=\"text\" value={state.space}/>\n        <button class=\"more\" id=\"morespace\"><i class=\"fa fa-plus\"></i></button>\n    </div>\n\n\n\n    <div clas=\"font\">\n\n        <div class=\"fontFamily\">\n            <span class=\"name\">Font</span>\n            <input type=\"text\" class=\"long\" value={state.fontFamily}/>\n        </div>\n        <div class=\"fontSize\">\n            <span class=\"name\">Size</span>\n            <button class=\"less\" id=\"lessSize\"><i class=\"fa fa-minus\"></i></button>\n            <input type=\"text\"  value={state.fontSize}/>\n            <button class=\"more\" id=\"moreSize\"><i class=\"fa fa-plus\"></i></button>\n        </div>\n\n        <div class=\"color\">\n            <span class=\"name\">Color</span>\n            <input type=\"color\" id=\"fontcolor\" value={state.color}/>\n        </div>\n    </div>\n</div>",
    "events": [
      {
        "name": "onClick",
        "index": 0,
        "id": "lessheight",
        "reducers": [
          {
            "reducer": "let height = Number(state.height.split(\"px\")[0])-1;\nstate.height = height+\"px\";\n\n\nlet element = document.querySelectorAll(\".selectedForEdit\")[0];\nlet elementStyle = element.style;\n\nelementStyle.height = state.height;",
            "publishes": []
          }
        ]
      },
      {
        "name": "onClick",
        "index": 1,
        "id": "moreheight",
        "reducers": [
          {
            "reducer": "let height = Number(state.height.split(\"px\")[0])+1;\nstate.height = height+\"px\";\n\nlet element = document.querySelectorAll(\".selectedForEdit\")[0];\nlet elementStyle = element.style;\n\nelementStyle.height = state.height;",
            "publishes": []
          }
        ]
      },
      {
        "name": "onClick",
        "index": 2,
        "id": "lesswidth",
        "reducers": [
          {
            "reducer": "let width = Number(state.width.split(\"px\")[0])-1;\nstate.width = width+\"px\";\n\nlet element = document.querySelectorAll(\".selectedForEdit\")[0];\nlet elementStyle = element.style;\n\nelementStyle.width = state.width;",
            "publishes": []
          }
        ]
      },
      {
        "name": "onClick",
        "index": 3,
        "id": "morewidth",
        "reducers": [
          {
            "reducer": "let width = Number(state.width.split(\"px\")[0])+1;\nstate.width = width+\"px\";\n\nlet element = document.querySelectorAll(\".selectedForEdit\")[0];\nlet elementStyle = element.style;\n\nelementStyle.width = state.width;",
            "publishes": []
          }
        ]
      },
      {
        "name": "onClick",
        "index": 4,
        "id": "lesstop",
        "reducers": [
          {
            "reducer": "let top = Number(state.top.split(\"px\")[0])-1;\nstate.top = top+\"px\";\n\nlet element = document.querySelectorAll(\".selectedForEdit\")[0];\nlet elementStyle = element.style;\n\nelementStyle.top = state.top;",
            "publishes": []
          }
        ]
      },
      {
        "name": "onClick",
        "index": 5,
        "id": "moretop",
        "reducers": [
          {
            "reducer": "let top = Number(state.top.split(\"px\")[0])+1;\nstate.top = top+\"px\";\n\nlet element = document.querySelectorAll(\".selectedForEdit\")[0];\nlet elementStyle = element.style;\n\nelementStyle.top = state.top;",
            "publishes": []
          }
        ]
      },
      {
        "name": "onClick",
        "index": 6,
        "id": "moreleft",
        "reducers": [
          {
            "reducer": "let left = Number(state.left.split(\"px\")[0])-1;\nstate.left = left+\"px\";\n\nlet element = document.querySelectorAll(\".selectedForEdit\")[0];\nlet elementStyle = element.style;\n\nelementStyle.left = state.left;",
            "publishes": []
          }
        ]
      },
      {
        "name": "onClick",
        "index": 7,
        "id": "lessleft",
        "reducers": [
          {
            "reducer": "let left = Number(state.left.split(\"px\")[0])+1;\nstate.left = left+\"px\";\n\nlet element = document.querySelectorAll(\".selectedForEdit\")[0];\nlet elementStyle = element.style;\n\nelementStyle.left = state.left;",
            "publishes": []
          }
        ]
      },
      {
        "name": "onClick",
        "index": 8,
        "id": "lessborder",
        "reducers": [
          {
            "reducer": "let borderWidth = Number(state.borderWidth.split(\"px\")[0])-1;\nstate.borderWidth = borderWidth+\"px\";\n\nlet element = document.querySelectorAll(\".selectedForEdit\")[0];\nlet elementStyle = element.style;\n\nelementStyle.borderWidth = state.borderWidth;",
            "publishes": []
          }
        ]
      },
      {
        "name": "onClick",
        "index": 9,
        "id": "moreborder",
        "reducers": [
          {
            "reducer": "let borderWidth = Number(state.borderWidth.split(\"px\")[0])+1;\nstate.borderWidth = borderWidth+\"px\";\n\nlet element = document.querySelectorAll(\".selectedForEdit\")[0];\nlet elementStyle = element.style;\n\nelementStyle.borderWidth = state.borderWidth;",
            "publishes": []
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
            "publishes": []
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
            "publishes": []
          }
        ]
      },
      {
        "name": "onMouseLeave",
        "index": 12,
        "id": "properties",
        "reducers": [
          {
            "reducer": "let element = document.querySelectorAll(\".selectedForEdit\")[0];\nstate.elementHTML = element.innerHTML;",
            "publishes": [
              {
                "publishName": "onHide",
                "publishCondition": true,
                "publishable": true
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
            "reducer": "let fontSize = Number(state.fontSize.split(\"px\")[0])-1;\nstate.fontSize = fontSize+\"px\";\n\nlet element = document.querySelectorAll(\".selectedForEdit\")[0];\nlet elementStyle = element.style;\n\nelementStyle.fontSize = state.fontSize;",
            "publishes": []
          }
        ]
      },
      {
        "name": "onClick",
        "index": 14,
        "id": "moreSize",
        "reducers": [
          {
            "reducer": "let fontSize = Number(state.fontSize.split(\"px\")[0])+1;\nstate.fontSize = fontSize+\"px\";\n\nlet element = document.querySelectorAll(\".selectedForEdit\")[0];\nlet elementStyle = element.style;\n\nelementStyle.fontSize = state.fontSize;",
            "publishes": []
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
      }
    ],
    "state": "{\n  \"style\":{\n      \"top\": \"200px\",\n      \"left\": \"208px\"\n  },\n  \"id\" : \"containement\",\n  \"class\" : \"black setup\",\n  \"height\": \"100px\",\n  \"width\":\"100px\",\n  \"top\":\"100px\",\n  \"left\":\"100px\",\n  \"borderWidth\":\"100px\",\n  \"color\": \"#874a4a\",\n  \"space\" :\"100px\",\n  \"fontSize\": \"10px\"\n}",
    "style": ".properties {\n    position: absolute;\nborder: 1px solid #2C3134;\n width: 165px;\n font-size: 10px;\n background: rgb(64, 64, 64);\n color: rgba(255,255,255,0.5);\n}\n\n.properties input{\n    width: 50px;\n    padding: 5px;\n    margin-left: 4px;\n}\n\n.properties input.long{\n\twidth: 100px;\n}\n\n.properties > div {\n    border: 1px solid #2C3134;\n    padding: 8px;\n}\n\n.properties > div > div:not(:first-child){\n    margin-top:7px;\n}\n\nspan.name {\n    display: inline-block;\n    width: 40px;\n}\n\n.properties .space{\n border: 1px solid #2C3134;\n}\n\n.less{\n    height: 21px;\n    width: 21px;\n    border: 1px solid #2C3134;\n}\n\n.more{\n    height: 21px;\n    width: 21px;\n    border: 1px solid #2C3134;\n}",
    "children": [],
    "id": 285,
    "config": "{}",
    "trueName": "PropertiesControl"
  }
]
window.sampleFolders = [
  {
    "type": "noFolder",
    "name": "noFolder",
    "contents": [
      {
        "name": "References",
        "contents": [
          "Movable",
          "Resizable"
        ],
        "type": "folder",
        "status": "closed"
      },
      "Canvas",
      "Editor",
      "CanvasControls",
      "PropertiesControl"
    ]
  }
]