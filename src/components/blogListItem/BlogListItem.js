/**
    * @author Yang,YN
    * @editor
    * @updated
    * @desc
    * @eg
    <BlogListItem>
      icon = ''   //图标或者头像
      name = ''   //一般可表示名字
      subtitle = ''   //副标题
      content = ''    //内容
      lives = []     //图片列表
      tags = []     //标签列表
      stats = []    //点赞、评论列表
      route =''     //点击每一个item时跳转的路由
      detailText = ''  //详情按钮（默认不显示）
    </BlogListItem>
 */

import React from 'react';

export default class BlogListItem extends React.Component {

  onClick = (value) => {
    const id = this.props.id || '';
    if(value){
      window.location.href = `#${value}?id=${id}`
    }
  }

  render(){

    const { icon,name,subtitle,content,lives,tags,stats,route,detailText } = this.props;

    const style = {
      display: 'flex',
      backgroundColor:'#fff',
      padding: '0.7em',
      borderBottom: '1px solid rgb(242, 242, 242)',
      ...this.props.style
    }

    const iconStyle = {
      width: '44px',
      height: '44px',
      margin: '3px',
      backgroundImage:`url(${icon})`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      borderRadius: '4px',
      ...this.props.iconStyle
    }

    const sectionStyle = {
      display: 'flex',
      flexDirection:'column',
      marginLeft: '0.8em',
      width: 'calc(100% - 50px - 0.8em)',
      ...this.props.sectionStyle
    }

    const nameStyle = {
      fontSize: '16px',
      color:'#333',
      ...this.props.nameStyle
    }

    const subtitleStyle = {
      color:'#888',
      fontSize:'13px',
      margin:'5px 0',
      ...this.props.subtitleStyle
    }

    const contentStyle = {
      fontSize:'16px',
      color:'#000',
      wordBreak: 'break-all',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: 3,
      /*autoprefixer: off*/
      WebkitBoxOrient: 'vertical',
      /*autoprefixer: on*/
      overflow: 'hidden',
      ...this.props.contentStyle,
    }

    const livesListStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent:'flex-start',
      margin: '10px 0 5px 0',
      ...this.props.livesListStyle
    }

    const tagListStyle =  {
      display:'flex',
      flexWrap: 'wrap',
      fontSize: '13px',
      color: '#c28324',
      ...this.props.tagListStyle
    }

    const itemStats = {
      margin: '5px 20px 0 0',
      fontSize: '12px',
      color: '#888',
      ...this.props.itemStats
    }

    const detailTextStyle = {
      color:'rgb(136, 136, 136)',
      marginRight:'5px',
      ...this.props.detailTextStyle
    }

    const statsImg = {
      width:'16px',
      height:'16px',
      margin: '2px 5px 5px 0px',
      ...this.props.statsImg
    }

    const liveStyle = (value) => {
      return {
        width: '80px',
        height:'80px',
        borderRadius: '3px',
        margin:'0 5px 5px 0',
        backgroundImage: `url(${value})`,
        backgroundPosition:'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover',
        overflow:'hidden',
        ...this.props.livesImage
      }
    }

    return (
      <div style={ style } onClick={() => this.onClick(route)}>
        { icon ? <div style={ iconStyle }></div> : null }
        <div style={ sectionStyle }>
          <div style={ nameStyle }>{ name }</div>
          <div style={ subtitleStyle }>{ subtitle }</div>
          <div style={ contentStyle} >{ content }</div>
          {
            lives && lives.length > 0 ?
            <div style={ livesListStyle }>
              {
                 lives.map((item, index) => (
                  <div key={ index } style={ liveStyle(item.url) }></div>
                ))
              }
            </div>
            : ''
          }
          {
            tags && tags.length > 0 ?
            <div style={tagListStyle}>
              {
                tags.map((item, index) => (
                  <span key={index} style={{ marginRight: '1.2em' }}>{ item.tagName }</span>
                ))
              }
            </div>
            : ''
          }

          <div style={{margin: '0.5em 0',display:'flex',justifyContent:'space-between'}}>
            {
              stats && stats.length > 0 ?
              <span>
                {
                  stats.map((item, index) => (
                    <span key={index} style={itemStats}>
                      <img src={item.icon} alt='image' style={statsImg}/>
                      <span>{item.record}</span>
                    </span>
                  ))
                }
              </span>
              : ''
            }
            {
              detailText ?
              <a style={detailTextStyle} onClick={() => this.onClick(route)}>
                { detailText }
              </a>
              : null
            }
          </div>
        </div>
      </div>
    )
  }
}
