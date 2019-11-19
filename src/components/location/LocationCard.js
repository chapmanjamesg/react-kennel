import React, { Component } from 'react'

class LocationCard extends Component {
    render (){
        return (
            <div className="card">
                <div className="card-content">
                    <address>{this.props.location.name}<br />500 Puppy Way</address>
                </div>
            </div>
        )
    }
}

export default LocationCard