/**
    * @author Yang,YN
    * @editor
    * @updated
    * @desc  //展示有关评论的item
    * @eg
    <CommentListItem>
      icon = ''   //图标或者头像
      name = ''   //一般可表示名字
      commentName = ''   //评论者的名字或其他
      content = ''    //内容
      subtitle = ''     //副标题
      isDeleteAllow = true     //是否显示删除按钮
    </CommentListItem>
 */

import React from 'react';
import { remove } from '../../utils/services';

export default class CommentListItem extends React.Component {

  onDelete = (value) => {
    if(this.props.id){
      this.props.onDelete(this.props.id);
    }
  }

  render(){

    const { icon,name,commentName,content,subtitle,isDeleteAllow } = this.props;

    const style = {
      display: 'flex',
      backgroundColor: '#fff',
      padding: '0.7em',
      borderBottom: '1px solid #f2f2f2',
      ...this.props.style
    }

    const iconStyle = {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      ...this.props.iconStyle
    }

    const nameStyle = {
      color: '#000',
      ...this.props.nameStyle
    }

    const commentNameStyle = {
      color: 'rgba(166, 166, 166, 1)',
      ...this.props.commentNameStyle
    }

    const contentStyle = {
      wordWrap:'break-word',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      lineClamp: '2',
      width:'100%',
      ...this.props.contentStyle
    }

    const itemContentFirst = {
      wordWrap:'break-word',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      lineClamp: '2',
      ...this.props.itemContentFirst
    }

    const isDeleteAllowStyle = {
      color:'rgb(128, 128, 128)',
      ...this.props.isDeleteAllowStyle
    }

    const sectionStyle = {
      marginLeft: '0.7em',
      width: 'calc(100% - 50px - 0.7em)',
      ...this.props.sectionStyle
    }

    const subtitleStyle = {
      margin:'5px 0',
      ...this.props.subtitleStyle
    }

    return (
      <div style={ style }>
        { icon ? <img src={ icon } style={ iconStyle }/> : ''}
        <div style={ sectionStyle }>
          <div style={{ display: 'flex',justifyContent: 'space-between' }}>
            <span style={nameStyle}>{name}</span>
            {
              isDeleteAllow ?
              <a style={ isDeleteAllowStyle } onClick={() => this.onDelete()}>删除</a>
              : ''
            }
          </div>
          { subtitle ? <div style={ subtitleStyle }>{ subtitle }</div> : '' }
          {
            commentName ?
            <div style={itemContentFirst}>
              回复 <span style={commentNameStyle}>{ commentName }</span> : { content }
            </div>
            :
            <div style={ contentStyle }>{ content }</div>
          }
        </div>
      </div>
    )
  }
}
