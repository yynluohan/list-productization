"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = request;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _trim = require("./trim");

var _endpoint = require("./endpoint");

var _qs = _interopRequireDefault(require("qs"));

var _fetch = _interopRequireDefault(require("dva/fetch"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var isLogs = false;

function checkServerError(response) {
  // 400 错误依旧格式化成为 json
  if (response.status >= 200 && response.status < 500 && response.status !== 401) {
    return response;
  }

  var error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseJSON(response) {
  if (response.headers.get('Content-Type').indexOf('application/json') > -1) {
    return response.json().then(function (data) {
      return {
        responseJSON: data,
        url: response.url,
        response: response
      };
    });
    ;
  }

  return response.blob(); // const file = new Blob(
  //   [response.body],
  //   { type: 'application/pdf' });
  // const fileURL = URL.createObjectURL(file);
  // return fileURL;
}

function checkStatus(_ref) {
  var _ref$responseJSON = _ref.responseJSON,
      responseJSON = _ref$responseJSON === void 0 ? {} : _ref$responseJSON,
      response = _ref.response,
      url = _ref.url;

  if (responseJSON.code !== undefined || responseJSON.status_code !== undefined) {
    return responseJSON;
  }

  var error = new Error(responseJSON.code);
  error.message = responseJSON.message;
  error.code = responseJSON.code || responseJSON.status_code;
  error.url = url;
  throw error;
}
/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */


function request(url, options) {
  var opts = _objectSpread({}, options, {
    'mode': 'cors'
  }); // 默认 发送 json 格式。


  opts.headers = _objectSpread({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': "Bearer " + localStorage.getItem('token')
  }, opts.headers);

  if (opts.headers['Content-Type'] === false) {
    // 在上传文件的时候需要删掉，由浏览器自己设置，避免 boundary 的问题
    delete opts.headers['Content-Type'];
  } //console.log(opts);


  var finalUrl = (0, _endpoint.get)() + url;
  return (0, _fetch["default"])(finalUrl, opts).then(checkServerError).then(parseJSON).then(checkStatus);
}