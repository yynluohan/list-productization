"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query = query;
exports.create = create;
exports.upload = upload;
exports.get = get;
exports.remove = remove;
exports.update = update;
exports.patch = patch;
exports.createRaw = createRaw;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _trim = require("./trim");

var _request = _interopRequireDefault(require("./request"));

var _qs = _interopRequireDefault(require("qs"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function query(_x, _x2) {
  return _query.apply(this, arguments);
}

function _query() {
  _query = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(api, params) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", get(api, params));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _query.apply(this, arguments);
}

function create(_x3, _x4) {
  return _create.apply(this, arguments);
}

function _create() {
  _create = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(api, params) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", (0, _request["default"])(api, {
              method: 'POST',
              body: JSON.stringify((0, _trim.trim)(params))
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _create.apply(this, arguments);
}

function upload(_x5, _x6) {
  return _upload.apply(this, arguments);
}

function _upload() {
  _upload = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(api, params) {
    var bodyData;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            bodyData = undefined;

            if (!(params instanceof FormData)) {
              bodyData = new FormData();
              Object.keys(params).forEach(function (key) {
                bodyData.append(key, params[key]);
              });
            } else {
              bodyData = params;
            }

            return _context3.abrupt("return", (0, _request["default"])(api, {
              method: 'POST',
              headers: {
                // 通过 fetch 上传文件的时候不要指定 Content Type
                // 原因参考 https://stackoverflow.com/questions/17415084/multipart-data-post-using-python-requests-no-multipart-boundary-was-found/17438575
                'Content-Type': false
              },
              body: bodyData
            }));

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _upload.apply(this, arguments);
}

function get(_x7) {
  return _get.apply(this, arguments);
}

function _get() {
  _get = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(api) {
    var params,
        url,
        _args4 = arguments;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            params = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
            params._t = new Date().getTime();
            params = _qs["default"].stringify((0, _trim.trim)(params), {
              indices: false,
              arrayFormat: 'repeat'
            });

            if (api.indexOf('?') > -1) {
              url = "".concat(api, "&").concat(params);
            } else {
              url = "".concat(api, "?").concat(params);
            }

            return _context4.abrupt("return", (0, _request["default"])(url, {
              method: 'GET'
            }));

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _get.apply(this, arguments);
}

function remove(_x8, _x9) {
  return _remove.apply(this, arguments);
}

function _remove() {
  _remove = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee5(api, params) {
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", (0, _request["default"])("".concat(api), {
              method: 'DELETE',
              body: JSON.stringify((0, _trim.trim)(params))
            }));

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _remove.apply(this, arguments);
}

function update(_x10, _x11) {
  return _update.apply(this, arguments);
}

function _update() {
  _update = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee6(api, params) {
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            return _context6.abrupt("return", (0, _request["default"])("".concat(api), {
              method: 'PUT',
              body: JSON.stringify((0, _trim.trim)(params))
            }));

          case 1:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _update.apply(this, arguments);
}

function patch(_x12, _x13) {
  return _patch.apply(this, arguments);
}

function _patch() {
  _patch = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee7(api, params) {
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            return _context7.abrupt("return", (0, _request["default"])("".concat(api), {
              method: 'PATCH',
              body: JSON.stringify((0, _trim.trim)(params))
            }));

          case 1:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _patch.apply(this, arguments);
}

function createRaw(_x14, _x15) {
  return _createRaw.apply(this, arguments);
}

function _createRaw() {
  _createRaw = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee8(api, params) {
    var headers,
        _args8 = arguments;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            headers = _args8.length > 2 && _args8[2] !== undefined ? _args8[2] : {};
            return _context8.abrupt("return", (0, _request["default"])("".concat(api), {
              method: 'POST',
              body: params,
              headers: _objectSpread({
                'Content-Type': 'text/plain'
              }, headers)
            }));

          case 2:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _createRaw.apply(this, arguments);
}