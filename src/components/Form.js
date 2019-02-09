import React from 'react';
import $ from 'jquery';
import { findDOMNode } from 'react-dom';

export default class Form extends React.Component {
  //  const selectJQ = $('select').material_select();
  // const success = <i class="material-icons" style={{color:"green"}}>check</i>

  myJquery = () => {
    const select = 'select';
    const el = findDOMNode(this.refs.select);
    $(el).material_select();
  };

  render() {
    return (
      <div>
        <div class="row">
          <div class="col s12 l7">
            <form>
              {/* TEXT FIELD  */}
              <div class="input-field">
                <input id="name" type="text" />
                {/* {success} */}
                <label for="name">Name</label>
              </div>
              {/* VALUE & DISABLED  */}
              <div class="input-field">
                <input
                  placeholder="Email"
                  id="email"
                  type="email"
                  value="nas@gmail.com"
                  disabled
                />
                <label for="email">Email</label>
              </div>
              {/* TEXTAREA  */}
              <div class="input-field">
                <textarea
                  placeholder="Message"
                  id="message"
                  class="materialize-textarea"
                />
                <label for="message">Message</label>
              </div>
              {/* INLINE FIELD  */}
              Number of users:
              <div class="input-field inline">
                <input id="users" type="text" />
                <label for="users">#</label>
              </div>
              {/* ICON PREFIX  */}
              <div class="input-field">
                <i className="material-icons prefix">phone</i>
                <input id="phone" type="tel" />
                <label for="phone">Phone Number</label>
              </div>
              {/* VALIDATION & ERROR  */}
              <div class="input-field">
                <input
                  placeholder="Email"
                  id="email"
                  type="email"
                  class="validate"
                />

                <label
                  for="email"
                  data-error="Invalid Email 🙅"
                  data-success="👍"
                >
                  Email
                </label>
              </div>
              {/* SELECT (Must be initialized)  */}
              <div class="input-field">
                <select>
                  <option value="" disabled selected r>
                    {' '}
                    Select Option
                  </option>
                  <option value="1"> Option 1</option>
                  <option value="2"> Option 2</option>
                  <option value="3"> Option 3 </option>
                </select>
                <label>Select List</label>
              </div>
              {/* OPTION GROUPS  */}
              <div class="input-field">
                <select>
                  <optgroup label="Option Group 1">
                    <option value="1"> Option 1</option>
                    <option value="2"> Option 2</option>
                  </optgroup>
                  <optgroup label="Option Group 2">
                    <option value="1"> Option 3</option>
                    <option value="2"> Option 4</option>
                  </optgroup>
                </select>
                <label>Option Groups Select</label>
              </div>
              {/* MULTIPLE SELECT  */}
              <div class="input-field">
                <select multiple>
                  <optgroup label="Option Group 1">
                    <option value="1"> Option 3</option>
                    <option value="2"> Option 4</option>
                    <option value="2"> Option 5</option>
                  </optgroup>
                </select>
                <label>Multiple Groups Select</label>
              </div>
              {/* RADIO BUTTONS  */}
              <p>
                <input type="radio" name="gender" id="male" />
                <label for="male">Male</label>
              </p>
              <p>
                <input class="with-gap" type="radio" name="gender" id="female" />
                <label for="female">Female</label>
              </p>
              <br />
              {/* CHECKBOXES  */}
              <p>
                <input type="checkbox"   name="tech" id="html" />
                <label for="html">HTML</label>
              </p>
              <p>
                <input type="checkbox" class="filled-in" name="tech" id="css" checked/>
                <label for="css">CSS</label>
              </p>
              <p>
                <input type="checkbox" name="tech" id="js"  class="filled-in"/>
                <label for="js">Javascript</label>
              </p>
              <p>
                <input type="checkbox" name="tech" id="php" disabled />
                <label for="php">PHP</label>
              </p>
              <br />
              <div>
                <input type="submit" value="Submit" class="btn" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
