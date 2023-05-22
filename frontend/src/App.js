//Import counter class component from src..component
//import CounterClass from './components/counterClass';
//import CounterFunction from './components/counterFunction';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import AllCompanies from './components/AllCompanies';
import AddCompany from './components/AddCompany';
import UpdateCompany from './components/UpdateCompany';
import ReportC from './components/Report.js';
import Manager from './components/Manager.js';




function App() {
  return (
    
  <Router>
   
    <div class="1">
    
    <Route path="/all" exact component={AllCompanies}></Route> 
    <Route path="/add" exact component={AddCompany}></Route> 
    <Route path="/upd/:id" exact component={UpdateCompany}></Route> 
    <Route path="/report" exact component={ReportC}></Route> 
    <Route path="/manager" exact component={Manager}></Route> 
  </div> 
</Router> 

);
} 

export default App;


