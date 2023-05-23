import React,{useState} from "react";
import axios from "axios";
import "../styles2/style2.css";
import Layout from "./Layout/Layout";
import Nav from "./Nav/Nav";

 function AddCompany(){


  const [Name,setName] = useState("");
  const [Contact_Number,setContact_Number] = useState("");
  const [Location,setLocation] = useState("");
  const [Email,setEmail] = useState("");


  function sendData(e){
   e.preventDefault();
   
   const newAdding={

    Name,
    Contact_Number,
    Location,
    Email

   }
   axios.post("http://localhost:8070/company/add",newAdding).then(()=>{

     alert("Your Company Added Succsessfully")
   }).catch((err)=>{

     alert(err)

   })

  }


return(

  
    <div className="container" class="back-img">
      <Nav/>
    <div class ="card-company">
   <form onSubmit={sendData}>
     <div class="text-dark">
        <center><h1><strong><u>Fill the company details form</u></strong></h1></center><br></br>
     </div>
   <div className="form-group">
     <label for="Name"><strong>Company Name</strong></label>
     <input type="text" class="form-control" id="Name" required placeholder="Enter your company name here"
     onChange={(e)=> {

       setName(e.target.value);

      } }/>
 
   </div><br></br>
   
   <div className="form-group">
     <label for="Contact_Number"><strong>Your Contact Number</strong></label>
     <input type="int" class="form-control" id="Contact_Number" required placeholder="Enter contact number here"
      onChange={(e)=> {

       setContact_Number(e.target.value);

      } }/>
     
     
 
   </div><br></br>
 
   <div className="form-group">
     <label for="Location"><strong>Location</strong></label>
     <input type="text" class="form-control" id="Location" required placeholder="Enter your location here"
     onChange={(e)=> {

       setLocation(e.target.value);

      } }/>
     
 
   </div><br></br>

   <div className="form-group">
     <label for="Email"><strong>Company Email</strong></label>
     <input type="text" class="form-control" id="Email" required placeholder="Enter your company Email here"
     onChange={(e)=> {

       setEmail(e.target.value);

      } }/>

   </div><br></br>
   
   <div class="d-grid gap-2 col-6 mx-auto">
   <button type="submit" class="btn btn-warning"><strong> Submit </strong></button>
   <div>
   <a href="/company/manager" class="btn btn-warning" style={{width:"300px"}}><strong>Manage Company Details</strong></a>
           </div>
   </div>
   
  </form>
  </div>
  </div>

)


}

export default AddCompany