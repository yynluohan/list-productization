"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClientHeight = getClientHeight;
exports.getScrollTop = getScrollTop;
exports.getScrollHeight = getScrollHeight;

//获取窗口可视化高度
function getClientHeight() {
  var clientHeight = 0;

  if (document.body.clientHeight && document.documentElement.clientHeight) {
    clientHeight = document.body.clientHeight < document.documentElement.clientHeight ? document.body.clientHeight : document.documentElement.clientHeight;
  } else {
    clientHeight = document.body.clientHeight > document.documentElement.clientHeight ? document.body.clientHeight : document.documentElement.clientHeight;
  }

  return clientHeight;
}

; //获取滚动条高度

function getScrollTop() {
  var scrollTop = 0;

  if (document.documentElement && document.documentElement.scrollTop) {
    scrollTop = document.documentElement.scrollTop;
  } else if (document.body) {
    scrollTop = document.body.scrollTop;
  }

  return scrollTop;
}

; //获取文档内容实际高度

function getScrollHeight() {
  return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
}

;