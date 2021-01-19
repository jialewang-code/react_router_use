import React from 'react'
const { Component } = React;
import './welcome.css'

export default class Welcome extends Component {
  render () {
    return (
      <div>
        <h2 className='title'>Welcome to React!!</h2>
      </div>
    )
  }
}