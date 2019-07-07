"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trim = trim;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

function trimArray(params) {
  return params.map(function (param) {
    return trimObject(param);
  });
}

function trimObject(params) {
  if ((0, _typeof2["default"])(params) !== 'object') {
    return params;
  }

  Object.keys(params).map(function (param) {
    var value = params[param];

    if (value && typeof value === 'string') {
      var res = value.replace(/(^\s*)|(\s*$)/g, "");
      params[param] = res;

      if (res === "") {
        delete params[param];
      }
    }

    if (value && value instanceof Array) {
      params[param] = trimArray(value);
    }
  });
  return params;
}
/**
 * 对传入的参数进行去掉空格的操作。入参可以是对象或数组
 */


function trim(params) {
  return Array.isArray(params) ? trimArray(params) : trimObject(params);
}