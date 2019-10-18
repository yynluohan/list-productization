import React from 'react'
import { query } from '../../utils/services'
import { getScrollHeight, getScrollTop, getClientHeight } from '../../utils/getHeight'
import { gateWay } from '../../utils/transform'
import { itemMap } from '../getItemType'

export default class ScalableList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      list: props.list || [],
      current: 1,
      total: 0,
      isMore: false, // 是否全部获取完数据
      pageSize: props.pageSize || 10,
      API: props.API || '', // 查询列表API(若有传入，则不需传入list)
      touchHeight: props.touchHeight || 150 // 默认距离底部150px时触发滚动
    }

    this.scrollFunction = this.scrollFunction.bind(this)
    this.getList = this.getList.bind(this)
  }

  componentDidMount () {
    if (this.props.API) {
      const data = {
        API: this.props.API,
        list: []
      }
      this.getList(data)
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.list !== undefined) {
      this.setState({
        list: nextProps.list
      })
    }
    if (nextProps.API !== undefined) {
      this.setState({
        API: nextProps.API
      })
      const data = {
        API: nextProps.API,
        list: []
      }
      this.getList(data)
    }
  }

  componentWillMount () {
    window.addEventListener('scroll', this.scrollFunction)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.scrollFunction)
  }

  scrollFunction () {
    const { list, total, current, API, touchHeight } = this.state
    const bottomHeight = getScrollHeight() - getScrollTop() - getClientHeight()
    if (bottomHeight < touchHeight && list.length < total && this.props.API) {
      const data = {
        pageNum: current + 1,
        API,
        list
      }
      if (this.props.onPagination) {
        this.props.onPagination(current)
      } else {
        this.getList(data)
      }
    }
  }

  // 如果传入API时，调用api获取数据
  getList (queryData) {
    const { pageSize } = this.state
    const list = queryData.list
    const API = queryData.API
    delete queryData.API
    query(API, { ...queryData, pageSize }).then(({ code, data }) => {
      if (code && code === 200) {
        // 外部传入getList，获取列表数据
        if (this.props.getList) {
          this.props.getList(data)
        }
        let isMore = false
        const getLsit = data.records ? list.concat(data.records) : data.data ? list.concat(data.data) : []
        if (list.length > 0) {
          if (getLsit.length === 0 || getLsit.length === data.total) {
            isMore = true
          }
        }
        this.setState({
          list: getLsit,
          current: data.current || 1,
          total: data.total || 0,
          isMore
        })
      }
    })
  }

  render () {
    const { gateWayData = {}, item = {}, loadmore = true } = this.props
    const { list, isMore } = this.state

    const createItem = (itemData, index) => {
      itemData = gateWay(gateWayData, itemData)
      itemData.listLength = list.length || 0
      itemData.currentIndex = index
      if (item.type) {
        const ItemElement = itemMap(item.type)
        return <ItemElement {...itemData} {...this.props.extraProps} />
      } else {
        if (this.props.children) {
          const child = this.props.children
          return React.cloneElement(child, {
            itemData: {
              ...itemData,
              currentIndex: index
            }
          })
        }
      }
    }

    const showFooter = () => {
      const style = {
        textAlign: 'center',
        margin: '0.5em'
      }
      if (isMore) {
        return <div style={style}>我也是有底线的！</div>
      } else {
        return <div style={style}>loading...</div>
      }
    }

    return (
      <div style={this.props.style}>
        {
          list.length > 0 && list.map((item, index) => (
            <div key={index} style={this.props.itemStyle}>
              {createItem(item, index)}
            </div>
          ))
        }
        {loadmore ? showFooter() : ''}
      </div>
    )
  }
}
