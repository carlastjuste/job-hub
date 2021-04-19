import React, { Component } from 'react';

class Header extends Component {
    state = {  }


    render() { 
        return ( 
    <React.Fragment>
        {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link> */}
        <div className="Header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            
            <div className="navbar-collapse" id="navbarNav">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/">Carreer Hub</a>
                </div>
                <ul className="nav navbar-nav justify-content-center">
                    <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="/jobs">My Jobs<span className="caret"></span></a>
                      <ul className="dropdown-menu">
                            <li className="active"><a href="/jobs-search">Jobs Search</a></li>
                            <li><a href="/jobs/add">Add Job</a></li>
                            <li><a href="/saved-job">Saved Job List</a></li>
                        </ul>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li ><a href="/registrer"  className="nav-item px-3" ><span className="glyphicon glyphicon-user"></span> 👤  Sign Up</a></li>
                    <li ><a href="/login" className="nav-item px-3"><span className="glyphicon glyphicon-log-in"></span> ➡️   Login</a></li>
                </ul>
           
                </div>
                </nav>

                </div>
            </React.Fragment>

        );
    }
}

export default Header;