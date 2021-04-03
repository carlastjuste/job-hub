import React, { Component } from 'react';

class JobSearchArea extends Component {
    state = { 
      searchValue: ''
    }


    handleChange = e => {
      let searchValue = this.state.SearchValue;
      searchValue = e.currentTarget.value;
      this.setState({searchValue});
  }


    render() { 
        return ( 
<React.Fragment>
<header className="masthead text-white text-center">
    <div className="overlay"></div>
    <div className="container">
      <div className="row">
        <div className="col-xl-9 mx-auto">
          <h1 className="mb-5">Search for your future job !</h1>
        </div>
        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
            
          <form>
            <div className="form-row">
              <div className="col-12 col-md-9 mb-2 mb-md-0">
                <input type="text" className="form-control form-control-lg" placeholder="Enter a job title..." 
                  value={this.state.SearchValue}
                  onChange={this.handleChange}
                  type="search" 
                  />
              </div>
              <div className="col-12 col-md-3">
                <button type="submit" className="btn btn-block btn-lg btn-primary">Search</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </header>
    
</React.Fragment>  );
    }
}
 
export default JobSearchArea;