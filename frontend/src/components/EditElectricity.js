import React,{useEffect, useState} from "react"
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import electricity from "../../../BACKEND/models/electricity";



export default function EditElectricity(){

    const [pannelSize,setpannelSize] = useState("");
    const [company,setcompany] = useState("");
    const [intensity,setintensity] = useState("");
    const [monthlyBill,setmonthlyBill] = useState("");
    const [units,setunits] = useState("");
    const [irradiance,setirradiance] = useState("");
    const [conversionEfficiency,setconversionEfficiency] = useState("");

  useEffect(() => {
      getElectricities();
    }, []);
  
    //let navigate= useNavigate();
  
    function getElectricities() {
      let hotel = true;
  
      fetch(`http://localhost:8060/electricity/get/${id}`)
        .then((res) => res.json())
  
        .then((result) => {
          if (electricity) {
            setpannelSize(result.pannelSize);
            setcompany(result.company);
            setintensity(result.intensity);
            setmonthlyBill(result.monthlyBill);
            setunits(result.setunits);
           
           
          }
          console.log(result);
        });
  
      return () => (electricity = false);
    }

  
  function EditElectricity(e){

      e.preventDefault();

      //alert("Insert");

      const updateElectricity ={
    pannelSize,
    company,
    intensity,
    monthlyBill,
    units,
    irradiance,
    conversionEfficiency
      }

      axios
    .patch(`http://localhost:8060/electricity/update/${id}`, updateElectricity)
    .then((_res) => {
      alert("Data Updated Successfully!");
     // navigate("/front");
      console.log(updateElectricity);
    })
    .catch((_err) => {
      
      alert("Database Error");
    });
  }
<div className="container" class="back-img">
     <div class ="card-adding">
    <form onSubmit={sendData}>
      <div class="text-dark">
         <center><h1><strong><u>SAVING POWER AND MONEY</u></strong></h1></center><br></br>
      </div>
    <div className="form-group">
      <label for="pannelSize"><strong>Pannel Size </strong></label>
      <input type="text" class="form-control" id="pannelSize"
      onChange={(e)=> {

        setpannelSize(e.target.value);

       } }/>
  
    </div><br></br>
    
    <div className="form-group">
  <label htmlFor="company"><strong>Company</strong></label>
  <select className="form-control" id="company" onChange={(e) => setcompany(e.target.value)}>
    <option value="" disabled defaultValue>Select Company</option>
    <option value="Company A">Company A</option>
    <option value="Company B">Company B</option>
    <option value="Company C">Company C</option>
  </select>
</div>

    <div className="form-group">
      <label for="intensity"><strong>Availability Of Intensity</strong></label>
      <input type="text" class="form-control" id="intensity" 
      onChange={(e)=> {

        setintensity(e.target.value);

       } }/>
      
  
    </div><br></br>

    <div className="form-group">
      <label for="monthlyBill"><strong>Last Month Electricity Bill</strong></label>
      <input type="text" class="form-control" id="monthlyBill" 
      onChange={(e)=> {

        setmonthlyBill(e.target.value);

       } }/>

    
    </div><br></br>
   
    <div className="form-group">
      <label for=" units
"><strong>Units</strong></label>
      <input type="text" class="form-control" id="units" 
      onChange={(e)=> {

        setmonthlyBill(e.target.value);

       } }/>

    
    </div><br></br>

  
    
    <div class="d-grid gap-2 col-6 mx-auto">
    <button type="submit" className="btn btn-primary"><strong>SUBMIT</strong></button>

    <div>
    <a href="/home" class="btn btn-primary" style={{width:"300px"}}><strong>CALCULATE</strong></a>
            </div>
    </div>
    
   </form>
   </div>
   </div>

 
 

} 

