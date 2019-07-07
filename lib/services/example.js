"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.query = query;

var _request = _interopRequireDefault(require("../utils/request"));

function query() {
  return (0, _request["default"])('/api/users');
}