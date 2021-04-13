import React, { Component } from 'react';
import axios from 'axios';
import JobForm from './jobForm'



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
                <li className="list-group-item" key={index + 1}>Company: <i>{job.company}</i></li>
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
                    <i class="fas fa-edit"></i>
                </a> 
                 <a href="/jobs/delete" 
                    className="card-link"
                    data-toggle="modal" 
                    data-target="#deleteModal">
                   <i class="fas fa-trash-alt"></i>
                </a>
            
                <div className="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <p> Are you sure you want to delete <b>{job.jobtitle} </b>from <b>{job.company} </b>?</p>
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