import React, { Component } from 'react'
import EmployeeCard from './EmployeeCard'
import APIManager from '../../modules/APIManager';

const employee = "employees"

class EmployeeList extends Component {
    state = {
        employees: [],
    }


    componentDidMount() {
        console.log("Employee List: ComponentDidMount");
        APIManager.getAll(employee)
            .then((employees) => {
                this.setState({
                    employees: employees
                })
            })
    }

    render() {
        return (
            <>
                <section className="section-content">
                    <button
                        type="button"
                        className="btn"
                        onClick={() => { this.props.history.push("employees/new") }}
                        >
                        New Employee
                    </button>
                </section>
                <div className="container-cards">
                    {this.state.employees.map(employee =>
                        <EmployeeCard
                            key={employee.id}
                            employee={employee}
                            deleteEmployee={this.deleteEmployee}
                            {...this.props}
                        />
                    )}
                </div>
            </>
        )
    }
    deleteEmployee = id => {
        APIManager.delete(employee, id)
            .then(() => {
                APIManager.getAll(employee)
                    .then((newEmployee) => {
                        this.setState({
                            employees: newEmployee
                        })
                    })
            })
    }
}

export default EmployeeList