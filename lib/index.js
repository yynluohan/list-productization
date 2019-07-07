"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ScalableList", {
  enumerable: true,
  get: function get() {
    return _ScalableList["default"];
  }
});
Object.defineProperty(exports, "LineContentItem", {
  enumerable: true,
  get: function get() {
    return _LineContentItem["default"];
  }
});
Object.defineProperty(exports, "ContentListItem", {
  enumerable: true,
  get: function get() {
    return _ContentListItem["default"];
  }
});
Object.defineProperty(exports, "BlogListItem", {
  enumerable: true,
  get: function get() {
    return _BlogListItem["default"];
  }
});
Object.defineProperty(exports, "FlowItem", {
  enumerable: true,
  get: function get() {
    return _FlowItem["default"];
  }
});
Object.defineProperty(exports, "CommentListItem", {
  enumerable: true,
  get: function get() {
    return _CommentListItem["default"];
  }
});
Object.defineProperty(exports, "OrderListItem", {
  enumerable: true,
  get: function get() {
    return _OrderListItem["default"];
  }
});
Object.defineProperty(exports, "TitledListItem", {
  enumerable: true,
  get: function get() {
    return _TitledListItem["default"];
  }
});

var _dva = _interopRequireDefault(require("dva"));

require("./index.css");

var _ScalableList = _interopRequireDefault(require("./components/scalableList/ScalableList"));

var _LineContentItem = _interopRequireDefault(require("./components/lineContentItem/LineContentItem"));

var _ContentListItem = _interopRequireDefault(require("./components/contentListItem/ContentListItem"));

var _BlogListItem = _interopRequireDefault(require("./components/blogListItem/BlogListItem"));

var _FlowItem = _interopRequireDefault(require("./components/flowItem/FlowItem"));

var _CommentListItem = _interopRequireDefault(require("./components/commentListItem/CommentListItem"));

var _OrderListItem = _interopRequireDefault(require("./components/orderListItem/OrderListItem"));

var _TitledListItem = _interopRequireDefault(require("./components/titledListItem/TitledListItem"));

// 1. Initialize
var app = (0, _dva["default"])(); // 2. Plugins
// app.use({});
// 3. Model

app.model(require("./models/example")["default"]); // 4. Router

app.router(require("./router")["default"]); // 5. Start

app.start('#root');