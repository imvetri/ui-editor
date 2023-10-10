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
var _config = _interopRequireDefault(__webpack_require__(25));
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


var content = __webpack_require__(14);

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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "body {\r\n    position:relative;\r\n    color: #d9d9d9;\r\n    font-family: \"Nunito Sans\",-apple-system,\".SFNSText-Regular\",\"San Francisco\",BlinkMacSystemFont,\"Segoe UI\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\r\n    margin: 0px;\r\n}\r\n\r\nli , label, p, .rules , input, textarea{\r\n    font-size: 9px;\r\n}\r\n\r\ninput, textarea { \r\n    background: #2b2b2b;\r\n    color: #d9d9d9;\r\n    opacity: 0.75;\r\n    vertical-align: bottom;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n    -webkit-appearance: textarea;\r\n    color: rgba(255,255,255,0.5);\r\n    border-color: rgba(0,0,0,0.9);\r\n    border-width: 1px;\r\n    padding: 7px;\r\n}\r\n\r\nul label input {\r\n    width: 10px;\r\n}\r\n\r\nul, li {\r\n    padding-left: 5px;\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n}\r\n\r\nbutton, select{\r\n    color: rgba(255,255,255,0.5);\r\n    border-color: rgba(0,0,0,0.9);\r\n    border-width: 0px;\r\n    padding: 5px;\r\n    background-color: transparent;\r\n    margin-left: 4px;\r\n}\r\n\r\nselect:focus{\r\n    \r\n    outline: 1px solid white;\r\n}\r\n\r\nbutton i{\r\n    padding-right:4px;\r\n}\r\n\r\nselect:focus, \r\nul label:hover, \r\nli:hover, \r\n.content:hover {\r\n    color: #fff;\r\n    background: rgb(43, 43, 43);\r\n}\r\n\r\nbutton:hover{\r\n    color: #fff;\r\n}\r\n\r\nul,li, ul label {\r\n    color: rgba(255,255,255,0.5);\r\n}\r\n\r\n\r\n#index{\r\n    margin:-4px;\r\n}\r\n\r\n\r\n.container{\r\n    padding: 5px;\r\n    background: #2C3134;\r\n}\r\n\r\n*::-webkit-scrollbar {\r\n  width: 1px;\r\n}\r\n \r\n*::-webkit-scrollbar-track {\r\n  box-shadow: inset 0 0 0px rgba(0, 0, 0, 0.3);\r\n}\r\n \r\n*::-webkit-scrollbar-thumb {\r\n  background-color: darkgrey;\r\n  outline: 1px solid slategrey;\r\n}", ""]);



/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(0));
var _Tags = _interopRequireDefault(__webpack_require__(17));
var _Reducer = _interopRequireDefault(__webpack_require__(22));
var _Window = _interopRequireDefault(__webpack_require__(3));
__webpack_require__(26);
var _Reducer2 = __webpack_require__(28);
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(0));
__webpack_require__(18);
var _Nodes = _interopRequireDefault(__webpack_require__(20));
var _getNodeTree = __webpack_require__(21);
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(19);

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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".error {\r\n    color: red;\r\n}\r\n\r\n.tags {\r\n    max-height: 300px;\r\n    overflow: scroll;\r\n}\r\n\r\n.selectedItem.selectedItem {\r\n    outline: 1px solid green;\r\n}", ""]);



/***/ }),
/* 20 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNodeTree = getNodeTree;
var _react = _interopRequireDefault(__webpack_require__(0));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
window.React = _react["default"];
window.Component = _react["default"].Component;
function getNodeTree(element, jsx, style, state, events) {
  var result, error;
  try {
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(0));
var _Publishes = _interopRequireDefault(__webpack_require__(23));
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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(0));
var _Publish = _interopRequireDefault(__webpack_require__(24));
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
/* 24 */
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var config = {
  Events: {
    "collapsed": false,
    "top": 770,
    "left": 541
  },
  State: {
    "collapsed": false,
    "top": 699,
    "left": 292
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
  }
};
var _default = config;
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
exports.push([module.i, ".events {\r\n    border:1px solid black;\r\n    padding: 5px;\r\n}\r\n\r\n.error {\r\n    color: red;\r\n}\r\n\r\n.tags.tags ul {\r\n    border: 0px;\r\n    margin-left: 30px;\r\n    padding:5px;\r\n}\r\n\r\n.tags ul:first-child {\r\n    margin-left: -2px;\r\n}\r\n\r\n#saveEvent, #deleteEvent, #addPublish, #deletePublish, #savePublish{\r\n    font-size: xx-small;\r\n}", ""]);



/***/ }),
/* 28 */
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(__webpack_require__(0));
__webpack_require__(30);
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(31);

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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".hint{\r\n    height:100px;\r\n    width:100%;\r\n    border: 1px dashed green;\r\n}\r\n\r\n.centerItem {\r\n    width: 40%;\r\n    margin-left: 11%;\r\n}", ""]);



/***/ }),
/* 32 */
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
/* 33 */
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
/* 34 */
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveElement = saveElement;
exports.updateConfig = updateConfig;
exports.updateEvent = updateEvent;
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
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _react = _interopRequireWildcard(__webpack_require__(0));
var _reactDom = _interopRequireDefault(__webpack_require__(6));
__webpack_require__(13);
var _Events = _interopRequireDefault(__webpack_require__(16));
var _DynamicComponent = _interopRequireDefault(__webpack_require__(29));
var _Markup = _interopRequireDefault(__webpack_require__(32));
var _Style = _interopRequireDefault(__webpack_require__(33));
var _State = _interopRequireDefault(__webpack_require__(34));
var _Reducer = __webpack_require__(35);
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
      selectedTab: "Events"
    };
    _this.updateConfig = _Reducer.updateConfig.bind(_assertThisInitialized(_this));
    _this.updateEvent = _Reducer.updateEvent.bind(_assertThisInitialized(_this));
    _this.saveElement = _Reducer.saveElement.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(Index, [{
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