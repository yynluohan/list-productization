"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _services = require("../utils/services");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _default = {
  namespace: 'example',
  state: {
    name: '这个一个模版'
  },
  subscriptions: {
    setup: function setup(_ref) {
      var dispatch = _ref.dispatch,
          history = _ref.history;
      // eslint-disable-line
      history.listen(function (location) {
        if (location.pathname === '/') {
          dispatch({
            type: 'fetch'
          });
        }
      });
    }
  },
  effects: {
    fetch:
    /*#__PURE__*/
    _regenerator["default"].mark(function fetch(_ref2, _ref3) {
      var payload, call, put;
      return _regenerator["default"].wrap(function fetch$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              payload = _ref2.payload;
              call = _ref3.call, put = _ref3.put;

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, fetch);
    })
  },
  reducers: {
    save: function save(state, action) {
      return _objectSpread({}, state, {}, action.payload);
    }
  }
};
exports["default"] = _default;