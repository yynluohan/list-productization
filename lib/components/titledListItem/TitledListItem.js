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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }

var TitledListItem =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(TitledListItem, _React$Component);

  function TitledListItem(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, TitledListItem);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(TitledListItem).call(this, props));
    _this.state = {
      type: props.type || 'column'
    };
    return _this;
  }

  (0, _createClass2["default"])(TitledListItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          title = _this$props.title,
          subtitle = _this$props.subtitle,
          value = _this$props.value,
          status = _this$props.status,
          icon = _this$props.icon;
      var type = this.state.type;
      var style = {
        paddingBottom: '2px',
        padding: '0 0.6em',
        backgroundColor: '#fff' //纵向

      };

      var flexStyle = _objectSpread({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.6em 0',
        borderBottom: '1px solid #f2f2f2'
      }, this.props.flexStyle);

      var itemLeft = _objectSpread({
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '0.3em'
      }, this.props.itemLeft);

      var titleStyle = _objectSpread({}, this.props.titleStyle);

      var itemRight = _objectSpread({
        display: 'flex',
        justifyContent: 'space-between'
      }, this.props.itemRight); //横向


      var lineFlexStyle = _objectSpread({
        display: 'flex',
        alignContent: 'space-between',
        alignItems: 'center',
        padding: '0.6em 0',
        borderBottom: '1px solid #f2f2f2'
      }, this.props.lineFlexStyle);

      var middleStyle = _objectSpread({
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center'
      }, this.props.middleStyle);

      var iconStyle = _objectSpread({
        width: '40px',
        height: '40px',
        backgroundImage: "url(".concat(icon, ")"),
        overflow: 'hidden',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }, this.props.iconStyle);

      var itemTransTitle = _objectSpread({
        marginBottom: '8px'
      }, this.props.itemTransTitle);

      var lineSubtitleStyle = _objectSpread({
        fontSize: '12px'
      }, this.props.lineSubtitleStyle);

      var statusStyle = _objectSpread({
        marginRight: '1em'
      }, this.props.statusStyle);

      var itemValue = function itemValue(value) {
        return _objectSpread({
          color: value >= 0 ? '#F60303' : '#F39D0D'
        }, _this2.props.itemValue);
      };

      var createItem = function createItem() {
        if (type == 'column') {
          return _react["default"].createElement("div", {
            style: flexStyle
          }, _react["default"].createElement("div", {
            style: itemLeft
          }, title ? _react["default"].createElement("div", {
            style: titleStyle
          }, title) : '', subtitle ? _react["default"].createElement("div", null, subtitle) : ''), _react["default"].createElement("div", {
            style: itemRight
          }, status ? _react["default"].createElement("div", {
            style: statusStyle
          }, status) : '', status ? _react["default"].createElement("div", {
            style: itemValue(value)
          }, value) : ''));
        }

        if (type == 'line') {
          return _react["default"].createElement("div", {
            style: lineFlexStyle
          }, _react["default"].createElement("div", {
            style: statusStyle
          }, status), _react["default"].createElement("div", {
            style: {
              flex: '1'
            }
          }, _react["default"].createElement("div", {
            style: middleStyle
          }, icon ? _react["default"].createElement("div", {
            style: iconStyle
          }) : null, _react["default"].createElement("div", {
            style: {
              marginLeft: '1em'
            }
          }, title ? _react["default"].createElement("div", {
            style: itemTransTitle
          }, title) : '', subtitle ? _react["default"].createElement("div", {
            style: lineSubtitleStyle
          }, subtitle) : ''))), _react["default"].createElement("div", {
            style: itemValue(value)
          }, value));
        }
      };

      return _react["default"].createElement("div", {
        style: style
      }, createItem());
    }
  }]);
  return TitledListItem;
}(_react["default"].Component);

exports["default"] = TitledListItem;