import React from 'react';

export default function BreadcrumbsAndFooter() {
  return (
    <div>
      <nav class="grey">
        <div class="nav-wrapper">
          <div class="container">
            <div class="col s12">
              <a href="#some" class="breadcrumb">
                Home
              </a>
              <a href="#some" class="breadcrumb">
                Users
              </a>
              <a href="#some" class="breadcrumb">
                Brad
              </a>
            </div>
          </div>
        </div>
      </nav>

      <br />

      <footer class="page-footer grey darken-3">
        <div class="container">
          <div class="row">
            <div class="col s12 m6">
              <h5 class="grey-text lighten-3">About Us</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit blanditiis laudantium impedit, ad natus rem? Quidem
                similique repudiandae animi? Hic suscipit saepe dolorum laborum
                provident veritatis cum reiciendis quas unde?{' '}
              </p>
            </div>

            <div class="col s12 m4 offset-m2">
              <h5 class="grey-text text-lighten-3">Links</h5>
              <ul>
                <li>
                  <a href="some" class="white-text">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="some" class="white-text">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="some" class="white-text">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="some" class="white-text">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright grey darken-2">
          <div class="container">
          Copyright &copy; 2019
          <a href="#somelink" class="grey-text text-lighten-3 right"> Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
