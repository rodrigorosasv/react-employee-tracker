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

export default class PersonList extends React.Component {
  state = {
    employees: []
  }

  componentDidMount() {
    axios.get(`https://randomuser.me/api/?results=100&nat=us`)
      .then(res => {
        const employees = res.data.results;
        console.log(employees);
        this.setState({ employees });
      })
  }

  handleFormSubmit = event => {
    event.preventDefault();

  };

  render() {
    return (
      <div>
        <Navbar />
        
        <Container>
        <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
        />
        <Titles />
          {this.state.employees.map(employees => (
          <EmployeeDetail
              id={employees.gender}
              name={employees.name.first+" "+employees.name.last}
              email={employees.email}
              phone={employees.phone}
              image={employees.picture.large}
              dob={employees.dob.date}
          />
          ))}
        </Container>
        <Footer />
      </div>
    );
  }
}
