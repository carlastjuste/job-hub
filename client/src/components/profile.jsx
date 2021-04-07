import React, { Component } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
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
        <h5 className="card-header"><a href = {job.refs.landing_page}>{job.name}</a><p class="font-weight-light">{job.company.name}</p></h5>
         <div class="card-body">
            <h5 class="card-title">{job.locations.name}</h5>
            <p class="card-text">Hello</p>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong"> View More</button>

            <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">{job.name}<p class="font-weight-light">{job.company.name}</p></h5>
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
