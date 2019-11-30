import React, { Component } from 'react'
import APIManager from '../../modules/APIManager'
import EmployeeCard from '../employee/EmployeeCard'

class LocationWithEmployees extends Component {

    state = {
        kennelLocation: {},
        employees: [],
    }

    componentDidMount() {
        //making a call to get locations with employees
        APIManager.getWithEmployees(this.props.match.params.locationId)
            .then((APIResult) => {
                this.setState({
                    kennelLocation: APIResult,
                    employees: APIResult.employees,
                })
            })
    }

    deleteEmployee = id => {
        APIManager.delete("employee", id)
            .then(() => {
                APIManager.getAll("employee")
                    .then((newEmployee) => {
                        this.setState({
                            employees: newEmployee
                        })
                    })
            })
    }

    render() {
        return (
            <div className="card">
                <p>Location: {this.state.kennelLocation.name}</p>
                {this.state.employees.map(employee =>
                    <EmployeeCard
                        key={employee.id}
                        employee={employee}
                        deleteEmployee={this.deleteEmployee}
                        {...this.props}
                    />
                )}
            </div>
        )
    }
}

export default LocationWithEmployees