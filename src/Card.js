import React from 'react'

export default function Card() {
  return (
    <div>
      <div class="row">
        <div class="col s12 m6">
           {/* SIMPLE CARD WITHOUT TITLE  */}
          <div class="card">
            <div class="card-content">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                harum enim inventore ullam expedita nesciunt ea voluptatem
                corporis iusto sint?
              </p>
            </div>
          </div>

           {/* ADD COLOR  */}
          <div class="card blue lighten-1">
            <div class="card-content white-text">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                harum enim inventore ullam expedita nesciunt ea voluptatem
                corporis iusto sint?
              </p>
            </div>
          </div>
        </div>
        <div class="col s12 m6">
         {/* CARD WITH TITLE  */}
          <div class="card">
            <div class="card-content">
              <span class="card-title">Card With Title</span>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                harum enim inventore ullam expedita nesciunt ea voluptatem
                corporis iusto sint?
              </p>
            </div>
         {/* ADD LINKS  */}
            <div class="card-action">
              <a href="#">Read More</a> <a href="something">Read More</a>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col s12 m6">
           {/* CARD WITH IMAGE  */}
          <div class="card">
            <div class="card-image">
              <img src="/img/img1.jpg" alt="" />
              <span class="card-title yellow-text ">Card Image</span>
            </div>
            <div class="card-content">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                harum enim inventore ullam expedita nesciunt ea voluptatem
                corporis iusto sint?
              </p>
            </div>
            <div class="card-action"><a href="something">Read More</a></div>
          </div>
        </div>

        <div class="col s12 m6">
           {/* CARD WITH IMAGE & FLOATING BUTTON  */}
          <div class="card blue-grey lighten-4">
            <div class="card-image ">
              <img src="img/img2.jpg" alt=""/> <span class="card-title">Image & Button</span> <a class="btn-floating halfway-fab waves-effect waves-light blue" href="#something"> <i class="material-icons">add</i> </a>
            </div>
            <div class="card-content">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                harum enim inventore ullam expedita nesciunt ea voluptatem
                corporis iusto sint?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col s12 m6">
           {/* HORIZONTAL CARD  */}
          <div class="card horizontal">
            <div class=" card-image">
              <img src="img/img3.jpg" alt="" /></div>
            <div class="card-stacked">
              <div class="card-conetnt">
                {/* <span class="card-title">Horizontal</span> */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col s12 m6">
           {/* CARD REVEAL  */}
          <div>
            <div><img src="" /></div>
            <div>
              <span>Card Reveal <i></i> </span>
              <p>
                 add activator to anything 
                <a href="#!">Read More</a>
              </p>
            </div>
             inside of reveal 
            <div>
              <span>Card Title <i></i> </span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ad
                repudiandae sequi at quis assumenda iusto dolor in, maxime earum
                debitis ea vero aspernatur ipsum, totam iste molestias natus!
                Ullam?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col s12 m6">
           {/* TABBED CARD  */}
          <div>
            <div>
              <span>Tabbed Card</span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex,
                rem obcaecati. Recusandae laborum, odit commodi fuga dolores
                dolorem, minima hic similique illo, ipsam eos. Perspiciatis
                omnis voluptas sunt delectus ab?
              </p>
            </div>
            <div>
              <ul>
                <li><a href="#tab1">Tab 1</a></li>
                <li><a href="#tab2">Tab 2</a></li>
                <li><a href="#tab3">Tab 3</a></li>
              </ul>
            </div>
            <div>
              <div>This is the content for tab 1</div>
              <div>This is the content for tab 2</div>
              <div>This is the content for tab 3</div>
            </div>
          </div>
        </div>

        <div class="col s12 m6">
           {/* TABBED CARD COLORED  */}
          <div>
            <div>
              <span>Tabbed Card</span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex,
                rem obcaecati. Recusandae laborum, odit commodi fuga dolores
                dolorem, minima hic similique illo, ipsam eos. Perspiciatis
                omnis voluptas sunt delectus ab?
              </p>
            </div>
            <div>
               make tabs transparent 
              <ul>
                <li><a href="#tab4">Tab 1</a></li>
                <li><a href="#tab5">Tab 2</a></li>
                <li><a href="#tab6">Tab 3</a></li>
              </ul>
            </div>
            <div>
              <div>This is the content for tab 1</div>
              <div>This is the content for tab 2</div>
              <div>This is the content for tab 3</div>
            </div>
          </div>
        </div>
      </div>

       {/* CARD SIZES  */}
      <div class="row">
        <div class="col s12 m4">
           {/* SMALL  */}
          <div>
            <div><img src="" alt=""/> <span>Card Image</span></div>
            <div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                harum enim inventore ullam expedita nesciunt ea voluptatem
                corporis iusto sint?
              </p>
            </div>
            <div><a href="something">Read More</a></div>
          </div>
        </div>
        <div class="col s12 m4">
           {/* MEDIUM  */}
          <div>
            <div><img src="" alt="" /> <span>Card Image</span></div>
            <div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                harum enim inventore ullam expedita nesciunt ea voluptatem
                corporis iusto sint?
              </p>
            </div>
            <div><a href="something">Read More</a></div>
          </div>
        </div>
        <div class="col s12 m4">
           {/* LARGE  */}
          <div>
            <div><img src="" alt="" /> <span>Card Image</span></div>
            <div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                harum enim inventore ullam expedita nesciunt ea voluptatem
                corporis iusto sint?
              </p>
            </div>
            <div><a href="#">Read More</a></div>
          </div>
        </div>
      </div>

       {/* CARD PANELS & SHADOW  */}
      <div class="row">
        <div class="col s12 m3">
          <div>
            <span
              >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
              magni aut mollitia quis? Ab voluptate quaerat libero voluptatibus
              quisquam in dolorum nobis hic. Suscipit dignissimos laboriosam id
              nesciunt debitis exercitationem.
            </span>
          </div>
        </div>
        <div class="col s12 m3">
          <div>
            <span
              >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
              magni aut mollitia quis? Ab voluptate quaerat libero voluptatibus
              quisquam in dolorum nobis hic. Suscipit dignissimos laboriosam id
              nesciunt debitis exercitationem.
            </span>
          </div>
        </div>
        <div class="col s12 m3">
          <div>
            <span
              >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
              magni aut mollitia quis? Ab voluptate quaerat libero voluptatibus
              quisquam in dolorum nobis hic. Suscipit dignissimos laboriosam id
              nesciunt debitis exercitationem.
            </span>
          </div>
        </div>
        <div class="col s12 m3">
          <div>
            <span
              >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
              magni aut mollitia quis? Ab voluptate quaerat libero voluptatibus
              quisquam in dolorum nobis hic. Suscipit dignissimos laboriosam id
              nesciunt debitis exercitationem.
            </span>
          </div>
        </div>
      </div>

    </div>
  )
}
