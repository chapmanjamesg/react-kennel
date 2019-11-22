import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class LocationCard extends Component {
    render (){
        return (
            <div className="card">
                <div className="card-content">
                    <address>{this.props.locations.name}<br />500 Puppy Way</address>
                    <Link to={`/locations/${this.props.locations.id}`}><button>Details</button></Link>

                    <button type="button" onClick={() => {this.props.history.push(`/locations/${this.props.locations.id}/edit`)}}>Edit</button>

                    <button type="button" onClick={() =>
                    this.props.deleteLocation(this.props.locations.id)}>Close Location</button>

                </div>
            </div>
        )
    }
}

export default LocationCard