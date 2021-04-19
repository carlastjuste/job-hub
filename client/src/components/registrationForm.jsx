import React, { Component } from 'react';

import axios from 'axios';

const apiEndPoint = "http://localhost:5000/users/add";
//import "../styles/Form.css";

class RegistrationForm extends Component {
    state = { 
        account: {
            username: '' , 
            password:'' , 
            passwordConfirm: '',
            firstName:'',
            lastName:''
        },
        errors: {
            username:''
        }

     }

     componentDidMount() {
        // this.username.current.focus();
    }


     handleChange = e => {
        const account = {...this.state.account};
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({account});

    };



    handleSubmit = async e => {
        e.preventDefault(); 
        if (this.state.password === this.state.passwordConfirm) {
 
     try {
        //call backend server
        console.log('Submitted');
        const {data: account} = await axios.post(apiEndPoint, this.state.account, {headers:{"Content-Type" : "application/json"}});
        console.log(account);
        }catch (err) {
            console.log(err);
        }
    }else
    return 'Passwords different';
            }



    render() { 
        const {account} = this.state; 

        return ( 
          <React.Fragment>
          <div className="form">
              <div className="form-header">
                  <h1>Sign Up</h1>
              </div>
              <form onSubmit={this.handleSubmit}>
                      <div className="form-group">
                          <label for="username"></label>
                          <input 
                            autoFocus 
                            value={account.username} 
                            onChange={this.handleChange}
                            type="email" 
                            className="form-control" 
                            id="username" 
                            name="username"
                            aria-describedby="emailHelp" 
                            placeholder="Email" />
                          <small id="emailHelp" className="form-text text-muted"></small>
                      </div>
                      <div className="form-group">
                          <label for="password"></label>
                          <input 
                            value={account.password} 
                            onChange={this.handleChange}
                            type="Text" 
                            className="form-control" 
                            id="password" 
                            name="password"
                            placeholder="Password" />

                      </div>
                      <div className="form-group">
                          <label for="passwordConfirm"></label>
                          <input 
                            value={account.passwordConfirm} 
                            onChange={this.handleChange}
                            type="text" 
                            className="form-control" 
                            id="passwordConfirm"
                            name="passwordConfirm" 
                            placeholder="Confirm Password" />
                          <small id="emailHelp" className="form-text text-muted"></small>
                      </div>
                      <div className="form-group">
                          <label for="firstName"></label>
                          <input 
                            value={account.firstName} 
                             onChange={this.handleChange}
                            type="text" 
                            className="form-control" 
                            id="firstName" 
                            name="firstName"
                            placeholder="First Name" />
                          <small id="emailHelp" className="form-text text-muted"></small>
                      </div>
                      <div className="form-group">
                          <label for="lastName"></label>
                          <input 
                            value={account.lastName} 
                            onChange={this.handleChange}
                            type="text" 
                            className="form-control" 
                            id="lastName" 
                            name="lastName"
                            placeholder="Last Name" />
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