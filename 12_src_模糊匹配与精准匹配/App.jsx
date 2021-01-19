import React, { Component } from 'react'
import { Route,Switch } from 'react-router-dom'
import Home from './pages/Home'//Home路由组件
import About from './pages/About'//About路由组件
import Header from './components/Header'//Header一般组件
import MyNavLink from './components/MyNavLink'//二次封装NavLink标签

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
              {/* 标签体内容About是一个特殊的标签属性，默认带children key */}
              <MyNavLink to='/about' title='About'>About</MyNavLink>
              <MyNavLink to='/home/a/b'>Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由  路由默认是模糊匹配，exact关键字开启严格匹配 */}
                <Switch>
                  <Route exact path='/about' component={About} />
                  <Route exact path='/home' component={Home }/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
