/**
    * @author Yang,YN
    * @editor
    * @updated
    * @desc
    * @eg
    <LineContentItem>
      icon = ''   //图标或者头像
      title = ''   //一般可表示名字、标题
      content = ''     //内容或备注
    </LineContentItem>
 */

import React from 'react';

export default class LineContentItem extends React.Component {

  render() {

    const { icon,title,content } = this.props;

    const style = {
      backgroundColor: '#fff',
      display: 'flex',
      justifyContent:'space-between',
      alignItems: 'center',
      padding: '0.8em 0.5em',
      fontSize: '14px',
      borderBottom: '1px solid #f2f2f2',
      ...this.props.style
    }

    const leftStyle = {
      display:' flex',
      alignItems:'center',
    }

    const iconStyle = {
      width:'48px',
      height:'48px',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '50%',
      marginRight: '1em',
      ...this.props.iconStyle
    }

    const titleStyle = {
      ...this.props.titleStyle
    }

    const contentStyle = {
      color: '#A5ABB0',
      ...this.props.contentStyle
    }

    return (
      <div style={style}>
        <div style={ leftStyle }>
          { icon ? <div style={{ backgroundImage:`url(${icon})`,...iconStyle }} /> : ''}
          { title ? <div style={ titleStyle }>{ title }</div> : '' }
        </div>
        { content ? <div style={ contentStyle }>{ content }</div> : '' }
      </div>
    )
  }
}
