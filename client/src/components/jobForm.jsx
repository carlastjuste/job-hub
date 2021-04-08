import React, { Component } from 'react';


class jobForm extends Component {
    state = { 
        jobtitle: '',
        compagny:'',
        city:'',
        state:'',
        country:'',
        link:'',
        status:'',
        note:'',
        
    }


    onSubmit(e) {
        e.preventDefault();
    }

    onChange = e => {
        // let inputValue = e.currentTarget.value;
        // this.setState({searchValue});
    }



    render() { 
        return (
<React.Fragment>
    <form className="job-from">
        <div className="form-row">
            <div className="form-group col-md-6">
                <label for="job-title">Job Title :</label>
                <input type="text" class="form-control" id="job-title" placeholder="" />
            </div>
            <div className="form-group col-md-6">
                <label for="compagny">Compagny :</label>
                <input type="text" class="form-control" id="compagny" placeholder="" />
            </div>
        </div>
        <div className="form-row">
            <div className="form-group col-md-6">
                <label for="inputCity">City :</label>
                <input type="text" class="form-control" id="inputCity" />
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
                <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
            </div>
            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
        </div>
        <div className="form-group row">
            <div className="col-sm-2">Application Status :</div> 
                <div className="col-sm-10">
                    <div className="form-check">
             <          input className="form-check-input" type="checkbox" id="gridCheck1" />
                        <label className="form-check-label" for="gridCheck1"> Applied </label>
                    </div>
                </div>
        </div>
        
        <div className="form-group">
            <label for="note">Notes :</label>
            <textarea className="form-control" id="note" rows="3"></textarea>
        </div>
        <button type="button" class="btn btn-primary btn-lg">Submit</button>

    </form>
    
</React.Fragment>
          );
    }
}
 
export default jobForm;