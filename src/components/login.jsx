import React, { Component } from 'react';

class Login extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div classname="title signup">
          Signup Form</div>
        <div classname="form-container">
          <div classname="slide-Func">
            <input type="radio" name="slide" id="login" defaultchecked />
            <input type="radio" name="slide" id="signup" />
            <label htmlfor="login" classname="slide login">Login</label>
            <label htmlfor="signup" classname="slide signup">Signup</label>
            <div classname="slider-tab">
            </div>
          </div>
          <div classname="form-inner">
            <form action="#" classname="login">
              <div classname="field">
                <input type="text" placeholder="Email Address" required />
              </div>
              <div classname="field">
                <input type="password" placeholder="Password" required />
              </div>
              <div classname="pass-link">
                <a href="#">Forgot password?</a></div>
              <div classname="field btn">
                <div classname="btn-layer">
                </div>
                <input type="submit" defaultvalue="Login" />
              </div>


              {/* <div classname="signup-link">
                Not a member? <a href>Signup now</a></div>
            </form>
            <form action="#" classname="signup">
              <div classname="field">
                <input type="text" placeholder="Email Address" required />
              </div>
              <div classname="field">
                <input type="password" placeholder="Password" required />
              </div>
              <div classname="field">
                <input type="password" placeholder="Confirm password" required />
              </div>
              <div classname="field btn">
                <div classname="btn-layer">
                </div>
                <input type="submit" defaultvalue="Signup" />
              </div> */}
            </form>
          </div>
        </div>
       
            </React.Fragment>
         );
    }
}
 
export default Login;