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
import Job from './components/job'
import StatArea from './components/statArea';
import Footer from './components/footer';
import Login from './components/login';
import Registration from './components/registration';
import JobList from './components/jobList';


const isLoggedIn = true;

 
function App() {

 return (
   <Router>
     <div>
       <Header />
       <Switch>
         <Route exact path = "/">
            <JobSearch />
            <StatArea />
         </Route>

         <Route exact path={isLoggedIn ? '/jobs' : '/login'}>
            <Job />
         </Route>

         <Route exact path = "/jobs">
         <JobSearch />
         <JobList />
         </Route>

         <Route exact path = "/registration">
         <Registration />
         </Route>

         <Route exact path = "/login">
         <Login />
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
