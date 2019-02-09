import React, { Component, Fragment } from 'react'

export default class PushPin extends Component {
  render() {
    
    return (
      <Fragment>
        
         <div id='blue' className='block-blue' style={{backgroundColor:'orange'}}>
            <nav className='pushpin-demo-nav' data-target='blue'>
              <div className='nav-wrapper light-blue' >
                <div className='container'>
                  <a className='brand-logo' href="#!">Blue</a>
                  <ul>
                    <li>
                      <a href="#!">Blue Link 1</a>
                    </li>
                    <li>
                      <a href="#!">Blue Link 2</a>
                    </li>
                    <li>
                      <a href="#!">Blue Link 3</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>

          <div>
            <nav>
              <div>
                <div>
                  <a href="#!">Red</a>
                  <ul>
                    <li>
                      <a href="#!">Red Link 1</a>
                    </li>
                    <li>
                      <a href="#!">Red Link 2</a>
                    </li>
                    <li>
                      <a href="#!">Red Link 3</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>

          <div>
            <nav>
              <div>
                <div>
                  <a href="#!" >Green</a>
                  <ul>
                    <li>
                      <a href="#!">Green Link 1</a>
                    </li>
                    <li>
                      <a href="#!">Green Link 2</a>
                    </li>
                    <li>
                      <a href="#!">Green Link 3</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
      </Fragment>
    )
  }
}
