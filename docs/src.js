(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(44);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(18)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// Module
exports.push([module.i, "", ""]);



/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
// pick all the node events and consolidate them to onChange event to propagate events to next targetNodes TODO


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactflow = __webpack_require__(19);

var _reactflow2 = _interopRequireDefault(_reactflow);

var _initialElements = __webpack_require__(53);

var _CustomNode = __webpack_require__(56);

var _CustomNode2 = _interopRequireDefault(_CustomNode);

__webpack_require__(57);

__webpack_require__(59);

var _ResizeRotateNode = __webpack_require__(61);

var _ResizeRotateNode2 = _interopRequireDefault(_ResizeRotateNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nodeTypes = {
  custom: (0, _react.memo)(_CustomNode2.default),
  resizeRotate: _ResizeRotateNode2.default

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
  debugger;
  console.log('flow loaded:', reactFlowInstance);
  window.reactFlowInstance = reactFlowInstance;
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
    var source = params.source,
        target = params.target;
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

    connectingNodeId.current = nodeId;
  }, []);

  var onConnectEnd = (0, _react.useCallback)(function (event) {
    debugger;
    var targetIsPane = event.target.classList.contains('react-flow__pane');

    if (targetIsPane) {
      var id = Math.floor(Math.random() * 1010);
      var newNode = {
        id: "" + id,
        // we are removing the half of the node width (75) to center the new node
        position: window.reactFlowInstance.project({ x: event.clientX - 75, y: event.clientY }),
        data: { label: 'Node ' + id },
        type: "default",
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
    }
  });

  return _react2.default.createElement(
    _reactflow2.default,
    {
      nodes: nodes,
      edges: edgesWithUpdatedTypes,
      onNodesChange: onNodesChange,
      onEdgesChange: onEdgesChange,
      onConnectStart: onConnectStart,

      onConnectEnd: onConnectEnd,
      onConnect: onConnect,
      onInit: onInit,
      fitView: true,
      attributionPosition: 'top-right',
      nodeTypes: nodeTypes
    },
    _react2.default.createElement(_reactflow.MiniMap, { style: minimapStyle, zoomable: true, pannable: true }),
    _react2.default.createElement(_reactflow.Controls, null)
  );
};

exports.default = Flow;

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.edges = exports.nodes = undefined;

var _Nodes = __webpack_require__(54);

var _Edges = __webpack_require__(55);

exports.nodes = _Nodes.nodes;
exports.edges = _Edges.edges;

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.nodes = undefined;

var _reactflow = __webpack_require__(19);

var nodes = exports.nodes = [{
    "id": "13",
    "type": "default",
    "data": {
        "label": "World"
    },
    "position": {
        "x": 1888.5101351351352,
        "y": 447.07319819819827
    },
    "width": 150,
    "height": 36,
    "selected": false,
    "positionAbsolute": {
        "x": 1888.5101351351352,
        "y": 447.07319819819827
    },
    "dragging": false,
    "sourcePosition": "left",
    "targetPosition": "right"
}, {
    "id": "14",
    "type": "default",
    "data": {
        "label": "Hi"
    },
    "position": {
        "x": 1890.3772522522524,
        "y": 368.52477477477476
    },
    "sourcePosition": "left",
    "targetPosition": "right",
    "width": 150,
    "height": 36,
    "selected": false,
    "positionAbsolute": {
        "x": 1890.3772522522524,
        "y": 368.52477477477476
    },
    "dragging": false
}, {
    "id": "15",
    "type": "default",
    "data": {
        "label": "Content"
    },
    "position": {
        "x": 1194.5810022155242,
        "y": 386.42000892433816
    },
    "sourcePosition": "left",
    "targetPosition": "right",
    "width": 150,
    "height": 36,
    "selected": false,
    "positionAbsolute": {
        "x": 1194.5810022155242,
        "y": 386.42000892433816
    },
    "dragging": false
}, {
    "id": "16",
    "type": "default",
    "data": {
        "label": "Content"
    },
    "position": {
        "x": 1683.8912541033617,
        "y": 331.97368686700094
    },
    "sourcePosition": "left",
    "targetPosition": "right",
    "width": 150,
    "height": 36,
    "selected": false,
    "positionAbsolute": {
        "x": 1683.8912541033617,
        "y": 331.97368686700094
    },
    "dragging": false
}, {
    "id": "17",
    "type": "default",
    "data": {
        "label": "onClick"
    },
    "position": {
        "x": 1195.3603603603603,
        "y": 302.19031531531533
    },
    "sourcePosition": "left",
    "targetPosition": "right",
    "width": 150,
    "height": 36,
    "selected": false,
    "positionAbsolute": {
        "x": 1195.3603603603603,
        "y": 302.19031531531533
    },
    "dragging": false
}, {
    "id": "18",
    "type": "default",
    "data": {
        "label": "Hi component"
    },
    "position": {
        "x": 1389.686411374611,
        "y": 303.0652403138418
    },
    "sourcePosition": "left",
    "targetPosition": "right",
    "width": 150,
    "height": 36,
    "selected": false,
    "positionAbsolute": {
        "x": 1389.686411374611,
        "y": 303.0652403138418
    },
    "dragging": false
}, {
    "id": "19",
    "type": "default",
    "data": {
        "label": "World component"
    },
    "position": {
        "x": 1015.2533783783783,
        "y": 301.13738738738743
    },
    "sourcePosition": "left",
    "targetPosition": "right",
    "width": 150,
    "height": 36,
    "selected": false,
    "positionAbsolute": {
        "x": 1015.2533783783783,
        "y": 301.13738738738743
    },
    "dragging": false
}, {
    "id": "20",
    "type": "default",
    "data": {
        "label": "Visuals"
    },
    "position": {
        "x": 1682.9037164922222,
        "y": 253.63344566994004
    },
    "sourcePosition": "left",
    "targetPosition": "right",
    "width": 150,
    "height": 36,
    "selected": false,
    "positionAbsolute": {
        "x": 1682.9037164922222,
        "y": 253.63344566994004
    },
    "dragging": false,
    "animated": true
}, {
    "id": "21",
    "type": "default",
    "data": {
        "label": "Visuals"
    },
    "position": {
        "x": 1201.4416625817782,
        "y": 222.74707052643868
    },
    "sourcePosition": "left",
    "targetPosition": "right",
    "width": 150,
    "height": 36,
    "selected": false,
    "positionAbsolute": {
        "x": 1201.4416625817782,
        "y": 222.74707052643868
    },
    "dragging": false,
    "animated": true
}, {
    "id": "22",
    "type": "default",
    "data": {
        "label": "inner spacing"
    },
    "position": {
        "x": 1884.8873873873877,
        "y": 231.64414414414418
    },
    "sourcePosition": "left",
    "targetPosition": "right",
    "width": 150,
    "height": 36,
    "selected": false,
    "positionAbsolute": {
        "x": 1884.8873873873877,
        "y": 231.64414414414418
    },
    "dragging": false,
    "animated": true
}, {
    "id": "23",
    "type": "default",
    "data": {
        "label": "black border"
    },
    "position": {
        "x": 1888.018018018018,
        "y": 162.15090090090092
    },
    "sourcePosition": "left",
    "targetPosition": "right",
    "width": 150,
    "height": 36,
    "selected": false,
    "positionAbsolute": {
        "x": 1888.018018018018,
        "y": 162.15090090090092
    },
    "dragging": false
}, {
    "id": "24",
    "type": "default",
    "data": {
        "label": "rounded edge"
    },
    "position": {
        "x": 1881.6722972972975,
        "y": 82.12837837837839
    },
    "sourcePosition": "left",
    "targetPosition": "right",
    "width": 150,
    "height": 36,
    "selected": false,
    "positionAbsolute": {
        "x": 1881.6722972972975,
        "y": 82.12837837837839
    },
    "dragging": false
}, {
    "id": "25",
    "type": "default",
    "data": {
        "label": "red border"
    },
    "position": {
        "x": 1872.0760590915545,
        "y": -21.709226760550578
    },
    "sourcePosition": "left",
    "targetPosition": "right",
    "width": 150,
    "height": 36,
    "selected": false,
    "positionAbsolute": {
        "x": 1872.0760590915545,
        "y": -21.709226760550578
    },
    "dragging": false
}, {
    "id": "35",
    "type": "default",
    "data": {
        "label": "pulse emitter"
    },
    "position": {
        "x": 1872.0760590915545,
        "y": -121.70922676055058
    },
    "sourcePosition": "left",
    "targetPosition": "right",
    "width": 150,
    "height": 36,
    "selected": false,
    "positionAbsolute": {
        "x": 1872.0760590915545,
        "y": -21.709226760550578
    },
    "dragging": false
}, {
    "id": "36",
    "type": "default",
    "data": {
        "label": "PagerDuty"
    },
    "position": {
        "x": 1860.7403287383427,
        "y": -564.5002939421724
    },
    "sourcePosition": "left",
    "targetPosition": "right",
    "width": 150,
    "height": 36,
    "selected": false,
    "positionAbsolute": {
        "x": 1860.7403287383427,
        "y": -564.5002939421724
    },
    "dragging": false
}, {
    "id": "37",
    "type": "default",
    "data": {
        "label": "Call"
    },
    "position": {
        "x": 1584.4462518628675,
        "y": -663.1827970160771
    },
    "sourcePosition": "left",
    "targetPosition": "right",
    "width": 150,
    "height": 36,
    "selected": false,
    "positionAbsolute": {
        "x": 1584.4462518628675,
        "y": -663.1827970160771
    },
    "dragging": false
}, {
    "id": "38",
    "type": "default",
    "data": {
        "label": "SMS"
    },
    "position": {
        "x": 1479.7894271906848,
        "y": -579.0727586616322
    },
    "sourcePosition": "left",
    "targetPosition": "right",
    "width": 150,
    "height": 36,
    "selected": false,
    "positionAbsolute": {
        "x": 1479.7894271906848,
        "y": -579.0727586616322
    },
    "dragging": false
}, {
    "id": "39",
    "type": "default",
    "data": {
        "label": "E-Mail"
    },
    "position": {
        "x": 1359.6248885765615,
        "y": -491.8814312487152
    },
    "sourcePosition": "left",
    "targetPosition": "right",
    "width": 150,
    "height": 36,
    "selected": true,
    "positionAbsolute": {
        "x": 1359.6248885765615,
        "y": -491.8814312487152
    },
    "dragging": false
}, {
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
    "width": 150,
    "height": 36,
    "selected": false,
    "positionAbsolute": {
        "x": 1371.8325981877128,
        "y": -49.09036406709337
    },
    "dragging": false
}, {
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
    "width": 150,
    "height": 36,
    "selected": false,
    "positionAbsolute": {
        "x": 1371.8325981877128,
        "y": -49.09036406709337
    },
    "dragging": false
}, {
    "id": "42",
    "type": "default",
    "data": {
        "label": "New Relic"
    },
    "position": {
        "x": 1860.8791684214038,
        "y": -437.58488494539415
    },
    "sourcePosition": "left",
    "targetPosition": "right",
    "width": 150,
    "height": 36,
    "selected": false,
    "positionAbsolute": {
        "x": 1860.8791684214038,
        "y": -437.58488494539415
    },
    "dragging": false
}, {
    id: '1',
    position: { x: 100, y: 100 },
    data: { label: 'Node 1' },
    type: 'resizeRotate',
    sourcePosition: _reactflow.Position.Bottom,
    targetPosition: _reactflow.Position.Top,
    selected: true,
    style: { width: 180, height: 100 }
}, {
    id: '2',
    position: { x: 100, y: 400 },
    data: { label: 'Node 2' },
    type: 'resizeRotate',
    sourcePosition: _reactflow.Position.Bottom,
    targetPosition: _reactflow.Position.Top,
    style: { width: 180, height: 100 }
}].map(function (node) {
    // add onConnect for each node.

    var nodeData = {
        label: node.data.label,
        onConnect: function onConnect(params) {
            debugger;
            console.log('Edge connected:', params);
        },
        onDisconnect: function onDisconnect(element) {
            debugger;
            console.log('Edge disconnected:', element);
        }
    };
    node.data = nodeData;
    return node;
});

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.edges = undefined;

var _reactflow = __webpack_require__(19);

var edges = exports.edges = [{
    "source": "24",
    "target": "20",
    "id": "reactflow__edge-20-24",
    "animated": true,
    markerEnd: {
        type: _reactflow.MarkerType.Arrow
    }
}, {
    "source": "23",
    "target": "20",
    "id": "reactflow__edge-20-23",
    "animated": true,
    markerEnd: {
        type: _reactflow.MarkerType.Arrow
    }
}, {
    id: '1->2',
    source: '1',
    target: '2',
    type: 'smoothstep'
}, {
    "source": "22",
    "target": "20",
    "id": "reactflow__edge-20-22",
    markerEnd: {
        type: _reactflow.MarkerType.Arrow
    }
}, {
    "source": "20",
    "target": "18",
    "id": "reactflow__edge-18-20",
    "animated": true,
    markerEnd: {
        type: _reactflow.MarkerType.Arrow
    }
}, {
    "source": "14",
    "target": "16",
    "id": "reactflow__edge-16-14",
    "animated": true,
    markerEnd: {
        type: _reactflow.MarkerType.Arrow
    }
}, {
    "source": "16",
    "target": "18",
    "id": "reactflow__edge-18-16",
    "animated": true,
    markerEnd: {
        type: _reactflow.MarkerType.Arrow
    }
}, {
    "source": "18",
    "target": "17",
    "id": "reactflow__edge-17-18",
    "animated": true,
    markerEnd: {
        type: _reactflow.MarkerType.Arrow
    }
}, {
    "source": "17",
    "target": "19",
    "id": "reactflow__edge-19-17",
    "animated": true,
    markerEnd: {
        type: _reactflow.MarkerType.Arrow
    }
}, {
    "source": "25",
    "target": "21",
    "id": "reactflow__edge-21-25",
    "animated": true,
    markerEnd: {
        type: _reactflow.MarkerType.Arrow
    }
}, {
    "source": "21",
    "target": "19",
    "id": "reactflow__edge-19-21",
    "animated": true,
    markerEnd: {
        type: _reactflow.MarkerType.Arrow
    }
}, {
    "source": "13",
    "target": "15",
    "id": "reactflow__edge-15-13",
    "animated": true,
    markerEnd: {
        type: _reactflow.MarkerType.Arrow
    }
}, {
    "source": "15",
    "target": "19",
    "id": "reactflow__edge-19-15",
    "animated": true,
    "style": {
        "animation": "dashdraw 0.2s linear infinite",
        "strokeDasharray": 5
    },
    markerEnd: {
        type: _reactflow.MarkerType.Arrow
    }
}, {
    "source": "36",
    "sourceHandle": null,
    "target": "37",
    "targetHandle": null,
    "id": "reactflow__edge-36-37",
    "animated": true,
    markerEnd: {
        type: _reactflow.MarkerType.Arrow
    }
}, {
    "source": "36",
    "sourceHandle": null,
    "target": "38",
    "targetHandle": null,
    "id": "reactflow__edge-36-3",
    "animated": true,
    markerEnd: {
        type: _reactflow.MarkerType.Arrow
    }
}, {
    "source": "36",
    "sourceHandle": null,
    "target": "39",
    "targetHandle": null,
    "id": "reactflow__edge-36-8",
    "animated": true,
    markerEnd: {
        type: _reactflow.MarkerType.Arrow
    }
}, {
    "source": "40",
    "sourceHandle": null,
    "target": "41",
    "targetHandle": null,
    "id": "reactflow__edge-6-39",
    "animated": true,
    markerEnd: {
        type: _reactflow.MarkerType.Arrow
    }
}];

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactflow = __webpack_require__(19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var options = [{
  value: 'smoothstep',
  label: 'Smoothstep'
}, {
  value: 'step',
  label: 'Step'
}, {
  value: 'default',
  label: 'Bezier (default)'
}, {
  value: 'straight',
  label: 'Straight'
}];

function Select(_ref) {
  var value = _ref.value,
      handleId = _ref.handleId,
      nodeId = _ref.nodeId;

  var _useReactFlow = (0, _reactflow.useReactFlow)(),
      setNodes = _useReactFlow.setNodes;

  var store = (0, _reactflow.useStoreApi)();

  var onChange = function onChange(evt) {
    var _store$getState = store.getState(),
        nodeInternals = _store$getState.nodeInternals;

    setNodes(Array.from(nodeInternals.values()).map(function (node) {
      if (node.id === nodeId) {
        node.data = _extends({}, node.data, {
          selects: _extends({}, node.data.selects, _defineProperty({}, handleId, evt.target.value))
        });
      }

      return node;
    }));
  };

  return _react2.default.createElement(
    'div',
    { className: 'custom-node__select' },
    _react2.default.createElement(
      'div',
      null,
      'Edge Type'
    ),
    _react2.default.createElement(
      'select',
      { className: 'nodrag', onChange: onChange, value: value },
      options.map(function (option) {
        return _react2.default.createElement(
          'option',
          { key: option.value, value: option.value },
          option.label
        );
      })
    ),
    _react2.default.createElement(_reactflow.Handle, { type: 'source', position: _reactflow.Position.Right, id: handleId })
  );
}

function CustomNode(_ref2) {
  var id = _ref2.id,
      data = _ref2.data;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: 'custom-node__header' },
      'This is a ',
      _react2.default.createElement(
        'strong',
        null,
        'custom node'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'custom-node__body' },
      Object.keys(data.selects).map(function (handleId) {
        return _react2.default.createElement(Select, { key: handleId, nodeId: id, value: data.selects[handleId], handleId: handleId });
      })
    )
  );
}

exports.default = CustomNode;

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(60);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(18)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// Module
exports.push([module.i, ".react-flow__node-custom {\n    font-size: 10px;\n    width: 180px;\n    background: #f5f5f6;\n    color: #222;\n    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 15%), 0 2px 4px -1px rgb(0 0 0 / 8%);\n    border-radius: 2px;\n  }\n  \n  .react-flow__node-custom .react-flow__handle {\n    top: 24px;\n    right: -15px;\n    width: 6px;\n    height: 10px;\n    border-radius: 2px;\n    background-color: #778899;\n  }\n  \n  .react-flow__node.circle {\n    border-radius: 50%;\n    width: 60px;\n    height: 60px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: 700;\n  }\n  \n  .react-flow__node.annotation {\n    border-radius: 0;\n    text-align: left;\n    background: white;\n    border: none;\n    line-height: 1.4;\n    width: 225px;\n    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 15%), 0 2px 4px -1px rgb(0 0 0 / 8%);\n  }\n  \n  .react-flow__node.annotation .react-flow__handle {\n    display: none;\n  }\n  \n  .custom-node__header {\n    padding: 8px 10px;\n    border-bottom: 1px solid #e2e8f0;\n  }\n  \n  .custom-node__body {\n    padding: 10px;\n  }\n  \n  .custom-node__select {\n    position: relative;\n    margin-bottom: 10px;\n  }\n  \n  .custom-node__select select {\n    width: 100%;\n    margin-top: 5px;\n    font-size: 10px;\n  }\n  ", ""]);



/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = ResizeRotateNode;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactflow = __webpack_require__(19);

var _d3Drag = __webpack_require__(22);

var _d3Selection = __webpack_require__(6);

var _nodeResizer = __webpack_require__(29);

__webpack_require__(62);

var _styleModule = __webpack_require__(64);

var _styleModule2 = _interopRequireDefault(_styleModule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ResizeRotateNode(_ref) {
  var id = _ref.id,
      _ref$sourcePosition = _ref.sourcePosition,
      sourcePosition = _ref$sourcePosition === undefined ? _reactflow.Position.Left : _ref$sourcePosition,
      _ref$targetPosition = _ref.targetPosition,
      targetPosition = _ref$targetPosition === undefined ? _reactflow.Position.Right : _ref$targetPosition,
      data = _ref.data;

  var rotateControlRef = (0, _react.useRef)(null);
  var updateNodeInternals = (0, _reactflow.useUpdateNodeInternals)();

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      rotation = _useState2[0],
      setRotation = _useState2[1];

  var _useState3 = (0, _react.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      resizable = _useState4[0],
      setResizable = _useState4[1];

  var _useState5 = (0, _react.useState)(true),
      _useState6 = _slicedToArray(_useState5, 2),
      rotatable = _useState6[0],
      setRotatable = _useState6[1];

  (0, _react.useEffect)(function () {
    if (!rotateControlRef.current) {
      return;
    }

    var selection = (0, _d3Selection.select)(rotateControlRef.current);
    var dragHandler = (0, _d3Drag.drag)().on('drag', function (evt) {
      var dx = evt.x - 100;
      var dy = evt.y - 100;
      var rad = Math.atan2(dx, dy);
      var deg = rad * (180 / Math.PI);
      setRotation(180 - deg);
      updateNodeInternals(id);
    });

    selection.call(dragHandler);
  }, [id, updateNodeInternals]);

  return _react2.default.createElement(
    'div',
    {
      style: {
        transform: 'rotate(' + rotation + 'deg)'
      },
      className: _styleModule2.default.node
    },
    _react2.default.createElement(_nodeResizer.NodeResizer, { isVisible: resizable, minWidth: 180, minHeight: 100 }),
    _react2.default.createElement('div', {
      ref: rotateControlRef,
      style: {
        display: rotatable ? 'block' : 'none'
      },
      className: 'nodrag ' + _styleModule2.default.rotateHandle
    }),
    _react2.default.createElement(
      'div',
      null,
      data ? data.label : "",
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'label',
          null,
          _react2.default.createElement('input', {
            type: 'checkbox',
            checked: resizable,
            onChange: function onChange(evt) {
              return setResizable(evt.target.checked);
            }
          }),
          'resizable'
        )
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'label',
          null,
          _react2.default.createElement('input', {
            type: 'checkbox',
            checked: rotatable,
            onChange: function onChange(evt) {
              return setRotatable(evt.target.checked);
            }
          }),
          'rotatable'
        )
      )
    ),
    _react2.default.createElement(_reactflow.Handle, { style: { opacity: 0 }, position: sourcePosition, type: 'source' }),
    _react2.default.createElement(_reactflow.Handle, { style: { opacity: 0 }, position: targetPosition, type: 'target' })
  );
}

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(65);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(18)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// Module
exports.push([module.i, ".node {\n    width: 100%;\n    height: 100%;\n    border-radius: 15px;\n    border: 1px solid #000;\n    background-color: #fff;\n    padding: 20px;\n    box-sizing: border-box;\n  }\n  \n  .node :global .react-flow__resize-control.handle {\n    width: 10px;\n    height: 10px;\n    border-radius: 100%;\n  }\n  \n  .rotateHandle {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    background: #3367d9;\n    left: 50%;\n    top: -30px;\n    border-radius: 100%;\n    transform: translate(-50%, -50%);\n    cursor: alias;\n  }\n  \n  .rotateHandle:after {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 1px;\n    height: 30px;\n    background: #3367d9;\n    left: 4px;\n    top: 5px;\n  }\n  ", ""]);



/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(43);

var _Flow = __webpack_require__(46);

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

}]);