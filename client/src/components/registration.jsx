import React, { Component } from 'react';
//import "../styles/Form.css";


class Registration extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <p> This is the registration form </p>
                <div>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="form.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div className="Form-Box">
          <div className="title-text">
            <div className="title login">
              Login Form</div>
            <div className="title signup">
              Signup Form</div>
          </div>
          <div className="form-container">
            <div className="slide-Func">
              <input type="radio" name="slide" id="login" defaultChecked />
              <input type="radio" name="slide" id="signup" />
              <label htmlFor="login" className="slide login">Login</label>
              <label htmlFor="signup" className="slide signup">Signup</label>
              <div className="slider-tab">
              </div>
            </div>
            <div className="form-inner">
              <form action="#" className="login">
                <div className="field">
                  <input type="text" placeholder="Email Address" required />
                </div>
                <div className="field">
                  <input type="password" placeholder="Password" required />
                </div>
                <div className="pass-link">
                  <a href="#">Forgot password?</a></div>
                <div className="field btn">
                  <div className="btn-layer">
                  </div>
                  <input type="submit" defaultValue="Login" />
                </div>
                
                
                <div className="signup-link">
                  Not a member? <a href>Signup now</a></div>
              </form>
              <form action="#" className="signup">
                <div className="field">
                  <input type="text" placeholder="Email Address" required />
                </div>
                <div className="field">
                  <input type="password" placeholder="Password" required />
                </div>
                <div className="field">
                  <input type="password" placeholder="Confirm password" required />
                </div>
                <div className="field btn">
                  <div className="btn-layer">
                  </div>
                  <input type="submit" defaultValue="Signup" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
            </React.Fragment>
         );
    }
}
 
export default Registration;