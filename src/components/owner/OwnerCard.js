import React, { Component } from 'react'

class OwnerCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h2>Owners that love us!</h2>
                    <h3>Name: <span className="card-ownerName">{this.props.owner.name}</span></h3>
                </div>
            </div>
        )
    }
}

export default OwnerCard