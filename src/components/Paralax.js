import React, { Component } from 'react'

export default class Paralax extends Component {

 

  render() {
   
    return (
      <div>

       <div className="parallax-container">
          <div className="parallax">
            <img src="img/img1.jpg" alt="#"/>
          </div>
        </div>

        <div className='section white'>
          <div className='row container'>
            <h2 className='header'>Parallax Example</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores doloremque accusantium veniam modi ea non quisquam
              corporis. Doloremque error, dolore, perspiciatis reprehenderit soluta vitae, at quisquam dolorum sequi quidem veritatis
              amet earum nihil illo dignissimos dicta! Hic nesciunt animi distinctio!</p>
          </div>
        </div>
         
        <div className="parallax-container"> 
          <div className="parallax">
            <img src="img/img2.jpg" alt=""/>
          </div>
        </div>
       
  </div>
    )
  }
}
