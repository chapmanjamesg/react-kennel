import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class EmployeeCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h2>Meet our staff!</h2>
                    <h3>Name: <span className="card-employeeName">{this.props.employee.name}</span></h3>                 
                    <Link to={`/employees/${this.props.employee.id}`}><button>Details</button></Link>
                    <button type="button" onClick={()=> this.props.deleteEmployee(this.props.employee.id)}>Fire Employee</button>
                </div>
            </div>
        )
    }
}

export default EmployeeCard