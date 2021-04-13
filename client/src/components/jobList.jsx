import React, { Component } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
//import API from "../utils/API";
import _ from 'lodash';
  
import axios from "axios";
import { ThreeDotsVertical } from 'react-bootstrap-icons';

class JobList extends Component {
    state = { 
        searchValue: '',
        jobList :[],
        pageNumber: 1
     };

    handleChange = e => {
        let searchValue = this.state.SearchValue;
        searchValue = e.currentTarget.value;
        this.setState({searchValue});

    }

    // async componentDidMount () {
    //     const res = await API.getJobs(this.state.pageNumber); 
    //     const jobList = res.data.results;
    //     this.setState({jobList : jobList});
    //     console.log(jobList);
    // }

    async componentDidMount () {
        const url = "https://www.themuse.com/api/public/jobs?page=" + this.state.pageNumber;
        const res = await axios.get(url); 
        const jobList = res.data.results;
        this.setState({jobList : jobList});
        console.log(jobList);
    }




    handlePageChange = (pageNumber) => {
        const number = pageNumber;
        this.setState({pageNumber : number})
    }

    

    

render() {
    return (
<React.Fragment>

<div className ="job-list"> 
    {this.state.jobList.map((job) => (
        <div className ="job-list-card card">

            <div className="card-header">
               <h5> <a href = {job.refs.landing_page}>{job.name}</a></h5>
                <p className="font-weight-light">{job.company.name}</p>
                <ul id="location">
                    {job.locations.map((location, index) => ( index === 0 ?  <li>{location.name}</li> : <li>{" - " +location.name}</li>))}
                </ul>
            </div>
            <div className="card-body">
                <h5 className="card-title">{job.locations.name}</h5>
                <p className="card-text">{ReactHtmlParser(job.contents).slice(0,1)}</p>

                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#jobDescModal"> View More</button> 
            </div>
            <div class="card-footer">
                <small class="text-muted">Publication date: {job.publication_date}</small>
            </div>


            
            <div className="modal fade" id="jobDescModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">{job.name}<p class="font-weight-light">{job.company.name}</p></h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"> 
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            {ReactHtmlParser(job.contents)}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save Job</button>
                        </div>
                    </div>
                </div>
            </div>  
        </div>       
))}
</div>





<nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center">
    <li className="page-item disabled">
      <a className="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li className="page-item">
      <a className="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
</React.Fragment>
        )
    }
}

export default JobList;
