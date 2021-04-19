import React, { Component } from 'react';
import axios from 'axios';
import * as isi from "isidom";

const apiEndPoint = "http://localhost:5000/jobs/add";


class jobForm extends Component {
    state = {
        job: { 
            jobtitle: '', 
            company:'', 
            city:'', 
            state:'', 
            country:'', 
            link:'', 
            status:'', 
            note:''},
        errors: {
            jobtitle:'',
            company:''

            }

    };

    componentDidMount() {
        // this.username.current.focus();
    }


    onSubmit(e) {
        e.preventDefault();
    }

    handleChange = e => {
        const job = {...this.state.job};
        job[e.currentTarget.name] = e.currentTarget.value;
        this.setState({job});

    };

    handleSubmit = async e => {
       e.preventDefault(); 

    try {
       //call backend server
       console.log(isi.$cssAlignContent);
    //    const obj =  {
    //     jobtitle: "test add",
    //     compagny:  "CACY",
    //     city: "Fort Bragg",
    //     state: "NC",
    //     country: "USA",
    //     link: "https://www.indeed.com/jobs?q=full%20stack%20developer&l&ts=1618285026382&rq=1&rsIdx=0&fromage=last&newcount=90&vjk=68d4b0ecf7f51c99",
    //     status: "",
    //     note: "Development languages: Knowledge of server-side programming languages including Net, Java, Ruby and Python."
    // };
       const {data: job} = await axios.post(apiEndPoint, this.state.job, {headers:{"Content-Type" : "application/json"}});
       console.log(job);
}catch (err) {
    console.log(err);
}
    }



    render() { 
        const {job} = this.state;

        return (           
<React.Fragment>
    <form className="job-from" onSubmit={this.handleSubmit}>
        <div className="form-row">
            <div className="form-group col-md-6">
                <label htmlFor="job-title">Job Title :</label>
                <input 
                    autoFocus 
                    value={job.jobtitle} 
                    onChange={this.handleChange}
                    name="jobtitle"
                    type="text" 
                    className="form-control" 
                    id="job-title" 
                    placeholder="" 
                />
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="company">Company :</label>
                <input 
                    value={job.company} 
                    onChange={this.handleChange}
                    name="company"
                    type="text" 
                    className="form-control" 
                    id="company" 
                    placeholder="" 
                />
            </div>
        </div>
        <div className="form-row">
            <div className="form-group col-md-6">
                <label htmlFor="inputCity">City :</label>
                <input
                    value={job.city} 
                    onChange={this.handleChange}
                    name="city" 
                    type="text" 
                    className="form-control" 
                    id="inputCity" 
                />
            </div>
            <div className="form-group col-md-3">
                 <label htmlFor="inputState">State :</label>
                 <select id="inputState" className="form-control">
                 <option selected>Choose...</option>
                 <option>...</option>
                </select>
            </div>
            <div className="form-group col-md-3">
                 <label htmlFor="inputCountry">Country :</label>
                 <select id="inputCountry" className="form-control">
                 <option selected>Choose...</option>
                 <option>...</option>
                </select>
            </div>
        </div>
        <label htmlFor="basic-url">Job Post URL: </label>
            <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">https://example.com/</span>
            </div>
            <input
                value={job.link} 
                onChange={this.handleChange}
                name="link"
                type="text" 
                className="form-control" 
                id="basic-url" 
                aria-describedby="basic-addon3" 
            />
        </div>
        <div className="form-group row">
            <div className="col-sm-2">Application Status :</div> 
                <div className="col-sm-10">
                    <div className="form-check">
                        <input 
                            // value={this.state.job.status} 
                            // onChange={this.handleChange}
                            // name="status"
                            className="form-check-input" 
                            type="checkbox" 
                            id="gridCheck1" />
                        <label className="form-check-label" htmlFor="gridCheck1"> Applied </label>
                    </div>
                </div>
        </div>
        <div className="form-group">
            <label htmlFor="note">Notes :</label>
            <textarea 
                value={job.note} 
                onChange={this.handleChange}
                name="note"
                className="form-control" 
                id="note" 
                rows="3"
            ></textarea>
        </div>
        <button type="submit" className="btn btn-primary btn-lg">Submit</button>

    </form>
    
</React.Fragment>
          );
    }
}
 
export default jobForm;