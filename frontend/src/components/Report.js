import React, { Component } from "react";
import axios from "axios";

//import Train from '../images/Car logo.jpg'
//import '../App.css';
import { Link } from 'react-router-dom';



export default class ReportC extends Component {


   constructor(props) {

      super(props);

      this.state = {

         companies: []
      };

   }
   componentDidMount() {

      this.retriveCompanies();
   }
   retriveCompanies() {

      axios.get("http://localhost:8070/company/all").then(res => {

         if (res.data.success) {
            this.setState({
               companies: res.data.existingCompanies
            });

            console.log(this.state.companies)
         }
      })



   }

//Report Generation Part
repotGen=()=>{

   window.print();

}

   render() {

      return (
            <div className="container" class="back-img2">

               
              
            
             
            <div>
               <br></br>
               <h2>Generate Monthly Company Report</h2>
               <table class="table table-striped table-dark">
                  <thead>
                     <tr>
                    
                        <th scope="col">Name</th>
                        <th scope="col">Contact Number</th>
                        <th scope="col">Location</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                     </tr>
                  </thead>
                  <tbody>

                     {this.state.companies.map((company, index) => (
                        <tr>
                           <th scope="row">{index + 1}</th>
                           <td>{company.Name}</td>
                           <td>{company.Contact_Number}</td>
                           <td>{company.Location}</td>
                           <td>{company.Email}</td>
                          



                        </tr>


                     ))}


                  </tbody>

               </table>

               <a href="/add" class="btn btn-dark" style={{ width: "200px" }}><strong>&nbsp;&nbsp;Back</strong></a>&nbsp;&nbsp;&nbsp;
               <button onClick={this.repotGen}>Get Report</button>
            </div>

        </div>

      )
   }

}