"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;
exports.set = set;
exports.getEndpoint = getEndpoint;
exports.setEndpoint = setEndpoint;
var endpoint = '';
/**
 * //@depreacted, use getEndpoint instead
 */

function get() {
  if (endpoint !== '') {
    return endpoint;
  }

  return window.MC && window.MC.HOST !== '' ? window.MC.HOST : '';
} //@depreacted, use setEndpoint instead


function set(val) {
  endpoint = val;
}
/**
 * 返回系统定义的API端点.
 */


function getEndpoint() {
  if (endpoint !== '') {
    return endpoint;
  }

  return window.MC && window.MC.HOST !== '' ? window.MC.HOST : '';
}

function setEndpoint(val) {
  endpoint = val;
}