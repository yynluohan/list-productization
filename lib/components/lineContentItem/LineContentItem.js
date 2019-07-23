"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var LineContentItem =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(LineContentItem, _React$Component);

  function LineContentItem() {
    (0, _classCallCheck2["default"])(this, LineContentItem);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(LineContentItem).apply(this, arguments));
  }

  (0, _createClass2["default"])(LineContentItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          icon = _this$props.icon,
          title = _this$props.title,
          content = _this$props.content;

      var style = _objectSpread({
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.8em 0.5em',
        fontSize: '14px',
        borderBottom: '1px solid #f2f2f2'
      }, this.props.style);

      var leftStyle = {
        display: ' flex',
        alignItems: 'center'
      };

      var iconStyle = _objectSpread({
        width: '48px',
        height: '48px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '50%',
        marginRight: '1em'
      }, this.props.iconStyle);

      var titleStyle = _objectSpread({}, this.props.titleStyle);

      var contentStyle = _objectSpread({
        color: '#A5ABB0'
      }, this.props.contentStyle);

      return _react["default"].createElement("div", {
        style: style
      }, _react["default"].createElement("div", {
        style: leftStyle
      }, icon ? _react["default"].createElement("div", {
        style: _objectSpread({
          backgroundImage: "url(".concat(icon, ")")
        }, iconStyle)
      }) : '', title ? _react["default"].createElement("div", {
        style: titleStyle
      }, title) : ''), content ? _react["default"].createElement("div", {
        style: contentStyle
      }, content) : '');
    }
  }]);
  return LineContentItem;
}(_react["default"].Component);

exports["default"] = LineContentItem;