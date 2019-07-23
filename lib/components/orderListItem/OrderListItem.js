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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var OrderListItem =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(OrderListItem, _React$Component);

  function OrderListItem() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, OrderListItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(OrderListItem)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onClick", function (value) {
      console.log('22');

      if (value) {
        window.location.href = "#".concat(value);
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(OrderListItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          icon = _this$props.icon,
          title = _this$props.title,
          subTitle = _this$props.subTitle,
          orderNumber = _this$props.orderNumber,
          type = _this$props.type,
          timestamp = _this$props.timestamp,
          action = _this$props.action,
          place = _this$props.place,
          distance = _this$props.distance;
      var style = {
        backgroundColor: '#fff',
        marginBottom: '5px',
        padding: '0.7em'
      };

      var headerStyle = _objectSpread({
        marginBottom: '0.5em',
        display: 'flex',
        justifyContent: 'space-between'
      }, this.props.headerStyle);

      var sectionStyle = _objectSpread({
        display: 'flex'
      }, this.props.sectionStyle);

      var iconStyle = _objectSpread({
        backgroundImage: "url(".concat(icon, ")"),
        width: '95px',
        height: '75px',
        overflow: 'hidden',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderRadius: '4px'
      }, this.props.iconStyle);

      var sectionRightStyle = _objectSpread({
        display: 'flex',
        flexDirection: 'column',
        width: 'calc(100% - 95px - 0.7em)',
        marginLeft: '0.7em'
      }, this.props.sectionRightStyle);

      var positionStyle = _objectSpread({
        display: 'flex',
        justifyContent: 'space-between'
      }, this.props.positionStyle);

      var placeStyle = _objectSpread({
        fontSize: '12px',
        color: 'rgba(194, 131, 36, 1)'
      }, this.props.placeStyle);

      var distanceStyle = _objectSpread({
        fontSize: '12px',
        color: 'rgba(136, 136, 136, 1)'
      }, this.props.distanceStyle);

      var titleStyle = _objectSpread({
        fontSize: '14px'
      }, this.props.titleStyle);

      var subTitleStyle = _objectSpread({
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2,
        overflow: 'hidden',
        fontSize: '12px',
        flex: 1
      }, this.props.subTitleStyle);

      return _react["default"].createElement("div", null, _react["default"].createElement("div", {
        style: style,
        onClick: function onClick() {
          return _this2.onClick(action);
        }
      }, type || orderNumber ? _react["default"].createElement("div", {
        style: headerStyle
      }, _react["default"].createElement("div", null, type), _react["default"].createElement("div", null, orderNumber)) : null, _react["default"].createElement("div", {
        style: sectionStyle
      }, _react["default"].createElement("div", {
        style: iconStyle
      }), _react["default"].createElement("div", {
        style: sectionRightStyle
      }, _react["default"].createElement("div", {
        style: titleStyle
      }, title), _react["default"].createElement("div", {
        style: subTitleStyle
      }, subTitle), _react["default"].createElement("div", {
        style: positionStyle
      }, _react["default"].createElement("span", {
        style: placeStyle
      }, place), _react["default"].createElement("span", {
        style: distanceStyle
      }, distance)))), timestamp ? _react["default"].createElement("div", {
        style: {
          marginTop: '0.5em'
        }
      }, timestamp) : null));
    }
  }]);
  return OrderListItem;
}(_react["default"].Component);

exports["default"] = OrderListItem;