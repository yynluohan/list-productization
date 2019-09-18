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

var _getItemType = require("../getItemType");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ScalableList =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(ScalableList, _React$Component);

  function ScalableList(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ScalableList);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ScalableList).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "scrollFunction", function () {
      var _this$state = _this.state,
          list = _this$state.list,
          total = _this$state.total,
          current = _this$state.current,
          API = _this$state.API,
          touchHeight = _this$state.touchHeight;
      var bottomHeight = (0, _getHeight.getScrollHeight)() - (0, _getHeight.getScrollTop)() - (0, _getHeight.getClientHeight)();

      if (bottomHeight < touchHeight && list.length < total && _this.props.API) {
        var data = {
          pageNum: current + 1,
          API: API,
          list: list
        };

        if (_this.props.onPagination) {
          _this.props.onPagination(current);
        } else {
          _this.getList(data);
        }
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getList", function (queryData) {
      var pageSize = _this.state.pageSize;
      var list = queryData.list;
      var API = queryData.API;
      delete queryData.API;
      (0, _services.query)(API, _objectSpread({}, queryData, {
        pageSize: pageSize
      })).then(function (_ref) {
        var code = _ref.code,
            data = _ref.data;

        if (code && code === 200) {
          //外部传入getList，获取列表数据
          if (_this.props.getList) {
            _this.props.getList(data);
          }

          var isMore = false;
          var getLsit = data.records ? list.concat(data.records) : data.data ? list.concat(data.data) : [];

          if (list.length > 0) {
            if (getLsit.length === 0 || getLsit.length === data.total) {
              isMore = true;
            }
          }

          _this.setState({
            list: getLsit,
            current: data.current || 1,
            total: data.total || 0,
            isMore: isMore
          });
        }
      });
    });
    _this.state = {
      list: props.list || [],
      current: 1,
      total: 0,
      isMore: false,
      //是否全部获取完数据
      pageSize: props.pageSize || 10,
      API: props.API || '',
      // 查询列表API(若有传入，则不需传入list)
      touchHeight: props.touchHeight || 150 // 默认距离底部150px时触发滚动

    };
    return _this;
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
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      console.log('???????', nextProps);

      if (nextProps.list !== undefined) {
        this.setState({
          list: nextProps.list
        });
      }

      if (nextProps.API !== undefined) {
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
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
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
      var _this2 = this;

      var _this$props = this.props,
          _this$props$gateWayDa = _this$props.gateWayData,
          gateWayData = _this$props$gateWayDa === void 0 ? {} : _this$props$gateWayDa,
          _this$props$item = _this$props.item,
          item = _this$props$item === void 0 ? {} : _this$props$item,
          _this$props$loadmore = _this$props.loadmore,
          loadmore = _this$props$loadmore === void 0 ? true : _this$props$loadmore;
      var _this$state2 = this.state,
          list = _this$state2.list,
          isMore = _this$state2.isMore;

      var createItem = function createItem(itemData, index) {
        itemData = (0, _transform.gateWay)(gateWayData, itemData);
        itemData.listLength = list.length || 0;
        itemData.currentIndex = index;

        if (item.type) {
          var ItemElement = (0, _getItemType.itemMap)(item.type);
          return _react["default"].createElement(ItemElement, (0, _extends2["default"])({}, itemData, _this2.props.extraProps));
        } else {
          if (_this2.props.children) {
            var child = _this2.props.children;
            return _react["default"].cloneElement(child, {
              itemData: _objectSpread({}, itemData, {
                currentIndex: index
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
          style: _this2.props.itemStyle
        }, createItem(item, index));
      }), loadmore ? showFooter() : '');
    }
  }]);
  return ScalableList;
}(_react["default"].Component);

exports["default"] = ScalableList;