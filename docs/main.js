/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(10);
} else {}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(18);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _localStorage = __webpack_require__(44);

module.exports = {
    readData: _localStorage.readData,
    writeData: _localStorage.writeData,
    readComponent: _localStorage.readComponent,
    writeComponent: _localStorage.writeComponent,
    popHistory: _localStorage.popHistory
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.saveComponentsToWindow = saveComponentsToWindow;
exports.getNestedComponents = getNestedComponents;

var _createComponent = __webpack_require__(43);

var _Storage = __webpack_require__(3);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // Dependencies.

/**
 * 
 * Asset in style sheet syntax - $asset
 */

function createStylesheet(style, name) {

    // Check if style has $assets
    while (style.includes("$assets")) {
        // Replace it with asset blob url
        var asset = style.split("['")[1].split("]")[0].split("");
        asset.pop();
        asset = asset.join("");
        style = style.replace("$assets['" + asset + "']", "url(" + window.assets[asset] + ")");
    }
    var toDelete = [].concat(_toConsumableArray(document.querySelectorAll("[data-component-name='ParentComponent']")));
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
    createStylesheet(component.style, component.name);
    window[component.name] = (0, _createComponent.createComponent)(component);
}

function checkNestedComponents(markup) {

    var components = (0, _Storage.readData)("ui-editor");

    return components.filter(function (component) {
        return markup.includes(component.name);
    }).length > 0;
}

/** Takes components and saves them to window as react Object */
function saveComponentsToWindow(nestedComponents) {
    // Transpile them and make them global.
    nestedComponents.forEach(function (component) {
        saveToWindow(component);
    });
}

/** Takes markup and returns children component objects. */
function getNestedComponents(parent) {
    // Should be able to detect nested component.

    var components = (0, _Storage.readData)("ui-editor");
    var nestedComponents = [parent];
    if (checkNestedComponents(parent.markup)) {
        // find all the nested components from the markup and push it to nestedComponents.
        var children = components.filter(function (component) {
            return parent.markup.includes(component.name);
        });
        // Find grand kids.
        var grandKids = children.map(getNestedComponents).flat(3);
        nestedComponents.push.apply(nestedComponents, _toConsumableArray(grandKids));
    }
    return nestedComponents.filter(function (component) {
        return component && component.markup;
    });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dropHandler = dropHandler;
exports.dragOverHandler = dragOverHandler;
exports.dragLeaveHandler = dragLeaveHandler;
exports.onDragStart = onDragStart;
exports.onExport = onExport;

var _Runtime = __webpack_require__(4);

var _React = __webpack_require__(7);

var _Storage = __webpack_require__(3);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function dropHandler(ev) {
    ev.preventDefault();
    var componentName = ev.dataTransfer.getData("component-name");
    var folderName = ev.dataTransfer.getData("folder-name");
    var contents = Array.from(this.state.contents);

    // Check if the dropped item is a component
    if (componentName) {
        contents.push(componentName);
    }
    // Check if it is a folder. Also check if we are not dropping on the original folder. may be remove it from the dom. NOPE. 
    else if (folderName && folderName !== this.state.folderName) {
            contents.push({
                name: folderName,
                contents: [],
                type: "folder",
                status: "closed"
            });
        }
    this.props.onFolderUpdate({
        name: this.state.name,
        contents: contents,
        type: "folder",
        status: "open"
    });

    console.log("Drop from folder");
}

function dragOverHandler(ev) {
    ev.preventDefault();
    this.setState({
        folderClass: "newFolder dragOver",
        status: "open"
    });
    console.log("Drag");
}

function dragLeaveHandler(e) {
    console.log("drag");
    this.setState({
        folderClass: "newFolder",
        status: "closed"
    });
}

function onDragStart(e) {

    var name = event.target.getAttribute("data-folder-name");
    e.dataTransfer.setData("folder-name", name);
}

function onExport(componentName) {
    var components = (0, _Storage.readData)("ui-editor");
    var selectedComponent = components.find(function (component) {
        return component.name.includes(componentName);
    });
    var nestedComponents = (0, _Runtime.getNestedComponents)(selectedComponent);

    var uniqueComponents = [].concat(_toConsumableArray(new Set(nestedComponents.map(function (com) {
        return com.name;
    })))).map(function (name) {
        return components.find(function (element) {
            return element.name === name;
        });
    });
    var removeParanthesis = function removeParanthesis(component) {
        return component.replace("(", "").replace("})", "}");
    };
    console.log(uniqueComponents.map(function (component) {
        return (0, _React.convertToReact)(component);
    }).map(removeParanthesis).join(""));
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.convertToReact = convertToReact;
// Elements to  react component.
function convertToReact(component) {

    var markup = "markup";

    component.events.forEach(function (event) {
        event.id = event.id.replace("-", "");
    });

    var addProps = function addProps(component) {
        return component[markup].replace(">", " {...this.props}>{this.props.children}");
    };

    var getComponentEventedMarkup = function getComponentEventedMarkup(markup, events) {
        events.forEach(function (event) {
            var id = "id=\"" + event.id + "\"";
            // check if markup contains the id.
            if (markup.includes(id)) {
                markup = markup.replace(id, id + " " + event.name + "={this." + (event.id + event.name) + ".bind(this)}");
            }
            // its a child component.
            else {
                    markup = markup.replace("<" + event.id, "<" + event.id + " " + event.name + "={this." + (event.id + event.name) + ".bind(this)}");
                }
        });

        return markup.split("{state.").join("{this.state.");
    };

    // checks if state override is on. then adds state prop to child 
    var getStatedMarkup = function getStatedMarkup(markup) {
        // for all the config.
        // filter child with overide state is true
        var config = JSON.parse(component.config);
        var childrenConfig = Object.keys(config);
        childrenConfig.forEach(function (childName) {

            // PRECAUTION: Edit markup for rendering list. Should not use other configuration while using this.
            if (config[childName].override) {
                var childMarkup = "<" + childName + "></" + childName + ">";

                var childMarkupWithProps = "<" + childName + " state={item} key={i}></" + childName + ">";
                var renderListMarkup = "{this.state." + childName + ".map((item,i)=>" + childMarkupWithProps + ")}";
                markup = markup.replace(childMarkup, renderListMarkup);
            }
        });
        return markup;
    };

    var propsInMarkup = addProps(component);
    var stateOverideMarkup = getStatedMarkup(propsInMarkup);
    var componentEventedMarkup = getComponentEventedMarkup(stateOverideMarkup, component.events);

    var ReactComponent = "(\n        class " + component.name + " extends Component {\n        \n            constructor(props) {\n                super(props);\n                this.state = this.props.state || " + component.state + ";\n            }\n        \n            " + component.events.map(function (event) {
        if (event.publishable) {
            return "\n                    \n                    " + (event.id + event.name) + " (e) {\n                        var state = JSON.parse(JSON.stringify(this.state))\n                        " + event.reducer + "\n                        debugger;\n                        this.setState(state);\n                        e.state = state;\n                        this.props." + event.publishName + "? this.props." + event.publishName + "(e):null;\n                    }\n                    \n                    ";
        }

        return "\n                    " + (event.id + event.name) + " (e) {\n                        var state = JSON.parse(JSON.stringify(this.state))\n                        " + event.reducer + "\n                        debugger;\n                        this.setState(state);\n                    }\n                ";
    }).join("\n") + "\n        \n            render() {\n                return (" + componentEventedMarkup + ")\n            }\n        })\n        ";
    return ReactComponent;
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(68);

var _MessageComponent = __webpack_require__(70);

var _MessageComponent2 = _interopRequireDefault(_MessageComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libraries.

var MessagesComponent = function (_Component) {
    _inherits(MessagesComponent, _Component);

    function MessagesComponent(props) {
        _classCallCheck(this, MessagesComponent);

        return _possibleConstructorReturn(this, (MessagesComponent.__proto__ || Object.getPrototypeOf(MessagesComponent)).call(this, props));
    }

    _createClass(MessagesComponent, [{
        key: "render",
        value: function render() {

            var messages = this.props.messages;
            return _react2.default.createElement(
                "div",
                { className: "console" },
                messages.map(function (message, index) {
                    return _react2.default.createElement(_MessageComponent2.default, { key: index, message: message });
                })
            );
        }
    }]);

    return MessagesComponent;
}(_react.Component);

exports.default = MessagesComponent;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(11);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(16);

var _Assets = __webpack_require__(19);

var _Assets2 = _interopRequireDefault(_Assets);

var _Components = __webpack_require__(29);

var _Components2 = _interopRequireDefault(_Components);

var _DraggableComponent = __webpack_require__(51);

var _DraggableComponent2 = _interopRequireDefault(_DraggableComponent);

var _Editor = __webpack_require__(55);

var _Editor2 = _interopRequireDefault(_Editor);

var _Events = __webpack_require__(59);

var _Events2 = _interopRequireDefault(_Events);

var _History = __webpack_require__(80);

var _History2 = _interopRequireDefault(_History);

var _Preview = __webpack_require__(83);

var _Preview2 = _interopRequireDefault(_Preview);

var _Reducer = __webpack_require__(89);

var _Storage = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libraries.

// Dependencies.


// Components.


// Reducers.


// Utils


var Index = function (_Component) {
    _inherits(Index, _Component);

    function Index(props) {
        _classCallCheck(this, Index);

        var _this = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

        var components = (0, _Storage.readData)("ui-editor");
        var componentNames = components.map(function (component) {
            return component.name;
        });
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
            showEditor: false
        };
        _this.updateConfig = _Reducer.updateConfig.bind(_this);
        _this.updateEvent = _Reducer.updateEvent.bind(_this);
        _this.saveElement = _Reducer.saveElement.bind(_this);
        _this.updateSelectedComponent = _Reducer.updateSelectedComponent.bind(_this);
        return _this;
    }

    _createClass(Index, [{
        key: "updatePreview",
        value: function updatePreview(element) {
            this.setState({
                previewComponent: element
            });
        }
    }, {
        key: "updateStyles",
        value: function updateStyles() {
            this.setState({
                element: this.state.selectedComponent
            });
        }
    }, {
        key: "updateFolders",
        value: function updateFolders(folders) {
            this.setState({
                folders: folders
            });
            (0, _Storage.writeData)("folders", folders);
        }
    }, {
        key: "openEditor",
        value: function openEditor() {
            this.setState({
                showEditor: true
            });
        }
    }, {
        key: "render",
        value: function render() {
            var selectedComponent = this.state.selectedComponent || this.state.component;
            try {
                return _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(
                        _DraggableComponent2.default,
                        null,
                        _react2.default.createElement(_Components2.default, {
                            key: Math.ceil(Math.random() * 1000),
                            components: this.state.components,
                            folders: this.state.folders,
                            selectedComponent: this.state.selectedComponent,
                            title: "Components",

                            onOpenEditor: this.openEditor.bind(this),
                            onSelection: this.updateSelectedComponent,
                            onFoldersUpdate: this.updateFolders.bind(this)
                        })
                    ),
                    _react2.default.createElement(
                        _DraggableComponent2.default,
                        null,
                        _react2.default.createElement(_Assets2.default, {
                            title: "Assets"
                        })
                    ),
                    _react2.default.createElement(
                        _DraggableComponent2.default,
                        null,
                        _react2.default.createElement(_Events2.default, {
                            key: Math.ceil(Math.random() * 1000),
                            component: selectedComponent,
                            selectedTag: this.state.selectedTag,
                            components: this.state.components,
                            onEventsUpdate: this.updateEvent,
                            onConfigUpdate: this.updateConfig,
                            title: "Events"
                        })
                    ),
                    this.state.showEditor ? _react2.default.createElement(
                        _DraggableComponent2.default,
                        null,
                        _react2.default.createElement(_Editor2.default, {
                            key: Math.ceil(Math.random() * 1000),
                            element: selectedComponent,
                            name: selectedComponent.name,
                            markup: selectedComponent.markup,
                            style: selectedComponent.style,
                            state: selectedComponent.state,
                            title: "Editor",
                            onSave: this.saveElement
                        })
                    ) : null,
                    _react2.default.createElement(
                        _DraggableComponent2.default,
                        null,
                        _react2.default.createElement(_Preview2.default, {
                            key: Math.ceil(Math.random() * 1000),
                            component: selectedComponent,
                            title: "Preview"
                        })
                    ),
                    _react2.default.createElement(
                        _DraggableComponent2.default,
                        null,
                        _react2.default.createElement(_History2.default, {
                            title: "History"
                        })
                    )
                );
            } catch (e) {
                console.log(e);
                return _react2.default.createElement(
                    _DraggableComponent2.default,
                    null,
                    _react2.default.createElement(_History2.default, {
                        name: "History"
                    })
                );
            }
        }
    }]);

    return Index;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(Index, null), document.getElementById("index"));

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var k=__webpack_require__(5),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.concurrent_mode"):60111,y=n?Symbol.for("react.forward_ref"):60112,z=n?Symbol.for("react.suspense"):60113,aa=n?Symbol.for("react.memo"):
60115,ba=n?Symbol.for("react.lazy"):60116,A="function"===typeof Symbol&&Symbol.iterator;function ca(a,b,d,c,e,g,h,f){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[d,c,e,g,h,f],m=0;a=Error(b.replace(/%s/g,function(){return l[m++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function B(a){for(var b=arguments.length-1,d="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)d+="&args[]="+encodeURIComponent(arguments[c+1]);ca(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",d)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D={};
function E(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C}E.prototype.isReactComponent={};E.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?B("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C}var H=G.prototype=new F;
H.constructor=G;k(H,E.prototype);H.isPureReactComponent=!0;var I={current:null},J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,d){var c=void 0,e={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=b[c]);var f=arguments.length-2;if(1===f)e.children=d;else if(1<f){for(var l=Array(f),m=0;m<f;m++)l[m]=arguments[m+2];e.children=l}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===e[c]&&(e[c]=f[c]);return{$$typeof:p,type:a,key:g,ref:h,props:e,_owner:J.current}}
function da(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,d,c){if(P.length){var e=P.pop();e.result=a;e.keyPrefix=b;e.func=d;e.context=c;e.count=0;return e}return{result:a,keyPrefix:b,func:d,context:c,count:0}}
function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}
function S(a,b,d,c){var e=typeof a;if("undefined"===e||"boolean"===e)a=null;var g=!1;if(null===a)g=!0;else switch(e){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return d(c,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){e=a[h];var f=b+T(e,h);g+=S(e,f,d,c)}else if(null===a||"object"!==typeof a?f=null:(f=A&&a[A]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),h=
0;!(e=a.next()).done;)e=e.value,f=b+T(e,h++),g+=S(e,f,d,c);else"object"===e&&(d=""+a,B("31","[object Object]"===d?"object with keys {"+Object.keys(a).join(", ")+"}":d,""));return g}function U(a,b,d){return null==a?0:S(a,"",b,d)}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function ea(a,b){a.func.call(a.context,b,a.count++)}
function fa(a,b,d){var c=a.result,e=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?V(a,c,d,function(a){return a}):null!=a&&(N(a)&&(a=da(a,e+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+d)),c.push(a))}function V(a,b,d,c,e){var g="";null!=d&&(g=(""+d).replace(O,"$&/")+"/");b=Q(b,g,c,e);U(a,fa,b);R(b)}function W(){var a=I.current;null===a?B("321"):void 0;return a}
var X={Children:{map:function(a,b,d){if(null==a)return a;var c=[];V(a,c,null,b,d);return c},forEach:function(a,b,d){if(null==a)return a;b=Q(null,null,b,d);U(a,ea,b);R(b)},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];V(a,b,null,function(a){return a});return b},only:function(a){N(a)?void 0:B("143");return a}},createRef:function(){return{current:null}},Component:E,PureComponent:G,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:y,render:a}},lazy:function(a){return{$$typeof:ba,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return{$$typeof:aa,type:a,compare:void 0===b?null:b}},useCallback:function(a,b){return W().useCallback(a,b)},useContext:function(a,b){return W().useContext(a,b)},useEffect:function(a,b){return W().useEffect(a,b)},useImperativeHandle:function(a,
b,d){return W().useImperativeHandle(a,b,d)},useDebugValue:function(){},useLayoutEffect:function(a,b){return W().useLayoutEffect(a,b)},useMemo:function(a,b){return W().useMemo(a,b)},useReducer:function(a,b,d){return W().useReducer(a,b,d)},useRef:function(a){return W().useRef(a)},useState:function(a){return W().useState(a)},Fragment:r,StrictMode:t,Suspense:z,createElement:M,cloneElement:function(a,b,d){null===a||void 0===a?B("267",a):void 0;var c=void 0,e=k({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=
b){void 0!==b.ref&&(h=b.ref,f=J.current);void 0!==b.key&&(g=""+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=void 0===b[c]&&void 0!==l?l[c]:b[c])}c=arguments.length-2;if(1===c)e.children=d;else if(1<c){l=Array(c);for(var m=0;m<c;m++)l[m]=arguments[m+2];e.children=l}return{$$typeof:p,type:a.type,key:g,ref:h,props:e,_owner:f}},createFactory:function(a){var b=M.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.8.6",
unstable_ConcurrentMode:x,unstable_Profiler:u,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:I,ReactCurrentOwner:J,assign:k}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default||Z;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(12);
} else {}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(0),n=__webpack_require__(5),r=__webpack_require__(13);function ba(a,b,c,d,e,f,g,h){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[c,d,e,f,g,h],k=0;a=Error(b.replace(/%s/g,function(){return l[k++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
function x(a){for(var b=arguments.length-1,c="https://reactjs.org/docs/error-decoder.html?invariant="+a,d=0;d<b;d++)c+="&args[]="+encodeURIComponent(arguments[d+1]);ba(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",c)}aa?void 0:x("227");function ca(a,b,c,d,e,f,g,h,l){var k=Array.prototype.slice.call(arguments,3);try{b.apply(c,k)}catch(m){this.onError(m)}}
var da=!1,ea=null,fa=!1,ha=null,ia={onError:function(a){da=!0;ea=a}};function ja(a,b,c,d,e,f,g,h,l){da=!1;ea=null;ca.apply(ia,arguments)}function ka(a,b,c,d,e,f,g,h,l){ja.apply(this,arguments);if(da){if(da){var k=ea;da=!1;ea=null}else x("198"),k=void 0;fa||(fa=!0,ha=k)}}var la=null,ma={};
function na(){if(la)for(var a in ma){var b=ma[a],c=la.indexOf(a);-1<c?void 0:x("96",a);if(!oa[c]){b.extractEvents?void 0:x("97",a);oa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;pa.hasOwnProperty(h)?x("99",h):void 0;pa[h]=f;var l=f.phasedRegistrationNames;if(l){for(e in l)l.hasOwnProperty(e)&&qa(l[e],g,h);e=!0}else f.registrationName?(qa(f.registrationName,g,h),e=!0):e=!1;e?void 0:x("98",d,a)}}}}
function qa(a,b,c){ra[a]?x("100",a):void 0;ra[a]=b;sa[a]=b.eventTypes[c].dependencies}var oa=[],pa={},ra={},sa={},ta=null,ua=null,va=null;function wa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=va(c);ka(d,b,void 0,a);a.currentTarget=null}function xa(a,b){null==b?x("30"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}
function ya(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var za=null;function Aa(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)wa(a,b[d],c[d]);else b&&wa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}
var Ba={injectEventPluginOrder:function(a){la?x("101"):void 0;la=Array.prototype.slice.call(a);na()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];ma.hasOwnProperty(c)&&ma[c]===d||(ma[c]?x("102",c):void 0,ma[c]=d,b=!0)}b&&na()}};
function Ca(a,b){var c=a.stateNode;if(!c)return null;var d=ta(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;c&&"function"!==typeof c?x("231",b,typeof c):void 0;
return c}function Da(a){null!==a&&(za=xa(za,a));a=za;za=null;if(a&&(ya(a,Aa),za?x("95"):void 0,fa))throw a=ha,fa=!1,ha=null,a;}var Ea=Math.random().toString(36).slice(2),Fa="__reactInternalInstance$"+Ea,Ga="__reactEventHandlers$"+Ea;function Ha(a){if(a[Fa])return a[Fa];for(;!a[Fa];)if(a.parentNode)a=a.parentNode;else return null;a=a[Fa];return 5===a.tag||6===a.tag?a:null}function Ia(a){a=a[Fa];return!a||5!==a.tag&&6!==a.tag?null:a}
function Ja(a){if(5===a.tag||6===a.tag)return a.stateNode;x("33")}function Ka(a){return a[Ga]||null}function La(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function Ma(a,b,c){if(b=Ca(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a)}
function Na(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=La(b);for(b=c.length;0<b--;)Ma(c[b],"captured",a);for(b=0;b<c.length;b++)Ma(c[b],"bubbled",a)}}function Oa(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Ca(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a))}function Pa(a){a&&a.dispatchConfig.registrationName&&Oa(a._targetInst,null,a)}
function Qa(a){ya(a,Na)}var Ra=!("undefined"===typeof window||!window.document||!window.document.createElement);function Sa(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ta={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},Ua={},Va={};
Ra&&(Va=document.createElement("div").style,"AnimationEvent"in window||(delete Ta.animationend.animation,delete Ta.animationiteration.animation,delete Ta.animationstart.animation),"TransitionEvent"in window||delete Ta.transitionend.transition);function Wa(a){if(Ua[a])return Ua[a];if(!Ta[a])return a;var b=Ta[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Va)return Ua[a]=b[c];return a}
var Xa=Wa("animationend"),Ya=Wa("animationiteration"),Za=Wa("animationstart"),$a=Wa("transitionend"),ab="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bb=null,cb=null,db=null;
function eb(){if(db)return db;var a,b=cb,c=b.length,d,e="value"in bb?bb.value:bb.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return db=e.slice(a,1<d?1-d:void 0)}function fb(){return!0}function gb(){return!1}
function y(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?fb:gb;this.isPropagationStopped=gb;return this}
n(y.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=fb)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=fb)},persist:function(){this.isPersistent=fb},isPersistent:gb,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=gb;this._dispatchInstances=this._dispatchListeners=null}});y.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
y.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;hb(c);return c};hb(y);function ib(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function jb(a){a instanceof this?void 0:x("279");a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}
function hb(a){a.eventPool=[];a.getPooled=ib;a.release=jb}var kb=y.extend({data:null}),lb=y.extend({data:null}),mb=[9,13,27,32],nb=Ra&&"CompositionEvent"in window,ob=null;Ra&&"documentMode"in document&&(ob=document.documentMode);
var pb=Ra&&"TextEvent"in window&&!ob,qb=Ra&&(!nb||ob&&8<ob&&11>=ob),rb=String.fromCharCode(32),sb={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},tb=!1;
function ub(a,b){switch(a){case "keyup":return-1!==mb.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function vb(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var wb=!1;function xb(a,b){switch(a){case "compositionend":return vb(b);case "keypress":if(32!==b.which)return null;tb=!0;return rb;case "textInput":return a=b.data,a===rb&&tb?null:a;default:return null}}
function yb(a,b){if(wb)return"compositionend"===a||!nb&&ub(a,b)?(a=eb(),db=cb=bb=null,wb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return qb&&"ko"!==b.locale?null:b.data;default:return null}}
var zb={eventTypes:sb,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(nb)b:{switch(a){case "compositionstart":e=sb.compositionStart;break b;case "compositionend":e=sb.compositionEnd;break b;case "compositionupdate":e=sb.compositionUpdate;break b}e=void 0}else wb?ub(a,c)&&(e=sb.compositionEnd):"keydown"===a&&229===c.keyCode&&(e=sb.compositionStart);e?(qb&&"ko"!==c.locale&&(wb||e!==sb.compositionStart?e===sb.compositionEnd&&wb&&(f=eb()):(bb=d,cb="value"in bb?bb.value:bb.textContent,wb=
!0)),e=kb.getPooled(e,b,c,d),f?e.data=f:(f=vb(c),null!==f&&(e.data=f)),Qa(e),f=e):f=null;(a=pb?xb(a,c):yb(a,c))?(b=lb.getPooled(sb.beforeInput,b,c,d),b.data=a,Qa(b)):b=null;return null===f?b:null===b?f:[f,b]}},Ab=null,Bb=null,Cb=null;function Db(a){if(a=ua(a)){"function"!==typeof Ab?x("280"):void 0;var b=ta(a.stateNode);Ab(a.stateNode,a.type,b)}}function Eb(a){Bb?Cb?Cb.push(a):Cb=[a]:Bb=a}function Fb(){if(Bb){var a=Bb,b=Cb;Cb=Bb=null;Db(a);if(b)for(a=0;a<b.length;a++)Db(b[a])}}
function Gb(a,b){return a(b)}function Hb(a,b,c){return a(b,c)}function Ib(){}var Jb=!1;function Kb(a,b){if(Jb)return a(b);Jb=!0;try{return Gb(a,b)}finally{if(Jb=!1,null!==Bb||null!==Cb)Ib(),Fb()}}var Lb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mb(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Lb[a.type]:"textarea"===b?!0:!1}
function Nb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function Ob(a){if(!Ra)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function Pb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Qb(a){var b=Pb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Rb(a){a._valueTracker||(a._valueTracker=Qb(a))}function Sb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Pb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}var Tb=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Tb.hasOwnProperty("ReactCurrentDispatcher")||(Tb.ReactCurrentDispatcher={current:null});
var Ub=/^(.*)[\\\/]/,z="function"===typeof Symbol&&Symbol.for,Vb=z?Symbol.for("react.element"):60103,Wb=z?Symbol.for("react.portal"):60106,Xb=z?Symbol.for("react.fragment"):60107,Yb=z?Symbol.for("react.strict_mode"):60108,Zb=z?Symbol.for("react.profiler"):60114,$b=z?Symbol.for("react.provider"):60109,ac=z?Symbol.for("react.context"):60110,bc=z?Symbol.for("react.concurrent_mode"):60111,cc=z?Symbol.for("react.forward_ref"):60112,dc=z?Symbol.for("react.suspense"):60113,ec=z?Symbol.for("react.memo"):
60115,fc=z?Symbol.for("react.lazy"):60116,gc="function"===typeof Symbol&&Symbol.iterator;function hc(a){if(null===a||"object"!==typeof a)return null;a=gc&&a[gc]||a["@@iterator"];return"function"===typeof a?a:null}
function ic(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case bc:return"ConcurrentMode";case Xb:return"Fragment";case Wb:return"Portal";case Zb:return"Profiler";case Yb:return"StrictMode";case dc:return"Suspense"}if("object"===typeof a)switch(a.$$typeof){case ac:return"Context.Consumer";case $b:return"Context.Provider";case cc:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+
")":"ForwardRef");case ec:return ic(a.type);case fc:if(a=1===a._status?a._result:null)return ic(a)}return null}function jc(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=ic(a.type);c=null;d&&(c=ic(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Ub,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}
var kc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lc=Object.prototype.hasOwnProperty,mc={},nc={};
function oc(a){if(lc.call(nc,a))return!0;if(lc.call(mc,a))return!1;if(kc.test(a))return nc[a]=!0;mc[a]=!0;return!1}function pc(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function qc(a,b,c,d){if(null===b||"undefined"===typeof b||pc(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function C(a,b,c,d,e){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b}var D={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new C(a,0,!1,a,null)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new C(b,1,!1,a[1],null)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new C(a,2,!1,a.toLowerCase(),null)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new C(a,2,!1,a,null)});"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new C(a,3,!1,a.toLowerCase(),null)});["checked","multiple","muted","selected"].forEach(function(a){D[a]=new C(a,3,!0,a,null)});
["capture","download"].forEach(function(a){D[a]=new C(a,4,!1,a,null)});["cols","rows","size","span"].forEach(function(a){D[a]=new C(a,6,!1,a,null)});["rowSpan","start"].forEach(function(a){D[a]=new C(a,5,!1,a.toLowerCase(),null)});var rc=/[\-:]([a-z])/g;function sc(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(rc,
sc);D[b]=new C(b,1,!1,a,null)});"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(rc,sc);D[b]=new C(b,1,!1,a,"http://www.w3.org/1999/xlink")});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(rc,sc);D[b]=new C(b,1,!1,a,"http://www.w3.org/XML/1998/namespace")});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new C(a,1,!1,a.toLowerCase(),null)});
function tc(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(qc(b,c,e,d)&&(c=null),d||null===e?oc(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
function uc(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function vc(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function wc(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=uc(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function xc(a,b){b=b.checked;null!=b&&tc(a,"checked",b,!1)}
function yc(a,b){xc(a,b);var c=uc(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?zc(a,b.type,c):b.hasOwnProperty("defaultValue")&&zc(a,b.type,uc(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Ac(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function zc(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}var Bc={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function Cc(a,b,c){a=y.getPooled(Bc.change,a,b,c);a.type="change";Eb(c);Qa(a);return a}var Dc=null,Ec=null;function Fc(a){Da(a)}
function Gc(a){var b=Ja(a);if(Sb(b))return a}function Hc(a,b){if("change"===a)return b}var Ic=!1;Ra&&(Ic=Ob("input")&&(!document.documentMode||9<document.documentMode));function Jc(){Dc&&(Dc.detachEvent("onpropertychange",Kc),Ec=Dc=null)}function Kc(a){"value"===a.propertyName&&Gc(Ec)&&(a=Cc(Ec,a,Nb(a)),Kb(Fc,a))}function Lc(a,b,c){"focus"===a?(Jc(),Dc=b,Ec=c,Dc.attachEvent("onpropertychange",Kc)):"blur"===a&&Jc()}function Mc(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return Gc(Ec)}
function Nc(a,b){if("click"===a)return Gc(b)}function Oc(a,b){if("input"===a||"change"===a)return Gc(b)}
var Pc={eventTypes:Bc,_isInputEventSupported:Ic,extractEvents:function(a,b,c,d){var e=b?Ja(b):window,f=void 0,g=void 0,h=e.nodeName&&e.nodeName.toLowerCase();"select"===h||"input"===h&&"file"===e.type?f=Hc:Mb(e)?Ic?f=Oc:(f=Mc,g=Lc):(h=e.nodeName)&&"input"===h.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(f=Nc);if(f&&(f=f(a,b)))return Cc(f,c,d);g&&g(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&zc(e,"number",e.value)}},Qc=y.extend({view:null,detail:null}),Rc={Alt:"altKey",
Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sc(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Rc[a])?!!b[a]:!1}function Tc(){return Sc}
var Uc=0,Vc=0,Wc=!1,Xc=!1,Yc=Qc.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Tc,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Uc;Uc=a.screenX;return Wc?"mousemove"===a.type?a.screenX-b:0:(Wc=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=Vc;Vc=a.screenY;return Xc?"mousemove"===a.type?a.screenY-b:0:(Xc=!0,0)}}),Zc=Yc.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),$c={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},ad={eventTypes:$c,extractEvents:function(a,b,c,d){var e="mouseover"===a||"pointerover"===a,f="mouseout"===a||"pointerout"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?Ha(b):null):f=null;if(f===b)return null;var g=void 0,h=void 0,l=void 0,k=void 0;if("mouseout"===a||"mouseover"===a)g=Yc,h=$c.mouseLeave,l=$c.mouseEnter,k="mouse";
else if("pointerout"===a||"pointerover"===a)g=Zc,h=$c.pointerLeave,l=$c.pointerEnter,k="pointer";var m=null==f?e:Ja(f);e=null==b?e:Ja(b);a=g.getPooled(h,f,c,d);a.type=k+"leave";a.target=m;a.relatedTarget=e;c=g.getPooled(l,b,c,d);c.type=k+"enter";c.target=e;c.relatedTarget=m;d=b;if(f&&d)a:{b=f;e=d;k=0;for(g=b;g;g=La(g))k++;g=0;for(l=e;l;l=La(l))g++;for(;0<k-g;)b=La(b),k--;for(;0<g-k;)e=La(e),g--;for(;k--;){if(b===e||b===e.alternate)break a;b=La(b);e=La(e)}b=null}else b=null;e=b;for(b=[];f&&f!==e;){k=
f.alternate;if(null!==k&&k===e)break;b.push(f);f=La(f)}for(f=[];d&&d!==e;){k=d.alternate;if(null!==k&&k===e)break;f.push(d);d=La(d)}for(d=0;d<b.length;d++)Oa(b[d],"bubbled",a);for(d=f.length;0<d--;)Oa(f[d],"captured",c);return[a,c]}};function bd(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var cd=Object.prototype.hasOwnProperty;
function dd(a,b){if(bd(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!cd.call(b,c[d])||!bd(a[c[d]],b[c[d]]))return!1;return!0}function ed(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function fd(a){2!==ed(a)?x("188"):void 0}
function gd(a){var b=a.alternate;if(!b)return b=ed(a),3===b?x("188"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c.return,f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===c)return fd(e),a;if(g===d)return fd(e),b;g=g.sibling}x("188")}if(c.return!==d.return)c=e,d=f;else{g=!1;for(var h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}g?
void 0:x("189")}}c.alternate!==d?x("190"):void 0}3!==c.tag?x("188"):void 0;return c.stateNode.current===c?a:b}function hd(a){a=gd(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
var id=y.extend({animationName:null,elapsedTime:null,pseudoElement:null}),jd=y.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),kd=Qc.extend({relatedTarget:null});function ld(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var md={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},od=Qc.extend({key:function(a){if(a.key){var b=md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=ld(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?nd[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Tc,charCode:function(a){return"keypress"===
a.type?ld(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?ld(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),pd=Yc.extend({dataTransfer:null}),qd=Qc.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Tc}),rd=y.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),sd=Yc.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),td=[["abort","abort"],[Xa,"animationEnd"],[Ya,"animationIteration"],[Za,"animationStart"],["canplay","canPlay"],["canplaythrough","canPlayThrough"],["drag","drag"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],
["ended","ended"],["error","error"],["gotpointercapture","gotPointerCapture"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["loadstart","loadStart"],["lostpointercapture","lostPointerCapture"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["playing","playing"],["pointermove","pointerMove"],["pointerout","pointerOut"],["pointerover","pointerOver"],["progress","progress"],["scroll","scroll"],["seeking","seeking"],["stalled","stalled"],
["suspend","suspend"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchmove","touchMove"],[$a,"transitionEnd"],["waiting","waiting"],["wheel","wheel"]],ud={},vd={};function wd(a,b){var c=a[0];a=a[1];var d="on"+(a[0].toUpperCase()+a.slice(1));b={phasedRegistrationNames:{bubbled:d,captured:d+"Capture"},dependencies:[c],isInteractive:b};ud[a]=b;vd[c]=b}
[["blur","blur"],["cancel","cancel"],["click","click"],["close","close"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["auxclick","auxClick"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragstart","dragStart"],["drop","drop"],["focus","focus"],["input","input"],["invalid","invalid"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["mousedown","mouseDown"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["pointercancel","pointerCancel"],
["pointerdown","pointerDown"],["pointerup","pointerUp"],["ratechange","rateChange"],["reset","reset"],["seeked","seeked"],["submit","submit"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchstart","touchStart"],["volumechange","volumeChange"]].forEach(function(a){wd(a,!0)});td.forEach(function(a){wd(a,!1)});
var xd={eventTypes:ud,isInteractiveTopLevelEventType:function(a){a=vd[a];return void 0!==a&&!0===a.isInteractive},extractEvents:function(a,b,c,d){var e=vd[a];if(!e)return null;switch(a){case "keypress":if(0===ld(c))return null;case "keydown":case "keyup":a=od;break;case "blur":case "focus":a=kd;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=Yc;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
pd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=qd;break;case Xa:case Ya:case Za:a=id;break;case $a:a=rd;break;case "scroll":a=Qc;break;case "wheel":a=sd;break;case "copy":case "cut":case "paste":a=jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=Zc;break;default:a=y}b=a.getPooled(e,b,c,d);Qa(b);return b}},yd=xd.isInteractiveTopLevelEventType,
zd=[];function Ad(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d;for(d=c;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo;if(!d)break;a.ancestors.push(c);c=Ha(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=Nb(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,g=null,h=0;h<oa.length;h++){var l=oa[h];l&&(l=l.extractEvents(d,b,f,e))&&(g=xa(g,l))}Da(g)}}var Bd=!0;
function E(a,b){if(!b)return null;var c=(yd(a)?Cd:Dd).bind(null,a);b.addEventListener(a,c,!1)}function Ed(a,b){if(!b)return null;var c=(yd(a)?Cd:Dd).bind(null,a);b.addEventListener(a,c,!0)}function Cd(a,b){Hb(Dd,a,b)}
function Dd(a,b){if(Bd){var c=Nb(b);c=Ha(c);null===c||"number"!==typeof c.tag||2===ed(c)||(c=null);if(zd.length){var d=zd.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{Kb(Ad,a)}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>zd.length&&zd.push(a)}}}var Fd={},Gd=0,Hd="_reactListenersID"+(""+Math.random()).slice(2);
function Id(a){Object.prototype.hasOwnProperty.call(a,Hd)||(a[Hd]=Gd++,Fd[a[Hd]]={});return Fd[a[Hd]]}function Jd(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function Kd(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Ld(a,b){var c=Kd(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Kd(c)}}function Md(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Md(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Nd(){for(var a=window,b=Jd();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Jd(a.document)}return b}function Od(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
function Pd(){var a=Nd();if(Od(a)){if("selectionStart"in a)var b={start:a.selectionStart,end:a.selectionEnd};else a:{b=(b=a.ownerDocument)&&b.defaultView||window;var c=b.getSelection&&b.getSelection();if(c&&0!==c.rangeCount){b=c.anchorNode;var d=c.anchorOffset,e=c.focusNode;c=c.focusOffset;try{b.nodeType,e.nodeType}catch(A){b=null;break a}var f=0,g=-1,h=-1,l=0,k=0,m=a,p=null;b:for(;;){for(var t;;){m!==b||0!==d&&3!==m.nodeType||(g=f+d);m!==e||0!==c&&3!==m.nodeType||(h=f+c);3===m.nodeType&&(f+=m.nodeValue.length);
if(null===(t=m.firstChild))break;p=m;m=t}for(;;){if(m===a)break b;p===b&&++l===d&&(g=f);p===e&&++k===c&&(h=f);if(null!==(t=m.nextSibling))break;m=p;p=m.parentNode}m=t}b=-1===g||-1===h?null:{start:g,end:h}}else b=null}b=b||{start:0,end:0}}else b=null;return{focusedElem:a,selectionRange:b}}
function Qd(a){var b=Nd(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Md(c.ownerDocument.documentElement,c)){if(null!==d&&Od(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ld(c,f);var g=Ld(c,
d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)))}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}
var Rd=Ra&&"documentMode"in document&&11>=document.documentMode,Sd={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Td=null,Ud=null,Vd=null,Wd=!1;
function Xd(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(Wd||null==Td||Td!==Jd(c))return null;c=Td;"selectionStart"in c&&Od(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return Vd&&dd(Vd,c)?null:(Vd=c,a=y.getPooled(Sd.select,Ud,a,b),a.type="select",a.target=Td,Qa(a),a)}
var Yd={eventTypes:Sd,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=Id(e);f=sa.onSelect;for(var g=0;g<f.length;g++){var h=f[g];if(!e.hasOwnProperty(h)||!e[h]){e=!1;break a}}e=!0}f=!e}if(f)return null;e=b?Ja(b):window;switch(a){case "focus":if(Mb(e)||"true"===e.contentEditable)Td=e,Ud=b,Vd=null;break;case "blur":Vd=Ud=Td=null;break;case "mousedown":Wd=!0;break;case "contextmenu":case "mouseup":case "dragend":return Wd=!1,Xd(c,d);case "selectionchange":if(Rd)break;
case "keydown":case "keyup":return Xd(c,d)}return null}};Ba.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));ta=Ka;ua=Ia;va=Ja;Ba.injectEventPluginsByName({SimpleEventPlugin:xd,EnterLeaveEventPlugin:ad,ChangeEventPlugin:Pc,SelectEventPlugin:Yd,BeforeInputEventPlugin:zb});function Zd(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}
function $d(a,b){a=n({children:void 0},b);if(b=Zd(b.children))a.children=b;return a}function ae(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+uc(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function be(a,b){null!=b.dangerouslySetInnerHTML?x("91"):void 0;return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function ce(a,b){var c=b.value;null==c&&(c=b.defaultValue,b=b.children,null!=b&&(null!=c?x("92"):void 0,Array.isArray(b)&&(1>=b.length?void 0:x("93"),b=b[0]),c=b),null==c&&(c=""));a._wrapperState={initialValue:uc(c)}}
function de(a,b){var c=uc(b.value),d=uc(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function ee(a){var b=a.textContent;b===a._wrapperState.initialValue&&(a.value=b)}var fe={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function ge(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function he(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?ge(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var ie=void 0,je=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==fe.svg||"innerHTML"in a)a.innerHTML=b;else{ie=ie||document.createElement("div");ie.innerHTML="<svg>"+b+"</svg>";for(b=ie.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function ke(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var le={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},me=["Webkit","ms","Moz","O"];Object.keys(le).forEach(function(a){me.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);le[b]=le[a]})});function ne(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||le.hasOwnProperty(a)&&le[a]?(""+b).trim():b+"px"}
function oe(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=ne(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var pe=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function qe(a,b){b&&(pe[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?x("137",a,""):void 0),null!=b.dangerouslySetInnerHTML&&(null!=b.children?x("60"):void 0,"object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML?void 0:x("61")),null!=b.style&&"object"!==typeof b.style?x("62",""):void 0)}
function re(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}
function se(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Id(a);b=sa[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.hasOwnProperty(e)||!c[e]){switch(e){case "scroll":Ed("scroll",a);break;case "focus":case "blur":Ed("focus",a);Ed("blur",a);c.blur=!0;c.focus=!0;break;case "cancel":case "close":Ob(e)&&Ed(e,a);break;case "invalid":case "submit":case "reset":break;default:-1===ab.indexOf(e)&&E(e,a)}c[e]=!0}}}function te(){}var ue=null,ve=null;
function we(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}function xe(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
var ye="function"===typeof setTimeout?setTimeout:void 0,ze="function"===typeof clearTimeout?clearTimeout:void 0,Ae=r.unstable_scheduleCallback,Be=r.unstable_cancelCallback;
function Ce(a,b,c,d,e){a[Ga]=e;"input"===c&&"radio"===e.type&&null!=e.name&&xc(a,e);re(c,d);d=re(c,e);for(var f=0;f<b.length;f+=2){var g=b[f],h=b[f+1];"style"===g?oe(a,h):"dangerouslySetInnerHTML"===g?je(a,h):"children"===g?ke(a,h):tc(a,g,h,d)}switch(c){case "input":yc(a,e);break;case "textarea":de(a,e);break;case "select":b=a._wrapperState.wasMultiple,a._wrapperState.wasMultiple=!!e.multiple,c=e.value,null!=c?ae(a,!!e.multiple,c,!1):b!==!!e.multiple&&(null!=e.defaultValue?ae(a,!!e.multiple,e.defaultValue,
!0):ae(a,!!e.multiple,e.multiple?[]:"",!1))}}function De(a){for(a=a.nextSibling;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}function Ee(a){for(a=a.firstChild;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}new Set;var Fe=[],Ge=-1;function F(a){0>Ge||(a.current=Fe[Ge],Fe[Ge]=null,Ge--)}function G(a,b){Ge++;Fe[Ge]=a.current;a.current=b}var He={},H={current:He},I={current:!1},Ie=He;
function Je(a,b){var c=a.type.contextTypes;if(!c)return He;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function J(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Ke(a){F(I,a);F(H,a)}function Le(a){F(I,a);F(H,a)}
function Me(a,b,c){H.current!==He?x("168"):void 0;G(H,b,a);G(I,c,a)}function Ne(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)e in a?void 0:x("108",ic(b)||"Unknown",e);return n({},c,d)}function Oe(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||He;Ie=H.current;G(H,b,a);G(I,I.current,a);return!0}
function Pe(a,b,c){var d=a.stateNode;d?void 0:x("169");c?(b=Ne(a,b,Ie),d.__reactInternalMemoizedMergedChildContext=b,F(I,a),F(H,a),G(H,b,a)):F(I,a);G(I,c,a)}var Qe=null,Re=null;function Se(a){return function(b){try{return a(b)}catch(c){}}}
function Te(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Qe=Se(function(a){return b.onCommitFiberRoot(c,a)});Re=Se(function(a){return b.onCommitFiberUnmount(c,a)})}catch(d){}return!0}
function Ue(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.contextDependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function K(a,b,c,d){return new Ue(a,b,c,d)}
function Ve(a){a=a.prototype;return!(!a||!a.isReactComponent)}function We(a){if("function"===typeof a)return Ve(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===cc)return 11;if(a===ec)return 14}return 2}
function Xe(a,b){var c=a.alternate;null===c?(c=K(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;c.contextDependencies=a.contextDependencies;c.sibling=a.sibling;
c.index=a.index;c.ref=a.ref;return c}
function Ye(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)Ve(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case Xb:return Ze(c.children,e,f,b);case bc:return $e(c,e|3,f,b);case Yb:return $e(c,e|2,f,b);case Zb:return a=K(12,c,b,e|4),a.elementType=Zb,a.type=Zb,a.expirationTime=f,a;case dc:return a=K(13,c,b,e),a.elementType=dc,a.type=dc,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case $b:g=10;break a;case ac:g=9;break a;case cc:g=11;break a;case ec:g=
14;break a;case fc:g=16;d=null;break a}x("130",null==a?a:typeof a,"")}b=K(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Ze(a,b,c,d){a=K(7,a,d,b);a.expirationTime=c;return a}function $e(a,b,c,d){a=K(8,a,d,b);b=0===(b&1)?Yb:bc;a.elementType=b;a.type=b;a.expirationTime=c;return a}function af(a,b,c){a=K(6,a,null,b);a.expirationTime=c;return a}
function bf(a,b,c){b=K(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}function cf(a,b){a.didError=!1;var c=a.earliestPendingTime;0===c?a.earliestPendingTime=a.latestPendingTime=b:c<b?a.earliestPendingTime=b:a.latestPendingTime>b&&(a.latestPendingTime=b);df(b,a)}
function ef(a,b){a.didError=!1;if(0===b)a.earliestPendingTime=0,a.latestPendingTime=0,a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0;else{b<a.latestPingedTime&&(a.latestPingedTime=0);var c=a.latestPendingTime;0!==c&&(c>b?a.earliestPendingTime=a.latestPendingTime=0:a.earliestPendingTime>b&&(a.earliestPendingTime=a.latestPendingTime));c=a.earliestSuspendedTime;0===c?cf(a,b):b<a.latestSuspendedTime?(a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0,cf(a,b)):
b>c&&cf(a,b)}df(0,a)}function ff(a,b){a.didError=!1;a.latestPingedTime>=b&&(a.latestPingedTime=0);var c=a.earliestPendingTime,d=a.latestPendingTime;c===b?a.earliestPendingTime=d===b?a.latestPendingTime=0:d:d===b&&(a.latestPendingTime=c);c=a.earliestSuspendedTime;d=a.latestSuspendedTime;0===c?a.earliestSuspendedTime=a.latestSuspendedTime=b:c<b?a.earliestSuspendedTime=b:d>b&&(a.latestSuspendedTime=b);df(b,a)}
function gf(a,b){var c=a.earliestPendingTime;a=a.earliestSuspendedTime;c>b&&(b=c);a>b&&(b=a);return b}function df(a,b){var c=b.earliestSuspendedTime,d=b.latestSuspendedTime,e=b.earliestPendingTime,f=b.latestPingedTime;e=0!==e?e:f;0===e&&(0===a||d<a)&&(e=d);a=e;0!==a&&c>a&&(a=c);b.nextExpirationTimeToWorkOn=e;b.expirationTime=a}function L(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}
function hf(a){var b=a._result;switch(a._status){case 1:return b;case 2:throw b;case 0:throw b;default:a._status=0;b=a._ctor;b=b();b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)});switch(a._status){case 1:return a._result;case 2:throw a._result;}a._result=b;throw b;}}var jf=(new aa.Component).refs;
function kf(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}
var tf={isMounted:function(a){return(a=a._reactInternalFiber)?2===ed(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=lf();d=mf(d,a);var e=nf(d);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);of();pf(a,e);qf(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=lf();d=mf(d,a);var e=nf(d);e.tag=rf;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);of();pf(a,e);qf(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=lf();c=mf(c,a);var d=nf(c);d.tag=
sf;void 0!==b&&null!==b&&(d.callback=b);of();pf(a,d);qf(a,c)}};function uf(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!dd(c,d)||!dd(e,f):!0}
function vf(a,b,c){var d=!1,e=He;var f=b.contextType;"object"===typeof f&&null!==f?f=M(f):(e=J(b)?Ie:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Je(a,e):He);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=tf;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function wf(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&tf.enqueueReplaceState(b,b.state,null)}
function xf(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=jf;var f=b.contextType;"object"===typeof f&&null!==f?e.context=M(f):(f=J(b)?Ie:H.current,e.context=Je(a,f));f=a.updateQueue;null!==f&&(yf(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(kf(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==
typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&tf.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(yf(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var zf=Array.isArray;
function Af(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;var d=void 0;c&&(1!==c.tag?x("309"):void 0,d=c.stateNode);d?void 0:x("147",a);var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===jf&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}"string"!==typeof a?x("284"):void 0;c._owner?void 0:x("290",a)}return a}
function Bf(a,b){"textarea"!==a.type&&x("31","[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,"")}
function Cf(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=Xe(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=af(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function l(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props,d),d.ref=Af(a,b,c),d.return=a,d;d=Ye(c.type,c.key,c.props,null,a.mode,d);d.ref=Af(a,b,c);d.return=a;return d}function k(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=bf(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Ze(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function p(a,b,c){if("string"===typeof b||"number"===typeof b)return b=af(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Vb:return c=Ye(b.type,b.key,b.props,null,a.mode,c),c.ref=Af(a,null,b),c.return=a,c;case Wb:return b=bf(b,a.mode,c),b.return=a,b}if(zf(b)||
hc(b))return b=Ze(b,a.mode,c,null),b.return=a,b;Bf(a,b)}return null}function t(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Vb:return c.key===e?c.type===Xb?m(a,b,c.props.children,d,e):l(a,b,c,d):null;case Wb:return c.key===e?k(a,b,c,d):null}if(zf(c)||hc(c))return null!==e?null:m(a,b,c,d,null);Bf(a,c)}return null}function A(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Vb:return a=a.get(null===d.key?c:d.key)||null,d.type===Xb?m(b,a,d.props.children,e,d.key):l(b,a,d,e);case Wb:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e)}if(zf(d)||hc(d))return a=a.get(c)||null,m(b,a,d,e,null);Bf(b,d)}return null}function v(e,g,h,k){for(var l=null,m=null,q=g,u=g=0,B=null;null!==q&&u<h.length;u++){q.index>u?(B=q,q=null):B=q.sibling;var w=t(e,q,h[u],k);if(null===w){null===q&&(q=B);break}a&&
q&&null===w.alternate&&b(e,q);g=f(w,g,u);null===m?l=w:m.sibling=w;m=w;q=B}if(u===h.length)return c(e,q),l;if(null===q){for(;u<h.length;u++)if(q=p(e,h[u],k))g=f(q,g,u),null===m?l=q:m.sibling=q,m=q;return l}for(q=d(e,q);u<h.length;u++)if(B=A(q,e,u,h[u],k))a&&null!==B.alternate&&q.delete(null===B.key?u:B.key),g=f(B,g,u),null===m?l=B:m.sibling=B,m=B;a&&q.forEach(function(a){return b(e,a)});return l}function R(e,g,h,k){var l=hc(h);"function"!==typeof l?x("150"):void 0;h=l.call(h);null==h?x("151"):void 0;
for(var m=l=null,q=g,u=g=0,B=null,w=h.next();null!==q&&!w.done;u++,w=h.next()){q.index>u?(B=q,q=null):B=q.sibling;var v=t(e,q,w.value,k);if(null===v){q||(q=B);break}a&&q&&null===v.alternate&&b(e,q);g=f(v,g,u);null===m?l=v:m.sibling=v;m=v;q=B}if(w.done)return c(e,q),l;if(null===q){for(;!w.done;u++,w=h.next())w=p(e,w.value,k),null!==w&&(g=f(w,g,u),null===m?l=w:m.sibling=w,m=w);return l}for(q=d(e,q);!w.done;u++,w=h.next())w=A(q,e,u,w.value,k),null!==w&&(a&&null!==w.alternate&&q.delete(null===w.key?u:
w.key),g=f(w,g,u),null===m?l=w:m.sibling=w,m=w);a&&q.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===Xb&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Vb:a:{l=f.key;for(k=d;null!==k;){if(k.key===l)if(7===k.tag?f.type===Xb:k.elementType===f.type){c(a,k.sibling);d=e(k,f.type===Xb?f.props.children:f.props,h);d.ref=Af(a,k,f);d.return=a;a=d;break a}else{c(a,k);break}else b(a,k);k=
k.sibling}f.type===Xb?(d=Ze(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Ye(f.type,f.key,f.props,null,a.mode,h),h.ref=Af(a,d,f),h.return=a,a=h)}return g(a);case Wb:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=bf(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=
""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=a,a=d):(c(a,d),d=af(f,a.mode,h),d.return=a,a=d),g(a);if(zf(f))return v(a,d,f,h);if(hc(f))return R(a,d,f,h);l&&Bf(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:h=a.type,x("152",h.displayName||h.name||"Component")}return c(a,d)}}var Df=Cf(!0),Ef=Cf(!1),Ff={},N={current:Ff},Gf={current:Ff},Hf={current:Ff};function If(a){a===Ff?x("174"):void 0;return a}
function Jf(a,b){G(Hf,b,a);G(Gf,a,a);G(N,Ff,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:he(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=he(b,c)}F(N,a);G(N,b,a)}function Kf(a){F(N,a);F(Gf,a);F(Hf,a)}function Lf(a){If(Hf.current);var b=If(N.current);var c=he(b,a.type);b!==c&&(G(Gf,a,a),G(N,c,a))}function Mf(a){Gf.current===a&&(F(N,a),F(Gf,a))}
var Nf=0,Of=2,Pf=4,Qf=8,Rf=16,Sf=32,Tf=64,Uf=128,Vf=Tb.ReactCurrentDispatcher,Wf=0,Xf=null,O=null,P=null,Yf=null,Q=null,Zf=null,$f=0,ag=null,bg=0,cg=!1,dg=null,eg=0;function fg(){x("321")}function gg(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!bd(a[c],b[c]))return!1;return!0}
function hg(a,b,c,d,e,f){Wf=f;Xf=b;P=null!==a?a.memoizedState:null;Vf.current=null===P?ig:jg;b=c(d,e);if(cg){do cg=!1,eg+=1,P=null!==a?a.memoizedState:null,Zf=Yf,ag=Q=O=null,Vf.current=jg,b=c(d,e);while(cg);dg=null;eg=0}Vf.current=kg;a=Xf;a.memoizedState=Yf;a.expirationTime=$f;a.updateQueue=ag;a.effectTag|=bg;a=null!==O&&null!==O.next;Wf=0;Zf=Q=Yf=P=O=Xf=null;$f=0;ag=null;bg=0;a?x("300"):void 0;return b}function lg(){Vf.current=kg;Wf=0;Zf=Q=Yf=P=O=Xf=null;$f=0;ag=null;bg=0;cg=!1;dg=null;eg=0}
function mg(){var a={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};null===Q?Yf=Q=a:Q=Q.next=a;return Q}function ng(){if(null!==Zf)Q=Zf,Zf=Q.next,O=P,P=null!==O?O.next:null;else{null===P?x("310"):void 0;O=P;var a={memoizedState:O.memoizedState,baseState:O.baseState,queue:O.queue,baseUpdate:O.baseUpdate,next:null};Q=null===Q?Yf=a:Q.next=a;P=O.next}return Q}function og(a,b){return"function"===typeof b?b(a):b}
function pg(a){var b=ng(),c=b.queue;null===c?x("311"):void 0;c.lastRenderedReducer=a;if(0<eg){var d=c.dispatch;if(null!==dg){var e=dg.get(c);if(void 0!==e){dg.delete(c);var f=b.memoizedState;do f=a(f,e.action),e=e.next;while(null!==e);bd(f,b.memoizedState)||(qg=!0);b.memoizedState=f;b.baseUpdate===c.last&&(b.baseState=f);c.lastRenderedState=f;return[f,d]}}return[b.memoizedState,d]}d=c.last;var g=b.baseUpdate;f=b.baseState;null!==g?(null!==d&&(d.next=null),d=g.next):d=null!==d?d.next:null;if(null!==
d){var h=e=null,l=d,k=!1;do{var m=l.expirationTime;m<Wf?(k||(k=!0,h=g,e=f),m>$f&&($f=m)):f=l.eagerReducer===a?l.eagerState:a(f,l.action);g=l;l=l.next}while(null!==l&&l!==d);k||(h=g,e=f);bd(f,b.memoizedState)||(qg=!0);b.memoizedState=f;b.baseUpdate=h;b.baseState=e;c.lastRenderedState=f}return[b.memoizedState,c.dispatch]}
function rg(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};null===ag?(ag={lastEffect:null},ag.lastEffect=a.next=a):(b=ag.lastEffect,null===b?ag.lastEffect=a.next=a:(c=b.next,b.next=a,a.next=c,ag.lastEffect=a));return a}function sg(a,b,c,d){var e=mg();bg|=a;e.memoizedState=rg(b,c,void 0,void 0===d?null:d)}
function tg(a,b,c,d){var e=ng();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&gg(d,g.deps)){rg(Nf,c,f,d);return}}bg|=a;e.memoizedState=rg(b,c,f,d)}function ug(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function vg(){}
function wg(a,b,c){25>eg?void 0:x("301");var d=a.alternate;if(a===Xf||null!==d&&d===Xf)if(cg=!0,a={expirationTime:Wf,action:c,eagerReducer:null,eagerState:null,next:null},null===dg&&(dg=new Map),c=dg.get(b),void 0===c)dg.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}else{of();var e=lf();e=mf(e,a);var f={expirationTime:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.last;if(null===g)f.next=f;else{var h=g.next;null!==h&&(f.next=h);g.next=f}b.last=f;if(0===a.expirationTime&&(null===
d||0===d.expirationTime)&&(d=b.lastRenderedReducer,null!==d))try{var l=b.lastRenderedState,k=d(l,c);f.eagerReducer=d;f.eagerState=k;if(bd(k,l))return}catch(m){}finally{}qf(a,e)}}
var kg={readContext:M,useCallback:fg,useContext:fg,useEffect:fg,useImperativeHandle:fg,useLayoutEffect:fg,useMemo:fg,useReducer:fg,useRef:fg,useState:fg,useDebugValue:fg},ig={readContext:M,useCallback:function(a,b){mg().memoizedState=[a,void 0===b?null:b];return a},useContext:M,useEffect:function(a,b){return sg(516,Uf|Tf,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return sg(4,Pf|Sf,ug.bind(null,b,a),c)},useLayoutEffect:function(a,b){return sg(4,Pf|Sf,a,b)},
useMemo:function(a,b){var c=mg();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=mg();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={last:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=wg.bind(null,Xf,a);return[d.memoizedState,a]},useRef:function(a){var b=mg();a={current:a};return b.memoizedState=a},useState:function(a){var b=mg();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={last:null,dispatch:null,
lastRenderedReducer:og,lastRenderedState:a};a=a.dispatch=wg.bind(null,Xf,a);return[b.memoizedState,a]},useDebugValue:vg},jg={readContext:M,useCallback:function(a,b){var c=ng();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&gg(b,d[1]))return d[0];c.memoizedState=[a,b];return a},useContext:M,useEffect:function(a,b){return tg(516,Uf|Tf,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return tg(4,Pf|Sf,ug.bind(null,b,a),c)},useLayoutEffect:function(a,
b){return tg(4,Pf|Sf,a,b)},useMemo:function(a,b){var c=ng();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&gg(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a},useReducer:pg,useRef:function(){return ng().memoizedState},useState:function(a){return pg(og,a)},useDebugValue:vg},xg=null,yg=null,zg=!1;
function Ag(a,b){var c=K(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function Bg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function Cg(a){if(zg){var b=yg;if(b){var c=b;if(!Bg(a,b)){b=De(c);if(!b||!Bg(a,b)){a.effectTag|=2;zg=!1;xg=a;return}Ag(xg,c)}xg=a;yg=Ee(b)}else a.effectTag|=2,zg=!1,xg=a}}function Dg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&18!==a.tag;)a=a.return;xg=a}function Eg(a){if(a!==xg)return!1;if(!zg)return Dg(a),zg=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!xe(b,a.memoizedProps))for(b=yg;b;)Ag(a,b),b=De(b);Dg(a);yg=xg?De(a.stateNode):null;return!0}function Fg(){yg=xg=null;zg=!1}
var Gg=Tb.ReactCurrentOwner,qg=!1;function S(a,b,c,d){b.child=null===a?Ef(b,null,c,d):Df(b,a.child,c,d)}function Hg(a,b,c,d,e){c=c.render;var f=b.ref;Ig(b,e);d=hg(a,b,c,d,f,e);if(null!==a&&!qg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),Jg(a,b,e);b.effectTag|=1;S(a,b,d,e);return b.child}
function Kg(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!Ve(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,Lg(a,b,g,d,e,f);a=Ye(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:dd,c(e,d)&&a.ref===b.ref))return Jg(a,b,f);b.effectTag|=1;a=Xe(g,d,f);a.ref=b.ref;a.return=b;return b.child=a}
function Lg(a,b,c,d,e,f){return null!==a&&dd(a.memoizedProps,d)&&a.ref===b.ref&&(qg=!1,e<f)?Jg(a,b,f):Mg(a,b,c,d,f)}function Ng(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function Mg(a,b,c,d,e){var f=J(c)?Ie:H.current;f=Je(b,f);Ig(b,e);c=hg(a,b,c,d,f,e);if(null!==a&&!qg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),Jg(a,b,e);b.effectTag|=1;S(a,b,c,e);return b.child}
function Og(a,b,c,d,e){if(J(c)){var f=!0;Oe(b)}else f=!1;Ig(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),vf(b,c,d,e),xf(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var l=g.context,k=c.contextType;"object"===typeof k&&null!==k?k=M(k):(k=J(c)?Ie:H.current,k=Je(b,k));var m=c.getDerivedStateFromProps,p="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;p||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||l!==k)&&wf(b,g,d,k);Pg=!1;var t=b.memoizedState;l=g.state=t;var A=b.updateQueue;null!==A&&(yf(b,A,d,g,e),l=b.memoizedState);h!==d||t!==l||I.current||Pg?("function"===typeof m&&(kf(b,c,m,d),l=b.memoizedState),(h=Pg||uf(b,c,h,d,t,l,k))?(p||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&
g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=l),g.props=d,g.state=l,g.context=k,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,h=b.memoizedProps,g.props=b.type===b.elementType?h:L(b.type,h),l=g.context,k=c.contextType,"object"===typeof k&&null!==k?k=M(k):(k=J(c)?Ie:H.current,k=Je(b,k)),m=c.getDerivedStateFromProps,(p="function"===
typeof m||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||l!==k)&&wf(b,g,d,k),Pg=!1,l=b.memoizedState,t=g.state=l,A=b.updateQueue,null!==A&&(yf(b,A,d,g,e),t=b.memoizedState),h!==d||l!==t||I.current||Pg?("function"===typeof m&&(kf(b,c,m,d),t=b.memoizedState),(m=Pg||uf(b,c,h,d,l,t,k))?(p||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===
typeof g.componentWillUpdate&&g.componentWillUpdate(d,t,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,t,k)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=
t),g.props=d,g.state=t,g.context=k,d=m):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=256),d=!1);return Qg(a,b,c,d,f,e)}
function Qg(a,b,c,d,e,f){Ng(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Pe(b,c,!1),Jg(a,b,f);d=b.stateNode;Gg.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=Df(b,a.child,null,f),b.child=Df(b,null,h,f)):S(a,b,h,f);b.memoizedState=d.state;e&&Pe(b,c,!0);return b.child}function Rg(a){var b=a.stateNode;b.pendingContext?Me(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Me(a,b.context,!1);Jf(a,b.containerInfo)}
function Sg(a,b,c){var d=b.mode,e=b.pendingProps,f=b.memoizedState;if(0===(b.effectTag&64)){f=null;var g=!1}else f={timedOutAt:null!==f?f.timedOutAt:0},g=!0,b.effectTag&=-65;if(null===a)if(g){var h=e.fallback;a=Ze(null,d,0,null);0===(b.mode&1)&&(a.child=null!==b.memoizedState?b.child.child:b.child);d=Ze(h,d,c,null);a.sibling=d;c=a;c.return=d.return=b}else c=d=Ef(b,null,e.children,c);else null!==a.memoizedState?(d=a.child,h=d.sibling,g?(c=e.fallback,e=Xe(d,d.pendingProps,0),0===(b.mode&1)&&(g=null!==
b.memoizedState?b.child.child:b.child,g!==d.child&&(e.child=g)),d=e.sibling=Xe(h,c,h.expirationTime),c=e,e.childExpirationTime=0,c.return=d.return=b):c=d=Df(b,d.child,e.children,c)):(h=a.child,g?(g=e.fallback,e=Ze(null,d,0,null),e.child=h,0===(b.mode&1)&&(e.child=null!==b.memoizedState?b.child.child:b.child),d=e.sibling=Ze(g,d,c,null),d.effectTag|=2,c=e,e.childExpirationTime=0,c.return=d.return=b):d=c=Df(b,h,e.children,c)),b.stateNode=a.stateNode;b.memoizedState=f;b.child=c;return d}
function Jg(a,b,c){null!==a&&(b.contextDependencies=a.contextDependencies);if(b.childExpirationTime<c)return null;null!==a&&b.child!==a.child?x("153"):void 0;if(null!==b.child){a=b.child;c=Xe(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Xe(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}
function Tg(a,b,c){var d=b.expirationTime;if(null!==a)if(a.memoizedProps!==b.pendingProps||I.current)qg=!0;else{if(d<c){qg=!1;switch(b.tag){case 3:Rg(b);Fg();break;case 5:Lf(b);break;case 1:J(b.type)&&Oe(b);break;case 4:Jf(b,b.stateNode.containerInfo);break;case 10:Ug(b,b.memoizedProps.value);break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;if(0!==d&&d>=c)return Sg(a,b,c);b=Jg(a,b,c);return null!==b?b.sibling:null}}return Jg(a,b,c)}}else qg=!1;b.expirationTime=0;switch(b.tag){case 2:d=
b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;var e=Je(b,H.current);Ig(b,c);e=hg(null,b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;lg();if(J(d)){var f=!0;Oe(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;var g=d.getDerivedStateFromProps;"function"===typeof g&&kf(b,d,g,a);e.updater=tf;b.stateNode=e;e._reactInternalFiber=b;xf(b,d,a,c);b=Qg(null,b,d,!0,f,
c)}else b.tag=0,S(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);f=b.pendingProps;a=hf(e);b.type=a;e=b.tag=We(a);f=L(a,f);g=void 0;switch(e){case 0:g=Mg(null,b,a,f,c);break;case 1:g=Og(null,b,a,f,c);break;case 11:g=Hg(null,b,a,f,c);break;case 14:g=Kg(null,b,a,L(a.type,f),d,c);break;default:x("306",a,"")}return g;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:L(d,e),Mg(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,
e=b.elementType===d?e:L(d,e),Og(a,b,d,e,c);case 3:Rg(b);d=b.updateQueue;null===d?x("282"):void 0;e=b.memoizedState;e=null!==e?e.element:null;yf(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===e)Fg(),b=Jg(a,b,c);else{e=b.stateNode;if(e=(null===a||null===a.child)&&e.hydrate)yg=Ee(b.stateNode.containerInfo),xg=b,e=zg=!0;e?(b.effectTag|=2,b.child=Ef(b,null,d,c)):(S(a,b,d,c),Fg());b=b.child}return b;case 5:return Lf(b),null===a&&Cg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,
g=e.children,xe(d,e)?g=null:null!==f&&xe(d,f)&&(b.effectTag|=16),Ng(a,b),1!==c&&b.mode&1&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(S(a,b,g,c),b=b.child),b;case 6:return null===a&&Cg(b),null;case 13:return Sg(a,b,c);case 4:return Jf(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Df(b,null,d,c):S(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:L(d,e),Hg(a,b,d,e,c);case 7:return S(a,b,b.pendingProps,c),b.child;case 8:return S(a,b,b.pendingProps.children,
c),b.child;case 12:return S(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;Ug(b,f);if(null!==g){var h=g.value;f=bd(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0;if(0===f){if(g.children===e.children&&!I.current){b=Jg(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var l=h.contextDependencies;if(null!==l){g=h.child;for(var k=l.first;null!==k;){if(k.context===d&&0!==
(k.observedBits&f)){1===h.tag&&(k=nf(c),k.tag=sf,pf(h,k));h.expirationTime<c&&(h.expirationTime=c);k=h.alternate;null!==k&&k.expirationTime<c&&(k.expirationTime=c);k=c;for(var m=h.return;null!==m;){var p=m.alternate;if(m.childExpirationTime<k)m.childExpirationTime=k,null!==p&&p.childExpirationTime<k&&(p.childExpirationTime=k);else if(null!==p&&p.childExpirationTime<k)p.childExpirationTime=k;else break;m=m.return}l.expirationTime<c&&(l.expirationTime=c);break}k=k.next}}else g=10===h.tag?h.type===b.type?
null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=g}}S(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,Ig(b,c),e=M(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,S(a,b,d,c),b.child;case 14:return e=b.type,f=L(e,b.pendingProps),f=L(e.type,f),Kg(a,b,e,f,d,c);case 15:return Lg(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===
d?e:L(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,J(d)?(a=!0,Oe(b)):a=!1,Ig(b,c),vf(b,d,e,c),xf(b,d,e,c),Qg(null,b,d,!0,a,c)}x("156")}var Vg={current:null},Wg=null,Xg=null,Yg=null;function Ug(a,b){var c=a.type._context;G(Vg,c._currentValue,a);c._currentValue=b}function Zg(a){var b=Vg.current;F(Vg,a);a.type._context._currentValue=b}function Ig(a,b){Wg=a;Yg=Xg=null;var c=a.contextDependencies;null!==c&&c.expirationTime>=b&&(qg=!0);a.contextDependencies=null}
function M(a,b){if(Yg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)Yg=a,b=1073741823;b={context:a,observedBits:b,next:null};null===Xg?(null===Wg?x("308"):void 0,Xg=b,Wg.contextDependencies={first:b,expirationTime:0}):Xg=Xg.next=b}return a._currentValue}var $g=0,rf=1,sf=2,ah=3,Pg=!1;function bh(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
function ch(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function nf(a){return{expirationTime:a,tag:$g,payload:null,callback:null,next:null,nextEffect:null}}function dh(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}
function pf(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=bh(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=bh(a.memoizedState),e=c.updateQueue=bh(c.memoizedState)):d=a.updateQueue=ch(e):null===e&&(e=c.updateQueue=ch(d));null===e||d===e?dh(d,b):null===d.lastUpdate||null===e.lastUpdate?(dh(d,b),dh(e,b)):(dh(d,b),e.lastUpdate=b)}
function eh(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=bh(a.memoizedState):fh(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b)}function fh(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=ch(b));return b}
function gh(a,b,c,d,e,f){switch(c.tag){case rf:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case ah:a.effectTag=a.effectTag&-2049|64;case $g:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return n({},d,e);case sf:Pg=!0}return d}
function yf(a,b,c,d,e){Pg=!1;b=fh(a,b);for(var f=b.baseState,g=null,h=0,l=b.firstUpdate,k=f;null!==l;){var m=l.expirationTime;m<e?(null===g&&(g=l,f=k),h<m&&(h=m)):(k=gh(a,b,l,k,c,d),null!==l.callback&&(a.effectTag|=32,l.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=l:(b.lastEffect.nextEffect=l,b.lastEffect=l)));l=l.next}m=null;for(l=b.firstCapturedUpdate;null!==l;){var p=l.expirationTime;p<e?(null===m&&(m=l,null===g&&(f=k)),h<p&&(h=p)):(k=gh(a,b,l,k,c,d),null!==l.callback&&(a.effectTag|=
32,l.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=l:(b.lastCapturedEffect.nextEffect=l,b.lastCapturedEffect=l)));l=l.next}null===g&&(b.lastUpdate=null);null===m?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===m&&(f=k);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=m;a.expirationTime=h;a.memoizedState=k}
function hh(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);ih(b.firstEffect,c);b.firstEffect=b.lastEffect=null;ih(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function ih(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;"function"!==typeof c?x("191",c):void 0;c.call(d)}a=a.nextEffect}}
function jh(a,b){return{value:a,source:b,stack:jc(b)}}function kh(a){a.effectTag|=4}var lh=void 0,mh=void 0,nh=void 0,oh=void 0;lh=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};mh=function(){};
nh=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;If(N.current);a=null;switch(c){case "input":f=vc(g,f);d=vc(g,d);a=[];break;case "option":f=$d(g,f);d=$d(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=be(g,f);d=be(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=te)}qe(c,d);g=c=void 0;var h=null;for(c in f)if(!d.hasOwnProperty(c)&&f.hasOwnProperty(c)&&null!=f[c])if("style"===
c){var l=f[c];for(g in l)l.hasOwnProperty(g)&&(h||(h={}),h[g]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(ra.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in d){var k=d[c];l=null!=f?f[c]:void 0;if(d.hasOwnProperty(c)&&k!==l&&(null!=k||null!=l))if("style"===c)if(l){for(g in l)!l.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(h||(h={}),h[g]="");for(g in k)k.hasOwnProperty(g)&&l[g]!==k[g]&&(h||
(h={}),h[g]=k[g])}else h||(a||(a=[]),a.push(c,h)),h=k;else"dangerouslySetInnerHTML"===c?(k=k?k.__html:void 0,l=l?l.__html:void 0,null!=k&&l!==k&&(a=a||[]).push(c,""+k)):"children"===c?l===k||"string"!==typeof k&&"number"!==typeof k||(a=a||[]).push(c,""+k):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(ra.hasOwnProperty(c)?(null!=k&&se(e,c),a||l===k||(a=[])):(a=a||[]).push(c,k))}h&&(a=a||[]).push("style",h);e=a;(b.updateQueue=e)&&kh(b)}};oh=function(a,b,c,d){c!==d&&kh(b)};
var ph="function"===typeof WeakSet?WeakSet:Set;function qh(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=jc(c));null!==c&&ic(c.type);b=b.value;null!==a&&1===a.tag&&ic(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function rh(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){sh(a,c)}else b.current=null}
function th(a,b,c){c=c.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do{if((d.tag&a)!==Nf){var e=d.destroy;d.destroy=void 0;void 0!==e&&e()}(d.tag&b)!==Nf&&(e=d.create,d.destroy=e());d=d.next}while(d!==c)}}
function uh(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d.style.display="none";else{d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=ne("display",e)}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if(13===c.tag&&null!==c.memoizedState){d=c.child.sibling;d.return=c;c=d;continue}else if(null!==c.child){c.child.return=c;c=c.child;continue}if(c===a)break;for(;null===c.sibling;){if(null===c.return||
c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}
function vh(a){"function"===typeof Re&&Re(a);switch(a.tag){case 0:case 11:case 14:case 15:var b=a.updateQueue;if(null!==b&&(b=b.lastEffect,null!==b)){var c=b=b.next;do{var d=c.destroy;if(void 0!==d){var e=a;try{d()}catch(f){sh(e,f)}}c=c.next}while(c!==b)}break;case 1:rh(a);b=a.stateNode;if("function"===typeof b.componentWillUnmount)try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(f){sh(a,f)}break;case 5:rh(a);break;case 4:wh(a)}}
function xh(a){return 5===a.tag||3===a.tag||4===a.tag}
function yh(a){a:{for(var b=a.return;null!==b;){if(xh(b)){var c=b;break a}b=b.return}x("160");c=void 0}var d=b=void 0;switch(c.tag){case 5:b=c.stateNode;d=!1;break;case 3:b=c.stateNode.containerInfo;d=!0;break;case 4:b=c.stateNode.containerInfo;d=!0;break;default:x("161")}c.effectTag&16&&(ke(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||xh(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&
2)continue b;if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){if(5===e.tag||6===e.tag)if(c)if(d){var f=b,g=e.stateNode,h=c;8===f.nodeType?f.parentNode.insertBefore(g,h):f.insertBefore(g,h)}else b.insertBefore(e.stateNode,c);else d?(g=b,h=e.stateNode,8===g.nodeType?(f=g.parentNode,f.insertBefore(h,g)):(f=g,f.appendChild(h)),g=g._reactRootContainer,null!==g&&void 0!==g||null!==f.onclick||(f.onclick=te)):b.appendChild(e.stateNode);
else if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}
function wh(a){for(var b=a,c=!1,d=void 0,e=void 0;;){if(!c){c=b.return;a:for(;;){null===c?x("160"):void 0;switch(c.tag){case 5:d=c.stateNode;e=!1;break a;case 3:d=c.stateNode.containerInfo;e=!0;break a;case 4:d=c.stateNode.containerInfo;e=!0;break a}c=c.return}c=!0}if(5===b.tag||6===b.tag){a:for(var f=b,g=f;;)if(vh(g),null!==g.child&&4!==g.tag)g.child.return=g,g=g.child;else{if(g===f)break;for(;null===g.sibling;){if(null===g.return||g.return===f)break a;g=g.return}g.sibling.return=g.return;g=g.sibling}e?
(f=d,g=b.stateNode,8===f.nodeType?f.parentNode.removeChild(g):f.removeChild(g)):d.removeChild(b.stateNode)}else if(4===b.tag){if(null!==b.child){d=b.stateNode.containerInfo;e=!0;b.child.return=b;b=b.child;continue}}else if(vh(b),null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return;b=b.return;4===b.tag&&(c=!1)}b.sibling.return=b.return;b=b.sibling}}
function zh(a,b){switch(b.tag){case 0:case 11:case 14:case 15:th(Pf,Qf,b);break;case 1:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps;a=null!==a?a.memoizedProps:d;var e=b.type,f=b.updateQueue;b.updateQueue=null;null!==f&&Ce(c,f,e,a,d,b)}break;case 6:null===b.stateNode?x("162"):void 0;b.stateNode.nodeValue=b.memoizedProps;break;case 3:break;case 12:break;case 13:c=b.memoizedState;d=void 0;a=b;null===c?d=!1:(d=!0,a=b.child,0===c.timedOutAt&&(c.timedOutAt=lf()));null!==a&&uh(a,d);c=
b.updateQueue;if(null!==c){b.updateQueue=null;var g=b.stateNode;null===g&&(g=b.stateNode=new ph);c.forEach(function(a){var c=Ah.bind(null,b,a);g.has(a)||(g.add(a),a.then(c,c))})}break;case 17:break;default:x("163")}}var Bh="function"===typeof WeakMap?WeakMap:Map;function Ch(a,b,c){c=nf(c);c.tag=ah;c.payload={element:null};var d=b.value;c.callback=function(){Dh(d);qh(a,b)};return c}
function Eh(a,b,c){c=nf(c);c.tag=ah;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Fh?Fh=new Set([this]):Fh.add(this));var c=b.value,e=b.stack;qh(a,b);this.componentDidCatch(c,{componentStack:null!==e?e:""})});return c}
function Gh(a){switch(a.tag){case 1:J(a.type)&&Ke(a);var b=a.effectTag;return b&2048?(a.effectTag=b&-2049|64,a):null;case 3:return Kf(a),Le(a),b=a.effectTag,0!==(b&64)?x("285"):void 0,a.effectTag=b&-2049|64,a;case 5:return Mf(a),null;case 13:return b=a.effectTag,b&2048?(a.effectTag=b&-2049|64,a):null;case 18:return null;case 4:return Kf(a),null;case 10:return Zg(a),null;default:return null}}
var Hh=Tb.ReactCurrentDispatcher,Ih=Tb.ReactCurrentOwner,Jh=1073741822,Kh=!1,T=null,Lh=null,U=0,Mh=-1,Nh=!1,V=null,Oh=!1,Ph=null,Qh=null,Rh=null,Fh=null;function Sh(){if(null!==T)for(var a=T.return;null!==a;){var b=a;switch(b.tag){case 1:var c=b.type.childContextTypes;null!==c&&void 0!==c&&Ke(b);break;case 3:Kf(b);Le(b);break;case 5:Mf(b);break;case 4:Kf(b);break;case 10:Zg(b)}a=a.return}Lh=null;U=0;Mh=-1;Nh=!1;T=null}
function Th(){for(;null!==V;){var a=V.effectTag;a&16&&ke(V.stateNode,"");if(a&128){var b=V.alternate;null!==b&&(b=b.ref,null!==b&&("function"===typeof b?b(null):b.current=null))}switch(a&14){case 2:yh(V);V.effectTag&=-3;break;case 6:yh(V);V.effectTag&=-3;zh(V.alternate,V);break;case 4:zh(V.alternate,V);break;case 8:a=V,wh(a),a.return=null,a.child=null,a.memoizedState=null,a.updateQueue=null,a=a.alternate,null!==a&&(a.return=null,a.child=null,a.memoizedState=null,a.updateQueue=null)}V=V.nextEffect}}
function Uh(){for(;null!==V;){if(V.effectTag&256)a:{var a=V.alternate,b=V;switch(b.tag){case 0:case 11:case 15:th(Of,Nf,b);break a;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:L(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}break a;case 3:case 5:case 6:case 4:case 17:break a;default:x("163")}}V=V.nextEffect}}
function Vh(a,b){for(;null!==V;){var c=V.effectTag;if(c&36){var d=V.alternate,e=V,f=b;switch(e.tag){case 0:case 11:case 15:th(Rf,Sf,e);break;case 1:var g=e.stateNode;if(e.effectTag&4)if(null===d)g.componentDidMount();else{var h=e.elementType===e.type?d.memoizedProps:L(e.type,d.memoizedProps);g.componentDidUpdate(h,d.memoizedState,g.__reactInternalSnapshotBeforeUpdate)}d=e.updateQueue;null!==d&&hh(e,d,g,f);break;case 3:d=e.updateQueue;if(null!==d){g=null;if(null!==e.child)switch(e.child.tag){case 5:g=
e.child.stateNode;break;case 1:g=e.child.stateNode}hh(e,d,g,f)}break;case 5:f=e.stateNode;null===d&&e.effectTag&4&&we(e.type,e.memoizedProps)&&f.focus();break;case 6:break;case 4:break;case 12:break;case 13:break;case 17:break;default:x("163")}}c&128&&(e=V.ref,null!==e&&(f=V.stateNode,"function"===typeof e?e(f):e.current=f));c&512&&(Ph=a);V=V.nextEffect}}
function Wh(a,b){Rh=Qh=Ph=null;var c=W;W=!0;do{if(b.effectTag&512){var d=!1,e=void 0;try{var f=b;th(Uf,Nf,f);th(Nf,Tf,f)}catch(g){d=!0,e=g}d&&sh(b,e)}b=b.nextEffect}while(null!==b);W=c;c=a.expirationTime;0!==c&&Xh(a,c);X||W||Yh(1073741823,!1)}function of(){null!==Qh&&Be(Qh);null!==Rh&&Rh()}
function Zh(a,b){Oh=Kh=!0;a.current===b?x("177"):void 0;var c=a.pendingCommitExpirationTime;0===c?x("261"):void 0;a.pendingCommitExpirationTime=0;var d=b.expirationTime,e=b.childExpirationTime;ef(a,e>d?e:d);Ih.current=null;d=void 0;1<b.effectTag?null!==b.lastEffect?(b.lastEffect.nextEffect=b,d=b.firstEffect):d=b:d=b.firstEffect;ue=Bd;ve=Pd();Bd=!1;for(V=d;null!==V;){e=!1;var f=void 0;try{Uh()}catch(h){e=!0,f=h}e&&(null===V?x("178"):void 0,sh(V,f),null!==V&&(V=V.nextEffect))}for(V=d;null!==V;){e=!1;
f=void 0;try{Th()}catch(h){e=!0,f=h}e&&(null===V?x("178"):void 0,sh(V,f),null!==V&&(V=V.nextEffect))}Qd(ve);ve=null;Bd=!!ue;ue=null;a.current=b;for(V=d;null!==V;){e=!1;f=void 0;try{Vh(a,c)}catch(h){e=!0,f=h}e&&(null===V?x("178"):void 0,sh(V,f),null!==V&&(V=V.nextEffect))}if(null!==d&&null!==Ph){var g=Wh.bind(null,a,d);Qh=r.unstable_runWithPriority(r.unstable_NormalPriority,function(){return Ae(g)});Rh=g}Kh=Oh=!1;"function"===typeof Qe&&Qe(b.stateNode);c=b.expirationTime;b=b.childExpirationTime;b=
b>c?b:c;0===b&&(Fh=null);$h(a,b)}
function ai(a){for(;;){var b=a.alternate,c=a.return,d=a.sibling;if(0===(a.effectTag&1024)){T=a;a:{var e=b;b=a;var f=U;var g=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;case 1:J(b.type)&&Ke(b);break;case 3:Kf(b);Le(b);g=b.stateNode;g.pendingContext&&(g.context=g.pendingContext,g.pendingContext=null);if(null===e||null===e.child)Eg(b),b.effectTag&=-3;mh(b);break;case 5:Mf(b);var h=If(Hf.current);f=b.type;if(null!==e&&null!=b.stateNode)nh(e,b,f,g,h),e.ref!==b.ref&&(b.effectTag|=
128);else if(g){var l=If(N.current);if(Eg(b)){g=b;e=g.stateNode;var k=g.type,m=g.memoizedProps,p=h;e[Fa]=g;e[Ga]=m;f=void 0;h=k;switch(h){case "iframe":case "object":E("load",e);break;case "video":case "audio":for(k=0;k<ab.length;k++)E(ab[k],e);break;case "source":E("error",e);break;case "img":case "image":case "link":E("error",e);E("load",e);break;case "form":E("reset",e);E("submit",e);break;case "details":E("toggle",e);break;case "input":wc(e,m);E("invalid",e);se(p,"onChange");break;case "select":e._wrapperState=
{wasMultiple:!!m.multiple};E("invalid",e);se(p,"onChange");break;case "textarea":ce(e,m),E("invalid",e),se(p,"onChange")}qe(h,m);k=null;for(f in m)m.hasOwnProperty(f)&&(l=m[f],"children"===f?"string"===typeof l?e.textContent!==l&&(k=["children",l]):"number"===typeof l&&e.textContent!==""+l&&(k=["children",""+l]):ra.hasOwnProperty(f)&&null!=l&&se(p,f));switch(h){case "input":Rb(e);Ac(e,m,!0);break;case "textarea":Rb(e);ee(e,m);break;case "select":case "option":break;default:"function"===typeof m.onClick&&
(e.onclick=te)}f=k;g.updateQueue=f;g=null!==f?!0:!1;g&&kh(b)}else{m=b;p=f;e=g;k=9===h.nodeType?h:h.ownerDocument;l===fe.html&&(l=ge(p));l===fe.html?"script"===p?(e=k.createElement("div"),e.innerHTML="<script>\x3c/script>",k=e.removeChild(e.firstChild)):"string"===typeof e.is?k=k.createElement(p,{is:e.is}):(k=k.createElement(p),"select"===p&&(p=k,e.multiple?p.multiple=!0:e.size&&(p.size=e.size))):k=k.createElementNS(l,p);e=k;e[Fa]=m;e[Ga]=g;lh(e,b,!1,!1);p=e;k=f;m=g;var t=h,A=re(k,m);switch(k){case "iframe":case "object":E("load",
p);h=m;break;case "video":case "audio":for(h=0;h<ab.length;h++)E(ab[h],p);h=m;break;case "source":E("error",p);h=m;break;case "img":case "image":case "link":E("error",p);E("load",p);h=m;break;case "form":E("reset",p);E("submit",p);h=m;break;case "details":E("toggle",p);h=m;break;case "input":wc(p,m);h=vc(p,m);E("invalid",p);se(t,"onChange");break;case "option":h=$d(p,m);break;case "select":p._wrapperState={wasMultiple:!!m.multiple};h=n({},m,{value:void 0});E("invalid",p);se(t,"onChange");break;case "textarea":ce(p,
m);h=be(p,m);E("invalid",p);se(t,"onChange");break;default:h=m}qe(k,h);l=void 0;var v=k,R=p,u=h;for(l in u)if(u.hasOwnProperty(l)){var q=u[l];"style"===l?oe(R,q):"dangerouslySetInnerHTML"===l?(q=q?q.__html:void 0,null!=q&&je(R,q)):"children"===l?"string"===typeof q?("textarea"!==v||""!==q)&&ke(R,q):"number"===typeof q&&ke(R,""+q):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ra.hasOwnProperty(l)?null!=q&&se(t,l):null!=q&&tc(R,l,q,A))}switch(k){case "input":Rb(p);
Ac(p,m,!1);break;case "textarea":Rb(p);ee(p,m);break;case "option":null!=m.value&&p.setAttribute("value",""+uc(m.value));break;case "select":h=p;h.multiple=!!m.multiple;p=m.value;null!=p?ae(h,!!m.multiple,p,!1):null!=m.defaultValue&&ae(h,!!m.multiple,m.defaultValue,!0);break;default:"function"===typeof h.onClick&&(p.onclick=te)}(g=we(f,g))&&kh(b);b.stateNode=e}null!==b.ref&&(b.effectTag|=128)}else null===b.stateNode?x("166"):void 0;break;case 6:e&&null!=b.stateNode?oh(e,b,e.memoizedProps,g):("string"!==
typeof g&&(null===b.stateNode?x("166"):void 0),e=If(Hf.current),If(N.current),Eg(b)?(g=b,f=g.stateNode,e=g.memoizedProps,f[Fa]=g,(g=f.nodeValue!==e)&&kh(b)):(f=b,g=(9===e.nodeType?e:e.ownerDocument).createTextNode(g),g[Fa]=b,f.stateNode=g));break;case 11:break;case 13:g=b.memoizedState;if(0!==(b.effectTag&64)){b.expirationTime=f;T=b;break a}g=null!==g;f=null!==e&&null!==e.memoizedState;null!==e&&!g&&f&&(e=e.child.sibling,null!==e&&(h=b.firstEffect,null!==h?(b.firstEffect=e,e.nextEffect=h):(b.firstEffect=
b.lastEffect=e,e.nextEffect=null),e.effectTag=8));if(g||f)b.effectTag|=4;break;case 7:break;case 8:break;case 12:break;case 4:Kf(b);mh(b);break;case 10:Zg(b);break;case 9:break;case 14:break;case 17:J(b.type)&&Ke(b);break;case 18:break;default:x("156")}T=null}b=a;if(1===U||1!==b.childExpirationTime){g=0;for(f=b.child;null!==f;)e=f.expirationTime,h=f.childExpirationTime,e>g&&(g=e),h>g&&(g=h),f=f.sibling;b.childExpirationTime=g}if(null!==T)return T;null!==c&&0===(c.effectTag&1024)&&(null===c.firstEffect&&
(c.firstEffect=a.firstEffect),null!==a.lastEffect&&(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),1<a.effectTag&&(null!==c.lastEffect?c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a))}else{a=Gh(a,U);if(null!==a)return a.effectTag&=1023,a;null!==c&&(c.firstEffect=c.lastEffect=null,c.effectTag|=1024)}if(null!==d)return d;if(null!==c)a=c;else break}return null}
function bi(a){var b=Tg(a.alternate,a,U);a.memoizedProps=a.pendingProps;null===b&&(b=ai(a));Ih.current=null;return b}
function ci(a,b){Kh?x("243"):void 0;of();Kh=!0;var c=Hh.current;Hh.current=kg;var d=a.nextExpirationTimeToWorkOn;if(d!==U||a!==Lh||null===T)Sh(),Lh=a,U=d,T=Xe(Lh.current,null,U),a.pendingCommitExpirationTime=0;var e=!1;do{try{if(b)for(;null!==T&&!di();)T=bi(T);else for(;null!==T;)T=bi(T)}catch(u){if(Yg=Xg=Wg=null,lg(),null===T)e=!0,Dh(u);else{null===T?x("271"):void 0;var f=T,g=f.return;if(null===g)e=!0,Dh(u);else{a:{var h=a,l=g,k=f,m=u;g=U;k.effectTag|=1024;k.firstEffect=k.lastEffect=null;if(null!==
m&&"object"===typeof m&&"function"===typeof m.then){var p=m;m=l;var t=-1,A=-1;do{if(13===m.tag){var v=m.alternate;if(null!==v&&(v=v.memoizedState,null!==v)){A=10*(1073741822-v.timedOutAt);break}v=m.pendingProps.maxDuration;if("number"===typeof v)if(0>=v)t=0;else if(-1===t||v<t)t=v}m=m.return}while(null!==m);m=l;do{if(v=13===m.tag)v=void 0===m.memoizedProps.fallback?!1:null===m.memoizedState;if(v){l=m.updateQueue;null===l?(l=new Set,l.add(p),m.updateQueue=l):l.add(p);if(0===(m.mode&1)){m.effectTag|=
64;k.effectTag&=-1957;1===k.tag&&(null===k.alternate?k.tag=17:(g=nf(1073741823),g.tag=sf,pf(k,g)));k.expirationTime=1073741823;break a}k=h;l=g;var R=k.pingCache;null===R?(R=k.pingCache=new Bh,v=new Set,R.set(p,v)):(v=R.get(p),void 0===v&&(v=new Set,R.set(p,v)));v.has(l)||(v.add(l),k=ei.bind(null,k,p,l),p.then(k,k));-1===t?h=1073741823:(-1===A&&(A=10*(1073741822-gf(h,g))-5E3),h=A+t);0<=h&&Mh<h&&(Mh=h);m.effectTag|=2048;m.expirationTime=g;break a}m=m.return}while(null!==m);m=Error((ic(k.type)||"A React component")+
" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+jc(k))}Nh=!0;m=jh(m,k);h=l;do{switch(h.tag){case 3:h.effectTag|=2048;h.expirationTime=g;g=Ch(h,m,g);eh(h,g);break a;case 1:if(t=m,A=h.type,k=h.stateNode,0===(h.effectTag&64)&&("function"===typeof A.getDerivedStateFromError||null!==k&&"function"===typeof k.componentDidCatch&&(null===Fh||!Fh.has(k)))){h.effectTag|=2048;
h.expirationTime=g;g=Eh(h,t,g);eh(h,g);break a}}h=h.return}while(null!==h)}T=ai(f);continue}}}break}while(1);Kh=!1;Hh.current=c;Yg=Xg=Wg=null;lg();if(e)Lh=null,a.finishedWork=null;else if(null!==T)a.finishedWork=null;else{c=a.current.alternate;null===c?x("281"):void 0;Lh=null;if(Nh){e=a.latestPendingTime;f=a.latestSuspendedTime;g=a.latestPingedTime;if(0!==e&&e<d||0!==f&&f<d||0!==g&&g<d){ff(a,d);fi(a,c,d,a.expirationTime,-1);return}if(!a.didError&&b){a.didError=!0;d=a.nextExpirationTimeToWorkOn=d;
b=a.expirationTime=1073741823;fi(a,c,d,b,-1);return}}b&&-1!==Mh?(ff(a,d),b=10*(1073741822-gf(a,d)),b<Mh&&(Mh=b),b=10*(1073741822-lf()),b=Mh-b,fi(a,c,d,a.expirationTime,0>b?0:b)):(a.pendingCommitExpirationTime=d,a.finishedWork=c)}}
function sh(a,b){for(var c=a.return;null!==c;){switch(c.tag){case 1:var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Fh||!Fh.has(d))){a=jh(b,a);a=Eh(c,a,1073741823);pf(c,a);qf(c,1073741823);return}break;case 3:a=jh(b,a);a=Ch(c,a,1073741823);pf(c,a);qf(c,1073741823);return}c=c.return}3===a.tag&&(c=jh(b,a),c=Ch(a,c,1073741823),pf(a,c),qf(a,1073741823))}
function mf(a,b){var c=r.unstable_getCurrentPriorityLevel(),d=void 0;if(0===(b.mode&1))d=1073741823;else if(Kh&&!Oh)d=U;else{switch(c){case r.unstable_ImmediatePriority:d=1073741823;break;case r.unstable_UserBlockingPriority:d=1073741822-10*(((1073741822-a+15)/10|0)+1);break;case r.unstable_NormalPriority:d=1073741822-25*(((1073741822-a+500)/25|0)+1);break;case r.unstable_LowPriority:case r.unstable_IdlePriority:d=1;break;default:x("313")}null!==Lh&&d===U&&--d}c===r.unstable_UserBlockingPriority&&
(0===gi||d<gi)&&(gi=d);return d}function ei(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);if(null!==Lh&&U===c)Lh=null;else if(b=a.earliestSuspendedTime,d=a.latestSuspendedTime,0!==b&&c<=b&&c>=d){a.didError=!1;b=a.latestPingedTime;if(0===b||b>c)a.latestPingedTime=c;df(c,a);c=a.expirationTime;0!==c&&Xh(a,c)}}function Ah(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=lf();b=mf(b,a);a=hi(a,b);null!==a&&(cf(a,b),b=a.expirationTime,0!==b&&Xh(a,b))}
function hi(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}return e}
function qf(a,b){a=hi(a,b);null!==a&&(!Kh&&0!==U&&b>U&&Sh(),cf(a,b),Kh&&!Oh&&Lh===a||Xh(a,a.expirationTime),ii>ji&&(ii=0,x("185")))}function ki(a,b,c,d,e){return r.unstable_runWithPriority(r.unstable_ImmediatePriority,function(){return a(b,c,d,e)})}var li=null,Y=null,mi=0,ni=void 0,W=!1,oi=null,Z=0,gi=0,pi=!1,qi=null,X=!1,ri=!1,si=null,ti=r.unstable_now(),ui=1073741822-(ti/10|0),vi=ui,ji=50,ii=0,wi=null;function xi(){ui=1073741822-((r.unstable_now()-ti)/10|0)}
function yi(a,b){if(0!==mi){if(b<mi)return;null!==ni&&r.unstable_cancelCallback(ni)}mi=b;a=r.unstable_now()-ti;ni=r.unstable_scheduleCallback(zi,{timeout:10*(1073741822-b)-a})}function fi(a,b,c,d,e){a.expirationTime=d;0!==e||di()?0<e&&(a.timeoutHandle=ye(Ai.bind(null,a,b,c),e)):(a.pendingCommitExpirationTime=c,a.finishedWork=b)}function Ai(a,b,c){a.pendingCommitExpirationTime=c;a.finishedWork=b;xi();vi=ui;Bi(a,c)}function $h(a,b){a.expirationTime=b;a.finishedWork=null}
function lf(){if(W)return vi;Ci();if(0===Z||1===Z)xi(),vi=ui;return vi}function Xh(a,b){null===a.nextScheduledRoot?(a.expirationTime=b,null===Y?(li=Y=a,a.nextScheduledRoot=a):(Y=Y.nextScheduledRoot=a,Y.nextScheduledRoot=li)):b>a.expirationTime&&(a.expirationTime=b);W||(X?ri&&(oi=a,Z=1073741823,Di(a,1073741823,!1)):1073741823===b?Yh(1073741823,!1):yi(a,b))}
function Ci(){var a=0,b=null;if(null!==Y)for(var c=Y,d=li;null!==d;){var e=d.expirationTime;if(0===e){null===c||null===Y?x("244"):void 0;if(d===d.nextScheduledRoot){li=Y=d.nextScheduledRoot=null;break}else if(d===li)li=e=d.nextScheduledRoot,Y.nextScheduledRoot=e,d.nextScheduledRoot=null;else if(d===Y){Y=c;Y.nextScheduledRoot=li;d.nextScheduledRoot=null;break}else c.nextScheduledRoot=d.nextScheduledRoot,d.nextScheduledRoot=null;d=c.nextScheduledRoot}else{e>a&&(a=e,b=d);if(d===Y)break;if(1073741823===
a)break;c=d;d=d.nextScheduledRoot}}oi=b;Z=a}var Ei=!1;function di(){return Ei?!0:r.unstable_shouldYield()?Ei=!0:!1}function zi(){try{if(!di()&&null!==li){xi();var a=li;do{var b=a.expirationTime;0!==b&&ui<=b&&(a.nextExpirationTimeToWorkOn=ui);a=a.nextScheduledRoot}while(a!==li)}Yh(0,!0)}finally{Ei=!1}}
function Yh(a,b){Ci();if(b)for(xi(),vi=ui;null!==oi&&0!==Z&&a<=Z&&!(Ei&&ui>Z);)Di(oi,Z,ui>Z),Ci(),xi(),vi=ui;else for(;null!==oi&&0!==Z&&a<=Z;)Di(oi,Z,!1),Ci();b&&(mi=0,ni=null);0!==Z&&yi(oi,Z);ii=0;wi=null;if(null!==si)for(a=si,si=null,b=0;b<a.length;b++){var c=a[b];try{c._onComplete()}catch(d){pi||(pi=!0,qi=d)}}if(pi)throw a=qi,qi=null,pi=!1,a;}function Bi(a,b){W?x("253"):void 0;oi=a;Z=b;Di(a,b,!1);Yh(1073741823,!1)}
function Di(a,b,c){W?x("245"):void 0;W=!0;if(c){var d=a.finishedWork;null!==d?Fi(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,ze(d)),ci(a,c),d=a.finishedWork,null!==d&&(di()?a.finishedWork=d:Fi(a,d,b)))}else d=a.finishedWork,null!==d?Fi(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,ze(d)),ci(a,c),d=a.finishedWork,null!==d&&Fi(a,d,b));W=!1}
function Fi(a,b,c){var d=a.firstBatch;if(null!==d&&d._expirationTime>=c&&(null===si?si=[d]:si.push(d),d._defer)){a.finishedWork=b;a.expirationTime=0;return}a.finishedWork=null;a===wi?ii++:(wi=a,ii=0);r.unstable_runWithPriority(r.unstable_ImmediatePriority,function(){Zh(a,b)})}function Dh(a){null===oi?x("246"):void 0;oi.expirationTime=0;pi||(pi=!0,qi=a)}function Gi(a,b){var c=X;X=!0;try{return a(b)}finally{(X=c)||W||Yh(1073741823,!1)}}
function Hi(a,b){if(X&&!ri){ri=!0;try{return a(b)}finally{ri=!1}}return a(b)}function Ii(a,b,c){X||W||0===gi||(Yh(gi,!1),gi=0);var d=X;X=!0;try{return r.unstable_runWithPriority(r.unstable_UserBlockingPriority,function(){return a(b,c)})}finally{(X=d)||W||Yh(1073741823,!1)}}
function Ji(a,b,c,d,e){var f=b.current;a:if(c){c=c._reactInternalFiber;b:{2===ed(c)&&1===c.tag?void 0:x("170");var g=c;do{switch(g.tag){case 3:g=g.stateNode.context;break b;case 1:if(J(g.type)){g=g.stateNode.__reactInternalMemoizedMergedChildContext;break b}}g=g.return}while(null!==g);x("171");g=void 0}if(1===c.tag){var h=c.type;if(J(h)){c=Ne(c,h,g);break a}}c=g}else c=He;null===b.context?b.context=c:b.pendingContext=c;b=e;e=nf(d);e.payload={element:a};b=void 0===b?null:b;null!==b&&(e.callback=b);
of();pf(f,e);qf(f,d);return d}function Ki(a,b,c,d){var e=b.current,f=lf();e=mf(f,e);return Ji(a,b,c,e,d)}function Li(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function Mi(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Wb,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
Ab=function(a,b,c){switch(b){case "input":yc(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Ka(d);e?void 0:x("90");Sb(d);yc(d,e)}}}break;case "textarea":de(a,c);break;case "select":b=c.value,null!=b&&ae(a,!!c.multiple,b,!1)}};
function Ni(a){var b=1073741822-25*(((1073741822-lf()+500)/25|0)+1);b>=Jh&&(b=Jh-1);this._expirationTime=Jh=b;this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0}Ni.prototype.render=function(a){this._defer?void 0:x("250");this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new Oi;Ji(a,b,null,c,d._onCommit);return d};
Ni.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Ni.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;this._defer&&null!==b?void 0:x("251");if(this._hasChildren){var c=this._expirationTime;if(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;null===d?x("251"):void 0;d._next=e._next;this._next=b;a.firstBatch=this}this._defer=!1;Bi(a,c);b=this._next;this._next=null;b=a.firstBatch=b;null!==b&&b._hasChildren&&b.render(b._children)}else this._next=
null,this._defer=!1};Ni.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};function Oi(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this)}Oi.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};
Oi.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];"function"!==typeof c?x("191",c):void 0;c()}}};
function Pi(a,b,c){b=K(3,null,null,b?3:0);a={current:b,containerInfo:a,pendingChildren:null,pingCache:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:c,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null};this._internalRoot=b.stateNode=a}
Pi.prototype.render=function(a,b){var c=this._internalRoot,d=new Oi;b=void 0===b?null:b;null!==b&&d.then(b);Ki(a,c,null,d._onCommit);return d};Pi.prototype.unmount=function(a){var b=this._internalRoot,c=new Oi;a=void 0===a?null:a;null!==a&&c.then(a);Ki(null,b,null,c._onCommit);return c};Pi.prototype.legacy_renderSubtreeIntoContainer=function(a,b,c){var d=this._internalRoot,e=new Oi;c=void 0===c?null:c;null!==c&&e.then(c);Ki(b,d,a,e._onCommit);return e};
Pi.prototype.createBatch=function(){var a=new Ni(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime>=b;)c=d,d=d._next;a._next=d;null!==c&&(c._next=a)}return a};function Qi(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}Gb=Gi;Hb=Ii;Ib=function(){W||0===gi||(Yh(gi,!1),gi=0)};
function Ri(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new Pi(a,!1,b)}
function Si(a,b,c,d,e){var f=c._reactRootContainer;if(f){if("function"===typeof e){var g=e;e=function(){var a=Li(f._internalRoot);g.call(a)}}null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)}else{f=c._reactRootContainer=Ri(c,d);if("function"===typeof e){var h=e;e=function(){var a=Li(f._internalRoot);h.call(a)}}Hi(function(){null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)})}return Li(f._internalRoot)}
function Ti(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;Qi(b)?void 0:x("200");return Mi(a,b,null,c)}
var Vi={createPortal:Ti,findDOMNode:function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;void 0===b&&("function"===typeof a.render?x("188"):x("268",Object.keys(a)));a=hd(b);a=null===a?null:a.stateNode;return a},hydrate:function(a,b,c){Qi(b)?void 0:x("200");return Si(null,a,b,!0,c)},render:function(a,b,c){Qi(b)?void 0:x("200");return Si(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){Qi(c)?void 0:x("200");null==a||void 0===a._reactInternalFiber?
x("38"):void 0;return Si(a,b,c,!1,d)},unmountComponentAtNode:function(a){Qi(a)?void 0:x("40");return a._reactRootContainer?(Hi(function(){Si(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return Ti.apply(void 0,arguments)},unstable_batchedUpdates:Gi,unstable_interactiveUpdates:Ii,flushSync:function(a,b){W?x("187"):void 0;var c=X;X=!0;try{return ki(a,b)}finally{X=c,Yh(1073741823,!1)}},unstable_createRoot:Ui,unstable_flushControlled:function(a){var b=
X;X=!0;try{ki(a)}finally{(X=b)||W||Yh(1073741823,!1)}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[Ia,Ja,Ka,Ba.injectEventPluginsByName,pa,Qa,function(a){ya(a,Pa)},Eb,Fb,Dd,Da]}};function Ui(a,b){Qi(a)?void 0:x("299","unstable_createRoot");return new Pi(a,!0,null!=b&&!0===b.hydrate)}
(function(a){var b=a.findFiberByHostInstance;return Te(n({},a,{overrideProps:null,currentDispatcherRef:Tb.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=hd(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null}}))})({findFiberByHostInstance:Ha,bundleType:0,version:"16.8.6",rendererPackageName:"react-dom"});var Wi={default:Vi},Xi=Wi&&Vi||Wi;module.exports=Xi.default||Xi;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(14);
} else {}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** @license React v0.13.6
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});var d=null,e=!1,g=3,k=-1,l=-1,m=!1,n=!1;function p(){if(!m){var a=d.expirationTime;n?q():n=!0;r(t,a)}}
function u(){var a=d,b=d.next;if(d===b)d=null;else{var c=d.previous;d=c.next=b;b.previous=c}a.next=a.previous=null;c=a.callback;b=a.expirationTime;a=a.priorityLevel;var f=g,Q=l;g=a;l=b;try{var h=c()}finally{g=f,l=Q}if("function"===typeof h)if(h={callback:h,priorityLevel:a,expirationTime:b,next:null,previous:null},null===d)d=h.next=h.previous=h;else{c=null;a=d;do{if(a.expirationTime>=b){c=a;break}a=a.next}while(a!==d);null===c?c=d:c===d&&(d=h,p());b=c.previous;b.next=c.previous=h;h.next=c;h.previous=
b}}function v(){if(-1===k&&null!==d&&1===d.priorityLevel){m=!0;try{do u();while(null!==d&&1===d.priorityLevel)}finally{m=!1,null!==d?p():n=!1}}}function t(a){m=!0;var b=e;e=a;try{if(a)for(;null!==d;){var c=exports.unstable_now();if(d.expirationTime<=c){do u();while(null!==d&&d.expirationTime<=c)}else break}else if(null!==d){do u();while(null!==d&&!w())}}finally{m=!1,e=b,null!==d?p():n=!1,v()}}
var x=Date,y="function"===typeof setTimeout?setTimeout:void 0,z="function"===typeof clearTimeout?clearTimeout:void 0,A="function"===typeof requestAnimationFrame?requestAnimationFrame:void 0,B="function"===typeof cancelAnimationFrame?cancelAnimationFrame:void 0,C,D;function E(a){C=A(function(b){z(D);a(b)});D=y(function(){B(C);a(exports.unstable_now())},100)}
if("object"===typeof performance&&"function"===typeof performance.now){var F=performance;exports.unstable_now=function(){return F.now()}}else exports.unstable_now=function(){return x.now()};var r,q,w,G=null;"undefined"!==typeof window?G=window:"undefined"!==typeof global&&(G=global);
if(G&&G._schedMock){var H=G._schedMock;r=H[0];q=H[1];w=H[2];exports.unstable_now=H[3]}else if("undefined"===typeof window||"function"!==typeof MessageChannel){var I=null,J=function(a){if(null!==I)try{I(a)}finally{I=null}};r=function(a){null!==I?setTimeout(r,0,a):(I=a,setTimeout(J,0,!1))};q=function(){I=null};w=function(){return!1}}else{"undefined"!==typeof console&&("function"!==typeof A&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),
"function"!==typeof B&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));var K=null,L=!1,M=-1,N=!1,O=!1,P=0,R=33,S=33;w=function(){return P<=exports.unstable_now()};var T=new MessageChannel,U=T.port2;T.port1.onmessage=function(){L=!1;var a=K,b=M;K=null;M=-1;var c=exports.unstable_now(),f=!1;if(0>=P-c)if(-1!==b&&b<=c)f=!0;else{N||(N=!0,E(V));K=a;M=b;return}if(null!==a){O=!0;try{a(f)}finally{O=!1}}};
var V=function(a){if(null!==K){E(V);var b=a-P+S;b<S&&R<S?(8>b&&(b=8),S=b<R?R:b):R=b;P=a+S;L||(L=!0,U.postMessage(void 0))}else N=!1};r=function(a,b){K=a;M=b;O||0>b?U.postMessage(void 0):N||(N=!0,E(V))};q=function(){K=null;L=!1;M=-1}}exports.unstable_ImmediatePriority=1;exports.unstable_UserBlockingPriority=2;exports.unstable_NormalPriority=3;exports.unstable_IdlePriority=5;exports.unstable_LowPriority=4;
exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=g,f=k;g=a;k=exports.unstable_now();try{return b()}finally{g=c,k=f,v()}};exports.unstable_next=function(a){switch(g){case 1:case 2:case 3:var b=3;break;default:b=g}var c=g,f=k;g=b;k=exports.unstable_now();try{return a()}finally{g=c,k=f,v()}};
exports.unstable_scheduleCallback=function(a,b){var c=-1!==k?k:exports.unstable_now();if("object"===typeof b&&null!==b&&"number"===typeof b.timeout)b=c+b.timeout;else switch(g){case 1:b=c+-1;break;case 2:b=c+250;break;case 5:b=c+1073741823;break;case 4:b=c+1E4;break;default:b=c+5E3}a={callback:a,priorityLevel:g,expirationTime:b,next:null,previous:null};if(null===d)d=a.next=a.previous=a,p();else{c=null;var f=d;do{if(f.expirationTime>b){c=f;break}f=f.next}while(f!==d);null===c?c=d:c===d&&(d=a,p());
b=c.previous;b.next=c.previous=a;a.next=c;a.previous=b}return a};exports.unstable_cancelCallback=function(a){var b=a.next;if(null!==b){if(b===a)d=null;else{a===d&&(d=b);var c=a.previous;c.next=b;b.previous=c}a.next=a.previous=null}};exports.unstable_wrapCallback=function(a){var b=g;return function(){var c=g,f=k;g=b;k=exports.unstable_now();try{return a.apply(this,arguments)}finally{g=c,k=f,v()}}};exports.unstable_getCurrentPriorityLevel=function(){return g};
exports.unstable_shouldYield=function(){return!e&&(null!==d&&d.expirationTime<l||w())};exports.unstable_continueExecution=function(){null!==d&&p()};exports.unstable_pauseExecution=function(){};exports.unstable_getFirstCallbackNode=function(){return d};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(17);

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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "body { \n    color: #d9d9d9;\n    font-family: Arial, sans-serif, Georgia, serif;\n}\n\nul {\n    border: 1px #404040 solid;\n}\n\nli , label, p {\n    font-size: 11px;\n}\n\nh4, h5, h6 {\n    border-bottom: 1px solid #333333;\n}\n\ninput, textarea { \n    font-size: 11px;\n    background: #2b2b2b;\n    color: #d9d9d9;\n    opacity: 0.75;\n    vertical-align: bottom;\n}\n\ninput[type=\"text\"] {\n    -webkit-appearance: textarea;\n    color: rgba(255,255,255,0.5);\n    border-color: rgba(0,0,0,0.9);\n    border-width: 1px;\n    padding: 7px;\n}\n\nul label input {\n    width: 10px;\n}\n\nul, li {\n    padding-left: 5px;\n    margin-top: 0px;\n    margin-bottom: 0px;\n}\n\nbutton {\n    color: rgba(255,255,255,0.5);\n    border-color: rgba(0,0,0,0.9);\n    border-width: 1px;\n    padding: 7px;\n    background-color: #343a40;\n    margin-left: 4px;\n}\n\nbutton i{\n    padding-right:4px;\n}\n\nbutton:hover {\n    color: #fff;\n    background: rgb(43, 43, 43);\n}\n\nul,li, ul label {\n    color: rgba(255,255,255,0.5);\n}\n\nul label:hover, li:hover, .content:hover{\n    color: #fff;\n    background: rgb(43, 43, 43);\n}\n\n#index{\n    margin:-4px;\n}", ""]);



/***/ }),
/* 18 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(20);

var _Asset = __webpack_require__(22);

var _Asset2 = _interopRequireDefault(_Asset);

var _Reducer = __webpack_require__(25);

var _db = __webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Styles.

// Components.

// Events.

// Db utils.

var Assets = function (_Component) {
    _inherits(Assets, _Component);

    function Assets(props) {
        _classCallCheck(this, Assets);

        var _this = _possibleConstructorReturn(this, (Assets.__proto__ || Object.getPrototypeOf(Assets)).call(this, props));

        _this.state = {
            class: "drop_zone",
            imageURL: "",
            assets: [],
            selectedAsset: ""
        };
        _this.writeToDB = _db.writeToDB.bind(_this);
        return _this;
    }

    _createClass(Assets, [{
        key: "appendToBody",
        value: function appendToBody(file) {
            var bin = this.result;
            var newFile = document.createElement('div');
            newFile.innerHTML = 'Loaded : ' + file.name + ' size ' + file.size + ' B';
            document.body.appendChild(newFile);

            var img = document.createElement("img");
            img.file = file;
            img.src = bin;
            newFile.appendChild(img);
        }
    }, {
        key: "updatedSelected",
        value: function updatedSelected(e) {
            var assetName = e.target.getAttribute("data-name");
            this.setState({
                selectedAsset: assetName
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var assets = this.state.assets.map(function (asset) {
                return _react2.default.createElement(_Asset2.default, { asset: asset, selected: _this2.state.selectedAsset, onSelected: _this2.updatedSelected.bind(_this2) });
            });
            return _react2.default.createElement(
                "div",
                { className: "elements" },
                _react2.default.createElement(
                    "div",
                    { className: "container elements-tab" },
                    _react2.default.createElement(
                        "div",
                        { className: "title" },
                        "Assets"
                    ),
                    _react2.default.createElement(
                        "button",
                        { onClick: _db.fetchFromDB.bind(this) },
                        "Load Assets"
                    ),
                    _react2.default.createElement(
                        "div",
                        {
                            className: this.state.class,
                            onDrop: _Reducer.dropHandler.bind(this),
                            onDragOver: _Reducer.dragOverHandler.bind(this),
                            onDragLeave: _Reducer.dragLeaveHandler.bind(this) },
                        _react2.default.createElement(
                            "p",
                            null,
                            "Drag one or more files to this Drop Zone ..."
                        )
                    ),
                    assets
                )
            );
        }
    }]);

    return Assets;
}(_react.Component);

exports.default = Assets;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(21);

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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".drop_zone {\n      border: 1px lightgray dashed;\n      width:  200px;\n      height: 100px;\n  }\n\n  .drag_over {\n    border: 2px lightgray dashed;\n    width:  200px;\n    height: 100px;\n  }\n\n  .tinyThumbnail,\n  .tinyThumbnail img{\n    width:200px;\n  }", ""]);



/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Asset = function (_Component) {
    _inherits(Asset, _Component);

    function Asset(props) {
        _classCallCheck(this, Asset);

        var _this = _possibleConstructorReturn(this, (Asset.__proto__ || Object.getPrototypeOf(Asset)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(Asset, [{
        key: "render",
        value: function render() {
            // Remove this.props.index, instead use this element instance index. Removes duplicate code
            return _react2.default.createElement(
                "div",
                { className: this.props.selected === this.props.asset.name ? "tinyThumbnail selectedAsset" : "tinyThumbnail" },
                _react2.default.createElement("img", { src: this.props.asset.result, "data-name": this.props.asset.name, onClick: this.props.onSelected })
            );
        }
    }]);

    return Asset;
}(_react.Component);

exports.default = Asset;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(24);

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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".selected, .green {\n    border: 1px solid green;\n    background: rgb(43, 43, 43);\n}\n\n.background {\n    background: rgb(64, 64, 64);\n    border-bottom: 1px solid #333333;\n}\n\n.component {\n    display:flex;\n    justify-content: space-between;\n}\n\n.component .componentName{\n    padding:7px;\n}\n\n.thumbnail {\n    width: 50px;\n}\n\n.selectedAsset{\n    border: 1px lightgray dashed;\n}", ""]);



/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dropHandler = dropHandler;
exports.dragOverHandler = dragOverHandler;
exports.dragLeaveHandler = dragLeaveHandler;

var _indexeDB = __webpack_require__(26);

var _indexeDB2 = _interopRequireDefault(_indexeDB);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function dropHandler(ev) {
    var _this = this;

    ev.preventDefault();

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
        class: "drop_zone"
    });
}

function dragOverHandler(ev) {
    console.log('File(s) in drop zone');

    this.setState({
        class: "drag_over"
    });

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
}

function dragLeaveHandler(e) {
    this.setState({
        class: "drop_zone"
    });
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _MindexedDB = __webpack_require__(27);

window.iDB = "";


window.onload = function () {
    window.iDB = new _MindexedDB.MindexedDB("uiEditor", { uiEditor: "name" });
    // iDB.put("uiEditor", {data:123})
    window.iDB.connect();
};

exports.default = iDB;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.MindexedDB = MindexedDB;
// taken from https://github.com/TomAnthony/Min.dexedDB/blob/master/mindexeddb.js
function MindexedDB(databaseName, objectStores) {
	this.idb = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
	this.db = databaseName;
	this.objStrs = Array.isArray(objectStores) ? objectStores : [objectStores];
	this.store = "uiEditor";

	this.connect = function (key) {
		var conn = this.idb.open(this.db, 1);
		conn.mdb = this;

		conn.onupgradeneeded = function () {
			var dbl = conn.result;
			this.mdb.objStrs.forEach(function (element) {
				var store = Object.entries(element);
				dbl.createObjectStore(store[0][0], { keyPath: store[0][1] });
			});
		};

		return new Promise(function (resolve, reject) {
			conn.onsuccess = function () {
				this.mdb.db = conn.result;
				resolve(this.mdb.db);
			};
			conn.onerror = function () {
				reject(conn.error);
			};
		});
	};

	this.cs = function (store) {
		if (this.db === undefined) throw "[Min.dexedDB] DB not open.";
		var tx = this.db.transaction(store, "readwrite");
		return tx.objectStore(store);
	};

	this.put = function (obj) {
		var os = this.cs(this.store);

		return new Promise(function (resolve, reject) {
			var response = os.put(obj);
			response.onsuccess = function () {
				resolve(response.result);
			};
			response.onerror = function () {
				reject(response.error);
			};
		});
	};

	this.get = function (key) {
		var os = this.cs(this.store);

		return new Promise(function (resolve, reject) {
			var response = os.get(key);
			response.onsuccess = function () {
				resolve(response.result);
			};
			response.onerror = function () {
				reject(response.error);
			};
		});
	};

	this.getAll = function () {
		var os = this.cs(this.store);

		return new Promise(function (resolve, reject) {
			var response = os.getAll();
			response.onsuccess = function () {
				resolve(response.result);
			};
			response.onerror = function () {
				reject(response.error);
			};
		});
	};

	this.close = function () {
		this.db.close();
	};
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.writeToDB = writeToDB;
exports.fetchFromDB = fetchFromDB;
function writeToDB(result, name) {
    var _this = this;

    window.iDB.get(name).then(function (data) {
        var img = document.createElement("img");
        img.href = data.result;
        _this.setState({
            imageURL: data.result
        });
    });
    window.iDB.put({ name: name, result: result });
}

function fetchFromDB() {
    var _this2 = this;

    window.iDB.getAll().then(function (data) {
        // save it to window
        window.assets = {};
        data.forEach(function (image) {
            window.assets[image.name] = image.result;
        });

        _this2.setState({
            assets: data
        });
    });
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(30);

var _Folders = __webpack_require__(32);

var _Folders2 = _interopRequireDefault(_Folders);

var _Events = __webpack_require__(50);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Styles.

// Components.

// Events.

var Components = function (_Component) {
    _inherits(Components, _Component);

    function Components(props) {
        _classCallCheck(this, Components);

        var _this = _possibleConstructorReturn(this, (Components.__proto__ || Object.getPrototypeOf(Components)).call(this, props));

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
            this.setState({ folders: folders });
        }
    }, {
        key: "addComponent",
        value: function addComponent() {
            this.props.onOpenEditor();
        }
    }, {
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "div",
                { className: "elements" },
                _react2.default.createElement(
                    "div",
                    { className: "container elements-tab" },
                    _react2.default.createElement(
                        "div",
                        { className: "title" },
                        "Components"
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "Controls" },
                        _react2.default.createElement(
                            "button",
                            { onClick: this.addComponent.bind(this) },
                            _react2.default.createElement("i", { className: "fa fa-edit" }),
                            "Add/Edit Component"
                        ),
                        _react2.default.createElement(
                            "button",
                            { onClick: this.addFolder.bind(this) },
                            _react2.default.createElement("i", { className: "fa fa-folder" }),
                            "Add Folder"
                        )
                    ),
                    _react2.default.createElement(
                        "ul",
                        null,
                        _react2.default.createElement(_Folders2.default, {
                            key: Math.ceil(Math.random() * 1000),
                            components: this.state.components,
                            folders: this.state.folders,
                            selectedComponent: this.props.selectedComponent,
                            onFoldersUpdate: this.props.onFoldersUpdate,
                            onSelection: this.props.onSelection,
                            onDeleteComponent: _Events.onDeleteComponent.bind(this),
                            onDeleteFolder: _Events.onDeleteFolder.bind(this)
                        })
                    )
                )
            );
        }
    }]);

    return Components;
}(_react.Component);

exports.default = Components;

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
exports.push([module.i, ".override {\n    line-height: 0%;\n}\n\ntextarea {\n    height: 70px;\n    width: 450px;\n}\n\n.elements{\n    position: fixed;\n}\n\n.title{\n    margin-top: 15px;\n    margin-bottom: 11px;\n    color: rgba(255,255,255,0.5);\n    background: rgb(64, 64, 64);\n    margin-top: 10px;\n    padding: 5px;\n}\n\n.elements-tab {\n    left:10px;\n}\n\n.Controls{\n    padding-bottom:8px;\n}", ""]);



/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(33);

var _processFolder = __webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Styles.

var Folders = function (_Component) {
    _inherits(Folders, _Component);

    function Folders(props) {
        _classCallCheck(this, Folders);

        var _this = _possibleConstructorReturn(this, (Folders.__proto__ || Object.getPrototypeOf(Folders)).call(this, props));

        _this.state = {
            components: _this.props.components,
            folders: _this.props.folders
        };
        return _this;
    }

    _createClass(Folders, [{
        key: "checkFolder",
        value: function checkFolder(data) {
            var folders = Array.from(this.state.folders);
            var folder = folders.find(function (folder) {
                return folder.name === data.name;
            });
            var emptyFolderIndex = folders.findIndex(function (folder) {
                return folder.type === "NewFolder";
            });
            if (emptyFolderIndex !== -1) {
                // Delete the newFolder
                folders.splice(emptyFolderIndex, 1);
            }
            console.log(folders);
            // Check if it is newly created folder 
            if (!folder) {
                console.log("Folder not found, adding " + JSON.stringify(data) + "to list of folders " + JSON.stringify(folders));
                folders.push(data);
            }
            // Update existing one
            else {
                    console.log("Folder found, updating the folder content from " + folder.contents + " to " + data.contents);
                    folder.contents = data.contents;

                    // Makes sure that contents are not duplicated in other folders.
                    folders.forEach(function (currentFolder) {

                        if (currentFolder.name !== data.name) {
                            data.contents.forEach(function (content) {
                                var index = currentFolder.contents.findIndex(function (item) {
                                    return item === content;
                                });
                                index !== -1 ? currentFolder.contents.splice(index, 1) : null;
                            });
                        }
                    });
                }

            console.log(folders);

            this.props.onFoldersUpdate(folders);
        }
    }, {
        key: "render",
        value: function render() {
            return (0, _processFolder.folderStructure)(this.props, this.checkFolder.bind(this));
        }
    }]);

    return Folders;
}(_react.Component);

exports.default = Folders;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(34);

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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "input.folder{\n    border:none;\n    background:none;\n}\n\n.newFolder{\n    user-select: none;\n}\n\n.newFolder i{\n    color: rgba(255,255,255,0.5);\n    border-color: rgba(0,0,0,0.9);\n    border-width: 1px;\n    padding: 7px;\n}\n\n.newFolder.dragOver i{\n    animation: blink .5s infinite;\n}\n\n@keyframes blink{\n    from {    \n        color: rgba(255,255,255,0.5);\n    }\n    to {\n        color: white;\n    }\n}\n.fa.fa-folder ~ ul {\n    display: none;\n}\n.fa.fa-folder-open ~ ul {\n    display:block;\n}", ""]);



/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.folderStructure = folderStructure;

var _Folder = __webpack_require__(36);

var _Folder2 = _interopRequireDefault(_Folder);

var _Componentt = __webpack_require__(46);

var _Componentt2 = _interopRequireDefault(_Componentt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selectedComponent = void 0,
    onSelection = void 0,
    onFolderUpdate = void 0,
    onDeleteComponent = void 0,
    components = void 0,
    onDeleteFolder = void 0;

function initialiseProps(props, checkFolder) {
    selectedComponent = props.selectedComponent;
    onSelection = props.onSelection;
    components = props.components;
    onFolderUpdate = checkFolder;
    onDeleteComponent = props.onDeleteComponent;
    onDeleteFolder = props.onDeleteFolder;
}

function processFolder(folder, i) {
    var contents = folder.contents;

    return React.createElement(_Folder2.default, {
        key: i,
        folder: folder,
        contents: contents.map(processContent),
        onFolderUpdate: onFolderUpdate,
        onDeleteFolder: onDeleteFolder });
}

function processContent(content, i) {

    // Check if content is a component name.
    if (typeof content === "string") {

        return React.createElement(_Componentt2.default, {
            key: i,
            component: components.find(function (component) {
                return component.name === content;
            }),
            selectedComponent: selectedComponent,
            onSelectionChange: onSelection,
            onDeleteComponent: onDeleteComponent
        });
    }
    // else its a folder type.
    else {
            var folder = content;
            return React.createElement(_Folder2.default, {
                key: i,
                folder: folder,
                contents: folder.contents.map(processContent),
                onFolderUpdate: onFolderUpdate,
                onDeleteFolder: onDeleteFolder });
        }
}

function folderStructure(props, onFolderUpdate) {
    var folders = props.folders;

    initialiseProps(props, onFolderUpdate);

    return folders.map(processFolder);
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(37);

var _NewFolder = __webpack_require__(39);

var _NewFolder2 = _interopRequireDefault(_NewFolder);

var _Reducer = __webpack_require__(42);

var _Events = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Styles.

var Folder = function (_Component) {
    _inherits(Folder, _Component);

    function Folder(props) {
        _classCallCheck(this, Folder);

        var _this = _possibleConstructorReturn(this, (Folder.__proto__ || Object.getPrototypeOf(Folder)).call(this, props));

        _this.state = {
            iconStatus: "fa fa-folder",
            folderClass: "newFolder",
            name: _this.props.folder.name,
            contents: _this.props.folder.contents,
            type: _this.props.folder.type,
            status: _this.props.folder.status
        };
        return _this;
    }

    _createClass(Folder, [{
        key: "newFolder",
        value: function newFolder(folder) {
            this.props.onFolderUpdate(folder);
        }
    }, {
        key: "render",
        value: function render() {

            var folder = this.props.folder;
            var contents = this.props.contents;
            var iconStatus = this.state.status === "open" ? "fa fa-folder-open" : "fa fa-folder";
            if (folder.type == "NewFolder") {
                return _react2.default.createElement(_NewFolder2.default, { onNewFolder: this.newFolder.bind(this) });
            }
            if (folder.type == "folder") {
                return _react2.default.createElement(
                    "div",
                    {
                        className: this.state.folderClass,
                        "data-folder-name": folder.name,
                        draggable: "true",
                        onDrop: _Events.dropHandler.bind(this),
                        onDragOver: _Events.dragOverHandler.bind(this),
                        onDragLeave: _Events.dragLeaveHandler.bind(this),
                        onDragStart: _Events.onDragStart.bind(this) },
                    _react2.default.createElement("i", { className: iconStatus, onClick: _Reducer.toggleFolder.bind(this) }),
                    _react2.default.createElement("input", { type: "text", className: "folder", placeholder: "Enter folder name", readOnly: true, value: this.state.name }),
                    _react2.default.createElement(
                        "button",
                        { onClick: _Reducer.deleteFolder.bind(this) },
                        _react2.default.createElement("i", { className: "fa fa-trash" }),
                        "Delete"
                    ),
                    _react2.default.createElement(
                        "ul",
                        null,
                        contents
                    )
                );
            }
            if (folder.type == "noFolder") {
                return _react2.default.createElement(
                    "div",
                    {
                        className: this.state.folderClass,
                        "data-folder-name": folder.name,
                        draggable: "true",
                        onDrop: _Events.dropHandler.bind(this),
                        onDragOver: _Events.dragOverHandler.bind(this),
                        onDragLeave: _Events.dragLeaveHandler.bind(this),
                        onDragStart: _Events.onDragStart.bind(this) },
                    _react2.default.createElement(
                        "button",
                        { onClick: _Reducer.deleteFolder.bind(this) },
                        _react2.default.createElement("i", { className: "fa fa-trash" }),
                        "Delete"
                    ),
                    _react2.default.createElement(
                        "ul",
                        null,
                        contents
                    )
                );
            }
        }
    }]);

    return Folder;
}(_react.Component);

exports.default = Folder;

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
exports.push([module.i, "input.folder{\n    border:none;\n    background:none;\n}\n\n.newFolder{\n    user-select: none;\n}\n\n.newFolder i{\n    color: rgba(255,255,255,0.5);\n    border-color: rgba(0,0,0,0.9);\n    border-width: 1px;\n    padding: 7px;\n}\n\n.newFolder.dragOver i{\n    animation: blink .5s infinite;\n}\n\n@keyframes blink{\n    from {    \n        color: rgba(255,255,255,0.5);\n    }\n    to {\n        color: white;\n    }\n}\n.fa.fa-folder ~ ul {\n    display: none;\n}\n.fa.fa-folder-open ~ ul {\n    display:block;\n}", ""]);



/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(40);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Styles.

// Components.

var NewFolder = function (_Component) {
    _inherits(NewFolder, _Component);

    function NewFolder(props) {
        _classCallCheck(this, NewFolder);

        var _this = _possibleConstructorReturn(this, (NewFolder.__proto__ || Object.getPrototypeOf(NewFolder)).call(this, props));

        _this.state = {
            status: "fa fa-folder",
            newFolderClass: "newFolder",
            folderName: ""
        };
        return _this;
    }

    _createClass(NewFolder, [{
        key: "folderNameChanged",
        value: function folderNameChanged(e) {
            this.setState({
                folderName: e.currentTarget.value
            });
        }
    }, {
        key: "saveFolderNameOnEnter",
        value: function saveFolderNameOnEnter(e) {
            if (e.key === "Enter") {
                this.props.onNewFolder({
                    name: this.state.folderName,
                    contents: [],
                    type: "folder",
                    status: "closed"
                });
            }
        }
    }, {
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "div",
                { className: this.state.newFolderClass },
                _react2.default.createElement("i", { className: this.state.status }),
                _react2.default.createElement("input", {
                    type: "text",
                    className: "folder",
                    autoFocus: true,
                    placeholder: "Enter folder name",
                    value: this.state.folderName,
                    onChange: this.folderNameChanged.bind(this),
                    onKeyPress: this.saveFolderNameOnEnter.bind(this) })
            );
        }
    }]);

    return NewFolder;
}(_react.Component);

exports.default = NewFolder;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(41);

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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "input.folder{\n    border:none;\n    background:none;\n}\n\n.newFolder i{\n    color: rgba(255,255,255,0.5);\n    border-color: rgba(0,0,0,0.9);\n    border-width: 1px;\n    padding: 7px;\n}\n\n.newFolder.dragOver i{\n    animation: blink .5s infinite;\n}\n\n@keyframes blink{\n    from {    \n        color: rgba(255,255,255,0.5);\n    }\n    to {\n        color: green;\n    }\n}", ""]);



/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.deleteFolder = deleteFolder;
exports.toggleFolder = toggleFolder;
function deleteFolder(e) {
    this.props.onDeleteFolder("CONTENTS", this.state.name);
}

function openFolder() {
    this.setState({
        status: "open"
    });
}

function closeFolder() {
    this.setState({
        status: "closed"
    });
}

function toggleFolder() {
    console.log("CLCIEKD");
    if (this.state.status === "closed") {
        openFolder.call(this);
    } else {
        closeFolder.call(this);
    }
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _React = __webpack_require__(7);

function createComponent(component) {

    var componentString = (0, _React.convertToReact)(component);

    // eval does not evaluate class if not exclosed in paranthesis.
    return eval(Babel.transform(componentString, { presets: ['react'], plugins: ["transform-es2015-classes"] }).code);
}

module.exports = {
    createComponent: createComponent
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.readData = readData;
exports.writeData = writeData;
exports.readComponent = readComponent;
exports.writeComponent = writeComponent;
exports.popHistory = popHistory;

var _Sample = __webpack_require__(45);

function pushHistory(components) {

    window.editorHistory = readData("ui-editor-history");
    editorHistory.push(components);
    localStorage.setItem("ui-editor-history", JSON.stringify(editorHistory));
}

// If empty, return empty array.

function readData(key) {

    if (key === "ui-editor") {
        if (!window.components) {
            window.components = JSON.parse(localStorage.getItem(key)) || _Sample.sample;
        }
        return JSON.parse(JSON.stringify(window.components));
    }
    if (key === "ui-editor-history") {
        var history = localStorage.getItem(key);

        if (history) return JSON.parse(history);
    }
    if (key === "folders") {
        var folders = localStorage.getItem(key);
        var componentNames = window.components.map(function (component) {
            return component.name;
        });
        return folders ? JSON.parse(folders) : [{
            type: "noFolder",
            contents: componentNames,
            name: "",
            status: "open"
        }];
    }

    return [];
}

function writeData(key, components, noPush) {

    if (key == "folders") {
        console.log("writing folders");
        localStorage.setItem(key, JSON.stringify(components));
    }
    if (key == "ui-editor") {
        console.log("WRITE");
        window.components = components;
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

function popHistory() {

    var editorHistory = readData("ui-editor-history");
    if (!editorHistory) {
        return;
    }

    var lastItem = editorHistory.pop();

    if (!editorHistory) {
        return;
    }

    writeData("ui-editor-history", editorHistory, true);

    writeData("ui-editor", lastItem, true);
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var sample = [{
    "name": "ForgotPassword",
    "markup": "<div className=\"vsButton\"><button id=\"f123\">Forgot Password</button></div>",
    "events": [{
        "name": "onClick",
        "reducer": "state.show",
        "publishable": true,
        "publishName": "onPasswordForgotten",
        "id": "f123"
    }],
    "state": "{\"show\":\"false\"}",
    "style": ".vsButton{\nfont-family: BentonSansBook,Helvetica,Arial,sans-serif;\ncolor: rgb(0, 0, 0);\n}\n\n\n.vsButton button{\nborder-color: #bf215d;\n    color: #fff;\n    background: #ef5f96;\nborder: 1px solid;\n}\n\n.vsButton button:hover{\nborder-color: #bf215d;\n}",
    "children": [],
    "id": 218,
    "config": "{}",
    "idMarkup": "<div className=\"vsButton\" data-uuid=\"0\"><button id=\"f123\" data-uuid=\"1\">Forgot Password</button></div>"
}, {
    "name": "Modal",
    "markup": "<div class=\"modal\">\n<header>\n  <h3>Forgot Password</h3>\n    <button className=\"closeButton\" id=\"x\">x</button>\n</header>\n<section class=\"content\"><PrivacyAndPolicy></PrivacyAndPolicy>\n \n</section>\n<footer>footer</footer>\n</div>",
    "events": [{
        "name": "onClick",
        "reducer": "state.name=\"\";",
        "publishable": true,
        "publishName": "onCloseModal",
        "id": "x"
    }],
    "state": "{}",
    "style": ".modal{\n  width:400px;\n  font-size:22px;\n  position:relative;\nbackground-color: white;\ncolor: black;\n  font-family: BentonSansLight,Helvetica,Arial,sans-serif;\n  font-weight:400;\n    line-height: 17px;\n    letter-spacing: .04em;\n    text-transform: inherit;\n    font-weight: 400;\n\n}\n\n.modal h3{\n  padding:1rem;\nfont-size:26px;\nfont-weight: 400;\n}\n\n.modal .content{\npadding:1rem;\nfont-weight: 400;\n}\n\n.modal footer{\npadding:1rem;\n  border:1px solid black;\nfont-weight: 400;\n}\n.modal header{\n  border:1px solid black;\nfont-weight: 400;\n}\n\n.modal .closeButton{\n  position: absolute;\n  right: 10px;\n  top: 20px;\n}\n\n.modal .content{\n    border:1px solid black;\nfont-weight: 400;\n}",
    "children": [],
    "id": 191,
    "config": "{}",
    "idMarkup": "<div class=\"modal\" data-uuid=\"0\">\n<header data-uuid=\"1\">\n  <h3 data-uuid=\"2\">Forgot Password</h3>\n    <button className=\"closeButton\" id=\"x\" data-uuid=\"3\">x</button>\n</header>\n<section class=\"content\" data-uuid=\"4\"><PrivacyAndPolicy data-uuid=\"5\"></PrivacyAndPolicy>\n \n</section>\n<footer data-uuid=\"6\">footer</footer>\n</div>"
}, {
    "name": "CancelButton",
    "markup": "<div className=\"vsButton\"><button>{state.cancelButton}</button></div>",
    "events": [],
    "state": "{\"cancelButton\":\"Cancel\"}",
    "style": ".vsButton{\nfont-family: BentonSansBook,Helvetica,Arial,sans-serif;\ncolor: rgb(0, 0, 0);\n}\n\n\n.vsButton button{\nborder-color: #bf215d;\n    color: #fff;\n    background: #ef5f96;\nborder: 1px solid;\npadding: .5rem 2rem;\n}\n\n.vsButton button:hover{\nborder-color: #bf215d;\n}",
    "children": [],
    "id": 174,
    "config": "{}",
    "idMarkup": "<div className=\"vsButton\" data-uuid=\"0\"><button data-uuid=\"1\">{state.cancelButton}</button></div>"
}, {
    "name": "SubmitButton",
    "markup": "<div className=\"vsButton\"><button>{state.submitButton}</button></div>",
    "events": [],
    "state": "{\"submitButton\":\"Submit\"}",
    "style": ".vsButton{\nfont-family: BentonSansBook,Helvetica,Arial,sans-serif;\ncolor: rgb(0, 0, 0);\n}\n\n\n.vsButton button{\nborder-color: #bf215d;\n    color: #fff;\n    background: #ef5f96;\nborder: 1px solid;\npadding: .5rem 2rem;\n}\n\n.vsButton button:hover{\nborder-color: #bf215d;\n}",
    "children": [],
    "id": 134,
    "config": "{}",
    "idMarkup": "<div className=\"vsButton\" data-uuid=\"0\"><button data-uuid=\"1\">{state.submitButton}</button></div>"
}, {
    "name": "PrivacyAndPolicy",
    "markup": "<div class=\"privacyPolicy\">\n  Please enter the email address you used to create your account and we will send you a link to reset your password. See Privacy Policy\n</div>",
    "events": [],
    "state": "{}",
    "style": ".privacyPolicy{\nfont-family: BentonSansBook,Helvetica,Arial,sans-serif;\nfont-size: 11px;\n    line-height: 17px;\n    letter-spacing: .04em;\n    text-transform: inherit;\n    font-weight: 400;\n}",
    "children": [],
    "id": 843,
    "config": "{}",
    "idMarkup": "<div class=\"privacyPolicy\" data-uuid=\"0\">\n  Please enter the email address you used to create your account and we will send you a link to reset your password. See Privacy Policy\n</div>"
}, {
    "name": "TermsAndService",
    "markup": "<div class=\"privacyPolicy\">\n{state.variant}\n</div>",
    "events": [],
    "state": "{\"variant\":\"This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.\"}",
    "style": ".privacyPolicy{\nfont-family: BentonSansBook,Helvetica,Arial,sans-serif;\nfont-size: 11px;\n    line-height: 17px;\n    letter-spacing: .04em;\n    text-transform: inherit;\n    font-weight: 400;\n}",
    "children": [],
    "id": 796,
    "config": "{}",
    "idMarkup": "<div class=\"privacyPolicy\" data-uuid=\"0\">\n{state.variant}\n</div>"
}, {
    "name": "Form",
    "markup": "<form className=\"vsfrm\">\n</form>",
    "events": [],
    "state": "{}",
    "style": ".vsfrm{\nheight:400px;\nwidth:400px;\n}",
    "children": [],
    "id": 390,
    "config": "{}",
    "idMarkup": "<form className=\"vsfrm\" data-uuid=\"0\">\n</form>"
}, {
    "name": "EmailInput",
    "markup": "<span className=\"emailInput\">\n<input id=\"input\" className=\"email\" type=\"email\" value={state.email} placeholder=\"Email Address *\"/>\n</span>",
    "events": [{
        "name": "onChange",
        "reducer": "state.email = e.target.value",
        "publishable": "",
        "publishName": "",
        "id": "input"
    }],
    "state": "{}",
    "style": ".emailInput .email{\npadding: .75rem;\nborder: 1px solid #e1e1e1;\nfont-family: BentonSansBook,Helvetica,Arial,sans-serif;\n    font-size: 16px;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    width: 100%;\n    border-radius: 0;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n\n}",
    "children": [],
    "id": 991,
    "config": "{}",
    "idMarkup": "<span className=\"emailInput\" data-uuid=\"0\">\n<input id=\"input\" className=\"email\" type=\"email\" value={state.email} placeholder=\"Email Address *\"/>\n</span>"
}, {
    "name": "ResetPasswordForm",
    "markup": "<form><TermsAndService></TermsAndService><EmailInput></EmailInput><SubmitButton></SubmitButton><CancelButton></CancelButton><TermsAndService><PrivacyAndPolicy></PrivacyAndPolicy></TermsAndService>\n</form>",
    "events": [],
    "state": "{\"variant\":\"text\"}",
    "style": "form{\nheight:400px;}",
    "children": [],
    "id": 364,
    "config": "{}",
    "idMarkup": "<form data-uuid=\"0\"><TermsAndService data-uuid=\"1\"></TermsAndService><EmailInput data-uuid=\"2\"></EmailInput><SubmitButton data-uuid=\"3\"></SubmitButton><CancelButton data-uuid=\"4\"></CancelButton><TermsAndService data-uuid=\"5\"><PrivacyAndPolicy data-uuid=\"6\"></PrivacyAndPolicy></TermsAndService>\n</form>"
}, {
    "name": "Page",
    "markup": "<div className=\"page\"><ForgotPassword></ForgotPassword><ResetPasswordModal></ResetPasswordModal></div>",
    "events": [{
        "name": "onCloseModal",
        "reducer": "state.ResetPasswordModal = [];",
        "publishable": "",
        "publishName": "",
        "id": "VariantModal"
    }, {
        "name": "onClose",
        "reducer": "state.ResetPasswordModal = [];",
        "publishable": "",
        "publishName": "",
        "id": "ResetPasswordModal"
    }, {
        "name": "onPasswordForgotten",
        "reducer": "state.ResetPasswordModal =[{title: \"Forgot Password\",\"footer\": \"Copyrigts\",\"show\": \"sd\"}]",
        "publishable": "",
        "publishName": "",
        "id": "ForgotPassword"
    }],
    "state": "{\"showModal\":false,\"list\":[1,2,3,4,5],\"ResetPasswordModal\":[]}",
    "style": ".page{\nheight: 700px;\nwidth: 500px;\n\n}",
    "children": [],
    "id": 815,
    "config": "{\"VariantModal\":{\"showHideProp\":\"showModal\",\"override\":false},\"ForgotPasswordButton\":{\"showHideProp\":\"\",\"override\":false},\"ForgotPassword\":{\"showHideProp\":\"\",\"override\":false,\"renderListProp\":\"\"},\"ResetPasswordModal\":{\"showHideProp\":\"showModal\",\"override\":true,\"renderListProp\":\"\"}}",
    "idMarkup": "<div className=\"page\" data-uuid=\"0\"><ForgotPassword data-uuid=\"1\"></ForgotPassword><ResetPasswordModal data-uuid=\"2\"></ResetPasswordModal></div>",
    "variants": [{
        "showModal": "false"
    }, {
        "showModal": "false",
        "ForgotPassword": {
            "show": "false"
        }
    }, {
        "showModal": true
    }, {
        "showModal": "true",
        "ForgotPassword": {
            "show": "false"
        }
    }, {
        "showModal": false
    }, {
        "showModal": false,
        "ForgotPassword": {
            "show": "false"
        }
    }, {
        "showModal": false,
        "VariantModal": {
            "title": "Forgot Password",
            "footer": "Copyrigts",
            "good": "hide"
        }
    }, {
        "showModal": false,
        "ResetPasswordModal": {
            "title": "Forgot Password",
            "footer": "Copyrigts",
            "show": "sd"
        }
    }, {
        "showModal": false,
        "VariantForgotPassword": {
            "show": "false",
            "variant": "text"
        }
    }, {
        "showModal": false,
        "list": [1, 2, 3, 4, 5],
        "ForgotPassword": {
            "show": "false"
        }
    }, {
        "showModal": true,
        "list": [1, 2, 3, 4, 5]
    }, {
        "showModal": false,
        "list": [1, 2, 3, 4, 5],
        "ResetPasswordModal": {
            "title": "Forgot Password",
            "footer": "Copyrigts",
            "show": "sd"
        }
    }, {
        "showModal": false,
        "list": [1, 2, 3, 4, 5]
    }]
}, {
    "name": "ResetPasswordModal",
    "markup": "<div class=\"modal\">\n<header>\n  <h3>{state.title}</h3>\n    <button id=\"close\" className=\"closeButton\">x</button>\n</header>\n<section class=\"content\"><ResetPasswordForm></ResetPasswordForm>\n</section>\n<footer>{state.footer}</footer>\n</div>",
    "events": [{
        "name": "onClick",
        "reducer": "state.show = \"sd\";",
        "publishable": true,
        "publishName": "onClose",
        "id": "close"
    }],
    "state": "{\"title\":\"Forgot Password\",\"footer\":\"Copyrigts\"}",
    "style": ".modal{\n  width:400px;\n  font-size:22px;\n  position:relative;\nbackground-color: white;\ncolor: black;\n  font-family: BentonSansLight,Helvetica,Arial,sans-serif;\n  font-weight:400;\n    line-height: 17px;\n    letter-spacing: .04em;\n    text-transform: inherit;\n    font-weight: 400;\n\n}\n\n.modal h3{\n  padding:1rem;\nfont-size:26px;\nfont-weight: 400;\n}\n\n.modal .content{\npadding:1rem;\nfont-weight: 400;\n}\n\n.modal footer{\npadding:1rem;\n  border:1px solid black;\nfont-weight: 400;\n}\n.modal header{\n  border:1px solid black;\nfont-weight: 400;\n}\n\n.modal .closeButton{\n  position: absolute;\n  right: 10px;\n  top: 20px;\n}\n\n.modal .content{\n    border:1px solid black;\nfont-weight: 400;\n}",
    "children": [],
    "id": 627,
    "config": "{}",
    "idMarkup": "<div class=\"modal\" data-uuid=\"0\">\n<header data-uuid=\"1\">\n  <h3 data-uuid=\"2\">{state.title}</h3>\n    <button id=\"close\" className=\"closeButton\" data-uuid=\"3\">x</button>\n</header>\n<section class=\"content\" data-uuid=\"4\"><ResetPasswordForm data-uuid=\"5\"></ResetPasswordForm>\n</section>\n<footer data-uuid=\"6\">{state.footer}</footer>\n</div>"
}, {
    "name": "Facebook",
    "markup": "<div className=\"facebook\"><HelloComponent><Modal><ForgotPassword></ForgotPassword></Modal></HelloComponent></div>",
    "events": [],
    "state": "{}",
    "style": ".facebook{\nbackground-image:$assets['facebook.png'];\n}",
    "children": [],
    "id": 12,
    "config": "{}",
    "idMarkup": "<div className=\"facebook\" data-uuid=\"0\"><HelloComponent data-uuid=\"1\"><Modal data-uuid=\"2\"><ForgotPassword data-uuid=\"3\"></ForgotPassword></Modal></HelloComponent></div>"
}];

module.exports = {
    sample: sample
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Events = __webpack_require__(47);

var _Events2 = __webpack_require__(6);

__webpack_require__(48);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Componentt = function (_Component) {
    _inherits(Componentt, _Component);

    function Componentt(props) {
        _classCallCheck(this, Componentt);

        var _this = _possibleConstructorReturn(this, (Componentt.__proto__ || Object.getPrototypeOf(Componentt)).call(this, props));

        _this.state = {
            selectedComponent: _this.props.selectedComponent
        };
        return _this;
    }

    _createClass(Componentt, [{
        key: "restoreClass",
        value: function restoreClass(event) {
            event.target.classList.remove("hideAdditionals");
        }
    }, {
        key: "render",
        value: function render() {

            var props = this.props;
            var selectedComponent = props.selectedComponent;
            var component = props.component;
            // Remove this.props.index, instead use this element instance index. Removes duplicate code
            return _react2.default.createElement(
                "div",
                { className: "background", draggable: "true", "data-name": component.name, onDragStart: _Events.handleDrag.bind(this), onDragEnd: this.restoreClass },
                _react2.default.createElement(
                    "li",
                    {
                        className: selectedComponent && props.component.name === selectedComponent.name ? "selected component" : "component",
                        onClick: _Events.selectionChanged.bind(this),
                        index: props.index },
                    _react2.default.createElement(
                        "span",
                        { className: "componentName" },
                        component.name
                    ),
                    _react2.default.createElement(
                        "span",
                        null,
                        _react2.default.createElement(
                            "button",
                            {
                                index: props.index,
                                onClick: _Events2.onExport.bind(null, component.name) },
                            _react2.default.createElement("i", { className: "fas fa-file-export" }),
                            "Export"
                        ),
                        _react2.default.createElement(
                            "button",
                            {
                                index: props.index,
                                onClick: props.onDeleteComponent },
                            _react2.default.createElement("i", { className: "fa fa-trash" }),
                            "Delete"
                        )
                    )
                )
            );
        }
    }]);

    return Componentt;
}(_react.Component);

exports.default = Componentt;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.selectionChanged = selectionChanged;
exports.handleDrag = handleDrag;
function selectionChanged(e) {
    this.props.onSelectionChange(e);
}

function handleDrag(e) {

    var name = event.target.getAttribute("data-name");
    event.target.classList.add("hideAdditionals");
    e.dataTransfer.setData("component-name", name);
}

window.eventCallbacks = {
    handleDrag: handleDrag
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(49);

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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".selected, .green {\n    border: 1px solid green;\n    background: rgb(43, 43, 43);\n}\n\n.background {\n    background: rgb(64, 64, 64);\n    border-bottom: 1px solid #333333;\n}\n\n.component {\n    display:flex;\n    justify-content: space-between;\n}\n\n.component .componentName{\n    padding:7px;\n}\n\n.thumbnail {\n    width: 50px;\n}\n\n.hideAdditionals span:not(.componentName){\n    display:none;\n}\n\n.hideAdditionals {\n    display: inline-block;\n}", ""]);



/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.onDeleteComponent = onDeleteComponent;
exports.onDeleteFolder = onDeleteFolder;

var _Storage = __webpack_require__(3);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function onDeleteComponent(event) {

    // stop event propagation. else onSelectionChange gets re triggered.

    event.stopPropagation();
    var componentName = event.target.parentElement.parentElement.innerText.split("\n")[0];

    if (this.state.components.find(function (component) {
        return component.name === componentName;
    }).length < 1) {
        return;
    }
    // Get all the elements
    var components = Array.from(this.state.components);

    // Find the index of element to be deleted.
    var index = components.findIndex(function (component) {
        return component.name === componentName;
    });

    // Remove the element from the list
    components.splice(index, 1);

    // Update the state with new elements.
    this.setState({
        components: components
    });

    // Persist the changes.
    (0, _Storage.writeData)("ui-editor", components);
}

function onDeleteFolder(TYPE, folderName) {
    var _noFolder$contents;

    switch (TYPE) {
        case "FOLDER":
            break;

        case "FOLDER_AND_CONTENTS":
            break;

        case "CONTENTS":
            debugger;
            var folders = Array.from(this.state.folders);
            var folderToDelete = folders.find(function (folder) {
                return folder.name === folderName;
            });
            var noFolder = folders.find(function (folder) {
                return folder.type === "noFolder";
            });
            // Push contents to "noFolder".
            (_noFolder$contents = noFolder.contents).push.apply(_noFolder$contents, _toConsumableArray(folderToDelete.contents));

            // Delete folder.
            //  find index.
            var index = folders.findIndex(function (folder) {
                return folder.name === folderName;
            });
            // Remove the item.
            folders.splice(index, 1);

            // update the state.
            this.setState(folders);
            (0, _Storage.writeData)("folders", folders);

            break;
    }
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(52);

var _config = __webpack_require__(54);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libraries.

var DraggableComponent = function (_Component) {
    _inherits(DraggableComponent, _Component);

    function DraggableComponent(props) {
        _classCallCheck(this, DraggableComponent);

        var _this = _possibleConstructorReturn(this, (DraggableComponent.__proto__ || Object.getPrototypeOf(DraggableComponent)).call(this, props));

        var panelName = "ui-editor-settings-draggable-component-" + _this.props.children.props.title;
        _this.state = JSON.parse(localStorage.getItem(panelName)) || _config2.default[panelName];
        _this.state.draggable = "false";
        return _this;
    }

    _createClass(DraggableComponent, [{
        key: "moveDiv",
        value: function moveDiv(e) {
            var _this2 = this;

            if (e.target.id === "move") {
                var state = JSON.parse(JSON.stringify(this.state));
                state.style.top = e.pageY + "px";
                state.style.left = e.pageX + "px";
                this.setState({
                    style: state.style
                }, function () {
                    localStorage.setItem("ui-editor-settings-draggable-component-" + _this2.props.children.props.title, JSON.stringify(_this2.state));
                });
            }
        }
    }, {
        key: "toggleMinimiseMaximise",
        value: function toggleMinimiseMaximise(e) {
            var _this3 = this;

            this.setState({
                minimised: !this.state.minimised
            }, function () {
                localStorage.setItem("ui-editor-settings-draggable-component-" + _this3.props.children.props.title, JSON.stringify(_this3.state));
            });
        }
    }, {
        key: "onMouseEnter",
        value: function onMouseEnter() {
            this.setState({
                draggable: "true"
            });
        }
    }, {
        key: "onMouseLeave",
        value: function onMouseLeave() {
            this.setState({
                draggable: "false"
            });
        }
    }, {
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "div",
                { draggable: this.state.draggable, id: "move", onDragEnd: this.moveDiv.bind(this), style: this.state.style },
                _react2.default.createElement(
                    "span",
                    { title: "Move", className: "move-handle", onMouseDown: this.onMouseEnter.bind(this), onMouseUp: this.onMouseLeave.bind(this) },
                    _react2.default.createElement("i", { className: "fa fa-arrows-alt fa-xs" })
                ),
                this.state.minimised ? _react2.default.createElement(
                    "span",
                    { title: "Minimise", className: "maximise-handle", onClick: this.toggleMinimiseMaximise.bind(this) },
                    _react2.default.createElement("i", { className: "fas fa-window-maximize fa-xs" })
                ) : _react2.default.createElement(
                    "span",
                    { title: "Minimise", className: "minimise-handle", onClick: this.toggleMinimiseMaximise.bind(this) },
                    _react2.default.createElement("i", { className: "fas fa-window-minimize fa-xs" })
                ),
                this.state.minimised ? _react2.default.createElement(
                    "div",
                    { className: "container editor-tab" },
                    _react2.default.createElement(
                        "div",
                        { className: "title" },
                        this.props.children.type.name
                    )
                ) : this.props.children
            );
        }
    }]);

    return DraggableComponent;
}(_react.Component);

exports.default = DraggableComponent;

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
exports.push([module.i, "#move > span{  \n    border: 1px solid black;\n    color: black;\n}\n\n#move .move-handle{\n    cursor: move;\n}\n\n#move .move-handle,\n#move .minimise-handle,\n#move .maximise-handle {\n    padding-left: 2px;\n    padding-right: 2px;\n}", ""]);



/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    "ui-editor-settings-draggable-component-TagExplorer": {
        "style": {
            "position": "fixed",
            "top": "602px",
            "left": "954px"
        },
        "minimised": false,
        "draggable": "true"
    },
    "ui-editor-settings-draggable-component-StyleExplorer": {
        "style": {
            "position": "fixed",
            "top": "587px",
            "left": "577px"
        },
        "minimised": false,
        "draggable": "true"
    },
    "ui-editor-settings-draggable-component-Events": {
        "style": {
            "position": "fixed",
            "top": "352px",
            "left": "1031px"
        },
        "minimised": false,
        "draggable": "true"
    },
    "ui-editor-settings-draggable-component-Editor": {
        "style": {
            "position": "fixed",
            "top": "46px",
            "left": "362px"
        },
        "minimised": false,
        "draggable": "true"
    },
    "ui-editor-settings-draggable-component-Components": {
        "style": {
            "position": "fixed",
            "top": "50px",
            "left": "21px"
        },
        "minimised": false,
        "draggable": "true"
    },
    "ui-editor-settings-draggable-component-Preview": {
        "style": {
            "position": "fixed",
            "top": "614px",
            "left": "327px"
        },
        "minimised": false,
        "draggable": "true"
    },
    "ui-editor-settings-draggable-component-Assets": {
        "style": {
            "position": "fixed",
            "top": "106px",
            "left": "1504px"
        },
        "minimised": false,
        "draggable": "true"
    },
    "ui-editor-settings-draggable-component-History": {
        "style": {
            "position": "fixed",
            "top": "595px",
            "left": "867px"
        },
        "minimised": false,
        "draggable": "true"
    }
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(56);

var _Reducer = __webpack_require__(58);

var _Storage = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// Libraries.

/**
 * Shows Configurator on select of valid child component name in the markup and mouseOut from markup
 * Hides Configurator on mouseLeave from the editor.
 */
var Editor = function (_Component) {
    _inherits(Editor, _Component);

    function Editor(props) {
        _classCallCheck(this, Editor);

        var _this = _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this, props));

        var component = (0, _Storage.readComponent)(_this.props.name);

        _this.state = {
            name: component ? component.name : "",
            markup: component ? component.markup : "",
            state: component ? component.state : "",
            style: component ? component.style : ""
        };

        return _this;
    }

    _createClass(Editor, [{
        key: "saveElement",
        value: function saveElement() {
            this.props.onSave({
                name: this.state.name,
                markup: this.state.markup,
                style: this.state.style,
                state: this.state.state
            });
        }
    }, {
        key: "render",
        value: function render() {

            var name = this.state.name;
            var markup = this.state.markup;
            var style = this.state.style;
            var state = this.state.state;
            // TODO: Should pass the current data. Instead of accessing it from global
            return _react2.default.createElement(
                "div",
                { className: "container editor-tab" },
                _react2.default.createElement(
                    "div",
                    { className: "title" },
                    "Editor"
                ),
                _react2.default.createElement(
                    "div",
                    { className: "" },
                    _react2.default.createElement(
                        "div",
                        { className: "title" },
                        "Component Name"
                    ),
                    _react2.default.createElement("input", { type: "text", placeholder: "Enter element name", value: name, onChange: _Reducer.updateName.bind(this), id: "elementName" }),
                    _react2.default.createElement(
                        "button",
                        { onClick: this.saveElement.bind(this), id: "save" },
                        _react2.default.createElement("i", { className: "fas fa-save" }),
                        "Save"
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "" },
                    _react2.default.createElement(
                        "div",
                        { className: "title" },
                        "Component Markup"
                    ),
                    _react2.default.createElement("textarea", { value: markup, onChange: _Reducer.updateMarkup.bind(this), id: "elementMarkup", title: "ID is mandatory for events" })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "" },
                    _react2.default.createElement(
                        "div",
                        { className: "title" },
                        "Component CSS"
                    ),
                    _react2.default.createElement("textarea", { value: style, onChange: _Reducer.updateStyle.bind(this) })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "" },
                    _react2.default.createElement(
                        "div",
                        { className: "title" },
                        "Component State"
                    ),
                    _react2.default.createElement("textarea", { value: state, onChange: _Reducer.updateState.bind(this), id: "elementState" })
                )
            );
        }
    }]);

    return Editor;
}(_react.Component);

exports.default = Editor;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(57);

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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".hidden{\n    display: none;\n}", ""]);



/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateName = updateName;
exports.updateMarkup = updateMarkup;
exports.updateStyle = updateStyle;
exports.updateState = updateState;
exports.getPropertyContainingProps = getPropertyContainingProps;
// Public.

function updateName(event) {
    this.setState({
        name: event.currentTarget.value
    });
}

function updateMarkup(event) {
    this.setState({
        markup: event.currentTarget.value
    });
}

function updateStyle(event) {
    this.setState({
        style: event.currentTarget.value
    });
}

function updateState(event) {
    this.setState({
        state: event.currentTarget.value
    });
}

function getPropertyContainingProps(obj) {
    // Fetch list of props from child.
    var props = [];
    var state = void 0;
    try {
        state = JSON.parse(obj.state);
    } catch (e) {
        console.error("Error: Child state is an invalid json, try an online validator on below string");
        console.log(child.state);
    }
    for (var property in state) {
        if (state[property].includes("prop")) {
            props.push(property);
        }
    }
    return props;
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Configurator = __webpack_require__(60);

var _Configurator2 = _interopRequireDefault(_Configurator);

var _Nodes = __webpack_require__(63);

var _Nodes2 = _interopRequireDefault(_Nodes);

var _Event = __webpack_require__(64);

var _Event2 = _interopRequireDefault(_Event);

var _Messages = __webpack_require__(75);

var _Messages2 = _interopRequireDefault(_Messages);

__webpack_require__(76);

var _Reducer = __webpack_require__(78);

var _getNodeTree = __webpack_require__(79);

var _Storage = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libraries.

// Dependencies.


// Components. 

// Styles.

// Reducers.

// Utils.

var Events = function (_Component) {
    _inherits(Events, _Component);

    function Events(props) {
        _classCallCheck(this, Events);

        var _this = _possibleConstructorReturn(this, (Events.__proto__ || Object.getPrototypeOf(Events)).call(this, props));

        _this.state = Object.assign({}, _this.props);
        _this.state.selectedTag = _this.props.selectedTag;
        return _this;
    }

    _createClass(Events, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var component = this.props.component;

            // Report if no component is created.
            if (this.state.components.length == 0) {
                return _react2.default.createElement(
                    "div",
                    { className: "container events-tab" },
                    _react2.default.createElement(
                        "div",
                        { className: "title" },
                        "Events"
                    ),
                    _react2.default.createElement(
                        "p",
                        null,
                        "Looks like you do not have any Web component created. Type some \"html\" on the right \"Editor\" tab"
                    )
                );
            }

            // Report if no component is selected.
            if (component.name === undefined && this.state.components.length != 0) {
                return _react2.default.createElement(
                    "div",
                    { className: "container events-tab" },
                    _react2.default.createElement(
                        "div",
                        { className: "title" },
                        "Events"
                    ),
                    _react2.default.createElement(
                        "p",
                        null,
                        "Looks like you have not selected any component. Click on any of the component in the left pane."
                    )
                );
            }

            var nodeTree = (0, _getNodeTree.getNodeTree)(component, component.markup, component.style, JSON.parse(component.state), component.events);

            // Report error.
            if (nodeTree.error !== undefined) {
                return (0, _Messages2.default)(nodeTree.error);
            }

            // Report error if component is not 
            if (nodeTree.result === undefined && this.state.components.length != 0) {
                return _react2.default.createElement(
                    "div",
                    { className: "container events-tab" },
                    _react2.default.createElement(
                        "div",
                        { className: "title" },
                        "Events"
                    )
                );
            }

            var selectedTag = this.state.selectedTag || "";
            var eventsOfSelectedTag = void 0,
                configurator = void 0,
                eventNames = [];
            // Check if it is a child component
            if (selectedTag.includes("child-component-")) {
                // Get list of components.
                var components = (0, _Storage.readData)("ui-editor");

                // Get child component name from the selected tag.
                var childComponentName = selectedTag.split("child-component-")[1];

                // Find the child component from the list of components.
                var childComponent = components.find(function (component) {
                    return component.name === childComponentName;
                });

                // Find events that are publishable from the child component.
                eventNames = childComponent.events.filter(function (event) {
                    return event.publishable === true;
                }).map(function (publishableEvent) {
                    return publishableEvent.publishName;
                });

                // Create event view for list of all events
                var events = component.events.filter(function (event) {
                    return eventNames.find(function (eventName) {
                        return eventName === event.name && event.id === childComponent.name;
                    });
                });
                events = events.map(function (event, index) {
                    return _react2.default.createElement(_Event2.default, {
                        key: Math.ceil(Math.random() * 1000),
                        index: index, event: event,
                        selectedTagID: selectedTag,
                        eventNames: eventNames,
                        onSave: _Reducer.updateEvent.bind(_this2),
                        deleteEvent: _Reducer.deleteEvent.bind(_this2) });
                });

                // Filter out events that are not part of selectedTag
                eventsOfSelectedTag = selectedTag ? events : null;

                configurator = _react2.default.createElement(_Configurator2.default, {
                    key: Math.ceil(Math.random() * 1000),
                    onChange: _Reducer.updateConfiguration.bind(this),
                    childName: childComponentName,
                    parent: component });
            } else {
                var _events = component.events.map(function (event, index) {
                    return _react2.default.createElement(_Event2.default, {
                        key: Math.ceil(Math.random() * 1000),
                        index: index,
                        event: event,
                        selectedTagID: selectedTag,
                        eventNames: eventNames,
                        onSave: _Reducer.updateEvent.bind(_this2),
                        deleteEvent: _Reducer.deleteEvent.bind(_this2) });
                });
                eventsOfSelectedTag = selectedTag ? _events.filter(function (event) {
                    return selectedTag.includes(event.props.event.id);
                }) : null;
            }

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "div",
                    { className: "container events-tab" },
                    _react2.default.createElement(
                        "div",
                        { className: "title" },
                        "Events"
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "tags" },
                        _react2.default.createElement(_Nodes2.default, { node: nodeTree.result, onSelectedTagChanged: _Reducer.selectedTagChanged.bind(this) })
                    ),
                    configurator,
                    _react2.default.createElement(
                        "div",
                        { className: "title" },
                        "Events"
                    ),
                    _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(
                            "ul",
                            null,
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "div",
                                    { className: "title" },
                                    "Existing Events",
                                    _react2.default.createElement(
                                        "div",
                                        null,
                                        eventsOfSelectedTag
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "div",
                                    { className: "title" },
                                    "New Event",
                                    _react2.default.createElement(
                                        "div",
                                        null,
                                        _react2.default.createElement(_Event2.default, {
                                            key: component.events.length,
                                            eventNames: eventNames,
                                            selectedTagID: selectedTag,
                                            onSave: _Reducer.updateEvent.bind(this) })
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Events;
}(_react.Component);

exports.default = Events;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(61);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libraries.

var Configurator = function (_Component) {
    _inherits(Configurator, _Component);

    function Configurator(props) {
        _classCallCheck(this, Configurator);

        var _this = _possibleConstructorReturn(this, (Configurator.__proto__ || Object.getPrototypeOf(Configurator)).call(this, props));

        var config = JSON.parse(_this.props.parent.config)[_this.props.childName] || { override: false };

        _this.state = {
            override: config.override
        };
        return _this;
    }

    _createClass(Configurator, [{
        key: "toggelOverride",
        value: function toggelOverride() {
            this.setState({
                override: !this.state.override
            });

            this.props.onChange({
                config: {
                    override: !this.state.override
                },
                childName: this.props.childName,
                parentName: this.props.parent.name
            });
        }
    }, {
        key: "saveConfig",
        value: function saveConfig() {
            this.props.onChange({
                config: {
                    override: this.state.override
                },
                childName: this.props.childName,
                parentName: this.props.parent.name
            });
        }
    }, {
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "div",
                    { className: "title" },
                    "Child Configurations"
                ),
                _react2.default.createElement(
                    "ul",
                    null,
                    _react2.default.createElement(
                        "li",
                        null,
                        _react2.default.createElement(
                            "label",
                            null,
                            "Override state"
                        ),
                        _react2.default.createElement("input", { type: "checkbox", onChange: this.toggelOverride.bind(this), checked: this.state.override ? "checked" : "" })
                    )
                )
            );
        }
    }]);

    return Configurator;
}(_react.Component);

exports.default = Configurator;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(62);

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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".console{\n    position: fixed;\n    right: 150px;\n}\n\n.error {\n    color: red;\n}\n\n.event { \n    padding-left: 10px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    border-top: 1px solid #333333;\n    background: rgb(64, 64, 64);\n}\n\n.info {\n    color: yellowgreen;\n}\n\nlabel {\n    padding-right: 10px;\n}\n\n.configurator {\n    background: rgb(64, 64, 64);\n    margin-top: 10px;\n    padding: 5px;\n}", ""]);



/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libraries.

var Nodes = function (_Component) {
    _inherits(Nodes, _Component);

    function Nodes(props) {
        _classCallCheck(this, Nodes);

        return _possibleConstructorReturn(this, (Nodes.__proto__ || Object.getPrototypeOf(Nodes)).call(this, props));
    }

    _createClass(Nodes, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var node = this.props.node;

            if (!node) {
                return _react2.default.createElement(
                    "span",
                    null,
                    "null"
                );
            }
            if (typeof node === "string") {
                return _react2.default.createElement(
                    "li",
                    null,
                    node
                );
            }
            var id = node.props.id ? "-" + node.props.id : "";

            // Check if it contains children.
            if (node.props && Array.isArray(node.props.children)) {
                var children = node.props.children.map(function (child, index) {
                    return _react2.default.createElement(Nodes, { key: index, node: child, onSelectedTagChanged: _this2.props.onSelectedTagChanged });
                });
                return _react2.default.createElement(
                    "ul",
                    null,
                    _react2.default.createElement(
                        "label",
                        null,
                        _react2.default.createElement("input", {
                            type: "radio",
                            name: "selectedElement",
                            onChange: this.props.onSelectedTagChanged,
                            value: node.type + id }),
                        node.type + id
                    ),
                    children
                );
            }
            // if node contains only one children, jsx get transpiled to object rather than array.
            else if (_typeof(node.props.children) === "object") {
                    var child = node.props.children;
                    return _react2.default.createElement(
                        "ul",
                        null,
                        _react2.default.createElement(
                            "label",
                            null,
                            _react2.default.createElement("input", {
                                type: "radio",
                                name: "selectedElement",
                                onChange: this.props.onSelectedTagChanged,
                                value: (node.type.name || node.type) + id }),
                            node.type.name || node.type
                        ),
                        _react2.default.createElement(Nodes, { key: index, node: child, onSelectedTagChanged: this.props.onSelectedTagChanged })
                    );
                }
                // nested component.
                else if (typeof node.type === "function") {
                        return _react2.default.createElement(
                            "ul",
                            null,
                            _react2.default.createElement(
                                "label",
                                null,
                                _react2.default.createElement("input", {
                                    type: "radio",
                                    name: "selectedElement",
                                    value: "child-component-" + node.type.name,
                                    onChange: this.props.onSelectedTagChanged
                                }),
                                node.type.name
                            )
                        );
                    }
            return _react2.default.createElement(
                "ul",
                null,
                _react2.default.createElement(
                    "label",
                    null,
                    _react2.default.createElement("input", {
                        type: "radio",
                        name: "selectedElement",
                        value: node.type + id,
                        onChange: this.props.onSelectedTagChanged
                    }),
                    node.type + id
                )
            );
        }
    }]);

    return Nodes;
}(_react.Component);

exports.default = Nodes;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(65);

var _Messages = __webpack_require__(67);

var _Messages2 = _interopRequireDefault(_Messages);

var _Reducer = __webpack_require__(73);

var _Events = __webpack_require__(74);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libraries.

// Components.

// Reducers. 

// Events.

var Event = function (_Component) {
    _inherits(Event, _Component);

    function Event(props) {
        _classCallCheck(this, Event);

        var _this = _possibleConstructorReturn(this, (Event.__proto__ || Object.getPrototypeOf(Event)).call(this, props));

        _this.state = {
            name: _this.props.event ? _this.props.event.name : "",
            reducer: _this.props.event ? _this.props.event.reducer : "",
            publishable: _this.props.event ? _this.props.event.publishable : "",
            publishName: _this.props.event ? _this.props.event.publishName : ""
        };
        return _this;
    }

    _createClass(Event, [{
        key: "render",
        value: function render() {

            if (this.props.selectedTagID === undefined) {
                return (0, _Messages2.default)();
            }

            var publishName = this.state.publishable ? _react2.default.createElement("input", { type: "text", onChange: _Reducer.updatePublishName.bind(this), value: this.state.publishName, placeholder: "Enter event publish name for other components to subscribe to" }) : null;
            var eventNames = this.props.eventNames.map(function (eventName) {
                return _react2.default.createElement("option", { value: eventName });
            });

            return _react2.default.createElement(
                "div",
                { className: "event" },
                _react2.default.createElement("input", { list: "browsers", type: "text", onChange: _Reducer.updateEventName.bind(this), value: this.state.name, placeholder: "Enter event name", title: "Event Name" }),
                _react2.default.createElement(
                    "datalist",
                    { id: "browsers" },
                    eventNames
                ),
                _react2.default.createElement("br", null),
                _react2.default.createElement("textarea", { onChange: _Reducer.updateReducer.bind(this), value: this.state.reducer, placeholder: "Enter state reducer", title: "Reducer" }),
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(
                        "label",
                        null,
                        _react2.default.createElement("input", { type: "checkbox", onChange: _Reducer.updateEventType.bind(this), checked: this.state.publishable ? "checked" : "" }),
                        "Publishable"
                    ),
                    publishName,
                    _react2.default.createElement(
                        "button",
                        { onClick: _Events.publishEvent.bind(this), id: "saveEvent" },
                        _react2.default.createElement("i", { className: "fas fa-save" }),
                        "Save"
                    ),
                    _react2.default.createElement(
                        "button",
                        { onClick: _Events.deleteEvent.bind(this), id: "deleteEvent" },
                        _react2.default.createElement("i", { className: "fas fa-trash" }),
                        "Delete"
                    )
                )
            );
        }
    }]);

    return Event;
}(_react.Component);

exports.default = Event;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(66);

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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".console{\n    position: fixed;\n    right: 150px;\n}\n\n.error {\n    color: red;\n}\n\n.event { \n    padding-left: 10px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    border-top: 1px solid #333333;\n    background: rgb(64, 64, 64);\n}\n\n.info {\n    color: yellowgreen;\n}\n\nlabel {\n    padding-right: 10px;\n}\n\n.event input {\n    margin-left:0px;\n}\n\n.event textarea {\n    margin-top: 8px;\n}", ""]);



/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _MessagesComponent = __webpack_require__(8);

var _MessagesComponent2 = _interopRequireDefault(_MessagesComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getMessages() {
    var messages = [{
        type: "info",
        text: "#1 INFO: Select any element in the left most pane(editor pane) to see its content"
    }, {
        type: "info",
        text: "#2 INFO: Click on 'Add' to add an component"
    }];

    return React.createElement(_MessagesComponent2.default, { messages: messages });
}

exports.default = getMessages;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(69);

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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".console{\n    position: fixed;\n    right: 150px;\n    bottom: 50px;\n}\n\n.error {\n    color: red;\n}\n\n\n.info {\n    color: yellowgreen;\n}", ""]);



/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(71);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libraries.

var MessageComponent = function (_Component) {
    _inherits(MessageComponent, _Component);

    function MessageComponent(props) {
        _classCallCheck(this, MessageComponent);

        return _possibleConstructorReturn(this, (MessageComponent.__proto__ || Object.getPrototypeOf(MessageComponent)).call(this, props));
    }

    _createClass(MessageComponent, [{
        key: "render",
        value: function render() {

            var message = this.props.message;

            if (message.type === "error" || message.type === "info") {
                return _react2.default.createElement(
                    "div",
                    { className: message.type },
                    _react2.default.createElement(
                        "code",
                        null,
                        message.text
                    )
                );
            } else {
                console.error(message.type + " is unidentified message type for <MessagesComponent/>. Please use either 'error' or 'info' only. If you require a different type, raise an issue, send a PR");
                return _react2.default.createElement(
                    "div",
                    { className: "console" },
                    _react2.default.createElement(
                        "div",
                        { className: "eerror" },
                        _react2.default.createElement(
                            "code",
                            null,
                            "error : unidentified message type. Please use either error/ info only"
                        )
                    )
                );
            }
        }
    }]);

    return MessageComponent;
}(_react.Component);

exports.default = MessageComponent;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(72);

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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "\n.error {\n    color: red;\n}\n\n\n.info {\n    color: yellowgreen;\n}", ""]);



/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _module$exports;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function updateEventName(e) {
    this.setState({
        name: e.target.value
    });
}

function updateReducer(e) {
    this.setState({
        reducer: e.target.value
    });
}

function updatePublishName(e) {
    this.setState({
        publishName: e.target.value
    });
}

function updateEventType(e) {
    this.setState({
        publishable: e.currentTarget.checked
    });
}

module.exports = (_module$exports = {
    updateEventName: updateEventName,
    updateEventType: updateEventType,
    updatePublishName: updatePublishName
}, _defineProperty(_module$exports, "updateEventType", updateEventType), _defineProperty(_module$exports, "updateReducer", updateReducer), _module$exports);

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.publishEvent = publishEvent;
exports.deleteEvent = deleteEvent;
function publishEvent() {
    this.props.onSave({
        name: this.state.name,
        reducer: this.state.reducer,
        index: this.props.index,
        publishable: this.state.publishable,
        publishName: this.state.publishName
    });
}

function deleteEvent() {
    this.props.deleteEvent(this.props.index);
}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _MessagesComponent = __webpack_require__(8);

var _MessagesComponent2 = _interopRequireDefault(_MessagesComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getMessages(error) {

    var messages = [{
        type: "error",
        text: "ERROR : " + error + "developer log: look in console related to eval"
    }];
    return React.createElement(_MessagesComponent2.default, { messages: messages });
}

exports.default = getMessages;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(77);

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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".events {\n    border:1px solid black;\n    padding: 5px;\n}\n\n.error {\n    color: red;\n    position: fixed;\n    right: 150px;\n}", ""]);



/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateEvent = updateEvent;
exports.selectedTagChanged = selectedTagChanged;
exports.deleteEvent = deleteEvent;
exports.updateConfiguration = updateConfiguration;
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
        // Edit
        element.events[event.index] = event;
    }

    this.props.onEventsUpdate(element.events);
}

function selectedTagChanged(e) {
    this.setState({
        selectedTag: e.currentTarget.value
    });
}

function deleteEvent(index) {

    // Get current component.
    var element = JSON.parse(JSON.stringify(this.state.element));

    // Remove the event to be deleted.
    element.events.splice(index, 1);

    // Update elements with new events.
    this.props.onEventsUpdate(element.events);
}

function updateConfiguration(config) {
    this.props.onConfigUpdate(config);
}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getNodeTree = getNodeTree;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Runtime = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Why? Because importing React as variable at line#2 will be alterted by babel. Keep it as a property, babel will ignore it.
window.React = _react2.default;
window.Component = _react2.default.Component;

function getNodeTree(element, jsx, style, state, events) {

    var result = void 0,
        error = void 0;
    try {
        var nestedComponents = (0, _Runtime.getNestedComponents)(element);
        if (nestedComponents.length > 0) {
            (0, _Runtime.saveComponentsToWindow)(nestedComponents);
        }
        result = eval(Babel.transform(jsx, { presets: ['react'] }).code);
    } catch (e) {
        error = e;
    } finally {
        return _defineProperty({
            error: error,
            result: result }, "result", result);
    }
}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Storage = __webpack_require__(3);

__webpack_require__(81);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libraries.

var History = function (_Component) {
    _inherits(History, _Component);

    function History(props) {
        _classCallCheck(this, History);

        return _possibleConstructorReturn(this, (History.__proto__ || Object.getPrototypeOf(History)).call(this, props));
    }

    _createClass(History, [{
        key: "refreshToPrevious",
        value: function refreshToPrevious() {
            (0, _Storage.popHistory)();
        }
    }, {
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "div",
                { className: "container preview" },
                _react2.default.createElement(
                    "div",
                    { className: "title" },
                    "History"
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(
                        "button",
                        { onClick: this.refreshToPrevious.bind(this) },
                        "Go back"
                    )
                )
            );
        }
    }]);

    return History;
}(_react.Component);

exports.default = History;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(82);

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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".container{\n    border: 1px solid black;\n    padding: 5px;\n    box-shadow: 0px 8px 26px -8px black;\n    background: #2C3134;\n}\n", ""]);



/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(84);

var _DynamicComponent = __webpack_require__(86);

var _DynamicComponent2 = _interopRequireDefault(_DynamicComponent);

var _Storage = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libraries.

// Utilities.

var Preview = function (_Component) {
    _inherits(Preview, _Component);

    function Preview(props) {
        _classCallCheck(this, Preview);

        var _this = _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).call(this, props));

        _this.state = {
            component: _this.props.component
        };
        return _this;
    }

    _createClass(Preview, [{
        key: "refresh",
        value: function refresh() {
            this.setState({
                component: (0, _Storage.readComponent)(this.state.component.name)
            });
        }
    }, {
        key: "render",
        value: function render() {

            // Helps to rerender when changes to markup/events are made to the component and preview them.
            var randomKey = this.props.component.id * ~~(Math.random() * 10);
            return _react2.default.createElement(
                "div",
                { className: "container preview" },
                _react2.default.createElement(
                    "div",
                    { className: "title" },
                    "Preview"
                ),
                _react2.default.createElement(_DynamicComponent2.default, { key: randomKey, component: this.state.component })
            );
        }
    }]);

    return Preview;
}(_react.Component);

exports.default = Preview;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(85);

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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".container{\n    border: 1px solid black;\n    padding: 5px;\n    box-shadow: 0px 8px 26px -8px black;\n    background: #2C3134;\n}\n\n.dropPoint{\n    border: 1px solid green;\n}\n\n.targetChild{\n    border: 1px solid #3E8CE4;\n}", ""]);



/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Runtime = __webpack_require__(4);

__webpack_require__(87);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libraries.

var DynamicComponent = function (_Component) {
    _inherits(DynamicComponent, _Component);

    function DynamicComponent(props) {
        _classCallCheck(this, DynamicComponent);

        var _this = _possibleConstructorReturn(this, (DynamicComponent.__proto__ || Object.getPrototypeOf(DynamicComponent)).call(this, props));

        _this.state = {
            component: _this.props.component
        };

        return _this;
    }

    _createClass(DynamicComponent, [{
        key: "render",
        value: function render() {

            if (this.state.component.name === undefined) {
                return _react2.default.createElement(
                    "div",
                    null,
                    "No component selected."
                );
            }
            var nestedComponents = (0, _Runtime.getNestedComponents)(this.state.component);
            if (nestedComponents.length > 0) {
                (0, _Runtime.saveComponentsToWindow)(nestedComponents);
            }

            if (!window[this.state.component.name]) {
                return _react2.default.createElement(
                    "div",
                    null,
                    "Component not rendered"
                );
            }

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(window[this.state.component.name])
            );
        }
    }]);

    return DynamicComponent;
}(_react.Component);

exports.default = DynamicComponent;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(88);

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
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".box {\n    margin: 5px;\n    border:1px solid black;\n    padding:5px;\n}", ""]);



/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateEvent = updateEvent;
exports.updateConfig = updateConfig;
exports.saveElement = saveElement;
exports.updateSelectedComponent = updateSelectedComponent;

var _Storage = __webpack_require__(3);

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

    // Check if element exist.
    var elementExist = components.find(function (component) {
        return component.name === element.name;
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
        var newElement = {
            name: element.name,
            markup: element.markup,
            events: [],
            state: element.state || "{}",
            style: element.style,
            children: [],
            id: Math.ceil(Math.random() * 1000),
            config: "{}"
        };

        components.push(newElement);
        selectedIndex = components.length - 1;
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
        showEditor: false
    });

    (0, _Storage.writeData)("ui-editor", components);
}

function updateSelectedComponent(e) {
    var componentName = e.currentTarget.innerText.split("\n")[0];
    // Find the element from state that matches the currently selected element.
    var selectedComponent = this.state.components.find(function (component) {
        return component.name === componentName;
    });

    window.selectedcomponentname = selectedComponent.name;
    // Update the state with selectedElement.
    this.setState({
        selectedComponent: selectedComponent
    });
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvU3RvcmFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL1J1bnRpbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWxpdGllcy9Db21wb25lbnRzL0ZvbGRlcnMvRm9sZGVyL0V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL0NvZGVHZW5lcmF0b3IvUmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9Db21wb25lbnRzL01lc3NhZ2VzQ29tcG9uZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9janMvcmVhY3QtZG9tLnByb2R1Y3Rpb24ubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zY2hlZHVsZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NjaGVkdWxlci9janMvc2NoZWR1bGVyLnByb2R1Y3Rpb24ubWluLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luZGV4L2luZGV4LmNzcz9kMGQ3Iiwid2VicGFjazovLy8uL3NyYy9JbmRleC9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXNzZXRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9Bc3NldHMvU3R5bGUuY3NzPzllYWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Fzc2V0cy9TdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Fzc2V0cy9Bc3NldC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXNzZXRzL0Fzc2V0L1N0eWxlLmNzcz81OGU2Iiwid2VicGFjazovLy8uL3NyYy9Bc3NldHMvQXNzZXQvU3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9Bc3NldHMvUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbGl0aWVzL0xpYnJhcmllcy9pbmRleGVkREIvaW5kZXhlREIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWxpdGllcy9MaWJyYXJpZXMvaW5kZXhlZERCL01pbmRleGVkREIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Fzc2V0cy9kYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9TdHlsZS5jc3M/MzZkZiIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9TdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWxpdGllcy9Db21wb25lbnRzL0ZvbGRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWxpdGllcy9Db21wb25lbnRzL0ZvbGRlcnMvU3R5bGUuY3NzPzg0NjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWxpdGllcy9Db21wb25lbnRzL0ZvbGRlcnMvU3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9VdGlsaXRpZXMvQ29tcG9uZW50cy9Gb2xkZXJzL3Byb2Nlc3NGb2xkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWxpdGllcy9Db21wb25lbnRzL0ZvbGRlcnMvRm9sZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9VdGlsaXRpZXMvQ29tcG9uZW50cy9Gb2xkZXJzL0ZvbGRlci9TdHlsZS5jc3M/YTliZSIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbGl0aWVzL0NvbXBvbmVudHMvRm9sZGVycy9Gb2xkZXIvU3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9VdGlsaXRpZXMvQ29tcG9uZW50cy9Gb2xkZXJzL05ld0ZvbGRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbGl0aWVzL0NvbXBvbmVudHMvRm9sZGVycy9OZXdGb2xkZXIvU3R5bGUuY3NzP2UzYmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWxpdGllcy9Db21wb25lbnRzL0ZvbGRlcnMvTmV3Rm9sZGVyL1N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbGl0aWVzL0NvbXBvbmVudHMvRm9sZGVycy9Gb2xkZXIvUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL2NyZWF0ZS1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9TdG9yYWdlL2xvY2FsU3RvcmFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL1N0b3JhZ2UvbG9jYWxTdG9yYWdlL1NhbXBsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Db21wb25lbnR0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbXBvbmVudHQvRXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbXBvbmVudHQvU3R5bGUuY3NzPzhmMDciLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29tcG9uZW50dC9TdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9VdGlsaXRpZXMvQ29tcG9uZW50cy9EcmFnZ2FibGVDb21wb25lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWxpdGllcy9Db21wb25lbnRzL0RyYWdnYWJsZUNvbXBvbmVudC9zdHlsZS5jc3M/ZGVlYyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbGl0aWVzL0NvbXBvbmVudHMvRHJhZ2dhYmxlQ29tcG9uZW50L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbGl0aWVzL0NvbXBvbmVudHMvRHJhZ2dhYmxlQ29tcG9uZW50L2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRWRpdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9FZGl0b3IvU3R5bGUuY3NzPzFiZmMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VkaXRvci9TdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VkaXRvci9SZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9FdmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2ZW50cy9Db25maWd1cmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2ZW50cy9Db25maWd1cmF0b3IvU3R5bGUuY3NzP2VlMjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2ZW50cy9Db25maWd1cmF0b3IvU3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvQ29tcG9uZW50cy9Ob2Rlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXZlbnRzL0V2ZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9FdmVudHMvRXZlbnQvU3R5bGUuY3NzP2JhOTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2ZW50cy9FdmVudC9TdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2ZW50cy9FdmVudC9NZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL0NvbXBvbmVudHMvTWVzc2FnZXNDb21wb25lbnQvc3R5bGUuY3NzPzFkNDEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9Db21wb25lbnRzL01lc3NhZ2VzQ29tcG9uZW50L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL0NvbXBvbmVudHMvTWVzc2FnZUNvbXBvbmVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL0NvbXBvbmVudHMvTWVzc2FnZUNvbXBvbmVudC9zdHlsZS5jc3M/N2M4OSIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL0NvbXBvbmVudHMvTWVzc2FnZUNvbXBvbmVudC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2ZW50cy9FdmVudC9SZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9FdmVudHMvRXZlbnQvRXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9FdmVudHMvTWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2ZW50cy9TdHlsZS5jc3M/Nzk3MSIsIndlYnBhY2s6Ly8vLi9zcmMvRXZlbnRzL1N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXZlbnRzL1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9nZXQtbm9kZS10cmVlLmpzIiwid2VicGFjazovLy8uL3NyYy9IaXN0b3J5L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9IaXN0b3J5L3N0eWxlLmNzcz8wYjIxIiwid2VicGFjazovLy8uL3NyYy9IaXN0b3J5L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJldmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJldmlldy9zdHlsZS5jc3M/NmQ0OCIsIndlYnBhY2s6Ly8vLi9zcmMvUHJldmlldy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ByZXZpZXcvRHluYW1pY0NvbXBvbmVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJldmlldy9EeW5hbWljQ29tcG9uZW50L3N0eWxlLmNzcz81MjVlIiwid2VicGFjazovLy8uL3NyYy9QcmV2aWV3L0R5bmFtaWNDb21wb25lbnQvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9JbmRleC9SZWR1Y2VyLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJyZWFkRGF0YSIsIndyaXRlRGF0YSIsInJlYWRDb21wb25lbnQiLCJ3cml0ZUNvbXBvbmVudCIsInBvcEhpc3RvcnkiLCJzYXZlQ29tcG9uZW50c1RvV2luZG93IiwiZ2V0TmVzdGVkQ29tcG9uZW50cyIsImNyZWF0ZVN0eWxlc2hlZXQiLCJzdHlsZSIsIm5hbWUiLCJpbmNsdWRlcyIsImFzc2V0Iiwic3BsaXQiLCJwb3AiLCJqb2luIiwicmVwbGFjZSIsIndpbmRvdyIsImFzc2V0cyIsInRvRGVsZXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIml0ZW0iLCJyZW1vdmUiLCJkeW5hbWljU3R5bGUiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwidHlwZSIsImlubmVySFRNTCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNhdmVUb1dpbmRvdyIsImNvbXBvbmVudCIsImNoZWNrTmVzdGVkQ29tcG9uZW50cyIsIm1hcmt1cCIsImNvbXBvbmVudHMiLCJmaWx0ZXIiLCJsZW5ndGgiLCJuZXN0ZWRDb21wb25lbnRzIiwicGFyZW50IiwiY2hpbGRyZW4iLCJncmFuZEtpZHMiLCJtYXAiLCJmbGF0IiwicHVzaCIsImRyb3BIYW5kbGVyIiwiZHJhZ092ZXJIYW5kbGVyIiwiZHJhZ0xlYXZlSGFuZGxlciIsIm9uRHJhZ1N0YXJ0Iiwib25FeHBvcnQiLCJldiIsInByZXZlbnREZWZhdWx0IiwiY29tcG9uZW50TmFtZSIsImRhdGFUcmFuc2ZlciIsImdldERhdGEiLCJmb2xkZXJOYW1lIiwiY29udGVudHMiLCJBcnJheSIsImZyb20iLCJzdGF0ZSIsInN0YXR1cyIsInByb3BzIiwib25Gb2xkZXJVcGRhdGUiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJmb2xkZXJDbGFzcyIsImUiLCJldmVudCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsInNldERhdGEiLCJzZWxlY3RlZENvbXBvbmVudCIsImZpbmQiLCJ1bmlxdWVDb21wb25lbnRzIiwiU2V0IiwiY29tIiwiZWxlbWVudCIsInJlbW92ZVBhcmFudGhlc2lzIiwiY29udmVydFRvUmVhY3QiLCJldmVudHMiLCJpZCIsImFkZFByb3BzIiwiZ2V0Q29tcG9uZW50RXZlbnRlZE1hcmt1cCIsImdldFN0YXRlZE1hcmt1cCIsImNvbmZpZyIsIkpTT04iLCJwYXJzZSIsImNoaWxkcmVuQ29uZmlnIiwiT2JqZWN0Iiwia2V5cyIsImNoaWxkTmFtZSIsIm92ZXJyaWRlIiwiY2hpbGRNYXJrdXAiLCJjaGlsZE1hcmt1cFdpdGhQcm9wcyIsInJlbmRlckxpc3RNYXJrdXAiLCJwcm9wc0luTWFya3VwIiwic3RhdGVPdmVyaWRlTWFya3VwIiwiY29tcG9uZW50RXZlbnRlZE1hcmt1cCIsIlJlYWN0Q29tcG9uZW50IiwicHVibGlzaGFibGUiLCJyZWR1Y2VyIiwicHVibGlzaE5hbWUiLCJNZXNzYWdlc0NvbXBvbmVudCIsIm1lc3NhZ2VzIiwibWVzc2FnZSIsImluZGV4IiwiQ29tcG9uZW50IiwiSW5kZXgiLCJjb21wb25lbnROYW1lcyIsInNlbGVjdGVkVGFnIiwiZm9sZGVycyIsInNob3dFZGl0b3IiLCJ1cGRhdGVDb25maWciLCJiaW5kIiwidXBkYXRlRXZlbnQiLCJzYXZlRWxlbWVudCIsInVwZGF0ZVNlbGVjdGVkQ29tcG9uZW50IiwicHJldmlld0NvbXBvbmVudCIsIk1hdGgiLCJjZWlsIiwicmFuZG9tIiwib3BlbkVkaXRvciIsInVwZGF0ZUZvbGRlcnMiLCJSZWFjdERPTSIsInJlbmRlciIsImdldEVsZW1lbnRCeUlkIiwiQXNzZXRzIiwiY2xhc3MiLCJpbWFnZVVSTCIsInNlbGVjdGVkQXNzZXQiLCJ3cml0ZVRvREIiLCJmaWxlIiwiYmluIiwicmVzdWx0IiwibmV3RmlsZSIsInNpemUiLCJpbWciLCJzcmMiLCJhc3NldE5hbWUiLCJ1cGRhdGVkU2VsZWN0ZWQiLCJmZXRjaEZyb21EQiIsIkFzc2V0Iiwic2VsZWN0ZWQiLCJvblNlbGVjdGVkIiwiY2FsbCIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWRlbmQiLCJiIiwiYXBwZW5kVG9Cb2R5IiwiaURCIiwib25sb2FkIiwiTWluZGV4ZWREQiIsInVpRWRpdG9yIiwiY29ubmVjdCIsImRhdGFiYXNlTmFtZSIsIm9iamVjdFN0b3JlcyIsImlkYiIsImluZGV4ZWREQiIsIm1vekluZGV4ZWREQiIsIndlYmtpdEluZGV4ZWREQiIsIm1zSW5kZXhlZERCIiwic2hpbUluZGV4ZWREQiIsImRiIiwib2JqU3RycyIsImlzQXJyYXkiLCJzdG9yZSIsImtleSIsImNvbm4iLCJvcGVuIiwibWRiIiwib251cGdyYWRlbmVlZGVkIiwiZGJsIiwiZW50cmllcyIsImNyZWF0ZU9iamVjdFN0b3JlIiwia2V5UGF0aCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwib25zdWNjZXNzIiwib25lcnJvciIsImVycm9yIiwiY3MiLCJ1bmRlZmluZWQiLCJ0eCIsInRyYW5zYWN0aW9uIiwib2JqZWN0U3RvcmUiLCJwdXQiLCJvYmoiLCJvcyIsInJlc3BvbnNlIiwiZ2V0IiwiZ2V0QWxsIiwiY2xvc2UiLCJ0aGVuIiwiaHJlZiIsImRhdGEiLCJpbWFnZSIsIkNvbXBvbmVudHMiLCJ1bnNoaWZ0Iiwib25PcGVuRWRpdG9yIiwiYWRkQ29tcG9uZW50IiwiYWRkRm9sZGVyIiwib25Gb2xkZXJzVXBkYXRlIiwib25TZWxlY3Rpb24iLCJvbkRlbGV0ZUNvbXBvbmVudCIsIm9uRGVsZXRlRm9sZGVyIiwiRm9sZGVycyIsImZvbGRlciIsImVtcHR5Rm9sZGVySW5kZXgiLCJmaW5kSW5kZXgiLCJzcGxpY2UiLCJzdHJpbmdpZnkiLCJjdXJyZW50Rm9sZGVyIiwiY29udGVudCIsImNoZWNrRm9sZGVyIiwiZm9sZGVyU3RydWN0dXJlIiwiaW5pdGlhbGlzZVByb3BzIiwicHJvY2Vzc0ZvbGRlciIsImkiLCJwcm9jZXNzQ29udGVudCIsIkZvbGRlciIsImljb25TdGF0dXMiLCJuZXdGb2xkZXIiLCJ0b2dnbGVGb2xkZXIiLCJkZWxldGVGb2xkZXIiLCJOZXdGb2xkZXIiLCJuZXdGb2xkZXJDbGFzcyIsImN1cnJlbnRUYXJnZXQiLCJ2YWx1ZSIsIm9uTmV3Rm9sZGVyIiwiZm9sZGVyTmFtZUNoYW5nZWQiLCJzYXZlRm9sZGVyTmFtZU9uRW50ZXIiLCJvcGVuRm9sZGVyIiwiY2xvc2VGb2xkZXIiLCJjcmVhdGVDb21wb25lbnQiLCJjb21wb25lbnRTdHJpbmciLCJldmFsIiwiQmFiZWwiLCJ0cmFuc2Zvcm0iLCJwcmVzZXRzIiwicGx1Z2lucyIsImNvZGUiLCJwdXNoSGlzdG9yeSIsImVkaXRvckhpc3RvcnkiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0SXRlbSIsInNhbXBsZSIsImhpc3RvcnkiLCJub1B1c2giLCJjb21wIiwibGFzdEl0ZW0iLCJDb21wb25lbnR0IiwiY2xhc3NMaXN0IiwiaGFuZGxlRHJhZyIsInJlc3RvcmVDbGFzcyIsInNlbGVjdGlvbkNoYW5nZWQiLCJvblNlbGVjdGlvbkNoYW5nZSIsImFkZCIsImV2ZW50Q2FsbGJhY2tzIiwic3RvcFByb3BhZ2F0aW9uIiwicGFyZW50RWxlbWVudCIsImlubmVyVGV4dCIsIlRZUEUiLCJmb2xkZXJUb0RlbGV0ZSIsIm5vRm9sZGVyIiwiRHJhZ2dhYmxlQ29tcG9uZW50IiwicGFuZWxOYW1lIiwidGl0bGUiLCJkcmFnZ2FibGUiLCJ0b3AiLCJwYWdlWSIsImxlZnQiLCJwYWdlWCIsIm1pbmltaXNlZCIsIm1vdmVEaXYiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJ0b2dnbGVNaW5pbWlzZU1heGltaXNlIiwiRWRpdG9yIiwib25TYXZlIiwidXBkYXRlTmFtZSIsInVwZGF0ZU1hcmt1cCIsInVwZGF0ZVN0eWxlIiwidXBkYXRlU3RhdGUiLCJnZXRQcm9wZXJ0eUNvbnRhaW5pbmdQcm9wcyIsImNoaWxkIiwicHJvcGVydHkiLCJFdmVudHMiLCJhc3NpZ24iLCJub2RlVHJlZSIsImV2ZW50c09mU2VsZWN0ZWRUYWciLCJjb25maWd1cmF0b3IiLCJldmVudE5hbWVzIiwiY2hpbGRDb21wb25lbnROYW1lIiwiY2hpbGRDb21wb25lbnQiLCJwdWJsaXNoYWJsZUV2ZW50IiwiZXZlbnROYW1lIiwiZGVsZXRlRXZlbnQiLCJ1cGRhdGVDb25maWd1cmF0aW9uIiwic2VsZWN0ZWRUYWdDaGFuZ2VkIiwiQ29uZmlndXJhdG9yIiwib25DaGFuZ2UiLCJwYXJlbnROYW1lIiwidG9nZ2VsT3ZlcnJpZGUiLCJOb2RlcyIsIm5vZGUiLCJvblNlbGVjdGVkVGFnQ2hhbmdlZCIsIkV2ZW50Iiwic2VsZWN0ZWRUYWdJRCIsInVwZGF0ZVB1Ymxpc2hOYW1lIiwidXBkYXRlRXZlbnROYW1lIiwidXBkYXRlUmVkdWNlciIsInVwZGF0ZUV2ZW50VHlwZSIsInB1Ymxpc2hFdmVudCIsImdldE1lc3NhZ2VzIiwidGV4dCIsIk1lc3NhZ2VDb21wb25lbnQiLCJjaGVja2VkIiwib25FdmVudHNVcGRhdGUiLCJvbkNvbmZpZ1VwZGF0ZSIsImdldE5vZGVUcmVlIiwiUmVhY3QiLCJqc3giLCJIaXN0b3J5IiwicmVmcmVzaFRvUHJldmlvdXMiLCJQcmV2aWV3IiwicmFuZG9tS2V5IiwiRHluYW1pY0NvbXBvbmVudCIsIm5ld0VsZW1lbnRzIiwiZWxlbWVudHMiLCJlbGVtZW50RXhpc3QiLCJzZWxlY3RlZEluZGV4IiwiZWxlbWVudFVuZGVyRWRpdCIsIm5ld0VsZW1lbnQiLCJzZWxlY3RlZGNvbXBvbmVudG5hbWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FB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O0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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XHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiaW1wb3J0IHtyZWFkRGF0YSwgd3JpdGVEYXRhLCB3cml0ZUNvbXBvbmVudCwgcmVhZENvbXBvbmVudCwgcG9wSGlzdG9yeSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICByZWFkRGF0YTogcmVhZERhdGEsXG4gICAgd3JpdGVEYXRhOiB3cml0ZURhdGEsXG4gICAgcmVhZENvbXBvbmVudDogcmVhZENvbXBvbmVudCxcbiAgICB3cml0ZUNvbXBvbmVudDogd3JpdGVDb21wb25lbnQsXG4gICAgcG9wSGlzdG9yeTogcG9wSGlzdG9yeVxufSIsIi8vIERlcGVuZGVuY2llcy5cblxuaW1wb3J0IHtjcmVhdGVDb21wb25lbnR9IGZyb20gXCIuLi9jcmVhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQge3JlYWREYXRhfSBmcm9tIFwiLi4vU3RvcmFnZVwiO1xuXG4vKipcbiAqIFxuICogQXNzZXQgaW4gc3R5bGUgc2hlZXQgc3ludGF4IC0gJGFzc2V0XG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVzaGVldChzdHlsZSwgbmFtZSkge1xuXG4gICAgLy8gQ2hlY2sgaWYgc3R5bGUgaGFzICRhc3NldHNcbiAgICB3aGlsZShzdHlsZS5pbmNsdWRlcyhcIiRhc3NldHNcIikpe1xuICAgICAgICAvLyBSZXBsYWNlIGl0IHdpdGggYXNzZXQgYmxvYiB1cmxcbiAgICAgICAgbGV0IGFzc2V0ID0gc3R5bGUuc3BsaXQoXCJbJ1wiKVsxXS5zcGxpdChgXWApWzBdLnNwbGl0KFwiXCIpO1xuICAgICAgICBhc3NldC5wb3AoKTtcbiAgICAgICAgYXNzZXQgPSAgYXNzZXQuam9pbihcIlwiKTtcbiAgICAgICAgc3R5bGUgPSBzdHlsZS5yZXBsYWNlKGAkYXNzZXRzWycke2Fzc2V0fSddYCwgYHVybCgke3dpbmRvdy5hc3NldHNbYXNzZXRdfSlgKVxuICAgIH1cbiAgICBsZXQgdG9EZWxldGUgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWNvbXBvbmVudC1uYW1lPSdQYXJlbnRDb21wb25lbnQnXVwiKV07XG4gICAgdG9EZWxldGUuZm9yRWFjaChpdGVtPT57XG4gICAgICAgIGl0ZW0ucmVtb3ZlKClcbiAgICB9KVxuICAgIHZhciBkeW5hbWljU3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGR5bmFtaWNTdHlsZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbXBvbmVudC1uYW1lXCIsIG5hbWUpO1xuICAgIGR5bmFtaWNTdHlsZS50eXBlID0gJ3RleHQvY3NzJztcbiAgICBkeW5hbWljU3R5bGUuaW5uZXJIVE1MID0gc3R5bGU7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkeW5hbWljU3R5bGUpXG59XG5cbi8qKiBUYWtlcyBhIGNvbXBvbmVudCBhbmQgY29udmVydHMgaXQgYXMgYSByZWFjdCBjb21wb25lbnQgKi9cbmZ1bmN0aW9uIHNhdmVUb1dpbmRvdyggY29tcG9uZW50ICkge1xuICAgIGNyZWF0ZVN0eWxlc2hlZXQoY29tcG9uZW50LnN0eWxlLCBjb21wb25lbnQubmFtZSlcbiAgICB3aW5kb3dbY29tcG9uZW50Lm5hbWVdID0gY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrTmVzdGVkQ29tcG9uZW50cyggbWFya3VwKSB7XG5cbiAgICB2YXIgY29tcG9uZW50cyA9IHJlYWREYXRhKFwidWktZWRpdG9yXCIpO1xuXG4gICAgcmV0dXJuIGNvbXBvbmVudHMuZmlsdGVyKGNvbXBvbmVudD0+IG1hcmt1cC5pbmNsdWRlcyhjb21wb25lbnQubmFtZSkpLmxlbmd0aCA+MDtcbn1cblxuLyoqIFRha2VzIGNvbXBvbmVudHMgYW5kIHNhdmVzIHRoZW0gdG8gd2luZG93IGFzIHJlYWN0IE9iamVjdCAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVDb21wb25lbnRzVG9XaW5kb3coIG5lc3RlZENvbXBvbmVudHMpe1xuICAgIC8vIFRyYW5zcGlsZSB0aGVtIGFuZCBtYWtlIHRoZW0gZ2xvYmFsLlxuICAgIG5lc3RlZENvbXBvbmVudHMuZm9yRWFjaChmdW5jdGlvbihjb21wb25lbnQpe1xuICAgICAgICBzYXZlVG9XaW5kb3coY29tcG9uZW50KVxuICAgIH0pO1xufVxuXG4vKiogVGFrZXMgbWFya3VwIGFuZCByZXR1cm5zIGNoaWxkcmVuIGNvbXBvbmVudCBvYmplY3RzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE5lc3RlZENvbXBvbmVudHMgKHBhcmVudCkge1xuICAgIC8vIFNob3VsZCBiZSBhYmxlIHRvIGRldGVjdCBuZXN0ZWQgY29tcG9uZW50LlxuXG4gICAgbGV0IGNvbXBvbmVudHM9IHJlYWREYXRhKFwidWktZWRpdG9yXCIpO1xuICAgIGxldCBuZXN0ZWRDb21wb25lbnRzID0gW3BhcmVudF07XG4gICAgaWYoY2hlY2tOZXN0ZWRDb21wb25lbnRzKHBhcmVudC5tYXJrdXApKXtcbiAgICAgICAgLy8gZmluZCBhbGwgdGhlIG5lc3RlZCBjb21wb25lbnRzIGZyb20gdGhlIG1hcmt1cCBhbmQgcHVzaCBpdCB0byBuZXN0ZWRDb21wb25lbnRzLlxuICAgICAgICBsZXQgY2hpbGRyZW4gPSBjb21wb25lbnRzLmZpbHRlcihjb21wb25lbnQ9PiBwYXJlbnQubWFya3VwLmluY2x1ZGVzKGNvbXBvbmVudC5uYW1lKSk7XG4gICAgICAgIC8vIEZpbmQgZ3JhbmQga2lkcy5cbiAgICAgICAgbGV0IGdyYW5kS2lkcyA9IGNoaWxkcmVuLm1hcChnZXROZXN0ZWRDb21wb25lbnRzKS5mbGF0KDMpXG4gICAgICAgIG5lc3RlZENvbXBvbmVudHMucHVzaCguLi5ncmFuZEtpZHMpXG4gICAgfVxuICAgIHJldHVybiBuZXN0ZWRDb21wb25lbnRzLmZpbHRlcihjb21wb25lbnQ9PmNvbXBvbmVudCAmJiBjb21wb25lbnQubWFya3VwKTtcbn1cbiIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCJcbiAgICBleHBvcnQgZnVuY3Rpb24gZHJvcEhhbmRsZXIoZXYpIHtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IGNvbXBvbmVudE5hbWUgPSBldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImNvbXBvbmVudC1uYW1lXCIpO1xuICAgICAgICBsZXQgZm9sZGVyTmFtZSA9IGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwiZm9sZGVyLW5hbWVcIik7XG4gICAgICAgIGxldCBjb250ZW50cyA9IEFycmF5LmZyb20odGhpcy5zdGF0ZS5jb250ZW50cyk7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGRyb3BwZWQgaXRlbSBpcyBhIGNvbXBvbmVudFxuICAgICAgICBpZihjb21wb25lbnROYW1lKXtcbiAgICAgICAgICAgIGNvbnRlbnRzLnB1c2goY29tcG9uZW50TmFtZSlcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayBpZiBpdCBpcyBhIGZvbGRlci4gQWxzbyBjaGVjayBpZiB3ZSBhcmUgbm90IGRyb3BwaW5nIG9uIHRoZSBvcmlnaW5hbCBmb2xkZXIuIG1heSBiZSByZW1vdmUgaXQgZnJvbSB0aGUgZG9tLiBOT1BFLiBcbiAgICAgICAgZWxzZSBpZihmb2xkZXJOYW1lICYmIGZvbGRlck5hbWUhPT10aGlzLnN0YXRlLmZvbGRlck5hbWUpe1xuICAgICAgICAgICAgY29udGVudHMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogZm9sZGVyTmFtZSxcbiAgICAgICAgICAgICAgICBjb250ZW50czpbXSxcbiAgICAgICAgICAgICAgICB0eXBlOlwiZm9sZGVyXCIsXG4gICAgICAgICAgICAgICAgc3RhdHVzOlwiY2xvc2VkXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5vbkZvbGRlclVwZGF0ZSh7XG4gICAgICAgICAgICBuYW1lOiB0aGlzLnN0YXRlLm5hbWUsXG4gICAgICAgICAgICBjb250ZW50cyA6IGNvbnRlbnRzLFxuICAgICAgICAgICAgdHlwZTpcImZvbGRlclwiLFxuICAgICAgICAgICAgc3RhdHVzOlwib3BlblwiXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc29sZS5sb2coXCJEcm9wIGZyb20gZm9sZGVyXCIpO1xuICAgIH1cblxuICAgIGV4cG9ydCBmdW5jdGlvbiBkcmFnT3ZlckhhbmRsZXIoZXYpIHtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBmb2xkZXJDbGFzczogXCJuZXdGb2xkZXIgZHJhZ092ZXJcIixcbiAgICAgICAgICAgIHN0YXR1czogXCJvcGVuXCJcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coXCJEcmFnXCIpO1xuICAgIH1cblxuICAgIGV4cG9ydCBmdW5jdGlvbiBkcmFnTGVhdmVIYW5kbGVyKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJkcmFnXCIpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGZvbGRlckNsYXNzOiBcIm5ld0ZvbGRlclwiLFxuICAgICAgICAgICAgc3RhdHVzOiBcImNsb3NlZFwiXG4gICAgICAgIH0pXG4gICAgfVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBvbkRyYWdTdGFydChlKXtcblxuICAgIGxldCBuYW1lID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtZm9sZGVyLW5hbWVcIilcbiAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwiZm9sZGVyLW5hbWVcIiwgbmFtZSk7XG59XG5cblxuXG5pbXBvcnQge8KgZ2V0TmVzdGVkQ29tcG9uZW50cyB9IGZyb20gXCIuLi8uLi8uLi8uLi91dGlsaXRpZXMvUnVudGltZVwiO1xuaW1wb3J0IHsgY29udmVydFRvUmVhY3QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbGl0aWVzL0NvZGVHZW5lcmF0b3IvUmVhY3RcIjtcbmltcG9ydCB7IHJlYWREYXRhIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWxpdGllcy9TdG9yYWdlXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG9uRXhwb3J0KGNvbXBvbmVudE5hbWUpIHtcbiAgICBsZXQgY29tcG9uZW50cyA9IHJlYWREYXRhKFwidWktZWRpdG9yXCIpO1xuICAgIGxldCBzZWxlY3RlZENvbXBvbmVudCA9IGNvbXBvbmVudHMuZmluZChjb21wb25lbnQ9PmNvbXBvbmVudC5uYW1lLmluY2x1ZGVzKGNvbXBvbmVudE5hbWUpKTtcbiAgICBsZXQgbmVzdGVkQ29tcG9uZW50cyA9IGdldE5lc3RlZENvbXBvbmVudHMoc2VsZWN0ZWRDb21wb25lbnQpO1xuXG4gICAgbGV0IHVuaXF1ZUNvbXBvbmVudHMgPSBbLi4ubmV3IFNldChuZXN0ZWRDb21wb25lbnRzLm1hcChjb209PmNvbS5uYW1lKSldLm1hcChuYW1lPT57XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzLmZpbmQoZWxlbWVudD0+ZWxlbWVudC5uYW1lPT09bmFtZSlcbiAgICB9KVxuICAgIGNvbnN0IHJlbW92ZVBhcmFudGhlc2lzID0gKGNvbXBvbmVudCk9PntcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5yZXBsYWNlKFwiKFwiLFwiXCIpLnJlcGxhY2UoXCJ9KVwiLFwifVwiKVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyh1bmlxdWVDb21wb25lbnRzLm1hcChmdW5jdGlvbihjb21wb25lbnQpe1xuICAgICAgICByZXR1cm4gY29udmVydFRvUmVhY3QoY29tcG9uZW50KVxuICAgIH0pLm1hcChyZW1vdmVQYXJhbnRoZXNpcykuam9pbihcIlwiKSk7XG59XG4iLCIvLyBFbGVtZW50cyB0byAgcmVhY3QgY29tcG9uZW50LlxuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRUb1JlYWN0IChjb21wb25lbnQpe1xuXG4gICAgbGV0IG1hcmt1cCA9IFwibWFya3VwXCI7XG5cbiAgICBjb21wb25lbnQuZXZlbnRzLmZvckVhY2goZXZlbnQ9PntcbiAgICAgICAgZXZlbnQuaWQgPSBldmVudC5pZC5yZXBsYWNlKFwiLVwiLFwiXCIpO1xuICAgIH0pXG5cbiAgICBsZXQgYWRkUHJvcHM9IChjb21wb25lbnQpPT57XG4gICAgICAgIHJldHVybiBjb21wb25lbnRbbWFya3VwXS5yZXBsYWNlKFwiPlwiLGAgey4uLnRoaXMucHJvcHN9Pnt0aGlzLnByb3BzLmNoaWxkcmVufWApXG4gICAgfVxuXG4gICAgbGV0IGdldENvbXBvbmVudEV2ZW50ZWRNYXJrdXAgPSAobWFya3VwLCBldmVudHMpPT57XG4gICAgICAgIGV2ZW50cy5mb3JFYWNoKGV2ZW50PT57XG4gICAgICAgICAgICBsZXQgaWQgPSBgaWQ9XCIke2V2ZW50LmlkfVwiYDtcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIG1hcmt1cCBjb250YWlucyB0aGUgaWQuXG4gICAgICAgICAgICBpZihtYXJrdXAuaW5jbHVkZXMoaWQpKXtcbiAgICAgICAgICAgICAgICBtYXJrdXAgPSBtYXJrdXAucmVwbGFjZShpZCwgYCR7aWR9ICR7ZXZlbnQubmFtZX09e3RoaXMuJHtldmVudC5pZCtldmVudC5uYW1lfS5iaW5kKHRoaXMpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaXRzIGEgY2hpbGQgY29tcG9uZW50LlxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICBtYXJrdXAgPSBtYXJrdXAucmVwbGFjZShgPCR7ZXZlbnQuaWR9YCxgPCR7ZXZlbnQuaWR9ICR7ZXZlbnQubmFtZX09e3RoaXMuJHtldmVudC5pZCtldmVudC5uYW1lfS5iaW5kKHRoaXMpfWApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICByZXR1cm4gbWFya3VwLnNwbGl0KFwie3N0YXRlLlwiKS5qb2luKFwie3RoaXMuc3RhdGUuXCIpXG4gICAgfVxuXG4gICAgLy8gY2hlY2tzIGlmIHN0YXRlIG92ZXJyaWRlIGlzIG9uLiB0aGVuIGFkZHMgc3RhdGUgcHJvcCB0byBjaGlsZCBcbiAgICBsZXQgZ2V0U3RhdGVkTWFya3VwID0gKG1hcmt1cCk9PntcbiAgICAgICAgLy8gZm9yIGFsbCB0aGUgY29uZmlnLlxuICAgICAgICAvLyBmaWx0ZXIgY2hpbGQgd2l0aCBvdmVyaWRlIHN0YXRlIGlzIHRydWVcbiAgICAgICAgbGV0IGNvbmZpZyA9IEpTT04ucGFyc2UoY29tcG9uZW50LmNvbmZpZyk7XG4gICAgICAgIGxldCBjaGlsZHJlbkNvbmZpZyA9IE9iamVjdC5rZXlzKGNvbmZpZyk7XG4gICAgICAgIGNoaWxkcmVuQ29uZmlnLmZvckVhY2goY2hpbGROYW1lPT57XG5cbiAgICAgICAgICAgIC8vIFBSRUNBVVRJT046IEVkaXQgbWFya3VwIGZvciByZW5kZXJpbmcgbGlzdC4gU2hvdWxkIG5vdCB1c2Ugb3RoZXIgY29uZmlndXJhdGlvbiB3aGlsZSB1c2luZyB0aGlzLlxuICAgICAgICAgICAgaWYoY29uZmlnW2NoaWxkTmFtZV0ub3ZlcnJpZGUgKXtcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGRNYXJrdXAgPSBgPCR7Y2hpbGROYW1lfT48LyR7Y2hpbGROYW1lfT5gO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkTWFya3VwV2l0aFByb3BzID0gYDwke2NoaWxkTmFtZX0gc3RhdGU9e2l0ZW19IGtleT17aX0+PC8ke2NoaWxkTmFtZX0+YDtcbiAgICAgICAgICAgICAgICBsZXQgcmVuZGVyTGlzdE1hcmt1cCA9IGB7dGhpcy5zdGF0ZS4ke2NoaWxkTmFtZX0ubWFwKChpdGVtLGkpPT4ke2NoaWxkTWFya3VwV2l0aFByb3BzfSl9YDtcbiAgICAgICAgICAgICAgICBtYXJrdXAgPSAgbWFya3VwLnJlcGxhY2UoY2hpbGRNYXJrdXAsIHJlbmRlckxpc3RNYXJrdXApOyAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gbWFya3VwO1xuICAgIH1cbiAgICBcbiAgICBsZXQgcHJvcHNJbk1hcmt1cCA9IGFkZFByb3BzKGNvbXBvbmVudCk7XG4gICAgbGV0IHN0YXRlT3ZlcmlkZU1hcmt1cCA9IGdldFN0YXRlZE1hcmt1cChwcm9wc0luTWFya3VwKTtcbiAgICBsZXQgY29tcG9uZW50RXZlbnRlZE1hcmt1cCA9IGdldENvbXBvbmVudEV2ZW50ZWRNYXJrdXAoc3RhdGVPdmVyaWRlTWFya3VwLCBjb21wb25lbnQuZXZlbnRzKTtcblxuICAgIGxldCBSZWFjdENvbXBvbmVudCA9IFxuICAgIGAoXG4gICAgICAgIGNsYXNzICR7Y29tcG9uZW50Lm5hbWV9IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICAgICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5wcm9wcy5zdGF0ZSB8fCAke2NvbXBvbmVudC5zdGF0ZX07XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgJHtjb21wb25lbnQuZXZlbnRzLm1hcChldmVudD0+e1xuICAgICAgICAgICAgICAgIGlmKGV2ZW50LnB1Ymxpc2hhYmxlKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICR7ZXZlbnQuaWQrZXZlbnQubmFtZX0gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGF0ZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAke2V2ZW50LnJlZHVjZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy4ke2V2ZW50LnB1Ymxpc2hOYW1lfT8gdGhpcy5wcm9wcy4ke2V2ZW50LnB1Ymxpc2hOYW1lfShlKTpudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgICAgICAgICAke2V2ZW50LmlkK2V2ZW50Lm5hbWV9IChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgJHtldmVudC5yZWR1Y2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIH0pLmpvaW4oXCJcXG5cIil9XG4gICAgICAgIFxuICAgICAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoJHtjb21wb25lbnRFdmVudGVkTWFya3VwfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgYFxuICAgIHJldHVybiBSZWFjdENvbXBvbmVudDtcbn1cbiIsIi8vIExpYnJhcmllcy5cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5pbXBvcnQgTWVzc2FnZUNvbXBvbmVudCBmcm9tIFwiLi4vTWVzc2FnZUNvbXBvbmVudFwiO1xuXG5jbGFzcyBNZXNzYWdlc0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgbWVzc2FnZXMgPSB0aGlzLnByb3BzLm1lc3NhZ2VzO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnNvbGVcIj5cbiAgICAgICAgICAgICAgICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSxpbmRleCk9PjxNZXNzYWdlQ29tcG9uZW50IGtleT17aW5kZXh9IG1lc3NhZ2U9e21lc3NhZ2V9Lz4pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlc0NvbXBvbmVudDsiLCIvLyBMaWJyYXJpZXMuXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cbi8vIERlcGVuZGVuY2llcy5cbmltcG9ydCBcIi4vSW5kZXgvaW5kZXguY3NzXCI7XG5cbi8vIENvbXBvbmVudHMuXG5cblxuaW1wb3J0IEFzc2V0cyBmcm9tIFwiLi9Bc3NldHNcIjtcbmltcG9ydCBDb21wb25lbnRzIGZyb20gXCIuL0NvbXBvbmVudHNcIjtcbmltcG9ydCBEcmFnZ2FibGVDb21wb25lbnQgZnJvbSBcIi4vVXRpbGl0aWVzL0NvbXBvbmVudHMvRHJhZ2dhYmxlQ29tcG9uZW50XCI7XG5pbXBvcnQgRWRpdG9yIGZyb20gXCIuL0VkaXRvclwiO1xuaW1wb3J0IEV2ZW50cyBmcm9tIFwiLi9FdmVudHNcIjtcbmltcG9ydCBIaXN0b3J5IGZyb20gXCIuL0hpc3RvcnlcIjtcbmltcG9ydCBQcmV2aWV3IGZyb20gXCIuL1ByZXZpZXdcIjtcblxuLy8gUmVkdWNlcnMuXG5pbXBvcnQgeyB1cGRhdGVFdmVudCwgdXBkYXRlQ29uZmlnLCBzYXZlRWxlbWVudCwgdXBkYXRlU2VsZWN0ZWRDb21wb25lbnQgfSBmcm9tIFwiLi9JbmRleC9SZWR1Y2VyXCI7XG5cbi8vIFV0aWxzXG5pbXBvcnQge3JlYWREYXRhLCB3cml0ZURhdGF9IGZyb20gXCIuL3V0aWxpdGllcy9TdG9yYWdlXCI7XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIGxldCBjb21wb25lbnRzID0gcmVhZERhdGEoXCJ1aS1lZGl0b3JcIik7XG4gICAgICAgIGxldCBjb21wb25lbnROYW1lcyA9IGNvbXBvbmVudHMubWFwKGNvbXBvbmVudD0+Y29tcG9uZW50Lm5hbWUpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY29tcG9uZW50czogY29tcG9uZW50cyxcbiAgICAgICAgICAgIHNlbGVjdGVkVGFnIDogXCJcIixcbiAgICAgICAgICAgIGNvbXBvbmVudDoge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgbWFya3VwOiBcIlwiLFxuICAgICAgICAgICAgICAgIHN0eWxlOiBcIlwiLFxuICAgICAgICAgICAgICAgIHN0YXRlOiBcInsgfVwiLFxuICAgICAgICAgICAgICAgIGV2ZW50czogW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWxlY3RlZENvbXBvbmVudDogXCJcIixcbiAgICAgICAgICAgIGZvbGRlcnM6IHJlYWREYXRhKFwiZm9sZGVyc1wiKSxcbiAgICAgICAgICAgIHNob3dFZGl0b3I6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVDb25maWcgPSB1cGRhdGVDb25maWcuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51cGRhdGVFdmVudCA9IHVwZGF0ZUV2ZW50LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuc2F2ZUVsZW1lbnQgPSBzYXZlRWxlbWVudC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkQ29tcG9uZW50ID0gdXBkYXRlU2VsZWN0ZWRDb21wb25lbnQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICB1cGRhdGVQcmV2aWV3KGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBwcmV2aWV3Q29tcG9uZW50OiBlbGVtZW50XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZVN0eWxlcygpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuc3RhdGUuc2VsZWN0ZWRDb21wb25lbnRcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB1cGRhdGVGb2xkZXJzKGZvbGRlcnMpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGZvbGRlcnM6IGZvbGRlcnNcbiAgICAgICAgfSlcbiAgICAgICAgd3JpdGVEYXRhKFwiZm9sZGVyc1wiLCBmb2xkZXJzKVxuICAgIH1cblxuICAgIG9wZW5FZGl0b3IoKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzaG93RWRpdG9yOiB0cnVlXG4gICAgICAgIH0pXG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRDb21wb25lbnQgPSB0aGlzLnN0YXRlLnNlbGVjdGVkQ29tcG9uZW50IHx8IHRoaXMuc3RhdGUuY29tcG9uZW50O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlQ29tcG9uZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e01hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwMCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cz17dGhpcy5zdGF0ZS5jb21wb25lbnRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbGRlcnM9e3RoaXMuc3RhdGUuZm9sZGVyc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZENvbXBvbmVudD17dGhpcy5zdGF0ZS5zZWxlY3RlZENvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkNvbXBvbmVudHNcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uT3BlbkVkaXRvcj17dGhpcy5vcGVuRWRpdG9yLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0aW9uPXt0aGlzLnVwZGF0ZVNlbGVjdGVkQ29tcG9uZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZvbGRlcnNVcGRhdGU9e3RoaXMudXBkYXRlRm9sZGVycy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGVDb21wb25lbnQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZUNvbXBvbmVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBc3NldHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkFzc2V0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZUNvbXBvbmVudD5cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZUNvbXBvbmVudD5cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFdmVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e01hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwMCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtzZWxlY3RlZENvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRhZz17dGhpcy5zdGF0ZS5zZWxlY3RlZFRhZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzPXt0aGlzLnN0YXRlLmNvbXBvbmVudHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25FdmVudHNVcGRhdGU9e3RoaXMudXBkYXRlRXZlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Db25maWdVcGRhdGU9e3RoaXMudXBkYXRlQ29uZmlnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRXZlbnRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlQ29tcG9uZW50PlxuICAgIFxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zaG93RWRpdG9yPyBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGVDb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVkaXRvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e01hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwMCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ9e3NlbGVjdGVkQ29tcG9uZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtzZWxlY3RlZENvbXBvbmVudC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrdXA9e3NlbGVjdGVkQ29tcG9uZW50Lm1hcmt1cH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3NlbGVjdGVkQ29tcG9uZW50LnN0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZT17c2VsZWN0ZWRDb21wb25lbnQuc3RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRWRpdG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2F2ZT17dGhpcy5zYXZlRWxlbWVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGVDb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDogXG4gICAgICAgICAgICAgICAgICAgIG51bGx9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGVDb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJldmlldyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e01hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwMCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtzZWxlY3RlZENvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlByZXZpZXdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGVDb21wb25lbnQ+XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGVDb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SGlzdG9yeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiSGlzdG9yeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZUNvbXBvbmVudD5cbiAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPERyYWdnYWJsZUNvbXBvbmVudD5cbiAgICAgICAgICAgICAgICAgICAgPEhpc3RvcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJIaXN0b3J5XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZUNvbXBvbmVudD5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59XG5cblxuUmVhY3RET00ucmVuZGVyKDxJbmRleCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmRleFwiKSk7IiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi44LjZcbiAqIHJlYWN0LnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO3ZhciBrPXJlcXVpcmUoXCJvYmplY3QtYXNzaWduXCIpLG49XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvcixwPW4/U3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIik6NjAxMDMscT1uP1N5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIik6NjAxMDYscj1uP1N5bWJvbC5mb3IoXCJyZWFjdC5mcmFnbWVudFwiKTo2MDEwNyx0PW4/U3ltYm9sLmZvcihcInJlYWN0LnN0cmljdF9tb2RlXCIpOjYwMTA4LHU9bj9TeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIik6NjAxMTQsdj1uP1N5bWJvbC5mb3IoXCJyZWFjdC5wcm92aWRlclwiKTo2MDEwOSx3PW4/U3ltYm9sLmZvcihcInJlYWN0LmNvbnRleHRcIik6NjAxMTAseD1uP1N5bWJvbC5mb3IoXCJyZWFjdC5jb25jdXJyZW50X21vZGVcIik6NjAxMTEseT1uP1N5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTo2MDExMix6PW4/U3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlXCIpOjYwMTEzLGFhPW4/U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIik6XG42MDExNSxiYT1uP1N5bWJvbC5mb3IoXCJyZWFjdC5sYXp5XCIpOjYwMTE2LEE9XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yO2Z1bmN0aW9uIGNhKGEsYixkLGMsZSxnLGgsZil7aWYoIWEpe2E9dm9pZCAwO2lmKHZvaWQgMD09PWIpYT1FcnJvcihcIk1pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50IGZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuXCIpO2Vsc2V7dmFyIGw9W2QsYyxlLGcsaCxmXSxtPTA7YT1FcnJvcihiLnJlcGxhY2UoLyVzL2csZnVuY3Rpb24oKXtyZXR1cm4gbFttKytdfSkpO2EubmFtZT1cIkludmFyaWFudCBWaW9sYXRpb25cIn1hLmZyYW1lc1RvUG9wPTE7dGhyb3cgYTt9fVxuZnVuY3Rpb24gQihhKXtmb3IodmFyIGI9YXJndW1lbnRzLmxlbmd0aC0xLGQ9XCJodHRwczovL3JlYWN0anMub3JnL2RvY3MvZXJyb3ItZGVjb2Rlci5odG1sP2ludmFyaWFudD1cIithLGM9MDtjPGI7YysrKWQrPVwiJmFyZ3NbXT1cIitlbmNvZGVVUklDb21wb25lbnQoYXJndW1lbnRzW2MrMV0pO2NhKCExLFwiTWluaWZpZWQgUmVhY3QgZXJyb3IgI1wiK2ErXCI7IHZpc2l0ICVzIGZvciB0aGUgZnVsbCBtZXNzYWdlIG9yIHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCBmb3IgZnVsbCBlcnJvcnMgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4gXCIsZCl9dmFyIEM9e2lzTW91bnRlZDpmdW5jdGlvbigpe3JldHVybiExfSxlbnF1ZXVlRm9yY2VVcGRhdGU6ZnVuY3Rpb24oKXt9LGVucXVldWVSZXBsYWNlU3RhdGU6ZnVuY3Rpb24oKXt9LGVucXVldWVTZXRTdGF0ZTpmdW5jdGlvbigpe319LEQ9e307XG5mdW5jdGlvbiBFKGEsYixkKXt0aGlzLnByb3BzPWE7dGhpcy5jb250ZXh0PWI7dGhpcy5yZWZzPUQ7dGhpcy51cGRhdGVyPWR8fEN9RS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudD17fTtFLnByb3RvdHlwZS5zZXRTdGF0ZT1mdW5jdGlvbihhLGIpe1wib2JqZWN0XCIhPT10eXBlb2YgYSYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGEmJm51bGwhPWE/QihcIjg1XCIpOnZvaWQgMDt0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsYSxiLFwic2V0U3RhdGVcIil9O0UucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKGEpe3RoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcyxhLFwiZm9yY2VVcGRhdGVcIil9O2Z1bmN0aW9uIEYoKXt9Ri5wcm90b3R5cGU9RS5wcm90b3R5cGU7ZnVuY3Rpb24gRyhhLGIsZCl7dGhpcy5wcm9wcz1hO3RoaXMuY29udGV4dD1iO3RoaXMucmVmcz1EO3RoaXMudXBkYXRlcj1kfHxDfXZhciBIPUcucHJvdG90eXBlPW5ldyBGO1xuSC5jb25zdHJ1Y3Rvcj1HO2soSCxFLnByb3RvdHlwZSk7SC5pc1B1cmVSZWFjdENvbXBvbmVudD0hMDt2YXIgST17Y3VycmVudDpudWxsfSxKPXtjdXJyZW50Om51bGx9LEs9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxMPXtrZXk6ITAscmVmOiEwLF9fc2VsZjohMCxfX3NvdXJjZTohMH07XG5mdW5jdGlvbiBNKGEsYixkKXt2YXIgYz12b2lkIDAsZT17fSxnPW51bGwsaD1udWxsO2lmKG51bGwhPWIpZm9yKGMgaW4gdm9pZCAwIT09Yi5yZWYmJihoPWIucmVmKSx2b2lkIDAhPT1iLmtleSYmKGc9XCJcIitiLmtleSksYilLLmNhbGwoYixjKSYmIUwuaGFzT3duUHJvcGVydHkoYykmJihlW2NdPWJbY10pO3ZhciBmPWFyZ3VtZW50cy5sZW5ndGgtMjtpZigxPT09ZillLmNoaWxkcmVuPWQ7ZWxzZSBpZigxPGYpe2Zvcih2YXIgbD1BcnJheShmKSxtPTA7bTxmO20rKylsW21dPWFyZ3VtZW50c1ttKzJdO2UuY2hpbGRyZW49bH1pZihhJiZhLmRlZmF1bHRQcm9wcylmb3IoYyBpbiBmPWEuZGVmYXVsdFByb3BzLGYpdm9pZCAwPT09ZVtjXSYmKGVbY109ZltjXSk7cmV0dXJueyQkdHlwZW9mOnAsdHlwZTphLGtleTpnLHJlZjpoLHByb3BzOmUsX293bmVyOkouY3VycmVudH19XG5mdW5jdGlvbiBkYShhLGIpe3JldHVybnskJHR5cGVvZjpwLHR5cGU6YS50eXBlLGtleTpiLHJlZjphLnJlZixwcm9wczphLnByb3BzLF9vd25lcjphLl9vd25lcn19ZnVuY3Rpb24gTihhKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZhLiQkdHlwZW9mPT09cH1mdW5jdGlvbiBlc2NhcGUoYSl7dmFyIGI9e1wiPVwiOlwiPTBcIixcIjpcIjpcIj0yXCJ9O3JldHVyblwiJFwiKyhcIlwiK2EpLnJlcGxhY2UoL1s9Ol0vZyxmdW5jdGlvbihhKXtyZXR1cm4gYlthXX0pfXZhciBPPS9cXC8rL2csUD1bXTtmdW5jdGlvbiBRKGEsYixkLGMpe2lmKFAubGVuZ3RoKXt2YXIgZT1QLnBvcCgpO2UucmVzdWx0PWE7ZS5rZXlQcmVmaXg9YjtlLmZ1bmM9ZDtlLmNvbnRleHQ9YztlLmNvdW50PTA7cmV0dXJuIGV9cmV0dXJue3Jlc3VsdDphLGtleVByZWZpeDpiLGZ1bmM6ZCxjb250ZXh0OmMsY291bnQ6MH19XG5mdW5jdGlvbiBSKGEpe2EucmVzdWx0PW51bGw7YS5rZXlQcmVmaXg9bnVsbDthLmZ1bmM9bnVsbDthLmNvbnRleHQ9bnVsbDthLmNvdW50PTA7MTA+UC5sZW5ndGgmJlAucHVzaChhKX1cbmZ1bmN0aW9uIFMoYSxiLGQsYyl7dmFyIGU9dHlwZW9mIGE7aWYoXCJ1bmRlZmluZWRcIj09PWV8fFwiYm9vbGVhblwiPT09ZSlhPW51bGw7dmFyIGc9ITE7aWYobnVsbD09PWEpZz0hMDtlbHNlIHN3aXRjaChlKXtjYXNlIFwic3RyaW5nXCI6Y2FzZSBcIm51bWJlclwiOmc9ITA7YnJlYWs7Y2FzZSBcIm9iamVjdFwiOnN3aXRjaChhLiQkdHlwZW9mKXtjYXNlIHA6Y2FzZSBxOmc9ITB9fWlmKGcpcmV0dXJuIGQoYyxhLFwiXCI9PT1iP1wiLlwiK1QoYSwwKTpiKSwxO2c9MDtiPVwiXCI9PT1iP1wiLlwiOmIrXCI6XCI7aWYoQXJyYXkuaXNBcnJheShhKSlmb3IodmFyIGg9MDtoPGEubGVuZ3RoO2grKyl7ZT1hW2hdO3ZhciBmPWIrVChlLGgpO2crPVMoZSxmLGQsYyl9ZWxzZSBpZihudWxsPT09YXx8XCJvYmplY3RcIiE9PXR5cGVvZiBhP2Y9bnVsbDooZj1BJiZhW0FdfHxhW1wiQEBpdGVyYXRvclwiXSxmPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBmP2Y6bnVsbCksXCJmdW5jdGlvblwiPT09dHlwZW9mIGYpZm9yKGE9Zi5jYWxsKGEpLGg9XG4wOyEoZT1hLm5leHQoKSkuZG9uZTspZT1lLnZhbHVlLGY9YitUKGUsaCsrKSxnKz1TKGUsZixkLGMpO2Vsc2VcIm9iamVjdFwiPT09ZSYmKGQ9XCJcIithLEIoXCIzMVwiLFwiW29iamVjdCBPYmplY3RdXCI9PT1kP1wib2JqZWN0IHdpdGgga2V5cyB7XCIrT2JqZWN0LmtleXMoYSkuam9pbihcIiwgXCIpK1wifVwiOmQsXCJcIikpO3JldHVybiBnfWZ1bmN0aW9uIFUoYSxiLGQpe3JldHVybiBudWxsPT1hPzA6UyhhLFwiXCIsYixkKX1mdW5jdGlvbiBUKGEsYil7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmbnVsbCE9YS5rZXk/ZXNjYXBlKGEua2V5KTpiLnRvU3RyaW5nKDM2KX1mdW5jdGlvbiBlYShhLGIpe2EuZnVuYy5jYWxsKGEuY29udGV4dCxiLGEuY291bnQrKyl9XG5mdW5jdGlvbiBmYShhLGIsZCl7dmFyIGM9YS5yZXN1bHQsZT1hLmtleVByZWZpeDthPWEuZnVuYy5jYWxsKGEuY29udGV4dCxiLGEuY291bnQrKyk7QXJyYXkuaXNBcnJheShhKT9WKGEsYyxkLGZ1bmN0aW9uKGEpe3JldHVybiBhfSk6bnVsbCE9YSYmKE4oYSkmJihhPWRhKGEsZSsoIWEua2V5fHxiJiZiLmtleT09PWEua2V5P1wiXCI6KFwiXCIrYS5rZXkpLnJlcGxhY2UoTyxcIiQmL1wiKStcIi9cIikrZCkpLGMucHVzaChhKSl9ZnVuY3Rpb24gVihhLGIsZCxjLGUpe3ZhciBnPVwiXCI7bnVsbCE9ZCYmKGc9KFwiXCIrZCkucmVwbGFjZShPLFwiJCYvXCIpK1wiL1wiKTtiPVEoYixnLGMsZSk7VShhLGZhLGIpO1IoYil9ZnVuY3Rpb24gVygpe3ZhciBhPUkuY3VycmVudDtudWxsPT09YT9CKFwiMzIxXCIpOnZvaWQgMDtyZXR1cm4gYX1cbnZhciBYPXtDaGlsZHJlbjp7bWFwOmZ1bmN0aW9uKGEsYixkKXtpZihudWxsPT1hKXJldHVybiBhO3ZhciBjPVtdO1YoYSxjLG51bGwsYixkKTtyZXR1cm4gY30sZm9yRWFjaDpmdW5jdGlvbihhLGIsZCl7aWYobnVsbD09YSlyZXR1cm4gYTtiPVEobnVsbCxudWxsLGIsZCk7VShhLGVhLGIpO1IoYil9LGNvdW50OmZ1bmN0aW9uKGEpe3JldHVybiBVKGEsZnVuY3Rpb24oKXtyZXR1cm4gbnVsbH0sbnVsbCl9LHRvQXJyYXk6ZnVuY3Rpb24oYSl7dmFyIGI9W107VihhLGIsbnVsbCxmdW5jdGlvbihhKXtyZXR1cm4gYX0pO3JldHVybiBifSxvbmx5OmZ1bmN0aW9uKGEpe04oYSk/dm9pZCAwOkIoXCIxNDNcIik7cmV0dXJuIGF9fSxjcmVhdGVSZWY6ZnVuY3Rpb24oKXtyZXR1cm57Y3VycmVudDpudWxsfX0sQ29tcG9uZW50OkUsUHVyZUNvbXBvbmVudDpHLGNyZWF0ZUNvbnRleHQ6ZnVuY3Rpb24oYSxiKXt2b2lkIDA9PT1iJiYoYj1udWxsKTthPXskJHR5cGVvZjp3LF9jYWxjdWxhdGVDaGFuZ2VkQml0czpiLFxuX2N1cnJlbnRWYWx1ZTphLF9jdXJyZW50VmFsdWUyOmEsX3RocmVhZENvdW50OjAsUHJvdmlkZXI6bnVsbCxDb25zdW1lcjpudWxsfTthLlByb3ZpZGVyPXskJHR5cGVvZjp2LF9jb250ZXh0OmF9O3JldHVybiBhLkNvbnN1bWVyPWF9LGZvcndhcmRSZWY6ZnVuY3Rpb24oYSl7cmV0dXJueyQkdHlwZW9mOnkscmVuZGVyOmF9fSxsYXp5OmZ1bmN0aW9uKGEpe3JldHVybnskJHR5cGVvZjpiYSxfY3RvcjphLF9zdGF0dXM6LTEsX3Jlc3VsdDpudWxsfX0sbWVtbzpmdW5jdGlvbihhLGIpe3JldHVybnskJHR5cGVvZjphYSx0eXBlOmEsY29tcGFyZTp2b2lkIDA9PT1iP251bGw6Yn19LHVzZUNhbGxiYWNrOmZ1bmN0aW9uKGEsYil7cmV0dXJuIFcoKS51c2VDYWxsYmFjayhhLGIpfSx1c2VDb250ZXh0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIFcoKS51c2VDb250ZXh0KGEsYil9LHVzZUVmZmVjdDpmdW5jdGlvbihhLGIpe3JldHVybiBXKCkudXNlRWZmZWN0KGEsYil9LHVzZUltcGVyYXRpdmVIYW5kbGU6ZnVuY3Rpb24oYSxcbmIsZCl7cmV0dXJuIFcoKS51c2VJbXBlcmF0aXZlSGFuZGxlKGEsYixkKX0sdXNlRGVidWdWYWx1ZTpmdW5jdGlvbigpe30sdXNlTGF5b3V0RWZmZWN0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIFcoKS51c2VMYXlvdXRFZmZlY3QoYSxiKX0sdXNlTWVtbzpmdW5jdGlvbihhLGIpe3JldHVybiBXKCkudXNlTWVtbyhhLGIpfSx1c2VSZWR1Y2VyOmZ1bmN0aW9uKGEsYixkKXtyZXR1cm4gVygpLnVzZVJlZHVjZXIoYSxiLGQpfSx1c2VSZWY6ZnVuY3Rpb24oYSl7cmV0dXJuIFcoKS51c2VSZWYoYSl9LHVzZVN0YXRlOmZ1bmN0aW9uKGEpe3JldHVybiBXKCkudXNlU3RhdGUoYSl9LEZyYWdtZW50OnIsU3RyaWN0TW9kZTp0LFN1c3BlbnNlOnosY3JlYXRlRWxlbWVudDpNLGNsb25lRWxlbWVudDpmdW5jdGlvbihhLGIsZCl7bnVsbD09PWF8fHZvaWQgMD09PWE/QihcIjI2N1wiLGEpOnZvaWQgMDt2YXIgYz12b2lkIDAsZT1rKHt9LGEucHJvcHMpLGc9YS5rZXksaD1hLnJlZixmPWEuX293bmVyO2lmKG51bGwhPVxuYil7dm9pZCAwIT09Yi5yZWYmJihoPWIucmVmLGY9Si5jdXJyZW50KTt2b2lkIDAhPT1iLmtleSYmKGc9XCJcIitiLmtleSk7dmFyIGw9dm9pZCAwO2EudHlwZSYmYS50eXBlLmRlZmF1bHRQcm9wcyYmKGw9YS50eXBlLmRlZmF1bHRQcm9wcyk7Zm9yKGMgaW4gYilLLmNhbGwoYixjKSYmIUwuaGFzT3duUHJvcGVydHkoYykmJihlW2NdPXZvaWQgMD09PWJbY10mJnZvaWQgMCE9PWw/bFtjXTpiW2NdKX1jPWFyZ3VtZW50cy5sZW5ndGgtMjtpZigxPT09YyllLmNoaWxkcmVuPWQ7ZWxzZSBpZigxPGMpe2w9QXJyYXkoYyk7Zm9yKHZhciBtPTA7bTxjO20rKylsW21dPWFyZ3VtZW50c1ttKzJdO2UuY2hpbGRyZW49bH1yZXR1cm57JCR0eXBlb2Y6cCx0eXBlOmEudHlwZSxrZXk6ZyxyZWY6aCxwcm9wczplLF9vd25lcjpmfX0sY3JlYXRlRmFjdG9yeTpmdW5jdGlvbihhKXt2YXIgYj1NLmJpbmQobnVsbCxhKTtiLnR5cGU9YTtyZXR1cm4gYn0saXNWYWxpZEVsZW1lbnQ6Tix2ZXJzaW9uOlwiMTYuOC42XCIsXG51bnN0YWJsZV9Db25jdXJyZW50TW9kZTp4LHVuc3RhYmxlX1Byb2ZpbGVyOnUsX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ6e1JlYWN0Q3VycmVudERpc3BhdGNoZXI6SSxSZWFjdEN1cnJlbnRPd25lcjpKLGFzc2lnbjprfX0sWT17ZGVmYXVsdDpYfSxaPVkmJlh8fFk7bW9kdWxlLmV4cG9ydHM9Wi5kZWZhdWx0fHxaO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBjaGVja0RDRSgpIHtcbiAgLyogZ2xvYmFsIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAqL1xuICBpZiAoXG4gICAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLmNoZWNrRENFICE9PSAnZnVuY3Rpb24nXG4gICkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIFRoaXMgYnJhbmNoIGlzIHVucmVhY2hhYmxlIGJlY2F1c2UgdGhpcyBmdW5jdGlvbiBpcyBvbmx5IGNhbGxlZFxuICAgIC8vIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgY29uZGl0aW9uIGlzIHRydWUgb25seSBpbiBkZXZlbG9wbWVudC5cbiAgICAvLyBUaGVyZWZvcmUgaWYgdGhlIGJyYW5jaCBpcyBzdGlsbCBoZXJlLCBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2Fzbid0XG4gICAgLy8gcHJvcGVybHkgYXBwbGllZC5cbiAgICAvLyBEb24ndCBjaGFuZ2UgdGhlIG1lc3NhZ2UuIFJlYWN0IERldlRvb2xzIHJlbGllcyBvbiBpdC4gQWxzbyBtYWtlIHN1cmVcbiAgICAvLyB0aGlzIG1lc3NhZ2UgZG9lc24ndCBvY2N1ciBlbHNld2hlcmUgaW4gdGhpcyBmdW5jdGlvbiwgb3IgaXQgd2lsbCBjYXVzZVxuICAgIC8vIGEgZmFsc2UgcG9zaXRpdmUuXG4gICAgdGhyb3cgbmV3IEVycm9yKCdeX14nKTtcbiAgfVxuICB0cnkge1xuICAgIC8vIFZlcmlmeSB0aGF0IHRoZSBjb2RlIGFib3ZlIGhhcyBiZWVuIGRlYWQgY29kZSBlbGltaW5hdGVkIChEQ0UnZCkuXG4gICAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLmNoZWNrRENFKGNoZWNrRENFKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gRGV2VG9vbHMgc2hvdWxkbid0IGNyYXNoIFJlYWN0LCBubyBtYXR0ZXIgd2hhdC5cbiAgICAvLyBXZSBzaG91bGQgc3RpbGwgcmVwb3J0IGluIGNhc2Ugd2UgYnJlYWsgdGhpcyBjb2RlLlxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgfVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAvLyBEQ0UgY2hlY2sgc2hvdWxkIGhhcHBlbiBiZWZvcmUgUmVhY3RET00gYnVuZGxlIGV4ZWN1dGVzIHNvIHRoYXRcbiAgLy8gRGV2VG9vbHMgY2FuIHJlcG9ydCBiYWQgbWluaWZpY2F0aW9uIGR1cmluZyBpbmplY3Rpb24uXG4gIGNoZWNrRENFKCk7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtZG9tLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWRvbS5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi44LjZcbiAqIHJlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8qXG4gTW9kZXJuaXpyIDMuMC4wcHJlIChDdXN0b20gQnVpbGQpIHwgTUlUXG4qL1xuJ3VzZSBzdHJpY3QnO3ZhciBhYT1yZXF1aXJlKFwicmVhY3RcIiksbj1yZXF1aXJlKFwib2JqZWN0LWFzc2lnblwiKSxyPXJlcXVpcmUoXCJzY2hlZHVsZXJcIik7ZnVuY3Rpb24gYmEoYSxiLGMsZCxlLGYsZyxoKXtpZighYSl7YT12b2lkIDA7aWYodm9pZCAwPT09YilhPUVycm9yKFwiTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy5cIik7ZWxzZXt2YXIgbD1bYyxkLGUsZixnLGhdLGs9MDthPUVycm9yKGIucmVwbGFjZSgvJXMvZyxmdW5jdGlvbigpe3JldHVybiBsW2srK119KSk7YS5uYW1lPVwiSW52YXJpYW50IFZpb2xhdGlvblwifWEuZnJhbWVzVG9Qb3A9MTt0aHJvdyBhO319XG5mdW5jdGlvbiB4KGEpe2Zvcih2YXIgYj1hcmd1bWVudHMubGVuZ3RoLTEsYz1cImh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9lcnJvci1kZWNvZGVyLmh0bWw/aW52YXJpYW50PVwiK2EsZD0wO2Q8YjtkKyspYys9XCImYXJnc1tdPVwiK2VuY29kZVVSSUNvbXBvbmVudChhcmd1bWVudHNbZCsxXSk7YmEoITEsXCJNaW5pZmllZCBSZWFjdCBlcnJvciAjXCIrYStcIjsgdmlzaXQgJXMgZm9yIHRoZSBmdWxsIG1lc3NhZ2Ugb3IgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50IGZvciBmdWxsIGVycm9ycyBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLiBcIixjKX1hYT92b2lkIDA6eChcIjIyN1wiKTtmdW5jdGlvbiBjYShhLGIsYyxkLGUsZixnLGgsbCl7dmFyIGs9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDMpO3RyeXtiLmFwcGx5KGMsayl9Y2F0Y2gobSl7dGhpcy5vbkVycm9yKG0pfX1cbnZhciBkYT0hMSxlYT1udWxsLGZhPSExLGhhPW51bGwsaWE9e29uRXJyb3I6ZnVuY3Rpb24oYSl7ZGE9ITA7ZWE9YX19O2Z1bmN0aW9uIGphKGEsYixjLGQsZSxmLGcsaCxsKXtkYT0hMTtlYT1udWxsO2NhLmFwcGx5KGlhLGFyZ3VtZW50cyl9ZnVuY3Rpb24ga2EoYSxiLGMsZCxlLGYsZyxoLGwpe2phLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtpZihkYSl7aWYoZGEpe3ZhciBrPWVhO2RhPSExO2VhPW51bGx9ZWxzZSB4KFwiMTk4XCIpLGs9dm9pZCAwO2ZhfHwoZmE9ITAsaGE9ayl9fXZhciBsYT1udWxsLG1hPXt9O1xuZnVuY3Rpb24gbmEoKXtpZihsYSlmb3IodmFyIGEgaW4gbWEpe3ZhciBiPW1hW2FdLGM9bGEuaW5kZXhPZihhKTstMTxjP3ZvaWQgMDp4KFwiOTZcIixhKTtpZighb2FbY10pe2IuZXh0cmFjdEV2ZW50cz92b2lkIDA6eChcIjk3XCIsYSk7b2FbY109YjtjPWIuZXZlbnRUeXBlcztmb3IodmFyIGQgaW4gYyl7dmFyIGU9dm9pZCAwO3ZhciBmPWNbZF0sZz1iLGg9ZDtwYS5oYXNPd25Qcm9wZXJ0eShoKT94KFwiOTlcIixoKTp2b2lkIDA7cGFbaF09Zjt2YXIgbD1mLnBoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzO2lmKGwpe2ZvcihlIGluIGwpbC5oYXNPd25Qcm9wZXJ0eShlKSYmcWEobFtlXSxnLGgpO2U9ITB9ZWxzZSBmLnJlZ2lzdHJhdGlvbk5hbWU/KHFhKGYucmVnaXN0cmF0aW9uTmFtZSxnLGgpLGU9ITApOmU9ITE7ZT92b2lkIDA6eChcIjk4XCIsZCxhKX19fX1cbmZ1bmN0aW9uIHFhKGEsYixjKXtyYVthXT94KFwiMTAwXCIsYSk6dm9pZCAwO3JhW2FdPWI7c2FbYV09Yi5ldmVudFR5cGVzW2NdLmRlcGVuZGVuY2llc312YXIgb2E9W10scGE9e30scmE9e30sc2E9e30sdGE9bnVsbCx1YT1udWxsLHZhPW51bGw7ZnVuY3Rpb24gd2EoYSxiLGMpe3ZhciBkPWEudHlwZXx8XCJ1bmtub3duLWV2ZW50XCI7YS5jdXJyZW50VGFyZ2V0PXZhKGMpO2thKGQsYix2b2lkIDAsYSk7YS5jdXJyZW50VGFyZ2V0PW51bGx9ZnVuY3Rpb24geGEoYSxiKXtudWxsPT1iP3goXCIzMFwiKTp2b2lkIDA7aWYobnVsbD09YSlyZXR1cm4gYjtpZihBcnJheS5pc0FycmF5KGEpKXtpZihBcnJheS5pc0FycmF5KGIpKXJldHVybiBhLnB1c2guYXBwbHkoYSxiKSxhO2EucHVzaChiKTtyZXR1cm4gYX1yZXR1cm4gQXJyYXkuaXNBcnJheShiKT9bYV0uY29uY2F0KGIpOlthLGJdfVxuZnVuY3Rpb24geWEoYSxiLGMpe0FycmF5LmlzQXJyYXkoYSk/YS5mb3JFYWNoKGIsYyk6YSYmYi5jYWxsKGMsYSl9dmFyIHphPW51bGw7ZnVuY3Rpb24gQWEoYSl7aWYoYSl7dmFyIGI9YS5fZGlzcGF0Y2hMaXN0ZW5lcnMsYz1hLl9kaXNwYXRjaEluc3RhbmNlcztpZihBcnJheS5pc0FycmF5KGIpKWZvcih2YXIgZD0wO2Q8Yi5sZW5ndGgmJiFhLmlzUHJvcGFnYXRpb25TdG9wcGVkKCk7ZCsrKXdhKGEsYltkXSxjW2RdKTtlbHNlIGImJndhKGEsYixjKTthLl9kaXNwYXRjaExpc3RlbmVycz1udWxsO2EuX2Rpc3BhdGNoSW5zdGFuY2VzPW51bGw7YS5pc1BlcnNpc3RlbnQoKXx8YS5jb25zdHJ1Y3Rvci5yZWxlYXNlKGEpfX1cbnZhciBCYT17aW5qZWN0RXZlbnRQbHVnaW5PcmRlcjpmdW5jdGlvbihhKXtsYT94KFwiMTAxXCIpOnZvaWQgMDtsYT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhKTtuYSgpfSxpbmplY3RFdmVudFBsdWdpbnNCeU5hbWU6ZnVuY3Rpb24oYSl7dmFyIGI9ITEsYztmb3IoYyBpbiBhKWlmKGEuaGFzT3duUHJvcGVydHkoYykpe3ZhciBkPWFbY107bWEuaGFzT3duUHJvcGVydHkoYykmJm1hW2NdPT09ZHx8KG1hW2NdP3goXCIxMDJcIixjKTp2b2lkIDAsbWFbY109ZCxiPSEwKX1iJiZuYSgpfX07XG5mdW5jdGlvbiBDYShhLGIpe3ZhciBjPWEuc3RhdGVOb2RlO2lmKCFjKXJldHVybiBudWxsO3ZhciBkPXRhKGMpO2lmKCFkKXJldHVybiBudWxsO2M9ZFtiXTthOnN3aXRjaChiKXtjYXNlIFwib25DbGlja1wiOmNhc2UgXCJvbkNsaWNrQ2FwdHVyZVwiOmNhc2UgXCJvbkRvdWJsZUNsaWNrXCI6Y2FzZSBcIm9uRG91YmxlQ2xpY2tDYXB0dXJlXCI6Y2FzZSBcIm9uTW91c2VEb3duXCI6Y2FzZSBcIm9uTW91c2VEb3duQ2FwdHVyZVwiOmNhc2UgXCJvbk1vdXNlTW92ZVwiOmNhc2UgXCJvbk1vdXNlTW92ZUNhcHR1cmVcIjpjYXNlIFwib25Nb3VzZVVwXCI6Y2FzZSBcIm9uTW91c2VVcENhcHR1cmVcIjooZD0hZC5kaXNhYmxlZCl8fChhPWEudHlwZSxkPSEoXCJidXR0b25cIj09PWF8fFwiaW5wdXRcIj09PWF8fFwic2VsZWN0XCI9PT1hfHxcInRleHRhcmVhXCI9PT1hKSk7YT0hZDticmVhayBhO2RlZmF1bHQ6YT0hMX1pZihhKXJldHVybiBudWxsO2MmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBjP3goXCIyMzFcIixiLHR5cGVvZiBjKTp2b2lkIDA7XG5yZXR1cm4gY31mdW5jdGlvbiBEYShhKXtudWxsIT09YSYmKHphPXhhKHphLGEpKTthPXphO3phPW51bGw7aWYoYSYmKHlhKGEsQWEpLHphP3goXCI5NVwiKTp2b2lkIDAsZmEpKXRocm93IGE9aGEsZmE9ITEsaGE9bnVsbCxhO312YXIgRWE9TWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiksRmE9XCJfX3JlYWN0SW50ZXJuYWxJbnN0YW5jZSRcIitFYSxHYT1cIl9fcmVhY3RFdmVudEhhbmRsZXJzJFwiK0VhO2Z1bmN0aW9uIEhhKGEpe2lmKGFbRmFdKXJldHVybiBhW0ZhXTtmb3IoOyFhW0ZhXTspaWYoYS5wYXJlbnROb2RlKWE9YS5wYXJlbnROb2RlO2Vsc2UgcmV0dXJuIG51bGw7YT1hW0ZhXTtyZXR1cm4gNT09PWEudGFnfHw2PT09YS50YWc/YTpudWxsfWZ1bmN0aW9uIElhKGEpe2E9YVtGYV07cmV0dXJuIWF8fDUhPT1hLnRhZyYmNiE9PWEudGFnP251bGw6YX1cbmZ1bmN0aW9uIEphKGEpe2lmKDU9PT1hLnRhZ3x8Nj09PWEudGFnKXJldHVybiBhLnN0YXRlTm9kZTt4KFwiMzNcIil9ZnVuY3Rpb24gS2EoYSl7cmV0dXJuIGFbR2FdfHxudWxsfWZ1bmN0aW9uIExhKGEpe2RvIGE9YS5yZXR1cm47d2hpbGUoYSYmNSE9PWEudGFnKTtyZXR1cm4gYT9hOm51bGx9ZnVuY3Rpb24gTWEoYSxiLGMpe2lmKGI9Q2EoYSxjLmRpc3BhdGNoQ29uZmlnLnBoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzW2JdKSljLl9kaXNwYXRjaExpc3RlbmVycz14YShjLl9kaXNwYXRjaExpc3RlbmVycyxiKSxjLl9kaXNwYXRjaEluc3RhbmNlcz14YShjLl9kaXNwYXRjaEluc3RhbmNlcyxhKX1cbmZ1bmN0aW9uIE5hKGEpe2lmKGEmJmEuZGlzcGF0Y2hDb25maWcucGhhc2VkUmVnaXN0cmF0aW9uTmFtZXMpe2Zvcih2YXIgYj1hLl90YXJnZXRJbnN0LGM9W107YjspYy5wdXNoKGIpLGI9TGEoYik7Zm9yKGI9Yy5sZW5ndGg7MDxiLS07KU1hKGNbYl0sXCJjYXB0dXJlZFwiLGEpO2ZvcihiPTA7YjxjLmxlbmd0aDtiKyspTWEoY1tiXSxcImJ1YmJsZWRcIixhKX19ZnVuY3Rpb24gT2EoYSxiLGMpe2EmJmMmJmMuZGlzcGF0Y2hDb25maWcucmVnaXN0cmF0aW9uTmFtZSYmKGI9Q2EoYSxjLmRpc3BhdGNoQ29uZmlnLnJlZ2lzdHJhdGlvbk5hbWUpKSYmKGMuX2Rpc3BhdGNoTGlzdGVuZXJzPXhhKGMuX2Rpc3BhdGNoTGlzdGVuZXJzLGIpLGMuX2Rpc3BhdGNoSW5zdGFuY2VzPXhhKGMuX2Rpc3BhdGNoSW5zdGFuY2VzLGEpKX1mdW5jdGlvbiBQYShhKXthJiZhLmRpc3BhdGNoQ29uZmlnLnJlZ2lzdHJhdGlvbk5hbWUmJk9hKGEuX3RhcmdldEluc3QsbnVsbCxhKX1cbmZ1bmN0aW9uIFFhKGEpe3lhKGEsTmEpfXZhciBSYT0hKFwidW5kZWZpbmVkXCI9PT10eXBlb2Ygd2luZG93fHwhd2luZG93LmRvY3VtZW50fHwhd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO2Z1bmN0aW9uIFNhKGEsYil7dmFyIGM9e307Y1thLnRvTG93ZXJDYXNlKCldPWIudG9Mb3dlckNhc2UoKTtjW1wiV2Via2l0XCIrYV09XCJ3ZWJraXRcIitiO2NbXCJNb3pcIithXT1cIm1velwiK2I7cmV0dXJuIGN9dmFyIFRhPXthbmltYXRpb25lbmQ6U2EoXCJBbmltYXRpb25cIixcIkFuaW1hdGlvbkVuZFwiKSxhbmltYXRpb25pdGVyYXRpb246U2EoXCJBbmltYXRpb25cIixcIkFuaW1hdGlvbkl0ZXJhdGlvblwiKSxhbmltYXRpb25zdGFydDpTYShcIkFuaW1hdGlvblwiLFwiQW5pbWF0aW9uU3RhcnRcIiksdHJhbnNpdGlvbmVuZDpTYShcIlRyYW5zaXRpb25cIixcIlRyYW5zaXRpb25FbmRcIil9LFVhPXt9LFZhPXt9O1xuUmEmJihWYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlLFwiQW5pbWF0aW9uRXZlbnRcImluIHdpbmRvd3x8KGRlbGV0ZSBUYS5hbmltYXRpb25lbmQuYW5pbWF0aW9uLGRlbGV0ZSBUYS5hbmltYXRpb25pdGVyYXRpb24uYW5pbWF0aW9uLGRlbGV0ZSBUYS5hbmltYXRpb25zdGFydC5hbmltYXRpb24pLFwiVHJhbnNpdGlvbkV2ZW50XCJpbiB3aW5kb3d8fGRlbGV0ZSBUYS50cmFuc2l0aW9uZW5kLnRyYW5zaXRpb24pO2Z1bmN0aW9uIFdhKGEpe2lmKFVhW2FdKXJldHVybiBVYVthXTtpZighVGFbYV0pcmV0dXJuIGE7dmFyIGI9VGFbYV0sYztmb3IoYyBpbiBiKWlmKGIuaGFzT3duUHJvcGVydHkoYykmJmMgaW4gVmEpcmV0dXJuIFVhW2FdPWJbY107cmV0dXJuIGF9XG52YXIgWGE9V2EoXCJhbmltYXRpb25lbmRcIiksWWE9V2EoXCJhbmltYXRpb25pdGVyYXRpb25cIiksWmE9V2EoXCJhbmltYXRpb25zdGFydFwiKSwkYT1XYShcInRyYW5zaXRpb25lbmRcIiksYWI9XCJhYm9ydCBjYW5wbGF5IGNhbnBsYXl0aHJvdWdoIGR1cmF0aW9uY2hhbmdlIGVtcHRpZWQgZW5jcnlwdGVkIGVuZGVkIGVycm9yIGxvYWRlZGRhdGEgbG9hZGVkbWV0YWRhdGEgbG9hZHN0YXJ0IHBhdXNlIHBsYXkgcGxheWluZyBwcm9ncmVzcyByYXRlY2hhbmdlIHNlZWtlZCBzZWVraW5nIHN0YWxsZWQgc3VzcGVuZCB0aW1ldXBkYXRlIHZvbHVtZWNoYW5nZSB3YWl0aW5nXCIuc3BsaXQoXCIgXCIpLGJiPW51bGwsY2I9bnVsbCxkYj1udWxsO1xuZnVuY3Rpb24gZWIoKXtpZihkYilyZXR1cm4gZGI7dmFyIGEsYj1jYixjPWIubGVuZ3RoLGQsZT1cInZhbHVlXCJpbiBiYj9iYi52YWx1ZTpiYi50ZXh0Q29udGVudCxmPWUubGVuZ3RoO2ZvcihhPTA7YTxjJiZiW2FdPT09ZVthXTthKyspO3ZhciBnPWMtYTtmb3IoZD0xO2Q8PWcmJmJbYy1kXT09PWVbZi1kXTtkKyspO3JldHVybiBkYj1lLnNsaWNlKGEsMTxkPzEtZDp2b2lkIDApfWZ1bmN0aW9uIGZiKCl7cmV0dXJuITB9ZnVuY3Rpb24gZ2IoKXtyZXR1cm4hMX1cbmZ1bmN0aW9uIHkoYSxiLGMsZCl7dGhpcy5kaXNwYXRjaENvbmZpZz1hO3RoaXMuX3RhcmdldEluc3Q9Yjt0aGlzLm5hdGl2ZUV2ZW50PWM7YT10aGlzLmNvbnN0cnVjdG9yLkludGVyZmFjZTtmb3IodmFyIGUgaW4gYSlhLmhhc093blByb3BlcnR5KGUpJiYoKGI9YVtlXSk/dGhpc1tlXT1iKGMpOlwidGFyZ2V0XCI9PT1lP3RoaXMudGFyZ2V0PWQ6dGhpc1tlXT1jW2VdKTt0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD0obnVsbCE9Yy5kZWZhdWx0UHJldmVudGVkP2MuZGVmYXVsdFByZXZlbnRlZDohMT09PWMucmV0dXJuVmFsdWUpP2ZiOmdiO3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9Z2I7cmV0dXJuIHRoaXN9XG5uKHkucHJvdG90eXBlLHtwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe3RoaXMuZGVmYXVsdFByZXZlbnRlZD0hMDt2YXIgYT10aGlzLm5hdGl2ZUV2ZW50O2EmJihhLnByZXZlbnREZWZhdWx0P2EucHJldmVudERlZmF1bHQoKTpcInVua25vd25cIiE9PXR5cGVvZiBhLnJldHVyblZhbHVlJiYoYS5yZXR1cm5WYWx1ZT0hMSksdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9ZmIpfSxzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm5hdGl2ZUV2ZW50O2EmJihhLnN0b3BQcm9wYWdhdGlvbj9hLnN0b3BQcm9wYWdhdGlvbigpOlwidW5rbm93blwiIT09dHlwZW9mIGEuY2FuY2VsQnViYmxlJiYoYS5jYW5jZWxCdWJibGU9ITApLHRoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9ZmIpfSxwZXJzaXN0OmZ1bmN0aW9uKCl7dGhpcy5pc1BlcnNpc3RlbnQ9ZmJ9LGlzUGVyc2lzdGVudDpnYixkZXN0cnVjdG9yOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5jb25zdHJ1Y3Rvci5JbnRlcmZhY2UsXG5iO2ZvcihiIGluIGEpdGhpc1tiXT1udWxsO3RoaXMubmF0aXZlRXZlbnQ9dGhpcy5fdGFyZ2V0SW5zdD10aGlzLmRpc3BhdGNoQ29uZmlnPW51bGw7dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD10aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1nYjt0aGlzLl9kaXNwYXRjaEluc3RhbmNlcz10aGlzLl9kaXNwYXRjaExpc3RlbmVycz1udWxsfX0pO3kuSW50ZXJmYWNlPXt0eXBlOm51bGwsdGFyZ2V0Om51bGwsY3VycmVudFRhcmdldDpmdW5jdGlvbigpe3JldHVybiBudWxsfSxldmVudFBoYXNlOm51bGwsYnViYmxlczpudWxsLGNhbmNlbGFibGU6bnVsbCx0aW1lU3RhbXA6ZnVuY3Rpb24oYSl7cmV0dXJuIGEudGltZVN0YW1wfHxEYXRlLm5vdygpfSxkZWZhdWx0UHJldmVudGVkOm51bGwsaXNUcnVzdGVkOm51bGx9O1xueS5leHRlbmQ9ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYigpe31mdW5jdGlvbiBjKCl7cmV0dXJuIGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfXZhciBkPXRoaXM7Yi5wcm90b3R5cGU9ZC5wcm90b3R5cGU7dmFyIGU9bmV3IGI7bihlLGMucHJvdG90eXBlKTtjLnByb3RvdHlwZT1lO2MucHJvdG90eXBlLmNvbnN0cnVjdG9yPWM7Yy5JbnRlcmZhY2U9bih7fSxkLkludGVyZmFjZSxhKTtjLmV4dGVuZD1kLmV4dGVuZDtoYihjKTtyZXR1cm4gY307aGIoeSk7ZnVuY3Rpb24gaWIoYSxiLGMsZCl7aWYodGhpcy5ldmVudFBvb2wubGVuZ3RoKXt2YXIgZT10aGlzLmV2ZW50UG9vbC5wb3AoKTt0aGlzLmNhbGwoZSxhLGIsYyxkKTtyZXR1cm4gZX1yZXR1cm4gbmV3IHRoaXMoYSxiLGMsZCl9ZnVuY3Rpb24gamIoYSl7YSBpbnN0YW5jZW9mIHRoaXM/dm9pZCAwOngoXCIyNzlcIik7YS5kZXN0cnVjdG9yKCk7MTA+dGhpcy5ldmVudFBvb2wubGVuZ3RoJiZ0aGlzLmV2ZW50UG9vbC5wdXNoKGEpfVxuZnVuY3Rpb24gaGIoYSl7YS5ldmVudFBvb2w9W107YS5nZXRQb29sZWQ9aWI7YS5yZWxlYXNlPWpifXZhciBrYj15LmV4dGVuZCh7ZGF0YTpudWxsfSksbGI9eS5leHRlbmQoe2RhdGE6bnVsbH0pLG1iPVs5LDEzLDI3LDMyXSxuYj1SYSYmXCJDb21wb3NpdGlvbkV2ZW50XCJpbiB3aW5kb3csb2I9bnVsbDtSYSYmXCJkb2N1bWVudE1vZGVcImluIGRvY3VtZW50JiYob2I9ZG9jdW1lbnQuZG9jdW1lbnRNb2RlKTtcbnZhciBwYj1SYSYmXCJUZXh0RXZlbnRcImluIHdpbmRvdyYmIW9iLHFiPVJhJiYoIW5ifHxvYiYmODxvYiYmMTE+PW9iKSxyYj1TdHJpbmcuZnJvbUNoYXJDb2RlKDMyKSxzYj17YmVmb3JlSW5wdXQ6e3BoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOntidWJibGVkOlwib25CZWZvcmVJbnB1dFwiLGNhcHR1cmVkOlwib25CZWZvcmVJbnB1dENhcHR1cmVcIn0sZGVwZW5kZW5jaWVzOltcImNvbXBvc2l0aW9uZW5kXCIsXCJrZXlwcmVzc1wiLFwidGV4dElucHV0XCIsXCJwYXN0ZVwiXX0sY29tcG9zaXRpb25FbmQ6e3BoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOntidWJibGVkOlwib25Db21wb3NpdGlvbkVuZFwiLGNhcHR1cmVkOlwib25Db21wb3NpdGlvbkVuZENhcHR1cmVcIn0sZGVwZW5kZW5jaWVzOlwiYmx1ciBjb21wb3NpdGlvbmVuZCBrZXlkb3duIGtleXByZXNzIGtleXVwIG1vdXNlZG93blwiLnNwbGl0KFwiIFwiKX0sY29tcG9zaXRpb25TdGFydDp7cGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6e2J1YmJsZWQ6XCJvbkNvbXBvc2l0aW9uU3RhcnRcIixcbmNhcHR1cmVkOlwib25Db21wb3NpdGlvblN0YXJ0Q2FwdHVyZVwifSxkZXBlbmRlbmNpZXM6XCJibHVyIGNvbXBvc2l0aW9uc3RhcnQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBtb3VzZWRvd25cIi5zcGxpdChcIiBcIil9LGNvbXBvc2l0aW9uVXBkYXRlOntwaGFzZWRSZWdpc3RyYXRpb25OYW1lczp7YnViYmxlZDpcIm9uQ29tcG9zaXRpb25VcGRhdGVcIixjYXB0dXJlZDpcIm9uQ29tcG9zaXRpb25VcGRhdGVDYXB0dXJlXCJ9LGRlcGVuZGVuY2llczpcImJsdXIgY29tcG9zaXRpb251cGRhdGUga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBtb3VzZWRvd25cIi5zcGxpdChcIiBcIil9fSx0Yj0hMTtcbmZ1bmN0aW9uIHViKGEsYil7c3dpdGNoKGEpe2Nhc2UgXCJrZXl1cFwiOnJldHVybi0xIT09bWIuaW5kZXhPZihiLmtleUNvZGUpO2Nhc2UgXCJrZXlkb3duXCI6cmV0dXJuIDIyOSE9PWIua2V5Q29kZTtjYXNlIFwia2V5cHJlc3NcIjpjYXNlIFwibW91c2Vkb3duXCI6Y2FzZSBcImJsdXJcIjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfX1mdW5jdGlvbiB2YihhKXthPWEuZGV0YWlsO3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmXCJkYXRhXCJpbiBhP2EuZGF0YTpudWxsfXZhciB3Yj0hMTtmdW5jdGlvbiB4YihhLGIpe3N3aXRjaChhKXtjYXNlIFwiY29tcG9zaXRpb25lbmRcIjpyZXR1cm4gdmIoYik7Y2FzZSBcImtleXByZXNzXCI6aWYoMzIhPT1iLndoaWNoKXJldHVybiBudWxsO3RiPSEwO3JldHVybiByYjtjYXNlIFwidGV4dElucHV0XCI6cmV0dXJuIGE9Yi5kYXRhLGE9PT1yYiYmdGI/bnVsbDphO2RlZmF1bHQ6cmV0dXJuIG51bGx9fVxuZnVuY3Rpb24geWIoYSxiKXtpZih3YilyZXR1cm5cImNvbXBvc2l0aW9uZW5kXCI9PT1hfHwhbmImJnViKGEsYik/KGE9ZWIoKSxkYj1jYj1iYj1udWxsLHdiPSExLGEpOm51bGw7c3dpdGNoKGEpe2Nhc2UgXCJwYXN0ZVwiOnJldHVybiBudWxsO2Nhc2UgXCJrZXlwcmVzc1wiOmlmKCEoYi5jdHJsS2V5fHxiLmFsdEtleXx8Yi5tZXRhS2V5KXx8Yi5jdHJsS2V5JiZiLmFsdEtleSl7aWYoYi5jaGFyJiYxPGIuY2hhci5sZW5ndGgpcmV0dXJuIGIuY2hhcjtpZihiLndoaWNoKXJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGIud2hpY2gpfXJldHVybiBudWxsO2Nhc2UgXCJjb21wb3NpdGlvbmVuZFwiOnJldHVybiBxYiYmXCJrb1wiIT09Yi5sb2NhbGU/bnVsbDpiLmRhdGE7ZGVmYXVsdDpyZXR1cm4gbnVsbH19XG52YXIgemI9e2V2ZW50VHlwZXM6c2IsZXh0cmFjdEV2ZW50czpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT12b2lkIDA7dmFyIGY9dm9pZCAwO2lmKG5iKWI6e3N3aXRjaChhKXtjYXNlIFwiY29tcG9zaXRpb25zdGFydFwiOmU9c2IuY29tcG9zaXRpb25TdGFydDticmVhayBiO2Nhc2UgXCJjb21wb3NpdGlvbmVuZFwiOmU9c2IuY29tcG9zaXRpb25FbmQ7YnJlYWsgYjtjYXNlIFwiY29tcG9zaXRpb251cGRhdGVcIjplPXNiLmNvbXBvc2l0aW9uVXBkYXRlO2JyZWFrIGJ9ZT12b2lkIDB9ZWxzZSB3Yj91YihhLGMpJiYoZT1zYi5jb21wb3NpdGlvbkVuZCk6XCJrZXlkb3duXCI9PT1hJiYyMjk9PT1jLmtleUNvZGUmJihlPXNiLmNvbXBvc2l0aW9uU3RhcnQpO2U/KHFiJiZcImtvXCIhPT1jLmxvY2FsZSYmKHdifHxlIT09c2IuY29tcG9zaXRpb25TdGFydD9lPT09c2IuY29tcG9zaXRpb25FbmQmJndiJiYoZj1lYigpKTooYmI9ZCxjYj1cInZhbHVlXCJpbiBiYj9iYi52YWx1ZTpiYi50ZXh0Q29udGVudCx3Yj1cbiEwKSksZT1rYi5nZXRQb29sZWQoZSxiLGMsZCksZj9lLmRhdGE9ZjooZj12YihjKSxudWxsIT09ZiYmKGUuZGF0YT1mKSksUWEoZSksZj1lKTpmPW51bGw7KGE9cGI/eGIoYSxjKTp5YihhLGMpKT8oYj1sYi5nZXRQb29sZWQoc2IuYmVmb3JlSW5wdXQsYixjLGQpLGIuZGF0YT1hLFFhKGIpKTpiPW51bGw7cmV0dXJuIG51bGw9PT1mP2I6bnVsbD09PWI/ZjpbZixiXX19LEFiPW51bGwsQmI9bnVsbCxDYj1udWxsO2Z1bmN0aW9uIERiKGEpe2lmKGE9dWEoYSkpe1wiZnVuY3Rpb25cIiE9PXR5cGVvZiBBYj94KFwiMjgwXCIpOnZvaWQgMDt2YXIgYj10YShhLnN0YXRlTm9kZSk7QWIoYS5zdGF0ZU5vZGUsYS50eXBlLGIpfX1mdW5jdGlvbiBFYihhKXtCYj9DYj9DYi5wdXNoKGEpOkNiPVthXTpCYj1hfWZ1bmN0aW9uIEZiKCl7aWYoQmIpe3ZhciBhPUJiLGI9Q2I7Q2I9QmI9bnVsbDtEYihhKTtpZihiKWZvcihhPTA7YTxiLmxlbmd0aDthKyspRGIoYlthXSl9fVxuZnVuY3Rpb24gR2IoYSxiKXtyZXR1cm4gYShiKX1mdW5jdGlvbiBIYihhLGIsYyl7cmV0dXJuIGEoYixjKX1mdW5jdGlvbiBJYigpe312YXIgSmI9ITE7ZnVuY3Rpb24gS2IoYSxiKXtpZihKYilyZXR1cm4gYShiKTtKYj0hMDt0cnl7cmV0dXJuIEdiKGEsYil9ZmluYWxseXtpZihKYj0hMSxudWxsIT09QmJ8fG51bGwhPT1DYilJYigpLEZiKCl9fXZhciBMYj17Y29sb3I6ITAsZGF0ZTohMCxkYXRldGltZTohMCxcImRhdGV0aW1lLWxvY2FsXCI6ITAsZW1haWw6ITAsbW9udGg6ITAsbnVtYmVyOiEwLHBhc3N3b3JkOiEwLHJhbmdlOiEwLHNlYXJjaDohMCx0ZWw6ITAsdGV4dDohMCx0aW1lOiEwLHVybDohMCx3ZWVrOiEwfTtmdW5jdGlvbiBNYihhKXt2YXIgYj1hJiZhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09Yj8hIUxiW2EudHlwZV06XCJ0ZXh0YXJlYVwiPT09Yj8hMDohMX1cbmZ1bmN0aW9uIE5iKGEpe2E9YS50YXJnZXR8fGEuc3JjRWxlbWVudHx8d2luZG93O2EuY29ycmVzcG9uZGluZ1VzZUVsZW1lbnQmJihhPWEuY29ycmVzcG9uZGluZ1VzZUVsZW1lbnQpO3JldHVybiAzPT09YS5ub2RlVHlwZT9hLnBhcmVudE5vZGU6YX1mdW5jdGlvbiBPYihhKXtpZighUmEpcmV0dXJuITE7YT1cIm9uXCIrYTt2YXIgYj1hIGluIGRvY3VtZW50O2J8fChiPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksYi5zZXRBdHRyaWJ1dGUoYSxcInJldHVybjtcIiksYj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgYlthXSk7cmV0dXJuIGJ9ZnVuY3Rpb24gUGIoYSl7dmFyIGI9YS50eXBlO3JldHVybihhPWEubm9kZU5hbWUpJiZcImlucHV0XCI9PT1hLnRvTG93ZXJDYXNlKCkmJihcImNoZWNrYm94XCI9PT1ifHxcInJhZGlvXCI9PT1iKX1cbmZ1bmN0aW9uIFFiKGEpe3ZhciBiPVBiKGEpP1wiY2hlY2tlZFwiOlwidmFsdWVcIixjPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsYiksZD1cIlwiK2FbYl07aWYoIWEuaGFzT3duUHJvcGVydHkoYikmJlwidW5kZWZpbmVkXCIhPT10eXBlb2YgYyYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGMuZ2V0JiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgYy5zZXQpe3ZhciBlPWMuZ2V0LGY9Yy5zZXQ7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsYix7Y29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBlLmNhbGwodGhpcyl9LHNldDpmdW5jdGlvbihhKXtkPVwiXCIrYTtmLmNhbGwodGhpcyxhKX19KTtPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxiLHtlbnVtZXJhYmxlOmMuZW51bWVyYWJsZX0pO3JldHVybntnZXRWYWx1ZTpmdW5jdGlvbigpe3JldHVybiBkfSxzZXRWYWx1ZTpmdW5jdGlvbihhKXtkPVwiXCIrYX0sc3RvcFRyYWNraW5nOmZ1bmN0aW9uKCl7YS5fdmFsdWVUcmFja2VyPVxubnVsbDtkZWxldGUgYVtiXX19fX1mdW5jdGlvbiBSYihhKXthLl92YWx1ZVRyYWNrZXJ8fChhLl92YWx1ZVRyYWNrZXI9UWIoYSkpfWZ1bmN0aW9uIFNiKGEpe2lmKCFhKXJldHVybiExO3ZhciBiPWEuX3ZhbHVlVHJhY2tlcjtpZighYilyZXR1cm4hMDt2YXIgYz1iLmdldFZhbHVlKCk7dmFyIGQ9XCJcIjthJiYoZD1QYihhKT9hLmNoZWNrZWQ/XCJ0cnVlXCI6XCJmYWxzZVwiOmEudmFsdWUpO2E9ZDtyZXR1cm4gYSE9PWM/KGIuc2V0VmFsdWUoYSksITApOiExfXZhciBUYj1hYS5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtUYi5oYXNPd25Qcm9wZXJ0eShcIlJlYWN0Q3VycmVudERpc3BhdGNoZXJcIil8fChUYi5SZWFjdEN1cnJlbnREaXNwYXRjaGVyPXtjdXJyZW50Om51bGx9KTtcbnZhciBVYj0vXiguKilbXFxcXFxcL10vLHo9XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvcixWYj16P1N5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpOjYwMTAzLFdiPXo/U3ltYm9sLmZvcihcInJlYWN0LnBvcnRhbFwiKTo2MDEwNixYYj16P1N5bWJvbC5mb3IoXCJyZWFjdC5mcmFnbWVudFwiKTo2MDEwNyxZYj16P1N5bWJvbC5mb3IoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKTo2MDEwOCxaYj16P1N5bWJvbC5mb3IoXCJyZWFjdC5wcm9maWxlclwiKTo2MDExNCwkYj16P1N5bWJvbC5mb3IoXCJyZWFjdC5wcm92aWRlclwiKTo2MDEwOSxhYz16P1N5bWJvbC5mb3IoXCJyZWFjdC5jb250ZXh0XCIpOjYwMTEwLGJjPXo/U3ltYm9sLmZvcihcInJlYWN0LmNvbmN1cnJlbnRfbW9kZVwiKTo2MDExMSxjYz16P1N5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTo2MDExMixkYz16P1N5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKTo2MDExMyxlYz16P1N5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpOlxuNjAxMTUsZmM9ej9TeW1ib2wuZm9yKFwicmVhY3QubGF6eVwiKTo2MDExNixnYz1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3I7ZnVuY3Rpb24gaGMoYSl7aWYobnVsbD09PWF8fFwib2JqZWN0XCIhPT10eXBlb2YgYSlyZXR1cm4gbnVsbDthPWdjJiZhW2djXXx8YVtcIkBAaXRlcmF0b3JcIl07cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGE/YTpudWxsfVxuZnVuY3Rpb24gaWMoYSl7aWYobnVsbD09YSlyZXR1cm4gbnVsbDtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYSlyZXR1cm4gYS5kaXNwbGF5TmFtZXx8YS5uYW1lfHxudWxsO2lmKFwic3RyaW5nXCI9PT10eXBlb2YgYSlyZXR1cm4gYTtzd2l0Y2goYSl7Y2FzZSBiYzpyZXR1cm5cIkNvbmN1cnJlbnRNb2RlXCI7Y2FzZSBYYjpyZXR1cm5cIkZyYWdtZW50XCI7Y2FzZSBXYjpyZXR1cm5cIlBvcnRhbFwiO2Nhc2UgWmI6cmV0dXJuXCJQcm9maWxlclwiO2Nhc2UgWWI6cmV0dXJuXCJTdHJpY3RNb2RlXCI7Y2FzZSBkYzpyZXR1cm5cIlN1c3BlbnNlXCJ9aWYoXCJvYmplY3RcIj09PXR5cGVvZiBhKXN3aXRjaChhLiQkdHlwZW9mKXtjYXNlIGFjOnJldHVyblwiQ29udGV4dC5Db25zdW1lclwiO2Nhc2UgJGI6cmV0dXJuXCJDb250ZXh0LlByb3ZpZGVyXCI7Y2FzZSBjYzp2YXIgYj1hLnJlbmRlcjtiPWIuZGlzcGxheU5hbWV8fGIubmFtZXx8XCJcIjtyZXR1cm4gYS5kaXNwbGF5TmFtZXx8KFwiXCIhPT1iP1wiRm9yd2FyZFJlZihcIitiK1xuXCIpXCI6XCJGb3J3YXJkUmVmXCIpO2Nhc2UgZWM6cmV0dXJuIGljKGEudHlwZSk7Y2FzZSBmYzppZihhPTE9PT1hLl9zdGF0dXM/YS5fcmVzdWx0Om51bGwpcmV0dXJuIGljKGEpfXJldHVybiBudWxsfWZ1bmN0aW9uIGpjKGEpe3ZhciBiPVwiXCI7ZG97YTpzd2l0Y2goYS50YWcpe2Nhc2UgMzpjYXNlIDQ6Y2FzZSA2OmNhc2UgNzpjYXNlIDEwOmNhc2UgOTp2YXIgYz1cIlwiO2JyZWFrIGE7ZGVmYXVsdDp2YXIgZD1hLl9kZWJ1Z093bmVyLGU9YS5fZGVidWdTb3VyY2UsZj1pYyhhLnR5cGUpO2M9bnVsbDtkJiYoYz1pYyhkLnR5cGUpKTtkPWY7Zj1cIlwiO2U/Zj1cIiAoYXQgXCIrZS5maWxlTmFtZS5yZXBsYWNlKFViLFwiXCIpK1wiOlwiK2UubGluZU51bWJlcitcIilcIjpjJiYoZj1cIiAoY3JlYXRlZCBieSBcIitjK1wiKVwiKTtjPVwiXFxuICAgIGluIFwiKyhkfHxcIlVua25vd25cIikrZn1iKz1jO2E9YS5yZXR1cm59d2hpbGUoYSk7cmV0dXJuIGJ9XG52YXIga2M9L15bOkEtWl9hLXpcXHUwMEMwLVxcdTAwRDZcXHUwMEQ4LVxcdTAwRjZcXHUwMEY4LVxcdTAyRkZcXHUwMzcwLVxcdTAzN0RcXHUwMzdGLVxcdTFGRkZcXHUyMDBDLVxcdTIwMERcXHUyMDcwLVxcdTIxOEZcXHUyQzAwLVxcdTJGRUZcXHUzMDAxLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRkRdWzpBLVpfYS16XFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2XFx1MDBGOC1cXHUwMkZGXFx1MDM3MC1cXHUwMzdEXFx1MDM3Ri1cXHUxRkZGXFx1MjAwQy1cXHUyMDBEXFx1MjA3MC1cXHUyMThGXFx1MkMwMC1cXHUyRkVGXFx1MzAwMS1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkZEXFwtLjAtOVxcdTAwQjdcXHUwMzAwLVxcdTAzNkZcXHUyMDNGLVxcdTIwNDBdKiQvLGxjPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksbWM9e30sbmM9e307XG5mdW5jdGlvbiBvYyhhKXtpZihsYy5jYWxsKG5jLGEpKXJldHVybiEwO2lmKGxjLmNhbGwobWMsYSkpcmV0dXJuITE7aWYoa2MudGVzdChhKSlyZXR1cm4gbmNbYV09ITA7bWNbYV09ITA7cmV0dXJuITF9ZnVuY3Rpb24gcGMoYSxiLGMsZCl7aWYobnVsbCE9PWMmJjA9PT1jLnR5cGUpcmV0dXJuITE7c3dpdGNoKHR5cGVvZiBiKXtjYXNlIFwiZnVuY3Rpb25cIjpjYXNlIFwic3ltYm9sXCI6cmV0dXJuITA7Y2FzZSBcImJvb2xlYW5cIjppZihkKXJldHVybiExO2lmKG51bGwhPT1jKXJldHVybiFjLmFjY2VwdHNCb29sZWFuczthPWEudG9Mb3dlckNhc2UoKS5zbGljZSgwLDUpO3JldHVyblwiZGF0YS1cIiE9PWEmJlwiYXJpYS1cIiE9PWE7ZGVmYXVsdDpyZXR1cm4hMX19XG5mdW5jdGlvbiBxYyhhLGIsYyxkKXtpZihudWxsPT09Ynx8XCJ1bmRlZmluZWRcIj09PXR5cGVvZiBifHxwYyhhLGIsYyxkKSlyZXR1cm4hMDtpZihkKXJldHVybiExO2lmKG51bGwhPT1jKXN3aXRjaChjLnR5cGUpe2Nhc2UgMzpyZXR1cm4hYjtjYXNlIDQ6cmV0dXJuITE9PT1iO2Nhc2UgNTpyZXR1cm4gaXNOYU4oYik7Y2FzZSA2OnJldHVybiBpc05hTihiKXx8MT5ifXJldHVybiExfWZ1bmN0aW9uIEMoYSxiLGMsZCxlKXt0aGlzLmFjY2VwdHNCb29sZWFucz0yPT09Ynx8Mz09PWJ8fDQ9PT1iO3RoaXMuYXR0cmlidXRlTmFtZT1kO3RoaXMuYXR0cmlidXRlTmFtZXNwYWNlPWU7dGhpcy5tdXN0VXNlUHJvcGVydHk9Yzt0aGlzLnByb3BlcnR5TmFtZT1hO3RoaXMudHlwZT1ifXZhciBEPXt9O1xuXCJjaGlsZHJlbiBkYW5nZXJvdXNseVNldElubmVySFRNTCBkZWZhdWx0VmFsdWUgZGVmYXVsdENoZWNrZWQgaW5uZXJIVE1MIHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyBzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmcgc3R5bGVcIi5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBDKGEsMCwhMSxhLG51bGwpfSk7W1tcImFjY2VwdENoYXJzZXRcIixcImFjY2VwdC1jaGFyc2V0XCJdLFtcImNsYXNzTmFtZVwiLFwiY2xhc3NcIl0sW1wiaHRtbEZvclwiLFwiZm9yXCJdLFtcImh0dHBFcXVpdlwiLFwiaHR0cC1lcXVpdlwiXV0uZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1hWzBdO0RbYl09bmV3IEMoYiwxLCExLGFbMV0sbnVsbCl9KTtbXCJjb250ZW50RWRpdGFibGVcIixcImRyYWdnYWJsZVwiLFwic3BlbGxDaGVja1wiLFwidmFsdWVcIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBDKGEsMiwhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCl9KTtcbltcImF1dG9SZXZlcnNlXCIsXCJleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkXCIsXCJmb2N1c2FibGVcIixcInByZXNlcnZlQWxwaGFcIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBDKGEsMiwhMSxhLG51bGwpfSk7XCJhbGxvd0Z1bGxTY3JlZW4gYXN5bmMgYXV0b0ZvY3VzIGF1dG9QbGF5IGNvbnRyb2xzIGRlZmF1bHQgZGVmZXIgZGlzYWJsZWQgZm9ybU5vVmFsaWRhdGUgaGlkZGVuIGxvb3Agbm9Nb2R1bGUgbm9WYWxpZGF0ZSBvcGVuIHBsYXlzSW5saW5lIHJlYWRPbmx5IHJlcXVpcmVkIHJldmVyc2VkIHNjb3BlZCBzZWFtbGVzcyBpdGVtU2NvcGVcIi5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBDKGEsMywhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCl9KTtbXCJjaGVja2VkXCIsXCJtdWx0aXBsZVwiLFwibXV0ZWRcIixcInNlbGVjdGVkXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQyhhLDMsITAsYSxudWxsKX0pO1xuW1wiY2FwdHVyZVwiLFwiZG93bmxvYWRcIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBDKGEsNCwhMSxhLG51bGwpfSk7W1wiY29sc1wiLFwicm93c1wiLFwic2l6ZVwiLFwic3BhblwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEMoYSw2LCExLGEsbnVsbCl9KTtbXCJyb3dTcGFuXCIsXCJzdGFydFwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEMoYSw1LCExLGEudG9Mb3dlckNhc2UoKSxudWxsKX0pO3ZhciByYz0vW1xcLTpdKFthLXpdKS9nO2Z1bmN0aW9uIHNjKGEpe3JldHVybiBhWzFdLnRvVXBwZXJDYXNlKCl9XG5cImFjY2VudC1oZWlnaHQgYWxpZ25tZW50LWJhc2VsaW5lIGFyYWJpYy1mb3JtIGJhc2VsaW5lLXNoaWZ0IGNhcC1oZWlnaHQgY2xpcC1wYXRoIGNsaXAtcnVsZSBjb2xvci1pbnRlcnBvbGF0aW9uIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycyBjb2xvci1wcm9maWxlIGNvbG9yLXJlbmRlcmluZyBkb21pbmFudC1iYXNlbGluZSBlbmFibGUtYmFja2dyb3VuZCBmaWxsLW9wYWNpdHkgZmlsbC1ydWxlIGZsb29kLWNvbG9yIGZsb29kLW9wYWNpdHkgZm9udC1mYW1pbHkgZm9udC1zaXplIGZvbnQtc2l6ZS1hZGp1c3QgZm9udC1zdHJldGNoIGZvbnQtc3R5bGUgZm9udC12YXJpYW50IGZvbnQtd2VpZ2h0IGdseXBoLW5hbWUgZ2x5cGgtb3JpZW50YXRpb24taG9yaXpvbnRhbCBnbHlwaC1vcmllbnRhdGlvbi12ZXJ0aWNhbCBob3Jpei1hZHYteCBob3Jpei1vcmlnaW4teCBpbWFnZS1yZW5kZXJpbmcgbGV0dGVyLXNwYWNpbmcgbGlnaHRpbmctY29sb3IgbWFya2VyLWVuZCBtYXJrZXItbWlkIG1hcmtlci1zdGFydCBvdmVybGluZS1wb3NpdGlvbiBvdmVybGluZS10aGlja25lc3MgcGFpbnQtb3JkZXIgcGFub3NlLTEgcG9pbnRlci1ldmVudHMgcmVuZGVyaW5nLWludGVudCBzaGFwZS1yZW5kZXJpbmcgc3RvcC1jb2xvciBzdG9wLW9wYWNpdHkgc3RyaWtldGhyb3VnaC1wb3NpdGlvbiBzdHJpa2V0aHJvdWdoLXRoaWNrbmVzcyBzdHJva2UtZGFzaGFycmF5IHN0cm9rZS1kYXNob2Zmc2V0IHN0cm9rZS1saW5lY2FwIHN0cm9rZS1saW5lam9pbiBzdHJva2UtbWl0ZXJsaW1pdCBzdHJva2Utb3BhY2l0eSBzdHJva2Utd2lkdGggdGV4dC1hbmNob3IgdGV4dC1kZWNvcmF0aW9uIHRleHQtcmVuZGVyaW5nIHVuZGVybGluZS1wb3NpdGlvbiB1bmRlcmxpbmUtdGhpY2tuZXNzIHVuaWNvZGUtYmlkaSB1bmljb2RlLXJhbmdlIHVuaXRzLXBlci1lbSB2LWFscGhhYmV0aWMgdi1oYW5naW5nIHYtaWRlb2dyYXBoaWMgdi1tYXRoZW1hdGljYWwgdmVjdG9yLWVmZmVjdCB2ZXJ0LWFkdi15IHZlcnQtb3JpZ2luLXggdmVydC1vcmlnaW4teSB3b3JkLXNwYWNpbmcgd3JpdGluZy1tb2RlIHhtbG5zOnhsaW5rIHgtaGVpZ2h0XCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKHJjLFxuc2MpO0RbYl09bmV3IEMoYiwxLCExLGEsbnVsbCl9KTtcInhsaW5rOmFjdHVhdGUgeGxpbms6YXJjcm9sZSB4bGluazpocmVmIHhsaW5rOnJvbGUgeGxpbms6c2hvdyB4bGluazp0aXRsZSB4bGluazp0eXBlXCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKHJjLHNjKTtEW2JdPW5ldyBDKGIsMSwhMSxhLFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiKX0pO1tcInhtbDpiYXNlXCIsXCJ4bWw6bGFuZ1wiLFwieG1sOnNwYWNlXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9YS5yZXBsYWNlKHJjLHNjKTtEW2JdPW5ldyBDKGIsMSwhMSxhLFwiaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlXCIpfSk7W1widGFiSW5kZXhcIixcImNyb3NzT3JpZ2luXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQyhhLDEsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwpfSk7XG5mdW5jdGlvbiB0YyhhLGIsYyxkKXt2YXIgZT1ELmhhc093blByb3BlcnR5KGIpP0RbYl06bnVsbDt2YXIgZj1udWxsIT09ZT8wPT09ZS50eXBlOmQ/ITE6ISgyPGIubGVuZ3RoKXx8XCJvXCIhPT1iWzBdJiZcIk9cIiE9PWJbMF18fFwiblwiIT09YlsxXSYmXCJOXCIhPT1iWzFdPyExOiEwO2Z8fChxYyhiLGMsZSxkKSYmKGM9bnVsbCksZHx8bnVsbD09PWU/b2MoYikmJihudWxsPT09Yz9hLnJlbW92ZUF0dHJpYnV0ZShiKTphLnNldEF0dHJpYnV0ZShiLFwiXCIrYykpOmUubXVzdFVzZVByb3BlcnR5P2FbZS5wcm9wZXJ0eU5hbWVdPW51bGw9PT1jPzM9PT1lLnR5cGU/ITE6XCJcIjpjOihiPWUuYXR0cmlidXRlTmFtZSxkPWUuYXR0cmlidXRlTmFtZXNwYWNlLG51bGw9PT1jP2EucmVtb3ZlQXR0cmlidXRlKGIpOihlPWUudHlwZSxjPTM9PT1lfHw0PT09ZSYmITA9PT1jP1wiXCI6XCJcIitjLGQ/YS5zZXRBdHRyaWJ1dGVOUyhkLGIsYyk6YS5zZXRBdHRyaWJ1dGUoYixjKSkpKX1cbmZ1bmN0aW9uIHVjKGEpe3N3aXRjaCh0eXBlb2YgYSl7Y2FzZSBcImJvb2xlYW5cIjpjYXNlIFwibnVtYmVyXCI6Y2FzZSBcIm9iamVjdFwiOmNhc2UgXCJzdHJpbmdcIjpjYXNlIFwidW5kZWZpbmVkXCI6cmV0dXJuIGE7ZGVmYXVsdDpyZXR1cm5cIlwifX1mdW5jdGlvbiB2YyhhLGIpe3ZhciBjPWIuY2hlY2tlZDtyZXR1cm4gbih7fSxiLHtkZWZhdWx0Q2hlY2tlZDp2b2lkIDAsZGVmYXVsdFZhbHVlOnZvaWQgMCx2YWx1ZTp2b2lkIDAsY2hlY2tlZDpudWxsIT1jP2M6YS5fd3JhcHBlclN0YXRlLmluaXRpYWxDaGVja2VkfSl9XG5mdW5jdGlvbiB3YyhhLGIpe3ZhciBjPW51bGw9PWIuZGVmYXVsdFZhbHVlP1wiXCI6Yi5kZWZhdWx0VmFsdWUsZD1udWxsIT1iLmNoZWNrZWQ/Yi5jaGVja2VkOmIuZGVmYXVsdENoZWNrZWQ7Yz11YyhudWxsIT1iLnZhbHVlP2IudmFsdWU6Yyk7YS5fd3JhcHBlclN0YXRlPXtpbml0aWFsQ2hlY2tlZDpkLGluaXRpYWxWYWx1ZTpjLGNvbnRyb2xsZWQ6XCJjaGVja2JveFwiPT09Yi50eXBlfHxcInJhZGlvXCI9PT1iLnR5cGU/bnVsbCE9Yi5jaGVja2VkOm51bGwhPWIudmFsdWV9fWZ1bmN0aW9uIHhjKGEsYil7Yj1iLmNoZWNrZWQ7bnVsbCE9YiYmdGMoYSxcImNoZWNrZWRcIixiLCExKX1cbmZ1bmN0aW9uIHljKGEsYil7eGMoYSxiKTt2YXIgYz11YyhiLnZhbHVlKSxkPWIudHlwZTtpZihudWxsIT1jKWlmKFwibnVtYmVyXCI9PT1kKXtpZigwPT09YyYmXCJcIj09PWEudmFsdWV8fGEudmFsdWUhPWMpYS52YWx1ZT1cIlwiK2N9ZWxzZSBhLnZhbHVlIT09XCJcIitjJiYoYS52YWx1ZT1cIlwiK2MpO2Vsc2UgaWYoXCJzdWJtaXRcIj09PWR8fFwicmVzZXRcIj09PWQpe2EucmVtb3ZlQXR0cmlidXRlKFwidmFsdWVcIik7cmV0dXJufWIuaGFzT3duUHJvcGVydHkoXCJ2YWx1ZVwiKT96YyhhLGIudHlwZSxjKTpiLmhhc093blByb3BlcnR5KFwiZGVmYXVsdFZhbHVlXCIpJiZ6YyhhLGIudHlwZSx1YyhiLmRlZmF1bHRWYWx1ZSkpO251bGw9PWIuY2hlY2tlZCYmbnVsbCE9Yi5kZWZhdWx0Q2hlY2tlZCYmKGEuZGVmYXVsdENoZWNrZWQ9ISFiLmRlZmF1bHRDaGVja2VkKX1cbmZ1bmN0aW9uIEFjKGEsYixjKXtpZihiLmhhc093blByb3BlcnR5KFwidmFsdWVcIil8fGIuaGFzT3duUHJvcGVydHkoXCJkZWZhdWx0VmFsdWVcIikpe3ZhciBkPWIudHlwZTtpZighKFwic3VibWl0XCIhPT1kJiZcInJlc2V0XCIhPT1kfHx2b2lkIDAhPT1iLnZhbHVlJiZudWxsIT09Yi52YWx1ZSkpcmV0dXJuO2I9XCJcIithLl93cmFwcGVyU3RhdGUuaW5pdGlhbFZhbHVlO2N8fGI9PT1hLnZhbHVlfHwoYS52YWx1ZT1iKTthLmRlZmF1bHRWYWx1ZT1ifWM9YS5uYW1lO1wiXCIhPT1jJiYoYS5uYW1lPVwiXCIpO2EuZGVmYXVsdENoZWNrZWQ9IWEuZGVmYXVsdENoZWNrZWQ7YS5kZWZhdWx0Q2hlY2tlZD0hIWEuX3dyYXBwZXJTdGF0ZS5pbml0aWFsQ2hlY2tlZDtcIlwiIT09YyYmKGEubmFtZT1jKX1cbmZ1bmN0aW9uIHpjKGEsYixjKXtpZihcIm51bWJlclwiIT09Ynx8YS5vd25lckRvY3VtZW50LmFjdGl2ZUVsZW1lbnQhPT1hKW51bGw9PWM/YS5kZWZhdWx0VmFsdWU9XCJcIithLl93cmFwcGVyU3RhdGUuaW5pdGlhbFZhbHVlOmEuZGVmYXVsdFZhbHVlIT09XCJcIitjJiYoYS5kZWZhdWx0VmFsdWU9XCJcIitjKX12YXIgQmM9e2NoYW5nZTp7cGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6e2J1YmJsZWQ6XCJvbkNoYW5nZVwiLGNhcHR1cmVkOlwib25DaGFuZ2VDYXB0dXJlXCJ9LGRlcGVuZGVuY2llczpcImJsdXIgY2hhbmdlIGNsaWNrIGZvY3VzIGlucHV0IGtleWRvd24ga2V5dXAgc2VsZWN0aW9uY2hhbmdlXCIuc3BsaXQoXCIgXCIpfX07ZnVuY3Rpb24gQ2MoYSxiLGMpe2E9eS5nZXRQb29sZWQoQmMuY2hhbmdlLGEsYixjKTthLnR5cGU9XCJjaGFuZ2VcIjtFYihjKTtRYShhKTtyZXR1cm4gYX12YXIgRGM9bnVsbCxFYz1udWxsO2Z1bmN0aW9uIEZjKGEpe0RhKGEpfVxuZnVuY3Rpb24gR2MoYSl7dmFyIGI9SmEoYSk7aWYoU2IoYikpcmV0dXJuIGF9ZnVuY3Rpb24gSGMoYSxiKXtpZihcImNoYW5nZVwiPT09YSlyZXR1cm4gYn12YXIgSWM9ITE7UmEmJihJYz1PYihcImlucHV0XCIpJiYoIWRvY3VtZW50LmRvY3VtZW50TW9kZXx8OTxkb2N1bWVudC5kb2N1bWVudE1vZGUpKTtmdW5jdGlvbiBKYygpe0RjJiYoRGMuZGV0YWNoRXZlbnQoXCJvbnByb3BlcnR5Y2hhbmdlXCIsS2MpLEVjPURjPW51bGwpfWZ1bmN0aW9uIEtjKGEpe1widmFsdWVcIj09PWEucHJvcGVydHlOYW1lJiZHYyhFYykmJihhPUNjKEVjLGEsTmIoYSkpLEtiKEZjLGEpKX1mdW5jdGlvbiBMYyhhLGIsYyl7XCJmb2N1c1wiPT09YT8oSmMoKSxEYz1iLEVjPWMsRGMuYXR0YWNoRXZlbnQoXCJvbnByb3BlcnR5Y2hhbmdlXCIsS2MpKTpcImJsdXJcIj09PWEmJkpjKCl9ZnVuY3Rpb24gTWMoYSl7aWYoXCJzZWxlY3Rpb25jaGFuZ2VcIj09PWF8fFwia2V5dXBcIj09PWF8fFwia2V5ZG93blwiPT09YSlyZXR1cm4gR2MoRWMpfVxuZnVuY3Rpb24gTmMoYSxiKXtpZihcImNsaWNrXCI9PT1hKXJldHVybiBHYyhiKX1mdW5jdGlvbiBPYyhhLGIpe2lmKFwiaW5wdXRcIj09PWF8fFwiY2hhbmdlXCI9PT1hKXJldHVybiBHYyhiKX1cbnZhciBQYz17ZXZlbnRUeXBlczpCYyxfaXNJbnB1dEV2ZW50U3VwcG9ydGVkOkljLGV4dHJhY3RFdmVudHM6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9Yj9KYShiKTp3aW5kb3csZj12b2lkIDAsZz12b2lkIDAsaD1lLm5vZGVOYW1lJiZlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XCJzZWxlY3RcIj09PWh8fFwiaW5wdXRcIj09PWgmJlwiZmlsZVwiPT09ZS50eXBlP2Y9SGM6TWIoZSk/SWM/Zj1PYzooZj1NYyxnPUxjKTooaD1lLm5vZGVOYW1lKSYmXCJpbnB1dFwiPT09aC50b0xvd2VyQ2FzZSgpJiYoXCJjaGVja2JveFwiPT09ZS50eXBlfHxcInJhZGlvXCI9PT1lLnR5cGUpJiYoZj1OYyk7aWYoZiYmKGY9ZihhLGIpKSlyZXR1cm4gQ2MoZixjLGQpO2cmJmcoYSxlLGIpO1wiYmx1clwiPT09YSYmKGE9ZS5fd3JhcHBlclN0YXRlKSYmYS5jb250cm9sbGVkJiZcIm51bWJlclwiPT09ZS50eXBlJiZ6YyhlLFwibnVtYmVyXCIsZS52YWx1ZSl9fSxRYz15LmV4dGVuZCh7dmlldzpudWxsLGRldGFpbDpudWxsfSksUmM9e0FsdDpcImFsdEtleVwiLFxuQ29udHJvbDpcImN0cmxLZXlcIixNZXRhOlwibWV0YUtleVwiLFNoaWZ0Olwic2hpZnRLZXlcIn07ZnVuY3Rpb24gU2MoYSl7dmFyIGI9dGhpcy5uYXRpdmVFdmVudDtyZXR1cm4gYi5nZXRNb2RpZmllclN0YXRlP2IuZ2V0TW9kaWZpZXJTdGF0ZShhKTooYT1SY1thXSk/ISFiW2FdOiExfWZ1bmN0aW9uIFRjKCl7cmV0dXJuIFNjfVxudmFyIFVjPTAsVmM9MCxXYz0hMSxYYz0hMSxZYz1RYy5leHRlbmQoe3NjcmVlblg6bnVsbCxzY3JlZW5ZOm51bGwsY2xpZW50WDpudWxsLGNsaWVudFk6bnVsbCxwYWdlWDpudWxsLHBhZ2VZOm51bGwsY3RybEtleTpudWxsLHNoaWZ0S2V5Om51bGwsYWx0S2V5Om51bGwsbWV0YUtleTpudWxsLGdldE1vZGlmaWVyU3RhdGU6VGMsYnV0dG9uOm51bGwsYnV0dG9uczpudWxsLHJlbGF0ZWRUYXJnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVsYXRlZFRhcmdldHx8KGEuZnJvbUVsZW1lbnQ9PT1hLnNyY0VsZW1lbnQ/YS50b0VsZW1lbnQ6YS5mcm9tRWxlbWVudCl9LG1vdmVtZW50WDpmdW5jdGlvbihhKXtpZihcIm1vdmVtZW50WFwiaW4gYSlyZXR1cm4gYS5tb3ZlbWVudFg7dmFyIGI9VWM7VWM9YS5zY3JlZW5YO3JldHVybiBXYz9cIm1vdXNlbW92ZVwiPT09YS50eXBlP2Euc2NyZWVuWC1iOjA6KFdjPSEwLDApfSxtb3ZlbWVudFk6ZnVuY3Rpb24oYSl7aWYoXCJtb3ZlbWVudFlcImluIGEpcmV0dXJuIGEubW92ZW1lbnRZO1xudmFyIGI9VmM7VmM9YS5zY3JlZW5ZO3JldHVybiBYYz9cIm1vdXNlbW92ZVwiPT09YS50eXBlP2Euc2NyZWVuWS1iOjA6KFhjPSEwLDApfX0pLFpjPVljLmV4dGVuZCh7cG9pbnRlcklkOm51bGwsd2lkdGg6bnVsbCxoZWlnaHQ6bnVsbCxwcmVzc3VyZTpudWxsLHRhbmdlbnRpYWxQcmVzc3VyZTpudWxsLHRpbHRYOm51bGwsdGlsdFk6bnVsbCx0d2lzdDpudWxsLHBvaW50ZXJUeXBlOm51bGwsaXNQcmltYXJ5Om51bGx9KSwkYz17bW91c2VFbnRlcjp7cmVnaXN0cmF0aW9uTmFtZTpcIm9uTW91c2VFbnRlclwiLGRlcGVuZGVuY2llczpbXCJtb3VzZW91dFwiLFwibW91c2VvdmVyXCJdfSxtb3VzZUxlYXZlOntyZWdpc3RyYXRpb25OYW1lOlwib25Nb3VzZUxlYXZlXCIsZGVwZW5kZW5jaWVzOltcIm1vdXNlb3V0XCIsXCJtb3VzZW92ZXJcIl19LHBvaW50ZXJFbnRlcjp7cmVnaXN0cmF0aW9uTmFtZTpcIm9uUG9pbnRlckVudGVyXCIsZGVwZW5kZW5jaWVzOltcInBvaW50ZXJvdXRcIixcInBvaW50ZXJvdmVyXCJdfSxwb2ludGVyTGVhdmU6e3JlZ2lzdHJhdGlvbk5hbWU6XCJvblBvaW50ZXJMZWF2ZVwiLFxuZGVwZW5kZW5jaWVzOltcInBvaW50ZXJvdXRcIixcInBvaW50ZXJvdmVyXCJdfX0sYWQ9e2V2ZW50VHlwZXM6JGMsZXh0cmFjdEV2ZW50czpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1cIm1vdXNlb3ZlclwiPT09YXx8XCJwb2ludGVyb3ZlclwiPT09YSxmPVwibW91c2VvdXRcIj09PWF8fFwicG9pbnRlcm91dFwiPT09YTtpZihlJiYoYy5yZWxhdGVkVGFyZ2V0fHxjLmZyb21FbGVtZW50KXx8IWYmJiFlKXJldHVybiBudWxsO2U9ZC53aW5kb3c9PT1kP2Q6KGU9ZC5vd25lckRvY3VtZW50KT9lLmRlZmF1bHRWaWV3fHxlLnBhcmVudFdpbmRvdzp3aW5kb3c7Zj8oZj1iLGI9KGI9Yy5yZWxhdGVkVGFyZ2V0fHxjLnRvRWxlbWVudCk/SGEoYik6bnVsbCk6Zj1udWxsO2lmKGY9PT1iKXJldHVybiBudWxsO3ZhciBnPXZvaWQgMCxoPXZvaWQgMCxsPXZvaWQgMCxrPXZvaWQgMDtpZihcIm1vdXNlb3V0XCI9PT1hfHxcIm1vdXNlb3ZlclwiPT09YSlnPVljLGg9JGMubW91c2VMZWF2ZSxsPSRjLm1vdXNlRW50ZXIsaz1cIm1vdXNlXCI7XG5lbHNlIGlmKFwicG9pbnRlcm91dFwiPT09YXx8XCJwb2ludGVyb3ZlclwiPT09YSlnPVpjLGg9JGMucG9pbnRlckxlYXZlLGw9JGMucG9pbnRlckVudGVyLGs9XCJwb2ludGVyXCI7dmFyIG09bnVsbD09Zj9lOkphKGYpO2U9bnVsbD09Yj9lOkphKGIpO2E9Zy5nZXRQb29sZWQoaCxmLGMsZCk7YS50eXBlPWsrXCJsZWF2ZVwiO2EudGFyZ2V0PW07YS5yZWxhdGVkVGFyZ2V0PWU7Yz1nLmdldFBvb2xlZChsLGIsYyxkKTtjLnR5cGU9aytcImVudGVyXCI7Yy50YXJnZXQ9ZTtjLnJlbGF0ZWRUYXJnZXQ9bTtkPWI7aWYoZiYmZClhOntiPWY7ZT1kO2s9MDtmb3IoZz1iO2c7Zz1MYShnKSlrKys7Zz0wO2ZvcihsPWU7bDtsPUxhKGwpKWcrKztmb3IoOzA8ay1nOyliPUxhKGIpLGstLTtmb3IoOzA8Zy1rOyllPUxhKGUpLGctLTtmb3IoO2stLTspe2lmKGI9PT1lfHxiPT09ZS5hbHRlcm5hdGUpYnJlYWsgYTtiPUxhKGIpO2U9TGEoZSl9Yj1udWxsfWVsc2UgYj1udWxsO2U9Yjtmb3IoYj1bXTtmJiZmIT09ZTspe2s9XG5mLmFsdGVybmF0ZTtpZihudWxsIT09ayYmaz09PWUpYnJlYWs7Yi5wdXNoKGYpO2Y9TGEoZil9Zm9yKGY9W107ZCYmZCE9PWU7KXtrPWQuYWx0ZXJuYXRlO2lmKG51bGwhPT1rJiZrPT09ZSlicmVhaztmLnB1c2goZCk7ZD1MYShkKX1mb3IoZD0wO2Q8Yi5sZW5ndGg7ZCsrKU9hKGJbZF0sXCJidWJibGVkXCIsYSk7Zm9yKGQ9Zi5sZW5ndGg7MDxkLS07KU9hKGZbZF0sXCJjYXB0dXJlZFwiLGMpO3JldHVyblthLGNdfX07ZnVuY3Rpb24gYmQoYSxiKXtyZXR1cm4gYT09PWImJigwIT09YXx8MS9hPT09MS9iKXx8YSE9PWEmJmIhPT1ifXZhciBjZD1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuZnVuY3Rpb24gZGQoYSxiKXtpZihiZChhLGIpKXJldHVybiEwO2lmKFwib2JqZWN0XCIhPT10eXBlb2YgYXx8bnVsbD09PWF8fFwib2JqZWN0XCIhPT10eXBlb2YgYnx8bnVsbD09PWIpcmV0dXJuITE7dmFyIGM9T2JqZWN0LmtleXMoYSksZD1PYmplY3Qua2V5cyhiKTtpZihjLmxlbmd0aCE9PWQubGVuZ3RoKXJldHVybiExO2ZvcihkPTA7ZDxjLmxlbmd0aDtkKyspaWYoIWNkLmNhbGwoYixjW2RdKXx8IWJkKGFbY1tkXV0sYltjW2RdXSkpcmV0dXJuITE7cmV0dXJuITB9ZnVuY3Rpb24gZWQoYSl7dmFyIGI9YTtpZihhLmFsdGVybmF0ZSlmb3IoO2IucmV0dXJuOyliPWIucmV0dXJuO2Vsc2V7aWYoMCE9PShiLmVmZmVjdFRhZyYyKSlyZXR1cm4gMTtmb3IoO2IucmV0dXJuOylpZihiPWIucmV0dXJuLDAhPT0oYi5lZmZlY3RUYWcmMikpcmV0dXJuIDF9cmV0dXJuIDM9PT1iLnRhZz8yOjN9ZnVuY3Rpb24gZmQoYSl7MiE9PWVkKGEpP3goXCIxODhcIik6dm9pZCAwfVxuZnVuY3Rpb24gZ2QoYSl7dmFyIGI9YS5hbHRlcm5hdGU7aWYoIWIpcmV0dXJuIGI9ZWQoYSksMz09PWI/eChcIjE4OFwiKTp2b2lkIDAsMT09PWI/bnVsbDphO2Zvcih2YXIgYz1hLGQ9Yjs7KXt2YXIgZT1jLnJldHVybixmPWU/ZS5hbHRlcm5hdGU6bnVsbDtpZighZXx8IWYpYnJlYWs7aWYoZS5jaGlsZD09PWYuY2hpbGQpe2Zvcih2YXIgZz1lLmNoaWxkO2c7KXtpZihnPT09YylyZXR1cm4gZmQoZSksYTtpZihnPT09ZClyZXR1cm4gZmQoZSksYjtnPWcuc2libGluZ314KFwiMTg4XCIpfWlmKGMucmV0dXJuIT09ZC5yZXR1cm4pYz1lLGQ9ZjtlbHNle2c9ITE7Zm9yKHZhciBoPWUuY2hpbGQ7aDspe2lmKGg9PT1jKXtnPSEwO2M9ZTtkPWY7YnJlYWt9aWYoaD09PWQpe2c9ITA7ZD1lO2M9ZjticmVha31oPWguc2libGluZ31pZighZyl7Zm9yKGg9Zi5jaGlsZDtoOyl7aWYoaD09PWMpe2c9ITA7Yz1mO2Q9ZTticmVha31pZihoPT09ZCl7Zz0hMDtkPWY7Yz1lO2JyZWFrfWg9aC5zaWJsaW5nfWc/XG52b2lkIDA6eChcIjE4OVwiKX19Yy5hbHRlcm5hdGUhPT1kP3goXCIxOTBcIik6dm9pZCAwfTMhPT1jLnRhZz94KFwiMTg4XCIpOnZvaWQgMDtyZXR1cm4gYy5zdGF0ZU5vZGUuY3VycmVudD09PWM/YTpifWZ1bmN0aW9uIGhkKGEpe2E9Z2QoYSk7aWYoIWEpcmV0dXJuIG51bGw7Zm9yKHZhciBiPWE7Oyl7aWYoNT09PWIudGFnfHw2PT09Yi50YWcpcmV0dXJuIGI7aWYoYi5jaGlsZCliLmNoaWxkLnJldHVybj1iLGI9Yi5jaGlsZDtlbHNle2lmKGI9PT1hKWJyZWFrO2Zvcig7IWIuc2libGluZzspe2lmKCFiLnJldHVybnx8Yi5yZXR1cm49PT1hKXJldHVybiBudWxsO2I9Yi5yZXR1cm59Yi5zaWJsaW5nLnJldHVybj1iLnJldHVybjtiPWIuc2libGluZ319cmV0dXJuIG51bGx9XG52YXIgaWQ9eS5leHRlbmQoe2FuaW1hdGlvbk5hbWU6bnVsbCxlbGFwc2VkVGltZTpudWxsLHBzZXVkb0VsZW1lbnQ6bnVsbH0pLGpkPXkuZXh0ZW5kKHtjbGlwYm9hcmREYXRhOmZ1bmN0aW9uKGEpe3JldHVyblwiY2xpcGJvYXJkRGF0YVwiaW4gYT9hLmNsaXBib2FyZERhdGE6d2luZG93LmNsaXBib2FyZERhdGF9fSksa2Q9UWMuZXh0ZW5kKHtyZWxhdGVkVGFyZ2V0Om51bGx9KTtmdW5jdGlvbiBsZChhKXt2YXIgYj1hLmtleUNvZGU7XCJjaGFyQ29kZVwiaW4gYT8oYT1hLmNoYXJDb2RlLDA9PT1hJiYxMz09PWImJihhPTEzKSk6YT1iOzEwPT09YSYmKGE9MTMpO3JldHVybiAzMjw9YXx8MTM9PT1hP2E6MH1cbnZhciBtZD17RXNjOlwiRXNjYXBlXCIsU3BhY2ViYXI6XCIgXCIsTGVmdDpcIkFycm93TGVmdFwiLFVwOlwiQXJyb3dVcFwiLFJpZ2h0OlwiQXJyb3dSaWdodFwiLERvd246XCJBcnJvd0Rvd25cIixEZWw6XCJEZWxldGVcIixXaW46XCJPU1wiLE1lbnU6XCJDb250ZXh0TWVudVwiLEFwcHM6XCJDb250ZXh0TWVudVwiLFNjcm9sbDpcIlNjcm9sbExvY2tcIixNb3pQcmludGFibGVLZXk6XCJVbmlkZW50aWZpZWRcIn0sbmQ9ezg6XCJCYWNrc3BhY2VcIiw5OlwiVGFiXCIsMTI6XCJDbGVhclwiLDEzOlwiRW50ZXJcIiwxNjpcIlNoaWZ0XCIsMTc6XCJDb250cm9sXCIsMTg6XCJBbHRcIiwxOTpcIlBhdXNlXCIsMjA6XCJDYXBzTG9ja1wiLDI3OlwiRXNjYXBlXCIsMzI6XCIgXCIsMzM6XCJQYWdlVXBcIiwzNDpcIlBhZ2VEb3duXCIsMzU6XCJFbmRcIiwzNjpcIkhvbWVcIiwzNzpcIkFycm93TGVmdFwiLDM4OlwiQXJyb3dVcFwiLDM5OlwiQXJyb3dSaWdodFwiLDQwOlwiQXJyb3dEb3duXCIsNDU6XCJJbnNlcnRcIiw0NjpcIkRlbGV0ZVwiLDExMjpcIkYxXCIsMTEzOlwiRjJcIiwxMTQ6XCJGM1wiLDExNTpcIkY0XCIsXG4xMTY6XCJGNVwiLDExNzpcIkY2XCIsMTE4OlwiRjdcIiwxMTk6XCJGOFwiLDEyMDpcIkY5XCIsMTIxOlwiRjEwXCIsMTIyOlwiRjExXCIsMTIzOlwiRjEyXCIsMTQ0OlwiTnVtTG9ja1wiLDE0NTpcIlNjcm9sbExvY2tcIiwyMjQ6XCJNZXRhXCJ9LG9kPVFjLmV4dGVuZCh7a2V5OmZ1bmN0aW9uKGEpe2lmKGEua2V5KXt2YXIgYj1tZFthLmtleV18fGEua2V5O2lmKFwiVW5pZGVudGlmaWVkXCIhPT1iKXJldHVybiBifXJldHVyblwia2V5cHJlc3NcIj09PWEudHlwZT8oYT1sZChhKSwxMz09PWE/XCJFbnRlclwiOlN0cmluZy5mcm9tQ2hhckNvZGUoYSkpOlwia2V5ZG93blwiPT09YS50eXBlfHxcImtleXVwXCI9PT1hLnR5cGU/bmRbYS5rZXlDb2RlXXx8XCJVbmlkZW50aWZpZWRcIjpcIlwifSxsb2NhdGlvbjpudWxsLGN0cmxLZXk6bnVsbCxzaGlmdEtleTpudWxsLGFsdEtleTpudWxsLG1ldGFLZXk6bnVsbCxyZXBlYXQ6bnVsbCxsb2NhbGU6bnVsbCxnZXRNb2RpZmllclN0YXRlOlRjLGNoYXJDb2RlOmZ1bmN0aW9uKGEpe3JldHVyblwia2V5cHJlc3NcIj09PVxuYS50eXBlP2xkKGEpOjB9LGtleUNvZGU6ZnVuY3Rpb24oYSl7cmV0dXJuXCJrZXlkb3duXCI9PT1hLnR5cGV8fFwia2V5dXBcIj09PWEudHlwZT9hLmtleUNvZGU6MH0sd2hpY2g6ZnVuY3Rpb24oYSl7cmV0dXJuXCJrZXlwcmVzc1wiPT09YS50eXBlP2xkKGEpOlwia2V5ZG93blwiPT09YS50eXBlfHxcImtleXVwXCI9PT1hLnR5cGU/YS5rZXlDb2RlOjB9fSkscGQ9WWMuZXh0ZW5kKHtkYXRhVHJhbnNmZXI6bnVsbH0pLHFkPVFjLmV4dGVuZCh7dG91Y2hlczpudWxsLHRhcmdldFRvdWNoZXM6bnVsbCxjaGFuZ2VkVG91Y2hlczpudWxsLGFsdEtleTpudWxsLG1ldGFLZXk6bnVsbCxjdHJsS2V5Om51bGwsc2hpZnRLZXk6bnVsbCxnZXRNb2RpZmllclN0YXRlOlRjfSkscmQ9eS5leHRlbmQoe3Byb3BlcnR5TmFtZTpudWxsLGVsYXBzZWRUaW1lOm51bGwscHNldWRvRWxlbWVudDpudWxsfSksc2Q9WWMuZXh0ZW5kKHtkZWx0YVg6ZnVuY3Rpb24oYSl7cmV0dXJuXCJkZWx0YVhcImluIGE/YS5kZWx0YVg6XCJ3aGVlbERlbHRhWFwiaW5cbmE/LWEud2hlZWxEZWx0YVg6MH0sZGVsdGFZOmZ1bmN0aW9uKGEpe3JldHVyblwiZGVsdGFZXCJpbiBhP2EuZGVsdGFZOlwid2hlZWxEZWx0YVlcImluIGE/LWEud2hlZWxEZWx0YVk6XCJ3aGVlbERlbHRhXCJpbiBhPy1hLndoZWVsRGVsdGE6MH0sZGVsdGFaOm51bGwsZGVsdGFNb2RlOm51bGx9KSx0ZD1bW1wiYWJvcnRcIixcImFib3J0XCJdLFtYYSxcImFuaW1hdGlvbkVuZFwiXSxbWWEsXCJhbmltYXRpb25JdGVyYXRpb25cIl0sW1phLFwiYW5pbWF0aW9uU3RhcnRcIl0sW1wiY2FucGxheVwiLFwiY2FuUGxheVwiXSxbXCJjYW5wbGF5dGhyb3VnaFwiLFwiY2FuUGxheVRocm91Z2hcIl0sW1wiZHJhZ1wiLFwiZHJhZ1wiXSxbXCJkcmFnZW50ZXJcIixcImRyYWdFbnRlclwiXSxbXCJkcmFnZXhpdFwiLFwiZHJhZ0V4aXRcIl0sW1wiZHJhZ2xlYXZlXCIsXCJkcmFnTGVhdmVcIl0sW1wiZHJhZ292ZXJcIixcImRyYWdPdmVyXCJdLFtcImR1cmF0aW9uY2hhbmdlXCIsXCJkdXJhdGlvbkNoYW5nZVwiXSxbXCJlbXB0aWVkXCIsXCJlbXB0aWVkXCJdLFtcImVuY3J5cHRlZFwiLFwiZW5jcnlwdGVkXCJdLFxuW1wiZW5kZWRcIixcImVuZGVkXCJdLFtcImVycm9yXCIsXCJlcnJvclwiXSxbXCJnb3Rwb2ludGVyY2FwdHVyZVwiLFwiZ290UG9pbnRlckNhcHR1cmVcIl0sW1wibG9hZFwiLFwibG9hZFwiXSxbXCJsb2FkZWRkYXRhXCIsXCJsb2FkZWREYXRhXCJdLFtcImxvYWRlZG1ldGFkYXRhXCIsXCJsb2FkZWRNZXRhZGF0YVwiXSxbXCJsb2Fkc3RhcnRcIixcImxvYWRTdGFydFwiXSxbXCJsb3N0cG9pbnRlcmNhcHR1cmVcIixcImxvc3RQb2ludGVyQ2FwdHVyZVwiXSxbXCJtb3VzZW1vdmVcIixcIm1vdXNlTW92ZVwiXSxbXCJtb3VzZW91dFwiLFwibW91c2VPdXRcIl0sW1wibW91c2VvdmVyXCIsXCJtb3VzZU92ZXJcIl0sW1wicGxheWluZ1wiLFwicGxheWluZ1wiXSxbXCJwb2ludGVybW92ZVwiLFwicG9pbnRlck1vdmVcIl0sW1wicG9pbnRlcm91dFwiLFwicG9pbnRlck91dFwiXSxbXCJwb2ludGVyb3ZlclwiLFwicG9pbnRlck92ZXJcIl0sW1wicHJvZ3Jlc3NcIixcInByb2dyZXNzXCJdLFtcInNjcm9sbFwiLFwic2Nyb2xsXCJdLFtcInNlZWtpbmdcIixcInNlZWtpbmdcIl0sW1wic3RhbGxlZFwiLFwic3RhbGxlZFwiXSxcbltcInN1c3BlbmRcIixcInN1c3BlbmRcIl0sW1widGltZXVwZGF0ZVwiLFwidGltZVVwZGF0ZVwiXSxbXCJ0b2dnbGVcIixcInRvZ2dsZVwiXSxbXCJ0b3VjaG1vdmVcIixcInRvdWNoTW92ZVwiXSxbJGEsXCJ0cmFuc2l0aW9uRW5kXCJdLFtcIndhaXRpbmdcIixcIndhaXRpbmdcIl0sW1wid2hlZWxcIixcIndoZWVsXCJdXSx1ZD17fSx2ZD17fTtmdW5jdGlvbiB3ZChhLGIpe3ZhciBjPWFbMF07YT1hWzFdO3ZhciBkPVwib25cIisoYVswXS50b1VwcGVyQ2FzZSgpK2Euc2xpY2UoMSkpO2I9e3BoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOntidWJibGVkOmQsY2FwdHVyZWQ6ZCtcIkNhcHR1cmVcIn0sZGVwZW5kZW5jaWVzOltjXSxpc0ludGVyYWN0aXZlOmJ9O3VkW2FdPWI7dmRbY109Yn1cbltbXCJibHVyXCIsXCJibHVyXCJdLFtcImNhbmNlbFwiLFwiY2FuY2VsXCJdLFtcImNsaWNrXCIsXCJjbGlja1wiXSxbXCJjbG9zZVwiLFwiY2xvc2VcIl0sW1wiY29udGV4dG1lbnVcIixcImNvbnRleHRNZW51XCJdLFtcImNvcHlcIixcImNvcHlcIl0sW1wiY3V0XCIsXCJjdXRcIl0sW1wiYXV4Y2xpY2tcIixcImF1eENsaWNrXCJdLFtcImRibGNsaWNrXCIsXCJkb3VibGVDbGlja1wiXSxbXCJkcmFnZW5kXCIsXCJkcmFnRW5kXCJdLFtcImRyYWdzdGFydFwiLFwiZHJhZ1N0YXJ0XCJdLFtcImRyb3BcIixcImRyb3BcIl0sW1wiZm9jdXNcIixcImZvY3VzXCJdLFtcImlucHV0XCIsXCJpbnB1dFwiXSxbXCJpbnZhbGlkXCIsXCJpbnZhbGlkXCJdLFtcImtleWRvd25cIixcImtleURvd25cIl0sW1wia2V5cHJlc3NcIixcImtleVByZXNzXCJdLFtcImtleXVwXCIsXCJrZXlVcFwiXSxbXCJtb3VzZWRvd25cIixcIm1vdXNlRG93blwiXSxbXCJtb3VzZXVwXCIsXCJtb3VzZVVwXCJdLFtcInBhc3RlXCIsXCJwYXN0ZVwiXSxbXCJwYXVzZVwiLFwicGF1c2VcIl0sW1wicGxheVwiLFwicGxheVwiXSxbXCJwb2ludGVyY2FuY2VsXCIsXCJwb2ludGVyQ2FuY2VsXCJdLFxuW1wicG9pbnRlcmRvd25cIixcInBvaW50ZXJEb3duXCJdLFtcInBvaW50ZXJ1cFwiLFwicG9pbnRlclVwXCJdLFtcInJhdGVjaGFuZ2VcIixcInJhdGVDaGFuZ2VcIl0sW1wicmVzZXRcIixcInJlc2V0XCJdLFtcInNlZWtlZFwiLFwic2Vla2VkXCJdLFtcInN1Ym1pdFwiLFwic3VibWl0XCJdLFtcInRvdWNoY2FuY2VsXCIsXCJ0b3VjaENhbmNlbFwiXSxbXCJ0b3VjaGVuZFwiLFwidG91Y2hFbmRcIl0sW1widG91Y2hzdGFydFwiLFwidG91Y2hTdGFydFwiXSxbXCJ2b2x1bWVjaGFuZ2VcIixcInZvbHVtZUNoYW5nZVwiXV0uZm9yRWFjaChmdW5jdGlvbihhKXt3ZChhLCEwKX0pO3RkLmZvckVhY2goZnVuY3Rpb24oYSl7d2QoYSwhMSl9KTtcbnZhciB4ZD17ZXZlbnRUeXBlczp1ZCxpc0ludGVyYWN0aXZlVG9wTGV2ZWxFdmVudFR5cGU6ZnVuY3Rpb24oYSl7YT12ZFthXTtyZXR1cm4gdm9pZCAwIT09YSYmITA9PT1hLmlzSW50ZXJhY3RpdmV9LGV4dHJhY3RFdmVudHM6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9dmRbYV07aWYoIWUpcmV0dXJuIG51bGw7c3dpdGNoKGEpe2Nhc2UgXCJrZXlwcmVzc1wiOmlmKDA9PT1sZChjKSlyZXR1cm4gbnVsbDtjYXNlIFwia2V5ZG93blwiOmNhc2UgXCJrZXl1cFwiOmE9b2Q7YnJlYWs7Y2FzZSBcImJsdXJcIjpjYXNlIFwiZm9jdXNcIjphPWtkO2JyZWFrO2Nhc2UgXCJjbGlja1wiOmlmKDI9PT1jLmJ1dHRvbilyZXR1cm4gbnVsbDtjYXNlIFwiYXV4Y2xpY2tcIjpjYXNlIFwiZGJsY2xpY2tcIjpjYXNlIFwibW91c2Vkb3duXCI6Y2FzZSBcIm1vdXNlbW92ZVwiOmNhc2UgXCJtb3VzZXVwXCI6Y2FzZSBcIm1vdXNlb3V0XCI6Y2FzZSBcIm1vdXNlb3ZlclwiOmNhc2UgXCJjb250ZXh0bWVudVwiOmE9WWM7YnJlYWs7Y2FzZSBcImRyYWdcIjpjYXNlIFwiZHJhZ2VuZFwiOmNhc2UgXCJkcmFnZW50ZXJcIjpjYXNlIFwiZHJhZ2V4aXRcIjpjYXNlIFwiZHJhZ2xlYXZlXCI6Y2FzZSBcImRyYWdvdmVyXCI6Y2FzZSBcImRyYWdzdGFydFwiOmNhc2UgXCJkcm9wXCI6YT1cbnBkO2JyZWFrO2Nhc2UgXCJ0b3VjaGNhbmNlbFwiOmNhc2UgXCJ0b3VjaGVuZFwiOmNhc2UgXCJ0b3VjaG1vdmVcIjpjYXNlIFwidG91Y2hzdGFydFwiOmE9cWQ7YnJlYWs7Y2FzZSBYYTpjYXNlIFlhOmNhc2UgWmE6YT1pZDticmVhaztjYXNlICRhOmE9cmQ7YnJlYWs7Y2FzZSBcInNjcm9sbFwiOmE9UWM7YnJlYWs7Y2FzZSBcIndoZWVsXCI6YT1zZDticmVhaztjYXNlIFwiY29weVwiOmNhc2UgXCJjdXRcIjpjYXNlIFwicGFzdGVcIjphPWpkO2JyZWFrO2Nhc2UgXCJnb3Rwb2ludGVyY2FwdHVyZVwiOmNhc2UgXCJsb3N0cG9pbnRlcmNhcHR1cmVcIjpjYXNlIFwicG9pbnRlcmNhbmNlbFwiOmNhc2UgXCJwb2ludGVyZG93blwiOmNhc2UgXCJwb2ludGVybW92ZVwiOmNhc2UgXCJwb2ludGVyb3V0XCI6Y2FzZSBcInBvaW50ZXJvdmVyXCI6Y2FzZSBcInBvaW50ZXJ1cFwiOmE9WmM7YnJlYWs7ZGVmYXVsdDphPXl9Yj1hLmdldFBvb2xlZChlLGIsYyxkKTtRYShiKTtyZXR1cm4gYn19LHlkPXhkLmlzSW50ZXJhY3RpdmVUb3BMZXZlbEV2ZW50VHlwZSxcbnpkPVtdO2Z1bmN0aW9uIEFkKGEpe3ZhciBiPWEudGFyZ2V0SW5zdCxjPWI7ZG97aWYoIWMpe2EuYW5jZXN0b3JzLnB1c2goYyk7YnJlYWt9dmFyIGQ7Zm9yKGQ9YztkLnJldHVybjspZD1kLnJldHVybjtkPTMhPT1kLnRhZz9udWxsOmQuc3RhdGVOb2RlLmNvbnRhaW5lckluZm87aWYoIWQpYnJlYWs7YS5hbmNlc3RvcnMucHVzaChjKTtjPUhhKGQpfXdoaWxlKGMpO2ZvcihjPTA7YzxhLmFuY2VzdG9ycy5sZW5ndGg7YysrKXtiPWEuYW5jZXN0b3JzW2NdO3ZhciBlPU5iKGEubmF0aXZlRXZlbnQpO2Q9YS50b3BMZXZlbFR5cGU7Zm9yKHZhciBmPWEubmF0aXZlRXZlbnQsZz1udWxsLGg9MDtoPG9hLmxlbmd0aDtoKyspe3ZhciBsPW9hW2hdO2wmJihsPWwuZXh0cmFjdEV2ZW50cyhkLGIsZixlKSkmJihnPXhhKGcsbCkpfURhKGcpfX12YXIgQmQ9ITA7XG5mdW5jdGlvbiBFKGEsYil7aWYoIWIpcmV0dXJuIG51bGw7dmFyIGM9KHlkKGEpP0NkOkRkKS5iaW5kKG51bGwsYSk7Yi5hZGRFdmVudExpc3RlbmVyKGEsYywhMSl9ZnVuY3Rpb24gRWQoYSxiKXtpZighYilyZXR1cm4gbnVsbDt2YXIgYz0oeWQoYSk/Q2Q6RGQpLmJpbmQobnVsbCxhKTtiLmFkZEV2ZW50TGlzdGVuZXIoYSxjLCEwKX1mdW5jdGlvbiBDZChhLGIpe0hiKERkLGEsYil9XG5mdW5jdGlvbiBEZChhLGIpe2lmKEJkKXt2YXIgYz1OYihiKTtjPUhhKGMpO251bGw9PT1jfHxcIm51bWJlclwiIT09dHlwZW9mIGMudGFnfHwyPT09ZWQoYyl8fChjPW51bGwpO2lmKHpkLmxlbmd0aCl7dmFyIGQ9emQucG9wKCk7ZC50b3BMZXZlbFR5cGU9YTtkLm5hdGl2ZUV2ZW50PWI7ZC50YXJnZXRJbnN0PWM7YT1kfWVsc2UgYT17dG9wTGV2ZWxUeXBlOmEsbmF0aXZlRXZlbnQ6Yix0YXJnZXRJbnN0OmMsYW5jZXN0b3JzOltdfTt0cnl7S2IoQWQsYSl9ZmluYWxseXthLnRvcExldmVsVHlwZT1udWxsLGEubmF0aXZlRXZlbnQ9bnVsbCxhLnRhcmdldEluc3Q9bnVsbCxhLmFuY2VzdG9ycy5sZW5ndGg9MCwxMD56ZC5sZW5ndGgmJnpkLnB1c2goYSl9fX12YXIgRmQ9e30sR2Q9MCxIZD1cIl9yZWFjdExpc3RlbmVyc0lEXCIrKFwiXCIrTWF0aC5yYW5kb20oKSkuc2xpY2UoMik7XG5mdW5jdGlvbiBJZChhKXtPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYSxIZCl8fChhW0hkXT1HZCsrLEZkW2FbSGRdXT17fSk7cmV0dXJuIEZkW2FbSGRdXX1mdW5jdGlvbiBKZChhKXthPWF8fChcInVuZGVmaW5lZFwiIT09dHlwZW9mIGRvY3VtZW50P2RvY3VtZW50OnZvaWQgMCk7aWYoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBhKXJldHVybiBudWxsO3RyeXtyZXR1cm4gYS5hY3RpdmVFbGVtZW50fHxhLmJvZHl9Y2F0Y2goYil7cmV0dXJuIGEuYm9keX19ZnVuY3Rpb24gS2QoYSl7Zm9yKDthJiZhLmZpcnN0Q2hpbGQ7KWE9YS5maXJzdENoaWxkO3JldHVybiBhfVxuZnVuY3Rpb24gTGQoYSxiKXt2YXIgYz1LZChhKTthPTA7Zm9yKHZhciBkO2M7KXtpZigzPT09Yy5ub2RlVHlwZSl7ZD1hK2MudGV4dENvbnRlbnQubGVuZ3RoO2lmKGE8PWImJmQ+PWIpcmV0dXJue25vZGU6YyxvZmZzZXQ6Yi1hfTthPWR9YTp7Zm9yKDtjOyl7aWYoYy5uZXh0U2libGluZyl7Yz1jLm5leHRTaWJsaW5nO2JyZWFrIGF9Yz1jLnBhcmVudE5vZGV9Yz12b2lkIDB9Yz1LZChjKX19ZnVuY3Rpb24gTWQoYSxiKXtyZXR1cm4gYSYmYj9hPT09Yj8hMDphJiYzPT09YS5ub2RlVHlwZT8hMTpiJiYzPT09Yi5ub2RlVHlwZT9NZChhLGIucGFyZW50Tm9kZSk6XCJjb250YWluc1wiaW4gYT9hLmNvbnRhaW5zKGIpOmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24/ISEoYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihiKSYxNik6ITE6ITF9XG5mdW5jdGlvbiBOZCgpe2Zvcih2YXIgYT13aW5kb3csYj1KZCgpO2IgaW5zdGFuY2VvZiBhLkhUTUxJRnJhbWVFbGVtZW50Oyl7dHJ5e3ZhciBjPVwic3RyaW5nXCI9PT10eXBlb2YgYi5jb250ZW50V2luZG93LmxvY2F0aW9uLmhyZWZ9Y2F0Y2goZCl7Yz0hMX1pZihjKWE9Yi5jb250ZW50V2luZG93O2Vsc2UgYnJlYWs7Yj1KZChhLmRvY3VtZW50KX1yZXR1cm4gYn1mdW5jdGlvbiBPZChhKXt2YXIgYj1hJiZhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGImJihcImlucHV0XCI9PT1iJiYoXCJ0ZXh0XCI9PT1hLnR5cGV8fFwic2VhcmNoXCI9PT1hLnR5cGV8fFwidGVsXCI9PT1hLnR5cGV8fFwidXJsXCI9PT1hLnR5cGV8fFwicGFzc3dvcmRcIj09PWEudHlwZSl8fFwidGV4dGFyZWFcIj09PWJ8fFwidHJ1ZVwiPT09YS5jb250ZW50RWRpdGFibGUpfVxuZnVuY3Rpb24gUGQoKXt2YXIgYT1OZCgpO2lmKE9kKGEpKXtpZihcInNlbGVjdGlvblN0YXJ0XCJpbiBhKXZhciBiPXtzdGFydDphLnNlbGVjdGlvblN0YXJ0LGVuZDphLnNlbGVjdGlvbkVuZH07ZWxzZSBhOntiPShiPWEub3duZXJEb2N1bWVudCkmJmIuZGVmYXVsdFZpZXd8fHdpbmRvdzt2YXIgYz1iLmdldFNlbGVjdGlvbiYmYi5nZXRTZWxlY3Rpb24oKTtpZihjJiYwIT09Yy5yYW5nZUNvdW50KXtiPWMuYW5jaG9yTm9kZTt2YXIgZD1jLmFuY2hvck9mZnNldCxlPWMuZm9jdXNOb2RlO2M9Yy5mb2N1c09mZnNldDt0cnl7Yi5ub2RlVHlwZSxlLm5vZGVUeXBlfWNhdGNoKEEpe2I9bnVsbDticmVhayBhfXZhciBmPTAsZz0tMSxoPS0xLGw9MCxrPTAsbT1hLHA9bnVsbDtiOmZvcig7Oyl7Zm9yKHZhciB0Ozspe20hPT1ifHwwIT09ZCYmMyE9PW0ubm9kZVR5cGV8fChnPWYrZCk7bSE9PWV8fDAhPT1jJiYzIT09bS5ub2RlVHlwZXx8KGg9ZitjKTszPT09bS5ub2RlVHlwZSYmKGYrPW0ubm9kZVZhbHVlLmxlbmd0aCk7XG5pZihudWxsPT09KHQ9bS5maXJzdENoaWxkKSlicmVhaztwPW07bT10fWZvcig7Oyl7aWYobT09PWEpYnJlYWsgYjtwPT09YiYmKytsPT09ZCYmKGc9Zik7cD09PWUmJisraz09PWMmJihoPWYpO2lmKG51bGwhPT0odD1tLm5leHRTaWJsaW5nKSlicmVhazttPXA7cD1tLnBhcmVudE5vZGV9bT10fWI9LTE9PT1nfHwtMT09PWg/bnVsbDp7c3RhcnQ6ZyxlbmQ6aH19ZWxzZSBiPW51bGx9Yj1ifHx7c3RhcnQ6MCxlbmQ6MH19ZWxzZSBiPW51bGw7cmV0dXJue2ZvY3VzZWRFbGVtOmEsc2VsZWN0aW9uUmFuZ2U6Yn19XG5mdW5jdGlvbiBRZChhKXt2YXIgYj1OZCgpLGM9YS5mb2N1c2VkRWxlbSxkPWEuc2VsZWN0aW9uUmFuZ2U7aWYoYiE9PWMmJmMmJmMub3duZXJEb2N1bWVudCYmTWQoYy5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxjKSl7aWYobnVsbCE9PWQmJk9kKGMpKWlmKGI9ZC5zdGFydCxhPWQuZW5kLHZvaWQgMD09PWEmJihhPWIpLFwic2VsZWN0aW9uU3RhcnRcImluIGMpYy5zZWxlY3Rpb25TdGFydD1iLGMuc2VsZWN0aW9uRW5kPU1hdGgubWluKGEsYy52YWx1ZS5sZW5ndGgpO2Vsc2UgaWYoYT0oYj1jLm93bmVyRG9jdW1lbnR8fGRvY3VtZW50KSYmYi5kZWZhdWx0Vmlld3x8d2luZG93LGEuZ2V0U2VsZWN0aW9uKXthPWEuZ2V0U2VsZWN0aW9uKCk7dmFyIGU9Yy50ZXh0Q29udGVudC5sZW5ndGgsZj1NYXRoLm1pbihkLnN0YXJ0LGUpO2Q9dm9pZCAwPT09ZC5lbmQ/ZjpNYXRoLm1pbihkLmVuZCxlKTshYS5leHRlbmQmJmY+ZCYmKGU9ZCxkPWYsZj1lKTtlPUxkKGMsZik7dmFyIGc9TGQoYyxcbmQpO2UmJmcmJigxIT09YS5yYW5nZUNvdW50fHxhLmFuY2hvck5vZGUhPT1lLm5vZGV8fGEuYW5jaG9yT2Zmc2V0IT09ZS5vZmZzZXR8fGEuZm9jdXNOb2RlIT09Zy5ub2RlfHxhLmZvY3VzT2Zmc2V0IT09Zy5vZmZzZXQpJiYoYj1iLmNyZWF0ZVJhbmdlKCksYi5zZXRTdGFydChlLm5vZGUsZS5vZmZzZXQpLGEucmVtb3ZlQWxsUmFuZ2VzKCksZj5kPyhhLmFkZFJhbmdlKGIpLGEuZXh0ZW5kKGcubm9kZSxnLm9mZnNldCkpOihiLnNldEVuZChnLm5vZGUsZy5vZmZzZXQpLGEuYWRkUmFuZ2UoYikpKX1iPVtdO2ZvcihhPWM7YT1hLnBhcmVudE5vZGU7KTE9PT1hLm5vZGVUeXBlJiZiLnB1c2goe2VsZW1lbnQ6YSxsZWZ0OmEuc2Nyb2xsTGVmdCx0b3A6YS5zY3JvbGxUb3B9KTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYy5mb2N1cyYmYy5mb2N1cygpO2ZvcihjPTA7YzxiLmxlbmd0aDtjKyspYT1iW2NdLGEuZWxlbWVudC5zY3JvbGxMZWZ0PWEubGVmdCxhLmVsZW1lbnQuc2Nyb2xsVG9wPWEudG9wfX1cbnZhciBSZD1SYSYmXCJkb2N1bWVudE1vZGVcImluIGRvY3VtZW50JiYxMT49ZG9jdW1lbnQuZG9jdW1lbnRNb2RlLFNkPXtzZWxlY3Q6e3BoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOntidWJibGVkOlwib25TZWxlY3RcIixjYXB0dXJlZDpcIm9uU2VsZWN0Q2FwdHVyZVwifSxkZXBlbmRlbmNpZXM6XCJibHVyIGNvbnRleHRtZW51IGRyYWdlbmQgZm9jdXMga2V5ZG93biBrZXl1cCBtb3VzZWRvd24gbW91c2V1cCBzZWxlY3Rpb25jaGFuZ2VcIi5zcGxpdChcIiBcIil9fSxUZD1udWxsLFVkPW51bGwsVmQ9bnVsbCxXZD0hMTtcbmZ1bmN0aW9uIFhkKGEsYil7dmFyIGM9Yi53aW5kb3c9PT1iP2IuZG9jdW1lbnQ6OT09PWIubm9kZVR5cGU/YjpiLm93bmVyRG9jdW1lbnQ7aWYoV2R8fG51bGw9PVRkfHxUZCE9PUpkKGMpKXJldHVybiBudWxsO2M9VGQ7XCJzZWxlY3Rpb25TdGFydFwiaW4gYyYmT2QoYyk/Yz17c3RhcnQ6Yy5zZWxlY3Rpb25TdGFydCxlbmQ6Yy5zZWxlY3Rpb25FbmR9OihjPShjLm93bmVyRG9jdW1lbnQmJmMub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlld3x8d2luZG93KS5nZXRTZWxlY3Rpb24oKSxjPXthbmNob3JOb2RlOmMuYW5jaG9yTm9kZSxhbmNob3JPZmZzZXQ6Yy5hbmNob3JPZmZzZXQsZm9jdXNOb2RlOmMuZm9jdXNOb2RlLGZvY3VzT2Zmc2V0OmMuZm9jdXNPZmZzZXR9KTtyZXR1cm4gVmQmJmRkKFZkLGMpP251bGw6KFZkPWMsYT15LmdldFBvb2xlZChTZC5zZWxlY3QsVWQsYSxiKSxhLnR5cGU9XCJzZWxlY3RcIixhLnRhcmdldD1UZCxRYShhKSxhKX1cbnZhciBZZD17ZXZlbnRUeXBlczpTZCxleHRyYWN0RXZlbnRzOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPWQud2luZG93PT09ZD9kLmRvY3VtZW50Ojk9PT1kLm5vZGVUeXBlP2Q6ZC5vd25lckRvY3VtZW50LGY7aWYoIShmPSFlKSl7YTp7ZT1JZChlKTtmPXNhLm9uU2VsZWN0O2Zvcih2YXIgZz0wO2c8Zi5sZW5ndGg7ZysrKXt2YXIgaD1mW2ddO2lmKCFlLmhhc093blByb3BlcnR5KGgpfHwhZVtoXSl7ZT0hMTticmVhayBhfX1lPSEwfWY9IWV9aWYoZilyZXR1cm4gbnVsbDtlPWI/SmEoYik6d2luZG93O3N3aXRjaChhKXtjYXNlIFwiZm9jdXNcIjppZihNYihlKXx8XCJ0cnVlXCI9PT1lLmNvbnRlbnRFZGl0YWJsZSlUZD1lLFVkPWIsVmQ9bnVsbDticmVhaztjYXNlIFwiYmx1clwiOlZkPVVkPVRkPW51bGw7YnJlYWs7Y2FzZSBcIm1vdXNlZG93blwiOldkPSEwO2JyZWFrO2Nhc2UgXCJjb250ZXh0bWVudVwiOmNhc2UgXCJtb3VzZXVwXCI6Y2FzZSBcImRyYWdlbmRcIjpyZXR1cm4gV2Q9ITEsWGQoYyxkKTtjYXNlIFwic2VsZWN0aW9uY2hhbmdlXCI6aWYoUmQpYnJlYWs7XG5jYXNlIFwia2V5ZG93blwiOmNhc2UgXCJrZXl1cFwiOnJldHVybiBYZChjLGQpfXJldHVybiBudWxsfX07QmEuaW5qZWN0RXZlbnRQbHVnaW5PcmRlcihcIlJlc3BvbmRlckV2ZW50UGx1Z2luIFNpbXBsZUV2ZW50UGx1Z2luIEVudGVyTGVhdmVFdmVudFBsdWdpbiBDaGFuZ2VFdmVudFBsdWdpbiBTZWxlY3RFdmVudFBsdWdpbiBCZWZvcmVJbnB1dEV2ZW50UGx1Z2luXCIuc3BsaXQoXCIgXCIpKTt0YT1LYTt1YT1JYTt2YT1KYTtCYS5pbmplY3RFdmVudFBsdWdpbnNCeU5hbWUoe1NpbXBsZUV2ZW50UGx1Z2luOnhkLEVudGVyTGVhdmVFdmVudFBsdWdpbjphZCxDaGFuZ2VFdmVudFBsdWdpbjpQYyxTZWxlY3RFdmVudFBsdWdpbjpZZCxCZWZvcmVJbnB1dEV2ZW50UGx1Z2luOnpifSk7ZnVuY3Rpb24gWmQoYSl7dmFyIGI9XCJcIjthYS5DaGlsZHJlbi5mb3JFYWNoKGEsZnVuY3Rpb24oYSl7bnVsbCE9YSYmKGIrPWEpfSk7cmV0dXJuIGJ9XG5mdW5jdGlvbiAkZChhLGIpe2E9bih7Y2hpbGRyZW46dm9pZCAwfSxiKTtpZihiPVpkKGIuY2hpbGRyZW4pKWEuY2hpbGRyZW49YjtyZXR1cm4gYX1mdW5jdGlvbiBhZShhLGIsYyxkKXthPWEub3B0aW9ucztpZihiKXtiPXt9O2Zvcih2YXIgZT0wO2U8Yy5sZW5ndGg7ZSsrKWJbXCIkXCIrY1tlXV09ITA7Zm9yKGM9MDtjPGEubGVuZ3RoO2MrKyllPWIuaGFzT3duUHJvcGVydHkoXCIkXCIrYVtjXS52YWx1ZSksYVtjXS5zZWxlY3RlZCE9PWUmJihhW2NdLnNlbGVjdGVkPWUpLGUmJmQmJihhW2NdLmRlZmF1bHRTZWxlY3RlZD0hMCl9ZWxzZXtjPVwiXCIrdWMoYyk7Yj1udWxsO2ZvcihlPTA7ZTxhLmxlbmd0aDtlKyspe2lmKGFbZV0udmFsdWU9PT1jKXthW2VdLnNlbGVjdGVkPSEwO2QmJihhW2VdLmRlZmF1bHRTZWxlY3RlZD0hMCk7cmV0dXJufW51bGwhPT1ifHxhW2VdLmRpc2FibGVkfHwoYj1hW2VdKX1udWxsIT09YiYmKGIuc2VsZWN0ZWQ9ITApfX1cbmZ1bmN0aW9uIGJlKGEsYil7bnVsbCE9Yi5kYW5nZXJvdXNseVNldElubmVySFRNTD94KFwiOTFcIik6dm9pZCAwO3JldHVybiBuKHt9LGIse3ZhbHVlOnZvaWQgMCxkZWZhdWx0VmFsdWU6dm9pZCAwLGNoaWxkcmVuOlwiXCIrYS5fd3JhcHBlclN0YXRlLmluaXRpYWxWYWx1ZX0pfWZ1bmN0aW9uIGNlKGEsYil7dmFyIGM9Yi52YWx1ZTtudWxsPT1jJiYoYz1iLmRlZmF1bHRWYWx1ZSxiPWIuY2hpbGRyZW4sbnVsbCE9YiYmKG51bGwhPWM/eChcIjkyXCIpOnZvaWQgMCxBcnJheS5pc0FycmF5KGIpJiYoMT49Yi5sZW5ndGg/dm9pZCAwOngoXCI5M1wiKSxiPWJbMF0pLGM9YiksbnVsbD09YyYmKGM9XCJcIikpO2EuX3dyYXBwZXJTdGF0ZT17aW5pdGlhbFZhbHVlOnVjKGMpfX1cbmZ1bmN0aW9uIGRlKGEsYil7dmFyIGM9dWMoYi52YWx1ZSksZD11YyhiLmRlZmF1bHRWYWx1ZSk7bnVsbCE9YyYmKGM9XCJcIitjLGMhPT1hLnZhbHVlJiYoYS52YWx1ZT1jKSxudWxsPT1iLmRlZmF1bHRWYWx1ZSYmYS5kZWZhdWx0VmFsdWUhPT1jJiYoYS5kZWZhdWx0VmFsdWU9YykpO251bGwhPWQmJihhLmRlZmF1bHRWYWx1ZT1cIlwiK2QpfWZ1bmN0aW9uIGVlKGEpe3ZhciBiPWEudGV4dENvbnRlbnQ7Yj09PWEuX3dyYXBwZXJTdGF0ZS5pbml0aWFsVmFsdWUmJihhLnZhbHVlPWIpfXZhciBmZT17aHRtbDpcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIixtYXRobWw6XCJodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MXCIsc3ZnOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIn07XG5mdW5jdGlvbiBnZShhKXtzd2l0Y2goYSl7Y2FzZSBcInN2Z1wiOnJldHVyblwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtjYXNlIFwibWF0aFwiOnJldHVyblwiaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTFwiO2RlZmF1bHQ6cmV0dXJuXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCJ9fWZ1bmN0aW9uIGhlKGEsYil7cmV0dXJuIG51bGw9PWF8fFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiPT09YT9nZShiKTpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI9PT1hJiZcImZvcmVpZ25PYmplY3RcIj09PWI/XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI6YX1cbnZhciBpZT12b2lkIDAsamU9ZnVuY3Rpb24oYSl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBNU0FwcCYmTVNBcHAuZXhlY1Vuc2FmZUxvY2FsRnVuY3Rpb24/ZnVuY3Rpb24oYixjLGQsZSl7TVNBcHAuZXhlY1Vuc2FmZUxvY2FsRnVuY3Rpb24oZnVuY3Rpb24oKXtyZXR1cm4gYShiLGMsZCxlKX0pfTphfShmdW5jdGlvbihhLGIpe2lmKGEubmFtZXNwYWNlVVJJIT09ZmUuc3ZnfHxcImlubmVySFRNTFwiaW4gYSlhLmlubmVySFRNTD1iO2Vsc2V7aWU9aWV8fGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7aWUuaW5uZXJIVE1MPVwiPHN2Zz5cIitiK1wiPC9zdmc+XCI7Zm9yKGI9aWUuZmlyc3RDaGlsZDthLmZpcnN0Q2hpbGQ7KWEucmVtb3ZlQ2hpbGQoYS5maXJzdENoaWxkKTtmb3IoO2IuZmlyc3RDaGlsZDspYS5hcHBlbmRDaGlsZChiLmZpcnN0Q2hpbGQpfX0pO1xuZnVuY3Rpb24ga2UoYSxiKXtpZihiKXt2YXIgYz1hLmZpcnN0Q2hpbGQ7aWYoYyYmYz09PWEubGFzdENoaWxkJiYzPT09Yy5ub2RlVHlwZSl7Yy5ub2RlVmFsdWU9YjtyZXR1cm59fWEudGV4dENvbnRlbnQ9Yn1cbnZhciBsZT17YW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ITAsYm9yZGVySW1hZ2VPdXRzZXQ6ITAsYm9yZGVySW1hZ2VTbGljZTohMCxib3JkZXJJbWFnZVdpZHRoOiEwLGJveEZsZXg6ITAsYm94RmxleEdyb3VwOiEwLGJveE9yZGluYWxHcm91cDohMCxjb2x1bW5Db3VudDohMCxjb2x1bW5zOiEwLGZsZXg6ITAsZmxleEdyb3c6ITAsZmxleFBvc2l0aXZlOiEwLGZsZXhTaHJpbms6ITAsZmxleE5lZ2F0aXZlOiEwLGZsZXhPcmRlcjohMCxncmlkQXJlYTohMCxncmlkUm93OiEwLGdyaWRSb3dFbmQ6ITAsZ3JpZFJvd1NwYW46ITAsZ3JpZFJvd1N0YXJ0OiEwLGdyaWRDb2x1bW46ITAsZ3JpZENvbHVtbkVuZDohMCxncmlkQ29sdW1uU3BhbjohMCxncmlkQ29sdW1uU3RhcnQ6ITAsZm9udFdlaWdodDohMCxsaW5lQ2xhbXA6ITAsbGluZUhlaWdodDohMCxvcGFjaXR5OiEwLG9yZGVyOiEwLG9ycGhhbnM6ITAsdGFiU2l6ZTohMCx3aWRvd3M6ITAsekluZGV4OiEwLHpvb206ITAsZmlsbE9wYWNpdHk6ITAsXG5mbG9vZE9wYWNpdHk6ITAsc3RvcE9wYWNpdHk6ITAsc3Ryb2tlRGFzaGFycmF5OiEwLHN0cm9rZURhc2hvZmZzZXQ6ITAsc3Ryb2tlTWl0ZXJsaW1pdDohMCxzdHJva2VPcGFjaXR5OiEwLHN0cm9rZVdpZHRoOiEwfSxtZT1bXCJXZWJraXRcIixcIm1zXCIsXCJNb3pcIixcIk9cIl07T2JqZWN0LmtleXMobGUpLmZvckVhY2goZnVuY3Rpb24oYSl7bWUuZm9yRWFjaChmdW5jdGlvbihiKXtiPWIrYS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSthLnN1YnN0cmluZygxKTtsZVtiXT1sZVthXX0pfSk7ZnVuY3Rpb24gbmUoYSxiLGMpe3JldHVybiBudWxsPT1ifHxcImJvb2xlYW5cIj09PXR5cGVvZiBifHxcIlwiPT09Yj9cIlwiOmN8fFwibnVtYmVyXCIhPT10eXBlb2YgYnx8MD09PWJ8fGxlLmhhc093blByb3BlcnR5KGEpJiZsZVthXT8oXCJcIitiKS50cmltKCk6YitcInB4XCJ9XG5mdW5jdGlvbiBvZShhLGIpe2E9YS5zdHlsZTtmb3IodmFyIGMgaW4gYilpZihiLmhhc093blByb3BlcnR5KGMpKXt2YXIgZD0wPT09Yy5pbmRleE9mKFwiLS1cIiksZT1uZShjLGJbY10sZCk7XCJmbG9hdFwiPT09YyYmKGM9XCJjc3NGbG9hdFwiKTtkP2Euc2V0UHJvcGVydHkoYyxlKTphW2NdPWV9fXZhciBwZT1uKHttZW51aXRlbTohMH0se2FyZWE6ITAsYmFzZTohMCxicjohMCxjb2w6ITAsZW1iZWQ6ITAsaHI6ITAsaW1nOiEwLGlucHV0OiEwLGtleWdlbjohMCxsaW5rOiEwLG1ldGE6ITAscGFyYW06ITAsc291cmNlOiEwLHRyYWNrOiEwLHdicjohMH0pO1xuZnVuY3Rpb24gcWUoYSxiKXtiJiYocGVbYV0mJihudWxsIT1iLmNoaWxkcmVufHxudWxsIT1iLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MP3goXCIxMzdcIixhLFwiXCIpOnZvaWQgMCksbnVsbCE9Yi5kYW5nZXJvdXNseVNldElubmVySFRNTCYmKG51bGwhPWIuY2hpbGRyZW4/eChcIjYwXCIpOnZvaWQgMCxcIm9iamVjdFwiPT09dHlwZW9mIGIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwmJlwiX19odG1sXCJpbiBiLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MP3ZvaWQgMDp4KFwiNjFcIikpLG51bGwhPWIuc3R5bGUmJlwib2JqZWN0XCIhPT10eXBlb2YgYi5zdHlsZT94KFwiNjJcIixcIlwiKTp2b2lkIDApfVxuZnVuY3Rpb24gcmUoYSxiKXtpZigtMT09PWEuaW5kZXhPZihcIi1cIikpcmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBiLmlzO3N3aXRjaChhKXtjYXNlIFwiYW5ub3RhdGlvbi14bWxcIjpjYXNlIFwiY29sb3ItcHJvZmlsZVwiOmNhc2UgXCJmb250LWZhY2VcIjpjYXNlIFwiZm9udC1mYWNlLXNyY1wiOmNhc2UgXCJmb250LWZhY2UtdXJpXCI6Y2FzZSBcImZvbnQtZmFjZS1mb3JtYXRcIjpjYXNlIFwiZm9udC1mYWNlLW5hbWVcIjpjYXNlIFwibWlzc2luZy1nbHlwaFwiOnJldHVybiExO2RlZmF1bHQ6cmV0dXJuITB9fVxuZnVuY3Rpb24gc2UoYSxiKXthPTk9PT1hLm5vZGVUeXBlfHwxMT09PWEubm9kZVR5cGU/YTphLm93bmVyRG9jdW1lbnQ7dmFyIGM9SWQoYSk7Yj1zYVtiXTtmb3IodmFyIGQ9MDtkPGIubGVuZ3RoO2QrKyl7dmFyIGU9YltkXTtpZighYy5oYXNPd25Qcm9wZXJ0eShlKXx8IWNbZV0pe3N3aXRjaChlKXtjYXNlIFwic2Nyb2xsXCI6RWQoXCJzY3JvbGxcIixhKTticmVhaztjYXNlIFwiZm9jdXNcIjpjYXNlIFwiYmx1clwiOkVkKFwiZm9jdXNcIixhKTtFZChcImJsdXJcIixhKTtjLmJsdXI9ITA7Yy5mb2N1cz0hMDticmVhaztjYXNlIFwiY2FuY2VsXCI6Y2FzZSBcImNsb3NlXCI6T2IoZSkmJkVkKGUsYSk7YnJlYWs7Y2FzZSBcImludmFsaWRcIjpjYXNlIFwic3VibWl0XCI6Y2FzZSBcInJlc2V0XCI6YnJlYWs7ZGVmYXVsdDotMT09PWFiLmluZGV4T2YoZSkmJkUoZSxhKX1jW2VdPSEwfX19ZnVuY3Rpb24gdGUoKXt9dmFyIHVlPW51bGwsdmU9bnVsbDtcbmZ1bmN0aW9uIHdlKGEsYil7c3dpdGNoKGEpe2Nhc2UgXCJidXR0b25cIjpjYXNlIFwiaW5wdXRcIjpjYXNlIFwic2VsZWN0XCI6Y2FzZSBcInRleHRhcmVhXCI6cmV0dXJuISFiLmF1dG9Gb2N1c31yZXR1cm4hMX1mdW5jdGlvbiB4ZShhLGIpe3JldHVyblwidGV4dGFyZWFcIj09PWF8fFwib3B0aW9uXCI9PT1hfHxcIm5vc2NyaXB0XCI9PT1hfHxcInN0cmluZ1wiPT09dHlwZW9mIGIuY2hpbGRyZW58fFwibnVtYmVyXCI9PT10eXBlb2YgYi5jaGlsZHJlbnx8XCJvYmplY3RcIj09PXR5cGVvZiBiLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MJiZudWxsIT09Yi5kYW5nZXJvdXNseVNldElubmVySFRNTCYmbnVsbCE9Yi5kYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWx9XG52YXIgeWU9XCJmdW5jdGlvblwiPT09dHlwZW9mIHNldFRpbWVvdXQ/c2V0VGltZW91dDp2b2lkIDAsemU9XCJmdW5jdGlvblwiPT09dHlwZW9mIGNsZWFyVGltZW91dD9jbGVhclRpbWVvdXQ6dm9pZCAwLEFlPXIudW5zdGFibGVfc2NoZWR1bGVDYWxsYmFjayxCZT1yLnVuc3RhYmxlX2NhbmNlbENhbGxiYWNrO1xuZnVuY3Rpb24gQ2UoYSxiLGMsZCxlKXthW0dhXT1lO1wiaW5wdXRcIj09PWMmJlwicmFkaW9cIj09PWUudHlwZSYmbnVsbCE9ZS5uYW1lJiZ4YyhhLGUpO3JlKGMsZCk7ZD1yZShjLGUpO2Zvcih2YXIgZj0wO2Y8Yi5sZW5ndGg7Zis9Mil7dmFyIGc9YltmXSxoPWJbZisxXTtcInN0eWxlXCI9PT1nP29lKGEsaCk6XCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiPT09Zz9qZShhLGgpOlwiY2hpbGRyZW5cIj09PWc/a2UoYSxoKTp0YyhhLGcsaCxkKX1zd2l0Y2goYyl7Y2FzZSBcImlucHV0XCI6eWMoYSxlKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjpkZShhLGUpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjpiPWEuX3dyYXBwZXJTdGF0ZS53YXNNdWx0aXBsZSxhLl93cmFwcGVyU3RhdGUud2FzTXVsdGlwbGU9ISFlLm11bHRpcGxlLGM9ZS52YWx1ZSxudWxsIT1jP2FlKGEsISFlLm11bHRpcGxlLGMsITEpOmIhPT0hIWUubXVsdGlwbGUmJihudWxsIT1lLmRlZmF1bHRWYWx1ZT9hZShhLCEhZS5tdWx0aXBsZSxlLmRlZmF1bHRWYWx1ZSxcbiEwKTphZShhLCEhZS5tdWx0aXBsZSxlLm11bHRpcGxlP1tdOlwiXCIsITEpKX19ZnVuY3Rpb24gRGUoYSl7Zm9yKGE9YS5uZXh0U2libGluZzthJiYxIT09YS5ub2RlVHlwZSYmMyE9PWEubm9kZVR5cGU7KWE9YS5uZXh0U2libGluZztyZXR1cm4gYX1mdW5jdGlvbiBFZShhKXtmb3IoYT1hLmZpcnN0Q2hpbGQ7YSYmMSE9PWEubm9kZVR5cGUmJjMhPT1hLm5vZGVUeXBlOylhPWEubmV4dFNpYmxpbmc7cmV0dXJuIGF9bmV3IFNldDt2YXIgRmU9W10sR2U9LTE7ZnVuY3Rpb24gRihhKXswPkdlfHwoYS5jdXJyZW50PUZlW0dlXSxGZVtHZV09bnVsbCxHZS0tKX1mdW5jdGlvbiBHKGEsYil7R2UrKztGZVtHZV09YS5jdXJyZW50O2EuY3VycmVudD1ifXZhciBIZT17fSxIPXtjdXJyZW50OkhlfSxJPXtjdXJyZW50OiExfSxJZT1IZTtcbmZ1bmN0aW9uIEplKGEsYil7dmFyIGM9YS50eXBlLmNvbnRleHRUeXBlcztpZighYylyZXR1cm4gSGU7dmFyIGQ9YS5zdGF0ZU5vZGU7aWYoZCYmZC5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZFVubWFza2VkQ2hpbGRDb250ZXh0PT09YilyZXR1cm4gZC5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1hc2tlZENoaWxkQ29udGV4dDt2YXIgZT17fSxmO2ZvcihmIGluIGMpZVtmXT1iW2ZdO2QmJihhPWEuc3RhdGVOb2RlLGEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRVbm1hc2tlZENoaWxkQ29udGV4dD1iLGEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNYXNrZWRDaGlsZENvbnRleHQ9ZSk7cmV0dXJuIGV9ZnVuY3Rpb24gSihhKXthPWEuY2hpbGRDb250ZXh0VHlwZXM7cmV0dXJuIG51bGwhPT1hJiZ2b2lkIDAhPT1hfWZ1bmN0aW9uIEtlKGEpe0YoSSxhKTtGKEgsYSl9ZnVuY3Rpb24gTGUoYSl7RihJLGEpO0YoSCxhKX1cbmZ1bmN0aW9uIE1lKGEsYixjKXtILmN1cnJlbnQhPT1IZT94KFwiMTY4XCIpOnZvaWQgMDtHKEgsYixhKTtHKEksYyxhKX1mdW5jdGlvbiBOZShhLGIsYyl7dmFyIGQ9YS5zdGF0ZU5vZGU7YT1iLmNoaWxkQ29udGV4dFR5cGVzO2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBkLmdldENoaWxkQ29udGV4dClyZXR1cm4gYztkPWQuZ2V0Q2hpbGRDb250ZXh0KCk7Zm9yKHZhciBlIGluIGQpZSBpbiBhP3ZvaWQgMDp4KFwiMTA4XCIsaWMoYil8fFwiVW5rbm93blwiLGUpO3JldHVybiBuKHt9LGMsZCl9ZnVuY3Rpb24gT2UoYSl7dmFyIGI9YS5zdGF0ZU5vZGU7Yj1iJiZiLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWVyZ2VkQ2hpbGRDb250ZXh0fHxIZTtJZT1ILmN1cnJlbnQ7RyhILGIsYSk7RyhJLEkuY3VycmVudCxhKTtyZXR1cm4hMH1cbmZ1bmN0aW9uIFBlKGEsYixjKXt2YXIgZD1hLnN0YXRlTm9kZTtkP3ZvaWQgMDp4KFwiMTY5XCIpO2M/KGI9TmUoYSxiLEllKSxkLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWVyZ2VkQ2hpbGRDb250ZXh0PWIsRihJLGEpLEYoSCxhKSxHKEgsYixhKSk6RihJLGEpO0coSSxjLGEpfXZhciBRZT1udWxsLFJlPW51bGw7ZnVuY3Rpb24gU2UoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3RyeXtyZXR1cm4gYShiKX1jYXRjaChjKXt9fX1cbmZ1bmN0aW9uIFRlKGEpe2lmKFwidW5kZWZpbmVkXCI9PT10eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKXJldHVybiExO3ZhciBiPV9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihiLmlzRGlzYWJsZWR8fCFiLnN1cHBvcnRzRmliZXIpcmV0dXJuITA7dHJ5e3ZhciBjPWIuaW5qZWN0KGEpO1FlPVNlKGZ1bmN0aW9uKGEpe3JldHVybiBiLm9uQ29tbWl0RmliZXJSb290KGMsYSl9KTtSZT1TZShmdW5jdGlvbihhKXtyZXR1cm4gYi5vbkNvbW1pdEZpYmVyVW5tb3VudChjLGEpfSl9Y2F0Y2goZCl7fXJldHVybiEwfVxuZnVuY3Rpb24gVWUoYSxiLGMsZCl7dGhpcy50YWc9YTt0aGlzLmtleT1jO3RoaXMuc2libGluZz10aGlzLmNoaWxkPXRoaXMucmV0dXJuPXRoaXMuc3RhdGVOb2RlPXRoaXMudHlwZT10aGlzLmVsZW1lbnRUeXBlPW51bGw7dGhpcy5pbmRleD0wO3RoaXMucmVmPW51bGw7dGhpcy5wZW5kaW5nUHJvcHM9Yjt0aGlzLmNvbnRleHREZXBlbmRlbmNpZXM9dGhpcy5tZW1vaXplZFN0YXRlPXRoaXMudXBkYXRlUXVldWU9dGhpcy5tZW1vaXplZFByb3BzPW51bGw7dGhpcy5tb2RlPWQ7dGhpcy5lZmZlY3RUYWc9MDt0aGlzLmxhc3RFZmZlY3Q9dGhpcy5maXJzdEVmZmVjdD10aGlzLm5leHRFZmZlY3Q9bnVsbDt0aGlzLmNoaWxkRXhwaXJhdGlvblRpbWU9dGhpcy5leHBpcmF0aW9uVGltZT0wO3RoaXMuYWx0ZXJuYXRlPW51bGx9ZnVuY3Rpb24gSyhhLGIsYyxkKXtyZXR1cm4gbmV3IFVlKGEsYixjLGQpfVxuZnVuY3Rpb24gVmUoYSl7YT1hLnByb3RvdHlwZTtyZXR1cm4hKCFhfHwhYS5pc1JlYWN0Q29tcG9uZW50KX1mdW5jdGlvbiBXZShhKXtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYSlyZXR1cm4gVmUoYSk/MTowO2lmKHZvaWQgMCE9PWEmJm51bGwhPT1hKXthPWEuJCR0eXBlb2Y7aWYoYT09PWNjKXJldHVybiAxMTtpZihhPT09ZWMpcmV0dXJuIDE0fXJldHVybiAyfVxuZnVuY3Rpb24gWGUoYSxiKXt2YXIgYz1hLmFsdGVybmF0ZTtudWxsPT09Yz8oYz1LKGEudGFnLGIsYS5rZXksYS5tb2RlKSxjLmVsZW1lbnRUeXBlPWEuZWxlbWVudFR5cGUsYy50eXBlPWEudHlwZSxjLnN0YXRlTm9kZT1hLnN0YXRlTm9kZSxjLmFsdGVybmF0ZT1hLGEuYWx0ZXJuYXRlPWMpOihjLnBlbmRpbmdQcm9wcz1iLGMuZWZmZWN0VGFnPTAsYy5uZXh0RWZmZWN0PW51bGwsYy5maXJzdEVmZmVjdD1udWxsLGMubGFzdEVmZmVjdD1udWxsKTtjLmNoaWxkRXhwaXJhdGlvblRpbWU9YS5jaGlsZEV4cGlyYXRpb25UaW1lO2MuZXhwaXJhdGlvblRpbWU9YS5leHBpcmF0aW9uVGltZTtjLmNoaWxkPWEuY2hpbGQ7Yy5tZW1vaXplZFByb3BzPWEubWVtb2l6ZWRQcm9wcztjLm1lbW9pemVkU3RhdGU9YS5tZW1vaXplZFN0YXRlO2MudXBkYXRlUXVldWU9YS51cGRhdGVRdWV1ZTtjLmNvbnRleHREZXBlbmRlbmNpZXM9YS5jb250ZXh0RGVwZW5kZW5jaWVzO2Muc2libGluZz1hLnNpYmxpbmc7XG5jLmluZGV4PWEuaW5kZXg7Yy5yZWY9YS5yZWY7cmV0dXJuIGN9XG5mdW5jdGlvbiBZZShhLGIsYyxkLGUsZil7dmFyIGc9MjtkPWE7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEpVmUoYSkmJihnPTEpO2Vsc2UgaWYoXCJzdHJpbmdcIj09PXR5cGVvZiBhKWc9NTtlbHNlIGE6c3dpdGNoKGEpe2Nhc2UgWGI6cmV0dXJuIFplKGMuY2hpbGRyZW4sZSxmLGIpO2Nhc2UgYmM6cmV0dXJuICRlKGMsZXwzLGYsYik7Y2FzZSBZYjpyZXR1cm4gJGUoYyxlfDIsZixiKTtjYXNlIFpiOnJldHVybiBhPUsoMTIsYyxiLGV8NCksYS5lbGVtZW50VHlwZT1aYixhLnR5cGU9WmIsYS5leHBpcmF0aW9uVGltZT1mLGE7Y2FzZSBkYzpyZXR1cm4gYT1LKDEzLGMsYixlKSxhLmVsZW1lbnRUeXBlPWRjLGEudHlwZT1kYyxhLmV4cGlyYXRpb25UaW1lPWYsYTtkZWZhdWx0OmlmKFwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEpc3dpdGNoKGEuJCR0eXBlb2Ype2Nhc2UgJGI6Zz0xMDticmVhayBhO2Nhc2UgYWM6Zz05O2JyZWFrIGE7Y2FzZSBjYzpnPTExO2JyZWFrIGE7Y2FzZSBlYzpnPVxuMTQ7YnJlYWsgYTtjYXNlIGZjOmc9MTY7ZD1udWxsO2JyZWFrIGF9eChcIjEzMFwiLG51bGw9PWE/YTp0eXBlb2YgYSxcIlwiKX1iPUsoZyxjLGIsZSk7Yi5lbGVtZW50VHlwZT1hO2IudHlwZT1kO2IuZXhwaXJhdGlvblRpbWU9ZjtyZXR1cm4gYn1mdW5jdGlvbiBaZShhLGIsYyxkKXthPUsoNyxhLGQsYik7YS5leHBpcmF0aW9uVGltZT1jO3JldHVybiBhfWZ1bmN0aW9uICRlKGEsYixjLGQpe2E9Syg4LGEsZCxiKTtiPTA9PT0oYiYxKT9ZYjpiYzthLmVsZW1lbnRUeXBlPWI7YS50eXBlPWI7YS5leHBpcmF0aW9uVGltZT1jO3JldHVybiBhfWZ1bmN0aW9uIGFmKGEsYixjKXthPUsoNixhLG51bGwsYik7YS5leHBpcmF0aW9uVGltZT1jO3JldHVybiBhfVxuZnVuY3Rpb24gYmYoYSxiLGMpe2I9Syg0LG51bGwhPT1hLmNoaWxkcmVuP2EuY2hpbGRyZW46W10sYS5rZXksYik7Yi5leHBpcmF0aW9uVGltZT1jO2Iuc3RhdGVOb2RlPXtjb250YWluZXJJbmZvOmEuY29udGFpbmVySW5mbyxwZW5kaW5nQ2hpbGRyZW46bnVsbCxpbXBsZW1lbnRhdGlvbjphLmltcGxlbWVudGF0aW9ufTtyZXR1cm4gYn1mdW5jdGlvbiBjZihhLGIpe2EuZGlkRXJyb3I9ITE7dmFyIGM9YS5lYXJsaWVzdFBlbmRpbmdUaW1lOzA9PT1jP2EuZWFybGllc3RQZW5kaW5nVGltZT1hLmxhdGVzdFBlbmRpbmdUaW1lPWI6YzxiP2EuZWFybGllc3RQZW5kaW5nVGltZT1iOmEubGF0ZXN0UGVuZGluZ1RpbWU+YiYmKGEubGF0ZXN0UGVuZGluZ1RpbWU9Yik7ZGYoYixhKX1cbmZ1bmN0aW9uIGVmKGEsYil7YS5kaWRFcnJvcj0hMTtpZigwPT09YilhLmVhcmxpZXN0UGVuZGluZ1RpbWU9MCxhLmxhdGVzdFBlbmRpbmdUaW1lPTAsYS5lYXJsaWVzdFN1c3BlbmRlZFRpbWU9MCxhLmxhdGVzdFN1c3BlbmRlZFRpbWU9MCxhLmxhdGVzdFBpbmdlZFRpbWU9MDtlbHNle2I8YS5sYXRlc3RQaW5nZWRUaW1lJiYoYS5sYXRlc3RQaW5nZWRUaW1lPTApO3ZhciBjPWEubGF0ZXN0UGVuZGluZ1RpbWU7MCE9PWMmJihjPmI/YS5lYXJsaWVzdFBlbmRpbmdUaW1lPWEubGF0ZXN0UGVuZGluZ1RpbWU9MDphLmVhcmxpZXN0UGVuZGluZ1RpbWU+YiYmKGEuZWFybGllc3RQZW5kaW5nVGltZT1hLmxhdGVzdFBlbmRpbmdUaW1lKSk7Yz1hLmVhcmxpZXN0U3VzcGVuZGVkVGltZTswPT09Yz9jZihhLGIpOmI8YS5sYXRlc3RTdXNwZW5kZWRUaW1lPyhhLmVhcmxpZXN0U3VzcGVuZGVkVGltZT0wLGEubGF0ZXN0U3VzcGVuZGVkVGltZT0wLGEubGF0ZXN0UGluZ2VkVGltZT0wLGNmKGEsYikpOlxuYj5jJiZjZihhLGIpfWRmKDAsYSl9ZnVuY3Rpb24gZmYoYSxiKXthLmRpZEVycm9yPSExO2EubGF0ZXN0UGluZ2VkVGltZT49YiYmKGEubGF0ZXN0UGluZ2VkVGltZT0wKTt2YXIgYz1hLmVhcmxpZXN0UGVuZGluZ1RpbWUsZD1hLmxhdGVzdFBlbmRpbmdUaW1lO2M9PT1iP2EuZWFybGllc3RQZW5kaW5nVGltZT1kPT09Yj9hLmxhdGVzdFBlbmRpbmdUaW1lPTA6ZDpkPT09YiYmKGEubGF0ZXN0UGVuZGluZ1RpbWU9Yyk7Yz1hLmVhcmxpZXN0U3VzcGVuZGVkVGltZTtkPWEubGF0ZXN0U3VzcGVuZGVkVGltZTswPT09Yz9hLmVhcmxpZXN0U3VzcGVuZGVkVGltZT1hLmxhdGVzdFN1c3BlbmRlZFRpbWU9YjpjPGI/YS5lYXJsaWVzdFN1c3BlbmRlZFRpbWU9YjpkPmImJihhLmxhdGVzdFN1c3BlbmRlZFRpbWU9Yik7ZGYoYixhKX1cbmZ1bmN0aW9uIGdmKGEsYil7dmFyIGM9YS5lYXJsaWVzdFBlbmRpbmdUaW1lO2E9YS5lYXJsaWVzdFN1c3BlbmRlZFRpbWU7Yz5iJiYoYj1jKTthPmImJihiPWEpO3JldHVybiBifWZ1bmN0aW9uIGRmKGEsYil7dmFyIGM9Yi5lYXJsaWVzdFN1c3BlbmRlZFRpbWUsZD1iLmxhdGVzdFN1c3BlbmRlZFRpbWUsZT1iLmVhcmxpZXN0UGVuZGluZ1RpbWUsZj1iLmxhdGVzdFBpbmdlZFRpbWU7ZT0wIT09ZT9lOmY7MD09PWUmJigwPT09YXx8ZDxhKSYmKGU9ZCk7YT1lOzAhPT1hJiZjPmEmJihhPWMpO2IubmV4dEV4cGlyYXRpb25UaW1lVG9Xb3JrT249ZTtiLmV4cGlyYXRpb25UaW1lPWF9ZnVuY3Rpb24gTChhLGIpe2lmKGEmJmEuZGVmYXVsdFByb3BzKXtiPW4oe30sYik7YT1hLmRlZmF1bHRQcm9wcztmb3IodmFyIGMgaW4gYSl2b2lkIDA9PT1iW2NdJiYoYltjXT1hW2NdKX1yZXR1cm4gYn1cbmZ1bmN0aW9uIGhmKGEpe3ZhciBiPWEuX3Jlc3VsdDtzd2l0Y2goYS5fc3RhdHVzKXtjYXNlIDE6cmV0dXJuIGI7Y2FzZSAyOnRocm93IGI7Y2FzZSAwOnRocm93IGI7ZGVmYXVsdDphLl9zdGF0dXM9MDtiPWEuX2N0b3I7Yj1iKCk7Yi50aGVuKGZ1bmN0aW9uKGIpezA9PT1hLl9zdGF0dXMmJihiPWIuZGVmYXVsdCxhLl9zdGF0dXM9MSxhLl9yZXN1bHQ9Yil9LGZ1bmN0aW9uKGIpezA9PT1hLl9zdGF0dXMmJihhLl9zdGF0dXM9MixhLl9yZXN1bHQ9Yil9KTtzd2l0Y2goYS5fc3RhdHVzKXtjYXNlIDE6cmV0dXJuIGEuX3Jlc3VsdDtjYXNlIDI6dGhyb3cgYS5fcmVzdWx0O31hLl9yZXN1bHQ9Yjt0aHJvdyBiO319dmFyIGpmPShuZXcgYWEuQ29tcG9uZW50KS5yZWZzO1xuZnVuY3Rpb24ga2YoYSxiLGMsZCl7Yj1hLm1lbW9pemVkU3RhdGU7Yz1jKGQsYik7Yz1udWxsPT09Y3x8dm9pZCAwPT09Yz9iOm4oe30sYixjKTthLm1lbW9pemVkU3RhdGU9YztkPWEudXBkYXRlUXVldWU7bnVsbCE9PWQmJjA9PT1hLmV4cGlyYXRpb25UaW1lJiYoZC5iYXNlU3RhdGU9Yyl9XG52YXIgdGY9e2lzTW91bnRlZDpmdW5jdGlvbihhKXtyZXR1cm4oYT1hLl9yZWFjdEludGVybmFsRmliZXIpPzI9PT1lZChhKTohMX0sZW5xdWV1ZVNldFN0YXRlOmZ1bmN0aW9uKGEsYixjKXthPWEuX3JlYWN0SW50ZXJuYWxGaWJlcjt2YXIgZD1sZigpO2Q9bWYoZCxhKTt2YXIgZT1uZihkKTtlLnBheWxvYWQ9Yjt2b2lkIDAhPT1jJiZudWxsIT09YyYmKGUuY2FsbGJhY2s9Yyk7b2YoKTtwZihhLGUpO3FmKGEsZCl9LGVucXVldWVSZXBsYWNlU3RhdGU6ZnVuY3Rpb24oYSxiLGMpe2E9YS5fcmVhY3RJbnRlcm5hbEZpYmVyO3ZhciBkPWxmKCk7ZD1tZihkLGEpO3ZhciBlPW5mKGQpO2UudGFnPXJmO2UucGF5bG9hZD1iO3ZvaWQgMCE9PWMmJm51bGwhPT1jJiYoZS5jYWxsYmFjaz1jKTtvZigpO3BmKGEsZSk7cWYoYSxkKX0sZW5xdWV1ZUZvcmNlVXBkYXRlOmZ1bmN0aW9uKGEsYil7YT1hLl9yZWFjdEludGVybmFsRmliZXI7dmFyIGM9bGYoKTtjPW1mKGMsYSk7dmFyIGQ9bmYoYyk7ZC50YWc9XG5zZjt2b2lkIDAhPT1iJiZudWxsIT09YiYmKGQuY2FsbGJhY2s9Yik7b2YoKTtwZihhLGQpO3FmKGEsYyl9fTtmdW5jdGlvbiB1ZihhLGIsYyxkLGUsZixnKXthPWEuc3RhdGVOb2RlO3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBhLnNob3VsZENvbXBvbmVudFVwZGF0ZT9hLnNob3VsZENvbXBvbmVudFVwZGF0ZShkLGYsZyk6Yi5wcm90b3R5cGUmJmIucHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50PyFkZChjLGQpfHwhZGQoZSxmKTohMH1cbmZ1bmN0aW9uIHZmKGEsYixjKXt2YXIgZD0hMSxlPUhlO3ZhciBmPWIuY29udGV4dFR5cGU7XCJvYmplY3RcIj09PXR5cGVvZiBmJiZudWxsIT09Zj9mPU0oZik6KGU9SihiKT9JZTpILmN1cnJlbnQsZD1iLmNvbnRleHRUeXBlcyxmPShkPW51bGwhPT1kJiZ2b2lkIDAhPT1kKT9KZShhLGUpOkhlKTtiPW5ldyBiKGMsZik7YS5tZW1vaXplZFN0YXRlPW51bGwhPT1iLnN0YXRlJiZ2b2lkIDAhPT1iLnN0YXRlP2Iuc3RhdGU6bnVsbDtiLnVwZGF0ZXI9dGY7YS5zdGF0ZU5vZGU9YjtiLl9yZWFjdEludGVybmFsRmliZXI9YTtkJiYoYT1hLnN0YXRlTm9kZSxhLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkVW5tYXNrZWRDaGlsZENvbnRleHQ9ZSxhLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWFza2VkQ2hpbGRDb250ZXh0PWYpO3JldHVybiBifVxuZnVuY3Rpb24gd2YoYSxiLGMsZCl7YT1iLnN0YXRlO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBiLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJmIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhjLGQpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBiLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZiLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKGMsZCk7Yi5zdGF0ZSE9PWEmJnRmLmVucXVldWVSZXBsYWNlU3RhdGUoYixiLnN0YXRlLG51bGwpfVxuZnVuY3Rpb24geGYoYSxiLGMsZCl7dmFyIGU9YS5zdGF0ZU5vZGU7ZS5wcm9wcz1jO2Uuc3RhdGU9YS5tZW1vaXplZFN0YXRlO2UucmVmcz1qZjt2YXIgZj1iLmNvbnRleHRUeXBlO1wib2JqZWN0XCI9PT10eXBlb2YgZiYmbnVsbCE9PWY/ZS5jb250ZXh0PU0oZik6KGY9SihiKT9JZTpILmN1cnJlbnQsZS5jb250ZXh0PUplKGEsZikpO2Y9YS51cGRhdGVRdWV1ZTtudWxsIT09ZiYmKHlmKGEsZixjLGUsZCksZS5zdGF0ZT1hLm1lbW9pemVkU3RhdGUpO2Y9Yi5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM7XCJmdW5jdGlvblwiPT09dHlwZW9mIGYmJihrZihhLGIsZixjKSxlLnN0YXRlPWEubWVtb2l6ZWRTdGF0ZSk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGIuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8XCJmdW5jdGlvblwiIT09dHlwZW9mIGUuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCYmXCJmdW5jdGlvblwiIT09XG50eXBlb2YgZS5jb21wb25lbnRXaWxsTW91bnR8fChiPWUuc3RhdGUsXCJmdW5jdGlvblwiPT09dHlwZW9mIGUuY29tcG9uZW50V2lsbE1vdW50JiZlLmNvbXBvbmVudFdpbGxNb3VudCgpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQmJmUuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCgpLGIhPT1lLnN0YXRlJiZ0Zi5lbnF1ZXVlUmVwbGFjZVN0YXRlKGUsZS5zdGF0ZSxudWxsKSxmPWEudXBkYXRlUXVldWUsbnVsbCE9PWYmJih5ZihhLGYsYyxlLGQpLGUuc3RhdGU9YS5tZW1vaXplZFN0YXRlKSk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGUuY29tcG9uZW50RGlkTW91bnQmJihhLmVmZmVjdFRhZ3w9NCl9dmFyIHpmPUFycmF5LmlzQXJyYXk7XG5mdW5jdGlvbiBBZihhLGIsYyl7YT1jLnJlZjtpZihudWxsIT09YSYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGEmJlwib2JqZWN0XCIhPT10eXBlb2YgYSl7aWYoYy5fb3duZXIpe2M9Yy5fb3duZXI7dmFyIGQ9dm9pZCAwO2MmJigxIT09Yy50YWc/eChcIjMwOVwiKTp2b2lkIDAsZD1jLnN0YXRlTm9kZSk7ZD92b2lkIDA6eChcIjE0N1wiLGEpO3ZhciBlPVwiXCIrYTtpZihudWxsIT09YiYmbnVsbCE9PWIucmVmJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5yZWYmJmIucmVmLl9zdHJpbmdSZWY9PT1lKXJldHVybiBiLnJlZjtiPWZ1bmN0aW9uKGEpe3ZhciBiPWQucmVmcztiPT09amYmJihiPWQucmVmcz17fSk7bnVsbD09PWE/ZGVsZXRlIGJbZV06YltlXT1hfTtiLl9zdHJpbmdSZWY9ZTtyZXR1cm4gYn1cInN0cmluZ1wiIT09dHlwZW9mIGE/eChcIjI4NFwiKTp2b2lkIDA7Yy5fb3duZXI/dm9pZCAwOngoXCIyOTBcIixhKX1yZXR1cm4gYX1cbmZ1bmN0aW9uIEJmKGEsYil7XCJ0ZXh0YXJlYVwiIT09YS50eXBlJiZ4KFwiMzFcIixcIltvYmplY3QgT2JqZWN0XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGIpP1wib2JqZWN0IHdpdGgga2V5cyB7XCIrT2JqZWN0LmtleXMoYikuam9pbihcIiwgXCIpK1wifVwiOmIsXCJcIil9XG5mdW5jdGlvbiBDZihhKXtmdW5jdGlvbiBiKGIsYyl7aWYoYSl7dmFyIGQ9Yi5sYXN0RWZmZWN0O251bGwhPT1kPyhkLm5leHRFZmZlY3Q9YyxiLmxhc3RFZmZlY3Q9Yyk6Yi5maXJzdEVmZmVjdD1iLmxhc3RFZmZlY3Q9YztjLm5leHRFZmZlY3Q9bnVsbDtjLmVmZmVjdFRhZz04fX1mdW5jdGlvbiBjKGMsZCl7aWYoIWEpcmV0dXJuIG51bGw7Zm9yKDtudWxsIT09ZDspYihjLGQpLGQ9ZC5zaWJsaW5nO3JldHVybiBudWxsfWZ1bmN0aW9uIGQoYSxiKXtmb3IoYT1uZXcgTWFwO251bGwhPT1iOyludWxsIT09Yi5rZXk/YS5zZXQoYi5rZXksYik6YS5zZXQoYi5pbmRleCxiKSxiPWIuc2libGluZztyZXR1cm4gYX1mdW5jdGlvbiBlKGEsYixjKXthPVhlKGEsYixjKTthLmluZGV4PTA7YS5zaWJsaW5nPW51bGw7cmV0dXJuIGF9ZnVuY3Rpb24gZihiLGMsZCl7Yi5pbmRleD1kO2lmKCFhKXJldHVybiBjO2Q9Yi5hbHRlcm5hdGU7aWYobnVsbCE9PWQpcmV0dXJuIGQ9ZC5pbmRleCxkPGM/KGIuZWZmZWN0VGFnPVxuMixjKTpkO2IuZWZmZWN0VGFnPTI7cmV0dXJuIGN9ZnVuY3Rpb24gZyhiKXthJiZudWxsPT09Yi5hbHRlcm5hdGUmJihiLmVmZmVjdFRhZz0yKTtyZXR1cm4gYn1mdW5jdGlvbiBoKGEsYixjLGQpe2lmKG51bGw9PT1ifHw2IT09Yi50YWcpcmV0dXJuIGI9YWYoYyxhLm1vZGUsZCksYi5yZXR1cm49YSxiO2I9ZShiLGMsZCk7Yi5yZXR1cm49YTtyZXR1cm4gYn1mdW5jdGlvbiBsKGEsYixjLGQpe2lmKG51bGwhPT1iJiZiLmVsZW1lbnRUeXBlPT09Yy50eXBlKXJldHVybiBkPWUoYixjLnByb3BzLGQpLGQucmVmPUFmKGEsYixjKSxkLnJldHVybj1hLGQ7ZD1ZZShjLnR5cGUsYy5rZXksYy5wcm9wcyxudWxsLGEubW9kZSxkKTtkLnJlZj1BZihhLGIsYyk7ZC5yZXR1cm49YTtyZXR1cm4gZH1mdW5jdGlvbiBrKGEsYixjLGQpe2lmKG51bGw9PT1ifHw0IT09Yi50YWd8fGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8hPT1jLmNvbnRhaW5lckluZm98fGIuc3RhdGVOb2RlLmltcGxlbWVudGF0aW9uIT09XG5jLmltcGxlbWVudGF0aW9uKXJldHVybiBiPWJmKGMsYS5tb2RlLGQpLGIucmV0dXJuPWEsYjtiPWUoYixjLmNoaWxkcmVufHxbXSxkKTtiLnJldHVybj1hO3JldHVybiBifWZ1bmN0aW9uIG0oYSxiLGMsZCxmKXtpZihudWxsPT09Ynx8NyE9PWIudGFnKXJldHVybiBiPVplKGMsYS5tb2RlLGQsZiksYi5yZXR1cm49YSxiO2I9ZShiLGMsZCk7Yi5yZXR1cm49YTtyZXR1cm4gYn1mdW5jdGlvbiBwKGEsYixjKXtpZihcInN0cmluZ1wiPT09dHlwZW9mIGJ8fFwibnVtYmVyXCI9PT10eXBlb2YgYilyZXR1cm4gYj1hZihcIlwiK2IsYS5tb2RlLGMpLGIucmV0dXJuPWEsYjtpZihcIm9iamVjdFwiPT09dHlwZW9mIGImJm51bGwhPT1iKXtzd2l0Y2goYi4kJHR5cGVvZil7Y2FzZSBWYjpyZXR1cm4gYz1ZZShiLnR5cGUsYi5rZXksYi5wcm9wcyxudWxsLGEubW9kZSxjKSxjLnJlZj1BZihhLG51bGwsYiksYy5yZXR1cm49YSxjO2Nhc2UgV2I6cmV0dXJuIGI9YmYoYixhLm1vZGUsYyksYi5yZXR1cm49YSxifWlmKHpmKGIpfHxcbmhjKGIpKXJldHVybiBiPVplKGIsYS5tb2RlLGMsbnVsbCksYi5yZXR1cm49YSxiO0JmKGEsYil9cmV0dXJuIG51bGx9ZnVuY3Rpb24gdChhLGIsYyxkKXt2YXIgZT1udWxsIT09Yj9iLmtleTpudWxsO2lmKFwic3RyaW5nXCI9PT10eXBlb2YgY3x8XCJudW1iZXJcIj09PXR5cGVvZiBjKXJldHVybiBudWxsIT09ZT9udWxsOmgoYSxiLFwiXCIrYyxkKTtpZihcIm9iamVjdFwiPT09dHlwZW9mIGMmJm51bGwhPT1jKXtzd2l0Y2goYy4kJHR5cGVvZil7Y2FzZSBWYjpyZXR1cm4gYy5rZXk9PT1lP2MudHlwZT09PVhiP20oYSxiLGMucHJvcHMuY2hpbGRyZW4sZCxlKTpsKGEsYixjLGQpOm51bGw7Y2FzZSBXYjpyZXR1cm4gYy5rZXk9PT1lP2soYSxiLGMsZCk6bnVsbH1pZih6ZihjKXx8aGMoYykpcmV0dXJuIG51bGwhPT1lP251bGw6bShhLGIsYyxkLG51bGwpO0JmKGEsYyl9cmV0dXJuIG51bGx9ZnVuY3Rpb24gQShhLGIsYyxkLGUpe2lmKFwic3RyaW5nXCI9PT10eXBlb2YgZHx8XCJudW1iZXJcIj09PXR5cGVvZiBkKXJldHVybiBhPVxuYS5nZXQoYyl8fG51bGwsaChiLGEsXCJcIitkLGUpO2lmKFwib2JqZWN0XCI9PT10eXBlb2YgZCYmbnVsbCE9PWQpe3N3aXRjaChkLiQkdHlwZW9mKXtjYXNlIFZiOnJldHVybiBhPWEuZ2V0KG51bGw9PT1kLmtleT9jOmQua2V5KXx8bnVsbCxkLnR5cGU9PT1YYj9tKGIsYSxkLnByb3BzLmNoaWxkcmVuLGUsZC5rZXkpOmwoYixhLGQsZSk7Y2FzZSBXYjpyZXR1cm4gYT1hLmdldChudWxsPT09ZC5rZXk/YzpkLmtleSl8fG51bGwsayhiLGEsZCxlKX1pZih6ZihkKXx8aGMoZCkpcmV0dXJuIGE9YS5nZXQoYyl8fG51bGwsbShiLGEsZCxlLG51bGwpO0JmKGIsZCl9cmV0dXJuIG51bGx9ZnVuY3Rpb24gdihlLGcsaCxrKXtmb3IodmFyIGw9bnVsbCxtPW51bGwscT1nLHU9Zz0wLEI9bnVsbDtudWxsIT09cSYmdTxoLmxlbmd0aDt1Kyspe3EuaW5kZXg+dT8oQj1xLHE9bnVsbCk6Qj1xLnNpYmxpbmc7dmFyIHc9dChlLHEsaFt1XSxrKTtpZihudWxsPT09dyl7bnVsbD09PXEmJihxPUIpO2JyZWFrfWEmJlxucSYmbnVsbD09PXcuYWx0ZXJuYXRlJiZiKGUscSk7Zz1mKHcsZyx1KTtudWxsPT09bT9sPXc6bS5zaWJsaW5nPXc7bT13O3E9Qn1pZih1PT09aC5sZW5ndGgpcmV0dXJuIGMoZSxxKSxsO2lmKG51bGw9PT1xKXtmb3IoO3U8aC5sZW5ndGg7dSsrKWlmKHE9cChlLGhbdV0saykpZz1mKHEsZyx1KSxudWxsPT09bT9sPXE6bS5zaWJsaW5nPXEsbT1xO3JldHVybiBsfWZvcihxPWQoZSxxKTt1PGgubGVuZ3RoO3UrKylpZihCPUEocSxlLHUsaFt1XSxrKSlhJiZudWxsIT09Qi5hbHRlcm5hdGUmJnEuZGVsZXRlKG51bGw9PT1CLmtleT91OkIua2V5KSxnPWYoQixnLHUpLG51bGw9PT1tP2w9QjptLnNpYmxpbmc9QixtPUI7YSYmcS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3JldHVybiBiKGUsYSl9KTtyZXR1cm4gbH1mdW5jdGlvbiBSKGUsZyxoLGspe3ZhciBsPWhjKGgpO1wiZnVuY3Rpb25cIiE9PXR5cGVvZiBsP3goXCIxNTBcIik6dm9pZCAwO2g9bC5jYWxsKGgpO251bGw9PWg/eChcIjE1MVwiKTp2b2lkIDA7XG5mb3IodmFyIG09bD1udWxsLHE9Zyx1PWc9MCxCPW51bGwsdz1oLm5leHQoKTtudWxsIT09cSYmIXcuZG9uZTt1Kyssdz1oLm5leHQoKSl7cS5pbmRleD51PyhCPXEscT1udWxsKTpCPXEuc2libGluZzt2YXIgdj10KGUscSx3LnZhbHVlLGspO2lmKG51bGw9PT12KXtxfHwocT1CKTticmVha31hJiZxJiZudWxsPT09di5hbHRlcm5hdGUmJmIoZSxxKTtnPWYodixnLHUpO251bGw9PT1tP2w9djptLnNpYmxpbmc9djttPXY7cT1CfWlmKHcuZG9uZSlyZXR1cm4gYyhlLHEpLGw7aWYobnVsbD09PXEpe2Zvcig7IXcuZG9uZTt1Kyssdz1oLm5leHQoKSl3PXAoZSx3LnZhbHVlLGspLG51bGwhPT13JiYoZz1mKHcsZyx1KSxudWxsPT09bT9sPXc6bS5zaWJsaW5nPXcsbT13KTtyZXR1cm4gbH1mb3IocT1kKGUscSk7IXcuZG9uZTt1Kyssdz1oLm5leHQoKSl3PUEocSxlLHUsdy52YWx1ZSxrKSxudWxsIT09dyYmKGEmJm51bGwhPT13LmFsdGVybmF0ZSYmcS5kZWxldGUobnVsbD09PXcua2V5P3U6XG53LmtleSksZz1mKHcsZyx1KSxudWxsPT09bT9sPXc6bS5zaWJsaW5nPXcsbT13KTthJiZxLmZvckVhY2goZnVuY3Rpb24oYSl7cmV0dXJuIGIoZSxhKX0pO3JldHVybiBsfXJldHVybiBmdW5jdGlvbihhLGQsZixoKXt2YXIgaz1cIm9iamVjdFwiPT09dHlwZW9mIGYmJm51bGwhPT1mJiZmLnR5cGU9PT1YYiYmbnVsbD09PWYua2V5O2smJihmPWYucHJvcHMuY2hpbGRyZW4pO3ZhciBsPVwib2JqZWN0XCI9PT10eXBlb2YgZiYmbnVsbCE9PWY7aWYobClzd2l0Y2goZi4kJHR5cGVvZil7Y2FzZSBWYjphOntsPWYua2V5O2ZvcihrPWQ7bnVsbCE9PWs7KXtpZihrLmtleT09PWwpaWYoNz09PWsudGFnP2YudHlwZT09PVhiOmsuZWxlbWVudFR5cGU9PT1mLnR5cGUpe2MoYSxrLnNpYmxpbmcpO2Q9ZShrLGYudHlwZT09PVhiP2YucHJvcHMuY2hpbGRyZW46Zi5wcm9wcyxoKTtkLnJlZj1BZihhLGssZik7ZC5yZXR1cm49YTthPWQ7YnJlYWsgYX1lbHNle2MoYSxrKTticmVha31lbHNlIGIoYSxrKTtrPVxuay5zaWJsaW5nfWYudHlwZT09PVhiPyhkPVplKGYucHJvcHMuY2hpbGRyZW4sYS5tb2RlLGgsZi5rZXkpLGQucmV0dXJuPWEsYT1kKTooaD1ZZShmLnR5cGUsZi5rZXksZi5wcm9wcyxudWxsLGEubW9kZSxoKSxoLnJlZj1BZihhLGQsZiksaC5yZXR1cm49YSxhPWgpfXJldHVybiBnKGEpO2Nhc2UgV2I6YTp7Zm9yKGs9Zi5rZXk7bnVsbCE9PWQ7KXtpZihkLmtleT09PWspaWYoND09PWQudGFnJiZkLnN0YXRlTm9kZS5jb250YWluZXJJbmZvPT09Zi5jb250YWluZXJJbmZvJiZkLnN0YXRlTm9kZS5pbXBsZW1lbnRhdGlvbj09PWYuaW1wbGVtZW50YXRpb24pe2MoYSxkLnNpYmxpbmcpO2Q9ZShkLGYuY2hpbGRyZW58fFtdLGgpO2QucmV0dXJuPWE7YT1kO2JyZWFrIGF9ZWxzZXtjKGEsZCk7YnJlYWt9ZWxzZSBiKGEsZCk7ZD1kLnNpYmxpbmd9ZD1iZihmLGEubW9kZSxoKTtkLnJldHVybj1hO2E9ZH1yZXR1cm4gZyhhKX1pZihcInN0cmluZ1wiPT09dHlwZW9mIGZ8fFwibnVtYmVyXCI9PT10eXBlb2YgZilyZXR1cm4gZj1cblwiXCIrZixudWxsIT09ZCYmNj09PWQudGFnPyhjKGEsZC5zaWJsaW5nKSxkPWUoZCxmLGgpLGQucmV0dXJuPWEsYT1kKTooYyhhLGQpLGQ9YWYoZixhLm1vZGUsaCksZC5yZXR1cm49YSxhPWQpLGcoYSk7aWYoemYoZikpcmV0dXJuIHYoYSxkLGYsaCk7aWYoaGMoZikpcmV0dXJuIFIoYSxkLGYsaCk7bCYmQmYoYSxmKTtpZihcInVuZGVmaW5lZFwiPT09dHlwZW9mIGYmJiFrKXN3aXRjaChhLnRhZyl7Y2FzZSAxOmNhc2UgMDpoPWEudHlwZSx4KFwiMTUyXCIsaC5kaXNwbGF5TmFtZXx8aC5uYW1lfHxcIkNvbXBvbmVudFwiKX1yZXR1cm4gYyhhLGQpfX12YXIgRGY9Q2YoITApLEVmPUNmKCExKSxGZj17fSxOPXtjdXJyZW50OkZmfSxHZj17Y3VycmVudDpGZn0sSGY9e2N1cnJlbnQ6RmZ9O2Z1bmN0aW9uIElmKGEpe2E9PT1GZj94KFwiMTc0XCIpOnZvaWQgMDtyZXR1cm4gYX1cbmZ1bmN0aW9uIEpmKGEsYil7RyhIZixiLGEpO0coR2YsYSxhKTtHKE4sRmYsYSk7dmFyIGM9Yi5ub2RlVHlwZTtzd2l0Y2goYyl7Y2FzZSA5OmNhc2UgMTE6Yj0oYj1iLmRvY3VtZW50RWxlbWVudCk/Yi5uYW1lc3BhY2VVUkk6aGUobnVsbCxcIlwiKTticmVhaztkZWZhdWx0OmM9OD09PWM/Yi5wYXJlbnROb2RlOmIsYj1jLm5hbWVzcGFjZVVSSXx8bnVsbCxjPWMudGFnTmFtZSxiPWhlKGIsYyl9RihOLGEpO0coTixiLGEpfWZ1bmN0aW9uIEtmKGEpe0YoTixhKTtGKEdmLGEpO0YoSGYsYSl9ZnVuY3Rpb24gTGYoYSl7SWYoSGYuY3VycmVudCk7dmFyIGI9SWYoTi5jdXJyZW50KTt2YXIgYz1oZShiLGEudHlwZSk7YiE9PWMmJihHKEdmLGEsYSksRyhOLGMsYSkpfWZ1bmN0aW9uIE1mKGEpe0dmLmN1cnJlbnQ9PT1hJiYoRihOLGEpLEYoR2YsYSkpfVxudmFyIE5mPTAsT2Y9MixQZj00LFFmPTgsUmY9MTYsU2Y9MzIsVGY9NjQsVWY9MTI4LFZmPVRiLlJlYWN0Q3VycmVudERpc3BhdGNoZXIsV2Y9MCxYZj1udWxsLE89bnVsbCxQPW51bGwsWWY9bnVsbCxRPW51bGwsWmY9bnVsbCwkZj0wLGFnPW51bGwsYmc9MCxjZz0hMSxkZz1udWxsLGVnPTA7ZnVuY3Rpb24gZmcoKXt4KFwiMzIxXCIpfWZ1bmN0aW9uIGdnKGEsYil7aWYobnVsbD09PWIpcmV0dXJuITE7Zm9yKHZhciBjPTA7YzxiLmxlbmd0aCYmYzxhLmxlbmd0aDtjKyspaWYoIWJkKGFbY10sYltjXSkpcmV0dXJuITE7cmV0dXJuITB9XG5mdW5jdGlvbiBoZyhhLGIsYyxkLGUsZil7V2Y9ZjtYZj1iO1A9bnVsbCE9PWE/YS5tZW1vaXplZFN0YXRlOm51bGw7VmYuY3VycmVudD1udWxsPT09UD9pZzpqZztiPWMoZCxlKTtpZihjZyl7ZG8gY2c9ITEsZWcrPTEsUD1udWxsIT09YT9hLm1lbW9pemVkU3RhdGU6bnVsbCxaZj1ZZixhZz1RPU89bnVsbCxWZi5jdXJyZW50PWpnLGI9YyhkLGUpO3doaWxlKGNnKTtkZz1udWxsO2VnPTB9VmYuY3VycmVudD1rZzthPVhmO2EubWVtb2l6ZWRTdGF0ZT1ZZjthLmV4cGlyYXRpb25UaW1lPSRmO2EudXBkYXRlUXVldWU9YWc7YS5lZmZlY3RUYWd8PWJnO2E9bnVsbCE9PU8mJm51bGwhPT1PLm5leHQ7V2Y9MDtaZj1RPVlmPVA9Tz1YZj1udWxsOyRmPTA7YWc9bnVsbDtiZz0wO2E/eChcIjMwMFwiKTp2b2lkIDA7cmV0dXJuIGJ9ZnVuY3Rpb24gbGcoKXtWZi5jdXJyZW50PWtnO1dmPTA7WmY9UT1ZZj1QPU89WGY9bnVsbDskZj0wO2FnPW51bGw7Ymc9MDtjZz0hMTtkZz1udWxsO2VnPTB9XG5mdW5jdGlvbiBtZygpe3ZhciBhPXttZW1vaXplZFN0YXRlOm51bGwsYmFzZVN0YXRlOm51bGwscXVldWU6bnVsbCxiYXNlVXBkYXRlOm51bGwsbmV4dDpudWxsfTtudWxsPT09UT9ZZj1RPWE6UT1RLm5leHQ9YTtyZXR1cm4gUX1mdW5jdGlvbiBuZygpe2lmKG51bGwhPT1aZilRPVpmLFpmPVEubmV4dCxPPVAsUD1udWxsIT09Tz9PLm5leHQ6bnVsbDtlbHNle251bGw9PT1QP3goXCIzMTBcIik6dm9pZCAwO089UDt2YXIgYT17bWVtb2l6ZWRTdGF0ZTpPLm1lbW9pemVkU3RhdGUsYmFzZVN0YXRlOk8uYmFzZVN0YXRlLHF1ZXVlOk8ucXVldWUsYmFzZVVwZGF0ZTpPLmJhc2VVcGRhdGUsbmV4dDpudWxsfTtRPW51bGw9PT1RP1lmPWE6US5uZXh0PWE7UD1PLm5leHR9cmV0dXJuIFF9ZnVuY3Rpb24gb2coYSxiKXtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYj9iKGEpOmJ9XG5mdW5jdGlvbiBwZyhhKXt2YXIgYj1uZygpLGM9Yi5xdWV1ZTtudWxsPT09Yz94KFwiMzExXCIpOnZvaWQgMDtjLmxhc3RSZW5kZXJlZFJlZHVjZXI9YTtpZigwPGVnKXt2YXIgZD1jLmRpc3BhdGNoO2lmKG51bGwhPT1kZyl7dmFyIGU9ZGcuZ2V0KGMpO2lmKHZvaWQgMCE9PWUpe2RnLmRlbGV0ZShjKTt2YXIgZj1iLm1lbW9pemVkU3RhdGU7ZG8gZj1hKGYsZS5hY3Rpb24pLGU9ZS5uZXh0O3doaWxlKG51bGwhPT1lKTtiZChmLGIubWVtb2l6ZWRTdGF0ZSl8fChxZz0hMCk7Yi5tZW1vaXplZFN0YXRlPWY7Yi5iYXNlVXBkYXRlPT09Yy5sYXN0JiYoYi5iYXNlU3RhdGU9Zik7Yy5sYXN0UmVuZGVyZWRTdGF0ZT1mO3JldHVybltmLGRdfX1yZXR1cm5bYi5tZW1vaXplZFN0YXRlLGRdfWQ9Yy5sYXN0O3ZhciBnPWIuYmFzZVVwZGF0ZTtmPWIuYmFzZVN0YXRlO251bGwhPT1nPyhudWxsIT09ZCYmKGQubmV4dD1udWxsKSxkPWcubmV4dCk6ZD1udWxsIT09ZD9kLm5leHQ6bnVsbDtpZihudWxsIT09XG5kKXt2YXIgaD1lPW51bGwsbD1kLGs9ITE7ZG97dmFyIG09bC5leHBpcmF0aW9uVGltZTttPFdmPyhrfHwoaz0hMCxoPWcsZT1mKSxtPiRmJiYoJGY9bSkpOmY9bC5lYWdlclJlZHVjZXI9PT1hP2wuZWFnZXJTdGF0ZTphKGYsbC5hY3Rpb24pO2c9bDtsPWwubmV4dH13aGlsZShudWxsIT09bCYmbCE9PWQpO2t8fChoPWcsZT1mKTtiZChmLGIubWVtb2l6ZWRTdGF0ZSl8fChxZz0hMCk7Yi5tZW1vaXplZFN0YXRlPWY7Yi5iYXNlVXBkYXRlPWg7Yi5iYXNlU3RhdGU9ZTtjLmxhc3RSZW5kZXJlZFN0YXRlPWZ9cmV0dXJuW2IubWVtb2l6ZWRTdGF0ZSxjLmRpc3BhdGNoXX1cbmZ1bmN0aW9uIHJnKGEsYixjLGQpe2E9e3RhZzphLGNyZWF0ZTpiLGRlc3Ryb3k6YyxkZXBzOmQsbmV4dDpudWxsfTtudWxsPT09YWc/KGFnPXtsYXN0RWZmZWN0Om51bGx9LGFnLmxhc3RFZmZlY3Q9YS5uZXh0PWEpOihiPWFnLmxhc3RFZmZlY3QsbnVsbD09PWI/YWcubGFzdEVmZmVjdD1hLm5leHQ9YTooYz1iLm5leHQsYi5uZXh0PWEsYS5uZXh0PWMsYWcubGFzdEVmZmVjdD1hKSk7cmV0dXJuIGF9ZnVuY3Rpb24gc2coYSxiLGMsZCl7dmFyIGU9bWcoKTtiZ3w9YTtlLm1lbW9pemVkU3RhdGU9cmcoYixjLHZvaWQgMCx2b2lkIDA9PT1kP251bGw6ZCl9XG5mdW5jdGlvbiB0ZyhhLGIsYyxkKXt2YXIgZT1uZygpO2Q9dm9pZCAwPT09ZD9udWxsOmQ7dmFyIGY9dm9pZCAwO2lmKG51bGwhPT1PKXt2YXIgZz1PLm1lbW9pemVkU3RhdGU7Zj1nLmRlc3Ryb3k7aWYobnVsbCE9PWQmJmdnKGQsZy5kZXBzKSl7cmcoTmYsYyxmLGQpO3JldHVybn19Ymd8PWE7ZS5tZW1vaXplZFN0YXRlPXJnKGIsYyxmLGQpfWZ1bmN0aW9uIHVnKGEsYil7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGIpcmV0dXJuIGE9YSgpLGIoYSksZnVuY3Rpb24oKXtiKG51bGwpfTtpZihudWxsIT09YiYmdm9pZCAwIT09YilyZXR1cm4gYT1hKCksYi5jdXJyZW50PWEsZnVuY3Rpb24oKXtiLmN1cnJlbnQ9bnVsbH19ZnVuY3Rpb24gdmcoKXt9XG5mdW5jdGlvbiB3ZyhhLGIsYyl7MjU+ZWc/dm9pZCAwOngoXCIzMDFcIik7dmFyIGQ9YS5hbHRlcm5hdGU7aWYoYT09PVhmfHxudWxsIT09ZCYmZD09PVhmKWlmKGNnPSEwLGE9e2V4cGlyYXRpb25UaW1lOldmLGFjdGlvbjpjLGVhZ2VyUmVkdWNlcjpudWxsLGVhZ2VyU3RhdGU6bnVsbCxuZXh0Om51bGx9LG51bGw9PT1kZyYmKGRnPW5ldyBNYXApLGM9ZGcuZ2V0KGIpLHZvaWQgMD09PWMpZGcuc2V0KGIsYSk7ZWxzZXtmb3IoYj1jO251bGwhPT1iLm5leHQ7KWI9Yi5uZXh0O2IubmV4dD1hfWVsc2V7b2YoKTt2YXIgZT1sZigpO2U9bWYoZSxhKTt2YXIgZj17ZXhwaXJhdGlvblRpbWU6ZSxhY3Rpb246YyxlYWdlclJlZHVjZXI6bnVsbCxlYWdlclN0YXRlOm51bGwsbmV4dDpudWxsfSxnPWIubGFzdDtpZihudWxsPT09ZylmLm5leHQ9ZjtlbHNle3ZhciBoPWcubmV4dDtudWxsIT09aCYmKGYubmV4dD1oKTtnLm5leHQ9Zn1iLmxhc3Q9ZjtpZigwPT09YS5leHBpcmF0aW9uVGltZSYmKG51bGw9PT1cbmR8fDA9PT1kLmV4cGlyYXRpb25UaW1lKSYmKGQ9Yi5sYXN0UmVuZGVyZWRSZWR1Y2VyLG51bGwhPT1kKSl0cnl7dmFyIGw9Yi5sYXN0UmVuZGVyZWRTdGF0ZSxrPWQobCxjKTtmLmVhZ2VyUmVkdWNlcj1kO2YuZWFnZXJTdGF0ZT1rO2lmKGJkKGssbCkpcmV0dXJufWNhdGNoKG0pe31maW5hbGx5e31xZihhLGUpfX1cbnZhciBrZz17cmVhZENvbnRleHQ6TSx1c2VDYWxsYmFjazpmZyx1c2VDb250ZXh0OmZnLHVzZUVmZmVjdDpmZyx1c2VJbXBlcmF0aXZlSGFuZGxlOmZnLHVzZUxheW91dEVmZmVjdDpmZyx1c2VNZW1vOmZnLHVzZVJlZHVjZXI6ZmcsdXNlUmVmOmZnLHVzZVN0YXRlOmZnLHVzZURlYnVnVmFsdWU6Zmd9LGlnPXtyZWFkQ29udGV4dDpNLHVzZUNhbGxiYWNrOmZ1bmN0aW9uKGEsYil7bWcoKS5tZW1vaXplZFN0YXRlPVthLHZvaWQgMD09PWI/bnVsbDpiXTtyZXR1cm4gYX0sdXNlQ29udGV4dDpNLHVzZUVmZmVjdDpmdW5jdGlvbihhLGIpe3JldHVybiBzZyg1MTYsVWZ8VGYsYSxiKX0sdXNlSW1wZXJhdGl2ZUhhbmRsZTpmdW5jdGlvbihhLGIsYyl7Yz1udWxsIT09YyYmdm9pZCAwIT09Yz9jLmNvbmNhdChbYV0pOm51bGw7cmV0dXJuIHNnKDQsUGZ8U2YsdWcuYmluZChudWxsLGIsYSksYyl9LHVzZUxheW91dEVmZmVjdDpmdW5jdGlvbihhLGIpe3JldHVybiBzZyg0LFBmfFNmLGEsYil9LFxudXNlTWVtbzpmdW5jdGlvbihhLGIpe3ZhciBjPW1nKCk7Yj12b2lkIDA9PT1iP251bGw6YjthPWEoKTtjLm1lbW9pemVkU3RhdGU9W2EsYl07cmV0dXJuIGF9LHVzZVJlZHVjZXI6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPW1nKCk7Yj12b2lkIDAhPT1jP2MoYik6YjtkLm1lbW9pemVkU3RhdGU9ZC5iYXNlU3RhdGU9YjthPWQucXVldWU9e2xhc3Q6bnVsbCxkaXNwYXRjaDpudWxsLGxhc3RSZW5kZXJlZFJlZHVjZXI6YSxsYXN0UmVuZGVyZWRTdGF0ZTpifTthPWEuZGlzcGF0Y2g9d2cuYmluZChudWxsLFhmLGEpO3JldHVybltkLm1lbW9pemVkU3RhdGUsYV19LHVzZVJlZjpmdW5jdGlvbihhKXt2YXIgYj1tZygpO2E9e2N1cnJlbnQ6YX07cmV0dXJuIGIubWVtb2l6ZWRTdGF0ZT1hfSx1c2VTdGF0ZTpmdW5jdGlvbihhKXt2YXIgYj1tZygpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBhJiYoYT1hKCkpO2IubWVtb2l6ZWRTdGF0ZT1iLmJhc2VTdGF0ZT1hO2E9Yi5xdWV1ZT17bGFzdDpudWxsLGRpc3BhdGNoOm51bGwsXG5sYXN0UmVuZGVyZWRSZWR1Y2VyOm9nLGxhc3RSZW5kZXJlZFN0YXRlOmF9O2E9YS5kaXNwYXRjaD13Zy5iaW5kKG51bGwsWGYsYSk7cmV0dXJuW2IubWVtb2l6ZWRTdGF0ZSxhXX0sdXNlRGVidWdWYWx1ZTp2Z30samc9e3JlYWRDb250ZXh0Ok0sdXNlQ2FsbGJhY2s6ZnVuY3Rpb24oYSxiKXt2YXIgYz1uZygpO2I9dm9pZCAwPT09Yj9udWxsOmI7dmFyIGQ9Yy5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1kJiZudWxsIT09YiYmZ2coYixkWzFdKSlyZXR1cm4gZFswXTtjLm1lbW9pemVkU3RhdGU9W2EsYl07cmV0dXJuIGF9LHVzZUNvbnRleHQ6TSx1c2VFZmZlY3Q6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGcoNTE2LFVmfFRmLGEsYil9LHVzZUltcGVyYXRpdmVIYW5kbGU6ZnVuY3Rpb24oYSxiLGMpe2M9bnVsbCE9PWMmJnZvaWQgMCE9PWM/Yy5jb25jYXQoW2FdKTpudWxsO3JldHVybiB0Zyg0LFBmfFNmLHVnLmJpbmQobnVsbCxiLGEpLGMpfSx1c2VMYXlvdXRFZmZlY3Q6ZnVuY3Rpb24oYSxcbmIpe3JldHVybiB0Zyg0LFBmfFNmLGEsYil9LHVzZU1lbW86ZnVuY3Rpb24oYSxiKXt2YXIgYz1uZygpO2I9dm9pZCAwPT09Yj9udWxsOmI7dmFyIGQ9Yy5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1kJiZudWxsIT09YiYmZ2coYixkWzFdKSlyZXR1cm4gZFswXTthPWEoKTtjLm1lbW9pemVkU3RhdGU9W2EsYl07cmV0dXJuIGF9LHVzZVJlZHVjZXI6cGcsdXNlUmVmOmZ1bmN0aW9uKCl7cmV0dXJuIG5nKCkubWVtb2l6ZWRTdGF0ZX0sdXNlU3RhdGU6ZnVuY3Rpb24oYSl7cmV0dXJuIHBnKG9nLGEpfSx1c2VEZWJ1Z1ZhbHVlOnZnfSx4Zz1udWxsLHlnPW51bGwsemc9ITE7XG5mdW5jdGlvbiBBZyhhLGIpe3ZhciBjPUsoNSxudWxsLG51bGwsMCk7Yy5lbGVtZW50VHlwZT1cIkRFTEVURURcIjtjLnR5cGU9XCJERUxFVEVEXCI7Yy5zdGF0ZU5vZGU9YjtjLnJldHVybj1hO2MuZWZmZWN0VGFnPTg7bnVsbCE9PWEubGFzdEVmZmVjdD8oYS5sYXN0RWZmZWN0Lm5leHRFZmZlY3Q9YyxhLmxhc3RFZmZlY3Q9Yyk6YS5maXJzdEVmZmVjdD1hLmxhc3RFZmZlY3Q9Y31mdW5jdGlvbiBCZyhhLGIpe3N3aXRjaChhLnRhZyl7Y2FzZSA1OnZhciBjPWEudHlwZTtiPTEhPT1iLm5vZGVUeXBlfHxjLnRvTG93ZXJDYXNlKCkhPT1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk/bnVsbDpiO3JldHVybiBudWxsIT09Yj8oYS5zdGF0ZU5vZGU9YiwhMCk6ITE7Y2FzZSA2OnJldHVybiBiPVwiXCI9PT1hLnBlbmRpbmdQcm9wc3x8MyE9PWIubm9kZVR5cGU/bnVsbDpiLG51bGwhPT1iPyhhLnN0YXRlTm9kZT1iLCEwKTohMTtjYXNlIDEzOnJldHVybiExO2RlZmF1bHQ6cmV0dXJuITF9fVxuZnVuY3Rpb24gQ2coYSl7aWYoemcpe3ZhciBiPXlnO2lmKGIpe3ZhciBjPWI7aWYoIUJnKGEsYikpe2I9RGUoYyk7aWYoIWJ8fCFCZyhhLGIpKXthLmVmZmVjdFRhZ3w9Mjt6Zz0hMTt4Zz1hO3JldHVybn1BZyh4ZyxjKX14Zz1hO3lnPUVlKGIpfWVsc2UgYS5lZmZlY3RUYWd8PTIsemc9ITEseGc9YX19ZnVuY3Rpb24gRGcoYSl7Zm9yKGE9YS5yZXR1cm47bnVsbCE9PWEmJjUhPT1hLnRhZyYmMyE9PWEudGFnJiYxOCE9PWEudGFnOylhPWEucmV0dXJuO3hnPWF9ZnVuY3Rpb24gRWcoYSl7aWYoYSE9PXhnKXJldHVybiExO2lmKCF6ZylyZXR1cm4gRGcoYSksemc9ITAsITE7dmFyIGI9YS50eXBlO2lmKDUhPT1hLnRhZ3x8XCJoZWFkXCIhPT1iJiZcImJvZHlcIiE9PWImJiF4ZShiLGEubWVtb2l6ZWRQcm9wcykpZm9yKGI9eWc7YjspQWcoYSxiKSxiPURlKGIpO0RnKGEpO3lnPXhnP0RlKGEuc3RhdGVOb2RlKTpudWxsO3JldHVybiEwfWZ1bmN0aW9uIEZnKCl7eWc9eGc9bnVsbDt6Zz0hMX1cbnZhciBHZz1UYi5SZWFjdEN1cnJlbnRPd25lcixxZz0hMTtmdW5jdGlvbiBTKGEsYixjLGQpe2IuY2hpbGQ9bnVsbD09PWE/RWYoYixudWxsLGMsZCk6RGYoYixhLmNoaWxkLGMsZCl9ZnVuY3Rpb24gSGcoYSxiLGMsZCxlKXtjPWMucmVuZGVyO3ZhciBmPWIucmVmO0lnKGIsZSk7ZD1oZyhhLGIsYyxkLGYsZSk7aWYobnVsbCE9PWEmJiFxZylyZXR1cm4gYi51cGRhdGVRdWV1ZT1hLnVwZGF0ZVF1ZXVlLGIuZWZmZWN0VGFnJj0tNTE3LGEuZXhwaXJhdGlvblRpbWU8PWUmJihhLmV4cGlyYXRpb25UaW1lPTApLEpnKGEsYixlKTtiLmVmZmVjdFRhZ3w9MTtTKGEsYixkLGUpO3JldHVybiBiLmNoaWxkfVxuZnVuY3Rpb24gS2coYSxiLGMsZCxlLGYpe2lmKG51bGw9PT1hKXt2YXIgZz1jLnR5cGU7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGcmJiFWZShnKSYmdm9pZCAwPT09Zy5kZWZhdWx0UHJvcHMmJm51bGw9PT1jLmNvbXBhcmUmJnZvaWQgMD09PWMuZGVmYXVsdFByb3BzKXJldHVybiBiLnRhZz0xNSxiLnR5cGU9ZyxMZyhhLGIsZyxkLGUsZik7YT1ZZShjLnR5cGUsbnVsbCxkLG51bGwsYi5tb2RlLGYpO2EucmVmPWIucmVmO2EucmV0dXJuPWI7cmV0dXJuIGIuY2hpbGQ9YX1nPWEuY2hpbGQ7aWYoZTxmJiYoZT1nLm1lbW9pemVkUHJvcHMsYz1jLmNvbXBhcmUsYz1udWxsIT09Yz9jOmRkLGMoZSxkKSYmYS5yZWY9PT1iLnJlZikpcmV0dXJuIEpnKGEsYixmKTtiLmVmZmVjdFRhZ3w9MTthPVhlKGcsZCxmKTthLnJlZj1iLnJlZjthLnJldHVybj1iO3JldHVybiBiLmNoaWxkPWF9XG5mdW5jdGlvbiBMZyhhLGIsYyxkLGUsZil7cmV0dXJuIG51bGwhPT1hJiZkZChhLm1lbW9pemVkUHJvcHMsZCkmJmEucmVmPT09Yi5yZWYmJihxZz0hMSxlPGYpP0pnKGEsYixmKTpNZyhhLGIsYyxkLGYpfWZ1bmN0aW9uIE5nKGEsYil7dmFyIGM9Yi5yZWY7aWYobnVsbD09PWEmJm51bGwhPT1jfHxudWxsIT09YSYmYS5yZWYhPT1jKWIuZWZmZWN0VGFnfD0xMjh9ZnVuY3Rpb24gTWcoYSxiLGMsZCxlKXt2YXIgZj1KKGMpP0llOkguY3VycmVudDtmPUplKGIsZik7SWcoYixlKTtjPWhnKGEsYixjLGQsZixlKTtpZihudWxsIT09YSYmIXFnKXJldHVybiBiLnVwZGF0ZVF1ZXVlPWEudXBkYXRlUXVldWUsYi5lZmZlY3RUYWcmPS01MTcsYS5leHBpcmF0aW9uVGltZTw9ZSYmKGEuZXhwaXJhdGlvblRpbWU9MCksSmcoYSxiLGUpO2IuZWZmZWN0VGFnfD0xO1MoYSxiLGMsZSk7cmV0dXJuIGIuY2hpbGR9XG5mdW5jdGlvbiBPZyhhLGIsYyxkLGUpe2lmKEooYykpe3ZhciBmPSEwO09lKGIpfWVsc2UgZj0hMTtJZyhiLGUpO2lmKG51bGw9PT1iLnN0YXRlTm9kZSludWxsIT09YSYmKGEuYWx0ZXJuYXRlPW51bGwsYi5hbHRlcm5hdGU9bnVsbCxiLmVmZmVjdFRhZ3w9MiksdmYoYixjLGQsZSkseGYoYixjLGQsZSksZD0hMDtlbHNlIGlmKG51bGw9PT1hKXt2YXIgZz1iLnN0YXRlTm9kZSxoPWIubWVtb2l6ZWRQcm9wcztnLnByb3BzPWg7dmFyIGw9Zy5jb250ZXh0LGs9Yy5jb250ZXh0VHlwZTtcIm9iamVjdFwiPT09dHlwZW9mIGsmJm51bGwhPT1rP2s9TShrKTooaz1KKGMpP0llOkguY3VycmVudCxrPUplKGIsaykpO3ZhciBtPWMuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzLHA9XCJmdW5jdGlvblwiPT09dHlwZW9mIG18fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlO3B8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZcblwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHN8fChoIT09ZHx8bCE9PWspJiZ3ZihiLGcsZCxrKTtQZz0hMTt2YXIgdD1iLm1lbW9pemVkU3RhdGU7bD1nLnN0YXRlPXQ7dmFyIEE9Yi51cGRhdGVRdWV1ZTtudWxsIT09QSYmKHlmKGIsQSxkLGcsZSksbD1iLm1lbW9pemVkU3RhdGUpO2ghPT1kfHx0IT09bHx8SS5jdXJyZW50fHxQZz8oXCJmdW5jdGlvblwiPT09dHlwZW9mIG0mJihrZihiLGMsbSxkKSxsPWIubWVtb2l6ZWRTdGF0ZSksKGg9UGd8fHVmKGIsYyxoLGQsdCxsLGspKT8ocHx8XCJmdW5jdGlvblwiIT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50V2lsbE1vdW50fHwoXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50V2lsbE1vdW50JiZnLmNvbXBvbmVudFdpbGxNb3VudCgpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQmJlxuZy5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudERpZE1vdW50JiYoYi5lZmZlY3RUYWd8PTQpKTooXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50RGlkTW91bnQmJihiLmVmZmVjdFRhZ3w9NCksYi5tZW1vaXplZFByb3BzPWQsYi5tZW1vaXplZFN0YXRlPWwpLGcucHJvcHM9ZCxnLnN0YXRlPWwsZy5jb250ZXh0PWssZD1oKTooXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50RGlkTW91bnQmJihiLmVmZmVjdFRhZ3w9NCksZD0hMSl9ZWxzZSBnPWIuc3RhdGVOb2RlLGg9Yi5tZW1vaXplZFByb3BzLGcucHJvcHM9Yi50eXBlPT09Yi5lbGVtZW50VHlwZT9oOkwoYi50eXBlLGgpLGw9Zy5jb250ZXh0LGs9Yy5jb250ZXh0VHlwZSxcIm9iamVjdFwiPT09dHlwZW9mIGsmJm51bGwhPT1rP2s9TShrKTooaz1KKGMpP0llOkguY3VycmVudCxrPUplKGIsaykpLG09Yy5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMsKHA9XCJmdW5jdGlvblwiPT09XG50eXBlb2YgbXx8XCJmdW5jdGlvblwiPT09dHlwZW9mIGcuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUpfHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc3x8KGghPT1kfHxsIT09aykmJndmKGIsZyxkLGspLFBnPSExLGw9Yi5tZW1vaXplZFN0YXRlLHQ9Zy5zdGF0ZT1sLEE9Yi51cGRhdGVRdWV1ZSxudWxsIT09QSYmKHlmKGIsQSxkLGcsZSksdD1iLm1lbW9pemVkU3RhdGUpLGghPT1kfHxsIT09dHx8SS5jdXJyZW50fHxQZz8oXCJmdW5jdGlvblwiPT09dHlwZW9mIG0mJihrZihiLGMsbSxkKSx0PWIubWVtb2l6ZWRTdGF0ZSksKG09UGd8fHVmKGIsYyxoLGQsbCx0LGspKT8ocHx8XCJmdW5jdGlvblwiIT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxVcGRhdGV8fChcImZ1bmN0aW9uXCI9PT1cbnR5cGVvZiBnLmNvbXBvbmVudFdpbGxVcGRhdGUmJmcuY29tcG9uZW50V2lsbFVwZGF0ZShkLHQsayksXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUmJmcuVU5TQUZFX2NvbXBvbmVudFdpbGxVcGRhdGUoZCx0LGspKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5jb21wb25lbnREaWRVcGRhdGUmJihiLmVmZmVjdFRhZ3w9NCksXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUmJihiLmVmZmVjdFRhZ3w9MjU2KSk6KFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudERpZFVwZGF0ZXx8aD09PWEubWVtb2l6ZWRQcm9wcyYmbD09PWEubWVtb2l6ZWRTdGF0ZXx8KGIuZWZmZWN0VGFnfD00KSxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZXx8aD09PWEubWVtb2l6ZWRQcm9wcyYmbD09PWEubWVtb2l6ZWRTdGF0ZXx8KGIuZWZmZWN0VGFnfD0yNTYpLGIubWVtb2l6ZWRQcm9wcz1kLGIubWVtb2l6ZWRTdGF0ZT1cbnQpLGcucHJvcHM9ZCxnLnN0YXRlPXQsZy5jb250ZXh0PWssZD1tKTooXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50RGlkVXBkYXRlfHxoPT09YS5tZW1vaXplZFByb3BzJiZsPT09YS5tZW1vaXplZFN0YXRlfHwoYi5lZmZlY3RUYWd8PTQpLFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHxoPT09YS5tZW1vaXplZFByb3BzJiZsPT09YS5tZW1vaXplZFN0YXRlfHwoYi5lZmZlY3RUYWd8PTI1NiksZD0hMSk7cmV0dXJuIFFnKGEsYixjLGQsZixlKX1cbmZ1bmN0aW9uIFFnKGEsYixjLGQsZSxmKXtOZyhhLGIpO3ZhciBnPTAhPT0oYi5lZmZlY3RUYWcmNjQpO2lmKCFkJiYhZylyZXR1cm4gZSYmUGUoYixjLCExKSxKZyhhLGIsZik7ZD1iLnN0YXRlTm9kZTtHZy5jdXJyZW50PWI7dmFyIGg9ZyYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGMuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yP251bGw6ZC5yZW5kZXIoKTtiLmVmZmVjdFRhZ3w9MTtudWxsIT09YSYmZz8oYi5jaGlsZD1EZihiLGEuY2hpbGQsbnVsbCxmKSxiLmNoaWxkPURmKGIsbnVsbCxoLGYpKTpTKGEsYixoLGYpO2IubWVtb2l6ZWRTdGF0ZT1kLnN0YXRlO2UmJlBlKGIsYywhMCk7cmV0dXJuIGIuY2hpbGR9ZnVuY3Rpb24gUmcoYSl7dmFyIGI9YS5zdGF0ZU5vZGU7Yi5wZW5kaW5nQ29udGV4dD9NZShhLGIucGVuZGluZ0NvbnRleHQsYi5wZW5kaW5nQ29udGV4dCE9PWIuY29udGV4dCk6Yi5jb250ZXh0JiZNZShhLGIuY29udGV4dCwhMSk7SmYoYSxiLmNvbnRhaW5lckluZm8pfVxuZnVuY3Rpb24gU2coYSxiLGMpe3ZhciBkPWIubW9kZSxlPWIucGVuZGluZ1Byb3BzLGY9Yi5tZW1vaXplZFN0YXRlO2lmKDA9PT0oYi5lZmZlY3RUYWcmNjQpKXtmPW51bGw7dmFyIGc9ITF9ZWxzZSBmPXt0aW1lZE91dEF0Om51bGwhPT1mP2YudGltZWRPdXRBdDowfSxnPSEwLGIuZWZmZWN0VGFnJj0tNjU7aWYobnVsbD09PWEpaWYoZyl7dmFyIGg9ZS5mYWxsYmFjazthPVplKG51bGwsZCwwLG51bGwpOzA9PT0oYi5tb2RlJjEpJiYoYS5jaGlsZD1udWxsIT09Yi5tZW1vaXplZFN0YXRlP2IuY2hpbGQuY2hpbGQ6Yi5jaGlsZCk7ZD1aZShoLGQsYyxudWxsKTthLnNpYmxpbmc9ZDtjPWE7Yy5yZXR1cm49ZC5yZXR1cm49Yn1lbHNlIGM9ZD1FZihiLG51bGwsZS5jaGlsZHJlbixjKTtlbHNlIG51bGwhPT1hLm1lbW9pemVkU3RhdGU/KGQ9YS5jaGlsZCxoPWQuc2libGluZyxnPyhjPWUuZmFsbGJhY2ssZT1YZShkLGQucGVuZGluZ1Byb3BzLDApLDA9PT0oYi5tb2RlJjEpJiYoZz1udWxsIT09XG5iLm1lbW9pemVkU3RhdGU/Yi5jaGlsZC5jaGlsZDpiLmNoaWxkLGchPT1kLmNoaWxkJiYoZS5jaGlsZD1nKSksZD1lLnNpYmxpbmc9WGUoaCxjLGguZXhwaXJhdGlvblRpbWUpLGM9ZSxlLmNoaWxkRXhwaXJhdGlvblRpbWU9MCxjLnJldHVybj1kLnJldHVybj1iKTpjPWQ9RGYoYixkLmNoaWxkLGUuY2hpbGRyZW4sYykpOihoPWEuY2hpbGQsZz8oZz1lLmZhbGxiYWNrLGU9WmUobnVsbCxkLDAsbnVsbCksZS5jaGlsZD1oLDA9PT0oYi5tb2RlJjEpJiYoZS5jaGlsZD1udWxsIT09Yi5tZW1vaXplZFN0YXRlP2IuY2hpbGQuY2hpbGQ6Yi5jaGlsZCksZD1lLnNpYmxpbmc9WmUoZyxkLGMsbnVsbCksZC5lZmZlY3RUYWd8PTIsYz1lLGUuY2hpbGRFeHBpcmF0aW9uVGltZT0wLGMucmV0dXJuPWQucmV0dXJuPWIpOmQ9Yz1EZihiLGgsZS5jaGlsZHJlbixjKSksYi5zdGF0ZU5vZGU9YS5zdGF0ZU5vZGU7Yi5tZW1vaXplZFN0YXRlPWY7Yi5jaGlsZD1jO3JldHVybiBkfVxuZnVuY3Rpb24gSmcoYSxiLGMpe251bGwhPT1hJiYoYi5jb250ZXh0RGVwZW5kZW5jaWVzPWEuY29udGV4dERlcGVuZGVuY2llcyk7aWYoYi5jaGlsZEV4cGlyYXRpb25UaW1lPGMpcmV0dXJuIG51bGw7bnVsbCE9PWEmJmIuY2hpbGQhPT1hLmNoaWxkP3goXCIxNTNcIik6dm9pZCAwO2lmKG51bGwhPT1iLmNoaWxkKXthPWIuY2hpbGQ7Yz1YZShhLGEucGVuZGluZ1Byb3BzLGEuZXhwaXJhdGlvblRpbWUpO2IuY2hpbGQ9Yztmb3IoYy5yZXR1cm49YjtudWxsIT09YS5zaWJsaW5nOylhPWEuc2libGluZyxjPWMuc2libGluZz1YZShhLGEucGVuZGluZ1Byb3BzLGEuZXhwaXJhdGlvblRpbWUpLGMucmV0dXJuPWI7Yy5zaWJsaW5nPW51bGx9cmV0dXJuIGIuY2hpbGR9XG5mdW5jdGlvbiBUZyhhLGIsYyl7dmFyIGQ9Yi5leHBpcmF0aW9uVGltZTtpZihudWxsIT09YSlpZihhLm1lbW9pemVkUHJvcHMhPT1iLnBlbmRpbmdQcm9wc3x8SS5jdXJyZW50KXFnPSEwO2Vsc2V7aWYoZDxjKXtxZz0hMTtzd2l0Y2goYi50YWcpe2Nhc2UgMzpSZyhiKTtGZygpO2JyZWFrO2Nhc2UgNTpMZihiKTticmVhaztjYXNlIDE6SihiLnR5cGUpJiZPZShiKTticmVhaztjYXNlIDQ6SmYoYixiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvKTticmVhaztjYXNlIDEwOlVnKGIsYi5tZW1vaXplZFByb3BzLnZhbHVlKTticmVhaztjYXNlIDEzOmlmKG51bGwhPT1iLm1lbW9pemVkU3RhdGUpe2Q9Yi5jaGlsZC5jaGlsZEV4cGlyYXRpb25UaW1lO2lmKDAhPT1kJiZkPj1jKXJldHVybiBTZyhhLGIsYyk7Yj1KZyhhLGIsYyk7cmV0dXJuIG51bGwhPT1iP2Iuc2libGluZzpudWxsfX1yZXR1cm4gSmcoYSxiLGMpfX1lbHNlIHFnPSExO2IuZXhwaXJhdGlvblRpbWU9MDtzd2l0Y2goYi50YWcpe2Nhc2UgMjpkPVxuYi5lbGVtZW50VHlwZTtudWxsIT09YSYmKGEuYWx0ZXJuYXRlPW51bGwsYi5hbHRlcm5hdGU9bnVsbCxiLmVmZmVjdFRhZ3w9Mik7YT1iLnBlbmRpbmdQcm9wczt2YXIgZT1KZShiLEguY3VycmVudCk7SWcoYixjKTtlPWhnKG51bGwsYixkLGEsZSxjKTtiLmVmZmVjdFRhZ3w9MTtpZihcIm9iamVjdFwiPT09dHlwZW9mIGUmJm51bGwhPT1lJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5yZW5kZXImJnZvaWQgMD09PWUuJCR0eXBlb2Ype2IudGFnPTE7bGcoKTtpZihKKGQpKXt2YXIgZj0hMDtPZShiKX1lbHNlIGY9ITE7Yi5tZW1vaXplZFN0YXRlPW51bGwhPT1lLnN0YXRlJiZ2b2lkIDAhPT1lLnN0YXRlP2Uuc3RhdGU6bnVsbDt2YXIgZz1kLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcztcImZ1bmN0aW9uXCI9PT10eXBlb2YgZyYma2YoYixkLGcsYSk7ZS51cGRhdGVyPXRmO2Iuc3RhdGVOb2RlPWU7ZS5fcmVhY3RJbnRlcm5hbEZpYmVyPWI7eGYoYixkLGEsYyk7Yj1RZyhudWxsLGIsZCwhMCxmLFxuYyl9ZWxzZSBiLnRhZz0wLFMobnVsbCxiLGUsYyksYj1iLmNoaWxkO3JldHVybiBiO2Nhc2UgMTY6ZT1iLmVsZW1lbnRUeXBlO251bGwhPT1hJiYoYS5hbHRlcm5hdGU9bnVsbCxiLmFsdGVybmF0ZT1udWxsLGIuZWZmZWN0VGFnfD0yKTtmPWIucGVuZGluZ1Byb3BzO2E9aGYoZSk7Yi50eXBlPWE7ZT1iLnRhZz1XZShhKTtmPUwoYSxmKTtnPXZvaWQgMDtzd2l0Y2goZSl7Y2FzZSAwOmc9TWcobnVsbCxiLGEsZixjKTticmVhaztjYXNlIDE6Zz1PZyhudWxsLGIsYSxmLGMpO2JyZWFrO2Nhc2UgMTE6Zz1IZyhudWxsLGIsYSxmLGMpO2JyZWFrO2Nhc2UgMTQ6Zz1LZyhudWxsLGIsYSxMKGEudHlwZSxmKSxkLGMpO2JyZWFrO2RlZmF1bHQ6eChcIjMwNlwiLGEsXCJcIil9cmV0dXJuIGc7Y2FzZSAwOnJldHVybiBkPWIudHlwZSxlPWIucGVuZGluZ1Byb3BzLGU9Yi5lbGVtZW50VHlwZT09PWQ/ZTpMKGQsZSksTWcoYSxiLGQsZSxjKTtjYXNlIDE6cmV0dXJuIGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsXG5lPWIuZWxlbWVudFR5cGU9PT1kP2U6TChkLGUpLE9nKGEsYixkLGUsYyk7Y2FzZSAzOlJnKGIpO2Q9Yi51cGRhdGVRdWV1ZTtudWxsPT09ZD94KFwiMjgyXCIpOnZvaWQgMDtlPWIubWVtb2l6ZWRTdGF0ZTtlPW51bGwhPT1lP2UuZWxlbWVudDpudWxsO3lmKGIsZCxiLnBlbmRpbmdQcm9wcyxudWxsLGMpO2Q9Yi5tZW1vaXplZFN0YXRlLmVsZW1lbnQ7aWYoZD09PWUpRmcoKSxiPUpnKGEsYixjKTtlbHNle2U9Yi5zdGF0ZU5vZGU7aWYoZT0obnVsbD09PWF8fG51bGw9PT1hLmNoaWxkKSYmZS5oeWRyYXRlKXlnPUVlKGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8pLHhnPWIsZT16Zz0hMDtlPyhiLmVmZmVjdFRhZ3w9MixiLmNoaWxkPUVmKGIsbnVsbCxkLGMpKTooUyhhLGIsZCxjKSxGZygpKTtiPWIuY2hpbGR9cmV0dXJuIGI7Y2FzZSA1OnJldHVybiBMZihiKSxudWxsPT09YSYmQ2coYiksZD1iLnR5cGUsZT1iLnBlbmRpbmdQcm9wcyxmPW51bGwhPT1hP2EubWVtb2l6ZWRQcm9wczpudWxsLFxuZz1lLmNoaWxkcmVuLHhlKGQsZSk/Zz1udWxsOm51bGwhPT1mJiZ4ZShkLGYpJiYoYi5lZmZlY3RUYWd8PTE2KSxOZyhhLGIpLDEhPT1jJiZiLm1vZGUmMSYmZS5oaWRkZW4/KGIuZXhwaXJhdGlvblRpbWU9Yi5jaGlsZEV4cGlyYXRpb25UaW1lPTEsYj1udWxsKTooUyhhLGIsZyxjKSxiPWIuY2hpbGQpLGI7Y2FzZSA2OnJldHVybiBudWxsPT09YSYmQ2coYiksbnVsbDtjYXNlIDEzOnJldHVybiBTZyhhLGIsYyk7Y2FzZSA0OnJldHVybiBKZihiLGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8pLGQ9Yi5wZW5kaW5nUHJvcHMsbnVsbD09PWE/Yi5jaGlsZD1EZihiLG51bGwsZCxjKTpTKGEsYixkLGMpLGIuY2hpbGQ7Y2FzZSAxMTpyZXR1cm4gZD1iLnR5cGUsZT1iLnBlbmRpbmdQcm9wcyxlPWIuZWxlbWVudFR5cGU9PT1kP2U6TChkLGUpLEhnKGEsYixkLGUsYyk7Y2FzZSA3OnJldHVybiBTKGEsYixiLnBlbmRpbmdQcm9wcyxjKSxiLmNoaWxkO2Nhc2UgODpyZXR1cm4gUyhhLGIsYi5wZW5kaW5nUHJvcHMuY2hpbGRyZW4sXG5jKSxiLmNoaWxkO2Nhc2UgMTI6cmV0dXJuIFMoYSxiLGIucGVuZGluZ1Byb3BzLmNoaWxkcmVuLGMpLGIuY2hpbGQ7Y2FzZSAxMDphOntkPWIudHlwZS5fY29udGV4dDtlPWIucGVuZGluZ1Byb3BzO2c9Yi5tZW1vaXplZFByb3BzO2Y9ZS52YWx1ZTtVZyhiLGYpO2lmKG51bGwhPT1nKXt2YXIgaD1nLnZhbHVlO2Y9YmQoaCxmKT8wOihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZC5fY2FsY3VsYXRlQ2hhbmdlZEJpdHM/ZC5fY2FsY3VsYXRlQ2hhbmdlZEJpdHMoaCxmKToxMDczNzQxODIzKXwwO2lmKDA9PT1mKXtpZihnLmNoaWxkcmVuPT09ZS5jaGlsZHJlbiYmIUkuY3VycmVudCl7Yj1KZyhhLGIsYyk7YnJlYWsgYX19ZWxzZSBmb3IoaD1iLmNoaWxkLG51bGwhPT1oJiYoaC5yZXR1cm49Yik7bnVsbCE9PWg7KXt2YXIgbD1oLmNvbnRleHREZXBlbmRlbmNpZXM7aWYobnVsbCE9PWwpe2c9aC5jaGlsZDtmb3IodmFyIGs9bC5maXJzdDtudWxsIT09azspe2lmKGsuY29udGV4dD09PWQmJjAhPT1cbihrLm9ic2VydmVkQml0cyZmKSl7MT09PWgudGFnJiYoaz1uZihjKSxrLnRhZz1zZixwZihoLGspKTtoLmV4cGlyYXRpb25UaW1lPGMmJihoLmV4cGlyYXRpb25UaW1lPWMpO2s9aC5hbHRlcm5hdGU7bnVsbCE9PWsmJmsuZXhwaXJhdGlvblRpbWU8YyYmKGsuZXhwaXJhdGlvblRpbWU9Yyk7az1jO2Zvcih2YXIgbT1oLnJldHVybjtudWxsIT09bTspe3ZhciBwPW0uYWx0ZXJuYXRlO2lmKG0uY2hpbGRFeHBpcmF0aW9uVGltZTxrKW0uY2hpbGRFeHBpcmF0aW9uVGltZT1rLG51bGwhPT1wJiZwLmNoaWxkRXhwaXJhdGlvblRpbWU8ayYmKHAuY2hpbGRFeHBpcmF0aW9uVGltZT1rKTtlbHNlIGlmKG51bGwhPT1wJiZwLmNoaWxkRXhwaXJhdGlvblRpbWU8aylwLmNoaWxkRXhwaXJhdGlvblRpbWU9aztlbHNlIGJyZWFrO209bS5yZXR1cm59bC5leHBpcmF0aW9uVGltZTxjJiYobC5leHBpcmF0aW9uVGltZT1jKTticmVha31rPWsubmV4dH19ZWxzZSBnPTEwPT09aC50YWc/aC50eXBlPT09Yi50eXBlP1xubnVsbDpoLmNoaWxkOmguY2hpbGQ7aWYobnVsbCE9PWcpZy5yZXR1cm49aDtlbHNlIGZvcihnPWg7bnVsbCE9PWc7KXtpZihnPT09Yil7Zz1udWxsO2JyZWFrfWg9Zy5zaWJsaW5nO2lmKG51bGwhPT1oKXtoLnJldHVybj1nLnJldHVybjtnPWg7YnJlYWt9Zz1nLnJldHVybn1oPWd9fVMoYSxiLGUuY2hpbGRyZW4sYyk7Yj1iLmNoaWxkfXJldHVybiBiO2Nhc2UgOTpyZXR1cm4gZT1iLnR5cGUsZj1iLnBlbmRpbmdQcm9wcyxkPWYuY2hpbGRyZW4sSWcoYixjKSxlPU0oZSxmLnVuc3RhYmxlX29ic2VydmVkQml0cyksZD1kKGUpLGIuZWZmZWN0VGFnfD0xLFMoYSxiLGQsYyksYi5jaGlsZDtjYXNlIDE0OnJldHVybiBlPWIudHlwZSxmPUwoZSxiLnBlbmRpbmdQcm9wcyksZj1MKGUudHlwZSxmKSxLZyhhLGIsZSxmLGQsYyk7Y2FzZSAxNTpyZXR1cm4gTGcoYSxiLGIudHlwZSxiLnBlbmRpbmdQcm9wcyxkLGMpO2Nhc2UgMTc6cmV0dXJuIGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZT1iLmVsZW1lbnRUeXBlPT09XG5kP2U6TChkLGUpLG51bGwhPT1hJiYoYS5hbHRlcm5hdGU9bnVsbCxiLmFsdGVybmF0ZT1udWxsLGIuZWZmZWN0VGFnfD0yKSxiLnRhZz0xLEooZCk/KGE9ITAsT2UoYikpOmE9ITEsSWcoYixjKSx2ZihiLGQsZSxjKSx4ZihiLGQsZSxjKSxRZyhudWxsLGIsZCwhMCxhLGMpfXgoXCIxNTZcIil9dmFyIFZnPXtjdXJyZW50Om51bGx9LFdnPW51bGwsWGc9bnVsbCxZZz1udWxsO2Z1bmN0aW9uIFVnKGEsYil7dmFyIGM9YS50eXBlLl9jb250ZXh0O0coVmcsYy5fY3VycmVudFZhbHVlLGEpO2MuX2N1cnJlbnRWYWx1ZT1ifWZ1bmN0aW9uIFpnKGEpe3ZhciBiPVZnLmN1cnJlbnQ7RihWZyxhKTthLnR5cGUuX2NvbnRleHQuX2N1cnJlbnRWYWx1ZT1ifWZ1bmN0aW9uIElnKGEsYil7V2c9YTtZZz1YZz1udWxsO3ZhciBjPWEuY29udGV4dERlcGVuZGVuY2llcztudWxsIT09YyYmYy5leHBpcmF0aW9uVGltZT49YiYmKHFnPSEwKTthLmNvbnRleHREZXBlbmRlbmNpZXM9bnVsbH1cbmZ1bmN0aW9uIE0oYSxiKXtpZihZZyE9PWEmJiExIT09YiYmMCE9PWIpe2lmKFwibnVtYmVyXCIhPT10eXBlb2YgYnx8MTA3Mzc0MTgyMz09PWIpWWc9YSxiPTEwNzM3NDE4MjM7Yj17Y29udGV4dDphLG9ic2VydmVkQml0czpiLG5leHQ6bnVsbH07bnVsbD09PVhnPyhudWxsPT09V2c/eChcIjMwOFwiKTp2b2lkIDAsWGc9YixXZy5jb250ZXh0RGVwZW5kZW5jaWVzPXtmaXJzdDpiLGV4cGlyYXRpb25UaW1lOjB9KTpYZz1YZy5uZXh0PWJ9cmV0dXJuIGEuX2N1cnJlbnRWYWx1ZX12YXIgJGc9MCxyZj0xLHNmPTIsYWg9MyxQZz0hMTtmdW5jdGlvbiBiaChhKXtyZXR1cm57YmFzZVN0YXRlOmEsZmlyc3RVcGRhdGU6bnVsbCxsYXN0VXBkYXRlOm51bGwsZmlyc3RDYXB0dXJlZFVwZGF0ZTpudWxsLGxhc3RDYXB0dXJlZFVwZGF0ZTpudWxsLGZpcnN0RWZmZWN0Om51bGwsbGFzdEVmZmVjdDpudWxsLGZpcnN0Q2FwdHVyZWRFZmZlY3Q6bnVsbCxsYXN0Q2FwdHVyZWRFZmZlY3Q6bnVsbH19XG5mdW5jdGlvbiBjaChhKXtyZXR1cm57YmFzZVN0YXRlOmEuYmFzZVN0YXRlLGZpcnN0VXBkYXRlOmEuZmlyc3RVcGRhdGUsbGFzdFVwZGF0ZTphLmxhc3RVcGRhdGUsZmlyc3RDYXB0dXJlZFVwZGF0ZTpudWxsLGxhc3RDYXB0dXJlZFVwZGF0ZTpudWxsLGZpcnN0RWZmZWN0Om51bGwsbGFzdEVmZmVjdDpudWxsLGZpcnN0Q2FwdHVyZWRFZmZlY3Q6bnVsbCxsYXN0Q2FwdHVyZWRFZmZlY3Q6bnVsbH19ZnVuY3Rpb24gbmYoYSl7cmV0dXJue2V4cGlyYXRpb25UaW1lOmEsdGFnOiRnLHBheWxvYWQ6bnVsbCxjYWxsYmFjazpudWxsLG5leHQ6bnVsbCxuZXh0RWZmZWN0Om51bGx9fWZ1bmN0aW9uIGRoKGEsYil7bnVsbD09PWEubGFzdFVwZGF0ZT9hLmZpcnN0VXBkYXRlPWEubGFzdFVwZGF0ZT1iOihhLmxhc3RVcGRhdGUubmV4dD1iLGEubGFzdFVwZGF0ZT1iKX1cbmZ1bmN0aW9uIHBmKGEsYil7dmFyIGM9YS5hbHRlcm5hdGU7aWYobnVsbD09PWMpe3ZhciBkPWEudXBkYXRlUXVldWU7dmFyIGU9bnVsbDtudWxsPT09ZCYmKGQ9YS51cGRhdGVRdWV1ZT1iaChhLm1lbW9pemVkU3RhdGUpKX1lbHNlIGQ9YS51cGRhdGVRdWV1ZSxlPWMudXBkYXRlUXVldWUsbnVsbD09PWQ/bnVsbD09PWU/KGQ9YS51cGRhdGVRdWV1ZT1iaChhLm1lbW9pemVkU3RhdGUpLGU9Yy51cGRhdGVRdWV1ZT1iaChjLm1lbW9pemVkU3RhdGUpKTpkPWEudXBkYXRlUXVldWU9Y2goZSk6bnVsbD09PWUmJihlPWMudXBkYXRlUXVldWU9Y2goZCkpO251bGw9PT1lfHxkPT09ZT9kaChkLGIpOm51bGw9PT1kLmxhc3RVcGRhdGV8fG51bGw9PT1lLmxhc3RVcGRhdGU/KGRoKGQsYiksZGgoZSxiKSk6KGRoKGQsYiksZS5sYXN0VXBkYXRlPWIpfVxuZnVuY3Rpb24gZWgoYSxiKXt2YXIgYz1hLnVwZGF0ZVF1ZXVlO2M9bnVsbD09PWM/YS51cGRhdGVRdWV1ZT1iaChhLm1lbW9pemVkU3RhdGUpOmZoKGEsYyk7bnVsbD09PWMubGFzdENhcHR1cmVkVXBkYXRlP2MuZmlyc3RDYXB0dXJlZFVwZGF0ZT1jLmxhc3RDYXB0dXJlZFVwZGF0ZT1iOihjLmxhc3RDYXB0dXJlZFVwZGF0ZS5uZXh0PWIsYy5sYXN0Q2FwdHVyZWRVcGRhdGU9Yil9ZnVuY3Rpb24gZmgoYSxiKXt2YXIgYz1hLmFsdGVybmF0ZTtudWxsIT09YyYmYj09PWMudXBkYXRlUXVldWUmJihiPWEudXBkYXRlUXVldWU9Y2goYikpO3JldHVybiBifVxuZnVuY3Rpb24gZ2goYSxiLGMsZCxlLGYpe3N3aXRjaChjLnRhZyl7Y2FzZSByZjpyZXR1cm4gYT1jLnBheWxvYWQsXCJmdW5jdGlvblwiPT09dHlwZW9mIGE/YS5jYWxsKGYsZCxlKTphO2Nhc2UgYWg6YS5lZmZlY3RUYWc9YS5lZmZlY3RUYWcmLTIwNDl8NjQ7Y2FzZSAkZzphPWMucGF5bG9hZDtlPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBhP2EuY2FsbChmLGQsZSk6YTtpZihudWxsPT09ZXx8dm9pZCAwPT09ZSlicmVhaztyZXR1cm4gbih7fSxkLGUpO2Nhc2Ugc2Y6UGc9ITB9cmV0dXJuIGR9XG5mdW5jdGlvbiB5ZihhLGIsYyxkLGUpe1BnPSExO2I9ZmgoYSxiKTtmb3IodmFyIGY9Yi5iYXNlU3RhdGUsZz1udWxsLGg9MCxsPWIuZmlyc3RVcGRhdGUsaz1mO251bGwhPT1sOyl7dmFyIG09bC5leHBpcmF0aW9uVGltZTttPGU/KG51bGw9PT1nJiYoZz1sLGY9ayksaDxtJiYoaD1tKSk6KGs9Z2goYSxiLGwsayxjLGQpLG51bGwhPT1sLmNhbGxiYWNrJiYoYS5lZmZlY3RUYWd8PTMyLGwubmV4dEVmZmVjdD1udWxsLG51bGw9PT1iLmxhc3RFZmZlY3Q/Yi5maXJzdEVmZmVjdD1iLmxhc3RFZmZlY3Q9bDooYi5sYXN0RWZmZWN0Lm5leHRFZmZlY3Q9bCxiLmxhc3RFZmZlY3Q9bCkpKTtsPWwubmV4dH1tPW51bGw7Zm9yKGw9Yi5maXJzdENhcHR1cmVkVXBkYXRlO251bGwhPT1sOyl7dmFyIHA9bC5leHBpcmF0aW9uVGltZTtwPGU/KG51bGw9PT1tJiYobT1sLG51bGw9PT1nJiYoZj1rKSksaDxwJiYoaD1wKSk6KGs9Z2goYSxiLGwsayxjLGQpLG51bGwhPT1sLmNhbGxiYWNrJiYoYS5lZmZlY3RUYWd8PVxuMzIsbC5uZXh0RWZmZWN0PW51bGwsbnVsbD09PWIubGFzdENhcHR1cmVkRWZmZWN0P2IuZmlyc3RDYXB0dXJlZEVmZmVjdD1iLmxhc3RDYXB0dXJlZEVmZmVjdD1sOihiLmxhc3RDYXB0dXJlZEVmZmVjdC5uZXh0RWZmZWN0PWwsYi5sYXN0Q2FwdHVyZWRFZmZlY3Q9bCkpKTtsPWwubmV4dH1udWxsPT09ZyYmKGIubGFzdFVwZGF0ZT1udWxsKTtudWxsPT09bT9iLmxhc3RDYXB0dXJlZFVwZGF0ZT1udWxsOmEuZWZmZWN0VGFnfD0zMjtudWxsPT09ZyYmbnVsbD09PW0mJihmPWspO2IuYmFzZVN0YXRlPWY7Yi5maXJzdFVwZGF0ZT1nO2IuZmlyc3RDYXB0dXJlZFVwZGF0ZT1tO2EuZXhwaXJhdGlvblRpbWU9aDthLm1lbW9pemVkU3RhdGU9a31cbmZ1bmN0aW9uIGhoKGEsYixjKXtudWxsIT09Yi5maXJzdENhcHR1cmVkVXBkYXRlJiYobnVsbCE9PWIubGFzdFVwZGF0ZSYmKGIubGFzdFVwZGF0ZS5uZXh0PWIuZmlyc3RDYXB0dXJlZFVwZGF0ZSxiLmxhc3RVcGRhdGU9Yi5sYXN0Q2FwdHVyZWRVcGRhdGUpLGIuZmlyc3RDYXB0dXJlZFVwZGF0ZT1iLmxhc3RDYXB0dXJlZFVwZGF0ZT1udWxsKTtpaChiLmZpcnN0RWZmZWN0LGMpO2IuZmlyc3RFZmZlY3Q9Yi5sYXN0RWZmZWN0PW51bGw7aWgoYi5maXJzdENhcHR1cmVkRWZmZWN0LGMpO2IuZmlyc3RDYXB0dXJlZEVmZmVjdD1iLmxhc3RDYXB0dXJlZEVmZmVjdD1udWxsfWZ1bmN0aW9uIGloKGEsYil7Zm9yKDtudWxsIT09YTspe3ZhciBjPWEuY2FsbGJhY2s7aWYobnVsbCE9PWMpe2EuY2FsbGJhY2s9bnVsbDt2YXIgZD1iO1wiZnVuY3Rpb25cIiE9PXR5cGVvZiBjP3goXCIxOTFcIixjKTp2b2lkIDA7Yy5jYWxsKGQpfWE9YS5uZXh0RWZmZWN0fX1cbmZ1bmN0aW9uIGpoKGEsYil7cmV0dXJue3ZhbHVlOmEsc291cmNlOmIsc3RhY2s6amMoYil9fWZ1bmN0aW9uIGtoKGEpe2EuZWZmZWN0VGFnfD00fXZhciBsaD12b2lkIDAsbWg9dm9pZCAwLG5oPXZvaWQgMCxvaD12b2lkIDA7bGg9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9Yi5jaGlsZDtudWxsIT09Yzspe2lmKDU9PT1jLnRhZ3x8Nj09PWMudGFnKWEuYXBwZW5kQ2hpbGQoYy5zdGF0ZU5vZGUpO2Vsc2UgaWYoNCE9PWMudGFnJiZudWxsIT09Yy5jaGlsZCl7Yy5jaGlsZC5yZXR1cm49YztjPWMuY2hpbGQ7Y29udGludWV9aWYoYz09PWIpYnJlYWs7Zm9yKDtudWxsPT09Yy5zaWJsaW5nOyl7aWYobnVsbD09PWMucmV0dXJufHxjLnJldHVybj09PWIpcmV0dXJuO2M9Yy5yZXR1cm59Yy5zaWJsaW5nLnJldHVybj1jLnJldHVybjtjPWMuc2libGluZ319O21oPWZ1bmN0aW9uKCl7fTtcbm5oPWZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGY9YS5tZW1vaXplZFByb3BzO2lmKGYhPT1kKXt2YXIgZz1iLnN0YXRlTm9kZTtJZihOLmN1cnJlbnQpO2E9bnVsbDtzd2l0Y2goYyl7Y2FzZSBcImlucHV0XCI6Zj12YyhnLGYpO2Q9dmMoZyxkKTthPVtdO2JyZWFrO2Nhc2UgXCJvcHRpb25cIjpmPSRkKGcsZik7ZD0kZChnLGQpO2E9W107YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmY9bih7fSxmLHt2YWx1ZTp2b2lkIDB9KTtkPW4oe30sZCx7dmFsdWU6dm9pZCAwfSk7YT1bXTticmVhaztjYXNlIFwidGV4dGFyZWFcIjpmPWJlKGcsZik7ZD1iZShnLGQpO2E9W107YnJlYWs7ZGVmYXVsdDpcImZ1bmN0aW9uXCIhPT10eXBlb2YgZi5vbkNsaWNrJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgZC5vbkNsaWNrJiYoZy5vbmNsaWNrPXRlKX1xZShjLGQpO2c9Yz12b2lkIDA7dmFyIGg9bnVsbDtmb3IoYyBpbiBmKWlmKCFkLmhhc093blByb3BlcnR5KGMpJiZmLmhhc093blByb3BlcnR5KGMpJiZudWxsIT1mW2NdKWlmKFwic3R5bGVcIj09PVxuYyl7dmFyIGw9ZltjXTtmb3IoZyBpbiBsKWwuaGFzT3duUHJvcGVydHkoZykmJihofHwoaD17fSksaFtnXT1cIlwiKX1lbHNlXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiIT09YyYmXCJjaGlsZHJlblwiIT09YyYmXCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmdcIiE9PWMmJlwic3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nXCIhPT1jJiZcImF1dG9Gb2N1c1wiIT09YyYmKHJhLmhhc093blByb3BlcnR5KGMpP2F8fChhPVtdKTooYT1hfHxbXSkucHVzaChjLG51bGwpKTtmb3IoYyBpbiBkKXt2YXIgaz1kW2NdO2w9bnVsbCE9Zj9mW2NdOnZvaWQgMDtpZihkLmhhc093blByb3BlcnR5KGMpJiZrIT09bCYmKG51bGwhPWt8fG51bGwhPWwpKWlmKFwic3R5bGVcIj09PWMpaWYobCl7Zm9yKGcgaW4gbCkhbC5oYXNPd25Qcm9wZXJ0eShnKXx8ayYmay5oYXNPd25Qcm9wZXJ0eShnKXx8KGh8fChoPXt9KSxoW2ddPVwiXCIpO2ZvcihnIGluIGspay5oYXNPd25Qcm9wZXJ0eShnKSYmbFtnXSE9PWtbZ10mJihofHxcbihoPXt9KSxoW2ddPWtbZ10pfWVsc2UgaHx8KGF8fChhPVtdKSxhLnB1c2goYyxoKSksaD1rO2Vsc2VcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCI9PT1jPyhrPWs/ay5fX2h0bWw6dm9pZCAwLGw9bD9sLl9faHRtbDp2b2lkIDAsbnVsbCE9ayYmbCE9PWsmJihhPWF8fFtdKS5wdXNoKGMsXCJcIitrKSk6XCJjaGlsZHJlblwiPT09Yz9sPT09a3x8XCJzdHJpbmdcIiE9PXR5cGVvZiBrJiZcIm51bWJlclwiIT09dHlwZW9mIGt8fChhPWF8fFtdKS5wdXNoKGMsXCJcIitrKTpcInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ1wiIT09YyYmXCJzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmdcIiE9PWMmJihyYS5oYXNPd25Qcm9wZXJ0eShjKT8obnVsbCE9ayYmc2UoZSxjKSxhfHxsPT09a3x8KGE9W10pKTooYT1hfHxbXSkucHVzaChjLGspKX1oJiYoYT1hfHxbXSkucHVzaChcInN0eWxlXCIsaCk7ZT1hOyhiLnVwZGF0ZVF1ZXVlPWUpJiZraChiKX19O29oPWZ1bmN0aW9uKGEsYixjLGQpe2MhPT1kJiZraChiKX07XG52YXIgcGg9XCJmdW5jdGlvblwiPT09dHlwZW9mIFdlYWtTZXQ/V2Vha1NldDpTZXQ7ZnVuY3Rpb24gcWgoYSxiKXt2YXIgYz1iLnNvdXJjZSxkPWIuc3RhY2s7bnVsbD09PWQmJm51bGwhPT1jJiYoZD1qYyhjKSk7bnVsbCE9PWMmJmljKGMudHlwZSk7Yj1iLnZhbHVlO251bGwhPT1hJiYxPT09YS50YWcmJmljKGEudHlwZSk7dHJ5e2NvbnNvbGUuZXJyb3IoYil9Y2F0Y2goZSl7c2V0VGltZW91dChmdW5jdGlvbigpe3Rocm93IGU7fSl9fWZ1bmN0aW9uIHJoKGEpe3ZhciBiPWEucmVmO2lmKG51bGwhPT1iKWlmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBiKXRyeXtiKG51bGwpfWNhdGNoKGMpe3NoKGEsYyl9ZWxzZSBiLmN1cnJlbnQ9bnVsbH1cbmZ1bmN0aW9uIHRoKGEsYixjKXtjPWMudXBkYXRlUXVldWU7Yz1udWxsIT09Yz9jLmxhc3RFZmZlY3Q6bnVsbDtpZihudWxsIT09Yyl7dmFyIGQ9Yz1jLm5leHQ7ZG97aWYoKGQudGFnJmEpIT09TmYpe3ZhciBlPWQuZGVzdHJveTtkLmRlc3Ryb3k9dm9pZCAwO3ZvaWQgMCE9PWUmJmUoKX0oZC50YWcmYikhPT1OZiYmKGU9ZC5jcmVhdGUsZC5kZXN0cm95PWUoKSk7ZD1kLm5leHR9d2hpbGUoZCE9PWMpfX1cbmZ1bmN0aW9uIHVoKGEsYil7Zm9yKHZhciBjPWE7Oyl7aWYoNT09PWMudGFnKXt2YXIgZD1jLnN0YXRlTm9kZTtpZihiKWQuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtlbHNle2Q9Yy5zdGF0ZU5vZGU7dmFyIGU9Yy5tZW1vaXplZFByb3BzLnN0eWxlO2U9dm9pZCAwIT09ZSYmbnVsbCE9PWUmJmUuaGFzT3duUHJvcGVydHkoXCJkaXNwbGF5XCIpP2UuZGlzcGxheTpudWxsO2Quc3R5bGUuZGlzcGxheT1uZShcImRpc3BsYXlcIixlKX19ZWxzZSBpZig2PT09Yy50YWcpYy5zdGF0ZU5vZGUubm9kZVZhbHVlPWI/XCJcIjpjLm1lbW9pemVkUHJvcHM7ZWxzZSBpZigxMz09PWMudGFnJiZudWxsIT09Yy5tZW1vaXplZFN0YXRlKXtkPWMuY2hpbGQuc2libGluZztkLnJldHVybj1jO2M9ZDtjb250aW51ZX1lbHNlIGlmKG51bGwhPT1jLmNoaWxkKXtjLmNoaWxkLnJldHVybj1jO2M9Yy5jaGlsZDtjb250aW51ZX1pZihjPT09YSlicmVhaztmb3IoO251bGw9PT1jLnNpYmxpbmc7KXtpZihudWxsPT09Yy5yZXR1cm58fFxuYy5yZXR1cm49PT1hKXJldHVybjtjPWMucmV0dXJufWMuc2libGluZy5yZXR1cm49Yy5yZXR1cm47Yz1jLnNpYmxpbmd9fVxuZnVuY3Rpb24gdmgoYSl7XCJmdW5jdGlvblwiPT09dHlwZW9mIFJlJiZSZShhKTtzd2l0Y2goYS50YWcpe2Nhc2UgMDpjYXNlIDExOmNhc2UgMTQ6Y2FzZSAxNTp2YXIgYj1hLnVwZGF0ZVF1ZXVlO2lmKG51bGwhPT1iJiYoYj1iLmxhc3RFZmZlY3QsbnVsbCE9PWIpKXt2YXIgYz1iPWIubmV4dDtkb3t2YXIgZD1jLmRlc3Ryb3k7aWYodm9pZCAwIT09ZCl7dmFyIGU9YTt0cnl7ZCgpfWNhdGNoKGYpe3NoKGUsZil9fWM9Yy5uZXh0fXdoaWxlKGMhPT1iKX1icmVhaztjYXNlIDE6cmgoYSk7Yj1hLnN0YXRlTm9kZTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5jb21wb25lbnRXaWxsVW5tb3VudCl0cnl7Yi5wcm9wcz1hLm1lbW9pemVkUHJvcHMsYi5zdGF0ZT1hLm1lbW9pemVkU3RhdGUsYi5jb21wb25lbnRXaWxsVW5tb3VudCgpfWNhdGNoKGYpe3NoKGEsZil9YnJlYWs7Y2FzZSA1OnJoKGEpO2JyZWFrO2Nhc2UgNDp3aChhKX19XG5mdW5jdGlvbiB4aChhKXtyZXR1cm4gNT09PWEudGFnfHwzPT09YS50YWd8fDQ9PT1hLnRhZ31cbmZ1bmN0aW9uIHloKGEpe2E6e2Zvcih2YXIgYj1hLnJldHVybjtudWxsIT09Yjspe2lmKHhoKGIpKXt2YXIgYz1iO2JyZWFrIGF9Yj1iLnJldHVybn14KFwiMTYwXCIpO2M9dm9pZCAwfXZhciBkPWI9dm9pZCAwO3N3aXRjaChjLnRhZyl7Y2FzZSA1OmI9Yy5zdGF0ZU5vZGU7ZD0hMTticmVhaztjYXNlIDM6Yj1jLnN0YXRlTm9kZS5jb250YWluZXJJbmZvO2Q9ITA7YnJlYWs7Y2FzZSA0OmI9Yy5zdGF0ZU5vZGUuY29udGFpbmVySW5mbztkPSEwO2JyZWFrO2RlZmF1bHQ6eChcIjE2MVwiKX1jLmVmZmVjdFRhZyYxNiYmKGtlKGIsXCJcIiksYy5lZmZlY3RUYWcmPS0xNyk7YTpiOmZvcihjPWE7Oyl7Zm9yKDtudWxsPT09Yy5zaWJsaW5nOyl7aWYobnVsbD09PWMucmV0dXJufHx4aChjLnJldHVybikpe2M9bnVsbDticmVhayBhfWM9Yy5yZXR1cm59Yy5zaWJsaW5nLnJldHVybj1jLnJldHVybjtmb3IoYz1jLnNpYmxpbmc7NSE9PWMudGFnJiY2IT09Yy50YWcmJjE4IT09Yy50YWc7KXtpZihjLmVmZmVjdFRhZyZcbjIpY29udGludWUgYjtpZihudWxsPT09Yy5jaGlsZHx8ND09PWMudGFnKWNvbnRpbnVlIGI7ZWxzZSBjLmNoaWxkLnJldHVybj1jLGM9Yy5jaGlsZH1pZighKGMuZWZmZWN0VGFnJjIpKXtjPWMuc3RhdGVOb2RlO2JyZWFrIGF9fWZvcih2YXIgZT1hOzspe2lmKDU9PT1lLnRhZ3x8Nj09PWUudGFnKWlmKGMpaWYoZCl7dmFyIGY9YixnPWUuc3RhdGVOb2RlLGg9Yzs4PT09Zi5ub2RlVHlwZT9mLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGcsaCk6Zi5pbnNlcnRCZWZvcmUoZyxoKX1lbHNlIGIuaW5zZXJ0QmVmb3JlKGUuc3RhdGVOb2RlLGMpO2Vsc2UgZD8oZz1iLGg9ZS5zdGF0ZU5vZGUsOD09PWcubm9kZVR5cGU/KGY9Zy5wYXJlbnROb2RlLGYuaW5zZXJ0QmVmb3JlKGgsZykpOihmPWcsZi5hcHBlbmRDaGlsZChoKSksZz1nLl9yZWFjdFJvb3RDb250YWluZXIsbnVsbCE9PWcmJnZvaWQgMCE9PWd8fG51bGwhPT1mLm9uY2xpY2t8fChmLm9uY2xpY2s9dGUpKTpiLmFwcGVuZENoaWxkKGUuc3RhdGVOb2RlKTtcbmVsc2UgaWYoNCE9PWUudGFnJiZudWxsIT09ZS5jaGlsZCl7ZS5jaGlsZC5yZXR1cm49ZTtlPWUuY2hpbGQ7Y29udGludWV9aWYoZT09PWEpYnJlYWs7Zm9yKDtudWxsPT09ZS5zaWJsaW5nOyl7aWYobnVsbD09PWUucmV0dXJufHxlLnJldHVybj09PWEpcmV0dXJuO2U9ZS5yZXR1cm59ZS5zaWJsaW5nLnJldHVybj1lLnJldHVybjtlPWUuc2libGluZ319XG5mdW5jdGlvbiB3aChhKXtmb3IodmFyIGI9YSxjPSExLGQ9dm9pZCAwLGU9dm9pZCAwOzspe2lmKCFjKXtjPWIucmV0dXJuO2E6Zm9yKDs7KXtudWxsPT09Yz94KFwiMTYwXCIpOnZvaWQgMDtzd2l0Y2goYy50YWcpe2Nhc2UgNTpkPWMuc3RhdGVOb2RlO2U9ITE7YnJlYWsgYTtjYXNlIDM6ZD1jLnN0YXRlTm9kZS5jb250YWluZXJJbmZvO2U9ITA7YnJlYWsgYTtjYXNlIDQ6ZD1jLnN0YXRlTm9kZS5jb250YWluZXJJbmZvO2U9ITA7YnJlYWsgYX1jPWMucmV0dXJufWM9ITB9aWYoNT09PWIudGFnfHw2PT09Yi50YWcpe2E6Zm9yKHZhciBmPWIsZz1mOzspaWYodmgoZyksbnVsbCE9PWcuY2hpbGQmJjQhPT1nLnRhZylnLmNoaWxkLnJldHVybj1nLGc9Zy5jaGlsZDtlbHNle2lmKGc9PT1mKWJyZWFrO2Zvcig7bnVsbD09PWcuc2libGluZzspe2lmKG51bGw9PT1nLnJldHVybnx8Zy5yZXR1cm49PT1mKWJyZWFrIGE7Zz1nLnJldHVybn1nLnNpYmxpbmcucmV0dXJuPWcucmV0dXJuO2c9Zy5zaWJsaW5nfWU/XG4oZj1kLGc9Yi5zdGF0ZU5vZGUsOD09PWYubm9kZVR5cGU/Zi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGcpOmYucmVtb3ZlQ2hpbGQoZykpOmQucmVtb3ZlQ2hpbGQoYi5zdGF0ZU5vZGUpfWVsc2UgaWYoND09PWIudGFnKXtpZihudWxsIT09Yi5jaGlsZCl7ZD1iLnN0YXRlTm9kZS5jb250YWluZXJJbmZvO2U9ITA7Yi5jaGlsZC5yZXR1cm49YjtiPWIuY2hpbGQ7Y29udGludWV9fWVsc2UgaWYodmgoYiksbnVsbCE9PWIuY2hpbGQpe2IuY2hpbGQucmV0dXJuPWI7Yj1iLmNoaWxkO2NvbnRpbnVlfWlmKGI9PT1hKWJyZWFrO2Zvcig7bnVsbD09PWIuc2libGluZzspe2lmKG51bGw9PT1iLnJldHVybnx8Yi5yZXR1cm49PT1hKXJldHVybjtiPWIucmV0dXJuOzQ9PT1iLnRhZyYmKGM9ITEpfWIuc2libGluZy5yZXR1cm49Yi5yZXR1cm47Yj1iLnNpYmxpbmd9fVxuZnVuY3Rpb24gemgoYSxiKXtzd2l0Y2goYi50YWcpe2Nhc2UgMDpjYXNlIDExOmNhc2UgMTQ6Y2FzZSAxNTp0aChQZixRZixiKTticmVhaztjYXNlIDE6YnJlYWs7Y2FzZSA1OnZhciBjPWIuc3RhdGVOb2RlO2lmKG51bGwhPWMpe3ZhciBkPWIubWVtb2l6ZWRQcm9wczthPW51bGwhPT1hP2EubWVtb2l6ZWRQcm9wczpkO3ZhciBlPWIudHlwZSxmPWIudXBkYXRlUXVldWU7Yi51cGRhdGVRdWV1ZT1udWxsO251bGwhPT1mJiZDZShjLGYsZSxhLGQsYil9YnJlYWs7Y2FzZSA2Om51bGw9PT1iLnN0YXRlTm9kZT94KFwiMTYyXCIpOnZvaWQgMDtiLnN0YXRlTm9kZS5ub2RlVmFsdWU9Yi5tZW1vaXplZFByb3BzO2JyZWFrO2Nhc2UgMzpicmVhaztjYXNlIDEyOmJyZWFrO2Nhc2UgMTM6Yz1iLm1lbW9pemVkU3RhdGU7ZD12b2lkIDA7YT1iO251bGw9PT1jP2Q9ITE6KGQ9ITAsYT1iLmNoaWxkLDA9PT1jLnRpbWVkT3V0QXQmJihjLnRpbWVkT3V0QXQ9bGYoKSkpO251bGwhPT1hJiZ1aChhLGQpO2M9XG5iLnVwZGF0ZVF1ZXVlO2lmKG51bGwhPT1jKXtiLnVwZGF0ZVF1ZXVlPW51bGw7dmFyIGc9Yi5zdGF0ZU5vZGU7bnVsbD09PWcmJihnPWIuc3RhdGVOb2RlPW5ldyBwaCk7Yy5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBjPUFoLmJpbmQobnVsbCxiLGEpO2cuaGFzKGEpfHwoZy5hZGQoYSksYS50aGVuKGMsYykpfSl9YnJlYWs7Y2FzZSAxNzpicmVhaztkZWZhdWx0OngoXCIxNjNcIil9fXZhciBCaD1cImZ1bmN0aW9uXCI9PT10eXBlb2YgV2Vha01hcD9XZWFrTWFwOk1hcDtmdW5jdGlvbiBDaChhLGIsYyl7Yz1uZihjKTtjLnRhZz1haDtjLnBheWxvYWQ9e2VsZW1lbnQ6bnVsbH07dmFyIGQ9Yi52YWx1ZTtjLmNhbGxiYWNrPWZ1bmN0aW9uKCl7RGgoZCk7cWgoYSxiKX07cmV0dXJuIGN9XG5mdW5jdGlvbiBFaChhLGIsYyl7Yz1uZihjKTtjLnRhZz1haDt2YXIgZD1hLnR5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkKXt2YXIgZT1iLnZhbHVlO2MucGF5bG9hZD1mdW5jdGlvbigpe3JldHVybiBkKGUpfX12YXIgZj1hLnN0YXRlTm9kZTtudWxsIT09ZiYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGYuY29tcG9uZW50RGlkQ2F0Y2gmJihjLmNhbGxiYWNrPWZ1bmN0aW9uKCl7XCJmdW5jdGlvblwiIT09dHlwZW9mIGQmJihudWxsPT09Rmg/Rmg9bmV3IFNldChbdGhpc10pOkZoLmFkZCh0aGlzKSk7dmFyIGM9Yi52YWx1ZSxlPWIuc3RhY2s7cWgoYSxiKTt0aGlzLmNvbXBvbmVudERpZENhdGNoKGMse2NvbXBvbmVudFN0YWNrOm51bGwhPT1lP2U6XCJcIn0pfSk7cmV0dXJuIGN9XG5mdW5jdGlvbiBHaChhKXtzd2l0Y2goYS50YWcpe2Nhc2UgMTpKKGEudHlwZSkmJktlKGEpO3ZhciBiPWEuZWZmZWN0VGFnO3JldHVybiBiJjIwNDg/KGEuZWZmZWN0VGFnPWImLTIwNDl8NjQsYSk6bnVsbDtjYXNlIDM6cmV0dXJuIEtmKGEpLExlKGEpLGI9YS5lZmZlY3RUYWcsMCE9PShiJjY0KT94KFwiMjg1XCIpOnZvaWQgMCxhLmVmZmVjdFRhZz1iJi0yMDQ5fDY0LGE7Y2FzZSA1OnJldHVybiBNZihhKSxudWxsO2Nhc2UgMTM6cmV0dXJuIGI9YS5lZmZlY3RUYWcsYiYyMDQ4PyhhLmVmZmVjdFRhZz1iJi0yMDQ5fDY0LGEpOm51bGw7Y2FzZSAxODpyZXR1cm4gbnVsbDtjYXNlIDQ6cmV0dXJuIEtmKGEpLG51bGw7Y2FzZSAxMDpyZXR1cm4gWmcoYSksbnVsbDtkZWZhdWx0OnJldHVybiBudWxsfX1cbnZhciBIaD1UYi5SZWFjdEN1cnJlbnREaXNwYXRjaGVyLEloPVRiLlJlYWN0Q3VycmVudE93bmVyLEpoPTEwNzM3NDE4MjIsS2g9ITEsVD1udWxsLExoPW51bGwsVT0wLE1oPS0xLE5oPSExLFY9bnVsbCxPaD0hMSxQaD1udWxsLFFoPW51bGwsUmg9bnVsbCxGaD1udWxsO2Z1bmN0aW9uIFNoKCl7aWYobnVsbCE9PVQpZm9yKHZhciBhPVQucmV0dXJuO251bGwhPT1hOyl7dmFyIGI9YTtzd2l0Y2goYi50YWcpe2Nhc2UgMTp2YXIgYz1iLnR5cGUuY2hpbGRDb250ZXh0VHlwZXM7bnVsbCE9PWMmJnZvaWQgMCE9PWMmJktlKGIpO2JyZWFrO2Nhc2UgMzpLZihiKTtMZShiKTticmVhaztjYXNlIDU6TWYoYik7YnJlYWs7Y2FzZSA0OktmKGIpO2JyZWFrO2Nhc2UgMTA6WmcoYil9YT1hLnJldHVybn1MaD1udWxsO1U9MDtNaD0tMTtOaD0hMTtUPW51bGx9XG5mdW5jdGlvbiBUaCgpe2Zvcig7bnVsbCE9PVY7KXt2YXIgYT1WLmVmZmVjdFRhZzthJjE2JiZrZShWLnN0YXRlTm9kZSxcIlwiKTtpZihhJjEyOCl7dmFyIGI9Vi5hbHRlcm5hdGU7bnVsbCE9PWImJihiPWIucmVmLG51bGwhPT1iJiYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGI/YihudWxsKTpiLmN1cnJlbnQ9bnVsbCkpfXN3aXRjaChhJjE0KXtjYXNlIDI6eWgoVik7Vi5lZmZlY3RUYWcmPS0zO2JyZWFrO2Nhc2UgNjp5aChWKTtWLmVmZmVjdFRhZyY9LTM7emgoVi5hbHRlcm5hdGUsVik7YnJlYWs7Y2FzZSA0OnpoKFYuYWx0ZXJuYXRlLFYpO2JyZWFrO2Nhc2UgODphPVYsd2goYSksYS5yZXR1cm49bnVsbCxhLmNoaWxkPW51bGwsYS5tZW1vaXplZFN0YXRlPW51bGwsYS51cGRhdGVRdWV1ZT1udWxsLGE9YS5hbHRlcm5hdGUsbnVsbCE9PWEmJihhLnJldHVybj1udWxsLGEuY2hpbGQ9bnVsbCxhLm1lbW9pemVkU3RhdGU9bnVsbCxhLnVwZGF0ZVF1ZXVlPW51bGwpfVY9Vi5uZXh0RWZmZWN0fX1cbmZ1bmN0aW9uIFVoKCl7Zm9yKDtudWxsIT09Vjspe2lmKFYuZWZmZWN0VGFnJjI1NilhOnt2YXIgYT1WLmFsdGVybmF0ZSxiPVY7c3dpdGNoKGIudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE1OnRoKE9mLE5mLGIpO2JyZWFrIGE7Y2FzZSAxOmlmKGIuZWZmZWN0VGFnJjI1NiYmbnVsbCE9PWEpe3ZhciBjPWEubWVtb2l6ZWRQcm9wcyxkPWEubWVtb2l6ZWRTdGF0ZTthPWIuc3RhdGVOb2RlO2I9YS5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZShiLmVsZW1lbnRUeXBlPT09Yi50eXBlP2M6TChiLnR5cGUsYyksZCk7YS5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEJlZm9yZVVwZGF0ZT1ifWJyZWFrIGE7Y2FzZSAzOmNhc2UgNTpjYXNlIDY6Y2FzZSA0OmNhc2UgMTc6YnJlYWsgYTtkZWZhdWx0OngoXCIxNjNcIil9fVY9Vi5uZXh0RWZmZWN0fX1cbmZ1bmN0aW9uIFZoKGEsYil7Zm9yKDtudWxsIT09Vjspe3ZhciBjPVYuZWZmZWN0VGFnO2lmKGMmMzYpe3ZhciBkPVYuYWx0ZXJuYXRlLGU9VixmPWI7c3dpdGNoKGUudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE1OnRoKFJmLFNmLGUpO2JyZWFrO2Nhc2UgMTp2YXIgZz1lLnN0YXRlTm9kZTtpZihlLmVmZmVjdFRhZyY0KWlmKG51bGw9PT1kKWcuY29tcG9uZW50RGlkTW91bnQoKTtlbHNle3ZhciBoPWUuZWxlbWVudFR5cGU9PT1lLnR5cGU/ZC5tZW1vaXplZFByb3BzOkwoZS50eXBlLGQubWVtb2l6ZWRQcm9wcyk7Zy5jb21wb25lbnREaWRVcGRhdGUoaCxkLm1lbW9pemVkU3RhdGUsZy5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEJlZm9yZVVwZGF0ZSl9ZD1lLnVwZGF0ZVF1ZXVlO251bGwhPT1kJiZoaChlLGQsZyxmKTticmVhaztjYXNlIDM6ZD1lLnVwZGF0ZVF1ZXVlO2lmKG51bGwhPT1kKXtnPW51bGw7aWYobnVsbCE9PWUuY2hpbGQpc3dpdGNoKGUuY2hpbGQudGFnKXtjYXNlIDU6Zz1cbmUuY2hpbGQuc3RhdGVOb2RlO2JyZWFrO2Nhc2UgMTpnPWUuY2hpbGQuc3RhdGVOb2RlfWhoKGUsZCxnLGYpfWJyZWFrO2Nhc2UgNTpmPWUuc3RhdGVOb2RlO251bGw9PT1kJiZlLmVmZmVjdFRhZyY0JiZ3ZShlLnR5cGUsZS5tZW1vaXplZFByb3BzKSYmZi5mb2N1cygpO2JyZWFrO2Nhc2UgNjpicmVhaztjYXNlIDQ6YnJlYWs7Y2FzZSAxMjpicmVhaztjYXNlIDEzOmJyZWFrO2Nhc2UgMTc6YnJlYWs7ZGVmYXVsdDp4KFwiMTYzXCIpfX1jJjEyOCYmKGU9Vi5yZWYsbnVsbCE9PWUmJihmPVYuc3RhdGVOb2RlLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlP2UoZik6ZS5jdXJyZW50PWYpKTtjJjUxMiYmKFBoPWEpO1Y9Vi5uZXh0RWZmZWN0fX1cbmZ1bmN0aW9uIFdoKGEsYil7Umg9UWg9UGg9bnVsbDt2YXIgYz1XO1c9ITA7ZG97aWYoYi5lZmZlY3RUYWcmNTEyKXt2YXIgZD0hMSxlPXZvaWQgMDt0cnl7dmFyIGY9Yjt0aChVZixOZixmKTt0aChOZixUZixmKX1jYXRjaChnKXtkPSEwLGU9Z31kJiZzaChiLGUpfWI9Yi5uZXh0RWZmZWN0fXdoaWxlKG51bGwhPT1iKTtXPWM7Yz1hLmV4cGlyYXRpb25UaW1lOzAhPT1jJiZYaChhLGMpO1h8fFd8fFloKDEwNzM3NDE4MjMsITEpfWZ1bmN0aW9uIG9mKCl7bnVsbCE9PVFoJiZCZShRaCk7bnVsbCE9PVJoJiZSaCgpfVxuZnVuY3Rpb24gWmgoYSxiKXtPaD1LaD0hMDthLmN1cnJlbnQ9PT1iP3goXCIxNzdcIik6dm9pZCAwO3ZhciBjPWEucGVuZGluZ0NvbW1pdEV4cGlyYXRpb25UaW1lOzA9PT1jP3goXCIyNjFcIik6dm9pZCAwO2EucGVuZGluZ0NvbW1pdEV4cGlyYXRpb25UaW1lPTA7dmFyIGQ9Yi5leHBpcmF0aW9uVGltZSxlPWIuY2hpbGRFeHBpcmF0aW9uVGltZTtlZihhLGU+ZD9lOmQpO0loLmN1cnJlbnQ9bnVsbDtkPXZvaWQgMDsxPGIuZWZmZWN0VGFnP251bGwhPT1iLmxhc3RFZmZlY3Q/KGIubGFzdEVmZmVjdC5uZXh0RWZmZWN0PWIsZD1iLmZpcnN0RWZmZWN0KTpkPWI6ZD1iLmZpcnN0RWZmZWN0O3VlPUJkO3ZlPVBkKCk7QmQ9ITE7Zm9yKFY9ZDtudWxsIT09Vjspe2U9ITE7dmFyIGY9dm9pZCAwO3RyeXtVaCgpfWNhdGNoKGgpe2U9ITAsZj1ofWUmJihudWxsPT09Vj94KFwiMTc4XCIpOnZvaWQgMCxzaChWLGYpLG51bGwhPT1WJiYoVj1WLm5leHRFZmZlY3QpKX1mb3IoVj1kO251bGwhPT1WOyl7ZT0hMTtcbmY9dm9pZCAwO3RyeXtUaCgpfWNhdGNoKGgpe2U9ITAsZj1ofWUmJihudWxsPT09Vj94KFwiMTc4XCIpOnZvaWQgMCxzaChWLGYpLG51bGwhPT1WJiYoVj1WLm5leHRFZmZlY3QpKX1RZCh2ZSk7dmU9bnVsbDtCZD0hIXVlO3VlPW51bGw7YS5jdXJyZW50PWI7Zm9yKFY9ZDtudWxsIT09Vjspe2U9ITE7Zj12b2lkIDA7dHJ5e1ZoKGEsYyl9Y2F0Y2goaCl7ZT0hMCxmPWh9ZSYmKG51bGw9PT1WP3goXCIxNzhcIik6dm9pZCAwLHNoKFYsZiksbnVsbCE9PVYmJihWPVYubmV4dEVmZmVjdCkpfWlmKG51bGwhPT1kJiZudWxsIT09UGgpe3ZhciBnPVdoLmJpbmQobnVsbCxhLGQpO1FoPXIudW5zdGFibGVfcnVuV2l0aFByaW9yaXR5KHIudW5zdGFibGVfTm9ybWFsUHJpb3JpdHksZnVuY3Rpb24oKXtyZXR1cm4gQWUoZyl9KTtSaD1nfUtoPU9oPSExO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBRZSYmUWUoYi5zdGF0ZU5vZGUpO2M9Yi5leHBpcmF0aW9uVGltZTtiPWIuY2hpbGRFeHBpcmF0aW9uVGltZTtiPVxuYj5jP2I6YzswPT09YiYmKEZoPW51bGwpOyRoKGEsYil9XG5mdW5jdGlvbiBhaShhKXtmb3IoOzspe3ZhciBiPWEuYWx0ZXJuYXRlLGM9YS5yZXR1cm4sZD1hLnNpYmxpbmc7aWYoMD09PShhLmVmZmVjdFRhZyYxMDI0KSl7VD1hO2E6e3ZhciBlPWI7Yj1hO3ZhciBmPVU7dmFyIGc9Yi5wZW5kaW5nUHJvcHM7c3dpdGNoKGIudGFnKXtjYXNlIDI6YnJlYWs7Y2FzZSAxNjpicmVhaztjYXNlIDE1OmNhc2UgMDpicmVhaztjYXNlIDE6SihiLnR5cGUpJiZLZShiKTticmVhaztjYXNlIDM6S2YoYik7TGUoYik7Zz1iLnN0YXRlTm9kZTtnLnBlbmRpbmdDb250ZXh0JiYoZy5jb250ZXh0PWcucGVuZGluZ0NvbnRleHQsZy5wZW5kaW5nQ29udGV4dD1udWxsKTtpZihudWxsPT09ZXx8bnVsbD09PWUuY2hpbGQpRWcoYiksYi5lZmZlY3RUYWcmPS0zO21oKGIpO2JyZWFrO2Nhc2UgNTpNZihiKTt2YXIgaD1JZihIZi5jdXJyZW50KTtmPWIudHlwZTtpZihudWxsIT09ZSYmbnVsbCE9Yi5zdGF0ZU5vZGUpbmgoZSxiLGYsZyxoKSxlLnJlZiE9PWIucmVmJiYoYi5lZmZlY3RUYWd8PVxuMTI4KTtlbHNlIGlmKGcpe3ZhciBsPUlmKE4uY3VycmVudCk7aWYoRWcoYikpe2c9YjtlPWcuc3RhdGVOb2RlO3ZhciBrPWcudHlwZSxtPWcubWVtb2l6ZWRQcm9wcyxwPWg7ZVtGYV09ZztlW0dhXT1tO2Y9dm9pZCAwO2g9aztzd2l0Y2goaCl7Y2FzZSBcImlmcmFtZVwiOmNhc2UgXCJvYmplY3RcIjpFKFwibG9hZFwiLGUpO2JyZWFrO2Nhc2UgXCJ2aWRlb1wiOmNhc2UgXCJhdWRpb1wiOmZvcihrPTA7azxhYi5sZW5ndGg7aysrKUUoYWJba10sZSk7YnJlYWs7Y2FzZSBcInNvdXJjZVwiOkUoXCJlcnJvclwiLGUpO2JyZWFrO2Nhc2UgXCJpbWdcIjpjYXNlIFwiaW1hZ2VcIjpjYXNlIFwibGlua1wiOkUoXCJlcnJvclwiLGUpO0UoXCJsb2FkXCIsZSk7YnJlYWs7Y2FzZSBcImZvcm1cIjpFKFwicmVzZXRcIixlKTtFKFwic3VibWl0XCIsZSk7YnJlYWs7Y2FzZSBcImRldGFpbHNcIjpFKFwidG9nZ2xlXCIsZSk7YnJlYWs7Y2FzZSBcImlucHV0XCI6d2MoZSxtKTtFKFwiaW52YWxpZFwiLGUpO3NlKHAsXCJvbkNoYW5nZVwiKTticmVhaztjYXNlIFwic2VsZWN0XCI6ZS5fd3JhcHBlclN0YXRlPVxue3dhc011bHRpcGxlOiEhbS5tdWx0aXBsZX07RShcImludmFsaWRcIixlKTtzZShwLFwib25DaGFuZ2VcIik7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6Y2UoZSxtKSxFKFwiaW52YWxpZFwiLGUpLHNlKHAsXCJvbkNoYW5nZVwiKX1xZShoLG0pO2s9bnVsbDtmb3IoZiBpbiBtKW0uaGFzT3duUHJvcGVydHkoZikmJihsPW1bZl0sXCJjaGlsZHJlblwiPT09Zj9cInN0cmluZ1wiPT09dHlwZW9mIGw/ZS50ZXh0Q29udGVudCE9PWwmJihrPVtcImNoaWxkcmVuXCIsbF0pOlwibnVtYmVyXCI9PT10eXBlb2YgbCYmZS50ZXh0Q29udGVudCE9PVwiXCIrbCYmKGs9W1wiY2hpbGRyZW5cIixcIlwiK2xdKTpyYS5oYXNPd25Qcm9wZXJ0eShmKSYmbnVsbCE9bCYmc2UocCxmKSk7c3dpdGNoKGgpe2Nhc2UgXCJpbnB1dFwiOlJiKGUpO0FjKGUsbSwhMCk7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6UmIoZSk7ZWUoZSxtKTticmVhaztjYXNlIFwic2VsZWN0XCI6Y2FzZSBcIm9wdGlvblwiOmJyZWFrO2RlZmF1bHQ6XCJmdW5jdGlvblwiPT09dHlwZW9mIG0ub25DbGljayYmXG4oZS5vbmNsaWNrPXRlKX1mPWs7Zy51cGRhdGVRdWV1ZT1mO2c9bnVsbCE9PWY/ITA6ITE7ZyYma2goYil9ZWxzZXttPWI7cD1mO2U9ZztrPTk9PT1oLm5vZGVUeXBlP2g6aC5vd25lckRvY3VtZW50O2w9PT1mZS5odG1sJiYobD1nZShwKSk7bD09PWZlLmh0bWw/XCJzY3JpcHRcIj09PXA/KGU9ay5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGUuaW5uZXJIVE1MPVwiPHNjcmlwdD5cXHgzYy9zY3JpcHQ+XCIsaz1lLnJlbW92ZUNoaWxkKGUuZmlyc3RDaGlsZCkpOlwic3RyaW5nXCI9PT10eXBlb2YgZS5pcz9rPWsuY3JlYXRlRWxlbWVudChwLHtpczplLmlzfSk6KGs9ay5jcmVhdGVFbGVtZW50KHApLFwic2VsZWN0XCI9PT1wJiYocD1rLGUubXVsdGlwbGU/cC5tdWx0aXBsZT0hMDplLnNpemUmJihwLnNpemU9ZS5zaXplKSkpOms9ay5jcmVhdGVFbGVtZW50TlMobCxwKTtlPWs7ZVtGYV09bTtlW0dhXT1nO2xoKGUsYiwhMSwhMSk7cD1lO2s9ZjttPWc7dmFyIHQ9aCxBPXJlKGssbSk7c3dpdGNoKGspe2Nhc2UgXCJpZnJhbWVcIjpjYXNlIFwib2JqZWN0XCI6RShcImxvYWRcIixcbnApO2g9bTticmVhaztjYXNlIFwidmlkZW9cIjpjYXNlIFwiYXVkaW9cIjpmb3IoaD0wO2g8YWIubGVuZ3RoO2grKylFKGFiW2hdLHApO2g9bTticmVhaztjYXNlIFwic291cmNlXCI6RShcImVycm9yXCIscCk7aD1tO2JyZWFrO2Nhc2UgXCJpbWdcIjpjYXNlIFwiaW1hZ2VcIjpjYXNlIFwibGlua1wiOkUoXCJlcnJvclwiLHApO0UoXCJsb2FkXCIscCk7aD1tO2JyZWFrO2Nhc2UgXCJmb3JtXCI6RShcInJlc2V0XCIscCk7RShcInN1Ym1pdFwiLHApO2g9bTticmVhaztjYXNlIFwiZGV0YWlsc1wiOkUoXCJ0b2dnbGVcIixwKTtoPW07YnJlYWs7Y2FzZSBcImlucHV0XCI6d2MocCxtKTtoPXZjKHAsbSk7RShcImludmFsaWRcIixwKTtzZSh0LFwib25DaGFuZ2VcIik7YnJlYWs7Y2FzZSBcIm9wdGlvblwiOmg9JGQocCxtKTticmVhaztjYXNlIFwic2VsZWN0XCI6cC5fd3JhcHBlclN0YXRlPXt3YXNNdWx0aXBsZTohIW0ubXVsdGlwbGV9O2g9bih7fSxtLHt2YWx1ZTp2b2lkIDB9KTtFKFwiaW52YWxpZFwiLHApO3NlKHQsXCJvbkNoYW5nZVwiKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjpjZShwLFxubSk7aD1iZShwLG0pO0UoXCJpbnZhbGlkXCIscCk7c2UodCxcIm9uQ2hhbmdlXCIpO2JyZWFrO2RlZmF1bHQ6aD1tfXFlKGssaCk7bD12b2lkIDA7dmFyIHY9ayxSPXAsdT1oO2ZvcihsIGluIHUpaWYodS5oYXNPd25Qcm9wZXJ0eShsKSl7dmFyIHE9dVtsXTtcInN0eWxlXCI9PT1sP29lKFIscSk6XCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiPT09bD8ocT1xP3EuX19odG1sOnZvaWQgMCxudWxsIT1xJiZqZShSLHEpKTpcImNoaWxkcmVuXCI9PT1sP1wic3RyaW5nXCI9PT10eXBlb2YgcT8oXCJ0ZXh0YXJlYVwiIT09dnx8XCJcIiE9PXEpJiZrZShSLHEpOlwibnVtYmVyXCI9PT10eXBlb2YgcSYma2UoUixcIlwiK3EpOlwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nXCIhPT1sJiZcInN1cHByZXNzSHlkcmF0aW9uV2FybmluZ1wiIT09bCYmXCJhdXRvRm9jdXNcIiE9PWwmJihyYS5oYXNPd25Qcm9wZXJ0eShsKT9udWxsIT1xJiZzZSh0LGwpOm51bGwhPXEmJnRjKFIsbCxxLEEpKX1zd2l0Y2goayl7Y2FzZSBcImlucHV0XCI6UmIocCk7XG5BYyhwLG0sITEpO2JyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOlJiKHApO2VlKHAsbSk7YnJlYWs7Y2FzZSBcIm9wdGlvblwiOm51bGwhPW0udmFsdWUmJnAuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIlwiK3VjKG0udmFsdWUpKTticmVhaztjYXNlIFwic2VsZWN0XCI6aD1wO2gubXVsdGlwbGU9ISFtLm11bHRpcGxlO3A9bS52YWx1ZTtudWxsIT1wP2FlKGgsISFtLm11bHRpcGxlLHAsITEpOm51bGwhPW0uZGVmYXVsdFZhbHVlJiZhZShoLCEhbS5tdWx0aXBsZSxtLmRlZmF1bHRWYWx1ZSwhMCk7YnJlYWs7ZGVmYXVsdDpcImZ1bmN0aW9uXCI9PT10eXBlb2YgaC5vbkNsaWNrJiYocC5vbmNsaWNrPXRlKX0oZz13ZShmLGcpKSYma2goYik7Yi5zdGF0ZU5vZGU9ZX1udWxsIT09Yi5yZWYmJihiLmVmZmVjdFRhZ3w9MTI4KX1lbHNlIG51bGw9PT1iLnN0YXRlTm9kZT94KFwiMTY2XCIpOnZvaWQgMDticmVhaztjYXNlIDY6ZSYmbnVsbCE9Yi5zdGF0ZU5vZGU/b2goZSxiLGUubWVtb2l6ZWRQcm9wcyxnKTooXCJzdHJpbmdcIiE9PVxudHlwZW9mIGcmJihudWxsPT09Yi5zdGF0ZU5vZGU/eChcIjE2NlwiKTp2b2lkIDApLGU9SWYoSGYuY3VycmVudCksSWYoTi5jdXJyZW50KSxFZyhiKT8oZz1iLGY9Zy5zdGF0ZU5vZGUsZT1nLm1lbW9pemVkUHJvcHMsZltGYV09ZywoZz1mLm5vZGVWYWx1ZSE9PWUpJiZraChiKSk6KGY9YixnPSg5PT09ZS5ub2RlVHlwZT9lOmUub3duZXJEb2N1bWVudCkuY3JlYXRlVGV4dE5vZGUoZyksZ1tGYV09YixmLnN0YXRlTm9kZT1nKSk7YnJlYWs7Y2FzZSAxMTpicmVhaztjYXNlIDEzOmc9Yi5tZW1vaXplZFN0YXRlO2lmKDAhPT0oYi5lZmZlY3RUYWcmNjQpKXtiLmV4cGlyYXRpb25UaW1lPWY7VD1iO2JyZWFrIGF9Zz1udWxsIT09ZztmPW51bGwhPT1lJiZudWxsIT09ZS5tZW1vaXplZFN0YXRlO251bGwhPT1lJiYhZyYmZiYmKGU9ZS5jaGlsZC5zaWJsaW5nLG51bGwhPT1lJiYoaD1iLmZpcnN0RWZmZWN0LG51bGwhPT1oPyhiLmZpcnN0RWZmZWN0PWUsZS5uZXh0RWZmZWN0PWgpOihiLmZpcnN0RWZmZWN0PVxuYi5sYXN0RWZmZWN0PWUsZS5uZXh0RWZmZWN0PW51bGwpLGUuZWZmZWN0VGFnPTgpKTtpZihnfHxmKWIuZWZmZWN0VGFnfD00O2JyZWFrO2Nhc2UgNzpicmVhaztjYXNlIDg6YnJlYWs7Y2FzZSAxMjpicmVhaztjYXNlIDQ6S2YoYik7bWgoYik7YnJlYWs7Y2FzZSAxMDpaZyhiKTticmVhaztjYXNlIDk6YnJlYWs7Y2FzZSAxNDpicmVhaztjYXNlIDE3OkooYi50eXBlKSYmS2UoYik7YnJlYWs7Y2FzZSAxODpicmVhaztkZWZhdWx0OngoXCIxNTZcIil9VD1udWxsfWI9YTtpZigxPT09VXx8MSE9PWIuY2hpbGRFeHBpcmF0aW9uVGltZSl7Zz0wO2ZvcihmPWIuY2hpbGQ7bnVsbCE9PWY7KWU9Zi5leHBpcmF0aW9uVGltZSxoPWYuY2hpbGRFeHBpcmF0aW9uVGltZSxlPmcmJihnPWUpLGg+ZyYmKGc9aCksZj1mLnNpYmxpbmc7Yi5jaGlsZEV4cGlyYXRpb25UaW1lPWd9aWYobnVsbCE9PVQpcmV0dXJuIFQ7bnVsbCE9PWMmJjA9PT0oYy5lZmZlY3RUYWcmMTAyNCkmJihudWxsPT09Yy5maXJzdEVmZmVjdCYmXG4oYy5maXJzdEVmZmVjdD1hLmZpcnN0RWZmZWN0KSxudWxsIT09YS5sYXN0RWZmZWN0JiYobnVsbCE9PWMubGFzdEVmZmVjdCYmKGMubGFzdEVmZmVjdC5uZXh0RWZmZWN0PWEuZmlyc3RFZmZlY3QpLGMubGFzdEVmZmVjdD1hLmxhc3RFZmZlY3QpLDE8YS5lZmZlY3RUYWcmJihudWxsIT09Yy5sYXN0RWZmZWN0P2MubGFzdEVmZmVjdC5uZXh0RWZmZWN0PWE6Yy5maXJzdEVmZmVjdD1hLGMubGFzdEVmZmVjdD1hKSl9ZWxzZXthPUdoKGEsVSk7aWYobnVsbCE9PWEpcmV0dXJuIGEuZWZmZWN0VGFnJj0xMDIzLGE7bnVsbCE9PWMmJihjLmZpcnN0RWZmZWN0PWMubGFzdEVmZmVjdD1udWxsLGMuZWZmZWN0VGFnfD0xMDI0KX1pZihudWxsIT09ZClyZXR1cm4gZDtpZihudWxsIT09YylhPWM7ZWxzZSBicmVha31yZXR1cm4gbnVsbH1cbmZ1bmN0aW9uIGJpKGEpe3ZhciBiPVRnKGEuYWx0ZXJuYXRlLGEsVSk7YS5tZW1vaXplZFByb3BzPWEucGVuZGluZ1Byb3BzO251bGw9PT1iJiYoYj1haShhKSk7SWguY3VycmVudD1udWxsO3JldHVybiBifVxuZnVuY3Rpb24gY2koYSxiKXtLaD94KFwiMjQzXCIpOnZvaWQgMDtvZigpO0toPSEwO3ZhciBjPUhoLmN1cnJlbnQ7SGguY3VycmVudD1rZzt2YXIgZD1hLm5leHRFeHBpcmF0aW9uVGltZVRvV29ya09uO2lmKGQhPT1VfHxhIT09TGh8fG51bGw9PT1UKVNoKCksTGg9YSxVPWQsVD1YZShMaC5jdXJyZW50LG51bGwsVSksYS5wZW5kaW5nQ29tbWl0RXhwaXJhdGlvblRpbWU9MDt2YXIgZT0hMTtkb3t0cnl7aWYoYilmb3IoO251bGwhPT1UJiYhZGkoKTspVD1iaShUKTtlbHNlIGZvcig7bnVsbCE9PVQ7KVQ9YmkoVCl9Y2F0Y2godSl7aWYoWWc9WGc9V2c9bnVsbCxsZygpLG51bGw9PT1UKWU9ITAsRGgodSk7ZWxzZXtudWxsPT09VD94KFwiMjcxXCIpOnZvaWQgMDt2YXIgZj1ULGc9Zi5yZXR1cm47aWYobnVsbD09PWcpZT0hMCxEaCh1KTtlbHNle2E6e3ZhciBoPWEsbD1nLGs9ZixtPXU7Zz1VO2suZWZmZWN0VGFnfD0xMDI0O2suZmlyc3RFZmZlY3Q9ay5sYXN0RWZmZWN0PW51bGw7aWYobnVsbCE9PVxubSYmXCJvYmplY3RcIj09PXR5cGVvZiBtJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgbS50aGVuKXt2YXIgcD1tO209bDt2YXIgdD0tMSxBPS0xO2Rve2lmKDEzPT09bS50YWcpe3ZhciB2PW0uYWx0ZXJuYXRlO2lmKG51bGwhPT12JiYodj12Lm1lbW9pemVkU3RhdGUsbnVsbCE9PXYpKXtBPTEwKigxMDczNzQxODIyLXYudGltZWRPdXRBdCk7YnJlYWt9dj1tLnBlbmRpbmdQcm9wcy5tYXhEdXJhdGlvbjtpZihcIm51bWJlclwiPT09dHlwZW9mIHYpaWYoMD49dil0PTA7ZWxzZSBpZigtMT09PXR8fHY8dCl0PXZ9bT1tLnJldHVybn13aGlsZShudWxsIT09bSk7bT1sO2Rve2lmKHY9MTM9PT1tLnRhZyl2PXZvaWQgMD09PW0ubWVtb2l6ZWRQcm9wcy5mYWxsYmFjaz8hMTpudWxsPT09bS5tZW1vaXplZFN0YXRlO2lmKHYpe2w9bS51cGRhdGVRdWV1ZTtudWxsPT09bD8obD1uZXcgU2V0LGwuYWRkKHApLG0udXBkYXRlUXVldWU9bCk6bC5hZGQocCk7aWYoMD09PShtLm1vZGUmMSkpe20uZWZmZWN0VGFnfD1cbjY0O2suZWZmZWN0VGFnJj0tMTk1NzsxPT09ay50YWcmJihudWxsPT09ay5hbHRlcm5hdGU/ay50YWc9MTc6KGc9bmYoMTA3Mzc0MTgyMyksZy50YWc9c2YscGYoayxnKSkpO2suZXhwaXJhdGlvblRpbWU9MTA3Mzc0MTgyMzticmVhayBhfWs9aDtsPWc7dmFyIFI9ay5waW5nQ2FjaGU7bnVsbD09PVI/KFI9ay5waW5nQ2FjaGU9bmV3IEJoLHY9bmV3IFNldCxSLnNldChwLHYpKToodj1SLmdldChwKSx2b2lkIDA9PT12JiYodj1uZXcgU2V0LFIuc2V0KHAsdikpKTt2LmhhcyhsKXx8KHYuYWRkKGwpLGs9ZWkuYmluZChudWxsLGsscCxsKSxwLnRoZW4oayxrKSk7LTE9PT10P2g9MTA3Mzc0MTgyMzooLTE9PT1BJiYoQT0xMCooMTA3Mzc0MTgyMi1nZihoLGcpKS01RTMpLGg9QSt0KTswPD1oJiZNaDxoJiYoTWg9aCk7bS5lZmZlY3RUYWd8PTIwNDg7bS5leHBpcmF0aW9uVGltZT1nO2JyZWFrIGF9bT1tLnJldHVybn13aGlsZShudWxsIT09bSk7bT1FcnJvcigoaWMoay50eXBlKXx8XCJBIFJlYWN0IGNvbXBvbmVudFwiKStcblwiIHN1c3BlbmRlZCB3aGlsZSByZW5kZXJpbmcsIGJ1dCBubyBmYWxsYmFjayBVSSB3YXMgc3BlY2lmaWVkLlxcblxcbkFkZCBhIDxTdXNwZW5zZSBmYWxsYmFjaz0uLi4+IGNvbXBvbmVudCBoaWdoZXIgaW4gdGhlIHRyZWUgdG8gcHJvdmlkZSBhIGxvYWRpbmcgaW5kaWNhdG9yIG9yIHBsYWNlaG9sZGVyIHRvIGRpc3BsYXkuXCIramMoaykpfU5oPSEwO209amgobSxrKTtoPWw7ZG97c3dpdGNoKGgudGFnKXtjYXNlIDM6aC5lZmZlY3RUYWd8PTIwNDg7aC5leHBpcmF0aW9uVGltZT1nO2c9Q2goaCxtLGcpO2VoKGgsZyk7YnJlYWsgYTtjYXNlIDE6aWYodD1tLEE9aC50eXBlLGs9aC5zdGF0ZU5vZGUsMD09PShoLmVmZmVjdFRhZyY2NCkmJihcImZ1bmN0aW9uXCI9PT10eXBlb2YgQS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3J8fG51bGwhPT1rJiZcImZ1bmN0aW9uXCI9PT10eXBlb2Ygay5jb21wb25lbnREaWRDYXRjaCYmKG51bGw9PT1GaHx8IUZoLmhhcyhrKSkpKXtoLmVmZmVjdFRhZ3w9MjA0ODtcbmguZXhwaXJhdGlvblRpbWU9ZztnPUVoKGgsdCxnKTtlaChoLGcpO2JyZWFrIGF9fWg9aC5yZXR1cm59d2hpbGUobnVsbCE9PWgpfVQ9YWkoZik7Y29udGludWV9fX1icmVha313aGlsZSgxKTtLaD0hMTtIaC5jdXJyZW50PWM7WWc9WGc9V2c9bnVsbDtsZygpO2lmKGUpTGg9bnVsbCxhLmZpbmlzaGVkV29yaz1udWxsO2Vsc2UgaWYobnVsbCE9PVQpYS5maW5pc2hlZFdvcms9bnVsbDtlbHNle2M9YS5jdXJyZW50LmFsdGVybmF0ZTtudWxsPT09Yz94KFwiMjgxXCIpOnZvaWQgMDtMaD1udWxsO2lmKE5oKXtlPWEubGF0ZXN0UGVuZGluZ1RpbWU7Zj1hLmxhdGVzdFN1c3BlbmRlZFRpbWU7Zz1hLmxhdGVzdFBpbmdlZFRpbWU7aWYoMCE9PWUmJmU8ZHx8MCE9PWYmJmY8ZHx8MCE9PWcmJmc8ZCl7ZmYoYSxkKTtmaShhLGMsZCxhLmV4cGlyYXRpb25UaW1lLC0xKTtyZXR1cm59aWYoIWEuZGlkRXJyb3ImJmIpe2EuZGlkRXJyb3I9ITA7ZD1hLm5leHRFeHBpcmF0aW9uVGltZVRvV29ya09uPWQ7XG5iPWEuZXhwaXJhdGlvblRpbWU9MTA3Mzc0MTgyMztmaShhLGMsZCxiLC0xKTtyZXR1cm59fWImJi0xIT09TWg/KGZmKGEsZCksYj0xMCooMTA3Mzc0MTgyMi1nZihhLGQpKSxiPE1oJiYoTWg9YiksYj0xMCooMTA3Mzc0MTgyMi1sZigpKSxiPU1oLWIsZmkoYSxjLGQsYS5leHBpcmF0aW9uVGltZSwwPmI/MDpiKSk6KGEucGVuZGluZ0NvbW1pdEV4cGlyYXRpb25UaW1lPWQsYS5maW5pc2hlZFdvcms9Yyl9fVxuZnVuY3Rpb24gc2goYSxiKXtmb3IodmFyIGM9YS5yZXR1cm47bnVsbCE9PWM7KXtzd2l0Y2goYy50YWcpe2Nhc2UgMTp2YXIgZD1jLnN0YXRlTm9kZTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYy50eXBlLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcnx8XCJmdW5jdGlvblwiPT09dHlwZW9mIGQuY29tcG9uZW50RGlkQ2F0Y2gmJihudWxsPT09Rmh8fCFGaC5oYXMoZCkpKXthPWpoKGIsYSk7YT1FaChjLGEsMTA3Mzc0MTgyMyk7cGYoYyxhKTtxZihjLDEwNzM3NDE4MjMpO3JldHVybn1icmVhaztjYXNlIDM6YT1qaChiLGEpO2E9Q2goYyxhLDEwNzM3NDE4MjMpO3BmKGMsYSk7cWYoYywxMDczNzQxODIzKTtyZXR1cm59Yz1jLnJldHVybn0zPT09YS50YWcmJihjPWpoKGIsYSksYz1DaChhLGMsMTA3Mzc0MTgyMykscGYoYSxjKSxxZihhLDEwNzM3NDE4MjMpKX1cbmZ1bmN0aW9uIG1mKGEsYil7dmFyIGM9ci51bnN0YWJsZV9nZXRDdXJyZW50UHJpb3JpdHlMZXZlbCgpLGQ9dm9pZCAwO2lmKDA9PT0oYi5tb2RlJjEpKWQ9MTA3Mzc0MTgyMztlbHNlIGlmKEtoJiYhT2gpZD1VO2Vsc2V7c3dpdGNoKGMpe2Nhc2Ugci51bnN0YWJsZV9JbW1lZGlhdGVQcmlvcml0eTpkPTEwNzM3NDE4MjM7YnJlYWs7Y2FzZSByLnVuc3RhYmxlX1VzZXJCbG9ja2luZ1ByaW9yaXR5OmQ9MTA3Mzc0MTgyMi0xMCooKCgxMDczNzQxODIyLWErMTUpLzEwfDApKzEpO2JyZWFrO2Nhc2Ugci51bnN0YWJsZV9Ob3JtYWxQcmlvcml0eTpkPTEwNzM3NDE4MjItMjUqKCgoMTA3Mzc0MTgyMi1hKzUwMCkvMjV8MCkrMSk7YnJlYWs7Y2FzZSByLnVuc3RhYmxlX0xvd1ByaW9yaXR5OmNhc2Ugci51bnN0YWJsZV9JZGxlUHJpb3JpdHk6ZD0xO2JyZWFrO2RlZmF1bHQ6eChcIjMxM1wiKX1udWxsIT09TGgmJmQ9PT1VJiYtLWR9Yz09PXIudW5zdGFibGVfVXNlckJsb2NraW5nUHJpb3JpdHkmJlxuKDA9PT1naXx8ZDxnaSkmJihnaT1kKTtyZXR1cm4gZH1mdW5jdGlvbiBlaShhLGIsYyl7dmFyIGQ9YS5waW5nQ2FjaGU7bnVsbCE9PWQmJmQuZGVsZXRlKGIpO2lmKG51bGwhPT1MaCYmVT09PWMpTGg9bnVsbDtlbHNlIGlmKGI9YS5lYXJsaWVzdFN1c3BlbmRlZFRpbWUsZD1hLmxhdGVzdFN1c3BlbmRlZFRpbWUsMCE9PWImJmM8PWImJmM+PWQpe2EuZGlkRXJyb3I9ITE7Yj1hLmxhdGVzdFBpbmdlZFRpbWU7aWYoMD09PWJ8fGI+YylhLmxhdGVzdFBpbmdlZFRpbWU9YztkZihjLGEpO2M9YS5leHBpcmF0aW9uVGltZTswIT09YyYmWGgoYSxjKX19ZnVuY3Rpb24gQWgoYSxiKXt2YXIgYz1hLnN0YXRlTm9kZTtudWxsIT09YyYmYy5kZWxldGUoYik7Yj1sZigpO2I9bWYoYixhKTthPWhpKGEsYik7bnVsbCE9PWEmJihjZihhLGIpLGI9YS5leHBpcmF0aW9uVGltZSwwIT09YiYmWGgoYSxiKSl9XG5mdW5jdGlvbiBoaShhLGIpe2EuZXhwaXJhdGlvblRpbWU8YiYmKGEuZXhwaXJhdGlvblRpbWU9Yik7dmFyIGM9YS5hbHRlcm5hdGU7bnVsbCE9PWMmJmMuZXhwaXJhdGlvblRpbWU8YiYmKGMuZXhwaXJhdGlvblRpbWU9Yik7dmFyIGQ9YS5yZXR1cm4sZT1udWxsO2lmKG51bGw9PT1kJiYzPT09YS50YWcpZT1hLnN0YXRlTm9kZTtlbHNlIGZvcig7bnVsbCE9PWQ7KXtjPWQuYWx0ZXJuYXRlO2QuY2hpbGRFeHBpcmF0aW9uVGltZTxiJiYoZC5jaGlsZEV4cGlyYXRpb25UaW1lPWIpO251bGwhPT1jJiZjLmNoaWxkRXhwaXJhdGlvblRpbWU8YiYmKGMuY2hpbGRFeHBpcmF0aW9uVGltZT1iKTtpZihudWxsPT09ZC5yZXR1cm4mJjM9PT1kLnRhZyl7ZT1kLnN0YXRlTm9kZTticmVha31kPWQucmV0dXJufXJldHVybiBlfVxuZnVuY3Rpb24gcWYoYSxiKXthPWhpKGEsYik7bnVsbCE9PWEmJighS2gmJjAhPT1VJiZiPlUmJlNoKCksY2YoYSxiKSxLaCYmIU9oJiZMaD09PWF8fFhoKGEsYS5leHBpcmF0aW9uVGltZSksaWk+amkmJihpaT0wLHgoXCIxODVcIikpKX1mdW5jdGlvbiBraShhLGIsYyxkLGUpe3JldHVybiByLnVuc3RhYmxlX3J1bldpdGhQcmlvcml0eShyLnVuc3RhYmxlX0ltbWVkaWF0ZVByaW9yaXR5LGZ1bmN0aW9uKCl7cmV0dXJuIGEoYixjLGQsZSl9KX12YXIgbGk9bnVsbCxZPW51bGwsbWk9MCxuaT12b2lkIDAsVz0hMSxvaT1udWxsLFo9MCxnaT0wLHBpPSExLHFpPW51bGwsWD0hMSxyaT0hMSxzaT1udWxsLHRpPXIudW5zdGFibGVfbm93KCksdWk9MTA3Mzc0MTgyMi0odGkvMTB8MCksdmk9dWksamk9NTAsaWk9MCx3aT1udWxsO2Z1bmN0aW9uIHhpKCl7dWk9MTA3Mzc0MTgyMi0oKHIudW5zdGFibGVfbm93KCktdGkpLzEwfDApfVxuZnVuY3Rpb24geWkoYSxiKXtpZigwIT09bWkpe2lmKGI8bWkpcmV0dXJuO251bGwhPT1uaSYmci51bnN0YWJsZV9jYW5jZWxDYWxsYmFjayhuaSl9bWk9YjthPXIudW5zdGFibGVfbm93KCktdGk7bmk9ci51bnN0YWJsZV9zY2hlZHVsZUNhbGxiYWNrKHppLHt0aW1lb3V0OjEwKigxMDczNzQxODIyLWIpLWF9KX1mdW5jdGlvbiBmaShhLGIsYyxkLGUpe2EuZXhwaXJhdGlvblRpbWU9ZDswIT09ZXx8ZGkoKT8wPGUmJihhLnRpbWVvdXRIYW5kbGU9eWUoQWkuYmluZChudWxsLGEsYixjKSxlKSk6KGEucGVuZGluZ0NvbW1pdEV4cGlyYXRpb25UaW1lPWMsYS5maW5pc2hlZFdvcms9Yil9ZnVuY3Rpb24gQWkoYSxiLGMpe2EucGVuZGluZ0NvbW1pdEV4cGlyYXRpb25UaW1lPWM7YS5maW5pc2hlZFdvcms9Yjt4aSgpO3ZpPXVpO0JpKGEsYyl9ZnVuY3Rpb24gJGgoYSxiKXthLmV4cGlyYXRpb25UaW1lPWI7YS5maW5pc2hlZFdvcms9bnVsbH1cbmZ1bmN0aW9uIGxmKCl7aWYoVylyZXR1cm4gdmk7Q2koKTtpZigwPT09Wnx8MT09PVopeGkoKSx2aT11aTtyZXR1cm4gdml9ZnVuY3Rpb24gWGgoYSxiKXtudWxsPT09YS5uZXh0U2NoZWR1bGVkUm9vdD8oYS5leHBpcmF0aW9uVGltZT1iLG51bGw9PT1ZPyhsaT1ZPWEsYS5uZXh0U2NoZWR1bGVkUm9vdD1hKTooWT1ZLm5leHRTY2hlZHVsZWRSb290PWEsWS5uZXh0U2NoZWR1bGVkUm9vdD1saSkpOmI+YS5leHBpcmF0aW9uVGltZSYmKGEuZXhwaXJhdGlvblRpbWU9Yik7V3x8KFg/cmkmJihvaT1hLFo9MTA3Mzc0MTgyMyxEaShhLDEwNzM3NDE4MjMsITEpKToxMDczNzQxODIzPT09Yj9ZaCgxMDczNzQxODIzLCExKTp5aShhLGIpKX1cbmZ1bmN0aW9uIENpKCl7dmFyIGE9MCxiPW51bGw7aWYobnVsbCE9PVkpZm9yKHZhciBjPVksZD1saTtudWxsIT09ZDspe3ZhciBlPWQuZXhwaXJhdGlvblRpbWU7aWYoMD09PWUpe251bGw9PT1jfHxudWxsPT09WT94KFwiMjQ0XCIpOnZvaWQgMDtpZihkPT09ZC5uZXh0U2NoZWR1bGVkUm9vdCl7bGk9WT1kLm5leHRTY2hlZHVsZWRSb290PW51bGw7YnJlYWt9ZWxzZSBpZihkPT09bGkpbGk9ZT1kLm5leHRTY2hlZHVsZWRSb290LFkubmV4dFNjaGVkdWxlZFJvb3Q9ZSxkLm5leHRTY2hlZHVsZWRSb290PW51bGw7ZWxzZSBpZihkPT09WSl7WT1jO1kubmV4dFNjaGVkdWxlZFJvb3Q9bGk7ZC5uZXh0U2NoZWR1bGVkUm9vdD1udWxsO2JyZWFrfWVsc2UgYy5uZXh0U2NoZWR1bGVkUm9vdD1kLm5leHRTY2hlZHVsZWRSb290LGQubmV4dFNjaGVkdWxlZFJvb3Q9bnVsbDtkPWMubmV4dFNjaGVkdWxlZFJvb3R9ZWxzZXtlPmEmJihhPWUsYj1kKTtpZihkPT09WSlicmVhaztpZigxMDczNzQxODIzPT09XG5hKWJyZWFrO2M9ZDtkPWQubmV4dFNjaGVkdWxlZFJvb3R9fW9pPWI7Wj1hfXZhciBFaT0hMTtmdW5jdGlvbiBkaSgpe3JldHVybiBFaT8hMDpyLnVuc3RhYmxlX3Nob3VsZFlpZWxkKCk/RWk9ITA6ITF9ZnVuY3Rpb24gemkoKXt0cnl7aWYoIWRpKCkmJm51bGwhPT1saSl7eGkoKTt2YXIgYT1saTtkb3t2YXIgYj1hLmV4cGlyYXRpb25UaW1lOzAhPT1iJiZ1aTw9YiYmKGEubmV4dEV4cGlyYXRpb25UaW1lVG9Xb3JrT249dWkpO2E9YS5uZXh0U2NoZWR1bGVkUm9vdH13aGlsZShhIT09bGkpfVloKDAsITApfWZpbmFsbHl7RWk9ITF9fVxuZnVuY3Rpb24gWWgoYSxiKXtDaSgpO2lmKGIpZm9yKHhpKCksdmk9dWk7bnVsbCE9PW9pJiYwIT09WiYmYTw9WiYmIShFaSYmdWk+Wik7KURpKG9pLFosdWk+WiksQ2koKSx4aSgpLHZpPXVpO2Vsc2UgZm9yKDtudWxsIT09b2kmJjAhPT1aJiZhPD1aOylEaShvaSxaLCExKSxDaSgpO2ImJihtaT0wLG5pPW51bGwpOzAhPT1aJiZ5aShvaSxaKTtpaT0wO3dpPW51bGw7aWYobnVsbCE9PXNpKWZvcihhPXNpLHNpPW51bGwsYj0wO2I8YS5sZW5ndGg7YisrKXt2YXIgYz1hW2JdO3RyeXtjLl9vbkNvbXBsZXRlKCl9Y2F0Y2goZCl7cGl8fChwaT0hMCxxaT1kKX19aWYocGkpdGhyb3cgYT1xaSxxaT1udWxsLHBpPSExLGE7fWZ1bmN0aW9uIEJpKGEsYil7Vz94KFwiMjUzXCIpOnZvaWQgMDtvaT1hO1o9YjtEaShhLGIsITEpO1loKDEwNzM3NDE4MjMsITEpfVxuZnVuY3Rpb24gRGkoYSxiLGMpe1c/eChcIjI0NVwiKTp2b2lkIDA7Vz0hMDtpZihjKXt2YXIgZD1hLmZpbmlzaGVkV29yaztudWxsIT09ZD9GaShhLGQsYik6KGEuZmluaXNoZWRXb3JrPW51bGwsZD1hLnRpbWVvdXRIYW5kbGUsLTEhPT1kJiYoYS50aW1lb3V0SGFuZGxlPS0xLHplKGQpKSxjaShhLGMpLGQ9YS5maW5pc2hlZFdvcmssbnVsbCE9PWQmJihkaSgpP2EuZmluaXNoZWRXb3JrPWQ6RmkoYSxkLGIpKSl9ZWxzZSBkPWEuZmluaXNoZWRXb3JrLG51bGwhPT1kP0ZpKGEsZCxiKTooYS5maW5pc2hlZFdvcms9bnVsbCxkPWEudGltZW91dEhhbmRsZSwtMSE9PWQmJihhLnRpbWVvdXRIYW5kbGU9LTEsemUoZCkpLGNpKGEsYyksZD1hLmZpbmlzaGVkV29yayxudWxsIT09ZCYmRmkoYSxkLGIpKTtXPSExfVxuZnVuY3Rpb24gRmkoYSxiLGMpe3ZhciBkPWEuZmlyc3RCYXRjaDtpZihudWxsIT09ZCYmZC5fZXhwaXJhdGlvblRpbWU+PWMmJihudWxsPT09c2k/c2k9W2RdOnNpLnB1c2goZCksZC5fZGVmZXIpKXthLmZpbmlzaGVkV29yaz1iO2EuZXhwaXJhdGlvblRpbWU9MDtyZXR1cm59YS5maW5pc2hlZFdvcms9bnVsbDthPT09d2k/aWkrKzood2k9YSxpaT0wKTtyLnVuc3RhYmxlX3J1bldpdGhQcmlvcml0eShyLnVuc3RhYmxlX0ltbWVkaWF0ZVByaW9yaXR5LGZ1bmN0aW9uKCl7WmgoYSxiKX0pfWZ1bmN0aW9uIERoKGEpe251bGw9PT1vaT94KFwiMjQ2XCIpOnZvaWQgMDtvaS5leHBpcmF0aW9uVGltZT0wO3BpfHwocGk9ITAscWk9YSl9ZnVuY3Rpb24gR2koYSxiKXt2YXIgYz1YO1g9ITA7dHJ5e3JldHVybiBhKGIpfWZpbmFsbHl7KFg9Yyl8fFd8fFloKDEwNzM3NDE4MjMsITEpfX1cbmZ1bmN0aW9uIEhpKGEsYil7aWYoWCYmIXJpKXtyaT0hMDt0cnl7cmV0dXJuIGEoYil9ZmluYWxseXtyaT0hMX19cmV0dXJuIGEoYil9ZnVuY3Rpb24gSWkoYSxiLGMpe1h8fFd8fDA9PT1naXx8KFloKGdpLCExKSxnaT0wKTt2YXIgZD1YO1g9ITA7dHJ5e3JldHVybiByLnVuc3RhYmxlX3J1bldpdGhQcmlvcml0eShyLnVuc3RhYmxlX1VzZXJCbG9ja2luZ1ByaW9yaXR5LGZ1bmN0aW9uKCl7cmV0dXJuIGEoYixjKX0pfWZpbmFsbHl7KFg9ZCl8fFd8fFloKDEwNzM3NDE4MjMsITEpfX1cbmZ1bmN0aW9uIEppKGEsYixjLGQsZSl7dmFyIGY9Yi5jdXJyZW50O2E6aWYoYyl7Yz1jLl9yZWFjdEludGVybmFsRmliZXI7Yjp7Mj09PWVkKGMpJiYxPT09Yy50YWc/dm9pZCAwOngoXCIxNzBcIik7dmFyIGc9Yztkb3tzd2l0Y2goZy50YWcpe2Nhc2UgMzpnPWcuc3RhdGVOb2RlLmNvbnRleHQ7YnJlYWsgYjtjYXNlIDE6aWYoSihnLnR5cGUpKXtnPWcuc3RhdGVOb2RlLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWVyZ2VkQ2hpbGRDb250ZXh0O2JyZWFrIGJ9fWc9Zy5yZXR1cm59d2hpbGUobnVsbCE9PWcpO3goXCIxNzFcIik7Zz12b2lkIDB9aWYoMT09PWMudGFnKXt2YXIgaD1jLnR5cGU7aWYoSihoKSl7Yz1OZShjLGgsZyk7YnJlYWsgYX19Yz1nfWVsc2UgYz1IZTtudWxsPT09Yi5jb250ZXh0P2IuY29udGV4dD1jOmIucGVuZGluZ0NvbnRleHQ9YztiPWU7ZT1uZihkKTtlLnBheWxvYWQ9e2VsZW1lbnQ6YX07Yj12b2lkIDA9PT1iP251bGw6YjtudWxsIT09YiYmKGUuY2FsbGJhY2s9Yik7XG5vZigpO3BmKGYsZSk7cWYoZixkKTtyZXR1cm4gZH1mdW5jdGlvbiBLaShhLGIsYyxkKXt2YXIgZT1iLmN1cnJlbnQsZj1sZigpO2U9bWYoZixlKTtyZXR1cm4gSmkoYSxiLGMsZSxkKX1mdW5jdGlvbiBMaShhKXthPWEuY3VycmVudDtpZighYS5jaGlsZClyZXR1cm4gbnVsbDtzd2l0Y2goYS5jaGlsZC50YWcpe2Nhc2UgNTpyZXR1cm4gYS5jaGlsZC5zdGF0ZU5vZGU7ZGVmYXVsdDpyZXR1cm4gYS5jaGlsZC5zdGF0ZU5vZGV9fWZ1bmN0aW9uIE1pKGEsYixjKXt2YXIgZD0zPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1szXT9hcmd1bWVudHNbM106bnVsbDtyZXR1cm57JCR0eXBlb2Y6V2Isa2V5Om51bGw9PWQ/bnVsbDpcIlwiK2QsY2hpbGRyZW46YSxjb250YWluZXJJbmZvOmIsaW1wbGVtZW50YXRpb246Y319XG5BYj1mdW5jdGlvbihhLGIsYyl7c3dpdGNoKGIpe2Nhc2UgXCJpbnB1dFwiOnljKGEsYyk7Yj1jLm5hbWU7aWYoXCJyYWRpb1wiPT09Yy50eXBlJiZudWxsIT1iKXtmb3IoYz1hO2MucGFyZW50Tm9kZTspYz1jLnBhcmVudE5vZGU7Yz1jLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFtuYW1lPVwiK0pTT04uc3RyaW5naWZ5KFwiXCIrYikrJ11bdHlwZT1cInJhZGlvXCJdJyk7Zm9yKGI9MDtiPGMubGVuZ3RoO2IrKyl7dmFyIGQ9Y1tiXTtpZihkIT09YSYmZC5mb3JtPT09YS5mb3JtKXt2YXIgZT1LYShkKTtlP3ZvaWQgMDp4KFwiOTBcIik7U2IoZCk7eWMoZCxlKX19fWJyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOmRlKGEsYyk7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmI9Yy52YWx1ZSxudWxsIT1iJiZhZShhLCEhYy5tdWx0aXBsZSxiLCExKX19O1xuZnVuY3Rpb24gTmkoYSl7dmFyIGI9MTA3Mzc0MTgyMi0yNSooKCgxMDczNzQxODIyLWxmKCkrNTAwKS8yNXwwKSsxKTtiPj1KaCYmKGI9SmgtMSk7dGhpcy5fZXhwaXJhdGlvblRpbWU9Smg9Yjt0aGlzLl9yb290PWE7dGhpcy5fY2FsbGJhY2tzPXRoaXMuX25leHQ9bnVsbDt0aGlzLl9oYXNDaGlsZHJlbj10aGlzLl9kaWRDb21wbGV0ZT0hMTt0aGlzLl9jaGlsZHJlbj1udWxsO3RoaXMuX2RlZmVyPSEwfU5pLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24oYSl7dGhpcy5fZGVmZXI/dm9pZCAwOngoXCIyNTBcIik7dGhpcy5faGFzQ2hpbGRyZW49ITA7dGhpcy5fY2hpbGRyZW49YTt2YXIgYj10aGlzLl9yb290Ll9pbnRlcm5hbFJvb3QsYz10aGlzLl9leHBpcmF0aW9uVGltZSxkPW5ldyBPaTtKaShhLGIsbnVsbCxjLGQuX29uQ29tbWl0KTtyZXR1cm4gZH07XG5OaS5wcm90b3R5cGUudGhlbj1mdW5jdGlvbihhKXtpZih0aGlzLl9kaWRDb21wbGV0ZSlhKCk7ZWxzZXt2YXIgYj10aGlzLl9jYWxsYmFja3M7bnVsbD09PWImJihiPXRoaXMuX2NhbGxiYWNrcz1bXSk7Yi5wdXNoKGEpfX07XG5OaS5wcm90b3R5cGUuY29tbWl0PWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5fcm9vdC5faW50ZXJuYWxSb290LGI9YS5maXJzdEJhdGNoO3RoaXMuX2RlZmVyJiZudWxsIT09Yj92b2lkIDA6eChcIjI1MVwiKTtpZih0aGlzLl9oYXNDaGlsZHJlbil7dmFyIGM9dGhpcy5fZXhwaXJhdGlvblRpbWU7aWYoYiE9PXRoaXMpe3RoaXMuX2hhc0NoaWxkcmVuJiYoYz10aGlzLl9leHBpcmF0aW9uVGltZT1iLl9leHBpcmF0aW9uVGltZSx0aGlzLnJlbmRlcih0aGlzLl9jaGlsZHJlbikpO2Zvcih2YXIgZD1udWxsLGU9YjtlIT09dGhpczspZD1lLGU9ZS5fbmV4dDtudWxsPT09ZD94KFwiMjUxXCIpOnZvaWQgMDtkLl9uZXh0PWUuX25leHQ7dGhpcy5fbmV4dD1iO2EuZmlyc3RCYXRjaD10aGlzfXRoaXMuX2RlZmVyPSExO0JpKGEsYyk7Yj10aGlzLl9uZXh0O3RoaXMuX25leHQ9bnVsbDtiPWEuZmlyc3RCYXRjaD1iO251bGwhPT1iJiZiLl9oYXNDaGlsZHJlbiYmYi5yZW5kZXIoYi5fY2hpbGRyZW4pfWVsc2UgdGhpcy5fbmV4dD1cbm51bGwsdGhpcy5fZGVmZXI9ITF9O05pLnByb3RvdHlwZS5fb25Db21wbGV0ZT1mdW5jdGlvbigpe2lmKCF0aGlzLl9kaWRDb21wbGV0ZSl7dGhpcy5fZGlkQ29tcGxldGU9ITA7dmFyIGE9dGhpcy5fY2FsbGJhY2tzO2lmKG51bGwhPT1hKWZvcih2YXIgYj0wO2I8YS5sZW5ndGg7YisrKSgwLGFbYl0pKCl9fTtmdW5jdGlvbiBPaSgpe3RoaXMuX2NhbGxiYWNrcz1udWxsO3RoaXMuX2RpZENvbW1pdD0hMTt0aGlzLl9vbkNvbW1pdD10aGlzLl9vbkNvbW1pdC5iaW5kKHRoaXMpfU9pLnByb3RvdHlwZS50aGVuPWZ1bmN0aW9uKGEpe2lmKHRoaXMuX2RpZENvbW1pdClhKCk7ZWxzZXt2YXIgYj10aGlzLl9jYWxsYmFja3M7bnVsbD09PWImJihiPXRoaXMuX2NhbGxiYWNrcz1bXSk7Yi5wdXNoKGEpfX07XG5PaS5wcm90b3R5cGUuX29uQ29tbWl0PWZ1bmN0aW9uKCl7aWYoIXRoaXMuX2RpZENvbW1pdCl7dGhpcy5fZGlkQ29tbWl0PSEwO3ZhciBhPXRoaXMuX2NhbGxiYWNrcztpZihudWxsIT09YSlmb3IodmFyIGI9MDtiPGEubGVuZ3RoO2IrKyl7dmFyIGM9YVtiXTtcImZ1bmN0aW9uXCIhPT10eXBlb2YgYz94KFwiMTkxXCIsYyk6dm9pZCAwO2MoKX19fTtcbmZ1bmN0aW9uIFBpKGEsYixjKXtiPUsoMyxudWxsLG51bGwsYj8zOjApO2E9e2N1cnJlbnQ6Yixjb250YWluZXJJbmZvOmEscGVuZGluZ0NoaWxkcmVuOm51bGwscGluZ0NhY2hlOm51bGwsZWFybGllc3RQZW5kaW5nVGltZTowLGxhdGVzdFBlbmRpbmdUaW1lOjAsZWFybGllc3RTdXNwZW5kZWRUaW1lOjAsbGF0ZXN0U3VzcGVuZGVkVGltZTowLGxhdGVzdFBpbmdlZFRpbWU6MCxkaWRFcnJvcjohMSxwZW5kaW5nQ29tbWl0RXhwaXJhdGlvblRpbWU6MCxmaW5pc2hlZFdvcms6bnVsbCx0aW1lb3V0SGFuZGxlOi0xLGNvbnRleHQ6bnVsbCxwZW5kaW5nQ29udGV4dDpudWxsLGh5ZHJhdGU6YyxuZXh0RXhwaXJhdGlvblRpbWVUb1dvcmtPbjowLGV4cGlyYXRpb25UaW1lOjAsZmlyc3RCYXRjaDpudWxsLG5leHRTY2hlZHVsZWRSb290Om51bGx9O3RoaXMuX2ludGVybmFsUm9vdD1iLnN0YXRlTm9kZT1hfVxuUGkucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuX2ludGVybmFsUm9vdCxkPW5ldyBPaTtiPXZvaWQgMD09PWI/bnVsbDpiO251bGwhPT1iJiZkLnRoZW4oYik7S2koYSxjLG51bGwsZC5fb25Db21taXQpO3JldHVybiBkfTtQaS5wcm90b3R5cGUudW5tb3VudD1mdW5jdGlvbihhKXt2YXIgYj10aGlzLl9pbnRlcm5hbFJvb3QsYz1uZXcgT2k7YT12b2lkIDA9PT1hP251bGw6YTtudWxsIT09YSYmYy50aGVuKGEpO0tpKG51bGwsYixudWxsLGMuX29uQ29tbWl0KTtyZXR1cm4gY307UGkucHJvdG90eXBlLmxlZ2FjeV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcj1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9dGhpcy5faW50ZXJuYWxSb290LGU9bmV3IE9pO2M9dm9pZCAwPT09Yz9udWxsOmM7bnVsbCE9PWMmJmUudGhlbihjKTtLaShiLGQsYSxlLl9vbkNvbW1pdCk7cmV0dXJuIGV9O1xuUGkucHJvdG90eXBlLmNyZWF0ZUJhdGNoPWZ1bmN0aW9uKCl7dmFyIGE9bmV3IE5pKHRoaXMpLGI9YS5fZXhwaXJhdGlvblRpbWUsYz10aGlzLl9pbnRlcm5hbFJvb3QsZD1jLmZpcnN0QmF0Y2g7aWYobnVsbD09PWQpYy5maXJzdEJhdGNoPWEsYS5fbmV4dD1udWxsO2Vsc2V7Zm9yKGM9bnVsbDtudWxsIT09ZCYmZC5fZXhwaXJhdGlvblRpbWU+PWI7KWM9ZCxkPWQuX25leHQ7YS5fbmV4dD1kO251bGwhPT1jJiYoYy5fbmV4dD1hKX1yZXR1cm4gYX07ZnVuY3Rpb24gUWkoYSl7cmV0dXJuISghYXx8MSE9PWEubm9kZVR5cGUmJjkhPT1hLm5vZGVUeXBlJiYxMSE9PWEubm9kZVR5cGUmJig4IT09YS5ub2RlVHlwZXx8XCIgcmVhY3QtbW91bnQtcG9pbnQtdW5zdGFibGUgXCIhPT1hLm5vZGVWYWx1ZSkpfUdiPUdpO0hiPUlpO0liPWZ1bmN0aW9uKCl7V3x8MD09PWdpfHwoWWgoZ2ksITEpLGdpPTApfTtcbmZ1bmN0aW9uIFJpKGEsYil7Ynx8KGI9YT85PT09YS5ub2RlVHlwZT9hLmRvY3VtZW50RWxlbWVudDphLmZpcnN0Q2hpbGQ6bnVsbCxiPSEoIWJ8fDEhPT1iLm5vZGVUeXBlfHwhYi5oYXNBdHRyaWJ1dGUoXCJkYXRhLXJlYWN0cm9vdFwiKSkpO2lmKCFiKWZvcih2YXIgYztjPWEubGFzdENoaWxkOylhLnJlbW92ZUNoaWxkKGMpO3JldHVybiBuZXcgUGkoYSwhMSxiKX1cbmZ1bmN0aW9uIFNpKGEsYixjLGQsZSl7dmFyIGY9Yy5fcmVhY3RSb290Q29udGFpbmVyO2lmKGYpe2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlKXt2YXIgZz1lO2U9ZnVuY3Rpb24oKXt2YXIgYT1MaShmLl9pbnRlcm5hbFJvb3QpO2cuY2FsbChhKX19bnVsbCE9YT9mLmxlZ2FjeV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcihhLGIsZSk6Zi5yZW5kZXIoYixlKX1lbHNle2Y9Yy5fcmVhY3RSb290Q29udGFpbmVyPVJpKGMsZCk7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGUpe3ZhciBoPWU7ZT1mdW5jdGlvbigpe3ZhciBhPUxpKGYuX2ludGVybmFsUm9vdCk7aC5jYWxsKGEpfX1IaShmdW5jdGlvbigpe251bGwhPWE/Zi5sZWdhY3lfcmVuZGVyU3VidHJlZUludG9Db250YWluZXIoYSxiLGUpOmYucmVuZGVyKGIsZSl9KX1yZXR1cm4gTGkoZi5faW50ZXJuYWxSb290KX1cbmZ1bmN0aW9uIFRpKGEsYil7dmFyIGM9Mjxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOm51bGw7UWkoYik/dm9pZCAwOngoXCIyMDBcIik7cmV0dXJuIE1pKGEsYixudWxsLGMpfVxudmFyIFZpPXtjcmVhdGVQb3J0YWw6VGksZmluZERPTU5vZGU6ZnVuY3Rpb24oYSl7aWYobnVsbD09YSlyZXR1cm4gbnVsbDtpZigxPT09YS5ub2RlVHlwZSlyZXR1cm4gYTt2YXIgYj1hLl9yZWFjdEludGVybmFsRmliZXI7dm9pZCAwPT09YiYmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhLnJlbmRlcj94KFwiMTg4XCIpOngoXCIyNjhcIixPYmplY3Qua2V5cyhhKSkpO2E9aGQoYik7YT1udWxsPT09YT9udWxsOmEuc3RhdGVOb2RlO3JldHVybiBhfSxoeWRyYXRlOmZ1bmN0aW9uKGEsYixjKXtRaShiKT92b2lkIDA6eChcIjIwMFwiKTtyZXR1cm4gU2kobnVsbCxhLGIsITAsYyl9LHJlbmRlcjpmdW5jdGlvbihhLGIsYyl7UWkoYik/dm9pZCAwOngoXCIyMDBcIik7cmV0dXJuIFNpKG51bGwsYSxiLCExLGMpfSx1bnN0YWJsZV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcjpmdW5jdGlvbihhLGIsYyxkKXtRaShjKT92b2lkIDA6eChcIjIwMFwiKTtudWxsPT1hfHx2b2lkIDA9PT1hLl9yZWFjdEludGVybmFsRmliZXI/XG54KFwiMzhcIik6dm9pZCAwO3JldHVybiBTaShhLGIsYywhMSxkKX0sdW5tb3VudENvbXBvbmVudEF0Tm9kZTpmdW5jdGlvbihhKXtRaShhKT92b2lkIDA6eChcIjQwXCIpO3JldHVybiBhLl9yZWFjdFJvb3RDb250YWluZXI/KEhpKGZ1bmN0aW9uKCl7U2kobnVsbCxudWxsLGEsITEsZnVuY3Rpb24oKXthLl9yZWFjdFJvb3RDb250YWluZXI9bnVsbH0pfSksITApOiExfSx1bnN0YWJsZV9jcmVhdGVQb3J0YWw6ZnVuY3Rpb24oKXtyZXR1cm4gVGkuYXBwbHkodm9pZCAwLGFyZ3VtZW50cyl9LHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzOkdpLHVuc3RhYmxlX2ludGVyYWN0aXZlVXBkYXRlczpJaSxmbHVzaFN5bmM6ZnVuY3Rpb24oYSxiKXtXP3goXCIxODdcIik6dm9pZCAwO3ZhciBjPVg7WD0hMDt0cnl7cmV0dXJuIGtpKGEsYil9ZmluYWxseXtYPWMsWWgoMTA3Mzc0MTgyMywhMSl9fSx1bnN0YWJsZV9jcmVhdGVSb290OlVpLHVuc3RhYmxlX2ZsdXNoQ29udHJvbGxlZDpmdW5jdGlvbihhKXt2YXIgYj1cblg7WD0hMDt0cnl7a2koYSl9ZmluYWxseXsoWD1iKXx8V3x8WWgoMTA3Mzc0MTgyMywhMSl9fSxfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDp7RXZlbnRzOltJYSxKYSxLYSxCYS5pbmplY3RFdmVudFBsdWdpbnNCeU5hbWUscGEsUWEsZnVuY3Rpb24oYSl7eWEoYSxQYSl9LEViLEZiLERkLERhXX19O2Z1bmN0aW9uIFVpKGEsYil7UWkoYSk/dm9pZCAwOngoXCIyOTlcIixcInVuc3RhYmxlX2NyZWF0ZVJvb3RcIik7cmV0dXJuIG5ldyBQaShhLCEwLG51bGwhPWImJiEwPT09Yi5oeWRyYXRlKX1cbihmdW5jdGlvbihhKXt2YXIgYj1hLmZpbmRGaWJlckJ5SG9zdEluc3RhbmNlO3JldHVybiBUZShuKHt9LGEse292ZXJyaWRlUHJvcHM6bnVsbCxjdXJyZW50RGlzcGF0Y2hlclJlZjpUYi5SZWFjdEN1cnJlbnREaXNwYXRjaGVyLGZpbmRIb3N0SW5zdGFuY2VCeUZpYmVyOmZ1bmN0aW9uKGEpe2E9aGQoYSk7cmV0dXJuIG51bGw9PT1hP251bGw6YS5zdGF0ZU5vZGV9LGZpbmRGaWJlckJ5SG9zdEluc3RhbmNlOmZ1bmN0aW9uKGEpe3JldHVybiBiP2IoYSk6bnVsbH19KSl9KSh7ZmluZEZpYmVyQnlIb3N0SW5zdGFuY2U6SGEsYnVuZGxlVHlwZTowLHZlcnNpb246XCIxNi44LjZcIixyZW5kZXJlclBhY2thZ2VOYW1lOlwicmVhY3QtZG9tXCJ9KTt2YXIgV2k9e2RlZmF1bHQ6Vml9LFhpPVdpJiZWaXx8V2k7bW9kdWxlLmV4cG9ydHM9WGkuZGVmYXVsdHx8WGk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvc2NoZWR1bGVyLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3NjaGVkdWxlci5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYwLjEzLjZcbiAqIHNjaGVkdWxlci5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgZD1udWxsLGU9ITEsZz0zLGs9LTEsbD0tMSxtPSExLG49ITE7ZnVuY3Rpb24gcCgpe2lmKCFtKXt2YXIgYT1kLmV4cGlyYXRpb25UaW1lO24/cSgpOm49ITA7cih0LGEpfX1cbmZ1bmN0aW9uIHUoKXt2YXIgYT1kLGI9ZC5uZXh0O2lmKGQ9PT1iKWQ9bnVsbDtlbHNle3ZhciBjPWQucHJldmlvdXM7ZD1jLm5leHQ9YjtiLnByZXZpb3VzPWN9YS5uZXh0PWEucHJldmlvdXM9bnVsbDtjPWEuY2FsbGJhY2s7Yj1hLmV4cGlyYXRpb25UaW1lO2E9YS5wcmlvcml0eUxldmVsO3ZhciBmPWcsUT1sO2c9YTtsPWI7dHJ5e3ZhciBoPWMoKX1maW5hbGx5e2c9ZixsPVF9aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGgpaWYoaD17Y2FsbGJhY2s6aCxwcmlvcml0eUxldmVsOmEsZXhwaXJhdGlvblRpbWU6YixuZXh0Om51bGwscHJldmlvdXM6bnVsbH0sbnVsbD09PWQpZD1oLm5leHQ9aC5wcmV2aW91cz1oO2Vsc2V7Yz1udWxsO2E9ZDtkb3tpZihhLmV4cGlyYXRpb25UaW1lPj1iKXtjPWE7YnJlYWt9YT1hLm5leHR9d2hpbGUoYSE9PWQpO251bGw9PT1jP2M9ZDpjPT09ZCYmKGQ9aCxwKCkpO2I9Yy5wcmV2aW91cztiLm5leHQ9Yy5wcmV2aW91cz1oO2gubmV4dD1jO2gucHJldmlvdXM9XG5ifX1mdW5jdGlvbiB2KCl7aWYoLTE9PT1rJiZudWxsIT09ZCYmMT09PWQucHJpb3JpdHlMZXZlbCl7bT0hMDt0cnl7ZG8gdSgpO3doaWxlKG51bGwhPT1kJiYxPT09ZC5wcmlvcml0eUxldmVsKX1maW5hbGx5e209ITEsbnVsbCE9PWQ/cCgpOm49ITF9fX1mdW5jdGlvbiB0KGEpe209ITA7dmFyIGI9ZTtlPWE7dHJ5e2lmKGEpZm9yKDtudWxsIT09ZDspe3ZhciBjPWV4cG9ydHMudW5zdGFibGVfbm93KCk7aWYoZC5leHBpcmF0aW9uVGltZTw9Yyl7ZG8gdSgpO3doaWxlKG51bGwhPT1kJiZkLmV4cGlyYXRpb25UaW1lPD1jKX1lbHNlIGJyZWFrfWVsc2UgaWYobnVsbCE9PWQpe2RvIHUoKTt3aGlsZShudWxsIT09ZCYmIXcoKSl9fWZpbmFsbHl7bT0hMSxlPWIsbnVsbCE9PWQ/cCgpOm49ITEsdigpfX1cbnZhciB4PURhdGUseT1cImZ1bmN0aW9uXCI9PT10eXBlb2Ygc2V0VGltZW91dD9zZXRUaW1lb3V0OnZvaWQgMCx6PVwiZnVuY3Rpb25cIj09PXR5cGVvZiBjbGVhclRpbWVvdXQ/Y2xlYXJUaW1lb3V0OnZvaWQgMCxBPVwiZnVuY3Rpb25cIj09PXR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWU/cmVxdWVzdEFuaW1hdGlvbkZyYW1lOnZvaWQgMCxCPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBjYW5jZWxBbmltYXRpb25GcmFtZT9jYW5jZWxBbmltYXRpb25GcmFtZTp2b2lkIDAsQyxEO2Z1bmN0aW9uIEUoYSl7Qz1BKGZ1bmN0aW9uKGIpe3ooRCk7YShiKX0pO0Q9eShmdW5jdGlvbigpe0IoQyk7YShleHBvcnRzLnVuc3RhYmxlX25vdygpKX0sMTAwKX1cbmlmKFwib2JqZWN0XCI9PT10eXBlb2YgcGVyZm9ybWFuY2UmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBwZXJmb3JtYW5jZS5ub3cpe3ZhciBGPXBlcmZvcm1hbmNlO2V4cG9ydHMudW5zdGFibGVfbm93PWZ1bmN0aW9uKCl7cmV0dXJuIEYubm93KCl9fWVsc2UgZXhwb3J0cy51bnN0YWJsZV9ub3c9ZnVuY3Rpb24oKXtyZXR1cm4geC5ub3coKX07dmFyIHIscSx3LEc9bnVsbDtcInVuZGVmaW5lZFwiIT09dHlwZW9mIHdpbmRvdz9HPXdpbmRvdzpcInVuZGVmaW5lZFwiIT09dHlwZW9mIGdsb2JhbCYmKEc9Z2xvYmFsKTtcbmlmKEcmJkcuX3NjaGVkTW9jayl7dmFyIEg9Ry5fc2NoZWRNb2NrO3I9SFswXTtxPUhbMV07dz1IWzJdO2V4cG9ydHMudW5zdGFibGVfbm93PUhbM119ZWxzZSBpZihcInVuZGVmaW5lZFwiPT09dHlwZW9mIHdpbmRvd3x8XCJmdW5jdGlvblwiIT09dHlwZW9mIE1lc3NhZ2VDaGFubmVsKXt2YXIgST1udWxsLEo9ZnVuY3Rpb24oYSl7aWYobnVsbCE9PUkpdHJ5e0koYSl9ZmluYWxseXtJPW51bGx9fTtyPWZ1bmN0aW9uKGEpe251bGwhPT1JP3NldFRpbWVvdXQociwwLGEpOihJPWEsc2V0VGltZW91dChKLDAsITEpKX07cT1mdW5jdGlvbigpe0k9bnVsbH07dz1mdW5jdGlvbigpe3JldHVybiExfX1lbHNle1widW5kZWZpbmVkXCIhPT10eXBlb2YgY29uc29sZSYmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBBJiZjb25zb2xlLmVycm9yKFwiVGhpcyBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUuIE1ha2Ugc3VyZSB0aGF0IHlvdSBsb2FkIGEgcG9seWZpbGwgaW4gb2xkZXIgYnJvd3NlcnMuIGh0dHBzOi8vZmIubWUvcmVhY3QtcG9seWZpbGxzXCIpLFxuXCJmdW5jdGlvblwiIT09dHlwZW9mIEImJmNvbnNvbGUuZXJyb3IoXCJUaGlzIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IGNhbmNlbEFuaW1hdGlvbkZyYW1lLiBNYWtlIHN1cmUgdGhhdCB5b3UgbG9hZCBhIHBvbHlmaWxsIGluIG9sZGVyIGJyb3dzZXJzLiBodHRwczovL2ZiLm1lL3JlYWN0LXBvbHlmaWxsc1wiKSk7dmFyIEs9bnVsbCxMPSExLE09LTEsTj0hMSxPPSExLFA9MCxSPTMzLFM9MzM7dz1mdW5jdGlvbigpe3JldHVybiBQPD1leHBvcnRzLnVuc3RhYmxlX25vdygpfTt2YXIgVD1uZXcgTWVzc2FnZUNoYW5uZWwsVT1ULnBvcnQyO1QucG9ydDEub25tZXNzYWdlPWZ1bmN0aW9uKCl7TD0hMTt2YXIgYT1LLGI9TTtLPW51bGw7TT0tMTt2YXIgYz1leHBvcnRzLnVuc3RhYmxlX25vdygpLGY9ITE7aWYoMD49UC1jKWlmKC0xIT09YiYmYjw9YylmPSEwO2Vsc2V7Tnx8KE49ITAsRShWKSk7Sz1hO009YjtyZXR1cm59aWYobnVsbCE9PWEpe089ITA7dHJ5e2EoZil9ZmluYWxseXtPPSExfX19O1xudmFyIFY9ZnVuY3Rpb24oYSl7aWYobnVsbCE9PUspe0UoVik7dmFyIGI9YS1QK1M7YjxTJiZSPFM/KDg+YiYmKGI9OCksUz1iPFI/UjpiKTpSPWI7UD1hK1M7THx8KEw9ITAsVS5wb3N0TWVzc2FnZSh2b2lkIDApKX1lbHNlIE49ITF9O3I9ZnVuY3Rpb24oYSxiKXtLPWE7TT1iO098fDA+Yj9VLnBvc3RNZXNzYWdlKHZvaWQgMCk6Tnx8KE49ITAsRShWKSl9O3E9ZnVuY3Rpb24oKXtLPW51bGw7TD0hMTtNPS0xfX1leHBvcnRzLnVuc3RhYmxlX0ltbWVkaWF0ZVByaW9yaXR5PTE7ZXhwb3J0cy51bnN0YWJsZV9Vc2VyQmxvY2tpbmdQcmlvcml0eT0yO2V4cG9ydHMudW5zdGFibGVfTm9ybWFsUHJpb3JpdHk9MztleHBvcnRzLnVuc3RhYmxlX0lkbGVQcmlvcml0eT01O2V4cG9ydHMudW5zdGFibGVfTG93UHJpb3JpdHk9NDtcbmV4cG9ydHMudW5zdGFibGVfcnVuV2l0aFByaW9yaXR5PWZ1bmN0aW9uKGEsYil7c3dpdGNoKGEpe2Nhc2UgMTpjYXNlIDI6Y2FzZSAzOmNhc2UgNDpjYXNlIDU6YnJlYWs7ZGVmYXVsdDphPTN9dmFyIGM9ZyxmPWs7Zz1hO2s9ZXhwb3J0cy51bnN0YWJsZV9ub3coKTt0cnl7cmV0dXJuIGIoKX1maW5hbGx5e2c9YyxrPWYsdigpfX07ZXhwb3J0cy51bnN0YWJsZV9uZXh0PWZ1bmN0aW9uKGEpe3N3aXRjaChnKXtjYXNlIDE6Y2FzZSAyOmNhc2UgMzp2YXIgYj0zO2JyZWFrO2RlZmF1bHQ6Yj1nfXZhciBjPWcsZj1rO2c9YjtrPWV4cG9ydHMudW5zdGFibGVfbm93KCk7dHJ5e3JldHVybiBhKCl9ZmluYWxseXtnPWMsaz1mLHYoKX19O1xuZXhwb3J0cy51bnN0YWJsZV9zY2hlZHVsZUNhbGxiYWNrPWZ1bmN0aW9uKGEsYil7dmFyIGM9LTEhPT1rP2s6ZXhwb3J0cy51bnN0YWJsZV9ub3coKTtpZihcIm9iamVjdFwiPT09dHlwZW9mIGImJm51bGwhPT1iJiZcIm51bWJlclwiPT09dHlwZW9mIGIudGltZW91dCliPWMrYi50aW1lb3V0O2Vsc2Ugc3dpdGNoKGcpe2Nhc2UgMTpiPWMrLTE7YnJlYWs7Y2FzZSAyOmI9YysyNTA7YnJlYWs7Y2FzZSA1OmI9YysxMDczNzQxODIzO2JyZWFrO2Nhc2UgNDpiPWMrMUU0O2JyZWFrO2RlZmF1bHQ6Yj1jKzVFM31hPXtjYWxsYmFjazphLHByaW9yaXR5TGV2ZWw6ZyxleHBpcmF0aW9uVGltZTpiLG5leHQ6bnVsbCxwcmV2aW91czpudWxsfTtpZihudWxsPT09ZClkPWEubmV4dD1hLnByZXZpb3VzPWEscCgpO2Vsc2V7Yz1udWxsO3ZhciBmPWQ7ZG97aWYoZi5leHBpcmF0aW9uVGltZT5iKXtjPWY7YnJlYWt9Zj1mLm5leHR9d2hpbGUoZiE9PWQpO251bGw9PT1jP2M9ZDpjPT09ZCYmKGQ9YSxwKCkpO1xuYj1jLnByZXZpb3VzO2IubmV4dD1jLnByZXZpb3VzPWE7YS5uZXh0PWM7YS5wcmV2aW91cz1ifXJldHVybiBhfTtleHBvcnRzLnVuc3RhYmxlX2NhbmNlbENhbGxiYWNrPWZ1bmN0aW9uKGEpe3ZhciBiPWEubmV4dDtpZihudWxsIT09Yil7aWYoYj09PWEpZD1udWxsO2Vsc2V7YT09PWQmJihkPWIpO3ZhciBjPWEucHJldmlvdXM7Yy5uZXh0PWI7Yi5wcmV2aW91cz1jfWEubmV4dD1hLnByZXZpb3VzPW51bGx9fTtleHBvcnRzLnVuc3RhYmxlX3dyYXBDYWxsYmFjaz1mdW5jdGlvbihhKXt2YXIgYj1nO3JldHVybiBmdW5jdGlvbigpe3ZhciBjPWcsZj1rO2c9YjtrPWV4cG9ydHMudW5zdGFibGVfbm93KCk7dHJ5e3JldHVybiBhLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1maW5hbGx5e2c9YyxrPWYsdigpfX19O2V4cG9ydHMudW5zdGFibGVfZ2V0Q3VycmVudFByaW9yaXR5TGV2ZWw9ZnVuY3Rpb24oKXtyZXR1cm4gZ307XG5leHBvcnRzLnVuc3RhYmxlX3Nob3VsZFlpZWxkPWZ1bmN0aW9uKCl7cmV0dXJuIWUmJihudWxsIT09ZCYmZC5leHBpcmF0aW9uVGltZTxsfHx3KCkpfTtleHBvcnRzLnVuc3RhYmxlX2NvbnRpbnVlRXhlY3V0aW9uPWZ1bmN0aW9uKCl7bnVsbCE9PWQmJnAoKX07ZXhwb3J0cy51bnN0YWJsZV9wYXVzZUV4ZWN1dGlvbj1mdW5jdGlvbigpe307ZXhwb3J0cy51bnN0YWJsZV9nZXRGaXJzdENhbGxiYWNrTm9kZT1mdW5jdGlvbigpe3JldHVybiBkfTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7IFxcbiAgICBjb2xvcjogI2Q5ZDlkOTtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmLCBHZW9yZ2lhLCBzZXJpZjtcXG59XFxuXFxudWwge1xcbiAgICBib3JkZXI6IDFweCAjNDA0MDQwIHNvbGlkO1xcbn1cXG5cXG5saSAsIGxhYmVsLCBwIHtcXG4gICAgZm9udC1zaXplOiAxMXB4O1xcbn1cXG5cXG5oNCwgaDUsIGg2IHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzMzMzM7XFxufVxcblxcbmlucHV0LCB0ZXh0YXJlYSB7IFxcbiAgICBmb250LXNpemU6IDExcHg7XFxuICAgIGJhY2tncm91bmQ6ICMyYjJiMmI7XFxuICAgIGNvbG9yOiAjZDlkOWQ5O1xcbiAgICBvcGFjaXR5OiAwLjc1O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRhcmVhO1xcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwwLDAsMC45KTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIHBhZGRpbmc6IDdweDtcXG59XFxuXFxudWwgbGFiZWwgaW5wdXQge1xcbiAgICB3aWR0aDogMTBweDtcXG59XFxuXFxudWwsIGxpIHtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICAgIG1hcmdpbi10b3A6IDBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwwLDAsMC45KTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIHBhZGRpbmc6IDdweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcXG59XFxuXFxuYnV0dG9uIGl7XFxuICAgIHBhZGRpbmctcmlnaHQ6NHB4O1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZDogcmdiKDQzLCA0MywgNDMpO1xcbn1cXG5cXG51bCxsaSwgdWwgbGFiZWwge1xcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xcbn1cXG5cXG51bCBsYWJlbDpob3ZlciwgbGk6aG92ZXIsIC5jb250ZW50OmhvdmVye1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZDogcmdiKDQzLCA0MywgNDMpO1xcbn1cXG5cXG4jaW5kZXh7XFxuICAgIG1hcmdpbjotNHB4O1xcbn1cIiwgXCJcIl0pO1xuXG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbi8vIFN0eWxlcy5cblxuaW1wb3J0IFwiLi9TdHlsZS5jc3NcIjtcblxuLy8gQ29tcG9uZW50cy5cblxuaW1wb3J0IEFzc2V0IGZyb20gXCIuL0Fzc2V0XCI7XG5cbi8vIEV2ZW50cy5cblxuaW1wb3J0IHtkcm9wSGFuZGxlciwgZHJhZ092ZXJIYW5kbGVyLCBkcmFnTGVhdmVIYW5kbGVyfSBmcm9tIFwiLi9SZWR1Y2VyXCI7XG5cbi8vIERiIHV0aWxzLlxuXG5pbXBvcnQge2ZldGNoRnJvbURCLCB3cml0ZVRvREJ9IGZyb20gXCIuL2RiXCI7XG5cbmNsYXNzIEFzc2V0cyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY2xhc3M6IFwiZHJvcF96b25lXCIsXG4gICAgICAgICAgICBpbWFnZVVSTDpcIlwiLFxuICAgICAgICAgICAgYXNzZXRzOiBbXSxcbiAgICAgICAgICAgIHNlbGVjdGVkQXNzZXQ6XCJcIlxuICAgICAgICB9O1xuICAgICAgICB0aGlzLndyaXRlVG9EQiA9IHdyaXRlVG9EQi5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGFwcGVuZFRvQm9keShmaWxlKXtcbiAgICAgICAgdmFyIGJpbiA9IHRoaXMucmVzdWx0O1xuICAgICAgICB2YXIgbmV3RmlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuZXdGaWxlLmlubmVySFRNTCA9ICdMb2FkZWQgOiAnICsgZmlsZS5uYW1lICsgJyBzaXplICcgKyBmaWxlLnNpemUgKyAnIEInO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5ld0ZpbGUpO1xuXG5cbiAgICAgICAgdmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGltZy5maWxlID0gZmlsZTtcbiAgICAgICAgaW1nLnNyYyA9IGJpbjtcbiAgICAgICAgbmV3RmlsZS5hcHBlbmRDaGlsZChpbWcpO1xuICAgIH1cblxuICAgIHVwZGF0ZWRTZWxlY3RlZChlKSB7XG4gICAgICAgIGxldCBhc3NldE5hbWUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5hbWVcIik7IFxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlbGVjdGVkQXNzZXQ6IGFzc2V0TmFtZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgYXNzZXRzID0gdGhpcy5zdGF0ZS5hc3NldHMubWFwKGFzc2V0PT4gPEFzc2V0IGFzc2V0PXthc3NldH0gc2VsZWN0ZWQ9e3RoaXMuc3RhdGUuc2VsZWN0ZWRBc3NldH0gb25TZWxlY3RlZD17dGhpcy51cGRhdGVkU2VsZWN0ZWQuYmluZCh0aGlzKX0vPik7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnRzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZWxlbWVudHMtdGFiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFzc2V0c1xuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtmZXRjaEZyb21EQi5iaW5kKHRoaXMpfT5Mb2FkIEFzc2V0czwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLmNsYXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJvcD17ZHJvcEhhbmRsZXIuYmluZCh0aGlzKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnT3Zlcj17ZHJhZ092ZXJIYW5kbGVyLmJpbmQodGhpcyl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZ0xlYXZlPXtkcmFnTGVhdmVIYW5kbGVyLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5EcmFnIG9uZSBvciBtb3JlIGZpbGVzIHRvIHRoaXMgRHJvcCBab25lIC4uLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHthc3NldHN9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFzc2V0cztcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmRyb3Bfem9uZSB7XFxuICAgICAgYm9yZGVyOiAxcHggbGlnaHRncmF5IGRhc2hlZDtcXG4gICAgICB3aWR0aDogIDIwMHB4O1xcbiAgICAgIGhlaWdodDogMTAwcHg7XFxuICB9XFxuXFxuICAuZHJhZ19vdmVyIHtcXG4gICAgYm9yZGVyOiAycHggbGlnaHRncmF5IGRhc2hlZDtcXG4gICAgd2lkdGg6ICAyMDBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gIH1cXG5cXG4gIC50aW55VGh1bWJuYWlsLFxcbiAgLnRpbnlUaHVtYm5haWwgaW1ne1xcbiAgICB3aWR0aDoyMDBweDtcXG4gIH1cIiwgXCJcIl0pO1xuXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgIFwiLi9TdHlsZS5jc3NcIjtcblxuY2xhc3MgQXNzZXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vIFJlbW92ZSB0aGlzLnByb3BzLmluZGV4LCBpbnN0ZWFkIHVzZSB0aGlzIGVsZW1lbnQgaW5zdGFuY2UgaW5kZXguIFJlbW92ZXMgZHVwbGljYXRlIGNvZGVcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLnNlbGVjdGVkID09PSB0aGlzLnByb3BzLmFzc2V0Lm5hbWU/IFwidGlueVRodW1ibmFpbCBzZWxlY3RlZEFzc2V0XCIgOiBcInRpbnlUaHVtYm5haWxcIn0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMuYXNzZXQucmVzdWx0fSBkYXRhLW5hbWU9e3RoaXMucHJvcHMuYXNzZXQubmFtZX0gb25DbGljaz17dGhpcy5wcm9wcy5vblNlbGVjdGVkfT48L2ltZz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXNzZXQ7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zZWxlY3RlZCwgLmdyZWVuIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxuICAgIGJhY2tncm91bmQ6IHJnYig0MywgNDMsIDQzKTtcXG59XFxuXFxuLmJhY2tncm91bmQge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNjQsIDY0LCA2NCk7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzMzMzO1xcbn1cXG5cXG4uY29tcG9uZW50IHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jb21wb25lbnQgLmNvbXBvbmVudE5hbWV7XFxuICAgIHBhZGRpbmc6N3B4O1xcbn1cXG5cXG4udGh1bWJuYWlsIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxufVxcblxcbi5zZWxlY3RlZEFzc2V0e1xcbiAgICBib3JkZXI6IDFweCBsaWdodGdyYXkgZGFzaGVkO1xcbn1cIiwgXCJcIl0pO1xuXG4iLCJpbXBvcnQgaW5kZXhlZERCIGZyb20gXCIuLi9VdGlsaXRpZXMvTGlicmFyaWVzL2luZGV4ZWREQi9pbmRleGVEQlwiXG5leHBvcnQgZnVuY3Rpb24gZHJvcEhhbmRsZXIoZXYpIHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgW10uZm9yRWFjaC5jYWxsKGV2LmRhdGFUcmFuc2Zlci5maWxlcywgKGZpbGUpPT57XG4gICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICBmdW5jdGlvbiAoZXZlbnQsYikge1xuICAgICAgICAgICAgLy8gMS4gYXBwZW5kIHRvIGJvZHlcbiAgICAgICAgICAgIC8vIDIuIHdyaXRlIHRvIGRiLlxuICAgICAgICAgICAgdGhpcy5hcHBlbmRUb0JvZHkoZmlsZSk7XG4gICAgICAgICAgICB0aGlzLndyaXRlVG9EQihldmVudC50YXJnZXQucmVzdWx0LCBmaWxlLm5hbWUpO1xuXG4gICAgICAgIH0uYmluZCh0aGlzKTtcbiAgICB9KVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNsYXNzOiBcImRyb3Bfem9uZVwiXG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYWdPdmVySGFuZGxlcihldikge1xuICAgIGNvbnNvbGUubG9nKCdGaWxlKHMpIGluIGRyb3Agem9uZScpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNsYXNzOiBcImRyYWdfb3ZlclwiXG4gICAgfSlcblxuICAgIC8vIFByZXZlbnQgZGVmYXVsdCBiZWhhdmlvciAoUHJldmVudCBmaWxlIGZyb20gYmVpbmcgb3BlbmVkKVxuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkcmFnTGVhdmVIYW5kbGVyKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY2xhc3M6IFwiZHJvcF96b25lXCJcbiAgICB9KVxufSIsIndpbmRvdy5pREIgPSBcIlwiO1xuaW1wb3J0IHsgTWluZGV4ZWREQiB9IGZyb20gXCIuL01pbmRleGVkREJcIjtcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpe1xuICAgIHdpbmRvdy5pREIgPSBuZXcgTWluZGV4ZWREQihcInVpRWRpdG9yXCIsIHt1aUVkaXRvcjogXCJuYW1lXCJ9KTtcbiAgICAvLyBpREIucHV0KFwidWlFZGl0b3JcIiwge2RhdGE6MTIzfSlcbiAgICB3aW5kb3cuaURCLmNvbm5lY3QoKTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBpREI7IiwiLy8gdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vVG9tQW50aG9ueS9NaW4uZGV4ZWREQi9ibG9iL21hc3Rlci9taW5kZXhlZGRiLmpzXG5leHBvcnQgZnVuY3Rpb24gTWluZGV4ZWREQihkYXRhYmFzZU5hbWUsIG9iamVjdFN0b3Jlcykge1xuXHR0aGlzLmlkYiA9IHdpbmRvdy5pbmRleGVkREIgfHwgd2luZG93Lm1vekluZGV4ZWREQiB8fCB3aW5kb3cud2Via2l0SW5kZXhlZERCIHx8IHdpbmRvdy5tc0luZGV4ZWREQiB8fCB3aW5kb3cuc2hpbUluZGV4ZWREQjtcblx0dGhpcy5kYiA9IGRhdGFiYXNlTmFtZTtcblx0dGhpcy5vYmpTdHJzID0gQXJyYXkuaXNBcnJheShvYmplY3RTdG9yZXMpID8gb2JqZWN0U3RvcmVzIDogW29iamVjdFN0b3Jlc107XG5cdHRoaXMuc3RvcmUgPSBcInVpRWRpdG9yXCI7XG5cblx0dGhpcy5jb25uZWN0ID0gZnVuY3Rpb24oa2V5KSB7XG5cdFx0dmFyIGNvbm4gPSB0aGlzLmlkYi5vcGVuKHRoaXMuZGIsIDEpO1xuXHRcdGNvbm4ubWRiID0gdGhpcztcblxuXHRcdGNvbm4ub251cGdyYWRlbmVlZGVkID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgZGJsID0gY29ubi5yZXN1bHQ7XG5cdFx0XHR0aGlzLm1kYi5vYmpTdHJzLmZvckVhY2goZWxlbWVudCA9PiB7XG5cdFx0XHRcdHZhciBzdG9yZSA9IE9iamVjdC5lbnRyaWVzKGVsZW1lbnQpO1xuXHRcdFx0XHRkYmwuY3JlYXRlT2JqZWN0U3RvcmUoc3RvcmVbMF1bMF0sIHtrZXlQYXRoOiBzdG9yZVswXVsxXX0pO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHsgXG5cdFx0XHRjb25uLm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR0aGlzLm1kYi5kYiA9IGNvbm4ucmVzdWx0O1xuXHRcdFx0XHRyZXNvbHZlKHRoaXMubWRiLmRiKTtcblx0XHRcdH1cblx0XHRcdGNvbm4ub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZWplY3QoY29ubi5lcnJvcik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHR0aGlzLmNzID0gZnVuY3Rpb24oc3RvcmUpIHtcblx0XHRpZiAodGhpcy5kYiA9PT0gdW5kZWZpbmVkKSB0aHJvdyBcIltNaW4uZGV4ZWREQl0gREIgbm90IG9wZW4uXCI7XG5cdFx0dmFyIHR4ID0gdGhpcy5kYi50cmFuc2FjdGlvbihzdG9yZSwgXCJyZWFkd3JpdGVcIik7XG5cdFx0cmV0dXJuIHR4Lm9iamVjdFN0b3JlKHN0b3JlKTtcblx0fVxuXG5cdHRoaXMucHV0ID0gZnVuY3Rpb24ob2JqKSB7XG5cdFx0bGV0IG9zID0gdGhpcy5jcyh0aGlzLnN0b3JlKTtcblxuXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHRcdHZhciByZXNwb25zZSA9IG9zLnB1dChvYmopO1xuXHRcdFx0cmVzcG9uc2Uub25zdWNjZXNzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJlc29sdmUocmVzcG9uc2UucmVzdWx0KTtcblx0XHRcdH07XG5cdFx0XHRyZXNwb25zZS5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJlamVjdChyZXNwb25zZS5lcnJvcik7XG5cdFx0XHR9O1xuXHRcdH0pO1xuXHR9XG5cblx0dGhpcy5nZXQgPSBmdW5jdGlvbihrZXkpIHtcblx0XHRsZXQgb3MgPSB0aGlzLmNzKHRoaXMuc3RvcmUpO1xuXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdFx0dmFyIHJlc3BvbnNlID0gb3MuZ2V0KGtleSk7XG5cdFx0XHRyZXNwb25zZS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmVzb2x2ZShyZXNwb25zZS5yZXN1bHQpO1xuXHRcdFx0fTtcblx0XHRcdHJlc3BvbnNlLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmVqZWN0KHJlc3BvbnNlLmVycm9yKTtcblx0XHRcdH07XG5cdFx0fSk7XG5cdH1cblxuXHR0aGlzLmdldEFsbCA9IGZ1bmN0aW9uKCkge1xuXHRcdGxldCBvcyA9IHRoaXMuY3ModGhpcy5zdG9yZSk7XG5cblx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHR2YXIgcmVzcG9uc2UgPSBvcy5nZXRBbGwoKTtcblx0XHRcdHJlc3BvbnNlLm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXNvbHZlKHJlc3BvbnNlLnJlc3VsdCk7XG5cdFx0XHR9O1xuXHRcdFx0cmVzcG9uc2Uub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZWplY3QocmVzcG9uc2UuZXJyb3IpO1xuXHRcdFx0fTtcblx0XHR9KTtcblx0fVxuXG5cdHRoaXMuY2xvc2UgPSBmdW5jdGlvbigpIHtcblx0XHR0aGlzLmRiLmNsb3NlKCk7XG5cdH1cbn0iLCJcbmV4cG9ydCBmdW5jdGlvbiB3cml0ZVRvREIocmVzdWx0LCBuYW1lKSB7XG4gICAgd2luZG93LmlEQi5nZXQobmFtZSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgdmFyIGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGltZy5ocmVmID0gZGF0YS5yZXN1bHQ7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaW1hZ2VVUkw6IGRhdGEucmVzdWx0XG4gICAgICAgIH0pXG4gICAgfSlcbiAgICB3aW5kb3cuaURCLnB1dCh7IG5hbWU6IG5hbWUsIHJlc3VsdDogcmVzdWx0IH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEZyb21EQigpIHtcbiAgICB3aW5kb3cuaURCLmdldEFsbCgpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIC8vIHNhdmUgaXQgdG8gd2luZG93XG4gICAgICAgIHdpbmRvdy5hc3NldHMgPSB7fTtcbiAgICAgICAgZGF0YS5mb3JFYWNoKGltYWdlID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5hc3NldHNbaW1hZ2UubmFtZV0gPSBpbWFnZS5yZXN1bHRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhc3NldHM6IGRhdGFcbiAgICAgICAgfSlcbiAgICB9KTtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbi8vIFN0eWxlcy5cblxuaW1wb3J0IFwiLi9TdHlsZS5jc3NcIjtcblxuLy8gQ29tcG9uZW50cy5cblxuaW1wb3J0IEZvbGRlcnMgZnJvbSBcIi4uL1V0aWxpdGllcy9Db21wb25lbnRzL0ZvbGRlcnNcIjtcbmltcG9ydCB7b25EZWxldGVDb21wb25lbnQsIG9uRGVsZXRlRm9sZGVyfSBmcm9tIFwiLi9FdmVudHNcIjtcblxuLy8gRXZlbnRzLlxuXG5jbGFzcyBDb21wb25lbnRzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjb21wb25lbnRzOiB0aGlzLnByb3BzLmNvbXBvbmVudHMsXG4gICAgICAgICAgICBmb2xkZXJzOiB0aGlzLnByb3BzLmZvbGRlcnNcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBhZGRGb2xkZXIoKXtcbiAgICAgICAgbGV0IGZvbGRlcnMgPSBBcnJheS5mcm9tKHRoaXMuc3RhdGUuZm9sZGVycyk7XG4gICAgICAgIGZvbGRlcnMudW5zaGlmdCh7XG4gICAgICAgICAgICB0eXBlOlwiTmV3Rm9sZGVyXCIsXG4gICAgICAgICAgICBuYW1lOlwiXCIsXG4gICAgICAgICAgICBjb250ZW50czpbXSxcbiAgICAgICAgICAgIHN0YXR1czpcImNsb3NlZFwiXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZvbGRlcnN9KVxuICAgIH1cblxuICAgIGFkZENvbXBvbmVudCgpe1xuICAgICAgICB0aGlzLnByb3BzLm9uT3BlbkVkaXRvcigpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50c1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGVsZW1lbnRzLXRhYlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBDb21wb25lbnRzXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbnRyb2xzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuYWRkQ29tcG9uZW50LmJpbmQodGhpcyl9PjxpIGNsYXNzTmFtZT1cImZhIGZhLWVkaXRcIj48L2k+QWRkL0VkaXQgQ29tcG9uZW50PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuYWRkRm9sZGVyLmJpbmQodGhpcyl9PjxpIGNsYXNzTmFtZT1cImZhIGZhLWZvbGRlclwiPjwvaT5BZGQgRm9sZGVyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9sZGVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMDApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM9e3RoaXMuc3RhdGUuY29tcG9uZW50c30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9sZGVycz17dGhpcy5zdGF0ZS5mb2xkZXJzfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZENvbXBvbmVudD17dGhpcy5wcm9wcy5zZWxlY3RlZENvbXBvbmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Gb2xkZXJzVXBkYXRlPXt0aGlzLnByb3BzLm9uRm9sZGVyc1VwZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Rpb24gPSB7dGhpcy5wcm9wcy5vblNlbGVjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EZWxldGVDb21wb25lbnQ9e29uRGVsZXRlQ29tcG9uZW50LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlRm9sZGVyPXtvbkRlbGV0ZUZvbGRlci5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudHM7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5vdmVycmlkZSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAwJTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIHdpZHRoOiA0NTBweDtcXG59XFxuXFxuLmVsZW1lbnRze1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcblxcbi50aXRsZXtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTFweDtcXG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDY0LCA2NCwgNjQpO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5lbGVtZW50cy10YWIge1xcbiAgICBsZWZ0OjEwcHg7XFxufVxcblxcbi5Db250cm9sc3tcXG4gICAgcGFkZGluZy1ib3R0b206OHB4O1xcbn1cIiwgXCJcIl0pO1xuXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG4vLyBTdHlsZXMuXG5cbmltcG9ydCBcIi4vU3R5bGUuY3NzXCI7XG5cbmltcG9ydCB7Zm9sZGVyU3RydWN0dXJlfSBmcm9tIFwiLi9wcm9jZXNzRm9sZGVyXCI7XG5cbmNsYXNzIEZvbGRlcnMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IHRoaXMucHJvcHMuY29tcG9uZW50cyxcbiAgICAgICAgICAgIGZvbGRlcnM6IHRoaXMucHJvcHMuZm9sZGVyc1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNoZWNrRm9sZGVyKGRhdGEpe1xuICAgICAgICBsZXQgZm9sZGVycyA9IEFycmF5LmZyb20odGhpcy5zdGF0ZS5mb2xkZXJzKTtcbiAgICAgICAgbGV0IGZvbGRlciA9IGZvbGRlcnMuZmluZChmb2xkZXI9PmZvbGRlci5uYW1lPT09ZGF0YS5uYW1lKTtcbiAgICAgICAgbGV0IGVtcHR5Rm9sZGVySW5kZXggPSBmb2xkZXJzLmZpbmRJbmRleChmb2xkZXI9PmZvbGRlci50eXBlPT09XCJOZXdGb2xkZXJcIik7XG4gICAgICAgIGlmKGVtcHR5Rm9sZGVySW5kZXghPT0tMSl7XG4gICAgICAgICAgICAvLyBEZWxldGUgdGhlIG5ld0ZvbGRlclxuICAgICAgICAgICAgZm9sZGVycy5zcGxpY2UoZW1wdHlGb2xkZXJJbmRleCwxKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhmb2xkZXJzKVxuICAgICAgICAvLyBDaGVjayBpZiBpdCBpcyBuZXdseSBjcmVhdGVkIGZvbGRlciBcbiAgICAgICAgaWYoIWZvbGRlcil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRm9sZGVyIG5vdCBmb3VuZCwgYWRkaW5nICR7SlNPTi5zdHJpbmdpZnkoZGF0YSl9dG8gbGlzdCBvZiBmb2xkZXJzICR7SlNPTi5zdHJpbmdpZnkoZm9sZGVycyl9YCk7XG4gICAgICAgICAgICBmb2xkZXJzLnB1c2goZGF0YSk7XG4gICAgICAgIH0gXG4gICAgICAgIC8vIFVwZGF0ZSBleGlzdGluZyBvbmVcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRm9sZGVyIGZvdW5kLCB1cGRhdGluZyB0aGUgZm9sZGVyIGNvbnRlbnQgZnJvbSAke2ZvbGRlci5jb250ZW50c30gdG8gJHtkYXRhLmNvbnRlbnRzfWApXG4gICAgICAgICAgICBmb2xkZXIuY29udGVudHMgPSBkYXRhLmNvbnRlbnRzO1xuXG4gICAgICAgICAgICAvLyBNYWtlcyBzdXJlIHRoYXQgY29udGVudHMgYXJlIG5vdCBkdXBsaWNhdGVkIGluIG90aGVyIGZvbGRlcnMuXG4gICAgICAgICAgICBmb2xkZXJzLmZvckVhY2goY3VycmVudEZvbGRlcj0+e1xuXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudEZvbGRlci5uYW1lICE9PSBkYXRhLm5hbWUpe1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmNvbnRlbnRzLmZvckVhY2goY29udGVudD0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gY3VycmVudEZvbGRlci5jb250ZW50cy5maW5kSW5kZXgoaXRlbT0+aXRlbT09PWNvbnRlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCE9PS0xPyBjdXJyZW50Rm9sZGVyLmNvbnRlbnRzLnNwbGljZShpbmRleCwxKTogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coZm9sZGVycylcblxuICAgICAgICB0aGlzLnByb3BzLm9uRm9sZGVyc1VwZGF0ZShmb2xkZXJzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBmb2xkZXJTdHJ1Y3R1cmUodGhpcy5wcm9wcywgdGhpcy5jaGVja0ZvbGRlci5iaW5kKHRoaXMpIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvbGRlcnM7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImlucHV0LmZvbGRlcntcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIGJhY2tncm91bmQ6bm9uZTtcXG59XFxuXFxuLm5ld0ZvbGRlcntcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5uZXdGb2xkZXIgaXtcXG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsMCwwLDAuOSk7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBwYWRkaW5nOiA3cHg7XFxufVxcblxcbi5uZXdGb2xkZXIuZHJhZ092ZXIgaXtcXG4gICAgYW5pbWF0aW9uOiBibGluayAuNXMgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgYmxpbmt7XFxuICAgIGZyb20geyAgICBcXG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICB9XFxufVxcbi5mYS5mYS1mb2xkZXIgfiB1bCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5mYS5mYS1mb2xkZXItb3BlbiB+IHVsIHtcXG4gICAgZGlzcGxheTpibG9jaztcXG59XCIsIFwiXCJdKTtcblxuIiwiaW1wb3J0IEZvbGRlciBmcm9tIFwiLi9Gb2xkZXJcIjtcbmltcG9ydCBDb21wb25lbnR0IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL0NvbXBvbmVudHRcIjtcblxubGV0IHNlbGVjdGVkQ29tcG9uZW50LCBvblNlbGVjdGlvbiwgb25Gb2xkZXJVcGRhdGUsIG9uRGVsZXRlQ29tcG9uZW50LCBjb21wb25lbnRzLCBvbkRlbGV0ZUZvbGRlcjtcblxuZnVuY3Rpb24gaW5pdGlhbGlzZVByb3BzKHByb3BzLCBjaGVja0ZvbGRlcil7XG4gICAgc2VsZWN0ZWRDb21wb25lbnQgPSBwcm9wcy5zZWxlY3RlZENvbXBvbmVudDtcbiAgICBvblNlbGVjdGlvbiA9IHByb3BzLm9uU2VsZWN0aW9uO1xuICAgIGNvbXBvbmVudHMgPSBwcm9wcy5jb21wb25lbnRzO1xuICAgIG9uRm9sZGVyVXBkYXRlID0gY2hlY2tGb2xkZXI7XG4gICAgb25EZWxldGVDb21wb25lbnQgPSBwcm9wcy5vbkRlbGV0ZUNvbXBvbmVudDtcbiAgICBvbkRlbGV0ZUZvbGRlciA9IHByb3BzLm9uRGVsZXRlRm9sZGVyO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzRm9sZGVyIChmb2xkZXIsIGkpe1xuICAgIGxldCBjb250ZW50cyA9IGZvbGRlci5jb250ZW50cztcblxuICAgIHJldHVybiA8Rm9sZGVyXG4gICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgIGZvbGRlcj17Zm9sZGVyfVxuICAgICAgICAgICAgICAgIGNvbnRlbnRzPXtjb250ZW50cy5tYXAoIHByb2Nlc3NDb250ZW50ICl9XG4gICAgICAgICAgICAgICAgb25Gb2xkZXJVcGRhdGU9e29uRm9sZGVyVXBkYXRlfVxuICAgICAgICAgICAgICAgIG9uRGVsZXRlRm9sZGVyPXtvbkRlbGV0ZUZvbGRlcn0vPlxufVxuXG5mdW5jdGlvbiBwcm9jZXNzQ29udGVudCAoY29udGVudCwgaSl7XG5cbiAgICAvLyBDaGVjayBpZiBjb250ZW50IGlzIGEgY29tcG9uZW50IG5hbWUuXG4gICAgaWYodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIgKXtcblxuICAgICAgICByZXR1cm4gPENvbXBvbmVudHQgXG4gICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtjb21wb25lbnRzLmZpbmQoY29tcG9uZW50PT5jb21wb25lbnQubmFtZT09PWNvbnRlbnQpfVxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZENvbXBvbmVudD17c2VsZWN0ZWRDb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0aW9uQ2hhbmdlPXtvblNlbGVjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgb25EZWxldGVDb21wb25lbnQgPSB7b25EZWxldGVDb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgfVxuICAgIC8vIGVsc2UgaXRzIGEgZm9sZGVyIHR5cGUuXG4gICAgZWxzZSB7XG4gICAgICAgIGxldCBmb2xkZXIgPSBjb250ZW50O1xuICAgICAgICByZXR1cm4gPEZvbGRlclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgIGZvbGRlcj17Zm9sZGVyfVxuICAgICAgICAgICAgICAgICAgICBjb250ZW50cz17Zm9sZGVyLmNvbnRlbnRzLm1hcCggcHJvY2Vzc0NvbnRlbnQgKX1cbiAgICAgICAgICAgICAgICAgICAgb25Gb2xkZXJVcGRhdGU9e29uRm9sZGVyVXBkYXRlfVxuICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZUZvbGRlcj17b25EZWxldGVGb2xkZXJ9Lz5cbiAgICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGZvbGRlclN0cnVjdHVyZShwcm9wcywgb25Gb2xkZXJVcGRhdGUpe1xuICAgIGxldCBmb2xkZXJzID0gcHJvcHMuZm9sZGVycztcblxuICAgIGluaXRpYWxpc2VQcm9wcyhwcm9wcywgb25Gb2xkZXJVcGRhdGUpO1xuXG4gICAgcmV0dXJuKGZvbGRlcnMubWFwKHByb2Nlc3NGb2xkZXIpKVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbi8vIFN0eWxlcy5cblxuaW1wb3J0IFwiLi9TdHlsZS5jc3NcIjtcbmltcG9ydCBOZXdGb2xkZXIgZnJvbSBcIi4uL05ld0ZvbGRlclwiO1xuXG5pbXBvcnQge2RlbGV0ZUZvbGRlciwgdG9nZ2xlRm9sZGVyfSBmcm9tIFwiLi9SZWR1Y2VyXCI7XG5pbXBvcnQge2Ryb3BIYW5kbGVyLCBkcmFnT3ZlckhhbmRsZXIsIGRyYWdMZWF2ZUhhbmRsZXIsIG9uRHJhZ1N0YXJ0fSBmcm9tIFwiLi9FdmVudHNcIjtcblxuY2xhc3MgRm9sZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpY29uU3RhdHVzOiBcImZhIGZhLWZvbGRlclwiLFxuICAgICAgICAgICAgZm9sZGVyQ2xhc3M6IFwibmV3Rm9sZGVyXCIsXG4gICAgICAgICAgICBuYW1lOiB0aGlzLnByb3BzLmZvbGRlci5uYW1lLFxuICAgICAgICAgICAgY29udGVudHM6IHRoaXMucHJvcHMuZm9sZGVyLmNvbnRlbnRzLFxuICAgICAgICAgICAgdHlwZTogdGhpcy5wcm9wcy5mb2xkZXIudHlwZSxcbiAgICAgICAgICAgIHN0YXR1czogdGhpcy5wcm9wcy5mb2xkZXIuc3RhdHVzXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBuZXdGb2xkZXIoZm9sZGVyKXtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkZvbGRlclVwZGF0ZShmb2xkZXIpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCBmb2xkZXIgPSB0aGlzLnByb3BzLmZvbGRlcjtcbiAgICAgICAgbGV0IGNvbnRlbnRzID0gdGhpcy5wcm9wcy5jb250ZW50cztcbiAgICAgICAgbGV0IGljb25TdGF0dXMgPSB0aGlzLnN0YXRlLnN0YXR1cyA9PT0gXCJvcGVuXCIgPyBcImZhIGZhLWZvbGRlci1vcGVuXCIgOiBcImZhIGZhLWZvbGRlclwiO1xuICAgICAgICBpZihmb2xkZXIudHlwZT09XCJOZXdGb2xkZXJcIil7XG4gICAgICAgICAgICByZXR1cm4gKDxOZXdGb2xkZXIgb25OZXdGb2xkZXI9e3RoaXMubmV3Rm9sZGVyLmJpbmQodGhpcyl9Lz4pXG4gICAgICAgIH1cbiAgICAgICAgaWYoZm9sZGVyLnR5cGU9PVwiZm9sZGVyXCIpe1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMuc3RhdGUuZm9sZGVyQ2xhc3N9XG4gICAgICAgICAgICAgICAgICAgIGRhdGEtZm9sZGVyLW5hbWU9e2ZvbGRlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGU9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyb3A9e2Ryb3BIYW5kbGVyLmJpbmQodGhpcyl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZ092ZXI9e2RyYWdPdmVySGFuZGxlci5iaW5kKHRoaXMpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdMZWF2ZT17ZHJhZ0xlYXZlSGFuZGxlci5iaW5kKHRoaXMpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdTdGFydD17b25EcmFnU3RhcnQuYmluZCh0aGlzKX0gPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2ljb25TdGF0dXN9IG9uQ2xpY2s9e3RvZ2dsZUZvbGRlci5iaW5kKHRoaXMpfT48L2k+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvbGRlclwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZm9sZGVyIG5hbWVcIiByZWFkT25seSB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfS8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZGVsZXRlRm9sZGVyLmJpbmQodGhpcyl9PjxpIGNsYXNzTmFtZT1cImZhIGZhLXRyYXNoXCI+PC9pPkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29udGVudHN9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmKGZvbGRlci50eXBlPT1cIm5vRm9sZGVyXCIpe1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMuc3RhdGUuZm9sZGVyQ2xhc3N9XG4gICAgICAgICAgICAgICAgICAgIGRhdGEtZm9sZGVyLW5hbWU9e2ZvbGRlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGU9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyb3A9e2Ryb3BIYW5kbGVyLmJpbmQodGhpcyl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZ092ZXI9e2RyYWdPdmVySGFuZGxlci5iaW5kKHRoaXMpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdMZWF2ZT17ZHJhZ0xlYXZlSGFuZGxlci5iaW5kKHRoaXMpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdTdGFydD17b25EcmFnU3RhcnQuYmluZCh0aGlzKX0gPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2RlbGV0ZUZvbGRlci5iaW5kKHRoaXMpfT48aSBjbGFzc05hbWU9XCJmYSBmYS10cmFzaFwiPjwvaT5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRlbnRzfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9sZGVyO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJpbnB1dC5mb2xkZXJ7XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XFxufVxcblxcbi5uZXdGb2xkZXJ7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ubmV3Rm9sZGVyIGl7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwwLjkpO1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gICAgcGFkZGluZzogN3B4O1xcbn1cXG5cXG4ubmV3Rm9sZGVyLmRyYWdPdmVyIGl7XFxuICAgIGFuaW1hdGlvbjogYmxpbmsgLjVzIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJsaW5re1xcbiAgICBmcm9tIHsgICAgXFxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgfVxcbn1cXG4uZmEuZmEtZm9sZGVyIH4gdWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG4uZmEuZmEtZm9sZGVyLW9wZW4gfiB1bCB7XFxuICAgIGRpc3BsYXk6YmxvY2s7XFxufVwiLCBcIlwiXSk7XG5cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbi8vIFN0eWxlcy5cblxuaW1wb3J0IFwiLi9TdHlsZS5jc3NcIjtcblxuLy8gQ29tcG9uZW50cy5cblxuY2xhc3MgTmV3Rm9sZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzdGF0dXM6IFwiZmEgZmEtZm9sZGVyXCIsXG4gICAgICAgICAgICBuZXdGb2xkZXJDbGFzczogXCJuZXdGb2xkZXJcIixcbiAgICAgICAgICAgIGZvbGRlck5hbWU6IFwiXCJcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmb2xkZXJOYW1lQ2hhbmdlZChlKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBmb2xkZXJOYW1lOiBlLmN1cnJlbnRUYXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzYXZlRm9sZGVyTmFtZU9uRW50ZXIoZSl7XG4gICAgICAgIGlmKGUua2V5PT09XCJFbnRlclwiKXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25OZXdGb2xkZXIoe1xuICAgICAgICAgICAgICAgIG5hbWU6dGhpcy5zdGF0ZS5mb2xkZXJOYW1lLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRzOltdLFxuICAgICAgICAgICAgICAgIHR5cGU6XCJmb2xkZXJcIixcbiAgICAgICAgICAgICAgICBzdGF0dXM6XCJjbG9zZWRcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5uZXdGb2xkZXJDbGFzc30+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc3RhdHVzfT48L2k+XG4gICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb2xkZXJcIiBcbiAgICAgICAgICAgICAgICBhdXRvRm9jdXM9e3RydWV9IFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZm9sZGVyIG5hbWVcIlxuICAgICAgICAgICAgICAgIHZhbHVlID0ge3RoaXMuc3RhdGUuZm9sZGVyTmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5mb2xkZXJOYW1lQ2hhbmdlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9e3RoaXMuc2F2ZUZvbGRlck5hbWVPbkVudGVyLmJpbmQodGhpcyl9Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXdGb2xkZXI7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImlucHV0LmZvbGRlcntcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIGJhY2tncm91bmQ6bm9uZTtcXG59XFxuXFxuLm5ld0ZvbGRlciBpe1xcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwwLDAsMC45KTtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIHBhZGRpbmc6IDdweDtcXG59XFxuXFxuLm5ld0ZvbGRlci5kcmFnT3ZlciBpe1xcbiAgICBhbmltYXRpb246IGJsaW5rIC41cyBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBibGlua3tcXG4gICAgZnJvbSB7ICAgIFxcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICBjb2xvcjogZ3JlZW47XFxuICAgIH1cXG59XCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUZvbGRlcihlKXtcbiAgICB0aGlzLnByb3BzLm9uRGVsZXRlRm9sZGVyKFwiQ09OVEVOVFNcIiwgdGhpcy5zdGF0ZS5uYW1lKTtcbn1cblxuZnVuY3Rpb24gb3BlbkZvbGRlcigpe1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzdGF0dXM6IFwib3BlblwiXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlRm9sZGVyKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHN0YXR1czogXCJjbG9zZWRcIlxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlRm9sZGVyKCl7XG4gICAgY29uc29sZS5sb2coXCJDTENJRUtEXCIpO1xuICAgIGlmKHRoaXMuc3RhdGUuc3RhdHVzID09PSBcImNsb3NlZFwiKSB7XG4gICAgICAgIG9wZW5Gb2xkZXIuY2FsbCh0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjbG9zZUZvbGRlci5jYWxsKHRoaXMpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7Y29udmVydFRvUmVhY3R9IGZyb20gXCIuL0NvZGVHZW5lcmF0b3IvUmVhY3RcIjtcblxuZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudCl7XG5cbiAgICBsZXQgY29tcG9uZW50U3RyaW5nID0gY29udmVydFRvUmVhY3QoY29tcG9uZW50KTtcblxuICAgIC8vIGV2YWwgZG9lcyBub3QgZXZhbHVhdGUgY2xhc3MgaWYgbm90IGV4Y2xvc2VkIGluIHBhcmFudGhlc2lzLlxuICAgIHJldHVybiBldmFsKEJhYmVsLnRyYW5zZm9ybShjb21wb25lbnRTdHJpbmcsIHsgcHJlc2V0czogWydyZWFjdCddLCBwbHVnaW5zOiBbXCJ0cmFuc2Zvcm0tZXMyMDE1LWNsYXNzZXNcIl0gIH0pLmNvZGUpXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGNyZWF0ZUNvbXBvbmVudFxufSIsImltcG9ydCB7c2FtcGxlfSBmcm9tIFwiLi9TYW1wbGVcIjtcblxuZnVuY3Rpb24gcHVzaEhpc3RvcnkoY29tcG9uZW50cyl7XG5cbiAgICB3aW5kb3cuZWRpdG9ySGlzdG9yeSA9IHJlYWREYXRhKFwidWktZWRpdG9yLWhpc3RvcnlcIik7XG4gICAgZWRpdG9ySGlzdG9yeS5wdXNoKGNvbXBvbmVudHMpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidWktZWRpdG9yLWhpc3RvcnlcIixKU09OLnN0cmluZ2lmeShlZGl0b3JIaXN0b3J5KSApO1xufVxuXG4vLyBJZiBlbXB0eSwgcmV0dXJuIGVtcHR5IGFycmF5LlxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZERhdGEoa2V5KXtcblxuICAgIGlmKGtleSA9PT1cInVpLWVkaXRvclwiKXtcbiAgICAgICAgaWYoIXdpbmRvdy5jb21wb25lbnRzICl7XG4gICAgICAgICAgICB3aW5kb3cuY29tcG9uZW50cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkgfHwgc2FtcGxlO1xuICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh3aW5kb3cuY29tcG9uZW50cykpO1xuICAgIH1cbiAgICBpZihrZXk9PT1cInVpLWVkaXRvci1oaXN0b3J5XCIpe1xuICAgICAgICBsZXQgaGlzdG9yeSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICAgIFxuICAgICAgICBpZihoaXN0b3J5KVxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoaGlzdG9yeSk7XG4gICAgfVxuICAgIGlmKGtleSA9PT1cImZvbGRlcnNcIil7XG4gICAgICAgIGxldCBmb2xkZXJzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgbGV0IGNvbXBvbmVudE5hbWVzID0gd2luZG93LmNvbXBvbmVudHMubWFwKGNvbXBvbmVudD0+Y29tcG9uZW50Lm5hbWUpO1xuICAgICAgICByZXR1cm4gZm9sZGVycyA/IEpTT04ucGFyc2UoZm9sZGVycykgOiBbe1xuICAgICAgICAgICAgdHlwZTogXCJub0ZvbGRlclwiLFxuICAgICAgICAgICAgY29udGVudHM6IGNvbXBvbmVudE5hbWVzLFxuICAgICAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgICAgIHN0YXR1czpcIm9wZW5cIlxuICAgICAgICB9XTtcbiAgICB9XG5cbiAgICByZXR1cm4gW107XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdyaXRlRGF0YShrZXksIGNvbXBvbmVudHMsIG5vUHVzaCl7XG5cbiAgICBpZihrZXk9PVwiZm9sZGVyc1wiKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJ3cml0aW5nIGZvbGRlcnNcIilcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShjb21wb25lbnRzKSk7XG4gICAgfVxuICAgIGlmKGtleT09XCJ1aS1lZGl0b3JcIil7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiV1JJVEVcIilcbiAgICAgICAgd2luZG93LmNvbXBvbmVudHMgPSBjb21wb25lbnRzO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KGNvbXBvbmVudHMpKTtcbiAgICAgICAgaWYoIW5vUHVzaCl7XG4gICAgICAgICAgICBwdXNoSGlzdG9yeShjb21wb25lbnRzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlYWRDb21wb25lbnQoY29tcG9uZW50TmFtZSl7XG5cbiAgICBsZXQgY29tcG9uZW50cyA9IHJlYWREYXRhKFwidWktZWRpdG9yXCIpO1xuICAgIGlmKCFjb21wb25lbnRzKXtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBvbmVudHMuZmluZChjb21wb25lbnQ9PmNvbXBvbmVudC5uYW1lPT09Y29tcG9uZW50TmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3cml0ZUNvbXBvbmVudChwYXJlbnQpIHtcblxuICAgIGlmKCFBcnJheS5pc0FycmF5KHBhcmVudCkgJiYgcGFyZW50Lm5hbWUpe1xuICAgICAgICBsZXQgY29tcG9uZW50cyA9IHJlYWREYXRhKCBcInVpLWVkaXRvclwiKTtcbiAgICAgICAgbGV0IGluZGV4ID0gY29tcG9uZW50cy5maW5kSW5kZXgoY29tcD0+Y29tcC5uYW1lID09PSBwYXJlbnQubmFtZSk7XG4gICAgICAgIGNvbXBvbmVudHNbaW5kZXhdID0gcGFyZW50O1xuICAgICAgICB3cml0ZURhdGEoXCJ1aS1lZGl0b3JcIiwgY29tcG9uZW50cyk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wSGlzdG9yeSgpe1xuICAgIFxuICAgIGxldCBlZGl0b3JIaXN0b3J5ID0gcmVhZERhdGEoXCJ1aS1lZGl0b3ItaGlzdG9yeVwiKTtcbiAgICBpZighZWRpdG9ySGlzdG9yeSl7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbGFzdEl0ZW0gPSBlZGl0b3JIaXN0b3J5LnBvcCgpO1xuICAgIFxuICAgIGlmKCFlZGl0b3JIaXN0b3J5KXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdyaXRlRGF0YShcInVpLWVkaXRvci1oaXN0b3J5XCIsIGVkaXRvckhpc3RvcnksIHRydWUpO1xuXG4gICAgd3JpdGVEYXRhKFwidWktZWRpdG9yXCIsIGxhc3RJdGVtLCB0cnVlKTtcbn0iLCJsZXQgc2FtcGxlID0gW1xuICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiRm9yZ290UGFzc3dvcmRcIixcbiAgICAgICAgXCJtYXJrdXBcIjogXCI8ZGl2IGNsYXNzTmFtZT1cXFwidnNCdXR0b25cXFwiPjxidXR0b24gaWQ9XFxcImYxMjNcXFwiPkZvcmdvdCBQYXNzd29yZDwvYnV0dG9uPjwvZGl2PlwiLFxuICAgICAgICBcImV2ZW50c1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25DbGlja1wiLFxuICAgICAgICAgICAgICAgIFwicmVkdWNlclwiOiBcInN0YXRlLnNob3dcIixcbiAgICAgICAgICAgICAgICBcInB1Ymxpc2hhYmxlXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJwdWJsaXNoTmFtZVwiOiBcIm9uUGFzc3dvcmRGb3Jnb3R0ZW5cIixcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiZjEyM1wiXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwic3RhdGVcIjogXCJ7XFxcInNob3dcXFwiOlxcXCJmYWxzZVxcXCJ9XCIsXG4gICAgICAgIFwic3R5bGVcIjogXCIudnNCdXR0b257XFxuZm9udC1mYW1pbHk6IEJlbnRvblNhbnNCb29rLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xcbmNvbG9yOiByZ2IoMCwgMCwgMCk7XFxufVxcblxcblxcbi52c0J1dHRvbiBidXR0b257XFxuYm9yZGVyLWNvbG9yOiAjYmYyMTVkO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZDogI2VmNWY5NjtcXG5ib3JkZXI6IDFweCBzb2xpZDtcXG59XFxuXFxuLnZzQnV0dG9uIGJ1dHRvbjpob3ZlcntcXG5ib3JkZXItY29sb3I6ICNiZjIxNWQ7XFxufVwiLFxuICAgICAgICBcImNoaWxkcmVuXCI6IFtdLFxuICAgICAgICBcImlkXCI6IDIxOCxcbiAgICAgICAgXCJjb25maWdcIjogXCJ7fVwiLFxuICAgICAgICBcImlkTWFya3VwXCI6IFwiPGRpdiBjbGFzc05hbWU9XFxcInZzQnV0dG9uXFxcIiBkYXRhLXV1aWQ9XFxcIjBcXFwiPjxidXR0b24gaWQ9XFxcImYxMjNcXFwiIGRhdGEtdXVpZD1cXFwiMVxcXCI+Rm9yZ290IFBhc3N3b3JkPC9idXR0b24+PC9kaXY+XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiTW9kYWxcIixcbiAgICAgICAgXCJtYXJrdXBcIjogXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbFxcXCI+XFxuPGhlYWRlcj5cXG4gIDxoMz5Gb3Jnb3QgUGFzc3dvcmQ8L2gzPlxcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cXFwiY2xvc2VCdXR0b25cXFwiIGlkPVxcXCJ4XFxcIj54PC9idXR0b24+XFxuPC9oZWFkZXI+XFxuPHNlY3Rpb24gY2xhc3M9XFxcImNvbnRlbnRcXFwiPjxQcml2YWN5QW5kUG9saWN5PjwvUHJpdmFjeUFuZFBvbGljeT5cXG4gXFxuPC9zZWN0aW9uPlxcbjxmb290ZXI+Zm9vdGVyPC9mb290ZXI+XFxuPC9kaXY+XCIsXG4gICAgICAgIFwiZXZlbnRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbkNsaWNrXCIsXG4gICAgICAgICAgICAgICAgXCJyZWR1Y2VyXCI6IFwic3RhdGUubmFtZT1cXFwiXFxcIjtcIixcbiAgICAgICAgICAgICAgICBcInB1Ymxpc2hhYmxlXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJwdWJsaXNoTmFtZVwiOiBcIm9uQ2xvc2VNb2RhbFwiLFxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJ4XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJzdGF0ZVwiOiBcInt9XCIsXG4gICAgICAgIFwic3R5bGVcIjogXCIubW9kYWx7XFxuICB3aWR0aDo0MDBweDtcXG4gIGZvbnQtc2l6ZToyMnB4O1xcbiAgcG9zaXRpb246cmVsYXRpdmU7XFxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuY29sb3I6IGJsYWNrO1xcbiAgZm9udC1mYW1pbHk6IEJlbnRvblNhbnNMaWdodCxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OjQwMDtcXG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAuMDRlbTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuXFxufVxcblxcbi5tb2RhbCBoM3tcXG4gIHBhZGRpbmc6MXJlbTtcXG5mb250LXNpemU6MjZweDtcXG5mb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ubW9kYWwgLmNvbnRlbnR7XFxucGFkZGluZzoxcmVtO1xcbmZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5tb2RhbCBmb290ZXJ7XFxucGFkZGluZzoxcmVtO1xcbiAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcXG5mb250LXdlaWdodDogNDAwO1xcbn1cXG4ubW9kYWwgaGVhZGVye1xcbiAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcXG5mb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ubW9kYWwgLmNsb3NlQnV0dG9ue1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDEwcHg7XFxuICB0b3A6IDIwcHg7XFxufVxcblxcbi5tb2RhbCAuY29udGVudHtcXG4gICAgYm9yZGVyOjFweCBzb2xpZCBibGFjaztcXG5mb250LXdlaWdodDogNDAwO1xcbn1cIixcbiAgICAgICAgXCJjaGlsZHJlblwiOiBbXSxcbiAgICAgICAgXCJpZFwiOiAxOTEsXG4gICAgICAgIFwiY29uZmlnXCI6IFwie31cIixcbiAgICAgICAgXCJpZE1hcmt1cFwiOiBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsXFxcIiBkYXRhLXV1aWQ9XFxcIjBcXFwiPlxcbjxoZWFkZXIgZGF0YS11dWlkPVxcXCIxXFxcIj5cXG4gIDxoMyBkYXRhLXV1aWQ9XFxcIjJcXFwiPkZvcmdvdCBQYXNzd29yZDwvaDM+XFxuICAgIDxidXR0b24gY2xhc3NOYW1lPVxcXCJjbG9zZUJ1dHRvblxcXCIgaWQ9XFxcInhcXFwiIGRhdGEtdXVpZD1cXFwiM1xcXCI+eDwvYnV0dG9uPlxcbjwvaGVhZGVyPlxcbjxzZWN0aW9uIGNsYXNzPVxcXCJjb250ZW50XFxcIiBkYXRhLXV1aWQ9XFxcIjRcXFwiPjxQcml2YWN5QW5kUG9saWN5IGRhdGEtdXVpZD1cXFwiNVxcXCI+PC9Qcml2YWN5QW5kUG9saWN5PlxcbiBcXG48L3NlY3Rpb24+XFxuPGZvb3RlciBkYXRhLXV1aWQ9XFxcIjZcXFwiPmZvb3RlcjwvZm9vdGVyPlxcbjwvZGl2PlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIkNhbmNlbEJ1dHRvblwiLFxuICAgICAgICBcIm1hcmt1cFwiOiBcIjxkaXYgY2xhc3NOYW1lPVxcXCJ2c0J1dHRvblxcXCI+PGJ1dHRvbj57c3RhdGUuY2FuY2VsQnV0dG9ufTwvYnV0dG9uPjwvZGl2PlwiLFxuICAgICAgICBcImV2ZW50c1wiOiBbXSxcbiAgICAgICAgXCJzdGF0ZVwiOiBcIntcXFwiY2FuY2VsQnV0dG9uXFxcIjpcXFwiQ2FuY2VsXFxcIn1cIixcbiAgICAgICAgXCJzdHlsZVwiOiBcIi52c0J1dHRvbntcXG5mb250LWZhbWlseTogQmVudG9uU2Fuc0Jvb2ssSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XFxuY29sb3I6IHJnYigwLCAwLCAwKTtcXG59XFxuXFxuXFxuLnZzQnV0dG9uIGJ1dHRvbntcXG5ib3JkZXItY29sb3I6ICNiZjIxNWQ7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kOiAjZWY1Zjk2O1xcbmJvcmRlcjogMXB4IHNvbGlkO1xcbnBhZGRpbmc6IC41cmVtIDJyZW07XFxufVxcblxcbi52c0J1dHRvbiBidXR0b246aG92ZXJ7XFxuYm9yZGVyLWNvbG9yOiAjYmYyMTVkO1xcbn1cIixcbiAgICAgICAgXCJjaGlsZHJlblwiOiBbXSxcbiAgICAgICAgXCJpZFwiOiAxNzQsXG4gICAgICAgIFwiY29uZmlnXCI6IFwie31cIixcbiAgICAgICAgXCJpZE1hcmt1cFwiOiBcIjxkaXYgY2xhc3NOYW1lPVxcXCJ2c0J1dHRvblxcXCIgZGF0YS11dWlkPVxcXCIwXFxcIj48YnV0dG9uIGRhdGEtdXVpZD1cXFwiMVxcXCI+e3N0YXRlLmNhbmNlbEJ1dHRvbn08L2J1dHRvbj48L2Rpdj5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJTdWJtaXRCdXR0b25cIixcbiAgICAgICAgXCJtYXJrdXBcIjogXCI8ZGl2IGNsYXNzTmFtZT1cXFwidnNCdXR0b25cXFwiPjxidXR0b24+e3N0YXRlLnN1Ym1pdEJ1dHRvbn08L2J1dHRvbj48L2Rpdj5cIixcbiAgICAgICAgXCJldmVudHNcIjogW10sXG4gICAgICAgIFwic3RhdGVcIjogXCJ7XFxcInN1Ym1pdEJ1dHRvblxcXCI6XFxcIlN1Ym1pdFxcXCJ9XCIsXG4gICAgICAgIFwic3R5bGVcIjogXCIudnNCdXR0b257XFxuZm9udC1mYW1pbHk6IEJlbnRvblNhbnNCb29rLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xcbmNvbG9yOiByZ2IoMCwgMCwgMCk7XFxufVxcblxcblxcbi52c0J1dHRvbiBidXR0b257XFxuYm9yZGVyLWNvbG9yOiAjYmYyMTVkO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZDogI2VmNWY5NjtcXG5ib3JkZXI6IDFweCBzb2xpZDtcXG5wYWRkaW5nOiAuNXJlbSAycmVtO1xcbn1cXG5cXG4udnNCdXR0b24gYnV0dG9uOmhvdmVye1xcbmJvcmRlci1jb2xvcjogI2JmMjE1ZDtcXG59XCIsXG4gICAgICAgIFwiY2hpbGRyZW5cIjogW10sXG4gICAgICAgIFwiaWRcIjogMTM0LFxuICAgICAgICBcImNvbmZpZ1wiOiBcInt9XCIsXG4gICAgICAgIFwiaWRNYXJrdXBcIjogXCI8ZGl2IGNsYXNzTmFtZT1cXFwidnNCdXR0b25cXFwiIGRhdGEtdXVpZD1cXFwiMFxcXCI+PGJ1dHRvbiBkYXRhLXV1aWQ9XFxcIjFcXFwiPntzdGF0ZS5zdWJtaXRCdXR0b259PC9idXR0b24+PC9kaXY+XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiUHJpdmFjeUFuZFBvbGljeVwiLFxuICAgICAgICBcIm1hcmt1cFwiOiBcIjxkaXYgY2xhc3M9XFxcInByaXZhY3lQb2xpY3lcXFwiPlxcbiAgUGxlYXNlIGVudGVyIHRoZSBlbWFpbCBhZGRyZXNzIHlvdSB1c2VkIHRvIGNyZWF0ZSB5b3VyIGFjY291bnQgYW5kIHdlIHdpbGwgc2VuZCB5b3UgYSBsaW5rIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuIFNlZSBQcml2YWN5IFBvbGljeVxcbjwvZGl2PlwiLFxuICAgICAgICBcImV2ZW50c1wiOiBbXSxcbiAgICAgICAgXCJzdGF0ZVwiOiBcInt9XCIsXG4gICAgICAgIFwic3R5bGVcIjogXCIucHJpdmFjeVBvbGljeXtcXG5mb250LWZhbWlseTogQmVudG9uU2Fuc0Jvb2ssSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XFxuZm9udC1zaXplOiAxMXB4O1xcbiAgICBsaW5lLWhlaWdodDogMTdweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wNGVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XCIsXG4gICAgICAgIFwiY2hpbGRyZW5cIjogW10sXG4gICAgICAgIFwiaWRcIjogODQzLFxuICAgICAgICBcImNvbmZpZ1wiOiBcInt9XCIsXG4gICAgICAgIFwiaWRNYXJrdXBcIjogXCI8ZGl2IGNsYXNzPVxcXCJwcml2YWN5UG9saWN5XFxcIiBkYXRhLXV1aWQ9XFxcIjBcXFwiPlxcbiAgUGxlYXNlIGVudGVyIHRoZSBlbWFpbCBhZGRyZXNzIHlvdSB1c2VkIHRvIGNyZWF0ZSB5b3VyIGFjY291bnQgYW5kIHdlIHdpbGwgc2VuZCB5b3UgYSBsaW5rIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuIFNlZSBQcml2YWN5IFBvbGljeVxcbjwvZGl2PlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIlRlcm1zQW5kU2VydmljZVwiLFxuICAgICAgICBcIm1hcmt1cFwiOiBcIjxkaXYgY2xhc3M9XFxcInByaXZhY3lQb2xpY3lcXFwiPlxcbntzdGF0ZS52YXJpYW50fVxcbjwvZGl2PlwiLFxuICAgICAgICBcImV2ZW50c1wiOiBbXSxcbiAgICAgICAgXCJzdGF0ZVwiOiBcIntcXFwidmFyaWFudFxcXCI6XFxcIlRoaXMgc2l0ZSBpcyBwcm90ZWN0ZWQgYnkgcmVDQVBUQ0hBIGFuZCB0aGUgR29vZ2xlIFByaXZhY3kgUG9saWN5IGFuZCBUZXJtcyBvZiBTZXJ2aWNlIGFwcGx5LlxcXCJ9XCIsXG4gICAgICAgIFwic3R5bGVcIjogXCIucHJpdmFjeVBvbGljeXtcXG5mb250LWZhbWlseTogQmVudG9uU2Fuc0Jvb2ssSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XFxuZm9udC1zaXplOiAxMXB4O1xcbiAgICBsaW5lLWhlaWdodDogMTdweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wNGVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XCIsXG4gICAgICAgIFwiY2hpbGRyZW5cIjogW10sXG4gICAgICAgIFwiaWRcIjogNzk2LFxuICAgICAgICBcImNvbmZpZ1wiOiBcInt9XCIsXG4gICAgICAgIFwiaWRNYXJrdXBcIjogXCI8ZGl2IGNsYXNzPVxcXCJwcml2YWN5UG9saWN5XFxcIiBkYXRhLXV1aWQ9XFxcIjBcXFwiPlxcbntzdGF0ZS52YXJpYW50fVxcbjwvZGl2PlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIkZvcm1cIixcbiAgICAgICAgXCJtYXJrdXBcIjogXCI8Zm9ybSBjbGFzc05hbWU9XFxcInZzZnJtXFxcIj5cXG48L2Zvcm0+XCIsXG4gICAgICAgIFwiZXZlbnRzXCI6IFtdLFxuICAgICAgICBcInN0YXRlXCI6IFwie31cIixcbiAgICAgICAgXCJzdHlsZVwiOiBcIi52c2ZybXtcXG5oZWlnaHQ6NDAwcHg7XFxud2lkdGg6NDAwcHg7XFxufVwiLFxuICAgICAgICBcImNoaWxkcmVuXCI6IFtdLFxuICAgICAgICBcImlkXCI6IDM5MCxcbiAgICAgICAgXCJjb25maWdcIjogXCJ7fVwiLFxuICAgICAgICBcImlkTWFya3VwXCI6IFwiPGZvcm0gY2xhc3NOYW1lPVxcXCJ2c2ZybVxcXCIgZGF0YS11dWlkPVxcXCIwXFxcIj5cXG48L2Zvcm0+XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiRW1haWxJbnB1dFwiLFxuICAgICAgICBcIm1hcmt1cFwiOiBcIjxzcGFuIGNsYXNzTmFtZT1cXFwiZW1haWxJbnB1dFxcXCI+XFxuPGlucHV0IGlkPVxcXCJpbnB1dFxcXCIgY2xhc3NOYW1lPVxcXCJlbWFpbFxcXCIgdHlwZT1cXFwiZW1haWxcXFwiIHZhbHVlPXtzdGF0ZS5lbWFpbH0gcGxhY2Vob2xkZXI9XFxcIkVtYWlsIEFkZHJlc3MgKlxcXCIvPlxcbjwvc3Bhbj5cIixcbiAgICAgICAgXCJldmVudHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9uQ2hhbmdlXCIsXG4gICAgICAgICAgICAgICAgXCJyZWR1Y2VyXCI6IFwic3RhdGUuZW1haWwgPSBlLnRhcmdldC52YWx1ZVwiLFxuICAgICAgICAgICAgICAgIFwicHVibGlzaGFibGVcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcInB1Ymxpc2hOYW1lXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcImlucHV0XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJzdGF0ZVwiOiBcInt9XCIsXG4gICAgICAgIFwic3R5bGVcIjogXCIuZW1haWxJbnB1dCAuZW1haWx7XFxucGFkZGluZzogLjc1cmVtO1xcbmJvcmRlcjogMXB4IHNvbGlkICNlMWUxZTE7XFxuZm9udC1mYW1pbHk6IEJlbnRvblNhbnNCb29rLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG5cXG59XCIsXG4gICAgICAgIFwiY2hpbGRyZW5cIjogW10sXG4gICAgICAgIFwiaWRcIjogOTkxLFxuICAgICAgICBcImNvbmZpZ1wiOiBcInt9XCIsXG4gICAgICAgIFwiaWRNYXJrdXBcIjogXCI8c3BhbiBjbGFzc05hbWU9XFxcImVtYWlsSW5wdXRcXFwiIGRhdGEtdXVpZD1cXFwiMFxcXCI+XFxuPGlucHV0IGlkPVxcXCJpbnB1dFxcXCIgY2xhc3NOYW1lPVxcXCJlbWFpbFxcXCIgdHlwZT1cXFwiZW1haWxcXFwiIHZhbHVlPXtzdGF0ZS5lbWFpbH0gcGxhY2Vob2xkZXI9XFxcIkVtYWlsIEFkZHJlc3MgKlxcXCIvPlxcbjwvc3Bhbj5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJSZXNldFBhc3N3b3JkRm9ybVwiLFxuICAgICAgICBcIm1hcmt1cFwiOiBcIjxmb3JtPjxUZXJtc0FuZFNlcnZpY2U+PC9UZXJtc0FuZFNlcnZpY2U+PEVtYWlsSW5wdXQ+PC9FbWFpbElucHV0PjxTdWJtaXRCdXR0b24+PC9TdWJtaXRCdXR0b24+PENhbmNlbEJ1dHRvbj48L0NhbmNlbEJ1dHRvbj48VGVybXNBbmRTZXJ2aWNlPjxQcml2YWN5QW5kUG9saWN5PjwvUHJpdmFjeUFuZFBvbGljeT48L1Rlcm1zQW5kU2VydmljZT5cXG48L2Zvcm0+XCIsXG4gICAgICAgIFwiZXZlbnRzXCI6IFtdLFxuICAgICAgICBcInN0YXRlXCI6IFwie1xcXCJ2YXJpYW50XFxcIjpcXFwidGV4dFxcXCJ9XCIsXG4gICAgICAgIFwic3R5bGVcIjogXCJmb3Jte1xcbmhlaWdodDo0MDBweDt9XCIsXG4gICAgICAgIFwiY2hpbGRyZW5cIjogW10sXG4gICAgICAgIFwiaWRcIjogMzY0LFxuICAgICAgICBcImNvbmZpZ1wiOiBcInt9XCIsXG4gICAgICAgIFwiaWRNYXJrdXBcIjogXCI8Zm9ybSBkYXRhLXV1aWQ9XFxcIjBcXFwiPjxUZXJtc0FuZFNlcnZpY2UgZGF0YS11dWlkPVxcXCIxXFxcIj48L1Rlcm1zQW5kU2VydmljZT48RW1haWxJbnB1dCBkYXRhLXV1aWQ9XFxcIjJcXFwiPjwvRW1haWxJbnB1dD48U3VibWl0QnV0dG9uIGRhdGEtdXVpZD1cXFwiM1xcXCI+PC9TdWJtaXRCdXR0b24+PENhbmNlbEJ1dHRvbiBkYXRhLXV1aWQ9XFxcIjRcXFwiPjwvQ2FuY2VsQnV0dG9uPjxUZXJtc0FuZFNlcnZpY2UgZGF0YS11dWlkPVxcXCI1XFxcIj48UHJpdmFjeUFuZFBvbGljeSBkYXRhLXV1aWQ9XFxcIjZcXFwiPjwvUHJpdmFjeUFuZFBvbGljeT48L1Rlcm1zQW5kU2VydmljZT5cXG48L2Zvcm0+XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiUGFnZVwiLFxuICAgICAgICBcIm1hcmt1cFwiOiBcIjxkaXYgY2xhc3NOYW1lPVxcXCJwYWdlXFxcIj48Rm9yZ290UGFzc3dvcmQ+PC9Gb3Jnb3RQYXNzd29yZD48UmVzZXRQYXNzd29yZE1vZGFsPjwvUmVzZXRQYXNzd29yZE1vZGFsPjwvZGl2PlwiLFxuICAgICAgICBcImV2ZW50c1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25DbG9zZU1vZGFsXCIsXG4gICAgICAgICAgICAgICAgXCJyZWR1Y2VyXCI6IFwic3RhdGUuUmVzZXRQYXNzd29yZE1vZGFsID0gW107XCIsXG4gICAgICAgICAgICAgICAgXCJwdWJsaXNoYWJsZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwicHVibGlzaE5hbWVcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiVmFyaWFudE1vZGFsXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25DbG9zZVwiLFxuICAgICAgICAgICAgICAgIFwicmVkdWNlclwiOiBcInN0YXRlLlJlc2V0UGFzc3dvcmRNb2RhbCA9IFtdO1wiLFxuICAgICAgICAgICAgICAgIFwicHVibGlzaGFibGVcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcInB1Ymxpc2hOYW1lXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIlJlc2V0UGFzc3dvcmRNb2RhbFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9uUGFzc3dvcmRGb3Jnb3R0ZW5cIixcbiAgICAgICAgICAgICAgICBcInJlZHVjZXJcIjogXCJzdGF0ZS5SZXNldFBhc3N3b3JkTW9kYWwgPVt7dGl0bGU6IFxcXCJGb3Jnb3QgUGFzc3dvcmRcXFwiLFxcXCJmb290ZXJcXFwiOiBcXFwiQ29weXJpZ3RzXFxcIixcXFwic2hvd1xcXCI6IFxcXCJzZFxcXCJ9XVwiLFxuICAgICAgICAgICAgICAgIFwicHVibGlzaGFibGVcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcInB1Ymxpc2hOYW1lXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIkZvcmdvdFBhc3N3b3JkXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJzdGF0ZVwiOiBcIntcXFwic2hvd01vZGFsXFxcIjpmYWxzZSxcXFwibGlzdFxcXCI6WzEsMiwzLDQsNV0sXFxcIlJlc2V0UGFzc3dvcmRNb2RhbFxcXCI6W119XCIsXG4gICAgICAgIFwic3R5bGVcIjogXCIucGFnZXtcXG5oZWlnaHQ6IDcwMHB4O1xcbndpZHRoOiA1MDBweDtcXG5cXG59XCIsXG4gICAgICAgIFwiY2hpbGRyZW5cIjogW10sXG4gICAgICAgIFwiaWRcIjogODE1LFxuICAgICAgICBcImNvbmZpZ1wiOiBcIntcXFwiVmFyaWFudE1vZGFsXFxcIjp7XFxcInNob3dIaWRlUHJvcFxcXCI6XFxcInNob3dNb2RhbFxcXCIsXFxcIm92ZXJyaWRlXFxcIjpmYWxzZX0sXFxcIkZvcmdvdFBhc3N3b3JkQnV0dG9uXFxcIjp7XFxcInNob3dIaWRlUHJvcFxcXCI6XFxcIlxcXCIsXFxcIm92ZXJyaWRlXFxcIjpmYWxzZX0sXFxcIkZvcmdvdFBhc3N3b3JkXFxcIjp7XFxcInNob3dIaWRlUHJvcFxcXCI6XFxcIlxcXCIsXFxcIm92ZXJyaWRlXFxcIjpmYWxzZSxcXFwicmVuZGVyTGlzdFByb3BcXFwiOlxcXCJcXFwifSxcXFwiUmVzZXRQYXNzd29yZE1vZGFsXFxcIjp7XFxcInNob3dIaWRlUHJvcFxcXCI6XFxcInNob3dNb2RhbFxcXCIsXFxcIm92ZXJyaWRlXFxcIjp0cnVlLFxcXCJyZW5kZXJMaXN0UHJvcFxcXCI6XFxcIlxcXCJ9fVwiLFxuICAgICAgICBcImlkTWFya3VwXCI6IFwiPGRpdiBjbGFzc05hbWU9XFxcInBhZ2VcXFwiIGRhdGEtdXVpZD1cXFwiMFxcXCI+PEZvcmdvdFBhc3N3b3JkIGRhdGEtdXVpZD1cXFwiMVxcXCI+PC9Gb3Jnb3RQYXNzd29yZD48UmVzZXRQYXNzd29yZE1vZGFsIGRhdGEtdXVpZD1cXFwiMlxcXCI+PC9SZXNldFBhc3N3b3JkTW9kYWw+PC9kaXY+XCIsXG4gICAgICAgIFwidmFyaWFudHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwic2hvd01vZGFsXCI6IFwiZmFsc2VcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInNob3dNb2RhbFwiOiBcImZhbHNlXCIsXG4gICAgICAgICAgICAgICAgXCJGb3Jnb3RQYXNzd29yZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwic2hvd1wiOiBcImZhbHNlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwic2hvd01vZGFsXCI6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJzaG93TW9kYWxcIjogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgXCJGb3Jnb3RQYXNzd29yZFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwic2hvd1wiOiBcImZhbHNlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwic2hvd01vZGFsXCI6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwic2hvd01vZGFsXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiRm9yZ290UGFzc3dvcmRcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInNob3dcIjogXCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInNob3dNb2RhbFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIlZhcmlhbnRNb2RhbFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJGb3Jnb3QgUGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJmb290ZXJcIjogXCJDb3B5cmlndHNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJnb29kXCI6IFwiaGlkZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInNob3dNb2RhbFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcIlJlc2V0UGFzc3dvcmRNb2RhbFwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidGl0bGVcIjogXCJGb3Jnb3QgUGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJmb290ZXJcIjogXCJDb3B5cmlndHNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJzaG93XCI6IFwic2RcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJzaG93TW9kYWxcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJWYXJpYW50Rm9yZ290UGFzc3dvcmRcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInNob3dcIjogXCJmYWxzZVwiLFxuICAgICAgICAgICAgICAgICAgICBcInZhcmlhbnRcIjogXCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwic2hvd01vZGFsXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgICAgIDMsXG4gICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgIDVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiRm9yZ290UGFzc3dvcmRcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInNob3dcIjogXCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInNob3dNb2RhbFwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwibGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgICAgIDMsXG4gICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgIDVcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwic2hvd01vZGFsXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwibGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgICAgIDMsXG4gICAgICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgICAgIDVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwiUmVzZXRQYXNzd29yZE1vZGFsXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0aXRsZVwiOiBcIkZvcmdvdCBQYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgICBcImZvb3RlclwiOiBcIkNvcHlyaWd0c1wiLFxuICAgICAgICAgICAgICAgICAgICBcInNob3dcIjogXCJzZFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInNob3dNb2RhbFwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcImxpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgICAgICAyLFxuICAgICAgICAgICAgICAgICAgICAzLFxuICAgICAgICAgICAgICAgICAgICA0LFxuICAgICAgICAgICAgICAgICAgICA1XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIlJlc2V0UGFzc3dvcmRNb2RhbFwiLFxuICAgICAgICBcIm1hcmt1cFwiOiBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsXFxcIj5cXG48aGVhZGVyPlxcbiAgPGgzPntzdGF0ZS50aXRsZX08L2gzPlxcbiAgICA8YnV0dG9uIGlkPVxcXCJjbG9zZVxcXCIgY2xhc3NOYW1lPVxcXCJjbG9zZUJ1dHRvblxcXCI+eDwvYnV0dG9uPlxcbjwvaGVhZGVyPlxcbjxzZWN0aW9uIGNsYXNzPVxcXCJjb250ZW50XFxcIj48UmVzZXRQYXNzd29yZEZvcm0+PC9SZXNldFBhc3N3b3JkRm9ybT5cXG48L3NlY3Rpb24+XFxuPGZvb3Rlcj57c3RhdGUuZm9vdGVyfTwvZm9vdGVyPlxcbjwvZGl2PlwiLFxuICAgICAgICBcImV2ZW50c1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25DbGlja1wiLFxuICAgICAgICAgICAgICAgIFwicmVkdWNlclwiOiBcInN0YXRlLnNob3cgPSBcXFwic2RcXFwiO1wiLFxuICAgICAgICAgICAgICAgIFwicHVibGlzaGFibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcInB1Ymxpc2hOYW1lXCI6IFwib25DbG9zZVwiLFxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJjbG9zZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwic3RhdGVcIjogXCJ7XFxcInRpdGxlXFxcIjpcXFwiRm9yZ290IFBhc3N3b3JkXFxcIixcXFwiZm9vdGVyXFxcIjpcXFwiQ29weXJpZ3RzXFxcIn1cIixcbiAgICAgICAgXCJzdHlsZVwiOiBcIi5tb2RhbHtcXG4gIHdpZHRoOjQwMHB4O1xcbiAgZm9udC1zaXplOjIycHg7XFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5jb2xvcjogYmxhY2s7XFxuICBmb250LWZhbWlseTogQmVudG9uU2Fuc0xpZ2h0LEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6NDAwO1xcbiAgICBsaW5lLWhlaWdodDogMTdweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wNGVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG5cXG59XFxuXFxuLm1vZGFsIGgze1xcbiAgcGFkZGluZzoxcmVtO1xcbmZvbnQtc2l6ZToyNnB4O1xcbmZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5tb2RhbCAuY29udGVudHtcXG5wYWRkaW5nOjFyZW07XFxuZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLm1vZGFsIGZvb3RlcntcXG5wYWRkaW5nOjFyZW07XFxuICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xcbmZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5tb2RhbCBoZWFkZXJ7XFxuICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xcbmZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5tb2RhbCAuY2xvc2VCdXR0b257XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIHRvcDogMjBweDtcXG59XFxuXFxuLm1vZGFsIC5jb250ZW50e1xcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xcbmZvbnQtd2VpZ2h0OiA0MDA7XFxufVwiLFxuICAgICAgICBcImNoaWxkcmVuXCI6IFtdLFxuICAgICAgICBcImlkXCI6IDYyNyxcbiAgICAgICAgXCJjb25maWdcIjogXCJ7fVwiLFxuICAgICAgICBcImlkTWFya3VwXCI6IFwiPGRpdiBjbGFzcz1cXFwibW9kYWxcXFwiIGRhdGEtdXVpZD1cXFwiMFxcXCI+XFxuPGhlYWRlciBkYXRhLXV1aWQ9XFxcIjFcXFwiPlxcbiAgPGgzIGRhdGEtdXVpZD1cXFwiMlxcXCI+e3N0YXRlLnRpdGxlfTwvaDM+XFxuICAgIDxidXR0b24gaWQ9XFxcImNsb3NlXFxcIiBjbGFzc05hbWU9XFxcImNsb3NlQnV0dG9uXFxcIiBkYXRhLXV1aWQ9XFxcIjNcXFwiPng8L2J1dHRvbj5cXG48L2hlYWRlcj5cXG48c2VjdGlvbiBjbGFzcz1cXFwiY29udGVudFxcXCIgZGF0YS11dWlkPVxcXCI0XFxcIj48UmVzZXRQYXNzd29yZEZvcm0gZGF0YS11dWlkPVxcXCI1XFxcIj48L1Jlc2V0UGFzc3dvcmRGb3JtPlxcbjwvc2VjdGlvbj5cXG48Zm9vdGVyIGRhdGEtdXVpZD1cXFwiNlxcXCI+e3N0YXRlLmZvb3Rlcn08L2Zvb3Rlcj5cXG48L2Rpdj5cIlxuICAgIH0sXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJGYWNlYm9va1wiLFxuICAgICAgICBcIm1hcmt1cFwiOiBcIjxkaXYgY2xhc3NOYW1lPVxcXCJmYWNlYm9va1xcXCI+PEhlbGxvQ29tcG9uZW50PjxNb2RhbD48Rm9yZ290UGFzc3dvcmQ+PC9Gb3Jnb3RQYXNzd29yZD48L01vZGFsPjwvSGVsbG9Db21wb25lbnQ+PC9kaXY+XCIsXG4gICAgICAgIFwiZXZlbnRzXCI6IFtdLFxuICAgICAgICBcInN0YXRlXCI6IFwie31cIixcbiAgICAgICAgXCJzdHlsZVwiOiBcIi5mYWNlYm9va3tcXG5iYWNrZ3JvdW5kLWltYWdlOiRhc3NldHNbJ2ZhY2Vib29rLnBuZyddO1xcbn1cIixcbiAgICAgICAgXCJjaGlsZHJlblwiOiBbXSxcbiAgICAgICAgXCJpZFwiOiAxMixcbiAgICAgICAgXCJjb25maWdcIjogXCJ7fVwiLFxuICAgICAgICBcImlkTWFya3VwXCI6IFwiPGRpdiBjbGFzc05hbWU9XFxcImZhY2Vib29rXFxcIiBkYXRhLXV1aWQ9XFxcIjBcXFwiPjxIZWxsb0NvbXBvbmVudCBkYXRhLXV1aWQ9XFxcIjFcXFwiPjxNb2RhbCBkYXRhLXV1aWQ9XFxcIjJcXFwiPjxGb3Jnb3RQYXNzd29yZCBkYXRhLXV1aWQ9XFxcIjNcXFwiPjwvRm9yZ290UGFzc3dvcmQ+PC9Nb2RhbD48L0hlbGxvQ29tcG9uZW50PjwvZGl2PlwiXG4gICAgfVxuXVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBzYW1wbGU6IHNhbXBsZVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7c2VsZWN0aW9uQ2hhbmdlZCwgaGFuZGxlRHJhZ30gZnJvbSBcIi4vRXZlbnRzXCI7XG5cbmltcG9ydCB7b25FeHBvcnR9IGZyb20gXCIuLi8uLi9VdGlsaXRpZXMvQ29tcG9uZW50cy9Gb2xkZXJzL0ZvbGRlci9FdmVudHNcIjtcblxuaW1wb3J0ICBcIi4vU3R5bGUuY3NzXCI7XG5cbmNsYXNzIENvbXBvbmVudHQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNlbGVjdGVkQ29tcG9uZW50OiB0aGlzLnByb3BzLnNlbGVjdGVkQ29tcG9uZW50XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVzdG9yZUNsYXNzKGV2ZW50KXtcbiAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlQWRkaXRpb25hbHNcIik7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBzZWxlY3RlZENvbXBvbmVudCA9IHByb3BzLnNlbGVjdGVkQ29tcG9uZW50O1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50O1xuICAgICAgICAvLyBSZW1vdmUgdGhpcy5wcm9wcy5pbmRleCwgaW5zdGVhZCB1c2UgdGhpcyBlbGVtZW50IGluc3RhbmNlIGluZGV4LiBSZW1vdmVzIGR1cGxpY2F0ZSBjb2RlXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIiBkcmFnZ2FibGU9XCJ0cnVlXCIgZGF0YS1uYW1lPXtjb21wb25lbnQubmFtZX0gb25EcmFnU3RhcnQ9e2hhbmRsZURyYWcuYmluZCh0aGlzKX0gb25EcmFnRW5kPXt0aGlzLnJlc3RvcmVDbGFzc30+XG4gICAgICAgICAgICAgICAgPGxpIFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSB7c2VsZWN0ZWRDb21wb25lbnQgJiYgcHJvcHMuY29tcG9uZW50Lm5hbWU9PT1zZWxlY3RlZENvbXBvbmVudC5uYW1lID8gXCJzZWxlY3RlZCBjb21wb25lbnRcIjogXCJjb21wb25lbnRcIn1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHtzZWxlY3Rpb25DaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0ge3Byb3BzLmluZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29tcG9uZW50TmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbXBvbmVudC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHtwcm9wcy5pbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkV4cG9ydC5iaW5kKG51bGwsY29tcG9uZW50Lm5hbWUpfT48aSBjbGFzc05hbWU9XCJmYXMgZmEtZmlsZS1leHBvcnRcIj48L2k+RXhwb3J0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0ge3Byb3BzLmluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uRGVsZXRlQ29tcG9uZW50fT48aSBjbGFzc05hbWU9XCJmYSBmYS10cmFzaFwiPjwvaT5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8LyBkaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnR0O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdGlvbkNoYW5nZWQoZSkge1xuICAgIHRoaXMucHJvcHMub25TZWxlY3Rpb25DaGFuZ2UoZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVEcmFnKGUpe1xuXG4gICAgbGV0IG5hbWUgPSBldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1uYW1lXCIpXG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJoaWRlQWRkaXRpb25hbHNcIik7XG4gICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YShcImNvbXBvbmVudC1uYW1lXCIsIG5hbWUpO1xufVxuXG53aW5kb3cuZXZlbnRDYWxsYmFja3MgPSB7XG4gICAgaGFuZGxlRHJhZzogaGFuZGxlRHJhZ1xufTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zZWxlY3RlZCwgLmdyZWVuIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XFxuICAgIGJhY2tncm91bmQ6IHJnYig0MywgNDMsIDQzKTtcXG59XFxuXFxuLmJhY2tncm91bmQge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNjQsIDY0LCA2NCk7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzMzMzO1xcbn1cXG5cXG4uY29tcG9uZW50IHtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jb21wb25lbnQgLmNvbXBvbmVudE5hbWV7XFxuICAgIHBhZGRpbmc6N3B4O1xcbn1cXG5cXG4udGh1bWJuYWlsIHtcXG4gICAgd2lkdGg6IDUwcHg7XFxufVxcblxcbi5oaWRlQWRkaXRpb25hbHMgc3Bhbjpub3QoLmNvbXBvbmVudE5hbWUpe1xcbiAgICBkaXNwbGF5Om5vbmU7XFxufVxcblxcbi5oaWRlQWRkaXRpb25hbHMge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVwiLCBcIlwiXSk7XG5cbiIsImltcG9ydCB7d3JpdGVEYXRhfSBmcm9tIFwiLi4vdXRpbGl0aWVzL1N0b3JhZ2VcIjtcblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBvbkRlbGV0ZUNvbXBvbmVudChldmVudCkge1xuICAgIFxuICAgIC8vIHN0b3AgZXZlbnQgcHJvcGFnYXRpb24uIGVsc2Ugb25TZWxlY3Rpb25DaGFuZ2UgZ2V0cyByZSB0cmlnZ2VyZWQuXG4gICAgXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgbGV0IGNvbXBvbmVudE5hbWUgPSBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmlubmVyVGV4dC5zcGxpdChcIlxcblwiKVswXTtcblxuICAgIGlmKHRoaXMuc3RhdGUuY29tcG9uZW50cy5maW5kKGNvbXBvbmVudD0+Y29tcG9uZW50Lm5hbWU9PT1jb21wb25lbnROYW1lKS5sZW5ndGg8MSl7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gR2V0IGFsbCB0aGUgZWxlbWVudHNcbiAgICBsZXQgY29tcG9uZW50cyA9IEFycmF5LmZyb20odGhpcy5zdGF0ZS5jb21wb25lbnRzKTtcbiAgICBcbiAgICAvLyBGaW5kIHRoZSBpbmRleCBvZiBlbGVtZW50IHRvIGJlIGRlbGV0ZWQuXG4gICAgbGV0IGluZGV4ID0gY29tcG9uZW50cy5maW5kSW5kZXgoY29tcG9uZW50PT5jb21wb25lbnQubmFtZT09PWNvbXBvbmVudE5hbWUpXG5cbiAgICAvLyBSZW1vdmUgdGhlIGVsZW1lbnQgZnJvbSB0aGUgbGlzdFxuICAgIGNvbXBvbmVudHMuc3BsaWNlKGluZGV4LDEpO1xuXG4gICAgLy8gVXBkYXRlIHRoZSBzdGF0ZSB3aXRoIG5ldyBlbGVtZW50cy5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY29tcG9uZW50czogY29tcG9uZW50c1xuICAgIH0pXG5cbiAgICAvLyBQZXJzaXN0IHRoZSBjaGFuZ2VzLlxuICAgIHdyaXRlRGF0YShcInVpLWVkaXRvclwiLCBjb21wb25lbnRzKVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkRlbGV0ZUZvbGRlcihUWVBFLCBmb2xkZXJOYW1lKXtcbiAgICBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgY2FzZSBcIkZPTERFUlwiOlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIFxuICAgICAgICBjYXNlIFwiRk9MREVSX0FORF9DT05URU5UU1wiOlxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIkNPTlRFTlRTXCI6XG4gICAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICAgIGxldCBmb2xkZXJzID0gQXJyYXkuZnJvbSh0aGlzLnN0YXRlLmZvbGRlcnMpXG4gICAgICAgICAgICBsZXQgZm9sZGVyVG9EZWxldGUgPSBmb2xkZXJzLmZpbmQoZm9sZGVyPT4gZm9sZGVyLm5hbWU9PT1mb2xkZXJOYW1lKTtcbiAgICAgICAgICAgIGxldCBub0ZvbGRlciA9IGZvbGRlcnMuZmluZChmb2xkZXI9PiBmb2xkZXIudHlwZT09PVwibm9Gb2xkZXJcIik7XG4gICAgICAgICAgICAvLyBQdXNoIGNvbnRlbnRzIHRvIFwibm9Gb2xkZXJcIi5cbiAgICAgICAgICAgIG5vRm9sZGVyLmNvbnRlbnRzLnB1c2goLi4uZm9sZGVyVG9EZWxldGUuY29udGVudHMpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBEZWxldGUgZm9sZGVyLlxuICAgICAgICAgICAgICAgIC8vICBmaW5kIGluZGV4LlxuICAgICAgICAgICAgbGV0IGluZGV4ID0gZm9sZGVycy5maW5kSW5kZXgoZm9sZGVyID0+IGZvbGRlci5uYW1lPT09Zm9sZGVyTmFtZSk7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBpdGVtLlxuICAgICAgICAgICAgZm9sZGVycy5zcGxpY2UoaW5kZXgsMSk7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgc3RhdGUuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKGZvbGRlcnMpXG4gICAgICAgICAgICB3cml0ZURhdGEoXCJmb2xkZXJzXCIsIGZvbGRlcnMpXG5cbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn0iLCIvLyBMaWJyYXJpZXMuXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi9jb25maWdcIjtcblxuY2xhc3MgRHJhZ2dhYmxlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIGxldCBwYW5lbE5hbWUgPSBgdWktZWRpdG9yLXNldHRpbmdzLWRyYWdnYWJsZS1jb21wb25lbnQtJHt0aGlzLnByb3BzLmNoaWxkcmVuLnByb3BzLnRpdGxlfWA7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHBhbmVsTmFtZSkpIHx8IGNvbmZpZ1twYW5lbE5hbWVdO1xuICAgICAgICB0aGlzLnN0YXRlLmRyYWdnYWJsZT0gXCJmYWxzZVwiXG4gICAgfVxuXG4gICAgbW92ZURpdihlKXtcbiAgICAgICAgaWYoZS50YXJnZXQuaWQ9PT1cIm1vdmVcIil7XG4gICAgICAgICAgICBsZXQgc3RhdGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpKTtcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLnRvcCA9IGUucGFnZVkgK1wicHhcIlxuICAgICAgICAgICAgc3RhdGUuc3R5bGUubGVmdCA9IGUucGFnZVggK1wicHhcIlxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc3R5bGUgOiBzdGF0ZS5zdHlsZVxuICAgICAgICAgICAgfSwoKT0+e1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGB1aS1lZGl0b3Itc2V0dGluZ3MtZHJhZ2dhYmxlLWNvbXBvbmVudC0ke3RoaXMucHJvcHMuY2hpbGRyZW4ucHJvcHMudGl0bGV9YCxKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlKSk7XG4gICAgICAgICAgICB9KSAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZU1pbmltaXNlTWF4aW1pc2UoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG1pbmltaXNlZDogIXRoaXMuc3RhdGUubWluaW1pc2VkXG4gICAgICAgIH0sKCk9PntcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGB1aS1lZGl0b3Itc2V0dGluZ3MtZHJhZ2dhYmxlLWNvbXBvbmVudC0ke3RoaXMucHJvcHMuY2hpbGRyZW4ucHJvcHMudGl0bGV9YCxKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlKSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgb25Nb3VzZUVudGVyKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGRyYWdnYWJsZTpcInRydWVcIlxuICAgICAgICB9KVxuICAgIH1cblxuICAgIG9uTW91c2VMZWF2ZSgpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGRyYWdnYWJsZTpcImZhbHNlXCJcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGRyYWdnYWJsZT17dGhpcy5zdGF0ZS5kcmFnZ2FibGV9IGlkPVwibW92ZVwiIG9uRHJhZ0VuZD17dGhpcy5tb3ZlRGl2LmJpbmQodGhpcyl9IHN0eWxlPXt0aGlzLnN0YXRlLnN0eWxlfSA+XG4gICAgICAgICAgICAgICAgPHNwYW4gdGl0bGU9XCJNb3ZlXCIgY2xhc3NOYW1lPVwibW92ZS1oYW5kbGVcIiBvbk1vdXNlRG93bj17dGhpcy5vbk1vdXNlRW50ZXIuYmluZCh0aGlzKX0gb25Nb3VzZVVwPXt0aGlzLm9uTW91c2VMZWF2ZS5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYXJyb3dzLWFsdCBmYS14c1wiPjwvaT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm1pbmltaXNlZCA/ICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdGl0bGU9XCJNaW5pbWlzZVwiIGNsYXNzTmFtZT1cIm1heGltaXNlLWhhbmRsZVwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTWluaW1pc2VNYXhpbWlzZS5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS13aW5kb3ctbWF4aW1pemUgZmEteHNcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB0aXRsZT1cIk1pbmltaXNlXCIgY2xhc3NOYW1lPVwibWluaW1pc2UtaGFuZGxlXCIgb25DbGljaz17dGhpcy50b2dnbGVNaW5pbWlzZU1heGltaXNlLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXdpbmRvdy1taW5pbWl6ZSBmYS14c1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubWluaW1pc2VkID8gXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBlZGl0b3ItdGFiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aGlzLnByb3BzLmNoaWxkcmVuLnR5cGUubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlbiBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJhZ2dhYmxlQ29tcG9uZW50OyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI21vdmUgPiBzcGFueyAgXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbiNtb3ZlIC5tb3ZlLWhhbmRsZXtcXG4gICAgY3Vyc29yOiBtb3ZlO1xcbn1cXG5cXG4jbW92ZSAubW92ZS1oYW5kbGUsXFxuI21vdmUgLm1pbmltaXNlLWhhbmRsZSxcXG4jbW92ZSAubWF4aW1pc2UtaGFuZGxlIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcXG59XCIsIFwiXCJdKTtcblxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgXCJ1aS1lZGl0b3Itc2V0dGluZ3MtZHJhZ2dhYmxlLWNvbXBvbmVudC1UYWdFeHBsb3JlclwiOiB7XG4gICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgICAgICAgICAgICAgXCJ0b3BcIjogXCI2MDJweFwiLFxuICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogXCI5NTRweFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWluaW1pc2VkXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJkcmFnZ2FibGVcIjogXCJ0cnVlXCJcbiAgICB9LFxuICAgIFwidWktZWRpdG9yLXNldHRpbmdzLWRyYWdnYWJsZS1jb21wb25lbnQtU3R5bGVFeHBsb3JlclwiOiB7XG4gICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgICAgICAgICAgICAgXCJ0b3BcIjogXCI1ODdweFwiLFxuICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogXCI1NzdweFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWluaW1pc2VkXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJkcmFnZ2FibGVcIjogXCJ0cnVlXCJcbiAgICB9LFxuICAgIFwidWktZWRpdG9yLXNldHRpbmdzLWRyYWdnYWJsZS1jb21wb25lbnQtRXZlbnRzXCI6IHtcbiAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICAgICAgICAgICAgICBcInRvcFwiOiBcIjM1MnB4XCIsXG4gICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiBcIjEwMzFweFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWluaW1pc2VkXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJkcmFnZ2FibGVcIjogXCJ0cnVlXCJcbiAgICB9LFxuICAgIFwidWktZWRpdG9yLXNldHRpbmdzLWRyYWdnYWJsZS1jb21wb25lbnQtRWRpdG9yXCI6IHtcbiAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICAgICAgICAgICAgICBcInRvcFwiOiBcIjQ2cHhcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IFwiMzYycHhcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1pbmltaXNlZFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwiZHJhZ2dhYmxlXCI6IFwidHJ1ZVwiXG4gICAgfSxcbiAgICBcInVpLWVkaXRvci1zZXR0aW5ncy1kcmFnZ2FibGUtY29tcG9uZW50LUNvbXBvbmVudHNcIjoge1xuICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgICAgIFwidG9wXCI6IFwiNTBweFwiLFxuICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogXCIyMXB4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtaW5pbWlzZWRcIjogZmFsc2UsXG4gICAgICAgICAgICBcImRyYWdnYWJsZVwiOiBcInRydWVcIlxuICAgIH0sXG4gICAgXCJ1aS1lZGl0b3Itc2V0dGluZ3MtZHJhZ2dhYmxlLWNvbXBvbmVudC1QcmV2aWV3XCI6IHtcbiAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICAgICAgICAgICAgICBcInRvcFwiOiBcIjYxNHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiBcIjMyN3B4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtaW5pbWlzZWRcIjogZmFsc2UsXG4gICAgICAgICAgICBcImRyYWdnYWJsZVwiOiBcInRydWVcIlxuICAgIH0sXG4gICAgXCJ1aS1lZGl0b3Itc2V0dGluZ3MtZHJhZ2dhYmxlLWNvbXBvbmVudC1Bc3NldHNcIjoge1xuICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgICAgIFwidG9wXCI6IFwiMTA2cHhcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IFwiMTUwNHB4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtaW5pbWlzZWRcIjogZmFsc2UsXG4gICAgICAgICAgICBcImRyYWdnYWJsZVwiOiBcInRydWVcIlxuICAgIH0sXG4gICAgXCJ1aS1lZGl0b3Itc2V0dGluZ3MtZHJhZ2dhYmxlLWNvbXBvbmVudC1IaXN0b3J5XCI6IHtcbiAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICAgICAgICAgICAgICBcInRvcFwiOiBcIjU5NXB4XCIsXG4gICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiBcIjg2N3B4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtaW5pbWlzZWRcIjogZmFsc2UsXG4gICAgICAgICAgICBcImRyYWdnYWJsZVwiOiBcInRydWVcIlxuICAgIH1cbn0iLCJcbi8vIExpYnJhcmllcy5cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFwiLi9TdHlsZS5jc3NcIjtcbmltcG9ydCB7dXBkYXRlTmFtZSwgdXBkYXRlTWFya3VwLCB1cGRhdGVTdHlsZSwgdXBkYXRlU3RhdGV9IGZyb20gXCIuL1JlZHVjZXJcIjtcblxuaW1wb3J0IHtyZWFkQ29tcG9uZW50fSBmcm9tIFwiLi4vdXRpbGl0aWVzL1N0b3JhZ2VcIjtcblxuLyoqXG4gKiBTaG93cyBDb25maWd1cmF0b3Igb24gc2VsZWN0IG9mIHZhbGlkIGNoaWxkIGNvbXBvbmVudCBuYW1lIGluIHRoZSBtYXJrdXAgYW5kIG1vdXNlT3V0IGZyb20gbWFya3VwXG4gKiBIaWRlcyBDb25maWd1cmF0b3Igb24gbW91c2VMZWF2ZSBmcm9tIHRoZSBlZGl0b3IuXG4gKi9cbmNsYXNzIEVkaXRvciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB2YXIgY29tcG9uZW50ID0gcmVhZENvbXBvbmVudCh0aGlzLnByb3BzLm5hbWUpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBuYW1lOiBjb21wb25lbnQ/IGNvbXBvbmVudC5uYW1lIDogXCJcIixcbiAgICAgICAgICAgIG1hcmt1cDogY29tcG9uZW50PyBjb21wb25lbnQubWFya3VwIDogXCJcIixcbiAgICAgICAgICAgIHN0YXRlOiBjb21wb25lbnQ/IGNvbXBvbmVudC5zdGF0ZSA6IFwiXCIsXG4gICAgICAgICAgICBzdHlsZTogY29tcG9uZW50PyBjb21wb25lbnQuc3R5bGUgOiBcIlwiXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBzYXZlRWxlbWVudCAoKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25TYXZlKHtcbiAgICAgICAgICAgIG5hbWU6IHRoaXMuc3RhdGUubmFtZSxcbiAgICAgICAgICAgIG1hcmt1cDogdGhpcy5zdGF0ZS5tYXJrdXAsXG4gICAgICAgICAgICBzdHlsZTogdGhpcy5zdGF0ZS5zdHlsZSxcbiAgICAgICAgICAgIHN0YXRlOiB0aGlzLnN0YXRlLnN0YXRlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgbmFtZT0gdGhpcy5zdGF0ZS5uYW1lO1xuICAgICAgICBsZXQgbWFya3VwPSB0aGlzLnN0YXRlLm1hcmt1cDtcbiAgICAgICAgbGV0IHN0eWxlPSB0aGlzLnN0YXRlLnN0eWxlO1xuICAgICAgICBsZXQgc3RhdGU9IHRoaXMuc3RhdGUuc3RhdGU7XG4gICAgICAgIC8vIFRPRE86IFNob3VsZCBwYXNzIHRoZSBjdXJyZW50IGRhdGEuIEluc3RlYWQgb2YgYWNjZXNzaW5nIGl0IGZyb20gZ2xvYmFsXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBlZGl0b3ItdGFiXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkVkaXRvcjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkNvbXBvbmVudCBOYW1lPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZWxlbWVudCBuYW1lXCIgdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXt1cGRhdGVOYW1lLmJpbmQodGhpcyl9IGlkPVwiZWxlbWVudE5hbWVcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zYXZlRWxlbWVudC5iaW5kKHRoaXMpfSBpZD1cInNhdmVcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtc2F2ZVwiPjwvaT5TYXZlPC9idXR0b24+ICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5Db21wb25lbnQgTWFya3VwPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB2YWx1ZT17bWFya3VwfSBvbkNoYW5nZT17dXBkYXRlTWFya3VwLmJpbmQodGhpcyl9IGlkPVwiZWxlbWVudE1hcmt1cFwiIHRpdGxlPVwiSUQgaXMgbWFuZGF0b3J5IGZvciBldmVudHNcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5Db21wb25lbnQgQ1NTPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB2YWx1ZT17c3R5bGV9IG9uQ2hhbmdlPXt1cGRhdGVTdHlsZS5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkNvbXBvbmVudCBTdGF0ZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e3N0YXRlfSBvbkNoYW5nZT17dXBkYXRlU3RhdGUuYmluZCh0aGlzKX0gaWQ9XCJlbGVtZW50U3RhdGVcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaGlkZGVue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIiwgXCJcIl0pO1xuXG4iLCIvLyBQdWJsaWMuXG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVOYW1lIChldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBuYW1lOiBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlXG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU1hcmt1cCAoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbWFya3VwOiBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlXG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uICB1cGRhdGVTdHlsZSAoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc3R5bGU6IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWVcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU3RhdGUgKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHN0YXRlOiBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlXG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb3BlcnR5Q29udGFpbmluZ1Byb3BzKG9iail7XG4gICAgLy8gRmV0Y2ggbGlzdCBvZiBwcm9wcyBmcm9tIGNoaWxkLlxuICAgIGxldCBwcm9wcyA9IFtdO1xuICAgIGxldCBzdGF0ZTtcbiAgICB0cnl7XG4gICAgICAgIHN0YXRlID0gSlNPTi5wYXJzZShvYmouc3RhdGUpO1xuICAgIH1cbiAgICBjYXRjaChlKXtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOiBDaGlsZCBzdGF0ZSBpcyBhbiBpbnZhbGlkIGpzb24sIHRyeSBhbiBvbmxpbmUgdmFsaWRhdG9yIG9uIGJlbG93IHN0cmluZ1wiKVxuICAgICAgICBjb25zb2xlLmxvZyhjaGlsZC5zdGF0ZSk7XG4gICAgfVxuICAgIGZvcihsZXQgcHJvcGVydHkgaW4gc3RhdGUpe1xuICAgICAgICBpZihzdGF0ZVtwcm9wZXJ0eV0uaW5jbHVkZXMoXCJwcm9wXCIpKXtcbiAgICAgICAgICAgIHByb3BzLnB1c2gocHJvcGVydHkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wcztcbn0iLCIvLyBMaWJyYXJpZXMuXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuLy8gRGVwZW5kZW5jaWVzLlxuXG5cbi8vIENvbXBvbmVudHMuIFxuXG5pbXBvcnQgQ29uZmlndXJhdG9yIGZyb20gXCIuL0NvbmZpZ3VyYXRvclwiO1xuaW1wb3J0IE5vZGVzIGZyb20gXCIuLi91dGlsaXRpZXMvQ29tcG9uZW50cy9Ob2Rlc1wiO1xuaW1wb3J0IEV2ZW50IGZyb20gXCIuL0V2ZW50XCI7XG5pbXBvcnQgZ2V0TWVzc2FnZXMgZnJvbSBcIi4vTWVzc2FnZXNcIjtcblxuLy8gU3R5bGVzLlxuXG5pbXBvcnQgXCIuL1N0eWxlLmNzc1wiO1xuXG4vLyBSZWR1Y2Vycy5cblxuaW1wb3J0IHsgdXBkYXRlRXZlbnQsIHNlbGVjdGVkVGFnQ2hhbmdlZCwgZGVsZXRlRXZlbnQsIHVwZGF0ZUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi9SZWR1Y2VyXCI7XG5cblxuLy8gVXRpbHMuXG5cbmltcG9ydCB7IGdldE5vZGVUcmVlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9nZXQtbm9kZS10cmVlLmpzXCI7XG5pbXBvcnQgeyByZWFkRGF0YSB9IGZyb20gXCIuLi91dGlsaXRpZXMvU3RvcmFnZVwiO1xuXG5jbGFzcyBFdmVudHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkVGFnID0gdGhpcy5wcm9wcy5zZWxlY3RlZFRhZztcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMucHJvcHMuY29tcG9uZW50O1xuXG4gICAgICAgIC8vIFJlcG9ydCBpZiBubyBjb21wb25lbnQgaXMgY3JlYXRlZC5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY29tcG9uZW50cy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBldmVudHMtdGFiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5FdmVudHM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+TG9va3MgbGlrZSB5b3UgZG8gbm90IGhhdmUgYW55IFdlYiBjb21wb25lbnQgY3JlYXRlZC4gVHlwZSBzb21lIFwiaHRtbFwiIG9uIHRoZSByaWdodCBcIkVkaXRvclwiIHRhYjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXBvcnQgaWYgbm8gY29tcG9uZW50IGlzIHNlbGVjdGVkLlxuICAgICAgICBpZiAoY29tcG9uZW50Lm5hbWUgPT09IHVuZGVmaW5lZCAmJiB0aGlzLnN0YXRlLmNvbXBvbmVudHMubGVuZ3RoICE9IDApIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZXZlbnRzLXRhYlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+RXZlbnRzPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPkxvb2tzIGxpa2UgeW91IGhhdmUgbm90IHNlbGVjdGVkIGFueSBjb21wb25lbnQuIENsaWNrIG9uIGFueSBvZiB0aGUgY29tcG9uZW50IGluIHRoZSBsZWZ0IHBhbmUuPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG5cblxuICAgICAgICBsZXQgbm9kZVRyZWUgPSBnZXROb2RlVHJlZShjb21wb25lbnQsIGNvbXBvbmVudC5tYXJrdXAsIGNvbXBvbmVudC5zdHlsZSwgSlNPTi5wYXJzZShjb21wb25lbnQuc3RhdGUpLCBjb21wb25lbnQuZXZlbnRzKTtcblxuICAgICAgICAvLyBSZXBvcnQgZXJyb3IuXG4gICAgICAgIGlmIChub2RlVHJlZS5lcnJvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0TWVzc2FnZXMobm9kZVRyZWUuZXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVwb3J0IGVycm9yIGlmIGNvbXBvbmVudCBpcyBub3QgXG4gICAgICAgIGlmIChub2RlVHJlZS5yZXN1bHQgPT09IHVuZGVmaW5lZCAmJiB0aGlzLnN0YXRlLmNvbXBvbmVudHMubGVuZ3RoICE9IDApIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZXZlbnRzLXRhYlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+RXZlbnRzPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRUYWcgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVGFnIHx8IFwiXCI7XG4gICAgICAgIGxldCBldmVudHNPZlNlbGVjdGVkVGFnLCBjb25maWd1cmF0b3IsIGV2ZW50TmFtZXMgPSBbXTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQgaXMgYSBjaGlsZCBjb21wb25lbnRcbiAgICAgICAgaWYgKHNlbGVjdGVkVGFnLmluY2x1ZGVzKFwiY2hpbGQtY29tcG9uZW50LVwiKSkge1xuICAgICAgICAgICAgLy8gR2V0IGxpc3Qgb2YgY29tcG9uZW50cy5cbiAgICAgICAgICAgIGxldCBjb21wb25lbnRzID0gcmVhZERhdGEoXCJ1aS1lZGl0b3JcIik7XG5cbiAgICAgICAgICAgIC8vIEdldCBjaGlsZCBjb21wb25lbnQgbmFtZSBmcm9tIHRoZSBzZWxlY3RlZCB0YWcuXG4gICAgICAgICAgICBsZXQgY2hpbGRDb21wb25lbnROYW1lID0gc2VsZWN0ZWRUYWcuc3BsaXQoXCJjaGlsZC1jb21wb25lbnQtXCIpWzFdO1xuXG4gICAgICAgICAgICAvLyBGaW5kIHRoZSBjaGlsZCBjb21wb25lbnQgZnJvbSB0aGUgbGlzdCBvZiBjb21wb25lbnRzLlxuICAgICAgICAgICAgbGV0IGNoaWxkQ29tcG9uZW50ID0gY29tcG9uZW50cy5maW5kKGNvbXBvbmVudCA9PiBjb21wb25lbnQubmFtZSA9PT0gY2hpbGRDb21wb25lbnROYW1lKTtcblxuICAgICAgICAgICAgLy8gRmluZCBldmVudHMgdGhhdCBhcmUgcHVibGlzaGFibGUgZnJvbSB0aGUgY2hpbGQgY29tcG9uZW50LlxuICAgICAgICAgICAgZXZlbnROYW1lcyA9IGNoaWxkQ29tcG9uZW50LmV2ZW50cy5maWx0ZXIoZXZlbnQgPT4gZXZlbnQucHVibGlzaGFibGUgPT09IHRydWUpLm1hcChwdWJsaXNoYWJsZUV2ZW50ID0+IHB1Ymxpc2hhYmxlRXZlbnQucHVibGlzaE5hbWUpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBDcmVhdGUgZXZlbnQgdmlldyBmb3IgbGlzdCBvZiBhbGwgZXZlbnRzXG4gICAgICAgICAgICBsZXQgZXZlbnRzID0gY29tcG9uZW50LmV2ZW50cy5maWx0ZXIoZXZlbnQ9PmV2ZW50TmFtZXMuZmluZChldmVudE5hbWUgPT5ldmVudE5hbWUgID09PSBldmVudC5uYW1lICYmIGV2ZW50LmlkPT09Y2hpbGRDb21wb25lbnQubmFtZSkpXG4gICAgICAgICAgICBldmVudHMgPSBldmVudHMubWFwKChldmVudCwgaW5kZXgpID0+IDxFdmVudCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMDApfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fSBldmVudD17ZXZlbnR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRhZ0lEPXtzZWxlY3RlZFRhZ30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZXM9e2V2ZW50TmFtZXN9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNhdmU9e3VwZGF0ZUV2ZW50LmJpbmQodGhpcyl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVFdmVudD17ZGVsZXRlRXZlbnQuYmluZCh0aGlzKX0gLz4pO1xuXG4gICAgICAgICAgICAvLyBGaWx0ZXIgb3V0IGV2ZW50cyB0aGF0IGFyZSBub3QgcGFydCBvZiBzZWxlY3RlZFRhZ1xuICAgICAgICAgICAgZXZlbnRzT2ZTZWxlY3RlZFRhZyA9IHNlbGVjdGVkVGFnID8gZXZlbnRzIDogbnVsbDtcblxuICAgICAgICAgICAgY29uZmlndXJhdG9yID0gPENvbmZpZ3VyYXRvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e01hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwMCl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dXBkYXRlQ29uZmlndXJhdGlvbi5iaW5kKHRoaXMpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGROYW1lPXtjaGlsZENvbXBvbmVudE5hbWV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ9e2NvbXBvbmVudH0gLz47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBldmVudHMgPSBjb21wb25lbnQuZXZlbnRzXG4gICAgICAgICAgICAgICAgLm1hcCgoZXZlbnQsIGluZGV4KSA9PiA8RXZlbnQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDAwKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50PXtldmVudH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVGFnSUQ9e3NlbGVjdGVkVGFnfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnROYW1lcz17ZXZlbnROYW1lc30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2F2ZT17dXBkYXRlRXZlbnQuYmluZCh0aGlzKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUV2ZW50PXtkZWxldGVFdmVudC5iaW5kKHRoaXMpfSAvPik7XG4gICAgICAgICAgICBldmVudHNPZlNlbGVjdGVkVGFnID0gc2VsZWN0ZWRUYWcgPyBldmVudHMuZmlsdGVyKGV2ZW50ID0+IHNlbGVjdGVkVGFnLmluY2x1ZGVzKGV2ZW50LnByb3BzLmV2ZW50LmlkKSkgOiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZXZlbnRzLXRhYlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+RXZlbnRzPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWdzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Tm9kZXMgbm9kZT17bm9kZVRyZWUucmVzdWx0fSBvblNlbGVjdGVkVGFnQ2hhbmdlZD17c2VsZWN0ZWRUYWdDaGFuZ2VkLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7Y29uZmlndXJhdG9yfVxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIEV2ZW50c1xuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV4aXN0aW5nIEV2ZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXZlbnRzT2ZTZWxlY3RlZFRhZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV3IEV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFdmVudCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb21wb25lbnQuZXZlbnRzLmxlbmd0aH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZXM9e2V2ZW50TmFtZXN9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRhZ0lEPXtzZWxlY3RlZFRhZ30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2F2ZT17dXBkYXRlRXZlbnQuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50cztcbiIsIi8vIExpYnJhcmllcy5cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgXCIuL1N0eWxlLmNzc1wiXG5cblxuY2xhc3MgQ29uZmlndXJhdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgbGV0IGNvbmZpZyA9IEpTT04ucGFyc2UodGhpcy5wcm9wcy5wYXJlbnQuY29uZmlnKVt0aGlzLnByb3BzLmNoaWxkTmFtZV0gfHwgeyBvdmVycmlkZTogZmFsc2V9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgb3ZlcnJpZGU6IGNvbmZpZy5vdmVycmlkZSxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dlbE92ZXJyaWRlKCl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgb3ZlcnJpZGU6ICF0aGlzLnN0YXRlLm92ZXJyaWRlXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7XG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBvdmVycmlkZTogIXRoaXMuc3RhdGUub3ZlcnJpZGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGlsZE5hbWU6IHRoaXMucHJvcHMuY2hpbGROYW1lLFxuICAgICAgICAgICAgcGFyZW50TmFtZTogdGhpcy5wcm9wcy5wYXJlbnQubmFtZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzYXZlQ29uZmlnKCl7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoe1xuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgb3ZlcnJpZGU6IHRoaXMuc3RhdGUub3ZlcnJpZGUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hpbGROYW1lOiB0aGlzLnByb3BzLmNoaWxkTmFtZSxcbiAgICAgICAgICAgIHBhcmVudE5hbWU6IHRoaXMucHJvcHMucGFyZW50Lm5hbWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkNoaWxkIENvbmZpZ3VyYXRpb25zPC9kaXY+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+T3ZlcnJpZGUgc3RhdGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXt0aGlzLnRvZ2dlbE92ZXJyaWRlLmJpbmQodGhpcyl9IGNoZWNrZWQ9e3RoaXMuc3RhdGUub3ZlcnJpZGUgPyBcImNoZWNrZWRcIiA6IFwiXCJ9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb25maWd1cmF0b3I7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jb25zb2xle1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHJpZ2h0OiAxNTBweDtcXG59XFxuXFxuLmVycm9yIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmV2ZW50IHsgXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzMzMzMzMztcXG4gICAgYmFja2dyb3VuZDogcmdiKDY0LCA2NCwgNjQpO1xcbn1cXG5cXG4uaW5mbyB7XFxuICAgIGNvbG9yOiB5ZWxsb3dncmVlbjtcXG59XFxuXFxubGFiZWwge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4uY29uZmlndXJhdG9yIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDY0LCA2NCwgNjQpO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVwiLCBcIlwiXSk7XG5cbiIsIi8vIExpYnJhcmllcy5cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBOb2RlcyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLnByb3BzLm5vZGU7XG5cblxuICAgICAgICBpZighbm9kZSl7XG4gICAgICAgICAgICByZXR1cm4gKDxzcGFuPm51bGw8L3NwYW4+KVxuICAgICAgICB9XG4gICAgICAgIGlmKHR5cGVvZiBub2RlPT09XCJzdHJpbmdcIil7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8bGk+e25vZGV9PC9saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlkID0gbm9kZS5wcm9wcy5pZCA/IChcIi1cIitub2RlLnByb3BzLmlkKSA6IFwiXCI7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgaXQgY29udGFpbnMgY2hpbGRyZW4uXG4gICAgICAgIGlmKG5vZGUucHJvcHMgJiYgQXJyYXkuaXNBcnJheShub2RlLnByb3BzLmNoaWxkcmVuKSl7XG4gICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSBub2RlLnByb3BzLmNoaWxkcmVuLm1hcCgoY2hpbGQsaW5kZXgpPT48Tm9kZXMga2V5PXtpbmRleH0gbm9kZT17Y2hpbGR9IG9uU2VsZWN0ZWRUYWdDaGFuZ2VkPXt0aGlzLnByb3BzLm9uU2VsZWN0ZWRUYWdDaGFuZ2VkfS8+KTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNlbGVjdGVkRWxlbWVudFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uU2VsZWN0ZWRUYWdDaGFuZ2VkfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bm9kZS50eXBlICsgaWR9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtub2RlLnR5cGUgK2lkfVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgbm9kZSBjb250YWlucyBvbmx5IG9uZSBjaGlsZHJlbiwganN4IGdldCB0cmFuc3BpbGVkIHRvIG9iamVjdCByYXRoZXIgdGhhbiBhcnJheS5cbiAgICAgICAgZWxzZSBpZih0eXBlb2Ygbm9kZS5wcm9wcy5jaGlsZHJlbiA9PT0gXCJvYmplY3RcIil7XG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBub2RlLnByb3BzLmNoaWxkcmVuO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VsZWN0ZWRFbGVtZW50XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMub25TZWxlY3RlZFRhZ0NoYW5nZWR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXsobm9kZS50eXBlLm5hbWUgfHwgbm9kZS50eXBlKStpZH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyhub2RlLnR5cGUubmFtZSB8fCBub2RlLnR5cGUpfVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8Tm9kZXMga2V5PXtpbmRleH0gbm9kZT17Y2hpbGR9IG9uU2VsZWN0ZWRUYWdDaGFuZ2VkPXt0aGlzLnByb3BzLm9uU2VsZWN0ZWRUYWdDaGFuZ2VkfS8+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbmVzdGVkIGNvbXBvbmVudC5cbiAgICAgICAgZWxzZSBpZih0eXBlb2Ygbm9kZS50eXBlID09PSBcImZ1bmN0aW9uXCIpe1xuICAgICAgICAgICAgcmV0dXJuICg8dWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWxlY3RlZEVsZW1lbnRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtcImNoaWxkLWNvbXBvbmVudC1cIitub2RlLnR5cGUubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uU2VsZWN0ZWRUYWdDaGFuZ2VkfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHtub2RlLnR5cGUubmFtZX1cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNlbGVjdGVkRWxlbWVudFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25vZGUudHlwZStpZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uU2VsZWN0ZWRUYWdDaGFuZ2VkfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHtub2RlLnR5cGUgK2lkfVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICApO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBOb2RlczsiLCIvLyBMaWJyYXJpZXMuXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFwiLi9TdHlsZS5jc3NcIlxuXG4vLyBDb21wb25lbnRzLlxuXG5pbXBvcnQgZ2V0TWVzc2FnZXMgZnJvbSBcIi4vTWVzc2FnZXNcIjtcblxuLy8gUmVkdWNlcnMuIFxuXG5pbXBvcnQge3VwZGF0ZUV2ZW50TmFtZSwgdXBkYXRlRXZlbnRUeXBlLCB1cGRhdGVQdWJsaXNoTmFtZSwgdXBkYXRlUmVkdWNlcn0gZnJvbSBcIi4vUmVkdWNlclwiO1xuXG4vLyBFdmVudHMuXG5cbmltcG9ydCB7cHVibGlzaEV2ZW50LCBkZWxldGVFdmVudH0gZnJvbSAnLi9FdmVudHMnO1xuXG5jbGFzcyBFdmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbmFtZTogdGhpcy5wcm9wcy5ldmVudCA/IHRoaXMucHJvcHMuZXZlbnQubmFtZSA6IFwiXCIsXG4gICAgICAgICAgICByZWR1Y2VyOiB0aGlzLnByb3BzLmV2ZW50ID8gdGhpcy5wcm9wcy5ldmVudC5yZWR1Y2VyIDogXCJcIixcbiAgICAgICAgICAgIHB1Ymxpc2hhYmxlOiB0aGlzLnByb3BzLmV2ZW50ID8gdGhpcy5wcm9wcy5ldmVudC5wdWJsaXNoYWJsZSA6IFwiXCIsXG4gICAgICAgICAgICBwdWJsaXNoTmFtZTogdGhpcy5wcm9wcy5ldmVudCA/IHRoaXMucHJvcHMuZXZlbnQucHVibGlzaE5hbWUgOiBcIlwiLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkVGFnSUQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGdldE1lc3NhZ2VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcHVibGlzaE5hbWUgPSB0aGlzLnN0YXRlLnB1Ymxpc2hhYmxlPyA8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dXBkYXRlUHVibGlzaE5hbWUuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMuc3RhdGUucHVibGlzaE5hbWV9IHBsYWNlaG9sZGVyPVwiRW50ZXIgZXZlbnQgcHVibGlzaCBuYW1lIGZvciBvdGhlciBjb21wb25lbnRzIHRvIHN1YnNjcmliZSB0b1wiLz4gOiBudWxsO1xuICAgICAgICBsZXQgZXZlbnROYW1lcyA9IHRoaXMucHJvcHMuZXZlbnROYW1lcy5tYXAoZXZlbnROYW1lPT48b3B0aW9uIHZhbHVlPXtldmVudE5hbWV9Pjwvb3B0aW9uPilcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBsaXN0PVwiYnJvd3NlcnNcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt1cGRhdGVFdmVudE5hbWUuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gcGxhY2Vob2xkZXI9XCJFbnRlciBldmVudCBuYW1lXCIgdGl0bGU9XCJFdmVudCBOYW1lXCIvPlxuICAgICAgICAgICAgICAgIDxkYXRhbGlzdCBpZD1cImJyb3dzZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgIHtldmVudE5hbWVzfVxuICAgICAgICAgICAgICAgIDwvZGF0YWxpc3Q+XG4gICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgb25DaGFuZ2U9e3VwZGF0ZVJlZHVjZXIuYmluZCh0aGlzKX0gdmFsdWU9e3RoaXMuc3RhdGUucmVkdWNlcn0gcGxhY2Vob2xkZXI9XCJFbnRlciBzdGF0ZSByZWR1Y2VyXCIgdGl0bGU9XCJSZWR1Y2VyXCIvPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXt1cGRhdGVFdmVudFR5cGUuYmluZCh0aGlzKX0gY2hlY2tlZD17dGhpcy5zdGF0ZS5wdWJsaXNoYWJsZT8gXCJjaGVja2VkXCI6IFwiXCJ9Lz5cbiAgICAgICAgICAgICAgICAgICAgUHVibGlzaGFibGVcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAge3B1Ymxpc2hOYW1lfVxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3B1Ymxpc2hFdmVudC5iaW5kKHRoaXMpfSBpZD1cInNhdmVFdmVudFwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zYXZlXCI+PC9pPlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtkZWxldGVFdmVudC5iaW5kKHRoaXMpfSBpZD1cImRlbGV0ZUV2ZW50XCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRyYXNoXCI+PC9pPkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFdmVudDtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbnNvbGV7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgcmlnaHQ6IDE1MHB4O1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uZXZlbnQgeyBcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMzMzMzMzO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNjQsIDY0LCA2NCk7XFxufVxcblxcbi5pbmZvIHtcXG4gICAgY29sb3I6IHllbGxvd2dyZWVuO1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5ldmVudCBpbnB1dCB7XFxuICAgIG1hcmdpbi1sZWZ0OjBweDtcXG59XFxuXFxuLmV2ZW50IHRleHRhcmVhIHtcXG4gICAgbWFyZ2luLXRvcDogOHB4O1xcbn1cIiwgXCJcIl0pO1xuXG4iLCJpbXBvcnQgTWVzc2FnZXNDb21wb25lbnQgZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9Db21wb25lbnRzL01lc3NhZ2VzQ29tcG9uZW50XCI7XG5cbmZ1bmN0aW9uIGdldE1lc3NhZ2VzICgpIHtcbiAgICBsZXQgbWVzc2FnZXMgPSBbe1xuICAgICAgICB0eXBlOiBcImluZm9cIixcbiAgICAgICAgdGV4dDogXCIjMSBJTkZPOiBTZWxlY3QgYW55IGVsZW1lbnQgaW4gdGhlIGxlZnQgbW9zdCBwYW5lKGVkaXRvciBwYW5lKSB0byBzZWUgaXRzIGNvbnRlbnRcIlxuICAgIH0se1xuICAgICAgICB0eXBlOiBcImluZm9cIixcbiAgICAgICAgdGV4dDogXCIjMiBJTkZPOiBDbGljayBvbiAnQWRkJyB0byBhZGQgYW4gY29tcG9uZW50XCJcbiAgICB9XVxuXG4gICAgcmV0dXJuIDxNZXNzYWdlc0NvbXBvbmVudCBtZXNzYWdlcz17bWVzc2FnZXN9IC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRNZXNzYWdlczsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jb25zb2xle1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHJpZ2h0OiAxNTBweDtcXG4gICAgYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG5cXG4uaW5mbyB7XFxuICAgIGNvbG9yOiB5ZWxsb3dncmVlbjtcXG59XCIsIFwiXCJdKTtcblxuIiwiLy8gTGlicmFyaWVzLlxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNsYXNzIE1lc3NhZ2VDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgbGV0ICBtZXNzYWdlID0gdGhpcy5wcm9wcy5tZXNzYWdlO1xuXG4gICAgICAgIGlmKG1lc3NhZ2UudHlwZSA9PT0gXCJlcnJvclwiIHx8IG1lc3NhZ2UudHlwZT09PSBcImluZm9cIikge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bWVzc2FnZS50eXBlfT5cbiAgICAgICAgICAgICAgICAgICAgPGNvZGU+e21lc3NhZ2UudGV4dH08L2NvZGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZS50eXBlICsgXCIgaXMgdW5pZGVudGlmaWVkIG1lc3NhZ2UgdHlwZSBmb3IgPE1lc3NhZ2VzQ29tcG9uZW50Lz4uIFBsZWFzZSB1c2UgZWl0aGVyICdlcnJvcicgb3IgJ2luZm8nIG9ubHkuIElmIHlvdSByZXF1aXJlIGEgZGlmZmVyZW50IHR5cGUsIHJhaXNlIGFuIGlzc3VlLCBzZW5kIGEgUFJcIilcbiAgICAgICAgICAgIHJldHVybiAgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uc29sZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVlcnJvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGNvZGU+e1wiZXJyb3IgOiB1bmlkZW50aWZpZWQgbWVzc2FnZSB0eXBlLiBQbGVhc2UgdXNlIGVpdGhlciBlcnJvci8gaW5mbyBvbmx5XCJ9PC9jb2RlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlQ29tcG9uZW50OyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmVycm9yIHtcXG4gICAgY29sb3I6IHJlZDtcXG59XFxuXFxuXFxuLmluZm8ge1xcbiAgICBjb2xvcjogeWVsbG93Z3JlZW47XFxufVwiLCBcIlwiXSk7XG5cbiIsIlxuICBmdW5jdGlvbiAgdXBkYXRlRXZlbnROYW1lKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBuYW1lOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICBmdW5jdGlvbiAgdXBkYXRlUmVkdWNlcihlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcmVkdWNlcjogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiBmdW5jdGlvbiAgIHVwZGF0ZVB1Ymxpc2hOYW1lKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBwdWJsaXNoTmFtZTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgZnVuY3Rpb24gIHVwZGF0ZUV2ZW50VHlwZShlKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBwdWJsaXNoYWJsZTogZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWRcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAgICAgdXBkYXRlRXZlbnROYW1lLFxuICAgICAgICB1cGRhdGVFdmVudFR5cGUsXG4gICAgICAgIHVwZGF0ZVB1Ymxpc2hOYW1lLFxuICAgICAgICB1cGRhdGVFdmVudFR5cGUsXG4gICAgICAgIHVwZGF0ZVJlZHVjZXJcbiAgICB9IiwiZXhwb3J0IGZ1bmN0aW9uIHB1Ymxpc2hFdmVudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblNhdmUoe1xuICAgICAgICAgICAgbmFtZTogdGhpcy5zdGF0ZS5uYW1lLFxuICAgICAgICAgICAgcmVkdWNlcjogdGhpcy5zdGF0ZS5yZWR1Y2VyLFxuICAgICAgICAgICAgaW5kZXg6IHRoaXMucHJvcHMuaW5kZXgsXG4gICAgICAgICAgICBwdWJsaXNoYWJsZTogdGhpcy5zdGF0ZS5wdWJsaXNoYWJsZSxcbiAgICAgICAgICAgIHB1Ymxpc2hOYW1lOiB0aGlzLnN0YXRlLnB1Ymxpc2hOYW1lXG4gICAgICAgIH0pXG4gICAgfVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlRXZlbnQoKXtcbiAgICAgICAgdGhpcy5wcm9wcy5kZWxldGVFdmVudCh0aGlzLnByb3BzLmluZGV4KTtcbiAgICB9IiwiaW1wb3J0IE1lc3NhZ2VzQ29tcG9uZW50IGZyb20gXCIuLi91dGlsaXRpZXMvQ29tcG9uZW50cy9NZXNzYWdlc0NvbXBvbmVudFwiO1xuXG5mdW5jdGlvbiBnZXRNZXNzYWdlcyAoZXJyb3IpIHtcblxuICAgIGxldCBtZXNzYWdlcyA9IFt7XG4gICAgICAgIHR5cGU6XCJlcnJvclwiLFxuICAgICAgICB0ZXh0OlwiRVJST1IgOiBcIitlcnJvcitcImRldmVsb3BlciBsb2c6IGxvb2sgaW4gY29uc29sZSByZWxhdGVkIHRvIGV2YWxcIlxuICAgIH1dXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1lc3NhZ2VzQ29tcG9uZW50IG1lc3NhZ2VzID0ge21lc3NhZ2VzfS8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRNZXNzYWdlczsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5ldmVudHMge1xcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5lcnJvciB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgcmlnaHQ6IDE1MHB4O1xcbn1cIiwgXCJcIl0pO1xuXG4iLCJcbiAgICBleHBvcnQgZnVuY3Rpb24gdXBkYXRlRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUuY29tcG9uZW50KSlcblxuICAgICAgICAvLyBLZWVwIHRoZSBjaGlsZCBjb21wb25lbnQgbmFtZSBhcyB0aGUgSUQuIFdpbGwgY2F1c2UgcHJvYmxlbSBpbiBmdXR1cmUgZm9yIGxpc3QgcmVuZGVyaW5nIGJveS5cbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zZWxlY3RlZFRhZy5pbmNsdWRlcyhcImNoaWxkLWNvbXBvbmVudC1cIikpe1xuICAgICAgICAgICAgZXZlbnQuaWQgPSB0aGlzLnN0YXRlLnNlbGVjdGVkVGFnLnNwbGl0KFwiY2hpbGQtY29tcG9uZW50LVwiKVsxXVxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBldmVudC5pZCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRUYWcuc3BsaXQoXCItXCIpWzFdO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCBcbiAgICAgICAgaWYgKGV2ZW50LmluZGV4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuZXZlbnRzLnB1c2goZXZlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRWRpdFxuICAgICAgICAgICAgZWxlbWVudC5ldmVudHNbZXZlbnQuaW5kZXhdID0gZXZlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb3BzLm9uRXZlbnRzVXBkYXRlKGVsZW1lbnQuZXZlbnRzKTtcbiAgICB9XG5cbiAgICBleHBvcnQgZnVuY3Rpb24gc2VsZWN0ZWRUYWdDaGFuZ2VkKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzZWxlY3RlZFRhZzogZS5jdXJyZW50VGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUV2ZW50KGluZGV4KSB7XG5cbiAgICAgICAgLy8gR2V0IGN1cnJlbnQgY29tcG9uZW50LlxuICAgICAgICBsZXQgZWxlbWVudCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5lbGVtZW50KSk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBldmVudCB0byBiZSBkZWxldGVkLlxuICAgICAgICBlbGVtZW50LmV2ZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBlbGVtZW50cyB3aXRoIG5ldyBldmVudHMuXG4gICAgICAgIHRoaXMucHJvcHMub25FdmVudHNVcGRhdGUoZWxlbWVudC5ldmVudHMpO1xuICAgIH1cblxuICAgIGV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDb25maWd1cmF0aW9uKGNvbmZpZyl7XG4gICAgICAgIHRoaXMucHJvcHMub25Db25maWdVcGRhdGUoY29uZmlnKTtcbiAgICB9IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge8Kgc2F2ZUNvbXBvbmVudHNUb1dpbmRvdywgZ2V0TmVzdGVkQ29tcG9uZW50cyB9IGZyb20gXCIuL1J1bnRpbWVcIjtcblxuLy8gV2h5PyBCZWNhdXNlIGltcG9ydGluZyBSZWFjdCBhcyB2YXJpYWJsZSBhdCBsaW5lIzIgd2lsbCBiZSBhbHRlcnRlZCBieSBiYWJlbC4gS2VlcCBpdCBhcyBhIHByb3BlcnR5LCBiYWJlbCB3aWxsIGlnbm9yZSBpdC5cbndpbmRvdy5SZWFjdCA9IFJlYWN0O1xud2luZG93LkNvbXBvbmVudCA9IFJlYWN0LkNvbXBvbmVudDtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5vZGVUcmVlKGVsZW1lbnQsIGpzeCwgc3R5bGUsIHN0YXRlLCBldmVudHMpIHtcbiAgICBcbiAgICBsZXQgcmVzdWx0LCBlcnJvcjtcbiAgICB0cnl7XG4gICAgICAgIGxldCBuZXN0ZWRDb21wb25lbnRzID0gZ2V0TmVzdGVkQ29tcG9uZW50cyhlbGVtZW50KTtcbiAgICAgICAgaWYgKG5lc3RlZENvbXBvbmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2F2ZUNvbXBvbmVudHNUb1dpbmRvdyhuZXN0ZWRDb21wb25lbnRzKTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSBldmFsKEJhYmVsLnRyYW5zZm9ybShqc3gsIHsgcHJlc2V0czogWydyZWFjdCddIH0pLmNvZGUpXG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgZXJyb3IgPSBlO1xuICAgIH1cbiAgICBmaW5hbGx5e1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgcmVzdWx0LCByZXN1bHRcbiAgICAgICAgfTtcbiAgICB9XG59IiwiLy8gTGlicmFyaWVzLlxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IHBvcEhpc3RvcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL1N0b3JhZ2VcIjtcblxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuY2xhc3MgSGlzdG9yeSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHJlZnJlc2hUb1ByZXZpb3VzKCl7XG4gICAgICAgIHBvcEhpc3RvcnkoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHByZXZpZXdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIEhpc3RvcnlcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucmVmcmVzaFRvUHJldmlvdXMuYmluZCh0aGlzKX0+R28gYmFjazwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhpc3Rvcnk7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY29udGFpbmVye1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDI2cHggLThweCBibGFjaztcXG4gICAgYmFja2dyb3VuZDogIzJDMzEzNDtcXG59XFxuXCIsIFwiXCJdKTtcblxuIiwiLy8gTGlicmFyaWVzLlxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmltcG9ydCBEeW5hbWljQ29tcG9uZW50IGZyb20gXCIuL0R5bmFtaWNDb21wb25lbnRcIjtcblxuLy8gVXRpbGl0aWVzLlxuXG5pbXBvcnQgeyByZWFkQ29tcG9uZW50IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9TdG9yYWdlXCI7XG5cbmNsYXNzIFByZXZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogdGhpcy5wcm9wcy5jb21wb25lbnRcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZnJlc2goICl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgY29tcG9uZW50OiByZWFkQ29tcG9uZW50KHRoaXMuc3RhdGUuY29tcG9uZW50Lm5hbWUpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIC8vIEhlbHBzIHRvIHJlcmVuZGVyIHdoZW4gY2hhbmdlcyB0byBtYXJrdXAvZXZlbnRzIGFyZSBtYWRlIHRvIHRoZSBjb21wb25lbnQgYW5kIHByZXZpZXcgdGhlbS5cbiAgICAgICAgbGV0IHJhbmRvbUtleSA9IHRoaXMucHJvcHMuY29tcG9uZW50LmlkKih+fihNYXRoLnJhbmRvbSgpKjEwKSk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICBQcmV2aWV3XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPER5bmFtaWNDb21wb25lbnQga2V5PXtyYW5kb21LZXl9IGNvbXBvbmVudD17dGhpcy5zdGF0ZS5jb21wb25lbnR9Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmV2aWV3OyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbnRhaW5lcntcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAyNnB4IC04cHggYmxhY2s7XFxuICAgIGJhY2tncm91bmQ6ICMyQzMxMzQ7XFxufVxcblxcbi5kcm9wUG9pbnR7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcbn1cXG5cXG4udGFyZ2V0Q2hpbGR7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzRThDRTQ7XFxufVwiLCBcIlwiXSk7XG5cbiIsIi8vIExpYnJhcmllcy5cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge8KgZ2V0TmVzdGVkQ29tcG9uZW50cywgc2F2ZUNvbXBvbmVudHNUb1dpbmRvdyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvUnVudGltZVwiO1xuXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jbGFzcyBEeW5hbWljQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjb21wb25lbnQ6IHRoaXMucHJvcHMuY29tcG9uZW50XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuY29tcG9uZW50Lm5hbWU9PT11bmRlZmluZWQpe1xuICAgICAgICAgICAgcmV0dXJuICg8ZGl2Pk5vIGNvbXBvbmVudCBzZWxlY3RlZC48L2Rpdj4pXG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5lc3RlZENvbXBvbmVudHMgPSBnZXROZXN0ZWRDb21wb25lbnRzKHRoaXMuc3RhdGUuY29tcG9uZW50KTtcbiAgICAgICAgaWYgKG5lc3RlZENvbXBvbmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2F2ZUNvbXBvbmVudHNUb1dpbmRvdyhuZXN0ZWRDb21wb25lbnRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCF3aW5kb3dbdGhpcy5zdGF0ZS5jb21wb25lbnQubmFtZV0pe1xuICAgICAgICAgICAgcmV0dXJuICg8ZGl2PkNvbXBvbmVudCBub3QgcmVuZGVyZWQ8L2Rpdj4pXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7UmVhY3QuY3JlYXRlRWxlbWVudCh3aW5kb3dbdGhpcy5zdGF0ZS5jb21wb25lbnQubmFtZV0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IER5bmFtaWNDb21wb25lbnQ7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYm94IHtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6NXB4O1xcbn1cIiwgXCJcIl0pO1xuXG4iLCJpbXBvcnQge3dyaXRlRGF0YX0gZnJvbSBcIi4uL3V0aWxpdGllcy9TdG9yYWdlXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUV2ZW50IChldmVudHMpIHtcbiAgICAvLyBDcmVhdGUgbmV3IHN0YXRlLlxuICAgIGxldCBuZXdFbGVtZW50cyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUpLmNvbXBvbmVudHM7XG4gICAgbGV0IHNlbGVjdGVkQ29tcG9uZW50ID0gbmV3RWxlbWVudHMuZmluZChlbGVtZW50PT5lbGVtZW50Lm5hbWU9PT10aGlzLnN0YXRlLnNlbGVjdGVkQ29tcG9uZW50Lm5hbWUpXG5cbiAgICBzZWxlY3RlZENvbXBvbmVudC5ldmVudHMgPSBldmVudHM7XG5cbiAgICAvLyBTZXQgc3RhdGUgdG8gdGhlIG5ldyBzdGF0ZS5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZWxlbWVudHM6IG5ld0VsZW1lbnRzXG4gICAgfSk7XG5cbiAgICB3cml0ZURhdGEoXCJ1aS1lZGl0b3JcIiwgbmV3RWxlbWVudHMpXG5cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ29uZmlnKGNvbmZpZyl7XG4gICAgXG4gICAgbGV0IG5ld0VsZW1lbnRzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSkuY29tcG9uZW50cztcbiAgICBcbiAgICBsZXQgcGFyZW50ID0gbmV3RWxlbWVudHMuZmluZChlbGVtZW50PT5lbGVtZW50Lm5hbWU9PT1jb25maWcucGFyZW50TmFtZSk7XG4gICAgbGV0IGNoaWxkID0gbmV3RWxlbWVudHMuZmluZChlbGVtZW50PT5lbGVtZW50Lm5hbWU9PT1jb25maWcuY2hpbGROYW1lKTtcblxuICAgIHBhcmVudC5zdGF0ZSA9IEpTT04ucGFyc2UocGFyZW50LnN0YXRlKTtcblxuICAgIGlmKHBhcmVudC5jb25maWcgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgIHBhcmVudC5jb25maWcgPSB7fTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHBhcmVudC5jb25maWcgPSBKU09OLnBhcnNlKHBhcmVudC5jb25maWcpO1xuICAgIH1cbiAgICBwYXJlbnQuY29uZmlnW2NoaWxkLm5hbWVdID0gY29uZmlnLmNvbmZpZztcbiAgICBpZihwYXJlbnQuY29uZmlnW2NoaWxkLm5hbWVdLm92ZXJyaWRlKSB7ICAgIFxuICAgICAgICBwYXJlbnQuc3RhdGVbY2hpbGQubmFtZV0gPSBbSlNPTi5wYXJzZShjaGlsZC5zdGF0ZSldO1xuICAgIH0gXG4gICAgZWxzZSB7XG4gICAgICAgIGRlbGV0ZSBwYXJlbnQuc3RhdGVbY2hpbGQubmFtZV07XG4gICAgfVxuXG5cbiAgICBwYXJlbnQuc3RhdGUgPSBKU09OLnN0cmluZ2lmeShwYXJlbnQuc3RhdGUpXG4gICAgcGFyZW50LmNvbmZpZz0gSlNPTi5zdHJpbmdpZnkocGFyZW50LmNvbmZpZylcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBlbGVtZW50czogbmV3RWxlbWVudHNcbiAgICB9KVxuXG4gICAgd3JpdGVEYXRhKFwidWktZWRpdG9yXCIsIG5ld0VsZW1lbnRzKVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlRWxlbWVudCAoZWxlbWVudCkge1xuICAgIGxldCBjb21wb25lbnRzID0gQXJyYXkuZnJvbSh0aGlzLnN0YXRlLmNvbXBvbmVudHMpO1xuICAgIFxuICAgIC8vIENoZWNrIGlmIGVsZW1lbnQgZXhpc3QuXG4gICAgbGV0IGVsZW1lbnRFeGlzdCA9IGNvbXBvbmVudHMuZmluZChjb21wb25lbnQ9PmNvbXBvbmVudC5uYW1lPT09ZWxlbWVudC5uYW1lKTtcbiAgICBsZXQgc2VsZWN0ZWRDb21wb25lbnQgPSBjb21wb25lbnRzLmZpbmQoY29tcG9uZW50PT5jb21wb25lbnQubmFtZT09PXRoaXMuc3RhdGUuc2VsZWN0ZWRDb21wb25lbnQubmFtZSk7XG4gICAgbGV0IHNlbGVjdGVkSW5kZXggPSBjb21wb25lbnRzLmZpbmRJbmRleChjb21wb25lbnQ9PmNvbXBvbmVudC5uYW1lPT09dGhpcy5zdGF0ZS5zZWxlY3RlZENvbXBvbmVudC5uYW1lKTtcbiAgICBpZihlbGVtZW50RXhpc3Qpe1xuICAgICAgICAvLyBGaW5kIHRoZSBlbGVtZW50LlxuICAgICAgICBsZXQgZWxlbWVudFVuZGVyRWRpdCA9IHNlbGVjdGVkQ29tcG9uZW50O1xuXG4gICAgICAgIC8vIE1lcmdlLlxuICAgICAgICBlbGVtZW50VW5kZXJFZGl0ID0gT2JqZWN0LmFzc2lnbihlbGVtZW50VW5kZXJFZGl0LCBlbGVtZW50KVxuXG4gICAgICAgIC8vIFB1c2ggaXQgdG8gb3JpZ2luYWwgbGlzdC5cbiAgICAgICAgY29tcG9uZW50c1tzZWxlY3RlZEluZGV4XSA9IGVsZW1lbnRVbmRlckVkaXQ7XG4gICAgfVxuXG4gICAgZWxzZSB7XG4gICAgICAgIGxldCBuZXdFbGVtZW50ID0ge1xuICAgICAgICAgICAgbmFtZTogZWxlbWVudC5uYW1lLFxuICAgICAgICAgICAgbWFya3VwOiBlbGVtZW50Lm1hcmt1cCxcbiAgICAgICAgICAgIGV2ZW50czogW10sXG4gICAgICAgICAgICBzdGF0ZTogZWxlbWVudC5zdGF0ZSB8fCBcInt9XCIsXG4gICAgICAgICAgICBzdHlsZTogZWxlbWVudC5zdHlsZSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgICAgIGlkOiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSoxMDAwKSxcbiAgICAgICAgICAgIGNvbmZpZzpcInt9XCJcbiAgICAgICAgfTtcblxuICAgICAgICBjb21wb25lbnRzLnB1c2gobmV3RWxlbWVudCk7XG4gICAgICAgIHNlbGVjdGVkSW5kZXggPSBjb21wb25lbnRzLmxlbmd0aC0xO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBlbGVtZW50czogY29tcG9uZW50cyxcbiAgICAgICAgZWxlbWVudDoge1xuICAgICAgICAgICAgbmFtZTogZWxlbWVudC5uYW1lLFxuICAgICAgICAgICAgbWFya3VwOiBlbGVtZW50Lm1hcmt1cCxcbiAgICAgICAgICAgIHN0eWxlOiBlbGVtZW50LnN0eWxlLFxuICAgICAgICAgICAgc3RhdGU6IGVsZW1lbnQuc3RhdGUsXG4gICAgICAgICAgICBldmVudHM6IGVsZW1lbnQuZXZlbnRzIHx8IFtdXG4gICAgICAgIH0sXG4gICAgICAgIHNob3dFZGl0b3I6IGZhbHNlXG4gICAgfSk7XG5cbiAgICB3cml0ZURhdGEoXCJ1aS1lZGl0b3JcIiwgY29tcG9uZW50cylcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU2VsZWN0ZWRDb21wb25lbnQgKGUpIHtcbiAgICBsZXQgY29tcG9uZW50TmFtZSA9IGUuY3VycmVudFRhcmdldC5pbm5lclRleHQuc3BsaXQoXCJcXG5cIilbMF07XG4gICAgLy8gRmluZCB0aGUgZWxlbWVudCBmcm9tIHN0YXRlIHRoYXQgbWF0Y2hlcyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGVsZW1lbnQuXG4gICAgbGV0IHNlbGVjdGVkQ29tcG9uZW50ID0gdGhpcy5zdGF0ZS5jb21wb25lbnRzLmZpbmQoY29tcG9uZW50PT5jb21wb25lbnQubmFtZT09PWNvbXBvbmVudE5hbWUpO1xuXG4gICAgd2luZG93LnNlbGVjdGVkY29tcG9uZW50bmFtZSA9IHNlbGVjdGVkQ29tcG9uZW50Lm5hbWU7XG4gICAgLy8gVXBkYXRlIHRoZSBzdGF0ZSB3aXRoIHNlbGVjdGVkRWxlbWVudC5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2VsZWN0ZWRDb21wb25lbnRcbiAgICB9KVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==