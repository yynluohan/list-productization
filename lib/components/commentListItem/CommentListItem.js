"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _services = require("../../utils/services");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }

var CommentListItem =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(CommentListItem, _React$Component);

  function CommentListItem() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, CommentListItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(CommentListItem)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onDelete", function (value) {
      if (_this.props.id) {
        _this.props.onDelete(_this.props.id);
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(CommentListItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          icon = _this$props.icon,
          name = _this$props.name,
          commentName = _this$props.commentName,
          content = _this$props.content,
          subtitle = _this$props.subtitle,
          isDeleteAllow = _this$props.isDeleteAllow;

      var style = _objectSpread({
        display: 'flex',
        backgroundColor: '#fff',
        padding: '0.7em',
        borderBottom: '1px solid #f2f2f2'
      }, this.props.style);

      var iconStyle = _objectSpread({
        width: '50px',
        height: '50px',
        borderRadius: '50%'
      }, this.props.iconStyle);

      var nameStyle = _objectSpread({
        color: '#000'
      }, this.props.nameStyle);

      var commentNameStyle = _objectSpread({
        color: 'rgba(166, 166, 166, 1)'
      }, this.props.commentNameStyle);

      var contentStyle = _objectSpread({
        wordWrap: 'break-word',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        lineClamp: '2',
        width: '100%'
      }, this.props.contentStyle);

      var itemContentFirst = _objectSpread({
        wordWrap: 'break-word',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        lineClamp: '2'
      }, this.props.itemContentFirst);

      var isDeleteAllowStyle = _objectSpread({
        color: 'rgb(128, 128, 128)'
      }, this.props.isDeleteAllowStyle);

      var sectionStyle = _objectSpread({
        marginLeft: '0.7em',
        width: 'calc(100% - 50px - 0.7em)'
      }, this.props.sectionStyle);

      var subtitleStyle = _objectSpread({
        margin: '5px 0'
      }, this.props.subtitleStyle);

      return _react["default"].createElement("div", {
        style: style
      }, icon ? _react["default"].createElement("img", {
        src: icon,
        style: iconStyle
      }) : '', _react["default"].createElement("div", {
        style: sectionStyle
      }, _react["default"].createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between'
        }
      }, _react["default"].createElement("span", {
        style: nameStyle
      }, name), isDeleteAllow ? _react["default"].createElement("a", {
        style: isDeleteAllowStyle,
        onClick: function onClick() {
          return _this2.onDelete();
        }
      }, "\u5220\u9664") : ''), subtitle ? _react["default"].createElement("div", {
        style: subtitleStyle
      }, subtitle) : '', commentName ? _react["default"].createElement("div", {
        style: itemContentFirst
      }, "\u56DE\u590D ", _react["default"].createElement("span", {
        style: commentNameStyle
      }, commentName), " : ", content) : _react["default"].createElement("div", {
        style: contentStyle
      }, content)));
    }
  }]);
  return CommentListItem;
}(_react["default"].Component);

exports["default"] = CommentListItem;