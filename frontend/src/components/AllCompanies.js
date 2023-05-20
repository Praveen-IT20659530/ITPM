import React,{Component} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';


export default class AllCom extends Component{


   constructor(props){

       super(props);

       this.state={

        companies:[]
       };

   }
  componentDidMount(){

   this.retriveCompanies();
  }
  retriveCompanies(){

   axios.get("http://localhost:8070/company/allCom").then(res=>{

      if(res.data.success){
          this.setState({

            companies:res.data.existingCompanies

          });

          console.log(this.state.companies)

      }


   })



  }
 


  
     
 /* onDelete(id){

     fetch(`http://localhost:8070/package/delete/${id}`,{

           method:`DELETE`




     }).then((result)=>{

         result.json().then((resp)=>{

           console.warn(resp)
           alert("Deleted Succsessfull")
           this.retrivePackages()

         })


     })
    


  }


   //Filter /Search Mechod
 filterContent(packages,searchTerm){

  const results=packages.filter((packages)=>packages.packId.toLowerCase().includes(searchTerm));
  this.setState({packages:results});

}


handleTextSearch=(e)=>{

   const searchTerm=e.currentTarget.value;
   axios.get("http://localhost:8070/package/all").then(res=>{

    if(res.data.success){
       this.filterContent(res.data.existingPackages,searchTerm)
    }
});

}; 

*/



 render(){

    return(

      <div className="container">
     
   

      <table class="table table-white table-white">
      <thead>
      <tr class="tableHeaders">
           <th scope="col">Name</th>
           <th scope="col">Contact Number</th>
           <th scope="col">Location</th>
           <th scope="col">Email</th>

  
  
      </tr>
     </thead>
     <tbody>

       {this.state.companies.map((company,index)=>(

        <tr class="rows4">
          <th scope="row">{index+1}</th>
          <td>{company.Name}</td>
          <td>{company.Contact_Number}</td>
          <td>{company.Location}</td>
          <td>{company.Email}</td>



          <td>

          {/*<div><a class="btnUpdate" href = {`/update/${packages._id}`}  style={{width:"200px"}}>Update</a> </div> */}
                   
         
               {/*<a class="btnDelete"  onClick={()=>this.onDelete(packages._id)} style={{width:"200px"}}> Delete </a>&nbsp;&nbsp;&nbsp;*/}
        </td>
        </tr>

       ))}

     </tbody>



     </table>
    
     <td></td>
     
    
 
 
  <div class="card-body" style={{ position:"absolute", right:5,top:900}}>
  <h5 class="text-dark"><center><strong>Travelo</strong></center></h5>
  <p class="text-white"><center>copyright @2020 Travelo All rights are reserved</center></p>
  </div>
  <div class="card-footer text-muted">
    
  </div>
</div>
   

  
      

    

    ) 
 }

 }