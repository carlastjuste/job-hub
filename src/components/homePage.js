import React, { Component } from 'react';
import Header from './header';
import JobSearch from './jobSearchArea';
import StatArea from './statArea';


class homePage extends Component {
    state = {  }
    render() { 
        return ( 
<React.Fragment>
    <Header />
    <JobSearch />
    <StatArea />
</React.Fragment>

         );
    }
}
 
export default homePage;