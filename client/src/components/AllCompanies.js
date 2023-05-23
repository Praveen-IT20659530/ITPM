import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles2/style.css";
import Nav from "./Nav/Nav";

export default class AllCompanies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companies: [],
    };
  }

  // connect to the db

  componentDidMount() {
    this.retriveCompanies();
  }
  retriveCompanies() {
    axios.get("http://localhost:5000/company/all").then((res) => {
      if (res.data.success) {
        this.setState({
          companies: res.data.existingCompanies,
        });

        console.log(this.state.companies);
      }
    });
  }

  //Filter /Search Mechod
  filterContent(companies, searchTerm) {
    const results = companies.filter((Company) =>
      Company.Location.toUpperCase().includes(searchTerm)
    );
    this.setState({ companies: results });
  }
  handleTextSearch = (e) => {
    const searchTerm = e.currentTarget.value;
    axios.get("http://localhost:8070/company/all").then((res) => {
      if (res.data.success) {
        this.filterContent(res.data.existingCompanies, searchTerm);
      }
    });
  };

  onDelete(id) {
    fetch(`http://localhost:8070/company/delete/${id}`, {
      method: `DELETE`,
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp);
        alert("Deleted Succsessfull");
        this.retriveCompanies();
      });
    });
  }

  render() {
    return (
      <>
      <Nav/>
      <div className="container" class="back-img2">
       
        <div class="card-com">
          <center>
            <h1>
              <u>
                <strong>Company Details</strong>
              </u>
            </h1>
          </center>

          <div className="row">
            <div className="col-lg-9 mt-2 mb-2">
              <h3 className="Ball" class="p-3 mb-2 bg-dark text-white">
                <strong>Search Company Location</strong>
              </h3>
            </div>

            <div
              className="col-lg-3 mt-2 mb-2"
              class="text-center"
              style={{ width: "800px" }}
            >
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                name="searchTerm"
                onChange={this.handleTextSearch}
              ></input>
            </div>
          </div>

          <div>
            <table className="table table-hover" style={{ marginTop: "40px" }}>
              <thead class="table-dark">
                <tr>
                  <th scope="col">Index</th>
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
                    <td>
                      <a
                        className="btn btn-success"
                        href={`/company/upd/${company._id}`}
                      >
                        <i className="fa-solid fa-wrench"></i>Update
                      </a>
                      &nbsp;&nbsp;
                      <a
                        className="btn btn-danger"
                        onClick={() => this.onDelete(company._id)}
                      >
                        {" "}
                        <i className="fa-solid fa-trash-can "></i>
                        &nbsp;&nbsp;Delete&nbsp;&nbsp;&nbsp;
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <a href="/manager" class="btn btn-dark" style={{ width: "200px" }}>
              <strong>
                <i className="fa-solid fa-user-clock"></i>&nbsp;&nbsp;Back
              </strong>
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="/report" class="btn btn-dark" style={{ width: "200px" }}>
              <strong>
                <i className="fa-solid fa-user-clock"></i>&nbsp;&nbsp;Get Report
              </strong>
            </a>
            &nbsp;&nbsp;&nbsp;
          </div>
        </div>
      </div>
      </>
      
    );
  }
}
