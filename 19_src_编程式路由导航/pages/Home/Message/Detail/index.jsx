import React, { Component } from 'react'
// import qs from 'querystring'//react自带的库

const detailData = [
  {id:'01',content:'我爱你，小梅'},
  {id:'02',content:'我爱你，你好呀'},
  {id:'03',content:'我爱你，我们成功了'},
]

export default class Detail extends Component {
  render () {
    console.log(this.props);
    // 接收 params 参数
    // const { id, title } = this.props.match.params;

    // 接收 search 参数
    // const { search } = this.props.location;
    // const { id, title } = qs.parse(search.slice(1))//去掉?并解析字符串

    // 接收 state 参数
    const { id,title } = this.props.location.state||{};
    
    const result = detailData.find((detailObj) => {
      return detailObj.id === id;
    })||{};
    return (
      <ul>
        <li>ID:{id}</li>
        <li>TITLE:{title}</li>
        <li>CONTENT:{result.content }</li>
      </ul>
    )
  }
}
