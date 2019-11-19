import React, { Component } from 'react'
import EmployeeCard from './EmployeeCard'
import APIManager from '../../modules/APIManager';


class EmployeeList extends Component {
    state = {
        employees: [],
    }


componentDidMount(){
    console.log("Employee List: ComponentDidMount");
    const employee = "employees"
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
}

export default EmployeeList