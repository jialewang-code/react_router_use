import React, { Component } from 'react'
import PubSub from 'pubsub-js'
// import axios from 'axios'

export default class Search extends Component {

  search=async () => {
    //获取输入的值
    const { inputElement: { value } } = this;//连续的解构赋值
    //发送请求前通知List更新状态
    PubSub.publish('myState', { isFirst: false, isLoading: true })
    //#region 
    //发送请求----xhr
    // axios.get(`/api1/search/users?q=${value}`).then(
    //   response => { 
    //     //发送请求成功后通知List更新状态
    //     PubSub.publish('myState',{isLoading:false,users:response.data.items})
    //    },
    //   error => {
    //     //发送请求失败后通知List更新状态
    //     PubSub.publish('myState',{isLoading:false,err:error.message})
    //   }
    // )
    //#endregion
    //#region 
    //发送请求----fetch(未优化)
    // fetch(`/api1/search/users?q=${value}`).then(
    //   response => {
    //     console.log('联系服务器成功');
    //     return  response.json()//数据在response.json()方法中
    //   },
    //   error => {
    //     console.log('联系服务器失败', error);
    //     return new Promise(()=>{})//中断promise链，不在往下走
    //   }
    // ).then(
    //   response => { console.log('获取数据成功', response); },
    //   error=>{console.log('获取数据失败',error);}
    // )
    //#endregion
    //#region 
    //发送请求----fetch(小优化)
    // fetch(`/api1/search/users?q=${value}`).then(
    //   response => {
    //     console.log('联系服务器成功');
    //     return  response.json()//数据在response.json()方法中
    //   }
    // ).then(
    //   response => { console.log('获取数据成功', response); }
    // ).catch(
    //   error => {console.log('获取数据失败',error);}
    // )
    //#endregion
    //发送请求----fetch(优化),关注分离设计(分多步获取结果)
    try {
      const response = await fetch(`/api1/search/users?q=${value}`)
      const data = await response.json();
      //发送请求成功后通知List更新状态
      PubSub.publish('myState',{isLoading:false,users:data.items})
    } catch (error) {
      console.log('获取数据失败');
      //发送请求失败后通知List更新状态
      PubSub.publish('myState',{isLoading:false,err:error.message})
    }
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
