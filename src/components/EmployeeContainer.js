// import React, { Component } from "react";
import React from 'react';
import axios from 'axios';
import Container from "./Container";
import SearchForm from "./SearchForm";
import Navbar from "./Navbar";
import Footer from "./Footer";
import EmployeeDetail from "./EmployeeDetail";
import API from "../utils/API";
import Titles from "./Titles";
import Row from "./Row";

// function filterItems(query, employees) {
//   return employees.filter(function(el) {
//       return el.toString().toLowerCase().indexOf(query.toString().toLowerCase()) > -1;
//   })
// }

export default class EmployeeContainter extends React.Component {
  state = {
    filter:"",
    employees: [],
    filterEmployee: []
  }

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=200&inc=email,name,dob,picture,phone&nat=us`)
      .then(res => {
        const employees = res.data.results;
        const filterEmployee= res.data.results;
        // console.log(employees);
        this.setState({ employees,filterEmployee });
      })
  }

  handleChange = event => {
    // const search = event.target.value.toLowerCase();
    // const name = event.target.name;
    // console.log("Search "+search);
    // console.log("Name "+name);

    this.setState({ filter: event.target.value });
    // const filter= event.target.value.toLowerCase();
    //console.log("Filter "+filter)
    // const allEmployees=this.state.employees;
    // console.log("Allemployees "+allEmployees);
  };

  render() {
    const { filter, employees } = this.state;
    console.log("Render filter "+filter);
    // const newFilter=filter.toLocaleLowerCase();
    // console.log("New filter "+newFilter);
    // var filtered = employees.filter(c=> Object.keys(c).some(key=>c[key].includes(filter)));
    // console.log(filtered);

    // const results = employees.filter((obj)=>{
    //   return Object.keys(obj).reduce((acc, curr)=>{
    //         return acc || obj[curr].toLowerCase().includes(filter);
    //   }, false);
    // }); 

    // console.log(results);

    return (
      <div>
        <Navbar />
        <Container>
          <div>Search here: <input value={filter} onChange={this.handleChange} /></div>
        
        <Titles />
        {employees.filter(name=>name.name.first.includes(filter)||name.name.last.includes(filter)||name.email.includes(filter)||name.phone.includes(filter)||name.dob.date.includes(filter)).map(filteredEmployee => (
          <div className="row">
                  <div className="col-2">
                    <img alt={filteredEmployee.name.first} src={filteredEmployee.picture.large} />
                  </div>
                  <div className="col-2">
                    {filteredEmployee.name.first} {filteredEmployee.name.last}
                  </div>
                  <div className="col-2">
                    {filteredEmployee.phone}
                  </div>
                  <div className="col-2">
                    {filteredEmployee.email}
                  </div>
                  <div className="col-2">
                    {filteredEmployee.dob.date.substring(0,10)}
                  </div>
          </div>
        ))}
        </Container>
        <Footer />
      </div>
    );
  }
}
