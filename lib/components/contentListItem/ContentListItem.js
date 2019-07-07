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

var ContentListItem =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(ContentListItem, _React$Component);

  function ContentListItem() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, ContentListItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(ContentListItem)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onClick", function (route) {
      var id = _this.props.id || '';

      if (route) {
        window.location.href = "#".concat(route, "?id=").concat(id);
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(ContentListItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          image = _this$props.image,
          title = _this$props.title,
          content = _this$props.content,
          stats = _this$props.stats,
          route = _this$props.route,
          detailText = _this$props.detailText;
      var icon = stats && stats.icon ? stats.icon : '';
      var record = stats && stats.record != undefined ? stats.record : '';

      var style = _objectSpread({
        backgroundColor: '#fff',
        display: 'flex',
        marginBottom: '2px',
        borderBottom: '1px solid #f2f2f2',
        padding: '0.7em'
      }, this.props.style);

      var imageStyle = _objectSpread({
        width: '95px',
        height: '95px',
        backgroundImage: "url(".concat(image, ")"),
        borderRadius: '2px',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginRight: '1.2em'
      }, this.props.imageStyle);

      var itemContent = _objectSpread({
        width: "calc(100% - 95px - 1.2em)",
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'space-between'
      }, this.props.itemContent);

      var titleStyle = _objectSpread({
        fontSize: '16px',
        color: '#000',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2,
        overflowY: 'hidden',
        maxHeight: '48px',
        lineHeight: '1.3em'
      }, this.props.titleStyle);

      var itemFooter = _objectSpread({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '12px',
        color: '#888'
      }, this.props.itemFooter);

      var iconStyle = _objectSpread({
        width: '20px',
        height: '20px',
        marginRight: '0.8em'
      }, this.props.iconStyle);

      var contentStyle = _objectSpread({
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 1,
        overflowY: 'hidden',
        fontSize: '13px',
        color: '#888',
        margin: '0.5em 0'
      }, this.props.contentStyle);

      var detailTextStyle = _objectSpread({
        display: 'inline-block',
        padding: '0.1em 0.5em',
        borderRadius: '10px',
        border: '1px solid rgba(166, 166, 166, 1)',
        color: '#666',
        fontSize: '13px'
      }, this.props.detailTextStyle);

      var contentOutStyle = {
        flex: 1
      };
      return _react["default"].createElement("div", {
        style: style,
        onClick: function onClick() {
          return _this2.onClick(route);
        }
      }, _react["default"].createElement("div", {
        style: imageStyle
      }), _react["default"].createElement("div", {
        style: itemContent
      }, _react["default"].createElement("div", {
        style: titleStyle
      }, title), _react["default"].createElement("div", {
        style: contentOutStyle
      }, _react["default"].createElement("div", {
        style: contentStyle
      }, content)), _react["default"].createElement("div", {
        style: itemFooter
      }, _react["default"].createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center'
        }
      }, icon ? _react["default"].createElement("img", {
        src: icon,
        style: iconStyle
      }) : '', record != undefined ? _react["default"].createElement("span", null, record) : ''), detailText ? _react["default"].createElement("a", {
        style: detailTextStyle,
        onClick: function onClick() {
          return _this2.onClick(route);
        }
      }, detailText) : null)));
    }
  }]);
  return ContentListItem;
}(_react["default"].Component);

exports["default"] = ContentListItem;