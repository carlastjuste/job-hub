import React from 'react';
//import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './components/homePage';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
 
function App() {
 return (
   <div>
     <HomePage />
   </div>
 );
}
 
export default App;
