import React, { Component } from "react"
import APIManager from "../../modules/APIManager"
import "./EmployeeForm.css"

const page = "employees"

class EmployeeEditForm extends Component {

    state = {
        employeeName: "",
        loadingStatus: true
    }

    handleFieldChange = evt => {
        const stateOfChange = {}
        stateOfChange[evt.target.id] = evt.target.value
        this.setState(stateOfChange)
    }

    updateExistingEmployee = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true })
        const editEmployee ={
            id: this.props.match.params.employeeId,
            name: this.state.employeeName,
        }

        APIManager.update(page, editEmployee)
        .then(() => this.props.history.push("/employees"))
    }

    componentDidMount(){
        APIManager.get(page, this.props.match.params.employeeId)
        .then(employee => {
            this.setState({
                employeeName: employee.name,
                loadingStatus: false
            })
        })
    }

    render(){
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="employeeName"
                                value={this.state.employeeName}
                            />
                            <label htmlFor="employeeName">Employee name</label>
                        </div>
                        <div className="alignRight">
                            <button
                            type="button" disabled={this.state.loadingStatus}
                            onClick={this.updateExistingEmployee}
                            className="btn btn-primary"
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default EmployeeEditForm