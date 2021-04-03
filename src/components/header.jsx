import React, { Component } from 'react';


class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <nav className="navbar navbar-light bg-light static-top">
                <div className="container">
                    <a className="navbar-brand" href="#">JOB HUB</a>
                    <a className="btn btn-primary" href="#">Sign In</a>
                </div>
                </nav>
            </React.Fragment>

        );
    }
}
 
export default Header;