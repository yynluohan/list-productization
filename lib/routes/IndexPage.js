"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _IndexPage = _interopRequireDefault(require("./IndexPage.css"));

var _index = require("../index");

var IndexPage =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(IndexPage, _React$Component);

  function IndexPage(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, IndexPage);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(IndexPage).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onClick", function (item, index) {
      _this.setState({
        itemName: item.itemName,
        list: item.data,
        selectIndex: index
      });
    });
    _this.state = {
      itemName: '',
      list: [],
      selectIndex: -1
    };
    return _this;
  }

  (0, _createClass2["default"])(IndexPage, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          itemName = _this$state.itemName,
          list = _this$state.list,
          selectIndex = _this$state.selectIndex;
      var listData = [{
        itemName: 'LineContentItem',
        data: [{
          image: "http://img.19196.com/uploads/151125/9-151125103F5930.jpg",
          title: "张三",
          content: "赞了你的说说"
        }, {
          image: 'http://img.19196.com/uploads/151125/9-151125103F5930.jpg',
          title: '李四',
          content: '评论了你的说说'
        }]
      }, {
        itemName: 'ContentListItem',
        data: [{
          image: 'http://img.19196.com/uploads/151125/9-151125103F5930.jpg',
          title: '度假护肤两不误，国庆“颜喜”攻略抢先看',
          content: '在肌肤保养这件事上要遵循一个原则，白天侧重防护，晚间注重修复，这也就是说，\
                     夜晚是肌肤修复的黄金时间。和身体其他部位的器官一样，肌肤的“排毒”时间也是在晚上，\
                     尤其是当人入睡之后，肌肤细胞的更新开始加速，肌肤温度相对于醒着的时候要高出0.3-0.5℃左右，\
                     此时皮下的血液循环也更通畅。',
          stats: {
            icon: 'http://img.19196.com/uploads/151125/9-151125103F5930.jpg',
            record: 123
          },
          route: ''
        }, {
          image: 'http://img.19196.com/uploads/151125/9-151125103F5930.jpg',
          title: '理性战“痘”，拒绝过度护肤',
          content: '晚霜、夜用精华、睡眠面膜……越来越多夜间专属护肤品品类的诞生似乎也在说明着一个道理',
          stats: {
            icon: 'http://img.19196.com/uploads/151125/9-151125103F5930.jpg',
            record: 99
          },
          route: '/itemDetail',
          id: 2,
          detailText: '查看详情'
        }]
      }, {
        itemName: 'BlogListItem',
        data: [{
          id: '002',
          icon: 'http://img.19196.com/uploads/151125/9-151125103F5930.jpg',
          name: '若寒',
          subtitle: '2018/5/16 09 : 15',
          content: '在肌肤保养这件事上要遵循一个原则，白天侧重防护，晚间注重修复，这也就是说，\
                    夜晚是肌肤修复的黄金时间。和身体其他部位的器官一样，肌肤的“排毒”时间也是在晚上，\
                    尤其是当人入睡之后，肌肤细胞的更新开始加速，肌肤温度相对于醒着的时候要高出0.3-0.5℃左右，\
                    此时皮下的血液循环也更通畅。',
          lives: [{
            url: 'http://img.19196.com/uploads/151125/9-151125103F5930.jpg'
          }, {
            url: 'http://img.19196.com/uploads/151125/9-151125103F5930.jpg'
          }, {
            url: 'http://img.19196.com/uploads/151125/9-151125103F5930.jpg'
          }],
          tags: [{
            tagName: '#美白#'
          }, {
            tagName: '#祛痘#'
          }, {
            tagName: '#润湿护肤#'
          }],
          stats: [{
            icon: 'https://img.xiaopiu.com/userImages/img2558163f2b57f78.png',
            record: 22222
          }, {
            icon: 'https://img.xiaopiu.com/userImages/img2558163f2b57f78.png',
            record: 336555
          }],
          route: '/lineContentItem',
          detailText: '查看详情'
        }]
      }, {
        itemName: 'FlowItem',
        data: [{
          icon: 'http://img.19196.com/uploads/151125/9-151125103F5930.jpg',
          title: '我的订单',
          path: '/lineContentItem'
        }, {
          icon: 'http://img.19196.com/uploads/151125/9-151125103F5930.jpg',
          title: '我的预约',
          path: '/lineContentItem'
        }]
      }, {
        itemName: 'CommentListItem',
        data: [{
          icon: 'http://img.19196.com/uploads/151125/9-151125103F5930.jpg',
          name: '若寒',
          content: '这是一条评论信息',
          isDeleteAllow: true,
          subtitle: '2019/05/29 16:27'
        }, {
          icon: 'http://img.19196.com/uploads/151125/9-151125103F5930.jpg',
          name: '若寒',
          commentName: '张三',
          content: '这是一条回复信息',
          isDeleteAllow: false,
          subtitle: '2019/05/29 16:27'
        }]
      }, {
        itemName: 'OrderListItem',
        data: [{
          'icon': 'http://img.19196.com/uploads/151125/9-151125103F5930.jpg',
          'title': '白云汇体验二店',
          'subTitle': '广州市白云区白云汇商城专柜',
          'place': '广州市',
          'distance': '199.5km'
        }]
      }, {
        itemName: 'TitledListItem',
        data: [{
          'title': '充值',
          'subtitle': '零钱余额：361元',
          'value': '+300',
          'status': '2018-7-15'
        }, {
          'title': '提现',
          'subtitle': '零钱余额：254元',
          'value': '+200',
          'status': '2018-7-16'
        }]
      }];
      var listProps = {
        list: list.concat(list, list, list, list, list, list, list, list),
        loadmore: false,
        item: {
          type: itemName
        },
        extraProps: {}
      };
      return _react["default"].createElement("div", null, _react["default"].createElement("div", {
        className: _IndexPage["default"].top
      }, "list-productization"), _react["default"].createElement("div", {
        className: _IndexPage["default"].container
      }, _react["default"].createElement("div", {
        className: _IndexPage["default"].menu
      }, listData.map(function (item, index) {
        return _react["default"].createElement("div", {
          key: index,
          onClick: function onClick() {
            return _this2.onClick(item, index);
          },
          style: {
            backgroundColor: selectIndex === index ? '#1890ff' : '#000'
          }
        }, item.itemName);
      })), itemName ? _react["default"].createElement("div", {
        style: {
          width: 'calc(100% - 280px)',
          padding: '0 1.5em'
        }
      }, _react["default"].createElement(_index.ScalableList, listProps)) : ''));
    }
  }]);
  return IndexPage;
}(_react["default"].Component);

var _default = IndexPage;
exports["default"] = _default;