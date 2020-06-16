import React, { Component } from 'react'
import './Header.scss'

export default class Header extends Component {

  render() {
    let { title, desc } = this.props
    return (
      <header>
        <div className="container header">
          <div className="row">
            <div className="col">
              <div className="projectName">{title}</div>
              <h1 className="description">{desc}</h1>
            </div>
          </div>
        </div>
      </header>
    )
  }
}