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
                    <li className="active"><a href="/hi"className="nav-item px-3">Job Application</a></li>
                    <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="/testPage1">Page 1 <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Page 1-1</a></li>
                            <li><a href="#">Page 1-2</a></li>
                            <li><a href="#">Page 1-3</a></li>
                        </ul>
                    </li>
                    <li><a href="/test" className="nav-item px-3">Page 2</a></li>
                </ul>
                {/* <ul className="nav navbar-nav navbar-right"> */}
                <ul class="navbar-nav ml-auto">
                    <li ><a href="/registration"  className="nav-item px-3"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                    <li ><a href="/login" className="nav-item px-3"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                {/* </ul> */}
                </div>
                </nav>
            </div>

            </React.Fragment>

        );
    }
}
 
export default Header;