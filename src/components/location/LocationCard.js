import React, { Component } from 'react'


class LocationCard extends Component {
    render (){
        return (
            <div className="card">
                <div className="card-content">
                    <address>{this.props.locations.name}<br />500 Puppy Way</address>
                    <button type="button"
                        onClick={() => { this.props.history.push(`/locations/${this.props.locations.id}/details`) }}>Details</button>

                    <button type="button" onClick={() => {this.props.history.push(`/locations/${this.props.locations.id}/edit`)}}>Edit</button>

                    <button type="button" onClick={() =>
                    this.props.deleteLocation(this.props.locations.id)}>Close Location</button>

                </div>
            </div>
        )
    }
}

export default LocationCard