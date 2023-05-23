import React, { Component } from "react";
import mana from '../images/manage.png'
import "../styles2/style3.css";
import Nav from "./Nav/Nav";

export default class manager extends Component {
  render() {



    return (
   <div className="container" class="back-img">
    <Nav/>
      <div class="p-3 mb-2  text-white">
        <div class="p-3 mb-2  text-white"><h1 ><center><strong> Wellcome To Manager's Page</strong></center> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;

          </h1>

        </div>

        <img src={mana} height={400} width={350} style={{
          position: 'absolute',
          right: 500,
          top: 250,
        }} alt="Card image cap" />


        <div class="card text-dark bg-light mb-3" style={{ width: "300px", position: 'absolute', right: 300, top: 350, }}>
          <div class="card-header"> <b>Hello..Mr.Gamage</b></div>
          <div class="card-body">
            <h5 class="card-title">Welcom to Registration Manager's Page</h5>
            <p class="card-text"><i>Your Company user name -</i>  STGSS</p>
            <p class="card-text"><i>Your Registration Nubmer -</i> REG998</p>
            <p class="card-text"><i>Your Login Password -</i> Gama@Man34</p>
           

          </div>
        </div>

        <div class="p-3 mb-2 bg-dark text-white card" style={{ width: '24rem' }}>
          <div class="card-body">
            <h5 class="text-warning card-title"><strong>Register New Company</strong></h5>
            <p class="card-text" className="text-info">Enter Company details</p>
            <a href="/add" class="btn btn-danger"><i className="fa-solid fa-angles-right"></i>&nbsp;<strong>Lets Go..</strong></a>
          </div>
        </div>

        <div class="card" className="p-3 mb-2 bg-dark text-white" style={{ width: '24rem' }}>
          <div class="card-body">
            <h5 class="card-title" className="text-warning"><strong>Manage Registred Company Details</strong></h5>
            <p class="card-text" className="text-info">View,Delete,Update Company Details</p>
            <a href="/all" class="btn btn-danger"><i className="fa-solid fa-angles-right" ></i>&nbsp;<strong>Lets Go..</strong></a>
          </div>
        </div>

        <div class="card" className="p-3 mb-2 bg-dark text-white" style={{ width: '24rem' }}>
          <div class="card-body">
            <h5 class="card-title" className="text-warning"><strong>Get reports</strong></h5>
            <p class="card-text" className="text-info">Print registred Company details report</p>
            <a href="/report" class="btn btn-danger"><i className="fa-solid fa-angles-right"></i>&nbsp;<strong>Lets Go..</strong></a>
          </div>
        </div>



      </div>
      </div>
    )
  }

}