import React, { Component } from 'react';
//import "../styles/Form.css";

class LoginForm extends Component {
    state = {  }

render() { 
    return ( 
        <React.Fragment>
            <div className="form">
                <div className="form-header">
                    <h1>Login</h1>
                </div>
                <form>
                        <div className="form-group">
                            <label for="Username"></label>
                            <input type="email" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Username" />
                            <small id="emailHelp" className="form-text text-muted"></small>
                        </div>
                        <div className="form-group">
                            <label for="Password"></label>
                            <input type="password" className="form-control" id="Password" placeholder="Password" />
                        </div>
                        <div className = "form-group"> 
                            <input type="submit" className="form-control" id="sub-form" value="Log In" />
                        </div>
                        <div id="formFooter">
                            <a className="underlineHover" href="#">Forgot Password?</a>
                        </div>
                </form>
            </div>
        </React.Fragment>
         );
    }
}
 
export default LoginForm;