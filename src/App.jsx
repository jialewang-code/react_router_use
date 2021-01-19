import React, { Component } from 'react'
import { Route,Switch,Redirect } from 'react-router-dom'
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
              <MyNavLink to='/about'>About</MyNavLink>
              <MyNavLink to='/home'>Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* 注册路由  Redirect重定向，放到路由最后，没有匹配到其它路由时使用 */}
                <Switch>
                  <Route path='/about' component={About} />
                  <Route path='/home' component={Home} />
                  <Redirect to='/about'/>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
