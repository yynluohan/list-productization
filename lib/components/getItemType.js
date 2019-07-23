"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itemMap = itemMap;

var _index = require("../index");

function itemMap(item) {
  var obj = {
    'ActionFlowItem': _index.ActionFlowItem,
    'ContentListItem': _index.ContentListItem,
    'LineContentItem': _index.LineContentItem,
    'OrderListItem': _index.OrderListItem,
    'TitledListItem': _index.TitledListItem,
    'BlogListItem': _index.BlogListItem,
    'CommentListItem': _index.CommentListItem,
    'FlowItem': _index.FlowItem,
    'OrderCartListItem': _index.OrderCartListItem,
    'AssignListItem': _index.AssignListItem
  };
  return obj[item];
}