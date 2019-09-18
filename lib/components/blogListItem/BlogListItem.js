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

var BlogListItem =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(BlogListItem, _React$Component);

  function BlogListItem() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, BlogListItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(BlogListItem)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onClick", function (value) {
      var id = _this.props.id || '';

      if (value) {
        window.location.href = "#".concat(value, "?id=").concat(id);
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(BlogListItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          icon = _this$props.icon,
          name = _this$props.name,
          subtitle = _this$props.subtitle,
          content = _this$props.content,
          lives = _this$props.lives,
          tags = _this$props.tags,
          stats = _this$props.stats,
          route = _this$props.route,
          detailText = _this$props.detailText;

      var style = _objectSpread({
        display: 'flex',
        backgroundColor: '#fff',
        padding: '0.7em',
        borderBottom: '1px solid rgb(242, 242, 242)'
      }, this.props.style);

      var iconStyle = _objectSpread({
        width: '44px',
        height: '44px',
        margin: '3px',
        backgroundImage: "url(".concat(icon, ")"),
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderRadius: '4px'
      }, this.props.iconStyle);

      var sectionStyle = _objectSpread({
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '0.8em',
        width: 'calc(100% - 50px - 0.8em)'
      }, this.props.sectionStyle);

      var nameStyle = _objectSpread({
        fontSize: '16px',
        color: '#333'
      }, this.props.nameStyle);

      var subtitleStyle = _objectSpread({
        color: '#888',
        fontSize: '13px',
        margin: '5px 0'
      }, this.props.subtitleStyle);

      var contentStyle = _objectSpread({
        fontSize: '16px',
        color: '#000',
        wordBreak: 'break-all',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 3,

        /*autoprefixer: off*/
        WebkitBoxOrient: 'vertical',

        /*autoprefixer: on*/
        overflow: 'hidden'
      }, this.props.contentStyle);

      var livesListStyle = _objectSpread({
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        margin: '10px 0 5px 0'
      }, this.props.livesListStyle);

      var tagListStyle = _objectSpread({
        display: 'flex',
        flexWrap: 'wrap',
        fontSize: '13px',
        color: '#c28324'
      }, this.props.tagListStyle);

      var itemStats = _objectSpread({
        margin: '5px 20px 0 0',
        fontSize: '12px',
        color: '#888'
      }, this.props.itemStats);

      var detailTextStyle = _objectSpread({
        color: 'rgb(136, 136, 136)',
        marginRight: '5px'
      }, this.props.detailTextStyle);

      var statsImg = _objectSpread({
        width: '16px',
        height: '16px',
        margin: '2px 5px 5px 0px'
      }, this.props.statsImg);

      var liveStyle = function liveStyle(value) {
        return _objectSpread({
          width: '80px',
          height: '80px',
          borderRadius: '3px',
          margin: '0 5px 5px 0',
          backgroundImage: "url(".concat(value, ")"),
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          overflow: 'hidden'
        }, _this2.props.livesImage);
      };

      return _react["default"].createElement("div", {
        style: style,
        onClick: function onClick() {
          return _this2.onClick(route);
        }
      }, icon ? _react["default"].createElement("div", {
        style: iconStyle
      }) : null, _react["default"].createElement("div", {
        style: sectionStyle
      }, _react["default"].createElement("div", {
        style: nameStyle
      }, name), _react["default"].createElement("div", {
        style: subtitleStyle
      }, subtitle), _react["default"].createElement("div", {
        style: contentStyle
      }, content), lives && lives.length > 0 ? _react["default"].createElement("div", {
        style: livesListStyle
      }, lives.map(function (item, index) {
        return _react["default"].createElement("div", {
          key: index,
          style: liveStyle(item.url)
        });
      })) : '', tags && tags.length > 0 ? _react["default"].createElement("div", {
        style: tagListStyle
      }, tags.map(function (item, index) {
        return _react["default"].createElement("span", {
          key: index,
          style: {
            marginRight: '1.2em'
          }
        }, item.tagName);
      })) : '', _react["default"].createElement("div", {
        style: {
          margin: '0.5em 0',
          display: 'flex',
          justifyContent: 'space-between'
        }
      }, stats && stats.length > 0 ? _react["default"].createElement("span", null, stats.map(function (item, index) {
        return _react["default"].createElement("span", {
          key: index,
          style: itemStats
        }, _react["default"].createElement("img", {
          src: item.icon,
          alt: "image",
          style: statsImg
        }), _react["default"].createElement("span", null, item.record));
      })) : '', detailText ? _react["default"].createElement("a", {
        style: detailTextStyle,
        onClick: function onClick() {
          return _this2.onClick(route);
        }
      }, detailText) : null)));
    }
  }]);
  return BlogListItem;
}(_react["default"].Component);

exports["default"] = BlogListItem;