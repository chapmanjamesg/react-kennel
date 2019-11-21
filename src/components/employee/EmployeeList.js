import React, { Component } from 'react'
import EmployeeCard from './EmployeeCard'
import APIManager from '../../modules/APIManager';

const employee = "employees"

class EmployeeList extends Component {
    state = {
        employees: [],
    }


componentDidMount(){
    console.log("Employee List: ComponentDidMount");
    APIManager.getAll(employee)
    .then((employees) => {
        this.setState({
            employees: employees
        })
    })
}

render(){
    return(
        <div className="container-cards">
            {this.state.employees.map(employee => 
            <EmployeeCard key={employee.id} employee={employee} />)}
        </div>
    )
}
deleteEmployee = id => {
    APIManager.delete(employee, id)
    .then(() => {
      APIManager.getAll(employee)
      .then((newEmployee) => {
        this.setState({
            animals: newEmployee
        })
      })
    })
  }
}

export default EmployeeList