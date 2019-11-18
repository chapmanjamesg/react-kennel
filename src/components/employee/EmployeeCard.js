import React, { Component } from 'react';

class EmployeeCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h2>Meet our staff!</h2>
                    <h3>Name: <span className="card-employeeName">Scuba Steve</span></h3>
                    <p>Specialty: Long Walks on the Beach, actually listening to the dogs needs, and teaching dogs to scuba dive.</p>
                </div>
            </div>
        )
    }
}

export default EmployeeCard