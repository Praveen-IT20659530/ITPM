import React,{useState} from "react";

function UpdateCompany(){

    return(
        <div className="container" class="back-img">
        <div class ="card-company">

      <div class="text-dark">
         <center><h1><strong><u> Update company details </u></strong></h1></center><br></br>
      </div>

    <form className =  "company" >
    <div className="form-group">
      <label for="Name"><strong>Company Name</strong></label>
      <input type="text" class="form-control" id="Name" required placeholder="Enter your company name here"
      />
    </div>
    <br></br>
    
    <div className="form-group">
      <label for="Contact_Number"><strong>Your Contact Number</strong></label>
      <input type="int" class="form-control" id="Contact_Number" required placeholder="Enter contact number here"
       />
    </div>
    <br></br>
  
    <div className="form-group">
      <label for="Location"><strong>Location</strong></label>
      <input type="text" class="form-control" id="Location" required placeholder="Enter your location here"
      />
    </div>
    <br></br>

    <div className="form-group">
      <label for="Email"><strong>Company Email</strong></label>
      <input type="text" class="form-control" id="Email" required placeholder="Enter your company Email here"
      />
    </div>
    <br></br>
    
    <div class="d-grid gap-2 col-6 mx-auto">
    <button type="button" class="btn btn-warning"><strong> Update Details </strong></button>
    <div>
    <a href="/add" class="btn btn-warning" style={{width:"300px"}}><strong>Cancel</strong></a>
    </div>
    </div>
    
   </form>
   </div>
   </div>

    )
}

export default UpdateCompany;