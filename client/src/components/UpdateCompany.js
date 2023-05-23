import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import Nav from "./Nav/Nav";

export default function EditComDetails() {
  const [Name, setName] = useState("");
  const [Contact_Number, setContact_Number] = useState("");
  const [Location, setLocation] = useState("");
  const [Email, setEmail] = useState("");

  const { id } = useParams();

  useEffect(() => {
    getCompanies();
  }, []);

  function getCompanies() {
    let company = true;

    // retriew data for id

    fetch(`http://localhost:5000/company/get/${id}`)
      .then((res) => res.json())

      .then((result) => {
        if (company) {
          setName(result.Name);
          setContact_Number(result.Contact_Number);
          setLocation(result.Location);
          setEmail(result.Email);
        }
        console.log(result);
      });

    return () => (company = false);
  }

  // update data
  function updateData(e) {
    e.preventDefault();

    //alert("Insert");

    const updateCompany = {
      Name,
      Contact_Number,
      Location,
      Email,
    };

    axios
      .patch(`http://localhost:8070/company/update/${id}`, updateCompany)
      .then((_res) => {
        alert("Comapny Updated");
        // navigate("/front");
        console.log(updateCompany);
      })
      .catch((_err) => {
        alert("Database Error");
      });
  }

  return (
    <div className="container" class="back-img">
      <Nav/>
      <div class="card-company">
        <div class="text-dark">
          <center>
            <h1>
              <strong>
                <u> Update company details </u>
              </strong>
            </h1>
          </center>
          <br></br>
        </div>

        <form className="company">
          <div className="form-group">
            <label for="Name">
              <strong>Company Name</strong>
            </label>
            <input
              type="text"
              class="form-control"
              id="Name"
              required
              placeholder="Enter your company name here"
              value={Name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <br></br>

          <div className="form-group">
            <label for="Contact_Number">
              <strong>Your Contact Number</strong>
            </label>
            <input
              type="int"
              class="form-control"
              id="Contact_Number"
              required
              placeholder="Enter contact number here"
              value={Contact_Number}
              onChange={(e) => {
                setContact_Number(e.target.value);
              }}
            />
          </div>
          <br></br>

          <div className="form-group">
            <label for="Location">
              <strong>Location</strong>
            </label>
            <input
              type="text"
              class="form-control"
              id="Location"
              required
              placeholder="Enter your location here"
              value={Location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
          </div>
          <br></br>

          <div className="form-group">
            <label for="Email">
              <strong>Company Email</strong>
            </label>
            <input
              type="text"
              class="form-control"
              id="Email"
              required
              placeholder="Enter your company Email here"
              value={Email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <br></br>

          <div class="d-grid gap-2 col-6 mx-auto">
            <button type="button" class="btn btn-warning" onClick={updateData}>
              <strong> Update Details </strong>
            </button>
            <div>
              <a href="/all" class="btn btn-warning" style={{ width: "300px" }}>
                <strong>View Details</strong>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
