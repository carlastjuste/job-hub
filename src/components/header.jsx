import React, { Component } from 'react';
import ReactDOM from "react-dom";


class Header extends Component {
    state = {  }

    componentDidMount() {
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
        this.div.appendChild(script);

        const script1 = document.createElement("script");
        script1.async = true;
        script1.src = "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js";
        this.div.appendChild(script1);
      }


    render() { 
        return ( 
    <React.Fragment>
      <div className="Header" ref={el => (this.div = el)}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="navbar-collapse" id="navbarNav">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/">Carreer Hub</a>
                </div>
                <ul className="nav navbar-nav justify-content-center">
                    <li className="active"><a href="/hi">Job Application</a></li>
                    <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="/testPage1">Page 1 <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Page 1-1</a></li>
                            <li><a href="#">Page 1-2</a></li>
                            <li><a href="#">Page 1-3</a></li>
                        </ul>
                    </li>
                    <li><a href="/test">Page 2</a></li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="/registration"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                    <li><a href="/login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul>
                </div>
                </nav>
            </div>
            </React.Fragment>

        );
    }
}
 
export default Header;