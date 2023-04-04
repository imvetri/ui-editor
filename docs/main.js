/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([33,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(44);

var _Flow = __webpack_require__(47);

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

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(45);

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

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// Module
exports.push([module.i, "", ""]);



/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactflow = __webpack_require__(22);

var _reactflow2 = _interopRequireDefault(_reactflow);

var _initialElements = __webpack_require__(54);

var _CustomNode = __webpack_require__(55);

var _CustomNode2 = _interopRequireDefault(_CustomNode);

__webpack_require__(56);

__webpack_require__(58);

var _ResizeRotateNode = __webpack_require__(60);

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

var onInit = function onInit(reactFlowInstance) {
  return console.log('flow loaded:', reactFlowInstance);
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
    return setEdges(function (eds) {
      return (0, _reactflow.addEdge)(params, eds);
    });
  }, []);

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

  var _useState = (0, _react.useState)('cross'),
      _useState2 = _slicedToArray(_useState, 2),
      variant = _useState2[0],
      setVariant = _useState2[1];

  return _react2.default.createElement(
    _reactflow2.default,
    {
      nodes: nodes,
      edges: edgesWithUpdatedTypes,
      onNodesChange: onNodesChange,
      onEdgesChange: onEdgesChange,
      onConnect: onConnect,
      onInit: onInit,
      fitView: true,
      attributionPosition: 'top-right',
      nodeTypes: nodeTypes
    },
    _react2.default.createElement(_reactflow.MiniMap, { style: minimapStyle, zoomable: true, pannable: true }),
    _react2.default.createElement(_reactflow.Controls, null),
    _react2.default.createElement(_reactflow.Background, { color: '#aaa', gap: 16, variant: variant }),
    _react2.default.createElement(
      _reactflow.Panel,
      null,
      _react2.default.createElement(
        'div',
        null,
        'Background variants:'
      ),
      _react2.default.createElement(
        'button',
        { onClick: function onClick() {
            return setVariant('dots');
          } },
        'dots'
      ),
      _react2.default.createElement(
        'button',
        { onClick: function onClick() {
            return setVariant('lines');
          } },
        'lines'
      ),
      _react2.default.createElement(
        'button',
        { onClick: function onClick() {
            return setVariant('cross');
          } },
        'cross'
      )
    )
  );
};

exports.default = Flow;

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.edges = exports.nodes = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactflow = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var nodes = exports.nodes = [{
  id: '1',
  type: 'input',
  data: {
    label: 'Input Node'
  },
  position: { x: 250, y: 0 }
}, {
  id: '2',
  data: {
    label: 'Default Node'
  },
  position: { x: 100, y: 100 }
}, {
  id: '3',
  type: 'output',
  data: {
    label: 'Output Node'
  },
  position: { x: 400, y: 100 }
}, {
  id: '4',
  type: 'custom',
  position: { x: 100, y: 200 },
  data: {
    selects: {
      'handle-0': 'smoothstep',
      'handle-1': 'smoothstep'
    }
  }
}, {
  id: '5',
  type: 'output',
  data: {
    label: 'custom style'
  },
  className: 'circle',
  style: {
    background: '#2B6CB0',
    color: 'white'
  },
  position: { x: 400, y: 200 },
  sourcePosition: _reactflow.Position.Right,
  targetPosition: _reactflow.Position.Left
}, {
  id: '6',
  type: 'output',
  style: {
    background: '#63B3ED',
    color: 'white',
    width: 100
  },
  data: {
    label: 'Node'
  },
  position: { x: 400, y: 325 },
  sourcePosition: _reactflow.Position.Right,
  targetPosition: _reactflow.Position.Left
}, {
  id: '7',
  type: 'default',
  className: 'annotation',
  data: {
    label: _react2.default.createElement(
      'div',
      null,
      'On the bottom left you see the ',
      _react2.default.createElement(
        'strong',
        null,
        'Controls'
      ),
      ' and the bottom right the',
      ' ',
      _react2.default.createElement(
        'strong',
        null,
        'MiniMap'
      ),
      '. This is also just a node \uD83E\uDD73'
    )
  },
  draggable: false,
  selectable: false,
  position: { x: 150, y: 400 }
}, {
  id: '1R',
  position: { x: 100, y: 100 },
  data: { label: 'Node 1' },
  type: 'resizeRotate',
  sourcePosition: _reactflow.Position.Bottom,
  targetPosition: _reactflow.Position.Top,
  selected: true,
  style: { width: 180, height: 100 }
}, {
  id: '2R',
  position: { x: 100, y: 400 },
  data: { label: 'Node 2' },
  type: 'resizeRotate',
  sourcePosition: _reactflow.Position.Bottom,
  targetPosition: _reactflow.Position.Top,
  style: { width: 180, height: 100 }
}];

var edges = exports.edges = [{
  id: '1->2',
  source: '1R',
  target: '2R',
  type: 'smoothstep'
}, { id: 'e1-2', source: '1', target: '2', label: 'this is an edge label' }, { id: 'e1-3', source: '1', target: '3', animated: true }, {
  id: 'e4-5',
  source: '4',
  target: '5',
  type: 'smoothstep',
  sourceHandle: 'handle-0',
  data: {
    selectIndex: 0
  },
  markerEnd: {
    type: _reactflow.MarkerType.ArrowClosed
  }
}, {
  id: 'e4-6',
  source: '4',
  target: '6',
  type: 'smoothstep',
  sourceHandle: 'handle-1',
  data: {
    selectIndex: 1
  },
  markerEnd: {
    type: _reactflow.MarkerType.ArrowClosed
  }
}];

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactflow = __webpack_require__(22);

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

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(59);

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

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// Module
exports.push([module.i, ".react-flow__node-custom {\n    font-size: 10px;\n    width: 180px;\n    background: #f5f5f6;\n    color: #222;\n    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 15%), 0 2px 4px -1px rgb(0 0 0 / 8%);\n    border-radius: 2px;\n  }\n  \n  .react-flow__node-custom .react-flow__handle {\n    top: 24px;\n    right: -15px;\n    width: 6px;\n    height: 10px;\n    border-radius: 2px;\n    background-color: #778899;\n  }\n  \n  .react-flow__node.circle {\n    border-radius: 50%;\n    width: 60px;\n    height: 60px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: 700;\n  }\n  \n  .react-flow__node.annotation {\n    border-radius: 0;\n    text-align: left;\n    background: white;\n    border: none;\n    line-height: 1.4;\n    width: 225px;\n    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 15%), 0 2px 4px -1px rgb(0 0 0 / 8%);\n  }\n  \n  .react-flow__node.annotation .react-flow__handle {\n    display: none;\n  }\n  \n  .custom-node__header {\n    padding: 8px 10px;\n    border-bottom: 1px solid #e2e8f0;\n  }\n  \n  .custom-node__body {\n    padding: 10px;\n  }\n  \n  .custom-node__select {\n    position: relative;\n    margin-bottom: 10px;\n  }\n  \n  .custom-node__select select {\n    width: 100%;\n    margin-top: 5px;\n    font-size: 10px;\n  }\n  ", ""]);



/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = ResizeRotateNode;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactflow = __webpack_require__(22);

var _d3Drag = __webpack_require__(21);

var _d3Selection = __webpack_require__(6);

var _nodeResizer = __webpack_require__(29);

var _styleModule = __webpack_require__(61);

var _styleModule2 = _interopRequireDefault(_styleModule);

__webpack_require__(63);

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
    null,
    _react2.default.createElement(
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
    )
  );
}

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(62);

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

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)(false);
// Module
exports.push([module.i, ".node {\n    width: 100%;\n    height: 100%;\n    border-radius: 15px;\n    border: 1px solid #000;\n    background-color: #fff;\n    padding: 20px;\n    box-sizing: border-box;\n  }\n  \n  .node :global .react-flow__resize-control.handle {\n    width: 10px;\n    height: 10px;\n    border-radius: 100%;\n  }\n  \n  .rotateHandle {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    background: #3367d9;\n    left: 50%;\n    top: -30px;\n    border-radius: 100%;\n    transform: translate(-50%, -50%);\n    cursor: alias;\n  }\n  \n  .rotateHandle:after {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 1px;\n    height: 30px;\n    background: #3367d9;\n    left: 4px;\n    top: 5px;\n  }\n  ", ""]);



/***/ })

/******/ });