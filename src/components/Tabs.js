import React from "react"

export default function Tabs() {
  return (
    <div>
      <div class="row">

      <div class="col m9 l10 s12">
          <ul class="tabs">
            <li class="tab col s3">
              <a href="#tab1">Tab 1</a>
            </li>
            <li class="tab col s3">
              <a href="#tab2">Tab 2</a>
            </li>
            <li class="tab col s3">
              <a href="#tab3">Tab 3</a>
            </li>
            <li class="tab col s3">
              <a href="#tab4">Tab 4</a>
            </li>
          </ul>
        </div>

        <div id="tab1" class="col s12">
          <h3 >Tab 1</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dolorem!</p>
        </div>

        <div id="tab2" class="col s12">
          <h3>Tab 2</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias ipsa consectetur magnam suscipit omnis labore voluptatem</p>
       </div>
      
        <div id="tab3" class="col s12">
          <h3>Tab 3</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quisquam ipsum distinctio odit dolore asperiores</p>
         .</div>
      
        <div id="tab4" class="col s12">
          <h3>Tab 4</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ducimus id hic nostrum sequi excepturi facilis
            iusto, et voluptate tempora</p>
        </div>

    

  
      <ul id='tabs-swipe-demo' class='tabs'>

        <li class='tab col s3'>
          <a href="#tab-swipe-1">Test 1</a>
        </li>

        <li class='tab col s3'>
          <a href="#tab-swipe-2">Test 2</a>
        </li>

        <li class='tab col s3'>
         <a href="#tab-swipe-3">Test 3</a>
        </li>

      </ul>
      <div id="tab-swipe-1" class='col s12 blue'>Test 1</div>
      <div id="tab-swipe-2" class="col s12 green">Test 2</div>
      <div id="tab-swipe-3" class='col s12 purple'>Test 3</div>
      </div>
    </div>
  )
}
