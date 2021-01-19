import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {

  search=() => {
    //获取输入的值
    const { inputElement: { value } } = this;//连续的解构赋值
    //发送请求前通知List更新状态
    PubSub.publish('myState',{ isFirst: false, isLoading: true })
    //发送请求
    axios.get(`/api1/search/users?q=${value}`).then(
      response => { 
        //发送请求成功后通知List更新状态
        PubSub.publish('myState',{isLoading:false,users:response.data.items})
       },
      error => {
        //发送请求失败后通知List更新状态
        PubSub.publish('myState',{isLoading:false,err:error.message})
      }
    )
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索Github用户</h3>
        <div>
          <input ref={c=>this.inputElement=c} type="text" placeholder="请输入头像关键词" />&nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    )
  }
}
