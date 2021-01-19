import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  //鼠标移入、移出的标识
  state={mouse:false}

  //鼠标移入、移出的处理事件
  handleMouse=(flag) => {
    return () => {
      this.setState({mouse:flag})
    }
  }

  //勾选、取消勾选某一个todo的回调
  changeCheck=(id) => {
    return (event) => {
      this.props.updateTodo(id,event.target.checked);
    }
  }

  //删除某一个todo的回调
  handleDelete = (id) => {
    //window.confirm window弹出框，点确定返回true，点取消返回false
    if (window.confirm('确定删除吗？')) {
      this.props.deleteTodo(id)
    }
  }

  render () {
    const { id,name, done } = this.props;
    const { mouse } = this.state;
    //defaultChecked第一次起作用，后面没效果
    return (
      <li style={{backgroundColor:mouse? '#ddd':'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.changeCheck(id) }/>
          <span>{ name }</span>
        </label>
        <button onClick={()=>this.handleDelete(id)} className="btn btn-danger" style={{ display: mouse? 'block':'none' }}>删除</button>
      </li>
    )
  }
}
