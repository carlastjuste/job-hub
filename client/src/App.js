import React from 'react';
import { BrowserRouter as Router, Route , Switch} from "react-router-dom";
import HomePage from './components/homePage';
import Header from './components/header';
import JobSearch from './components/jobSearch';
import JobSearchArea from './components/jobSearchArea';
import JobForm from './components/jobForm'
import StatArea from './components/statArea';
import Footer from './components/footer';
import LoginForm from './components/loginForm';
import RegistrationForm from './components/registrationForm';
import JobList from './components/jobList';
import SavedJobs from './components/savedJobs';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { Search } from 'react-bootstrap-icons';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import './form.css';


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
         <Route exact path = "/t">
            <JobSearch />
       
         </Route>

         <Route exact path={isLoggedIn ? '/jobs/add' : '/login'}>
            <JobForm />
         </Route>

         <Route exact path={isLoggedIn ? '/saved-job' : '/login'}>
           <SavedJobs />
         </Route>

         <Route exact path = "/jobs-search">
         <JobSearch />
         <JobList />
         </Route>

         <Route exact path = "/registrer">
         <RegistrationForm />
         </Route>

         <Route exact path = "/login">
         <LoginForm />
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
