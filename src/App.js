import React from 'react';
import { BrowserRouter as Router, Route , Switch} from "react-router-dom";
import HomePage from './components/homePage';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { Search } from 'react-bootstrap-icons';
import Header from './components/header';
import JobSearch from './components/jobSearchArea';
import StatArea from './components/statArea';
import Footer from './components/footer';
import Page1 from './components/page1';


const isLoggedIn = true;

 
function App() {
 return (
   <Router>
     <div>
       <Header />
       <JobSearch />
      
       <Switch>
         <Route exact path = "/">
         <StatArea />
         </Route>

         <Route exact path={isLoggedIn ? '/test' : '/'}>
            <JobSearch />
         </Route>

         <Route>
            <p> 404 not found</p>
         </Route>
       </Switch>
     <Footer />
   </div>

   </Router>
   
 );
}
 
export default App;
