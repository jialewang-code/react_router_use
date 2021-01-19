import React, { Component } from 'react'
import { NavLink,Route } from 'react-router-dom'
import Home from './pages/Home'//Home路由组件
import About from './pages/About'//About路由组件
import Header from './components/Header'//Header一般组件

export default class App extends Component {
  render () {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 多页面是靠 html <a>标签跳转的 */}
              {/* <a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a> */}
              
              {/* React 靠路由链接实现组件切换---编写路由链接 */}
              <NavLink activeClassName='guigu' className="list-group-item" to='/about'>About</NavLink>
              {/* NavLink 标签点击谁，谁就添加 active 高亮类 */}
              <NavLink activeClassName='guigu' className="list-group-item" to='/home'>Home</NavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由 */}
                <Route path='/about' component={About} />
                <Route path='/home' component={Home }/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
