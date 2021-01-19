import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

  getStudentsData=() => {
    axios.get('http://localhost:3000/api1/students').then(response => {
      console.log('请求数据成功',response.data);
    }, error => {
        console.log('请求数据失败',error);
    })
  }

  getCarsData=() => {
    axios.get('http://localhost:3000/api2/cars').then(response => {
      console.log('请求数据成功',response.data);
    }, error => {
        console.log('请求数据失败',error);
    })
  }
  
  render() {
    return (
      <div>
        <button onClick={this.getStudentsData}>获取学生数据</button>
        <button onClick={this.getCarsData}>获取汽车数据</button>
      </div>
    )
  }
}
