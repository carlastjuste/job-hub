import React, { Component } from 'react';



class Header extends Component {
    state = {  }


    render() { 
        return ( 
    <React.Fragment>
      <div className="Header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="navbar-collapse" id="navbarNav">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/">Carreer Hub</a>
                </div>
                <ul className="nav navbar-nav justify-content-center">
                    <li className="active"><a href="/job">My Jobs</a></li>
                    <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="/testPage1">Page1<span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Page 1-1</a></li>
                            <li><a href="#">Page 1-2</a></li>
                            <li><a href="#">Page 1-3</a></li>
                        </ul>
                    </li>
                    <li><a href="/test">Page 2</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="/registration"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                    <li><a href="/login"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul>
                </div>
                </nav>
            </div>
            </React.Fragment>

        );
    }
}
 
export default Header;