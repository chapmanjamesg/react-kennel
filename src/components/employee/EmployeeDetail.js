import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';

const employee = "employees"

/* this is setting up a react component, which is another away to create a JS object  */
class EmployeeDetail extends Component {
/* this will set the initial "state" for react */
  state = {
      name: "",
      loadingStatus: true,
  }

  componentDidMount(){
    console.log("AnimalDetail: ComponentDidMount");
    //get(id) from AnimalManager and hang on to the data; put it into state
    APIManager.get(employee, this.props.employeeId)
    .then((employee) => {
      this.setState({
        name: employee.name,
        loadingStatus: false,
      });
    });
  }

  handleDelete = () => {
    console.log(this.props.history)
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    APIManager.delete(employee, this.props.employeeId)
    .then(() => this.props.history.push("/employees"))
}

  render() {
    /* though this looks like HTML it is actually JSX, which allows me to write JS in a way that it looks like HTML*/
    return (
      <div className="card">
        <div className="card-content">
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Fire Employee</button>
        </div>
      </div>
    );
  }
}

export default EmployeeDetail;