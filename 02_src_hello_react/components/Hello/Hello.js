import React, { Component } from 'react';
import hello from './hello.module.css';//样式模块化，防止同名样式冲突

export default class Hello extends Component {
  render () {
    return (
      <div>
        <h2 className={hello.title}>Hello,React!</h2>
      </div>
    )
  }
}