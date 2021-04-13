import React, { Component } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
//import API from "../utils/API";
import _ from 'lodash';
  
import axios from "axios";

class  JobSearch extends Component {
    state = { 
        searchValue:"",
        jobList :[],
     }

     handleSubmit = e => {
        e.preventDefault();
        this.getJob();
       
    }

    async getJob (){

        try{
        const url = "https://jobs.github.com/positions.json?description=" + this.state.searchValue;
        const res = await axios.get(url); 
        // const jobList = res.data.results;
        // this.setState({jobList : jobList});
        console.log(res);
        }catch (err) {
            console.log(err);
        }
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
                                <h1 className="mb-5">Search for future future job !</h1>
                                </div>
                                <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                                    
                                <form onSubmit={this.handleSubmit}>
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





                        <div className ="job-list"> 
    {this.state.jobList.map((job) => (
        <div className ="job-list-card card">

            <div className="card-header">
               <h5> <a href = {job.url}>{job.title}</a></h5>
                <p className="font-weight-light">{job.company}</p>
                <ul id="location">
                    {job.location}
                </ul>
            </div>
            <div className="card-body">
                <h5 className="card-title">{job.location}</h5>
                <p className="card-text">{ReactHtmlParser(job.description).slice(0,1)}</p>

                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#jobDescModal"> View More</button> 
            </div>
            <div class="card-footer">
                <small class="text-muted">Publication date: {job.created_at}</small>
            </div>


            
            <div className="modal fade" id="jobDescModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">{job.name}<p class="font-weight-light">{job.company}</p></h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"> 
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            {ReactHtmlParser(job.description)}
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
    
</React.Fragment>
         );
    }
}
 
export default JobSearch;