import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';

const employee = "employees"
class EmployeeDetail extends Component {

  state = {
      name: "",
  }

  componentDidMount(){
    console.log("AnimalDetail: ComponentDidMount");
    //get(id) from AnimalManager and hang on to the data; put it into state
    APIManager.get(employee, this.props.employeeId)
    .then((employee) => {
      this.setState({
        name: employee.name
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
        </div>
      </div>
    );
  }
}

export default EmployeeDetail;