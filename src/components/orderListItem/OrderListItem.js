/**
    * @author Yang,YN
    * @editor
    * @updated
    * @desc
    * @eg
    <OrderListItem>
      icon = ''   //图标或者头像
      title = ''   //一般可表示名字、标题
      subTitle = '' //可表示副标题或者其他
      orderNumber = '' //可表示单号
      type = ''    //类型
      timestamp = ''     //表示时间类的
      action = ''  //点击时跳转到的路由
      place = ''  //表示地区
      distance = ''  //可表示距离
    </OrderListItem>
 */

import React from 'react';

export default class OrderListItem extends React.Component {

  onClick = (value) => {
    console.log('22');
    if (value) {
      window.location.href = `#${value}`
    }
  }


  render(){

    const { icon,title,subTitle,orderNumber,type,timestamp,action,place,distance } = this.props;

    const style = {
      backgroundColor: '#fff',
      marginBottom: '5px',
      padding: '0.7em',
    }

    const headerStyle = {
      marginBottom:'0.5em',
      display: 'flex',
      justifyContent: 'space-between',
      ...this.props.headerStyle
    }

    const sectionStyle = {
      display: 'flex',
      ...this.props.sectionStyle
    }

    const iconStyle = {
      backgroundImage: `url(${icon})`,
      width:'95px',
      height:'75px',
      overflow:'hidden',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize:'cover',
      borderRadius: '4px',
      ...this.props.iconStyle
    }

    const sectionRightStyle = {
      display: 'flex',
      flexDirection: 'column',
      width: 'calc(100% - 95px - 0.7em)',
      marginLeft: '0.7em',
      ...this.props.sectionRightStyle
    }

    const positionStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      ...this.props.positionStyle,
    }

    const placeStyle = {
      fontSize: '12px',
      color:'rgba(194, 131, 36, 1)',
      ...this.props.placeStyle
    }

    const distanceStyle = {
      fontSize:'12px',
      color: 'rgba(136, 136, 136, 1)',
      ...this.props.distanceStyle
    }

    const titleStyle = {
      fontSize: '14px',
      ...this.props.titleStyle
    }

    const subTitleStyle = {
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: 2,
      overflow: 'hidden',
      fontSize: '12px',
      flex:1,
      ...this.props.subTitleStyle
    }

    return (
      <div>
        <div style={ style } onClick={() =>this.onClick(action)}>
          {
            type || orderNumber ?
            <div style={headerStyle}>
              <div>{ type }</div>
              <div>{ orderNumber }</div>
            </div>
            : null
          }
          <div style={ sectionStyle }>
            <div style={ iconStyle }></div>
            <div style={ sectionRightStyle }>
              <div style={ titleStyle }>{ title }</div>
              <div style={ subTitleStyle }>{ subTitle }</div>
              <div style={ positionStyle }>
                <span style={ placeStyle }>{ place }</span>
                <span style={ distanceStyle }>{ distance }</span>
              </div>
            </div>
          </div>

          {
            timestamp ?
            <div style={{ marginTop:'0.5em' }}>{ timestamp }</div>
           : null
        }
        </div>
      </div>
    )
  }

}
