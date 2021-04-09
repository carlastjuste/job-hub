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
    {this.state.jobs.map((job, index) => (
    <div className="card" >
        <div className="card-header">
            {job.jobtitle}
        </div>
    <ul className="list-group list-group-flush">
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Vestibulum at eros</li>
    </ul>
    </div>
    ))}
</React.Fragment>
         );
    }
}
 
export default SavedJobs;