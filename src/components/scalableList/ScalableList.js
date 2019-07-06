import React from 'react';
import { query } from '../../utils/services';
import { getScrollHeight,getScrollTop,getClientHeight} from '../../utils/getHeight';
import { gateWay } from '../../utils/transform';
import { ActionFlowItem,ContentListItem,LineContentItem,OrderListItem,
         TitledListItem,BlogListItem,CommentListItem,FlowItem,OrderCartListItem,
         AssignListItem } from '../../index';

export default class ScalableList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      list: props.list || [],
      current: 1,
      total:0,
      isMore:false,  //是否全部获取完数据
      pageSize: props.pageSize || 10,
      API: props.API || '',
    }
  }

  componentDidMount() {
    if(this.props.API){
      const data = {
        API: this.props.API,
        list: []
      }
      this.getList(data)
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('???????',nextProps);
    if (nextProps.list != undefined) {
      this.setState({
        list: nextProps.list
      })
    }
    if (nextProps.API != undefined) {
      this.setState({
        API: nextProps.API,
      })
      const data = {
        API: nextProps.API,
        list: []
      }
      this.getList(data)
    }
  }

  componentWillMount(){
      window.addEventListener('scroll', this.scrollFunction)
    }

  componentWillUnmount(){
    window.removeEventListener('scroll',this.scrollFunction)
  }

  scrollFunction = () => {
    const { list,total,current,API } = this.state;
    const bottomHeight = getScrollHeight() - getScrollTop() - getClientHeight();
    if (bottomHeight < 150 && list.length < total && this.props.API) {
      const data = {
        pageNum:current + 1,
        API,
        list
      }
      if(this.props.onPagination){
        this.props.onPagination(current)
      } else {
        this.getList(data)
      }
    }
  }

  //如果传入API时，调用api获取数据
   getList = (queryData) => {
     const { pageSize } = this.state;
     const list = queryData.list;
     console.log('AAA list = ',list);
     const API = queryData.API;
     delete queryData.API
     query(API,{...queryData,pageSize}).then(({ code, data }) => {
       if (code == 200) {
         if (this.props.getList) {
           this.props.getList(data)
         }
         let isMore = false;
         const getLsit = data.records ? list.concat(data.records) : data.data ? list.concat(data.data) : [];
         if (list.length > 0) {
           if (getLsit.length == 0 || getLsit.length == data.total) {
             isMore = true
           }
         }
         this.setState({
           list: getLsit,
           current: data.current || 1,
           total: data.total || 0,
           isMore,
         })
       }
     })
   }

  render() {

    const { gateWayData = {},item = {},loadmore = true } = this.props;
    const { list,current,total,isMore } = this.state;
    const _this = this;

    const createItem = (itemData,index) => {
      itemData = gateWay(gateWayData,itemData);
      itemData.listLength = list.length || 0;
      itemData.currentIndex = index;
      if(item.type){
        switch(item.type){
          case 'ActionFlowItem':     return <ActionFlowItem {...itemData}{...this.props.actionFlowItemProps || {}}/>;      break;
          case 'ContentListItem':    return <ContentListItem {...itemData}{...this.props.contentListItemProps || {}}/>;    break;
          case 'LineContentItem':    return <LineContentItem {...itemData}{...this.props.lineContentItemProps || {}}/>;    break;
          case 'OrderListItem':      return <OrderListItem {...itemData}{...this.props.orderListItemProps || {}}/>;        break;
          case 'TitledListItem':     return <TitledListItem {...itemData}{...this.props.titledListItemProps || {}}/>;        break;
          case 'BlogListItem':       return <BlogListItem {...itemData}{...this.props.blogListItemProps || {}}/>;          break;
          case 'CommentListItem':    return <CommentListItem {...itemData}{...this.props.commentListItemProps || {}}/>;    break;
          case 'FlowItem':           return <FlowItem {...itemData}{...this.props.flowItemProps || {}}/>;                  break;
          case 'OrderCartListItem':  return <OrderCartListItem {...itemData}{...this.props.orderCartListItemProps || {}}/>;break;
          case 'AssignListItem':    return <AssignListItem {...itemData}{...this.props.assignListItemProps || {}}/> ;break;
          default: return ''
        }
      } else {
        if(this.props.children){
          const child = this.props.children;
          const index = index;
          return React.cloneElement(child,{
            itemData:{
              ...itemData,
              currentIndex:index
            },
          })
        }
      }
    }

    const showFooter = () => {
      const style = {
        textAlign: 'center',
        margin:'0.5em'
      }
      if (isMore) {
        return <div style={ style }>我也是有底线的！</div>
      } else {
        return <div style={ style }>loading...</div>
      }
    }

    return (
      <div style={this.props.style}>
        {
          list.length > 0 && list.map((item, index) => (
            <div key={ index } style={this.props.itemStyle}>
              { createItem(item,index) }
            </div>
          ))
        }
        { loadmore  ? showFooter() : '' }
      </div>
    )

  }
}
