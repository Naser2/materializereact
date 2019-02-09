import React, { Component, Fragment } from 'react'

export default class Sidenav extends Component {
  render() {
    return (
      <Fragment>
         <ul id="slide-out" className="side-nav">
            <li>
              <div className='user-view'>
                <div className='background'>
                  <img src='img/img4.jpg' alt='#' />
                </div>
                <a href='#!'>
                  <img className='circle' src='img/img5.jpg' alt='#'/>
                </a>
                <a href='#!'>
                  <span className='white-text name' >John Doe</span>
                </a>
                <a  href='#!'>
                  <span className='white-text email'>jdoe@gmail.com</span>
                </a>
              </div>
            </li>
            <li>
              <a  href='#!'>
                <i className='material-icons'>dashbord</i>Dashboard</a>
            </li>
            <li>
              <a  href='#!'>Posts</a>
            </li>
            <li className='divider'>
              <div></div>
            </li>
            <li>
              <a  href='#!' className='subheader'>Account Info</a>
            </li>
            <li>
              <a  href='#!' className='waves-effect'>Logout</a>
            </li>
        </ul>
        <a  href='#!' data-activates='slide-out' className='button-collapse'>
          <i className='material-icons'>menu</i>
        </a>
      </Fragment>
    )
  }
}
