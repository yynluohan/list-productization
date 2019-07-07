"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _router = require("dva/router");

var _IndexPage = _interopRequireDefault(require("./routes/IndexPage"));

function RouterConfig(_ref) {
  var history = _ref.history;
  return _react["default"].createElement(_router.Router, {
    history: history
  }, _react["default"].createElement(_router.Switch, null, _react["default"].createElement(_router.Route, {
    path: "/",
    exact: true,
    component: _IndexPage["default"]
  })));
}

var _default = RouterConfig;
exports["default"] = _default;