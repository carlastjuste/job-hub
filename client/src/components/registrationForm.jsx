import React, { Component } from 'react';
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

    // validate = () => {
    //     const errors = {};

    //     const {account} = this.state;
    //     if(account.username.trim() ==='')
    //         errors.username = 'Username is required.';
    // }


    handleSubmit = e => {

        e.preventDeault();

        const errors = this.validate();
        this.setState({errors});
        if (errors) return;

        console.log("Submited");

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
                            type="email" 
                            className="form-control" 
                            id="password" 
                            name="password"
                            aria-describedby="emailHelp" 
                            placeholder="Password" />
                          <small id="emailHelp" className="form-text text-muted"></small>
                      </div>
                      <div className="form-group">
                          <label for="passwordConfirm"></label>
                          <input 
                            value={account.passwordConfirm} 
                            onChange={this.handleChange}
                            type="email" 
                            className="form-control" 
                            id="passwordConfirm"
                            name="passwordConfirm" 
                            aria-describedby="emailHelp" 
                            placeholder="Confirm Password" />
                          <small id="emailHelp" className="form-text text-muted"></small>
                      </div>
                      <div className="form-group">
                          <label for="firstName"></label>
                          <input 
                            value={account.firstName} 
                             onChange={this.handleChange}
                            type="email" 
                            className="form-control" 
                            id="firstName" 
                            name="firstName"
                            aria-describedby="emailHelp" 
                            placeholder="First Name" />
                          <small id="emailHelp" className="form-text text-muted"></small>
                      </div>
                      <div className="form-group">
                          <label for="lastName"></label>
                          <input 
                            value={account.lastName} 
                            onChange={this.handleChange}
                            type="email" 
                            className="form-control" 
                            id="lastName" 
                            name="lastName"
                            aria-describedby="emailHelp" 
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