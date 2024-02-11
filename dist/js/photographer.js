(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Photographer = _interopRequireDefault(require("../models/Photographer"));
var _MediaFactory = _interopRequireDefault(require("../factories/MediaFactory"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classStaticPrivateMethodGet(receiver, classConstructor, method) { _classCheckPrivateStaticAccess(receiver, classConstructor); return method; }
function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }
var Api = exports["default"] = /*#__PURE__*/function () {
  function Api() {
    _classCallCheck(this, Api);
  }
  _createClass(Api, null, [{
    key: "getPhotographersAsync",
    value: function () {
      var _getPhotographersAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var data;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _classStaticPrivateMethodGet(this, Api, _readData).call(this);
            case 2:
              data = _context.sent;
              return _context.abrupt("return", data.photographers.map(function (photographer) {
                return new _Photographer["default"](photographer);
              }));
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function getPhotographersAsync() {
        return _getPhotographersAsync.apply(this, arguments);
      }
      return getPhotographersAsync;
    }()
  }, {
    key: "getPhotographerByIdAsync",
    value: function () {
      var _getPhotographerByIdAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(id) {
        var photographers, photographer;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.getPhotographersAsync();
            case 2:
              photographers = _context2.sent;
              photographer = photographers.find(function (element) {
                return element.id === +id;
              });
              return _context2.abrupt("return", new _Photographer["default"](photographer));
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function getPhotographerByIdAsync(_x) {
        return _getPhotographerByIdAsync.apply(this, arguments);
      }
      return getPhotographerByIdAsync;
    }()
  }, {
    key: "getPhotographerMediaListAsync",
    value: function () {
      var _getPhotographerMediaListAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(id) {
        var data, mediaList;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _classStaticPrivateMethodGet(this, Api, _readData).call(this);
            case 2:
              data = _context3.sent;
              mediaList = data.media.filter(function (media) {
                return media.photographerId === +id;
              }).map(function (media) {
                return _MediaFactory["default"].getPhotograptherMedia(id, media);
              });
              return _context3.abrupt("return", mediaList);
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function getPhotographerMediaListAsync(_x2) {
        return _getPhotographerMediaListAsync.apply(this, arguments);
      }
      return getPhotographerMediaListAsync;
    }() // Private function to read data from json file.
  }]);
  return Api;
}();
function _readData() {
  return _readData3.apply(this, arguments);
}
function _readData3() {
  _readData3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var response, data;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return fetch("data/photographers.json");
        case 2:
          response = _context4.sent;
          _context4.next = 5;
          return response.json();
        case 5:
          data = _context4.sent;
          // eslint-disable-next-line no-console
          console.log(data);
          return _context4.abrupt("return", data);
        case 8:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _readData3.apply(this, arguments);
}

},{"../factories/MediaFactory":2,"../models/Photographer":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Image = _interopRequireDefault(require("../models/Image"));
var _Video = _interopRequireDefault(require("../models/Video"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var MediaFactory = exports["default"] = /*#__PURE__*/function () {
  function MediaFactory() {
    _classCallCheck(this, MediaFactory);
  }
  _createClass(MediaFactory, null, [{
    key: "getPhotograptherPortrait",
    value: function getPhotograptherPortrait(photographerId, name, portraitName) {
      var src = "assets/photographers/".concat(photographerId, "/").concat(portraitName);
      return new _Image["default"](src, name);
    }
  }, {
    key: "getPhotograptherMedia",
    value: function getPhotograptherMedia(photographerId, media) {
      var baseMediaPath = "assets/photographers/".concat(photographerId, "/");
      if (media.image) {
        var src = baseMediaPath + media.image;
        return new _Image["default"](src, media.title, media);
      }
      if (media.video) {
        var _src = baseMediaPath + media.video;
        return new _Video["default"](_src, "video/mp4", media);
      }
      throw new Error("Invalid media");
    }
  }]);
  return MediaFactory;
}();

},{"../models/Image":3,"../models/Video":6}],3:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Media2 = _interopRequireDefault(require("./Media"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var Image = exports["default"] = /*#__PURE__*/function (_Media) {
  _inherits(Image, _Media);
  function Image(src, alt, data) {
    var _this;
    _classCallCheck(this, Image);
    _this = _callSuper(this, Image, [data]);
    _this.src = src;
    _this.alt = alt;
    return _this;
  }
  _createClass(Image, [{
    key: "getHtmlDOM",
    value: function getHtmlDOM(classes) {
      var img = document.createElement("img");
      img.src = this.src;
      img.alt = this.alt;
      classes === null || classes === void 0 || classes.forEach(function (className) {
        img.classList.add(className);
      });
      return img;
    }
  }]);
  return Image;
}(_Media2["default"]);

},{"./Media":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Media = exports["default"] = /*#__PURE__*/function () {
  function Media(data) {
    _classCallCheck(this, Media);
    if (data) {
      this.id = data.id;
      this.title = data.title;
      this.likes = data.likes;
      this.date = new Date(data.date);
      this.price = data.price;
    }
  }
  _createClass(Media, [{
    key: "getMediaListItemDOM",
    value: function getMediaListItemDOM() {
      if (!this.id) {
        throw new Error("No data");
      }
      var mediaElement = this.getHtmlDOM();
      mediaElement.classList.add("photograph-photos__media");
      var mediaWrapper = document.createElement("button");
      mediaWrapper.classList.add("photograph-photos__media-wrapper");
      mediaWrapper.appendChild(mediaElement);
      var title = document.createElement("div");
      title.classList.add("photograph-photos__title");
      title.setAttribute("aria-hidden", true);
      title.textContent = this.title;
      var likeCount = document.createElement("div");
      likeCount.textContent = this.likes;
      likeCount.classList.add("photograph-photos__like-count");
      var likeImg = document.createElement("img");
      likeImg.setAttribute("src", "assets/images/favorite.png");
      likeImg.classList.add("photograph-photos__like-media");
      var likeBtn = document.createElement("button");
      likeBtn.classList.add("photograph-photos__like-btn");
      likeBtn.appendChild(likeImg);
      var likes = document.createElement("div");
      likes.classList.add("photograph-photos__likes");
      likes.appendChild(likeCount);
      likes.appendChild(likeBtn);
      var wrapper = document.createElement("div");
      wrapper.classList.add("photograph-photos__wrapper");
      wrapper.appendChild(title);
      wrapper.appendChild(likes);
      var li = document.createElement("li");
      li.classList.add("photograph-photos__item");
      li.appendChild(mediaWrapper);
      li.appendChild(wrapper);
      return li;
    }
  }]);
  return Media;
}();

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _MediaFactory = _interopRequireDefault(require("../factories/MediaFactory"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Photographer = exports["default"] = /*#__PURE__*/function () {
  function Photographer(data) {
    _classCallCheck(this, Photographer);
    this.id = data.id;
    this.name = data.name;
    this.portrait = data.portrait;
    this.city = data.city;
    this.country = data.country;
    this.tagline = data.tagline;
    this.price = data.price;
  }
  _createClass(Photographer, [{
    key: "getUserCardDOM",
    value: function getUserCardDOM() {
      var article = document.createElement("article");
      var img = _MediaFactory["default"].getPhotograptherPortrait(this.id, this.name, this.portrait).getHtmlDOM();
      var h2 = document.createElement("h2");
      h2.setAttribute("aria-hidden", true);
      h2.textContent = this.name;
      var locationP = document.createElement("p");
      locationP.textContent = "".concat(this.city, ", ").concat(this.country);
      locationP.classList.add("photographer__location");
      var tagP = document.createElement("p");
      tagP.textContent = this.tagline;
      tagP.classList.add("photographer__tag");
      var priceP = document.createElement("p");
      priceP.textContent = "".concat(this.price, "\u20AC/jour");
      priceP.classList.add("photographer__price");
      var link = document.createElement("a");
      link.setAttribute("href", "photographer.html?id=".concat(this.id));
      link.classList.add("photographer__link");
      link.appendChild(img);
      link.appendChild(h2);
      article.appendChild(link);
      article.appendChild(locationP);
      article.appendChild(tagP);
      article.appendChild(priceP);
      return article;
    }
  }]);
  return Photographer;
}();

},{"../factories/MediaFactory":2}],6:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Media2 = _interopRequireDefault(require("./Media"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
var Video = exports["default"] = /*#__PURE__*/function (_Media) {
  _inherits(Video, _Media);
  function Video(src, type) {
    var _this;
    var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
    _classCallCheck(this, Video);
    _this = _callSuper(this, Video, [data]);
    _this.src = src;
    _this.type = type;
    return _this;
  }
  _createClass(Video, [{
    key: "getHtmlDOM",
    value: function getHtmlDOM(classes) {
      var video = document.createElement("video");
      var source = document.createElement("source");
      video.controls = true;
      source.src = this.src;
      source.type = this.type;
      classes === null || classes === void 0 || classes.forEach(function (className) {
        video.classList.add(className);
      });
      video.appendChild(source);
      return video;
    }
  }]);
  return Video;
}(_Media2["default"]);

},{"./Media":4}],7:[function(require,module,exports){
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _MediaFactory = _interopRequireDefault(require("../factories/MediaFactory"));
var _api = _interopRequireDefault(require("../api/api"));
var _gallery = require("../utils/gallery");
var _contactForm = require("../utils/contactForm");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; } /* eslint-disable no-param-reassign */
var likedMediaIds = new Set();
var displayPhotographer = function displayPhotographer(photographer) {
  var name = document.querySelector(".photograph-header__name");
  var location = document.querySelector(".photograph-header__location");
  var tag = document.querySelector(".photograph-header__tag");
  var img = document.querySelector(".photograph-header__img");
  var portraitImg = _MediaFactory["default"].getPhotograptherPortrait(photographer.id, photographer.name, photographer.portrait);
  name.textContent = photographer.name;
  location.textContent = "".concat(photographer.city, ", ").concat(photographer.country);
  tag.textContent = photographer.tagline;
  img.src = portraitImg.src;
  img.alt = portraitImg.alt;
};
var displayMediaByFilter = function displayMediaByFilter(mediaList, filterValue) {
  var list = document.querySelector(".photograph-photos");
  list.innerHTML = "";
  if (filterValue === "popular") {
    mediaList.sort(function (a, b) {
      return b.likes - a.likes;
    });
  } else if (filterValue === "date") {
    mediaList.sort(function (a, b) {
      return a.date - b.date;
    });
  } else if (filterValue === "title") {
    mediaList.sort(function (a, b) {
      return a.title.localeCompare(b.title);
    });
  }
  mediaList.forEach(function (media) {
    var listItem = media.getMediaListItemDOM();
    var likeBtn = listItem.querySelector(".photograph-photos__like-btn");
    var likeImg = listItem.querySelector(".photograph-photos__like-media");
    var count = listItem.querySelector(".photograph-photos__like-count");
    if (likedMediaIds.has(media.id)) {
      likeImg.classList.add("photograph-photos__like-media_liked");
    } else {
      likeImg.classList.remove("photograph-photos__like-media_liked");
    }
    likeBtn.addEventListener("click", function () {
      if (likedMediaIds.has(media.id)) {
        likedMediaIds["delete"](media.id);
        media.likes -= 1;
      } else {
        likedMediaIds.add(media.id);
        media.likes += 1;
      }
      likeImg.classList.toggle("photograph-photos__like-media_liked");
      count.textContent = media.likes;
    });
    list.appendChild(listItem);
  });
  (0, _gallery.initGallery)();
};
var displayMediaList = function displayMediaList(mediaList) {
  var dropdown = document.querySelector(".photograph-filters__dropdown");
  displayMediaByFilter(mediaList, dropdown.value);
  dropdown.addEventListener("change", function () {
    displayMediaByFilter(mediaList, dropdown.value);
  });
};
var initKeyboard = function initKeyboard() {
  document.addEventListener("keydown", function (event) {
    (0, _gallery.galleryHandleKeyboardEvent)(event);
  });
};
var initContactForm = function initContactForm() {
  var openBtn = document.querySelector(".photograph-header__btn");
  var closeBtn = document.querySelector(".contact-modal__close");
  var form = document.querySelector(".contact-modal__form");
  openBtn.addEventListener("click", _contactForm.displayModal);
  closeBtn.addEventListener("click", _contactForm.closeModal);
  form.addEventListener("submit", _contactForm.submitForm);
};
var init = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var photographerId, photographer, mediaList;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          // eslint-disable-next-line no-restricted-globals
          photographerId = new URL(location.href).searchParams.get("id");
          _context.next = 3;
          return _api["default"].getPhotographerByIdAsync(photographerId);
        case 3:
          photographer = _context.sent;
          _context.next = 6;
          return _api["default"].getPhotographerMediaListAsync(photographerId);
        case 6:
          mediaList = _context.sent;
          displayPhotographer(photographer);
          displayMediaList(mediaList);
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function init() {
    return _ref.apply(this, arguments);
  };
}();
init();
initKeyboard();
initContactForm();

},{"../api/api":1,"../factories/MediaFactory":2,"../utils/contactForm":8,"../utils/gallery":9}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.submitForm = exports.displayModal = exports.closeModal = void 0;
/* eslint-disable no-console */
var displayModal = exports.displayModal = function displayModal() {
  var photographName = document.querySelector(".photograph-header__name").textContent;
  var modal = document.querySelector(".contact-modal");
  var header = modal.querySelector("h2");
  var name = modal.querySelector(".contact-modal__name");
  name.textContent = photographName;
  modal.style.display = "block";
  header.focus();
};
var closeModal = exports.closeModal = function closeModal() {
  var btn = document.querySelector(".photograph-header__btn");
  var modal = document.querySelector(".contact-modal");
  modal.style.display = "none";
  btn.focus();
};
var submitForm = exports.submitForm = function submitForm(e) {
  e.preventDefault();
  var name = document.querySelector("#name");
  var surname = document.querySelector("#surname");
  var email = document.querySelector("#email");
  var message = document.querySelector("#message");
  var model = {
    name: name.value,
    surname: surname.value,
    email: email.value,
    message: message.value
  };
  console.log(model);
  closeModal();
};

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initGallery = exports.galleryHandleKeyboardEvent = void 0;
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
var selectedMedia;
var applyMediaTitle = function applyMediaTitle(mediaElement) {
  var galleryTitle = document.querySelector(".photograpth-gallery__title");
  var title = mediaElement.parentElement.querySelector(".photograph-photos__wrapper .photograph-photos__title").textContent;
  galleryTitle.textContent = title;
};
var applyMediaContent = function applyMediaContent(mediaElement) {
  var _wrapper$querySelecto;
  var wrapper = document.querySelector(".photograpth-gallery__wrapper");
  var media = mediaElement.querySelector(".photograph-photos__media");
  (_wrapper$querySelecto = wrapper.querySelector(".photograpth-gallery__media")) === null || _wrapper$querySelecto === void 0 || _wrapper$querySelecto.remove();
  var galleryMedia;
  if (media.src) {
    galleryMedia = document.createElement("img");
    galleryMedia.src = media.src;
  } else {
    var source = media.querySelector("source");
    galleryMedia = document.createElement("video");
    galleryMedia.controls = true;
    var sourceElement = document.createElement("source");
    sourceElement.src = source.src;
    sourceElement.type = "video/mp4";
    galleryMedia.appendChild(sourceElement);
  }
  galleryMedia.classList.add("photograpth-gallery__media");
  wrapper.insertBefore(galleryMedia, wrapper.firstChild);
};
var applyMediaToGallery = function applyMediaToGallery(mediaElement) {
  applyMediaTitle(mediaElement);
  applyMediaContent(mediaElement);
};
var handlePrevious = function handlePrevious(mediaList) {
  var index = selectedMedia.index === 0 ? mediaList.length - 1 : selectedMedia.index - 1;
  var mediaElement = mediaList[index];
  applyMediaToGallery(mediaElement);
  selectedMedia = mediaElement;
};
var handleNext = function handleNext(mediaList) {
  var index = mediaList.length - 1 === selectedMedia.index ? 0 : selectedMedia.index + 1;
  var mediaElement = mediaList[index];
  applyMediaToGallery(mediaElement);
  selectedMedia = mediaElement;
};
var galleryHandleArrows = function galleryHandleArrows(gallery, event) {
  var mediaList = document.querySelectorAll(".photograph-photos__media-wrapper");
  if (event.code === "ArrowRight") {
    handleNext(mediaList, selectedMedia);
  } else if (event.code === "ArrowLeft") {
    handlePrevious(mediaList, selectedMedia);
  }
};
var galleryHandleClose = function galleryHandleClose(gallery, event) {
  if (event.code === "Escape") {
    gallery.style.display = "none";
    selectedMedia.focus();
  }
};
var initGallery = exports.initGallery = function initGallery() {
  var mediaList = document.querySelectorAll(".photograph-photos__media-wrapper");
  var gallery = document.querySelector(".photograpth-gallery");
  var galleryClose = document.querySelector(".photograpth-gallery__close");
  var galleryPrevious = document.querySelector(".photograpth-gallery__button_previous");
  var galleryNext = document.querySelector(".photograpth-gallery__button_next");
  galleryClose.addEventListener("click", function () {
    return gallery.style.display = "none";
  });
  galleryPrevious.addEventListener("click", function () {
    return handlePrevious(mediaList);
  });
  galleryNext.addEventListener("click", function () {
    return handleNext(mediaList);
  });
  var openGalleryWithSelectedElement = function openGalleryWithSelectedElement(mediaElement) {
    selectedMedia = mediaElement;
    gallery.style.display = "flex";
    applyMediaToGallery(mediaElement);
  };
  mediaList.forEach(function (mediaElement, index) {
    mediaElement.index = index;
    mediaElement.addEventListener("click", function (e) {
      e.preventDefault();
      openGalleryWithSelectedElement(mediaElement);
    });
    mediaElement.addEventListener("keypress", function (e) {
      if (e.code === "Enter") {
        e.preventDefault();
        openGalleryWithSelectedElement(mediaElement);
      }
    });
  });
};
var galleryHandleKeyboardEvent = exports.galleryHandleKeyboardEvent = function galleryHandleKeyboardEvent(event) {
  var gallery = document.querySelector(".photograpth-gallery");
  if (gallery.style.display !== "flex") {
    return;
  }
  galleryHandleArrows(gallery, event);
  galleryHandleClose(gallery, event);
};

},{}]},{},[7]);
