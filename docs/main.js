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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(11);
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

var	fixUrls = __webpack_require__(19);

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


var _localStorage = __webpack_require__(45);

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

var _createComponent = __webpack_require__(44);

var _Storage = __webpack_require__(3);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // Dependencies.

/**
 * Store component state as variants. Because variants are visually different form of a component.
 * Since visually different forms are driven by the state, its simple to just keep track of the states.
 */
window.saveVariant = function saveVariant(componentName, state) {
    // 1. Read all components.
    var components = (0, _Storage.readData)("ui-editor");
    // 2. Find the passed component.
    var component = components.find(function (component) {
        return component.name.includes(componentName);
    });
    // 3. If component.variants does not exist, create an empty array.
    component.variants = component.variants || [component.state];
    // 4. push state into component.variant.
    component.variants.push(state);
    // 5. Retain only unique.
    component.variants = [].concat(_toConsumableArray(new Set(component.variants.map(JSON.stringify)))).map(JSON.parse);
    // 6. persist.
    (0, _Storage.writeData)("ui-editor", components);
};

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

var _downloadFile = __webpack_require__(47);

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

function exportSimple(componentName) {
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
    console.log(uniqueComponents.map(_React.convertToReact).map(removeParanthesis).reverse().join(""));
}

function exportNWB(componentName) {
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

    var headerImports = "import React, {Component} from 'react';\n";

    var componentStrings = uniqueComponents.map(_React.convertToReact).map(removeParanthesis);
    componentStrings[0] = "export default " + componentStrings[0];

    var ReactClassComponentString = headerImports + componentStrings.reverse().join("\n");
    console.log(ReactClassComponentString);

    (0, _downloadFile.downloadFile)(componentName + ".js", ReactClassComponentString);
}

function exportStorybook(componentName) {
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

    var headerImports = " /* eslint-disable */\n    import React, {Component} from 'react';\n    ";

    /**
     * IMPORTANT- If we export, do not include saveVariant
     */

    window.ExportNWB = true;

    var componentStrings = uniqueComponents.map(_React.convertToReact).map(removeParanthesis);
    componentStrings[0] = "export default " + componentStrings[0];

    var ReactClassComponentString = headerImports + componentStrings.reverse().join("\n");
    console.log(ReactClassComponentString);

    window.ExportNWB = false;

    (0, _downloadFile.downloadFile)(componentName + ".js", ReactClassComponentString);
}

function onExport(componentName) {
    switch (window.EXPORT_TYPE) {
        case "SIMPLE":
            exportSimple(componentName);
            break;

        case "NWB":
            exportNWB(componentName);
            break;

        case "STORYBOOK":
            exportStorybook(componentName);
            break;
    }
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

    // keep saving variant in browser, but not for code exports.
    var getSaveVariant = function getSaveVariant() {
        if (!window.ExportNWB) {
            return "window.saveVariant(\"" + component.name + "\",state)";
        }
    };

    var propsInMarkup = addProps(component);
    var stateOverideMarkup = getStatedMarkup(propsInMarkup);
    var componentEventedMarkup = getComponentEventedMarkup(stateOverideMarkup, component.events);
    var saveVariant = getSaveVariant();

    var ReactComponent = "(\n        class " + component.name + " extends Component {\n        \n            constructor(props) {\n                super(props);\n                this.state = this.props.state || " + component.state + ";\n\n                var dynamicStyle = document.createElement('style');\n                dynamicStyle.type = 'text/css';\n                dynamicStyle.innerHTML = `" + component.style + "`;\n                document.body.appendChild(dynamicStyle)\n            }\n        \n            " + component.events.map(function (event) {
        if (event.publishable) {
            return "\n                    \n                    " + (event.id + event.name) + " (e) {\n                        var state = JSON.parse(JSON.stringify(this.state))\n                        " + event.reducer + "\n                        debugger;\n                        this.setState(state);\n                        e.state = state;\n                        this.props." + event.publishName + "? this.props." + event.publishName + "(e):null;\n                    }\n                    \n                    ";
        }

        return "\n                    " + (event.id + event.name) + " (e) {\n                        var state = JSON.parse(JSON.stringify(this.state))\n                        " + event.reducer + "\n                        debugger;\n                        " + saveVariant + "\n                        this.setState(state);\n                    }\n                ";
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

__webpack_require__(70);

var _MessageComponent = __webpack_require__(72);

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


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Runtime = __webpack_require__(4);

__webpack_require__(88);

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
                return _react2.default.createElement("div", null);
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(12);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(17);

var _Assets = __webpack_require__(20);

var _Assets2 = _interopRequireDefault(_Assets);

var _Components = __webpack_require__(30);

var _Components2 = _interopRequireDefault(_Components);

var _DraggableComponent = __webpack_require__(53);

var _DraggableComponent2 = _interopRequireDefault(_DraggableComponent);

var _Editor = __webpack_require__(57);

var _Editor2 = _interopRequireDefault(_Editor);

var _Events = __webpack_require__(61);

var _Events2 = _interopRequireDefault(_Events);

var _Toolkit = __webpack_require__(82);

var _Toolkit2 = _interopRequireDefault(_Toolkit);

var _Preview = __webpack_require__(85);

var _Preview2 = _interopRequireDefault(_Preview);

var _Reducer = __webpack_require__(96);

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
                        _react2.default.createElement(_Toolkit2.default, {
                            title: "Toolkit"
                        })
                    )
                );
            } catch (e) {
                console.log(e);
                return _react2.default.createElement(
                    _DraggableComponent2.default,
                    null,
                    _react2.default.createElement(_Toolkit2.default, {
                        name: "Toolkit"
                    })
                );
            }
        }
    }]);

    return Index;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(Index, null), document.getElementById("index"));

/***/ }),
/* 11 */
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
/* 12 */
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
  module.exports = __webpack_require__(13);
} else {}


/***/ }),
/* 13 */
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
var aa=__webpack_require__(0),n=__webpack_require__(5),r=__webpack_require__(14);function ba(a,b,c,d,e,f,g,h){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[c,d,e,f,g,h],k=0;a=Error(b.replace(/%s/g,function(){return l[k++]}));a.name="Invariant Violation"}a.framesToPop=1;throw a;}}
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(15);
} else {}


/***/ }),
/* 15 */
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(16)))

/***/ }),
/* 16 */
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
exports.push([module.i, "body { \n    color: #d9d9d9;\n    font-family: Arial, sans-serif, Georgia, serif;\n}\n\nul {\n    border: 1px #404040 solid;\n}\n\nli , label, p {\n    font-size: 11px;\n}\n\nh4, h5, h6 {\n    border-bottom: 1px solid #333333;\n}\n\ninput, textarea { \n    font-size: 11px;\n    background: #2b2b2b;\n    color: #d9d9d9;\n    opacity: 0.75;\n    vertical-align: bottom;\n}\n\ninput[type=\"text\"] {\n    -webkit-appearance: textarea;\n    color: rgba(255,255,255,0.5);\n    border-color: rgba(0,0,0,0.9);\n    border-width: 1px;\n    padding: 7px;\n}\n\nul label input {\n    width: 10px;\n}\n\nul, li {\n    padding-left: 5px;\n    margin-top: 0px;\n    margin-bottom: 0px;\n}\n\nbutton {\n    color: rgba(255,255,255,0.5);\n    border-color: rgba(0,0,0,0.9);\n    border-width: 1px;\n    padding: 7px;\n    background-color: #343a40;\n    margin-left: 4px;\n}\n\nbutton i{\n    padding-right:4px;\n}\n\nbutton:hover {\n    color: #fff;\n    background: rgb(43, 43, 43);\n}\n\nul,li, ul label {\n    color: rgba(255,255,255,0.5);\n}\n\nul label:hover, li:hover, .content:hover{\n    color: #fff;\n    background: rgb(43, 43, 43);\n}\n\n#index{\n    margin:-4px;\n}", ""]);



/***/ }),
/* 19 */
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(21);

var _Asset = __webpack_require__(23);

var _Asset2 = _interopRequireDefault(_Asset);

var _Reducer = __webpack_require__(26);

var _db = __webpack_require__(29);

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
exports.push([module.i, ".drop_zone {\n      border: 1px lightgray dashed;\n      width:  200px;\n      height: 100px;\n  }\n\n  .drag_over {\n    border: 2px lightgray dashed;\n    width:  200px;\n    height: 100px;\n  }\n\n  .tinyThumbnail,\n  .tinyThumbnail img{\n    width:200px;\n  }", ""]);



/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(24);

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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(25);

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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".selected, .green {\n    border: 1px solid green;\n    background: rgb(43, 43, 43);\n}\n\n.background {\n    background: rgb(64, 64, 64);\n    border-bottom: 1px solid #333333;\n}\n\n.component {\n    display:flex;\n    justify-content: space-between;\n}\n\n.component .componentName{\n    padding:7px;\n}\n\n.thumbnail {\n    width: 50px;\n}\n\n.selectedAsset{\n    border: 1px lightgray dashed;\n}", ""]);



/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dropHandler = dropHandler;
exports.dragOverHandler = dragOverHandler;
exports.dragLeaveHandler = dragLeaveHandler;

var _indexeDB = __webpack_require__(27);

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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _MindexedDB = __webpack_require__(28);

window.iDB = "";


window.onload = function () {
    window.iDB = new _MindexedDB.MindexedDB("uiEditor", { uiEditor: "name" });
    // iDB.put("uiEditor", {data:123})
    window.iDB.connect();
};

exports.default = iDB;

/***/ }),
/* 28 */
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
/* 29 */
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(31);

var _Folders = __webpack_require__(33);

var _Folders2 = _interopRequireDefault(_Folders);

var _Events = __webpack_require__(52);

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
            var props = this.props;
            var state = this.state;
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
                            props.selectedComponent ? "Edit Component" : "Add Component"
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
                            components: state.components,
                            folders: state.folders,
                            selectedComponent: props.selectedComponent,
                            onFoldersUpdate: props.onFoldersUpdate,
                            onSelection: props.onSelection,
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
/* 31 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(32);

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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".override {\n    line-height: 0%;\n}\n\ntextarea {\n    height: 70px;\n    width: 450px;\n}\n\n.elements{\n    position: fixed;\n}\n\n.title{\n    margin-top: 15px;\n    margin-bottom: 11px;\n    color: rgba(255,255,255,0.5);\n    background: rgb(64, 64, 64);\n    margin-top: 10px;\n    padding: 5px;\n}\n\n.elements-tab {\n    left:10px;\n}\n\n.Controls{\n    padding-bottom:8px;\n}", ""]);



/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(34);

var _processFolder = __webpack_require__(36);

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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(35);

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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "input.folder{\n    border:none;\n    background:none;\n}\n\n.newFolder{\n    user-select: none;\n}\n\n.newFolder i{\n    color: rgba(255,255,255,0.5);\n    border-color: rgba(0,0,0,0.9);\n    border-width: 1px;\n    padding: 7px;\n}\n\n.newFolder.dragOver i{\n    animation: blink .5s infinite;\n}\n\n@keyframes blink{\n    from {    \n        color: rgba(255,255,255,0.5);\n    }\n    to {\n        color: white;\n    }\n}\n.fa.fa-folder ~ ul {\n    display: none;\n}\n.fa.fa-folder-open ~ ul {\n    display:block;\n}", ""]);



/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.folderStructure = folderStructure;

var _Folder = __webpack_require__(37);

var _Folder2 = _interopRequireDefault(_Folder);

var _Componentt = __webpack_require__(48);

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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(38);

var _NewFolder = __webpack_require__(40);

var _NewFolder2 = _interopRequireDefault(_NewFolder);

var _Reducer = __webpack_require__(43);

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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(39);

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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "input.folder{\n    border:none;\n    background:none;\n}\n\n.newFolder{\n    user-select: none;\n}\n\n.newFolder i{\n    color: rgba(255,255,255,0.5);\n    border-color: rgba(0,0,0,0.9);\n    border-width: 1px;\n    padding: 7px;\n}\n\n.newFolder.dragOver i{\n    animation: blink .5s infinite;\n}\n\n@keyframes blink{\n    from {    \n        color: rgba(255,255,255,0.5);\n    }\n    to {\n        color: white;\n    }\n}\n.fa.fa-folder ~ ul {\n    display: none;\n}\n.fa.fa-folder-open ~ ul {\n    display:block;\n}", ""]);



/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(41);

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
exports.push([module.i, "input.folder{\n    border:none;\n    background:none;\n}\n\n.newFolder i{\n    color: rgba(255,255,255,0.5);\n    border-color: rgba(0,0,0,0.9);\n    border-width: 1px;\n    padding: 7px;\n}\n\n.newFolder.dragOver i{\n    animation: blink .5s infinite;\n}\n\n@keyframes blink{\n    from {    \n        color: rgba(255,255,255,0.5);\n    }\n    to {\n        color: green;\n    }\n}", ""]);



/***/ }),
/* 43 */
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
/* 44 */
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
/* 45 */
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

var _Sample = __webpack_require__(46);

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
/* 46 */
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
    "config": "{}",
    "variants": []
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
    "config": "{}",
    "variants": []
}, {
    "name": "CancelButton",
    "markup": "<div className=\"vsButton\"><button>{state.cancelButton}</button></div>",
    "events": [],
    "state": "{\"cancelButton\":\"Cancel\"}",
    "style": ".vsButton{\nfont-family: BentonSansBook,Helvetica,Arial,sans-serif;\ncolor: rgb(0, 0, 0);\n}\n\n\n.vsButton button{\nborder-color: #bf215d;\n    color: #fff;\n    background: #ef5f96;\nborder: 1px solid;\npadding: .5rem 2rem;\n}\n\n.vsButton button:hover{\nborder-color: #bf215d;\n}",
    "config": "{}",
    "variants": []
}, {
    "name": "SubmitButton",
    "markup": "<div className=\"vsButton\"><button>{state.submitButton}</button></div>",
    "events": [],
    "state": "{\"submitButton\":\"Submit\"}",
    "style": ".vsButton{\nfont-family: BentonSansBook,Helvetica,Arial,sans-serif;\ncolor: rgb(0, 0, 0);\n}\n\n\n.vsButton button{\nborder-color: #bf215d;\n    color: #fff;\n    background: #ef5f96;\nborder: 1px solid;\npadding: .5rem 2rem;\n}\n\n.vsButton button:hover{\nborder-color: #bf215d;\n}",
    "config": "{}",
    "variants": []
}, {
    "name": "PrivacyAndPolicy",
    "markup": "<div class=\"privacyPolicy\">\n  Please enter the email address you used to create your account and we will send you a link to reset your password. See Privacy Policy\n</div>",
    "events": [],
    "state": "{}",
    "style": ".privacyPolicy{\nfont-family: BentonSansBook,Helvetica,Arial,sans-serif;\nfont-size: 11px;\n    line-height: 17px;\n    letter-spacing: .04em;\n    text-transform: inherit;\n    font-weight: 400;\n}",
    "config": "{}",
    "variants": []
}, {
    "name": "TermsAndService",
    "markup": "<div class=\"privacyPolicy\">\n{state.variant}\n</div>",
    "events": [],
    "state": "{\"variant\":\"This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.\"}",
    "style": ".privacyPolicy{\nfont-family: BentonSansBook,Helvetica,Arial,sans-serif;\nfont-size: 11px;\n    line-height: 17px;\n    letter-spacing: .04em;\n    text-transform: inherit;\n    font-weight: 400;\n}",
    "config": "{}",
    "variants": []
}, {
    "name": "Form",
    "markup": "<form className=\"vsfrm\">\n</form>",
    "events": [],
    "state": "{}",
    "style": ".vsfrm{\nheight:400px;\nwidth:400px;\n}",
    "config": "{}",
    "variants": []
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
    "config": "{}",
    "variants": []
}, {
    "name": "ResetPasswordForm",
    "markup": "<form><TermsAndService></TermsAndService><EmailInput></EmailInput><SubmitButton></SubmitButton><CancelButton></CancelButton><TermsAndService><PrivacyAndPolicy></PrivacyAndPolicy></TermsAndService>\n</form>",
    "events": [],
    "state": "{\"variant\":\"text\"}",
    "style": "form{\nheight:400px;}",
    "config": "{}",
    "variants": []
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
    "config": "{\"VariantModal\":{\"showHideProp\":\"showModal\",\"override\":false},\"ForgotPasswordButton\":{\"showHideProp\":\"\",\"override\":false},\"ForgotPassword\":{\"showHideProp\":\"\",\"override\":false,\"renderListProp\":\"\"},\"ResetPasswordModal\":{\"showHideProp\":\"showModal\",\"override\":true,\"renderListProp\":\"\"}}",
    "variants": []
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
    "config": "{}",
    "variants": []
}, {
    "name": "Facebook",
    "markup": "<div className=\"facebook\"><HelloComponent><Modal><ForgotPassword></ForgotPassword></Modal></HelloComponent></div>",
    "events": [],
    "state": "{}",
    "style": ".facebook{\nbackground-image:$assets['facebook.png'];\n}",
    "config": "{}",
    "variants": []
}];

module.exports = {
    sample: sample
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.downloadFile = downloadFile;
function downloadFile(name, contents, mime_type) {
    mime_type = mime_type || "text/plain";

    var blob = new Blob([contents], { type: mime_type });

    var dlink = document.createElement('a');
    dlink.download = name;
    dlink.href = window.URL.createObjectURL(blob);
    dlink.onclick = function (e) {
        // revokeObjectURL needs a delay to work properly
        var that = this;
        setTimeout(function () {
            window.URL.revokeObjectURL(that.href);
        }, 1500);
    };

    dlink.click();
    dlink.remove();
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Events = __webpack_require__(49);

var _Events2 = __webpack_require__(6);

__webpack_require__(50);

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
/* 49 */
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
exports.push([module.i, ".selected, .green {\n    border: 1px solid green;\n    background: rgb(43, 43, 43);\n}\n\n.background {\n    background: rgb(64, 64, 64);\n    border-bottom: 1px solid #333333;\n}\n\n.component {\n    display:flex;\n    justify-content: space-between;\n}\n\n.component .componentName{\n    padding:7px;\n}\n\n.thumbnail {\n    width: 50px;\n}\n\n.hideAdditionals span:not(.componentName){\n    display:none;\n}\n\n.hideAdditionals {\n    display: inline-block;\n}", ""]);



/***/ }),
/* 52 */
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
            this.props.onFoldersUpdate(folders);

            break;
    }
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(54);

var _config = __webpack_require__(56);

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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(55);

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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "#move > span{  \n    border: 1px solid black;\n    color: black;\n}\n\n#move .move-handle{\n    cursor: move;\n}\n\n#move .move-handle,\n#move .minimise-handle,\n#move .maximise-handle {\n    padding-left: 2px;\n    padding-right: 2px;\n}", ""]);



/***/ }),
/* 56 */
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
    "ui-editor-settings-draggable-component-Toolkit": {
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(58);

var _Reducer = __webpack_require__(60);

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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(59);

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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".hidden{\n    display: none;\n}", ""]);



/***/ }),
/* 60 */
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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Configurator = __webpack_require__(62);

var _Configurator2 = _interopRequireDefault(_Configurator);

var _Nodes = __webpack_require__(65);

var _Nodes2 = _interopRequireDefault(_Nodes);

var _Event = __webpack_require__(66);

var _Event2 = _interopRequireDefault(_Event);

var _Messages = __webpack_require__(77);

var _Messages2 = _interopRequireDefault(_Messages);

__webpack_require__(78);

var _Reducer = __webpack_require__(80);

var _getNodeTree = __webpack_require__(81);

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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(63);

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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(64);

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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".console{\n    position: fixed;\n    right: 150px;\n}\n\n.error {\n    color: red;\n}\n\n.event { \n    padding-left: 10px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    border-top: 1px solid #333333;\n    background: rgb(64, 64, 64);\n}\n\n.info {\n    color: yellowgreen;\n}\n\nlabel {\n    padding-right: 10px;\n}\n\n.configurator {\n    background: rgb(64, 64, 64);\n    margin-top: 10px;\n    padding: 5px;\n}", ""]);



/***/ }),
/* 65 */
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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(67);

var _Messages = __webpack_require__(69);

var _Messages2 = _interopRequireDefault(_Messages);

var _Reducer = __webpack_require__(75);

var _Events = __webpack_require__(76);

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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(68);

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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".console{\n    position: fixed;\n    right: 150px;\n}\n\n.error {\n    color: red;\n}\n\n.event { \n    padding-left: 10px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    border-top: 1px solid #333333;\n    background: rgb(64, 64, 64);\n}\n\n.info {\n    color: yellowgreen;\n}\n\nlabel {\n    padding-right: 10px;\n}\n\n.event input {\n    margin-left:0px;\n}\n\n.event textarea {\n    margin-top: 8px;\n}", ""]);



/***/ }),
/* 69 */
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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(71);

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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".console{\n    position: fixed;\n    right: 150px;\n    bottom: 50px;\n}\n\n.error {\n    color: red;\n}\n\n\n.info {\n    color: yellowgreen;\n}", ""]);



/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(73);

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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(74);

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
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "\n.error {\n    color: red;\n}\n\n\n.info {\n    color: yellowgreen;\n}", ""]);



/***/ }),
/* 75 */
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
/* 76 */
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
/* 77 */
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
/* 78 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(79);

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
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".events {\n    border:1px solid black;\n    padding: 5px;\n}\n\n.error {\n    color: red;\n    position: fixed;\n    right: 150px;\n}", ""]);



/***/ }),
/* 80 */
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
/* 81 */
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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Storage = __webpack_require__(3);

__webpack_require__(83);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libraries.

var Toolkit = function (_Component) {
    _inherits(Toolkit, _Component);

    function Toolkit(props) {
        _classCallCheck(this, Toolkit);

        var _this = _possibleConstructorReturn(this, (Toolkit.__proto__ || Object.getPrototypeOf(Toolkit)).call(this, props));

        _this.state = {
            exportType: "SIMPLE"
            // TODO, cleanup all local storage to write to window.
        };window.EXPORT_TYPE = "SIMPLE";
        return _this;
    }

    _createClass(Toolkit, [{
        key: "refreshToPrevious",
        value: function refreshToPrevious() {
            (0, _Storage.popHistory)();
        }
    }, {
        key: "onExportTypeChanged",
        value: function onExportTypeChanged(e) {
            this.setState({
                exportType: e.target.value
            });
            // TODO, cleanup all local storage to write to window.
            window.EXPORT_TYPE = e.target.value;
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
                    "Toolkit"
                ),
                _react2.default.createElement(
                    "div",
                    null,
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
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(
                        "div",
                        { className: "title" },
                        "Export Code Configuration"
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
                                    "label",
                                    null,
                                    _react2.default.createElement("input", {
                                        type: "radio",
                                        name: "Export",
                                        value: "SIMPLE",
                                        checked: this.state.exportType === "SIMPLE",
                                        onChange: this.onExportTypeChanged.bind(this)
                                    }),
                                    "React - Class component"
                                )
                            ),
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "label",
                                    null,
                                    _react2.default.createElement("input", {
                                        type: "radio",
                                        name: "Export",
                                        value: "NWB",
                                        checked: this.state.exportType === "NWB",
                                        onChange: this.onExportTypeChanged.bind(this)
                                    }),
                                    "React - Importable component"
                                )
                            ),
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "label",
                                    null,
                                    _react2.default.createElement("input", {
                                        type: "radio",
                                        name: "Export",
                                        value: "STORYBOOK",
                                        checked: this.state.exportType === "STORYBOOK",
                                        onChange: this.onExportTypeChanged.bind(this)
                                    }),
                                    "React - Class storybook component"
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Toolkit;
}(_react.Component);

exports.default = Toolkit;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(84);

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
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".container{\n    border: 1px solid black;\n    padding: 5px;\n    box-shadow: 0px 8px 26px -8px black;\n    background: #2C3134;\n}\n", ""]);



/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(86);

var _DynamicComponent = __webpack_require__(9);

var _DynamicComponent2 = _interopRequireDefault(_DynamicComponent);

var _Variants = __webpack_require__(90);

var _Variants2 = _interopRequireDefault(_Variants);

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
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(_Variants2.default, { component: this.state.component }),
                    _react2.default.createElement(
                        "div",
                        { className: "dynamicComponent" },
                        _react2.default.createElement(
                            "div",
                            { className: "title" },
                            "Preview"
                        ),
                        _react2.default.createElement(_DynamicComponent2.default, { key: randomKey, component: this.state.component })
                    )
                )
            );
        }
    }]);

    return Preview;
}(_react.Component);

exports.default = Preview;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(87);

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
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".container{\n    border: 1px solid black;\n    padding: 5px;\n    box-shadow: 0px 8px 26px -8px black;\n    background: #2C3134;\n}\n\n.dropPoint{\n    border: 1px solid green;\n}\n\n.targetChild{\n    border: 1px solid #3E8CE4;\n}\n\n.preview .variants{\n    display: inline-block;\n    overflow: scroll;\n    max-height: 500px;\n}\n\n.preview .dynamicComponent{\n    display: inline-block;\n}", ""]);



/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(89);

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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "", ""]);



/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Variant = __webpack_require__(91);

var _Variant2 = _interopRequireDefault(_Variant);

__webpack_require__(94);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libraries.

// Components.

var Variants = function (_Component) {
    _inherits(Variants, _Component);

    function Variants(props) {
        _classCallCheck(this, Variants);

        return _possibleConstructorReturn(this, (Variants.__proto__ || Object.getPrototypeOf(Variants)).call(this, props));
    }

    _createClass(Variants, [{
        key: "render",
        value: function render() {

            var component = this.props.component;

            if (component.name == "") {
                return _react2.default.createElement(
                    "div",
                    null,
                    "No component selected. variants tab"
                );
            }
            if (!component.variants) {
                return _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(
                        "div",
                        null,
                        "Component has no variants"
                    ),
                    _react2.default.createElement(
                        "div",
                        null,
                        "To generate, interact in preview."
                    )
                );
            }

            var variants = component.variants.map(function (variant) {
                return _react2.default.createElement(_Variant2.default, { state: JSON.stringify(variant), component: component });
            });
            return _react2.default.createElement(
                "div",
                { className: "variants" },
                _react2.default.createElement(
                    "div",
                    { className: "title" },
                    "Variant"
                ),
                variants
            );
        }
    }]);

    return Variants;
}(_react.Component);

exports.default = Variants;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _DynamicComponent = __webpack_require__(9);

var _DynamicComponent2 = _interopRequireDefault(_DynamicComponent);

__webpack_require__(92);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Libraries.

// Components.


var Variant = function (_Component) {
    _inherits(Variant, _Component);

    function Variant(props) {
        _classCallCheck(this, Variant);

        return _possibleConstructorReturn(this, (Variant.__proto__ || Object.getPrototypeOf(Variant)).call(this, props));
    }

    _createClass(Variant, [{
        key: "render",
        value: function render() {
            var component = JSON.parse(JSON.stringify(this.props.component));
            if (component.name == "") {
                return _react2.default.createElement("div", null);
            }
            component.state = this.props.state;
            return _react2.default.createElement(
                "div",
                { className: "variant" },
                _react2.default.createElement(_DynamicComponent2.default, { component: component })
            );
        }
    }]);

    return Variant;
}(_react.Component);

exports.default = Variant;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(93);

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
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".variant{\n    border: 1px dotted black;\n    pointer-events: none;\n    padding:20px;\n    zoom: .5;\n    margin-bottom: 30px;\n}", ""]);



/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(95);

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
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, ".variants {\n    display: inline-block\n}", ""]);



/***/ }),
/* 96 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvU3RvcmFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL1J1bnRpbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWxpdGllcy9Db21wb25lbnRzL0ZvbGRlcnMvRm9sZGVyL0V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL0NvZGVHZW5lcmF0b3IvUmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9Db21wb25lbnRzL01lc3NhZ2VzQ29tcG9uZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9QcmV2aWV3L0R5bmFtaWNDb21wb25lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZG9tL2Nqcy9yZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NjaGVkdWxlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2NoZWR1bGVyL2Nqcy9zY2hlZHVsZXIucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSW5kZXgvaW5kZXguY3NzP2QwZDciLCJ3ZWJwYWNrOi8vLy4vc3JjL0luZGV4L2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NyYy9Bc3NldHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Fzc2V0cy9TdHlsZS5jc3M/OWVhYSIsIndlYnBhY2s6Ly8vLi9zcmMvQXNzZXRzL1N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXNzZXRzL0Fzc2V0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9Bc3NldHMvQXNzZXQvU3R5bGUuY3NzPzU4ZTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Fzc2V0cy9Bc3NldC9TdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Fzc2V0cy9SZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9VdGlsaXRpZXMvTGlicmFyaWVzL2luZGV4ZWREQi9pbmRleGVEQi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbGl0aWVzL0xpYnJhcmllcy9pbmRleGVkREIvTWluZGV4ZWREQi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXNzZXRzL2RiLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1N0eWxlLmNzcz8zNmRmIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbGl0aWVzL0NvbXBvbmVudHMvRm9sZGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbGl0aWVzL0NvbXBvbmVudHMvRm9sZGVycy9TdHlsZS5jc3M/ODQ2NSIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbGl0aWVzL0NvbXBvbmVudHMvRm9sZGVycy9TdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWxpdGllcy9Db21wb25lbnRzL0ZvbGRlcnMvcHJvY2Vzc0ZvbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbGl0aWVzL0NvbXBvbmVudHMvRm9sZGVycy9Gb2xkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWxpdGllcy9Db21wb25lbnRzL0ZvbGRlcnMvRm9sZGVyL1N0eWxlLmNzcz9hOWJlIiwid2VicGFjazovLy8uL3NyYy9VdGlsaXRpZXMvQ29tcG9uZW50cy9Gb2xkZXJzL0ZvbGRlci9TdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWxpdGllcy9Db21wb25lbnRzL0ZvbGRlcnMvTmV3Rm9sZGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9VdGlsaXRpZXMvQ29tcG9uZW50cy9Gb2xkZXJzL05ld0ZvbGRlci9TdHlsZS5jc3M/ZTNiZiIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbGl0aWVzL0NvbXBvbmVudHMvRm9sZGVycy9OZXdGb2xkZXIvU3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9VdGlsaXRpZXMvQ29tcG9uZW50cy9Gb2xkZXJzL0ZvbGRlci9SZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvY3JlYXRlLWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL1N0b3JhZ2UvbG9jYWxTdG9yYWdlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvU3RvcmFnZS9sb2NhbFN0b3JhZ2UvU2FtcGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9VdGlsaXRpZXMvTGlicmFyaWVzL2Rvd25sb2FkRmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Db21wb25lbnR0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbXBvbmVudHQvRXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0NvbXBvbmVudHQvU3R5bGUuY3NzPzhmMDciLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ29tcG9uZW50dC9TdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvRXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9VdGlsaXRpZXMvQ29tcG9uZW50cy9EcmFnZ2FibGVDb21wb25lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1V0aWxpdGllcy9Db21wb25lbnRzL0RyYWdnYWJsZUNvbXBvbmVudC9zdHlsZS5jc3M/ZGVlYyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbGl0aWVzL0NvbXBvbmVudHMvRHJhZ2dhYmxlQ29tcG9uZW50L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvVXRpbGl0aWVzL0NvbXBvbmVudHMvRHJhZ2dhYmxlQ29tcG9uZW50L2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRWRpdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9FZGl0b3IvU3R5bGUuY3NzPzFiZmMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VkaXRvci9TdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VkaXRvci9SZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9FdmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2ZW50cy9Db25maWd1cmF0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2ZW50cy9Db25maWd1cmF0b3IvU3R5bGUuY3NzP2VlMjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2ZW50cy9Db25maWd1cmF0b3IvU3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvQ29tcG9uZW50cy9Ob2Rlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXZlbnRzL0V2ZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9FdmVudHMvRXZlbnQvU3R5bGUuY3NzP2JhOTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2ZW50cy9FdmVudC9TdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2ZW50cy9FdmVudC9NZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL0NvbXBvbmVudHMvTWVzc2FnZXNDb21wb25lbnQvc3R5bGUuY3NzPzFkNDEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9Db21wb25lbnRzL01lc3NhZ2VzQ29tcG9uZW50L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL0NvbXBvbmVudHMvTWVzc2FnZUNvbXBvbmVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL0NvbXBvbmVudHMvTWVzc2FnZUNvbXBvbmVudC9zdHlsZS5jc3M/N2M4OSIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL0NvbXBvbmVudHMvTWVzc2FnZUNvbXBvbmVudC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2ZW50cy9FdmVudC9SZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9FdmVudHMvRXZlbnQvRXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9FdmVudHMvTWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0V2ZW50cy9TdHlsZS5jc3M/Nzk3MSIsIndlYnBhY2s6Ly8vLi9zcmMvRXZlbnRzL1N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXZlbnRzL1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9nZXQtbm9kZS10cmVlLmpzIiwid2VicGFjazovLy8uL3NyYy9Ub29sa2l0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9Ub29sa2l0L3N0eWxlLmNzcz8zYjFmIiwid2VicGFjazovLy8uL3NyYy9Ub29sa2l0L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJldmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJldmlldy9zdHlsZS5jc3M/NmQ0OCIsIndlYnBhY2s6Ly8vLi9zcmMvUHJldmlldy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ByZXZpZXcvRHluYW1pY0NvbXBvbmVudC9zdHlsZS5jc3M/NTI1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvUHJldmlldy9EeW5hbWljQ29tcG9uZW50L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJldmlldy9WYXJpYW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvUHJldmlldy9WYXJpYW50cy9WYXJpYW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9QcmV2aWV3L1ZhcmlhbnRzL1ZhcmlhbnQvc3R5bGUuY3NzPzhlY2MiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ByZXZpZXcvVmFyaWFudHMvVmFyaWFudC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ByZXZpZXcvVmFyaWFudHMvc3R5bGUuY3NzPzRlYTciLCJ3ZWJwYWNrOi8vLy4vc3JjL1ByZXZpZXcvVmFyaWFudHMvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9JbmRleC9SZWR1Y2VyLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJyZWFkRGF0YSIsIndyaXRlRGF0YSIsInJlYWRDb21wb25lbnQiLCJ3cml0ZUNvbXBvbmVudCIsInBvcEhpc3RvcnkiLCJzYXZlQ29tcG9uZW50c1RvV2luZG93IiwiZ2V0TmVzdGVkQ29tcG9uZW50cyIsIndpbmRvdyIsInNhdmVWYXJpYW50IiwiY29tcG9uZW50TmFtZSIsInN0YXRlIiwiY29tcG9uZW50cyIsImNvbXBvbmVudCIsImZpbmQiLCJuYW1lIiwiaW5jbHVkZXMiLCJ2YXJpYW50cyIsInB1c2giLCJTZXQiLCJtYXAiLCJKU09OIiwic3RyaW5naWZ5IiwicGFyc2UiLCJjcmVhdGVTdHlsZXNoZWV0Iiwic3R5bGUiLCJhc3NldCIsInNwbGl0IiwicG9wIiwiam9pbiIsInJlcGxhY2UiLCJhc3NldHMiLCJ0b0RlbGV0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwicmVtb3ZlIiwiZHluYW1pY1N0eWxlIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsInR5cGUiLCJpbm5lckhUTUwiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzYXZlVG9XaW5kb3ciLCJjaGVja05lc3RlZENvbXBvbmVudHMiLCJtYXJrdXAiLCJmaWx0ZXIiLCJsZW5ndGgiLCJuZXN0ZWRDb21wb25lbnRzIiwicGFyZW50IiwiY2hpbGRyZW4iLCJncmFuZEtpZHMiLCJmbGF0IiwiZHJvcEhhbmRsZXIiLCJkcmFnT3ZlckhhbmRsZXIiLCJkcmFnTGVhdmVIYW5kbGVyIiwib25EcmFnU3RhcnQiLCJvbkV4cG9ydCIsImV2IiwicHJldmVudERlZmF1bHQiLCJkYXRhVHJhbnNmZXIiLCJnZXREYXRhIiwiZm9sZGVyTmFtZSIsImNvbnRlbnRzIiwiQXJyYXkiLCJmcm9tIiwic3RhdHVzIiwicHJvcHMiLCJvbkZvbGRlclVwZGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsImZvbGRlckNsYXNzIiwiZSIsImV2ZW50IiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwic2V0RGF0YSIsImV4cG9ydFNpbXBsZSIsInNlbGVjdGVkQ29tcG9uZW50IiwidW5pcXVlQ29tcG9uZW50cyIsImNvbSIsImVsZW1lbnQiLCJyZW1vdmVQYXJhbnRoZXNpcyIsImNvbnZlcnRUb1JlYWN0IiwicmV2ZXJzZSIsImV4cG9ydE5XQiIsImhlYWRlckltcG9ydHMiLCJjb21wb25lbnRTdHJpbmdzIiwiUmVhY3RDbGFzc0NvbXBvbmVudFN0cmluZyIsImV4cG9ydFN0b3J5Ym9vayIsIkV4cG9ydE5XQiIsIkVYUE9SVF9UWVBFIiwiZXZlbnRzIiwiaWQiLCJhZGRQcm9wcyIsImdldENvbXBvbmVudEV2ZW50ZWRNYXJrdXAiLCJnZXRTdGF0ZWRNYXJrdXAiLCJjb25maWciLCJjaGlsZHJlbkNvbmZpZyIsIk9iamVjdCIsImtleXMiLCJjaGlsZE5hbWUiLCJvdmVycmlkZSIsImNoaWxkTWFya3VwIiwiY2hpbGRNYXJrdXBXaXRoUHJvcHMiLCJyZW5kZXJMaXN0TWFya3VwIiwiZ2V0U2F2ZVZhcmlhbnQiLCJwcm9wc0luTWFya3VwIiwic3RhdGVPdmVyaWRlTWFya3VwIiwiY29tcG9uZW50RXZlbnRlZE1hcmt1cCIsIlJlYWN0Q29tcG9uZW50IiwicHVibGlzaGFibGUiLCJyZWR1Y2VyIiwicHVibGlzaE5hbWUiLCJNZXNzYWdlc0NvbXBvbmVudCIsIm1lc3NhZ2VzIiwibWVzc2FnZSIsImluZGV4IiwiQ29tcG9uZW50IiwiRHluYW1pY0NvbXBvbmVudCIsInVuZGVmaW5lZCIsIlJlYWN0IiwiSW5kZXgiLCJzZWxlY3RlZFRhZyIsImZvbGRlcnMiLCJzaG93RWRpdG9yIiwidXBkYXRlQ29uZmlnIiwiYmluZCIsInVwZGF0ZUV2ZW50Iiwic2F2ZUVsZW1lbnQiLCJ1cGRhdGVTZWxlY3RlZENvbXBvbmVudCIsInByZXZpZXdDb21wb25lbnQiLCJNYXRoIiwiY2VpbCIsInJhbmRvbSIsIm9wZW5FZGl0b3IiLCJ1cGRhdGVGb2xkZXJzIiwiUmVhY3RET00iLCJyZW5kZXIiLCJnZXRFbGVtZW50QnlJZCIsIkFzc2V0cyIsImNsYXNzIiwiaW1hZ2VVUkwiLCJzZWxlY3RlZEFzc2V0Iiwid3JpdGVUb0RCIiwiZmlsZSIsImJpbiIsInJlc3VsdCIsIm5ld0ZpbGUiLCJzaXplIiwiaW1nIiwic3JjIiwiYXNzZXROYW1lIiwidXBkYXRlZFNlbGVjdGVkIiwiZmV0Y2hGcm9tREIiLCJBc3NldCIsInNlbGVjdGVkIiwib25TZWxlY3RlZCIsImNhbGwiLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkZW5kIiwiYiIsImFwcGVuZFRvQm9keSIsImlEQiIsIm9ubG9hZCIsIk1pbmRleGVkREIiLCJ1aUVkaXRvciIsImNvbm5lY3QiLCJkYXRhYmFzZU5hbWUiLCJvYmplY3RTdG9yZXMiLCJpZGIiLCJpbmRleGVkREIiLCJtb3pJbmRleGVkREIiLCJ3ZWJraXRJbmRleGVkREIiLCJtc0luZGV4ZWREQiIsInNoaW1JbmRleGVkREIiLCJkYiIsIm9ialN0cnMiLCJpc0FycmF5Iiwic3RvcmUiLCJrZXkiLCJjb25uIiwib3BlbiIsIm1kYiIsIm9udXBncmFkZW5lZWRlZCIsImRibCIsImVudHJpZXMiLCJjcmVhdGVPYmplY3RTdG9yZSIsImtleVBhdGgiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsIm9uc3VjY2VzcyIsIm9uZXJyb3IiLCJlcnJvciIsImNzIiwidHgiLCJ0cmFuc2FjdGlvbiIsIm9iamVjdFN0b3JlIiwicHV0Iiwib2JqIiwib3MiLCJyZXNwb25zZSIsImdldCIsImdldEFsbCIsImNsb3NlIiwidGhlbiIsImhyZWYiLCJkYXRhIiwiaW1hZ2UiLCJDb21wb25lbnRzIiwidW5zaGlmdCIsIm9uT3BlbkVkaXRvciIsImFkZENvbXBvbmVudCIsImFkZEZvbGRlciIsIm9uRm9sZGVyc1VwZGF0ZSIsIm9uU2VsZWN0aW9uIiwib25EZWxldGVDb21wb25lbnQiLCJvbkRlbGV0ZUZvbGRlciIsIkZvbGRlcnMiLCJmb2xkZXIiLCJlbXB0eUZvbGRlckluZGV4IiwiZmluZEluZGV4Iiwic3BsaWNlIiwiY3VycmVudEZvbGRlciIsImNvbnRlbnQiLCJjaGVja0ZvbGRlciIsImZvbGRlclN0cnVjdHVyZSIsImluaXRpYWxpc2VQcm9wcyIsInByb2Nlc3NGb2xkZXIiLCJpIiwicHJvY2Vzc0NvbnRlbnQiLCJGb2xkZXIiLCJpY29uU3RhdHVzIiwibmV3Rm9sZGVyIiwidG9nZ2xlRm9sZGVyIiwiZGVsZXRlRm9sZGVyIiwiTmV3Rm9sZGVyIiwibmV3Rm9sZGVyQ2xhc3MiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJvbk5ld0ZvbGRlciIsImZvbGRlck5hbWVDaGFuZ2VkIiwic2F2ZUZvbGRlck5hbWVPbkVudGVyIiwib3BlbkZvbGRlciIsImNsb3NlRm9sZGVyIiwiY3JlYXRlQ29tcG9uZW50IiwiY29tcG9uZW50U3RyaW5nIiwiZXZhbCIsIkJhYmVsIiwidHJhbnNmb3JtIiwicHJlc2V0cyIsInBsdWdpbnMiLCJjb2RlIiwicHVzaEhpc3RvcnkiLCJlZGl0b3JIaXN0b3J5IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldEl0ZW0iLCJzYW1wbGUiLCJoaXN0b3J5IiwiY29tcG9uZW50TmFtZXMiLCJub1B1c2giLCJjb21wIiwibGFzdEl0ZW0iLCJkb3dubG9hZEZpbGUiLCJtaW1lX3R5cGUiLCJibG9iIiwiQmxvYiIsImRsaW5rIiwiZG93bmxvYWQiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJvbmNsaWNrIiwidGhhdCIsInNldFRpbWVvdXQiLCJyZXZva2VPYmplY3RVUkwiLCJjbGljayIsIkNvbXBvbmVudHQiLCJjbGFzc0xpc3QiLCJoYW5kbGVEcmFnIiwicmVzdG9yZUNsYXNzIiwic2VsZWN0aW9uQ2hhbmdlZCIsIm9uU2VsZWN0aW9uQ2hhbmdlIiwiYWRkIiwiZXZlbnRDYWxsYmFja3MiLCJzdG9wUHJvcGFnYXRpb24iLCJwYXJlbnRFbGVtZW50IiwiaW5uZXJUZXh0IiwiVFlQRSIsImZvbGRlclRvRGVsZXRlIiwibm9Gb2xkZXIiLCJEcmFnZ2FibGVDb21wb25lbnQiLCJwYW5lbE5hbWUiLCJ0aXRsZSIsImRyYWdnYWJsZSIsInRvcCIsInBhZ2VZIiwibGVmdCIsInBhZ2VYIiwibWluaW1pc2VkIiwibW92ZURpdiIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsInRvZ2dsZU1pbmltaXNlTWF4aW1pc2UiLCJFZGl0b3IiLCJvblNhdmUiLCJ1cGRhdGVOYW1lIiwidXBkYXRlTWFya3VwIiwidXBkYXRlU3R5bGUiLCJ1cGRhdGVTdGF0ZSIsImdldFByb3BlcnR5Q29udGFpbmluZ1Byb3BzIiwiY2hpbGQiLCJwcm9wZXJ0eSIsIkV2ZW50cyIsImFzc2lnbiIsIm5vZGVUcmVlIiwiZXZlbnRzT2ZTZWxlY3RlZFRhZyIsImNvbmZpZ3VyYXRvciIsImV2ZW50TmFtZXMiLCJjaGlsZENvbXBvbmVudE5hbWUiLCJjaGlsZENvbXBvbmVudCIsInB1Ymxpc2hhYmxlRXZlbnQiLCJldmVudE5hbWUiLCJkZWxldGVFdmVudCIsInVwZGF0ZUNvbmZpZ3VyYXRpb24iLCJzZWxlY3RlZFRhZ0NoYW5nZWQiLCJDb25maWd1cmF0b3IiLCJvbkNoYW5nZSIsInBhcmVudE5hbWUiLCJ0b2dnZWxPdmVycmlkZSIsIk5vZGVzIiwibm9kZSIsIm9uU2VsZWN0ZWRUYWdDaGFuZ2VkIiwiRXZlbnQiLCJzZWxlY3RlZFRhZ0lEIiwidXBkYXRlUHVibGlzaE5hbWUiLCJ1cGRhdGVFdmVudE5hbWUiLCJ1cGRhdGVSZWR1Y2VyIiwidXBkYXRlRXZlbnRUeXBlIiwicHVibGlzaEV2ZW50IiwiZ2V0TWVzc2FnZXMiLCJ0ZXh0IiwiTWVzc2FnZUNvbXBvbmVudCIsImNoZWNrZWQiLCJvbkV2ZW50c1VwZGF0ZSIsIm9uQ29uZmlnVXBkYXRlIiwiZ2V0Tm9kZVRyZWUiLCJqc3giLCJUb29sa2l0IiwiZXhwb3J0VHlwZSIsInJlZnJlc2hUb1ByZXZpb3VzIiwib25FeHBvcnRUeXBlQ2hhbmdlZCIsIlByZXZpZXciLCJyYW5kb21LZXkiLCJWYXJpYW50cyIsInZhcmlhbnQiLCJWYXJpYW50IiwibmV3RWxlbWVudHMiLCJlbGVtZW50cyIsImVsZW1lbnRFeGlzdCIsInNlbGVjdGVkSW5kZXgiLCJlbGVtZW50VW5kZXJFZGl0IiwibmV3RWxlbWVudCIsInNlbGVjdGVkY29tcG9uZW50bmFtZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFF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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0EsS0FBSyxLQUF3QyxFQUFFLEVBRTdDOztBQUVGLFFBQVEsc0JBQWlCO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7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QUFnQm5XLFdBQVdxQyxNQUFYLEdBQWtCLENBQWxDO0FBQ0g7O0FBRUQsU0FBS3dCLFFBQUwsQ0FBYztBQUNWb1Msa0JBQVVqVyxVQURBO0FBRVZ3RSxpQkFBUztBQUNMckUsa0JBQU1xRSxRQUFRckUsSUFEVDtBQUVMZ0Msb0JBQVFxQyxRQUFRckMsTUFGWDtBQUdMdEIsbUJBQU8yRCxRQUFRM0QsS0FIVjtBQUlMZCxtQkFBT3lFLFFBQVF6RSxLQUpWO0FBS0xvRixvQkFBUVgsUUFBUVcsTUFBUixJQUFrQjtBQUxyQixTQUZDO0FBU1ZpQyxvQkFBWTtBQVRGLEtBQWQ7O0FBWUEsNEJBQVUsV0FBVixFQUF1QnBILFVBQXZCO0FBQ0g7O0FBR00sU0FBU3lILHVCQUFULENBQWtDMUQsQ0FBbEMsRUFBcUM7QUFDeEMsUUFBSWpFLGdCQUFnQmlFLEVBQUUwSyxhQUFGLENBQWdCaUQsU0FBaEIsQ0FBMEIzUSxLQUExQixDQUFnQyxJQUFoQyxFQUFzQyxDQUF0QyxDQUFwQjtBQUNBO0FBQ0EsUUFBSXNELG9CQUFvQixLQUFLdEUsS0FBTCxDQUFXQyxVQUFYLENBQXNCRSxJQUF0QixDQUEyQjtBQUFBLGVBQVdELFVBQVVFLElBQVYsS0FBaUJMLGFBQTVCO0FBQUEsS0FBM0IsQ0FBeEI7O0FBRUFGLFdBQU8wVyxxQkFBUCxHQUErQmpTLGtCQUFrQmxFLElBQWpEO0FBQ0E7QUFDQSxTQUFLMEQsUUFBTCxDQUFjO0FBQ1ZRO0FBRFUsS0FBZDtBQUdILEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiaW1wb3J0IHtyZWFkRGF0YSwgd3JpdGVEYXRhLCB3cml0ZUNvbXBvbmVudCwgcmVhZENvbXBvbmVudCwgcG9wSGlzdG9yeSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICByZWFkRGF0YTogcmVhZERhdGEsXG4gICAgd3JpdGVEYXRhOiB3cml0ZURhdGEsXG4gICAgcmVhZENvbXBvbmVudDogcmVhZENvbXBvbmVudCxcbiAgICB3cml0ZUNvbXBvbmVudDogd3JpdGVDb21wb25lbnQsXG4gICAgcG9wSGlzdG9yeTogcG9wSGlzdG9yeVxufSIsIi8vIERlcGVuZGVuY2llcy5cblxuaW1wb3J0IHtjcmVhdGVDb21wb25lbnR9IGZyb20gXCIuLi9jcmVhdGUtY29tcG9uZW50XCI7XG5pbXBvcnQge3JlYWREYXRhLCB3cml0ZURhdGF9IGZyb20gXCIuLi9TdG9yYWdlXCI7XG5cbi8qKlxuICogU3RvcmUgY29tcG9uZW50IHN0YXRlIGFzIHZhcmlhbnRzLiBCZWNhdXNlIHZhcmlhbnRzIGFyZSB2aXN1YWxseSBkaWZmZXJlbnQgZm9ybSBvZiBhIGNvbXBvbmVudC5cbiAqIFNpbmNlIHZpc3VhbGx5IGRpZmZlcmVudCBmb3JtcyBhcmUgZHJpdmVuIGJ5IHRoZSBzdGF0ZSwgaXRzIHNpbXBsZSB0byBqdXN0IGtlZXAgdHJhY2sgb2YgdGhlIHN0YXRlcy5cbiAqL1xud2luZG93LnNhdmVWYXJpYW50ID0gZnVuY3Rpb24gc2F2ZVZhcmlhbnQoY29tcG9uZW50TmFtZSwgc3RhdGUpIHtcbiAgICAvLyAxLiBSZWFkIGFsbCBjb21wb25lbnRzLlxuICAgIGxldCBjb21wb25lbnRzID0gcmVhZERhdGEoXCJ1aS1lZGl0b3JcIik7XG4gICAgLy8gMi4gRmluZCB0aGUgcGFzc2VkIGNvbXBvbmVudC5cbiAgICBsZXQgY29tcG9uZW50ID0gY29tcG9uZW50cy5maW5kKGNvbXBvbmVudD0+Y29tcG9uZW50Lm5hbWUuaW5jbHVkZXMoY29tcG9uZW50TmFtZSkpO1xuICAgIC8vIDMuIElmIGNvbXBvbmVudC52YXJpYW50cyBkb2VzIG5vdCBleGlzdCwgY3JlYXRlIGFuIGVtcHR5IGFycmF5LlxuICAgIGNvbXBvbmVudC52YXJpYW50cyA9IGNvbXBvbmVudC52YXJpYW50cyB8fCBbY29tcG9uZW50LnN0YXRlXTtcbiAgICAvLyA0LiBwdXNoIHN0YXRlIGludG8gY29tcG9uZW50LnZhcmlhbnQuXG4gICAgY29tcG9uZW50LnZhcmlhbnRzLnB1c2goc3RhdGUpO1xuICAgIC8vIDUuIFJldGFpbiBvbmx5IHVuaXF1ZS5cbiAgICBjb21wb25lbnQudmFyaWFudHMgPSBbLi4ubmV3IFNldChjb21wb25lbnQudmFyaWFudHMubWFwKEpTT04uc3RyaW5naWZ5KSldLm1hcChKU09OLnBhcnNlKVxuICAgIC8vIDYuIHBlcnNpc3QuXG4gICAgd3JpdGVEYXRhKFwidWktZWRpdG9yXCIsIGNvbXBvbmVudHMpXG59O1xuXG4vKipcbiAqIFxuICogQXNzZXQgaW4gc3R5bGUgc2hlZXQgc3ludGF4IC0gJGFzc2V0XG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVzaGVldChzdHlsZSwgbmFtZSkge1xuXG4gICAgLy8gQ2hlY2sgaWYgc3R5bGUgaGFzICRhc3NldHNcbiAgICB3aGlsZShzdHlsZS5pbmNsdWRlcyhcIiRhc3NldHNcIikpe1xuICAgICAgICAvLyBSZXBsYWNlIGl0IHdpdGggYXNzZXQgYmxvYiB1cmxcbiAgICAgICAgbGV0IGFzc2V0ID0gc3R5bGUuc3BsaXQoXCJbJ1wiKVsxXS5zcGxpdChgXWApWzBdLnNwbGl0KFwiXCIpO1xuICAgICAgICBhc3NldC5wb3AoKTtcbiAgICAgICAgYXNzZXQgPSAgYXNzZXQuam9pbihcIlwiKTtcbiAgICAgICAgc3R5bGUgPSBzdHlsZS5yZXBsYWNlKGAkYXNzZXRzWycke2Fzc2V0fSddYCwgYHVybCgke3dpbmRvdy5hc3NldHNbYXNzZXRdfSlgKVxuICAgIH1cbiAgICBsZXQgdG9EZWxldGUgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWNvbXBvbmVudC1uYW1lPSdQYXJlbnRDb21wb25lbnQnXVwiKV07XG4gICAgdG9EZWxldGUuZm9yRWFjaChpdGVtPT57XG4gICAgICAgIGl0ZW0ucmVtb3ZlKClcbiAgICB9KVxuICAgIHZhciBkeW5hbWljU3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGR5bmFtaWNTdHlsZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbXBvbmVudC1uYW1lXCIsIG5hbWUpO1xuICAgIGR5bmFtaWNTdHlsZS50eXBlID0gJ3RleHQvY3NzJztcbiAgICBkeW5hbWljU3R5bGUuaW5uZXJIVE1MID0gc3R5bGU7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkeW5hbWljU3R5bGUpXG59XG5cbi8qKiBUYWtlcyBhIGNvbXBvbmVudCBhbmQgY29udmVydHMgaXQgYXMgYSByZWFjdCBjb21wb25lbnQgKi9cbmZ1bmN0aW9uIHNhdmVUb1dpbmRvdyggY29tcG9uZW50ICkge1xuICAgIGNyZWF0ZVN0eWxlc2hlZXQoY29tcG9uZW50LnN0eWxlLCBjb21wb25lbnQubmFtZSlcbiAgICB3aW5kb3dbY29tcG9uZW50Lm5hbWVdID0gY3JlYXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrTmVzdGVkQ29tcG9uZW50cyggbWFya3VwKSB7XG5cbiAgICB2YXIgY29tcG9uZW50cyA9IHJlYWREYXRhKFwidWktZWRpdG9yXCIpO1xuXG4gICAgcmV0dXJuIGNvbXBvbmVudHMuZmlsdGVyKGNvbXBvbmVudD0+IG1hcmt1cC5pbmNsdWRlcyhjb21wb25lbnQubmFtZSkpLmxlbmd0aCA+MDtcbn1cblxuLyoqIFRha2VzIGNvbXBvbmVudHMgYW5kIHNhdmVzIHRoZW0gdG8gd2luZG93IGFzIHJlYWN0IE9iamVjdCAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhdmVDb21wb25lbnRzVG9XaW5kb3coIG5lc3RlZENvbXBvbmVudHMpe1xuICAgIC8vIFRyYW5zcGlsZSB0aGVtIGFuZCBtYWtlIHRoZW0gZ2xvYmFsLlxuICAgIG5lc3RlZENvbXBvbmVudHMuZm9yRWFjaChmdW5jdGlvbihjb21wb25lbnQpe1xuICAgICAgICBzYXZlVG9XaW5kb3coY29tcG9uZW50KVxuICAgIH0pO1xufVxuXG4vKiogVGFrZXMgbWFya3VwIGFuZCByZXR1cm5zIGNoaWxkcmVuIGNvbXBvbmVudCBvYmplY3RzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE5lc3RlZENvbXBvbmVudHMgKHBhcmVudCkge1xuICAgIC8vIFNob3VsZCBiZSBhYmxlIHRvIGRldGVjdCBuZXN0ZWQgY29tcG9uZW50LlxuXG4gICAgbGV0IGNvbXBvbmVudHM9IHJlYWREYXRhKFwidWktZWRpdG9yXCIpO1xuICAgIGxldCBuZXN0ZWRDb21wb25lbnRzID0gW3BhcmVudF07XG4gICAgaWYoY2hlY2tOZXN0ZWRDb21wb25lbnRzKHBhcmVudC5tYXJrdXApKXtcbiAgICAgICAgLy8gZmluZCBhbGwgdGhlIG5lc3RlZCBjb21wb25lbnRzIGZyb20gdGhlIG1hcmt1cCBhbmQgcHVzaCBpdCB0byBuZXN0ZWRDb21wb25lbnRzLlxuICAgICAgICBsZXQgY2hpbGRyZW4gPSBjb21wb25lbnRzLmZpbHRlcihjb21wb25lbnQ9PiBwYXJlbnQubWFya3VwLmluY2x1ZGVzKGNvbXBvbmVudC5uYW1lKSk7XG4gICAgICAgIC8vIEZpbmQgZ3JhbmQga2lkcy5cbiAgICAgICAgbGV0IGdyYW5kS2lkcyA9IGNoaWxkcmVuLm1hcChnZXROZXN0ZWRDb21wb25lbnRzKS5mbGF0KDMpXG4gICAgICAgIG5lc3RlZENvbXBvbmVudHMucHVzaCguLi5ncmFuZEtpZHMpXG4gICAgfVxuICAgIHJldHVybiBuZXN0ZWRDb21wb25lbnRzLmZpbHRlcihjb21wb25lbnQ9PmNvbXBvbmVudCAmJiBjb21wb25lbnQubWFya3VwKTtcbn1cbiIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCJcbiAgICBleHBvcnQgZnVuY3Rpb24gZHJvcEhhbmRsZXIoZXYpIHtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IGNvbXBvbmVudE5hbWUgPSBldi5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImNvbXBvbmVudC1uYW1lXCIpO1xuICAgICAgICBsZXQgZm9sZGVyTmFtZSA9IGV2LmRhdGFUcmFuc2Zlci5nZXREYXRhKFwiZm9sZGVyLW5hbWVcIik7XG4gICAgICAgIGxldCBjb250ZW50cyA9IEFycmF5LmZyb20odGhpcy5zdGF0ZS5jb250ZW50cyk7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGRyb3BwZWQgaXRlbSBpcyBhIGNvbXBvbmVudFxuICAgICAgICBpZihjb21wb25lbnROYW1lKXtcbiAgICAgICAgICAgIGNvbnRlbnRzLnB1c2goY29tcG9uZW50TmFtZSlcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayBpZiBpdCBpcyBhIGZvbGRlci4gQWxzbyBjaGVjayBpZiB3ZSBhcmUgbm90IGRyb3BwaW5nIG9uIHRoZSBvcmlnaW5hbCBmb2xkZXIuIG1heSBiZSByZW1vdmUgaXQgZnJvbSB0aGUgZG9tLiBOT1BFLiBcbiAgICAgICAgZWxzZSBpZihmb2xkZXJOYW1lICYmIGZvbGRlck5hbWUhPT10aGlzLnN0YXRlLmZvbGRlck5hbWUpe1xuICAgICAgICAgICAgY29udGVudHMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogZm9sZGVyTmFtZSxcbiAgICAgICAgICAgICAgICBjb250ZW50czpbXSxcbiAgICAgICAgICAgICAgICB0eXBlOlwiZm9sZGVyXCIsXG4gICAgICAgICAgICAgICAgc3RhdHVzOlwiY2xvc2VkXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9wcy5vbkZvbGRlclVwZGF0ZSh7XG4gICAgICAgICAgICBuYW1lOiB0aGlzLnN0YXRlLm5hbWUsXG4gICAgICAgICAgICBjb250ZW50cyA6IGNvbnRlbnRzLFxuICAgICAgICAgICAgdHlwZTpcImZvbGRlclwiLFxuICAgICAgICAgICAgc3RhdHVzOlwib3BlblwiXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc29sZS5sb2coXCJEcm9wIGZyb20gZm9sZGVyXCIpO1xuICAgIH1cblxuICAgIGV4cG9ydCBmdW5jdGlvbiBkcmFnT3ZlckhhbmRsZXIoZXYpIHtcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBmb2xkZXJDbGFzczogXCJuZXdGb2xkZXIgZHJhZ092ZXJcIixcbiAgICAgICAgICAgIHN0YXR1czogXCJvcGVuXCJcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coXCJEcmFnXCIpO1xuICAgIH1cblxuICAgIGV4cG9ydCBmdW5jdGlvbiBkcmFnTGVhdmVIYW5kbGVyKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJkcmFnXCIpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGZvbGRlckNsYXNzOiBcIm5ld0ZvbGRlclwiLFxuICAgICAgICAgICAgc3RhdHVzOiBcImNsb3NlZFwiXG4gICAgICAgIH0pXG4gICAgfVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBvbkRyYWdTdGFydChlKXtcblxuICAgIGxldCBuYW1lID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtZm9sZGVyLW5hbWVcIilcbiAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwiZm9sZGVyLW5hbWVcIiwgbmFtZSk7XG59XG5cblxuXG5pbXBvcnQge8KgZ2V0TmVzdGVkQ29tcG9uZW50cyB9IGZyb20gXCIuLi8uLi8uLi8uLi91dGlsaXRpZXMvUnVudGltZVwiO1xuaW1wb3J0IHsgY29udmVydFRvUmVhY3QgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbGl0aWVzL0NvZGVHZW5lcmF0b3IvUmVhY3RcIjtcbmltcG9ydCB7IHJlYWREYXRhIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWxpdGllcy9TdG9yYWdlXCI7XG5pbXBvcnQgeyBkb3dubG9hZEZpbGUgfSBmcm9tIFwiLi4vLi4vLi4vTGlicmFyaWVzL2Rvd25sb2FkRmlsZVwiXG5cblxuZnVuY3Rpb24gZXhwb3J0U2ltcGxlKGNvbXBvbmVudE5hbWUpIHtcbiAgICBsZXQgY29tcG9uZW50cyA9IHJlYWREYXRhKFwidWktZWRpdG9yXCIpO1xuICAgIGxldCBzZWxlY3RlZENvbXBvbmVudCA9IGNvbXBvbmVudHMuZmluZChjb21wb25lbnQ9PmNvbXBvbmVudC5uYW1lLmluY2x1ZGVzKGNvbXBvbmVudE5hbWUpKTtcbiAgICBsZXQgbmVzdGVkQ29tcG9uZW50cyA9IGdldE5lc3RlZENvbXBvbmVudHMoc2VsZWN0ZWRDb21wb25lbnQpO1xuXG4gICAgbGV0IHVuaXF1ZUNvbXBvbmVudHMgPSBbLi4ubmV3IFNldChuZXN0ZWRDb21wb25lbnRzLm1hcChjb209PmNvbS5uYW1lKSldLm1hcChuYW1lPT57XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzLmZpbmQoZWxlbWVudD0+ZWxlbWVudC5uYW1lPT09bmFtZSlcbiAgICB9KVxuICAgIGNvbnN0IHJlbW92ZVBhcmFudGhlc2lzID0gKGNvbXBvbmVudCk9PntcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5yZXBsYWNlKFwiKFwiLFwiXCIpLnJlcGxhY2UoXCJ9KVwiLFwifVwiKVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyh1bmlxdWVDb21wb25lbnRzLm1hcChjb252ZXJ0VG9SZWFjdCkubWFwKHJlbW92ZVBhcmFudGhlc2lzKS5yZXZlcnNlKCkuam9pbihcIlwiKSk7XG59XG5cbmZ1bmN0aW9uIGV4cG9ydE5XQihjb21wb25lbnROYW1lKSB7XG4gICAgbGV0IGNvbXBvbmVudHMgPSByZWFkRGF0YShcInVpLWVkaXRvclwiKTtcbiAgICBsZXQgc2VsZWN0ZWRDb21wb25lbnQgPSBjb21wb25lbnRzLmZpbmQoY29tcG9uZW50PT5jb21wb25lbnQubmFtZS5pbmNsdWRlcyhjb21wb25lbnROYW1lKSk7XG4gICAgbGV0IG5lc3RlZENvbXBvbmVudHMgPSBnZXROZXN0ZWRDb21wb25lbnRzKHNlbGVjdGVkQ29tcG9uZW50KTtcblxuICAgIGxldCB1bmlxdWVDb21wb25lbnRzID0gWy4uLm5ldyBTZXQobmVzdGVkQ29tcG9uZW50cy5tYXAoY29tPT5jb20ubmFtZSkpXS5tYXAobmFtZT0+e1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cy5maW5kKGVsZW1lbnQ9PmVsZW1lbnQubmFtZT09PW5hbWUpXG4gICAgfSlcbiAgICBjb25zdCByZW1vdmVQYXJhbnRoZXNpcyA9IChjb21wb25lbnQpPT57XG4gICAgICAgIHJldHVybiBjb21wb25lbnQucmVwbGFjZShcIihcIixcIlwiKS5yZXBsYWNlKFwifSlcIixcIn1cIilcbiAgICB9XG5cbiAgICBsZXQgaGVhZGVySW1wb3J0cyA9IGBpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcXG5gO1xuXG4gICAgbGV0IGNvbXBvbmVudFN0cmluZ3MgPSB1bmlxdWVDb21wb25lbnRzLm1hcChjb252ZXJ0VG9SZWFjdCkubWFwKHJlbW92ZVBhcmFudGhlc2lzKTtcbiAgICBjb21wb25lbnRTdHJpbmdzWzBdID0gXCJleHBvcnQgZGVmYXVsdCBcIisgY29tcG9uZW50U3RyaW5nc1swXTtcblxuICAgIGxldCBSZWFjdENsYXNzQ29tcG9uZW50U3RyaW5nID0gaGVhZGVySW1wb3J0cyArIGNvbXBvbmVudFN0cmluZ3MucmV2ZXJzZSgpLmpvaW4oXCJcXG5cIik7XG4gICAgY29uc29sZS5sb2coUmVhY3RDbGFzc0NvbXBvbmVudFN0cmluZyk7XG5cbiAgICBkb3dubG9hZEZpbGUoYCR7Y29tcG9uZW50TmFtZX0uanNgLFJlYWN0Q2xhc3NDb21wb25lbnRTdHJpbmcgKTtcbn1cblxuZnVuY3Rpb24gZXhwb3J0U3Rvcnlib29rKGNvbXBvbmVudE5hbWUpIHtcbiAgICBsZXQgY29tcG9uZW50cyA9IHJlYWREYXRhKFwidWktZWRpdG9yXCIpO1xuICAgIGxldCBzZWxlY3RlZENvbXBvbmVudCA9IGNvbXBvbmVudHMuZmluZChjb21wb25lbnQ9PmNvbXBvbmVudC5uYW1lLmluY2x1ZGVzKGNvbXBvbmVudE5hbWUpKTtcbiAgICBsZXQgbmVzdGVkQ29tcG9uZW50cyA9IGdldE5lc3RlZENvbXBvbmVudHMoc2VsZWN0ZWRDb21wb25lbnQpO1xuXG4gICAgbGV0IHVuaXF1ZUNvbXBvbmVudHMgPSBbLi4ubmV3IFNldChuZXN0ZWRDb21wb25lbnRzLm1hcChjb209PmNvbS5uYW1lKSldLm1hcChuYW1lPT57XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzLmZpbmQoZWxlbWVudD0+ZWxlbWVudC5uYW1lPT09bmFtZSlcbiAgICB9KVxuICAgIGNvbnN0IHJlbW92ZVBhcmFudGhlc2lzID0gKGNvbXBvbmVudCk9PntcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5yZXBsYWNlKFwiKFwiLFwiXCIpLnJlcGxhY2UoXCJ9KVwiLFwifVwiKVxuICAgIH1cblxuICAgIGxldCBoZWFkZXJJbXBvcnRzID0gYCAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICAgIGltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuICAgIGA7XG5cbiAgICAvKipcbiAgICAgKiBJTVBPUlRBTlQtIElmIHdlIGV4cG9ydCwgZG8gbm90IGluY2x1ZGUgc2F2ZVZhcmlhbnRcbiAgICAgKi9cblxuICAgIHdpbmRvdy5FeHBvcnROV0IgPSB0cnVlO1xuXG4gICAgbGV0IGNvbXBvbmVudFN0cmluZ3MgPSB1bmlxdWVDb21wb25lbnRzLm1hcChjb252ZXJ0VG9SZWFjdCkubWFwKHJlbW92ZVBhcmFudGhlc2lzKTtcbiAgICBjb21wb25lbnRTdHJpbmdzWzBdID0gXCJleHBvcnQgZGVmYXVsdCBcIisgY29tcG9uZW50U3RyaW5nc1swXTtcblxuICAgIGxldCBSZWFjdENsYXNzQ29tcG9uZW50U3RyaW5nID0gaGVhZGVySW1wb3J0cyArIGNvbXBvbmVudFN0cmluZ3MucmV2ZXJzZSgpLmpvaW4oXCJcXG5cIik7XG4gICAgY29uc29sZS5sb2coUmVhY3RDbGFzc0NvbXBvbmVudFN0cmluZyk7XG5cbiAgICB3aW5kb3cuRXhwb3J0TldCID0gZmFsc2U7XG5cbiAgICBkb3dubG9hZEZpbGUoYCR7Y29tcG9uZW50TmFtZX0uanNgLFJlYWN0Q2xhc3NDb21wb25lbnRTdHJpbmcgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uRXhwb3J0KGNvbXBvbmVudE5hbWUpe1xuICAgIHN3aXRjaCAod2luZG93LkVYUE9SVF9UWVBFKSB7XG4gICAgICAgIGNhc2UgXCJTSU1QTEVcIjogXG4gICAgICAgICAgICBleHBvcnRTaW1wbGUoY29tcG9uZW50TmFtZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiTldCXCI6XG4gICAgICAgICAgICBleHBvcnROV0IoY29tcG9uZW50TmFtZSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiU1RPUllCT09LXCI6XG4gICAgICAgICAgICBleHBvcnRTdG9yeWJvb2soY29tcG9uZW50TmFtZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59IiwiLy8gRWxlbWVudHMgdG8gIHJlYWN0IGNvbXBvbmVudC5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9SZWFjdCAoY29tcG9uZW50KXtcblxuICAgIGxldCBtYXJrdXAgPSBcIm1hcmt1cFwiO1xuXG4gICAgY29tcG9uZW50LmV2ZW50cy5mb3JFYWNoKGV2ZW50PT57XG4gICAgICAgIGV2ZW50LmlkID0gZXZlbnQuaWQucmVwbGFjZShcIi1cIixcIlwiKTtcbiAgICB9KVxuXG4gICAgbGV0IGFkZFByb3BzPSAoY29tcG9uZW50KT0+e1xuICAgICAgICByZXR1cm4gY29tcG9uZW50W21hcmt1cF0ucmVwbGFjZShcIj5cIixgIHsuLi50aGlzLnByb3BzfT57dGhpcy5wcm9wcy5jaGlsZHJlbn1gKVxuICAgIH1cblxuICAgIGxldCBnZXRDb21wb25lbnRFdmVudGVkTWFya3VwID0gKG1hcmt1cCwgZXZlbnRzKT0+e1xuICAgICAgICBldmVudHMuZm9yRWFjaChldmVudD0+e1xuICAgICAgICAgICAgbGV0IGlkID0gYGlkPVwiJHtldmVudC5pZH1cImA7XG4gICAgICAgICAgICAvLyBjaGVjayBpZiBtYXJrdXAgY29udGFpbnMgdGhlIGlkLlxuICAgICAgICAgICAgaWYobWFya3VwLmluY2x1ZGVzKGlkKSl7XG4gICAgICAgICAgICAgICAgbWFya3VwID0gbWFya3VwLnJlcGxhY2UoaWQsIGAke2lkfSAke2V2ZW50Lm5hbWV9PXt0aGlzLiR7ZXZlbnQuaWQrZXZlbnQubmFtZX0uYmluZCh0aGlzKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGl0cyBhIGNoaWxkIGNvbXBvbmVudC5cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgbWFya3VwID0gbWFya3VwLnJlcGxhY2UoYDwke2V2ZW50LmlkfWAsYDwke2V2ZW50LmlkfSAke2V2ZW50Lm5hbWV9PXt0aGlzLiR7ZXZlbnQuaWQrZXZlbnQubmFtZX0uYmluZCh0aGlzKX1gKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgcmV0dXJuIG1hcmt1cC5zcGxpdChcIntzdGF0ZS5cIikuam9pbihcInt0aGlzLnN0YXRlLlwiKVxuICAgIH1cblxuICAgIC8vIGNoZWNrcyBpZiBzdGF0ZSBvdmVycmlkZSBpcyBvbi4gdGhlbiBhZGRzIHN0YXRlIHByb3AgdG8gY2hpbGQgXG4gICAgbGV0IGdldFN0YXRlZE1hcmt1cCA9IChtYXJrdXApPT57XG4gICAgICAgIC8vIGZvciBhbGwgdGhlIGNvbmZpZy5cbiAgICAgICAgLy8gZmlsdGVyIGNoaWxkIHdpdGggb3ZlcmlkZSBzdGF0ZSBpcyB0cnVlXG4gICAgICAgIGxldCBjb25maWcgPSBKU09OLnBhcnNlKGNvbXBvbmVudC5jb25maWcpO1xuICAgICAgICBsZXQgY2hpbGRyZW5Db25maWcgPSBPYmplY3Qua2V5cyhjb25maWcpO1xuICAgICAgICBjaGlsZHJlbkNvbmZpZy5mb3JFYWNoKGNoaWxkTmFtZT0+e1xuXG4gICAgICAgICAgICAvLyBQUkVDQVVUSU9OOiBFZGl0IG1hcmt1cCBmb3IgcmVuZGVyaW5nIGxpc3QuIFNob3VsZCBub3QgdXNlIG90aGVyIGNvbmZpZ3VyYXRpb24gd2hpbGUgdXNpbmcgdGhpcy5cbiAgICAgICAgICAgIGlmKGNvbmZpZ1tjaGlsZE5hbWVdLm92ZXJyaWRlICl7XG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkTWFya3VwID0gYDwke2NoaWxkTmFtZX0+PC8ke2NoaWxkTmFtZX0+YDtcblxuICAgICAgICAgICAgICAgIGxldCBjaGlsZE1hcmt1cFdpdGhQcm9wcyA9IGA8JHtjaGlsZE5hbWV9IHN0YXRlPXtpdGVtfSBrZXk9e2l9PjwvJHtjaGlsZE5hbWV9PmA7XG4gICAgICAgICAgICAgICAgbGV0IHJlbmRlckxpc3RNYXJrdXAgPSBge3RoaXMuc3RhdGUuJHtjaGlsZE5hbWV9Lm1hcCgoaXRlbSxpKT0+JHtjaGlsZE1hcmt1cFdpdGhQcm9wc30pfWA7XG4gICAgICAgICAgICAgICAgbWFya3VwID0gIG1hcmt1cC5yZXBsYWNlKGNoaWxkTWFya3VwLCByZW5kZXJMaXN0TWFya3VwKTsgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIG1hcmt1cDtcbiAgICB9XG5cbiAgICAvLyBrZWVwIHNhdmluZyB2YXJpYW50IGluIGJyb3dzZXIsIGJ1dCBub3QgZm9yIGNvZGUgZXhwb3J0cy5cbiAgICBsZXQgZ2V0U2F2ZVZhcmlhbnQgPSAoKT0+e1xuICAgICAgICBpZighd2luZG93LkV4cG9ydE5XQil7XG4gICAgICAgICAgICByZXR1cm4gYHdpbmRvdy5zYXZlVmFyaWFudChcIiR7Y29tcG9uZW50Lm5hbWV9XCIsc3RhdGUpYFxuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGxldCBwcm9wc0luTWFya3VwID0gYWRkUHJvcHMoY29tcG9uZW50KTtcbiAgICBsZXQgc3RhdGVPdmVyaWRlTWFya3VwID0gZ2V0U3RhdGVkTWFya3VwKHByb3BzSW5NYXJrdXApO1xuICAgIGxldCBjb21wb25lbnRFdmVudGVkTWFya3VwID0gZ2V0Q29tcG9uZW50RXZlbnRlZE1hcmt1cChzdGF0ZU92ZXJpZGVNYXJrdXAsIGNvbXBvbmVudC5ldmVudHMpO1xuICAgIGxldCBzYXZlVmFyaWFudCA9IGdldFNhdmVWYXJpYW50KCk7XG4gICAgXG4gICAgbGV0IFJlYWN0Q29tcG9uZW50ID0gXG4gICAgYChcbiAgICAgICAgY2xhc3MgJHtjb21wb25lbnQubmFtZX0gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLnByb3BzLnN0YXRlIHx8ICR7Y29tcG9uZW50LnN0YXRlfTtcblxuICAgICAgICAgICAgICAgIHZhciBkeW5hbWljU3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICAgICAgICAgIGR5bmFtaWNTdHlsZS50eXBlID0gJ3RleHQvY3NzJztcbiAgICAgICAgICAgICAgICBkeW5hbWljU3R5bGUuaW5uZXJIVE1MID0gXFxgJHtjb21wb25lbnQuc3R5bGV9XFxgO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZHluYW1pY1N0eWxlKVxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICR7Y29tcG9uZW50LmV2ZW50cy5tYXAoZXZlbnQ9PntcbiAgICAgICAgICAgICAgICBpZihldmVudC5wdWJsaXNoYWJsZSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAke2V2ZW50LmlkK2V2ZW50Lm5hbWV9IChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgJHtldmVudC5yZWR1Y2VyfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RhdGUgPSBzdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuJHtldmVudC5wdWJsaXNoTmFtZX0/IHRoaXMucHJvcHMuJHtldmVudC5wdWJsaXNoTmFtZX0oZSk6bnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgICAgICAgICAgJHtldmVudC5pZCtldmVudC5uYW1lfSAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICR7ZXZlbnQucmVkdWNlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnZ2VyO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHtzYXZlVmFyaWFudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgfSkuam9pbihcIlxcblwiKX1cbiAgICAgICAgXG4gICAgICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgke2NvbXBvbmVudEV2ZW50ZWRNYXJrdXB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBgXG4gICAgcmV0dXJuIFJlYWN0Q29tcG9uZW50O1xufVxuIiwiLy8gTGlicmFyaWVzLlxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmltcG9ydCBNZXNzYWdlQ29tcG9uZW50IGZyb20gXCIuLi9NZXNzYWdlQ29tcG9uZW50XCI7XG5cbmNsYXNzIE1lc3NhZ2VzQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCBtZXNzYWdlcyA9IHRoaXMucHJvcHMubWVzc2FnZXM7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uc29sZVwiPlxuICAgICAgICAgICAgICAgICAgICB7bWVzc2FnZXMubWFwKChtZXNzYWdlLGluZGV4KT0+PE1lc3NhZ2VDb21wb25lbnQga2V5PXtpbmRleH0gbWVzc2FnZT17bWVzc2FnZX0vPil9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VzQ29tcG9uZW50OyIsIi8vIExpYnJhcmllcy5cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge8KgZ2V0TmVzdGVkQ29tcG9uZW50cywgc2F2ZUNvbXBvbmVudHNUb1dpbmRvdyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvUnVudGltZVwiO1xuXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jbGFzcyBEeW5hbWljQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjb21wb25lbnQ6IHRoaXMucHJvcHMuY29tcG9uZW50XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGlmKHRoaXMuc3RhdGUuY29tcG9uZW50Lm5hbWU9PT11bmRlZmluZWQpe1xuICAgICAgICAgICAgcmV0dXJuICg8ZGl2Pk5vIGNvbXBvbmVudCBzZWxlY3RlZC48L2Rpdj4pXG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5lc3RlZENvbXBvbmVudHMgPSBnZXROZXN0ZWRDb21wb25lbnRzKHRoaXMuc3RhdGUuY29tcG9uZW50KTtcbiAgICAgICAgaWYgKG5lc3RlZENvbXBvbmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2F2ZUNvbXBvbmVudHNUb1dpbmRvdyhuZXN0ZWRDb21wb25lbnRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCF3aW5kb3dbdGhpcy5zdGF0ZS5jb21wb25lbnQubmFtZV0pe1xuICAgICAgICAgICAgcmV0dXJuICg8ZGl2PjwvZGl2PilcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtSZWFjdC5jcmVhdGVFbGVtZW50KHdpbmRvd1t0aGlzLnN0YXRlLmNvbXBvbmVudC5uYW1lXSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRHluYW1pY0NvbXBvbmVudDsiLCIvLyBMaWJyYXJpZXMuXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cbi8vIERlcGVuZGVuY2llcy5cbmltcG9ydCBcIi4vSW5kZXgvaW5kZXguY3NzXCI7XG5cbi8vIENvbXBvbmVudHMuXG5cblxuaW1wb3J0IEFzc2V0cyBmcm9tIFwiLi9Bc3NldHNcIjtcbmltcG9ydCBDb21wb25lbnRzIGZyb20gXCIuL0NvbXBvbmVudHNcIjtcbmltcG9ydCBEcmFnZ2FibGVDb21wb25lbnQgZnJvbSBcIi4vVXRpbGl0aWVzL0NvbXBvbmVudHMvRHJhZ2dhYmxlQ29tcG9uZW50XCI7XG5pbXBvcnQgRWRpdG9yIGZyb20gXCIuL0VkaXRvclwiO1xuaW1wb3J0IEV2ZW50cyBmcm9tIFwiLi9FdmVudHNcIjtcbmltcG9ydCBUb29sa2l0IGZyb20gXCIuL1Rvb2xraXRcIjtcbmltcG9ydCBQcmV2aWV3IGZyb20gXCIuL1ByZXZpZXdcIjtcblxuLy8gUmVkdWNlcnMuXG5pbXBvcnQgeyB1cGRhdGVFdmVudCwgdXBkYXRlQ29uZmlnLCBzYXZlRWxlbWVudCwgdXBkYXRlU2VsZWN0ZWRDb21wb25lbnQgfSBmcm9tIFwiLi9JbmRleC9SZWR1Y2VyXCI7XG5cbi8vIFV0aWxzXG5pbXBvcnQge3JlYWREYXRhLCB3cml0ZURhdGF9IGZyb20gXCIuL3V0aWxpdGllcy9TdG9yYWdlXCI7XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIGxldCBjb21wb25lbnRzID0gcmVhZERhdGEoXCJ1aS1lZGl0b3JcIik7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjb21wb25lbnRzOiBjb21wb25lbnRzLFxuICAgICAgICAgICAgc2VsZWN0ZWRUYWcgOiBcIlwiLFxuICAgICAgICAgICAgY29tcG9uZW50OiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgICAgICAgICBtYXJrdXA6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3R5bGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3RhdGU6IFwieyB9XCIsXG4gICAgICAgICAgICAgICAgZXZlbnRzOiBbXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbGVjdGVkQ29tcG9uZW50OiBcIlwiLFxuICAgICAgICAgICAgZm9sZGVyczogcmVhZERhdGEoXCJmb2xkZXJzXCIpLFxuICAgICAgICAgICAgc2hvd0VkaXRvcjogZmFsc2VcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZUNvbmZpZyA9IHVwZGF0ZUNvbmZpZy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnVwZGF0ZUV2ZW50ID0gdXBkYXRlRXZlbnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5zYXZlRWxlbWVudCA9IHNhdmVFbGVtZW50LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRDb21wb25lbnQgPSB1cGRhdGVTZWxlY3RlZENvbXBvbmVudC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHVwZGF0ZVByZXZpZXcoZWxlbWVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHByZXZpZXdDb21wb25lbnQ6IGVsZW1lbnRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlU3R5bGVzKCl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZWxlbWVudDogdGhpcy5zdGF0ZS5zZWxlY3RlZENvbXBvbmVudFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHVwZGF0ZUZvbGRlcnMoZm9sZGVycyl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZm9sZGVyczogZm9sZGVyc1xuICAgICAgICB9KVxuICAgICAgICB3cml0ZURhdGEoXCJmb2xkZXJzXCIsIGZvbGRlcnMpXG4gICAgfVxuXG4gICAgb3BlbkVkaXRvcigpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNob3dFZGl0b3I6IHRydWVcbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBzZWxlY3RlZENvbXBvbmVudCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRDb21wb25lbnQgfHwgdGhpcy5zdGF0ZS5jb21wb25lbnQ7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGVDb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDAwKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzPXt0aGlzLnN0YXRlLmNvbXBvbmVudHN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9sZGVycz17dGhpcy5zdGF0ZS5mb2xkZXJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29tcG9uZW50PXt0aGlzLnN0YXRlLnNlbGVjdGVkQ29tcG9uZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQ29tcG9uZW50c1wiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25PcGVuRWRpdG9yPXt0aGlzLm9wZW5FZGl0b3IuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Rpb249e3RoaXMudXBkYXRlU2VsZWN0ZWRDb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRm9sZGVyc1VwZGF0ZT17dGhpcy51cGRhdGVGb2xkZXJzLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZUNvbXBvbmVudD5cblxuICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlQ29tcG9uZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEFzc2V0cyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQXNzZXRzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlQ29tcG9uZW50PlxuICAgIFxuICAgICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlQ29tcG9uZW50PlxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPEV2ZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDAwKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e3NlbGVjdGVkQ29tcG9uZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVGFnPXt0aGlzLnN0YXRlLnNlbGVjdGVkVGFnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM9e3RoaXMuc3RhdGUuY29tcG9uZW50c31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkV2ZW50c1VwZGF0ZT17dGhpcy51cGRhdGVFdmVudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNvbmZpZ1VwZGF0ZT17dGhpcy51cGRhdGVDb25maWd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJFdmVudHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9EcmFnZ2FibGVDb21wb25lbnQ+XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNob3dFZGl0b3I/IFxuICAgICAgICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZUNvbXBvbmVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDAwKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudD17c2VsZWN0ZWRDb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3NlbGVjdGVkQ29tcG9uZW50Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmt1cD17c2VsZWN0ZWRDb21wb25lbnQubWFya3VwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c2VsZWN0ZWRDb21wb25lbnQuc3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPXtzZWxlY3RlZENvbXBvbmVudC5zdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJFZGl0b3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TYXZlPXt0aGlzLnNhdmVFbGVtZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZUNvbXBvbmVudD5cbiAgICAgICAgICAgICAgICAgICAgOiBcbiAgICAgICAgICAgICAgICAgICAgbnVsbH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZUNvbXBvbmVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcmV2aWV3IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDAwKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9e3NlbGVjdGVkQ29tcG9uZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUHJldmlld1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L0RyYWdnYWJsZUNvbXBvbmVudD5cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgPERyYWdnYWJsZUNvbXBvbmVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sa2l0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJUb29sa2l0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlQ29tcG9uZW50PlxuICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlQ29tcG9uZW50PlxuICAgICAgICAgICAgICAgICAgICA8VG9vbGtpdFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIlRvb2xraXRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlQ29tcG9uZW50PlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn1cblxuXG5SZWFjdERPTS5yZW5kZXIoPEluZGV4IC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZGV4XCIpKTsiLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjguNlxuICogcmVhY3QucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7dmFyIGs9cmVxdWlyZShcIm9iamVjdC1hc3NpZ25cIiksbj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yLHA9bj9TeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKTo2MDEwMyxxPW4/U3ltYm9sLmZvcihcInJlYWN0LnBvcnRhbFwiKTo2MDEwNixyPW4/U3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpOjYwMTA3LHQ9bj9TeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIik6NjAxMDgsdT1uP1N5bWJvbC5mb3IoXCJyZWFjdC5wcm9maWxlclwiKTo2MDExNCx2PW4/U3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpOjYwMTA5LHc9bj9TeW1ib2wuZm9yKFwicmVhY3QuY29udGV4dFwiKTo2MDExMCx4PW4/U3ltYm9sLmZvcihcInJlYWN0LmNvbmN1cnJlbnRfbW9kZVwiKTo2MDExMSx5PW4/U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpOjYwMTEyLHo9bj9TeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VcIik6NjAxMTMsYWE9bj9TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKTpcbjYwMTE1LGJhPW4/U3ltYm9sLmZvcihcInJlYWN0LmxhenlcIik6NjAxMTYsQT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3I7ZnVuY3Rpb24gY2EoYSxiLGQsYyxlLGcsaCxmKXtpZighYSl7YT12b2lkIDA7aWYodm9pZCAwPT09YilhPUVycm9yKFwiTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy5cIik7ZWxzZXt2YXIgbD1bZCxjLGUsZyxoLGZdLG09MDthPUVycm9yKGIucmVwbGFjZSgvJXMvZyxmdW5jdGlvbigpe3JldHVybiBsW20rK119KSk7YS5uYW1lPVwiSW52YXJpYW50IFZpb2xhdGlvblwifWEuZnJhbWVzVG9Qb3A9MTt0aHJvdyBhO319XG5mdW5jdGlvbiBCKGEpe2Zvcih2YXIgYj1hcmd1bWVudHMubGVuZ3RoLTEsZD1cImh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9lcnJvci1kZWNvZGVyLmh0bWw/aW52YXJpYW50PVwiK2EsYz0wO2M8YjtjKyspZCs9XCImYXJnc1tdPVwiK2VuY29kZVVSSUNvbXBvbmVudChhcmd1bWVudHNbYysxXSk7Y2EoITEsXCJNaW5pZmllZCBSZWFjdCBlcnJvciAjXCIrYStcIjsgdmlzaXQgJXMgZm9yIHRoZSBmdWxsIG1lc3NhZ2Ugb3IgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50IGZvciBmdWxsIGVycm9ycyBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLiBcIixkKX12YXIgQz17aXNNb3VudGVkOmZ1bmN0aW9uKCl7cmV0dXJuITF9LGVucXVldWVGb3JjZVVwZGF0ZTpmdW5jdGlvbigpe30sZW5xdWV1ZVJlcGxhY2VTdGF0ZTpmdW5jdGlvbigpe30sZW5xdWV1ZVNldFN0YXRlOmZ1bmN0aW9uKCl7fX0sRD17fTtcbmZ1bmN0aW9uIEUoYSxiLGQpe3RoaXMucHJvcHM9YTt0aGlzLmNvbnRleHQ9Yjt0aGlzLnJlZnM9RDt0aGlzLnVwZGF0ZXI9ZHx8Q31FLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXt9O0UucHJvdG90eXBlLnNldFN0YXRlPWZ1bmN0aW9uKGEsYil7XCJvYmplY3RcIiE9PXR5cGVvZiBhJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgYSYmbnVsbCE9YT9CKFwiODVcIik6dm9pZCAwO3RoaXMudXBkYXRlci5lbnF1ZXVlU2V0U3RhdGUodGhpcyxhLGIsXCJzZXRTdGF0ZVwiKX07RS5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24oYSl7dGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLGEsXCJmb3JjZVVwZGF0ZVwiKX07ZnVuY3Rpb24gRigpe31GLnByb3RvdHlwZT1FLnByb3RvdHlwZTtmdW5jdGlvbiBHKGEsYixkKXt0aGlzLnByb3BzPWE7dGhpcy5jb250ZXh0PWI7dGhpcy5yZWZzPUQ7dGhpcy51cGRhdGVyPWR8fEN9dmFyIEg9Ry5wcm90b3R5cGU9bmV3IEY7XG5ILmNvbnN0cnVjdG9yPUc7ayhILEUucHJvdG90eXBlKTtILmlzUHVyZVJlYWN0Q29tcG9uZW50PSEwO3ZhciBJPXtjdXJyZW50Om51bGx9LEo9e2N1cnJlbnQ6bnVsbH0sSz1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LEw9e2tleTohMCxyZWY6ITAsX19zZWxmOiEwLF9fc291cmNlOiEwfTtcbmZ1bmN0aW9uIE0oYSxiLGQpe3ZhciBjPXZvaWQgMCxlPXt9LGc9bnVsbCxoPW51bGw7aWYobnVsbCE9Yilmb3IoYyBpbiB2b2lkIDAhPT1iLnJlZiYmKGg9Yi5yZWYpLHZvaWQgMCE9PWIua2V5JiYoZz1cIlwiK2Iua2V5KSxiKUsuY2FsbChiLGMpJiYhTC5oYXNPd25Qcm9wZXJ0eShjKSYmKGVbY109YltjXSk7dmFyIGY9YXJndW1lbnRzLmxlbmd0aC0yO2lmKDE9PT1mKWUuY2hpbGRyZW49ZDtlbHNlIGlmKDE8Zil7Zm9yKHZhciBsPUFycmF5KGYpLG09MDttPGY7bSsrKWxbbV09YXJndW1lbnRzW20rMl07ZS5jaGlsZHJlbj1sfWlmKGEmJmEuZGVmYXVsdFByb3BzKWZvcihjIGluIGY9YS5kZWZhdWx0UHJvcHMsZil2b2lkIDA9PT1lW2NdJiYoZVtjXT1mW2NdKTtyZXR1cm57JCR0eXBlb2Y6cCx0eXBlOmEsa2V5OmcscmVmOmgscHJvcHM6ZSxfb3duZXI6Si5jdXJyZW50fX1cbmZ1bmN0aW9uIGRhKGEsYil7cmV0dXJueyQkdHlwZW9mOnAsdHlwZTphLnR5cGUsa2V5OmIscmVmOmEucmVmLHByb3BzOmEucHJvcHMsX293bmVyOmEuX293bmVyfX1mdW5jdGlvbiBOKGEpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJmEuJCR0eXBlb2Y9PT1wfWZ1bmN0aW9uIGVzY2FwZShhKXt2YXIgYj17XCI9XCI6XCI9MFwiLFwiOlwiOlwiPTJcIn07cmV0dXJuXCIkXCIrKFwiXCIrYSkucmVwbGFjZSgvWz06XS9nLGZ1bmN0aW9uKGEpe3JldHVybiBiW2FdfSl9dmFyIE89L1xcLysvZyxQPVtdO2Z1bmN0aW9uIFEoYSxiLGQsYyl7aWYoUC5sZW5ndGgpe3ZhciBlPVAucG9wKCk7ZS5yZXN1bHQ9YTtlLmtleVByZWZpeD1iO2UuZnVuYz1kO2UuY29udGV4dD1jO2UuY291bnQ9MDtyZXR1cm4gZX1yZXR1cm57cmVzdWx0OmEsa2V5UHJlZml4OmIsZnVuYzpkLGNvbnRleHQ6Yyxjb3VudDowfX1cbmZ1bmN0aW9uIFIoYSl7YS5yZXN1bHQ9bnVsbDthLmtleVByZWZpeD1udWxsO2EuZnVuYz1udWxsO2EuY29udGV4dD1udWxsO2EuY291bnQ9MDsxMD5QLmxlbmd0aCYmUC5wdXNoKGEpfVxuZnVuY3Rpb24gUyhhLGIsZCxjKXt2YXIgZT10eXBlb2YgYTtpZihcInVuZGVmaW5lZFwiPT09ZXx8XCJib29sZWFuXCI9PT1lKWE9bnVsbDt2YXIgZz0hMTtpZihudWxsPT09YSlnPSEwO2Vsc2Ugc3dpdGNoKGUpe2Nhc2UgXCJzdHJpbmdcIjpjYXNlIFwibnVtYmVyXCI6Zz0hMDticmVhaztjYXNlIFwib2JqZWN0XCI6c3dpdGNoKGEuJCR0eXBlb2Ype2Nhc2UgcDpjYXNlIHE6Zz0hMH19aWYoZylyZXR1cm4gZChjLGEsXCJcIj09PWI/XCIuXCIrVChhLDApOmIpLDE7Zz0wO2I9XCJcIj09PWI/XCIuXCI6YitcIjpcIjtpZihBcnJheS5pc0FycmF5KGEpKWZvcih2YXIgaD0wO2g8YS5sZW5ndGg7aCsrKXtlPWFbaF07dmFyIGY9YitUKGUsaCk7Zys9UyhlLGYsZCxjKX1lbHNlIGlmKG51bGw9PT1hfHxcIm9iamVjdFwiIT09dHlwZW9mIGE/Zj1udWxsOihmPUEmJmFbQV18fGFbXCJAQGl0ZXJhdG9yXCJdLGY9XCJmdW5jdGlvblwiPT09dHlwZW9mIGY/ZjpudWxsKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZilmb3IoYT1mLmNhbGwoYSksaD1cbjA7IShlPWEubmV4dCgpKS5kb25lOyllPWUudmFsdWUsZj1iK1QoZSxoKyspLGcrPVMoZSxmLGQsYyk7ZWxzZVwib2JqZWN0XCI9PT1lJiYoZD1cIlwiK2EsQihcIjMxXCIsXCJbb2JqZWN0IE9iamVjdF1cIj09PWQ/XCJvYmplY3Qgd2l0aCBrZXlzIHtcIitPYmplY3Qua2V5cyhhKS5qb2luKFwiLCBcIikrXCJ9XCI6ZCxcIlwiKSk7cmV0dXJuIGd9ZnVuY3Rpb24gVShhLGIsZCl7cmV0dXJuIG51bGw9PWE/MDpTKGEsXCJcIixiLGQpfWZ1bmN0aW9uIFQoYSxiKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZudWxsIT1hLmtleT9lc2NhcGUoYS5rZXkpOmIudG9TdHJpbmcoMzYpfWZ1bmN0aW9uIGVhKGEsYil7YS5mdW5jLmNhbGwoYS5jb250ZXh0LGIsYS5jb3VudCsrKX1cbmZ1bmN0aW9uIGZhKGEsYixkKXt2YXIgYz1hLnJlc3VsdCxlPWEua2V5UHJlZml4O2E9YS5mdW5jLmNhbGwoYS5jb250ZXh0LGIsYS5jb3VudCsrKTtBcnJheS5pc0FycmF5KGEpP1YoYSxjLGQsZnVuY3Rpb24oYSl7cmV0dXJuIGF9KTpudWxsIT1hJiYoTihhKSYmKGE9ZGEoYSxlKyghYS5rZXl8fGImJmIua2V5PT09YS5rZXk/XCJcIjooXCJcIithLmtleSkucmVwbGFjZShPLFwiJCYvXCIpK1wiL1wiKStkKSksYy5wdXNoKGEpKX1mdW5jdGlvbiBWKGEsYixkLGMsZSl7dmFyIGc9XCJcIjtudWxsIT1kJiYoZz0oXCJcIitkKS5yZXBsYWNlKE8sXCIkJi9cIikrXCIvXCIpO2I9UShiLGcsYyxlKTtVKGEsZmEsYik7UihiKX1mdW5jdGlvbiBXKCl7dmFyIGE9SS5jdXJyZW50O251bGw9PT1hP0IoXCIzMjFcIik6dm9pZCAwO3JldHVybiBhfVxudmFyIFg9e0NoaWxkcmVuOnttYXA6ZnVuY3Rpb24oYSxiLGQpe2lmKG51bGw9PWEpcmV0dXJuIGE7dmFyIGM9W107VihhLGMsbnVsbCxiLGQpO3JldHVybiBjfSxmb3JFYWNoOmZ1bmN0aW9uKGEsYixkKXtpZihudWxsPT1hKXJldHVybiBhO2I9UShudWxsLG51bGwsYixkKTtVKGEsZWEsYik7UihiKX0sY291bnQ6ZnVuY3Rpb24oYSl7cmV0dXJuIFUoYSxmdW5jdGlvbigpe3JldHVybiBudWxsfSxudWxsKX0sdG9BcnJheTpmdW5jdGlvbihhKXt2YXIgYj1bXTtWKGEsYixudWxsLGZ1bmN0aW9uKGEpe3JldHVybiBhfSk7cmV0dXJuIGJ9LG9ubHk6ZnVuY3Rpb24oYSl7TihhKT92b2lkIDA6QihcIjE0M1wiKTtyZXR1cm4gYX19LGNyZWF0ZVJlZjpmdW5jdGlvbigpe3JldHVybntjdXJyZW50Om51bGx9fSxDb21wb25lbnQ6RSxQdXJlQ29tcG9uZW50OkcsY3JlYXRlQ29udGV4dDpmdW5jdGlvbihhLGIpe3ZvaWQgMD09PWImJihiPW51bGwpO2E9eyQkdHlwZW9mOncsX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOmIsXG5fY3VycmVudFZhbHVlOmEsX2N1cnJlbnRWYWx1ZTI6YSxfdGhyZWFkQ291bnQ6MCxQcm92aWRlcjpudWxsLENvbnN1bWVyOm51bGx9O2EuUHJvdmlkZXI9eyQkdHlwZW9mOnYsX2NvbnRleHQ6YX07cmV0dXJuIGEuQ29uc3VtZXI9YX0sZm9yd2FyZFJlZjpmdW5jdGlvbihhKXtyZXR1cm57JCR0eXBlb2Y6eSxyZW5kZXI6YX19LGxhenk6ZnVuY3Rpb24oYSl7cmV0dXJueyQkdHlwZW9mOmJhLF9jdG9yOmEsX3N0YXR1czotMSxfcmVzdWx0Om51bGx9fSxtZW1vOmZ1bmN0aW9uKGEsYil7cmV0dXJueyQkdHlwZW9mOmFhLHR5cGU6YSxjb21wYXJlOnZvaWQgMD09PWI/bnVsbDpifX0sdXNlQ2FsbGJhY2s6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVygpLnVzZUNhbGxiYWNrKGEsYil9LHVzZUNvbnRleHQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVygpLnVzZUNvbnRleHQoYSxiKX0sdXNlRWZmZWN0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIFcoKS51c2VFZmZlY3QoYSxiKX0sdXNlSW1wZXJhdGl2ZUhhbmRsZTpmdW5jdGlvbihhLFxuYixkKXtyZXR1cm4gVygpLnVzZUltcGVyYXRpdmVIYW5kbGUoYSxiLGQpfSx1c2VEZWJ1Z1ZhbHVlOmZ1bmN0aW9uKCl7fSx1c2VMYXlvdXRFZmZlY3Q6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVygpLnVzZUxheW91dEVmZmVjdChhLGIpfSx1c2VNZW1vOmZ1bmN0aW9uKGEsYil7cmV0dXJuIFcoKS51c2VNZW1vKGEsYil9LHVzZVJlZHVjZXI6ZnVuY3Rpb24oYSxiLGQpe3JldHVybiBXKCkudXNlUmVkdWNlcihhLGIsZCl9LHVzZVJlZjpmdW5jdGlvbihhKXtyZXR1cm4gVygpLnVzZVJlZihhKX0sdXNlU3RhdGU6ZnVuY3Rpb24oYSl7cmV0dXJuIFcoKS51c2VTdGF0ZShhKX0sRnJhZ21lbnQ6cixTdHJpY3RNb2RlOnQsU3VzcGVuc2U6eixjcmVhdGVFbGVtZW50Ok0sY2xvbmVFbGVtZW50OmZ1bmN0aW9uKGEsYixkKXtudWxsPT09YXx8dm9pZCAwPT09YT9CKFwiMjY3XCIsYSk6dm9pZCAwO3ZhciBjPXZvaWQgMCxlPWsoe30sYS5wcm9wcyksZz1hLmtleSxoPWEucmVmLGY9YS5fb3duZXI7aWYobnVsbCE9XG5iKXt2b2lkIDAhPT1iLnJlZiYmKGg9Yi5yZWYsZj1KLmN1cnJlbnQpO3ZvaWQgMCE9PWIua2V5JiYoZz1cIlwiK2Iua2V5KTt2YXIgbD12b2lkIDA7YS50eXBlJiZhLnR5cGUuZGVmYXVsdFByb3BzJiYobD1hLnR5cGUuZGVmYXVsdFByb3BzKTtmb3IoYyBpbiBiKUsuY2FsbChiLGMpJiYhTC5oYXNPd25Qcm9wZXJ0eShjKSYmKGVbY109dm9pZCAwPT09YltjXSYmdm9pZCAwIT09bD9sW2NdOmJbY10pfWM9YXJndW1lbnRzLmxlbmd0aC0yO2lmKDE9PT1jKWUuY2hpbGRyZW49ZDtlbHNlIGlmKDE8Yyl7bD1BcnJheShjKTtmb3IodmFyIG09MDttPGM7bSsrKWxbbV09YXJndW1lbnRzW20rMl07ZS5jaGlsZHJlbj1sfXJldHVybnskJHR5cGVvZjpwLHR5cGU6YS50eXBlLGtleTpnLHJlZjpoLHByb3BzOmUsX293bmVyOmZ9fSxjcmVhdGVGYWN0b3J5OmZ1bmN0aW9uKGEpe3ZhciBiPU0uYmluZChudWxsLGEpO2IudHlwZT1hO3JldHVybiBifSxpc1ZhbGlkRWxlbWVudDpOLHZlcnNpb246XCIxNi44LjZcIixcbnVuc3RhYmxlX0NvbmN1cnJlbnRNb2RlOngsdW5zdGFibGVfUHJvZmlsZXI6dSxfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDp7UmVhY3RDdXJyZW50RGlzcGF0Y2hlcjpJLFJlYWN0Q3VycmVudE93bmVyOkosYXNzaWduOmt9fSxZPXtkZWZhdWx0Olh9LFo9WSYmWHx8WTttb2R1bGUuZXhwb3J0cz1aLmRlZmF1bHR8fFo7XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGNoZWNrRENFKCkge1xuICAvKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG4gIGlmIChcbiAgICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fID09PSAndW5kZWZpbmVkJyB8fFxuICAgIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18uY2hlY2tEQ0UgIT09ICdmdW5jdGlvbidcbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gVGhpcyBicmFuY2ggaXMgdW5yZWFjaGFibGUgYmVjYXVzZSB0aGlzIGZ1bmN0aW9uIGlzIG9ubHkgY2FsbGVkXG4gICAgLy8gaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBjb25kaXRpb24gaXMgdHJ1ZSBvbmx5IGluIGRldmVsb3BtZW50LlxuICAgIC8vIFRoZXJlZm9yZSBpZiB0aGUgYnJhbmNoIGlzIHN0aWxsIGhlcmUsIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3YXNuJ3RcbiAgICAvLyBwcm9wZXJseSBhcHBsaWVkLlxuICAgIC8vIERvbid0IGNoYW5nZSB0aGUgbWVzc2FnZS4gUmVhY3QgRGV2VG9vbHMgcmVsaWVzIG9uIGl0LiBBbHNvIG1ha2Ugc3VyZVxuICAgIC8vIHRoaXMgbWVzc2FnZSBkb2Vzbid0IG9jY3VyIGVsc2V3aGVyZSBpbiB0aGlzIGZ1bmN0aW9uLCBvciBpdCB3aWxsIGNhdXNlXG4gICAgLy8gYSBmYWxzZSBwb3NpdGl2ZS5cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ15fXicpO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gVmVyaWZ5IHRoYXQgdGhlIGNvZGUgYWJvdmUgaGFzIGJlZW4gZGVhZCBjb2RlIGVsaW1pbmF0ZWQgKERDRSdkKS5cbiAgICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18uY2hlY2tEQ0UoY2hlY2tEQ0UpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBEZXZUb29scyBzaG91bGRuJ3QgY3Jhc2ggUmVhY3QsIG5vIG1hdHRlciB3aGF0LlxuICAgIC8vIFdlIHNob3VsZCBzdGlsbCByZXBvcnQgaW4gY2FzZSB3ZSBicmVhayB0aGlzIGNvZGUuXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICB9XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIC8vIERDRSBjaGVjayBzaG91bGQgaGFwcGVuIGJlZm9yZSBSZWFjdERPTSBidW5kbGUgZXhlY3V0ZXMgc28gdGhhdFxuICAvLyBEZXZUb29scyBjYW4gcmVwb3J0IGJhZCBtaW5pZmljYXRpb24gZHVyaW5nIGluamVjdGlvbi5cbiAgY2hlY2tEQ0UoKTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1kb20ucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtZG9tLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjguNlxuICogcmVhY3QtZG9tLnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuLypcbiBNb2Rlcm5penIgMy4wLjBwcmUgKEN1c3RvbSBCdWlsZCkgfCBNSVRcbiovXG4ndXNlIHN0cmljdCc7dmFyIGFhPXJlcXVpcmUoXCJyZWFjdFwiKSxuPXJlcXVpcmUoXCJvYmplY3QtYXNzaWduXCIpLHI9cmVxdWlyZShcInNjaGVkdWxlclwiKTtmdW5jdGlvbiBiYShhLGIsYyxkLGUsZixnLGgpe2lmKCFhKXthPXZvaWQgMDtpZih2b2lkIDA9PT1iKWE9RXJyb3IoXCJNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCBmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLlwiKTtlbHNle3ZhciBsPVtjLGQsZSxmLGcsaF0saz0wO2E9RXJyb3IoYi5yZXBsYWNlKC8lcy9nLGZ1bmN0aW9uKCl7cmV0dXJuIGxbaysrXX0pKTthLm5hbWU9XCJJbnZhcmlhbnQgVmlvbGF0aW9uXCJ9YS5mcmFtZXNUb1BvcD0xO3Rocm93IGE7fX1cbmZ1bmN0aW9uIHgoYSl7Zm9yKHZhciBiPWFyZ3VtZW50cy5sZW5ndGgtMSxjPVwiaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL2Vycm9yLWRlY29kZXIuaHRtbD9pbnZhcmlhbnQ9XCIrYSxkPTA7ZDxiO2QrKyljKz1cIiZhcmdzW109XCIrZW5jb2RlVVJJQ29tcG9uZW50KGFyZ3VtZW50c1tkKzFdKTtiYSghMSxcIk1pbmlmaWVkIFJlYWN0IGVycm9yICNcIithK1wiOyB2aXNpdCAlcyBmb3IgdGhlIGZ1bGwgbWVzc2FnZSBvciB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgZm9yIGZ1bGwgZXJyb3JzIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuIFwiLGMpfWFhP3ZvaWQgMDp4KFwiMjI3XCIpO2Z1bmN0aW9uIGNhKGEsYixjLGQsZSxmLGcsaCxsKXt2YXIgaz1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMyk7dHJ5e2IuYXBwbHkoYyxrKX1jYXRjaChtKXt0aGlzLm9uRXJyb3IobSl9fVxudmFyIGRhPSExLGVhPW51bGwsZmE9ITEsaGE9bnVsbCxpYT17b25FcnJvcjpmdW5jdGlvbihhKXtkYT0hMDtlYT1hfX07ZnVuY3Rpb24gamEoYSxiLGMsZCxlLGYsZyxoLGwpe2RhPSExO2VhPW51bGw7Y2EuYXBwbHkoaWEsYXJndW1lbnRzKX1mdW5jdGlvbiBrYShhLGIsYyxkLGUsZixnLGgsbCl7amEuYXBwbHkodGhpcyxhcmd1bWVudHMpO2lmKGRhKXtpZihkYSl7dmFyIGs9ZWE7ZGE9ITE7ZWE9bnVsbH1lbHNlIHgoXCIxOThcIiksaz12b2lkIDA7ZmF8fChmYT0hMCxoYT1rKX19dmFyIGxhPW51bGwsbWE9e307XG5mdW5jdGlvbiBuYSgpe2lmKGxhKWZvcih2YXIgYSBpbiBtYSl7dmFyIGI9bWFbYV0sYz1sYS5pbmRleE9mKGEpOy0xPGM/dm9pZCAwOngoXCI5NlwiLGEpO2lmKCFvYVtjXSl7Yi5leHRyYWN0RXZlbnRzP3ZvaWQgMDp4KFwiOTdcIixhKTtvYVtjXT1iO2M9Yi5ldmVudFR5cGVzO2Zvcih2YXIgZCBpbiBjKXt2YXIgZT12b2lkIDA7dmFyIGY9Y1tkXSxnPWIsaD1kO3BhLmhhc093blByb3BlcnR5KGgpP3goXCI5OVwiLGgpOnZvaWQgMDtwYVtoXT1mO3ZhciBsPWYucGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM7aWYobCl7Zm9yKGUgaW4gbClsLmhhc093blByb3BlcnR5KGUpJiZxYShsW2VdLGcsaCk7ZT0hMH1lbHNlIGYucmVnaXN0cmF0aW9uTmFtZT8ocWEoZi5yZWdpc3RyYXRpb25OYW1lLGcsaCksZT0hMCk6ZT0hMTtlP3ZvaWQgMDp4KFwiOThcIixkLGEpfX19fVxuZnVuY3Rpb24gcWEoYSxiLGMpe3JhW2FdP3goXCIxMDBcIixhKTp2b2lkIDA7cmFbYV09YjtzYVthXT1iLmV2ZW50VHlwZXNbY10uZGVwZW5kZW5jaWVzfXZhciBvYT1bXSxwYT17fSxyYT17fSxzYT17fSx0YT1udWxsLHVhPW51bGwsdmE9bnVsbDtmdW5jdGlvbiB3YShhLGIsYyl7dmFyIGQ9YS50eXBlfHxcInVua25vd24tZXZlbnRcIjthLmN1cnJlbnRUYXJnZXQ9dmEoYyk7a2EoZCxiLHZvaWQgMCxhKTthLmN1cnJlbnRUYXJnZXQ9bnVsbH1mdW5jdGlvbiB4YShhLGIpe251bGw9PWI/eChcIjMwXCIpOnZvaWQgMDtpZihudWxsPT1hKXJldHVybiBiO2lmKEFycmF5LmlzQXJyYXkoYSkpe2lmKEFycmF5LmlzQXJyYXkoYikpcmV0dXJuIGEucHVzaC5hcHBseShhLGIpLGE7YS5wdXNoKGIpO3JldHVybiBhfXJldHVybiBBcnJheS5pc0FycmF5KGIpP1thXS5jb25jYXQoYik6W2EsYl19XG5mdW5jdGlvbiB5YShhLGIsYyl7QXJyYXkuaXNBcnJheShhKT9hLmZvckVhY2goYixjKTphJiZiLmNhbGwoYyxhKX12YXIgemE9bnVsbDtmdW5jdGlvbiBBYShhKXtpZihhKXt2YXIgYj1hLl9kaXNwYXRjaExpc3RlbmVycyxjPWEuX2Rpc3BhdGNoSW5zdGFuY2VzO2lmKEFycmF5LmlzQXJyYXkoYikpZm9yKHZhciBkPTA7ZDxiLmxlbmd0aCYmIWEuaXNQcm9wYWdhdGlvblN0b3BwZWQoKTtkKyspd2EoYSxiW2RdLGNbZF0pO2Vsc2UgYiYmd2EoYSxiLGMpO2EuX2Rpc3BhdGNoTGlzdGVuZXJzPW51bGw7YS5fZGlzcGF0Y2hJbnN0YW5jZXM9bnVsbDthLmlzUGVyc2lzdGVudCgpfHxhLmNvbnN0cnVjdG9yLnJlbGVhc2UoYSl9fVxudmFyIEJhPXtpbmplY3RFdmVudFBsdWdpbk9yZGVyOmZ1bmN0aW9uKGEpe2xhP3goXCIxMDFcIik6dm9pZCAwO2xhPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGEpO25hKCl9LGluamVjdEV2ZW50UGx1Z2luc0J5TmFtZTpmdW5jdGlvbihhKXt2YXIgYj0hMSxjO2ZvcihjIGluIGEpaWYoYS5oYXNPd25Qcm9wZXJ0eShjKSl7dmFyIGQ9YVtjXTttYS5oYXNPd25Qcm9wZXJ0eShjKSYmbWFbY109PT1kfHwobWFbY10/eChcIjEwMlwiLGMpOnZvaWQgMCxtYVtjXT1kLGI9ITApfWImJm5hKCl9fTtcbmZ1bmN0aW9uIENhKGEsYil7dmFyIGM9YS5zdGF0ZU5vZGU7aWYoIWMpcmV0dXJuIG51bGw7dmFyIGQ9dGEoYyk7aWYoIWQpcmV0dXJuIG51bGw7Yz1kW2JdO2E6c3dpdGNoKGIpe2Nhc2UgXCJvbkNsaWNrXCI6Y2FzZSBcIm9uQ2xpY2tDYXB0dXJlXCI6Y2FzZSBcIm9uRG91YmxlQ2xpY2tcIjpjYXNlIFwib25Eb3VibGVDbGlja0NhcHR1cmVcIjpjYXNlIFwib25Nb3VzZURvd25cIjpjYXNlIFwib25Nb3VzZURvd25DYXB0dXJlXCI6Y2FzZSBcIm9uTW91c2VNb3ZlXCI6Y2FzZSBcIm9uTW91c2VNb3ZlQ2FwdHVyZVwiOmNhc2UgXCJvbk1vdXNlVXBcIjpjYXNlIFwib25Nb3VzZVVwQ2FwdHVyZVwiOihkPSFkLmRpc2FibGVkKXx8KGE9YS50eXBlLGQ9IShcImJ1dHRvblwiPT09YXx8XCJpbnB1dFwiPT09YXx8XCJzZWxlY3RcIj09PWF8fFwidGV4dGFyZWFcIj09PWEpKTthPSFkO2JyZWFrIGE7ZGVmYXVsdDphPSExfWlmKGEpcmV0dXJuIG51bGw7YyYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGM/eChcIjIzMVwiLGIsdHlwZW9mIGMpOnZvaWQgMDtcbnJldHVybiBjfWZ1bmN0aW9uIERhKGEpe251bGwhPT1hJiYoemE9eGEoemEsYSkpO2E9emE7emE9bnVsbDtpZihhJiYoeWEoYSxBYSksemE/eChcIjk1XCIpOnZvaWQgMCxmYSkpdGhyb3cgYT1oYSxmYT0hMSxoYT1udWxsLGE7fXZhciBFYT1NYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKSxGYT1cIl9fcmVhY3RJbnRlcm5hbEluc3RhbmNlJFwiK0VhLEdhPVwiX19yZWFjdEV2ZW50SGFuZGxlcnMkXCIrRWE7ZnVuY3Rpb24gSGEoYSl7aWYoYVtGYV0pcmV0dXJuIGFbRmFdO2Zvcig7IWFbRmFdOylpZihhLnBhcmVudE5vZGUpYT1hLnBhcmVudE5vZGU7ZWxzZSByZXR1cm4gbnVsbDthPWFbRmFdO3JldHVybiA1PT09YS50YWd8fDY9PT1hLnRhZz9hOm51bGx9ZnVuY3Rpb24gSWEoYSl7YT1hW0ZhXTtyZXR1cm4hYXx8NSE9PWEudGFnJiY2IT09YS50YWc/bnVsbDphfVxuZnVuY3Rpb24gSmEoYSl7aWYoNT09PWEudGFnfHw2PT09YS50YWcpcmV0dXJuIGEuc3RhdGVOb2RlO3goXCIzM1wiKX1mdW5jdGlvbiBLYShhKXtyZXR1cm4gYVtHYV18fG51bGx9ZnVuY3Rpb24gTGEoYSl7ZG8gYT1hLnJldHVybjt3aGlsZShhJiY1IT09YS50YWcpO3JldHVybiBhP2E6bnVsbH1mdW5jdGlvbiBNYShhLGIsYyl7aWYoYj1DYShhLGMuZGlzcGF0Y2hDb25maWcucGhhc2VkUmVnaXN0cmF0aW9uTmFtZXNbYl0pKWMuX2Rpc3BhdGNoTGlzdGVuZXJzPXhhKGMuX2Rpc3BhdGNoTGlzdGVuZXJzLGIpLGMuX2Rpc3BhdGNoSW5zdGFuY2VzPXhhKGMuX2Rpc3BhdGNoSW5zdGFuY2VzLGEpfVxuZnVuY3Rpb24gTmEoYSl7aWYoYSYmYS5kaXNwYXRjaENvbmZpZy5waGFzZWRSZWdpc3RyYXRpb25OYW1lcyl7Zm9yKHZhciBiPWEuX3RhcmdldEluc3QsYz1bXTtiOyljLnB1c2goYiksYj1MYShiKTtmb3IoYj1jLmxlbmd0aDswPGItLTspTWEoY1tiXSxcImNhcHR1cmVkXCIsYSk7Zm9yKGI9MDtiPGMubGVuZ3RoO2IrKylNYShjW2JdLFwiYnViYmxlZFwiLGEpfX1mdW5jdGlvbiBPYShhLGIsYyl7YSYmYyYmYy5kaXNwYXRjaENvbmZpZy5yZWdpc3RyYXRpb25OYW1lJiYoYj1DYShhLGMuZGlzcGF0Y2hDb25maWcucmVnaXN0cmF0aW9uTmFtZSkpJiYoYy5fZGlzcGF0Y2hMaXN0ZW5lcnM9eGEoYy5fZGlzcGF0Y2hMaXN0ZW5lcnMsYiksYy5fZGlzcGF0Y2hJbnN0YW5jZXM9eGEoYy5fZGlzcGF0Y2hJbnN0YW5jZXMsYSkpfWZ1bmN0aW9uIFBhKGEpe2EmJmEuZGlzcGF0Y2hDb25maWcucmVnaXN0cmF0aW9uTmFtZSYmT2EoYS5fdGFyZ2V0SW5zdCxudWxsLGEpfVxuZnVuY3Rpb24gUWEoYSl7eWEoYSxOYSl9dmFyIFJhPSEoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiB3aW5kb3d8fCF3aW5kb3cuZG9jdW1lbnR8fCF3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7ZnVuY3Rpb24gU2EoYSxiKXt2YXIgYz17fTtjW2EudG9Mb3dlckNhc2UoKV09Yi50b0xvd2VyQ2FzZSgpO2NbXCJXZWJraXRcIithXT1cIndlYmtpdFwiK2I7Y1tcIk1velwiK2FdPVwibW96XCIrYjtyZXR1cm4gY312YXIgVGE9e2FuaW1hdGlvbmVuZDpTYShcIkFuaW1hdGlvblwiLFwiQW5pbWF0aW9uRW5kXCIpLGFuaW1hdGlvbml0ZXJhdGlvbjpTYShcIkFuaW1hdGlvblwiLFwiQW5pbWF0aW9uSXRlcmF0aW9uXCIpLGFuaW1hdGlvbnN0YXJ0OlNhKFwiQW5pbWF0aW9uXCIsXCJBbmltYXRpb25TdGFydFwiKSx0cmFuc2l0aW9uZW5kOlNhKFwiVHJhbnNpdGlvblwiLFwiVHJhbnNpdGlvbkVuZFwiKX0sVWE9e30sVmE9e307XG5SYSYmKFZhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikuc3R5bGUsXCJBbmltYXRpb25FdmVudFwiaW4gd2luZG93fHwoZGVsZXRlIFRhLmFuaW1hdGlvbmVuZC5hbmltYXRpb24sZGVsZXRlIFRhLmFuaW1hdGlvbml0ZXJhdGlvbi5hbmltYXRpb24sZGVsZXRlIFRhLmFuaW1hdGlvbnN0YXJ0LmFuaW1hdGlvbiksXCJUcmFuc2l0aW9uRXZlbnRcImluIHdpbmRvd3x8ZGVsZXRlIFRhLnRyYW5zaXRpb25lbmQudHJhbnNpdGlvbik7ZnVuY3Rpb24gV2EoYSl7aWYoVWFbYV0pcmV0dXJuIFVhW2FdO2lmKCFUYVthXSlyZXR1cm4gYTt2YXIgYj1UYVthXSxjO2ZvcihjIGluIGIpaWYoYi5oYXNPd25Qcm9wZXJ0eShjKSYmYyBpbiBWYSlyZXR1cm4gVWFbYV09YltjXTtyZXR1cm4gYX1cbnZhciBYYT1XYShcImFuaW1hdGlvbmVuZFwiKSxZYT1XYShcImFuaW1hdGlvbml0ZXJhdGlvblwiKSxaYT1XYShcImFuaW1hdGlvbnN0YXJ0XCIpLCRhPVdhKFwidHJhbnNpdGlvbmVuZFwiKSxhYj1cImFib3J0IGNhbnBsYXkgY2FucGxheXRocm91Z2ggZHVyYXRpb25jaGFuZ2UgZW1wdGllZCBlbmNyeXB0ZWQgZW5kZWQgZXJyb3IgbG9hZGVkZGF0YSBsb2FkZWRtZXRhZGF0YSBsb2Fkc3RhcnQgcGF1c2UgcGxheSBwbGF5aW5nIHByb2dyZXNzIHJhdGVjaGFuZ2Ugc2Vla2VkIHNlZWtpbmcgc3RhbGxlZCBzdXNwZW5kIHRpbWV1cGRhdGUgdm9sdW1lY2hhbmdlIHdhaXRpbmdcIi5zcGxpdChcIiBcIiksYmI9bnVsbCxjYj1udWxsLGRiPW51bGw7XG5mdW5jdGlvbiBlYigpe2lmKGRiKXJldHVybiBkYjt2YXIgYSxiPWNiLGM9Yi5sZW5ndGgsZCxlPVwidmFsdWVcImluIGJiP2JiLnZhbHVlOmJiLnRleHRDb250ZW50LGY9ZS5sZW5ndGg7Zm9yKGE9MDthPGMmJmJbYV09PT1lW2FdO2ErKyk7dmFyIGc9Yy1hO2ZvcihkPTE7ZDw9ZyYmYltjLWRdPT09ZVtmLWRdO2QrKyk7cmV0dXJuIGRiPWUuc2xpY2UoYSwxPGQ/MS1kOnZvaWQgMCl9ZnVuY3Rpb24gZmIoKXtyZXR1cm4hMH1mdW5jdGlvbiBnYigpe3JldHVybiExfVxuZnVuY3Rpb24geShhLGIsYyxkKXt0aGlzLmRpc3BhdGNoQ29uZmlnPWE7dGhpcy5fdGFyZ2V0SW5zdD1iO3RoaXMubmF0aXZlRXZlbnQ9YzthPXRoaXMuY29uc3RydWN0b3IuSW50ZXJmYWNlO2Zvcih2YXIgZSBpbiBhKWEuaGFzT3duUHJvcGVydHkoZSkmJigoYj1hW2VdKT90aGlzW2VdPWIoYyk6XCJ0YXJnZXRcIj09PWU/dGhpcy50YXJnZXQ9ZDp0aGlzW2VdPWNbZV0pO3RoaXMuaXNEZWZhdWx0UHJldmVudGVkPShudWxsIT1jLmRlZmF1bHRQcmV2ZW50ZWQ/Yy5kZWZhdWx0UHJldmVudGVkOiExPT09Yy5yZXR1cm5WYWx1ZSk/ZmI6Z2I7dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1nYjtyZXR1cm4gdGhpc31cbm4oeS5wcm90b3R5cGUse3ByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dGhpcy5kZWZhdWx0UHJldmVudGVkPSEwO3ZhciBhPXRoaXMubmF0aXZlRXZlbnQ7YSYmKGEucHJldmVudERlZmF1bHQ/YS5wcmV2ZW50RGVmYXVsdCgpOlwidW5rbm93blwiIT09dHlwZW9mIGEucmV0dXJuVmFsdWUmJihhLnJldHVyblZhbHVlPSExKSx0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1mYil9LHN0b3BQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMubmF0aXZlRXZlbnQ7YSYmKGEuc3RvcFByb3BhZ2F0aW9uP2Euc3RvcFByb3BhZ2F0aW9uKCk6XCJ1bmtub3duXCIhPT10eXBlb2YgYS5jYW5jZWxCdWJibGUmJihhLmNhbmNlbEJ1YmJsZT0hMCksdGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1mYil9LHBlcnNpc3Q6ZnVuY3Rpb24oKXt0aGlzLmlzUGVyc2lzdGVudD1mYn0saXNQZXJzaXN0ZW50OmdiLGRlc3RydWN0b3I6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmNvbnN0cnVjdG9yLkludGVyZmFjZSxcbmI7Zm9yKGIgaW4gYSl0aGlzW2JdPW51bGw7dGhpcy5uYXRpdmVFdmVudD10aGlzLl90YXJnZXRJbnN0PXRoaXMuZGlzcGF0Y2hDb25maWc9bnVsbDt0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPXRoaXMuaXNEZWZhdWx0UHJldmVudGVkPWdiO3RoaXMuX2Rpc3BhdGNoSW5zdGFuY2VzPXRoaXMuX2Rpc3BhdGNoTGlzdGVuZXJzPW51bGx9fSk7eS5JbnRlcmZhY2U9e3R5cGU6bnVsbCx0YXJnZXQ6bnVsbCxjdXJyZW50VGFyZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIG51bGx9LGV2ZW50UGhhc2U6bnVsbCxidWJibGVzOm51bGwsY2FuY2VsYWJsZTpudWxsLHRpbWVTdGFtcDpmdW5jdGlvbihhKXtyZXR1cm4gYS50aW1lU3RhbXB8fERhdGUubm93KCl9LGRlZmF1bHRQcmV2ZW50ZWQ6bnVsbCxpc1RydXN0ZWQ6bnVsbH07XG55LmV4dGVuZD1mdW5jdGlvbihhKXtmdW5jdGlvbiBiKCl7fWZ1bmN0aW9uIGMoKXtyZXR1cm4gZC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9dmFyIGQ9dGhpcztiLnByb3RvdHlwZT1kLnByb3RvdHlwZTt2YXIgZT1uZXcgYjtuKGUsYy5wcm90b3R5cGUpO2MucHJvdG90eXBlPWU7Yy5wcm90b3R5cGUuY29uc3RydWN0b3I9YztjLkludGVyZmFjZT1uKHt9LGQuSW50ZXJmYWNlLGEpO2MuZXh0ZW5kPWQuZXh0ZW5kO2hiKGMpO3JldHVybiBjfTtoYih5KTtmdW5jdGlvbiBpYihhLGIsYyxkKXtpZih0aGlzLmV2ZW50UG9vbC5sZW5ndGgpe3ZhciBlPXRoaXMuZXZlbnRQb29sLnBvcCgpO3RoaXMuY2FsbChlLGEsYixjLGQpO3JldHVybiBlfXJldHVybiBuZXcgdGhpcyhhLGIsYyxkKX1mdW5jdGlvbiBqYihhKXthIGluc3RhbmNlb2YgdGhpcz92b2lkIDA6eChcIjI3OVwiKTthLmRlc3RydWN0b3IoKTsxMD50aGlzLmV2ZW50UG9vbC5sZW5ndGgmJnRoaXMuZXZlbnRQb29sLnB1c2goYSl9XG5mdW5jdGlvbiBoYihhKXthLmV2ZW50UG9vbD1bXTthLmdldFBvb2xlZD1pYjthLnJlbGVhc2U9amJ9dmFyIGtiPXkuZXh0ZW5kKHtkYXRhOm51bGx9KSxsYj15LmV4dGVuZCh7ZGF0YTpudWxsfSksbWI9WzksMTMsMjcsMzJdLG5iPVJhJiZcIkNvbXBvc2l0aW9uRXZlbnRcImluIHdpbmRvdyxvYj1udWxsO1JhJiZcImRvY3VtZW50TW9kZVwiaW4gZG9jdW1lbnQmJihvYj1kb2N1bWVudC5kb2N1bWVudE1vZGUpO1xudmFyIHBiPVJhJiZcIlRleHRFdmVudFwiaW4gd2luZG93JiYhb2IscWI9UmEmJighbmJ8fG9iJiY4PG9iJiYxMT49b2IpLHJiPVN0cmluZy5mcm9tQ2hhckNvZGUoMzIpLHNiPXtiZWZvcmVJbnB1dDp7cGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6e2J1YmJsZWQ6XCJvbkJlZm9yZUlucHV0XCIsY2FwdHVyZWQ6XCJvbkJlZm9yZUlucHV0Q2FwdHVyZVwifSxkZXBlbmRlbmNpZXM6W1wiY29tcG9zaXRpb25lbmRcIixcImtleXByZXNzXCIsXCJ0ZXh0SW5wdXRcIixcInBhc3RlXCJdfSxjb21wb3NpdGlvbkVuZDp7cGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6e2J1YmJsZWQ6XCJvbkNvbXBvc2l0aW9uRW5kXCIsY2FwdHVyZWQ6XCJvbkNvbXBvc2l0aW9uRW5kQ2FwdHVyZVwifSxkZXBlbmRlbmNpZXM6XCJibHVyIGNvbXBvc2l0aW9uZW5kIGtleWRvd24ga2V5cHJlc3Mga2V5dXAgbW91c2Vkb3duXCIuc3BsaXQoXCIgXCIpfSxjb21wb3NpdGlvblN0YXJ0OntwaGFzZWRSZWdpc3RyYXRpb25OYW1lczp7YnViYmxlZDpcIm9uQ29tcG9zaXRpb25TdGFydFwiLFxuY2FwdHVyZWQ6XCJvbkNvbXBvc2l0aW9uU3RhcnRDYXB0dXJlXCJ9LGRlcGVuZGVuY2llczpcImJsdXIgY29tcG9zaXRpb25zdGFydCBrZXlkb3duIGtleXByZXNzIGtleXVwIG1vdXNlZG93blwiLnNwbGl0KFwiIFwiKX0sY29tcG9zaXRpb25VcGRhdGU6e3BoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOntidWJibGVkOlwib25Db21wb3NpdGlvblVwZGF0ZVwiLGNhcHR1cmVkOlwib25Db21wb3NpdGlvblVwZGF0ZUNhcHR1cmVcIn0sZGVwZW5kZW5jaWVzOlwiYmx1ciBjb21wb3NpdGlvbnVwZGF0ZSBrZXlkb3duIGtleXByZXNzIGtleXVwIG1vdXNlZG93blwiLnNwbGl0KFwiIFwiKX19LHRiPSExO1xuZnVuY3Rpb24gdWIoYSxiKXtzd2l0Y2goYSl7Y2FzZSBcImtleXVwXCI6cmV0dXJuLTEhPT1tYi5pbmRleE9mKGIua2V5Q29kZSk7Y2FzZSBcImtleWRvd25cIjpyZXR1cm4gMjI5IT09Yi5rZXlDb2RlO2Nhc2UgXCJrZXlwcmVzc1wiOmNhc2UgXCJtb3VzZWRvd25cIjpjYXNlIFwiYmx1clwiOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9fWZ1bmN0aW9uIHZiKGEpe2E9YS5kZXRhaWw7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZcImRhdGFcImluIGE/YS5kYXRhOm51bGx9dmFyIHdiPSExO2Z1bmN0aW9uIHhiKGEsYil7c3dpdGNoKGEpe2Nhc2UgXCJjb21wb3NpdGlvbmVuZFwiOnJldHVybiB2YihiKTtjYXNlIFwia2V5cHJlc3NcIjppZigzMiE9PWIud2hpY2gpcmV0dXJuIG51bGw7dGI9ITA7cmV0dXJuIHJiO2Nhc2UgXCJ0ZXh0SW5wdXRcIjpyZXR1cm4gYT1iLmRhdGEsYT09PXJiJiZ0Yj9udWxsOmE7ZGVmYXVsdDpyZXR1cm4gbnVsbH19XG5mdW5jdGlvbiB5YihhLGIpe2lmKHdiKXJldHVyblwiY29tcG9zaXRpb25lbmRcIj09PWF8fCFuYiYmdWIoYSxiKT8oYT1lYigpLGRiPWNiPWJiPW51bGwsd2I9ITEsYSk6bnVsbDtzd2l0Y2goYSl7Y2FzZSBcInBhc3RlXCI6cmV0dXJuIG51bGw7Y2FzZSBcImtleXByZXNzXCI6aWYoIShiLmN0cmxLZXl8fGIuYWx0S2V5fHxiLm1ldGFLZXkpfHxiLmN0cmxLZXkmJmIuYWx0S2V5KXtpZihiLmNoYXImJjE8Yi5jaGFyLmxlbmd0aClyZXR1cm4gYi5jaGFyO2lmKGIud2hpY2gpcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoYi53aGljaCl9cmV0dXJuIG51bGw7Y2FzZSBcImNvbXBvc2l0aW9uZW5kXCI6cmV0dXJuIHFiJiZcImtvXCIhPT1iLmxvY2FsZT9udWxsOmIuZGF0YTtkZWZhdWx0OnJldHVybiBudWxsfX1cbnZhciB6Yj17ZXZlbnRUeXBlczpzYixleHRyYWN0RXZlbnRzOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPXZvaWQgMDt2YXIgZj12b2lkIDA7aWYobmIpYjp7c3dpdGNoKGEpe2Nhc2UgXCJjb21wb3NpdGlvbnN0YXJ0XCI6ZT1zYi5jb21wb3NpdGlvblN0YXJ0O2JyZWFrIGI7Y2FzZSBcImNvbXBvc2l0aW9uZW5kXCI6ZT1zYi5jb21wb3NpdGlvbkVuZDticmVhayBiO2Nhc2UgXCJjb21wb3NpdGlvbnVwZGF0ZVwiOmU9c2IuY29tcG9zaXRpb25VcGRhdGU7YnJlYWsgYn1lPXZvaWQgMH1lbHNlIHdiP3ViKGEsYykmJihlPXNiLmNvbXBvc2l0aW9uRW5kKTpcImtleWRvd25cIj09PWEmJjIyOT09PWMua2V5Q29kZSYmKGU9c2IuY29tcG9zaXRpb25TdGFydCk7ZT8ocWImJlwia29cIiE9PWMubG9jYWxlJiYod2J8fGUhPT1zYi5jb21wb3NpdGlvblN0YXJ0P2U9PT1zYi5jb21wb3NpdGlvbkVuZCYmd2ImJihmPWViKCkpOihiYj1kLGNiPVwidmFsdWVcImluIGJiP2JiLnZhbHVlOmJiLnRleHRDb250ZW50LHdiPVxuITApKSxlPWtiLmdldFBvb2xlZChlLGIsYyxkKSxmP2UuZGF0YT1mOihmPXZiKGMpLG51bGwhPT1mJiYoZS5kYXRhPWYpKSxRYShlKSxmPWUpOmY9bnVsbDsoYT1wYj94YihhLGMpOnliKGEsYykpPyhiPWxiLmdldFBvb2xlZChzYi5iZWZvcmVJbnB1dCxiLGMsZCksYi5kYXRhPWEsUWEoYikpOmI9bnVsbDtyZXR1cm4gbnVsbD09PWY/YjpudWxsPT09Yj9mOltmLGJdfX0sQWI9bnVsbCxCYj1udWxsLENiPW51bGw7ZnVuY3Rpb24gRGIoYSl7aWYoYT11YShhKSl7XCJmdW5jdGlvblwiIT09dHlwZW9mIEFiP3goXCIyODBcIik6dm9pZCAwO3ZhciBiPXRhKGEuc3RhdGVOb2RlKTtBYihhLnN0YXRlTm9kZSxhLnR5cGUsYil9fWZ1bmN0aW9uIEViKGEpe0JiP0NiP0NiLnB1c2goYSk6Q2I9W2FdOkJiPWF9ZnVuY3Rpb24gRmIoKXtpZihCYil7dmFyIGE9QmIsYj1DYjtDYj1CYj1udWxsO0RiKGEpO2lmKGIpZm9yKGE9MDthPGIubGVuZ3RoO2ErKylEYihiW2FdKX19XG5mdW5jdGlvbiBHYihhLGIpe3JldHVybiBhKGIpfWZ1bmN0aW9uIEhiKGEsYixjKXtyZXR1cm4gYShiLGMpfWZ1bmN0aW9uIEliKCl7fXZhciBKYj0hMTtmdW5jdGlvbiBLYihhLGIpe2lmKEpiKXJldHVybiBhKGIpO0piPSEwO3RyeXtyZXR1cm4gR2IoYSxiKX1maW5hbGx5e2lmKEpiPSExLG51bGwhPT1CYnx8bnVsbCE9PUNiKUliKCksRmIoKX19dmFyIExiPXtjb2xvcjohMCxkYXRlOiEwLGRhdGV0aW1lOiEwLFwiZGF0ZXRpbWUtbG9jYWxcIjohMCxlbWFpbDohMCxtb250aDohMCxudW1iZXI6ITAscGFzc3dvcmQ6ITAscmFuZ2U6ITAsc2VhcmNoOiEwLHRlbDohMCx0ZXh0OiEwLHRpbWU6ITAsdXJsOiEwLHdlZWs6ITB9O2Z1bmN0aW9uIE1iKGEpe3ZhciBiPWEmJmEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm5cImlucHV0XCI9PT1iPyEhTGJbYS50eXBlXTpcInRleHRhcmVhXCI9PT1iPyEwOiExfVxuZnVuY3Rpb24gTmIoYSl7YT1hLnRhcmdldHx8YS5zcmNFbGVtZW50fHx3aW5kb3c7YS5jb3JyZXNwb25kaW5nVXNlRWxlbWVudCYmKGE9YS5jb3JyZXNwb25kaW5nVXNlRWxlbWVudCk7cmV0dXJuIDM9PT1hLm5vZGVUeXBlP2EucGFyZW50Tm9kZTphfWZ1bmN0aW9uIE9iKGEpe2lmKCFSYSlyZXR1cm4hMTthPVwib25cIithO3ZhciBiPWEgaW4gZG9jdW1lbnQ7Ynx8KGI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxiLnNldEF0dHJpYnV0ZShhLFwicmV0dXJuO1wiKSxiPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBiW2FdKTtyZXR1cm4gYn1mdW5jdGlvbiBQYihhKXt2YXIgYj1hLnR5cGU7cmV0dXJuKGE9YS5ub2RlTmFtZSkmJlwiaW5wdXRcIj09PWEudG9Mb3dlckNhc2UoKSYmKFwiY2hlY2tib3hcIj09PWJ8fFwicmFkaW9cIj09PWIpfVxuZnVuY3Rpb24gUWIoYSl7dmFyIGI9UGIoYSk/XCJjaGVja2VkXCI6XCJ2YWx1ZVwiLGM9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihhLmNvbnN0cnVjdG9yLnByb3RvdHlwZSxiKSxkPVwiXCIrYVtiXTtpZighYS5oYXNPd25Qcm9wZXJ0eShiKSYmXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBjJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgYy5nZXQmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBjLnNldCl7dmFyIGU9Yy5nZXQsZj1jLnNldDtPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxiLHtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGUuY2FsbCh0aGlzKX0sc2V0OmZ1bmN0aW9uKGEpe2Q9XCJcIithO2YuY2FsbCh0aGlzLGEpfX0pO09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLGIse2VudW1lcmFibGU6Yy5lbnVtZXJhYmxlfSk7cmV0dXJue2dldFZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIGR9LHNldFZhbHVlOmZ1bmN0aW9uKGEpe2Q9XCJcIithfSxzdG9wVHJhY2tpbmc6ZnVuY3Rpb24oKXthLl92YWx1ZVRyYWNrZXI9XG5udWxsO2RlbGV0ZSBhW2JdfX19fWZ1bmN0aW9uIFJiKGEpe2EuX3ZhbHVlVHJhY2tlcnx8KGEuX3ZhbHVlVHJhY2tlcj1RYihhKSl9ZnVuY3Rpb24gU2IoYSl7aWYoIWEpcmV0dXJuITE7dmFyIGI9YS5fdmFsdWVUcmFja2VyO2lmKCFiKXJldHVybiEwO3ZhciBjPWIuZ2V0VmFsdWUoKTt2YXIgZD1cIlwiO2EmJihkPVBiKGEpP2EuY2hlY2tlZD9cInRydWVcIjpcImZhbHNlXCI6YS52YWx1ZSk7YT1kO3JldHVybiBhIT09Yz8oYi5zZXRWYWx1ZShhKSwhMCk6ITF9dmFyIFRiPWFhLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1RiLmhhc093blByb3BlcnR5KFwiUmVhY3RDdXJyZW50RGlzcGF0Y2hlclwiKXx8KFRiLlJlYWN0Q3VycmVudERpc3BhdGNoZXI9e2N1cnJlbnQ6bnVsbH0pO1xudmFyIFViPS9eKC4qKVtcXFxcXFwvXS8sej1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yLFZiPXo/U3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIik6NjAxMDMsV2I9ej9TeW1ib2wuZm9yKFwicmVhY3QucG9ydGFsXCIpOjYwMTA2LFhiPXo/U3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpOjYwMTA3LFliPXo/U3ltYm9sLmZvcihcInJlYWN0LnN0cmljdF9tb2RlXCIpOjYwMTA4LFpiPXo/U3ltYm9sLmZvcihcInJlYWN0LnByb2ZpbGVyXCIpOjYwMTE0LCRiPXo/U3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpOjYwMTA5LGFjPXo/U3ltYm9sLmZvcihcInJlYWN0LmNvbnRleHRcIik6NjAxMTAsYmM9ej9TeW1ib2wuZm9yKFwicmVhY3QuY29uY3VycmVudF9tb2RlXCIpOjYwMTExLGNjPXo/U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpOjYwMTEyLGRjPXo/U3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlXCIpOjYwMTEzLGVjPXo/U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIik6XG42MDExNSxmYz16P1N5bWJvbC5mb3IoXCJyZWFjdC5sYXp5XCIpOjYwMTE2LGdjPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5pdGVyYXRvcjtmdW5jdGlvbiBoYyhhKXtpZihudWxsPT09YXx8XCJvYmplY3RcIiE9PXR5cGVvZiBhKXJldHVybiBudWxsO2E9Z2MmJmFbZ2NdfHxhW1wiQEBpdGVyYXRvclwiXTtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYT9hOm51bGx9XG5mdW5jdGlvbiBpYyhhKXtpZihudWxsPT1hKXJldHVybiBudWxsO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhKXJldHVybiBhLmRpc3BsYXlOYW1lfHxhLm5hbWV8fG51bGw7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBhKXJldHVybiBhO3N3aXRjaChhKXtjYXNlIGJjOnJldHVyblwiQ29uY3VycmVudE1vZGVcIjtjYXNlIFhiOnJldHVyblwiRnJhZ21lbnRcIjtjYXNlIFdiOnJldHVyblwiUG9ydGFsXCI7Y2FzZSBaYjpyZXR1cm5cIlByb2ZpbGVyXCI7Y2FzZSBZYjpyZXR1cm5cIlN0cmljdE1vZGVcIjtjYXNlIGRjOnJldHVyblwiU3VzcGVuc2VcIn1pZihcIm9iamVjdFwiPT09dHlwZW9mIGEpc3dpdGNoKGEuJCR0eXBlb2Ype2Nhc2UgYWM6cmV0dXJuXCJDb250ZXh0LkNvbnN1bWVyXCI7Y2FzZSAkYjpyZXR1cm5cIkNvbnRleHQuUHJvdmlkZXJcIjtjYXNlIGNjOnZhciBiPWEucmVuZGVyO2I9Yi5kaXNwbGF5TmFtZXx8Yi5uYW1lfHxcIlwiO3JldHVybiBhLmRpc3BsYXlOYW1lfHwoXCJcIiE9PWI/XCJGb3J3YXJkUmVmKFwiK2IrXG5cIilcIjpcIkZvcndhcmRSZWZcIik7Y2FzZSBlYzpyZXR1cm4gaWMoYS50eXBlKTtjYXNlIGZjOmlmKGE9MT09PWEuX3N0YXR1cz9hLl9yZXN1bHQ6bnVsbClyZXR1cm4gaWMoYSl9cmV0dXJuIG51bGx9ZnVuY3Rpb24gamMoYSl7dmFyIGI9XCJcIjtkb3thOnN3aXRjaChhLnRhZyl7Y2FzZSAzOmNhc2UgNDpjYXNlIDY6Y2FzZSA3OmNhc2UgMTA6Y2FzZSA5OnZhciBjPVwiXCI7YnJlYWsgYTtkZWZhdWx0OnZhciBkPWEuX2RlYnVnT3duZXIsZT1hLl9kZWJ1Z1NvdXJjZSxmPWljKGEudHlwZSk7Yz1udWxsO2QmJihjPWljKGQudHlwZSkpO2Q9ZjtmPVwiXCI7ZT9mPVwiIChhdCBcIitlLmZpbGVOYW1lLnJlcGxhY2UoVWIsXCJcIikrXCI6XCIrZS5saW5lTnVtYmVyK1wiKVwiOmMmJihmPVwiIChjcmVhdGVkIGJ5IFwiK2MrXCIpXCIpO2M9XCJcXG4gICAgaW4gXCIrKGR8fFwiVW5rbm93blwiKStmfWIrPWM7YT1hLnJldHVybn13aGlsZShhKTtyZXR1cm4gYn1cbnZhciBrYz0vXls6QS1aX2EtelxcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNlxcdTAwRjgtXFx1MDJGRlxcdTAzNzAtXFx1MDM3RFxcdTAzN0YtXFx1MUZGRlxcdTIwMEMtXFx1MjAwRFxcdTIwNzAtXFx1MjE4RlxcdTJDMDAtXFx1MkZFRlxcdTMwMDEtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZGRF1bOkEtWl9hLXpcXHUwMEMwLVxcdTAwRDZcXHUwMEQ4LVxcdTAwRjZcXHUwMEY4LVxcdTAyRkZcXHUwMzcwLVxcdTAzN0RcXHUwMzdGLVxcdTFGRkZcXHUyMDBDLVxcdTIwMERcXHUyMDcwLVxcdTIxOEZcXHUyQzAwLVxcdTJGRUZcXHUzMDAxLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRkRcXC0uMC05XFx1MDBCN1xcdTAzMDAtXFx1MDM2RlxcdTIwM0YtXFx1MjA0MF0qJC8sbGM9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxtYz17fSxuYz17fTtcbmZ1bmN0aW9uIG9jKGEpe2lmKGxjLmNhbGwobmMsYSkpcmV0dXJuITA7aWYobGMuY2FsbChtYyxhKSlyZXR1cm4hMTtpZihrYy50ZXN0KGEpKXJldHVybiBuY1thXT0hMDttY1thXT0hMDtyZXR1cm4hMX1mdW5jdGlvbiBwYyhhLGIsYyxkKXtpZihudWxsIT09YyYmMD09PWMudHlwZSlyZXR1cm4hMTtzd2l0Y2godHlwZW9mIGIpe2Nhc2UgXCJmdW5jdGlvblwiOmNhc2UgXCJzeW1ib2xcIjpyZXR1cm4hMDtjYXNlIFwiYm9vbGVhblwiOmlmKGQpcmV0dXJuITE7aWYobnVsbCE9PWMpcmV0dXJuIWMuYWNjZXB0c0Jvb2xlYW5zO2E9YS50b0xvd2VyQ2FzZSgpLnNsaWNlKDAsNSk7cmV0dXJuXCJkYXRhLVwiIT09YSYmXCJhcmlhLVwiIT09YTtkZWZhdWx0OnJldHVybiExfX1cbmZ1bmN0aW9uIHFjKGEsYixjLGQpe2lmKG51bGw9PT1ifHxcInVuZGVmaW5lZFwiPT09dHlwZW9mIGJ8fHBjKGEsYixjLGQpKXJldHVybiEwO2lmKGQpcmV0dXJuITE7aWYobnVsbCE9PWMpc3dpdGNoKGMudHlwZSl7Y2FzZSAzOnJldHVybiFiO2Nhc2UgNDpyZXR1cm4hMT09PWI7Y2FzZSA1OnJldHVybiBpc05hTihiKTtjYXNlIDY6cmV0dXJuIGlzTmFOKGIpfHwxPmJ9cmV0dXJuITF9ZnVuY3Rpb24gQyhhLGIsYyxkLGUpe3RoaXMuYWNjZXB0c0Jvb2xlYW5zPTI9PT1ifHwzPT09Ynx8ND09PWI7dGhpcy5hdHRyaWJ1dGVOYW1lPWQ7dGhpcy5hdHRyaWJ1dGVOYW1lc3BhY2U9ZTt0aGlzLm11c3RVc2VQcm9wZXJ0eT1jO3RoaXMucHJvcGVydHlOYW1lPWE7dGhpcy50eXBlPWJ9dmFyIEQ9e307XG5cImNoaWxkcmVuIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIGRlZmF1bHRWYWx1ZSBkZWZhdWx0Q2hlY2tlZCBpbm5lckhUTUwgc3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIHN1cHByZXNzSHlkcmF0aW9uV2FybmluZyBzdHlsZVwiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEMoYSwwLCExLGEsbnVsbCl9KTtbW1wiYWNjZXB0Q2hhcnNldFwiLFwiYWNjZXB0LWNoYXJzZXRcIl0sW1wiY2xhc3NOYW1lXCIsXCJjbGFzc1wiXSxbXCJodG1sRm9yXCIsXCJmb3JcIl0sW1wiaHR0cEVxdWl2XCIsXCJodHRwLWVxdWl2XCJdXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPWFbMF07RFtiXT1uZXcgQyhiLDEsITEsYVsxXSxudWxsKX0pO1tcImNvbnRlbnRFZGl0YWJsZVwiLFwiZHJhZ2dhYmxlXCIsXCJzcGVsbENoZWNrXCIsXCJ2YWx1ZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEMoYSwyLCExLGEudG9Mb3dlckNhc2UoKSxudWxsKX0pO1xuW1wiYXV0b1JldmVyc2VcIixcImV4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWRcIixcImZvY3VzYWJsZVwiLFwicHJlc2VydmVBbHBoYVwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEMoYSwyLCExLGEsbnVsbCl9KTtcImFsbG93RnVsbFNjcmVlbiBhc3luYyBhdXRvRm9jdXMgYXV0b1BsYXkgY29udHJvbHMgZGVmYXVsdCBkZWZlciBkaXNhYmxlZCBmb3JtTm9WYWxpZGF0ZSBoaWRkZW4gbG9vcCBub01vZHVsZSBub1ZhbGlkYXRlIG9wZW4gcGxheXNJbmxpbmUgcmVhZE9ubHkgcmVxdWlyZWQgcmV2ZXJzZWQgc2NvcGVkIHNlYW1sZXNzIGl0ZW1TY29wZVwiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEMoYSwzLCExLGEudG9Mb3dlckNhc2UoKSxudWxsKX0pO1tcImNoZWNrZWRcIixcIm11bHRpcGxlXCIsXCJtdXRlZFwiLFwic2VsZWN0ZWRcIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBDKGEsMywhMCxhLG51bGwpfSk7XG5bXCJjYXB0dXJlXCIsXCJkb3dubG9hZFwiXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe0RbYV09bmV3IEMoYSw0LCExLGEsbnVsbCl9KTtbXCJjb2xzXCIsXCJyb3dzXCIsXCJzaXplXCIsXCJzcGFuXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQyhhLDYsITEsYSxudWxsKX0pO1tcInJvd1NwYW5cIixcInN0YXJ0XCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQyhhLDUsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwpfSk7dmFyIHJjPS9bXFwtOl0oW2Etel0pL2c7ZnVuY3Rpb24gc2MoYSl7cmV0dXJuIGFbMV0udG9VcHBlckNhc2UoKX1cblwiYWNjZW50LWhlaWdodCBhbGlnbm1lbnQtYmFzZWxpbmUgYXJhYmljLWZvcm0gYmFzZWxpbmUtc2hpZnQgY2FwLWhlaWdodCBjbGlwLXBhdGggY2xpcC1ydWxlIGNvbG9yLWludGVycG9sYXRpb24gY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzIGNvbG9yLXByb2ZpbGUgY29sb3ItcmVuZGVyaW5nIGRvbWluYW50LWJhc2VsaW5lIGVuYWJsZS1iYWNrZ3JvdW5kIGZpbGwtb3BhY2l0eSBmaWxsLXJ1bGUgZmxvb2QtY29sb3IgZmxvb2Qtb3BhY2l0eSBmb250LWZhbWlseSBmb250LXNpemUgZm9udC1zaXplLWFkanVzdCBmb250LXN0cmV0Y2ggZm9udC1zdHlsZSBmb250LXZhcmlhbnQgZm9udC13ZWlnaHQgZ2x5cGgtbmFtZSBnbHlwaC1vcmllbnRhdGlvbi1ob3Jpem9udGFsIGdseXBoLW9yaWVudGF0aW9uLXZlcnRpY2FsIGhvcml6LWFkdi14IGhvcml6LW9yaWdpbi14IGltYWdlLXJlbmRlcmluZyBsZXR0ZXItc3BhY2luZyBsaWdodGluZy1jb2xvciBtYXJrZXItZW5kIG1hcmtlci1taWQgbWFya2VyLXN0YXJ0IG92ZXJsaW5lLXBvc2l0aW9uIG92ZXJsaW5lLXRoaWNrbmVzcyBwYWludC1vcmRlciBwYW5vc2UtMSBwb2ludGVyLWV2ZW50cyByZW5kZXJpbmctaW50ZW50IHNoYXBlLXJlbmRlcmluZyBzdG9wLWNvbG9yIHN0b3Atb3BhY2l0eSBzdHJpa2V0aHJvdWdoLXBvc2l0aW9uIHN0cmlrZXRocm91Z2gtdGhpY2tuZXNzIHN0cm9rZS1kYXNoYXJyYXkgc3Ryb2tlLWRhc2hvZmZzZXQgc3Ryb2tlLWxpbmVjYXAgc3Ryb2tlLWxpbmVqb2luIHN0cm9rZS1taXRlcmxpbWl0IHN0cm9rZS1vcGFjaXR5IHN0cm9rZS13aWR0aCB0ZXh0LWFuY2hvciB0ZXh0LWRlY29yYXRpb24gdGV4dC1yZW5kZXJpbmcgdW5kZXJsaW5lLXBvc2l0aW9uIHVuZGVybGluZS10aGlja25lc3MgdW5pY29kZS1iaWRpIHVuaWNvZGUtcmFuZ2UgdW5pdHMtcGVyLWVtIHYtYWxwaGFiZXRpYyB2LWhhbmdpbmcgdi1pZGVvZ3JhcGhpYyB2LW1hdGhlbWF0aWNhbCB2ZWN0b3ItZWZmZWN0IHZlcnQtYWR2LXkgdmVydC1vcmlnaW4teCB2ZXJ0LW9yaWdpbi15IHdvcmQtc3BhY2luZyB3cml0aW5nLW1vZGUgeG1sbnM6eGxpbmsgeC1oZWlnaHRcIi5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UocmMsXG5zYyk7RFtiXT1uZXcgQyhiLDEsITEsYSxudWxsKX0pO1wieGxpbms6YWN0dWF0ZSB4bGluazphcmNyb2xlIHhsaW5rOmhyZWYgeGxpbms6cm9sZSB4bGluazpzaG93IHhsaW5rOnRpdGxlIHhsaW5rOnR5cGVcIi5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UocmMsc2MpO0RbYl09bmV3IEMoYiwxLCExLGEsXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIpfSk7W1wieG1sOmJhc2VcIixcInhtbDpsYW5nXCIsXCJ4bWw6c3BhY2VcIl0uZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UocmMsc2MpO0RbYl09bmV3IEMoYiwxLCExLGEsXCJodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2VcIil9KTtbXCJ0YWJJbmRleFwiLFwiY3Jvc3NPcmlnaW5cIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBDKGEsMSwhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCl9KTtcbmZ1bmN0aW9uIHRjKGEsYixjLGQpe3ZhciBlPUQuaGFzT3duUHJvcGVydHkoYik/RFtiXTpudWxsO3ZhciBmPW51bGwhPT1lPzA9PT1lLnR5cGU6ZD8hMTohKDI8Yi5sZW5ndGgpfHxcIm9cIiE9PWJbMF0mJlwiT1wiIT09YlswXXx8XCJuXCIhPT1iWzFdJiZcIk5cIiE9PWJbMV0/ITE6ITA7Znx8KHFjKGIsYyxlLGQpJiYoYz1udWxsKSxkfHxudWxsPT09ZT9vYyhiKSYmKG51bGw9PT1jP2EucmVtb3ZlQXR0cmlidXRlKGIpOmEuc2V0QXR0cmlidXRlKGIsXCJcIitjKSk6ZS5tdXN0VXNlUHJvcGVydHk/YVtlLnByb3BlcnR5TmFtZV09bnVsbD09PWM/Mz09PWUudHlwZT8hMTpcIlwiOmM6KGI9ZS5hdHRyaWJ1dGVOYW1lLGQ9ZS5hdHRyaWJ1dGVOYW1lc3BhY2UsbnVsbD09PWM/YS5yZW1vdmVBdHRyaWJ1dGUoYik6KGU9ZS50eXBlLGM9Mz09PWV8fDQ9PT1lJiYhMD09PWM/XCJcIjpcIlwiK2MsZD9hLnNldEF0dHJpYnV0ZU5TKGQsYixjKTphLnNldEF0dHJpYnV0ZShiLGMpKSkpfVxuZnVuY3Rpb24gdWMoYSl7c3dpdGNoKHR5cGVvZiBhKXtjYXNlIFwiYm9vbGVhblwiOmNhc2UgXCJudW1iZXJcIjpjYXNlIFwib2JqZWN0XCI6Y2FzZSBcInN0cmluZ1wiOmNhc2UgXCJ1bmRlZmluZWRcIjpyZXR1cm4gYTtkZWZhdWx0OnJldHVyblwiXCJ9fWZ1bmN0aW9uIHZjKGEsYil7dmFyIGM9Yi5jaGVja2VkO3JldHVybiBuKHt9LGIse2RlZmF1bHRDaGVja2VkOnZvaWQgMCxkZWZhdWx0VmFsdWU6dm9pZCAwLHZhbHVlOnZvaWQgMCxjaGVja2VkOm51bGwhPWM/YzphLl93cmFwcGVyU3RhdGUuaW5pdGlhbENoZWNrZWR9KX1cbmZ1bmN0aW9uIHdjKGEsYil7dmFyIGM9bnVsbD09Yi5kZWZhdWx0VmFsdWU/XCJcIjpiLmRlZmF1bHRWYWx1ZSxkPW51bGwhPWIuY2hlY2tlZD9iLmNoZWNrZWQ6Yi5kZWZhdWx0Q2hlY2tlZDtjPXVjKG51bGwhPWIudmFsdWU/Yi52YWx1ZTpjKTthLl93cmFwcGVyU3RhdGU9e2luaXRpYWxDaGVja2VkOmQsaW5pdGlhbFZhbHVlOmMsY29udHJvbGxlZDpcImNoZWNrYm94XCI9PT1iLnR5cGV8fFwicmFkaW9cIj09PWIudHlwZT9udWxsIT1iLmNoZWNrZWQ6bnVsbCE9Yi52YWx1ZX19ZnVuY3Rpb24geGMoYSxiKXtiPWIuY2hlY2tlZDtudWxsIT1iJiZ0YyhhLFwiY2hlY2tlZFwiLGIsITEpfVxuZnVuY3Rpb24geWMoYSxiKXt4YyhhLGIpO3ZhciBjPXVjKGIudmFsdWUpLGQ9Yi50eXBlO2lmKG51bGwhPWMpaWYoXCJudW1iZXJcIj09PWQpe2lmKDA9PT1jJiZcIlwiPT09YS52YWx1ZXx8YS52YWx1ZSE9YylhLnZhbHVlPVwiXCIrY31lbHNlIGEudmFsdWUhPT1cIlwiK2MmJihhLnZhbHVlPVwiXCIrYyk7ZWxzZSBpZihcInN1Ym1pdFwiPT09ZHx8XCJyZXNldFwiPT09ZCl7YS5yZW1vdmVBdHRyaWJ1dGUoXCJ2YWx1ZVwiKTtyZXR1cm59Yi5oYXNPd25Qcm9wZXJ0eShcInZhbHVlXCIpP3pjKGEsYi50eXBlLGMpOmIuaGFzT3duUHJvcGVydHkoXCJkZWZhdWx0VmFsdWVcIikmJnpjKGEsYi50eXBlLHVjKGIuZGVmYXVsdFZhbHVlKSk7bnVsbD09Yi5jaGVja2VkJiZudWxsIT1iLmRlZmF1bHRDaGVja2VkJiYoYS5kZWZhdWx0Q2hlY2tlZD0hIWIuZGVmYXVsdENoZWNrZWQpfVxuZnVuY3Rpb24gQWMoYSxiLGMpe2lmKGIuaGFzT3duUHJvcGVydHkoXCJ2YWx1ZVwiKXx8Yi5oYXNPd25Qcm9wZXJ0eShcImRlZmF1bHRWYWx1ZVwiKSl7dmFyIGQ9Yi50eXBlO2lmKCEoXCJzdWJtaXRcIiE9PWQmJlwicmVzZXRcIiE9PWR8fHZvaWQgMCE9PWIudmFsdWUmJm51bGwhPT1iLnZhbHVlKSlyZXR1cm47Yj1cIlwiK2EuX3dyYXBwZXJTdGF0ZS5pbml0aWFsVmFsdWU7Y3x8Yj09PWEudmFsdWV8fChhLnZhbHVlPWIpO2EuZGVmYXVsdFZhbHVlPWJ9Yz1hLm5hbWU7XCJcIiE9PWMmJihhLm5hbWU9XCJcIik7YS5kZWZhdWx0Q2hlY2tlZD0hYS5kZWZhdWx0Q2hlY2tlZDthLmRlZmF1bHRDaGVja2VkPSEhYS5fd3JhcHBlclN0YXRlLmluaXRpYWxDaGVja2VkO1wiXCIhPT1jJiYoYS5uYW1lPWMpfVxuZnVuY3Rpb24gemMoYSxiLGMpe2lmKFwibnVtYmVyXCIhPT1ifHxhLm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCE9PWEpbnVsbD09Yz9hLmRlZmF1bHRWYWx1ZT1cIlwiK2EuX3dyYXBwZXJTdGF0ZS5pbml0aWFsVmFsdWU6YS5kZWZhdWx0VmFsdWUhPT1cIlwiK2MmJihhLmRlZmF1bHRWYWx1ZT1cIlwiK2MpfXZhciBCYz17Y2hhbmdlOntwaGFzZWRSZWdpc3RyYXRpb25OYW1lczp7YnViYmxlZDpcIm9uQ2hhbmdlXCIsY2FwdHVyZWQ6XCJvbkNoYW5nZUNhcHR1cmVcIn0sZGVwZW5kZW5jaWVzOlwiYmx1ciBjaGFuZ2UgY2xpY2sgZm9jdXMgaW5wdXQga2V5ZG93biBrZXl1cCBzZWxlY3Rpb25jaGFuZ2VcIi5zcGxpdChcIiBcIil9fTtmdW5jdGlvbiBDYyhhLGIsYyl7YT15LmdldFBvb2xlZChCYy5jaGFuZ2UsYSxiLGMpO2EudHlwZT1cImNoYW5nZVwiO0ViKGMpO1FhKGEpO3JldHVybiBhfXZhciBEYz1udWxsLEVjPW51bGw7ZnVuY3Rpb24gRmMoYSl7RGEoYSl9XG5mdW5jdGlvbiBHYyhhKXt2YXIgYj1KYShhKTtpZihTYihiKSlyZXR1cm4gYX1mdW5jdGlvbiBIYyhhLGIpe2lmKFwiY2hhbmdlXCI9PT1hKXJldHVybiBifXZhciBJYz0hMTtSYSYmKEljPU9iKFwiaW5wdXRcIikmJighZG9jdW1lbnQuZG9jdW1lbnRNb2RlfHw5PGRvY3VtZW50LmRvY3VtZW50TW9kZSkpO2Z1bmN0aW9uIEpjKCl7RGMmJihEYy5kZXRhY2hFdmVudChcIm9ucHJvcGVydHljaGFuZ2VcIixLYyksRWM9RGM9bnVsbCl9ZnVuY3Rpb24gS2MoYSl7XCJ2YWx1ZVwiPT09YS5wcm9wZXJ0eU5hbWUmJkdjKEVjKSYmKGE9Q2MoRWMsYSxOYihhKSksS2IoRmMsYSkpfWZ1bmN0aW9uIExjKGEsYixjKXtcImZvY3VzXCI9PT1hPyhKYygpLERjPWIsRWM9YyxEYy5hdHRhY2hFdmVudChcIm9ucHJvcGVydHljaGFuZ2VcIixLYykpOlwiYmx1clwiPT09YSYmSmMoKX1mdW5jdGlvbiBNYyhhKXtpZihcInNlbGVjdGlvbmNoYW5nZVwiPT09YXx8XCJrZXl1cFwiPT09YXx8XCJrZXlkb3duXCI9PT1hKXJldHVybiBHYyhFYyl9XG5mdW5jdGlvbiBOYyhhLGIpe2lmKFwiY2xpY2tcIj09PWEpcmV0dXJuIEdjKGIpfWZ1bmN0aW9uIE9jKGEsYil7aWYoXCJpbnB1dFwiPT09YXx8XCJjaGFuZ2VcIj09PWEpcmV0dXJuIEdjKGIpfVxudmFyIFBjPXtldmVudFR5cGVzOkJjLF9pc0lucHV0RXZlbnRTdXBwb3J0ZWQ6SWMsZXh0cmFjdEV2ZW50czpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1iP0phKGIpOndpbmRvdyxmPXZvaWQgMCxnPXZvaWQgMCxoPWUubm9kZU5hbWUmJmUubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcInNlbGVjdFwiPT09aHx8XCJpbnB1dFwiPT09aCYmXCJmaWxlXCI9PT1lLnR5cGU/Zj1IYzpNYihlKT9JYz9mPU9jOihmPU1jLGc9TGMpOihoPWUubm9kZU5hbWUpJiZcImlucHV0XCI9PT1oLnRvTG93ZXJDYXNlKCkmJihcImNoZWNrYm94XCI9PT1lLnR5cGV8fFwicmFkaW9cIj09PWUudHlwZSkmJihmPU5jKTtpZihmJiYoZj1mKGEsYikpKXJldHVybiBDYyhmLGMsZCk7ZyYmZyhhLGUsYik7XCJibHVyXCI9PT1hJiYoYT1lLl93cmFwcGVyU3RhdGUpJiZhLmNvbnRyb2xsZWQmJlwibnVtYmVyXCI9PT1lLnR5cGUmJnpjKGUsXCJudW1iZXJcIixlLnZhbHVlKX19LFFjPXkuZXh0ZW5kKHt2aWV3Om51bGwsZGV0YWlsOm51bGx9KSxSYz17QWx0OlwiYWx0S2V5XCIsXG5Db250cm9sOlwiY3RybEtleVwiLE1ldGE6XCJtZXRhS2V5XCIsU2hpZnQ6XCJzaGlmdEtleVwifTtmdW5jdGlvbiBTYyhhKXt2YXIgYj10aGlzLm5hdGl2ZUV2ZW50O3JldHVybiBiLmdldE1vZGlmaWVyU3RhdGU/Yi5nZXRNb2RpZmllclN0YXRlKGEpOihhPVJjW2FdKT8hIWJbYV06ITF9ZnVuY3Rpb24gVGMoKXtyZXR1cm4gU2N9XG52YXIgVWM9MCxWYz0wLFdjPSExLFhjPSExLFljPVFjLmV4dGVuZCh7c2NyZWVuWDpudWxsLHNjcmVlblk6bnVsbCxjbGllbnRYOm51bGwsY2xpZW50WTpudWxsLHBhZ2VYOm51bGwscGFnZVk6bnVsbCxjdHJsS2V5Om51bGwsc2hpZnRLZXk6bnVsbCxhbHRLZXk6bnVsbCxtZXRhS2V5Om51bGwsZ2V0TW9kaWZpZXJTdGF0ZTpUYyxidXR0b246bnVsbCxidXR0b25zOm51bGwscmVsYXRlZFRhcmdldDpmdW5jdGlvbihhKXtyZXR1cm4gYS5yZWxhdGVkVGFyZ2V0fHwoYS5mcm9tRWxlbWVudD09PWEuc3JjRWxlbWVudD9hLnRvRWxlbWVudDphLmZyb21FbGVtZW50KX0sbW92ZW1lbnRYOmZ1bmN0aW9uKGEpe2lmKFwibW92ZW1lbnRYXCJpbiBhKXJldHVybiBhLm1vdmVtZW50WDt2YXIgYj1VYztVYz1hLnNjcmVlblg7cmV0dXJuIFdjP1wibW91c2Vtb3ZlXCI9PT1hLnR5cGU/YS5zY3JlZW5YLWI6MDooV2M9ITAsMCl9LG1vdmVtZW50WTpmdW5jdGlvbihhKXtpZihcIm1vdmVtZW50WVwiaW4gYSlyZXR1cm4gYS5tb3ZlbWVudFk7XG52YXIgYj1WYztWYz1hLnNjcmVlblk7cmV0dXJuIFhjP1wibW91c2Vtb3ZlXCI9PT1hLnR5cGU/YS5zY3JlZW5ZLWI6MDooWGM9ITAsMCl9fSksWmM9WWMuZXh0ZW5kKHtwb2ludGVySWQ6bnVsbCx3aWR0aDpudWxsLGhlaWdodDpudWxsLHByZXNzdXJlOm51bGwsdGFuZ2VudGlhbFByZXNzdXJlOm51bGwsdGlsdFg6bnVsbCx0aWx0WTpudWxsLHR3aXN0Om51bGwscG9pbnRlclR5cGU6bnVsbCxpc1ByaW1hcnk6bnVsbH0pLCRjPXttb3VzZUVudGVyOntyZWdpc3RyYXRpb25OYW1lOlwib25Nb3VzZUVudGVyXCIsZGVwZW5kZW5jaWVzOltcIm1vdXNlb3V0XCIsXCJtb3VzZW92ZXJcIl19LG1vdXNlTGVhdmU6e3JlZ2lzdHJhdGlvbk5hbWU6XCJvbk1vdXNlTGVhdmVcIixkZXBlbmRlbmNpZXM6W1wibW91c2VvdXRcIixcIm1vdXNlb3ZlclwiXX0scG9pbnRlckVudGVyOntyZWdpc3RyYXRpb25OYW1lOlwib25Qb2ludGVyRW50ZXJcIixkZXBlbmRlbmNpZXM6W1wicG9pbnRlcm91dFwiLFwicG9pbnRlcm92ZXJcIl19LHBvaW50ZXJMZWF2ZTp7cmVnaXN0cmF0aW9uTmFtZTpcIm9uUG9pbnRlckxlYXZlXCIsXG5kZXBlbmRlbmNpZXM6W1wicG9pbnRlcm91dFwiLFwicG9pbnRlcm92ZXJcIl19fSxhZD17ZXZlbnRUeXBlczokYyxleHRyYWN0RXZlbnRzOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPVwibW91c2VvdmVyXCI9PT1hfHxcInBvaW50ZXJvdmVyXCI9PT1hLGY9XCJtb3VzZW91dFwiPT09YXx8XCJwb2ludGVyb3V0XCI9PT1hO2lmKGUmJihjLnJlbGF0ZWRUYXJnZXR8fGMuZnJvbUVsZW1lbnQpfHwhZiYmIWUpcmV0dXJuIG51bGw7ZT1kLndpbmRvdz09PWQ/ZDooZT1kLm93bmVyRG9jdW1lbnQpP2UuZGVmYXVsdFZpZXd8fGUucGFyZW50V2luZG93OndpbmRvdztmPyhmPWIsYj0oYj1jLnJlbGF0ZWRUYXJnZXR8fGMudG9FbGVtZW50KT9IYShiKTpudWxsKTpmPW51bGw7aWYoZj09PWIpcmV0dXJuIG51bGw7dmFyIGc9dm9pZCAwLGg9dm9pZCAwLGw9dm9pZCAwLGs9dm9pZCAwO2lmKFwibW91c2VvdXRcIj09PWF8fFwibW91c2VvdmVyXCI9PT1hKWc9WWMsaD0kYy5tb3VzZUxlYXZlLGw9JGMubW91c2VFbnRlcixrPVwibW91c2VcIjtcbmVsc2UgaWYoXCJwb2ludGVyb3V0XCI9PT1hfHxcInBvaW50ZXJvdmVyXCI9PT1hKWc9WmMsaD0kYy5wb2ludGVyTGVhdmUsbD0kYy5wb2ludGVyRW50ZXIsaz1cInBvaW50ZXJcIjt2YXIgbT1udWxsPT1mP2U6SmEoZik7ZT1udWxsPT1iP2U6SmEoYik7YT1nLmdldFBvb2xlZChoLGYsYyxkKTthLnR5cGU9aytcImxlYXZlXCI7YS50YXJnZXQ9bTthLnJlbGF0ZWRUYXJnZXQ9ZTtjPWcuZ2V0UG9vbGVkKGwsYixjLGQpO2MudHlwZT1rK1wiZW50ZXJcIjtjLnRhcmdldD1lO2MucmVsYXRlZFRhcmdldD1tO2Q9YjtpZihmJiZkKWE6e2I9ZjtlPWQ7az0wO2ZvcihnPWI7ZztnPUxhKGcpKWsrKztnPTA7Zm9yKGw9ZTtsO2w9TGEobCkpZysrO2Zvcig7MDxrLWc7KWI9TGEoYiksay0tO2Zvcig7MDxnLWs7KWU9TGEoZSksZy0tO2Zvcig7ay0tOyl7aWYoYj09PWV8fGI9PT1lLmFsdGVybmF0ZSlicmVhayBhO2I9TGEoYik7ZT1MYShlKX1iPW51bGx9ZWxzZSBiPW51bGw7ZT1iO2ZvcihiPVtdO2YmJmYhPT1lOyl7az1cbmYuYWx0ZXJuYXRlO2lmKG51bGwhPT1rJiZrPT09ZSlicmVhaztiLnB1c2goZik7Zj1MYShmKX1mb3IoZj1bXTtkJiZkIT09ZTspe2s9ZC5hbHRlcm5hdGU7aWYobnVsbCE9PWsmJms9PT1lKWJyZWFrO2YucHVzaChkKTtkPUxhKGQpfWZvcihkPTA7ZDxiLmxlbmd0aDtkKyspT2EoYltkXSxcImJ1YmJsZWRcIixhKTtmb3IoZD1mLmxlbmd0aDswPGQtLTspT2EoZltkXSxcImNhcHR1cmVkXCIsYyk7cmV0dXJuW2EsY119fTtmdW5jdGlvbiBiZChhLGIpe3JldHVybiBhPT09YiYmKDAhPT1hfHwxL2E9PT0xL2IpfHxhIT09YSYmYiE9PWJ9dmFyIGNkPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5mdW5jdGlvbiBkZChhLGIpe2lmKGJkKGEsYikpcmV0dXJuITA7aWYoXCJvYmplY3RcIiE9PXR5cGVvZiBhfHxudWxsPT09YXx8XCJvYmplY3RcIiE9PXR5cGVvZiBifHxudWxsPT09YilyZXR1cm4hMTt2YXIgYz1PYmplY3Qua2V5cyhhKSxkPU9iamVjdC5rZXlzKGIpO2lmKGMubGVuZ3RoIT09ZC5sZW5ndGgpcmV0dXJuITE7Zm9yKGQ9MDtkPGMubGVuZ3RoO2QrKylpZighY2QuY2FsbChiLGNbZF0pfHwhYmQoYVtjW2RdXSxiW2NbZF1dKSlyZXR1cm4hMTtyZXR1cm4hMH1mdW5jdGlvbiBlZChhKXt2YXIgYj1hO2lmKGEuYWx0ZXJuYXRlKWZvcig7Yi5yZXR1cm47KWI9Yi5yZXR1cm47ZWxzZXtpZigwIT09KGIuZWZmZWN0VGFnJjIpKXJldHVybiAxO2Zvcig7Yi5yZXR1cm47KWlmKGI9Yi5yZXR1cm4sMCE9PShiLmVmZmVjdFRhZyYyKSlyZXR1cm4gMX1yZXR1cm4gMz09PWIudGFnPzI6M31mdW5jdGlvbiBmZChhKXsyIT09ZWQoYSk/eChcIjE4OFwiKTp2b2lkIDB9XG5mdW5jdGlvbiBnZChhKXt2YXIgYj1hLmFsdGVybmF0ZTtpZighYilyZXR1cm4gYj1lZChhKSwzPT09Yj94KFwiMTg4XCIpOnZvaWQgMCwxPT09Yj9udWxsOmE7Zm9yKHZhciBjPWEsZD1iOzspe3ZhciBlPWMucmV0dXJuLGY9ZT9lLmFsdGVybmF0ZTpudWxsO2lmKCFlfHwhZilicmVhaztpZihlLmNoaWxkPT09Zi5jaGlsZCl7Zm9yKHZhciBnPWUuY2hpbGQ7Zzspe2lmKGc9PT1jKXJldHVybiBmZChlKSxhO2lmKGc9PT1kKXJldHVybiBmZChlKSxiO2c9Zy5zaWJsaW5nfXgoXCIxODhcIil9aWYoYy5yZXR1cm4hPT1kLnJldHVybiljPWUsZD1mO2Vsc2V7Zz0hMTtmb3IodmFyIGg9ZS5jaGlsZDtoOyl7aWYoaD09PWMpe2c9ITA7Yz1lO2Q9ZjticmVha31pZihoPT09ZCl7Zz0hMDtkPWU7Yz1mO2JyZWFrfWg9aC5zaWJsaW5nfWlmKCFnKXtmb3IoaD1mLmNoaWxkO2g7KXtpZihoPT09Yyl7Zz0hMDtjPWY7ZD1lO2JyZWFrfWlmKGg9PT1kKXtnPSEwO2Q9ZjtjPWU7YnJlYWt9aD1oLnNpYmxpbmd9Zz9cbnZvaWQgMDp4KFwiMTg5XCIpfX1jLmFsdGVybmF0ZSE9PWQ/eChcIjE5MFwiKTp2b2lkIDB9MyE9PWMudGFnP3goXCIxODhcIik6dm9pZCAwO3JldHVybiBjLnN0YXRlTm9kZS5jdXJyZW50PT09Yz9hOmJ9ZnVuY3Rpb24gaGQoYSl7YT1nZChhKTtpZighYSlyZXR1cm4gbnVsbDtmb3IodmFyIGI9YTs7KXtpZig1PT09Yi50YWd8fDY9PT1iLnRhZylyZXR1cm4gYjtpZihiLmNoaWxkKWIuY2hpbGQucmV0dXJuPWIsYj1iLmNoaWxkO2Vsc2V7aWYoYj09PWEpYnJlYWs7Zm9yKDshYi5zaWJsaW5nOyl7aWYoIWIucmV0dXJufHxiLnJldHVybj09PWEpcmV0dXJuIG51bGw7Yj1iLnJldHVybn1iLnNpYmxpbmcucmV0dXJuPWIucmV0dXJuO2I9Yi5zaWJsaW5nfX1yZXR1cm4gbnVsbH1cbnZhciBpZD15LmV4dGVuZCh7YW5pbWF0aW9uTmFtZTpudWxsLGVsYXBzZWRUaW1lOm51bGwscHNldWRvRWxlbWVudDpudWxsfSksamQ9eS5leHRlbmQoe2NsaXBib2FyZERhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuXCJjbGlwYm9hcmREYXRhXCJpbiBhP2EuY2xpcGJvYXJkRGF0YTp3aW5kb3cuY2xpcGJvYXJkRGF0YX19KSxrZD1RYy5leHRlbmQoe3JlbGF0ZWRUYXJnZXQ6bnVsbH0pO2Z1bmN0aW9uIGxkKGEpe3ZhciBiPWEua2V5Q29kZTtcImNoYXJDb2RlXCJpbiBhPyhhPWEuY2hhckNvZGUsMD09PWEmJjEzPT09YiYmKGE9MTMpKTphPWI7MTA9PT1hJiYoYT0xMyk7cmV0dXJuIDMyPD1hfHwxMz09PWE/YTowfVxudmFyIG1kPXtFc2M6XCJFc2NhcGVcIixTcGFjZWJhcjpcIiBcIixMZWZ0OlwiQXJyb3dMZWZ0XCIsVXA6XCJBcnJvd1VwXCIsUmlnaHQ6XCJBcnJvd1JpZ2h0XCIsRG93bjpcIkFycm93RG93blwiLERlbDpcIkRlbGV0ZVwiLFdpbjpcIk9TXCIsTWVudTpcIkNvbnRleHRNZW51XCIsQXBwczpcIkNvbnRleHRNZW51XCIsU2Nyb2xsOlwiU2Nyb2xsTG9ja1wiLE1velByaW50YWJsZUtleTpcIlVuaWRlbnRpZmllZFwifSxuZD17ODpcIkJhY2tzcGFjZVwiLDk6XCJUYWJcIiwxMjpcIkNsZWFyXCIsMTM6XCJFbnRlclwiLDE2OlwiU2hpZnRcIiwxNzpcIkNvbnRyb2xcIiwxODpcIkFsdFwiLDE5OlwiUGF1c2VcIiwyMDpcIkNhcHNMb2NrXCIsMjc6XCJFc2NhcGVcIiwzMjpcIiBcIiwzMzpcIlBhZ2VVcFwiLDM0OlwiUGFnZURvd25cIiwzNTpcIkVuZFwiLDM2OlwiSG9tZVwiLDM3OlwiQXJyb3dMZWZ0XCIsMzg6XCJBcnJvd1VwXCIsMzk6XCJBcnJvd1JpZ2h0XCIsNDA6XCJBcnJvd0Rvd25cIiw0NTpcIkluc2VydFwiLDQ2OlwiRGVsZXRlXCIsMTEyOlwiRjFcIiwxMTM6XCJGMlwiLDExNDpcIkYzXCIsMTE1OlwiRjRcIixcbjExNjpcIkY1XCIsMTE3OlwiRjZcIiwxMTg6XCJGN1wiLDExOTpcIkY4XCIsMTIwOlwiRjlcIiwxMjE6XCJGMTBcIiwxMjI6XCJGMTFcIiwxMjM6XCJGMTJcIiwxNDQ6XCJOdW1Mb2NrXCIsMTQ1OlwiU2Nyb2xsTG9ja1wiLDIyNDpcIk1ldGFcIn0sb2Q9UWMuZXh0ZW5kKHtrZXk6ZnVuY3Rpb24oYSl7aWYoYS5rZXkpe3ZhciBiPW1kW2Eua2V5XXx8YS5rZXk7aWYoXCJVbmlkZW50aWZpZWRcIiE9PWIpcmV0dXJuIGJ9cmV0dXJuXCJrZXlwcmVzc1wiPT09YS50eXBlPyhhPWxkKGEpLDEzPT09YT9cIkVudGVyXCI6U3RyaW5nLmZyb21DaGFyQ29kZShhKSk6XCJrZXlkb3duXCI9PT1hLnR5cGV8fFwia2V5dXBcIj09PWEudHlwZT9uZFthLmtleUNvZGVdfHxcIlVuaWRlbnRpZmllZFwiOlwiXCJ9LGxvY2F0aW9uOm51bGwsY3RybEtleTpudWxsLHNoaWZ0S2V5Om51bGwsYWx0S2V5Om51bGwsbWV0YUtleTpudWxsLHJlcGVhdDpudWxsLGxvY2FsZTpudWxsLGdldE1vZGlmaWVyU3RhdGU6VGMsY2hhckNvZGU6ZnVuY3Rpb24oYSl7cmV0dXJuXCJrZXlwcmVzc1wiPT09XG5hLnR5cGU/bGQoYSk6MH0sa2V5Q29kZTpmdW5jdGlvbihhKXtyZXR1cm5cImtleWRvd25cIj09PWEudHlwZXx8XCJrZXl1cFwiPT09YS50eXBlP2Eua2V5Q29kZTowfSx3aGljaDpmdW5jdGlvbihhKXtyZXR1cm5cImtleXByZXNzXCI9PT1hLnR5cGU/bGQoYSk6XCJrZXlkb3duXCI9PT1hLnR5cGV8fFwia2V5dXBcIj09PWEudHlwZT9hLmtleUNvZGU6MH19KSxwZD1ZYy5leHRlbmQoe2RhdGFUcmFuc2ZlcjpudWxsfSkscWQ9UWMuZXh0ZW5kKHt0b3VjaGVzOm51bGwsdGFyZ2V0VG91Y2hlczpudWxsLGNoYW5nZWRUb3VjaGVzOm51bGwsYWx0S2V5Om51bGwsbWV0YUtleTpudWxsLGN0cmxLZXk6bnVsbCxzaGlmdEtleTpudWxsLGdldE1vZGlmaWVyU3RhdGU6VGN9KSxyZD15LmV4dGVuZCh7cHJvcGVydHlOYW1lOm51bGwsZWxhcHNlZFRpbWU6bnVsbCxwc2V1ZG9FbGVtZW50Om51bGx9KSxzZD1ZYy5leHRlbmQoe2RlbHRhWDpmdW5jdGlvbihhKXtyZXR1cm5cImRlbHRhWFwiaW4gYT9hLmRlbHRhWDpcIndoZWVsRGVsdGFYXCJpblxuYT8tYS53aGVlbERlbHRhWDowfSxkZWx0YVk6ZnVuY3Rpb24oYSl7cmV0dXJuXCJkZWx0YVlcImluIGE/YS5kZWx0YVk6XCJ3aGVlbERlbHRhWVwiaW4gYT8tYS53aGVlbERlbHRhWTpcIndoZWVsRGVsdGFcImluIGE/LWEud2hlZWxEZWx0YTowfSxkZWx0YVo6bnVsbCxkZWx0YU1vZGU6bnVsbH0pLHRkPVtbXCJhYm9ydFwiLFwiYWJvcnRcIl0sW1hhLFwiYW5pbWF0aW9uRW5kXCJdLFtZYSxcImFuaW1hdGlvbkl0ZXJhdGlvblwiXSxbWmEsXCJhbmltYXRpb25TdGFydFwiXSxbXCJjYW5wbGF5XCIsXCJjYW5QbGF5XCJdLFtcImNhbnBsYXl0aHJvdWdoXCIsXCJjYW5QbGF5VGhyb3VnaFwiXSxbXCJkcmFnXCIsXCJkcmFnXCJdLFtcImRyYWdlbnRlclwiLFwiZHJhZ0VudGVyXCJdLFtcImRyYWdleGl0XCIsXCJkcmFnRXhpdFwiXSxbXCJkcmFnbGVhdmVcIixcImRyYWdMZWF2ZVwiXSxbXCJkcmFnb3ZlclwiLFwiZHJhZ092ZXJcIl0sW1wiZHVyYXRpb25jaGFuZ2VcIixcImR1cmF0aW9uQ2hhbmdlXCJdLFtcImVtcHRpZWRcIixcImVtcHRpZWRcIl0sW1wiZW5jcnlwdGVkXCIsXCJlbmNyeXB0ZWRcIl0sXG5bXCJlbmRlZFwiLFwiZW5kZWRcIl0sW1wiZXJyb3JcIixcImVycm9yXCJdLFtcImdvdHBvaW50ZXJjYXB0dXJlXCIsXCJnb3RQb2ludGVyQ2FwdHVyZVwiXSxbXCJsb2FkXCIsXCJsb2FkXCJdLFtcImxvYWRlZGRhdGFcIixcImxvYWRlZERhdGFcIl0sW1wibG9hZGVkbWV0YWRhdGFcIixcImxvYWRlZE1ldGFkYXRhXCJdLFtcImxvYWRzdGFydFwiLFwibG9hZFN0YXJ0XCJdLFtcImxvc3Rwb2ludGVyY2FwdHVyZVwiLFwibG9zdFBvaW50ZXJDYXB0dXJlXCJdLFtcIm1vdXNlbW92ZVwiLFwibW91c2VNb3ZlXCJdLFtcIm1vdXNlb3V0XCIsXCJtb3VzZU91dFwiXSxbXCJtb3VzZW92ZXJcIixcIm1vdXNlT3ZlclwiXSxbXCJwbGF5aW5nXCIsXCJwbGF5aW5nXCJdLFtcInBvaW50ZXJtb3ZlXCIsXCJwb2ludGVyTW92ZVwiXSxbXCJwb2ludGVyb3V0XCIsXCJwb2ludGVyT3V0XCJdLFtcInBvaW50ZXJvdmVyXCIsXCJwb2ludGVyT3ZlclwiXSxbXCJwcm9ncmVzc1wiLFwicHJvZ3Jlc3NcIl0sW1wic2Nyb2xsXCIsXCJzY3JvbGxcIl0sW1wic2Vla2luZ1wiLFwic2Vla2luZ1wiXSxbXCJzdGFsbGVkXCIsXCJzdGFsbGVkXCJdLFxuW1wic3VzcGVuZFwiLFwic3VzcGVuZFwiXSxbXCJ0aW1ldXBkYXRlXCIsXCJ0aW1lVXBkYXRlXCJdLFtcInRvZ2dsZVwiLFwidG9nZ2xlXCJdLFtcInRvdWNobW92ZVwiLFwidG91Y2hNb3ZlXCJdLFskYSxcInRyYW5zaXRpb25FbmRcIl0sW1wid2FpdGluZ1wiLFwid2FpdGluZ1wiXSxbXCJ3aGVlbFwiLFwid2hlZWxcIl1dLHVkPXt9LHZkPXt9O2Z1bmN0aW9uIHdkKGEsYil7dmFyIGM9YVswXTthPWFbMV07dmFyIGQ9XCJvblwiKyhhWzBdLnRvVXBwZXJDYXNlKCkrYS5zbGljZSgxKSk7Yj17cGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6e2J1YmJsZWQ6ZCxjYXB0dXJlZDpkK1wiQ2FwdHVyZVwifSxkZXBlbmRlbmNpZXM6W2NdLGlzSW50ZXJhY3RpdmU6Yn07dWRbYV09Yjt2ZFtjXT1ifVxuW1tcImJsdXJcIixcImJsdXJcIl0sW1wiY2FuY2VsXCIsXCJjYW5jZWxcIl0sW1wiY2xpY2tcIixcImNsaWNrXCJdLFtcImNsb3NlXCIsXCJjbG9zZVwiXSxbXCJjb250ZXh0bWVudVwiLFwiY29udGV4dE1lbnVcIl0sW1wiY29weVwiLFwiY29weVwiXSxbXCJjdXRcIixcImN1dFwiXSxbXCJhdXhjbGlja1wiLFwiYXV4Q2xpY2tcIl0sW1wiZGJsY2xpY2tcIixcImRvdWJsZUNsaWNrXCJdLFtcImRyYWdlbmRcIixcImRyYWdFbmRcIl0sW1wiZHJhZ3N0YXJ0XCIsXCJkcmFnU3RhcnRcIl0sW1wiZHJvcFwiLFwiZHJvcFwiXSxbXCJmb2N1c1wiLFwiZm9jdXNcIl0sW1wiaW5wdXRcIixcImlucHV0XCJdLFtcImludmFsaWRcIixcImludmFsaWRcIl0sW1wia2V5ZG93blwiLFwia2V5RG93blwiXSxbXCJrZXlwcmVzc1wiLFwia2V5UHJlc3NcIl0sW1wia2V5dXBcIixcImtleVVwXCJdLFtcIm1vdXNlZG93blwiLFwibW91c2VEb3duXCJdLFtcIm1vdXNldXBcIixcIm1vdXNlVXBcIl0sW1wicGFzdGVcIixcInBhc3RlXCJdLFtcInBhdXNlXCIsXCJwYXVzZVwiXSxbXCJwbGF5XCIsXCJwbGF5XCJdLFtcInBvaW50ZXJjYW5jZWxcIixcInBvaW50ZXJDYW5jZWxcIl0sXG5bXCJwb2ludGVyZG93blwiLFwicG9pbnRlckRvd25cIl0sW1wicG9pbnRlcnVwXCIsXCJwb2ludGVyVXBcIl0sW1wicmF0ZWNoYW5nZVwiLFwicmF0ZUNoYW5nZVwiXSxbXCJyZXNldFwiLFwicmVzZXRcIl0sW1wic2Vla2VkXCIsXCJzZWVrZWRcIl0sW1wic3VibWl0XCIsXCJzdWJtaXRcIl0sW1widG91Y2hjYW5jZWxcIixcInRvdWNoQ2FuY2VsXCJdLFtcInRvdWNoZW5kXCIsXCJ0b3VjaEVuZFwiXSxbXCJ0b3VjaHN0YXJ0XCIsXCJ0b3VjaFN0YXJ0XCJdLFtcInZvbHVtZWNoYW5nZVwiLFwidm9sdW1lQ2hhbmdlXCJdXS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3dkKGEsITApfSk7dGQuZm9yRWFjaChmdW5jdGlvbihhKXt3ZChhLCExKX0pO1xudmFyIHhkPXtldmVudFR5cGVzOnVkLGlzSW50ZXJhY3RpdmVUb3BMZXZlbEV2ZW50VHlwZTpmdW5jdGlvbihhKXthPXZkW2FdO3JldHVybiB2b2lkIDAhPT1hJiYhMD09PWEuaXNJbnRlcmFjdGl2ZX0sZXh0cmFjdEV2ZW50czpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT12ZFthXTtpZighZSlyZXR1cm4gbnVsbDtzd2l0Y2goYSl7Y2FzZSBcImtleXByZXNzXCI6aWYoMD09PWxkKGMpKXJldHVybiBudWxsO2Nhc2UgXCJrZXlkb3duXCI6Y2FzZSBcImtleXVwXCI6YT1vZDticmVhaztjYXNlIFwiYmx1clwiOmNhc2UgXCJmb2N1c1wiOmE9a2Q7YnJlYWs7Y2FzZSBcImNsaWNrXCI6aWYoMj09PWMuYnV0dG9uKXJldHVybiBudWxsO2Nhc2UgXCJhdXhjbGlja1wiOmNhc2UgXCJkYmxjbGlja1wiOmNhc2UgXCJtb3VzZWRvd25cIjpjYXNlIFwibW91c2Vtb3ZlXCI6Y2FzZSBcIm1vdXNldXBcIjpjYXNlIFwibW91c2VvdXRcIjpjYXNlIFwibW91c2VvdmVyXCI6Y2FzZSBcImNvbnRleHRtZW51XCI6YT1ZYzticmVhaztjYXNlIFwiZHJhZ1wiOmNhc2UgXCJkcmFnZW5kXCI6Y2FzZSBcImRyYWdlbnRlclwiOmNhc2UgXCJkcmFnZXhpdFwiOmNhc2UgXCJkcmFnbGVhdmVcIjpjYXNlIFwiZHJhZ292ZXJcIjpjYXNlIFwiZHJhZ3N0YXJ0XCI6Y2FzZSBcImRyb3BcIjphPVxucGQ7YnJlYWs7Y2FzZSBcInRvdWNoY2FuY2VsXCI6Y2FzZSBcInRvdWNoZW5kXCI6Y2FzZSBcInRvdWNobW92ZVwiOmNhc2UgXCJ0b3VjaHN0YXJ0XCI6YT1xZDticmVhaztjYXNlIFhhOmNhc2UgWWE6Y2FzZSBaYTphPWlkO2JyZWFrO2Nhc2UgJGE6YT1yZDticmVhaztjYXNlIFwic2Nyb2xsXCI6YT1RYzticmVhaztjYXNlIFwid2hlZWxcIjphPXNkO2JyZWFrO2Nhc2UgXCJjb3B5XCI6Y2FzZSBcImN1dFwiOmNhc2UgXCJwYXN0ZVwiOmE9amQ7YnJlYWs7Y2FzZSBcImdvdHBvaW50ZXJjYXB0dXJlXCI6Y2FzZSBcImxvc3Rwb2ludGVyY2FwdHVyZVwiOmNhc2UgXCJwb2ludGVyY2FuY2VsXCI6Y2FzZSBcInBvaW50ZXJkb3duXCI6Y2FzZSBcInBvaW50ZXJtb3ZlXCI6Y2FzZSBcInBvaW50ZXJvdXRcIjpjYXNlIFwicG9pbnRlcm92ZXJcIjpjYXNlIFwicG9pbnRlcnVwXCI6YT1aYzticmVhaztkZWZhdWx0OmE9eX1iPWEuZ2V0UG9vbGVkKGUsYixjLGQpO1FhKGIpO3JldHVybiBifX0seWQ9eGQuaXNJbnRlcmFjdGl2ZVRvcExldmVsRXZlbnRUeXBlLFxuemQ9W107ZnVuY3Rpb24gQWQoYSl7dmFyIGI9YS50YXJnZXRJbnN0LGM9Yjtkb3tpZighYyl7YS5hbmNlc3RvcnMucHVzaChjKTticmVha312YXIgZDtmb3IoZD1jO2QucmV0dXJuOylkPWQucmV0dXJuO2Q9MyE9PWQudGFnP251bGw6ZC5zdGF0ZU5vZGUuY29udGFpbmVySW5mbztpZighZClicmVhazthLmFuY2VzdG9ycy5wdXNoKGMpO2M9SGEoZCl9d2hpbGUoYyk7Zm9yKGM9MDtjPGEuYW5jZXN0b3JzLmxlbmd0aDtjKyspe2I9YS5hbmNlc3RvcnNbY107dmFyIGU9TmIoYS5uYXRpdmVFdmVudCk7ZD1hLnRvcExldmVsVHlwZTtmb3IodmFyIGY9YS5uYXRpdmVFdmVudCxnPW51bGwsaD0wO2g8b2EubGVuZ3RoO2grKyl7dmFyIGw9b2FbaF07bCYmKGw9bC5leHRyYWN0RXZlbnRzKGQsYixmLGUpKSYmKGc9eGEoZyxsKSl9RGEoZyl9fXZhciBCZD0hMDtcbmZ1bmN0aW9uIEUoYSxiKXtpZighYilyZXR1cm4gbnVsbDt2YXIgYz0oeWQoYSk/Q2Q6RGQpLmJpbmQobnVsbCxhKTtiLmFkZEV2ZW50TGlzdGVuZXIoYSxjLCExKX1mdW5jdGlvbiBFZChhLGIpe2lmKCFiKXJldHVybiBudWxsO3ZhciBjPSh5ZChhKT9DZDpEZCkuYmluZChudWxsLGEpO2IuYWRkRXZlbnRMaXN0ZW5lcihhLGMsITApfWZ1bmN0aW9uIENkKGEsYil7SGIoRGQsYSxiKX1cbmZ1bmN0aW9uIERkKGEsYil7aWYoQmQpe3ZhciBjPU5iKGIpO2M9SGEoYyk7bnVsbD09PWN8fFwibnVtYmVyXCIhPT10eXBlb2YgYy50YWd8fDI9PT1lZChjKXx8KGM9bnVsbCk7aWYoemQubGVuZ3RoKXt2YXIgZD16ZC5wb3AoKTtkLnRvcExldmVsVHlwZT1hO2QubmF0aXZlRXZlbnQ9YjtkLnRhcmdldEluc3Q9YzthPWR9ZWxzZSBhPXt0b3BMZXZlbFR5cGU6YSxuYXRpdmVFdmVudDpiLHRhcmdldEluc3Q6YyxhbmNlc3RvcnM6W119O3RyeXtLYihBZCxhKX1maW5hbGx5e2EudG9wTGV2ZWxUeXBlPW51bGwsYS5uYXRpdmVFdmVudD1udWxsLGEudGFyZ2V0SW5zdD1udWxsLGEuYW5jZXN0b3JzLmxlbmd0aD0wLDEwPnpkLmxlbmd0aCYmemQucHVzaChhKX19fXZhciBGZD17fSxHZD0wLEhkPVwiX3JlYWN0TGlzdGVuZXJzSURcIisoXCJcIitNYXRoLnJhbmRvbSgpKS5zbGljZSgyKTtcbmZ1bmN0aW9uIElkKGEpe09iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhLEhkKXx8KGFbSGRdPUdkKyssRmRbYVtIZF1dPXt9KTtyZXR1cm4gRmRbYVtIZF1dfWZ1bmN0aW9uIEpkKGEpe2E9YXx8KFwidW5kZWZpbmVkXCIhPT10eXBlb2YgZG9jdW1lbnQ/ZG9jdW1lbnQ6dm9pZCAwKTtpZihcInVuZGVmaW5lZFwiPT09dHlwZW9mIGEpcmV0dXJuIG51bGw7dHJ5e3JldHVybiBhLmFjdGl2ZUVsZW1lbnR8fGEuYm9keX1jYXRjaChiKXtyZXR1cm4gYS5ib2R5fX1mdW5jdGlvbiBLZChhKXtmb3IoO2EmJmEuZmlyc3RDaGlsZDspYT1hLmZpcnN0Q2hpbGQ7cmV0dXJuIGF9XG5mdW5jdGlvbiBMZChhLGIpe3ZhciBjPUtkKGEpO2E9MDtmb3IodmFyIGQ7Yzspe2lmKDM9PT1jLm5vZGVUeXBlKXtkPWErYy50ZXh0Q29udGVudC5sZW5ndGg7aWYoYTw9YiYmZD49YilyZXR1cm57bm9kZTpjLG9mZnNldDpiLWF9O2E9ZH1hOntmb3IoO2M7KXtpZihjLm5leHRTaWJsaW5nKXtjPWMubmV4dFNpYmxpbmc7YnJlYWsgYX1jPWMucGFyZW50Tm9kZX1jPXZvaWQgMH1jPUtkKGMpfX1mdW5jdGlvbiBNZChhLGIpe3JldHVybiBhJiZiP2E9PT1iPyEwOmEmJjM9PT1hLm5vZGVUeXBlPyExOmImJjM9PT1iLm5vZGVUeXBlP01kKGEsYi5wYXJlbnROb2RlKTpcImNvbnRhaW5zXCJpbiBhP2EuY29udGFpbnMoYik6YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbj8hIShhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGIpJjE2KTohMTohMX1cbmZ1bmN0aW9uIE5kKCl7Zm9yKHZhciBhPXdpbmRvdyxiPUpkKCk7YiBpbnN0YW5jZW9mIGEuSFRNTElGcmFtZUVsZW1lbnQ7KXt0cnl7dmFyIGM9XCJzdHJpbmdcIj09PXR5cGVvZiBiLmNvbnRlbnRXaW5kb3cubG9jYXRpb24uaHJlZn1jYXRjaChkKXtjPSExfWlmKGMpYT1iLmNvbnRlbnRXaW5kb3c7ZWxzZSBicmVhaztiPUpkKGEuZG9jdW1lbnQpfXJldHVybiBifWZ1bmN0aW9uIE9kKGEpe3ZhciBiPWEmJmEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtyZXR1cm4gYiYmKFwiaW5wdXRcIj09PWImJihcInRleHRcIj09PWEudHlwZXx8XCJzZWFyY2hcIj09PWEudHlwZXx8XCJ0ZWxcIj09PWEudHlwZXx8XCJ1cmxcIj09PWEudHlwZXx8XCJwYXNzd29yZFwiPT09YS50eXBlKXx8XCJ0ZXh0YXJlYVwiPT09Ynx8XCJ0cnVlXCI9PT1hLmNvbnRlbnRFZGl0YWJsZSl9XG5mdW5jdGlvbiBQZCgpe3ZhciBhPU5kKCk7aWYoT2QoYSkpe2lmKFwic2VsZWN0aW9uU3RhcnRcImluIGEpdmFyIGI9e3N0YXJ0OmEuc2VsZWN0aW9uU3RhcnQsZW5kOmEuc2VsZWN0aW9uRW5kfTtlbHNlIGE6e2I9KGI9YS5vd25lckRvY3VtZW50KSYmYi5kZWZhdWx0Vmlld3x8d2luZG93O3ZhciBjPWIuZ2V0U2VsZWN0aW9uJiZiLmdldFNlbGVjdGlvbigpO2lmKGMmJjAhPT1jLnJhbmdlQ291bnQpe2I9Yy5hbmNob3JOb2RlO3ZhciBkPWMuYW5jaG9yT2Zmc2V0LGU9Yy5mb2N1c05vZGU7Yz1jLmZvY3VzT2Zmc2V0O3RyeXtiLm5vZGVUeXBlLGUubm9kZVR5cGV9Y2F0Y2goQSl7Yj1udWxsO2JyZWFrIGF9dmFyIGY9MCxnPS0xLGg9LTEsbD0wLGs9MCxtPWEscD1udWxsO2I6Zm9yKDs7KXtmb3IodmFyIHQ7Oyl7bSE9PWJ8fDAhPT1kJiYzIT09bS5ub2RlVHlwZXx8KGc9ZitkKTttIT09ZXx8MCE9PWMmJjMhPT1tLm5vZGVUeXBlfHwoaD1mK2MpOzM9PT1tLm5vZGVUeXBlJiYoZis9bS5ub2RlVmFsdWUubGVuZ3RoKTtcbmlmKG51bGw9PT0odD1tLmZpcnN0Q2hpbGQpKWJyZWFrO3A9bTttPXR9Zm9yKDs7KXtpZihtPT09YSlicmVhayBiO3A9PT1iJiYrK2w9PT1kJiYoZz1mKTtwPT09ZSYmKytrPT09YyYmKGg9Zik7aWYobnVsbCE9PSh0PW0ubmV4dFNpYmxpbmcpKWJyZWFrO209cDtwPW0ucGFyZW50Tm9kZX1tPXR9Yj0tMT09PWd8fC0xPT09aD9udWxsOntzdGFydDpnLGVuZDpofX1lbHNlIGI9bnVsbH1iPWJ8fHtzdGFydDowLGVuZDowfX1lbHNlIGI9bnVsbDtyZXR1cm57Zm9jdXNlZEVsZW06YSxzZWxlY3Rpb25SYW5nZTpifX1cbmZ1bmN0aW9uIFFkKGEpe3ZhciBiPU5kKCksYz1hLmZvY3VzZWRFbGVtLGQ9YS5zZWxlY3Rpb25SYW5nZTtpZihiIT09YyYmYyYmYy5vd25lckRvY3VtZW50JiZNZChjLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LGMpKXtpZihudWxsIT09ZCYmT2QoYykpaWYoYj1kLnN0YXJ0LGE9ZC5lbmQsdm9pZCAwPT09YSYmKGE9YiksXCJzZWxlY3Rpb25TdGFydFwiaW4gYyljLnNlbGVjdGlvblN0YXJ0PWIsYy5zZWxlY3Rpb25FbmQ9TWF0aC5taW4oYSxjLnZhbHVlLmxlbmd0aCk7ZWxzZSBpZihhPShiPWMub3duZXJEb2N1bWVudHx8ZG9jdW1lbnQpJiZiLmRlZmF1bHRWaWV3fHx3aW5kb3csYS5nZXRTZWxlY3Rpb24pe2E9YS5nZXRTZWxlY3Rpb24oKTt2YXIgZT1jLnRleHRDb250ZW50Lmxlbmd0aCxmPU1hdGgubWluKGQuc3RhcnQsZSk7ZD12b2lkIDA9PT1kLmVuZD9mOk1hdGgubWluKGQuZW5kLGUpOyFhLmV4dGVuZCYmZj5kJiYoZT1kLGQ9ZixmPWUpO2U9TGQoYyxmKTt2YXIgZz1MZChjLFxuZCk7ZSYmZyYmKDEhPT1hLnJhbmdlQ291bnR8fGEuYW5jaG9yTm9kZSE9PWUubm9kZXx8YS5hbmNob3JPZmZzZXQhPT1lLm9mZnNldHx8YS5mb2N1c05vZGUhPT1nLm5vZGV8fGEuZm9jdXNPZmZzZXQhPT1nLm9mZnNldCkmJihiPWIuY3JlYXRlUmFuZ2UoKSxiLnNldFN0YXJ0KGUubm9kZSxlLm9mZnNldCksYS5yZW1vdmVBbGxSYW5nZXMoKSxmPmQ/KGEuYWRkUmFuZ2UoYiksYS5leHRlbmQoZy5ub2RlLGcub2Zmc2V0KSk6KGIuc2V0RW5kKGcubm9kZSxnLm9mZnNldCksYS5hZGRSYW5nZShiKSkpfWI9W107Zm9yKGE9YzthPWEucGFyZW50Tm9kZTspMT09PWEubm9kZVR5cGUmJmIucHVzaCh7ZWxlbWVudDphLGxlZnQ6YS5zY3JvbGxMZWZ0LHRvcDphLnNjcm9sbFRvcH0pO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBjLmZvY3VzJiZjLmZvY3VzKCk7Zm9yKGM9MDtjPGIubGVuZ3RoO2MrKylhPWJbY10sYS5lbGVtZW50LnNjcm9sbExlZnQ9YS5sZWZ0LGEuZWxlbWVudC5zY3JvbGxUb3A9YS50b3B9fVxudmFyIFJkPVJhJiZcImRvY3VtZW50TW9kZVwiaW4gZG9jdW1lbnQmJjExPj1kb2N1bWVudC5kb2N1bWVudE1vZGUsU2Q9e3NlbGVjdDp7cGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6e2J1YmJsZWQ6XCJvblNlbGVjdFwiLGNhcHR1cmVkOlwib25TZWxlY3RDYXB0dXJlXCJ9LGRlcGVuZGVuY2llczpcImJsdXIgY29udGV4dG1lbnUgZHJhZ2VuZCBmb2N1cyBrZXlkb3duIGtleXVwIG1vdXNlZG93biBtb3VzZXVwIHNlbGVjdGlvbmNoYW5nZVwiLnNwbGl0KFwiIFwiKX19LFRkPW51bGwsVWQ9bnVsbCxWZD1udWxsLFdkPSExO1xuZnVuY3Rpb24gWGQoYSxiKXt2YXIgYz1iLndpbmRvdz09PWI/Yi5kb2N1bWVudDo5PT09Yi5ub2RlVHlwZT9iOmIub3duZXJEb2N1bWVudDtpZihXZHx8bnVsbD09VGR8fFRkIT09SmQoYykpcmV0dXJuIG51bGw7Yz1UZDtcInNlbGVjdGlvblN0YXJ0XCJpbiBjJiZPZChjKT9jPXtzdGFydDpjLnNlbGVjdGlvblN0YXJ0LGVuZDpjLnNlbGVjdGlvbkVuZH06KGM9KGMub3duZXJEb2N1bWVudCYmYy5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3fHx3aW5kb3cpLmdldFNlbGVjdGlvbigpLGM9e2FuY2hvck5vZGU6Yy5hbmNob3JOb2RlLGFuY2hvck9mZnNldDpjLmFuY2hvck9mZnNldCxmb2N1c05vZGU6Yy5mb2N1c05vZGUsZm9jdXNPZmZzZXQ6Yy5mb2N1c09mZnNldH0pO3JldHVybiBWZCYmZGQoVmQsYyk/bnVsbDooVmQ9YyxhPXkuZ2V0UG9vbGVkKFNkLnNlbGVjdCxVZCxhLGIpLGEudHlwZT1cInNlbGVjdFwiLGEudGFyZ2V0PVRkLFFhKGEpLGEpfVxudmFyIFlkPXtldmVudFR5cGVzOlNkLGV4dHJhY3RFdmVudHM6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9ZC53aW5kb3c9PT1kP2QuZG9jdW1lbnQ6OT09PWQubm9kZVR5cGU/ZDpkLm93bmVyRG9jdW1lbnQsZjtpZighKGY9IWUpKXthOntlPUlkKGUpO2Y9c2Eub25TZWxlY3Q7Zm9yKHZhciBnPTA7ZzxmLmxlbmd0aDtnKyspe3ZhciBoPWZbZ107aWYoIWUuaGFzT3duUHJvcGVydHkoaCl8fCFlW2hdKXtlPSExO2JyZWFrIGF9fWU9ITB9Zj0hZX1pZihmKXJldHVybiBudWxsO2U9Yj9KYShiKTp3aW5kb3c7c3dpdGNoKGEpe2Nhc2UgXCJmb2N1c1wiOmlmKE1iKGUpfHxcInRydWVcIj09PWUuY29udGVudEVkaXRhYmxlKVRkPWUsVWQ9YixWZD1udWxsO2JyZWFrO2Nhc2UgXCJibHVyXCI6VmQ9VWQ9VGQ9bnVsbDticmVhaztjYXNlIFwibW91c2Vkb3duXCI6V2Q9ITA7YnJlYWs7Y2FzZSBcImNvbnRleHRtZW51XCI6Y2FzZSBcIm1vdXNldXBcIjpjYXNlIFwiZHJhZ2VuZFwiOnJldHVybiBXZD0hMSxYZChjLGQpO2Nhc2UgXCJzZWxlY3Rpb25jaGFuZ2VcIjppZihSZClicmVhaztcbmNhc2UgXCJrZXlkb3duXCI6Y2FzZSBcImtleXVwXCI6cmV0dXJuIFhkKGMsZCl9cmV0dXJuIG51bGx9fTtCYS5pbmplY3RFdmVudFBsdWdpbk9yZGVyKFwiUmVzcG9uZGVyRXZlbnRQbHVnaW4gU2ltcGxlRXZlbnRQbHVnaW4gRW50ZXJMZWF2ZUV2ZW50UGx1Z2luIENoYW5nZUV2ZW50UGx1Z2luIFNlbGVjdEV2ZW50UGx1Z2luIEJlZm9yZUlucHV0RXZlbnRQbHVnaW5cIi5zcGxpdChcIiBcIikpO3RhPUthO3VhPUlhO3ZhPUphO0JhLmluamVjdEV2ZW50UGx1Z2luc0J5TmFtZSh7U2ltcGxlRXZlbnRQbHVnaW46eGQsRW50ZXJMZWF2ZUV2ZW50UGx1Z2luOmFkLENoYW5nZUV2ZW50UGx1Z2luOlBjLFNlbGVjdEV2ZW50UGx1Z2luOllkLEJlZm9yZUlucHV0RXZlbnRQbHVnaW46emJ9KTtmdW5jdGlvbiBaZChhKXt2YXIgYj1cIlwiO2FhLkNoaWxkcmVuLmZvckVhY2goYSxmdW5jdGlvbihhKXtudWxsIT1hJiYoYis9YSl9KTtyZXR1cm4gYn1cbmZ1bmN0aW9uICRkKGEsYil7YT1uKHtjaGlsZHJlbjp2b2lkIDB9LGIpO2lmKGI9WmQoYi5jaGlsZHJlbikpYS5jaGlsZHJlbj1iO3JldHVybiBhfWZ1bmN0aW9uIGFlKGEsYixjLGQpe2E9YS5vcHRpb25zO2lmKGIpe2I9e307Zm9yKHZhciBlPTA7ZTxjLmxlbmd0aDtlKyspYltcIiRcIitjW2VdXT0hMDtmb3IoYz0wO2M8YS5sZW5ndGg7YysrKWU9Yi5oYXNPd25Qcm9wZXJ0eShcIiRcIithW2NdLnZhbHVlKSxhW2NdLnNlbGVjdGVkIT09ZSYmKGFbY10uc2VsZWN0ZWQ9ZSksZSYmZCYmKGFbY10uZGVmYXVsdFNlbGVjdGVkPSEwKX1lbHNle2M9XCJcIit1YyhjKTtiPW51bGw7Zm9yKGU9MDtlPGEubGVuZ3RoO2UrKyl7aWYoYVtlXS52YWx1ZT09PWMpe2FbZV0uc2VsZWN0ZWQ9ITA7ZCYmKGFbZV0uZGVmYXVsdFNlbGVjdGVkPSEwKTtyZXR1cm59bnVsbCE9PWJ8fGFbZV0uZGlzYWJsZWR8fChiPWFbZV0pfW51bGwhPT1iJiYoYi5zZWxlY3RlZD0hMCl9fVxuZnVuY3Rpb24gYmUoYSxiKXtudWxsIT1iLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MP3goXCI5MVwiKTp2b2lkIDA7cmV0dXJuIG4oe30sYix7dmFsdWU6dm9pZCAwLGRlZmF1bHRWYWx1ZTp2b2lkIDAsY2hpbGRyZW46XCJcIithLl93cmFwcGVyU3RhdGUuaW5pdGlhbFZhbHVlfSl9ZnVuY3Rpb24gY2UoYSxiKXt2YXIgYz1iLnZhbHVlO251bGw9PWMmJihjPWIuZGVmYXVsdFZhbHVlLGI9Yi5jaGlsZHJlbixudWxsIT1iJiYobnVsbCE9Yz94KFwiOTJcIik6dm9pZCAwLEFycmF5LmlzQXJyYXkoYikmJigxPj1iLmxlbmd0aD92b2lkIDA6eChcIjkzXCIpLGI9YlswXSksYz1iKSxudWxsPT1jJiYoYz1cIlwiKSk7YS5fd3JhcHBlclN0YXRlPXtpbml0aWFsVmFsdWU6dWMoYyl9fVxuZnVuY3Rpb24gZGUoYSxiKXt2YXIgYz11YyhiLnZhbHVlKSxkPXVjKGIuZGVmYXVsdFZhbHVlKTtudWxsIT1jJiYoYz1cIlwiK2MsYyE9PWEudmFsdWUmJihhLnZhbHVlPWMpLG51bGw9PWIuZGVmYXVsdFZhbHVlJiZhLmRlZmF1bHRWYWx1ZSE9PWMmJihhLmRlZmF1bHRWYWx1ZT1jKSk7bnVsbCE9ZCYmKGEuZGVmYXVsdFZhbHVlPVwiXCIrZCl9ZnVuY3Rpb24gZWUoYSl7dmFyIGI9YS50ZXh0Q29udGVudDtiPT09YS5fd3JhcHBlclN0YXRlLmluaXRpYWxWYWx1ZSYmKGEudmFsdWU9Yil9dmFyIGZlPXtodG1sOlwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiLG1hdGhtbDpcImh0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUxcIixzdmc6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wifTtcbmZ1bmN0aW9uIGdlKGEpe3N3aXRjaChhKXtjYXNlIFwic3ZnXCI6cmV0dXJuXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO2Nhc2UgXCJtYXRoXCI6cmV0dXJuXCJodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MXCI7ZGVmYXVsdDpyZXR1cm5cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIn19ZnVuY3Rpb24gaGUoYSxiKXtyZXR1cm4gbnVsbD09YXx8XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCI9PT1hP2dlKGIpOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj09PWEmJlwiZm9yZWlnbk9iamVjdFwiPT09Yj9cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIjphfVxudmFyIGllPXZvaWQgMCxqZT1mdW5jdGlvbihhKXtyZXR1cm5cInVuZGVmaW5lZFwiIT09dHlwZW9mIE1TQXBwJiZNU0FwcC5leGVjVW5zYWZlTG9jYWxGdW5jdGlvbj9mdW5jdGlvbihiLGMsZCxlKXtNU0FwcC5leGVjVW5zYWZlTG9jYWxGdW5jdGlvbihmdW5jdGlvbigpe3JldHVybiBhKGIsYyxkLGUpfSl9OmF9KGZ1bmN0aW9uKGEsYil7aWYoYS5uYW1lc3BhY2VVUkkhPT1mZS5zdmd8fFwiaW5uZXJIVE1MXCJpbiBhKWEuaW5uZXJIVE1MPWI7ZWxzZXtpZT1pZXx8ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtpZS5pbm5lckhUTUw9XCI8c3ZnPlwiK2IrXCI8L3N2Zz5cIjtmb3IoYj1pZS5maXJzdENoaWxkO2EuZmlyc3RDaGlsZDspYS5yZW1vdmVDaGlsZChhLmZpcnN0Q2hpbGQpO2Zvcig7Yi5maXJzdENoaWxkOylhLmFwcGVuZENoaWxkKGIuZmlyc3RDaGlsZCl9fSk7XG5mdW5jdGlvbiBrZShhLGIpe2lmKGIpe3ZhciBjPWEuZmlyc3RDaGlsZDtpZihjJiZjPT09YS5sYXN0Q2hpbGQmJjM9PT1jLm5vZGVUeXBlKXtjLm5vZGVWYWx1ZT1iO3JldHVybn19YS50ZXh0Q29udGVudD1ifVxudmFyIGxlPXthbmltYXRpb25JdGVyYXRpb25Db3VudDohMCxib3JkZXJJbWFnZU91dHNldDohMCxib3JkZXJJbWFnZVNsaWNlOiEwLGJvcmRlckltYWdlV2lkdGg6ITAsYm94RmxleDohMCxib3hGbGV4R3JvdXA6ITAsYm94T3JkaW5hbEdyb3VwOiEwLGNvbHVtbkNvdW50OiEwLGNvbHVtbnM6ITAsZmxleDohMCxmbGV4R3JvdzohMCxmbGV4UG9zaXRpdmU6ITAsZmxleFNocmluazohMCxmbGV4TmVnYXRpdmU6ITAsZmxleE9yZGVyOiEwLGdyaWRBcmVhOiEwLGdyaWRSb3c6ITAsZ3JpZFJvd0VuZDohMCxncmlkUm93U3BhbjohMCxncmlkUm93U3RhcnQ6ITAsZ3JpZENvbHVtbjohMCxncmlkQ29sdW1uRW5kOiEwLGdyaWRDb2x1bW5TcGFuOiEwLGdyaWRDb2x1bW5TdGFydDohMCxmb250V2VpZ2h0OiEwLGxpbmVDbGFtcDohMCxsaW5lSGVpZ2h0OiEwLG9wYWNpdHk6ITAsb3JkZXI6ITAsb3JwaGFuczohMCx0YWJTaXplOiEwLHdpZG93czohMCx6SW5kZXg6ITAsem9vbTohMCxmaWxsT3BhY2l0eTohMCxcbmZsb29kT3BhY2l0eTohMCxzdG9wT3BhY2l0eTohMCxzdHJva2VEYXNoYXJyYXk6ITAsc3Ryb2tlRGFzaG9mZnNldDohMCxzdHJva2VNaXRlcmxpbWl0OiEwLHN0cm9rZU9wYWNpdHk6ITAsc3Ryb2tlV2lkdGg6ITB9LG1lPVtcIldlYmtpdFwiLFwibXNcIixcIk1velwiLFwiT1wiXTtPYmplY3Qua2V5cyhsZSkuZm9yRWFjaChmdW5jdGlvbihhKXttZS5mb3JFYWNoKGZ1bmN0aW9uKGIpe2I9YithLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Euc3Vic3RyaW5nKDEpO2xlW2JdPWxlW2FdfSl9KTtmdW5jdGlvbiBuZShhLGIsYyl7cmV0dXJuIG51bGw9PWJ8fFwiYm9vbGVhblwiPT09dHlwZW9mIGJ8fFwiXCI9PT1iP1wiXCI6Y3x8XCJudW1iZXJcIiE9PXR5cGVvZiBifHwwPT09Ynx8bGUuaGFzT3duUHJvcGVydHkoYSkmJmxlW2FdPyhcIlwiK2IpLnRyaW0oKTpiK1wicHhcIn1cbmZ1bmN0aW9uIG9lKGEsYil7YT1hLnN0eWxlO2Zvcih2YXIgYyBpbiBiKWlmKGIuaGFzT3duUHJvcGVydHkoYykpe3ZhciBkPTA9PT1jLmluZGV4T2YoXCItLVwiKSxlPW5lKGMsYltjXSxkKTtcImZsb2F0XCI9PT1jJiYoYz1cImNzc0Zsb2F0XCIpO2Q/YS5zZXRQcm9wZXJ0eShjLGUpOmFbY109ZX19dmFyIHBlPW4oe21lbnVpdGVtOiEwfSx7YXJlYTohMCxiYXNlOiEwLGJyOiEwLGNvbDohMCxlbWJlZDohMCxocjohMCxpbWc6ITAsaW5wdXQ6ITAsa2V5Z2VuOiEwLGxpbms6ITAsbWV0YTohMCxwYXJhbTohMCxzb3VyY2U6ITAsdHJhY2s6ITAsd2JyOiEwfSk7XG5mdW5jdGlvbiBxZShhLGIpe2ImJihwZVthXSYmKG51bGwhPWIuY2hpbGRyZW58fG51bGwhPWIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw/eChcIjEzN1wiLGEsXCJcIik6dm9pZCAwKSxudWxsIT1iLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MJiYobnVsbCE9Yi5jaGlsZHJlbj94KFwiNjBcIik6dm9pZCAwLFwib2JqZWN0XCI9PT10eXBlb2YgYi5kYW5nZXJvdXNseVNldElubmVySFRNTCYmXCJfX2h0bWxcImluIGIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw/dm9pZCAwOngoXCI2MVwiKSksbnVsbCE9Yi5zdHlsZSYmXCJvYmplY3RcIiE9PXR5cGVvZiBiLnN0eWxlP3goXCI2MlwiLFwiXCIpOnZvaWQgMCl9XG5mdW5jdGlvbiByZShhLGIpe2lmKC0xPT09YS5pbmRleE9mKFwiLVwiKSlyZXR1cm5cInN0cmluZ1wiPT09dHlwZW9mIGIuaXM7c3dpdGNoKGEpe2Nhc2UgXCJhbm5vdGF0aW9uLXhtbFwiOmNhc2UgXCJjb2xvci1wcm9maWxlXCI6Y2FzZSBcImZvbnQtZmFjZVwiOmNhc2UgXCJmb250LWZhY2Utc3JjXCI6Y2FzZSBcImZvbnQtZmFjZS11cmlcIjpjYXNlIFwiZm9udC1mYWNlLWZvcm1hdFwiOmNhc2UgXCJmb250LWZhY2UtbmFtZVwiOmNhc2UgXCJtaXNzaW5nLWdseXBoXCI6cmV0dXJuITE7ZGVmYXVsdDpyZXR1cm4hMH19XG5mdW5jdGlvbiBzZShhLGIpe2E9OT09PWEubm9kZVR5cGV8fDExPT09YS5ub2RlVHlwZT9hOmEub3duZXJEb2N1bWVudDt2YXIgYz1JZChhKTtiPXNhW2JdO2Zvcih2YXIgZD0wO2Q8Yi5sZW5ndGg7ZCsrKXt2YXIgZT1iW2RdO2lmKCFjLmhhc093blByb3BlcnR5KGUpfHwhY1tlXSl7c3dpdGNoKGUpe2Nhc2UgXCJzY3JvbGxcIjpFZChcInNjcm9sbFwiLGEpO2JyZWFrO2Nhc2UgXCJmb2N1c1wiOmNhc2UgXCJibHVyXCI6RWQoXCJmb2N1c1wiLGEpO0VkKFwiYmx1clwiLGEpO2MuYmx1cj0hMDtjLmZvY3VzPSEwO2JyZWFrO2Nhc2UgXCJjYW5jZWxcIjpjYXNlIFwiY2xvc2VcIjpPYihlKSYmRWQoZSxhKTticmVhaztjYXNlIFwiaW52YWxpZFwiOmNhc2UgXCJzdWJtaXRcIjpjYXNlIFwicmVzZXRcIjpicmVhaztkZWZhdWx0Oi0xPT09YWIuaW5kZXhPZihlKSYmRShlLGEpfWNbZV09ITB9fX1mdW5jdGlvbiB0ZSgpe312YXIgdWU9bnVsbCx2ZT1udWxsO1xuZnVuY3Rpb24gd2UoYSxiKXtzd2l0Y2goYSl7Y2FzZSBcImJ1dHRvblwiOmNhc2UgXCJpbnB1dFwiOmNhc2UgXCJzZWxlY3RcIjpjYXNlIFwidGV4dGFyZWFcIjpyZXR1cm4hIWIuYXV0b0ZvY3VzfXJldHVybiExfWZ1bmN0aW9uIHhlKGEsYil7cmV0dXJuXCJ0ZXh0YXJlYVwiPT09YXx8XCJvcHRpb25cIj09PWF8fFwibm9zY3JpcHRcIj09PWF8fFwic3RyaW5nXCI9PT10eXBlb2YgYi5jaGlsZHJlbnx8XCJudW1iZXJcIj09PXR5cGVvZiBiLmNoaWxkcmVufHxcIm9iamVjdFwiPT09dHlwZW9mIGIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwmJm51bGwhPT1iLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MJiZudWxsIT1iLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbH1cbnZhciB5ZT1cImZ1bmN0aW9uXCI9PT10eXBlb2Ygc2V0VGltZW91dD9zZXRUaW1lb3V0OnZvaWQgMCx6ZT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgY2xlYXJUaW1lb3V0P2NsZWFyVGltZW91dDp2b2lkIDAsQWU9ci51bnN0YWJsZV9zY2hlZHVsZUNhbGxiYWNrLEJlPXIudW5zdGFibGVfY2FuY2VsQ2FsbGJhY2s7XG5mdW5jdGlvbiBDZShhLGIsYyxkLGUpe2FbR2FdPWU7XCJpbnB1dFwiPT09YyYmXCJyYWRpb1wiPT09ZS50eXBlJiZudWxsIT1lLm5hbWUmJnhjKGEsZSk7cmUoYyxkKTtkPXJlKGMsZSk7Zm9yKHZhciBmPTA7ZjxiLmxlbmd0aDtmKz0yKXt2YXIgZz1iW2ZdLGg9YltmKzFdO1wic3R5bGVcIj09PWc/b2UoYSxoKTpcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCI9PT1nP2plKGEsaCk6XCJjaGlsZHJlblwiPT09Zz9rZShhLGgpOnRjKGEsZyxoLGQpfXN3aXRjaChjKXtjYXNlIFwiaW5wdXRcIjp5YyhhLGUpO2JyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOmRlKGEsZSk7YnJlYWs7Y2FzZSBcInNlbGVjdFwiOmI9YS5fd3JhcHBlclN0YXRlLndhc011bHRpcGxlLGEuX3dyYXBwZXJTdGF0ZS53YXNNdWx0aXBsZT0hIWUubXVsdGlwbGUsYz1lLnZhbHVlLG51bGwhPWM/YWUoYSwhIWUubXVsdGlwbGUsYywhMSk6YiE9PSEhZS5tdWx0aXBsZSYmKG51bGwhPWUuZGVmYXVsdFZhbHVlP2FlKGEsISFlLm11bHRpcGxlLGUuZGVmYXVsdFZhbHVlLFxuITApOmFlKGEsISFlLm11bHRpcGxlLGUubXVsdGlwbGU/W106XCJcIiwhMSkpfX1mdW5jdGlvbiBEZShhKXtmb3IoYT1hLm5leHRTaWJsaW5nO2EmJjEhPT1hLm5vZGVUeXBlJiYzIT09YS5ub2RlVHlwZTspYT1hLm5leHRTaWJsaW5nO3JldHVybiBhfWZ1bmN0aW9uIEVlKGEpe2ZvcihhPWEuZmlyc3RDaGlsZDthJiYxIT09YS5ub2RlVHlwZSYmMyE9PWEubm9kZVR5cGU7KWE9YS5uZXh0U2libGluZztyZXR1cm4gYX1uZXcgU2V0O3ZhciBGZT1bXSxHZT0tMTtmdW5jdGlvbiBGKGEpezA+R2V8fChhLmN1cnJlbnQ9RmVbR2VdLEZlW0dlXT1udWxsLEdlLS0pfWZ1bmN0aW9uIEcoYSxiKXtHZSsrO0ZlW0dlXT1hLmN1cnJlbnQ7YS5jdXJyZW50PWJ9dmFyIEhlPXt9LEg9e2N1cnJlbnQ6SGV9LEk9e2N1cnJlbnQ6ITF9LEllPUhlO1xuZnVuY3Rpb24gSmUoYSxiKXt2YXIgYz1hLnR5cGUuY29udGV4dFR5cGVzO2lmKCFjKXJldHVybiBIZTt2YXIgZD1hLnN0YXRlTm9kZTtpZihkJiZkLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkVW5tYXNrZWRDaGlsZENvbnRleHQ9PT1iKXJldHVybiBkLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWFza2VkQ2hpbGRDb250ZXh0O3ZhciBlPXt9LGY7Zm9yKGYgaW4gYyllW2ZdPWJbZl07ZCYmKGE9YS5zdGF0ZU5vZGUsYS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZFVubWFza2VkQ2hpbGRDb250ZXh0PWIsYS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1hc2tlZENoaWxkQ29udGV4dD1lKTtyZXR1cm4gZX1mdW5jdGlvbiBKKGEpe2E9YS5jaGlsZENvbnRleHRUeXBlcztyZXR1cm4gbnVsbCE9PWEmJnZvaWQgMCE9PWF9ZnVuY3Rpb24gS2UoYSl7RihJLGEpO0YoSCxhKX1mdW5jdGlvbiBMZShhKXtGKEksYSk7RihILGEpfVxuZnVuY3Rpb24gTWUoYSxiLGMpe0guY3VycmVudCE9PUhlP3goXCIxNjhcIik6dm9pZCAwO0coSCxiLGEpO0coSSxjLGEpfWZ1bmN0aW9uIE5lKGEsYixjKXt2YXIgZD1hLnN0YXRlTm9kZTthPWIuY2hpbGRDb250ZXh0VHlwZXM7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIGQuZ2V0Q2hpbGRDb250ZXh0KXJldHVybiBjO2Q9ZC5nZXRDaGlsZENvbnRleHQoKTtmb3IodmFyIGUgaW4gZCllIGluIGE/dm9pZCAwOngoXCIxMDhcIixpYyhiKXx8XCJVbmtub3duXCIsZSk7cmV0dXJuIG4oe30sYyxkKX1mdW5jdGlvbiBPZShhKXt2YXIgYj1hLnN0YXRlTm9kZTtiPWImJmIuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNZXJnZWRDaGlsZENvbnRleHR8fEhlO0llPUguY3VycmVudDtHKEgsYixhKTtHKEksSS5jdXJyZW50LGEpO3JldHVybiEwfVxuZnVuY3Rpb24gUGUoYSxiLGMpe3ZhciBkPWEuc3RhdGVOb2RlO2Q/dm9pZCAwOngoXCIxNjlcIik7Yz8oYj1OZShhLGIsSWUpLGQuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNZXJnZWRDaGlsZENvbnRleHQ9YixGKEksYSksRihILGEpLEcoSCxiLGEpKTpGKEksYSk7RyhJLGMsYSl9dmFyIFFlPW51bGwsUmU9bnVsbDtmdW5jdGlvbiBTZShhKXtyZXR1cm4gZnVuY3Rpb24oYil7dHJ5e3JldHVybiBhKGIpfWNhdGNoKGMpe319fVxuZnVuY3Rpb24gVGUoYSl7aWYoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pcmV0dXJuITE7dmFyIGI9X19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKGIuaXNEaXNhYmxlZHx8IWIuc3VwcG9ydHNGaWJlcilyZXR1cm4hMDt0cnl7dmFyIGM9Yi5pbmplY3QoYSk7UWU9U2UoZnVuY3Rpb24oYSl7cmV0dXJuIGIub25Db21taXRGaWJlclJvb3QoYyxhKX0pO1JlPVNlKGZ1bmN0aW9uKGEpe3JldHVybiBiLm9uQ29tbWl0RmliZXJVbm1vdW50KGMsYSl9KX1jYXRjaChkKXt9cmV0dXJuITB9XG5mdW5jdGlvbiBVZShhLGIsYyxkKXt0aGlzLnRhZz1hO3RoaXMua2V5PWM7dGhpcy5zaWJsaW5nPXRoaXMuY2hpbGQ9dGhpcy5yZXR1cm49dGhpcy5zdGF0ZU5vZGU9dGhpcy50eXBlPXRoaXMuZWxlbWVudFR5cGU9bnVsbDt0aGlzLmluZGV4PTA7dGhpcy5yZWY9bnVsbDt0aGlzLnBlbmRpbmdQcm9wcz1iO3RoaXMuY29udGV4dERlcGVuZGVuY2llcz10aGlzLm1lbW9pemVkU3RhdGU9dGhpcy51cGRhdGVRdWV1ZT10aGlzLm1lbW9pemVkUHJvcHM9bnVsbDt0aGlzLm1vZGU9ZDt0aGlzLmVmZmVjdFRhZz0wO3RoaXMubGFzdEVmZmVjdD10aGlzLmZpcnN0RWZmZWN0PXRoaXMubmV4dEVmZmVjdD1udWxsO3RoaXMuY2hpbGRFeHBpcmF0aW9uVGltZT10aGlzLmV4cGlyYXRpb25UaW1lPTA7dGhpcy5hbHRlcm5hdGU9bnVsbH1mdW5jdGlvbiBLKGEsYixjLGQpe3JldHVybiBuZXcgVWUoYSxiLGMsZCl9XG5mdW5jdGlvbiBWZShhKXthPWEucHJvdG90eXBlO3JldHVybiEoIWF8fCFhLmlzUmVhY3RDb21wb25lbnQpfWZ1bmN0aW9uIFdlKGEpe2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhKXJldHVybiBWZShhKT8xOjA7aWYodm9pZCAwIT09YSYmbnVsbCE9PWEpe2E9YS4kJHR5cGVvZjtpZihhPT09Y2MpcmV0dXJuIDExO2lmKGE9PT1lYylyZXR1cm4gMTR9cmV0dXJuIDJ9XG5mdW5jdGlvbiBYZShhLGIpe3ZhciBjPWEuYWx0ZXJuYXRlO251bGw9PT1jPyhjPUsoYS50YWcsYixhLmtleSxhLm1vZGUpLGMuZWxlbWVudFR5cGU9YS5lbGVtZW50VHlwZSxjLnR5cGU9YS50eXBlLGMuc3RhdGVOb2RlPWEuc3RhdGVOb2RlLGMuYWx0ZXJuYXRlPWEsYS5hbHRlcm5hdGU9Yyk6KGMucGVuZGluZ1Byb3BzPWIsYy5lZmZlY3RUYWc9MCxjLm5leHRFZmZlY3Q9bnVsbCxjLmZpcnN0RWZmZWN0PW51bGwsYy5sYXN0RWZmZWN0PW51bGwpO2MuY2hpbGRFeHBpcmF0aW9uVGltZT1hLmNoaWxkRXhwaXJhdGlvblRpbWU7Yy5leHBpcmF0aW9uVGltZT1hLmV4cGlyYXRpb25UaW1lO2MuY2hpbGQ9YS5jaGlsZDtjLm1lbW9pemVkUHJvcHM9YS5tZW1vaXplZFByb3BzO2MubWVtb2l6ZWRTdGF0ZT1hLm1lbW9pemVkU3RhdGU7Yy51cGRhdGVRdWV1ZT1hLnVwZGF0ZVF1ZXVlO2MuY29udGV4dERlcGVuZGVuY2llcz1hLmNvbnRleHREZXBlbmRlbmNpZXM7Yy5zaWJsaW5nPWEuc2libGluZztcbmMuaW5kZXg9YS5pbmRleDtjLnJlZj1hLnJlZjtyZXR1cm4gY31cbmZ1bmN0aW9uIFllKGEsYixjLGQsZSxmKXt2YXIgZz0yO2Q9YTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYSlWZShhKSYmKGc9MSk7ZWxzZSBpZihcInN0cmluZ1wiPT09dHlwZW9mIGEpZz01O2Vsc2UgYTpzd2l0Y2goYSl7Y2FzZSBYYjpyZXR1cm4gWmUoYy5jaGlsZHJlbixlLGYsYik7Y2FzZSBiYzpyZXR1cm4gJGUoYyxlfDMsZixiKTtjYXNlIFliOnJldHVybiAkZShjLGV8MixmLGIpO2Nhc2UgWmI6cmV0dXJuIGE9SygxMixjLGIsZXw0KSxhLmVsZW1lbnRUeXBlPVpiLGEudHlwZT1aYixhLmV4cGlyYXRpb25UaW1lPWYsYTtjYXNlIGRjOnJldHVybiBhPUsoMTMsYyxiLGUpLGEuZWxlbWVudFR5cGU9ZGMsYS50eXBlPWRjLGEuZXhwaXJhdGlvblRpbWU9ZixhO2RlZmF1bHQ6aWYoXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSlzd2l0Y2goYS4kJHR5cGVvZil7Y2FzZSAkYjpnPTEwO2JyZWFrIGE7Y2FzZSBhYzpnPTk7YnJlYWsgYTtjYXNlIGNjOmc9MTE7YnJlYWsgYTtjYXNlIGVjOmc9XG4xNDticmVhayBhO2Nhc2UgZmM6Zz0xNjtkPW51bGw7YnJlYWsgYX14KFwiMTMwXCIsbnVsbD09YT9hOnR5cGVvZiBhLFwiXCIpfWI9SyhnLGMsYixlKTtiLmVsZW1lbnRUeXBlPWE7Yi50eXBlPWQ7Yi5leHBpcmF0aW9uVGltZT1mO3JldHVybiBifWZ1bmN0aW9uIFplKGEsYixjLGQpe2E9Syg3LGEsZCxiKTthLmV4cGlyYXRpb25UaW1lPWM7cmV0dXJuIGF9ZnVuY3Rpb24gJGUoYSxiLGMsZCl7YT1LKDgsYSxkLGIpO2I9MD09PShiJjEpP1liOmJjO2EuZWxlbWVudFR5cGU9YjthLnR5cGU9YjthLmV4cGlyYXRpb25UaW1lPWM7cmV0dXJuIGF9ZnVuY3Rpb24gYWYoYSxiLGMpe2E9Syg2LGEsbnVsbCxiKTthLmV4cGlyYXRpb25UaW1lPWM7cmV0dXJuIGF9XG5mdW5jdGlvbiBiZihhLGIsYyl7Yj1LKDQsbnVsbCE9PWEuY2hpbGRyZW4/YS5jaGlsZHJlbjpbXSxhLmtleSxiKTtiLmV4cGlyYXRpb25UaW1lPWM7Yi5zdGF0ZU5vZGU9e2NvbnRhaW5lckluZm86YS5jb250YWluZXJJbmZvLHBlbmRpbmdDaGlsZHJlbjpudWxsLGltcGxlbWVudGF0aW9uOmEuaW1wbGVtZW50YXRpb259O3JldHVybiBifWZ1bmN0aW9uIGNmKGEsYil7YS5kaWRFcnJvcj0hMTt2YXIgYz1hLmVhcmxpZXN0UGVuZGluZ1RpbWU7MD09PWM/YS5lYXJsaWVzdFBlbmRpbmdUaW1lPWEubGF0ZXN0UGVuZGluZ1RpbWU9YjpjPGI/YS5lYXJsaWVzdFBlbmRpbmdUaW1lPWI6YS5sYXRlc3RQZW5kaW5nVGltZT5iJiYoYS5sYXRlc3RQZW5kaW5nVGltZT1iKTtkZihiLGEpfVxuZnVuY3Rpb24gZWYoYSxiKXthLmRpZEVycm9yPSExO2lmKDA9PT1iKWEuZWFybGllc3RQZW5kaW5nVGltZT0wLGEubGF0ZXN0UGVuZGluZ1RpbWU9MCxhLmVhcmxpZXN0U3VzcGVuZGVkVGltZT0wLGEubGF0ZXN0U3VzcGVuZGVkVGltZT0wLGEubGF0ZXN0UGluZ2VkVGltZT0wO2Vsc2V7YjxhLmxhdGVzdFBpbmdlZFRpbWUmJihhLmxhdGVzdFBpbmdlZFRpbWU9MCk7dmFyIGM9YS5sYXRlc3RQZW5kaW5nVGltZTswIT09YyYmKGM+Yj9hLmVhcmxpZXN0UGVuZGluZ1RpbWU9YS5sYXRlc3RQZW5kaW5nVGltZT0wOmEuZWFybGllc3RQZW5kaW5nVGltZT5iJiYoYS5lYXJsaWVzdFBlbmRpbmdUaW1lPWEubGF0ZXN0UGVuZGluZ1RpbWUpKTtjPWEuZWFybGllc3RTdXNwZW5kZWRUaW1lOzA9PT1jP2NmKGEsYik6YjxhLmxhdGVzdFN1c3BlbmRlZFRpbWU/KGEuZWFybGllc3RTdXNwZW5kZWRUaW1lPTAsYS5sYXRlc3RTdXNwZW5kZWRUaW1lPTAsYS5sYXRlc3RQaW5nZWRUaW1lPTAsY2YoYSxiKSk6XG5iPmMmJmNmKGEsYil9ZGYoMCxhKX1mdW5jdGlvbiBmZihhLGIpe2EuZGlkRXJyb3I9ITE7YS5sYXRlc3RQaW5nZWRUaW1lPj1iJiYoYS5sYXRlc3RQaW5nZWRUaW1lPTApO3ZhciBjPWEuZWFybGllc3RQZW5kaW5nVGltZSxkPWEubGF0ZXN0UGVuZGluZ1RpbWU7Yz09PWI/YS5lYXJsaWVzdFBlbmRpbmdUaW1lPWQ9PT1iP2EubGF0ZXN0UGVuZGluZ1RpbWU9MDpkOmQ9PT1iJiYoYS5sYXRlc3RQZW5kaW5nVGltZT1jKTtjPWEuZWFybGllc3RTdXNwZW5kZWRUaW1lO2Q9YS5sYXRlc3RTdXNwZW5kZWRUaW1lOzA9PT1jP2EuZWFybGllc3RTdXNwZW5kZWRUaW1lPWEubGF0ZXN0U3VzcGVuZGVkVGltZT1iOmM8Yj9hLmVhcmxpZXN0U3VzcGVuZGVkVGltZT1iOmQ+YiYmKGEubGF0ZXN0U3VzcGVuZGVkVGltZT1iKTtkZihiLGEpfVxuZnVuY3Rpb24gZ2YoYSxiKXt2YXIgYz1hLmVhcmxpZXN0UGVuZGluZ1RpbWU7YT1hLmVhcmxpZXN0U3VzcGVuZGVkVGltZTtjPmImJihiPWMpO2E+YiYmKGI9YSk7cmV0dXJuIGJ9ZnVuY3Rpb24gZGYoYSxiKXt2YXIgYz1iLmVhcmxpZXN0U3VzcGVuZGVkVGltZSxkPWIubGF0ZXN0U3VzcGVuZGVkVGltZSxlPWIuZWFybGllc3RQZW5kaW5nVGltZSxmPWIubGF0ZXN0UGluZ2VkVGltZTtlPTAhPT1lP2U6ZjswPT09ZSYmKDA9PT1hfHxkPGEpJiYoZT1kKTthPWU7MCE9PWEmJmM+YSYmKGE9Yyk7Yi5uZXh0RXhwaXJhdGlvblRpbWVUb1dvcmtPbj1lO2IuZXhwaXJhdGlvblRpbWU9YX1mdW5jdGlvbiBMKGEsYil7aWYoYSYmYS5kZWZhdWx0UHJvcHMpe2I9bih7fSxiKTthPWEuZGVmYXVsdFByb3BzO2Zvcih2YXIgYyBpbiBhKXZvaWQgMD09PWJbY10mJihiW2NdPWFbY10pfXJldHVybiBifVxuZnVuY3Rpb24gaGYoYSl7dmFyIGI9YS5fcmVzdWx0O3N3aXRjaChhLl9zdGF0dXMpe2Nhc2UgMTpyZXR1cm4gYjtjYXNlIDI6dGhyb3cgYjtjYXNlIDA6dGhyb3cgYjtkZWZhdWx0OmEuX3N0YXR1cz0wO2I9YS5fY3RvcjtiPWIoKTtiLnRoZW4oZnVuY3Rpb24oYil7MD09PWEuX3N0YXR1cyYmKGI9Yi5kZWZhdWx0LGEuX3N0YXR1cz0xLGEuX3Jlc3VsdD1iKX0sZnVuY3Rpb24oYil7MD09PWEuX3N0YXR1cyYmKGEuX3N0YXR1cz0yLGEuX3Jlc3VsdD1iKX0pO3N3aXRjaChhLl9zdGF0dXMpe2Nhc2UgMTpyZXR1cm4gYS5fcmVzdWx0O2Nhc2UgMjp0aHJvdyBhLl9yZXN1bHQ7fWEuX3Jlc3VsdD1iO3Rocm93IGI7fX12YXIgamY9KG5ldyBhYS5Db21wb25lbnQpLnJlZnM7XG5mdW5jdGlvbiBrZihhLGIsYyxkKXtiPWEubWVtb2l6ZWRTdGF0ZTtjPWMoZCxiKTtjPW51bGw9PT1jfHx2b2lkIDA9PT1jP2I6bih7fSxiLGMpO2EubWVtb2l6ZWRTdGF0ZT1jO2Q9YS51cGRhdGVRdWV1ZTtudWxsIT09ZCYmMD09PWEuZXhwaXJhdGlvblRpbWUmJihkLmJhc2VTdGF0ZT1jKX1cbnZhciB0Zj17aXNNb3VudGVkOmZ1bmN0aW9uKGEpe3JldHVybihhPWEuX3JlYWN0SW50ZXJuYWxGaWJlcik/Mj09PWVkKGEpOiExfSxlbnF1ZXVlU2V0U3RhdGU6ZnVuY3Rpb24oYSxiLGMpe2E9YS5fcmVhY3RJbnRlcm5hbEZpYmVyO3ZhciBkPWxmKCk7ZD1tZihkLGEpO3ZhciBlPW5mKGQpO2UucGF5bG9hZD1iO3ZvaWQgMCE9PWMmJm51bGwhPT1jJiYoZS5jYWxsYmFjaz1jKTtvZigpO3BmKGEsZSk7cWYoYSxkKX0sZW5xdWV1ZVJlcGxhY2VTdGF0ZTpmdW5jdGlvbihhLGIsYyl7YT1hLl9yZWFjdEludGVybmFsRmliZXI7dmFyIGQ9bGYoKTtkPW1mKGQsYSk7dmFyIGU9bmYoZCk7ZS50YWc9cmY7ZS5wYXlsb2FkPWI7dm9pZCAwIT09YyYmbnVsbCE9PWMmJihlLmNhbGxiYWNrPWMpO29mKCk7cGYoYSxlKTtxZihhLGQpfSxlbnF1ZXVlRm9yY2VVcGRhdGU6ZnVuY3Rpb24oYSxiKXthPWEuX3JlYWN0SW50ZXJuYWxGaWJlcjt2YXIgYz1sZigpO2M9bWYoYyxhKTt2YXIgZD1uZihjKTtkLnRhZz1cbnNmO3ZvaWQgMCE9PWImJm51bGwhPT1iJiYoZC5jYWxsYmFjaz1iKTtvZigpO3BmKGEsZCk7cWYoYSxjKX19O2Z1bmN0aW9uIHVmKGEsYixjLGQsZSxmLGcpe2E9YS5zdGF0ZU5vZGU7cmV0dXJuXCJmdW5jdGlvblwiPT09dHlwZW9mIGEuc2hvdWxkQ29tcG9uZW50VXBkYXRlP2Euc2hvdWxkQ29tcG9uZW50VXBkYXRlKGQsZixnKTpiLnByb3RvdHlwZSYmYi5wcm90b3R5cGUuaXNQdXJlUmVhY3RDb21wb25lbnQ/IWRkKGMsZCl8fCFkZChlLGYpOiEwfVxuZnVuY3Rpb24gdmYoYSxiLGMpe3ZhciBkPSExLGU9SGU7dmFyIGY9Yi5jb250ZXh0VHlwZTtcIm9iamVjdFwiPT09dHlwZW9mIGYmJm51bGwhPT1mP2Y9TShmKTooZT1KKGIpP0llOkguY3VycmVudCxkPWIuY29udGV4dFR5cGVzLGY9KGQ9bnVsbCE9PWQmJnZvaWQgMCE9PWQpP0plKGEsZSk6SGUpO2I9bmV3IGIoYyxmKTthLm1lbW9pemVkU3RhdGU9bnVsbCE9PWIuc3RhdGUmJnZvaWQgMCE9PWIuc3RhdGU/Yi5zdGF0ZTpudWxsO2IudXBkYXRlcj10ZjthLnN0YXRlTm9kZT1iO2IuX3JlYWN0SW50ZXJuYWxGaWJlcj1hO2QmJihhPWEuc3RhdGVOb2RlLGEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRVbm1hc2tlZENoaWxkQ29udGV4dD1lLGEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNYXNrZWRDaGlsZENvbnRleHQ9Zik7cmV0dXJuIGJ9XG5mdW5jdGlvbiB3ZihhLGIsYyxkKXthPWIuc3RhdGU7XCJmdW5jdGlvblwiPT09dHlwZW9mIGIuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmYi5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKGMsZCk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGIuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJmIuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoYyxkKTtiLnN0YXRlIT09YSYmdGYuZW5xdWV1ZVJlcGxhY2VTdGF0ZShiLGIuc3RhdGUsbnVsbCl9XG5mdW5jdGlvbiB4ZihhLGIsYyxkKXt2YXIgZT1hLnN0YXRlTm9kZTtlLnByb3BzPWM7ZS5zdGF0ZT1hLm1lbW9pemVkU3RhdGU7ZS5yZWZzPWpmO3ZhciBmPWIuY29udGV4dFR5cGU7XCJvYmplY3RcIj09PXR5cGVvZiBmJiZudWxsIT09Zj9lLmNvbnRleHQ9TShmKTooZj1KKGIpP0llOkguY3VycmVudCxlLmNvbnRleHQ9SmUoYSxmKSk7Zj1hLnVwZGF0ZVF1ZXVlO251bGwhPT1mJiYoeWYoYSxmLGMsZSxkKSxlLnN0YXRlPWEubWVtb2l6ZWRTdGF0ZSk7Zj1iLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcztcImZ1bmN0aW9uXCI9PT10eXBlb2YgZiYmKGtmKGEsYixmLGMpLGUuc3RhdGU9YS5tZW1vaXplZFN0YXRlKTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHN8fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZS5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50JiZcImZ1bmN0aW9uXCIhPT1cbnR5cGVvZiBlLmNvbXBvbmVudFdpbGxNb3VudHx8KGI9ZS5zdGF0ZSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5jb21wb25lbnRXaWxsTW91bnQmJmUuY29tcG9uZW50V2lsbE1vdW50KCksXCJmdW5jdGlvblwiPT09dHlwZW9mIGUuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCYmZS5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCksYiE9PWUuc3RhdGUmJnRmLmVucXVldWVSZXBsYWNlU3RhdGUoZSxlLnN0YXRlLG51bGwpLGY9YS51cGRhdGVRdWV1ZSxudWxsIT09ZiYmKHlmKGEsZixjLGUsZCksZS5zdGF0ZT1hLm1lbW9pemVkU3RhdGUpKTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5jb21wb25lbnREaWRNb3VudCYmKGEuZWZmZWN0VGFnfD00KX12YXIgemY9QXJyYXkuaXNBcnJheTtcbmZ1bmN0aW9uIEFmKGEsYixjKXthPWMucmVmO2lmKG51bGwhPT1hJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgYSYmXCJvYmplY3RcIiE9PXR5cGVvZiBhKXtpZihjLl9vd25lcil7Yz1jLl9vd25lcjt2YXIgZD12b2lkIDA7YyYmKDEhPT1jLnRhZz94KFwiMzA5XCIpOnZvaWQgMCxkPWMuc3RhdGVOb2RlKTtkP3ZvaWQgMDp4KFwiMTQ3XCIsYSk7dmFyIGU9XCJcIithO2lmKG51bGwhPT1iJiZudWxsIT09Yi5yZWYmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBiLnJlZiYmYi5yZWYuX3N0cmluZ1JlZj09PWUpcmV0dXJuIGIucmVmO2I9ZnVuY3Rpb24oYSl7dmFyIGI9ZC5yZWZzO2I9PT1qZiYmKGI9ZC5yZWZzPXt9KTtudWxsPT09YT9kZWxldGUgYltlXTpiW2VdPWF9O2IuX3N0cmluZ1JlZj1lO3JldHVybiBifVwic3RyaW5nXCIhPT10eXBlb2YgYT94KFwiMjg0XCIpOnZvaWQgMDtjLl9vd25lcj92b2lkIDA6eChcIjI5MFwiLGEpfXJldHVybiBhfVxuZnVuY3Rpb24gQmYoYSxiKXtcInRleHRhcmVhXCIhPT1hLnR5cGUmJngoXCIzMVwiLFwiW29iamVjdCBPYmplY3RdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYik/XCJvYmplY3Qgd2l0aCBrZXlzIHtcIitPYmplY3Qua2V5cyhiKS5qb2luKFwiLCBcIikrXCJ9XCI6YixcIlwiKX1cbmZ1bmN0aW9uIENmKGEpe2Z1bmN0aW9uIGIoYixjKXtpZihhKXt2YXIgZD1iLmxhc3RFZmZlY3Q7bnVsbCE9PWQ/KGQubmV4dEVmZmVjdD1jLGIubGFzdEVmZmVjdD1jKTpiLmZpcnN0RWZmZWN0PWIubGFzdEVmZmVjdD1jO2MubmV4dEVmZmVjdD1udWxsO2MuZWZmZWN0VGFnPTh9fWZ1bmN0aW9uIGMoYyxkKXtpZighYSlyZXR1cm4gbnVsbDtmb3IoO251bGwhPT1kOyliKGMsZCksZD1kLnNpYmxpbmc7cmV0dXJuIG51bGx9ZnVuY3Rpb24gZChhLGIpe2ZvcihhPW5ldyBNYXA7bnVsbCE9PWI7KW51bGwhPT1iLmtleT9hLnNldChiLmtleSxiKTphLnNldChiLmluZGV4LGIpLGI9Yi5zaWJsaW5nO3JldHVybiBhfWZ1bmN0aW9uIGUoYSxiLGMpe2E9WGUoYSxiLGMpO2EuaW5kZXg9MDthLnNpYmxpbmc9bnVsbDtyZXR1cm4gYX1mdW5jdGlvbiBmKGIsYyxkKXtiLmluZGV4PWQ7aWYoIWEpcmV0dXJuIGM7ZD1iLmFsdGVybmF0ZTtpZihudWxsIT09ZClyZXR1cm4gZD1kLmluZGV4LGQ8Yz8oYi5lZmZlY3RUYWc9XG4yLGMpOmQ7Yi5lZmZlY3RUYWc9MjtyZXR1cm4gY31mdW5jdGlvbiBnKGIpe2EmJm51bGw9PT1iLmFsdGVybmF0ZSYmKGIuZWZmZWN0VGFnPTIpO3JldHVybiBifWZ1bmN0aW9uIGgoYSxiLGMsZCl7aWYobnVsbD09PWJ8fDYhPT1iLnRhZylyZXR1cm4gYj1hZihjLGEubW9kZSxkKSxiLnJldHVybj1hLGI7Yj1lKGIsYyxkKTtiLnJldHVybj1hO3JldHVybiBifWZ1bmN0aW9uIGwoYSxiLGMsZCl7aWYobnVsbCE9PWImJmIuZWxlbWVudFR5cGU9PT1jLnR5cGUpcmV0dXJuIGQ9ZShiLGMucHJvcHMsZCksZC5yZWY9QWYoYSxiLGMpLGQucmV0dXJuPWEsZDtkPVllKGMudHlwZSxjLmtleSxjLnByb3BzLG51bGwsYS5tb2RlLGQpO2QucmVmPUFmKGEsYixjKTtkLnJldHVybj1hO3JldHVybiBkfWZ1bmN0aW9uIGsoYSxiLGMsZCl7aWYobnVsbD09PWJ8fDQhPT1iLnRhZ3x8Yi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyE9PWMuY29udGFpbmVySW5mb3x8Yi5zdGF0ZU5vZGUuaW1wbGVtZW50YXRpb24hPT1cbmMuaW1wbGVtZW50YXRpb24pcmV0dXJuIGI9YmYoYyxhLm1vZGUsZCksYi5yZXR1cm49YSxiO2I9ZShiLGMuY2hpbGRyZW58fFtdLGQpO2IucmV0dXJuPWE7cmV0dXJuIGJ9ZnVuY3Rpb24gbShhLGIsYyxkLGYpe2lmKG51bGw9PT1ifHw3IT09Yi50YWcpcmV0dXJuIGI9WmUoYyxhLm1vZGUsZCxmKSxiLnJldHVybj1hLGI7Yj1lKGIsYyxkKTtiLnJldHVybj1hO3JldHVybiBifWZ1bmN0aW9uIHAoYSxiLGMpe2lmKFwic3RyaW5nXCI9PT10eXBlb2YgYnx8XCJudW1iZXJcIj09PXR5cGVvZiBiKXJldHVybiBiPWFmKFwiXCIrYixhLm1vZGUsYyksYi5yZXR1cm49YSxiO2lmKFwib2JqZWN0XCI9PT10eXBlb2YgYiYmbnVsbCE9PWIpe3N3aXRjaChiLiQkdHlwZW9mKXtjYXNlIFZiOnJldHVybiBjPVllKGIudHlwZSxiLmtleSxiLnByb3BzLG51bGwsYS5tb2RlLGMpLGMucmVmPUFmKGEsbnVsbCxiKSxjLnJldHVybj1hLGM7Y2FzZSBXYjpyZXR1cm4gYj1iZihiLGEubW9kZSxjKSxiLnJldHVybj1hLGJ9aWYoemYoYil8fFxuaGMoYikpcmV0dXJuIGI9WmUoYixhLm1vZGUsYyxudWxsKSxiLnJldHVybj1hLGI7QmYoYSxiKX1yZXR1cm4gbnVsbH1mdW5jdGlvbiB0KGEsYixjLGQpe3ZhciBlPW51bGwhPT1iP2Iua2V5Om51bGw7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBjfHxcIm51bWJlclwiPT09dHlwZW9mIGMpcmV0dXJuIG51bGwhPT1lP251bGw6aChhLGIsXCJcIitjLGQpO2lmKFwib2JqZWN0XCI9PT10eXBlb2YgYyYmbnVsbCE9PWMpe3N3aXRjaChjLiQkdHlwZW9mKXtjYXNlIFZiOnJldHVybiBjLmtleT09PWU/Yy50eXBlPT09WGI/bShhLGIsYy5wcm9wcy5jaGlsZHJlbixkLGUpOmwoYSxiLGMsZCk6bnVsbDtjYXNlIFdiOnJldHVybiBjLmtleT09PWU/ayhhLGIsYyxkKTpudWxsfWlmKHpmKGMpfHxoYyhjKSlyZXR1cm4gbnVsbCE9PWU/bnVsbDptKGEsYixjLGQsbnVsbCk7QmYoYSxjKX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBBKGEsYixjLGQsZSl7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBkfHxcIm51bWJlclwiPT09dHlwZW9mIGQpcmV0dXJuIGE9XG5hLmdldChjKXx8bnVsbCxoKGIsYSxcIlwiK2QsZSk7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBkJiZudWxsIT09ZCl7c3dpdGNoKGQuJCR0eXBlb2Ype2Nhc2UgVmI6cmV0dXJuIGE9YS5nZXQobnVsbD09PWQua2V5P2M6ZC5rZXkpfHxudWxsLGQudHlwZT09PVhiP20oYixhLGQucHJvcHMuY2hpbGRyZW4sZSxkLmtleSk6bChiLGEsZCxlKTtjYXNlIFdiOnJldHVybiBhPWEuZ2V0KG51bGw9PT1kLmtleT9jOmQua2V5KXx8bnVsbCxrKGIsYSxkLGUpfWlmKHpmKGQpfHxoYyhkKSlyZXR1cm4gYT1hLmdldChjKXx8bnVsbCxtKGIsYSxkLGUsbnVsbCk7QmYoYixkKX1yZXR1cm4gbnVsbH1mdW5jdGlvbiB2KGUsZyxoLGspe2Zvcih2YXIgbD1udWxsLG09bnVsbCxxPWcsdT1nPTAsQj1udWxsO251bGwhPT1xJiZ1PGgubGVuZ3RoO3UrKyl7cS5pbmRleD51PyhCPXEscT1udWxsKTpCPXEuc2libGluZzt2YXIgdz10KGUscSxoW3VdLGspO2lmKG51bGw9PT13KXtudWxsPT09cSYmKHE9Qik7YnJlYWt9YSYmXG5xJiZudWxsPT09dy5hbHRlcm5hdGUmJmIoZSxxKTtnPWYodyxnLHUpO251bGw9PT1tP2w9dzptLnNpYmxpbmc9dzttPXc7cT1CfWlmKHU9PT1oLmxlbmd0aClyZXR1cm4gYyhlLHEpLGw7aWYobnVsbD09PXEpe2Zvcig7dTxoLmxlbmd0aDt1KyspaWYocT1wKGUsaFt1XSxrKSlnPWYocSxnLHUpLG51bGw9PT1tP2w9cTptLnNpYmxpbmc9cSxtPXE7cmV0dXJuIGx9Zm9yKHE9ZChlLHEpO3U8aC5sZW5ndGg7dSsrKWlmKEI9QShxLGUsdSxoW3VdLGspKWEmJm51bGwhPT1CLmFsdGVybmF0ZSYmcS5kZWxldGUobnVsbD09PUIua2V5P3U6Qi5rZXkpLGc9ZihCLGcsdSksbnVsbD09PW0/bD1COm0uc2libGluZz1CLG09QjthJiZxLmZvckVhY2goZnVuY3Rpb24oYSl7cmV0dXJuIGIoZSxhKX0pO3JldHVybiBsfWZ1bmN0aW9uIFIoZSxnLGgsayl7dmFyIGw9aGMoaCk7XCJmdW5jdGlvblwiIT09dHlwZW9mIGw/eChcIjE1MFwiKTp2b2lkIDA7aD1sLmNhbGwoaCk7bnVsbD09aD94KFwiMTUxXCIpOnZvaWQgMDtcbmZvcih2YXIgbT1sPW51bGwscT1nLHU9Zz0wLEI9bnVsbCx3PWgubmV4dCgpO251bGwhPT1xJiYhdy5kb25lO3UrKyx3PWgubmV4dCgpKXtxLmluZGV4PnU/KEI9cSxxPW51bGwpOkI9cS5zaWJsaW5nO3ZhciB2PXQoZSxxLHcudmFsdWUsayk7aWYobnVsbD09PXYpe3F8fChxPUIpO2JyZWFrfWEmJnEmJm51bGw9PT12LmFsdGVybmF0ZSYmYihlLHEpO2c9Zih2LGcsdSk7bnVsbD09PW0/bD12Om0uc2libGluZz12O209djtxPUJ9aWYody5kb25lKXJldHVybiBjKGUscSksbDtpZihudWxsPT09cSl7Zm9yKDshdy5kb25lO3UrKyx3PWgubmV4dCgpKXc9cChlLHcudmFsdWUsayksbnVsbCE9PXcmJihnPWYodyxnLHUpLG51bGw9PT1tP2w9dzptLnNpYmxpbmc9dyxtPXcpO3JldHVybiBsfWZvcihxPWQoZSxxKTshdy5kb25lO3UrKyx3PWgubmV4dCgpKXc9QShxLGUsdSx3LnZhbHVlLGspLG51bGwhPT13JiYoYSYmbnVsbCE9PXcuYWx0ZXJuYXRlJiZxLmRlbGV0ZShudWxsPT09dy5rZXk/dTpcbncua2V5KSxnPWYodyxnLHUpLG51bGw9PT1tP2w9dzptLnNpYmxpbmc9dyxtPXcpO2EmJnEuZm9yRWFjaChmdW5jdGlvbihhKXtyZXR1cm4gYihlLGEpfSk7cmV0dXJuIGx9cmV0dXJuIGZ1bmN0aW9uKGEsZCxmLGgpe3ZhciBrPVwib2JqZWN0XCI9PT10eXBlb2YgZiYmbnVsbCE9PWYmJmYudHlwZT09PVhiJiZudWxsPT09Zi5rZXk7ayYmKGY9Zi5wcm9wcy5jaGlsZHJlbik7dmFyIGw9XCJvYmplY3RcIj09PXR5cGVvZiBmJiZudWxsIT09ZjtpZihsKXN3aXRjaChmLiQkdHlwZW9mKXtjYXNlIFZiOmE6e2w9Zi5rZXk7Zm9yKGs9ZDtudWxsIT09azspe2lmKGsua2V5PT09bClpZig3PT09ay50YWc/Zi50eXBlPT09WGI6ay5lbGVtZW50VHlwZT09PWYudHlwZSl7YyhhLGsuc2libGluZyk7ZD1lKGssZi50eXBlPT09WGI/Zi5wcm9wcy5jaGlsZHJlbjpmLnByb3BzLGgpO2QucmVmPUFmKGEsayxmKTtkLnJldHVybj1hO2E9ZDticmVhayBhfWVsc2V7YyhhLGspO2JyZWFrfWVsc2UgYihhLGspO2s9XG5rLnNpYmxpbmd9Zi50eXBlPT09WGI/KGQ9WmUoZi5wcm9wcy5jaGlsZHJlbixhLm1vZGUsaCxmLmtleSksZC5yZXR1cm49YSxhPWQpOihoPVllKGYudHlwZSxmLmtleSxmLnByb3BzLG51bGwsYS5tb2RlLGgpLGgucmVmPUFmKGEsZCxmKSxoLnJldHVybj1hLGE9aCl9cmV0dXJuIGcoYSk7Y2FzZSBXYjphOntmb3Ioaz1mLmtleTtudWxsIT09ZDspe2lmKGQua2V5PT09aylpZig0PT09ZC50YWcmJmQuc3RhdGVOb2RlLmNvbnRhaW5lckluZm89PT1mLmNvbnRhaW5lckluZm8mJmQuc3RhdGVOb2RlLmltcGxlbWVudGF0aW9uPT09Zi5pbXBsZW1lbnRhdGlvbil7YyhhLGQuc2libGluZyk7ZD1lKGQsZi5jaGlsZHJlbnx8W10saCk7ZC5yZXR1cm49YTthPWQ7YnJlYWsgYX1lbHNle2MoYSxkKTticmVha31lbHNlIGIoYSxkKTtkPWQuc2libGluZ31kPWJmKGYsYS5tb2RlLGgpO2QucmV0dXJuPWE7YT1kfXJldHVybiBnKGEpfWlmKFwic3RyaW5nXCI9PT10eXBlb2YgZnx8XCJudW1iZXJcIj09PXR5cGVvZiBmKXJldHVybiBmPVxuXCJcIitmLG51bGwhPT1kJiY2PT09ZC50YWc/KGMoYSxkLnNpYmxpbmcpLGQ9ZShkLGYsaCksZC5yZXR1cm49YSxhPWQpOihjKGEsZCksZD1hZihmLGEubW9kZSxoKSxkLnJldHVybj1hLGE9ZCksZyhhKTtpZih6ZihmKSlyZXR1cm4gdihhLGQsZixoKTtpZihoYyhmKSlyZXR1cm4gUihhLGQsZixoKTtsJiZCZihhLGYpO2lmKFwidW5kZWZpbmVkXCI9PT10eXBlb2YgZiYmIWspc3dpdGNoKGEudGFnKXtjYXNlIDE6Y2FzZSAwOmg9YS50eXBlLHgoXCIxNTJcIixoLmRpc3BsYXlOYW1lfHxoLm5hbWV8fFwiQ29tcG9uZW50XCIpfXJldHVybiBjKGEsZCl9fXZhciBEZj1DZighMCksRWY9Q2YoITEpLEZmPXt9LE49e2N1cnJlbnQ6RmZ9LEdmPXtjdXJyZW50OkZmfSxIZj17Y3VycmVudDpGZn07ZnVuY3Rpb24gSWYoYSl7YT09PUZmP3goXCIxNzRcIik6dm9pZCAwO3JldHVybiBhfVxuZnVuY3Rpb24gSmYoYSxiKXtHKEhmLGIsYSk7RyhHZixhLGEpO0coTixGZixhKTt2YXIgYz1iLm5vZGVUeXBlO3N3aXRjaChjKXtjYXNlIDk6Y2FzZSAxMTpiPShiPWIuZG9jdW1lbnRFbGVtZW50KT9iLm5hbWVzcGFjZVVSSTpoZShudWxsLFwiXCIpO2JyZWFrO2RlZmF1bHQ6Yz04PT09Yz9iLnBhcmVudE5vZGU6YixiPWMubmFtZXNwYWNlVVJJfHxudWxsLGM9Yy50YWdOYW1lLGI9aGUoYixjKX1GKE4sYSk7RyhOLGIsYSl9ZnVuY3Rpb24gS2YoYSl7RihOLGEpO0YoR2YsYSk7RihIZixhKX1mdW5jdGlvbiBMZihhKXtJZihIZi5jdXJyZW50KTt2YXIgYj1JZihOLmN1cnJlbnQpO3ZhciBjPWhlKGIsYS50eXBlKTtiIT09YyYmKEcoR2YsYSxhKSxHKE4sYyxhKSl9ZnVuY3Rpb24gTWYoYSl7R2YuY3VycmVudD09PWEmJihGKE4sYSksRihHZixhKSl9XG52YXIgTmY9MCxPZj0yLFBmPTQsUWY9OCxSZj0xNixTZj0zMixUZj02NCxVZj0xMjgsVmY9VGIuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixXZj0wLFhmPW51bGwsTz1udWxsLFA9bnVsbCxZZj1udWxsLFE9bnVsbCxaZj1udWxsLCRmPTAsYWc9bnVsbCxiZz0wLGNnPSExLGRnPW51bGwsZWc9MDtmdW5jdGlvbiBmZygpe3goXCIzMjFcIil9ZnVuY3Rpb24gZ2coYSxiKXtpZihudWxsPT09YilyZXR1cm4hMTtmb3IodmFyIGM9MDtjPGIubGVuZ3RoJiZjPGEubGVuZ3RoO2MrKylpZighYmQoYVtjXSxiW2NdKSlyZXR1cm4hMTtyZXR1cm4hMH1cbmZ1bmN0aW9uIGhnKGEsYixjLGQsZSxmKXtXZj1mO1hmPWI7UD1udWxsIT09YT9hLm1lbW9pemVkU3RhdGU6bnVsbDtWZi5jdXJyZW50PW51bGw9PT1QP2lnOmpnO2I9YyhkLGUpO2lmKGNnKXtkbyBjZz0hMSxlZys9MSxQPW51bGwhPT1hP2EubWVtb2l6ZWRTdGF0ZTpudWxsLFpmPVlmLGFnPVE9Tz1udWxsLFZmLmN1cnJlbnQ9amcsYj1jKGQsZSk7d2hpbGUoY2cpO2RnPW51bGw7ZWc9MH1WZi5jdXJyZW50PWtnO2E9WGY7YS5tZW1vaXplZFN0YXRlPVlmO2EuZXhwaXJhdGlvblRpbWU9JGY7YS51cGRhdGVRdWV1ZT1hZzthLmVmZmVjdFRhZ3w9Ymc7YT1udWxsIT09TyYmbnVsbCE9PU8ubmV4dDtXZj0wO1pmPVE9WWY9UD1PPVhmPW51bGw7JGY9MDthZz1udWxsO2JnPTA7YT94KFwiMzAwXCIpOnZvaWQgMDtyZXR1cm4gYn1mdW5jdGlvbiBsZygpe1ZmLmN1cnJlbnQ9a2c7V2Y9MDtaZj1RPVlmPVA9Tz1YZj1udWxsOyRmPTA7YWc9bnVsbDtiZz0wO2NnPSExO2RnPW51bGw7ZWc9MH1cbmZ1bmN0aW9uIG1nKCl7dmFyIGE9e21lbW9pemVkU3RhdGU6bnVsbCxiYXNlU3RhdGU6bnVsbCxxdWV1ZTpudWxsLGJhc2VVcGRhdGU6bnVsbCxuZXh0Om51bGx9O251bGw9PT1RP1lmPVE9YTpRPVEubmV4dD1hO3JldHVybiBRfWZ1bmN0aW9uIG5nKCl7aWYobnVsbCE9PVpmKVE9WmYsWmY9US5uZXh0LE89UCxQPW51bGwhPT1PP08ubmV4dDpudWxsO2Vsc2V7bnVsbD09PVA/eChcIjMxMFwiKTp2b2lkIDA7Tz1QO3ZhciBhPXttZW1vaXplZFN0YXRlOk8ubWVtb2l6ZWRTdGF0ZSxiYXNlU3RhdGU6Ty5iYXNlU3RhdGUscXVldWU6Ty5xdWV1ZSxiYXNlVXBkYXRlOk8uYmFzZVVwZGF0ZSxuZXh0Om51bGx9O1E9bnVsbD09PVE/WWY9YTpRLm5leHQ9YTtQPU8ubmV4dH1yZXR1cm4gUX1mdW5jdGlvbiBvZyhhLGIpe3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBiP2IoYSk6Yn1cbmZ1bmN0aW9uIHBnKGEpe3ZhciBiPW5nKCksYz1iLnF1ZXVlO251bGw9PT1jP3goXCIzMTFcIik6dm9pZCAwO2MubGFzdFJlbmRlcmVkUmVkdWNlcj1hO2lmKDA8ZWcpe3ZhciBkPWMuZGlzcGF0Y2g7aWYobnVsbCE9PWRnKXt2YXIgZT1kZy5nZXQoYyk7aWYodm9pZCAwIT09ZSl7ZGcuZGVsZXRlKGMpO3ZhciBmPWIubWVtb2l6ZWRTdGF0ZTtkbyBmPWEoZixlLmFjdGlvbiksZT1lLm5leHQ7d2hpbGUobnVsbCE9PWUpO2JkKGYsYi5tZW1vaXplZFN0YXRlKXx8KHFnPSEwKTtiLm1lbW9pemVkU3RhdGU9ZjtiLmJhc2VVcGRhdGU9PT1jLmxhc3QmJihiLmJhc2VTdGF0ZT1mKTtjLmxhc3RSZW5kZXJlZFN0YXRlPWY7cmV0dXJuW2YsZF19fXJldHVybltiLm1lbW9pemVkU3RhdGUsZF19ZD1jLmxhc3Q7dmFyIGc9Yi5iYXNlVXBkYXRlO2Y9Yi5iYXNlU3RhdGU7bnVsbCE9PWc/KG51bGwhPT1kJiYoZC5uZXh0PW51bGwpLGQ9Zy5uZXh0KTpkPW51bGwhPT1kP2QubmV4dDpudWxsO2lmKG51bGwhPT1cbmQpe3ZhciBoPWU9bnVsbCxsPWQsaz0hMTtkb3t2YXIgbT1sLmV4cGlyYXRpb25UaW1lO208V2Y/KGt8fChrPSEwLGg9ZyxlPWYpLG0+JGYmJigkZj1tKSk6Zj1sLmVhZ2VyUmVkdWNlcj09PWE/bC5lYWdlclN0YXRlOmEoZixsLmFjdGlvbik7Zz1sO2w9bC5uZXh0fXdoaWxlKG51bGwhPT1sJiZsIT09ZCk7a3x8KGg9ZyxlPWYpO2JkKGYsYi5tZW1vaXplZFN0YXRlKXx8KHFnPSEwKTtiLm1lbW9pemVkU3RhdGU9ZjtiLmJhc2VVcGRhdGU9aDtiLmJhc2VTdGF0ZT1lO2MubGFzdFJlbmRlcmVkU3RhdGU9Zn1yZXR1cm5bYi5tZW1vaXplZFN0YXRlLGMuZGlzcGF0Y2hdfVxuZnVuY3Rpb24gcmcoYSxiLGMsZCl7YT17dGFnOmEsY3JlYXRlOmIsZGVzdHJveTpjLGRlcHM6ZCxuZXh0Om51bGx9O251bGw9PT1hZz8oYWc9e2xhc3RFZmZlY3Q6bnVsbH0sYWcubGFzdEVmZmVjdD1hLm5leHQ9YSk6KGI9YWcubGFzdEVmZmVjdCxudWxsPT09Yj9hZy5sYXN0RWZmZWN0PWEubmV4dD1hOihjPWIubmV4dCxiLm5leHQ9YSxhLm5leHQ9YyxhZy5sYXN0RWZmZWN0PWEpKTtyZXR1cm4gYX1mdW5jdGlvbiBzZyhhLGIsYyxkKXt2YXIgZT1tZygpO2JnfD1hO2UubWVtb2l6ZWRTdGF0ZT1yZyhiLGMsdm9pZCAwLHZvaWQgMD09PWQ/bnVsbDpkKX1cbmZ1bmN0aW9uIHRnKGEsYixjLGQpe3ZhciBlPW5nKCk7ZD12b2lkIDA9PT1kP251bGw6ZDt2YXIgZj12b2lkIDA7aWYobnVsbCE9PU8pe3ZhciBnPU8ubWVtb2l6ZWRTdGF0ZTtmPWcuZGVzdHJveTtpZihudWxsIT09ZCYmZ2coZCxnLmRlcHMpKXtyZyhOZixjLGYsZCk7cmV0dXJufX1iZ3w9YTtlLm1lbW9pemVkU3RhdGU9cmcoYixjLGYsZCl9ZnVuY3Rpb24gdWcoYSxiKXtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYilyZXR1cm4gYT1hKCksYihhKSxmdW5jdGlvbigpe2IobnVsbCl9O2lmKG51bGwhPT1iJiZ2b2lkIDAhPT1iKXJldHVybiBhPWEoKSxiLmN1cnJlbnQ9YSxmdW5jdGlvbigpe2IuY3VycmVudD1udWxsfX1mdW5jdGlvbiB2Zygpe31cbmZ1bmN0aW9uIHdnKGEsYixjKXsyNT5lZz92b2lkIDA6eChcIjMwMVwiKTt2YXIgZD1hLmFsdGVybmF0ZTtpZihhPT09WGZ8fG51bGwhPT1kJiZkPT09WGYpaWYoY2c9ITAsYT17ZXhwaXJhdGlvblRpbWU6V2YsYWN0aW9uOmMsZWFnZXJSZWR1Y2VyOm51bGwsZWFnZXJTdGF0ZTpudWxsLG5leHQ6bnVsbH0sbnVsbD09PWRnJiYoZGc9bmV3IE1hcCksYz1kZy5nZXQoYiksdm9pZCAwPT09YylkZy5zZXQoYixhKTtlbHNle2ZvcihiPWM7bnVsbCE9PWIubmV4dDspYj1iLm5leHQ7Yi5uZXh0PWF9ZWxzZXtvZigpO3ZhciBlPWxmKCk7ZT1tZihlLGEpO3ZhciBmPXtleHBpcmF0aW9uVGltZTplLGFjdGlvbjpjLGVhZ2VyUmVkdWNlcjpudWxsLGVhZ2VyU3RhdGU6bnVsbCxuZXh0Om51bGx9LGc9Yi5sYXN0O2lmKG51bGw9PT1nKWYubmV4dD1mO2Vsc2V7dmFyIGg9Zy5uZXh0O251bGwhPT1oJiYoZi5uZXh0PWgpO2cubmV4dD1mfWIubGFzdD1mO2lmKDA9PT1hLmV4cGlyYXRpb25UaW1lJiYobnVsbD09PVxuZHx8MD09PWQuZXhwaXJhdGlvblRpbWUpJiYoZD1iLmxhc3RSZW5kZXJlZFJlZHVjZXIsbnVsbCE9PWQpKXRyeXt2YXIgbD1iLmxhc3RSZW5kZXJlZFN0YXRlLGs9ZChsLGMpO2YuZWFnZXJSZWR1Y2VyPWQ7Zi5lYWdlclN0YXRlPWs7aWYoYmQoayxsKSlyZXR1cm59Y2F0Y2gobSl7fWZpbmFsbHl7fXFmKGEsZSl9fVxudmFyIGtnPXtyZWFkQ29udGV4dDpNLHVzZUNhbGxiYWNrOmZnLHVzZUNvbnRleHQ6ZmcsdXNlRWZmZWN0OmZnLHVzZUltcGVyYXRpdmVIYW5kbGU6ZmcsdXNlTGF5b3V0RWZmZWN0OmZnLHVzZU1lbW86ZmcsdXNlUmVkdWNlcjpmZyx1c2VSZWY6ZmcsdXNlU3RhdGU6ZmcsdXNlRGVidWdWYWx1ZTpmZ30saWc9e3JlYWRDb250ZXh0Ok0sdXNlQ2FsbGJhY2s6ZnVuY3Rpb24oYSxiKXttZygpLm1lbW9pemVkU3RhdGU9W2Esdm9pZCAwPT09Yj9udWxsOmJdO3JldHVybiBhfSx1c2VDb250ZXh0Ok0sdXNlRWZmZWN0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIHNnKDUxNixVZnxUZixhLGIpfSx1c2VJbXBlcmF0aXZlSGFuZGxlOmZ1bmN0aW9uKGEsYixjKXtjPW51bGwhPT1jJiZ2b2lkIDAhPT1jP2MuY29uY2F0KFthXSk6bnVsbDtyZXR1cm4gc2coNCxQZnxTZix1Zy5iaW5kKG51bGwsYixhKSxjKX0sdXNlTGF5b3V0RWZmZWN0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIHNnKDQsUGZ8U2YsYSxiKX0sXG51c2VNZW1vOmZ1bmN0aW9uKGEsYil7dmFyIGM9bWcoKTtiPXZvaWQgMD09PWI/bnVsbDpiO2E9YSgpO2MubWVtb2l6ZWRTdGF0ZT1bYSxiXTtyZXR1cm4gYX0sdXNlUmVkdWNlcjpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9bWcoKTtiPXZvaWQgMCE9PWM/YyhiKTpiO2QubWVtb2l6ZWRTdGF0ZT1kLmJhc2VTdGF0ZT1iO2E9ZC5xdWV1ZT17bGFzdDpudWxsLGRpc3BhdGNoOm51bGwsbGFzdFJlbmRlcmVkUmVkdWNlcjphLGxhc3RSZW5kZXJlZFN0YXRlOmJ9O2E9YS5kaXNwYXRjaD13Zy5iaW5kKG51bGwsWGYsYSk7cmV0dXJuW2QubWVtb2l6ZWRTdGF0ZSxhXX0sdXNlUmVmOmZ1bmN0aW9uKGEpe3ZhciBiPW1nKCk7YT17Y3VycmVudDphfTtyZXR1cm4gYi5tZW1vaXplZFN0YXRlPWF9LHVzZVN0YXRlOmZ1bmN0aW9uKGEpe3ZhciBiPW1nKCk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGEmJihhPWEoKSk7Yi5tZW1vaXplZFN0YXRlPWIuYmFzZVN0YXRlPWE7YT1iLnF1ZXVlPXtsYXN0Om51bGwsZGlzcGF0Y2g6bnVsbCxcbmxhc3RSZW5kZXJlZFJlZHVjZXI6b2csbGFzdFJlbmRlcmVkU3RhdGU6YX07YT1hLmRpc3BhdGNoPXdnLmJpbmQobnVsbCxYZixhKTtyZXR1cm5bYi5tZW1vaXplZFN0YXRlLGFdfSx1c2VEZWJ1Z1ZhbHVlOnZnfSxqZz17cmVhZENvbnRleHQ6TSx1c2VDYWxsYmFjazpmdW5jdGlvbihhLGIpe3ZhciBjPW5nKCk7Yj12b2lkIDA9PT1iP251bGw6Yjt2YXIgZD1jLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PWQmJm51bGwhPT1iJiZnZyhiLGRbMV0pKXJldHVybiBkWzBdO2MubWVtb2l6ZWRTdGF0ZT1bYSxiXTtyZXR1cm4gYX0sdXNlQ29udGV4dDpNLHVzZUVmZmVjdDpmdW5jdGlvbihhLGIpe3JldHVybiB0Zyg1MTYsVWZ8VGYsYSxiKX0sdXNlSW1wZXJhdGl2ZUhhbmRsZTpmdW5jdGlvbihhLGIsYyl7Yz1udWxsIT09YyYmdm9pZCAwIT09Yz9jLmNvbmNhdChbYV0pOm51bGw7cmV0dXJuIHRnKDQsUGZ8U2YsdWcuYmluZChudWxsLGIsYSksYyl9LHVzZUxheW91dEVmZmVjdDpmdW5jdGlvbihhLFxuYil7cmV0dXJuIHRnKDQsUGZ8U2YsYSxiKX0sdXNlTWVtbzpmdW5jdGlvbihhLGIpe3ZhciBjPW5nKCk7Yj12b2lkIDA9PT1iP251bGw6Yjt2YXIgZD1jLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PWQmJm51bGwhPT1iJiZnZyhiLGRbMV0pKXJldHVybiBkWzBdO2E9YSgpO2MubWVtb2l6ZWRTdGF0ZT1bYSxiXTtyZXR1cm4gYX0sdXNlUmVkdWNlcjpwZyx1c2VSZWY6ZnVuY3Rpb24oKXtyZXR1cm4gbmcoKS5tZW1vaXplZFN0YXRlfSx1c2VTdGF0ZTpmdW5jdGlvbihhKXtyZXR1cm4gcGcob2csYSl9LHVzZURlYnVnVmFsdWU6dmd9LHhnPW51bGwseWc9bnVsbCx6Zz0hMTtcbmZ1bmN0aW9uIEFnKGEsYil7dmFyIGM9Syg1LG51bGwsbnVsbCwwKTtjLmVsZW1lbnRUeXBlPVwiREVMRVRFRFwiO2MudHlwZT1cIkRFTEVURURcIjtjLnN0YXRlTm9kZT1iO2MucmV0dXJuPWE7Yy5lZmZlY3RUYWc9ODtudWxsIT09YS5sYXN0RWZmZWN0PyhhLmxhc3RFZmZlY3QubmV4dEVmZmVjdD1jLGEubGFzdEVmZmVjdD1jKTphLmZpcnN0RWZmZWN0PWEubGFzdEVmZmVjdD1jfWZ1bmN0aW9uIEJnKGEsYil7c3dpdGNoKGEudGFnKXtjYXNlIDU6dmFyIGM9YS50eXBlO2I9MSE9PWIubm9kZVR5cGV8fGMudG9Mb3dlckNhc2UoKSE9PWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKT9udWxsOmI7cmV0dXJuIG51bGwhPT1iPyhhLnN0YXRlTm9kZT1iLCEwKTohMTtjYXNlIDY6cmV0dXJuIGI9XCJcIj09PWEucGVuZGluZ1Byb3BzfHwzIT09Yi5ub2RlVHlwZT9udWxsOmIsbnVsbCE9PWI/KGEuc3RhdGVOb2RlPWIsITApOiExO2Nhc2UgMTM6cmV0dXJuITE7ZGVmYXVsdDpyZXR1cm4hMX19XG5mdW5jdGlvbiBDZyhhKXtpZih6Zyl7dmFyIGI9eWc7aWYoYil7dmFyIGM9YjtpZighQmcoYSxiKSl7Yj1EZShjKTtpZighYnx8IUJnKGEsYikpe2EuZWZmZWN0VGFnfD0yO3pnPSExO3hnPWE7cmV0dXJufUFnKHhnLGMpfXhnPWE7eWc9RWUoYil9ZWxzZSBhLmVmZmVjdFRhZ3w9Mix6Zz0hMSx4Zz1hfX1mdW5jdGlvbiBEZyhhKXtmb3IoYT1hLnJldHVybjtudWxsIT09YSYmNSE9PWEudGFnJiYzIT09YS50YWcmJjE4IT09YS50YWc7KWE9YS5yZXR1cm47eGc9YX1mdW5jdGlvbiBFZyhhKXtpZihhIT09eGcpcmV0dXJuITE7aWYoIXpnKXJldHVybiBEZyhhKSx6Zz0hMCwhMTt2YXIgYj1hLnR5cGU7aWYoNSE9PWEudGFnfHxcImhlYWRcIiE9PWImJlwiYm9keVwiIT09YiYmIXhlKGIsYS5tZW1vaXplZFByb3BzKSlmb3IoYj15ZztiOylBZyhhLGIpLGI9RGUoYik7RGcoYSk7eWc9eGc/RGUoYS5zdGF0ZU5vZGUpOm51bGw7cmV0dXJuITB9ZnVuY3Rpb24gRmcoKXt5Zz14Zz1udWxsO3pnPSExfVxudmFyIEdnPVRiLlJlYWN0Q3VycmVudE93bmVyLHFnPSExO2Z1bmN0aW9uIFMoYSxiLGMsZCl7Yi5jaGlsZD1udWxsPT09YT9FZihiLG51bGwsYyxkKTpEZihiLGEuY2hpbGQsYyxkKX1mdW5jdGlvbiBIZyhhLGIsYyxkLGUpe2M9Yy5yZW5kZXI7dmFyIGY9Yi5yZWY7SWcoYixlKTtkPWhnKGEsYixjLGQsZixlKTtpZihudWxsIT09YSYmIXFnKXJldHVybiBiLnVwZGF0ZVF1ZXVlPWEudXBkYXRlUXVldWUsYi5lZmZlY3RUYWcmPS01MTcsYS5leHBpcmF0aW9uVGltZTw9ZSYmKGEuZXhwaXJhdGlvblRpbWU9MCksSmcoYSxiLGUpO2IuZWZmZWN0VGFnfD0xO1MoYSxiLGQsZSk7cmV0dXJuIGIuY2hpbGR9XG5mdW5jdGlvbiBLZyhhLGIsYyxkLGUsZil7aWYobnVsbD09PWEpe3ZhciBnPWMudHlwZTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZyYmIVZlKGcpJiZ2b2lkIDA9PT1nLmRlZmF1bHRQcm9wcyYmbnVsbD09PWMuY29tcGFyZSYmdm9pZCAwPT09Yy5kZWZhdWx0UHJvcHMpcmV0dXJuIGIudGFnPTE1LGIudHlwZT1nLExnKGEsYixnLGQsZSxmKTthPVllKGMudHlwZSxudWxsLGQsbnVsbCxiLm1vZGUsZik7YS5yZWY9Yi5yZWY7YS5yZXR1cm49YjtyZXR1cm4gYi5jaGlsZD1hfWc9YS5jaGlsZDtpZihlPGYmJihlPWcubWVtb2l6ZWRQcm9wcyxjPWMuY29tcGFyZSxjPW51bGwhPT1jP2M6ZGQsYyhlLGQpJiZhLnJlZj09PWIucmVmKSlyZXR1cm4gSmcoYSxiLGYpO2IuZWZmZWN0VGFnfD0xO2E9WGUoZyxkLGYpO2EucmVmPWIucmVmO2EucmV0dXJuPWI7cmV0dXJuIGIuY2hpbGQ9YX1cbmZ1bmN0aW9uIExnKGEsYixjLGQsZSxmKXtyZXR1cm4gbnVsbCE9PWEmJmRkKGEubWVtb2l6ZWRQcm9wcyxkKSYmYS5yZWY9PT1iLnJlZiYmKHFnPSExLGU8Zik/SmcoYSxiLGYpOk1nKGEsYixjLGQsZil9ZnVuY3Rpb24gTmcoYSxiKXt2YXIgYz1iLnJlZjtpZihudWxsPT09YSYmbnVsbCE9PWN8fG51bGwhPT1hJiZhLnJlZiE9PWMpYi5lZmZlY3RUYWd8PTEyOH1mdW5jdGlvbiBNZyhhLGIsYyxkLGUpe3ZhciBmPUooYyk/SWU6SC5jdXJyZW50O2Y9SmUoYixmKTtJZyhiLGUpO2M9aGcoYSxiLGMsZCxmLGUpO2lmKG51bGwhPT1hJiYhcWcpcmV0dXJuIGIudXBkYXRlUXVldWU9YS51cGRhdGVRdWV1ZSxiLmVmZmVjdFRhZyY9LTUxNyxhLmV4cGlyYXRpb25UaW1lPD1lJiYoYS5leHBpcmF0aW9uVGltZT0wKSxKZyhhLGIsZSk7Yi5lZmZlY3RUYWd8PTE7UyhhLGIsYyxlKTtyZXR1cm4gYi5jaGlsZH1cbmZ1bmN0aW9uIE9nKGEsYixjLGQsZSl7aWYoSihjKSl7dmFyIGY9ITA7T2UoYil9ZWxzZSBmPSExO0lnKGIsZSk7aWYobnVsbD09PWIuc3RhdGVOb2RlKW51bGwhPT1hJiYoYS5hbHRlcm5hdGU9bnVsbCxiLmFsdGVybmF0ZT1udWxsLGIuZWZmZWN0VGFnfD0yKSx2ZihiLGMsZCxlKSx4ZihiLGMsZCxlKSxkPSEwO2Vsc2UgaWYobnVsbD09PWEpe3ZhciBnPWIuc3RhdGVOb2RlLGg9Yi5tZW1vaXplZFByb3BzO2cucHJvcHM9aDt2YXIgbD1nLmNvbnRleHQsaz1jLmNvbnRleHRUeXBlO1wib2JqZWN0XCI9PT10eXBlb2YgayYmbnVsbCE9PWs/az1NKGspOihrPUooYyk/SWU6SC5jdXJyZW50LGs9SmUoYixrKSk7dmFyIG09Yy5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMscD1cImZ1bmN0aW9uXCI9PT10eXBlb2YgbXx8XCJmdW5jdGlvblwiPT09dHlwZW9mIGcuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGU7cHx8XCJmdW5jdGlvblwiIT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMmJlxuXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc3x8KGghPT1kfHxsIT09aykmJndmKGIsZyxkLGspO1BnPSExO3ZhciB0PWIubWVtb2l6ZWRTdGF0ZTtsPWcuc3RhdGU9dDt2YXIgQT1iLnVwZGF0ZVF1ZXVlO251bGwhPT1BJiYoeWYoYixBLGQsZyxlKSxsPWIubWVtb2l6ZWRTdGF0ZSk7aCE9PWR8fHQhPT1sfHxJLmN1cnJlbnR8fFBnPyhcImZ1bmN0aW9uXCI9PT10eXBlb2YgbSYmKGtmKGIsYyxtLGQpLGw9Yi5tZW1vaXplZFN0YXRlKSwoaD1QZ3x8dWYoYixjLGgsZCx0LGwsaykpPyhwfHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50JiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnRXaWxsTW91bnR8fChcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5jb21wb25lbnRXaWxsTW91bnQmJmcuY29tcG9uZW50V2lsbE1vdW50KCksXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCYmXG5nLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQoKSksXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50RGlkTW91bnQmJihiLmVmZmVjdFRhZ3w9NCkpOihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5jb21wb25lbnREaWRNb3VudCYmKGIuZWZmZWN0VGFnfD00KSxiLm1lbW9pemVkUHJvcHM9ZCxiLm1lbW9pemVkU3RhdGU9bCksZy5wcm9wcz1kLGcuc3RhdGU9bCxnLmNvbnRleHQ9ayxkPWgpOihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5jb21wb25lbnREaWRNb3VudCYmKGIuZWZmZWN0VGFnfD00KSxkPSExKX1lbHNlIGc9Yi5zdGF0ZU5vZGUsaD1iLm1lbW9pemVkUHJvcHMsZy5wcm9wcz1iLnR5cGU9PT1iLmVsZW1lbnRUeXBlP2g6TChiLnR5cGUsaCksbD1nLmNvbnRleHQsaz1jLmNvbnRleHRUeXBlLFwib2JqZWN0XCI9PT10eXBlb2YgayYmbnVsbCE9PWs/az1NKGspOihrPUooYyk/SWU6SC5jdXJyZW50LGs9SmUoYixrKSksbT1jLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcywocD1cImZ1bmN0aW9uXCI9PT1cbnR5cGVvZiBtfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSl8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzfHwoaCE9PWR8fGwhPT1rKSYmd2YoYixnLGQsayksUGc9ITEsbD1iLm1lbW9pemVkU3RhdGUsdD1nLnN0YXRlPWwsQT1iLnVwZGF0ZVF1ZXVlLG51bGwhPT1BJiYoeWYoYixBLGQsZyxlKSx0PWIubWVtb2l6ZWRTdGF0ZSksaCE9PWR8fGwhPT10fHxJLmN1cnJlbnR8fFBnPyhcImZ1bmN0aW9uXCI9PT10eXBlb2YgbSYmKGtmKGIsYyxtLGQpLHQ9Yi5tZW1vaXplZFN0YXRlKSwobT1QZ3x8dWYoYixjLGgsZCxsLHQsaykpPyhwfHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50V2lsbFVwZGF0ZXx8KFwiZnVuY3Rpb25cIj09PVxudHlwZW9mIGcuY29tcG9uZW50V2lsbFVwZGF0ZSYmZy5jb21wb25lbnRXaWxsVXBkYXRlKGQsdCxrKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSYmZy5VTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZShkLHQsaykpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudERpZFVwZGF0ZSYmKGIuZWZmZWN0VGFnfD00KSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSYmKGIuZWZmZWN0VGFnfD0yNTYpKTooXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50RGlkVXBkYXRlfHxoPT09YS5tZW1vaXplZFByb3BzJiZsPT09YS5tZW1vaXplZFN0YXRlfHwoYi5lZmZlY3RUYWd8PTQpLFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHxoPT09YS5tZW1vaXplZFByb3BzJiZsPT09YS5tZW1vaXplZFN0YXRlfHwoYi5lZmZlY3RUYWd8PTI1NiksYi5tZW1vaXplZFByb3BzPWQsYi5tZW1vaXplZFN0YXRlPVxudCksZy5wcm9wcz1kLGcuc3RhdGU9dCxnLmNvbnRleHQ9ayxkPW0pOihcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnREaWRVcGRhdGV8fGg9PT1hLm1lbW9pemVkUHJvcHMmJmw9PT1hLm1lbW9pemVkU3RhdGV8fChiLmVmZmVjdFRhZ3w9NCksXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fGg9PT1hLm1lbW9pemVkUHJvcHMmJmw9PT1hLm1lbW9pemVkU3RhdGV8fChiLmVmZmVjdFRhZ3w9MjU2KSxkPSExKTtyZXR1cm4gUWcoYSxiLGMsZCxmLGUpfVxuZnVuY3Rpb24gUWcoYSxiLGMsZCxlLGYpe05nKGEsYik7dmFyIGc9MCE9PShiLmVmZmVjdFRhZyY2NCk7aWYoIWQmJiFnKXJldHVybiBlJiZQZShiLGMsITEpLEpnKGEsYixmKTtkPWIuc3RhdGVOb2RlO0dnLmN1cnJlbnQ9Yjt2YXIgaD1nJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgYy5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I/bnVsbDpkLnJlbmRlcigpO2IuZWZmZWN0VGFnfD0xO251bGwhPT1hJiZnPyhiLmNoaWxkPURmKGIsYS5jaGlsZCxudWxsLGYpLGIuY2hpbGQ9RGYoYixudWxsLGgsZikpOlMoYSxiLGgsZik7Yi5tZW1vaXplZFN0YXRlPWQuc3RhdGU7ZSYmUGUoYixjLCEwKTtyZXR1cm4gYi5jaGlsZH1mdW5jdGlvbiBSZyhhKXt2YXIgYj1hLnN0YXRlTm9kZTtiLnBlbmRpbmdDb250ZXh0P01lKGEsYi5wZW5kaW5nQ29udGV4dCxiLnBlbmRpbmdDb250ZXh0IT09Yi5jb250ZXh0KTpiLmNvbnRleHQmJk1lKGEsYi5jb250ZXh0LCExKTtKZihhLGIuY29udGFpbmVySW5mbyl9XG5mdW5jdGlvbiBTZyhhLGIsYyl7dmFyIGQ9Yi5tb2RlLGU9Yi5wZW5kaW5nUHJvcHMsZj1iLm1lbW9pemVkU3RhdGU7aWYoMD09PShiLmVmZmVjdFRhZyY2NCkpe2Y9bnVsbDt2YXIgZz0hMX1lbHNlIGY9e3RpbWVkT3V0QXQ6bnVsbCE9PWY/Zi50aW1lZE91dEF0OjB9LGc9ITAsYi5lZmZlY3RUYWcmPS02NTtpZihudWxsPT09YSlpZihnKXt2YXIgaD1lLmZhbGxiYWNrO2E9WmUobnVsbCxkLDAsbnVsbCk7MD09PShiLm1vZGUmMSkmJihhLmNoaWxkPW51bGwhPT1iLm1lbW9pemVkU3RhdGU/Yi5jaGlsZC5jaGlsZDpiLmNoaWxkKTtkPVplKGgsZCxjLG51bGwpO2Euc2libGluZz1kO2M9YTtjLnJldHVybj1kLnJldHVybj1ifWVsc2UgYz1kPUVmKGIsbnVsbCxlLmNoaWxkcmVuLGMpO2Vsc2UgbnVsbCE9PWEubWVtb2l6ZWRTdGF0ZT8oZD1hLmNoaWxkLGg9ZC5zaWJsaW5nLGc/KGM9ZS5mYWxsYmFjayxlPVhlKGQsZC5wZW5kaW5nUHJvcHMsMCksMD09PShiLm1vZGUmMSkmJihnPW51bGwhPT1cbmIubWVtb2l6ZWRTdGF0ZT9iLmNoaWxkLmNoaWxkOmIuY2hpbGQsZyE9PWQuY2hpbGQmJihlLmNoaWxkPWcpKSxkPWUuc2libGluZz1YZShoLGMsaC5leHBpcmF0aW9uVGltZSksYz1lLGUuY2hpbGRFeHBpcmF0aW9uVGltZT0wLGMucmV0dXJuPWQucmV0dXJuPWIpOmM9ZD1EZihiLGQuY2hpbGQsZS5jaGlsZHJlbixjKSk6KGg9YS5jaGlsZCxnPyhnPWUuZmFsbGJhY2ssZT1aZShudWxsLGQsMCxudWxsKSxlLmNoaWxkPWgsMD09PShiLm1vZGUmMSkmJihlLmNoaWxkPW51bGwhPT1iLm1lbW9pemVkU3RhdGU/Yi5jaGlsZC5jaGlsZDpiLmNoaWxkKSxkPWUuc2libGluZz1aZShnLGQsYyxudWxsKSxkLmVmZmVjdFRhZ3w9MixjPWUsZS5jaGlsZEV4cGlyYXRpb25UaW1lPTAsYy5yZXR1cm49ZC5yZXR1cm49Yik6ZD1jPURmKGIsaCxlLmNoaWxkcmVuLGMpKSxiLnN0YXRlTm9kZT1hLnN0YXRlTm9kZTtiLm1lbW9pemVkU3RhdGU9ZjtiLmNoaWxkPWM7cmV0dXJuIGR9XG5mdW5jdGlvbiBKZyhhLGIsYyl7bnVsbCE9PWEmJihiLmNvbnRleHREZXBlbmRlbmNpZXM9YS5jb250ZXh0RGVwZW5kZW5jaWVzKTtpZihiLmNoaWxkRXhwaXJhdGlvblRpbWU8YylyZXR1cm4gbnVsbDtudWxsIT09YSYmYi5jaGlsZCE9PWEuY2hpbGQ/eChcIjE1M1wiKTp2b2lkIDA7aWYobnVsbCE9PWIuY2hpbGQpe2E9Yi5jaGlsZDtjPVhlKGEsYS5wZW5kaW5nUHJvcHMsYS5leHBpcmF0aW9uVGltZSk7Yi5jaGlsZD1jO2ZvcihjLnJldHVybj1iO251bGwhPT1hLnNpYmxpbmc7KWE9YS5zaWJsaW5nLGM9Yy5zaWJsaW5nPVhlKGEsYS5wZW5kaW5nUHJvcHMsYS5leHBpcmF0aW9uVGltZSksYy5yZXR1cm49YjtjLnNpYmxpbmc9bnVsbH1yZXR1cm4gYi5jaGlsZH1cbmZ1bmN0aW9uIFRnKGEsYixjKXt2YXIgZD1iLmV4cGlyYXRpb25UaW1lO2lmKG51bGwhPT1hKWlmKGEubWVtb2l6ZWRQcm9wcyE9PWIucGVuZGluZ1Byb3BzfHxJLmN1cnJlbnQpcWc9ITA7ZWxzZXtpZihkPGMpe3FnPSExO3N3aXRjaChiLnRhZyl7Y2FzZSAzOlJnKGIpO0ZnKCk7YnJlYWs7Y2FzZSA1OkxmKGIpO2JyZWFrO2Nhc2UgMTpKKGIudHlwZSkmJk9lKGIpO2JyZWFrO2Nhc2UgNDpKZihiLGIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm8pO2JyZWFrO2Nhc2UgMTA6VWcoYixiLm1lbW9pemVkUHJvcHMudmFsdWUpO2JyZWFrO2Nhc2UgMTM6aWYobnVsbCE9PWIubWVtb2l6ZWRTdGF0ZSl7ZD1iLmNoaWxkLmNoaWxkRXhwaXJhdGlvblRpbWU7aWYoMCE9PWQmJmQ+PWMpcmV0dXJuIFNnKGEsYixjKTtiPUpnKGEsYixjKTtyZXR1cm4gbnVsbCE9PWI/Yi5zaWJsaW5nOm51bGx9fXJldHVybiBKZyhhLGIsYyl9fWVsc2UgcWc9ITE7Yi5leHBpcmF0aW9uVGltZT0wO3N3aXRjaChiLnRhZyl7Y2FzZSAyOmQ9XG5iLmVsZW1lbnRUeXBlO251bGwhPT1hJiYoYS5hbHRlcm5hdGU9bnVsbCxiLmFsdGVybmF0ZT1udWxsLGIuZWZmZWN0VGFnfD0yKTthPWIucGVuZGluZ1Byb3BzO3ZhciBlPUplKGIsSC5jdXJyZW50KTtJZyhiLGMpO2U9aGcobnVsbCxiLGQsYSxlLGMpO2IuZWZmZWN0VGFnfD0xO2lmKFwib2JqZWN0XCI9PT10eXBlb2YgZSYmbnVsbCE9PWUmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBlLnJlbmRlciYmdm9pZCAwPT09ZS4kJHR5cGVvZil7Yi50YWc9MTtsZygpO2lmKEooZCkpe3ZhciBmPSEwO09lKGIpfWVsc2UgZj0hMTtiLm1lbW9pemVkU3RhdGU9bnVsbCE9PWUuc3RhdGUmJnZvaWQgMCE9PWUuc3RhdGU/ZS5zdGF0ZTpudWxsO3ZhciBnPWQuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBnJiZrZihiLGQsZyxhKTtlLnVwZGF0ZXI9dGY7Yi5zdGF0ZU5vZGU9ZTtlLl9yZWFjdEludGVybmFsRmliZXI9Yjt4ZihiLGQsYSxjKTtiPVFnKG51bGwsYixkLCEwLGYsXG5jKX1lbHNlIGIudGFnPTAsUyhudWxsLGIsZSxjKSxiPWIuY2hpbGQ7cmV0dXJuIGI7Y2FzZSAxNjplPWIuZWxlbWVudFR5cGU7bnVsbCE9PWEmJihhLmFsdGVybmF0ZT1udWxsLGIuYWx0ZXJuYXRlPW51bGwsYi5lZmZlY3RUYWd8PTIpO2Y9Yi5wZW5kaW5nUHJvcHM7YT1oZihlKTtiLnR5cGU9YTtlPWIudGFnPVdlKGEpO2Y9TChhLGYpO2c9dm9pZCAwO3N3aXRjaChlKXtjYXNlIDA6Zz1NZyhudWxsLGIsYSxmLGMpO2JyZWFrO2Nhc2UgMTpnPU9nKG51bGwsYixhLGYsYyk7YnJlYWs7Y2FzZSAxMTpnPUhnKG51bGwsYixhLGYsYyk7YnJlYWs7Y2FzZSAxNDpnPUtnKG51bGwsYixhLEwoYS50eXBlLGYpLGQsYyk7YnJlYWs7ZGVmYXVsdDp4KFwiMzA2XCIsYSxcIlwiKX1yZXR1cm4gZztjYXNlIDA6cmV0dXJuIGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZT1iLmVsZW1lbnRUeXBlPT09ZD9lOkwoZCxlKSxNZyhhLGIsZCxlLGMpO2Nhc2UgMTpyZXR1cm4gZD1iLnR5cGUsZT1iLnBlbmRpbmdQcm9wcyxcbmU9Yi5lbGVtZW50VHlwZT09PWQ/ZTpMKGQsZSksT2coYSxiLGQsZSxjKTtjYXNlIDM6UmcoYik7ZD1iLnVwZGF0ZVF1ZXVlO251bGw9PT1kP3goXCIyODJcIik6dm9pZCAwO2U9Yi5tZW1vaXplZFN0YXRlO2U9bnVsbCE9PWU/ZS5lbGVtZW50Om51bGw7eWYoYixkLGIucGVuZGluZ1Byb3BzLG51bGwsYyk7ZD1iLm1lbW9pemVkU3RhdGUuZWxlbWVudDtpZihkPT09ZSlGZygpLGI9SmcoYSxiLGMpO2Vsc2V7ZT1iLnN0YXRlTm9kZTtpZihlPShudWxsPT09YXx8bnVsbD09PWEuY2hpbGQpJiZlLmh5ZHJhdGUpeWc9RWUoYi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbykseGc9YixlPXpnPSEwO2U/KGIuZWZmZWN0VGFnfD0yLGIuY2hpbGQ9RWYoYixudWxsLGQsYykpOihTKGEsYixkLGMpLEZnKCkpO2I9Yi5jaGlsZH1yZXR1cm4gYjtjYXNlIDU6cmV0dXJuIExmKGIpLG51bGw9PT1hJiZDZyhiKSxkPWIudHlwZSxlPWIucGVuZGluZ1Byb3BzLGY9bnVsbCE9PWE/YS5tZW1vaXplZFByb3BzOm51bGwsXG5nPWUuY2hpbGRyZW4seGUoZCxlKT9nPW51bGw6bnVsbCE9PWYmJnhlKGQsZikmJihiLmVmZmVjdFRhZ3w9MTYpLE5nKGEsYiksMSE9PWMmJmIubW9kZSYxJiZlLmhpZGRlbj8oYi5leHBpcmF0aW9uVGltZT1iLmNoaWxkRXhwaXJhdGlvblRpbWU9MSxiPW51bGwpOihTKGEsYixnLGMpLGI9Yi5jaGlsZCksYjtjYXNlIDY6cmV0dXJuIG51bGw9PT1hJiZDZyhiKSxudWxsO2Nhc2UgMTM6cmV0dXJuIFNnKGEsYixjKTtjYXNlIDQ6cmV0dXJuIEpmKGIsYi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyksZD1iLnBlbmRpbmdQcm9wcyxudWxsPT09YT9iLmNoaWxkPURmKGIsbnVsbCxkLGMpOlMoYSxiLGQsYyksYi5jaGlsZDtjYXNlIDExOnJldHVybiBkPWIudHlwZSxlPWIucGVuZGluZ1Byb3BzLGU9Yi5lbGVtZW50VHlwZT09PWQ/ZTpMKGQsZSksSGcoYSxiLGQsZSxjKTtjYXNlIDc6cmV0dXJuIFMoYSxiLGIucGVuZGluZ1Byb3BzLGMpLGIuY2hpbGQ7Y2FzZSA4OnJldHVybiBTKGEsYixiLnBlbmRpbmdQcm9wcy5jaGlsZHJlbixcbmMpLGIuY2hpbGQ7Y2FzZSAxMjpyZXR1cm4gUyhhLGIsYi5wZW5kaW5nUHJvcHMuY2hpbGRyZW4sYyksYi5jaGlsZDtjYXNlIDEwOmE6e2Q9Yi50eXBlLl9jb250ZXh0O2U9Yi5wZW5kaW5nUHJvcHM7Zz1iLm1lbW9pemVkUHJvcHM7Zj1lLnZhbHVlO1VnKGIsZik7aWYobnVsbCE9PWcpe3ZhciBoPWcudmFsdWU7Zj1iZChoLGYpPzA6KFwiZnVuY3Rpb25cIj09PXR5cGVvZiBkLl9jYWxjdWxhdGVDaGFuZ2VkQml0cz9kLl9jYWxjdWxhdGVDaGFuZ2VkQml0cyhoLGYpOjEwNzM3NDE4MjMpfDA7aWYoMD09PWYpe2lmKGcuY2hpbGRyZW49PT1lLmNoaWxkcmVuJiYhSS5jdXJyZW50KXtiPUpnKGEsYixjKTticmVhayBhfX1lbHNlIGZvcihoPWIuY2hpbGQsbnVsbCE9PWgmJihoLnJldHVybj1iKTtudWxsIT09aDspe3ZhciBsPWguY29udGV4dERlcGVuZGVuY2llcztpZihudWxsIT09bCl7Zz1oLmNoaWxkO2Zvcih2YXIgaz1sLmZpcnN0O251bGwhPT1rOyl7aWYoay5jb250ZXh0PT09ZCYmMCE9PVxuKGsub2JzZXJ2ZWRCaXRzJmYpKXsxPT09aC50YWcmJihrPW5mKGMpLGsudGFnPXNmLHBmKGgsaykpO2guZXhwaXJhdGlvblRpbWU8YyYmKGguZXhwaXJhdGlvblRpbWU9Yyk7az1oLmFsdGVybmF0ZTtudWxsIT09ayYmay5leHBpcmF0aW9uVGltZTxjJiYoay5leHBpcmF0aW9uVGltZT1jKTtrPWM7Zm9yKHZhciBtPWgucmV0dXJuO251bGwhPT1tOyl7dmFyIHA9bS5hbHRlcm5hdGU7aWYobS5jaGlsZEV4cGlyYXRpb25UaW1lPGspbS5jaGlsZEV4cGlyYXRpb25UaW1lPWssbnVsbCE9PXAmJnAuY2hpbGRFeHBpcmF0aW9uVGltZTxrJiYocC5jaGlsZEV4cGlyYXRpb25UaW1lPWspO2Vsc2UgaWYobnVsbCE9PXAmJnAuY2hpbGRFeHBpcmF0aW9uVGltZTxrKXAuY2hpbGRFeHBpcmF0aW9uVGltZT1rO2Vsc2UgYnJlYWs7bT1tLnJldHVybn1sLmV4cGlyYXRpb25UaW1lPGMmJihsLmV4cGlyYXRpb25UaW1lPWMpO2JyZWFrfWs9ay5uZXh0fX1lbHNlIGc9MTA9PT1oLnRhZz9oLnR5cGU9PT1iLnR5cGU/XG5udWxsOmguY2hpbGQ6aC5jaGlsZDtpZihudWxsIT09ZylnLnJldHVybj1oO2Vsc2UgZm9yKGc9aDtudWxsIT09Zzspe2lmKGc9PT1iKXtnPW51bGw7YnJlYWt9aD1nLnNpYmxpbmc7aWYobnVsbCE9PWgpe2gucmV0dXJuPWcucmV0dXJuO2c9aDticmVha31nPWcucmV0dXJufWg9Z319UyhhLGIsZS5jaGlsZHJlbixjKTtiPWIuY2hpbGR9cmV0dXJuIGI7Y2FzZSA5OnJldHVybiBlPWIudHlwZSxmPWIucGVuZGluZ1Byb3BzLGQ9Zi5jaGlsZHJlbixJZyhiLGMpLGU9TShlLGYudW5zdGFibGVfb2JzZXJ2ZWRCaXRzKSxkPWQoZSksYi5lZmZlY3RUYWd8PTEsUyhhLGIsZCxjKSxiLmNoaWxkO2Nhc2UgMTQ6cmV0dXJuIGU9Yi50eXBlLGY9TChlLGIucGVuZGluZ1Byb3BzKSxmPUwoZS50eXBlLGYpLEtnKGEsYixlLGYsZCxjKTtjYXNlIDE1OnJldHVybiBMZyhhLGIsYi50eXBlLGIucGVuZGluZ1Byb3BzLGQsYyk7Y2FzZSAxNzpyZXR1cm4gZD1iLnR5cGUsZT1iLnBlbmRpbmdQcm9wcyxlPWIuZWxlbWVudFR5cGU9PT1cbmQ/ZTpMKGQsZSksbnVsbCE9PWEmJihhLmFsdGVybmF0ZT1udWxsLGIuYWx0ZXJuYXRlPW51bGwsYi5lZmZlY3RUYWd8PTIpLGIudGFnPTEsSihkKT8oYT0hMCxPZShiKSk6YT0hMSxJZyhiLGMpLHZmKGIsZCxlLGMpLHhmKGIsZCxlLGMpLFFnKG51bGwsYixkLCEwLGEsYyl9eChcIjE1NlwiKX12YXIgVmc9e2N1cnJlbnQ6bnVsbH0sV2c9bnVsbCxYZz1udWxsLFlnPW51bGw7ZnVuY3Rpb24gVWcoYSxiKXt2YXIgYz1hLnR5cGUuX2NvbnRleHQ7RyhWZyxjLl9jdXJyZW50VmFsdWUsYSk7Yy5fY3VycmVudFZhbHVlPWJ9ZnVuY3Rpb24gWmcoYSl7dmFyIGI9VmcuY3VycmVudDtGKFZnLGEpO2EudHlwZS5fY29udGV4dC5fY3VycmVudFZhbHVlPWJ9ZnVuY3Rpb24gSWcoYSxiKXtXZz1hO1lnPVhnPW51bGw7dmFyIGM9YS5jb250ZXh0RGVwZW5kZW5jaWVzO251bGwhPT1jJiZjLmV4cGlyYXRpb25UaW1lPj1iJiYocWc9ITApO2EuY29udGV4dERlcGVuZGVuY2llcz1udWxsfVxuZnVuY3Rpb24gTShhLGIpe2lmKFlnIT09YSYmITEhPT1iJiYwIT09Yil7aWYoXCJudW1iZXJcIiE9PXR5cGVvZiBifHwxMDczNzQxODIzPT09YilZZz1hLGI9MTA3Mzc0MTgyMztiPXtjb250ZXh0OmEsb2JzZXJ2ZWRCaXRzOmIsbmV4dDpudWxsfTtudWxsPT09WGc/KG51bGw9PT1XZz94KFwiMzA4XCIpOnZvaWQgMCxYZz1iLFdnLmNvbnRleHREZXBlbmRlbmNpZXM9e2ZpcnN0OmIsZXhwaXJhdGlvblRpbWU6MH0pOlhnPVhnLm5leHQ9Yn1yZXR1cm4gYS5fY3VycmVudFZhbHVlfXZhciAkZz0wLHJmPTEsc2Y9MixhaD0zLFBnPSExO2Z1bmN0aW9uIGJoKGEpe3JldHVybntiYXNlU3RhdGU6YSxmaXJzdFVwZGF0ZTpudWxsLGxhc3RVcGRhdGU6bnVsbCxmaXJzdENhcHR1cmVkVXBkYXRlOm51bGwsbGFzdENhcHR1cmVkVXBkYXRlOm51bGwsZmlyc3RFZmZlY3Q6bnVsbCxsYXN0RWZmZWN0Om51bGwsZmlyc3RDYXB0dXJlZEVmZmVjdDpudWxsLGxhc3RDYXB0dXJlZEVmZmVjdDpudWxsfX1cbmZ1bmN0aW9uIGNoKGEpe3JldHVybntiYXNlU3RhdGU6YS5iYXNlU3RhdGUsZmlyc3RVcGRhdGU6YS5maXJzdFVwZGF0ZSxsYXN0VXBkYXRlOmEubGFzdFVwZGF0ZSxmaXJzdENhcHR1cmVkVXBkYXRlOm51bGwsbGFzdENhcHR1cmVkVXBkYXRlOm51bGwsZmlyc3RFZmZlY3Q6bnVsbCxsYXN0RWZmZWN0Om51bGwsZmlyc3RDYXB0dXJlZEVmZmVjdDpudWxsLGxhc3RDYXB0dXJlZEVmZmVjdDpudWxsfX1mdW5jdGlvbiBuZihhKXtyZXR1cm57ZXhwaXJhdGlvblRpbWU6YSx0YWc6JGcscGF5bG9hZDpudWxsLGNhbGxiYWNrOm51bGwsbmV4dDpudWxsLG5leHRFZmZlY3Q6bnVsbH19ZnVuY3Rpb24gZGgoYSxiKXtudWxsPT09YS5sYXN0VXBkYXRlP2EuZmlyc3RVcGRhdGU9YS5sYXN0VXBkYXRlPWI6KGEubGFzdFVwZGF0ZS5uZXh0PWIsYS5sYXN0VXBkYXRlPWIpfVxuZnVuY3Rpb24gcGYoYSxiKXt2YXIgYz1hLmFsdGVybmF0ZTtpZihudWxsPT09Yyl7dmFyIGQ9YS51cGRhdGVRdWV1ZTt2YXIgZT1udWxsO251bGw9PT1kJiYoZD1hLnVwZGF0ZVF1ZXVlPWJoKGEubWVtb2l6ZWRTdGF0ZSkpfWVsc2UgZD1hLnVwZGF0ZVF1ZXVlLGU9Yy51cGRhdGVRdWV1ZSxudWxsPT09ZD9udWxsPT09ZT8oZD1hLnVwZGF0ZVF1ZXVlPWJoKGEubWVtb2l6ZWRTdGF0ZSksZT1jLnVwZGF0ZVF1ZXVlPWJoKGMubWVtb2l6ZWRTdGF0ZSkpOmQ9YS51cGRhdGVRdWV1ZT1jaChlKTpudWxsPT09ZSYmKGU9Yy51cGRhdGVRdWV1ZT1jaChkKSk7bnVsbD09PWV8fGQ9PT1lP2RoKGQsYik6bnVsbD09PWQubGFzdFVwZGF0ZXx8bnVsbD09PWUubGFzdFVwZGF0ZT8oZGgoZCxiKSxkaChlLGIpKTooZGgoZCxiKSxlLmxhc3RVcGRhdGU9Yil9XG5mdW5jdGlvbiBlaChhLGIpe3ZhciBjPWEudXBkYXRlUXVldWU7Yz1udWxsPT09Yz9hLnVwZGF0ZVF1ZXVlPWJoKGEubWVtb2l6ZWRTdGF0ZSk6ZmgoYSxjKTtudWxsPT09Yy5sYXN0Q2FwdHVyZWRVcGRhdGU/Yy5maXJzdENhcHR1cmVkVXBkYXRlPWMubGFzdENhcHR1cmVkVXBkYXRlPWI6KGMubGFzdENhcHR1cmVkVXBkYXRlLm5leHQ9YixjLmxhc3RDYXB0dXJlZFVwZGF0ZT1iKX1mdW5jdGlvbiBmaChhLGIpe3ZhciBjPWEuYWx0ZXJuYXRlO251bGwhPT1jJiZiPT09Yy51cGRhdGVRdWV1ZSYmKGI9YS51cGRhdGVRdWV1ZT1jaChiKSk7cmV0dXJuIGJ9XG5mdW5jdGlvbiBnaChhLGIsYyxkLGUsZil7c3dpdGNoKGMudGFnKXtjYXNlIHJmOnJldHVybiBhPWMucGF5bG9hZCxcImZ1bmN0aW9uXCI9PT10eXBlb2YgYT9hLmNhbGwoZixkLGUpOmE7Y2FzZSBhaDphLmVmZmVjdFRhZz1hLmVmZmVjdFRhZyYtMjA0OXw2NDtjYXNlICRnOmE9Yy5wYXlsb2FkO2U9XCJmdW5jdGlvblwiPT09dHlwZW9mIGE/YS5jYWxsKGYsZCxlKTphO2lmKG51bGw9PT1lfHx2b2lkIDA9PT1lKWJyZWFrO3JldHVybiBuKHt9LGQsZSk7Y2FzZSBzZjpQZz0hMH1yZXR1cm4gZH1cbmZ1bmN0aW9uIHlmKGEsYixjLGQsZSl7UGc9ITE7Yj1maChhLGIpO2Zvcih2YXIgZj1iLmJhc2VTdGF0ZSxnPW51bGwsaD0wLGw9Yi5maXJzdFVwZGF0ZSxrPWY7bnVsbCE9PWw7KXt2YXIgbT1sLmV4cGlyYXRpb25UaW1lO208ZT8obnVsbD09PWcmJihnPWwsZj1rKSxoPG0mJihoPW0pKTooaz1naChhLGIsbCxrLGMsZCksbnVsbCE9PWwuY2FsbGJhY2smJihhLmVmZmVjdFRhZ3w9MzIsbC5uZXh0RWZmZWN0PW51bGwsbnVsbD09PWIubGFzdEVmZmVjdD9iLmZpcnN0RWZmZWN0PWIubGFzdEVmZmVjdD1sOihiLmxhc3RFZmZlY3QubmV4dEVmZmVjdD1sLGIubGFzdEVmZmVjdD1sKSkpO2w9bC5uZXh0fW09bnVsbDtmb3IobD1iLmZpcnN0Q2FwdHVyZWRVcGRhdGU7bnVsbCE9PWw7KXt2YXIgcD1sLmV4cGlyYXRpb25UaW1lO3A8ZT8obnVsbD09PW0mJihtPWwsbnVsbD09PWcmJihmPWspKSxoPHAmJihoPXApKTooaz1naChhLGIsbCxrLGMsZCksbnVsbCE9PWwuY2FsbGJhY2smJihhLmVmZmVjdFRhZ3w9XG4zMixsLm5leHRFZmZlY3Q9bnVsbCxudWxsPT09Yi5sYXN0Q2FwdHVyZWRFZmZlY3Q/Yi5maXJzdENhcHR1cmVkRWZmZWN0PWIubGFzdENhcHR1cmVkRWZmZWN0PWw6KGIubGFzdENhcHR1cmVkRWZmZWN0Lm5leHRFZmZlY3Q9bCxiLmxhc3RDYXB0dXJlZEVmZmVjdD1sKSkpO2w9bC5uZXh0fW51bGw9PT1nJiYoYi5sYXN0VXBkYXRlPW51bGwpO251bGw9PT1tP2IubGFzdENhcHR1cmVkVXBkYXRlPW51bGw6YS5lZmZlY3RUYWd8PTMyO251bGw9PT1nJiZudWxsPT09bSYmKGY9ayk7Yi5iYXNlU3RhdGU9ZjtiLmZpcnN0VXBkYXRlPWc7Yi5maXJzdENhcHR1cmVkVXBkYXRlPW07YS5leHBpcmF0aW9uVGltZT1oO2EubWVtb2l6ZWRTdGF0ZT1rfVxuZnVuY3Rpb24gaGgoYSxiLGMpe251bGwhPT1iLmZpcnN0Q2FwdHVyZWRVcGRhdGUmJihudWxsIT09Yi5sYXN0VXBkYXRlJiYoYi5sYXN0VXBkYXRlLm5leHQ9Yi5maXJzdENhcHR1cmVkVXBkYXRlLGIubGFzdFVwZGF0ZT1iLmxhc3RDYXB0dXJlZFVwZGF0ZSksYi5maXJzdENhcHR1cmVkVXBkYXRlPWIubGFzdENhcHR1cmVkVXBkYXRlPW51bGwpO2loKGIuZmlyc3RFZmZlY3QsYyk7Yi5maXJzdEVmZmVjdD1iLmxhc3RFZmZlY3Q9bnVsbDtpaChiLmZpcnN0Q2FwdHVyZWRFZmZlY3QsYyk7Yi5maXJzdENhcHR1cmVkRWZmZWN0PWIubGFzdENhcHR1cmVkRWZmZWN0PW51bGx9ZnVuY3Rpb24gaWgoYSxiKXtmb3IoO251bGwhPT1hOyl7dmFyIGM9YS5jYWxsYmFjaztpZihudWxsIT09Yyl7YS5jYWxsYmFjaz1udWxsO3ZhciBkPWI7XCJmdW5jdGlvblwiIT09dHlwZW9mIGM/eChcIjE5MVwiLGMpOnZvaWQgMDtjLmNhbGwoZCl9YT1hLm5leHRFZmZlY3R9fVxuZnVuY3Rpb24gamgoYSxiKXtyZXR1cm57dmFsdWU6YSxzb3VyY2U6YixzdGFjazpqYyhiKX19ZnVuY3Rpb24ga2goYSl7YS5lZmZlY3RUYWd8PTR9dmFyIGxoPXZvaWQgMCxtaD12b2lkIDAsbmg9dm9pZCAwLG9oPXZvaWQgMDtsaD1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1iLmNoaWxkO251bGwhPT1jOyl7aWYoNT09PWMudGFnfHw2PT09Yy50YWcpYS5hcHBlbmRDaGlsZChjLnN0YXRlTm9kZSk7ZWxzZSBpZig0IT09Yy50YWcmJm51bGwhPT1jLmNoaWxkKXtjLmNoaWxkLnJldHVybj1jO2M9Yy5jaGlsZDtjb250aW51ZX1pZihjPT09YilicmVhaztmb3IoO251bGw9PT1jLnNpYmxpbmc7KXtpZihudWxsPT09Yy5yZXR1cm58fGMucmV0dXJuPT09YilyZXR1cm47Yz1jLnJldHVybn1jLnNpYmxpbmcucmV0dXJuPWMucmV0dXJuO2M9Yy5zaWJsaW5nfX07bWg9ZnVuY3Rpb24oKXt9O1xubmg9ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZj1hLm1lbW9pemVkUHJvcHM7aWYoZiE9PWQpe3ZhciBnPWIuc3RhdGVOb2RlO0lmKE4uY3VycmVudCk7YT1udWxsO3N3aXRjaChjKXtjYXNlIFwiaW5wdXRcIjpmPXZjKGcsZik7ZD12YyhnLGQpO2E9W107YnJlYWs7Y2FzZSBcIm9wdGlvblwiOmY9JGQoZyxmKTtkPSRkKGcsZCk7YT1bXTticmVhaztjYXNlIFwic2VsZWN0XCI6Zj1uKHt9LGYse3ZhbHVlOnZvaWQgMH0pO2Q9bih7fSxkLHt2YWx1ZTp2b2lkIDB9KTthPVtdO2JyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOmY9YmUoZyxmKTtkPWJlKGcsZCk7YT1bXTticmVhaztkZWZhdWx0OlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBmLm9uQ2xpY2smJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBkLm9uQ2xpY2smJihnLm9uY2xpY2s9dGUpfXFlKGMsZCk7Zz1jPXZvaWQgMDt2YXIgaD1udWxsO2ZvcihjIGluIGYpaWYoIWQuaGFzT3duUHJvcGVydHkoYykmJmYuaGFzT3duUHJvcGVydHkoYykmJm51bGwhPWZbY10paWYoXCJzdHlsZVwiPT09XG5jKXt2YXIgbD1mW2NdO2ZvcihnIGluIGwpbC5oYXNPd25Qcm9wZXJ0eShnKSYmKGh8fChoPXt9KSxoW2ddPVwiXCIpfWVsc2VcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCIhPT1jJiZcImNoaWxkcmVuXCIhPT1jJiZcInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ1wiIT09YyYmXCJzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmdcIiE9PWMmJlwiYXV0b0ZvY3VzXCIhPT1jJiYocmEuaGFzT3duUHJvcGVydHkoYyk/YXx8KGE9W10pOihhPWF8fFtdKS5wdXNoKGMsbnVsbCkpO2ZvcihjIGluIGQpe3ZhciBrPWRbY107bD1udWxsIT1mP2ZbY106dm9pZCAwO2lmKGQuaGFzT3duUHJvcGVydHkoYykmJmshPT1sJiYobnVsbCE9a3x8bnVsbCE9bCkpaWYoXCJzdHlsZVwiPT09YylpZihsKXtmb3IoZyBpbiBsKSFsLmhhc093blByb3BlcnR5KGcpfHxrJiZrLmhhc093blByb3BlcnR5KGcpfHwoaHx8KGg9e30pLGhbZ109XCJcIik7Zm9yKGcgaW4gaylrLmhhc093blByb3BlcnR5KGcpJiZsW2ddIT09a1tnXSYmKGh8fFxuKGg9e30pLGhbZ109a1tnXSl9ZWxzZSBofHwoYXx8KGE9W10pLGEucHVzaChjLGgpKSxoPWs7ZWxzZVwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIj09PWM/KGs9az9rLl9faHRtbDp2b2lkIDAsbD1sP2wuX19odG1sOnZvaWQgMCxudWxsIT1rJiZsIT09ayYmKGE9YXx8W10pLnB1c2goYyxcIlwiK2spKTpcImNoaWxkcmVuXCI9PT1jP2w9PT1rfHxcInN0cmluZ1wiIT09dHlwZW9mIGsmJlwibnVtYmVyXCIhPT10eXBlb2Yga3x8KGE9YXx8W10pLnB1c2goYyxcIlwiK2spOlwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nXCIhPT1jJiZcInN1cHByZXNzSHlkcmF0aW9uV2FybmluZ1wiIT09YyYmKHJhLmhhc093blByb3BlcnR5KGMpPyhudWxsIT1rJiZzZShlLGMpLGF8fGw9PT1rfHwoYT1bXSkpOihhPWF8fFtdKS5wdXNoKGMsaykpfWgmJihhPWF8fFtdKS5wdXNoKFwic3R5bGVcIixoKTtlPWE7KGIudXBkYXRlUXVldWU9ZSkmJmtoKGIpfX07b2g9ZnVuY3Rpb24oYSxiLGMsZCl7YyE9PWQmJmtoKGIpfTtcbnZhciBwaD1cImZ1bmN0aW9uXCI9PT10eXBlb2YgV2Vha1NldD9XZWFrU2V0OlNldDtmdW5jdGlvbiBxaChhLGIpe3ZhciBjPWIuc291cmNlLGQ9Yi5zdGFjaztudWxsPT09ZCYmbnVsbCE9PWMmJihkPWpjKGMpKTtudWxsIT09YyYmaWMoYy50eXBlKTtiPWIudmFsdWU7bnVsbCE9PWEmJjE9PT1hLnRhZyYmaWMoYS50eXBlKTt0cnl7Y29uc29sZS5lcnJvcihiKX1jYXRjaChlKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgZTt9KX19ZnVuY3Rpb24gcmgoYSl7dmFyIGI9YS5yZWY7aWYobnVsbCE9PWIpaWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGIpdHJ5e2IobnVsbCl9Y2F0Y2goYyl7c2goYSxjKX1lbHNlIGIuY3VycmVudD1udWxsfVxuZnVuY3Rpb24gdGgoYSxiLGMpe2M9Yy51cGRhdGVRdWV1ZTtjPW51bGwhPT1jP2MubGFzdEVmZmVjdDpudWxsO2lmKG51bGwhPT1jKXt2YXIgZD1jPWMubmV4dDtkb3tpZigoZC50YWcmYSkhPT1OZil7dmFyIGU9ZC5kZXN0cm95O2QuZGVzdHJveT12b2lkIDA7dm9pZCAwIT09ZSYmZSgpfShkLnRhZyZiKSE9PU5mJiYoZT1kLmNyZWF0ZSxkLmRlc3Ryb3k9ZSgpKTtkPWQubmV4dH13aGlsZShkIT09Yyl9fVxuZnVuY3Rpb24gdWgoYSxiKXtmb3IodmFyIGM9YTs7KXtpZig1PT09Yy50YWcpe3ZhciBkPWMuc3RhdGVOb2RlO2lmKGIpZC5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO2Vsc2V7ZD1jLnN0YXRlTm9kZTt2YXIgZT1jLm1lbW9pemVkUHJvcHMuc3R5bGU7ZT12b2lkIDAhPT1lJiZudWxsIT09ZSYmZS5oYXNPd25Qcm9wZXJ0eShcImRpc3BsYXlcIik/ZS5kaXNwbGF5Om51bGw7ZC5zdHlsZS5kaXNwbGF5PW5lKFwiZGlzcGxheVwiLGUpfX1lbHNlIGlmKDY9PT1jLnRhZyljLnN0YXRlTm9kZS5ub2RlVmFsdWU9Yj9cIlwiOmMubWVtb2l6ZWRQcm9wcztlbHNlIGlmKDEzPT09Yy50YWcmJm51bGwhPT1jLm1lbW9pemVkU3RhdGUpe2Q9Yy5jaGlsZC5zaWJsaW5nO2QucmV0dXJuPWM7Yz1kO2NvbnRpbnVlfWVsc2UgaWYobnVsbCE9PWMuY2hpbGQpe2MuY2hpbGQucmV0dXJuPWM7Yz1jLmNoaWxkO2NvbnRpbnVlfWlmKGM9PT1hKWJyZWFrO2Zvcig7bnVsbD09PWMuc2libGluZzspe2lmKG51bGw9PT1jLnJldHVybnx8XG5jLnJldHVybj09PWEpcmV0dXJuO2M9Yy5yZXR1cm59Yy5zaWJsaW5nLnJldHVybj1jLnJldHVybjtjPWMuc2libGluZ319XG5mdW5jdGlvbiB2aChhKXtcImZ1bmN0aW9uXCI9PT10eXBlb2YgUmUmJlJlKGEpO3N3aXRjaChhLnRhZyl7Y2FzZSAwOmNhc2UgMTE6Y2FzZSAxNDpjYXNlIDE1OnZhciBiPWEudXBkYXRlUXVldWU7aWYobnVsbCE9PWImJihiPWIubGFzdEVmZmVjdCxudWxsIT09Yikpe3ZhciBjPWI9Yi5uZXh0O2Rve3ZhciBkPWMuZGVzdHJveTtpZih2b2lkIDAhPT1kKXt2YXIgZT1hO3RyeXtkKCl9Y2F0Y2goZil7c2goZSxmKX19Yz1jLm5leHR9d2hpbGUoYyE9PWIpfWJyZWFrO2Nhc2UgMTpyaChhKTtiPWEuc3RhdGVOb2RlO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBiLmNvbXBvbmVudFdpbGxVbm1vdW50KXRyeXtiLnByb3BzPWEubWVtb2l6ZWRQcm9wcyxiLnN0YXRlPWEubWVtb2l6ZWRTdGF0ZSxiLmNvbXBvbmVudFdpbGxVbm1vdW50KCl9Y2F0Y2goZil7c2goYSxmKX1icmVhaztjYXNlIDU6cmgoYSk7YnJlYWs7Y2FzZSA0OndoKGEpfX1cbmZ1bmN0aW9uIHhoKGEpe3JldHVybiA1PT09YS50YWd8fDM9PT1hLnRhZ3x8ND09PWEudGFnfVxuZnVuY3Rpb24geWgoYSl7YTp7Zm9yKHZhciBiPWEucmV0dXJuO251bGwhPT1iOyl7aWYoeGgoYikpe3ZhciBjPWI7YnJlYWsgYX1iPWIucmV0dXJufXgoXCIxNjBcIik7Yz12b2lkIDB9dmFyIGQ9Yj12b2lkIDA7c3dpdGNoKGMudGFnKXtjYXNlIDU6Yj1jLnN0YXRlTm9kZTtkPSExO2JyZWFrO2Nhc2UgMzpiPWMuc3RhdGVOb2RlLmNvbnRhaW5lckluZm87ZD0hMDticmVhaztjYXNlIDQ6Yj1jLnN0YXRlTm9kZS5jb250YWluZXJJbmZvO2Q9ITA7YnJlYWs7ZGVmYXVsdDp4KFwiMTYxXCIpfWMuZWZmZWN0VGFnJjE2JiYoa2UoYixcIlwiKSxjLmVmZmVjdFRhZyY9LTE3KTthOmI6Zm9yKGM9YTs7KXtmb3IoO251bGw9PT1jLnNpYmxpbmc7KXtpZihudWxsPT09Yy5yZXR1cm58fHhoKGMucmV0dXJuKSl7Yz1udWxsO2JyZWFrIGF9Yz1jLnJldHVybn1jLnNpYmxpbmcucmV0dXJuPWMucmV0dXJuO2ZvcihjPWMuc2libGluZzs1IT09Yy50YWcmJjYhPT1jLnRhZyYmMTghPT1jLnRhZzspe2lmKGMuZWZmZWN0VGFnJlxuMiljb250aW51ZSBiO2lmKG51bGw9PT1jLmNoaWxkfHw0PT09Yy50YWcpY29udGludWUgYjtlbHNlIGMuY2hpbGQucmV0dXJuPWMsYz1jLmNoaWxkfWlmKCEoYy5lZmZlY3RUYWcmMikpe2M9Yy5zdGF0ZU5vZGU7YnJlYWsgYX19Zm9yKHZhciBlPWE7Oyl7aWYoNT09PWUudGFnfHw2PT09ZS50YWcpaWYoYylpZihkKXt2YXIgZj1iLGc9ZS5zdGF0ZU5vZGUsaD1jOzg9PT1mLm5vZGVUeXBlP2YucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZyxoKTpmLmluc2VydEJlZm9yZShnLGgpfWVsc2UgYi5pbnNlcnRCZWZvcmUoZS5zdGF0ZU5vZGUsYyk7ZWxzZSBkPyhnPWIsaD1lLnN0YXRlTm9kZSw4PT09Zy5ub2RlVHlwZT8oZj1nLnBhcmVudE5vZGUsZi5pbnNlcnRCZWZvcmUoaCxnKSk6KGY9ZyxmLmFwcGVuZENoaWxkKGgpKSxnPWcuX3JlYWN0Um9vdENvbnRhaW5lcixudWxsIT09ZyYmdm9pZCAwIT09Z3x8bnVsbCE9PWYub25jbGlja3x8KGYub25jbGljaz10ZSkpOmIuYXBwZW5kQ2hpbGQoZS5zdGF0ZU5vZGUpO1xuZWxzZSBpZig0IT09ZS50YWcmJm51bGwhPT1lLmNoaWxkKXtlLmNoaWxkLnJldHVybj1lO2U9ZS5jaGlsZDtjb250aW51ZX1pZihlPT09YSlicmVhaztmb3IoO251bGw9PT1lLnNpYmxpbmc7KXtpZihudWxsPT09ZS5yZXR1cm58fGUucmV0dXJuPT09YSlyZXR1cm47ZT1lLnJldHVybn1lLnNpYmxpbmcucmV0dXJuPWUucmV0dXJuO2U9ZS5zaWJsaW5nfX1cbmZ1bmN0aW9uIHdoKGEpe2Zvcih2YXIgYj1hLGM9ITEsZD12b2lkIDAsZT12b2lkIDA7Oyl7aWYoIWMpe2M9Yi5yZXR1cm47YTpmb3IoOzspe251bGw9PT1jP3goXCIxNjBcIik6dm9pZCAwO3N3aXRjaChjLnRhZyl7Y2FzZSA1OmQ9Yy5zdGF0ZU5vZGU7ZT0hMTticmVhayBhO2Nhc2UgMzpkPWMuc3RhdGVOb2RlLmNvbnRhaW5lckluZm87ZT0hMDticmVhayBhO2Nhc2UgNDpkPWMuc3RhdGVOb2RlLmNvbnRhaW5lckluZm87ZT0hMDticmVhayBhfWM9Yy5yZXR1cm59Yz0hMH1pZig1PT09Yi50YWd8fDY9PT1iLnRhZyl7YTpmb3IodmFyIGY9YixnPWY7OylpZih2aChnKSxudWxsIT09Zy5jaGlsZCYmNCE9PWcudGFnKWcuY2hpbGQucmV0dXJuPWcsZz1nLmNoaWxkO2Vsc2V7aWYoZz09PWYpYnJlYWs7Zm9yKDtudWxsPT09Zy5zaWJsaW5nOyl7aWYobnVsbD09PWcucmV0dXJufHxnLnJldHVybj09PWYpYnJlYWsgYTtnPWcucmV0dXJufWcuc2libGluZy5yZXR1cm49Zy5yZXR1cm47Zz1nLnNpYmxpbmd9ZT9cbihmPWQsZz1iLnN0YXRlTm9kZSw4PT09Zi5ub2RlVHlwZT9mLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZyk6Zi5yZW1vdmVDaGlsZChnKSk6ZC5yZW1vdmVDaGlsZChiLnN0YXRlTm9kZSl9ZWxzZSBpZig0PT09Yi50YWcpe2lmKG51bGwhPT1iLmNoaWxkKXtkPWIuc3RhdGVOb2RlLmNvbnRhaW5lckluZm87ZT0hMDtiLmNoaWxkLnJldHVybj1iO2I9Yi5jaGlsZDtjb250aW51ZX19ZWxzZSBpZih2aChiKSxudWxsIT09Yi5jaGlsZCl7Yi5jaGlsZC5yZXR1cm49YjtiPWIuY2hpbGQ7Y29udGludWV9aWYoYj09PWEpYnJlYWs7Zm9yKDtudWxsPT09Yi5zaWJsaW5nOyl7aWYobnVsbD09PWIucmV0dXJufHxiLnJldHVybj09PWEpcmV0dXJuO2I9Yi5yZXR1cm47ND09PWIudGFnJiYoYz0hMSl9Yi5zaWJsaW5nLnJldHVybj1iLnJldHVybjtiPWIuc2libGluZ319XG5mdW5jdGlvbiB6aChhLGIpe3N3aXRjaChiLnRhZyl7Y2FzZSAwOmNhc2UgMTE6Y2FzZSAxNDpjYXNlIDE1OnRoKFBmLFFmLGIpO2JyZWFrO2Nhc2UgMTpicmVhaztjYXNlIDU6dmFyIGM9Yi5zdGF0ZU5vZGU7aWYobnVsbCE9Yyl7dmFyIGQ9Yi5tZW1vaXplZFByb3BzO2E9bnVsbCE9PWE/YS5tZW1vaXplZFByb3BzOmQ7dmFyIGU9Yi50eXBlLGY9Yi51cGRhdGVRdWV1ZTtiLnVwZGF0ZVF1ZXVlPW51bGw7bnVsbCE9PWYmJkNlKGMsZixlLGEsZCxiKX1icmVhaztjYXNlIDY6bnVsbD09PWIuc3RhdGVOb2RlP3goXCIxNjJcIik6dm9pZCAwO2Iuc3RhdGVOb2RlLm5vZGVWYWx1ZT1iLm1lbW9pemVkUHJvcHM7YnJlYWs7Y2FzZSAzOmJyZWFrO2Nhc2UgMTI6YnJlYWs7Y2FzZSAxMzpjPWIubWVtb2l6ZWRTdGF0ZTtkPXZvaWQgMDthPWI7bnVsbD09PWM/ZD0hMTooZD0hMCxhPWIuY2hpbGQsMD09PWMudGltZWRPdXRBdCYmKGMudGltZWRPdXRBdD1sZigpKSk7bnVsbCE9PWEmJnVoKGEsZCk7Yz1cbmIudXBkYXRlUXVldWU7aWYobnVsbCE9PWMpe2IudXBkYXRlUXVldWU9bnVsbDt2YXIgZz1iLnN0YXRlTm9kZTtudWxsPT09ZyYmKGc9Yi5zdGF0ZU5vZGU9bmV3IHBoKTtjLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGM9QWguYmluZChudWxsLGIsYSk7Zy5oYXMoYSl8fChnLmFkZChhKSxhLnRoZW4oYyxjKSl9KX1icmVhaztjYXNlIDE3OmJyZWFrO2RlZmF1bHQ6eChcIjE2M1wiKX19dmFyIEJoPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBXZWFrTWFwP1dlYWtNYXA6TWFwO2Z1bmN0aW9uIENoKGEsYixjKXtjPW5mKGMpO2MudGFnPWFoO2MucGF5bG9hZD17ZWxlbWVudDpudWxsfTt2YXIgZD1iLnZhbHVlO2MuY2FsbGJhY2s9ZnVuY3Rpb24oKXtEaChkKTtxaChhLGIpfTtyZXR1cm4gY31cbmZ1bmN0aW9uIEVoKGEsYixjKXtjPW5mKGMpO2MudGFnPWFoO3ZhciBkPWEudHlwZS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGQpe3ZhciBlPWIudmFsdWU7Yy5wYXlsb2FkPWZ1bmN0aW9uKCl7cmV0dXJuIGQoZSl9fXZhciBmPWEuc3RhdGVOb2RlO251bGwhPT1mJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgZi5jb21wb25lbnREaWRDYXRjaCYmKGMuY2FsbGJhY2s9ZnVuY3Rpb24oKXtcImZ1bmN0aW9uXCIhPT10eXBlb2YgZCYmKG51bGw9PT1GaD9GaD1uZXcgU2V0KFt0aGlzXSk6RmguYWRkKHRoaXMpKTt2YXIgYz1iLnZhbHVlLGU9Yi5zdGFjaztxaChhLGIpO3RoaXMuY29tcG9uZW50RGlkQ2F0Y2goYyx7Y29tcG9uZW50U3RhY2s6bnVsbCE9PWU/ZTpcIlwifSl9KTtyZXR1cm4gY31cbmZ1bmN0aW9uIEdoKGEpe3N3aXRjaChhLnRhZyl7Y2FzZSAxOkooYS50eXBlKSYmS2UoYSk7dmFyIGI9YS5lZmZlY3RUYWc7cmV0dXJuIGImMjA0OD8oYS5lZmZlY3RUYWc9YiYtMjA0OXw2NCxhKTpudWxsO2Nhc2UgMzpyZXR1cm4gS2YoYSksTGUoYSksYj1hLmVmZmVjdFRhZywwIT09KGImNjQpP3goXCIyODVcIik6dm9pZCAwLGEuZWZmZWN0VGFnPWImLTIwNDl8NjQsYTtjYXNlIDU6cmV0dXJuIE1mKGEpLG51bGw7Y2FzZSAxMzpyZXR1cm4gYj1hLmVmZmVjdFRhZyxiJjIwNDg/KGEuZWZmZWN0VGFnPWImLTIwNDl8NjQsYSk6bnVsbDtjYXNlIDE4OnJldHVybiBudWxsO2Nhc2UgNDpyZXR1cm4gS2YoYSksbnVsbDtjYXNlIDEwOnJldHVybiBaZyhhKSxudWxsO2RlZmF1bHQ6cmV0dXJuIG51bGx9fVxudmFyIEhoPVRiLlJlYWN0Q3VycmVudERpc3BhdGNoZXIsSWg9VGIuUmVhY3RDdXJyZW50T3duZXIsSmg9MTA3Mzc0MTgyMixLaD0hMSxUPW51bGwsTGg9bnVsbCxVPTAsTWg9LTEsTmg9ITEsVj1udWxsLE9oPSExLFBoPW51bGwsUWg9bnVsbCxSaD1udWxsLEZoPW51bGw7ZnVuY3Rpb24gU2goKXtpZihudWxsIT09VClmb3IodmFyIGE9VC5yZXR1cm47bnVsbCE9PWE7KXt2YXIgYj1hO3N3aXRjaChiLnRhZyl7Y2FzZSAxOnZhciBjPWIudHlwZS5jaGlsZENvbnRleHRUeXBlcztudWxsIT09YyYmdm9pZCAwIT09YyYmS2UoYik7YnJlYWs7Y2FzZSAzOktmKGIpO0xlKGIpO2JyZWFrO2Nhc2UgNTpNZihiKTticmVhaztjYXNlIDQ6S2YoYik7YnJlYWs7Y2FzZSAxMDpaZyhiKX1hPWEucmV0dXJufUxoPW51bGw7VT0wO01oPS0xO05oPSExO1Q9bnVsbH1cbmZ1bmN0aW9uIFRoKCl7Zm9yKDtudWxsIT09Vjspe3ZhciBhPVYuZWZmZWN0VGFnO2EmMTYmJmtlKFYuc3RhdGVOb2RlLFwiXCIpO2lmKGEmMTI4KXt2YXIgYj1WLmFsdGVybmF0ZTtudWxsIT09YiYmKGI9Yi5yZWYsbnVsbCE9PWImJihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYj9iKG51bGwpOmIuY3VycmVudD1udWxsKSl9c3dpdGNoKGEmMTQpe2Nhc2UgMjp5aChWKTtWLmVmZmVjdFRhZyY9LTM7YnJlYWs7Y2FzZSA2OnloKFYpO1YuZWZmZWN0VGFnJj0tMzt6aChWLmFsdGVybmF0ZSxWKTticmVhaztjYXNlIDQ6emgoVi5hbHRlcm5hdGUsVik7YnJlYWs7Y2FzZSA4OmE9Vix3aChhKSxhLnJldHVybj1udWxsLGEuY2hpbGQ9bnVsbCxhLm1lbW9pemVkU3RhdGU9bnVsbCxhLnVwZGF0ZVF1ZXVlPW51bGwsYT1hLmFsdGVybmF0ZSxudWxsIT09YSYmKGEucmV0dXJuPW51bGwsYS5jaGlsZD1udWxsLGEubWVtb2l6ZWRTdGF0ZT1udWxsLGEudXBkYXRlUXVldWU9bnVsbCl9Vj1WLm5leHRFZmZlY3R9fVxuZnVuY3Rpb24gVWgoKXtmb3IoO251bGwhPT1WOyl7aWYoVi5lZmZlY3RUYWcmMjU2KWE6e3ZhciBhPVYuYWx0ZXJuYXRlLGI9Vjtzd2l0Y2goYi50YWcpe2Nhc2UgMDpjYXNlIDExOmNhc2UgMTU6dGgoT2YsTmYsYik7YnJlYWsgYTtjYXNlIDE6aWYoYi5lZmZlY3RUYWcmMjU2JiZudWxsIT09YSl7dmFyIGM9YS5tZW1vaXplZFByb3BzLGQ9YS5tZW1vaXplZFN0YXRlO2E9Yi5zdGF0ZU5vZGU7Yj1hLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKGIuZWxlbWVudFR5cGU9PT1iLnR5cGU/YzpMKGIudHlwZSxjKSxkKTthLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90QmVmb3JlVXBkYXRlPWJ9YnJlYWsgYTtjYXNlIDM6Y2FzZSA1OmNhc2UgNjpjYXNlIDQ6Y2FzZSAxNzpicmVhayBhO2RlZmF1bHQ6eChcIjE2M1wiKX19Vj1WLm5leHRFZmZlY3R9fVxuZnVuY3Rpb24gVmgoYSxiKXtmb3IoO251bGwhPT1WOyl7dmFyIGM9Vi5lZmZlY3RUYWc7aWYoYyYzNil7dmFyIGQ9Vi5hbHRlcm5hdGUsZT1WLGY9Yjtzd2l0Y2goZS50YWcpe2Nhc2UgMDpjYXNlIDExOmNhc2UgMTU6dGgoUmYsU2YsZSk7YnJlYWs7Y2FzZSAxOnZhciBnPWUuc3RhdGVOb2RlO2lmKGUuZWZmZWN0VGFnJjQpaWYobnVsbD09PWQpZy5jb21wb25lbnREaWRNb3VudCgpO2Vsc2V7dmFyIGg9ZS5lbGVtZW50VHlwZT09PWUudHlwZT9kLm1lbW9pemVkUHJvcHM6TChlLnR5cGUsZC5tZW1vaXplZFByb3BzKTtnLmNvbXBvbmVudERpZFVwZGF0ZShoLGQubWVtb2l6ZWRTdGF0ZSxnLl9fcmVhY3RJbnRlcm5hbFNuYXBzaG90QmVmb3JlVXBkYXRlKX1kPWUudXBkYXRlUXVldWU7bnVsbCE9PWQmJmhoKGUsZCxnLGYpO2JyZWFrO2Nhc2UgMzpkPWUudXBkYXRlUXVldWU7aWYobnVsbCE9PWQpe2c9bnVsbDtpZihudWxsIT09ZS5jaGlsZClzd2l0Y2goZS5jaGlsZC50YWcpe2Nhc2UgNTpnPVxuZS5jaGlsZC5zdGF0ZU5vZGU7YnJlYWs7Y2FzZSAxOmc9ZS5jaGlsZC5zdGF0ZU5vZGV9aGgoZSxkLGcsZil9YnJlYWs7Y2FzZSA1OmY9ZS5zdGF0ZU5vZGU7bnVsbD09PWQmJmUuZWZmZWN0VGFnJjQmJndlKGUudHlwZSxlLm1lbW9pemVkUHJvcHMpJiZmLmZvY3VzKCk7YnJlYWs7Y2FzZSA2OmJyZWFrO2Nhc2UgNDpicmVhaztjYXNlIDEyOmJyZWFrO2Nhc2UgMTM6YnJlYWs7Y2FzZSAxNzpicmVhaztkZWZhdWx0OngoXCIxNjNcIil9fWMmMTI4JiYoZT1WLnJlZixudWxsIT09ZSYmKGY9Vi5zdGF0ZU5vZGUsXCJmdW5jdGlvblwiPT09dHlwZW9mIGU/ZShmKTplLmN1cnJlbnQ9ZikpO2MmNTEyJiYoUGg9YSk7Vj1WLm5leHRFZmZlY3R9fVxuZnVuY3Rpb24gV2goYSxiKXtSaD1RaD1QaD1udWxsO3ZhciBjPVc7Vz0hMDtkb3tpZihiLmVmZmVjdFRhZyY1MTIpe3ZhciBkPSExLGU9dm9pZCAwO3RyeXt2YXIgZj1iO3RoKFVmLE5mLGYpO3RoKE5mLFRmLGYpfWNhdGNoKGcpe2Q9ITAsZT1nfWQmJnNoKGIsZSl9Yj1iLm5leHRFZmZlY3R9d2hpbGUobnVsbCE9PWIpO1c9YztjPWEuZXhwaXJhdGlvblRpbWU7MCE9PWMmJlhoKGEsYyk7WHx8V3x8WWgoMTA3Mzc0MTgyMywhMSl9ZnVuY3Rpb24gb2YoKXtudWxsIT09UWgmJkJlKFFoKTtudWxsIT09UmgmJlJoKCl9XG5mdW5jdGlvbiBaaChhLGIpe09oPUtoPSEwO2EuY3VycmVudD09PWI/eChcIjE3N1wiKTp2b2lkIDA7dmFyIGM9YS5wZW5kaW5nQ29tbWl0RXhwaXJhdGlvblRpbWU7MD09PWM/eChcIjI2MVwiKTp2b2lkIDA7YS5wZW5kaW5nQ29tbWl0RXhwaXJhdGlvblRpbWU9MDt2YXIgZD1iLmV4cGlyYXRpb25UaW1lLGU9Yi5jaGlsZEV4cGlyYXRpb25UaW1lO2VmKGEsZT5kP2U6ZCk7SWguY3VycmVudD1udWxsO2Q9dm9pZCAwOzE8Yi5lZmZlY3RUYWc/bnVsbCE9PWIubGFzdEVmZmVjdD8oYi5sYXN0RWZmZWN0Lm5leHRFZmZlY3Q9YixkPWIuZmlyc3RFZmZlY3QpOmQ9YjpkPWIuZmlyc3RFZmZlY3Q7dWU9QmQ7dmU9UGQoKTtCZD0hMTtmb3IoVj1kO251bGwhPT1WOyl7ZT0hMTt2YXIgZj12b2lkIDA7dHJ5e1VoKCl9Y2F0Y2goaCl7ZT0hMCxmPWh9ZSYmKG51bGw9PT1WP3goXCIxNzhcIik6dm9pZCAwLHNoKFYsZiksbnVsbCE9PVYmJihWPVYubmV4dEVmZmVjdCkpfWZvcihWPWQ7bnVsbCE9PVY7KXtlPSExO1xuZj12b2lkIDA7dHJ5e1RoKCl9Y2F0Y2goaCl7ZT0hMCxmPWh9ZSYmKG51bGw9PT1WP3goXCIxNzhcIik6dm9pZCAwLHNoKFYsZiksbnVsbCE9PVYmJihWPVYubmV4dEVmZmVjdCkpfVFkKHZlKTt2ZT1udWxsO0JkPSEhdWU7dWU9bnVsbDthLmN1cnJlbnQ9Yjtmb3IoVj1kO251bGwhPT1WOyl7ZT0hMTtmPXZvaWQgMDt0cnl7VmgoYSxjKX1jYXRjaChoKXtlPSEwLGY9aH1lJiYobnVsbD09PVY/eChcIjE3OFwiKTp2b2lkIDAsc2goVixmKSxudWxsIT09ViYmKFY9Vi5uZXh0RWZmZWN0KSl9aWYobnVsbCE9PWQmJm51bGwhPT1QaCl7dmFyIGc9V2guYmluZChudWxsLGEsZCk7UWg9ci51bnN0YWJsZV9ydW5XaXRoUHJpb3JpdHkoci51bnN0YWJsZV9Ob3JtYWxQcmlvcml0eSxmdW5jdGlvbigpe3JldHVybiBBZShnKX0pO1JoPWd9S2g9T2g9ITE7XCJmdW5jdGlvblwiPT09dHlwZW9mIFFlJiZRZShiLnN0YXRlTm9kZSk7Yz1iLmV4cGlyYXRpb25UaW1lO2I9Yi5jaGlsZEV4cGlyYXRpb25UaW1lO2I9XG5iPmM/YjpjOzA9PT1iJiYoRmg9bnVsbCk7JGgoYSxiKX1cbmZ1bmN0aW9uIGFpKGEpe2Zvcig7Oyl7dmFyIGI9YS5hbHRlcm5hdGUsYz1hLnJldHVybixkPWEuc2libGluZztpZigwPT09KGEuZWZmZWN0VGFnJjEwMjQpKXtUPWE7YTp7dmFyIGU9YjtiPWE7dmFyIGY9VTt2YXIgZz1iLnBlbmRpbmdQcm9wcztzd2l0Y2goYi50YWcpe2Nhc2UgMjpicmVhaztjYXNlIDE2OmJyZWFrO2Nhc2UgMTU6Y2FzZSAwOmJyZWFrO2Nhc2UgMTpKKGIudHlwZSkmJktlKGIpO2JyZWFrO2Nhc2UgMzpLZihiKTtMZShiKTtnPWIuc3RhdGVOb2RlO2cucGVuZGluZ0NvbnRleHQmJihnLmNvbnRleHQ9Zy5wZW5kaW5nQ29udGV4dCxnLnBlbmRpbmdDb250ZXh0PW51bGwpO2lmKG51bGw9PT1lfHxudWxsPT09ZS5jaGlsZClFZyhiKSxiLmVmZmVjdFRhZyY9LTM7bWgoYik7YnJlYWs7Y2FzZSA1Ok1mKGIpO3ZhciBoPUlmKEhmLmN1cnJlbnQpO2Y9Yi50eXBlO2lmKG51bGwhPT1lJiZudWxsIT1iLnN0YXRlTm9kZSluaChlLGIsZixnLGgpLGUucmVmIT09Yi5yZWYmJihiLmVmZmVjdFRhZ3w9XG4xMjgpO2Vsc2UgaWYoZyl7dmFyIGw9SWYoTi5jdXJyZW50KTtpZihFZyhiKSl7Zz1iO2U9Zy5zdGF0ZU5vZGU7dmFyIGs9Zy50eXBlLG09Zy5tZW1vaXplZFByb3BzLHA9aDtlW0ZhXT1nO2VbR2FdPW07Zj12b2lkIDA7aD1rO3N3aXRjaChoKXtjYXNlIFwiaWZyYW1lXCI6Y2FzZSBcIm9iamVjdFwiOkUoXCJsb2FkXCIsZSk7YnJlYWs7Y2FzZSBcInZpZGVvXCI6Y2FzZSBcImF1ZGlvXCI6Zm9yKGs9MDtrPGFiLmxlbmd0aDtrKyspRShhYltrXSxlKTticmVhaztjYXNlIFwic291cmNlXCI6RShcImVycm9yXCIsZSk7YnJlYWs7Y2FzZSBcImltZ1wiOmNhc2UgXCJpbWFnZVwiOmNhc2UgXCJsaW5rXCI6RShcImVycm9yXCIsZSk7RShcImxvYWRcIixlKTticmVhaztjYXNlIFwiZm9ybVwiOkUoXCJyZXNldFwiLGUpO0UoXCJzdWJtaXRcIixlKTticmVhaztjYXNlIFwiZGV0YWlsc1wiOkUoXCJ0b2dnbGVcIixlKTticmVhaztjYXNlIFwiaW5wdXRcIjp3YyhlLG0pO0UoXCJpbnZhbGlkXCIsZSk7c2UocCxcIm9uQ2hhbmdlXCIpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjplLl93cmFwcGVyU3RhdGU9XG57d2FzTXVsdGlwbGU6ISFtLm11bHRpcGxlfTtFKFwiaW52YWxpZFwiLGUpO3NlKHAsXCJvbkNoYW5nZVwiKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjpjZShlLG0pLEUoXCJpbnZhbGlkXCIsZSksc2UocCxcIm9uQ2hhbmdlXCIpfXFlKGgsbSk7az1udWxsO2ZvcihmIGluIG0pbS5oYXNPd25Qcm9wZXJ0eShmKSYmKGw9bVtmXSxcImNoaWxkcmVuXCI9PT1mP1wic3RyaW5nXCI9PT10eXBlb2YgbD9lLnRleHRDb250ZW50IT09bCYmKGs9W1wiY2hpbGRyZW5cIixsXSk6XCJudW1iZXJcIj09PXR5cGVvZiBsJiZlLnRleHRDb250ZW50IT09XCJcIitsJiYoaz1bXCJjaGlsZHJlblwiLFwiXCIrbF0pOnJhLmhhc093blByb3BlcnR5KGYpJiZudWxsIT1sJiZzZShwLGYpKTtzd2l0Y2goaCl7Y2FzZSBcImlucHV0XCI6UmIoZSk7QWMoZSxtLCEwKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjpSYihlKTtlZShlLG0pO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjpjYXNlIFwib3B0aW9uXCI6YnJlYWs7ZGVmYXVsdDpcImZ1bmN0aW9uXCI9PT10eXBlb2YgbS5vbkNsaWNrJiZcbihlLm9uY2xpY2s9dGUpfWY9aztnLnVwZGF0ZVF1ZXVlPWY7Zz1udWxsIT09Zj8hMDohMTtnJiZraChiKX1lbHNle209YjtwPWY7ZT1nO2s9OT09PWgubm9kZVR5cGU/aDpoLm93bmVyRG9jdW1lbnQ7bD09PWZlLmh0bWwmJihsPWdlKHApKTtsPT09ZmUuaHRtbD9cInNjcmlwdFwiPT09cD8oZT1rLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksZS5pbm5lckhUTUw9XCI8c2NyaXB0PlxceDNjL3NjcmlwdD5cIixrPWUucmVtb3ZlQ2hpbGQoZS5maXJzdENoaWxkKSk6XCJzdHJpbmdcIj09PXR5cGVvZiBlLmlzP2s9ay5jcmVhdGVFbGVtZW50KHAse2lzOmUuaXN9KTooaz1rLmNyZWF0ZUVsZW1lbnQocCksXCJzZWxlY3RcIj09PXAmJihwPWssZS5tdWx0aXBsZT9wLm11bHRpcGxlPSEwOmUuc2l6ZSYmKHAuc2l6ZT1lLnNpemUpKSk6az1rLmNyZWF0ZUVsZW1lbnROUyhsLHApO2U9aztlW0ZhXT1tO2VbR2FdPWc7bGgoZSxiLCExLCExKTtwPWU7az1mO209Zzt2YXIgdD1oLEE9cmUoayxtKTtzd2l0Y2goayl7Y2FzZSBcImlmcmFtZVwiOmNhc2UgXCJvYmplY3RcIjpFKFwibG9hZFwiLFxucCk7aD1tO2JyZWFrO2Nhc2UgXCJ2aWRlb1wiOmNhc2UgXCJhdWRpb1wiOmZvcihoPTA7aDxhYi5sZW5ndGg7aCsrKUUoYWJbaF0scCk7aD1tO2JyZWFrO2Nhc2UgXCJzb3VyY2VcIjpFKFwiZXJyb3JcIixwKTtoPW07YnJlYWs7Y2FzZSBcImltZ1wiOmNhc2UgXCJpbWFnZVwiOmNhc2UgXCJsaW5rXCI6RShcImVycm9yXCIscCk7RShcImxvYWRcIixwKTtoPW07YnJlYWs7Y2FzZSBcImZvcm1cIjpFKFwicmVzZXRcIixwKTtFKFwic3VibWl0XCIscCk7aD1tO2JyZWFrO2Nhc2UgXCJkZXRhaWxzXCI6RShcInRvZ2dsZVwiLHApO2g9bTticmVhaztjYXNlIFwiaW5wdXRcIjp3YyhwLG0pO2g9dmMocCxtKTtFKFwiaW52YWxpZFwiLHApO3NlKHQsXCJvbkNoYW5nZVwiKTticmVhaztjYXNlIFwib3B0aW9uXCI6aD0kZChwLG0pO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjpwLl93cmFwcGVyU3RhdGU9e3dhc011bHRpcGxlOiEhbS5tdWx0aXBsZX07aD1uKHt9LG0se3ZhbHVlOnZvaWQgMH0pO0UoXCJpbnZhbGlkXCIscCk7c2UodCxcIm9uQ2hhbmdlXCIpO2JyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOmNlKHAsXG5tKTtoPWJlKHAsbSk7RShcImludmFsaWRcIixwKTtzZSh0LFwib25DaGFuZ2VcIik7YnJlYWs7ZGVmYXVsdDpoPW19cWUoayxoKTtsPXZvaWQgMDt2YXIgdj1rLFI9cCx1PWg7Zm9yKGwgaW4gdSlpZih1Lmhhc093blByb3BlcnR5KGwpKXt2YXIgcT11W2xdO1wic3R5bGVcIj09PWw/b2UoUixxKTpcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCI9PT1sPyhxPXE/cS5fX2h0bWw6dm9pZCAwLG51bGwhPXEmJmplKFIscSkpOlwiY2hpbGRyZW5cIj09PWw/XCJzdHJpbmdcIj09PXR5cGVvZiBxPyhcInRleHRhcmVhXCIhPT12fHxcIlwiIT09cSkmJmtlKFIscSk6XCJudW1iZXJcIj09PXR5cGVvZiBxJiZrZShSLFwiXCIrcSk6XCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmdcIiE9PWwmJlwic3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nXCIhPT1sJiZcImF1dG9Gb2N1c1wiIT09bCYmKHJhLmhhc093blByb3BlcnR5KGwpP251bGwhPXEmJnNlKHQsbCk6bnVsbCE9cSYmdGMoUixsLHEsQSkpfXN3aXRjaChrKXtjYXNlIFwiaW5wdXRcIjpSYihwKTtcbkFjKHAsbSwhMSk7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6UmIocCk7ZWUocCxtKTticmVhaztjYXNlIFwib3B0aW9uXCI6bnVsbCE9bS52YWx1ZSYmcC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLFwiXCIrdWMobS52YWx1ZSkpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjpoPXA7aC5tdWx0aXBsZT0hIW0ubXVsdGlwbGU7cD1tLnZhbHVlO251bGwhPXA/YWUoaCwhIW0ubXVsdGlwbGUscCwhMSk6bnVsbCE9bS5kZWZhdWx0VmFsdWUmJmFlKGgsISFtLm11bHRpcGxlLG0uZGVmYXVsdFZhbHVlLCEwKTticmVhaztkZWZhdWx0OlwiZnVuY3Rpb25cIj09PXR5cGVvZiBoLm9uQ2xpY2smJihwLm9uY2xpY2s9dGUpfShnPXdlKGYsZykpJiZraChiKTtiLnN0YXRlTm9kZT1lfW51bGwhPT1iLnJlZiYmKGIuZWZmZWN0VGFnfD0xMjgpfWVsc2UgbnVsbD09PWIuc3RhdGVOb2RlP3goXCIxNjZcIik6dm9pZCAwO2JyZWFrO2Nhc2UgNjplJiZudWxsIT1iLnN0YXRlTm9kZT9vaChlLGIsZS5tZW1vaXplZFByb3BzLGcpOihcInN0cmluZ1wiIT09XG50eXBlb2YgZyYmKG51bGw9PT1iLnN0YXRlTm9kZT94KFwiMTY2XCIpOnZvaWQgMCksZT1JZihIZi5jdXJyZW50KSxJZihOLmN1cnJlbnQpLEVnKGIpPyhnPWIsZj1nLnN0YXRlTm9kZSxlPWcubWVtb2l6ZWRQcm9wcyxmW0ZhXT1nLChnPWYubm9kZVZhbHVlIT09ZSkmJmtoKGIpKTooZj1iLGc9KDk9PT1lLm5vZGVUeXBlP2U6ZS5vd25lckRvY3VtZW50KS5jcmVhdGVUZXh0Tm9kZShnKSxnW0ZhXT1iLGYuc3RhdGVOb2RlPWcpKTticmVhaztjYXNlIDExOmJyZWFrO2Nhc2UgMTM6Zz1iLm1lbW9pemVkU3RhdGU7aWYoMCE9PShiLmVmZmVjdFRhZyY2NCkpe2IuZXhwaXJhdGlvblRpbWU9ZjtUPWI7YnJlYWsgYX1nPW51bGwhPT1nO2Y9bnVsbCE9PWUmJm51bGwhPT1lLm1lbW9pemVkU3RhdGU7bnVsbCE9PWUmJiFnJiZmJiYoZT1lLmNoaWxkLnNpYmxpbmcsbnVsbCE9PWUmJihoPWIuZmlyc3RFZmZlY3QsbnVsbCE9PWg/KGIuZmlyc3RFZmZlY3Q9ZSxlLm5leHRFZmZlY3Q9aCk6KGIuZmlyc3RFZmZlY3Q9XG5iLmxhc3RFZmZlY3Q9ZSxlLm5leHRFZmZlY3Q9bnVsbCksZS5lZmZlY3RUYWc9OCkpO2lmKGd8fGYpYi5lZmZlY3RUYWd8PTQ7YnJlYWs7Y2FzZSA3OmJyZWFrO2Nhc2UgODpicmVhaztjYXNlIDEyOmJyZWFrO2Nhc2UgNDpLZihiKTttaChiKTticmVhaztjYXNlIDEwOlpnKGIpO2JyZWFrO2Nhc2UgOTpicmVhaztjYXNlIDE0OmJyZWFrO2Nhc2UgMTc6SihiLnR5cGUpJiZLZShiKTticmVhaztjYXNlIDE4OmJyZWFrO2RlZmF1bHQ6eChcIjE1NlwiKX1UPW51bGx9Yj1hO2lmKDE9PT1VfHwxIT09Yi5jaGlsZEV4cGlyYXRpb25UaW1lKXtnPTA7Zm9yKGY9Yi5jaGlsZDtudWxsIT09ZjspZT1mLmV4cGlyYXRpb25UaW1lLGg9Zi5jaGlsZEV4cGlyYXRpb25UaW1lLGU+ZyYmKGc9ZSksaD5nJiYoZz1oKSxmPWYuc2libGluZztiLmNoaWxkRXhwaXJhdGlvblRpbWU9Z31pZihudWxsIT09VClyZXR1cm4gVDtudWxsIT09YyYmMD09PShjLmVmZmVjdFRhZyYxMDI0KSYmKG51bGw9PT1jLmZpcnN0RWZmZWN0JiZcbihjLmZpcnN0RWZmZWN0PWEuZmlyc3RFZmZlY3QpLG51bGwhPT1hLmxhc3RFZmZlY3QmJihudWxsIT09Yy5sYXN0RWZmZWN0JiYoYy5sYXN0RWZmZWN0Lm5leHRFZmZlY3Q9YS5maXJzdEVmZmVjdCksYy5sYXN0RWZmZWN0PWEubGFzdEVmZmVjdCksMTxhLmVmZmVjdFRhZyYmKG51bGwhPT1jLmxhc3RFZmZlY3Q/Yy5sYXN0RWZmZWN0Lm5leHRFZmZlY3Q9YTpjLmZpcnN0RWZmZWN0PWEsYy5sYXN0RWZmZWN0PWEpKX1lbHNle2E9R2goYSxVKTtpZihudWxsIT09YSlyZXR1cm4gYS5lZmZlY3RUYWcmPTEwMjMsYTtudWxsIT09YyYmKGMuZmlyc3RFZmZlY3Q9Yy5sYXN0RWZmZWN0PW51bGwsYy5lZmZlY3RUYWd8PTEwMjQpfWlmKG51bGwhPT1kKXJldHVybiBkO2lmKG51bGwhPT1jKWE9YztlbHNlIGJyZWFrfXJldHVybiBudWxsfVxuZnVuY3Rpb24gYmkoYSl7dmFyIGI9VGcoYS5hbHRlcm5hdGUsYSxVKTthLm1lbW9pemVkUHJvcHM9YS5wZW5kaW5nUHJvcHM7bnVsbD09PWImJihiPWFpKGEpKTtJaC5jdXJyZW50PW51bGw7cmV0dXJuIGJ9XG5mdW5jdGlvbiBjaShhLGIpe0toP3goXCIyNDNcIik6dm9pZCAwO29mKCk7S2g9ITA7dmFyIGM9SGguY3VycmVudDtIaC5jdXJyZW50PWtnO3ZhciBkPWEubmV4dEV4cGlyYXRpb25UaW1lVG9Xb3JrT247aWYoZCE9PVV8fGEhPT1MaHx8bnVsbD09PVQpU2goKSxMaD1hLFU9ZCxUPVhlKExoLmN1cnJlbnQsbnVsbCxVKSxhLnBlbmRpbmdDb21taXRFeHBpcmF0aW9uVGltZT0wO3ZhciBlPSExO2Rve3RyeXtpZihiKWZvcig7bnVsbCE9PVQmJiFkaSgpOylUPWJpKFQpO2Vsc2UgZm9yKDtudWxsIT09VDspVD1iaShUKX1jYXRjaCh1KXtpZihZZz1YZz1XZz1udWxsLGxnKCksbnVsbD09PVQpZT0hMCxEaCh1KTtlbHNle251bGw9PT1UP3goXCIyNzFcIik6dm9pZCAwO3ZhciBmPVQsZz1mLnJldHVybjtpZihudWxsPT09ZyllPSEwLERoKHUpO2Vsc2V7YTp7dmFyIGg9YSxsPWcsaz1mLG09dTtnPVU7ay5lZmZlY3RUYWd8PTEwMjQ7ay5maXJzdEVmZmVjdD1rLmxhc3RFZmZlY3Q9bnVsbDtpZihudWxsIT09XG5tJiZcIm9iamVjdFwiPT09dHlwZW9mIG0mJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBtLnRoZW4pe3ZhciBwPW07bT1sO3ZhciB0PS0xLEE9LTE7ZG97aWYoMTM9PT1tLnRhZyl7dmFyIHY9bS5hbHRlcm5hdGU7aWYobnVsbCE9PXYmJih2PXYubWVtb2l6ZWRTdGF0ZSxudWxsIT09dikpe0E9MTAqKDEwNzM3NDE4MjItdi50aW1lZE91dEF0KTticmVha312PW0ucGVuZGluZ1Byb3BzLm1heER1cmF0aW9uO2lmKFwibnVtYmVyXCI9PT10eXBlb2YgdilpZigwPj12KXQ9MDtlbHNlIGlmKC0xPT09dHx8djx0KXQ9dn1tPW0ucmV0dXJufXdoaWxlKG51bGwhPT1tKTttPWw7ZG97aWYodj0xMz09PW0udGFnKXY9dm9pZCAwPT09bS5tZW1vaXplZFByb3BzLmZhbGxiYWNrPyExOm51bGw9PT1tLm1lbW9pemVkU3RhdGU7aWYodil7bD1tLnVwZGF0ZVF1ZXVlO251bGw9PT1sPyhsPW5ldyBTZXQsbC5hZGQocCksbS51cGRhdGVRdWV1ZT1sKTpsLmFkZChwKTtpZigwPT09KG0ubW9kZSYxKSl7bS5lZmZlY3RUYWd8PVxuNjQ7ay5lZmZlY3RUYWcmPS0xOTU3OzE9PT1rLnRhZyYmKG51bGw9PT1rLmFsdGVybmF0ZT9rLnRhZz0xNzooZz1uZigxMDczNzQxODIzKSxnLnRhZz1zZixwZihrLGcpKSk7ay5leHBpcmF0aW9uVGltZT0xMDczNzQxODIzO2JyZWFrIGF9az1oO2w9Zzt2YXIgUj1rLnBpbmdDYWNoZTtudWxsPT09Uj8oUj1rLnBpbmdDYWNoZT1uZXcgQmgsdj1uZXcgU2V0LFIuc2V0KHAsdikpOih2PVIuZ2V0KHApLHZvaWQgMD09PXYmJih2PW5ldyBTZXQsUi5zZXQocCx2KSkpO3YuaGFzKGwpfHwodi5hZGQobCksaz1laS5iaW5kKG51bGwsayxwLGwpLHAudGhlbihrLGspKTstMT09PXQ/aD0xMDczNzQxODIzOigtMT09PUEmJihBPTEwKigxMDczNzQxODIyLWdmKGgsZykpLTVFMyksaD1BK3QpOzA8PWgmJk1oPGgmJihNaD1oKTttLmVmZmVjdFRhZ3w9MjA0ODttLmV4cGlyYXRpb25UaW1lPWc7YnJlYWsgYX1tPW0ucmV0dXJufXdoaWxlKG51bGwhPT1tKTttPUVycm9yKChpYyhrLnR5cGUpfHxcIkEgUmVhY3QgY29tcG9uZW50XCIpK1xuXCIgc3VzcGVuZGVkIHdoaWxlIHJlbmRlcmluZywgYnV0IG5vIGZhbGxiYWNrIFVJIHdhcyBzcGVjaWZpZWQuXFxuXFxuQWRkIGEgPFN1c3BlbnNlIGZhbGxiYWNrPS4uLj4gY29tcG9uZW50IGhpZ2hlciBpbiB0aGUgdHJlZSB0byBwcm92aWRlIGEgbG9hZGluZyBpbmRpY2F0b3Igb3IgcGxhY2Vob2xkZXIgdG8gZGlzcGxheS5cIitqYyhrKSl9Tmg9ITA7bT1qaChtLGspO2g9bDtkb3tzd2l0Y2goaC50YWcpe2Nhc2UgMzpoLmVmZmVjdFRhZ3w9MjA0ODtoLmV4cGlyYXRpb25UaW1lPWc7Zz1DaChoLG0sZyk7ZWgoaCxnKTticmVhayBhO2Nhc2UgMTppZih0PW0sQT1oLnR5cGUsaz1oLnN0YXRlTm9kZSwwPT09KGguZWZmZWN0VGFnJjY0KSYmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBBLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcnx8bnVsbCE9PWsmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBrLmNvbXBvbmVudERpZENhdGNoJiYobnVsbD09PUZofHwhRmguaGFzKGspKSkpe2guZWZmZWN0VGFnfD0yMDQ4O1xuaC5leHBpcmF0aW9uVGltZT1nO2c9RWgoaCx0LGcpO2VoKGgsZyk7YnJlYWsgYX19aD1oLnJldHVybn13aGlsZShudWxsIT09aCl9VD1haShmKTtjb250aW51ZX19fWJyZWFrfXdoaWxlKDEpO0toPSExO0hoLmN1cnJlbnQ9YztZZz1YZz1XZz1udWxsO2xnKCk7aWYoZSlMaD1udWxsLGEuZmluaXNoZWRXb3JrPW51bGw7ZWxzZSBpZihudWxsIT09VClhLmZpbmlzaGVkV29yaz1udWxsO2Vsc2V7Yz1hLmN1cnJlbnQuYWx0ZXJuYXRlO251bGw9PT1jP3goXCIyODFcIik6dm9pZCAwO0xoPW51bGw7aWYoTmgpe2U9YS5sYXRlc3RQZW5kaW5nVGltZTtmPWEubGF0ZXN0U3VzcGVuZGVkVGltZTtnPWEubGF0ZXN0UGluZ2VkVGltZTtpZigwIT09ZSYmZTxkfHwwIT09ZiYmZjxkfHwwIT09ZyYmZzxkKXtmZihhLGQpO2ZpKGEsYyxkLGEuZXhwaXJhdGlvblRpbWUsLTEpO3JldHVybn1pZighYS5kaWRFcnJvciYmYil7YS5kaWRFcnJvcj0hMDtkPWEubmV4dEV4cGlyYXRpb25UaW1lVG9Xb3JrT249ZDtcbmI9YS5leHBpcmF0aW9uVGltZT0xMDczNzQxODIzO2ZpKGEsYyxkLGIsLTEpO3JldHVybn19YiYmLTEhPT1NaD8oZmYoYSxkKSxiPTEwKigxMDczNzQxODIyLWdmKGEsZCkpLGI8TWgmJihNaD1iKSxiPTEwKigxMDczNzQxODIyLWxmKCkpLGI9TWgtYixmaShhLGMsZCxhLmV4cGlyYXRpb25UaW1lLDA+Yj8wOmIpKTooYS5wZW5kaW5nQ29tbWl0RXhwaXJhdGlvblRpbWU9ZCxhLmZpbmlzaGVkV29yaz1jKX19XG5mdW5jdGlvbiBzaChhLGIpe2Zvcih2YXIgYz1hLnJldHVybjtudWxsIT09Yzspe3N3aXRjaChjLnRhZyl7Y2FzZSAxOnZhciBkPWMuc3RhdGVOb2RlO2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBjLnR5cGUuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZC5jb21wb25lbnREaWRDYXRjaCYmKG51bGw9PT1GaHx8IUZoLmhhcyhkKSkpe2E9amgoYixhKTthPUVoKGMsYSwxMDczNzQxODIzKTtwZihjLGEpO3FmKGMsMTA3Mzc0MTgyMyk7cmV0dXJufWJyZWFrO2Nhc2UgMzphPWpoKGIsYSk7YT1DaChjLGEsMTA3Mzc0MTgyMyk7cGYoYyxhKTtxZihjLDEwNzM3NDE4MjMpO3JldHVybn1jPWMucmV0dXJufTM9PT1hLnRhZyYmKGM9amgoYixhKSxjPUNoKGEsYywxMDczNzQxODIzKSxwZihhLGMpLHFmKGEsMTA3Mzc0MTgyMykpfVxuZnVuY3Rpb24gbWYoYSxiKXt2YXIgYz1yLnVuc3RhYmxlX2dldEN1cnJlbnRQcmlvcml0eUxldmVsKCksZD12b2lkIDA7aWYoMD09PShiLm1vZGUmMSkpZD0xMDczNzQxODIzO2Vsc2UgaWYoS2gmJiFPaClkPVU7ZWxzZXtzd2l0Y2goYyl7Y2FzZSByLnVuc3RhYmxlX0ltbWVkaWF0ZVByaW9yaXR5OmQ9MTA3Mzc0MTgyMzticmVhaztjYXNlIHIudW5zdGFibGVfVXNlckJsb2NraW5nUHJpb3JpdHk6ZD0xMDczNzQxODIyLTEwKigoKDEwNzM3NDE4MjItYSsxNSkvMTB8MCkrMSk7YnJlYWs7Y2FzZSByLnVuc3RhYmxlX05vcm1hbFByaW9yaXR5OmQ9MTA3Mzc0MTgyMi0yNSooKCgxMDczNzQxODIyLWErNTAwKS8yNXwwKSsxKTticmVhaztjYXNlIHIudW5zdGFibGVfTG93UHJpb3JpdHk6Y2FzZSByLnVuc3RhYmxlX0lkbGVQcmlvcml0eTpkPTE7YnJlYWs7ZGVmYXVsdDp4KFwiMzEzXCIpfW51bGwhPT1MaCYmZD09PVUmJi0tZH1jPT09ci51bnN0YWJsZV9Vc2VyQmxvY2tpbmdQcmlvcml0eSYmXG4oMD09PWdpfHxkPGdpKSYmKGdpPWQpO3JldHVybiBkfWZ1bmN0aW9uIGVpKGEsYixjKXt2YXIgZD1hLnBpbmdDYWNoZTtudWxsIT09ZCYmZC5kZWxldGUoYik7aWYobnVsbCE9PUxoJiZVPT09YylMaD1udWxsO2Vsc2UgaWYoYj1hLmVhcmxpZXN0U3VzcGVuZGVkVGltZSxkPWEubGF0ZXN0U3VzcGVuZGVkVGltZSwwIT09YiYmYzw9YiYmYz49ZCl7YS5kaWRFcnJvcj0hMTtiPWEubGF0ZXN0UGluZ2VkVGltZTtpZigwPT09Ynx8Yj5jKWEubGF0ZXN0UGluZ2VkVGltZT1jO2RmKGMsYSk7Yz1hLmV4cGlyYXRpb25UaW1lOzAhPT1jJiZYaChhLGMpfX1mdW5jdGlvbiBBaChhLGIpe3ZhciBjPWEuc3RhdGVOb2RlO251bGwhPT1jJiZjLmRlbGV0ZShiKTtiPWxmKCk7Yj1tZihiLGEpO2E9aGkoYSxiKTtudWxsIT09YSYmKGNmKGEsYiksYj1hLmV4cGlyYXRpb25UaW1lLDAhPT1iJiZYaChhLGIpKX1cbmZ1bmN0aW9uIGhpKGEsYil7YS5leHBpcmF0aW9uVGltZTxiJiYoYS5leHBpcmF0aW9uVGltZT1iKTt2YXIgYz1hLmFsdGVybmF0ZTtudWxsIT09YyYmYy5leHBpcmF0aW9uVGltZTxiJiYoYy5leHBpcmF0aW9uVGltZT1iKTt2YXIgZD1hLnJldHVybixlPW51bGw7aWYobnVsbD09PWQmJjM9PT1hLnRhZyllPWEuc3RhdGVOb2RlO2Vsc2UgZm9yKDtudWxsIT09ZDspe2M9ZC5hbHRlcm5hdGU7ZC5jaGlsZEV4cGlyYXRpb25UaW1lPGImJihkLmNoaWxkRXhwaXJhdGlvblRpbWU9Yik7bnVsbCE9PWMmJmMuY2hpbGRFeHBpcmF0aW9uVGltZTxiJiYoYy5jaGlsZEV4cGlyYXRpb25UaW1lPWIpO2lmKG51bGw9PT1kLnJldHVybiYmMz09PWQudGFnKXtlPWQuc3RhdGVOb2RlO2JyZWFrfWQ9ZC5yZXR1cm59cmV0dXJuIGV9XG5mdW5jdGlvbiBxZihhLGIpe2E9aGkoYSxiKTtudWxsIT09YSYmKCFLaCYmMCE9PVUmJmI+VSYmU2goKSxjZihhLGIpLEtoJiYhT2gmJkxoPT09YXx8WGgoYSxhLmV4cGlyYXRpb25UaW1lKSxpaT5qaSYmKGlpPTAseChcIjE4NVwiKSkpfWZ1bmN0aW9uIGtpKGEsYixjLGQsZSl7cmV0dXJuIHIudW5zdGFibGVfcnVuV2l0aFByaW9yaXR5KHIudW5zdGFibGVfSW1tZWRpYXRlUHJpb3JpdHksZnVuY3Rpb24oKXtyZXR1cm4gYShiLGMsZCxlKX0pfXZhciBsaT1udWxsLFk9bnVsbCxtaT0wLG5pPXZvaWQgMCxXPSExLG9pPW51bGwsWj0wLGdpPTAscGk9ITEscWk9bnVsbCxYPSExLHJpPSExLHNpPW51bGwsdGk9ci51bnN0YWJsZV9ub3coKSx1aT0xMDczNzQxODIyLSh0aS8xMHwwKSx2aT11aSxqaT01MCxpaT0wLHdpPW51bGw7ZnVuY3Rpb24geGkoKXt1aT0xMDczNzQxODIyLSgoci51bnN0YWJsZV9ub3coKS10aSkvMTB8MCl9XG5mdW5jdGlvbiB5aShhLGIpe2lmKDAhPT1taSl7aWYoYjxtaSlyZXR1cm47bnVsbCE9PW5pJiZyLnVuc3RhYmxlX2NhbmNlbENhbGxiYWNrKG5pKX1taT1iO2E9ci51bnN0YWJsZV9ub3coKS10aTtuaT1yLnVuc3RhYmxlX3NjaGVkdWxlQ2FsbGJhY2soemkse3RpbWVvdXQ6MTAqKDEwNzM3NDE4MjItYiktYX0pfWZ1bmN0aW9uIGZpKGEsYixjLGQsZSl7YS5leHBpcmF0aW9uVGltZT1kOzAhPT1lfHxkaSgpPzA8ZSYmKGEudGltZW91dEhhbmRsZT15ZShBaS5iaW5kKG51bGwsYSxiLGMpLGUpKTooYS5wZW5kaW5nQ29tbWl0RXhwaXJhdGlvblRpbWU9YyxhLmZpbmlzaGVkV29yaz1iKX1mdW5jdGlvbiBBaShhLGIsYyl7YS5wZW5kaW5nQ29tbWl0RXhwaXJhdGlvblRpbWU9YzthLmZpbmlzaGVkV29yaz1iO3hpKCk7dmk9dWk7QmkoYSxjKX1mdW5jdGlvbiAkaChhLGIpe2EuZXhwaXJhdGlvblRpbWU9YjthLmZpbmlzaGVkV29yaz1udWxsfVxuZnVuY3Rpb24gbGYoKXtpZihXKXJldHVybiB2aTtDaSgpO2lmKDA9PT1afHwxPT09Wil4aSgpLHZpPXVpO3JldHVybiB2aX1mdW5jdGlvbiBYaChhLGIpe251bGw9PT1hLm5leHRTY2hlZHVsZWRSb290PyhhLmV4cGlyYXRpb25UaW1lPWIsbnVsbD09PVk/KGxpPVk9YSxhLm5leHRTY2hlZHVsZWRSb290PWEpOihZPVkubmV4dFNjaGVkdWxlZFJvb3Q9YSxZLm5leHRTY2hlZHVsZWRSb290PWxpKSk6Yj5hLmV4cGlyYXRpb25UaW1lJiYoYS5leHBpcmF0aW9uVGltZT1iKTtXfHwoWD9yaSYmKG9pPWEsWj0xMDczNzQxODIzLERpKGEsMTA3Mzc0MTgyMywhMSkpOjEwNzM3NDE4MjM9PT1iP1loKDEwNzM3NDE4MjMsITEpOnlpKGEsYikpfVxuZnVuY3Rpb24gQ2koKXt2YXIgYT0wLGI9bnVsbDtpZihudWxsIT09WSlmb3IodmFyIGM9WSxkPWxpO251bGwhPT1kOyl7dmFyIGU9ZC5leHBpcmF0aW9uVGltZTtpZigwPT09ZSl7bnVsbD09PWN8fG51bGw9PT1ZP3goXCIyNDRcIik6dm9pZCAwO2lmKGQ9PT1kLm5leHRTY2hlZHVsZWRSb290KXtsaT1ZPWQubmV4dFNjaGVkdWxlZFJvb3Q9bnVsbDticmVha31lbHNlIGlmKGQ9PT1saSlsaT1lPWQubmV4dFNjaGVkdWxlZFJvb3QsWS5uZXh0U2NoZWR1bGVkUm9vdD1lLGQubmV4dFNjaGVkdWxlZFJvb3Q9bnVsbDtlbHNlIGlmKGQ9PT1ZKXtZPWM7WS5uZXh0U2NoZWR1bGVkUm9vdD1saTtkLm5leHRTY2hlZHVsZWRSb290PW51bGw7YnJlYWt9ZWxzZSBjLm5leHRTY2hlZHVsZWRSb290PWQubmV4dFNjaGVkdWxlZFJvb3QsZC5uZXh0U2NoZWR1bGVkUm9vdD1udWxsO2Q9Yy5uZXh0U2NoZWR1bGVkUm9vdH1lbHNle2U+YSYmKGE9ZSxiPWQpO2lmKGQ9PT1ZKWJyZWFrO2lmKDEwNzM3NDE4MjM9PT1cbmEpYnJlYWs7Yz1kO2Q9ZC5uZXh0U2NoZWR1bGVkUm9vdH19b2k9YjtaPWF9dmFyIEVpPSExO2Z1bmN0aW9uIGRpKCl7cmV0dXJuIEVpPyEwOnIudW5zdGFibGVfc2hvdWxkWWllbGQoKT9FaT0hMDohMX1mdW5jdGlvbiB6aSgpe3RyeXtpZighZGkoKSYmbnVsbCE9PWxpKXt4aSgpO3ZhciBhPWxpO2Rve3ZhciBiPWEuZXhwaXJhdGlvblRpbWU7MCE9PWImJnVpPD1iJiYoYS5uZXh0RXhwaXJhdGlvblRpbWVUb1dvcmtPbj11aSk7YT1hLm5leHRTY2hlZHVsZWRSb290fXdoaWxlKGEhPT1saSl9WWgoMCwhMCl9ZmluYWxseXtFaT0hMX19XG5mdW5jdGlvbiBZaChhLGIpe0NpKCk7aWYoYilmb3IoeGkoKSx2aT11aTtudWxsIT09b2kmJjAhPT1aJiZhPD1aJiYhKEVpJiZ1aT5aKTspRGkob2ksWix1aT5aKSxDaSgpLHhpKCksdmk9dWk7ZWxzZSBmb3IoO251bGwhPT1vaSYmMCE9PVomJmE8PVo7KURpKG9pLFosITEpLENpKCk7YiYmKG1pPTAsbmk9bnVsbCk7MCE9PVomJnlpKG9pLFopO2lpPTA7d2k9bnVsbDtpZihudWxsIT09c2kpZm9yKGE9c2ksc2k9bnVsbCxiPTA7YjxhLmxlbmd0aDtiKyspe3ZhciBjPWFbYl07dHJ5e2MuX29uQ29tcGxldGUoKX1jYXRjaChkKXtwaXx8KHBpPSEwLHFpPWQpfX1pZihwaSl0aHJvdyBhPXFpLHFpPW51bGwscGk9ITEsYTt9ZnVuY3Rpb24gQmkoYSxiKXtXP3goXCIyNTNcIik6dm9pZCAwO29pPWE7Wj1iO0RpKGEsYiwhMSk7WWgoMTA3Mzc0MTgyMywhMSl9XG5mdW5jdGlvbiBEaShhLGIsYyl7Vz94KFwiMjQ1XCIpOnZvaWQgMDtXPSEwO2lmKGMpe3ZhciBkPWEuZmluaXNoZWRXb3JrO251bGwhPT1kP0ZpKGEsZCxiKTooYS5maW5pc2hlZFdvcms9bnVsbCxkPWEudGltZW91dEhhbmRsZSwtMSE9PWQmJihhLnRpbWVvdXRIYW5kbGU9LTEsemUoZCkpLGNpKGEsYyksZD1hLmZpbmlzaGVkV29yayxudWxsIT09ZCYmKGRpKCk/YS5maW5pc2hlZFdvcms9ZDpGaShhLGQsYikpKX1lbHNlIGQ9YS5maW5pc2hlZFdvcmssbnVsbCE9PWQ/RmkoYSxkLGIpOihhLmZpbmlzaGVkV29yaz1udWxsLGQ9YS50aW1lb3V0SGFuZGxlLC0xIT09ZCYmKGEudGltZW91dEhhbmRsZT0tMSx6ZShkKSksY2koYSxjKSxkPWEuZmluaXNoZWRXb3JrLG51bGwhPT1kJiZGaShhLGQsYikpO1c9ITF9XG5mdW5jdGlvbiBGaShhLGIsYyl7dmFyIGQ9YS5maXJzdEJhdGNoO2lmKG51bGwhPT1kJiZkLl9leHBpcmF0aW9uVGltZT49YyYmKG51bGw9PT1zaT9zaT1bZF06c2kucHVzaChkKSxkLl9kZWZlcikpe2EuZmluaXNoZWRXb3JrPWI7YS5leHBpcmF0aW9uVGltZT0wO3JldHVybn1hLmZpbmlzaGVkV29yaz1udWxsO2E9PT13aT9paSsrOih3aT1hLGlpPTApO3IudW5zdGFibGVfcnVuV2l0aFByaW9yaXR5KHIudW5zdGFibGVfSW1tZWRpYXRlUHJpb3JpdHksZnVuY3Rpb24oKXtaaChhLGIpfSl9ZnVuY3Rpb24gRGgoYSl7bnVsbD09PW9pP3goXCIyNDZcIik6dm9pZCAwO29pLmV4cGlyYXRpb25UaW1lPTA7cGl8fChwaT0hMCxxaT1hKX1mdW5jdGlvbiBHaShhLGIpe3ZhciBjPVg7WD0hMDt0cnl7cmV0dXJuIGEoYil9ZmluYWxseXsoWD1jKXx8V3x8WWgoMTA3Mzc0MTgyMywhMSl9fVxuZnVuY3Rpb24gSGkoYSxiKXtpZihYJiYhcmkpe3JpPSEwO3RyeXtyZXR1cm4gYShiKX1maW5hbGx5e3JpPSExfX1yZXR1cm4gYShiKX1mdW5jdGlvbiBJaShhLGIsYyl7WHx8V3x8MD09PWdpfHwoWWgoZ2ksITEpLGdpPTApO3ZhciBkPVg7WD0hMDt0cnl7cmV0dXJuIHIudW5zdGFibGVfcnVuV2l0aFByaW9yaXR5KHIudW5zdGFibGVfVXNlckJsb2NraW5nUHJpb3JpdHksZnVuY3Rpb24oKXtyZXR1cm4gYShiLGMpfSl9ZmluYWxseXsoWD1kKXx8V3x8WWgoMTA3Mzc0MTgyMywhMSl9fVxuZnVuY3Rpb24gSmkoYSxiLGMsZCxlKXt2YXIgZj1iLmN1cnJlbnQ7YTppZihjKXtjPWMuX3JlYWN0SW50ZXJuYWxGaWJlcjtiOnsyPT09ZWQoYykmJjE9PT1jLnRhZz92b2lkIDA6eChcIjE3MFwiKTt2YXIgZz1jO2Rve3N3aXRjaChnLnRhZyl7Y2FzZSAzOmc9Zy5zdGF0ZU5vZGUuY29udGV4dDticmVhayBiO2Nhc2UgMTppZihKKGcudHlwZSkpe2c9Zy5zdGF0ZU5vZGUuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNZXJnZWRDaGlsZENvbnRleHQ7YnJlYWsgYn19Zz1nLnJldHVybn13aGlsZShudWxsIT09Zyk7eChcIjE3MVwiKTtnPXZvaWQgMH1pZigxPT09Yy50YWcpe3ZhciBoPWMudHlwZTtpZihKKGgpKXtjPU5lKGMsaCxnKTticmVhayBhfX1jPWd9ZWxzZSBjPUhlO251bGw9PT1iLmNvbnRleHQ/Yi5jb250ZXh0PWM6Yi5wZW5kaW5nQ29udGV4dD1jO2I9ZTtlPW5mKGQpO2UucGF5bG9hZD17ZWxlbWVudDphfTtiPXZvaWQgMD09PWI/bnVsbDpiO251bGwhPT1iJiYoZS5jYWxsYmFjaz1iKTtcbm9mKCk7cGYoZixlKTtxZihmLGQpO3JldHVybiBkfWZ1bmN0aW9uIEtpKGEsYixjLGQpe3ZhciBlPWIuY3VycmVudCxmPWxmKCk7ZT1tZihmLGUpO3JldHVybiBKaShhLGIsYyxlLGQpfWZ1bmN0aW9uIExpKGEpe2E9YS5jdXJyZW50O2lmKCFhLmNoaWxkKXJldHVybiBudWxsO3N3aXRjaChhLmNoaWxkLnRhZyl7Y2FzZSA1OnJldHVybiBhLmNoaWxkLnN0YXRlTm9kZTtkZWZhdWx0OnJldHVybiBhLmNoaWxkLnN0YXRlTm9kZX19ZnVuY3Rpb24gTWkoYSxiLGMpe3ZhciBkPTM8YXJndW1lbnRzLmxlbmd0aCYmdm9pZCAwIT09YXJndW1lbnRzWzNdP2FyZ3VtZW50c1szXTpudWxsO3JldHVybnskJHR5cGVvZjpXYixrZXk6bnVsbD09ZD9udWxsOlwiXCIrZCxjaGlsZHJlbjphLGNvbnRhaW5lckluZm86YixpbXBsZW1lbnRhdGlvbjpjfX1cbkFiPWZ1bmN0aW9uKGEsYixjKXtzd2l0Y2goYil7Y2FzZSBcImlucHV0XCI6eWMoYSxjKTtiPWMubmFtZTtpZihcInJhZGlvXCI9PT1jLnR5cGUmJm51bGwhPWIpe2ZvcihjPWE7Yy5wYXJlbnROb2RlOyljPWMucGFyZW50Tm9kZTtjPWMucXVlcnlTZWxlY3RvckFsbChcImlucHV0W25hbWU9XCIrSlNPTi5zdHJpbmdpZnkoXCJcIitiKSsnXVt0eXBlPVwicmFkaW9cIl0nKTtmb3IoYj0wO2I8Yy5sZW5ndGg7YisrKXt2YXIgZD1jW2JdO2lmKGQhPT1hJiZkLmZvcm09PT1hLmZvcm0pe3ZhciBlPUthKGQpO2U/dm9pZCAwOngoXCI5MFwiKTtTYihkKTt5YyhkLGUpfX19YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6ZGUoYSxjKTticmVhaztjYXNlIFwic2VsZWN0XCI6Yj1jLnZhbHVlLG51bGwhPWImJmFlKGEsISFjLm11bHRpcGxlLGIsITEpfX07XG5mdW5jdGlvbiBOaShhKXt2YXIgYj0xMDczNzQxODIyLTI1KigoKDEwNzM3NDE4MjItbGYoKSs1MDApLzI1fDApKzEpO2I+PUpoJiYoYj1KaC0xKTt0aGlzLl9leHBpcmF0aW9uVGltZT1KaD1iO3RoaXMuX3Jvb3Q9YTt0aGlzLl9jYWxsYmFja3M9dGhpcy5fbmV4dD1udWxsO3RoaXMuX2hhc0NoaWxkcmVuPXRoaXMuX2RpZENvbXBsZXRlPSExO3RoaXMuX2NoaWxkcmVuPW51bGw7dGhpcy5fZGVmZXI9ITB9TmkucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihhKXt0aGlzLl9kZWZlcj92b2lkIDA6eChcIjI1MFwiKTt0aGlzLl9oYXNDaGlsZHJlbj0hMDt0aGlzLl9jaGlsZHJlbj1hO3ZhciBiPXRoaXMuX3Jvb3QuX2ludGVybmFsUm9vdCxjPXRoaXMuX2V4cGlyYXRpb25UaW1lLGQ9bmV3IE9pO0ppKGEsYixudWxsLGMsZC5fb25Db21taXQpO3JldHVybiBkfTtcbk5pLnByb3RvdHlwZS50aGVuPWZ1bmN0aW9uKGEpe2lmKHRoaXMuX2RpZENvbXBsZXRlKWEoKTtlbHNle3ZhciBiPXRoaXMuX2NhbGxiYWNrcztudWxsPT09YiYmKGI9dGhpcy5fY2FsbGJhY2tzPVtdKTtiLnB1c2goYSl9fTtcbk5pLnByb3RvdHlwZS5jb21taXQ9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLl9yb290Ll9pbnRlcm5hbFJvb3QsYj1hLmZpcnN0QmF0Y2g7dGhpcy5fZGVmZXImJm51bGwhPT1iP3ZvaWQgMDp4KFwiMjUxXCIpO2lmKHRoaXMuX2hhc0NoaWxkcmVuKXt2YXIgYz10aGlzLl9leHBpcmF0aW9uVGltZTtpZihiIT09dGhpcyl7dGhpcy5faGFzQ2hpbGRyZW4mJihjPXRoaXMuX2V4cGlyYXRpb25UaW1lPWIuX2V4cGlyYXRpb25UaW1lLHRoaXMucmVuZGVyKHRoaXMuX2NoaWxkcmVuKSk7Zm9yKHZhciBkPW51bGwsZT1iO2UhPT10aGlzOylkPWUsZT1lLl9uZXh0O251bGw9PT1kP3goXCIyNTFcIik6dm9pZCAwO2QuX25leHQ9ZS5fbmV4dDt0aGlzLl9uZXh0PWI7YS5maXJzdEJhdGNoPXRoaXN9dGhpcy5fZGVmZXI9ITE7QmkoYSxjKTtiPXRoaXMuX25leHQ7dGhpcy5fbmV4dD1udWxsO2I9YS5maXJzdEJhdGNoPWI7bnVsbCE9PWImJmIuX2hhc0NoaWxkcmVuJiZiLnJlbmRlcihiLl9jaGlsZHJlbil9ZWxzZSB0aGlzLl9uZXh0PVxubnVsbCx0aGlzLl9kZWZlcj0hMX07TmkucHJvdG90eXBlLl9vbkNvbXBsZXRlPWZ1bmN0aW9uKCl7aWYoIXRoaXMuX2RpZENvbXBsZXRlKXt0aGlzLl9kaWRDb21wbGV0ZT0hMDt2YXIgYT10aGlzLl9jYWxsYmFja3M7aWYobnVsbCE9PWEpZm9yKHZhciBiPTA7YjxhLmxlbmd0aDtiKyspKDAsYVtiXSkoKX19O2Z1bmN0aW9uIE9pKCl7dGhpcy5fY2FsbGJhY2tzPW51bGw7dGhpcy5fZGlkQ29tbWl0PSExO3RoaXMuX29uQ29tbWl0PXRoaXMuX29uQ29tbWl0LmJpbmQodGhpcyl9T2kucHJvdG90eXBlLnRoZW49ZnVuY3Rpb24oYSl7aWYodGhpcy5fZGlkQ29tbWl0KWEoKTtlbHNle3ZhciBiPXRoaXMuX2NhbGxiYWNrcztudWxsPT09YiYmKGI9dGhpcy5fY2FsbGJhY2tzPVtdKTtiLnB1c2goYSl9fTtcbk9pLnByb3RvdHlwZS5fb25Db21taXQ9ZnVuY3Rpb24oKXtpZighdGhpcy5fZGlkQ29tbWl0KXt0aGlzLl9kaWRDb21taXQ9ITA7dmFyIGE9dGhpcy5fY2FsbGJhY2tzO2lmKG51bGwhPT1hKWZvcih2YXIgYj0wO2I8YS5sZW5ndGg7YisrKXt2YXIgYz1hW2JdO1wiZnVuY3Rpb25cIiE9PXR5cGVvZiBjP3goXCIxOTFcIixjKTp2b2lkIDA7YygpfX19O1xuZnVuY3Rpb24gUGkoYSxiLGMpe2I9SygzLG51bGwsbnVsbCxiPzM6MCk7YT17Y3VycmVudDpiLGNvbnRhaW5lckluZm86YSxwZW5kaW5nQ2hpbGRyZW46bnVsbCxwaW5nQ2FjaGU6bnVsbCxlYXJsaWVzdFBlbmRpbmdUaW1lOjAsbGF0ZXN0UGVuZGluZ1RpbWU6MCxlYXJsaWVzdFN1c3BlbmRlZFRpbWU6MCxsYXRlc3RTdXNwZW5kZWRUaW1lOjAsbGF0ZXN0UGluZ2VkVGltZTowLGRpZEVycm9yOiExLHBlbmRpbmdDb21taXRFeHBpcmF0aW9uVGltZTowLGZpbmlzaGVkV29yazpudWxsLHRpbWVvdXRIYW5kbGU6LTEsY29udGV4dDpudWxsLHBlbmRpbmdDb250ZXh0Om51bGwsaHlkcmF0ZTpjLG5leHRFeHBpcmF0aW9uVGltZVRvV29ya09uOjAsZXhwaXJhdGlvblRpbWU6MCxmaXJzdEJhdGNoOm51bGwsbmV4dFNjaGVkdWxlZFJvb3Q6bnVsbH07dGhpcy5faW50ZXJuYWxSb290PWIuc3RhdGVOb2RlPWF9XG5QaS5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5faW50ZXJuYWxSb290LGQ9bmV3IE9pO2I9dm9pZCAwPT09Yj9udWxsOmI7bnVsbCE9PWImJmQudGhlbihiKTtLaShhLGMsbnVsbCxkLl9vbkNvbW1pdCk7cmV0dXJuIGR9O1BpLnByb3RvdHlwZS51bm1vdW50PWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuX2ludGVybmFsUm9vdCxjPW5ldyBPaTthPXZvaWQgMD09PWE/bnVsbDphO251bGwhPT1hJiZjLnRoZW4oYSk7S2kobnVsbCxiLG51bGwsYy5fb25Db21taXQpO3JldHVybiBjfTtQaS5wcm90b3R5cGUubGVnYWN5X3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD10aGlzLl9pbnRlcm5hbFJvb3QsZT1uZXcgT2k7Yz12b2lkIDA9PT1jP251bGw6YztudWxsIT09YyYmZS50aGVuKGMpO0tpKGIsZCxhLGUuX29uQ29tbWl0KTtyZXR1cm4gZX07XG5QaS5wcm90b3R5cGUuY3JlYXRlQmF0Y2g9ZnVuY3Rpb24oKXt2YXIgYT1uZXcgTmkodGhpcyksYj1hLl9leHBpcmF0aW9uVGltZSxjPXRoaXMuX2ludGVybmFsUm9vdCxkPWMuZmlyc3RCYXRjaDtpZihudWxsPT09ZCljLmZpcnN0QmF0Y2g9YSxhLl9uZXh0PW51bGw7ZWxzZXtmb3IoYz1udWxsO251bGwhPT1kJiZkLl9leHBpcmF0aW9uVGltZT49YjspYz1kLGQ9ZC5fbmV4dDthLl9uZXh0PWQ7bnVsbCE9PWMmJihjLl9uZXh0PWEpfXJldHVybiBhfTtmdW5jdGlvbiBRaShhKXtyZXR1cm4hKCFhfHwxIT09YS5ub2RlVHlwZSYmOSE9PWEubm9kZVR5cGUmJjExIT09YS5ub2RlVHlwZSYmKDghPT1hLm5vZGVUeXBlfHxcIiByZWFjdC1tb3VudC1wb2ludC11bnN0YWJsZSBcIiE9PWEubm9kZVZhbHVlKSl9R2I9R2k7SGI9SWk7SWI9ZnVuY3Rpb24oKXtXfHwwPT09Z2l8fChZaChnaSwhMSksZ2k9MCl9O1xuZnVuY3Rpb24gUmkoYSxiKXtifHwoYj1hPzk9PT1hLm5vZGVUeXBlP2EuZG9jdW1lbnRFbGVtZW50OmEuZmlyc3RDaGlsZDpudWxsLGI9ISghYnx8MSE9PWIubm9kZVR5cGV8fCFiLmhhc0F0dHJpYnV0ZShcImRhdGEtcmVhY3Ryb290XCIpKSk7aWYoIWIpZm9yKHZhciBjO2M9YS5sYXN0Q2hpbGQ7KWEucmVtb3ZlQ2hpbGQoYyk7cmV0dXJuIG5ldyBQaShhLCExLGIpfVxuZnVuY3Rpb24gU2koYSxiLGMsZCxlKXt2YXIgZj1jLl9yZWFjdFJvb3RDb250YWluZXI7aWYoZil7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGUpe3ZhciBnPWU7ZT1mdW5jdGlvbigpe3ZhciBhPUxpKGYuX2ludGVybmFsUm9vdCk7Zy5jYWxsKGEpfX1udWxsIT1hP2YubGVnYWN5X3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyKGEsYixlKTpmLnJlbmRlcihiLGUpfWVsc2V7Zj1jLl9yZWFjdFJvb3RDb250YWluZXI9UmkoYyxkKTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZSl7dmFyIGg9ZTtlPWZ1bmN0aW9uKCl7dmFyIGE9TGkoZi5faW50ZXJuYWxSb290KTtoLmNhbGwoYSl9fUhpKGZ1bmN0aW9uKCl7bnVsbCE9YT9mLmxlZ2FjeV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcihhLGIsZSk6Zi5yZW5kZXIoYixlKX0pfXJldHVybiBMaShmLl9pbnRlcm5hbFJvb3QpfVxuZnVuY3Rpb24gVGkoYSxiKXt2YXIgYz0yPGFyZ3VtZW50cy5sZW5ndGgmJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06bnVsbDtRaShiKT92b2lkIDA6eChcIjIwMFwiKTtyZXR1cm4gTWkoYSxiLG51bGwsYyl9XG52YXIgVmk9e2NyZWF0ZVBvcnRhbDpUaSxmaW5kRE9NTm9kZTpmdW5jdGlvbihhKXtpZihudWxsPT1hKXJldHVybiBudWxsO2lmKDE9PT1hLm5vZGVUeXBlKXJldHVybiBhO3ZhciBiPWEuX3JlYWN0SW50ZXJuYWxGaWJlcjt2b2lkIDA9PT1iJiYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEucmVuZGVyP3goXCIxODhcIik6eChcIjI2OFwiLE9iamVjdC5rZXlzKGEpKSk7YT1oZChiKTthPW51bGw9PT1hP251bGw6YS5zdGF0ZU5vZGU7cmV0dXJuIGF9LGh5ZHJhdGU6ZnVuY3Rpb24oYSxiLGMpe1FpKGIpP3ZvaWQgMDp4KFwiMjAwXCIpO3JldHVybiBTaShudWxsLGEsYiwhMCxjKX0scmVuZGVyOmZ1bmN0aW9uKGEsYixjKXtRaShiKT92b2lkIDA6eChcIjIwMFwiKTtyZXR1cm4gU2kobnVsbCxhLGIsITEsYyl9LHVuc3RhYmxlX3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyOmZ1bmN0aW9uKGEsYixjLGQpe1FpKGMpP3ZvaWQgMDp4KFwiMjAwXCIpO251bGw9PWF8fHZvaWQgMD09PWEuX3JlYWN0SW50ZXJuYWxGaWJlcj9cbngoXCIzOFwiKTp2b2lkIDA7cmV0dXJuIFNpKGEsYixjLCExLGQpfSx1bm1vdW50Q29tcG9uZW50QXROb2RlOmZ1bmN0aW9uKGEpe1FpKGEpP3ZvaWQgMDp4KFwiNDBcIik7cmV0dXJuIGEuX3JlYWN0Um9vdENvbnRhaW5lcj8oSGkoZnVuY3Rpb24oKXtTaShudWxsLG51bGwsYSwhMSxmdW5jdGlvbigpe2EuX3JlYWN0Um9vdENvbnRhaW5lcj1udWxsfSl9KSwhMCk6ITF9LHVuc3RhYmxlX2NyZWF0ZVBvcnRhbDpmdW5jdGlvbigpe3JldHVybiBUaS5hcHBseSh2b2lkIDAsYXJndW1lbnRzKX0sdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXM6R2ksdW5zdGFibGVfaW50ZXJhY3RpdmVVcGRhdGVzOklpLGZsdXNoU3luYzpmdW5jdGlvbihhLGIpe1c/eChcIjE4N1wiKTp2b2lkIDA7dmFyIGM9WDtYPSEwO3RyeXtyZXR1cm4ga2koYSxiKX1maW5hbGx5e1g9YyxZaCgxMDczNzQxODIzLCExKX19LHVuc3RhYmxlX2NyZWF0ZVJvb3Q6VWksdW5zdGFibGVfZmx1c2hDb250cm9sbGVkOmZ1bmN0aW9uKGEpe3ZhciBiPVxuWDtYPSEwO3RyeXtraShhKX1maW5hbGx5eyhYPWIpfHxXfHxZaCgxMDczNzQxODIzLCExKX19LF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEOntFdmVudHM6W0lhLEphLEthLEJhLmluamVjdEV2ZW50UGx1Z2luc0J5TmFtZSxwYSxRYSxmdW5jdGlvbihhKXt5YShhLFBhKX0sRWIsRmIsRGQsRGFdfX07ZnVuY3Rpb24gVWkoYSxiKXtRaShhKT92b2lkIDA6eChcIjI5OVwiLFwidW5zdGFibGVfY3JlYXRlUm9vdFwiKTtyZXR1cm4gbmV3IFBpKGEsITAsbnVsbCE9YiYmITA9PT1iLmh5ZHJhdGUpfVxuKGZ1bmN0aW9uKGEpe3ZhciBiPWEuZmluZEZpYmVyQnlIb3N0SW5zdGFuY2U7cmV0dXJuIFRlKG4oe30sYSx7b3ZlcnJpZGVQcm9wczpudWxsLGN1cnJlbnREaXNwYXRjaGVyUmVmOlRiLlJlYWN0Q3VycmVudERpc3BhdGNoZXIsZmluZEhvc3RJbnN0YW5jZUJ5RmliZXI6ZnVuY3Rpb24oYSl7YT1oZChhKTtyZXR1cm4gbnVsbD09PWE/bnVsbDphLnN0YXRlTm9kZX0sZmluZEZpYmVyQnlIb3N0SW5zdGFuY2U6ZnVuY3Rpb24oYSl7cmV0dXJuIGI/YihhKTpudWxsfX0pKX0pKHtmaW5kRmliZXJCeUhvc3RJbnN0YW5jZTpIYSxidW5kbGVUeXBlOjAsdmVyc2lvbjpcIjE2LjguNlwiLHJlbmRlcmVyUGFja2FnZU5hbWU6XCJyZWFjdC1kb21cIn0pO3ZhciBXaT17ZGVmYXVsdDpWaX0sWGk9V2kmJlZpfHxXaTttb2R1bGUuZXhwb3J0cz1YaS5kZWZhdWx0fHxYaTtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9zY2hlZHVsZXIucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvc2NoZWR1bGVyLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjAuMTMuNlxuICogc2NoZWR1bGVyLnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBkPW51bGwsZT0hMSxnPTMsaz0tMSxsPS0xLG09ITEsbj0hMTtmdW5jdGlvbiBwKCl7aWYoIW0pe3ZhciBhPWQuZXhwaXJhdGlvblRpbWU7bj9xKCk6bj0hMDtyKHQsYSl9fVxuZnVuY3Rpb24gdSgpe3ZhciBhPWQsYj1kLm5leHQ7aWYoZD09PWIpZD1udWxsO2Vsc2V7dmFyIGM9ZC5wcmV2aW91cztkPWMubmV4dD1iO2IucHJldmlvdXM9Y31hLm5leHQ9YS5wcmV2aW91cz1udWxsO2M9YS5jYWxsYmFjaztiPWEuZXhwaXJhdGlvblRpbWU7YT1hLnByaW9yaXR5TGV2ZWw7dmFyIGY9ZyxRPWw7Zz1hO2w9Yjt0cnl7dmFyIGg9YygpfWZpbmFsbHl7Zz1mLGw9UX1pZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgaClpZihoPXtjYWxsYmFjazpoLHByaW9yaXR5TGV2ZWw6YSxleHBpcmF0aW9uVGltZTpiLG5leHQ6bnVsbCxwcmV2aW91czpudWxsfSxudWxsPT09ZClkPWgubmV4dD1oLnByZXZpb3VzPWg7ZWxzZXtjPW51bGw7YT1kO2Rve2lmKGEuZXhwaXJhdGlvblRpbWU+PWIpe2M9YTticmVha31hPWEubmV4dH13aGlsZShhIT09ZCk7bnVsbD09PWM/Yz1kOmM9PT1kJiYoZD1oLHAoKSk7Yj1jLnByZXZpb3VzO2IubmV4dD1jLnByZXZpb3VzPWg7aC5uZXh0PWM7aC5wcmV2aW91cz1cbmJ9fWZ1bmN0aW9uIHYoKXtpZigtMT09PWsmJm51bGwhPT1kJiYxPT09ZC5wcmlvcml0eUxldmVsKXttPSEwO3RyeXtkbyB1KCk7d2hpbGUobnVsbCE9PWQmJjE9PT1kLnByaW9yaXR5TGV2ZWwpfWZpbmFsbHl7bT0hMSxudWxsIT09ZD9wKCk6bj0hMX19fWZ1bmN0aW9uIHQoYSl7bT0hMDt2YXIgYj1lO2U9YTt0cnl7aWYoYSlmb3IoO251bGwhPT1kOyl7dmFyIGM9ZXhwb3J0cy51bnN0YWJsZV9ub3coKTtpZihkLmV4cGlyYXRpb25UaW1lPD1jKXtkbyB1KCk7d2hpbGUobnVsbCE9PWQmJmQuZXhwaXJhdGlvblRpbWU8PWMpfWVsc2UgYnJlYWt9ZWxzZSBpZihudWxsIT09ZCl7ZG8gdSgpO3doaWxlKG51bGwhPT1kJiYhdygpKX19ZmluYWxseXttPSExLGU9YixudWxsIT09ZD9wKCk6bj0hMSx2KCl9fVxudmFyIHg9RGF0ZSx5PVwiZnVuY3Rpb25cIj09PXR5cGVvZiBzZXRUaW1lb3V0P3NldFRpbWVvdXQ6dm9pZCAwLHo9XCJmdW5jdGlvblwiPT09dHlwZW9mIGNsZWFyVGltZW91dD9jbGVhclRpbWVvdXQ6dm9pZCAwLEE9XCJmdW5jdGlvblwiPT09dHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZT9yZXF1ZXN0QW5pbWF0aW9uRnJhbWU6dm9pZCAwLEI9XCJmdW5jdGlvblwiPT09dHlwZW9mIGNhbmNlbEFuaW1hdGlvbkZyYW1lP2NhbmNlbEFuaW1hdGlvbkZyYW1lOnZvaWQgMCxDLEQ7ZnVuY3Rpb24gRShhKXtDPUEoZnVuY3Rpb24oYil7eihEKTthKGIpfSk7RD15KGZ1bmN0aW9uKCl7QihDKTthKGV4cG9ydHMudW5zdGFibGVfbm93KCkpfSwxMDApfVxuaWYoXCJvYmplY3RcIj09PXR5cGVvZiBwZXJmb3JtYW5jZSYmXCJmdW5jdGlvblwiPT09dHlwZW9mIHBlcmZvcm1hbmNlLm5vdyl7dmFyIEY9cGVyZm9ybWFuY2U7ZXhwb3J0cy51bnN0YWJsZV9ub3c9ZnVuY3Rpb24oKXtyZXR1cm4gRi5ub3coKX19ZWxzZSBleHBvcnRzLnVuc3RhYmxlX25vdz1mdW5jdGlvbigpe3JldHVybiB4Lm5vdygpfTt2YXIgcixxLHcsRz1udWxsO1widW5kZWZpbmVkXCIhPT10eXBlb2Ygd2luZG93P0c9d2luZG93OlwidW5kZWZpbmVkXCIhPT10eXBlb2YgZ2xvYmFsJiYoRz1nbG9iYWwpO1xuaWYoRyYmRy5fc2NoZWRNb2NrKXt2YXIgSD1HLl9zY2hlZE1vY2s7cj1IWzBdO3E9SFsxXTt3PUhbMl07ZXhwb3J0cy51bnN0YWJsZV9ub3c9SFszXX1lbHNlIGlmKFwidW5kZWZpbmVkXCI9PT10eXBlb2Ygd2luZG93fHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgTWVzc2FnZUNoYW5uZWwpe3ZhciBJPW51bGwsSj1mdW5jdGlvbihhKXtpZihudWxsIT09SSl0cnl7SShhKX1maW5hbGx5e0k9bnVsbH19O3I9ZnVuY3Rpb24oYSl7bnVsbCE9PUk/c2V0VGltZW91dChyLDAsYSk6KEk9YSxzZXRUaW1lb3V0KEosMCwhMSkpfTtxPWZ1bmN0aW9uKCl7ST1udWxsfTt3PWZ1bmN0aW9uKCl7cmV0dXJuITF9fWVsc2V7XCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBjb25zb2xlJiYoXCJmdW5jdGlvblwiIT09dHlwZW9mIEEmJmNvbnNvbGUuZXJyb3IoXCJUaGlzIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IHJlcXVlc3RBbmltYXRpb25GcmFtZS4gTWFrZSBzdXJlIHRoYXQgeW91IGxvYWQgYSBwb2x5ZmlsbCBpbiBvbGRlciBicm93c2Vycy4gaHR0cHM6Ly9mYi5tZS9yZWFjdC1wb2x5ZmlsbHNcIiksXG5cImZ1bmN0aW9uXCIhPT10eXBlb2YgQiYmY29uc29sZS5lcnJvcihcIlRoaXMgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgY2FuY2VsQW5pbWF0aW9uRnJhbWUuIE1ha2Ugc3VyZSB0aGF0IHlvdSBsb2FkIGEgcG9seWZpbGwgaW4gb2xkZXIgYnJvd3NlcnMuIGh0dHBzOi8vZmIubWUvcmVhY3QtcG9seWZpbGxzXCIpKTt2YXIgSz1udWxsLEw9ITEsTT0tMSxOPSExLE89ITEsUD0wLFI9MzMsUz0zMzt3PWZ1bmN0aW9uKCl7cmV0dXJuIFA8PWV4cG9ydHMudW5zdGFibGVfbm93KCl9O3ZhciBUPW5ldyBNZXNzYWdlQ2hhbm5lbCxVPVQucG9ydDI7VC5wb3J0MS5vbm1lc3NhZ2U9ZnVuY3Rpb24oKXtMPSExO3ZhciBhPUssYj1NO0s9bnVsbDtNPS0xO3ZhciBjPWV4cG9ydHMudW5zdGFibGVfbm93KCksZj0hMTtpZigwPj1QLWMpaWYoLTEhPT1iJiZiPD1jKWY9ITA7ZWxzZXtOfHwoTj0hMCxFKFYpKTtLPWE7TT1iO3JldHVybn1pZihudWxsIT09YSl7Tz0hMDt0cnl7YShmKX1maW5hbGx5e089ITF9fX07XG52YXIgVj1mdW5jdGlvbihhKXtpZihudWxsIT09Syl7RShWKTt2YXIgYj1hLVArUztiPFMmJlI8Uz8oOD5iJiYoYj04KSxTPWI8Uj9SOmIpOlI9YjtQPWErUztMfHwoTD0hMCxVLnBvc3RNZXNzYWdlKHZvaWQgMCkpfWVsc2UgTj0hMX07cj1mdW5jdGlvbihhLGIpe0s9YTtNPWI7T3x8MD5iP1UucG9zdE1lc3NhZ2Uodm9pZCAwKTpOfHwoTj0hMCxFKFYpKX07cT1mdW5jdGlvbigpe0s9bnVsbDtMPSExO009LTF9fWV4cG9ydHMudW5zdGFibGVfSW1tZWRpYXRlUHJpb3JpdHk9MTtleHBvcnRzLnVuc3RhYmxlX1VzZXJCbG9ja2luZ1ByaW9yaXR5PTI7ZXhwb3J0cy51bnN0YWJsZV9Ob3JtYWxQcmlvcml0eT0zO2V4cG9ydHMudW5zdGFibGVfSWRsZVByaW9yaXR5PTU7ZXhwb3J0cy51bnN0YWJsZV9Mb3dQcmlvcml0eT00O1xuZXhwb3J0cy51bnN0YWJsZV9ydW5XaXRoUHJpb3JpdHk9ZnVuY3Rpb24oYSxiKXtzd2l0Y2goYSl7Y2FzZSAxOmNhc2UgMjpjYXNlIDM6Y2FzZSA0OmNhc2UgNTpicmVhaztkZWZhdWx0OmE9M312YXIgYz1nLGY9aztnPWE7az1leHBvcnRzLnVuc3RhYmxlX25vdygpO3RyeXtyZXR1cm4gYigpfWZpbmFsbHl7Zz1jLGs9Zix2KCl9fTtleHBvcnRzLnVuc3RhYmxlX25leHQ9ZnVuY3Rpb24oYSl7c3dpdGNoKGcpe2Nhc2UgMTpjYXNlIDI6Y2FzZSAzOnZhciBiPTM7YnJlYWs7ZGVmYXVsdDpiPWd9dmFyIGM9ZyxmPWs7Zz1iO2s9ZXhwb3J0cy51bnN0YWJsZV9ub3coKTt0cnl7cmV0dXJuIGEoKX1maW5hbGx5e2c9YyxrPWYsdigpfX07XG5leHBvcnRzLnVuc3RhYmxlX3NjaGVkdWxlQ2FsbGJhY2s9ZnVuY3Rpb24oYSxiKXt2YXIgYz0tMSE9PWs/azpleHBvcnRzLnVuc3RhYmxlX25vdygpO2lmKFwib2JqZWN0XCI9PT10eXBlb2YgYiYmbnVsbCE9PWImJlwibnVtYmVyXCI9PT10eXBlb2YgYi50aW1lb3V0KWI9YytiLnRpbWVvdXQ7ZWxzZSBzd2l0Y2goZyl7Y2FzZSAxOmI9YystMTticmVhaztjYXNlIDI6Yj1jKzI1MDticmVhaztjYXNlIDU6Yj1jKzEwNzM3NDE4MjM7YnJlYWs7Y2FzZSA0OmI9YysxRTQ7YnJlYWs7ZGVmYXVsdDpiPWMrNUUzfWE9e2NhbGxiYWNrOmEscHJpb3JpdHlMZXZlbDpnLGV4cGlyYXRpb25UaW1lOmIsbmV4dDpudWxsLHByZXZpb3VzOm51bGx9O2lmKG51bGw9PT1kKWQ9YS5uZXh0PWEucHJldmlvdXM9YSxwKCk7ZWxzZXtjPW51bGw7dmFyIGY9ZDtkb3tpZihmLmV4cGlyYXRpb25UaW1lPmIpe2M9ZjticmVha31mPWYubmV4dH13aGlsZShmIT09ZCk7bnVsbD09PWM/Yz1kOmM9PT1kJiYoZD1hLHAoKSk7XG5iPWMucHJldmlvdXM7Yi5uZXh0PWMucHJldmlvdXM9YTthLm5leHQ9YzthLnByZXZpb3VzPWJ9cmV0dXJuIGF9O2V4cG9ydHMudW5zdGFibGVfY2FuY2VsQ2FsbGJhY2s9ZnVuY3Rpb24oYSl7dmFyIGI9YS5uZXh0O2lmKG51bGwhPT1iKXtpZihiPT09YSlkPW51bGw7ZWxzZXthPT09ZCYmKGQ9Yik7dmFyIGM9YS5wcmV2aW91cztjLm5leHQ9YjtiLnByZXZpb3VzPWN9YS5uZXh0PWEucHJldmlvdXM9bnVsbH19O2V4cG9ydHMudW5zdGFibGVfd3JhcENhbGxiYWNrPWZ1bmN0aW9uKGEpe3ZhciBiPWc7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGM9ZyxmPWs7Zz1iO2s9ZXhwb3J0cy51bnN0YWJsZV9ub3coKTt0cnl7cmV0dXJuIGEuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZpbmFsbHl7Zz1jLGs9Zix2KCl9fX07ZXhwb3J0cy51bnN0YWJsZV9nZXRDdXJyZW50UHJpb3JpdHlMZXZlbD1mdW5jdGlvbigpe3JldHVybiBnfTtcbmV4cG9ydHMudW5zdGFibGVfc2hvdWxkWWllbGQ9ZnVuY3Rpb24oKXtyZXR1cm4hZSYmKG51bGwhPT1kJiZkLmV4cGlyYXRpb25UaW1lPGx8fHcoKSl9O2V4cG9ydHMudW5zdGFibGVfY29udGludWVFeGVjdXRpb249ZnVuY3Rpb24oKXtudWxsIT09ZCYmcCgpfTtleHBvcnRzLnVuc3RhYmxlX3BhdXNlRXhlY3V0aW9uPWZ1bmN0aW9uKCl7fTtleHBvcnRzLnVuc3RhYmxlX2dldEZpcnN0Q2FsbGJhY2tOb2RlPWZ1bmN0aW9uKCl7cmV0dXJuIGR9O1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHsgXFxuICAgIGNvbG9yOiAjZDlkOWQ5O1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWYsIEdlb3JnaWEsIHNlcmlmO1xcbn1cXG5cXG51bCB7XFxuICAgIGJvcmRlcjogMXB4ICM0MDQwNDAgc29saWQ7XFxufVxcblxcbmxpICwgbGFiZWwsIHAge1xcbiAgICBmb250LXNpemU6IDExcHg7XFxufVxcblxcbmg0LCBoNSwgaDYge1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMzMzMztcXG59XFxuXFxuaW5wdXQsIHRleHRhcmVhIHsgXFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gICAgYmFja2dyb3VuZDogIzJiMmIyYjtcXG4gICAgY29sb3I6ICNkOWQ5ZDk7XFxuICAgIG9wYWNpdHk6IDAuNzU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGFyZWE7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwwLjkpO1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gICAgcGFkZGluZzogN3B4O1xcbn1cXG5cXG51bCBsYWJlbCBpbnB1dCB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbn1cXG5cXG51bCwgbGkge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwwLjkpO1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gICAgcGFkZGluZzogN3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xcbn1cXG5cXG5idXR0b24gaXtcXG4gICAgcGFkZGluZy1yaWdodDo0cHg7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNDMsIDQzLCA0Myk7XFxufVxcblxcbnVsLGxpLCB1bCBsYWJlbCB7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XFxufVxcblxcbnVsIGxhYmVsOmhvdmVyLCBsaTpob3ZlciwgLmNvbnRlbnQ6aG92ZXJ7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNDMsIDQzLCA0Myk7XFxufVxcblxcbiNpbmRleHtcXG4gICAgbWFyZ2luOi00cHg7XFxufVwiLCBcIlwiXSk7XG5cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuLy8gU3R5bGVzLlxuXG5pbXBvcnQgXCIuL1N0eWxlLmNzc1wiO1xuXG4vLyBDb21wb25lbnRzLlxuXG5pbXBvcnQgQXNzZXQgZnJvbSBcIi4vQXNzZXRcIjtcblxuLy8gRXZlbnRzLlxuXG5pbXBvcnQge2Ryb3BIYW5kbGVyLCBkcmFnT3ZlckhhbmRsZXIsIGRyYWdMZWF2ZUhhbmRsZXJ9IGZyb20gXCIuL1JlZHVjZXJcIjtcblxuLy8gRGIgdXRpbHMuXG5cbmltcG9ydCB7ZmV0Y2hGcm9tREIsIHdyaXRlVG9EQn0gZnJvbSBcIi4vZGJcIjtcblxuY2xhc3MgQXNzZXRzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjbGFzczogXCJkcm9wX3pvbmVcIixcbiAgICAgICAgICAgIGltYWdlVVJMOlwiXCIsXG4gICAgICAgICAgICBhc3NldHM6IFtdLFxuICAgICAgICAgICAgc2VsZWN0ZWRBc3NldDpcIlwiXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMud3JpdGVUb0RCID0gd3JpdGVUb0RCLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgYXBwZW5kVG9Cb2R5KGZpbGUpe1xuICAgICAgICB2YXIgYmluID0gdGhpcy5yZXN1bHQ7XG4gICAgICAgIHZhciBuZXdGaWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld0ZpbGUuaW5uZXJIVE1MID0gJ0xvYWRlZCA6ICcgKyBmaWxlLm5hbWUgKyAnIHNpemUgJyArIGZpbGUuc2l6ZSArICcgQic7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobmV3RmlsZSk7XG5cblxuICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgaW1nLmZpbGUgPSBmaWxlO1xuICAgICAgICBpbWcuc3JjID0gYmluO1xuICAgICAgICBuZXdGaWxlLmFwcGVuZENoaWxkKGltZyk7XG4gICAgfVxuXG4gICAgdXBkYXRlZFNlbGVjdGVkKGUpIHtcbiAgICAgICAgbGV0IGFzc2V0TmFtZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiKTsgXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2VsZWN0ZWRBc3NldDogYXNzZXROYW1lXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCBhc3NldHMgPSB0aGlzLnN0YXRlLmFzc2V0cy5tYXAoYXNzZXQ9PiA8QXNzZXQgYXNzZXQ9e2Fzc2V0fSBzZWxlY3RlZD17dGhpcy5zdGF0ZS5zZWxlY3RlZEFzc2V0fSBvblNlbGVjdGVkPXt0aGlzLnVwZGF0ZWRTZWxlY3RlZC5iaW5kKHRoaXMpfS8+KTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudHNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBlbGVtZW50cy10YWJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQXNzZXRzXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2ZldGNoRnJvbURCLmJpbmQodGhpcyl9PkxvYWQgQXNzZXRzPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMuc3RhdGUuY2xhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ecm9wPXtkcm9wSGFuZGxlci5iaW5kKHRoaXMpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdPdmVyPXtkcmFnT3ZlckhhbmRsZXIuYmluZCh0aGlzKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EcmFnTGVhdmU9e2RyYWdMZWF2ZUhhbmRsZXIuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRyYWcgb25lIG9yIG1vcmUgZmlsZXMgdG8gdGhpcyBEcm9wIFpvbmUgLi4uPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge2Fzc2V0c31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXNzZXRzO1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZHJvcF96b25lIHtcXG4gICAgICBib3JkZXI6IDFweCBsaWdodGdyYXkgZGFzaGVkO1xcbiAgICAgIHdpZHRoOiAgMjAwcHg7XFxuICAgICAgaGVpZ2h0OiAxMDBweDtcXG4gIH1cXG5cXG4gIC5kcmFnX292ZXIge1xcbiAgICBib3JkZXI6IDJweCBsaWdodGdyYXkgZGFzaGVkO1xcbiAgICB3aWR0aDogIDIwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgfVxcblxcbiAgLnRpbnlUaHVtYm5haWwsXFxuICAudGlueVRodW1ibmFpbCBpbWd7XFxuICAgIHdpZHRoOjIwMHB4O1xcbiAgfVwiLCBcIlwiXSk7XG5cbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAgXCIuL1N0eWxlLmNzc1wiO1xuXG5jbGFzcyBBc3NldCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy8gUmVtb3ZlIHRoaXMucHJvcHMuaW5kZXgsIGluc3RlYWQgdXNlIHRoaXMgZWxlbWVudCBpbnN0YW5jZSBpbmRleC4gUmVtb3ZlcyBkdXBsaWNhdGUgY29kZVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuc2VsZWN0ZWQgPT09IHRoaXMucHJvcHMuYXNzZXQubmFtZT8gXCJ0aW55VGh1bWJuYWlsIHNlbGVjdGVkQXNzZXRcIiA6IFwidGlueVRodW1ibmFpbFwifT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5hc3NldC5yZXN1bHR9IGRhdGEtbmFtZT17dGhpcy5wcm9wcy5hc3NldC5uYW1lfSBvbkNsaWNrPXt0aGlzLnByb3BzLm9uU2VsZWN0ZWR9PjwvaW1nPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBc3NldDtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNlbGVjdGVkLCAuZ3JlZW4ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG4gICAgYmFja2dyb3VuZDogcmdiKDQzLCA0MywgNDMpO1xcbn1cXG5cXG4uYmFja2dyb3VuZCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYig2NCwgNjQsIDY0KTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzMzMzM7XFxufVxcblxcbi5jb21wb25lbnQge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmNvbXBvbmVudCAuY29tcG9uZW50TmFtZXtcXG4gICAgcGFkZGluZzo3cHg7XFxufVxcblxcbi50aHVtYm5haWwge1xcbiAgICB3aWR0aDogNTBweDtcXG59XFxuXFxuLnNlbGVjdGVkQXNzZXR7XFxuICAgIGJvcmRlcjogMXB4IGxpZ2h0Z3JheSBkYXNoZWQ7XFxufVwiLCBcIlwiXSk7XG5cbiIsImltcG9ydCBpbmRleGVkREIgZnJvbSBcIi4uL1V0aWxpdGllcy9MaWJyYXJpZXMvaW5kZXhlZERCL2luZGV4ZURCXCJcbmV4cG9ydCBmdW5jdGlvbiBkcm9wSGFuZGxlcihldikge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBbXS5mb3JFYWNoLmNhbGwoZXYuZGF0YVRyYW5zZmVyLmZpbGVzLCAoZmlsZSk9PntcbiAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgICByZWFkZXIub25sb2FkZW5kID0gIGZ1bmN0aW9uIChldmVudCxiKSB7XG4gICAgICAgICAgICAvLyAxLiBhcHBlbmQgdG8gYm9keVxuICAgICAgICAgICAgLy8gMi4gd3JpdGUgdG8gZGIuXG4gICAgICAgICAgICB0aGlzLmFwcGVuZFRvQm9keShmaWxlKTtcbiAgICAgICAgICAgIHRoaXMud3JpdGVUb0RCKGV2ZW50LnRhcmdldC5yZXN1bHQsIGZpbGUubmFtZSk7XG5cbiAgICAgICAgfS5iaW5kKHRoaXMpO1xuICAgIH0pXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY2xhc3M6IFwiZHJvcF96b25lXCJcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhZ092ZXJIYW5kbGVyKGV2KSB7XG4gICAgY29uc29sZS5sb2coJ0ZpbGUocykgaW4gZHJvcCB6b25lJyk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY2xhc3M6IFwiZHJhZ19vdmVyXCJcbiAgICB9KVxuXG4gICAgLy8gUHJldmVudCBkZWZhdWx0IGJlaGF2aW9yIChQcmV2ZW50IGZpbGUgZnJvbSBiZWluZyBvcGVuZWQpXG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYWdMZWF2ZUhhbmRsZXIoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjbGFzczogXCJkcm9wX3pvbmVcIlxuICAgIH0pXG59Iiwid2luZG93LmlEQiA9IFwiXCI7XG5pbXBvcnQgeyBNaW5kZXhlZERCIH0gZnJvbSBcIi4vTWluZGV4ZWREQlwiO1xuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCl7XG4gICAgd2luZG93LmlEQiA9IG5ldyBNaW5kZXhlZERCKFwidWlFZGl0b3JcIiwge3VpRWRpdG9yOiBcIm5hbWVcIn0pO1xuICAgIC8vIGlEQi5wdXQoXCJ1aUVkaXRvclwiLCB7ZGF0YToxMjN9KVxuICAgIHdpbmRvdy5pREIuY29ubmVjdCgpO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGlEQjsiLCIvLyB0YWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9Ub21BbnRob255L01pbi5kZXhlZERCL2Jsb2IvbWFzdGVyL21pbmRleGVkZGIuanNcbmV4cG9ydCBmdW5jdGlvbiBNaW5kZXhlZERCKGRhdGFiYXNlTmFtZSwgb2JqZWN0U3RvcmVzKSB7XG5cdHRoaXMuaWRiID0gd2luZG93LmluZGV4ZWREQiB8fCB3aW5kb3cubW96SW5kZXhlZERCIHx8IHdpbmRvdy53ZWJraXRJbmRleGVkREIgfHwgd2luZG93Lm1zSW5kZXhlZERCIHx8IHdpbmRvdy5zaGltSW5kZXhlZERCO1xuXHR0aGlzLmRiID0gZGF0YWJhc2VOYW1lO1xuXHR0aGlzLm9ialN0cnMgPSBBcnJheS5pc0FycmF5KG9iamVjdFN0b3JlcykgPyBvYmplY3RTdG9yZXMgOiBbb2JqZWN0U3RvcmVzXTtcblx0dGhpcy5zdG9yZSA9IFwidWlFZGl0b3JcIjtcblxuXHR0aGlzLmNvbm5lY3QgPSBmdW5jdGlvbihrZXkpIHtcblx0XHR2YXIgY29ubiA9IHRoaXMuaWRiLm9wZW4odGhpcy5kYiwgMSk7XG5cdFx0Y29ubi5tZGIgPSB0aGlzO1xuXG5cdFx0Y29ubi5vbnVwZ3JhZGVuZWVkZWQgPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBkYmwgPSBjb25uLnJlc3VsdDtcblx0XHRcdHRoaXMubWRiLm9ialN0cnMuZm9yRWFjaChlbGVtZW50ID0+IHtcblx0XHRcdFx0dmFyIHN0b3JlID0gT2JqZWN0LmVudHJpZXMoZWxlbWVudCk7XG5cdFx0XHRcdGRibC5jcmVhdGVPYmplY3RTdG9yZShzdG9yZVswXVswXSwge2tleVBhdGg6IHN0b3JlWzBdWzFdfSk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkgeyBcblx0XHRcdGNvbm4ub25zdWNjZXNzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHRoaXMubWRiLmRiID0gY29ubi5yZXN1bHQ7XG5cdFx0XHRcdHJlc29sdmUodGhpcy5tZGIuZGIpO1xuXHRcdFx0fVxuXHRcdFx0Y29ubi5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJlamVjdChjb25uLmVycm9yKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHRoaXMuY3MgPSBmdW5jdGlvbihzdG9yZSkge1xuXHRcdGlmICh0aGlzLmRiID09PSB1bmRlZmluZWQpIHRocm93IFwiW01pbi5kZXhlZERCXSBEQiBub3Qgb3Blbi5cIjtcblx0XHR2YXIgdHggPSB0aGlzLmRiLnRyYW5zYWN0aW9uKHN0b3JlLCBcInJlYWR3cml0ZVwiKTtcblx0XHRyZXR1cm4gdHgub2JqZWN0U3RvcmUoc3RvcmUpO1xuXHR9XG5cblx0dGhpcy5wdXQgPSBmdW5jdGlvbihvYmopIHtcblx0XHRsZXQgb3MgPSB0aGlzLmNzKHRoaXMuc3RvcmUpO1xuXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdFx0dmFyIHJlc3BvbnNlID0gb3MucHV0KG9iaik7XG5cdFx0XHRyZXNwb25zZS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmVzb2x2ZShyZXNwb25zZS5yZXN1bHQpO1xuXHRcdFx0fTtcblx0XHRcdHJlc3BvbnNlLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmVqZWN0KHJlc3BvbnNlLmVycm9yKTtcblx0XHRcdH07XG5cdFx0fSk7XG5cdH1cblxuXHR0aGlzLmdldCA9IGZ1bmN0aW9uKGtleSkge1xuXHRcdGxldCBvcyA9IHRoaXMuY3ModGhpcy5zdG9yZSk7XG5cblx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHR2YXIgcmVzcG9uc2UgPSBvcy5nZXQoa2V5KTtcblx0XHRcdHJlc3BvbnNlLm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXNvbHZlKHJlc3BvbnNlLnJlc3VsdCk7XG5cdFx0XHR9O1xuXHRcdFx0cmVzcG9uc2Uub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZWplY3QocmVzcG9uc2UuZXJyb3IpO1xuXHRcdFx0fTtcblx0XHR9KTtcblx0fVxuXG5cdHRoaXMuZ2V0QWxsID0gZnVuY3Rpb24oKSB7XG5cdFx0bGV0IG9zID0gdGhpcy5jcyh0aGlzLnN0b3JlKTtcblxuXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0XHRcdHZhciByZXNwb25zZSA9IG9zLmdldEFsbCgpO1xuXHRcdFx0cmVzcG9uc2Uub25zdWNjZXNzID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJlc29sdmUocmVzcG9uc2UucmVzdWx0KTtcblx0XHRcdH07XG5cdFx0XHRyZXNwb25zZS5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJlamVjdChyZXNwb25zZS5lcnJvcik7XG5cdFx0XHR9O1xuXHRcdH0pO1xuXHR9XG5cblx0dGhpcy5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuZGIuY2xvc2UoKTtcblx0fVxufSIsIlxuZXhwb3J0IGZ1bmN0aW9uIHdyaXRlVG9EQihyZXN1bHQsIG5hbWUpIHtcbiAgICB3aW5kb3cuaURCLmdldChuYW1lKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICB2YXIgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgaW1nLmhyZWYgPSBkYXRhLnJlc3VsdDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpbWFnZVVSTDogZGF0YS5yZXN1bHRcbiAgICAgICAgfSlcbiAgICB9KVxuICAgIHdpbmRvdy5pREIucHV0KHsgbmFtZTogbmFtZSwgcmVzdWx0OiByZXN1bHQgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZldGNoRnJvbURCKCkge1xuICAgIHdpbmRvdy5pREIuZ2V0QWxsKCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgLy8gc2F2ZSBpdCB0byB3aW5kb3dcbiAgICAgICAgd2luZG93LmFzc2V0cyA9IHt9O1xuICAgICAgICBkYXRhLmZvckVhY2goaW1hZ2UgPT4ge1xuICAgICAgICAgICAgd2luZG93LmFzc2V0c1tpbWFnZS5uYW1lXSA9IGltYWdlLnJlc3VsdFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFzc2V0czogZGF0YVxuICAgICAgICB9KVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuLy8gU3R5bGVzLlxuXG5pbXBvcnQgXCIuL1N0eWxlLmNzc1wiO1xuXG4vLyBDb21wb25lbnRzLlxuXG5pbXBvcnQgRm9sZGVycyBmcm9tIFwiLi4vVXRpbGl0aWVzL0NvbXBvbmVudHMvRm9sZGVyc1wiO1xuaW1wb3J0IHtvbkRlbGV0ZUNvbXBvbmVudCwgb25EZWxldGVGb2xkZXJ9IGZyb20gXCIuL0V2ZW50c1wiO1xuXG4vLyBFdmVudHMuXG5cbmNsYXNzIENvbXBvbmVudHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IHRoaXMucHJvcHMuY29tcG9uZW50cyxcbiAgICAgICAgICAgIGZvbGRlcnM6IHRoaXMucHJvcHMuZm9sZGVyc1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGFkZEZvbGRlcigpe1xuICAgICAgICBsZXQgZm9sZGVycyA9IEFycmF5LmZyb20odGhpcy5zdGF0ZS5mb2xkZXJzKTtcbiAgICAgICAgZm9sZGVycy51bnNoaWZ0KHtcbiAgICAgICAgICAgIHR5cGU6XCJOZXdGb2xkZXJcIixcbiAgICAgICAgICAgIG5hbWU6XCJcIixcbiAgICAgICAgICAgIGNvbnRlbnRzOltdLFxuICAgICAgICAgICAgc3RhdHVzOlwiY2xvc2VkXCJcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Zm9sZGVyc30pXG4gICAgfVxuXG4gICAgYWRkQ29tcG9uZW50KCl7XG4gICAgICAgIHRoaXMucHJvcHMub25PcGVuRWRpdG9yKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50c1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGVsZW1lbnRzLXRhYlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBDb21wb25lbnRzXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbnRyb2xzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuYWRkQ29tcG9uZW50LmJpbmQodGhpcyl9PjxpIGNsYXNzTmFtZT1cImZhIGZhLWVkaXRcIj48L2k+e3Byb3BzLnNlbGVjdGVkQ29tcG9uZW50PyBcIkVkaXQgQ29tcG9uZW50XCI6IFwiQWRkIENvbXBvbmVudFwifTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZEZvbGRlci5iaW5kKHRoaXMpfT48aSBjbGFzc05hbWU9XCJmYSBmYS1mb2xkZXJcIj48L2k+QWRkIEZvbGRlcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvbGRlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB7TWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDAwKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzPXtzdGF0ZS5jb21wb25lbnRzfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2xkZXJzPXtzdGF0ZS5mb2xkZXJzfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZENvbXBvbmVudD17cHJvcHMuc2VsZWN0ZWRDb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRm9sZGVyc1VwZGF0ZT17cHJvcHMub25Gb2xkZXJzVXBkYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdGlvbiA9IHtwcm9wcy5vblNlbGVjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25EZWxldGVDb21wb25lbnQ9e29uRGVsZXRlQ29tcG9uZW50LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRGVsZXRlRm9sZGVyPXtvbkRlbGV0ZUZvbGRlci5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudHM7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5vdmVycmlkZSB7XFxuICAgIGxpbmUtaGVpZ2h0OiAwJTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICBoZWlnaHQ6IDcwcHg7XFxuICAgIHdpZHRoOiA0NTBweDtcXG59XFxuXFxuLmVsZW1lbnRze1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcblxcbi50aXRsZXtcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTFweDtcXG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDY0LCA2NCwgNjQpO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5lbGVtZW50cy10YWIge1xcbiAgICBsZWZ0OjEwcHg7XFxufVxcblxcbi5Db250cm9sc3tcXG4gICAgcGFkZGluZy1ib3R0b206OHB4O1xcbn1cIiwgXCJcIl0pO1xuXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG4vLyBTdHlsZXMuXG5cbmltcG9ydCBcIi4vU3R5bGUuY3NzXCI7XG5cbmltcG9ydCB7Zm9sZGVyU3RydWN0dXJlfSBmcm9tIFwiLi9wcm9jZXNzRm9sZGVyXCI7XG5cbmNsYXNzIEZvbGRlcnMgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IHRoaXMucHJvcHMuY29tcG9uZW50cyxcbiAgICAgICAgICAgIGZvbGRlcnM6IHRoaXMucHJvcHMuZm9sZGVyc1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNoZWNrRm9sZGVyKGRhdGEpe1xuICAgICAgICBsZXQgZm9sZGVycyA9IEFycmF5LmZyb20odGhpcy5zdGF0ZS5mb2xkZXJzKTtcbiAgICAgICAgbGV0IGZvbGRlciA9IGZvbGRlcnMuZmluZChmb2xkZXI9PmZvbGRlci5uYW1lPT09ZGF0YS5uYW1lKTtcbiAgICAgICAgbGV0IGVtcHR5Rm9sZGVySW5kZXggPSBmb2xkZXJzLmZpbmRJbmRleChmb2xkZXI9PmZvbGRlci50eXBlPT09XCJOZXdGb2xkZXJcIik7XG4gICAgICAgIGlmKGVtcHR5Rm9sZGVySW5kZXghPT0tMSl7XG4gICAgICAgICAgICAvLyBEZWxldGUgdGhlIG5ld0ZvbGRlclxuICAgICAgICAgICAgZm9sZGVycy5zcGxpY2UoZW1wdHlGb2xkZXJJbmRleCwxKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhmb2xkZXJzKVxuICAgICAgICAvLyBDaGVjayBpZiBpdCBpcyBuZXdseSBjcmVhdGVkIGZvbGRlciBcbiAgICAgICAgaWYoIWZvbGRlcil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRm9sZGVyIG5vdCBmb3VuZCwgYWRkaW5nICR7SlNPTi5zdHJpbmdpZnkoZGF0YSl9dG8gbGlzdCBvZiBmb2xkZXJzICR7SlNPTi5zdHJpbmdpZnkoZm9sZGVycyl9YCk7XG4gICAgICAgICAgICBmb2xkZXJzLnB1c2goZGF0YSk7XG4gICAgICAgIH0gXG4gICAgICAgIC8vIFVwZGF0ZSBleGlzdGluZyBvbmVcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRm9sZGVyIGZvdW5kLCB1cGRhdGluZyB0aGUgZm9sZGVyIGNvbnRlbnQgZnJvbSAke2ZvbGRlci5jb250ZW50c30gdG8gJHtkYXRhLmNvbnRlbnRzfWApXG4gICAgICAgICAgICBmb2xkZXIuY29udGVudHMgPSBkYXRhLmNvbnRlbnRzO1xuXG4gICAgICAgICAgICAvLyBNYWtlcyBzdXJlIHRoYXQgY29udGVudHMgYXJlIG5vdCBkdXBsaWNhdGVkIGluIG90aGVyIGZvbGRlcnMuXG4gICAgICAgICAgICBmb2xkZXJzLmZvckVhY2goY3VycmVudEZvbGRlcj0+e1xuXG4gICAgICAgICAgICAgICAgaWYoY3VycmVudEZvbGRlci5uYW1lICE9PSBkYXRhLm5hbWUpe1xuICAgICAgICAgICAgICAgICAgICBkYXRhLmNvbnRlbnRzLmZvckVhY2goY29udGVudD0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gY3VycmVudEZvbGRlci5jb250ZW50cy5maW5kSW5kZXgoaXRlbT0+aXRlbT09PWNvbnRlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCE9PS0xPyBjdXJyZW50Rm9sZGVyLmNvbnRlbnRzLnNwbGljZShpbmRleCwxKTogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coZm9sZGVycylcblxuICAgICAgICB0aGlzLnByb3BzLm9uRm9sZGVyc1VwZGF0ZShmb2xkZXJzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBmb2xkZXJTdHJ1Y3R1cmUodGhpcy5wcm9wcywgdGhpcy5jaGVja0ZvbGRlci5iaW5kKHRoaXMpIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvbGRlcnM7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImlucHV0LmZvbGRlcntcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIGJhY2tncm91bmQ6bm9uZTtcXG59XFxuXFxuLm5ld0ZvbGRlcntcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5uZXdGb2xkZXIgaXtcXG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsMCwwLDAuOSk7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBwYWRkaW5nOiA3cHg7XFxufVxcblxcbi5uZXdGb2xkZXIuZHJhZ092ZXIgaXtcXG4gICAgYW5pbWF0aW9uOiBibGluayAuNXMgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgYmxpbmt7XFxuICAgIGZyb20geyAgICBcXG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICB9XFxufVxcbi5mYS5mYS1mb2xkZXIgfiB1bCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5mYS5mYS1mb2xkZXItb3BlbiB+IHVsIHtcXG4gICAgZGlzcGxheTpibG9jaztcXG59XCIsIFwiXCJdKTtcblxuIiwiaW1wb3J0IEZvbGRlciBmcm9tIFwiLi9Gb2xkZXJcIjtcbmltcG9ydCBDb21wb25lbnR0IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzL0NvbXBvbmVudHRcIjtcblxubGV0IHNlbGVjdGVkQ29tcG9uZW50LCBvblNlbGVjdGlvbiwgb25Gb2xkZXJVcGRhdGUsIG9uRGVsZXRlQ29tcG9uZW50LCBjb21wb25lbnRzLCBvbkRlbGV0ZUZvbGRlcjtcblxuZnVuY3Rpb24gaW5pdGlhbGlzZVByb3BzKHByb3BzLCBjaGVja0ZvbGRlcil7XG4gICAgc2VsZWN0ZWRDb21wb25lbnQgPSBwcm9wcy5zZWxlY3RlZENvbXBvbmVudDtcbiAgICBvblNlbGVjdGlvbiA9IHByb3BzLm9uU2VsZWN0aW9uO1xuICAgIGNvbXBvbmVudHMgPSBwcm9wcy5jb21wb25lbnRzO1xuICAgIG9uRm9sZGVyVXBkYXRlID0gY2hlY2tGb2xkZXI7XG4gICAgb25EZWxldGVDb21wb25lbnQgPSBwcm9wcy5vbkRlbGV0ZUNvbXBvbmVudDtcbiAgICBvbkRlbGV0ZUZvbGRlciA9IHByb3BzLm9uRGVsZXRlRm9sZGVyO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzRm9sZGVyIChmb2xkZXIsIGkpe1xuICAgIGxldCBjb250ZW50cyA9IGZvbGRlci5jb250ZW50cztcblxuICAgIHJldHVybiA8Rm9sZGVyXG4gICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgIGZvbGRlcj17Zm9sZGVyfVxuICAgICAgICAgICAgICAgIGNvbnRlbnRzPXtjb250ZW50cy5tYXAoIHByb2Nlc3NDb250ZW50ICl9XG4gICAgICAgICAgICAgICAgb25Gb2xkZXJVcGRhdGU9e29uRm9sZGVyVXBkYXRlfVxuICAgICAgICAgICAgICAgIG9uRGVsZXRlRm9sZGVyPXtvbkRlbGV0ZUZvbGRlcn0vPlxufVxuXG5mdW5jdGlvbiBwcm9jZXNzQ29udGVudCAoY29udGVudCwgaSl7XG5cbiAgICAvLyBDaGVjayBpZiBjb250ZW50IGlzIGEgY29tcG9uZW50IG5hbWUuXG4gICAgaWYodHlwZW9mIGNvbnRlbnQgPT09IFwic3RyaW5nXCIgKXtcblxuICAgICAgICByZXR1cm4gPENvbXBvbmVudHQgXG4gICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PXtjb21wb25lbnRzLmZpbmQoY29tcG9uZW50PT5jb21wb25lbnQubmFtZT09PWNvbnRlbnQpfVxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZENvbXBvbmVudD17c2VsZWN0ZWRDb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0aW9uQ2hhbmdlPXtvblNlbGVjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgb25EZWxldGVDb21wb25lbnQgPSB7b25EZWxldGVDb21wb25lbnR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgfVxuICAgIC8vIGVsc2UgaXRzIGEgZm9sZGVyIHR5cGUuXG4gICAgZWxzZSB7XG4gICAgICAgIGxldCBmb2xkZXIgPSBjb250ZW50O1xuICAgICAgICByZXR1cm4gPEZvbGRlclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgIGZvbGRlcj17Zm9sZGVyfVxuICAgICAgICAgICAgICAgICAgICBjb250ZW50cz17Zm9sZGVyLmNvbnRlbnRzLm1hcCggcHJvY2Vzc0NvbnRlbnQgKX1cbiAgICAgICAgICAgICAgICAgICAgb25Gb2xkZXJVcGRhdGU9e29uRm9sZGVyVXBkYXRlfVxuICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZUZvbGRlcj17b25EZWxldGVGb2xkZXJ9Lz5cbiAgICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGZvbGRlclN0cnVjdHVyZShwcm9wcywgb25Gb2xkZXJVcGRhdGUpe1xuICAgIGxldCBmb2xkZXJzID0gcHJvcHMuZm9sZGVycztcblxuICAgIGluaXRpYWxpc2VQcm9wcyhwcm9wcywgb25Gb2xkZXJVcGRhdGUpO1xuXG4gICAgcmV0dXJuKGZvbGRlcnMubWFwKHByb2Nlc3NGb2xkZXIpKVxufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbi8vIFN0eWxlcy5cblxuaW1wb3J0IFwiLi9TdHlsZS5jc3NcIjtcbmltcG9ydCBOZXdGb2xkZXIgZnJvbSBcIi4uL05ld0ZvbGRlclwiO1xuXG5pbXBvcnQge2RlbGV0ZUZvbGRlciwgdG9nZ2xlRm9sZGVyfSBmcm9tIFwiLi9SZWR1Y2VyXCI7XG5pbXBvcnQge2Ryb3BIYW5kbGVyLCBkcmFnT3ZlckhhbmRsZXIsIGRyYWdMZWF2ZUhhbmRsZXIsIG9uRHJhZ1N0YXJ0fSBmcm9tIFwiLi9FdmVudHNcIjtcblxuY2xhc3MgRm9sZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpY29uU3RhdHVzOiBcImZhIGZhLWZvbGRlclwiLFxuICAgICAgICAgICAgZm9sZGVyQ2xhc3M6IFwibmV3Rm9sZGVyXCIsXG4gICAgICAgICAgICBuYW1lOiB0aGlzLnByb3BzLmZvbGRlci5uYW1lLFxuICAgICAgICAgICAgY29udGVudHM6IHRoaXMucHJvcHMuZm9sZGVyLmNvbnRlbnRzLFxuICAgICAgICAgICAgdHlwZTogdGhpcy5wcm9wcy5mb2xkZXIudHlwZSxcbiAgICAgICAgICAgIHN0YXR1czogdGhpcy5wcm9wcy5mb2xkZXIuc3RhdHVzXG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICBuZXdGb2xkZXIoZm9sZGVyKXtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkZvbGRlclVwZGF0ZShmb2xkZXIpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCBmb2xkZXIgPSB0aGlzLnByb3BzLmZvbGRlcjtcbiAgICAgICAgbGV0IGNvbnRlbnRzID0gdGhpcy5wcm9wcy5jb250ZW50cztcbiAgICAgICAgbGV0IGljb25TdGF0dXMgPSB0aGlzLnN0YXRlLnN0YXR1cyA9PT0gXCJvcGVuXCIgPyBcImZhIGZhLWZvbGRlci1vcGVuXCIgOiBcImZhIGZhLWZvbGRlclwiO1xuICAgICAgICBpZihmb2xkZXIudHlwZT09XCJOZXdGb2xkZXJcIil7XG4gICAgICAgICAgICByZXR1cm4gKDxOZXdGb2xkZXIgb25OZXdGb2xkZXI9e3RoaXMubmV3Rm9sZGVyLmJpbmQodGhpcyl9Lz4pXG4gICAgICAgIH1cbiAgICAgICAgaWYoZm9sZGVyLnR5cGU9PVwiZm9sZGVyXCIpe1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMuc3RhdGUuZm9sZGVyQ2xhc3N9XG4gICAgICAgICAgICAgICAgICAgIGRhdGEtZm9sZGVyLW5hbWU9e2ZvbGRlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGU9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyb3A9e2Ryb3BIYW5kbGVyLmJpbmQodGhpcyl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZ092ZXI9e2RyYWdPdmVySGFuZGxlci5iaW5kKHRoaXMpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdMZWF2ZT17ZHJhZ0xlYXZlSGFuZGxlci5iaW5kKHRoaXMpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdTdGFydD17b25EcmFnU3RhcnQuYmluZCh0aGlzKX0gPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2ljb25TdGF0dXN9IG9uQ2xpY2s9e3RvZ2dsZUZvbGRlci5iaW5kKHRoaXMpfT48L2k+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvbGRlclwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZm9sZGVyIG5hbWVcIiByZWFkT25seSB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfS8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZGVsZXRlRm9sZGVyLmJpbmQodGhpcyl9PjxpIGNsYXNzTmFtZT1cImZhIGZhLXRyYXNoXCI+PC9pPkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29udGVudHN9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmKGZvbGRlci50eXBlPT1cIm5vRm9sZGVyXCIpe1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMuc3RhdGUuZm9sZGVyQ2xhc3N9XG4gICAgICAgICAgICAgICAgICAgIGRhdGEtZm9sZGVyLW5hbWU9e2ZvbGRlci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGU9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyb3A9e2Ryb3BIYW5kbGVyLmJpbmQodGhpcyl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRHJhZ092ZXI9e2RyYWdPdmVySGFuZGxlci5iaW5kKHRoaXMpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdMZWF2ZT17ZHJhZ0xlYXZlSGFuZGxlci5iaW5kKHRoaXMpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRyYWdTdGFydD17b25EcmFnU3RhcnQuYmluZCh0aGlzKX0gPlxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29udGVudHN9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb2xkZXI7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImlucHV0LmZvbGRlcntcXG4gICAgYm9yZGVyOm5vbmU7XFxuICAgIGJhY2tncm91bmQ6bm9uZTtcXG59XFxuXFxuLm5ld0ZvbGRlcntcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5uZXdGb2xkZXIgaXtcXG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsMCwwLDAuOSk7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBwYWRkaW5nOiA3cHg7XFxufVxcblxcbi5uZXdGb2xkZXIuZHJhZ092ZXIgaXtcXG4gICAgYW5pbWF0aW9uOiBibGluayAuNXMgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgYmxpbmt7XFxuICAgIGZyb20geyAgICBcXG4gICAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICB9XFxufVxcbi5mYS5mYS1mb2xkZXIgfiB1bCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5mYS5mYS1mb2xkZXItb3BlbiB+IHVsIHtcXG4gICAgZGlzcGxheTpibG9jaztcXG59XCIsIFwiXCJdKTtcblxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuLy8gU3R5bGVzLlxuXG5pbXBvcnQgXCIuL1N0eWxlLmNzc1wiO1xuXG4vLyBDb21wb25lbnRzLlxuXG5jbGFzcyBOZXdGb2xkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHN0YXR1czogXCJmYSBmYS1mb2xkZXJcIixcbiAgICAgICAgICAgIG5ld0ZvbGRlckNsYXNzOiBcIm5ld0ZvbGRlclwiLFxuICAgICAgICAgICAgZm9sZGVyTmFtZTogXCJcIlxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZvbGRlck5hbWVDaGFuZ2VkKGUpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGZvbGRlck5hbWU6IGUuY3VycmVudFRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHNhdmVGb2xkZXJOYW1lT25FbnRlcihlKXtcbiAgICAgICAgaWYoZS5rZXk9PT1cIkVudGVyXCIpe1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbk5ld0ZvbGRlcih7XG4gICAgICAgICAgICAgICAgbmFtZTp0aGlzLnN0YXRlLmZvbGRlck5hbWUsXG4gICAgICAgICAgICAgICAgY29udGVudHM6W10sXG4gICAgICAgICAgICAgICAgdHlwZTpcImZvbGRlclwiLFxuICAgICAgICAgICAgICAgIHN0YXR1czpcImNsb3NlZFwiXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLm5ld0ZvbGRlckNsYXNzfT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5zdGF0dXN9PjwvaT5cbiAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbGRlclwiIFxuICAgICAgICAgICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX0gXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBmb2xkZXIgbmFtZVwiXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7dGhpcy5zdGF0ZS5mb2xkZXJOYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmZvbGRlck5hbWVDaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgb25LZXlQcmVzcz17dGhpcy5zYXZlRm9sZGVyTmFtZU9uRW50ZXIuYmluZCh0aGlzKX0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld0ZvbGRlcjtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaW5wdXQuZm9sZGVye1xcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgYmFja2dyb3VuZDpub25lO1xcbn1cXG5cXG4ubmV3Rm9sZGVyIGl7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwwLjkpO1xcbiAgICBib3JkZXItd2lkdGg6IDFweDtcXG4gICAgcGFkZGluZzogN3B4O1xcbn1cXG5cXG4ubmV3Rm9sZGVyLmRyYWdPdmVyIGl7XFxuICAgIGFuaW1hdGlvbjogYmxpbmsgLjVzIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJsaW5re1xcbiAgICBmcm9tIHsgICAgXFxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIGNvbG9yOiBncmVlbjtcXG4gICAgfVxcbn1cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnQgZnVuY3Rpb24gZGVsZXRlRm9sZGVyKGUpe1xuICAgIHRoaXMucHJvcHMub25EZWxldGVGb2xkZXIoXCJDT05URU5UU1wiLCB0aGlzLnN0YXRlLm5hbWUpO1xufVxuXG5mdW5jdGlvbiBvcGVuRm9sZGVyKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHN0YXR1czogXCJvcGVuXCJcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY2xvc2VGb2xkZXIoKXtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc3RhdHVzOiBcImNsb3NlZFwiXG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVGb2xkZXIoKXtcbiAgICBjb25zb2xlLmxvZyhcIkNMQ0lFS0RcIik7XG4gICAgaWYodGhpcy5zdGF0ZS5zdGF0dXMgPT09IFwiY2xvc2VkXCIpIHtcbiAgICAgICAgb3BlbkZvbGRlci5jYWxsKHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNsb3NlRm9sZGVyLmNhbGwodGhpcyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtjb252ZXJ0VG9SZWFjdH0gZnJvbSBcIi4vQ29kZUdlbmVyYXRvci9SZWFjdFwiO1xuXG5mdW5jdGlvbiBjcmVhdGVDb21wb25lbnQoY29tcG9uZW50KXtcblxuICAgIGxldCBjb21wb25lbnRTdHJpbmcgPSBjb252ZXJ0VG9SZWFjdChjb21wb25lbnQpO1xuXG4gICAgLy8gZXZhbCBkb2VzIG5vdCBldmFsdWF0ZSBjbGFzcyBpZiBub3QgZXhjbG9zZWQgaW4gcGFyYW50aGVzaXMuXG4gICAgcmV0dXJuIGV2YWwoQmFiZWwudHJhbnNmb3JtKGNvbXBvbmVudFN0cmluZywgeyBwcmVzZXRzOiBbJ3JlYWN0J10sIHBsdWdpbnM6IFtcInRyYW5zZm9ybS1lczIwMTUtY2xhc3Nlc1wiXSAgfSkuY29kZSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgY3JlYXRlQ29tcG9uZW50XG59IiwiaW1wb3J0IHtzYW1wbGV9IGZyb20gXCIuL1NhbXBsZVwiO1xuXG5mdW5jdGlvbiBwdXNoSGlzdG9yeShjb21wb25lbnRzKXtcblxuICAgIHdpbmRvdy5lZGl0b3JIaXN0b3J5ID0gcmVhZERhdGEoXCJ1aS1lZGl0b3ItaGlzdG9yeVwiKTtcbiAgICBlZGl0b3JIaXN0b3J5LnB1c2goY29tcG9uZW50cyk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1aS1lZGl0b3ItaGlzdG9yeVwiLEpTT04uc3RyaW5naWZ5KGVkaXRvckhpc3RvcnkpICk7XG59XG5cbi8vIElmIGVtcHR5LCByZXR1cm4gZW1wdHkgYXJyYXkuXG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkRGF0YShrZXkpe1xuXG4gICAgaWYoa2V5ID09PVwidWktZWRpdG9yXCIpe1xuICAgICAgICBpZighd2luZG93LmNvbXBvbmVudHMgKXtcbiAgICAgICAgICAgIHdpbmRvdy5jb21wb25lbnRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSB8fCBzYW1wbGU7XG4gICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHdpbmRvdy5jb21wb25lbnRzKSk7XG4gICAgfVxuICAgIGlmKGtleT09PVwidWktZWRpdG9yLWhpc3RvcnlcIil7XG4gICAgICAgIGxldCBoaXN0b3J5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgXG4gICAgICAgIGlmKGhpc3RvcnkpXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShoaXN0b3J5KTtcbiAgICB9XG4gICAgaWYoa2V5ID09PVwiZm9sZGVyc1wiKXtcbiAgICAgICAgbGV0IGZvbGRlcnMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgICBsZXQgY29tcG9uZW50TmFtZXMgPSB3aW5kb3cuY29tcG9uZW50cy5tYXAoY29tcG9uZW50PT5jb21wb25lbnQubmFtZSk7XG4gICAgICAgIHJldHVybiBmb2xkZXJzID8gSlNPTi5wYXJzZShmb2xkZXJzKSA6IFt7XG4gICAgICAgICAgICB0eXBlOiBcIm5vRm9sZGVyXCIsXG4gICAgICAgICAgICBjb250ZW50czogY29tcG9uZW50TmFtZXMsXG4gICAgICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICAgICAgc3RhdHVzOlwib3BlblwiXG4gICAgICAgIH1dO1xuICAgIH1cblxuICAgIHJldHVybiBbXTtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gd3JpdGVEYXRhKGtleSwgY29tcG9uZW50cywgbm9QdXNoKXtcblxuICAgIGlmKGtleT09XCJmb2xkZXJzXCIpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIndyaXRpbmcgZm9sZGVyc1wiKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KGNvbXBvbmVudHMpKTtcbiAgICB9XG4gICAgaWYoa2V5PT1cInVpLWVkaXRvclwiKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJXUklURVwiKVxuICAgICAgICB3aW5kb3cuY29tcG9uZW50cyA9IGNvbXBvbmVudHM7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoY29tcG9uZW50cykpO1xuICAgICAgICBpZighbm9QdXNoKXtcbiAgICAgICAgICAgIHB1c2hIaXN0b3J5KGNvbXBvbmVudHMpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVhZENvbXBvbmVudChjb21wb25lbnROYW1lKXtcblxuICAgIGxldCBjb21wb25lbnRzID0gcmVhZERhdGEoXCJ1aS1lZGl0b3JcIik7XG4gICAgaWYoIWNvbXBvbmVudHMpe1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gY29tcG9uZW50cy5maW5kKGNvbXBvbmVudD0+Y29tcG9uZW50Lm5hbWU9PT1jb21wb25lbnROYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdyaXRlQ29tcG9uZW50KHBhcmVudCkge1xuXG4gICAgaWYoIUFycmF5LmlzQXJyYXkocGFyZW50KSAmJiBwYXJlbnQubmFtZSl7XG4gICAgICAgIGxldCBjb21wb25lbnRzID0gcmVhZERhdGEoIFwidWktZWRpdG9yXCIpO1xuICAgICAgICBsZXQgaW5kZXggPSBjb21wb25lbnRzLmZpbmRJbmRleChjb21wPT5jb21wLm5hbWUgPT09IHBhcmVudC5uYW1lKTtcbiAgICAgICAgY29tcG9uZW50c1tpbmRleF0gPSBwYXJlbnQ7XG4gICAgICAgIHdyaXRlRGF0YShcInVpLWVkaXRvclwiLCBjb21wb25lbnRzKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3BIaXN0b3J5KCl7XG4gICAgXG4gICAgbGV0IGVkaXRvckhpc3RvcnkgPSByZWFkRGF0YShcInVpLWVkaXRvci1oaXN0b3J5XCIpO1xuICAgIGlmKCFlZGl0b3JIaXN0b3J5KXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBsYXN0SXRlbSA9IGVkaXRvckhpc3RvcnkucG9wKCk7XG4gICAgXG4gICAgaWYoIWVkaXRvckhpc3Rvcnkpe1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd3JpdGVEYXRhKFwidWktZWRpdG9yLWhpc3RvcnlcIiwgZWRpdG9ySGlzdG9yeSwgdHJ1ZSk7XG5cbiAgICB3cml0ZURhdGEoXCJ1aS1lZGl0b3JcIiwgbGFzdEl0ZW0sIHRydWUpO1xufSIsImxldCBzYW1wbGUgPSBbXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJGb3Jnb3RQYXNzd29yZFwiLFxuICAgICAgICBcIm1hcmt1cFwiOiBcIjxkaXYgY2xhc3NOYW1lPVxcXCJ2c0J1dHRvblxcXCI+PGJ1dHRvbiBpZD1cXFwiZjEyM1xcXCI+Rm9yZ290IFBhc3N3b3JkPC9idXR0b24+PC9kaXY+XCIsXG4gICAgICAgIFwiZXZlbnRzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvbkNsaWNrXCIsXG4gICAgICAgICAgICAgICAgXCJyZWR1Y2VyXCI6IFwic3RhdGUuc2hvd1wiLFxuICAgICAgICAgICAgICAgIFwicHVibGlzaGFibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcInB1Ymxpc2hOYW1lXCI6IFwib25QYXNzd29yZEZvcmdvdHRlblwiLFxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJmMTIzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJzdGF0ZVwiOiBcIntcXFwic2hvd1xcXCI6XFxcImZhbHNlXFxcIn1cIixcbiAgICAgICAgXCJzdHlsZVwiOiBcIi52c0J1dHRvbntcXG5mb250LWZhbWlseTogQmVudG9uU2Fuc0Jvb2ssSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XFxuY29sb3I6IHJnYigwLCAwLCAwKTtcXG59XFxuXFxuXFxuLnZzQnV0dG9uIGJ1dHRvbntcXG5ib3JkZXItY29sb3I6ICNiZjIxNWQ7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kOiAjZWY1Zjk2O1xcbmJvcmRlcjogMXB4IHNvbGlkO1xcbn1cXG5cXG4udnNCdXR0b24gYnV0dG9uOmhvdmVye1xcbmJvcmRlci1jb2xvcjogI2JmMjE1ZDtcXG59XCIsXG4gICAgICAgIFwiY29uZmlnXCI6IFwie31cIixcbiAgICAgICAgXCJ2YXJpYW50c1wiOiBbXVxuICAgIH0sXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJNb2RhbFwiLFxuICAgICAgICBcIm1hcmt1cFwiOiBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsXFxcIj5cXG48aGVhZGVyPlxcbiAgPGgzPkZvcmdvdCBQYXNzd29yZDwvaDM+XFxuICAgIDxidXR0b24gY2xhc3NOYW1lPVxcXCJjbG9zZUJ1dHRvblxcXCIgaWQ9XFxcInhcXFwiPng8L2J1dHRvbj5cXG48L2hlYWRlcj5cXG48c2VjdGlvbiBjbGFzcz1cXFwiY29udGVudFxcXCI+PFByaXZhY3lBbmRQb2xpY3k+PC9Qcml2YWN5QW5kUG9saWN5PlxcbiBcXG48L3NlY3Rpb24+XFxuPGZvb3Rlcj5mb290ZXI8L2Zvb3Rlcj5cXG48L2Rpdj5cIixcbiAgICAgICAgXCJldmVudHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9uQ2xpY2tcIixcbiAgICAgICAgICAgICAgICBcInJlZHVjZXJcIjogXCJzdGF0ZS5uYW1lPVxcXCJcXFwiO1wiLFxuICAgICAgICAgICAgICAgIFwicHVibGlzaGFibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcInB1Ymxpc2hOYW1lXCI6IFwib25DbG9zZU1vZGFsXCIsXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcInhcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcInN0YXRlXCI6IFwie31cIixcbiAgICAgICAgXCJzdHlsZVwiOiBcIi5tb2RhbHtcXG4gIHdpZHRoOjQwMHB4O1xcbiAgZm9udC1zaXplOjIycHg7XFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5jb2xvcjogYmxhY2s7XFxuICBmb250LWZhbWlseTogQmVudG9uU2Fuc0xpZ2h0LEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6NDAwO1xcbiAgICBsaW5lLWhlaWdodDogMTdweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wNGVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG5cXG59XFxuXFxuLm1vZGFsIGgze1xcbiAgcGFkZGluZzoxcmVtO1xcbmZvbnQtc2l6ZToyNnB4O1xcbmZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5tb2RhbCAuY29udGVudHtcXG5wYWRkaW5nOjFyZW07XFxuZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLm1vZGFsIGZvb3RlcntcXG5wYWRkaW5nOjFyZW07XFxuICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xcbmZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5tb2RhbCBoZWFkZXJ7XFxuICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xcbmZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5tb2RhbCAuY2xvc2VCdXR0b257XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIHRvcDogMjBweDtcXG59XFxuXFxuLm1vZGFsIC5jb250ZW50e1xcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xcbmZvbnQtd2VpZ2h0OiA0MDA7XFxufVwiLFxuICAgICAgICBcImNvbmZpZ1wiOiBcInt9XCIsXG4gICAgICAgIFwidmFyaWFudHNcIjogW11cbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiQ2FuY2VsQnV0dG9uXCIsXG4gICAgICAgIFwibWFya3VwXCI6IFwiPGRpdiBjbGFzc05hbWU9XFxcInZzQnV0dG9uXFxcIj48YnV0dG9uPntzdGF0ZS5jYW5jZWxCdXR0b259PC9idXR0b24+PC9kaXY+XCIsXG4gICAgICAgIFwiZXZlbnRzXCI6IFtdLFxuICAgICAgICBcInN0YXRlXCI6IFwie1xcXCJjYW5jZWxCdXR0b25cXFwiOlxcXCJDYW5jZWxcXFwifVwiLFxuICAgICAgICBcInN0eWxlXCI6IFwiLnZzQnV0dG9ue1xcbmZvbnQtZmFtaWx5OiBCZW50b25TYW5zQm9vayxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcXG5jb2xvcjogcmdiKDAsIDAsIDApO1xcbn1cXG5cXG5cXG4udnNCdXR0b24gYnV0dG9ue1xcbmJvcmRlci1jb2xvcjogI2JmMjE1ZDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQ6ICNlZjVmOTY7XFxuYm9yZGVyOiAxcHggc29saWQ7XFxucGFkZGluZzogLjVyZW0gMnJlbTtcXG59XFxuXFxuLnZzQnV0dG9uIGJ1dHRvbjpob3ZlcntcXG5ib3JkZXItY29sb3I6ICNiZjIxNWQ7XFxufVwiLFxuICAgICAgICBcImNvbmZpZ1wiOiBcInt9XCIsXG4gICAgICAgIFwidmFyaWFudHNcIjogW11cbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiU3VibWl0QnV0dG9uXCIsXG4gICAgICAgIFwibWFya3VwXCI6IFwiPGRpdiBjbGFzc05hbWU9XFxcInZzQnV0dG9uXFxcIj48YnV0dG9uPntzdGF0ZS5zdWJtaXRCdXR0b259PC9idXR0b24+PC9kaXY+XCIsXG4gICAgICAgIFwiZXZlbnRzXCI6IFtdLFxuICAgICAgICBcInN0YXRlXCI6IFwie1xcXCJzdWJtaXRCdXR0b25cXFwiOlxcXCJTdWJtaXRcXFwifVwiLFxuICAgICAgICBcInN0eWxlXCI6IFwiLnZzQnV0dG9ue1xcbmZvbnQtZmFtaWx5OiBCZW50b25TYW5zQm9vayxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZjtcXG5jb2xvcjogcmdiKDAsIDAsIDApO1xcbn1cXG5cXG5cXG4udnNCdXR0b24gYnV0dG9ue1xcbmJvcmRlci1jb2xvcjogI2JmMjE1ZDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJhY2tncm91bmQ6ICNlZjVmOTY7XFxuYm9yZGVyOiAxcHggc29saWQ7XFxucGFkZGluZzogLjVyZW0gMnJlbTtcXG59XFxuXFxuLnZzQnV0dG9uIGJ1dHRvbjpob3ZlcntcXG5ib3JkZXItY29sb3I6ICNiZjIxNWQ7XFxufVwiLFxuICAgICAgICBcImNvbmZpZ1wiOiBcInt9XCIsXG4gICAgICAgIFwidmFyaWFudHNcIjogW11cbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiUHJpdmFjeUFuZFBvbGljeVwiLFxuICAgICAgICBcIm1hcmt1cFwiOiBcIjxkaXYgY2xhc3M9XFxcInByaXZhY3lQb2xpY3lcXFwiPlxcbiAgUGxlYXNlIGVudGVyIHRoZSBlbWFpbCBhZGRyZXNzIHlvdSB1c2VkIHRvIGNyZWF0ZSB5b3VyIGFjY291bnQgYW5kIHdlIHdpbGwgc2VuZCB5b3UgYSBsaW5rIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuIFNlZSBQcml2YWN5IFBvbGljeVxcbjwvZGl2PlwiLFxuICAgICAgICBcImV2ZW50c1wiOiBbXSxcbiAgICAgICAgXCJzdGF0ZVwiOiBcInt9XCIsXG4gICAgICAgIFwic3R5bGVcIjogXCIucHJpdmFjeVBvbGljeXtcXG5mb250LWZhbWlseTogQmVudG9uU2Fuc0Jvb2ssSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XFxuZm9udC1zaXplOiAxMXB4O1xcbiAgICBsaW5lLWhlaWdodDogMTdweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wNGVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XCIsXG4gICAgICAgIFwiY29uZmlnXCI6IFwie31cIixcbiAgICAgICAgXCJ2YXJpYW50c1wiOiBbXVxuICAgIH0sXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJUZXJtc0FuZFNlcnZpY2VcIixcbiAgICAgICAgXCJtYXJrdXBcIjogXCI8ZGl2IGNsYXNzPVxcXCJwcml2YWN5UG9saWN5XFxcIj5cXG57c3RhdGUudmFyaWFudH1cXG48L2Rpdj5cIixcbiAgICAgICAgXCJldmVudHNcIjogW10sXG4gICAgICAgIFwic3RhdGVcIjogXCJ7XFxcInZhcmlhbnRcXFwiOlxcXCJUaGlzIHNpdGUgaXMgcHJvdGVjdGVkIGJ5IHJlQ0FQVENIQSBhbmQgdGhlIEdvb2dsZSBQcml2YWN5IFBvbGljeSBhbmQgVGVybXMgb2YgU2VydmljZSBhcHBseS5cXFwifVwiLFxuICAgICAgICBcInN0eWxlXCI6IFwiLnByaXZhY3lQb2xpY3l7XFxuZm9udC1mYW1pbHk6IEJlbnRvblNhbnNCb29rLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xcbmZvbnQtc2l6ZTogMTFweDtcXG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XFxuICAgIGxldHRlci1zcGFjaW5nOiAuMDRlbTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IGluaGVyaXQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVwiLFxuICAgICAgICBcImNvbmZpZ1wiOiBcInt9XCIsXG4gICAgICAgIFwidmFyaWFudHNcIjogW11cbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiRm9ybVwiLFxuICAgICAgICBcIm1hcmt1cFwiOiBcIjxmb3JtIGNsYXNzTmFtZT1cXFwidnNmcm1cXFwiPlxcbjwvZm9ybT5cIixcbiAgICAgICAgXCJldmVudHNcIjogW10sXG4gICAgICAgIFwic3RhdGVcIjogXCJ7fVwiLFxuICAgICAgICBcInN0eWxlXCI6IFwiLnZzZnJte1xcbmhlaWdodDo0MDBweDtcXG53aWR0aDo0MDBweDtcXG59XCIsXG4gICAgICAgIFwiY29uZmlnXCI6IFwie31cIixcbiAgICAgICAgXCJ2YXJpYW50c1wiOiBbXVxuICAgIH0sXG4gICAge1xuICAgICAgICBcIm5hbWVcIjogXCJFbWFpbElucHV0XCIsXG4gICAgICAgIFwibWFya3VwXCI6IFwiPHNwYW4gY2xhc3NOYW1lPVxcXCJlbWFpbElucHV0XFxcIj5cXG48aW5wdXQgaWQ9XFxcImlucHV0XFxcIiBjbGFzc05hbWU9XFxcImVtYWlsXFxcIiB0eXBlPVxcXCJlbWFpbFxcXCIgdmFsdWU9e3N0YXRlLmVtYWlsfSBwbGFjZWhvbGRlcj1cXFwiRW1haWwgQWRkcmVzcyAqXFxcIi8+XFxuPC9zcGFuPlwiLFxuICAgICAgICBcImV2ZW50c1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25DaGFuZ2VcIixcbiAgICAgICAgICAgICAgICBcInJlZHVjZXJcIjogXCJzdGF0ZS5lbWFpbCA9IGUudGFyZ2V0LnZhbHVlXCIsXG4gICAgICAgICAgICAgICAgXCJwdWJsaXNoYWJsZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwicHVibGlzaE5hbWVcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiaW5wdXRcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcInN0YXRlXCI6IFwie31cIixcbiAgICAgICAgXCJzdHlsZVwiOiBcIi5lbWFpbElucHV0IC5lbWFpbHtcXG5wYWRkaW5nOiAuNzVyZW07XFxuYm9yZGVyOiAxcHggc29saWQgI2UxZTFlMTtcXG5mb250LWZhbWlseTogQmVudG9uU2Fuc0Jvb2ssSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcblxcbn1cIixcbiAgICAgICAgXCJjb25maWdcIjogXCJ7fVwiLFxuICAgICAgICBcInZhcmlhbnRzXCI6IFtdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIlJlc2V0UGFzc3dvcmRGb3JtXCIsXG4gICAgICAgIFwibWFya3VwXCI6IFwiPGZvcm0+PFRlcm1zQW5kU2VydmljZT48L1Rlcm1zQW5kU2VydmljZT48RW1haWxJbnB1dD48L0VtYWlsSW5wdXQ+PFN1Ym1pdEJ1dHRvbj48L1N1Ym1pdEJ1dHRvbj48Q2FuY2VsQnV0dG9uPjwvQ2FuY2VsQnV0dG9uPjxUZXJtc0FuZFNlcnZpY2U+PFByaXZhY3lBbmRQb2xpY3k+PC9Qcml2YWN5QW5kUG9saWN5PjwvVGVybXNBbmRTZXJ2aWNlPlxcbjwvZm9ybT5cIixcbiAgICAgICAgXCJldmVudHNcIjogW10sXG4gICAgICAgIFwic3RhdGVcIjogXCJ7XFxcInZhcmlhbnRcXFwiOlxcXCJ0ZXh0XFxcIn1cIixcbiAgICAgICAgXCJzdHlsZVwiOiBcImZvcm17XFxuaGVpZ2h0OjQwMHB4O31cIixcbiAgICAgICAgXCJjb25maWdcIjogXCJ7fVwiLFxuICAgICAgICBcInZhcmlhbnRzXCI6IFtdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIlBhZ2VcIixcbiAgICAgICAgXCJtYXJrdXBcIjogXCI8ZGl2IGNsYXNzTmFtZT1cXFwicGFnZVxcXCI+PEZvcmdvdFBhc3N3b3JkPjwvRm9yZ290UGFzc3dvcmQ+PFJlc2V0UGFzc3dvcmRNb2RhbD48L1Jlc2V0UGFzc3dvcmRNb2RhbD48L2Rpdj5cIixcbiAgICAgICAgXCJldmVudHNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9uQ2xvc2VNb2RhbFwiLFxuICAgICAgICAgICAgICAgIFwicmVkdWNlclwiOiBcInN0YXRlLlJlc2V0UGFzc3dvcmRNb2RhbCA9IFtdO1wiLFxuICAgICAgICAgICAgICAgIFwicHVibGlzaGFibGVcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcInB1Ymxpc2hOYW1lXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIlZhcmlhbnRNb2RhbFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIm9uQ2xvc2VcIixcbiAgICAgICAgICAgICAgICBcInJlZHVjZXJcIjogXCJzdGF0ZS5SZXNldFBhc3N3b3JkTW9kYWwgPSBbXTtcIixcbiAgICAgICAgICAgICAgICBcInB1Ymxpc2hhYmxlXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJwdWJsaXNoTmFtZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJSZXNldFBhc3N3b3JkTW9kYWxcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJvblBhc3N3b3JkRm9yZ290dGVuXCIsXG4gICAgICAgICAgICAgICAgXCJyZWR1Y2VyXCI6IFwic3RhdGUuUmVzZXRQYXNzd29yZE1vZGFsID1be3RpdGxlOiBcXFwiRm9yZ290IFBhc3N3b3JkXFxcIixcXFwiZm9vdGVyXFxcIjogXFxcIkNvcHlyaWd0c1xcXCIsXFxcInNob3dcXFwiOiBcXFwic2RcXFwifV1cIixcbiAgICAgICAgICAgICAgICBcInB1Ymxpc2hhYmxlXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJwdWJsaXNoTmFtZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJGb3Jnb3RQYXNzd29yZFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwic3RhdGVcIjogXCJ7XFxcInNob3dNb2RhbFxcXCI6ZmFsc2UsXFxcImxpc3RcXFwiOlsxLDIsMyw0LDVdLFxcXCJSZXNldFBhc3N3b3JkTW9kYWxcXFwiOltdfVwiLFxuICAgICAgICBcInN0eWxlXCI6IFwiLnBhZ2V7XFxuaGVpZ2h0OiA3MDBweDtcXG53aWR0aDogNTAwcHg7XFxuXFxufVwiLFxuICAgICAgICBcImNvbmZpZ1wiOiBcIntcXFwiVmFyaWFudE1vZGFsXFxcIjp7XFxcInNob3dIaWRlUHJvcFxcXCI6XFxcInNob3dNb2RhbFxcXCIsXFxcIm92ZXJyaWRlXFxcIjpmYWxzZX0sXFxcIkZvcmdvdFBhc3N3b3JkQnV0dG9uXFxcIjp7XFxcInNob3dIaWRlUHJvcFxcXCI6XFxcIlxcXCIsXFxcIm92ZXJyaWRlXFxcIjpmYWxzZX0sXFxcIkZvcmdvdFBhc3N3b3JkXFxcIjp7XFxcInNob3dIaWRlUHJvcFxcXCI6XFxcIlxcXCIsXFxcIm92ZXJyaWRlXFxcIjpmYWxzZSxcXFwicmVuZGVyTGlzdFByb3BcXFwiOlxcXCJcXFwifSxcXFwiUmVzZXRQYXNzd29yZE1vZGFsXFxcIjp7XFxcInNob3dIaWRlUHJvcFxcXCI6XFxcInNob3dNb2RhbFxcXCIsXFxcIm92ZXJyaWRlXFxcIjp0cnVlLFxcXCJyZW5kZXJMaXN0UHJvcFxcXCI6XFxcIlxcXCJ9fVwiLFxuICAgICAgICBcInZhcmlhbnRzXCI6IFtdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIlJlc2V0UGFzc3dvcmRNb2RhbFwiLFxuICAgICAgICBcIm1hcmt1cFwiOiBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsXFxcIj5cXG48aGVhZGVyPlxcbiAgPGgzPntzdGF0ZS50aXRsZX08L2gzPlxcbiAgICA8YnV0dG9uIGlkPVxcXCJjbG9zZVxcXCIgY2xhc3NOYW1lPVxcXCJjbG9zZUJ1dHRvblxcXCI+eDwvYnV0dG9uPlxcbjwvaGVhZGVyPlxcbjxzZWN0aW9uIGNsYXNzPVxcXCJjb250ZW50XFxcIj48UmVzZXRQYXNzd29yZEZvcm0+PC9SZXNldFBhc3N3b3JkRm9ybT5cXG48L3NlY3Rpb24+XFxuPGZvb3Rlcj57c3RhdGUuZm9vdGVyfTwvZm9vdGVyPlxcbjwvZGl2PlwiLFxuICAgICAgICBcImV2ZW50c1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwib25DbGlja1wiLFxuICAgICAgICAgICAgICAgIFwicmVkdWNlclwiOiBcInN0YXRlLnNob3cgPSBcXFwic2RcXFwiO1wiLFxuICAgICAgICAgICAgICAgIFwicHVibGlzaGFibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcInB1Ymxpc2hOYW1lXCI6IFwib25DbG9zZVwiLFxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCJjbG9zZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwic3RhdGVcIjogXCJ7XFxcInRpdGxlXFxcIjpcXFwiRm9yZ290IFBhc3N3b3JkXFxcIixcXFwiZm9vdGVyXFxcIjpcXFwiQ29weXJpZ3RzXFxcIn1cIixcbiAgICAgICAgXCJzdHlsZVwiOiBcIi5tb2RhbHtcXG4gIHdpZHRoOjQwMHB4O1xcbiAgZm9udC1zaXplOjIycHg7XFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5jb2xvcjogYmxhY2s7XFxuICBmb250LWZhbWlseTogQmVudG9uU2Fuc0xpZ2h0LEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6NDAwO1xcbiAgICBsaW5lLWhlaWdodDogMTdweDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4wNGVtO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG5cXG59XFxuXFxuLm1vZGFsIGgze1xcbiAgcGFkZGluZzoxcmVtO1xcbmZvbnQtc2l6ZToyNnB4O1xcbmZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5tb2RhbCAuY29udGVudHtcXG5wYWRkaW5nOjFyZW07XFxuZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLm1vZGFsIGZvb3RlcntcXG5wYWRkaW5nOjFyZW07XFxuICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xcbmZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5tb2RhbCBoZWFkZXJ7XFxuICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xcbmZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5tb2RhbCAuY2xvc2VCdXR0b257XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIHRvcDogMjBweDtcXG59XFxuXFxuLm1vZGFsIC5jb250ZW50e1xcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xcbmZvbnQtd2VpZ2h0OiA0MDA7XFxufVwiLFxuICAgICAgICBcImNvbmZpZ1wiOiBcInt9XCIsXG4gICAgICAgIFwidmFyaWFudHNcIjogW11cbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwiRmFjZWJvb2tcIixcbiAgICAgICAgXCJtYXJrdXBcIjogXCI8ZGl2IGNsYXNzTmFtZT1cXFwiZmFjZWJvb2tcXFwiPjxIZWxsb0NvbXBvbmVudD48TW9kYWw+PEZvcmdvdFBhc3N3b3JkPjwvRm9yZ290UGFzc3dvcmQ+PC9Nb2RhbD48L0hlbGxvQ29tcG9uZW50PjwvZGl2PlwiLFxuICAgICAgICBcImV2ZW50c1wiOiBbXSxcbiAgICAgICAgXCJzdGF0ZVwiOiBcInt9XCIsXG4gICAgICAgIFwic3R5bGVcIjogXCIuZmFjZWJvb2t7XFxuYmFja2dyb3VuZC1pbWFnZTokYXNzZXRzWydmYWNlYm9vay5wbmcnXTtcXG59XCIsXG4gICAgICAgIFwiY29uZmlnXCI6IFwie31cIixcbiAgICAgICAgXCJ2YXJpYW50c1wiOiBbXVxuICAgIH1cbl1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgc2FtcGxlOiBzYW1wbGVcbn0iLCJleHBvcnQgZnVuY3Rpb24gZG93bmxvYWRGaWxlKG5hbWUsIGNvbnRlbnRzLCBtaW1lX3R5cGUpIHtcbiAgICBtaW1lX3R5cGUgPSBtaW1lX3R5cGUgfHwgXCJ0ZXh0L3BsYWluXCI7XG5cbiAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKFtjb250ZW50c10sIHt0eXBlOiBtaW1lX3R5cGV9KTtcblxuICAgIHZhciBkbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBkbGluay5kb3dubG9hZCA9IG5hbWU7XG4gICAgZGxpbmsuaHJlZiA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgIGRsaW5rLm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIC8vIHJldm9rZU9iamVjdFVSTCBuZWVkcyBhIGRlbGF5IHRvIHdvcmsgcHJvcGVybHlcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwodGhhdC5ocmVmKTtcbiAgICAgICAgfSwgMTUwMCk7XG4gICAgfTtcblxuICAgIGRsaW5rLmNsaWNrKCk7XG4gICAgZGxpbmsucmVtb3ZlKCk7XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtzZWxlY3Rpb25DaGFuZ2VkLCBoYW5kbGVEcmFnfSBmcm9tIFwiLi9FdmVudHNcIjtcblxuaW1wb3J0IHtvbkV4cG9ydH0gZnJvbSBcIi4uLy4uL1V0aWxpdGllcy9Db21wb25lbnRzL0ZvbGRlcnMvRm9sZGVyL0V2ZW50c1wiO1xuXG5pbXBvcnQgIFwiLi9TdHlsZS5jc3NcIjtcblxuY2xhc3MgQ29tcG9uZW50dCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgc2VsZWN0ZWRDb21wb25lbnQ6IHRoaXMucHJvcHMuc2VsZWN0ZWRDb21wb25lbnRcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXN0b3JlQ2xhc3MoZXZlbnQpe1xuICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGVBZGRpdGlvbmFsc1wiKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgbGV0IHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgICAgbGV0IHNlbGVjdGVkQ29tcG9uZW50ID0gcHJvcHMuc2VsZWN0ZWRDb21wb25lbnQ7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQ7XG4gICAgICAgIC8vIFJlbW92ZSB0aGlzLnByb3BzLmluZGV4LCBpbnN0ZWFkIHVzZSB0aGlzIGVsZW1lbnQgaW5zdGFuY2UgaW5kZXguIFJlbW92ZXMgZHVwbGljYXRlIGNvZGVcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiIGRyYWdnYWJsZT1cInRydWVcIiBkYXRhLW5hbWU9e2NvbXBvbmVudC5uYW1lfSBvbkRyYWdTdGFydD17aGFuZGxlRHJhZy5iaW5kKHRoaXMpfSBvbkRyYWdFbmQ9e3RoaXMucmVzdG9yZUNsYXNzfT5cbiAgICAgICAgICAgICAgICA8bGkgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtzZWxlY3RlZENvbXBvbmVudCAmJiBwcm9wcy5jb21wb25lbnQubmFtZT09PXNlbGVjdGVkQ29tcG9uZW50Lm5hbWUgPyBcInNlbGVjdGVkIGNvbXBvbmVudFwiOiBcImNvbXBvbmVudFwifVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrID0ge3NlbGVjdGlvbkNoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSB7cHJvcHMuaW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb21wb25lbnROYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29tcG9uZW50Lm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0ge3Byb3BzLmluZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uRXhwb3J0LmJpbmQobnVsbCxjb21wb25lbnQubmFtZSl9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1maWxlLWV4cG9ydFwiPjwvaT5FeHBvcnQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSB7cHJvcHMuaW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cHJvcHMub25EZWxldGVDb21wb25lbnR9PjxpIGNsYXNzTmFtZT1cImZhIGZhLXRyYXNoXCI+PC9pPkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvIGRpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudHQ7XG4iLCJleHBvcnQgZnVuY3Rpb24gc2VsZWN0aW9uQ2hhbmdlZChlKSB7XG4gICAgdGhpcy5wcm9wcy5vblNlbGVjdGlvbkNoYW5nZShlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZURyYWcoZSl7XG5cbiAgICBsZXQgbmFtZSA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5hbWVcIilcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZChcImhpZGVBZGRpdGlvbmFsc1wiKTtcbiAgICBlLmRhdGFUcmFuc2Zlci5zZXREYXRhKFwiY29tcG9uZW50LW5hbWVcIiwgbmFtZSk7XG59XG5cbndpbmRvdy5ldmVudENhbGxiYWNrcyA9IHtcbiAgICBoYW5kbGVEcmFnOiBoYW5kbGVEcmFnXG59OyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNlbGVjdGVkLCAuZ3JlZW4ge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcXG4gICAgYmFja2dyb3VuZDogcmdiKDQzLCA0MywgNDMpO1xcbn1cXG5cXG4uYmFja2dyb3VuZCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYig2NCwgNjQsIDY0KTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzMzMzM7XFxufVxcblxcbi5jb21wb25lbnQge1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmNvbXBvbmVudCAuY29tcG9uZW50TmFtZXtcXG4gICAgcGFkZGluZzo3cHg7XFxufVxcblxcbi50aHVtYm5haWwge1xcbiAgICB3aWR0aDogNTBweDtcXG59XFxuXFxuLmhpZGVBZGRpdGlvbmFscyBzcGFuOm5vdCguY29tcG9uZW50TmFtZSl7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG59XFxuXFxuLmhpZGVBZGRpdGlvbmFscyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XCIsIFwiXCJdKTtcblxuIiwiaW1wb3J0IHt3cml0ZURhdGF9IGZyb20gXCIuLi91dGlsaXRpZXMvU3RvcmFnZVwiO1xuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIG9uRGVsZXRlQ29tcG9uZW50KGV2ZW50KSB7XG4gICAgXG4gICAgLy8gc3RvcCBldmVudCBwcm9wYWdhdGlvbi4gZWxzZSBvblNlbGVjdGlvbkNoYW5nZSBnZXRzIHJlIHRyaWdnZXJlZC5cbiAgICBcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBsZXQgY29tcG9uZW50TmFtZSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaW5uZXJUZXh0LnNwbGl0KFwiXFxuXCIpWzBdO1xuXG4gICAgaWYodGhpcy5zdGF0ZS5jb21wb25lbnRzLmZpbmQoY29tcG9uZW50PT5jb21wb25lbnQubmFtZT09PWNvbXBvbmVudE5hbWUpLmxlbmd0aDwxKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBHZXQgYWxsIHRoZSBlbGVtZW50c1xuICAgIGxldCBjb21wb25lbnRzID0gQXJyYXkuZnJvbSh0aGlzLnN0YXRlLmNvbXBvbmVudHMpO1xuICAgIFxuICAgIC8vIEZpbmQgdGhlIGluZGV4IG9mIGVsZW1lbnQgdG8gYmUgZGVsZXRlZC5cbiAgICBsZXQgaW5kZXggPSBjb21wb25lbnRzLmZpbmRJbmRleChjb21wb25lbnQ9PmNvbXBvbmVudC5uYW1lPT09Y29tcG9uZW50TmFtZSlcblxuICAgIC8vIFJlbW92ZSB0aGUgZWxlbWVudCBmcm9tIHRoZSBsaXN0XG4gICAgY29tcG9uZW50cy5zcGxpY2UoaW5kZXgsMSk7XG5cbiAgICAvLyBVcGRhdGUgdGhlIHN0YXRlIHdpdGggbmV3IGVsZW1lbnRzLlxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjb21wb25lbnRzOiBjb21wb25lbnRzXG4gICAgfSlcblxuICAgIC8vIFBlcnNpc3QgdGhlIGNoYW5nZXMuXG4gICAgd3JpdGVEYXRhKFwidWktZWRpdG9yXCIsIGNvbXBvbmVudHMpXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uRGVsZXRlRm9sZGVyKFRZUEUsIGZvbGRlck5hbWUpe1xuICAgIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICBjYXNlIFwiRk9MREVSXCI6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgXG4gICAgICAgIGNhc2UgXCJGT0xERVJfQU5EX0NPTlRFTlRTXCI6XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiQ09OVEVOVFNcIjpcbiAgICAgICAgICAgIGxldCBmb2xkZXJzID0gQXJyYXkuZnJvbSh0aGlzLnN0YXRlLmZvbGRlcnMpXG4gICAgICAgICAgICBsZXQgZm9sZGVyVG9EZWxldGUgPSBmb2xkZXJzLmZpbmQoZm9sZGVyPT4gZm9sZGVyLm5hbWU9PT1mb2xkZXJOYW1lKTtcbiAgICAgICAgICAgIGxldCBub0ZvbGRlciA9IGZvbGRlcnMuZmluZChmb2xkZXI9PiBmb2xkZXIudHlwZT09PVwibm9Gb2xkZXJcIik7XG4gICAgICAgICAgICAvLyBQdXNoIGNvbnRlbnRzIHRvIFwibm9Gb2xkZXJcIi5cbiAgICAgICAgICAgIG5vRm9sZGVyLmNvbnRlbnRzLnB1c2goLi4uZm9sZGVyVG9EZWxldGUuY29udGVudHMpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBEZWxldGUgZm9sZGVyLlxuICAgICAgICAgICAgICAgIC8vICBmaW5kIGluZGV4LlxuICAgICAgICAgICAgbGV0IGluZGV4ID0gZm9sZGVycy5maW5kSW5kZXgoZm9sZGVyID0+IGZvbGRlci5uYW1lPT09Zm9sZGVyTmFtZSk7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBpdGVtLlxuICAgICAgICAgICAgZm9sZGVycy5zcGxpY2UoaW5kZXgsMSk7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgc3RhdGUuXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uRm9sZGVyc1VwZGF0ZShmb2xkZXJzKTtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufSIsIi8vIExpYnJhcmllcy5cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuL2NvbmZpZ1wiO1xuXG5jbGFzcyBEcmFnZ2FibGVDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgbGV0IHBhbmVsTmFtZSA9IGB1aS1lZGl0b3Itc2V0dGluZ3MtZHJhZ2dhYmxlLWNvbXBvbmVudC0ke3RoaXMucHJvcHMuY2hpbGRyZW4ucHJvcHMudGl0bGV9YDtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocGFuZWxOYW1lKSkgfHwgY29uZmlnW3BhbmVsTmFtZV07XG4gICAgICAgIHRoaXMuc3RhdGUuZHJhZ2dhYmxlPSBcImZhbHNlXCJcbiAgICB9XG5cbiAgICBtb3ZlRGl2KGUpe1xuICAgICAgICBpZihlLnRhcmdldC5pZD09PVwibW92ZVwiKXtcbiAgICAgICAgICAgIGxldCBzdGF0ZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZSkpO1xuICAgICAgICAgICAgc3RhdGUuc3R5bGUudG9wID0gZS5wYWdlWSArXCJweFwiXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS5sZWZ0ID0gZS5wYWdlWCArXCJweFwiXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBzdHlsZSA6IHN0YXRlLnN0eWxlXG4gICAgICAgICAgICB9LCgpPT57XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHVpLWVkaXRvci1zZXR0aW5ncy1kcmFnZ2FibGUtY29tcG9uZW50LSR7dGhpcy5wcm9wcy5jaGlsZHJlbi5wcm9wcy50aXRsZX1gLEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpKTtcbiAgICAgICAgICAgIH0pICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlTWluaW1pc2VNYXhpbWlzZShlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbWluaW1pc2VkOiAhdGhpcy5zdGF0ZS5taW5pbWlzZWRcbiAgICAgICAgfSwoKT0+e1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHVpLWVkaXRvci1zZXR0aW5ncy1kcmFnZ2FibGUtY29tcG9uZW50LSR7dGhpcy5wcm9wcy5jaGlsZHJlbi5wcm9wcy50aXRsZX1gLEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBvbk1vdXNlRW50ZXIoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZHJhZ2dhYmxlOlwidHJ1ZVwiXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgb25Nb3VzZUxlYXZlKCl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZHJhZ2dhYmxlOlwiZmFsc2VcIlxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgZHJhZ2dhYmxlPXt0aGlzLnN0YXRlLmRyYWdnYWJsZX0gaWQ9XCJtb3ZlXCIgb25EcmFnRW5kPXt0aGlzLm1vdmVEaXYuYmluZCh0aGlzKX0gc3R5bGU9e3RoaXMuc3RhdGUuc3R5bGV9ID5cbiAgICAgICAgICAgICAgICA8c3BhbiB0aXRsZT1cIk1vdmVcIiBjbGFzc05hbWU9XCJtb3ZlLWhhbmRsZVwiIG9uTW91c2VEb3duPXt0aGlzLm9uTW91c2VFbnRlci5iaW5kKHRoaXMpfSBvbk1vdXNlVXA9e3RoaXMub25Nb3VzZUxlYXZlLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hcnJvd3MtYWx0IGZhLXhzXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUubWluaW1pc2VkID8gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiB0aXRsZT1cIk1pbmltaXNlXCIgY2xhc3NOYW1lPVwibWF4aW1pc2UtaGFuZGxlXCIgb25DbGljaz17dGhpcy50b2dnbGVNaW5pbWlzZU1heGltaXNlLmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXdpbmRvdy1tYXhpbWl6ZSBmYS14c1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHRpdGxlPVwiTWluaW1pc2VcIiBjbGFzc05hbWU9XCJtaW5pbWlzZS1oYW5kbGVcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZU1pbmltaXNlTWF4aW1pc2UuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtd2luZG93LW1pbmltaXplIGZhLXhzXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5taW5pbWlzZWQgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGVkaXRvci10YWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e3RoaXMucHJvcHMuY2hpbGRyZW4udHlwZS5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBEcmFnZ2FibGVDb21wb25lbnQ7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIjbW92ZSA+IHNwYW57ICBcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuI21vdmUgLm1vdmUtaGFuZGxle1xcbiAgICBjdXJzb3I6IG1vdmU7XFxufVxcblxcbiNtb3ZlIC5tb3ZlLWhhbmRsZSxcXG4jbW92ZSAubWluaW1pc2UtaGFuZGxlLFxcbiNtb3ZlIC5tYXhpbWlzZS1oYW5kbGUge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcXG4gICAgcGFkZGluZy1yaWdodDogMnB4O1xcbn1cIiwgXCJcIl0pO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBcInVpLWVkaXRvci1zZXR0aW5ncy1kcmFnZ2FibGUtY29tcG9uZW50LVRhZ0V4cGxvcmVyXCI6IHtcbiAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICAgICAgICAgICAgICBcInRvcFwiOiBcIjYwMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiBcIjk1NHB4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtaW5pbWlzZWRcIjogZmFsc2UsXG4gICAgICAgICAgICBcImRyYWdnYWJsZVwiOiBcInRydWVcIlxuICAgIH0sXG4gICAgXCJ1aS1lZGl0b3Itc2V0dGluZ3MtZHJhZ2dhYmxlLWNvbXBvbmVudC1TdHlsZUV4cGxvcmVyXCI6IHtcbiAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICAgICAgICAgICAgICBcInRvcFwiOiBcIjU4N3B4XCIsXG4gICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiBcIjU3N3B4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtaW5pbWlzZWRcIjogZmFsc2UsXG4gICAgICAgICAgICBcImRyYWdnYWJsZVwiOiBcInRydWVcIlxuICAgIH0sXG4gICAgXCJ1aS1lZGl0b3Itc2V0dGluZ3MtZHJhZ2dhYmxlLWNvbXBvbmVudC1FdmVudHNcIjoge1xuICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgICAgIFwidG9wXCI6IFwiMzUycHhcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IFwiMTAzMXB4XCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJtaW5pbWlzZWRcIjogZmFsc2UsXG4gICAgICAgICAgICBcImRyYWdnYWJsZVwiOiBcInRydWVcIlxuICAgIH0sXG4gICAgXCJ1aS1lZGl0b3Itc2V0dGluZ3MtZHJhZ2dhYmxlLWNvbXBvbmVudC1FZGl0b3JcIjoge1xuICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgICAgIFwidG9wXCI6IFwiNDZweFwiLFxuICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogXCIzNjJweFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwibWluaW1pc2VkXCI6IGZhbHNlLFxuICAgICAgICAgICAgXCJkcmFnZ2FibGVcIjogXCJ0cnVlXCJcbiAgICB9LFxuICAgIFwidWktZWRpdG9yLXNldHRpbmdzLWRyYWdnYWJsZS1jb21wb25lbnQtQ29tcG9uZW50c1wiOiB7XG4gICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgICAgICAgICAgICAgXCJ0b3BcIjogXCI1MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIFwibGVmdFwiOiBcIjIxcHhcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1pbmltaXNlZFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwiZHJhZ2dhYmxlXCI6IFwidHJ1ZVwiXG4gICAgfSxcbiAgICBcInVpLWVkaXRvci1zZXR0aW5ncy1kcmFnZ2FibGUtY29tcG9uZW50LVByZXZpZXdcIjoge1xuICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgICAgIFwidG9wXCI6IFwiNjE0cHhcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IFwiMzI3cHhcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1pbmltaXNlZFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwiZHJhZ2dhYmxlXCI6IFwidHJ1ZVwiXG4gICAgfSxcbiAgICBcInVpLWVkaXRvci1zZXR0aW5ncy1kcmFnZ2FibGUtY29tcG9uZW50LUFzc2V0c1wiOiB7XG4gICAgICAgIFwic3R5bGVcIjoge1xuICAgICAgICAgICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgICAgICAgICAgICAgXCJ0b3BcIjogXCIxMDZweFwiLFxuICAgICAgICAgICAgICAgICAgICBcImxlZnRcIjogXCIxNTA0cHhcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1pbmltaXNlZFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwiZHJhZ2dhYmxlXCI6IFwidHJ1ZVwiXG4gICAgfSxcbiAgICBcInVpLWVkaXRvci1zZXR0aW5ncy1kcmFnZ2FibGUtY29tcG9uZW50LVRvb2xraXRcIjoge1xuICAgICAgICBcInN0eWxlXCI6IHtcbiAgICAgICAgICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgICAgIFwidG9wXCI6IFwiNTk1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgXCJsZWZ0XCI6IFwiODY3cHhcIlxuICAgICAgICB9LFxuICAgICAgICBcIm1pbmltaXNlZFwiOiBmYWxzZSxcbiAgICAgICAgICAgIFwiZHJhZ2dhYmxlXCI6IFwidHJ1ZVwiXG4gICAgfVxufSIsIlxuLy8gTGlicmFyaWVzLlxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgXCIuL1N0eWxlLmNzc1wiO1xuaW1wb3J0IHt1cGRhdGVOYW1lLCB1cGRhdGVNYXJrdXAsIHVwZGF0ZVN0eWxlLCB1cGRhdGVTdGF0ZX0gZnJvbSBcIi4vUmVkdWNlclwiO1xuXG5pbXBvcnQge3JlYWRDb21wb25lbnR9IGZyb20gXCIuLi91dGlsaXRpZXMvU3RvcmFnZVwiO1xuXG4vKipcbiAqIFNob3dzIENvbmZpZ3VyYXRvciBvbiBzZWxlY3Qgb2YgdmFsaWQgY2hpbGQgY29tcG9uZW50IG5hbWUgaW4gdGhlIG1hcmt1cCBhbmQgbW91c2VPdXQgZnJvbSBtYXJrdXBcbiAqIEhpZGVzIENvbmZpZ3VyYXRvciBvbiBtb3VzZUxlYXZlIGZyb20gdGhlIGVkaXRvci5cbiAqL1xuY2xhc3MgRWRpdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHZhciBjb21wb25lbnQgPSByZWFkQ29tcG9uZW50KHRoaXMucHJvcHMubmFtZSk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIG5hbWU6IGNvbXBvbmVudD8gY29tcG9uZW50Lm5hbWUgOiBcIlwiLFxuICAgICAgICAgICAgbWFya3VwOiBjb21wb25lbnQ/IGNvbXBvbmVudC5tYXJrdXAgOiBcIlwiLFxuICAgICAgICAgICAgc3RhdGU6IGNvbXBvbmVudD8gY29tcG9uZW50LnN0YXRlIDogXCJcIixcbiAgICAgICAgICAgIHN0eWxlOiBjb21wb25lbnQ/IGNvbXBvbmVudC5zdHlsZSA6IFwiXCJcbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIHNhdmVFbGVtZW50ICgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblNhdmUoe1xuICAgICAgICAgICAgbmFtZTogdGhpcy5zdGF0ZS5uYW1lLFxuICAgICAgICAgICAgbWFya3VwOiB0aGlzLnN0YXRlLm1hcmt1cCxcbiAgICAgICAgICAgIHN0eWxlOiB0aGlzLnN0YXRlLnN0eWxlLFxuICAgICAgICAgICAgc3RhdGU6IHRoaXMuc3RhdGUuc3RhdGVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCBuYW1lPSB0aGlzLnN0YXRlLm5hbWU7XG4gICAgICAgIGxldCBtYXJrdXA9IHRoaXMuc3RhdGUubWFya3VwO1xuICAgICAgICBsZXQgc3R5bGU9IHRoaXMuc3RhdGUuc3R5bGU7XG4gICAgICAgIGxldCBzdGF0ZT0gdGhpcy5zdGF0ZS5zdGF0ZTtcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIHBhc3MgdGhlIGN1cnJlbnQgZGF0YS4gSW5zdGVhZCBvZiBhY2Nlc3NpbmcgaXQgZnJvbSBnbG9iYWxcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGVkaXRvci10YWJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+RWRpdG9yPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+Q29tcG9uZW50IE5hbWU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBlbGVtZW50IG5hbWVcIiB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9e3VwZGF0ZU5hbWUuYmluZCh0aGlzKX0gaWQ9XCJlbGVtZW50TmFtZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNhdmVFbGVtZW50LmJpbmQodGhpcyl9IGlkPVwic2F2ZVwiPjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zYXZlXCI+PC9pPlNhdmU8L2J1dHRvbj4gICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkNvbXBvbmVudCBNYXJrdXA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHZhbHVlPXttYXJrdXB9IG9uQ2hhbmdlPXt1cGRhdGVNYXJrdXAuYmluZCh0aGlzKX0gaWQ9XCJlbGVtZW50TWFya3VwXCIgdGl0bGU9XCJJRCBpcyBtYW5kYXRvcnkgZm9yIGV2ZW50c1wiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkNvbXBvbmVudCBDU1M8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHZhbHVlPXtzdHlsZX0gb25DaGFuZ2U9e3VwZGF0ZVN0eWxlLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+Q29tcG9uZW50IFN0YXRlPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB2YWx1ZT17c3RhdGV9IG9uQ2hhbmdlPXt1cGRhdGVTdGF0ZS5iaW5kKHRoaXMpfSBpZD1cImVsZW1lbnRTdGF0ZVwiLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3I7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5oaWRkZW57XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiLCBcIlwiXSk7XG5cbiIsIi8vIFB1YmxpYy5cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZU5hbWUgKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG5hbWU6IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWVcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlTWFya3VwIChldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtYXJrdXA6IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWVcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gIHVwZGF0ZVN0eWxlIChldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBzdHlsZTogZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZVxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVTdGF0ZSAoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc3RhdGU6IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWVcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvcGVydHlDb250YWluaW5nUHJvcHMob2JqKXtcbiAgICAvLyBGZXRjaCBsaXN0IG9mIHByb3BzIGZyb20gY2hpbGQuXG4gICAgbGV0IHByb3BzID0gW107XG4gICAgbGV0IHN0YXRlO1xuICAgIHRyeXtcbiAgICAgICAgc3RhdGUgPSBKU09OLnBhcnNlKG9iai5zdGF0ZSk7XG4gICAgfVxuICAgIGNhdGNoKGUpe1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6IENoaWxkIHN0YXRlIGlzIGFuIGludmFsaWQganNvbiwgdHJ5IGFuIG9ubGluZSB2YWxpZGF0b3Igb24gYmVsb3cgc3RyaW5nXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKGNoaWxkLnN0YXRlKTtcbiAgICB9XG4gICAgZm9yKGxldCBwcm9wZXJ0eSBpbiBzdGF0ZSl7XG4gICAgICAgIGlmKHN0YXRlW3Byb3BlcnR5XS5pbmNsdWRlcyhcInByb3BcIikpe1xuICAgICAgICAgICAgcHJvcHMucHVzaChwcm9wZXJ0eSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BzO1xufSIsIi8vIExpYnJhcmllcy5cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBEZXBlbmRlbmNpZXMuXG5cblxuLy8gQ29tcG9uZW50cy4gXG5cbmltcG9ydCBDb25maWd1cmF0b3IgZnJvbSBcIi4vQ29uZmlndXJhdG9yXCI7XG5pbXBvcnQgTm9kZXMgZnJvbSBcIi4uL3V0aWxpdGllcy9Db21wb25lbnRzL05vZGVzXCI7XG5pbXBvcnQgRXZlbnQgZnJvbSBcIi4vRXZlbnRcIjtcbmltcG9ydCBnZXRNZXNzYWdlcyBmcm9tIFwiLi9NZXNzYWdlc1wiO1xuXG4vLyBTdHlsZXMuXG5cbmltcG9ydCBcIi4vU3R5bGUuY3NzXCI7XG5cbi8vIFJlZHVjZXJzLlxuXG5pbXBvcnQgeyB1cGRhdGVFdmVudCwgc2VsZWN0ZWRUYWdDaGFuZ2VkLCBkZWxldGVFdmVudCwgdXBkYXRlQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuL1JlZHVjZXJcIjtcblxuXG4vLyBVdGlscy5cblxuaW1wb3J0IHsgZ2V0Tm9kZVRyZWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2dldC1ub2RlLXRyZWUuanNcIjtcbmltcG9ydCB7IHJlYWREYXRhIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9TdG9yYWdlXCI7XG5cbmNsYXNzIEV2ZW50cyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUuc2VsZWN0ZWRUYWcgPSB0aGlzLnByb3BzLnNlbGVjdGVkVGFnO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5wcm9wcy5jb21wb25lbnQ7XG5cbiAgICAgICAgLy8gUmVwb3J0IGlmIG5vIGNvbXBvbmVudCBpcyBjcmVhdGVkLlxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jb21wb25lbnRzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGV2ZW50cy10YWJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkV2ZW50czwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD5Mb29rcyBsaWtlIHlvdSBkbyBub3QgaGF2ZSBhbnkgV2ViIGNvbXBvbmVudCBjcmVhdGVkLiBUeXBlIHNvbWUgXCJodG1sXCIgb24gdGhlIHJpZ2h0IFwiRWRpdG9yXCIgdGFiPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlcG9ydCBpZiBubyBjb21wb25lbnQgaXMgc2VsZWN0ZWQuXG4gICAgICAgIGlmIChjb21wb25lbnQubmFtZSA9PT0gdW5kZWZpbmVkICYmIHRoaXMuc3RhdGUuY29tcG9uZW50cy5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBldmVudHMtdGFiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5FdmVudHM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+TG9va3MgbGlrZSB5b3UgaGF2ZSBub3Qgc2VsZWN0ZWQgYW55IGNvbXBvbmVudC4gQ2xpY2sgb24gYW55IG9mIHRoZSBjb21wb25lbnQgaW4gdGhlIGxlZnQgcGFuZS48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH1cblxuXG4gICAgICAgIGxldCBub2RlVHJlZSA9IGdldE5vZGVUcmVlKGNvbXBvbmVudCwgY29tcG9uZW50Lm1hcmt1cCwgY29tcG9uZW50LnN0eWxlLCBKU09OLnBhcnNlKGNvbXBvbmVudC5zdGF0ZSksIGNvbXBvbmVudC5ldmVudHMpO1xuXG4gICAgICAgIC8vIFJlcG9ydCBlcnJvci5cbiAgICAgICAgaWYgKG5vZGVUcmVlLmVycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRNZXNzYWdlcyhub2RlVHJlZS5lcnJvcik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXBvcnQgZXJyb3IgaWYgY29tcG9uZW50IGlzIG5vdCBcbiAgICAgICAgaWYgKG5vZGVUcmVlLnJlc3VsdCA9PT0gdW5kZWZpbmVkICYmIHRoaXMuc3RhdGUuY29tcG9uZW50cy5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBldmVudHMtdGFiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5FdmVudHM8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZWxlY3RlZFRhZyA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRUYWcgfHwgXCJcIjtcbiAgICAgICAgbGV0IGV2ZW50c09mU2VsZWN0ZWRUYWcsIGNvbmZpZ3VyYXRvciwgZXZlbnROYW1lcyA9IFtdO1xuICAgICAgICAvLyBDaGVjayBpZiBpdCBpcyBhIGNoaWxkIGNvbXBvbmVudFxuICAgICAgICBpZiAoc2VsZWN0ZWRUYWcuaW5jbHVkZXMoXCJjaGlsZC1jb21wb25lbnQtXCIpKSB7XG4gICAgICAgICAgICAvLyBHZXQgbGlzdCBvZiBjb21wb25lbnRzLlxuICAgICAgICAgICAgbGV0IGNvbXBvbmVudHMgPSByZWFkRGF0YShcInVpLWVkaXRvclwiKTtcblxuICAgICAgICAgICAgLy8gR2V0IGNoaWxkIGNvbXBvbmVudCBuYW1lIGZyb20gdGhlIHNlbGVjdGVkIHRhZy5cbiAgICAgICAgICAgIGxldCBjaGlsZENvbXBvbmVudE5hbWUgPSBzZWxlY3RlZFRhZy5zcGxpdChcImNoaWxkLWNvbXBvbmVudC1cIilbMV07XG5cbiAgICAgICAgICAgIC8vIEZpbmQgdGhlIGNoaWxkIGNvbXBvbmVudCBmcm9tIHRoZSBsaXN0IG9mIGNvbXBvbmVudHMuXG4gICAgICAgICAgICBsZXQgY2hpbGRDb21wb25lbnQgPSBjb21wb25lbnRzLmZpbmQoY29tcG9uZW50ID0+IGNvbXBvbmVudC5uYW1lID09PSBjaGlsZENvbXBvbmVudE5hbWUpO1xuXG4gICAgICAgICAgICAvLyBGaW5kIGV2ZW50cyB0aGF0IGFyZSBwdWJsaXNoYWJsZSBmcm9tIHRoZSBjaGlsZCBjb21wb25lbnQuXG4gICAgICAgICAgICBldmVudE5hbWVzID0gY2hpbGRDb21wb25lbnQuZXZlbnRzLmZpbHRlcihldmVudCA9PiBldmVudC5wdWJsaXNoYWJsZSA9PT0gdHJ1ZSkubWFwKHB1Ymxpc2hhYmxlRXZlbnQgPT4gcHVibGlzaGFibGVFdmVudC5wdWJsaXNoTmFtZSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIENyZWF0ZSBldmVudCB2aWV3IGZvciBsaXN0IG9mIGFsbCBldmVudHNcbiAgICAgICAgICAgIGxldCBldmVudHMgPSBjb21wb25lbnQuZXZlbnRzLmZpbHRlcihldmVudD0+ZXZlbnROYW1lcy5maW5kKGV2ZW50TmFtZSA9PmV2ZW50TmFtZSAgPT09IGV2ZW50Lm5hbWUgJiYgZXZlbnQuaWQ9PT1jaGlsZENvbXBvbmVudC5uYW1lKSlcbiAgICAgICAgICAgIGV2ZW50cyA9IGV2ZW50cy5tYXAoKGV2ZW50LCBpbmRleCkgPT4gPEV2ZW50IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e01hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwMCl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9IGV2ZW50PXtldmVudH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVGFnSUQ9e3NlbGVjdGVkVGFnfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnROYW1lcz17ZXZlbnROYW1lc30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2F2ZT17dXBkYXRlRXZlbnQuYmluZCh0aGlzKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUV2ZW50PXtkZWxldGVFdmVudC5iaW5kKHRoaXMpfSAvPik7XG5cbiAgICAgICAgICAgIC8vIEZpbHRlciBvdXQgZXZlbnRzIHRoYXQgYXJlIG5vdCBwYXJ0IG9mIHNlbGVjdGVkVGFnXG4gICAgICAgICAgICBldmVudHNPZlNlbGVjdGVkVGFnID0gc2VsZWN0ZWRUYWcgPyBldmVudHMgOiBudWxsO1xuXG4gICAgICAgICAgICBjb25maWd1cmF0b3IgPSA8Q29uZmlndXJhdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17TWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDAwKX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt1cGRhdGVDb25maWd1cmF0aW9uLmJpbmQodGhpcyl9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZE5hbWU9e2NoaWxkQ29tcG9uZW50TmFtZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudD17Y29tcG9uZW50fSAvPjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50cyA9IGNvbXBvbmVudC5ldmVudHNcbiAgICAgICAgICAgICAgICAubWFwKChldmVudCwgaW5kZXgpID0+IDxFdmVudCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMDApfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ9e2V2ZW50fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUYWdJRD17c2VsZWN0ZWRUYWd9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudE5hbWVzPXtldmVudE5hbWVzfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TYXZlPXt1cGRhdGVFdmVudC5iaW5kKHRoaXMpfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlRXZlbnQ9e2RlbGV0ZUV2ZW50LmJpbmQodGhpcyl9IC8+KTtcbiAgICAgICAgICAgIGV2ZW50c09mU2VsZWN0ZWRUYWcgPSBzZWxlY3RlZFRhZyA/IGV2ZW50cy5maWx0ZXIoZXZlbnQgPT4gc2VsZWN0ZWRUYWcuaW5jbHVkZXMoZXZlbnQucHJvcHMuZXZlbnQuaWQpKSA6IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBldmVudHMtdGFiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5FdmVudHM8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhZ3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOb2RlcyBub2RlPXtub2RlVHJlZS5yZXN1bHR9IG9uU2VsZWN0ZWRUYWdDaGFuZ2VkPXtzZWxlY3RlZFRhZ0NoYW5nZWQuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtjb25maWd1cmF0b3J9XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXhpc3RpbmcgRXZlbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtldmVudHNPZlNlbGVjdGVkVGFnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXcgRXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEV2ZW50IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbXBvbmVudC5ldmVudHMubGVuZ3RofSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnROYW1lcz17ZXZlbnROYW1lc30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVGFnSUQ9e3NlbGVjdGVkVGFnfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TYXZlPXt1cGRhdGVFdmVudC5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRzO1xuIiwiLy8gTGlicmFyaWVzLlxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBcIi4vU3R5bGUuY3NzXCJcblxuXG5jbGFzcyBDb25maWd1cmF0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcblxuICAgICAgICBsZXQgY29uZmlnID0gSlNPTi5wYXJzZSh0aGlzLnByb3BzLnBhcmVudC5jb25maWcpW3RoaXMucHJvcHMuY2hpbGROYW1lXSB8fCB7IG92ZXJyaWRlOiBmYWxzZX1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBvdmVycmlkZTogY29uZmlnLm92ZXJyaWRlLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2VsT3ZlcnJpZGUoKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBvdmVycmlkZTogIXRoaXMuc3RhdGUub3ZlcnJpZGVcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHtcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIG92ZXJyaWRlOiAhdGhpcy5zdGF0ZS5vdmVycmlkZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoaWxkTmFtZTogdGhpcy5wcm9wcy5jaGlsZE5hbWUsXG4gICAgICAgICAgICBwYXJlbnROYW1lOiB0aGlzLnByb3BzLnBhcmVudC5uYW1lXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNhdmVDb25maWcoKXtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh7XG4gICAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgICAgICBvdmVycmlkZTogdGhpcy5zdGF0ZS5vdmVycmlkZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGlsZE5hbWU6IHRoaXMucHJvcHMuY2hpbGROYW1lLFxuICAgICAgICAgICAgcGFyZW50TmFtZTogdGhpcy5wcm9wcy5wYXJlbnQubmFtZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+Q2hpbGQgQ29uZmlndXJhdGlvbnM8L2Rpdj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5PdmVycmlkZSBzdGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e3RoaXMudG9nZ2VsT3ZlcnJpZGUuYmluZCh0aGlzKX0gY2hlY2tlZD17dGhpcy5zdGF0ZS5vdmVycmlkZSA/IFwiY2hlY2tlZFwiIDogXCJcIn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpZ3VyYXRvcjtcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbnNvbGV7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgcmlnaHQ6IDE1MHB4O1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG4uZXZlbnQgeyBcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMzMzMzMzO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNjQsIDY0LCA2NCk7XFxufVxcblxcbi5pbmZvIHtcXG4gICAgY29sb3I6IHllbGxvd2dyZWVuO1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5jb25maWd1cmF0b3Ige1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNjQsIDY0LCA2NCk7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XCIsIFwiXCJdKTtcblxuIiwiLy8gTGlicmFyaWVzLlxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIE5vZGVzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICB2YXIgbm9kZSA9IHRoaXMucHJvcHMubm9kZTtcblxuXG4gICAgICAgIGlmKCFub2RlKXtcbiAgICAgICAgICAgIHJldHVybiAoPHNwYW4+bnVsbDwvc3Bhbj4pXG4gICAgICAgIH1cbiAgICAgICAgaWYodHlwZW9mIG5vZGU9PT1cInN0cmluZ1wiKXtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaT57bm9kZX08L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaWQgPSBub2RlLnByb3BzLmlkID8gKFwiLVwiK25vZGUucHJvcHMuaWQpIDogXCJcIjtcblxuICAgICAgICAvLyBDaGVjayBpZiBpdCBjb250YWlucyBjaGlsZHJlbi5cbiAgICAgICAgaWYobm9kZS5wcm9wcyAmJiBBcnJheS5pc0FycmF5KG5vZGUucHJvcHMuY2hpbGRyZW4pKXtcbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IG5vZGUucHJvcHMuY2hpbGRyZW4ubWFwKChjaGlsZCxpbmRleCk9PjxOb2RlcyBrZXk9e2luZGV4fSBub2RlPXtjaGlsZH0gb25TZWxlY3RlZFRhZ0NoYW5nZWQ9e3RoaXMucHJvcHMub25TZWxlY3RlZFRhZ0NoYW5nZWR9Lz4pO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VsZWN0ZWRFbGVtZW50XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMub25TZWxlY3RlZFRhZ0NoYW5nZWR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtub2RlLnR5cGUgKyBpZH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAge25vZGUudHlwZSAraWR9XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBub2RlIGNvbnRhaW5zIG9ubHkgb25lIGNoaWxkcmVuLCBqc3ggZ2V0IHRyYW5zcGlsZWQgdG8gb2JqZWN0IHJhdGhlciB0aGFuIGFycmF5LlxuICAgICAgICBlbHNlIGlmKHR5cGVvZiBub2RlLnByb3BzLmNoaWxkcmVuID09PSBcIm9iamVjdFwiKXtcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IG5vZGUucHJvcHMuY2hpbGRyZW47XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWxlY3RlZEVsZW1lbnRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wcm9wcy5vblNlbGVjdGVkVGFnQ2hhbmdlZH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9eyhub2RlLnR5cGUubmFtZSB8fCBub2RlLnR5cGUpK2lkfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7KG5vZGUudHlwZS5uYW1lIHx8IG5vZGUudHlwZSl9XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxOb2RlcyBrZXk9e2luZGV4fSBub2RlPXtjaGlsZH0gb25TZWxlY3RlZFRhZ0NoYW5nZWQ9e3RoaXMucHJvcHMub25TZWxlY3RlZFRhZ0NoYW5nZWR9Lz5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBuZXN0ZWQgY29tcG9uZW50LlxuICAgICAgICBlbHNlIGlmKHR5cGVvZiBub2RlLnR5cGUgPT09IFwiZnVuY3Rpb25cIil7XG4gICAgICAgICAgICByZXR1cm4gKDx1bD5cbiAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNlbGVjdGVkRWxlbWVudFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e1wiY2hpbGQtY29tcG9uZW50LVwiK25vZGUudHlwZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMub25TZWxlY3RlZFRhZ0NoYW5nZWR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAge25vZGUudHlwZS5uYW1lfVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VsZWN0ZWRFbGVtZW50XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bm9kZS50eXBlK2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMucHJvcHMub25TZWxlY3RlZFRhZ0NoYW5nZWR9IFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAge25vZGUudHlwZSAraWR9XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vZGVzOyIsIi8vIExpYnJhcmllcy5cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgXCIuL1N0eWxlLmNzc1wiXG5cbi8vIENvbXBvbmVudHMuXG5cbmltcG9ydCBnZXRNZXNzYWdlcyBmcm9tIFwiLi9NZXNzYWdlc1wiO1xuXG4vLyBSZWR1Y2Vycy4gXG5cbmltcG9ydCB7dXBkYXRlRXZlbnROYW1lLCB1cGRhdGVFdmVudFR5cGUsIHVwZGF0ZVB1Ymxpc2hOYW1lLCB1cGRhdGVSZWR1Y2VyfSBmcm9tIFwiLi9SZWR1Y2VyXCI7XG5cbi8vIEV2ZW50cy5cblxuaW1wb3J0IHtwdWJsaXNoRXZlbnQsIGRlbGV0ZUV2ZW50fSBmcm9tICcuL0V2ZW50cyc7XG5cbmNsYXNzIEV2ZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBuYW1lOiB0aGlzLnByb3BzLmV2ZW50ID8gdGhpcy5wcm9wcy5ldmVudC5uYW1lIDogXCJcIixcbiAgICAgICAgICAgIHJlZHVjZXI6IHRoaXMucHJvcHMuZXZlbnQgPyB0aGlzLnByb3BzLmV2ZW50LnJlZHVjZXIgOiBcIlwiLFxuICAgICAgICAgICAgcHVibGlzaGFibGU6IHRoaXMucHJvcHMuZXZlbnQgPyB0aGlzLnByb3BzLmV2ZW50LnB1Ymxpc2hhYmxlIDogXCJcIixcbiAgICAgICAgICAgIHB1Ymxpc2hOYW1lOiB0aGlzLnByb3BzLmV2ZW50ID8gdGhpcy5wcm9wcy5ldmVudC5wdWJsaXNoTmFtZSA6IFwiXCIsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2VsZWN0ZWRUYWdJRCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0TWVzc2FnZXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwdWJsaXNoTmFtZSA9IHRoaXMuc3RhdGUucHVibGlzaGFibGU/IDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt1cGRhdGVQdWJsaXNoTmFtZS5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5zdGF0ZS5wdWJsaXNoTmFtZX0gcGxhY2Vob2xkZXI9XCJFbnRlciBldmVudCBwdWJsaXNoIG5hbWUgZm9yIG90aGVyIGNvbXBvbmVudHMgdG8gc3Vic2NyaWJlIHRvXCIvPiA6IG51bGw7XG4gICAgICAgIGxldCBldmVudE5hbWVzID0gdGhpcy5wcm9wcy5ldmVudE5hbWVzLm1hcChldmVudE5hbWU9PjxvcHRpb24gdmFsdWU9e2V2ZW50TmFtZX0+PC9vcHRpb24+KVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IGxpc3Q9XCJicm93c2Vyc1wiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3VwZGF0ZUV2ZW50TmFtZS5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBwbGFjZWhvbGRlcj1cIkVudGVyIGV2ZW50IG5hbWVcIiB0aXRsZT1cIkV2ZW50IE5hbWVcIi8+XG4gICAgICAgICAgICAgICAgPGRhdGFsaXN0IGlkPVwiYnJvd3NlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAge2V2ZW50TmFtZXN9XG4gICAgICAgICAgICAgICAgPC9kYXRhbGlzdD5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBvbkNoYW5nZT17dXBkYXRlUmVkdWNlci5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5zdGF0ZS5yZWR1Y2VyfSBwbGFjZWhvbGRlcj1cIkVudGVyIHN0YXRlIHJlZHVjZXJcIiB0aXRsZT1cIlJlZHVjZXJcIi8+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9e3VwZGF0ZUV2ZW50VHlwZS5iaW5kKHRoaXMpfSBjaGVja2VkPXt0aGlzLnN0YXRlLnB1Ymxpc2hhYmxlPyBcImNoZWNrZWRcIjogXCJcIn0vPlxuICAgICAgICAgICAgICAgICAgICBQdWJsaXNoYWJsZVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICB7cHVibGlzaE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cHVibGlzaEV2ZW50LmJpbmQodGhpcyl9IGlkPVwic2F2ZUV2ZW50XCI+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNhdmVcIj48L2k+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2RlbGV0ZUV2ZW50LmJpbmQodGhpcyl9IGlkPVwiZGVsZXRlRXZlbnRcIj48aSBjbGFzc05hbWU9XCJmYXMgZmEtdHJhc2hcIj48L2k+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50O1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vU3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY29uc29sZXtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICByaWdodDogMTUwcHg7XFxufVxcblxcbi5lcnJvciB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcbi5ldmVudCB7IFxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzMzMzMzM7XFxuICAgIGJhY2tncm91bmQ6IHJnYig2NCwgNjQsIDY0KTtcXG59XFxuXFxuLmluZm8ge1xcbiAgICBjb2xvcjogeWVsbG93Z3JlZW47XFxufVxcblxcbmxhYmVsIHtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuXFxuLmV2ZW50IGlucHV0IHtcXG4gICAgbWFyZ2luLWxlZnQ6MHB4O1xcbn1cXG5cXG4uZXZlbnQgdGV4dGFyZWEge1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxufVwiLCBcIlwiXSk7XG5cbiIsImltcG9ydCBNZXNzYWdlc0NvbXBvbmVudCBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL0NvbXBvbmVudHMvTWVzc2FnZXNDb21wb25lbnRcIjtcblxuZnVuY3Rpb24gZ2V0TWVzc2FnZXMgKCkge1xuICAgIGxldCBtZXNzYWdlcyA9IFt7XG4gICAgICAgIHR5cGU6IFwiaW5mb1wiLFxuICAgICAgICB0ZXh0OiBcIiMxIElORk86IFNlbGVjdCBhbnkgZWxlbWVudCBpbiB0aGUgbGVmdCBtb3N0IHBhbmUoZWRpdG9yIHBhbmUpIHRvIHNlZSBpdHMgY29udGVudFwiXG4gICAgfSx7XG4gICAgICAgIHR5cGU6IFwiaW5mb1wiLFxuICAgICAgICB0ZXh0OiBcIiMyIElORk86IENsaWNrIG9uICdBZGQnIHRvIGFkZCBhbiBjb21wb25lbnRcIlxuICAgIH1dXG5cbiAgICByZXR1cm4gPE1lc3NhZ2VzQ29tcG9uZW50IG1lc3NhZ2VzPXttZXNzYWdlc30gLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldE1lc3NhZ2VzOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbnNvbGV7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgcmlnaHQ6IDE1MHB4O1xcbiAgICBib3R0b206IDUwcHg7XFxufVxcblxcbi5lcnJvciB7XFxuICAgIGNvbG9yOiByZWQ7XFxufVxcblxcblxcbi5pbmZvIHtcXG4gICAgY29sb3I6IHllbGxvd2dyZWVuO1xcbn1cIiwgXCJcIl0pO1xuXG4iLCIvLyBMaWJyYXJpZXMuXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuY2xhc3MgTWVzc2FnZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgIG1lc3NhZ2UgPSB0aGlzLnByb3BzLm1lc3NhZ2U7XG5cbiAgICAgICAgaWYobWVzc2FnZS50eXBlID09PSBcImVycm9yXCIgfHwgbWVzc2FnZS50eXBlPT09IFwiaW5mb1wiKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXttZXNzYWdlLnR5cGV9PlxuICAgICAgICAgICAgICAgICAgICA8Y29kZT57bWVzc2FnZS50ZXh0fTwvY29kZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlLnR5cGUgKyBcIiBpcyB1bmlkZW50aWZpZWQgbWVzc2FnZSB0eXBlIGZvciA8TWVzc2FnZXNDb21wb25lbnQvPi4gUGxlYXNlIHVzZSBlaXRoZXIgJ2Vycm9yJyBvciAnaW5mbycgb25seS4gSWYgeW91IHJlcXVpcmUgYSBkaWZmZXJlbnQgdHlwZSwgcmFpc2UgYW4gaXNzdWUsIHNlbmQgYSBQUlwiKVxuICAgICAgICAgICAgcmV0dXJuICAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25zb2xlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWVycm9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Y29kZT57XCJlcnJvciA6IHVuaWRlbnRpZmllZCBtZXNzYWdlIHR5cGUuIFBsZWFzZSB1c2UgZWl0aGVyIGVycm9yLyBpbmZvIG9ubHlcIn08L2NvZGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lc3NhZ2VDb21wb25lbnQ7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uZXJyb3Ige1xcbiAgICBjb2xvcjogcmVkO1xcbn1cXG5cXG5cXG4uaW5mbyB7XFxuICAgIGNvbG9yOiB5ZWxsb3dncmVlbjtcXG59XCIsIFwiXCJdKTtcblxuIiwiXG4gIGZ1bmN0aW9uICB1cGRhdGVFdmVudE5hbWUoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG5hbWU6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gIGZ1bmN0aW9uICB1cGRhdGVSZWR1Y2VyKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByZWR1Y2VyOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuIGZ1bmN0aW9uICAgdXBkYXRlUHVibGlzaE5hbWUoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHB1Ymxpc2hOYW1lOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICBmdW5jdGlvbiAgdXBkYXRlRXZlbnRUeXBlKGUpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHB1Ymxpc2hhYmxlOiBlLmN1cnJlbnRUYXJnZXQuY2hlY2tlZFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIG1vZHVsZS5leHBvcnRzID0ge1xuICAgICAgICB1cGRhdGVFdmVudE5hbWUsXG4gICAgICAgIHVwZGF0ZUV2ZW50VHlwZSxcbiAgICAgICAgdXBkYXRlUHVibGlzaE5hbWUsXG4gICAgICAgIHVwZGF0ZUV2ZW50VHlwZSxcbiAgICAgICAgdXBkYXRlUmVkdWNlclxuICAgIH0iLCJleHBvcnQgZnVuY3Rpb24gcHVibGlzaEV2ZW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uU2F2ZSh7XG4gICAgICAgICAgICBuYW1lOiB0aGlzLnN0YXRlLm5hbWUsXG4gICAgICAgICAgICByZWR1Y2VyOiB0aGlzLnN0YXRlLnJlZHVjZXIsXG4gICAgICAgICAgICBpbmRleDogdGhpcy5wcm9wcy5pbmRleCxcbiAgICAgICAgICAgIHB1Ymxpc2hhYmxlOiB0aGlzLnN0YXRlLnB1Ymxpc2hhYmxlLFxuICAgICAgICAgICAgcHVibGlzaE5hbWU6IHRoaXMuc3RhdGUucHVibGlzaE5hbWVcbiAgICAgICAgfSlcbiAgICB9XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVFdmVudCgpe1xuICAgICAgICB0aGlzLnByb3BzLmRlbGV0ZUV2ZW50KHRoaXMucHJvcHMuaW5kZXgpO1xuICAgIH0iLCJpbXBvcnQgTWVzc2FnZXNDb21wb25lbnQgZnJvbSBcIi4uL3V0aWxpdGllcy9Db21wb25lbnRzL01lc3NhZ2VzQ29tcG9uZW50XCI7XG5cbmZ1bmN0aW9uIGdldE1lc3NhZ2VzIChlcnJvcikge1xuXG4gICAgbGV0IG1lc3NhZ2VzID0gW3tcbiAgICAgICAgdHlwZTpcImVycm9yXCIsXG4gICAgICAgIHRleHQ6XCJFUlJPUiA6IFwiK2Vycm9yK1wiZGV2ZWxvcGVyIGxvZzogbG9vayBpbiBjb25zb2xlIHJlbGF0ZWQgdG8gZXZhbFwiXG4gICAgfV1cbiAgICByZXR1cm4gKFxuICAgICAgICA8TWVzc2FnZXNDb21wb25lbnQgbWVzc2FnZXMgPSB7bWVzc2FnZXN9Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldE1lc3NhZ2VzOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9TdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1N0eWxlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmV2ZW50cyB7XFxuICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLmVycm9yIHtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICByaWdodDogMTUwcHg7XFxufVwiLCBcIlwiXSk7XG5cbiIsIlxuICAgIGV4cG9ydCBmdW5jdGlvbiB1cGRhdGVFdmVudChldmVudCkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZS5jb21wb25lbnQpKVxuXG4gICAgICAgIC8vIEtlZXAgdGhlIGNoaWxkIGNvbXBvbmVudCBuYW1lIGFzIHRoZSBJRC4gV2lsbCBjYXVzZSBwcm9ibGVtIGluIGZ1dHVyZSBmb3IgbGlzdCByZW5kZXJpbmcgYm95LlxuICAgICAgICBpZih0aGlzLnN0YXRlLnNlbGVjdGVkVGFnLmluY2x1ZGVzKFwiY2hpbGQtY29tcG9uZW50LVwiKSl7XG4gICAgICAgICAgICBldmVudC5pZCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWRUYWcuc3BsaXQoXCJjaGlsZC1jb21wb25lbnQtXCIpWzFdXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGV2ZW50LmlkID0gdGhpcy5zdGF0ZS5zZWxlY3RlZFRhZy5zcGxpdChcIi1cIilbMV07XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWRkIFxuICAgICAgICBpZiAoZXZlbnQuaW5kZXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZWxlbWVudC5ldmVudHMucHVzaChldmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBFZGl0XG4gICAgICAgICAgICBlbGVtZW50LmV2ZW50c1tldmVudC5pbmRleF0gPSBldmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvcHMub25FdmVudHNVcGRhdGUoZWxlbWVudC5ldmVudHMpO1xuICAgIH1cblxuICAgIGV4cG9ydCBmdW5jdGlvbiBzZWxlY3RlZFRhZ0NoYW5nZWQoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlbGVjdGVkVGFnOiBlLmN1cnJlbnRUYXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBleHBvcnQgZnVuY3Rpb24gZGVsZXRlRXZlbnQoaW5kZXgpIHtcblxuICAgICAgICAvLyBHZXQgY3VycmVudCBjb21wb25lbnQuXG4gICAgICAgIGxldCBlbGVtZW50ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlLmVsZW1lbnQpKTtcblxuICAgICAgICAvLyBSZW1vdmUgdGhlIGV2ZW50IHRvIGJlIGRlbGV0ZWQuXG4gICAgICAgIGVsZW1lbnQuZXZlbnRzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgICAgLy8gVXBkYXRlIGVsZW1lbnRzIHdpdGggbmV3IGV2ZW50cy5cbiAgICAgICAgdGhpcy5wcm9wcy5vbkV2ZW50c1VwZGF0ZShlbGVtZW50LmV2ZW50cyk7XG4gICAgfVxuXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUNvbmZpZ3VyYXRpb24oY29uZmlnKXtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNvbmZpZ1VwZGF0ZShjb25maWcpO1xuICAgIH0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7wqBzYXZlQ29tcG9uZW50c1RvV2luZG93LCBnZXROZXN0ZWRDb21wb25lbnRzIH0gZnJvbSBcIi4vUnVudGltZVwiO1xuXG4vLyBXaHk/IEJlY2F1c2UgaW1wb3J0aW5nIFJlYWN0IGFzIHZhcmlhYmxlIGF0IGxpbmUjMiB3aWxsIGJlIGFsdGVydGVkIGJ5IGJhYmVsLiBLZWVwIGl0IGFzIGEgcHJvcGVydHksIGJhYmVsIHdpbGwgaWdub3JlIGl0Llxud2luZG93LlJlYWN0ID0gUmVhY3Q7XG53aW5kb3cuQ29tcG9uZW50ID0gUmVhY3QuQ29tcG9uZW50O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9kZVRyZWUoZWxlbWVudCwganN4LCBzdHlsZSwgc3RhdGUsIGV2ZW50cykge1xuICAgIFxuICAgIGxldCByZXN1bHQsIGVycm9yO1xuICAgIHRyeXtcbiAgICAgICAgbGV0IG5lc3RlZENvbXBvbmVudHMgPSBnZXROZXN0ZWRDb21wb25lbnRzKGVsZW1lbnQpO1xuICAgICAgICBpZiAobmVzdGVkQ29tcG9uZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzYXZlQ29tcG9uZW50c1RvV2luZG93KG5lc3RlZENvbXBvbmVudHMpO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCA9IGV2YWwoQmFiZWwudHJhbnNmb3JtKGpzeCwgeyBwcmVzZXRzOiBbJ3JlYWN0J10gfSkuY29kZSlcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICBlcnJvciA9IGU7XG4gICAgfVxuICAgIGZpbmFsbHl7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBlcnJvcjogZXJyb3IsXG4gICAgICAgICAgICByZXN1bHQsIHJlc3VsdFxuICAgICAgICB9O1xuICAgIH1cbn0iLCIvLyBMaWJyYXJpZXMuXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgcG9wSGlzdG9yeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvU3RvcmFnZVwiO1xuXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jbGFzcyBUb29sa2l0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGU9e1xuICAgICAgICAgICAgZXhwb3J0VHlwZTogXCJTSU1QTEVcIlxuICAgICAgICB9XG4gICAgICAgIC8vIFRPRE8sIGNsZWFudXAgYWxsIGxvY2FsIHN0b3JhZ2UgdG8gd3JpdGUgdG8gd2luZG93LlxuICAgICAgICB3aW5kb3cuRVhQT1JUX1RZUEUgPSBcIlNJTVBMRVwiO1xuICAgIH1cblxuICAgIHJlZnJlc2hUb1ByZXZpb3VzKCl7XG4gICAgICAgIHBvcEhpc3RvcnkoKTtcbiAgICB9XG5cbiAgICBvbkV4cG9ydFR5cGVDaGFuZ2VkKGUpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGV4cG9ydFR5cGU6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgICAgIC8vIFRPRE8sIGNsZWFudXAgYWxsIGxvY2FsIHN0b3JhZ2UgdG8gd3JpdGUgdG8gd2luZG93LlxuICAgICAgICB3aW5kb3cuRVhQT1JUX1RZUEUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHByZXZpZXdcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIFRvb2xraXRcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBIaXN0b3J5XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnJlZnJlc2hUb1ByZXZpb3VzLmJpbmQodGhpcyl9PkdvIGJhY2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBFeHBvcnQgQ29kZSBDb25maWd1cmF0aW9uXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PiAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkV4cG9ydFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiU0lNUExFXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5leHBvcnRUeXBlID09PSBcIlNJTVBMRVwifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRXhwb3J0VHlwZUNoYW5nZWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFjdCAtIENsYXNzIGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkV4cG9ydFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiTldCXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5leHBvcnRUeXBlID09PSBcIk5XQlwifSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkV4cG9ydFR5cGVDaGFuZ2VkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlJlYWN0IC0gSW1wb3J0YWJsZSBjb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJFeHBvcnRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlNUT1JZQk9PS1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZXhwb3J0VHlwZSA9PT0gXCJTVE9SWUJPT0tcIn0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25FeHBvcnRUeXBlQ2hhbmdlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5SZWFjdCAtIENsYXNzIHN0b3J5Ym9vayBjb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9vbGtpdDsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jb250YWluZXJ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMjZweCAtOHB4IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kOiAjMkMzMTM0O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4iLCIvLyBMaWJyYXJpZXMuXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuaW1wb3J0IER5bmFtaWNDb21wb25lbnQgZnJvbSBcIi4vRHluYW1pY0NvbXBvbmVudFwiO1xuaW1wb3J0IFZhcmlhbnRzIGZyb20gXCIuL1ZhcmlhbnRzXCI7XG5cbi8vIFV0aWxpdGllcy5cblxuaW1wb3J0IHsgcmVhZENvbXBvbmVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvU3RvcmFnZVwiO1xuXG5jbGFzcyBQcmV2aWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBjb21wb25lbnQ6IHRoaXMucHJvcHMuY29tcG9uZW50XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWZyZXNoKCApe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogcmVhZENvbXBvbmVudCh0aGlzLnN0YXRlLmNvbXBvbmVudC5uYW1lKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICAvLyBIZWxwcyB0byByZXJlbmRlciB3aGVuIGNoYW5nZXMgdG8gbWFya3VwL2V2ZW50cyBhcmUgbWFkZSB0byB0aGUgY29tcG9uZW50IGFuZCBwcmV2aWV3IHRoZW0uXG4gICAgICAgIGxldCByYW5kb21LZXkgPSB0aGlzLnByb3BzLmNvbXBvbmVudC5pZCoofn4oTWF0aC5yYW5kb20oKSoxMCkpO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHJldmlld1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgUHJldmlld1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxWYXJpYW50cyBjb21wb25lbnQ9e3RoaXMuc3RhdGUuY29tcG9uZW50fS8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHluYW1pY0NvbXBvbmVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBQcmV2aWV3XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8RHluYW1pY0NvbXBvbmVudCBrZXk9e3JhbmRvbUtleX0gY29tcG9uZW50PXt0aGlzLnN0YXRlLmNvbXBvbmVudH0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmV2aWV3OyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbnRhaW5lcntcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAyNnB4IC04cHggYmxhY2s7XFxuICAgIGJhY2tncm91bmQ6ICMyQzMxMzQ7XFxufVxcblxcbi5kcm9wUG9pbnR7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xcbn1cXG5cXG4udGFyZ2V0Q2hpbGR7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzRThDRTQ7XFxufVxcblxcbi5wcmV2aWV3IC52YXJpYW50c3tcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcXG59XFxuXFxuLnByZXZpZXcgLmR5bmFtaWNDb21wb25lbnR7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XCIsIFwiXCJdKTtcblxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcIiwgXCJcIl0pO1xuXG4iLCIvLyBMaWJyYXJpZXMuXG5cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuLy8gQ29tcG9uZW50cy5cblxuaW1wb3J0IFZhcmlhbnQgZnJvbSBcIi4vVmFyaWFudFwiO1xuXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5jbGFzcyBWYXJpYW50cyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBsZXQgY29tcG9uZW50ID0gdGhpcy5wcm9wcy5jb21wb25lbnQ7XG5cbiAgICAgICAgaWYoIGNvbXBvbmVudC5uYW1lPT1cIlwiKXtcbiAgICAgICAgICAgIHJldHVybiAoPGRpdj5ObyBjb21wb25lbnQgc2VsZWN0ZWQuIHZhcmlhbnRzIHRhYjwvZGl2PilcbiAgICAgICAgfVxuICAgICAgICBpZighY29tcG9uZW50LnZhcmlhbnRzKXtcbiAgICAgICAgICAgIHJldHVybiAoPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PkNvbXBvbmVudCBoYXMgbm8gdmFyaWFudHM8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlRvIGdlbmVyYXRlLCBpbnRlcmFjdCBpbiBwcmV2aWV3LjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHZhcmlhbnRzID0gY29tcG9uZW50LnZhcmlhbnRzLm1hcCh2YXJpYW50PT4gPFZhcmlhbnQgc3RhdGU9e0pTT04uc3RyaW5naWZ5KHZhcmlhbnQpfSBjb21wb25lbnQ9e2NvbXBvbmVudH0vPilcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFyaWFudHNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIFZhcmlhbnRcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7dmFyaWFudHN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFyaWFudHM7IiwiLy8gTGlicmFyaWVzLlxuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIENvbXBvbmVudHMuXG5pbXBvcnQgRHluYW1pY0NvbXBvbmVudCBmcm9tIFwiLi4vLi4vRHluYW1pY0NvbXBvbmVudFwiO1xuXG5cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNsYXNzIFZhcmlhbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuY29tcG9uZW50KSlcbiAgICAgICAgaWYoIGNvbXBvbmVudC5uYW1lPT1cIlwiKXtcbiAgICAgICAgICAgIHJldHVybiAoPGRpdj48L2Rpdj4pXG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50LnN0YXRlID0gdGhpcy5wcm9wcy5zdGF0ZTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFyaWFudFwiPlxuICAgICAgICAgICAgICAgIDxEeW5hbWljQ29tcG9uZW50IGNvbXBvbmVudD17Y29tcG9uZW50fS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFyaWFudDsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi52YXJpYW50e1xcbiAgICBib3JkZXI6IDFweCBkb3R0ZWQgYmxhY2s7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICBwYWRkaW5nOjIwcHg7XFxuICAgIHpvb206IC41O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cIiwgXCJcIl0pO1xuXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi52YXJpYW50cyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xcbn1cIiwgXCJcIl0pO1xuXG4iLCJpbXBvcnQge3dyaXRlRGF0YX0gZnJvbSBcIi4uL3V0aWxpdGllcy9TdG9yYWdlXCI7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUV2ZW50IChldmVudHMpIHtcbiAgICAvLyBDcmVhdGUgbmV3IHN0YXRlLlxuICAgIGxldCBuZXdFbGVtZW50cyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUpLmNvbXBvbmVudHM7XG4gICAgbGV0IHNlbGVjdGVkQ29tcG9uZW50ID0gbmV3RWxlbWVudHMuZmluZChlbGVtZW50PT5lbGVtZW50Lm5hbWU9PT10aGlzLnN0YXRlLnNlbGVjdGVkQ29tcG9uZW50Lm5hbWUpXG5cbiAgICBzZWxlY3RlZENvbXBvbmVudC5ldmVudHMgPSBldmVudHM7XG5cbiAgICAvLyBTZXQgc3RhdGUgdG8gdGhlIG5ldyBzdGF0ZS5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZWxlbWVudHM6IG5ld0VsZW1lbnRzXG4gICAgfSk7XG5cbiAgICB3cml0ZURhdGEoXCJ1aS1lZGl0b3JcIiwgbmV3RWxlbWVudHMpXG5cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ29uZmlnKGNvbmZpZyl7XG4gICAgXG4gICAgbGV0IG5ld0VsZW1lbnRzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSkuY29tcG9uZW50cztcbiAgICBcbiAgICBsZXQgcGFyZW50ID0gbmV3RWxlbWVudHMuZmluZChlbGVtZW50PT5lbGVtZW50Lm5hbWU9PT1jb25maWcucGFyZW50TmFtZSk7XG4gICAgbGV0IGNoaWxkID0gbmV3RWxlbWVudHMuZmluZChlbGVtZW50PT5lbGVtZW50Lm5hbWU9PT1jb25maWcuY2hpbGROYW1lKTtcblxuICAgIHBhcmVudC5zdGF0ZSA9IEpTT04ucGFyc2UocGFyZW50LnN0YXRlKTtcblxuICAgIGlmKHBhcmVudC5jb25maWcgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgIHBhcmVudC5jb25maWcgPSB7fTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHBhcmVudC5jb25maWcgPSBKU09OLnBhcnNlKHBhcmVudC5jb25maWcpO1xuICAgIH1cbiAgICBwYXJlbnQuY29uZmlnW2NoaWxkLm5hbWVdID0gY29uZmlnLmNvbmZpZztcbiAgICBpZihwYXJlbnQuY29uZmlnW2NoaWxkLm5hbWVdLm92ZXJyaWRlKSB7ICAgIFxuICAgICAgICBwYXJlbnQuc3RhdGVbY2hpbGQubmFtZV0gPSBbSlNPTi5wYXJzZShjaGlsZC5zdGF0ZSldO1xuICAgIH0gXG4gICAgZWxzZSB7XG4gICAgICAgIGRlbGV0ZSBwYXJlbnQuc3RhdGVbY2hpbGQubmFtZV07XG4gICAgfVxuXG5cbiAgICBwYXJlbnQuc3RhdGUgPSBKU09OLnN0cmluZ2lmeShwYXJlbnQuc3RhdGUpXG4gICAgcGFyZW50LmNvbmZpZz0gSlNPTi5zdHJpbmdpZnkocGFyZW50LmNvbmZpZylcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBlbGVtZW50czogbmV3RWxlbWVudHNcbiAgICB9KVxuXG4gICAgd3JpdGVEYXRhKFwidWktZWRpdG9yXCIsIG5ld0VsZW1lbnRzKVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlRWxlbWVudCAoZWxlbWVudCkge1xuICAgIGxldCBjb21wb25lbnRzID0gQXJyYXkuZnJvbSh0aGlzLnN0YXRlLmNvbXBvbmVudHMpO1xuICAgIFxuICAgIC8vIENoZWNrIGlmIGVsZW1lbnQgZXhpc3QuXG4gICAgbGV0IGVsZW1lbnRFeGlzdCA9IGNvbXBvbmVudHMuZmluZChjb21wb25lbnQ9PmNvbXBvbmVudC5uYW1lPT09ZWxlbWVudC5uYW1lKTtcbiAgICBsZXQgc2VsZWN0ZWRDb21wb25lbnQgPSBjb21wb25lbnRzLmZpbmQoY29tcG9uZW50PT5jb21wb25lbnQubmFtZT09PXRoaXMuc3RhdGUuc2VsZWN0ZWRDb21wb25lbnQubmFtZSk7XG4gICAgbGV0IHNlbGVjdGVkSW5kZXggPSBjb21wb25lbnRzLmZpbmRJbmRleChjb21wb25lbnQ9PmNvbXBvbmVudC5uYW1lPT09dGhpcy5zdGF0ZS5zZWxlY3RlZENvbXBvbmVudC5uYW1lKTtcbiAgICBpZihlbGVtZW50RXhpc3Qpe1xuICAgICAgICAvLyBGaW5kIHRoZSBlbGVtZW50LlxuICAgICAgICBsZXQgZWxlbWVudFVuZGVyRWRpdCA9IHNlbGVjdGVkQ29tcG9uZW50O1xuXG4gICAgICAgIC8vIE1lcmdlLlxuICAgICAgICBlbGVtZW50VW5kZXJFZGl0ID0gT2JqZWN0LmFzc2lnbihlbGVtZW50VW5kZXJFZGl0LCBlbGVtZW50KVxuXG4gICAgICAgIC8vIFB1c2ggaXQgdG8gb3JpZ2luYWwgbGlzdC5cbiAgICAgICAgY29tcG9uZW50c1tzZWxlY3RlZEluZGV4XSA9IGVsZW1lbnRVbmRlckVkaXQ7XG4gICAgfVxuXG4gICAgZWxzZSB7XG4gICAgICAgIGxldCBuZXdFbGVtZW50ID0ge1xuICAgICAgICAgICAgbmFtZTogZWxlbWVudC5uYW1lLFxuICAgICAgICAgICAgbWFya3VwOiBlbGVtZW50Lm1hcmt1cCxcbiAgICAgICAgICAgIGV2ZW50czogW10sXG4gICAgICAgICAgICBzdGF0ZTogZWxlbWVudC5zdGF0ZSB8fCBcInt9XCIsXG4gICAgICAgICAgICBzdHlsZTogZWxlbWVudC5zdHlsZSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXSxcbiAgICAgICAgICAgIGlkOiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSoxMDAwKSxcbiAgICAgICAgICAgIGNvbmZpZzpcInt9XCJcbiAgICAgICAgfTtcblxuICAgICAgICBjb21wb25lbnRzLnB1c2gobmV3RWxlbWVudCk7XG4gICAgICAgIHNlbGVjdGVkSW5kZXggPSBjb21wb25lbnRzLmxlbmd0aC0xO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBlbGVtZW50czogY29tcG9uZW50cyxcbiAgICAgICAgZWxlbWVudDoge1xuICAgICAgICAgICAgbmFtZTogZWxlbWVudC5uYW1lLFxuICAgICAgICAgICAgbWFya3VwOiBlbGVtZW50Lm1hcmt1cCxcbiAgICAgICAgICAgIHN0eWxlOiBlbGVtZW50LnN0eWxlLFxuICAgICAgICAgICAgc3RhdGU6IGVsZW1lbnQuc3RhdGUsXG4gICAgICAgICAgICBldmVudHM6IGVsZW1lbnQuZXZlbnRzIHx8IFtdXG4gICAgICAgIH0sXG4gICAgICAgIHNob3dFZGl0b3I6IGZhbHNlXG4gICAgfSk7XG5cbiAgICB3cml0ZURhdGEoXCJ1aS1lZGl0b3JcIiwgY29tcG9uZW50cylcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlU2VsZWN0ZWRDb21wb25lbnQgKGUpIHtcbiAgICBsZXQgY29tcG9uZW50TmFtZSA9IGUuY3VycmVudFRhcmdldC5pbm5lclRleHQuc3BsaXQoXCJcXG5cIilbMF07XG4gICAgLy8gRmluZCB0aGUgZWxlbWVudCBmcm9tIHN0YXRlIHRoYXQgbWF0Y2hlcyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGVsZW1lbnQuXG4gICAgbGV0IHNlbGVjdGVkQ29tcG9uZW50ID0gdGhpcy5zdGF0ZS5jb21wb25lbnRzLmZpbmQoY29tcG9uZW50PT5jb21wb25lbnQubmFtZT09PWNvbXBvbmVudE5hbWUpO1xuXG4gICAgd2luZG93LnNlbGVjdGVkY29tcG9uZW50bmFtZSA9IHNlbGVjdGVkQ29tcG9uZW50Lm5hbWU7XG4gICAgLy8gVXBkYXRlIHRoZSBzdGF0ZSB3aXRoIHNlbGVjdGVkRWxlbWVudC5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgc2VsZWN0ZWRDb21wb25lbnRcbiAgICB9KVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==