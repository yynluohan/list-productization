/**
    * @author Yang,YN
    * @editor
    * @updated
    * @desc
    * @eg
    <TitledListItem>
      icon = ''    //可表示图标或者头像
      title = ''   //一般可表示名字、标题
      subTitle = '' //可表示副标题或者其他
      value = '' //可表示值
      status = ''    //可表示状态
    </TitledListItem>
 */

import React from 'react'

export default class TitledListItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      type: props.type || 'column'
    }
  }

  render () {
    const { title, subtitle, value, status, icon } = this.props
    const { type } = this.state

    const style = {
      paddingBottom: '2px',
      padding: '0 0.6em',
      backgroundColor: '#fff'
    }

    // 纵向
    const flexStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.6em 0',
      borderBottom: '1px solid #f2f2f2',
      ...this.props.flexStyle
    }

    const itemLeft = {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '0.3em',
      ...this.props.itemLeft
    }

    const titleStyle = {
      ...this.props.titleStyle
    }

    const itemRight = {
      display: 'flex',
      justifyContent: 'space-between',
      ...this.props.itemRight
    }

    // 横向
    const lineFlexStyle = {
      display: 'flex',
      alignContent: 'space-between',
      alignItems: 'center',
      padding: '0.6em 0',
      borderBottom: '1px solid #f2f2f2',
      ...this.props.lineFlexStyle
    }

    const middleStyle = {
      display: 'flex',
      // justifyContent: 'center',
      alignItems: 'center',
      ...this.props.middleStyle
    }

    const iconStyle = {
      width: '40px',
      height: '40px',
      backgroundImage: `url(${icon})`,
      overflow: 'hidden',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      ...this.props.iconStyle
    }

    const itemTransTitle = {
      marginBottom: '8px',
      ...this.props.itemTransTitle
    }

    const lineSubtitleStyle = {
      fontSize: '12px',
      ...this.props.lineSubtitleStyle
    }

    const statusStyle = {
      marginRight: '1em',
      ...this.props.statusStyle
    }

    const itemValue = (value) => {
      return {
        color: value >= 0 ? '#F60303' : '#F39D0D',
        ...this.props.itemValue
      }
    }

    const createItem = () => {
      if (type === 'column') {
        return (
          <div style={flexStyle}>
            <div style={itemLeft}>
              {title ? <div style={titleStyle}>{title}</div> : ''}
              {subtitle ? <div>{subtitle}</div> : ''}
            </div>
            <div style={itemRight}>
              {status ? <div style={statusStyle}>{status}</div> : ''}
              {status ? <div style={itemValue(value)}>{value}</div> : ''}
            </div>
          </div>
        )
      }
      if (type === 'line') {
        return (
          <div style={lineFlexStyle}>
            <div style={statusStyle}>{status}</div>
            <div style={{ flex: '1' }}>
              <div style={middleStyle}>
                {icon ? <div style={iconStyle} /> : null}
                <div style={{ marginLeft: '1em' }}>
                  {title ? <div style={itemTransTitle}>{title}</div> : ''}
                  {subtitle ? <div style={lineSubtitleStyle}>{subtitle}</div> : ''}
                </div>
              </div>
            </div>
            <div style={itemValue(value)}>{value}</div>
          </div>
        )
      }
    }

    return (
      <div style={style}>
        {createItem()}
      </div>
    )
  }
}
