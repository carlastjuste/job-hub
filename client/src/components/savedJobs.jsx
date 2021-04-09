import React, { Component } from 'react';

import axios from 'axios';
const apiEndPoint = "http://localhost:5000/jobs/";


class SavedJobs extends Component {
    state = {  
        jobs:[]
    }


    async componentDidMount() {
        const {data: jobs} = await axios.get(apiEndPoint);
        this.setState({jobs})
    }


    render() { 
        return (
<React.Fragment>
    <div className ="card-deck"> 
    {this.state.jobs.map((job, index) => (
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
    <a href={job.link} className="card-link">Job link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
    </div>
    ))}
    </div>
</React.Fragment>
         );
    }
}
 
export default SavedJobs;