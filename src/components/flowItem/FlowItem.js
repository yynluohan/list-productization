/**
    * @author Yang,YN
    * @editor
    * @updated
    * @desc
    * @eg
    <FlowItem>
      icon = ''   //图标或者头像
      title = ''   //一般可表示名字、标题
      path = ''     //点击时跳转的路由
    </FlowItem>
 */

import React from 'react';

export default class FlowItem  extends React.Component {

  onClick = (path) => {
    if (path) {
      window.location.href = `#${path}`
    }
  }

  render(){

    const { icon,title,path } = this.props;

    const style = {
      display: 'flex',
      alignContent: 'space-between',
      aligItems: 'center',
      padding: '0.8em 0',
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #f2f2f2',
      ...this.props.style
    }

    const iconStyle = {
      width: '25px',
      height: '25px',
      marginLeft:'0.8em',
      ...this.props.iconStyle
    }

    const titleStyle = {
      flex: '1',
      fontSize: '1em',
      color:'#000',
      marginLeft:'0.8em',
      ...this.props.titleStyle
    }

    const arrowStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: '0.3em',
      paddingRight: '0.9em',
      ...this.props.arrowStyle
    }

    return (
      <div style={ style } onClick={() => this.onClick(path)}>
        { icon ? <img src={icon} style={ iconStyle }/> : '' }
        { title ? <div style={ titleStyle }>{ title }</div> : '' }
        <div style={ arrowStyle }>
          >
        </div>
      </div>
    )
  }
}
