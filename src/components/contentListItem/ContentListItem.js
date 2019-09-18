/**
    * @author Yang,YN
    * @editor
    * @updated
    * @desc
    * @eg
    <ContentListItem>
      image = ''   //图标或者头像
      title = ''   //一般可表示名字、标题
      content = ''   //内容或者备注
      stats = ''    //评论、点赞、浏览的图标和名字
      route = ''     //点击时跳转的路由
      detailText = '' //详情按钮（默认不显示）
    </ContentListItem>
 */

import React from 'react';

export default class ContentListItem extends React.Component {

   onClick = (route) => {
     const id = this.props.id || '';
     if(route){
       window.location.href = `#${route}?id=${id}`
     }
   }

   render(){

     const { image,title,content,stats,route,detailText } = this.props;
     const icon = stats && stats.icon ? stats.icon : '';
     const record = stats && stats.record !== undefined ? stats.record  : '';

     const style = {
        backgroundColor:'#fff',
        display:'flex',
        marginBottom:'2px',
        borderBottom: '1px solid #f2f2f2',
        padding: '0.7em',
        ...this.props.style,
     }

    const imageStyle = {
      width: '95px',
      height: '95px',
      backgroundImage: `url(${ image })`,
      borderRadius: '2px',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      marginRight:'1.2em',
      ...this.props.imageStyle
    }

    const itemContent = {
      width:`calc(100% - 95px - 1.2em)`,
      display:'flex',
      flexDirection:'column',
      alignContent:'space-between',
      ...this.props.itemContent
    }

    const titleStyle = {
      fontSize:'16px',
      color: '#000',
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: 2,
      overflowY: 'hidden',
      maxHeight: '48px',
      lineHeight:'1.3em',
      ...this.props.titleStyle
    }

    const itemFooter = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '12px',
      color: '#888',
      ...this.props.itemFooter
    }

    const iconStyle =  {
      width: '20px',
      height: '20px',
      marginRight: '0.8em',
      ...this.props.iconStyle
    }

    const contentStyle = {
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: 1,
      overflowY: 'hidden',
      fontSize: '13px',
      color: '#888',
      margin:'0.5em 0',
      ...this.props.contentStyle
    }

    const detailTextStyle = {
      display:'inline-block',
      padding: '0.1em 0.5em',
      borderRadius: '10px',
      border:'1px solid rgba(166, 166, 166, 1)',
      color:'#666',
      fontSize: '13px',
      ...this.props.detailTextStyle
    }

    const contentOutStyle = {
      flex:1,
    }

     return (
       <div style={ style } onClick={ () => this.onClick(route) }>
          <div style={ imageStyle }></div>
          <div style={ itemContent} >
              <div style={ titleStyle }>{ title }</div>
              <div style={ contentOutStyle }>
                <div style={ contentStyle }>{ content }</div>
              </div>
              <div style={ itemFooter }>
                <div style= {{ display:'flex',alignItems:'center' }}>
                  { icon ? <img src={ icon } alt='image' style={ iconStyle }/> : '' }
                  { record !== undefined ? <span>{ record }</span> : '' }
                </div>
                {
                  detailText ?
                  <a style={ detailTextStyle } onClick={() => this.onClick(route)}>{ detailText }</a>
                  : null
                }
              </div>
          </div>
       </div>
     )
   }
}
