window.sampleComponents = [
  {
    "name": "Canvas",
    "markup": "<div className=\"canvasComponent\" style={state.style} id=\"canvas\"><div dangerouslySetInnerHTML={{ __html:`${state.innerHTML}` }}></div>\n<Resizable></Resizable>\n</div>",
    "events": [
      {
        "name": "onMouseOver",
        "reducer": "if(state.mode===\"Draw\"){\n\tstate.style.cursor = \"crosshair\";\n}\nif(state.mode===\"Text\"){\n\tstate.style.cursor = \"text\";\n}\nif(state.mode===\"Select\"){\n\tstate.style.cursor = \"cursor\";\n}\n",
        "index": 0,
        "publishable": "",
        "publishName": "",
        "id": "canvas"
      },
      {
        "name": "onMouseDown",
        "reducer": "function create(type, x, y, text){\n\t  var item = document.createElement(type);\n      item.style.position = \"fixed\";\n      item.style.left = x+ \"px\";\n      item.style.top = y + \"px\";\n      item.style.border = \"1px solid green\";\n      item.id = Math.random();\n      if(text){\n      \titem.innerText = text;\n      }\n      return item;\n}\n\n\n\nfunction convertToSpan(e){\n\tlet value = e.target.value;\n    let x = e.target.style.left.split(\"px\")[0];\n    let y = e.target.style.top.split(\"px\")[0];\n    let span = create(\"span\", x,y ,value);\n    e.target.parentElement.appendChild(span);\n     span.style.width = e.target.style.width;\n      span.style.height = e.target.style.height;\n    span.style.border = e.target.style.border;\n    span.style.font =  getComputedStyle(e.target).font;\n    span.style.background = getComputedStyle(e.target).background;\n    span.style.padding = getComputedStyle(e.target).padding;\n    span.style.color = getComputedStyle(e.target).color;\n    e.target.remove();\n}\nif(e.button===0 && e.target.type!==\"text\"){\n  if(state.mode===\"Draw\"){\n\t\n      var div = create(\"div\", e.clientX, e.clientY);\n      var parent = e.target;\n      parent.appendChild(div);\n\n      state.divId = div.id;\n      state.origin = true;\n  }\n  if(state.mode===\"Text\"){\n  \t\n      var x = e.clientX, y = e.clientY;\n      var input = create(\"input\", e.clientX, e.clientY);\n      input.type=\"text\";\n\t  var parent = e.target;\n      parent.appendChild(input);\n      input.addEventListener(\"onKeyPress\", function(e){e.stopPropagation()})\n      input.addEventListener(\"mouseleave\", convertToSpan)\n  }\n  if(state.mode===\"Select\"){\n  \t\n      e.target.classList.add(\"selectedForEdit\")\n      e.target.style.cursor = \"move\";\n      state.selected=true;\n      state.Resizable= [{\n      \t\"style\":{\n        \t\"top\":e.target.style.top,\n            \"left\":e.target.style.left,\n            \"height\":e.target.style.height,\n            \"width\":e.target.style.width\n            }\n       \t }]\n\n  }\n  if(state.mode===\"Deselect\"){\n      e.target.classList.remove(\"selectedForEdit\")\n      state.selected=false;\n      e.target.style.cursor = \"\";\n      state.Resizable = [];\n  }\n}",
        "index": 1,
        "publishable": "",
        "publishName": "",
        "id": "canvas"
      },
      {
        "name": "onMouseMove",
        "reducer": "if(state.mode===\"Draw\"){\n  if(state.origin){\n      var div= document.getElementById(state.divId);\n      var rect = div.getBoundingClientRect();\n      div.style.width = e.clientX - rect.left;\n      div.style.height = e.clientY - rect.top;\n  }\n}\n\nif(state.mode===\"Select\" && state.selected){\n\n  e.target.style.cursor = \"move\";\n  \n\tvar rect = e.target.getBoundingClientRect();\n\n    e.target.style.top = e.clientY - rect.height/2  + \"px\";\n    e.target.style.left = e.clientX - rect.width/2 + \"px\";\n\n}",
        "index": 2,
        "publishable": "",
        "publishName": "",
        "id": "canvas"
      },
      {
        "name": "onMouseUp",
        "reducer": "if(state.mode===\"Draw\"){\n\tif(e.button===0){\n\t\tstate.origin = false;\n\t}\n\n}\n\nif(state.mode===\"Select\" && state.selected){\n\n    state.selected=false;\n    e.target.style.cursor = \"\";\n    \n}",
        "index": 3,
        "publishable": true,
        "publishName": "onEditFinish",
        "id": "canvas"
      },
      {
        "name": "onContextMenu",
        "reducer": "e.stopPropagation();\ne.preventDefault();\n",
        "index": 4,
        "publishable": true,
        "publishName": "onShowContextMenu",
        "id": "canvas"
      },
      {
        "name": "onMoveFinished",
        "reducer": "debugger;",
        "publishable": "",
        "publishName": "",
        "id": "Resizable"
      }
    ],
    "state": "{\"style\":{\"cursor\":\"pointer\"},\"divs\":[],\"mode\":\"Draw\",\"Resizable\":[]}",
    "style": ".canvasComponent{\n\theight:100vh;\n    width:100vw;\n    position: fixed;\n    background-color: black;\n\ttop: 0px;\n    left: 0px;\n}\n",
    "children": [],
    "id": 198,
    "config": "{\"Resizable\":{\"override\":true}}",
    "trueName": "Canvas"
  },
  {
    "name": "Resizable",
    "markup": "<div id=\"resizable\" style={state.style}>\n    <div class='resizer' id=\"topLeft\"></div>\n    <div class='resizer' id=\"topRight\"></div>\n    <div class='resizer' id=\"bottomLeft\"></div>\n    <div class='resizer' id=\"bottomRight\"></div>\n</div>",
    "events": [
      {
        "name": "onMouseDown",
        "reducer": "state.resizeTopLeft=true;\ne.stopPropagation();",
        "index": 0,
        "publishable": "",
        "publishName": "",
        "id": "topLeft"
      },
      {
        "name": "onMouseMove",
        "reducer": "if(state.resizeTopLeft){\n\tlet width = Number(state.style.width.split(\"px\")[0]);\n    let left = Number(state.style.left.split(\"px\")[0]);\n\tstate.style.width = (width + left - e.clientX) + \"px\";\n    state.style.left = e.clientX + \"px\";\n    \n    let height = Number(state.style.height.split(\"px\")[0]);\n    let top = Number(state.style.top.split(\"px\")[0]);\n\tstate.style.height = (height + top - e.clientY) + \"px\";\n    state.style.top = e.clientY + \"px\";\n}\ne.stopPropagation();",
        "index": 1,
        "publishable": "",
        "publishName": "",
        "id": "topLeft"
      },
      {
        "name": "onMouseUp",
        "reducer": "state.resizeTopLeft=false;\ne.stopPropagation();",
        "index": 2,
        "publishable": "",
        "publishName": "",
        "id": "topLeft"
      },
      {
        "name": "onMouseDown",
        "reducer": "state.resizeBottomLeft=true;\ne.stopPropagation();",
        "index": 3,
        "publishable": "",
        "publishName": "",
        "id": "bottomLeft"
      },
      {
        "name": "onMouseMove",
        "reducer": "if(state.resizeBottomLeft){\n\n\tlet width = Number(state.style.width.split(\"px\")[0]);\n    let left = Number(state.style.left.split(\"px\")[0]);\n\tstate.style.width = (width + left - e.clientX) + \"px\";\n    state.style.left = e.clientX + \"px\";\n\n    let height = Number(state.style.height.split(\"px\")[0]);\n    let top = Number(state.style.top.split(\"px\")[0]);\n\tstate.style.height = e.clientY -top+10  + \"px\";\n}\ne.stopPropagation();",
        "index": 4,
        "publishable": "",
        "publishName": "",
        "id": "bottomLeft"
      },
      {
        "name": "onMouseUp",
        "reducer": "state.resizeBottomLeft=false;\ne.stopPropagation();",
        "index": 5,
        "publishable": "",
        "publishName": "",
        "id": "bottomLeft"
      },
      {
        "name": "onMouseDown",
        "reducer": "state.resizeBottomRight=true;\ne.stopPropagation();",
        "index": 6,
        "publishable": "",
        "publishName": "",
        "id": "bottomRight"
      },
      {
        "name": "onMouseUp",
        "reducer": "state.resizeBottomRight=false;\ne.stopPropagation();",
        "index": 7,
        "publishable": "",
        "publishName": "",
        "id": "bottomRight"
      },
      {
        "name": "onMouseMove",
        "reducer": "if(state.resizeBottomRight){\n\n    let height = Number(state.style.height.split(\"px\")[0]);\n    let top = Number(state.style.top.split(\"px\")[0]);\n\tstate.style.height = (e.clientY - top +5 ) + \"px\";\n    \n   \tlet width = Number(state.style.width.split(\"px\")[0]);\n    let left = Number(state.style.left.split(\"px\")[0]);\n\tstate.style.width =  e.clientX - left + 5 + \"px\";\n\n    \n}\ne.stopPropagation();",
        "index": 8,
        "publishable": "",
        "publishName": "",
        "id": "bottomRight"
      },
      {
        "name": "onMouseOut",
        "reducer": "state.resizeTopLeft=false;\ne.stopPropagation();",
        "publishable": "",
        "publishName": "",
        "id": "topLeft"
      },
      {
        "name": "onMouseOut",
        "reducer": "state.resizeBottomLeft=false;\ne.stopPropagation();",
        "publishable": "",
        "publishName": "",
        "id": "bottomLeft"
      },
      {
        "name": "onMouseOut",
        "reducer": "state.resizeBottomRight=false;\ne.stopPropagation();",
        "publishable": "",
        "publishName": "",
        "id": "bottomRight"
      },
      {
        "name": "onMouseDown",
        "reducer": "state.resizeTopRight=true;\ne.stopPropagation();",
        "index": 12,
        "publishable": "",
        "publishName": "",
        "id": "topRight"
      },
      {
        "name": "onMouseUp",
        "reducer": "state.resizeTopRight=false;\ne.stopPropagation();",
        "index": 13,
        "publishable": "",
        "publishName": "",
        "id": "topRight"
      },
      {
        "name": "onMouseOut",
        "reducer": "state.resizeTopRight=false;\ne.stopPropagation();",
        "index": 14,
        "publishable": "",
        "publishName": "",
        "id": "topRight"
      },
      {
        "name": "onMouseMove",
        "reducer": "if(state.resizeTopRight){\n\tlet width = Number(state.style.width.split(\"px\")[0]);\n    let left = Number(state.style.left.split(\"px\")[0]);\n\tstate.style.width = (e.clientX - left + 5) + \"px\";\n    \n    let height = Number(state.style.height.split(\"px\")[0]);\n    let top = Number(state.style.top.split(\"px\")[0]);\n\tstate.style.height = -e.clientY + height + top + \"px\";\n    state.style.top = e.clientY + \"px\";\n}\ne.stopPropagation();",
        "index": 15,
        "publishable": "",
        "publishName": "",
        "id": "topRight"
      },
      {
        "name": "onMouseDown",
        "reducer": "e.target.style.cursor = \"grabbing\";\nstate.grabbing = true;\n",
        "publishable": "",
        "publishName": "",
        "id": "resizable"
      },
      {
        "name": "onMouseUp",
        "reducer": "e.target.style.cursor = \"grab\";\nstate.grabbing = false;\n",
        "publishable": "",
        "publishName": "",
        "id": "resizable"
      },
      {
        "name": "onMouseMove",
        "reducer": "if(state.grabbing) {\n\tvar rect = e.target.getBoundingClientRect();\n\n    e.target.style.top = e.clientY - rect.height/2  + \"px\";\n    e.target.style.left = e.clientX - rect.width/2 + \"px\";\n}",
        "index": 18,
        "publishable": true,
        "publishName": "onMoveFinished",
        "id": "resizable"
      }
    ],
    "state": "{\n\t\"style\":{\n        \"top\": \"200px\",\n        \"left\": \"200px\",\n        \"height\": \"100px\",\n        \"width\": \"100px\"\n\t}\n}",
    "style": "#resizable {\n\tposition: fixed;\n    cursor: grab;\n}\n\n\n#resizable {\n  position: absolute;\n  background: black;\n  outline: 1px solid #4286f4;\n  box-sizing: border-box;\n}\n\n\n#resizable .resizer{\n  width: 10px;\n  height: 10px;\n  border-radius: 50%; \n  background: white;\n  border: 1px solid #4286f4;\n  position: absolute;\n}\n\n#resizable .resizer#topLeft {\n  left: -5px;\n  top: -5px;\n  cursor: nwse-resize;\n}\n#resizable .resizer#topRight {\n  right: -5px;\n  top: -5px;\n  cursor: nesw-resize;\n}\n#resizable .resizer#bottomLeft {\n  left: -5px;\n  bottom: -5px;\n  cursor: nesw-resize;\n}\n#resizable .resizer#bottomRight {\n  right: -5px;\n  bottom: -5px;\n  cursor: nwse-resize;\n}",
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
        "reducer": "e.target.style.cursor = \"grabbing\";\nstate.grabbing = true;\nconsole.log(\"Mousedown\")",
        "index": 0,
        "publishable": "",
        "publishName": "",
        "id": "resizable"
      },
      {
        "name": "onMouseUp",
        "reducer": "e.target.style.cursor = \"grab\";\nstate.grabbing = false;\nconsole.log(\"mouseup\")",
        "index": 1,
        "publishable": "",
        "publishName": "",
        "id": "resizable"
      },
      {
        "name": "onMouseMove",
        "reducer": "if(state.grabbing) {\n\tvar rect = e.target.getBoundingClientRect();\n\n    e.target.style.top = e.clientY - rect.height/2  + \"px\";\n    e.target.style.left = e.clientX - rect.width/2 + \"px\";\n}\nconsole.log(\"mousemove\")",
        "index": 2,
        "publishable": "",
        "publishName": "",
        "id": "resizable"
      },
      {
        "name": "onMouseDown",
        "reducer": "e.target.style.cursor = \"grabbing\";\nstate.grabbing = true;\n",
        "publishable": "",
        "publishName": "",
        "id": "movable"
      },
      {
        "name": "onMouseUp",
        "reducer": "e.target.style.cursor = \"grab\";\nstate.grabbing = false;\n",
        "publishable": "",
        "publishName": "",
        "id": "movable"
      },
      {
        "name": "onMouseMove",
        "reducer": "if(state.grabbing) {\n\tvar rect = e.target.getBoundingClientRect();\n\n    e.target.style.top = e.clientY - rect.height/2  + \"px\";\n    e.target.style.left = e.clientX - rect.width/2 + \"px\";\n}",
        "publishable": "",
        "publishName": "",
        "id": "movable"
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
        "reducer": "if (state.CanvasControlsVariant === \"New\") {\n    state.CanvasControls=[{\n        \"undo\": \"undo disabled\",\n        \"redo\": \"redo disabled\",\n        \"draw\": \"draw enabled\",\n        \"text\": \"text disabled\",\n        \"image\": \"image disabled\",\n        \"group\": \"group disabled\",\n        \"ungroup\": \"ungroup disabled\",\n        \"duplicate\": \"duplicate disabled\",\n        \"delete\": \"delete disabled\",\n        \"select\": \"select disabled\",\n        \"deselect\": \"deselect disabled\",\n        \"edit\":\"edit disabled\",\n        \"style\": {\n            \"top\": e.clientY + \"px\",\n            \"left\": e.clientX + \"px\"\n        }\n    }]\n}\nif (state.CanvasControlsVariant === \"Created\") {\n    state.CanvasControls=[{\n        \"undo\": \"undo enabled\",\n        \"redo\": \"redo disabled\",\n        \"draw\": \"draw enabled\",\n        \"text\": \"text enabled\",\n        \"image\": \"image enabled\",\n        \"group\": \"group disabled\",\n        \"ungroup\": \"ungroup disabled\",\n        \"duplicate\": \"duplicate disabled\",\n        \"delete\": \"delete disabled\",\n        \"select\": \"select enabled\",\n        \"deselect\": \"deselect disabled\",\n        \"edit\":\"edit disabled\",\n        \n        \"style\": {\n            \"top\": e.clientY + \"px\",\n            \"left\": e.clientX + \"px\"\n        }\n    }]\n}\nif (state.CanvasControlsVariant === \"SingleSelection\") {\n    state.CanvasControls=[{\n        \"undo\": \"undo enabled\",\n        \"redo\": \"redo enabled\",\n        \"draw\": \"draw enabled\",\n        \"text\": \"text disabled\",\n        \"image\": \"image disabled\",\n        \"group\": \"group disabled\",\n        \"ungroup\": \"ungroup disabled\",\n        \"duplicate\": \"duplicate enabled\",\n        \"delete\": \"delete enabled\",\n        \"select\": \"select disabled\",\n        \"deselect\": \"deselect enabled\",\n         \"edit\":\"edit enabled\",\n        \"style\": {\n            \"top\": e.clientY + \"px\",\n            \"left\": e.clientX + \"px\"\n        }\n    }]\n}\n\nif (state.CanvasControlsVariant === \"MultiGroup\") {\n    state.CanvasControls=[{\n        \"undo\": \"undo enabled\",\n        \"redo\": \"redo enabled\",\n        \"draw\": \"draw enabled\",\n        \"text\": \"text disabled\",\n        \"image\": \"image disabled\",\n        \"group\": \"group enabled\",\n        \"ungroup\": \"ungroup disabled\",\n        \"duplicate\": \"duplicate enabled\",\n        \"delete\": \"delete enabled\",\n        \"select\": \"select disabled\",\n        \"deselect\": \"deselect enabled\",\n         \"edit\":\"edit enabled\",\n        \"style\": {\n            \"top\": e.clientY + \"px\",\n            \"left\": e.clientX + \"px\"\n        }\n    }]\n}\n\nif (state.CanvasControlsVariant === \"MultiUngroup\") {\n    state.CanvasControls=[{\n        \"undo\": \"undo enabled\",\n        \"redo\": \"redo enabled\",\n        \"draw\": \"draw enabled\",\n        \"text\": \"text disabled\",\n        \"image\": \"image disabled\",\n        \"group\": \"group disabled\",\n        \"ungroup\": \"ungroup enabled\",\n        \"duplicate\": \"duplicate enabled\",\n        \"delete\": \"delete enabled\",\n        \"select\": \"select disabled\",\n        \"deselect\": \"deselect enabled\",\n         \"edit\":\"edit enabled\",\n        \"style\": {\n            \"top\": e.clientY + \"px\",\n            \"left\": e.clientX + \"px\"\n        }\n    }]\n}\n\nstate.Canvas[0].innerHTML = e.currentTarget.innerHTML;\n\n\n",
        "index": 0,
        "publishable": "",
        "publishName": "",
        "id": "Canvas"
      },
      {
        "name": "onItemSelected",
        "reducer": "if(\"Draw\" === e.state.item){\n\tstate.CanvasControlsVariant = \"Created\";\n    state.Canvas[0].mode = \"Draw\";\n}\nif(\"Text\" === e.state.item){\n\tstate.CanvasControlsVariant = \"Created\";\n    state.Canvas[0].mode = \"Text\";\n}\n\nif(\"Select\" === e.state.item){\n\tstate.CanvasControlsVariant = \"MultiGroup\";\n    state.Canvas[0].mode = \"Select\"\n}\n\nif(\"Deselect\" === e.state.item){\n\tstate.CanvasControlsVariant = \"Created\";\n    state.Canvas[0].mode = \"Deselect\"\n}\n\nif(\"Group\" === e.state.item){\n\tstate.CanvasControlsVariant = \"MultiUngroup\";\n}\n\nif(\"Ungroup\" === e.state.item){\n\tstate.CanvasControlsVariant = \"MultiGroup\";\n}\nif(\"Edit\" === e.state.item){\n    let element = document.querySelectorAll(\".selectedForEdit\")[0];\n\tlet elementStyle = getComputedStyle(element);\n\tstate.CanvasControlsVariant = \"MultiGroup\";\n    state.PropertiesControl = [{\n    \"style\":{\t\n    \t\"top\": e.clientY-150+ \"px\",\n    \t\"left\": e.clientX + \"px\"\n    },\n    \"top\": elementStyle.top,\n    \"left\": elementStyle.left,\n    \"height\": elementStyle.height,\n    \"width\": elementStyle.width,\n    \"borderWidth\": elementStyle.borderWidth,\n    \"borderStyle\": elementStyle.borderStyle,\n    \"borderColor\": elementStyle.borderColor,\n    \"fontSize\" : elementStyle.fontSize,\n    \"color\": elementStyle.color,\n    \"fontFamily\" : elementStyle.fontFamily\n  }]\n}\nstate.CanvasControls=[];\n",
        "index": 0,
        "publishable": "",
        "publishName": "",
        "id": "CanvasControls"
      },
      {
        "name": "onHide",
        "reducer": "state.PropertiesControl = [];\n\nlet element = document.querySelector(\"#canvas\");\n\n\nstate.Canvas[0].innerHTML = element.innerHTML;\n",
        "index": 0,
        "publishable": "",
        "publishName": "",
        "id": "PropertiesControl"
      }
    ],
    "state": "{ \"CanvasControlsVariant\": \"New\", \"CanvasControls\": [], \"Canvas\": [{ \"style\": { \"cursor\": \"pointer\" }, \"innerHTML\": \"\", \"divs\": [], \"mode\": \"\" , \"Resizable\": []}], \"PropertiesControl\": [] }",
    "style": ".selectedForEdit{\n\toutline: 1px solid red;\n    cursor: move;\n}",
    "children": [],
    "id": 707,
    "config": "{\"CanvasControls\":{\"override\":true},\"Canvas\":{\"override\":true},\"PropertiesControl\":{\"override\":true}}",
    "trueName": "Editor"
  },
  {
    "name": "CanvasControls",
    "markup": "<div id=\"menu\" style={state.style}>\n    <div id=\"history-control\">\n        <div className={state.undo}>\n            <i className=\"fa fa-undo\"></i>\n            <span>Undo</span>\n\t\t</div>\n        <div className={state.redo}>\n\t\t\t<i className=\"fa fa-redo\"></i>\n        \t<span>Redo</span>\n\t\t</div>\n    </div>\n    <div id=\"content-control\">\n        <div className={state.draw}>\n            <i className=\"fa fa-edit\"></i>\n        \t<span>Draw</span>\n        </div>\n        <div className={state.text}>\n            <i className=\"fa fa-font\"></i>\n        \t<span>Text</span>\n        </div>\n        <div className={state.image}>\n            <i className=\"fas fa-image\"></i>\n        \t<span>Image</span>\n        </div>\n    </div>\n    <div id=\"edit-control\">\n        <div className={state.group}>\n            <i className=\"fa fa-object-group\"></i>\n        \t<span>Group</span>\n        </div>\n        <div className={state.ungroup}>\n            <i className=\"fa fa-object-ungroup\"></i>\n        \t<span>Ungroup</span>\n        </div>\n        <div className={state.edit}>\n            <i className=\"fa fa-edit\"></i>\n        \t<span>Edit</span>\n        </div>\n        <div className={state.duplicate}>\n            <i className=\"fa fa-clone\"></i>\n        \t<span>Duplicate</span>\n        </div>\n        <div className={state.delete}>\n            <i className=\"fa fa-trash\"></i>\n        \t<span>Delete</span>\n        </div>\n    </div>\n    <div id=\"selection-control\">\n        <div className={state.select}>\n        \t<i className=\"fa fa-mouse-pointer\"></i>\n        \t<span>Select</span>\n        </div>\n        <div className={state.deselect}>\n            <i className=\"fa fa-mouse-pointer\"></i>\n        \t<span>Deselect</span>\n        </div>\n    </div>\n</div>",
    "events": [
      {
        "name": "onClick",
        "reducer": "state.item = e.target.innerText;",
        "index": 0,
        "publishable": true,
        "publishName": "onItemSelected",
        "id": "menu"
      }
    ],
    "state": "{\n\t\"undo\":\"undo disabled\",\n    \"redo\":\"redo disabled\",\n\t\"draw\":\"draw enabled\",\n    \"text\":\"text disabled\",\n    \"image\":\"image disabled\",\n\t\"group\":\"group disabled\",\n    \"ungroup\":\"ungroup disabled\",\n\t\"duplicate\":\"duplicate disabled\",\n    \"delete\":\"delete disabled\",\n\t\"select\":\"select disabled\",\n    \"deselect\":\"deselect disabled\",\n    \"edit\":\"edit disabled\",\n    \"style\" : {\n    \t\"top\": \"100px\",\n        \"left\":\"200px\"\n    }\n}",
    "style": "#menu {\n    position: fixed;\n    font-size:10px;\n    user-select: none;\n    color: rgba(255,255,255,0.5);\n    background: rgb(64, 64, 64);\n}\n\n#menu > div > div:hover:not(.disabled){\n    background: rgb(43, 43, 43);\n    color: white;\n}\n\n.disabled{\n    cursor: not-allowed;\n    background: #333333;\n    color: #4a4a4a;\n}\n\n\n\n#menu > div > div span {\n    padding-left: 9px;\n}\n\n#menu > div > div {\n    box-sizing: border-box;\n    padding: 10px;\n    height: 29px;\n}\n\n#history-control {\n    border: 1px solid #2C3134;\n    height: 60px;\n}\n\n#content-control {\n    border: 1px solid #2C3134;\n    height: 90px;\n}\n\n#edit-control {\n    border: 1px solid #2C3134;\n    height: 148px;\n}\n\n#selection-control {\n    border: 1px solid #2C3134;\n    height: 60px;\n}\n",
    "children": [],
    "id": 550,
    "config": "{}",
    "trueName": "CanvasControls"
  },
  {
    "name": "PropertiesControl",
    "markup": "<div class=\"properties\" id=\"properties\" style={state.style}>\n    <div class=\"size\">\n        <div class=\"height\">\n            <span class=\"name\">Height</span>\n            <button class=\"less\" id=\"lessheight\"><i class=\"fa fa-minus\"></i></button>\n            <input type=\"text\" value={state.height}/>\n            <button class=\"more\" id=\"moreheight\"><i class=\"fa fa-plus\"></i></button>\n        </div>\n        <div class=\"width\">\n            <span class=\"name\">Width</span>\n            <button class=\"less\" id=\"lesswidth\"><i class=\"fa fa-minus\"></i></button>\n            <input type=\"text\" value={state.width}/>\n            <button class=\"more\" id=\"morewidth\"><i class=\"fa fa-plus\"></i></button>\n        </div>\n    </div>\n\n    <div class=\"position\">\n        <div class=\"top\">\n            <span class=\"name\">Top</span>\n            <button class=\"less\" id=\"lesstop\"><i class=\"fa fa-minus\"></i></button>\n            <input type=\"text\" value={state.top}/>\n            <button class=\"more\" id=\"moretop\"><i class=\"fa fa-plus\"></i></button>\n        </div>\n        <div class=\"left\">\n            <span class=\"name\">Left</span>\n            <button class=\"less\" id=\"moreleft\"><i class=\"fa fa-minus\"></i></button>\n            <input type=\"text\" value={state.left}/>\n            <button class=\"more\" id=\"lessleft\"><i class=\"fa fa-plus\"></i></button>\n        </div>\n    </div>\n\n    <div clas=\"border\">\n        <div class=\"borderSize\">\n            <span class=\"name\">Border</span>\n            <button class=\"less\" id=\"lessborder\"><i class=\"fa fa-minus\"></i></button>\n            <input type=\"text\" value={state.borderWidth}/>\n            <button class=\"more\" id=\"moreborder\"><i class=\"fa fa-plus\"></i></button>\n        </div>\n    \n        <div class=\"borderColor\">\n            <span class=\"name\">Color</span>\n            <input type=\"color\" id=\"morecolor\" value={state.color}/>\n        </div>\n        <div class=\"borderType\">\n            <span class=\"name\">Type</span>\n            <button class=\"downArrow\"></button>\n        </div>\n    </div>\n\n    <div class=\"space\">\n        <span class=\"name\">Space</span>\n        <button class=\"less\" id=\"lessspace\"><i class=\"fa fa-minus\"></i></button>\n        <input type=\"text\" value={state.space}/>\n        <button class=\"more\" id=\"morespace\"><i class=\"fa fa-plus\"></i></button>\n    </div>\n\n\n\n    <div clas=\"font\">\n\n        <div class=\"fontFamily\">\n            <span class=\"name\">Font</span>\n            <input type=\"text\" value={state.fontFamily}/>\n        </div>\n        <div class=\"fontSize\">\n            <span class=\"name\">Size</span>\n            <button class=\"less\" id=\"lessSize\"><i class=\"fa fa-minus\"></i></button>\n            <input type=\"text\" value={state.fontSize}/>\n            <button class=\"more\" id=\"moreSize\"><i class=\"fa fa-plus\"></i></button>\n        </div>\n\n        <div class=\"color\">\n            <span class=\"name\">Color</span>\n            <input type=\"color\" id=\"fontcolor\" value={state.color}/>\n        </div>\n    </div>\n</div>",
    "events": [
      {
        "name": "onClick",
        "reducer": "let height = Number(state.height.split(\"px\")[0])-1;\nstate.height = height+\"px\";\n\n\nlet element = document.querySelectorAll(\".selectedForEdit\")[0];\nlet elementStyle = element.style;\n\nelementStyle.height = state.height;",
        "index": 0,
        "publishable": "",
        "publishName": "",
        "id": "lessheight"
      },
      {
        "name": "onClick",
        "reducer": "let height = Number(state.height.split(\"px\")[0])+1;\nstate.height = height+\"px\";\n\nlet element = document.querySelectorAll(\".selectedForEdit\")[0];\nlet elementStyle = element.style;\n\nelementStyle.height = state.height;",
        "index": 1,
        "publishable": "",
        "publishName": "",
        "id": "moreheight"
      },
      {
        "name": "onClick",
        "reducer": "let width = Number(state.width.split(\"px\")[0])-1;\nstate.width = width+\"px\";\n\nlet element = document.querySelectorAll(\".selectedForEdit\")[0];\nlet elementStyle = element.style;\n\nelementStyle.width = state.width;",
        "index": 2,
        "publishable": "",
        "publishName": "",
        "id": "lesswidth"
      },
      {
        "name": "onClick",
        "reducer": "let width = Number(state.width.split(\"px\")[0])+1;\nstate.width = width+\"px\";\n\nlet element = document.querySelectorAll(\".selectedForEdit\")[0];\nlet elementStyle = element.style;\n\nelementStyle.width = state.width;",
        "index": 3,
        "publishable": "",
        "publishName": "",
        "id": "morewidth"
      },
      {
        "name": "onClick",
        "reducer": "let top = Number(state.top.split(\"px\")[0])-1;\nstate.top = top+\"px\";\n\nlet element = document.querySelectorAll(\".selectedForEdit\")[0];\nlet elementStyle = element.style;\n\nelementStyle.top = state.top;",
        "index": 4,
        "publishable": "",
        "publishName": "",
        "id": "lesstop"
      },
      {
        "name": "onClick",
        "reducer": "let top = Number(state.top.split(\"px\")[0])+1;\nstate.top = top+\"px\";\n\nlet element = document.querySelectorAll(\".selectedForEdit\")[0];\nlet elementStyle = element.style;\n\nelementStyle.top = state.top;",
        "index": 5,
        "publishable": "",
        "publishName": "",
        "id": "moretop"
      },
      {
        "name": "onClick",
        "reducer": "let left = Number(state.left.split(\"px\")[0])-1;\nstate.left = left+\"px\";\n\nlet element = document.querySelectorAll(\".selectedForEdit\")[0];\nlet elementStyle = element.style;\n\nelementStyle.left = state.left;",
        "index": 6,
        "publishable": "",
        "publishName": "",
        "id": "moreleft"
      },
      {
        "name": "onClick",
        "reducer": "let left = Number(state.left.split(\"px\")[0])+1;\nstate.left = left+\"px\";\n\nlet element = document.querySelectorAll(\".selectedForEdit\")[0];\nlet elementStyle = element.style;\n\nelementStyle.left = state.left;",
        "index": 7,
        "publishable": "",
        "publishName": "",
        "id": "lessleft"
      },
      {
        "name": "onClick",
        "reducer": "let borderWidth = Number(state.borderWidth.split(\"px\")[0])-1;\nstate.borderWidth = borderWidth+\"px\";\n\nlet element = document.querySelectorAll(\".selectedForEdit\")[0];\nlet elementStyle = element.style;\n\nelementStyle.borderWidth = state.borderWidth;",
        "index": 8,
        "publishable": "",
        "publishName": "",
        "id": "lessborder"
      },
      {
        "name": "onClick",
        "reducer": "let borderWidth = Number(state.borderWidth.split(\"px\")[0])+1;\nstate.borderWidth = borderWidth+\"px\";\n\nlet element = document.querySelectorAll(\".selectedForEdit\")[0];\nlet elementStyle = element.style;\n\nelementStyle.borderWidth = state.borderWidth;",
        "index": 9,
        "publishable": "",
        "publishName": "",
        "id": "moreborder"
      },
      {
        "name": "onClick",
        "reducer": "let space = Number(state.space.split(\"px\")[0])+1;\nstate.space = space+\"px\";",
        "index": 10,
        "publishable": "",
        "publishName": "",
        "id": "morespace"
      },
      {
        "name": "onClick",
        "reducer": "let space = Number(state.space.split(\"px\")[0])-1;\nstate.space = space+\"px\";",
        "index": 11,
        "publishable": "",
        "publishName": "",
        "id": "lessspace"
      },
      {
        "name": "onMouseLeave",
        "reducer": "let element = document.querySelectorAll(\".selectedForEdit\")[0];\nstate.elementHTML = element.innerHTML;",
        "index": 12,
        "publishable": true,
        "publishName": "onHide",
        "id": "properties"
      },
      {
        "name": "onClick",
        "reducer": "let fontSize = Number(state.fontSize.split(\"px\")[0])-1;\nstate.fontSize = fontSize+\"px\";\n\nlet element = document.querySelectorAll(\".selectedForEdit\")[0];\nlet elementStyle = element.style;\n\nelementStyle.fontSize = state.fontSize;",
        "index": 13,
        "publishable": "",
        "publishName": "",
        "id": "lessSize"
      },
      {
        "name": "onClick",
        "reducer": "let fontSize = Number(state.fontSize.split(\"px\")[0])+1;\nstate.fontSize = fontSize+\"px\";\n\nlet element = document.querySelectorAll(\".selectedForEdit\")[0];\nlet elementStyle = element.style;\n\nelementStyle.fontSize = state.fontSize;",
        "index": 14,
        "publishable": "",
        "publishName": "",
        "id": "moreSize"
      }
    ],
    "state": "{\n  \"style\":{\n      \"top\": \"400px\",\n      \"left\": \"208px\"\n  },\n  \"height\": \"100px\",\n  \"width\":\"100px\",\n  \"top\":\"100px\",\n  \"left\":\"100px\",\n  \"borderWidth\":\"100px\",\n  \"color\": \"#874a4a\",\n  \"space\" :\"100px\",\n  \"fontSize\": \"10px\"\n}",
    "style": ".properties {\n    position: absolute;\nborder: 1px solid #2C3134;\n width: 165px;\n font-size: 10px;\n background: rgb(64, 64, 64);\n color: rgba(255,255,255,0.5);\n}\n\n.properties input{\n    width: 50px;\n    padding: 5px;\n    margin-left: 4px;\n}\n\n.properties > div {\n    border: 1px solid #2C3134;\n    padding: 8px;\n}\n\n.properties > div > div:not(:first-child){\n    margin-top:7px;\n}\n\nspan.name {\n    display: inline-block;\n    width: 40px;\n}\n\n.properties .space{\n border: 1px solid #2C3134;\n}\n\n.less{\n    height: 21px;\n    width: 21px;\n    border: 1px solid #2C3134;\n}\n\n.more{\n    height: 21px;\n    width: 21px;\n    border: 1px solid #2C3134;\n}",
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