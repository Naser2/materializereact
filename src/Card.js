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
          <div class="card">
            <div class="card-image waves-effect waves-light waves-block"><img class="activator" src="img/img4.jpg" alt=""/></div>
            <div class="card-content" >
              <span class="card-title activator ">Card Reveal <i class="material-icons "> more_vert</i> </span>
              <p>
                 {/* add activator to anything  */}
                <a href="#!" class=" activator">Read More</a>
              </p>
            </div>
             {/* inside of reveal  */}
            <div class="card-reveal">
              <span class="card-title">Card Title <i class="material-icons">close</i> </span>
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
          <div class="card">
            <div class="card-content">
              <span class="card-title">Tabbed Card</span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex,
                rem obcaecati. Recusandae laborum, odit commodi fuga dolores
                dolorem, minima hic similique illo, ipsam eos. Perspiciatis
                omnis voluptas sunt delectus ab?
              </p>
            </div>
            <div class="card-tabs">
              <ul class="tabs tabs-width-fixed ">
                <li class="tab blue   waves-white"><a href="#tab1">Tab 1</a></li>

                <li class="tab yellow text-white"><a href="#tab2">Tab 2</a></li>
                <li class="tab yellow"><a href="#tab3">Tab 3</a></li>
              </ul>
            </div>
            <div class="card-content">
              <div id="tab1" class="purple-text">This is the content for tab 1</div>
              <div id="tab2" class="blue-text" >This is the content for tab 2</div>
              <div id="tab3" class="pink-text">This is the content for tab 3</div>
            </div>
          </div>
        </div>

        <div class="col s12 m6">
           {/* TABBED CARD COLORED  */}
           <div class="card orange darken white-text">
            <div class="card-content">
              <span class="card-title">Tabbed Card</span>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex,
                rem obcaecati. Recusandae laborum, odit commodi fuga dolores
                dolorem, minima hic similique illo, ipsam eos. Perspiciatis
                omnis voluptas sunt delectus ab?
              </p>
            </div>
            <div class="card-tabs">
              <ul class="tabs tabs-width-fixed tabs-transparent">
                <li class="tab  "><a href="#tab1">Tab 1</a></li>

                <li class="tab "><a href="#tab2">Tab 2</a></li>
                <li class="tab "><a href="#tab3">Tab 3</a></li>
              </ul>
            </div>
            <div class="card-content black lighten-4">
              <div id="tab1" class="purple-text">This is the content for tab 1</div>
              <div id="tab2" class="blue-text" >This is the content for tab 2</div>
              <div id="tab3" class="pink-text">This is the content for tab 3</div>
            </div>
          </div>
        </div>
      </div>

       {/* CARD SIZES  */}
      <div class="row">
        <div class="col s12 m4">
        <div class="card small">
            <div class="card-image">
              <img src="/img/img5.jpg" alt="" />
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
        <div class="col s12 m4">
           {/* MEDIUM  */}
           <div class="card medium">
            <div class="card-image">
              <img src="/img/img6.jpg" alt="" />
              <span class="card-title yellow-text ">Card Image</span>
            </div>
            <div class="card-content" >
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                harum enim inventore ullam expedita nesciunt ea voluptatem
                corporis iusto sint?
              </p>
            </div>
            <div class="card-action"><a href="something">Read More</a></div>
          </div>
        </div>

        <div class="col s12 m4">
           {/* LARGE  */}
         <div class="card large">
            <div class="card-image">
              <img src="/img/img7.jpg" alt="" />
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
      </div>

       {/* CARD PANELS & SHADOW  */}
      <div class="row">
        <div class="col s12 m3">
          <div class="card-panel blue z-depth-2">
            <span class="white-text"
              >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
              magni aut mollitia quis? Ab voluptate quaerat libero voluptatibus
              quisquam in dolorum nobis hic. Suscipit dignissimos laboriosam id
              nesciunt debitis exercitationem.
            </span>
          </div>
        </div>
        <div class="col s12 m3">
          <div class="card-panel indigo z-depth-3">
            <span class="white-text"
              >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
              magni aut mollitia quis? Ab voluptate quaerat libero voluptatibus
              quisquam in dolorum nobis hic. Suscipit dignissimos laboriosam id
              nesciunt debitis exercitationem.
            </span>
          </div>
        </div>
        <div class="col s12 m3">
          <div class="card-panel cyan z-depth-4">
            <span
              >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
              magni aut mollitia quis? Ab voluptate quaerat libero voluptatibus
              quisquam in dolorum nobis hic. Suscipit dignissimos laboriosam id
              nesciunt debitis exercitationem.
            </span>
          </div>
        </div>
        <div class="col s12 m3">
          <div class="card-panel amber">
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
