import React from 'react'

export default function Typography() {
  return (
    <div>
        {/* HEADINGS  */}
      <h1>Heading One</h1>
      <h2>Heading Two</h2>
      <h3>Heading Three</h3>
      <h4>Heading Four</h4>
      <h5>Heading Five</h5>
      <h6>Heading Six</h6>
      {/*  PARAGRAPH */}
      <p>
        Lorem ipsum dolor hhhh sit amet consectetur adipisicing elit. Et, modi
        consequatur. Aliquam repellat dolorum eveniet est, provident aperiam
        veniam quo.
      </p>
      {/*  BLOCKQUOTE */}
      <blockquote>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint omnis
        temporibus animi voluptas, expedita sit provident vero nisi doloribus
        maiores?
      </blockquote>
      {/*  FLOW TEXT */}
      <p class="flow-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ex non
        vero nemo minima corporisullam blanditiis consequuntur, est ab.
      </p>

      {/*  TEXT ALIGNMENT */}
      <div><h5 class="left-align">Left aligned text</h5></div>
      <div><h5 class="right-align">Right aligned text</h5></div>
      <div><h5 class="center-align">Center aligned text</h5></div>

      {/*  VERTICAL ALIGNMENT */}
      <div>
        <h5 class="valign-wrapper"  style={{'height':"400px", 'background':"#f4f4f4" ,'padding-left': '175px', 'padding-right': '175px'}}
          
        >
          This should be vertically aligned
        </h5>
      </div>

      {/*  QUICK FLOATS */}
      <p class="left">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium,
        qui?
      </p>
      <p class="right">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium,
        qui?
      </p>
      <div class="clearfix"></div>
      {/*  CLEAR FLOATS */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, nulla!
      </p>
      {/*  END HERE */}
 
    </div>
  )
}
