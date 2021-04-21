import React, { Component } from 'react';
import Header from './header';
import JobSearch from './jobSearchArea';
import StatArea from './statArea';
import Footer from './footer';


class homePage extends Component {
    state = {  }
    render() { 
        return ( 
<React.Fragment>
    <Header />
    <JobSearch />
    <StatArea />
    <Footer />
</React.Fragment>

         );
    }
}
 
export default homePage;