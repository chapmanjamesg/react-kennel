import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class EmployeeCard extends Component {
    //this code is what will be rendered in the Dom for each employee
    //this is also a child component to the List which is a child to the Kennel
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h2>Meet our staff!</h2>
                    <h3>Name: <span className="card-employeeName">{this.props.employee.name}</span></h3>  
                    {/* Link is an anchor tag */}               
                    <Link to={`/employees/${this.props.employee.id}`}><button>Details</button></Link>
                    {/* this delete button uses this.props to reference the deleteEmployee function, then it will use this.props to then reference the employee.id */}
                    <button type="button" onClick={()=> this.props.deleteEmployee(this.props.employee.id)}>Fire Employee</button>
                </div>
            </div>
        )
    }
}

export default EmployeeCard