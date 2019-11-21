import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class OwnerCard extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <h2>Owners that love us!</h2>
                    <h3>Name: <span className="card-ownerName">{this.props.owner.name}</span></h3>
                    <Link to={`/owners/${this.props.owner.id}`}><button>Details</button></Link>
                    <button type="button" onClick={()=> this.props.deleteOwner(this.props.owner.id)}>Remove Owner</button>
                </div>
            </div>
        )
    }
}

export default OwnerCard