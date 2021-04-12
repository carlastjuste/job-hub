import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'



class StatArea extends Component {
    state = {  }
    render() { 
        return ( 
<React.Fragment>
  <section className="features-icons bg-light text-center">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div className="features-icons-icon d-flex">
              <img src="img/chart.png" className='chart-icon'/>
            </div>
            <div className='info'>
            <h3>Job Market Trend</h3>
            <p class="lead mb-0">Access salary and vacancy data</p>
            </div>

          </div>
        </div>
        <div class="col-lg-4">
          <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
            <div class="features-icons-icon d-flex">
            <img src="img/chart.png" className='chart-icon'/>
            </div>
            <h3>Employer </h3>
            <p class="lead mb-0">Access salary and vacancy data</p>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="features-icons-item mx-auto mb-0 mb-lg-3">
            <div class="features-icons-icon d-flex">
            <img src="img/chart.png" className='chart-icon'/>
            </div>
            <h3>Coaching</h3>
            <p class="lead mb-0">Access salary and vacancy data</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</React.Fragment>
         );
    }
}
 
export default StatArea;