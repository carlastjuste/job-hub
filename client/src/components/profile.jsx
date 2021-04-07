import React, { Component } from 'react';
import API from "../utils/API";
import _ from 'lodash';

class EmployeePage extends Component {
    state = { 
        searchValue: '',
        jobList :[],
     };

    handleChange = e => {
        let searchValue = this.state.SearchValue;
        searchValue = e.currentTarget.value;
        this.setState({searchValue});

    }

    async componentDidMount () {
        const res = await API.getJobs(); 
        const jobList = res.data.results;
        this.setState({jobList : jobList});
        console.log(jobList);
    }

    FormatDate(dat) {
    const date = new Date(dat);
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');

    return month + '-' + day + '-' + year;
    }

    sortColumn = path =>{
        //console.log(path)
        let emp = this.state.employeeList;
        switch (path) {
            case 'phone': 
                emp = _.orderBy(emp, ['phone'], ['asc']);
                break;
            case 'email': 
                emp = _.orderBy(emp, ['email'], ['asc']);
                break; 
            case 'name':
                emp = _.orderBy(emp, ['name.first'], ['asc']);
                break; 
            default:
                break;                 
        }

        this.setState({employeeList: emp});

    };
    

    

render() {
  
            return (
<React.Fragment>
{this.state.jobList.map((job) => (
            <div className ="card">
                   <h5 className="card-header"><a href = "#">{job.name}</a><p class="font-weight-light">{job.company.name}</p></h5>
                   <div class="card-body">
                       <h5 class="card-title">{job.locations.name}</h5>
                       <p class="card-text">{job.contents}</p>
                       <a href={job.refs.landing_page} className="btn btn-primary">Go to Website</a>
                       
                   </div>
                   <div class="card-footer">
                        <small class="text-muted">Publication date: {job.publication_date}</small>
                    </div>
               </div>
                    
                ))}
    
                
               
                
                    
            </React.Fragment>
            )
    }
}

export default EmployeePage;
