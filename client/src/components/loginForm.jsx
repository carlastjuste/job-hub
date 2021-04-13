import React, { Component } from 'react';
//import "../styles/Form.css";

class LoginForm extends Component {
    state = { 
        account: {
            username: '' , 
            password:''},
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

    validate = () => {
        const errors = {};

        const {account} = this.state;
        if(account.username.trim() ==='')
            errors.username = 'Username is required.';
    }

    handleSubmit = e => {
        e.preventDeault();

        const errors = this.validate();
        this.setState({errors});
        if (errors) return;

        console.log("Submited");

    }

render() { 
    const {account, errors} = this.state;

    return ( 
        <React.Fragment>
            <div className="form">
                <div className="form-header">
                    <h1>Login</h1>
                </div>
                <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label for="Username"></label>
                            <input 
                                autoFocus
                                value={account.username} 
                                onChange={this.handleChange}
                                error={errors.username}
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
                                error={errors.password}
                                type="password" 
                                className="form-control" 
                                id="password" 
                                name="password"
                                placeholder="Password" />
                        </div>
                        <div className = "form-group"> 
                            <input type="submit" className="form-control" id="sub-form" value="Log In" />
                        </div>
                        <div id="formFooter">
                            <a className="underlineHover" href="/recover">Forgot Password?</a>
                        </div>
                </form>
            </div>
        </React.Fragment>
         );
    }
}
 
export default LoginForm;