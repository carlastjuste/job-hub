import React, { Component } from 'react';
//import "../styles/Form.css";


class RegistrationForm extends Component {
    state = {  }
    render() { 
        return ( 
          <React.Fragment>
          <div className="form">
              <div className="form-header">
                  <h1>Sign Up</h1>
              </div>
              <form>
                      <div className="form-group">
                          <label for="Username"></label>
                          <input type="email" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Username" />
                          <small id="emailHelp" className="form-text text-muted"></small>
                      </div>
                      <div className="form-group">
                          <label for="Username"></label>
                          <input type="email" className="form-control" id="password" aria-describedby="emailHelp" placeholder="Password" />
                          <small id="emailHelp" className="form-text text-muted"></small>
                      </div>
                      <div className="form-group">
                          <label for="Username"></label>
                          <input type="email" className="form-control" id="passwordconfirm" aria-describedby="emailHelp" placeholder="Confirm Password" />
                          <small id="emailHelp" className="form-text text-muted"></small>
                      </div>
                      <div className="form-group">
                          <label for="Username"></label>
                          <input type="email" className="form-control" id="username" aria-describedby="emailHelp" placeholder="First Name" />
                          <small id="emailHelp" className="form-text text-muted"></small>
                      </div>
                      <div className="form-group">
                          <label for="Username"></label>
                          <input type="email" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Last Name" />
                          <small id="emailHelp" className="form-text text-muted"></small>
                      </div>
                      <div className = "form-group"> 
                          <input type="submit" className="form-control" id="sub-form" value="Sign Up" />
                      </div>
                      <div id="formFooter">
                          <a className="underlineHover" href="#"></a>
                      </div>
              </form>
          </div>
      </React.Fragment> 
         );
    }
}
 
export default RegistrationForm;