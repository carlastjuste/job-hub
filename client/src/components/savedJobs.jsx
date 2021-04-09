import React, { Component } from 'react';
import JobForm from './jobForm'

import axios from 'axios';

const apiEndPoint = "http://localhost:5000/jobs/";


class SavedJobs extends Component {
    state = {  
        jobs:[],
        searchValue:''

    }


    async componentDidMount() {
        const {data: jobs} = await axios.get(apiEndPoint);
        this.setState({jobs})
    }

    handleChange = e => {
        let searchValue = this.state.SearchValue;
        searchValue = e.currentTarget.value;
        this.setState({searchValue});

    }


    render() { 
        console.log(this.state.job);
        return (
<React.Fragment>
    {/* Input to search for saved jobs by job title */}
    <div className = "search-area">
        <input className = "form-control" 
            value={this.state.SearchValue}
            onChange={this.handleChange}
            type="search" 
            placeholder="Search by job title..."  />
    </div>

    {/* Card to display Saved Jobs */}
    <div className ="card-deck"> 
        {this.state.jobs.filter(job =>{
            if (this.state.searchValue ==="") 
                {return job;}
            else if (job.jobtitle.toLowerCase().includes(this.state.searchValue.toLowerCase()))
                {return job;}
            }
        ).map((job, index) => (

        <div className="card" >
            <div className="card-header">
                <b>{job.jobtitle}</b>
            </div>

            <ul className="list-group list-group-flush">
                <li className="list-group-item" key={index + 1}>Company: <i>{job.compagny}</i></li>
                <li className="list-group-item" key={index + 2}>Location: <i>{job.city}, {job.state} - {job.country}</i></li>
                <li className="list-group-item" key={index + 3}>Status: <i>{job.status}</i></li>
                <li className="list-group-item" key={index + 4}>Note: <i>{job.note}</i></li>
            </ul>

            <div class="card-body">
                <a href="{job.link}" className="card-link" target="_blank">
                    Job Post Link
                </a>
                <a 
                    href="/jobs/update" 
                    className="card-link"
                    data-toggle="modal" 
                    data-target="#exampleModalCenter">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" height="16" 
                        fill="currentColor" 
                        className="bi bi-pencil-square" 
                        viewBox="0 0 16 16">
                        <path 
                            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                        />
                        <path 
                            fill-rule="evenodd" 
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                        />
                    </svg>
                </a>      
                <a href="/jobs/delete" 
                    className="card-link"
                    data-toggle="modal" 
                    data-target="#deleteModal">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" height="16" 
                        fill="currentColor" 
                        class="bi bi-trash-fill" 
                        viewBox="0 0 16 16">
                        <path 
                        d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
                        />
                    </svg>
                </a>
            
                <div className="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <p> Are you sure you want to delete <b>{job.jobtitle} </b>from <b>{job.compagny} </b>?</p>
                        </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal">Delete</button>
                    </div>
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
 
export default SavedJobs;