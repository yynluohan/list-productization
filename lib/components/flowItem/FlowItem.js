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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }

var FlowItem =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(FlowItem, _React$Component);

  function FlowItem() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, FlowItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(FlowItem)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onClick", function (path) {
      if (path) {
        window.location.href = "#".concat(path);
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(FlowItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          icon = _this$props.icon,
          title = _this$props.title,
          path = _this$props.path;

      var style = _objectSpread({
        display: 'flex',
        alignContent: 'space-between',
        aligItems: 'center',
        padding: '0.8em 0',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #f2f2f2'
      }, this.props.style);

      var iconStyle = _objectSpread({
        width: '25px',
        height: '25px',
        marginLeft: '0.8em'
      }, this.props.iconStyle);

      var titleStyle = _objectSpread({
        flex: '1',
        fontSize: '1em',
        color: '#000',
        marginLeft: '0.8em'
      }, this.props.titleStyle);

      var arrowStyle = _objectSpread({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '0.3em',
        paddingRight: '0.9em'
      }, this.props.arrowStyle);

      return _react["default"].createElement("div", {
        style: style,
        onClick: function onClick() {
          return _this2.onClick(path);
        }
      }, icon ? _react["default"].createElement("img", {
        src: icon,
        style: iconStyle
      }) : '', title ? _react["default"].createElement("div", {
        style: titleStyle
      }, title) : '', _react["default"].createElement("div", {
        style: arrowStyle
      }, ">"));
    }
  }]);
  return FlowItem;
}(_react["default"].Component);

exports["default"] = FlowItem;