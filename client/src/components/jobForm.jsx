import React, { Component } from 'react';
import axios from 'axios';

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
            note:''}

    };


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

       //call backend server
       console.log('Submitted');
       const {data: job} = await axios.post(apiEndPoint, this.state.job)
       console.log(job)

    }



    render() { 
        const {job} = this.state;

        return (           
<React.Fragment>
    <form className="job-from" onSubmit={this.handleSubmit}>
        <div className="form-row">
            <div className="form-group col-md-6">
                <label for="job-title">Job Title :</label>
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
                <label for="compagny">Company :</label>
                <input 
                    value={job.company} 
                    onChange={this.handleChange}
                    name="company"
                    type="text" 
                    className="form-control" 
                    id="compagny" 
                    placeholder="" 
                />
            </div>
        </div>
        <div className="form-row">
            <div className="form-group col-md-6">
                <label for="inputCity">City :</label>
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
                 <label for="inputState">State :</label>
                 <select id="inputState" className="form-control">
                 <option selected>Choose...</option>
                 <option>...</option>
                </select>
            </div>
            <div className="form-group col-md-3">
                 <label for="inputCountry">Country :</label>
                 <select id="inputCountry" className="form-control">
                 <option selected>Choose...</option>
                 <option>...</option>
                </select>
            </div>
        </div>
        <label for="basic-url">Job Post URL: </label>
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
                        <label className="form-check-label" for="gridCheck1"> Applied </label>
                    </div>
                </div>
        </div>
        <div className="form-group">
            <label for="note">Notes :</label>
            <textarea 
                value={job.note} 
                onChange={this.handleChange}
                name="note"
                className="form-control" 
                id="note" 
                rows="3"
            ></textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-lg">Submit</button>

    </form>
    
</React.Fragment>
          );
    }
}
 
export default jobForm;