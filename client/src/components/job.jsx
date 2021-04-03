import React, { Component } from 'react';


class job extends Component {
    state = {  }
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
        <div class="form-group row">
            <div class="col-sm-2">Application Status : </div>
                <div class="col-sm-10">
                    <div class="form-check">
             <          input class="form-check-input" type="checkbox" id="gridCheck1" />
                        <label class="form-check-label" for="gridCheck1"> Applied </label>
                    </div>
                </div>
        </div>
        
        <div className="form-group">
            <label for="note">Notes :</label>
            <textarea className="form-control" id="note" rows="3"></textarea>
        </div>

    </form>
    
</React.Fragment>
          );
    }
}
 
export default job;