(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(0));
var _config = _interopRequireDefault(__webpack_require__(23));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/*
    This component adds behaviour to the child components with colapse and move the component around.
    This component stores the config to local storage
    This component restores the postion on reload
*/
var Window = /*#__PURE__*/function (_Component) {
  _inherits(Window, _Component);
  var _super = _createSuper(Window);
  function Window(props) {
    var _this;
    _classCallCheck(this, Window);
    _this = _super.call(this, props);
    _this.childComponentName = _this.props.children._owner.stateNode.__proto__.constructor.name;
    var config = localStorage.getItem(_this.childComponentName);
    _this.state = config ? JSON.parse(config) : _config["default"][_this.childComponentName];
    return _this;
  }
  _createClass(Window, [{
    key: "persist",
    value: function persist() {
      if (this.state.top !== 0) localStorage.setItem(this.childComponentName, JSON.stringify(this.state));
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.setState({
        collapsed: !this.state.collapsed
      });
      this.persist();
    }
  }, {
    key: "drag",
    value: function drag(e) {
      this.setState({
        left: e.pageX,
        top: e.pageY
      });
      this.persist();
    }
  }, {
    key: "render",
    value: function render() {
      var windowState = this.state.collapsed ? "fas fa-window-minimize" : "fas fa-window-maximize";
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          position: "fixed",
          top: this.state.top,
          left: this.state.left
        }
      }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
        draggable: "true",
        onDragEnd: this.drag.bind(this),
        className: "container"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        "class": "fas fa-arrows-alt"
      })), /*#__PURE__*/_react["default"].createElement("button", {
        className: "container",
        onClick: this.toggle.bind(this)
      }, /*#__PURE__*/_react["default"].createElement("i", {
        "class": windowState
      })), this.state.collapsed ? null : /*#__PURE__*/_react["default"].createElement("div", {
        "class": "container elements-tab"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        "class": "title"
      }, this.childComponentName))), /*#__PURE__*/_react["default"].createElement("div", null, this.state.collapsed ? this.props.children : null));
    }
  }]);
  return Window;
}(_react.Component);
var _default = Window;
exports["default"] = _default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _localStorage = __webpack_require__(32);
module.exports = {
  readData: _localStorage.readData,
  writeData: _localStorage.writeData,
  readComponent: _localStorage.readComponent,
  writeComponent: _localStorage.writeComponent
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.componentRecursive = componentRecursive;
exports.getNestedComponents = getNestedComponents;
exports.initialiseComponents = initialiseComponents;
exports.saveComponentsToWindow = saveComponentsToWindow;
var _createComponent = __webpack_require__(30);
var _Storage = __webpack_require__(4);
var _assetUtils = __webpack_require__(33);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createStylesheet(style, name) {
  // check if window has $assets 
  if (window.assets) {
    style = (0, _assetUtils.nameToURL)(style);
  }
  var toDelete = _toConsumableArray(document.querySelectorAll("[data-component-name='".concat(name, "']")));
  toDelete.forEach(function (item) {
    item.remove();
  });
  var dynamicStyle = document.createElement('style');
  dynamicStyle.setAttribute("data-component-name", name);
  dynamicStyle.type = 'text/css';
  dynamicStyle.innerHTML = style;
  document.body.appendChild(dynamicStyle);
}

/** Takes a component and converts it as a react component */
function saveToWindow(component) {
  if ((0, _assetUtils.hasAssets)(component.state)) {
    component.state = JSON.parse((0, _assetUtils.nameToURL)(JSON.stringify(component.state)));
  }
  createStylesheet(component.style, component.name);
  window[component.name] = (0, _createComponent.createComponent)(component);
}
function checkNestedComponents(markup) {
  var components = (0, _Storage.readData)("ui-editor");
  return components.filter(function (component) {
    return markup.includes(component.name);
  }).length > 0;
}
window.visited = {};

/**Used to detect calls that can happen because of recursive components */
function componentVisited(componentName) {
  if (window.visited[componentName]) {
    return true;
  } else {
    window.visited[componentName] = true;
    return false;
  }
}
function componentRecursive(component) {
  return component.markup.includes(component.name);
}

/** Takes components and saves them to window as react Object */
function saveComponentsToWindow(nestedComponents) {
  // Transpile them and make them global.
  nestedComponents.forEach(function (component) {
    saveToWindow(JSON.parse(JSON.stringify(component)));
  });
}

/** Takes markup and returns children component objects. */
function getNestedComponents(parent) {
  // Should be able to detect nested component.

  var components = (0, _Storage.readData)("ui-editor");
  var nestedComponents = [parent]; // Problem 1. When creating recursive components, automatically set component.config[componentName].override = true when you save.
  if (checkNestedComponents(parent.markup) && !componentVisited(parent.name)) {
    // find all the nested components from the markup and push it to nestedComponents.
    var children = components.filter(function (component) {
      return parent.markup.includes(component.name);
    });
    // Find grand kids.
    var grandKids = children.map(getNestedComponents).flat(3);
    nestedComponents.push.apply(nestedComponents, _toConsumableArray(grandKids));
  }
  return _toConsumableArray(new Set(nestedComponents.filter(function (component) {
    return component && component.markup;
  })));
}

/** Takes a component, checks and saves it on window */
function initialiseComponents(component) {
  // Check if it already exists
  if (!window[component.name]) {
    // visited gets used by getNestedComponents. Helps to prevent recurrent calls
    window.visited = {};
    // get components that are used by the currrent component.
    var nestedComponents = getNestedComponents(component);
    if (nestedComponents.length > 0) {
      // save the current component and the components that are used on window.
      saveComponentsToWindow(nestedComponents);
    }
  }
}

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addEvents = function addEvents(markup, events, component) {
  events.forEach(function (event) {
    var id = "id=\"".concat(event.id, "\"");
    // check if markup contains the id.
    if (markup.includes(id)) {
      markup = markup.replace(id, "".concat(id, " ").concat(event.name, "={this.").concat(event.id + event.name, ".bind(this)}"));
    }
    // its a child component.
    else {
      markup = markup.replace("<".concat(event.id), "<".concat(event.id, " ").concat(event.name, "={this.").concat(event.id + event.name, ".bind(this)}"));
    }
  });

  /**
   * This piece of code is needed to try a feature.
   * Feature - Add events and reducers to Div
   * Expected - Events to work
   * Actual - Events don't work
   * 
   * Implement
   * 1. check if state.events object preset
   * 2. Then appened it to the markup
   */

  function stateToComponent(state) {
    return " ".concat(Object.keys(state.events).map(function (key) {
      return "".concat(key, "={(e)=>{var state = JSON.parse(JSON.stringify(this.state));").concat(state.events[key], "}}");
    }).join(" "), ">");
  }
  var state = JSON.parse(component.state);
  if (state.events) {
    markup = markup.replace(">", stateToComponent(state));
  }

  /**
   * This piece of code is needed only for the exception case.
   * Exception case that I'm trying to build is draw divs on screen
   * And add events using eventsBuilder component.
   * 
   * All these markup.replace is needed so that THE JSX MARKUP LOOKS CLEAN. it is fine if this file is this bad.
   */
  if (markup.includes("...state")) {
    markup = markup.split("state.").join("this.state.").replace("...state", "...this.state");
    return markup;
  }
  return markup.split("state.").join("this.state.");
};

// checks if state override is on. then adds state prop to child 
var addChildrenConfig = function addChildrenConfig(markup, component) {
  // for all the config.
  // filter child with overide state is true
  var config = JSON.parse(component.config);
  var childrenConfig = Object.keys(config);
  childrenConfig.forEach(function (childName) {
    // PRECAUTION: Edit markup for rendering list. Should not use other configuration while using this. // Problem - subscibing to child list component does not work Solution - add publishable enevts here
    if (config[childName].override) {
      var childMarkup = "<".concat(childName, "></").concat(childName, ">");
      var childMarkupWithProps = "<".concat(childName, " state={item} key={~~(Math.random()*10000)} index={i}></").concat(childName, ">");
      var renderListMarkup = "{state.".concat(childName, ".map((item,i)=>").concat(childMarkupWithProps, ")}");
      markup = markup.replace(childMarkup, renderListMarkup);
    }
  });
  return markup;
};
var addChildren = function addChildren(component) {
  return component.markup.replace(">", " id=\"".concat(component.name, "\" >{this.props.children}"));
};
module.exports = {
  addEvents: addEvents,
  addChildrenConfig: addChildrenConfig,
  addChildren: addChildren
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function getPublishes(publishes) {
  return publishes.map(function (publish) {
    if (publish.publishable) {
      return "\n            if(".concat(publish.publishCondition, "){\n                this.props.").concat(publish.publishName, "? this.props.").concat(publish.publishName, "(e):null;\n            }");
    }
  }).join("\n");
}
function getReducer(reducer) {
  return "\n        ".concat(reducer.reducer, "\n        this.setState(state);\n        e.state = state;\n        e.index = this.props.index;\n        ").concat(getPublishes(reducer.publishes));
}
function getReducers(component) {
  return component.events.map(function (event) {
    return "\n        ".concat(event.id + event.name, " (e) {\n            var state = JSON.parse(JSON.stringify(this.state))\n            ").concat(getReducer(event.reducer), "\n        }");
  }).join("\n");
}
module.exports = {
  getReducers: getReducers
};

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(18);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "body {\r\n    position:relative;\r\n    color: #d9d9d9;\r\n    font-family: \"Nunito Sans\",-apple-system,\".SFNSText-Regular\",\"San Francisco\",BlinkMacSystemFont,\"Segoe UI\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n    margin: 0px;\r\n}\r\n\r\nli , label, p, .rules , input, textarea{\r\n    font-size: 9px;\r\n}\r\n\r\ninput, textarea { \r\n    background: #2b2b2b;\r\n    color: #d9d9d9;\r\n    opacity: 0.75;\r\n    vertical-align: bottom;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n    -webkit-appearance: textarea;\r\n    color: rgba(255,255,255,0.5);\r\n    border-color: rgba(0,0,0,0.9);\r\n    border-width: 1px;\r\n    padding: 7px;\r\n}\r\n\r\nul label input {\r\n    width: 10px;\r\n}\r\n\r\nul, li {\r\n    padding-left: 5px;\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n}\r\n\r\nbutton, select{\r\n    color: rgba(255,255,255,0.5);\r\n    border-color: rgba(0,0,0,0.9);\r\n    border-width: 0px;\r\n    padding: 5px;\r\n    background-color: transparent;\r\n    margin-left: 4px;\r\n}\r\n\r\nselect:focus{\r\n    \r\n    outline: 1px solid white;\r\n}\r\n\r\nbutton i{\r\n    padding-right:4px;\r\n}\r\n\r\nselect:focus, \r\nul label:hover, \r\nli:hover, \r\n.content:hover {\r\n    color: #fff;\r\n    background: rgb(43, 43, 43);\r\n}\r\n\r\nbutton:hover{\r\n    color: #fff;\r\n}\r\n\r\nul,li, ul label {\r\n    color: rgba(255,255,255,0.5);\r\n}\r\n\r\n\r\n#index{\r\n    margin:-4px;\r\n}\r\n\r\n\r\n.container{\r\n    padding: 5px;\r\n    background: #2C3134;\r\n}\r\n\r\n*::-webkit-scrollbar {\r\n  width: 1px;\r\n}\r\n \r\n*::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 0px rgba(0, 0, 0, 0.3);\r\n}\r\n \r\n*::-webkit-scrollbar-thumb {\r\n  background-color: darkgrey;\r\n  outline: 1px solid slategrey;\r\n}", ""]);



/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(0));
__webpack_require__(21);
var _Window = _interopRequireDefault(__webpack_require__(3));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
// Components.
var Components = /*#__PURE__*/function (_Component) {
  _inherits(Components, _Component);
  var _super = _createSuper(Components);
  function Components(props) {
    var _this;
    _classCallCheck(this, Components);
    _this = _super.call(this, props);
    _this.state = {
      components: _this.props.components,
      folders: _this.props.folders
    };
    return _this;
  }
  _createClass(Components, [{
    key: "addFolder",
    value: function addFolder() {
      var folders = Array.from(this.state.folders);
      folders.unshift({
        type: "NewFolder",
        name: "",
        contents: [],
        status: "closed"
      });
      this.setState({
        folders: folders
      });
    }
  }, {
    key: "addComponent",
    value: function addComponent() {
      this.props.onOpenEditor();
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      var state = this.state;
      return /*#__PURE__*/_react["default"].createElement(_Window["default"], null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "container elements-tab"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "title"
      }, "Components"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "Controls"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        onClick: this.addComponent.bind(this)
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-edit"
      }), props.selectedComponent ? "Edit" : "Add"), /*#__PURE__*/_react["default"].createElement("button", {
        onClick: this.addFolder.bind(this)
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fa fa-folder"
      }), "Folder"))));
    }
  }]);
  return Components;
}(_react.Component);
var _default = Components;
exports["default"] = _default;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(22);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".override {\r\n    line-height: 0%;\r\n}\r\n\r\ntextarea {\r\n    height: 70px;\r\n    width: 450px;\r\n}\r\n\r\n.title{\r\n    margin-top: 15px;\r\n    margin-bottom: 11px;\r\n    color: rgba(255,255,255,0.5);\r\n    background: rgb(64, 64, 64);\r\n    padding: 5px;\r\n    font-size: 12px;\r\n}\r\n\r\n.Controls{\r\n    display: inline-block;\r\n    opacity: 1;\r\n    transition: opacity .2s ease-in;\r\n}\r\n\r\n.hideControls{\r\n    opacity: 0;\r\n    transition: opacity .5s ease-in-out;\r\n}\r\n\r\n.leftItem{\r\n    position: absolute;\r\n    left:0px;\r\n    z-index:100000;\r\n    animation: slide-to-screen 0.7s ease;\r\n}\r\n\r\n@keyframes slide-to-screen {\r\n    0% {\r\n        left:-300px;\r\n    }\r\n    100% {\r\n        left: 0px;\r\n    }\r\n}", ""]);



/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var config = {
  Composer: {
    "collapsed": false,
    "top": 670,
    "left": 541
  },
  Events: {
    "collapsed": false,
    "top": 770,
    "left": 541
  },
  Assets: {
    "collapsed": false,
    "top": 153,
    "left": 742
  },
  History: {
    "collapsed": false,
    "top": 89,
    "left": 386
  },
  State: {
    "collapsed": false,
    "top": 699,
    "left": 292
  },
  Components: {
    "collapsed": true,
    "top": 477,
    "left": 1021
  },
  Builder: {
    "collapsed": true,
    "top": 190,
    "left": 404
  },
  Markup: {
    "collapsed": true,
    "top": 175,
    "left": 24
  },
  Style: {
    "collapsed": true,
    "top": 1206,
    "left": 277
  },
  Preview: {
    "collapsed": true,
    "top": 906,
    "left": 277
  }
};
var _default = config;
exports["default"] = _default;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(0));
var _Tags = _interopRequireDefault(__webpack_require__(25));
var _Reducer = _interopRequireDefault(__webpack_require__(34));
var _Window = _interopRequireDefault(__webpack_require__(3));
__webpack_require__(37);
var _Reducer2 = __webpack_require__(39);
var _Storage = __webpack_require__(4);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Events = /*#__PURE__*/function (_Component) {
  _inherits(Events, _Component);
  var _super = _createSuper(Events);
  function Events(props) {
    var _this;
    _classCallCheck(this, Events);
    _this = _super.call(this, props);
    _this.state = Object.assign({}, _this.props);
    _this.state.selectedTag = _this.props.selectedTag;
    _this.state.selectedEventName = "";
    _this.state.selectedEvent = {
      name: "",
      reducer: {
        reducer: "",
        publishes: [],
        index: _this.props.component.events.length
      }
    };
    _this.state.eventID = "";
    return _this;
  }
  _createClass(Events, [{
    key: "publishEvent",
    value: function publishEvent(reducer) {
      this.setState({
        selectedEvent: {
          name: this.state.selectedEventName,
          reducer: {
            reducer: reducer.reducer,
            publishes: reducer.publishes
          }
        }
      });
    }
  }, {
    key: "saveEvent",
    value: function saveEvent() {
      var _this2 = this;
      var events = Array.from(this.props.component.events);
      var changedEvent = events.find(function (event) {
        return event.name === _this2.state.selectedEvent.name && _this2.state.eventID === event.id;
      });
      if (changedEvent) {
        // its a existing event
        changedEvent.reducer = this.state.selectedEvent.reducer;
      } else {
        // its a new event
        events.push({
          id: this.state.eventID,
          index: events.length,
          name: this.state.selectedEvent.name,
          reducer: this.state.selectedEvent.reducer
        });
      }
      this.props.onEventsUpdate(events);
    }
  }, {
    key: "render",
    value: function render() {
      var component = this.props.component;

      // Report if no component is created.
      if (this.state.components.length == 0) {
        return null;
      }

      // Report if no component is selected.
      if (component.name === undefined && this.state.components.length != 0) {
        return null;
      }
      var selectedTag = this.state.selectedTag || "";
      var configurator,
        eventNames = [];

      // Check if it is a child component
      if (selectedTag.includes("child-component-")) {
        // Get child component name from the selected tag.
        var childComponentName = selectedTag.split("child-component-")[1];

        // Get list of components.
        var components = (0, _Storage.readData)("ui-editor");

        // Find the child component from the list of components.
        var childComponent = components.find(function (component) {
          return component.name === childComponentName;
        });

        // Find events that are publishable from the child component to show in drop down.
        eventNames = [];
        childComponent.events.forEach(function (event) {
          event.reducer.publishes.forEach(function (publish) {
            if (publish.publishable) {
              eventNames.push(publish.publishName);
            }
          });
        });
      } else {
        eventNames = component.events.filter(function (e) {
          return e.id === selectedTag.split("-")[1];
        }).map(function (e) {
          return e.name;
        });
      }
      return /*#__PURE__*/_react["default"].createElement(_Window["default"], null, /*#__PURE__*/_react["default"].createElement("ul", {
        className: "container events-tab"
      }, /*#__PURE__*/_react["default"].createElement(_Tags["default"], {
        component: component,
        onSelectedTagChanged: _Reducer2.selectedTagChanged.bind(this)
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "title"
      }, "Event"), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        "class": "spacing"
      }, /*#__PURE__*/_react["default"].createElement("label", null, "Event name"), /*#__PURE__*/_react["default"].createElement("input", {
        list: "eventNames",
        type: "text",
        onChange: _Reducer2.updateSelectedEvent.bind(this),
        value: this.state.selectedEventName,
        title: "Event Name"
      }), /*#__PURE__*/_react["default"].createElement("datalist", {
        id: "eventNames"
      }, eventNames.map(function (eventName) {
        return /*#__PURE__*/_react["default"].createElement("option", {
          value: eventName
        });
      })), /*#__PURE__*/_react["default"].createElement("button", {
        onClick: this.saveEvent.bind(this),
        id: "saveEvent"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fas fa-save"
      }), "Save Event"), /*#__PURE__*/_react["default"].createElement("button", {
        onClick: _Reducer2.deleteEvent.bind(this),
        id: "deleteEvent"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "fas fa-trash"
      }), "Delete Event"))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "event"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "reducers"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "title"
      }, "Reducer"), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Reducer["default"], {
        key: Math.ceil(Math.random() * 1000),
        reducer: this.state.selectedEvent.reducer,
        onChange: this.publishEvent.bind(this)
      }))))));
    }
  }]);
  return Events;
}(_react.Component);
var _default = Events;
exports["default"] = _default;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(0));
__webpack_require__(26);
var _Nodes = _interopRequireDefault(__webpack_require__(28));
var _getNodeTree = __webpack_require__(29);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Tags = /*#__PURE__*/function (_Component) {
  _inherits(Tags, _Component);
  var _super = _createSuper(Tags);
  function Tags(props) {
    var _this;
    _classCallCheck(this, Tags);
    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }
  _createClass(Tags, [{
    key: "render",
    value: function render() {
      var component = this.props.component;
      var nodeTree = (0, _getNodeTree.getNodeTree)(component, component.markup, component.style, JSON.parse(component.state), component.events);

      // Report error.
      if (nodeTree.error !== undefined) {
        console.log('%c Oh my heavens! ', 'background: #222; color: #bada55', nodeTree.error);
        return nodeTree.error;
      }

      // Report error if component is not 
      if (nodeTree.result === undefined) {
        return /*#__PURE__*/_react["default"].createElement("ul", {
          className: "container events-tab"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "title"
        }, "Events"));
      }
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "title"
      }, "Tags"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "tags"
      }, /*#__PURE__*/_react["default"].createElement(_Nodes["default"], {
        node: nodeTree.result,
        onSelectedTagChanged: this.props.onSelectedTagChanged
      })));
    }
  }]);
  return Tags;
}(_react.Component);
var _default = Tags;
exports["default"] = _default;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(27);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".error {\r\n    color: red;\r\n}\r\n\r\n.tags {\r\n    max-height: 300px;\r\n    overflow: scroll;\r\n}\r\n\r\n.selectedItem.selectedItem {\r\n    outline: 1px solid green;\r\n}", ""]);



/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(0));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Nodes = /*#__PURE__*/function (_Component) {
  _inherits(Nodes, _Component);
  var _super = _createSuper(Nodes);
  function Nodes(props) {
    _classCallCheck(this, Nodes);
    return _super.call(this, props);
  }
  _createClass(Nodes, [{
    key: "render",
    value: function render() {
      var _this = this;
      var node = this.props.node;
      if (!node) {
        return /*#__PURE__*/_react["default"].createElement("span", null, "null");
      }
      if (typeof node === "string") {
        return /*#__PURE__*/_react["default"].createElement("li", null, node);
      }
      // nested component.
      if (typeof node.type === "function") {
        return /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("label", null, /*#__PURE__*/_react["default"].createElement("input", {
          type: "radio",
          name: "selectedElement",
          value: "child-component-" + node.type.name,
          onChange: this.props.onSelectedTagChanged
        }), node.type.name));
      }
      var id = node.props.id ? "-" + node.props.id : "";
      if (id === "") {
        // Check if it contains children.
        if (node.props && Array.isArray(node.props.children)) {
          return node.props.children.map(function (child, index) {
            return /*#__PURE__*/_react["default"].createElement(Nodes, {
              key: index,
              node: child,
              onSelectedTagChanged: _this.props.onSelectedTagChanged
            });
          });
        } else if (_typeof(node.props.children) === "object") {
          return /*#__PURE__*/_react["default"].createElement(Nodes, {
            key: index,
            node: node.props.children,
            onSelectedTagChanged: this.props.onSelectedTagChanged
          });
        }
        return null;
      } else {
        // Check if it contains children.
        if (node.props && Array.isArray(node.props.children)) {
          var children = node.props.children.map(function (child, index) {
            return /*#__PURE__*/_react["default"].createElement(Nodes, {
              key: index,
              node: child,
              onSelectedTagChanged: _this.props.onSelectedTagChanged
            });
          });
          return /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("label", null, /*#__PURE__*/_react["default"].createElement("input", {
            type: "radio",
            name: "selectedElement",
            onChange: this.props.onSelectedTagChanged,
            value: node.type + id
          }), node.type + id), children);
        }
        // if node contains only one children, jsx get transpiled to object rather than array.
        else if (_typeof(node.props.children) === "object") {
          var _children = /*#__PURE__*/_react["default"].createElement(Nodes, {
            key: index,
            node: node.props.children,
            onSelectedTagChanged: this.props.onSelectedTagChanged
          });
          return /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("label", null, /*#__PURE__*/_react["default"].createElement("input", {
            type: "radio",
            name: "selectedElement",
            onChange: this.props.onSelectedTagChanged,
            value: (node.type.name || node.type) + id
          }), (node.type.name || node.type) + id), _children);
        }
        return /*#__PURE__*/_react["default"].createElement("ul", null, /*#__PURE__*/_react["default"].createElement("label", null, /*#__PURE__*/_react["default"].createElement("input", {
          type: "radio",
          name: "selectedElement",
          value: node.type + id,
          onChange: this.props.onSelectedTagChanged
        }), node.type + id));
      }
    }
  }]);
  return Nodes;
}(_react.Component);
var _default = Nodes;
exports["default"] = _default;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNodeTree = getNodeTree;
var _react = _interopRequireDefault(__webpack_require__(0));
var _Runtime = __webpack_require__(5);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// Why? Because importing React as variable at line#2 will be alterted by babel. Keep it as a property, babel will ignore it.
window.React = _react["default"];
window.Component = _react["default"].Component;
function getNodeTree(element, jsx, style, state, events) {
  var result, error;
  try {
    window.visited = {};
    var nestedComponents = (0, _Runtime.getNestedComponents)(element);
    if (nestedComponents.length > 0) {
      (0, _Runtime.saveComponentsToWindow)(nestedComponents);
    }
    result = eval(Babel.transform(jsx, {
      presets: ['react']
    }).code);
  } catch (e) {
    error = e;
  } finally {
    return _defineProperty({
      error: error,
      result: result
    }, "result", result);
  }
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _React = __webpack_require__(31);
function createComponent(component) {
  var componentString = (0, _React.convertToReact)(component);

  // eval does not evaluate class if not exclosed in paranthesis.
  return eval(Babel.transform(componentString, {
    presets: ['react'],
    plugins: ["transform-es2015-classes"]
  }).code);
}
module.exports = {
  createComponent: createComponent
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertToReact = convertToReact;
var _markup = __webpack_require__(7);
var _reducers = __webpack_require__(8);
// Elements to  react component.
function convertToReact(component) {
  component.events.forEach(function (event) {
    event.id = event.id.replace("-", "");
  });

  /**
   * Code generation for markup
   * 
   * Markup is edited in three phases.
   * 1. Add props - This function changes markup to include children - helps in composing bigger components. 
   *  For example, lets say an accordion component is created, its behaviour includes expanding contents and
   *  collapsing contents where content could be valid html tags, other components. An easy way to create such 
   *  separated concerns in behaviour is embedding children.
   * 
   * 2. Add Children config - This helps to override child config state from parent and render list of children.
   * 
   * 3. Add events - This helps to bind event listenes to markup 
   */

  var propsInMarkup = (0, _markup.addChildren)(component);
  var childrenMarkup = (0, _markup.addChildrenConfig)(propsInMarkup, component);
  var componentEventedMarkup = (0, _markup.addEvents)(childrenMarkup, component.events, component);

  /**
   * Code generation for reducers
   * 
   * Reducer function are created in a single phase.
   * 
   * getReducers takes a component and returns reducer functions based on following rules.
   * 1. Generation of function name - It appends event id with event name 
   * 2. Generation of function definition
   *      1. Generation of a new state - Creates a new state with help of json.strigify and parse
   *      2. Generation of reducer logic - event reducer is appeneded here. 
   *      3. Generation of publishable event - It also publishes events based on the event type.
   */
  var reducers = (0, _reducers.getReducers)(component);
  var ReactComponent = "(\nclass ".concat(component.name, " extends Component {\n\n    constructor(props) {\n        super(props);\n        this.state = this.props.state || ").concat(component.state, ";\n\n        // Generate css as a separate file on download\n    }\n\n    ").concat(reducers, "\n\n    render() {\n        return (").concat(componentEventedMarkup, ")\n    }\n})\n");
  return ReactComponent;
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readComponent = readComponent;
exports.readData = readData;
exports.writeComponent = writeComponent;
exports.writeData = writeData;
function pushHistory(components) {
  var editorHistory = readData("ui-editor-history");
  editorHistory.push({
    time: new Date().toString(),
    data: components,
    name: ""
  });
  localStorage.setItem("ui-editor-history", JSON.stringify(editorHistory));
}

// If empty, return empty array.

function readData(key) {
  if (key === "ui-editor") {
    if (!window.components) {
      window.components = JSON.parse(localStorage.getItem(key)) || [];
    }
    return JSON.parse(JSON.stringify(window.components));
  }
  if (key === "ui-editor-history") {
    var history = localStorage.getItem(key);
    if (history) return JSON.parse(history);
  }
  if (key === "folders") {
    var folders = JSON.parse(localStorage.getItem(key));
    if (folders === null) {
      return window.sampleFolders;
    }
    return folders;
  }
  return [];
}
function writeData(key, components, noPush) {
  if (key == "folders") {
    localStorage.setItem(key, JSON.stringify(components));
  }
  if (key == "ui-editor") {
    console.log("WRITE");
    window.components = [];
    localStorage.setItem(key, JSON.stringify(components));
    if (!noPush) {
      pushHistory(components);
    }
  }
}
function readComponent(componentName) {
  var components = readData("ui-editor");
  if (!components) {
    return undefined;
  }
  return components.find(function (component) {
    return component.name === componentName;
  });
}
function writeComponent(parent) {
  if (!Array.isArray(parent) && parent.name) {
    var components = readData("ui-editor");
    var index = components.findIndex(function (comp) {
      return comp.name === parent.name;
    });
    components[index] = parent;
    writeData("ui-editor", components);
  }
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasAssets = hasAssets;
exports.nameToURL = nameToURL;
exports.urlToName = urlToName;
function nameToURL(style) {
  if (typeof style !== "string") {
    console.error("state should be a string");
  }
  if (window.assets && window.assets.length > 0) {
    var _loop = function _loop() {
      // Replace it with asset blob url
      var assetName = style.split("['")[1].split("]")[0].split("");
      assetName.pop();
      assetName = assetName.join("");
      var asset = window.assets.find(function (asset) {
        return asset.name === assetName;
      });
      style = style.replace("$assets['".concat(assetName, "']"), "url(".concat(getURL(asset.blob, assetName), ")"));
    };
    // Check if style has $assets
    while (style.includes("$assets")) {
      _loop();
    }
  }
  return style;
}
function urlToName(state) {
  var _loop2 = function _loop2() {
    // Replace it with asset blob url
    var url = state.split("url(")[1].split(")")[0];
    var asset = window.assets.find(function (asset) {
      return asset.url === url;
    });
    if (asset) {
      state = state.replace("url(".concat(asset.url, ")"), "$assets['".concat(asset.name, "']"));
    }
  };
  // Check if style has $assets
  while (state.includes(window.location.host)) {
    _loop2();
  }
  return state;
}
function hasAssets(state) {
  return state.includes("$assets");
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(0));
var _Publishes = _interopRequireDefault(__webpack_require__(35));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
// Events.
var Reducer = /*#__PURE__*/function (_Component) {
  _inherits(Reducer, _Component);
  var _super = _createSuper(Reducer);
  function Reducer(props) {
    var _this;
    _classCallCheck(this, Reducer);
    _this = _super.call(this, props);
    _this.state = {
      publishes: _this.props.reducer.publishes,
      reducer: _this.props.reducer.reducer
    };
    return _this;
  }
  _createClass(Reducer, [{
    key: "addNewPublish",
    value: function addNewPublish() {
      this.setState({
        publishes: (this.state.publishes.push({
          publishable: true,
          publishName: "",
          publishCondition: ""
        }), this.state.publishes)
      });
    }
  }, {
    key: "syncChanges",
    value: function syncChanges() {
      this.props.onChange({
        publishes: this.state.publishes,
        reducer: this.state.reducer
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var reducer = this.state.reducer;
      var publishes = this.state.publishes;
      return (
        /*#__PURE__*/
        // TODO: 1.check save and delete.
        _react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
          "class": "spacing",
          onMouseLeave: this.syncChanges.bind(this)
        }, /*#__PURE__*/_react["default"].createElement("label", null, "Reducer Definition"), /*#__PURE__*/_react["default"].createElement("input", {
          value: reducer,
          onChange: function onChange(event, data, reducer) {
            _this2.setState({
              reducer: reducer
            });
          }
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "title"
        }, "Publishes"), /*#__PURE__*/_react["default"].createElement("div", null, reducer !== "" ? /*#__PURE__*/_react["default"].createElement("button", {
          id: "addPublish",
          onClick: this.addNewPublish.bind(this)
        }, "Add publish") : null, publishes.length > 0 ? /*#__PURE__*/_react["default"].createElement(_Publishes["default"], {
          publishes: publishes
        }) : null))
      );
    }
  }]);
  return Reducer;
}(_react.Component);
var _default = Reducer;
exports["default"] = _default;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(0));
var _Publish = _interopRequireDefault(__webpack_require__(36));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Publishes = /*#__PURE__*/function (_Component) {
  _inherits(Publishes, _Component);
  var _super = _createSuper(Publishes);
  function Publishes(props) {
    var _this;
    _classCallCheck(this, Publishes);
    _this = _super.call(this, props);
    _this.state = {
      publishes: _this.props.publishes
    };
    return _this;
  }
  _createClass(Publishes, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var publishes = this.state.publishes;
      return /*#__PURE__*/_react["default"].createElement("div", null, publishes.map(function (publish, i) {
        return /*#__PURE__*/_react["default"].createElement(_Publish["default"], {
          index: i,
          key: Math.ceil(Math.random() * 1000),
          publish: publish,
          onSave: function onSave(data, i) {
            return _this2.setState({
              publishes: (publishes[i] = data, publishes) // update list of publishes and return it.
            });
          },

          onDelete: function onDelete(a, i) {
            return _this2.setState({
              publishes: (publishes.splice(i, 1), publishes) // delete the publishes and return it.
            });
          }
        });
      }));
    }
  }]);
  return Publishes;
}(_react.Component);
var _default = Publishes;
exports["default"] = _default;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(0));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
// Events.
var Publish = /*#__PURE__*/function (_Component) {
  _inherits(Publish, _Component);
  var _super = _createSuper(Publish);
  function Publish(props) {
    var _this;
    _classCallCheck(this, Publish);
    _this = _super.call(this, props);
    _this.state = {
      publishable: _this.props.publish.publishable,
      publishName: _this.props.publish.publishName,
      publishCondition: _this.props.publish.publishCondition
    };
    return _this;
  }
  _createClass(Publish, [{
    key: "onButtonClickSave",
    value: function onButtonClickSave() {
      // Reminder - Never bind inline calls to button. Ruined my morning.
      this.props.onSave(this.state, this.props.index);
    }
  }, {
    key: "onButtonClickdelete",
    value: function onButtonClickdelete() {
      this.props.onDelete(this.state, this.props.index);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var state = this.state;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        "class": "spacing"
      }, /*#__PURE__*/_react["default"].createElement("label", null, "Publishable"), /*#__PURE__*/_react["default"].createElement("input", {
        type: "checkbox",
        onChange: function onChange(e) {
          _this2.setState({
            publishable: !state.publishable
          });
        },
        checked: state.publishable ? "checked" : ""
      })), /*#__PURE__*/_react["default"].createElement("div", null, state.publishable ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        "class": "spacing"
      }, /*#__PURE__*/_react["default"].createElement("label", null, "Publish Name"), /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        onChange: function onChange(e) {
          _this2.setState({
            publishName: e.currentTarget.value
          });
        },
        value: state.publishName
      })), /*#__PURE__*/_react["default"].createElement("div", {
        "class": "spacing"
      }, /*#__PURE__*/_react["default"].createElement("label", null, "Publish Condition"), /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        onChange: function onChange(e) {
          _this2.setState({
            publishCondition: e.currentTarget.value
          });
        },
        value: state.publishCondition
      })), /*#__PURE__*/_react["default"].createElement("button", {
        id: "savePublish",
        onClick: this.onButtonClickSave.bind(this)
      }, "Save Publish"), /*#__PURE__*/_react["default"].createElement("button", {
        id: "deletePublish",
        onClick: this.onButtonClickdelete.bind(this)
      }, "Delete Publish")) : null));
    }
  }]);
  return Publish;
}(_react.Component);
var _default = Publish;
exports["default"] = _default;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(38);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".events {\r\n    border:1px solid black;\r\n    padding: 5px;\r\n}\r\n\r\n.error {\r\n    color: red;\r\n}\r\n\r\n.tags.tags ul {\r\n    border: 0px;\r\n    margin-left: 30px;\r\n    padding:5px;\r\n}\r\n\r\n.tags ul:first-child {\r\n    margin-left: -2px;\r\n}\r\n\r\n#saveEvent, #deleteEvent, #addPublish, #deletePublish, #savePublish{\r\n    font-size: xx-small;\r\n}", ""]);



/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteEvent = deleteEvent;
exports.selectedTagChanged = selectedTagChanged;
exports.updateConfiguration = updateConfiguration;
exports.updateEvent = updateEvent;
exports.updateSelectedEvent = updateSelectedEvent;
function updateEvent(event) {
  var element = JSON.parse(JSON.stringify(this.state.component));

  // Keep the child component name as the ID. Will cause problem in future for list rendering boy.
  if (this.state.selectedTag.includes("child-component-")) {
    event.id = this.state.selectedTag.split("child-component-")[1];
  } else {
    event.id = this.state.selectedTag.split("-")[1];
  }
  // Add 
  if (event.index === undefined) {
    element.events.push(event);
  } else {
    // 1. Find the event
    var changedEventIndex = element.events.findIndex(function (e) {
      return e.id === event.id && e.name === event.name;
    });
    if (changedEventIndex == -1) {
      console.error("Changing event name will not help. Create a new event"); // Feature 
    }

    element.events[changedEventIndex] = event;
  }
  this.props.onEventsUpdate(element.events);
}
function highlightItem(id) {
  var style = document.querySelector("#dynamicHighlight");
  if (style) {
    style.innerHTML = "#".concat(id, " { border: 1px solid #F00; }");
  } else {
    style = document.createElement('style');
    style.id = "dynamicHighlight";
    style.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(style);
  }
}
function selectedTagChanged(e) {
  var selectedTag = e.currentTarget.value;
  var eventID = "";
  if (selectedTag.includes("child-component-")) {
    eventID = selectedTag.split("child-component-")[1];
  } else {
    eventID = selectedTag.split("-")[1];
  }

  /**
   * Highlight the selected in the preview
   */

  highlightItem(eventID);
  this.setState({
    selectedTag: e.currentTarget.value,
    selectedEventName: "",
    eventID: eventID,
    selectedEvent: {
      name: "",
      reducer: {
        reducer: "",
        publishes: [],
        index: this.props.component.events.length
      }
    }
  });
}
function deleteEvent() {
  var _this = this;
  // Get current component.
  var component = JSON.parse(JSON.stringify(this.state.component));

  // Get selected event index.
  var deleteIndex = component.events.findIndex(function (event) {
    return event.name === _this.state.selectedEventName;
  });

  // Remove the event to be deleted.
  component.events.splice(deleteIndex, 1);

  // Update elements with new events.
  this.props.onEventsUpdate(component.events);
}
function updateConfiguration(config) {
  this.props.onConfigUpdate(config);
}
function updateSelectedEvent(e) {
  var _this2 = this;
  var selectedEvent = this.props.component.events.find(function (event) {
    return event.name === e.currentTarget.value && _this2.state.eventID === event.id;
  });
  if (selectedEvent) {
    this.setState({
      selectedEventName: e.currentTarget.value,
      selectedEvent: selectedEvent
    });
  } else {
    this.setState({
      selectedEventName: e.currentTarget.value,
      selectedEvent: {
        name: e.currentTarget.value,
        reducer: {
          reducer: "",
          publishes: [],
          index: this.props.component.events.length
        }
      }
    });
  }
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(0));
__webpack_require__(41);
var _Asset = _interopRequireDefault(__webpack_require__(43));
var _Window = _interopRequireDefault(__webpack_require__(3));
var _Reducer = __webpack_require__(46);
var _db = __webpack_require__(47);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Assets = /*#__PURE__*/function (_Component) {
  _inherits(Assets, _Component);
  var _super = _createSuper(Assets);
  function Assets(props) {
    var _this;
    _classCallCheck(this, Assets);
    _this = _super.call(this, props);
    _this.state = {
      "class": "drop_zone",
      imageURL: "",
      assets: [],
      selectedAsset: ""
    };

    /* Store the assets in local DB */

    _this.writeToDB = _db.writeToDB.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Assets, [{
    key: "appendToBody",
    value: function appendToBody(file) {
      var bin = this.result;
      var newFile = document.createElement('div');
      newFile.innerHTML = 'Loaded : ' + file.name + ' size ' + file.size + ' B';
      document.body.appendChild(newFile);

      /* Keep the image in DOM as cache. */

      var img = document.createElement("img");
      img.file = file;
      img.src = bin;
      newFile.appendChild(img);
    }
  }, {
    key: "updatedSelected",
    value: function updatedSelected(e) {
      /* Keep track of selected asset in the state */

      var assetName = e.target.getAttribute("data-name");
      this.setState({
        selectedAsset: assetName
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      /* Create an asset component for each assets. */

      var assets = this.state.assets.map(function (asset) {
        return /*#__PURE__*/_react["default"].createElement(_Asset["default"], {
          asset: asset,
          selected: _this2.state.selectedAsset,
          onSelected: _this2.updatedSelected.bind(_this2)
        });
      });
      return /*#__PURE__*/_react["default"].createElement(_Window["default"], null, /*#__PURE__*/_react["default"].createElement("ul", {
        className: "assets"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        onClick: _db.fetchFromDB.bind(this)
      }, "Load Assets"), /*#__PURE__*/_react["default"].createElement("div", {
        className: this.state["class"],
        onDrop: _Reducer.dropHandler.bind(this),
        onDragOver: _Reducer.dragOverHandler.bind(this),
        onDragLeave: _Reducer.dragLeaveHandler.bind(this)
      }, /*#__PURE__*/_react["default"].createElement("p", null, "Drag one or more files to this Drop Zone ...")), /*#__PURE__*/_react["default"].createElement("div", null, this.state.selectedAsset.name), assets));
    }
  }]);
  return Assets;
}(_react.Component);
var _default = Assets;
exports["default"] = _default;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(42);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "\r\n/* Show dashed outline for the drop zone.*/\r\n\r\n.drop_zone {\r\n  border: 1px lightgray dashed;\r\n  width:  200px;\r\n  height: 100px;\r\n}\r\n\r\n/* Show dashed outline during drag over. */\r\n\r\n.drag_over {\r\n  border: 2px lightgray dashed;\r\n  width:  200px;\r\n  height: 100px;\r\n}\r\n\r\n/* Give some spacing around asset name. */\r\n\r\n.assets p{\r\n  padding:15px; \r\n}", ""]);



/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(0));
__webpack_require__(44);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Asset = /*#__PURE__*/function (_Component) {
  _inherits(Asset, _Component);
  var _super = _createSuper(Asset);
  function Asset(props) {
    var _this;
    _classCallCheck(this, Asset);
    _this = _super.call(this, props);
    _this.state = {};
    return _this;
  }
  _createClass(Asset, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var asset = assets.find(function (asset) {
        return asset.name === _this2.props.asset.name;
      });
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", {
        "data-name": this.props.asset.name,
        onClick: this.props.onSelected
      }, this.props.asset.name), /*#__PURE__*/_react["default"].createElement("img", {
        src: asset.url
      }));
    }
  }]);
  return Asset;
}(_react.Component);
var _default = Asset;
exports["default"] = _default;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(45);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "\r\n/* Show selected asset with a light dashed outline */\r\n\r\n.selectedAsset{\r\n    border: 1px lightgray dashed;\r\n}", ""]);



/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dragLeaveHandler = dragLeaveHandler;
exports.dragOverHandler = dragOverHandler;
exports.dropHandler = dropHandler;
// Public functions.

function dropHandler(ev) {
  var _this = this;
  ev.preventDefault();

  /* Store the image in DB and in DOM after drop */

  [].forEach.call(ev.dataTransfer.files, function (file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function (event, b) {
      // 1. append to body
      // 2. write to db.
      this.appendToBody(file);
      this.writeToDB(event.target.result, file.name);
    }.bind(_this);
  });
  this.setState({
    "class": "drop_zone"
  });
}
function dragOverHandler(ev) {
  console.log('File(s) in drop zone');

  /* Show drag over visuals */

  this.setState({
    "class": "drag_over"
  });
  ev.preventDefault();
}
function dragLeaveHandler(e) {
  /* Show drop visuals */

  this.setState({
    "class": "drop_zone"
  });
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchFromDB = fetchFromDB;
exports.writeToDB = writeToDB;
function writeToDB(result, name) {
  var _this = this;
  window.iDB.get(name).then(function (data) {
    var img = document.createElement("img");
    img.href = data.result;
    _this.setState({
      imageURL: data.result
    });
  });
  window.iDB.put({
    name: name,
    result: result
  });
}
function fetchFromDB() {
  var _this2 = this;
  window.iDB.getAll().then(function (data) {
    // save it to window
    window.assets = data.map(function (image) {
      return {
        name: image.name,
        blob: image.result,
        url: getURL(image.result)
      };
    });
    _this2.setState({
      assets: window.assets
    });
  });
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(0));
var _Storage = __webpack_require__(4);
var _Change = _interopRequireDefault(__webpack_require__(49));
var _Window = _interopRequireDefault(__webpack_require__(3));
__webpack_require__(52);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var History = /*#__PURE__*/function (_Component) {
  _inherits(History, _Component);
  var _super = _createSuper(History);
  function History(props) {
    var _this;
    _classCallCheck(this, History);
    _this = _super.call(this, props);
    _this.state = {};
    _this.state.history = (0, _Storage.readData)("ui-editor-history");
    return _this;
  }
  _createClass(History, [{
    key: "updateHistory",
    value: function updateHistory(data, index) {
      this.state.history[index] = data;
      localStorage.setItem("ui-editor-history", JSON.stringify(this.state.history));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/_react["default"].createElement(_Window["default"], null, /*#__PURE__*/_react["default"].createElement("ul", null, this.state.history.map(function (item, index) {
        return /*#__PURE__*/_react["default"].createElement(_Change["default"], {
          index: index,
          item: item,
          itemChanged: _this2.updateHistory.bind(_this2)
        });
      })));
    }
  }]);
  return History;
}(_react.Component);
var _default = History;
exports["default"] = _default;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(0));
__webpack_require__(50);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Change = /*#__PURE__*/function (_Component) {
  _inherits(Change, _Component);
  var _super = _createSuper(Change);
  function Change(props) {
    var _this;
    _classCallCheck(this, Change);
    _this = _super.call(this, props);
    _this.state = {
      time: _this.props.item.time,
      name: _this.props.item.name
    };
    return _this;
  }
  _createClass(Change, [{
    key: "updateName",
    value: function updateName(e) {
      this.setState({
        name: e.target.value
      });
    }
  }, {
    key: "updateParent",
    value: function updateParent() {
      this.props.itemChanged({
        name: this.state.name,
        time: this.props.item.time,
        data: this.props.item.date
      }, this.props.index);
    }
  }, {
    key: "render",
    value: function render() {
      var active = JSON.stringify(this.props.item.data) === JSON.stringify(window.components) ? "change active" : "change";
      return /*#__PURE__*/_react["default"].createElement("li", {
        className: active
      }, /*#__PURE__*/_react["default"].createElement("input", {
        value: this.state.name,
        onChange: this.updateName.bind(this),
        onMouseLeave: this.updateParent.bind(this)
      }), /*#__PURE__*/_react["default"].createElement("span", null, this.state.time));
    }
  }]);
  return Change;
}(_react.Component);
var _default = Change;
exports["default"] = _default;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(51);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".selected, .green {\r\n    border: 1px solid green;\r\n    background: rgb(43, 43, 43);\r\n}\r\n.selectedAsset{\r\n    border: 1px lightgray dashed;\r\n}\r\n\r\n.change input{\r\n    border: 1px;\r\n    padding: 5px;\r\n    width: 50px;\r\n}", ""]);



/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(53);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".selected, .green {\r\n    border: 1px solid green;\r\n    background: rgb(43, 43, 43);\r\n}\r\n.selectedAsset{\r\n    border: 1px lightgray dashed;\r\n}", ""]);



/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(0));
var _Runtime = __webpack_require__(5);
__webpack_require__(55);
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var DynamicComponent = /*#__PURE__*/function (_Component) {
  _inherits(DynamicComponent, _Component);
  var _super = _createSuper(DynamicComponent);
  function DynamicComponent(props) {
    var _this;
    _classCallCheck(this, DynamicComponent);
    _this = _super.call(this, props);
    _this.state = {
      component: _this.props.component
    };
    return _this;
  }
  _createClass(DynamicComponent, [{
    key: "render",
    value: function render() {
      (0, _Runtime.initialiseComponents)(this.props.component);
      if (!window[this.props.component.name]) {
        return null;
      }
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "centerItem"
      }, /*#__PURE__*/_react["default"].createElement(window[this.props.component.name]));
    }
  }]);
  return DynamicComponent;
}(_react.Component);
var _default = DynamicComponent;
exports["default"] = _default;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(56);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(2)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".hint{\r\n    height:100px;\r\n    width:100%;\r\n    border: 1px dashed green;\r\n}\r\n\r\n.centerItem {\r\n    width: 40%;\r\n    margin-left: 11%;\r\n}", ""]);



/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(0));
var _Window = _interopRequireDefault(__webpack_require__(3));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Preview = /*#__PURE__*/function (_Component) {
  _inherits(Preview, _Component);
  var _super = _createSuper(Preview);
  function Preview(props) {
    var _this;
    _classCallCheck(this, Preview);
    _this = _super.call(this, props);
    _this.state = {
      name: "",
      configs: []
    };
    return _this;
  }
  _createClass(Preview, [{
    key: "render",
    value: function render() {
      // TODO: Should pass the current data. Instead of accessing it from global
      return /*#__PURE__*/_react["default"].createElement(_Window["default"], null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "container editor-tab"
      }));
    }
  }]);
  return Preview;
}(_react.Component);
var _default = Preview;
exports["default"] = _default;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(0));
var _Window = _interopRequireDefault(__webpack_require__(3));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Markup = /*#__PURE__*/function (_Component) {
  _inherits(Markup, _Component);
  var _super = _createSuper(Markup);
  function Markup(props) {
    var _this;
    _classCallCheck(this, Markup);
    _this = _super.call(this, props);
    _this.state = {
      markup: _this.props.markup
    };
    return _this;
  }
  _createClass(Markup, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var markup = this.state.markup;
      // TODO: Should pass the current data. Instead of accessing it from global
      return /*#__PURE__*/_react["default"].createElement(_Window["default"], null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "container editor-tab"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "editor markup"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "title"
      }, "Component Markup"), /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        value: markup,
        onChange: function onChange(event, markup) {
          _this2.setState({
            markup: markup
          });
        }
      }))));
    }
  }]);
  return Markup;
}(_react.Component);
var _default = Markup;
exports["default"] = _default;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(0));
var _Window = _interopRequireDefault(__webpack_require__(3));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Style = /*#__PURE__*/function (_Component) {
  _inherits(Style, _Component);
  var _super = _createSuper(Style);
  function Style(props) {
    var _this;
    _classCallCheck(this, Style);
    _this = _super.call(this, props);
    _this.state = {
      style: _this.props.style
    };
    return _this;
  }
  _createClass(Style, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var style = this.state.style;

      // TODO: Should pass the current data. Instead of accessing it from global
      return /*#__PURE__*/_react["default"].createElement(_Window["default"], null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "container editor-tab"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "editor css"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "title"
      }, "Component CSS"), /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        value: style,
        onChange: function onChange(event, data, style) {
          _this2.setState({
            style: style
          });
        }
      }))));
    }
  }]);
  return Style;
}(_react.Component);
var _default = Style;
exports["default"] = _default;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(0));
var _Window = _interopRequireDefault(__webpack_require__(3));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var State = /*#__PURE__*/function (_Component) {
  _inherits(State, _Component);
  var _super = _createSuper(State);
  function State(props) {
    var _this;
    _classCallCheck(this, State);
    _this = _super.call(this, props);
    _this.state = {
      state: _this.props.state
    };
    return _this;
  }
  _createClass(State, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var state = this.state.state;
      // TODO: Should pass the current data. Instead of accessing it from global
      return /*#__PURE__*/_react["default"].createElement(_Window["default"], null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "container editor-tab"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "editor state"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "title"
      }, "Component State"), /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        value: state,
        onChange: function onChange(editor, data, state) {
          _this2.setState({
            state: state
          });
        }
      }))));
    }
  }]);
  return State;
}(_react.Component);
var _default = State;
exports["default"] = _default;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(0));
var _Window = _interopRequireDefault(__webpack_require__(3));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var Composer = /*#__PURE__*/function (_Component) {
  _inherits(Composer, _Component);
  var _super = _createSuper(Composer);
  function Composer(props) {
    var _this;
    _classCallCheck(this, Composer);
    _this = _super.call(this, props);
    _this.state = {
      name: "",
      configs: []
    };
    return _this;
  }
  _createClass(Composer, [{
    key: "updateName",
    value: function updateName(e) {
      this.setState({
        name: e.target.value
      });
    }
  }, {
    key: "onComponentChange",
    value: function onComponentChange(e) {
      this.setState({
        component: e.target.value
      });
    }
  }, {
    key: "onStateChange",
    value: function onStateChange(e) {
      this.setState({
        state: e.target.value
      });
    }
  }, {
    key: "addConfig",
    value: function addConfig() {
      var configs = this.state.configs;
      configs.push({
        name: this.state.name,
        component: this.state.component,
        state: this.state.state
      });
      this.setState({
        configs: configs
      });
    }
  }, {
    key: "render",
    value: function render() {
      window.components = window.components || [];
      // TODO: Should pass the current data. Instead of accessing it from global
      return /*#__PURE__*/_react["default"].createElement(_Window["default"], null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "container editor-tab"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "editor state"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "title"
      }, "Component Composer"), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("label", null, "State Name"), /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        value: this.state.name,
        onChange: this.updateName.bind(this)
      }), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("label", null, "Component"), /*#__PURE__*/_react["default"].createElement("select", {
        onChange: this.onComponentChange.bind(this)
      }, window.components.map(function (component) {
        return /*#__PURE__*/_react["default"].createElement("option", {
          value: component.name
        }, component.name);
      })), /*#__PURE__*/_react["default"].createElement("label", null, "State"), /*#__PURE__*/_react["default"].createElement("select", {
        onChange: this.onStateChange.bind(this)
      }, /*#__PURE__*/_react["default"].createElement("option", {
        value: "show"
      }, "Show"), /*#__PURE__*/_react["default"].createElement("option", {
        value: "hide"
      }, "Hide"))), /*#__PURE__*/_react["default"].createElement("button", {
        onClick: this.addConfig.bind(this)
      }, "Add"), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("ul", null, this.state.configs.map(function (config) {
        return /*#__PURE__*/_react["default"].createElement("li", null, /*#__PURE__*/_react["default"].createElement("label", null, "State Name"), /*#__PURE__*/_react["default"].createElement("input", {
          type: "text",
          value: config.name
        }), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("label", null, "Component"), /*#__PURE__*/_react["default"].createElement("input", {
          type: "text",
          value: config.component
        }), /*#__PURE__*/_react["default"].createElement("label", null, "State"), /*#__PURE__*/_react["default"].createElement("input", {
          type: "text",
          value: config.state
        }));
      }))))));
    }
  }]);
  return Composer;
}(_react.Component);
var _default = Composer;
exports["default"] = _default;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertToReact = convertToReact;
exports.convertToReactRedux = convertToReactRedux;
var _markup = __webpack_require__(7);
var _reducers = __webpack_require__(8);
// Elements to  react component.
function convertToReact(component) {
  component.events.forEach(function (event) {
    event.id = event.id.replace("-", "");
  });

  /**
   * Code generation for markup
   * 
   * Markup is edited in three phases.
   * 1. Add props - This function changes markup to include children - helps in composing bigger components. 
   *  For example, lets say an accordion component is created, its behaviour includes expanding contents and
   *  collapsing contents where content could be valid html tags, other components. An easy way to create such 
   *  separated concerns in behaviour is embedding children.
   * 
   * 2. Add Children config - This helps to override child config state from parent and render list of children.
   * 
   * 3. Add events - This helps to bind event listenes to markup 
   */

  var propsInMarkup = (0, _markup.addChildren)(component);
  var childrenMarkup = (0, _markup.addChildrenConfig)(propsInMarkup, component);
  var componentEventedMarkup = (0, _markup.addEvents)(childrenMarkup, component.events, component);

  /**
   * Code generation for reducers
   * 
   * Reducer function are created in a single phase.
   * 
   * getReducers takes a component and returns reducer functions based on following rules.
   * 1. Generation of function name - It appends event id with event name 
   * 2. Generation of function definition
   *      1. Generation of a new state - Creates a new state with help of json.strigify and parse
   *      2. Generation of reducer logic - event reducer is appeneded here. 
   *      3. Generation of publishable event - It also publishes events based on the event type.
   */
  var reducers = (0, _reducers.getReducers)(component);
  var ReactComponent = "\nclass ".concat(component.name, " extends Component {\n\n    constructor(props) {\n        super(props);\n        this.state = this.props.state || ").concat(component.state, ";\n\n        // Generate css as a separate file on download\n        \n        var style = document.createElement('style');\n        style.innerHTML = `").concat(component.style, "`;\n        style.type = 'text/css';\n        document.getElementsByTagName('head')[0].appendChild(style);\n    }\n\n    ").concat(reducers, "\n\n    render() {\n        return (").concat(componentEventedMarkup, ")\n    }\n}\n");
  return ReactComponent;
}
function convertToReactRedux(component) {
  // For every publishable event
}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveElement = saveElement;
exports.updateConfig = updateConfig;
exports.updateEvent = updateEvent;
exports.updateSelectedComponent = updateSelectedComponent;
var _Storage = __webpack_require__(4);
var _Runtime = __webpack_require__(5);
function updateEvent(events) {
  var _this = this;
  // Create new state.
  var newElements = Object.assign({}, this.state).components;
  var selectedComponent = newElements.find(function (element) {
    return element.name === _this.state.selectedComponent.name;
  });
  selectedComponent.events = events;

  // Set state to the new state.
  this.setState({
    elements: newElements
  });
  (0, _Storage.writeData)("ui-editor", newElements);
}
function updateConfig(config) {
  var newElements = Object.assign({}, this.state).components;
  var parent = newElements.find(function (element) {
    return element.name === config.parentName;
  });
  var child = newElements.find(function (element) {
    return element.name === config.childName;
  });
  parent.state = JSON.parse(parent.state);
  if (parent.config === undefined) {
    parent.config = {};
  } else {
    parent.config = JSON.parse(parent.config);
  }
  parent.config[child.name] = config.config;
  if (parent.config[child.name].override) {
    parent.state[child.name] = [JSON.parse(child.state)];
  } else {
    delete parent.state[child.name];
  }
  parent.state = JSON.stringify(parent.state);
  parent.config = JSON.stringify(parent.config);
  this.setState({
    elements: newElements
  });
  (0, _Storage.writeData)("ui-editor", newElements);
}
function saveElement(element) {
  var _this2 = this;
  var components = Array.from(this.state.components);
  var newElement;

  // Check if element exist.
  var elementExist = components.find(function (component) {
    return component.name === element.name;
  }) || components.find(function (component) {
    return component.name === element.trueName;
  });
  var selectedComponent = components.find(function (component) {
    return component.name === _this2.state.selectedComponent.name;
  });
  var selectedIndex = components.findIndex(function (component) {
    return component.name === _this2.state.selectedComponent.name;
  });
  if (elementExist) {
    if ((0, _Runtime.componentRecursive)(element)) {
      // Edit the config
      var config = JSON.parse(selectedComponent.config);
      config[element.name] = config[element.name] || {};
      config[element.name].override = true;
      selectedComponent.config = JSON.stringify(config);

      // Edit the state.
      var state = JSON.parse(element.state);
      state[element.name] = state[element.name] || [];
      element.state = JSON.stringify(state);
    }

    // Find the element.
    var elementUnderEdit = selectedComponent;

    // Merge.
    elementUnderEdit = Object.assign(elementUnderEdit, element);

    // Push it to original list.
    components[selectedIndex] = elementUnderEdit;
  } else {
    newElement = {
      name: element.name,
      markup: element.markup,
      events: [],
      state: element.state || "{}",
      style: element.style,
      children: [],
      id: Math.ceil(Math.random() * 1000),
      config: "{}"
    };
    delete newElement.trueName;
    components.push(newElement);
    selectedIndex = components.length - 1;

    // Find noFolder
    this.state.folders[0].contents.push(element.name);
    // Push new component into contents.
  }

  this.setState({
    elements: components,
    element: {
      name: element.name,
      markup: element.markup,
      style: element.style,
      state: element.state,
      events: element.events || []
    },
    showEditor: false,
    folders: this.state.folders
  });
  (0, _Storage.writeData)("folders", this.state.folders);
  (0, _Storage.writeData)("ui-editor", components);
}
function updateSelectedComponent(componentName, e) {
  // Find the element from state that matches the currently selected element.
  var selectedComponent = components.find(function (component) {
    return component.name === componentName;
  });

  // Update the state with selectedElement.
  this.setState({
    selectedComponent: selectedComponent
  });
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _react = _interopRequireWildcard(__webpack_require__(0));
var _reactDom = _interopRequireDefault(__webpack_require__(10));
__webpack_require__(17);
var _Components = _interopRequireDefault(__webpack_require__(20));
var _Events = _interopRequireDefault(__webpack_require__(24));
var _Assets = _interopRequireDefault(__webpack_require__(40));
var _History = _interopRequireDefault(__webpack_require__(48));
var _DynamicComponent = _interopRequireDefault(__webpack_require__(54));
var _Preview = _interopRequireDefault(__webpack_require__(57));
var _Markup = _interopRequireDefault(__webpack_require__(58));
var _Style = _interopRequireDefault(__webpack_require__(59));
var _State = _interopRequireDefault(__webpack_require__(60));
var _Composer = _interopRequireDefault(__webpack_require__(61));
var _export = __webpack_require__(62);
var _Runtime = __webpack_require__(5);
var _Reducer = __webpack_require__(63);
var _Storage = __webpack_require__(4);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
// Constants
var Index = /*#__PURE__*/function (_Component) {
  _inherits(Index, _Component);
  var _super = _createSuper(Index);
  function Index(props) {
    var _this;
    _classCallCheck(this, Index);
    _this = _super.call(this, props);
    var components = [];
    _this.state = {
      components: components,
      selectedTag: "",
      component: {
        name: "",
        markup: "",
        style: "",
        state: "{ }",
        events: []
      },
      selectedComponent: "",
      folders: (0, _Storage.readData)("folders"),
      selectedTab: "Events"
    };
    _this.updateConfig = _Reducer.updateConfig.bind(_assertThisInitialized(_this));
    _this.updateEvent = _Reducer.updateEvent.bind(_assertThisInitialized(_this));
    _this.saveElement = _Reducer.saveElement.bind(_assertThisInitialized(_this));
    window.refreshComponents = _this.refreshComponents.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Index, [{
    key: "exportReact",
    value: function exportReact(e) {
      window.visited = {};
      var nestedComponents = (0, _Runtime.getNestedComponents)(this.state.selectedComponent);
      // nested components contain duplicates. we need to remove it
      var uniqueComponents = {};
      nestedComponents.forEach(function (component) {
        if (!uniqueComponents[component.name]) {
          uniqueComponents[component.name] = component;
        }
      });
      console.log(Object.values(uniqueComponents).map(_export.convertToReact).join("\n\n"));
    }
  }, {
    key: "render",
    value: function render() {
      var selectedComponent = this.state.selectedComponent || this.state.component;
      var randomKey = Math.ceil(Math.random() * 1000);
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Markup["default"], {
        markup: selectedComponent.markup,
        key: randomKey
      }), /*#__PURE__*/_react["default"].createElement(_Style["default"], {
        style: selectedComponent.style,
        key: randomKey
      }), /*#__PURE__*/_react["default"].createElement(_State["default"], {
        state: selectedComponent.state,
        key: randomKey
      }), /*#__PURE__*/_react["default"].createElement(_DynamicComponent["default"], {
        onSave: this.props.onSave,
        key: randomKey,
        component: selectedComponent
      }), /*#__PURE__*/_react["default"].createElement(_Events["default"], {
        key: randomKey,
        component: selectedComponent,
        selectedTag: this.state.selectedTag,
        components: this.state.components,
        onEventsUpdate: this.updateEvent,
        onConfigUpdate: this.updateConfig,
        title: "Events"
      }));
    }
  }]);
  return Index;
}(_react.Component);
console.log("Source code https://github.com/imvetri/ui-editor");
_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(Index, null), document.getElementById("index"));

/***/ })
]]);