import React from 'react'

export default function Scrollspy() {
  return (
    <div>
      <div class="row">
            <div class="col m9 l10 s12">
              <div id='who' class="section scrollspy">
                <h4>Who Are We?</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis laborum tenetur tempora quo ipsum! Nisi nobis,
                  dolorem excepturi quia rem architecto cupiditate repudiandae delectus nihil, commodi, accusamus corrupti obcaecati
                  sequi fuga a ipsum. Labore earum corrupti voluptatibus placeat blanditiis saepe, id officiis quas nesciunt. Voluptate,
                </p>
              </div>
      
              <div id='what' class='section scrollspy'>
                <h4>What Do We Do?</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis laborum tenetur tempora quo ipsum! Nisi nobis,
                  dolorem excepturi quia rem architecto cupiditate repudiandae delectus nihil, commodi, accusamus corrupti obcaecati
                  sequi fuga a ipsum. Labore earum corrupti voluptatibus placeat blanditiis saepe, id officiis quas nesciunt. Voluptate,
                </p>
              </div>
      
              <div id='where' class='section scrollspy'>
                <h4>Where Are We?</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis laborum tenetur tempora quo ipsum! Nisi nobis,
                  dolorem excepturi quia rem architecto cupiditate repudiandae delectus nihil, commodi, accusamus corrupti obcaecati
                  sequi fuga a ipsum. Labore earum corrupti voluptatibus placeat blanditiis saepe, id officiis quas nesciunt. Voluptate,Lorem
                  ipsum dolor sit amet consectetur, adipisicing elit. Facilis laborum tenetur tempora quo ipsum! Nisi nobis, dolorem
                  excepturi quia rem architecto cupiditate repudiandae delectus nihil, commodi, accusamus corrupti obcaecati sequi
                  fuga a ipsum. Labore earum corrupti voluptatibus placeat blanditiis saepe, id officiis quas nesciunt. Voluptate,
                </p>
              </div>
            </div>
            <div class="col hide-on-small-only m3 l2 s12">
              <ul class='pinned section table-of-contents '>
              <blockquote><li>
                  <a href='#who'>Who We Are</a>
                </li>
                <li>
                  <a href='#what'>What We Do</a>
                </li>
                <li>
                  <a href='#where'>Where We Are</a>
                </li></blockquote> 
              </ul>
            </div>
          </div>
    
        <div style={{"margin-top":"700px"}}></div>

  </div>

  )
}
