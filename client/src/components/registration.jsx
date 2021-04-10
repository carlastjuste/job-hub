import React, { Component } from 'react';
//import "../styles/Form.css";
import axios from "axios";

class Registration extends Component {
    state = {
        email: "",
        password: "",
      };
    
//   var userdata =


    handleChange =(event) => {
        const {name, value } = event.target
      this.setState({[name]: value });
    }
  
    handleSubmit =(event) => {
      alert('registration was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
handleFormSubmit = (event) => {
    event.preventDefault()
    console.log("testing function")

    axios
    .post("/api/auth/register_login", {
        email : this.state.email,
        password: this.state.password
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
        console.log(err.response);
    });
}

     render() { 
         console.log("hello")
        return ( 
            <React.Fragment>
{/* <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form> */}
    
    

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
              <form action="#" className="login" onSubmit={this.handleFormSubmit}>
                <div className="field">
                  <input type="text" onChange={this.handleChange} placeholder="Email Address" required />
                </div>
                <div className="field">
                  <input type="password" onChange={this.handleChange} placeholder="Password" required />
                </div>
                <div className="pass-link">
                  <a href="#">Forgot password?</a></div>
                <div className="field btn">
                  <div className="btn-layer">
                  </div>
                  <input type="submit"  defaultValue="Login" />
                </div>
                
                
                <div className="signup-link">
                  Not a member? <a href>Signup now</a></div>
              </form>
              <form action="#" className="signup">
                <div className="field">
                  <input type="text" onChange={this.handleChange} placeholder="Email Address" required />
                </div>
                <div className="field">
                  <input type="password" onChange={this.handleChange} placeholder="Password" required />
                </div>
                <div className="field">
                  <input type="password" placeholder="Confirm password" required />
                </div>
                <div className="field btn">
                  <div className="btn-layer">
                  </div>
                  <input type="submit" onClick={this.handleFormSubmit} defaultValue="Signup" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
);
            </React.Fragment>
         );
    }
        }
        export default Registration;