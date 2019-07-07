"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _services = require("../../utils/services");

var _getHeight = require("../../utils/getHeight");

var _transform = require("../../utils/transform");

var _index2 = require("../../index");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }

var ScalableList =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(ScalableList, _React$Component);

  function ScalableList(props) {
    var _this2;

    (0, _classCallCheck2["default"])(this, ScalableList);
    _this2 = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ScalableList).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "scrollFunction", function () {
      var _this2$state = _this2.state,
          list = _this2$state.list,
          total = _this2$state.total,
          current = _this2$state.current,
          API = _this2$state.API;
      var bottomHeight = (0, _getHeight.getScrollHeight)() - (0, _getHeight.getScrollTop)() - (0, _getHeight.getClientHeight)();

      if (bottomHeight < 150 && list.length < total && _this2.props.API) {
        var data = {
          pageNum: current + 1,
          API: API,
          list: list
        };

        if (_this2.props.onPagination) {
          _this2.props.onPagination(current);
        } else {
          _this2.getList(data);
        }
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this2), "getList", function (queryData) {
      var pageSize = _this2.state.pageSize;
      var list = queryData.list;
      console.log('AAA list = ', list);
      var API = queryData.API;
      delete queryData.API;
      (0, _services.query)(API, _objectSpread({}, queryData, {
        pageSize: pageSize
      })).then(function (_ref) {
        var code = _ref.code,
            data = _ref.data;

        if (code == 200) {
          if (_this2.props.getList) {
            _this2.props.getList(data);
          }

          var isMore = false;
          var getLsit = data.records ? list.concat(data.records) : data.data ? list.concat(data.data) : [];

          if (list.length > 0) {
            if (getLsit.length == 0 || getLsit.length == data.total) {
              isMore = true;
            }
          }

          _this2.setState({
            list: getLsit,
            current: data.current || 1,
            total: data.total || 0,
            isMore: isMore
          });
        }
      });
    });
    _this2.state = {
      list: props.list || [],
      current: 1,
      total: 0,
      isMore: false,
      //是否全部获取完数据
      pageSize: props.pageSize || 10,
      API: props.API || ''
    };
    return _this2;
  }

  (0, _createClass2["default"])(ScalableList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.API) {
        var data = {
          API: this.props.API,
          list: []
        };
        this.getList(data);
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      console.log('???????', nextProps);

      if (nextProps.list != undefined) {
        this.setState({
          list: nextProps.list
        });
      }

      if (nextProps.API != undefined) {
        this.setState({
          API: nextProps.API
        });
        var data = {
          API: nextProps.API,
          list: []
        };
        this.getList(data);
      }
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      window.addEventListener('scroll', this.scrollFunction);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.scrollFunction);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          _this$props$gateWayDa = _this$props.gateWayData,
          gateWayData = _this$props$gateWayDa === void 0 ? {} : _this$props$gateWayDa,
          _this$props$item = _this$props.item,
          item = _this$props$item === void 0 ? {} : _this$props$item,
          _this$props$loadmore = _this$props.loadmore,
          loadmore = _this$props$loadmore === void 0 ? true : _this$props$loadmore;
      var _this$state = this.state,
          list = _this$state.list,
          current = _this$state.current,
          total = _this$state.total,
          isMore = _this$state.isMore;

      var _this = this;

      var createItem = function createItem(itemData, index) {
        itemData = (0, _transform.gateWay)(gateWayData, itemData);
        itemData.listLength = list.length || 0;
        itemData.currentIndex = index;

        if (item.type) {
          switch (item.type) {
            case 'ActionFlowItem':
              return _react["default"].createElement(_index2.ActionFlowItem, (0, _extends2["default"])({}, itemData, _this3.props.actionFlowItemProps || {}));
              break;

            case 'ContentListItem':
              return _react["default"].createElement(_index2.ContentListItem, (0, _extends2["default"])({}, itemData, _this3.props.contentListItemProps || {}));
              break;

            case 'LineContentItem':
              return _react["default"].createElement(_index2.LineContentItem, (0, _extends2["default"])({}, itemData, _this3.props.lineContentItemProps || {}));
              break;

            case 'OrderListItem':
              return _react["default"].createElement(_index2.OrderListItem, (0, _extends2["default"])({}, itemData, _this3.props.orderListItemProps || {}));
              break;

            case 'TitledListItem':
              return _react["default"].createElement(_index2.TitledListItem, (0, _extends2["default"])({}, itemData, _this3.props.titledListItemProps || {}));
              break;

            case 'BlogListItem':
              return _react["default"].createElement(_index2.BlogListItem, (0, _extends2["default"])({}, itemData, _this3.props.blogListItemProps || {}));
              break;

            case 'CommentListItem':
              return _react["default"].createElement(_index2.CommentListItem, (0, _extends2["default"])({}, itemData, _this3.props.commentListItemProps || {}));
              break;

            case 'FlowItem':
              return _react["default"].createElement(_index2.FlowItem, (0, _extends2["default"])({}, itemData, _this3.props.flowItemProps || {}));
              break;

            case 'OrderCartListItem':
              return _react["default"].createElement(_index2.OrderCartListItem, (0, _extends2["default"])({}, itemData, _this3.props.orderCartListItemProps || {}));
              break;

            case 'AssignListItem':
              return _react["default"].createElement(_index2.AssignListItem, (0, _extends2["default"])({}, itemData, _this3.props.assignListItemProps || {}));
              break;

            default:
              return '';
          }
        } else {
          if (_this3.props.children) {
            var child = _this3.props.children;
            var _index = _index;
            return _react["default"].cloneElement(child, {
              itemData: _objectSpread({}, itemData, {
                currentIndex: _index
              })
            });
          }
        }
      };

      var showFooter = function showFooter() {
        var style = {
          textAlign: 'center',
          margin: '0.5em'
        };

        if (isMore) {
          return _react["default"].createElement("div", {
            style: style
          }, "\u6211\u4E5F\u662F\u6709\u5E95\u7EBF\u7684\uFF01");
        } else {
          return _react["default"].createElement("div", {
            style: style
          }, "loading...");
        }
      };

      return _react["default"].createElement("div", {
        style: this.props.style
      }, list.length > 0 && list.map(function (item, index) {
        return _react["default"].createElement("div", {
          key: index,
          style: _this3.props.itemStyle
        }, createItem(item, index));
      }), loadmore ? showFooter() : '');
    }
  }]);
  return ScalableList;
}(_react["default"].Component);

exports["default"] = ScalableList;