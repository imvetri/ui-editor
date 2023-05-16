(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.edges = exports.nodes = undefined;

var _Nodes = __webpack_require__(34);

var _Edges = __webpack_require__(35);

exports.nodes = _Nodes.nodes;
exports.edges = _Edges.edges;

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(25);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(8)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// Module
exports.push([module.i, "", ""]);



/***/ }),
/* 26 */,
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// pick all the node events and consolidate them to onChange event to propagate events to next targetNodes TODO


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactflow = __webpack_require__(4);

var _reactflow2 = _interopRequireDefault(_reactflow);

var _initialElements = __webpack_require__(13);

var _CustomNode = __webpack_require__(36);

var _CustomNode2 = _interopRequireDefault(_CustomNode);

__webpack_require__(37);

__webpack_require__(39);

var _ResizableNodeSelected = __webpack_require__(41);

var _ResizableNodeSelected2 = _interopRequireDefault(_ResizableNodeSelected);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var nodeTypes = {
  custom: (0, _react.memo)(_CustomNode2.default),
  ResizableNodeSelected: (0, _react.memo)(_ResizableNodeSelected2.default)

};
var defaultEdgeOptions = {
  style: { strokeWidth: 2, stroke: '#9ca8b3' },
  markerEnd: {
    type: 'arrowclosed'
  }
};
var minimapStyle = {
  height: 120
};
var project = void 0;
var onInit = function onInit(reactFlowInstance) {
  console.log('flow loaded:', reactFlowInstance);
  window.reactFlowInstance = reactFlowInstance;
  window.reactFlowInstance.existingEdge = false;
  project = reactFlowInstance.project;
};

var Flow = function Flow() {
  var _useNodesState = (0, _reactflow.useNodesState)(_initialElements.nodes),
      _useNodesState2 = _slicedToArray(_useNodesState, 3),
      nodes = _useNodesState2[0],
      setNodes = _useNodesState2[1],
      onNodesChange = _useNodesState2[2];

  var _useEdgesState = (0, _reactflow.useEdgesState)(_initialElements.edges),
      _useEdgesState2 = _slicedToArray(_useEdgesState, 3),
      edges = _useEdgesState2[0],
      setEdges = _useEdgesState2[1],
      onEdgesChange = _useEdgesState2[2];

  var onConnect = (0, _react.useCallback)(function (params) {
    window.reactFlowInstance.existingEdge = true;
    var source = params.source,
        target = params.target;

    params.animated = true;
    // for event propagation TODO
    target && target.data && target.data.onConnect && target.data.onConnect(params); // alternative to element?.source?.data?.onDisconnect?.(element); // propagate event to source node
    setEdges(function (eds) {
      return (0, _reactflow.addEdge)(params, eds);
    }), [];
  });

  // we are using a bit of a shortcut here to adjust the edge type
  // this could also be done with a custom edge for example
  var edgesWithUpdatedTypes = edges.map(function (edge) {
    if (edge.sourceHandle) {
      var edgeType = nodes.find(function (node) {
        return node.type === 'custom';
      }).data.selects[edge.sourceHandle];
      edge.type = edgeType;
    }

    return edge;
  });

  var connectingNodeId = (0, _react.useRef)(null);

  var onConnectStart = (0, _react.useCallback)(function (_, _ref) {
    var nodeId = _ref.nodeId;

    console.log("START");
    connectingNodeId.current = nodeId;
  }, []);

  // by default, click on panel creates new node
  var onPaneClick = (0, _react.useCallback)(function (event) {
    if (!window.reactFlowInstance.stopPanelClick) {

      // get nodes
      var selectedNodes = reactFlowInstance.getNodes().filter(function (node) {
        return node.selected;
      });

      // get edges
      var selectedEdges = reactFlowInstance.getEdges().filter(function (edge) {
        return edge.selected;
      });

      // Check if there are nodes selected
      if (selectedNodes.length !== 0) {
        // duplicate these nodes
        var duplicateNodes = selectedNodes.map(function (node) {
          // append dup id
          node = JSON.parse(JSON.stringify(node));
          node.id = "dup" + node.id;
          // make original deselected

          return node;
        });
        // duplicate the edges
        var duplicateEdges = selectedEdges.map(function (edge) {
          // append dup id
          edge = JSON.parse(JSON.stringify(edge));
          edge.source = "dup" + edge.source;
          edge.target = "dup" + edge.target;

          edge.id = "dup" + edge.id;

          return edge;
        });

        // make original nodes deselected
        selectedNodes.forEach(function (node) {
          node.selected = false;
        });
        // make original edges deselected

        selectedEdges.forEach(function (edge) {
          edge.selected = false;
        });
        // set new nodes and edges p

        setNodes(function (nds) {
          return nds.concat.apply(nds, _toConsumableArray(duplicateNodes));
        });
        setEdges(function (eds) {
          return eds.concat.apply(eds, _toConsumableArray(duplicateEdges));
        });
      } else {
        // create a new node

        var id = Math.floor(Math.random() * 1010);
        var newNode = {
          id: "" + id,
          // we are removing the half of the node width (75) to center the new node
          position: window.reactFlowInstance.project({ x: event.clientX - 75, y: event.clientY }),
          data: { label: 'Node ' + id + ' panelcic' },
          type: "custom", // Custom that enables resize on selection
          "sourcePosition": "left",
          "targetPosition": "right",
          "width": 150,
          "height": 36,
          "selected": false,
          "dragging": false,
          style: { background: '#fff', border: '1px solid black', borderRadius: 15, fontSize: 12 }
        };

        setNodes(function (nds) {
          return nds.concat(newNode);
        });
      }
    }
  });

  var onConnectEnd = (0, _react.useCallback)(function (event) {

    var targetIsPane = event.target.classList.contains('react-flow__pane');

    if (targetIsPane && !window.reactFlowInstance.existingEdge) {
      var id = Math.floor(Math.random() * 1010);
      var newNode = {
        id: "" + id,
        // we are removing the half of the node width (75) to center the new node
        position: window.reactFlowInstance.project({ x: event.clientX - 75, y: event.clientY }),
        data: { label: 'Node ' + id },
        type: reactFlowInstance.getNode(connectingNodeId.current).type,
        style: reactFlowInstance.getNode(connectingNodeId.current).style,
        "sourcePosition": "left",
        "targetPosition": "right",
        "width": 150,
        "height": 36,
        "selected": false,
        "dragging": false
      };

      var newEdge = {
        id: "" + id,
        source: "" + connectingNodeId.current,
        target: "" + id,
        targetHandle: null,
        animated: true,
        markerEnd: {
          type: _reactflow.MarkerType.Arrow
        }
      };

      setNodes(function (nds) {
        return nds.concat(newNode);
      });
      setEdges(function (eds) {
        return eds.concat(newEdge);
      });
      event.stopImmediatePropagation();
      event.stopPropagation();
      window.reactFlowInstance.stopPanelClick = true;
    }
  });
  // write the nodes back into localstorage
  localStorage.setItem("nodes", JSON.stringify(nodes));
  localStorage.setItem("edges", JSON.stringify(edges));
  if (window.reactFlowInstance) {
    window.reactFlowInstance.existingEdge = false;
    window.reactFlowInstance.stopPanelClick = false;
  }

  return _react2.default.createElement(
    _reactflow2.default,
    {
      nodes: nodes,
      edges: edgesWithUpdatedTypes,
      onNodesChange: onNodesChange,
      onEdgesChange: onEdgesChange,
      onConnectStart: onConnectStart,
      defaultEdgeOptions: defaultEdgeOptions,

      onConnectEnd: onConnectEnd,
      onConnect: onConnect,
      onInit: onInit,

      onPaneClick: onPaneClick,
      fitView: true,
      attributionPosition: 'top-right',
      nodeTypes: nodeTypes
    },
    _react2.default.createElement(_reactflow.MiniMap, { style: minimapStyle, zoomable: true, pannable: true }),
    _react2.default.createElement(_reactflow.Controls, null),
    _react2.default.createElement(_reactflow.Background, { color: '#1a202c', variant: _reactflow.BackgroundVariant.Dots })
  );
};

exports.default = Flow;

/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nodes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactflow = __webpack_require__(4);

// read from the localstorage 
var localStorageNodes = localStorage.getItem("nodes");
if (localStorageNodes !== null) {
  localStorageNodes = JSON.parse(localStorageNodes);
} else {
  localStorageNodes = [{
    "width": 150,
    "height": 36,
    "id": "13",
    "type": "default",
    "data": {
      "label": "World"
    },
    "position": {
      "x": 1898.5971878930206,
      "y": 288.20211726149967
    },
    "selected": false,
    "positionAbsolute": {
      "x": 1898.5971878930206,
      "y": 288.20211726149967
    },
    "dragging": false,
    "sourcePosition": "left",
    "targetPosition": "right"
  }, {
    "width": 150,
    "height": 36,
    "id": "14",
    "type": "default",
    "data": {
      "label": "Hi"
    },
    "position": {
      "x": 1899.2034234154023,
      "y": 241.17573370646875
    },
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "positionAbsolute": {
      "x": 1899.2034234154023,
      "y": 241.17573370646875
    },
    "dragging": false
  }, {
    "width": 150,
    "height": 36,
    "id": "18",
    "type": "default",
    "data": {
      "label": "Hi component"
    },
    "position": {
      "x": 1620.2043247561237,
      "y": 157.99634170943793
    },
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "positionAbsolute": {
      "x": 1620.2043247561237,
      "y": 157.99634170943793
    },
    "dragging": false
  }, {
    "width": 150,
    "height": 36,
    "id": "19",
    "type": "default",
    "data": {
      "label": "World component"
    },
    "position": {
      "x": 466.729521355541,
      "y": 254.62887553355472
    },
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "positionAbsolute": {
      "x": 466.729521355541,
      "y": 254.62887553355472
    },
    "dragging": false
  }, {
    "width": 150,
    "height": 36,
    "id": "22",
    "type": "default",
    "data": {
      "label": "inner spacing"
    },
    "position": {
      "x": 1902.5397297136876,
      "y": 186.25240673365886
    },
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "positionAbsolute": {
      "x": 1902.5397297136876,
      "y": 186.25240673365886
    },
    "dragging": false,
    "animated": true
  }, {
    "width": 150,
    "height": 36,
    "id": "23",
    "type": "default",
    "data": {
      "label": "black border"
    },
    "position": {
      "x": 1901.8877155601106,
      "y": 129.36797943777265
    },
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "positionAbsolute": {
      "x": 1901.8877155601106,
      "y": 129.36797943777265
    },
    "dragging": false
  }, {
    "width": 150,
    "height": 36,
    "id": "24",
    "type": "default",
    "data": {
      "label": "rounded edge"
    },
    "position": {
      "x": 1902.1722972972975,
      "y": 76.12837837837839
    },
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "positionAbsolute": {
      "x": 1902.1722972972975,
      "y": 76.12837837837839
    },
    "dragging": false
  }, {
    "width": 150,
    "height": 36,
    "id": "35",
    "type": "default",
    "data": {
      "label": "pulse emitter"
    },
    "position": {
      "x": 2818.0077782917547,
      "y": 285.7208242124894
    },
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "positionAbsolute": {
      "x": 2818.0077782917547,
      "y": 285.7208242124894
    },
    "dragging": false
  }, {
    "width": 150,
    "height": 36,
    "id": "37",
    "type": "default",
    "data": {
      "label": "Call"
    },
    "position": {
      "x": 1755.3540155713076,
      "y": -710.1498160504576
    },
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "positionAbsolute": {
      "x": 1755.3540155713076,
      "y": -710.1498160504576
    },
    "dragging": false
  }, {
    "width": 150,
    "height": 36,
    "id": "39",
    "type": "default",
    "data": {
      "label": "E-Mail"
    },
    "position": {
      "x": 1756.9981025108073,
      "y": -647.1335219456952
    },
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "positionAbsolute": {
      "x": 1756.9981025108073,
      "y": -647.1335219456952
    },
    "dragging": false
  }, {
    "width": 150,
    "height": 36,
    "id": "40",
    "type": "default",
    "data": {
      "label": "unKnown"
    },
    "position": {
      "x": 971.8325981877128,
      "y": -49.09036406709337
    },
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "positionAbsolute": {
      "x": 971.8325981877128,
      "y": -49.09036406709337
    },
    "dragging": false,
    "hidden": true
  }, {
    "width": 150,
    "height": 36,
    "id": "41",
    "type": "default",
    "data": {
      "label": "known"
    },
    "position": {
      "x": 771.8325981877128,
      "y": -39.09036406709337
    },
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "positionAbsolute": {
      "x": 771.8325981877128,
      "y": -39.09036406709337
    },
    "dragging": false,
    "hidden": true
  }, {
    "width": 191,
    "height": 39,
    "id": "247",
    "position": {
      "x": 2303.2558759262024,
      "y": -680.7407123544995
    },
    "data": {
      "label": "Alert",
      "style": {
        "background": "black"
      }
    },
    "type": "custom",
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "dragging": false,
    "style": {
      "background": "#fff",
      "border": "1px solid black",
      "borderRadius": 15,
      "fontSize": 12
    },
    "positionAbsolute": {
      "x": 2303.2558759262024,
      "y": -680.7407123544995
    }
  }, {
    "width": 191,
    "height": 39,
    "id": "487",
    "position": {
      "x": 2144.3529848021954,
      "y": 125.02158526388023
    },
    "data": {
      "label": "Visuals"
    },
    "type": "custom",
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "dragging": false,
    "style": {
      "background": "#fff",
      "border": "1px solid black",
      "borderRadius": 15,
      "fontSize": 12
    },
    "positionAbsolute": {
      "x": 2144.3529848021954,
      "y": 125.02158526388023
    }
  }, {
    "width": 191,
    "height": 39,
    "id": "281",
    "position": {
      "x": 2120.1290504887243,
      "y": 390.20991880082806
    },
    "data": {
      "label": "Content"
    },
    "type": "custom",
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "dragging": false,
    "style": {
      "background": "#fff",
      "border": "1px solid black",
      "borderRadius": 15,
      "fontSize": 12
    },
    "positionAbsolute": {
      "x": 2120.1290504887243,
      "y": 390.20991880082806
    },
    "resizing": false
  }, {
    "width": 191,
    "height": 39,
    "id": "943",
    "position": {
      "x": 1269.7457888355273,
      "y": 236.23455435750043
    },
    "data": {
      "label": "onClick"
    },
    "type": "custom",
    "style": {
      "background": "#fff",
      "border": "1px solid black",
      "borderRadius": 15,
      "fontSize": 12
    },
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "dragging": false,
    "positionAbsolute": {
      "x": 1269.7457888355273,
      "y": 236.23455435750043
    },
    "resizing": false
  }, {
    "width": 191,
    "height": 39,
    "id": "152",
    "position": {
      "x": 2118.4129292437087,
      "y": 611.6678779835765
    },
    "data": {
      "label": "Interaction"
    },
    "type": "custom",
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "dragging": false,
    "style": {
      "background": "#fff",
      "border": "1px solid black",
      "borderRadius": 15,
      "fontSize": 12
    },
    "positionAbsolute": {
      "x": 2118.4129292437087,
      "y": 611.6678779835765
    }
  }, {
    "width": 191,
    "height": 39,
    "id": "423",
    "position": {
      "x": -544.0610071323812,
      "y": 50.27828190765052
    },
    "data": {
      "label": "React"
    },
    "type": "custom",
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "dragging": false,
    "style": {
      "background": "#fff",
      "border": "1px solid black",
      "borderRadius": 15,
      "fontSize": 12
    },
    "positionAbsolute": {
      "x": -544.0610071323812,
      "y": 50.27828190765052
    }
  }, {
    "width": 191,
    "height": 39,
    "id": "138",
    "position": {
      "x": -543.5103554422301,
      "y": 151.6390220213987
    },
    "data": {
      "label": "Angular"
    },
    "type": "custom",
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "dragging": false,
    "style": {
      "background": "#fff",
      "border": "1px solid black",
      "borderRadius": 15,
      "fontSize": 12
    },
    "positionAbsolute": {
      "x": -543.5103554422301,
      "y": 151.6390220213987
    }
  }, {
    "width": 191,
    "height": 39,
    "id": "703",
    "position": {
      "x": -540.2919577041212,
      "y": 229.30812975000282
    },
    "data": {
      "label": "Svelte"
    },
    "type": "custom",
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "dragging": false,
    "style": {
      "background": "#fff",
      "border": "1px solid black",
      "borderRadius": 15,
      "fontSize": 12
    },
    "positionAbsolute": {
      "x": -540.2919577041212,
      "y": 229.30812975000282
    }
  }, {
    "width": 191,
    "height": 39,
    "id": "101",
    "position": {
      "x": -1133.8422236583483,
      "y": -57.52415151189087
    },
    "data": {
      "label": "Styled JSX"
    },
    "type": "custom",
    "style": {
      "background": "#fff",
      "border": "1px solid black",
      "borderRadius": 15,
      "fontSize": 12
    },
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "dragging": false,
    "positionAbsolute": {
      "x": -1133.8422236583483,
      "y": -57.52415151189087
    }
  }, {
    "width": 191,
    "height": 39,
    "id": "71",
    "position": {
      "x": -1131.4964927038254,
      "y": -2.267611460939335
    },
    "data": {
      "label": "Styled Components"
    },
    "type": "custom",
    "style": {
      "background": "#fff",
      "border": "1px solid black",
      "borderRadius": 15,
      "fontSize": 12
    },
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "dragging": false,
    "positionAbsolute": {
      "x": -1131.4964927038254,
      "y": -2.267611460939335
    }
  }, {
    "width": 191,
    "height": 39,
    "id": "808",
    "position": {
      "x": -809.7789918247145,
      "y": -4.372934802120177
    },
    "data": {
      "label": "Style Library"
    },
    "type": "custom",
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "dragging": false,
    "style": {
      "background": "#fff",
      "border": "1px solid black",
      "borderRadius": 15,
      "fontSize": 12
    },
    "positionAbsolute": {
      "x": -809.7789918247145,
      "y": -4.372934802120177
    }
  }, {
    "width": 191,
    "height": 39,
    "id": "687",
    "position": {
      "x": -805.3908430336602,
      "y": 79.08237785672432
    },
    "data": {
      "label": "State Library"
    },
    "type": "custom",
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "dragging": false,
    "style": {
      "background": "#fff",
      "border": "1px solid black",
      "borderRadius": 15,
      "fontSize": 12
    },
    "positionAbsolute": {
      "x": -805.3908430336602,
      "y": 79.08237785672432
    }
  }, {
    "width": 191,
    "height": 39,
    "id": "28",
    "position": {
      "x": -1138.3541036223196,
      "y": 69.34728812233817
    },
    "data": {
      "label": "useState"
    },
    "type": "custom",
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "dragging": false,
    "style": {
      "background": "#fff",
      "border": "1px solid black",
      "borderRadius": 15,
      "fontSize": 12
    },
    "positionAbsolute": {
      "x": -1138.3541036223196,
      "y": 69.34728812233817
    }
  }, {
    "width": 191,
    "height": 39,
    "id": "124",
    "position": {
      "x": -1137.927612595758,
      "y": 114.7307856097757
    },
    "data": {
      "label": "Mobx"
    },
    "type": "custom",
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "dragging": false,
    "style": {
      "background": "#fff",
      "border": "1px solid black",
      "borderRadius": 15,
      "fontSize": 12
    },
    "positionAbsolute": {
      "x": -1137.927612595758,
      "y": 114.7307856097757
    }
  }, {
    "width": 191,
    "height": 39,
    "id": "942",
    "position": {
      "x": -795.6578380085352,
      "y": 249.00678417402457
    },
    "data": {
      "label": "State handling"
    },
    "type": "custom",
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "dragging": false,
    "style": {
      "background": "#fff",
      "border": "1px solid black",
      "borderRadius": 15,
      "fontSize": 12
    },
    "positionAbsolute": {
      "x": -795.6578380085352,
      "y": 249.00678417402457
    }
  }, {
    "width": 191,
    "height": 39,
    "id": "4",
    "position": {
      "x": -1139.6578380085352,
      "y": 226.00678417402457
    },
    "data": {
      "label": "Variables"
    },
    "type": "custom",
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "dragging": false,
    "style": {
      "background": "#fff",
      "border": "1px solid black",
      "borderRadius": 15,
      "fontSize": 12
    },
    "positionAbsolute": {
      "x": -1139.6578380085352,
      "y": 226.00678417402457
    }
  }, {
    "width": 191,
    "height": 39,
    "id": "328",
    "position": {
      "x": -1140.6578380085352,
      "y": 285.5067841740246
    },
    "data": {
      "label": "Proxy"
    },
    "type": "custom",
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "dragging": false,
    "style": {
      "background": "#fff",
      "border": "1px solid black",
      "borderRadius": 15,
      "fontSize": 12
    },
    "positionAbsolute": {
      "x": -1140.6578380085352,
      "y": 285.5067841740246
    }
  }, {
    "width": 191,
    "height": 39,
    "id": "31",
    "position": {
      "x": -1560.1578380085352,
      "y": 159.50678417402457
    },
    "data": {
      "label": "Code"
    },
    "type": "custom",
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "dragging": false,
    "style": {
      "background": "#fff",
      "border": "1px solid black",
      "borderRadius": 15,
      "fontSize": 12
    },
    "positionAbsolute": {
      "x": -1560.1578380085352,
      "y": 159.50678417402457
    }
  }, {
    "width": 191,
    "height": 39,
    "id": "296",
    "position": {
      "x": 2023.035919436097,
      "y": -681.0201190592779
    },
    "data": {
      "label": "PagerDuty"
    },
    "type": "custom",
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "dragging": false,
    "style": {
      "background": "#fff",
      "border": "1px solid black",
      "borderRadius": 15,
      "fontSize": 12
    },
    "positionAbsolute": {
      "x": 2023.035919436097,
      "y": -681.0201190592779
    }
  }, {
    "width": 191,
    "height": 39,
    "id": "228",
    "position": {
      "x": 661.7889282266152,
      "y": -771.6871909059277
    },
    "data": {
      "label": "Telemetry"
    },
    "type": "custom",
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "dragging": false,
    "style": {
      "background": "#fff",
      "border": "1px solid black",
      "borderRadius": 15,
      "fontSize": 12
    },
    "positionAbsolute": {
      "x": 661.7889282266152,
      "y": -771.6871909059277
    }
  }, {
    "width": 191,
    "height": 39,
    "id": "795",
    "position": {
      "x": 660.1666412455937,
      "y": -706.4034314719039
    },
    "data": {
      "label": "Mux"
    },
    "type": "custom",
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "dragging": false,
    "style": {
      "background": "#fff",
      "border": "1px solid black",
      "borderRadius": 15,
      "fontSize": 12
    },
    "positionAbsolute": {
      "x": 660.1666412455937,
      "y": -706.4034314719039
    }
  }, {
    "width": 191,
    "height": 39,
    "id": "1001",
    "position": {
      "x": 1236.7348182370736,
      "y": -678.2473422303854
    },
    "data": {
      "label": "Run books"
    },
    "type": "custom",
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "dragging": false,
    "style": {
      "background": "#fff",
      "border": "1px solid black",
      "borderRadius": 15,
      "fontSize": 12
    },
    "positionAbsolute": {
      "x": 1236.7348182370736,
      "y": -678.2473422303854
    }
  }, {
    "width": 191,
    "height": 39,
    "id": "426",
    "position": {
      "x": 658.4549052270727,
      "y": -639.8071098863429
    },
    "data": {
      "label": "New relic"
    },
    "type": "custom",
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "dragging": false,
    "style": {
      "background": "#fff",
      "border": "1px solid black",
      "borderRadius": 15,
      "fontSize": 12
    },
    "positionAbsolute": {
      "x": 658.4549052270727,
      "y": -639.8071098863429
    }
  }, {
    "width": 191,
    "height": 39,
    "id": "153",
    "position": {
      "x": 1482.7185843951308,
      "y": -680.6933872764321
    },
    "data": {
      "label": "on call"
    },
    "type": "custom",
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "dragging": false,
    "style": {
      "background": "#fff",
      "border": "1px solid black",
      "borderRadius": 15,
      "fontSize": 12
    },
    "positionAbsolute": {
      "x": 1482.7185843951308,
      "y": -680.6933872764321
    }
  }, {
    "width": 191,
    "height": 39,
    "id": "420",
    "position": {
      "x": 2031.1430606106226,
      "y": -199.97339863381274
    },
    "data": {
      "label": "Jira"
    },
    "type": "custom",
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "dragging": false,
    "style": {
      "background": "#fff",
      "border": "1px solid black",
      "borderRadius": 15,
      "fontSize": 12
    },
    "positionAbsolute": {
      "x": 2031.1430606106226,
      "y": -199.97339863381274
    }
  }, {
    "width": 191,
    "height": 39,
    "id": "280",
    "position": {
      "x": 1776.954024537408,
      "y": -200.57431834084156
    },
    "data": {
      "label": "Ready for QA"
    },
    "type": "custom",
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "dragging": false,
    "style": {
      "background": "#fff",
      "border": "1px solid black",
      "borderRadius": 15,
      "fontSize": 12
    },
    "positionAbsolute": {
      "x": 1776.954024537408,
      "y": -200.57431834084156
    }
  }, {
    "width": 191,
    "height": 39,
    "id": "116",
    "position": {
      "x": 971.3446790055671,
      "y": -740.5749738649046
    },
    "data": {
      "label": "Web Entertainment"
    },
    "type": "custom",
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "dragging": false,
    "style": {
      "background": "#fff",
      "border": "1px solid black",
      "borderRadius": 15,
      "fontSize": 12
    },
    "positionAbsolute": {
      "x": 971.3446790055671,
      "y": -740.5749738649046
    }
  }, {
    "width": 191,
    "height": 39,
    "id": "339",
    "position": {
      "x": 974.1089234952403,
      "y": -618.794489550368
    },
    "data": {
      "label": "Web User services"
    },
    "type": "custom",
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "dragging": false,
    "style": {
      "background": "#fff",
      "border": "1px solid black",
      "borderRadius": 15,
      "fontSize": 12
    },
    "positionAbsolute": {
      "x": 974.1089234952403,
      "y": -618.794489550368
    }
  }, {
    "width": 642,
    "height": 52,
    "id": "343",
    "position": {
      "x": -325.56373006412764,
      "y": -616.3535715723456
    },
    "data": {
      "label": "https://docs.google.com/presentation/d/1dfBJ7-hmWyRgxUjIL8vjLLMpErt0r6t-uvS4qr7cXIY/edit#slide=id.g228b1168528_0_25"
    },
    "type": "custom",
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "dragging": false,
    "style": {
      "background": "#fff",
      "border": "1px solid black",
      "borderRadius": 15,
      "fontSize": 12,
      "width": 642,
      "height": 52
    },
    "positionAbsolute": {
      "x": -325.56373006412764,
      "y": -616.3535715723456
    },
    "resizing": false
  }, {
    "width": 191,
    "height": 39,
    "id": "146",
    "position": {
      "x": 656.6152283312381,
      "y": -579.9064006787995
    },
    "data": {
      "label": "web-pd-slack"
    },
    "type": "custom",
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "dragging": false,
    "style": {
      "background": "#fff",
      "border": "1px solid black",
      "borderRadius": 15,
      "fontSize": 12
    },
    "positionAbsolute": {
      "x": 656.6152283312381,
      "y": -579.9064006787995
    }
  }, {
    "width": 191,
    "height": 39,
    "id": "442",
    "position": {
      "x": 2618.104169159044,
      "y": -759.7144014686338
    },
    "data": {
      "label": "Grafana"
    },
    "type": "custom",
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "dragging": false,
    "style": {
      "background": "#fff",
      "border": "1px solid black",
      "borderRadius": 15,
      "fontSize": 12
    },
    "positionAbsolute": {
      "x": 2618.104169159044,
      "y": -759.7144014686338
    }
  }, {
    "width": 191,
    "height": 39,
    "id": "631",
    "position": {
      "x": 3933.7805035325346,
      "y": -752.9127170014381
    },
    "data": {
      "label": "Outlook"
    },
    "type": "custom",
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "dragging": false,
    "style": {
      "background": "#fff",
      "border": "1px solid black",
      "borderRadius": 15,
      "fontSize": 12
    },
    "positionAbsolute": {
      "x": 3933.7805035325346,
      "y": -752.9127170014381
    }
  }, {
    "width": 191,
    "height": 39,
    "id": "62",
    "position": {
      "x": 3931.7805035325346,
      "y": -698.9127170014381
    },
    "data": {
      "label": "Slack"
    },
    "type": "custom",
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "dragging": false,
    "style": {
      "background": "#fff",
      "border": "1px solid black",
      "borderRadius": 15,
      "fontSize": 12
    },
    "positionAbsolute": {
      "x": 3931.7805035325346,
      "y": -698.9127170014381
    }
  }, {
    "width": 191,
    "height": 39,
    "id": "297",
    "position": {
      "x": 3932.2805035325346,
      "y": -641.4127170014381
    },
    "data": {
      "label": "Discovery Gmail"
    },
    "type": "custom",
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "dragging": false,
    "style": {
      "background": "#fff",
      "border": "1px solid black",
      "borderRadius": 15,
      "fontSize": 12
    },
    "positionAbsolute": {
      "x": 3932.2805035325346,
      "y": -641.4127170014381
    }
  }, {
    "width": 191,
    "height": 39,
    "id": "620",
    "position": {
      "x": 3932.7805035325346,
      "y": -580.4127170014381
    },
    "data": {
      "label": "youtube"
    },
    "type": "custom",
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "dragging": false,
    "style": {
      "background": "#fff",
      "border": "1px solid black",
      "borderRadius": 15,
      "fontSize": 12
    },
    "positionAbsolute": {
      "x": 3932.7805035325346,
      "y": -580.4127170014381
    }
  }, {
    "width": 191,
    "height": 39,
    "id": "202",
    "position": {
      "x": 3934.7805035325346,
      "y": -520.4127170014381
    },
    "data": {
      "label": "pinterest"
    },
    "type": "custom",
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "dragging": false,
    "style": {
      "background": "#fff",
      "border": "1px solid black",
      "borderRadius": 15,
      "fontSize": 12
    },
    "positionAbsolute": {
      "x": 3934.7805035325346,
      "y": -520.4127170014381
    }
  }, {
    "width": 191,
    "height": 39,
    "id": "59",
    "position": {
      "x": 3936.2805035325346,
      "y": -459.41271700143807
    },
    "data": {
      "label": "reddit"
    },
    "type": "custom",
    "sourcePosition": "left",
    "targetPosition": "right",
    "selected": false,
    "dragging": false,
    "style": {
      "background": "#fff",
      "border": "1px solid black",
      "borderRadius": 15,
      "fontSize": 12
    },
    "positionAbsolute": {
      "x": 3936.2805035325346,
      "y": -459.41271700143807
    }
  }].map(function (node) {
    // add onConnect for each node.

    var nodeData = {
      label: node.data.label,
      onConnect: function onConnect(params) {
        console.log('Edge connected:', params);
      },
      onDisconnect: function onDisconnect(element) {
        console.log('Edge disconnected:', element);
      }
    };
    node.data.style = node.data.style || {};
    node.data.style.padding = '10px 20px';
    node.data = _extends({}, node.data, nodeData);
    return node;
  });
}

var nodes = exports.nodes = localStorageNodes;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.edges = undefined;

var _reactflow = __webpack_require__(4);

// read from the localstorage 
var localStorageEdges = localStorage.getItem("edges");
if (localStorageEdges !== null) {
    localStorageEdges = JSON.parse(localStorageEdges);
} else {
    localStorageEdges = [{ "source": "40", "sourceHandle": null, "target": "41", "targetHandle": null, "id": "reactflow__edge-6-39", "animated": true, "markerEnd": { "type": "arrow" }, "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "487", "sourceHandle": null, "target": "25", "targetHandle": null, "animated": true, "id": "reactflow__edge-487-25", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "487", "sourceHandle": null, "target": "24", "targetHandle": null, "animated": true, "id": "reactflow__edge-487-24", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "487", "sourceHandle": null, "target": "23", "targetHandle": null, "animated": true, "id": "reactflow__edge-487-23", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "487", "sourceHandle": null, "target": "22", "targetHandle": null, "animated": true, "id": "reactflow__edge-487-22", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "35", "sourceHandle": null, "target": "487", "targetHandle": null, "animated": true, "id": "reactflow__edge-35-487", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "35", "sourceHandle": null, "target": "281", "targetHandle": null, "animated": true, "id": "reactflow__edge-35-281", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "281", "sourceHandle": null, "target": "14", "targetHandle": null, "animated": true, "id": "reactflow__edge-281-14", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "281", "sourceHandle": null, "target": "13", "targetHandle": null, "animated": true, "id": "reactflow__edge-281-13", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "14", "sourceHandle": null, "target": "18", "targetHandle": null, "animated": true, "id": "reactflow__edge-14-18", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "25", "sourceHandle": null, "target": "19", "targetHandle": null, "animated": true, "id": "reactflow__edge-25-19", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "13", "sourceHandle": null, "target": "19", "targetHandle": null, "animated": true, "id": "reactflow__edge-13-19", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "152", "sourceHandle": null, "target": "943", "targetHandle": null, "animated": true, "id": "reactflow__edge-152-943", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "18", "sourceHandle": null, "target": "943", "targetHandle": null, "animated": true, "id": "reactflow__edge-18-943", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "943", "sourceHandle": null, "target": "19", "targetHandle": null, "animated": true, "id": "reactflow__edge-943-19", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "35", "sourceHandle": null, "target": "152", "targetHandle": null, "animated": true, "id": "reactflow__edge-35-152", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "18", "sourceHandle": null, "target": "35", "targetHandle": null, "animated": true, "id": "reactflow__edge-18-35", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "19", "sourceHandle": null, "target": "35", "targetHandle": null, "animated": true, "id": "reactflow__edge-19-35", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "24", "sourceHandle": null, "target": "18", "targetHandle": null, "animated": true, "id": "reactflow__edge-24-18", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "23", "sourceHandle": null, "target": "18", "targetHandle": null, "animated": true, "id": "reactflow__edge-23-18", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "22", "sourceHandle": null, "target": "18", "targetHandle": null, "animated": true, "id": "reactflow__edge-22-18", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "24", "sourceHandle": null, "target": "19", "targetHandle": null, "animated": true, "id": "reactflow__edge-24-19", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "22", "sourceHandle": null, "target": "19", "targetHandle": null, "animated": true, "id": "reactflow__edge-22-19", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "423", "sourceHandle": null, "target": "687", "targetHandle": null, "animated": true, "id": "reactflow__edge-423-687", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "687", "sourceHandle": null, "target": "28", "targetHandle": null, "animated": true, "id": "reactflow__edge-687-28", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "687", "sourceHandle": null, "target": "124", "targetHandle": null, "animated": true, "id": "reactflow__edge-687-124", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "808", "sourceHandle": null, "target": "71", "targetHandle": null, "animated": true, "id": "reactflow__edge-808-71", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "808", "sourceHandle": null, "target": "101", "targetHandle": null, "animated": true, "id": "reactflow__edge-808-101", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "423", "sourceHandle": null, "target": "808", "targetHandle": null, "animated": true, "id": "reactflow__edge-423-808", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "703", "sourceHandle": null, "target": "942", "targetHandle": null, "animated": true, "id": "reactflow__edge-703-942", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "942", "sourceHandle": null, "target": "4", "targetHandle": null, "animated": true, "id": "reactflow__edge-942-4", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "942", "sourceHandle": null, "target": "328", "targetHandle": null, "animated": true, "id": "reactflow__edge-942-328", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "138", "sourceHandle": null, "target": "31", "targetHandle": null, "animated": true, "id": "reactflow__edge-138-31", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "4", "sourceHandle": null, "target": "31", "targetHandle": null, "animated": true, "id": "reactflow__edge-4-31", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "328", "sourceHandle": null, "target": "31", "targetHandle": null, "animated": true, "id": "reactflow__edge-328-31", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "124", "sourceHandle": null, "target": "31", "targetHandle": null, "animated": true, "id": "reactflow__edge-124-31", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "28", "sourceHandle": null, "target": "31", "targetHandle": null, "animated": true, "id": "reactflow__edge-28-31", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "71", "sourceHandle": null, "target": "31", "targetHandle": null, "animated": true, "id": "reactflow__edge-71-31", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "101", "sourceHandle": null, "target": "31", "targetHandle": null, "animated": true, "id": "reactflow__edge-101-31", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "296", "sourceHandle": null, "target": "37", "targetHandle": null, "animated": true, "id": "reactflow__edge-296-37", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "296", "sourceHandle": null, "target": "39", "targetHandle": null, "animated": true, "id": "reactflow__edge-296-39", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "247", "sourceHandle": null, "target": "296", "targetHandle": null, "animated": true, "id": "reactflow__edge-247-296", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "37", "sourceHandle": null, "target": "153", "targetHandle": null, "animated": true, "id": "reactflow__edge-37-153", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "39", "sourceHandle": null, "target": "153", "targetHandle": null, "animated": true, "id": "reactflow__edge-39-153", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "420", "sourceHandle": null, "target": "280", "targetHandle": null, "animated": true, "id": "reactflow__edge-420-280", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "153", "sourceHandle": null, "target": "1001", "targetHandle": null, "animated": true, "id": "reactflow__edge-153-1001", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "1001", "sourceHandle": null, "target": "116", "targetHandle": null, "animated": true, "id": "reactflow__edge-1001-116", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "1001", "sourceHandle": null, "target": "339", "targetHandle": null, "animated": true, "id": "reactflow__edge-1001-339", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "116", "sourceHandle": null, "target": "228", "targetHandle": null, "animated": true, "id": "reactflow__edge-116-228", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "116", "sourceHandle": null, "target": "795", "targetHandle": null, "animated": true, "id": "reactflow__edge-116-795", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "116", "sourceHandle": null, "target": "426", "targetHandle": null, "animated": true, "id": "reactflow__edge-116-426", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "116", "sourceHandle": null, "target": "146", "targetHandle": null, "animated": true, "id": "reactflow__edge-116-146", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "339", "sourceHandle": null, "target": "146", "targetHandle": null, "animated": true, "id": "reactflow__edge-339-146", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "339", "sourceHandle": null, "target": "426", "targetHandle": null, "animated": true, "id": "reactflow__edge-339-426", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "339", "sourceHandle": null, "target": "795", "targetHandle": null, "animated": true, "id": "reactflow__edge-339-795", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "339", "sourceHandle": null, "target": "228", "targetHandle": null, "animated": true, "id": "reactflow__edge-339-228", "selected": false }, { "style": { "strokeWidth": 2, "stroke": "#9ca8b3" }, "markerEnd": { "type": "arrowclosed" }, "source": "442", "sourceHandle": null, "target": "247", "targetHandle": null, "animated": true, "id": "reactflow__edge-442-247", "selected": false }];
}

var edges = exports.edges = localStorageEdges;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactflow = __webpack_require__(4);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _initialElements = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_initialElements.nodes);
var CustomNode = function CustomNode(_ref) {
  var id = _ref.id,
      data = _ref.data,
      selected = _ref.selected;

  var _useReactFlow = (0, _reactflow.useReactFlow)(),
      setNodes = _useReactFlow.setNodes;

  var store = (0, _reactflow.useStoreApi)();

  var onChange = function onChange(evt) {
    var _store$getState = store.getState(),
        nodeInternals = _store$getState.nodeInternals;

    setNodes(Array.from(nodeInternals.values()).map(function (node) {
      if (node.id === id) {
        node.data = _extends({}, node.data, {
          label: evt.target.value
        });
      }

      return node;
    }));
    data.onChange();
  };

  var onResizeEnd = function onResizeEnd(event) {
    // set node data properties with the new size
    var _store$getState2 = store.getState(),
        nodeInternals = _store$getState2.nodeInternals;

    setNodes(Array.from(nodeInternals.values()).map(function (node) {
      if (node.id === id) {
        node.data.style = node.data.style || { height: "", width: "" };

        node.data = _extends({}, node.data, {
          style: _extends({}, node.data.style, {
            height: node.height,
            width: node.width
          })
        });
      }

      return node;
    }));
  };

  var children = _react2.default.createElement(
    'div',
    { style: data.style },
    _react2.default.createElement('input', { onChange: onChange, type: 'text', style: { border: 'none' }, value: data.label })
  );

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactflow.NodeResizer, { color: '#ff0071', isVisible: selected, minWidth: 100, minHeight: 30, onResizeEnd: onResizeEnd.bind(undefined) }),
    children,
    _react2.default.createElement(_reactflow.Handle, { type: 'source', position: _reactflow.Position.Left, style: { background: '#000' } }),
    _react2.default.createElement(_reactflow.Handle, { type: 'target', position: _reactflow.Position.Right, style: { background: '#000' } })
  );
};

exports.default = CustomNode;

/***/ }),
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(40);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(8)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// Module
exports.push([module.i, "\n  \n  .react-flow__node.circle {\n    border-radius: 50%;\n    width: 60px;\n    height: 60px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: 700;\n  }\n  \n  .react-flow__node.annotation {\n    border-radius: 0;\n    text-align: left;\n    background: white;\n    border: none;\n    line-height: 1.4;\n    width: 225px;\n    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 15%), 0 2px 4px -1px rgb(0 0 0 / 8%);\n  }\n  \n  .react-flow__node.annotation .react-flow__handle {\n    display: none;\n  }\n  \n  .custom-node__header {\n    padding: 8px 10px;\n    border-bottom: 1px solid #e2e8f0;\n  }\n  \n  .custom-node__body {\n    padding: 10px;\n  }\n  \n  .custom-node__select {\n    position: relative;\n    margin-bottom: 10px;\n  }\n  \n  .custom-node__select select {\n    width: 100%;\n    margin-top: 5px;\n    font-size: 10px;\n  }\n  ", ""]);



/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactflow = __webpack_require__(4);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ResizableNodeSelected = function ResizableNodeSelected(_ref) {
  var data = _ref.data,
      selected = _ref.selected;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactflow.NodeResizer, { color: '#ff0071', isVisible: selected, minWidth: 100, minHeight: 30 }),
    _react2.default.createElement(_reactflow.Handle, { type: 'source', position: _reactflow.Position.Left }),
    _react2.default.createElement(
      'div',
      { style: { padding: 10 } },
      data.label
    ),
    _react2.default.createElement(_reactflow.Handle, { type: 'target', position: _reactflow.Position.Right })
  );
};

exports.default = ResizableNodeSelected;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(5);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(24);

var _Flow = __webpack_require__(27);

var _Flow2 = _interopRequireDefault(_Flow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libraries.

// Dependencies.


var Index = function (_Component) {
    _inherits(Index, _Component);

    function Index(props) {
        _classCallCheck(this, Index);

        return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
    }

    _createClass(Index, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(_Flow2.default, null);
        }
    }]);

    return Index;
}(_react.Component);

console.log("Source code https://github.com/imvetri/ui-editor");
_reactDom2.default.render(_react2.default.createElement(Index, null), document.getElementById("index"));

/***/ })
]]);