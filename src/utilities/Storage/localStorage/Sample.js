let sample =[
  {
    "name": "Canvas",
    "markup": "<div className=\"canvasComponent\" id=\"canvas\">\n</div>",
    "events": [],
    "state": "{}",
    "style": ".canvasComponent{\n\theight:100vh;\n    width:100vw;\n    position: fixed;\n    background-color: lightgrey;\n\ttop: 0px;\n    left: 0px;\n}",
    "children": [],
    "id": 198,
    "config": "{}",
    "trueName": "Canvas"
  },
  {
    "name": "Resizable",
    "markup": "<div id=\"resizable\" style={state.style}>\n    <div class='resizer' id=\"topLeft\"></div>\n    <div class='resizer' id=\"topRight\"></div>\n    <div class='resizer' id=\"bottomLeft\"></div>\n    <div class='resizer' id=\"bottomRight\"></div>\n</div>",
    "events": [
      {
        "name": "onMouseDown",
        "reducer": "state.resize=true;\ne.stopPropagation();",
        "index": 0,
        "publishable": "",
        "publishName": "",
        "id": "topLeft"
      },
      {
        "name": "onMouseMove",
        "reducer": "if(state.resize){\n\tlet width = Number(state.style.width.split(\"px\")[0]);\n    let left = Number(state.style.left.split(\"px\")[0]);\n\tstate.style.width = (width + left - e.clientX) + \"px\";\n    state.style.left = e.clientX + \"px\";\n    \n    let height = Number(state.style.height.split(\"px\")[0]);\n    let top = Number(state.style.top.split(\"px\")[0]);\n\tstate.style.height = (height + top - e.clientY) + \"px\";\n    state.style.top = e.clientY + \"px\";\n}\ne.stopPropagation();",
        "index": 1,
        "publishable": "",
        "publishName": "",
        "id": "topLeft"
      },
      {
        "name": "onMouseUp",
        "reducer": "state.resize=false;\ne.stopPropagation();",
        "index": 2,
        "publishable": "",
        "publishName": "",
        "id": "topLeft"
      },
      {
        "name": "onMouseDown",
        "reducer": "state.resize=true;\ne.stopPropagation();",
        "index": 3,
        "publishable": "",
        "publishName": "",
        "id": "bottomLeft"
      },
      {
        "name": "onMouseMove",
        "reducer": "if(state.resize){\n\n\tlet width = Number(state.style.width.split(\"px\")[0]);\n    let left = Number(state.style.left.split(\"px\")[0]);\n\tstate.style.width = (width + left - e.clientX) + \"px\";\n    state.style.left = e.clientX + \"px\";\n\n    let height = Number(state.style.height.split(\"px\")[0]);\n    let top = Number(state.style.top.split(\"px\")[0]);\n\tstate.style.height = e.clientY -top+10  + \"px\";\n}\ne.stopPropagation();",
        "index": 4,
        "publishable": "",
        "publishName": "",
        "id": "bottomLeft"
      },
      {
        "name": "onMouseUp",
        "reducer": "state.resize=false;\ne.stopPropagation();",
        "index": 5,
        "publishable": "",
        "publishName": "",
        "id": "bottomLeft"
      },
      {
        "name": "onMouseDown",
        "reducer": "state.resize=true;\ne.stopPropagation();",
        "index": 6,
        "publishable": "",
        "publishName": "",
        "id": "bottomRight"
      },
      {
        "name": "onMouseUp",
        "reducer": "state.resize=false;\ne.stopPropagation();",
        "index": 7,
        "publishable": "",
        "publishName": "",
        "id": "bottomRight"
      },
      {
        "name": "onMouseMove",
        "reducer": "if(state.resize){\n\n    let height = Number(state.style.height.split(\"px\")[0]);\n    let top = Number(state.style.top.split(\"px\")[0]);\n\tstate.style.height = (e.clientY - top +15 ) + \"px\";\n    \n   \tlet width = Number(state.style.width.split(\"px\")[0]);\n    let left = Number(state.style.left.split(\"px\")[0]);\n\tstate.style.width = ( e.clientX - left + 10) + \"px\";\n\n    \n}\ne.stopPropagation();",
        "index": 8,
        "publishable": "",
        "publishName": "",
        "id": "bottomRight"
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
        "publishable": "",
        "publishName": "",
        "id": "resizable"
      }
    ],
    "state": "{\n\t\"style\":{\n        \"top\": \"200px\",\n        \"left\": \"200px\",\n        \"height\": \"100px\",\n        \"width\": \"100px\"\n\t}\n}",
    "style": "#resizable {\n\tposition: fixed;\n    border: 1px solid green;\n    cursor: grab;\n}\n\nbody,\nhtml {\n  background: black;\n}\n#resizable {\n  background: white;\n  position: absolute;\n\n  border: 3px solid #4286f4;\n  box-sizing: border-box;\n}\n\n\n#resizable .resizer{\n  width: 10px;\n  height: 10px;\n  border-radius: 50%; \n  background: white;\n  border: 3px solid #4286f4;\n  position: absolute;\n}\n\n#resizable .resizer#topLeft {\n  left: -5px;\n  top: -5px;\n  cursor: nwse-resize;\n}\n#resizable .resizer#topRight {\n  right: -5px;\n  top: -5px;\n  cursor: nesw-resize;\n}\n#resizable .resizer#bottomLeft {\n  left: -5px;\n  bottom: -5px;\n  cursor: nesw-resize;\n}\n#resizable .resizer#bottomRight {\n  right: -5px;\n  bottom: -5px;\n  cursor: nwse-resize;\n}",
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
  }
];
module.exports = sample