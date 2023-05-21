import React,{Component} from "react";
import axios from "axios";

export default class Search extends Component{


   constructor(props){

       super(props);

       this.state={

        electricities:[]
       };

   }
  componentDidMount(){

   this.retriveElectricities();
  }
  retriveElectricities(){

   axios.get("http://localhost:8060/electricity/all").then(res=>{

      if(res.data.success){
          this.setState({

            electricities:res.data.existingElectricities

          });

          console.log(this.state. electricities)

      }
})

}

//Filter /Search Mechod
filterContent(electricities,searchTerm){

   const results= electricities.filter((electricities)=> electricities.pannelSize.toLowerCase().includes(searchTerm));
   this.setState({electricities:results});
 
 }
 
 handleTextSearch=(e)=>{
 
    const searchTerm=e.currentTarget.value;
    axios.get("http://localhost:8060/electricity/all").then(res=>{
 
     if(res.data.success){
        this.filterContent(res.data.existingElectricities
         ,searchTerm)
     }
 });
 
 }

     render(){
       return(

      <div className="container" class="p-3 mb-2 bg-dark text-white">
         <div className="row">      </div>
         <div className="col-lg-9 mt-2 mb-2">     
         <h3> <strong> Search The Pannel Size Here </strong></h3>
         </div>

           <div className="col-lg-3 mt-2 mb-2" class="text-center">
            
            <input
             className="form-control"
             type="search"
             placeholder="Search"
             name="searchTerm"
             onChange={this.handleTextSearch}
            
            ></input>
            </div>
      <table className="table table-dark table-hover" style={{marginTop:'40px'}}>
      <thead>
      <tr>
        
      <th scope="col">ID</th>
      <th scope="col">Pannel Size</th>
      <th scope="col">Company</th>
      <th scope="col">Availability Of Intensity</th>
      <th scope="col">Last Month Electricity Bill</th>
      <th scope="col">Units</th>
      <th scope="col">Irradiance</th>
      <th scope="col">Conversion Efficiency</th>
         
               
           </tr>
     </thead>
     <tbody>

       {this.state.electricities.map((electricities,index)=>(

        <tr>
            <th scope="row">{index+1}</th>
           <td>{electricities.pannelSize}</td>
           <td>{electricities.company}</td>
           <td>{electricities.intensity}</td>
           <td>{electricities.monthlyBill}</td>
           <td>{electricities.units}</td>
           <td>{electricities.irradiance}</td>
           <td>{electricities.conversionEfficiency}</td>
                     
           </tr>
           ))}
       
        </tbody>
       </table>
      </div>
      ) 
 }

 }
