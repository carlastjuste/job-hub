import React, { Component } from "react";
//import folderIcon from "../../img/folderIcon.jpg";
import folderIcon from "public/img/folderIcon.jpg";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Job Hub</h1>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              {" "}
              <a className="nav-link active" href="#">
                Profile
              </a>
            </li>
            <li className="list-group-item">
              {" "}
              <a className="nav-link active" href="#">
                Job Dashboard
              </a>
            </li>
            <li className="list-group-item">
              {" "}
              <a className="nav-link active" href="#">
                Log out
              </a>
            </li>
          </ul>
        </div>
        <nav className="navbar navbar-dark bg-dark">
          <form className="container-fluid justify-content-start">
            <button className="btn btn-outline-success me-2" type="button">
              Profile
            </button>
            <button className="btn btn-outline-success me-2" type="button">
              Job Dashboard
            </button>
            <button className="btn btn-outline-success me-2" type="button">
              Log out
            </button>
          </form>
        </nav>{" "}
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Job Repo Name</h5>
                <p className="card-text">
                  <img src={folderIcon} width={100} alt="folder icon" />
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Job Repo Name</h5>
                <p className="card-text">
                  <img src={folderIcon} width={100} alt="folder icon" />
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Job Repo Name</h5>
                <p className="card-text">
                  <img src={folderIcon} width={100} alt="folder icon" />
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Job Repo Name</h5>
                <p className="card-text">
                  <img src={folderIcon} width={100} alt="folder icon" />
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default NavBar;
