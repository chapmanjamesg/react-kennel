import React, { Component } from 'react'
import LocationCard from './LocationCard'
import APIManager from '../../modules/APIManager';

const location = "locations"

class LocationList extends Component {
    state = {
        locations: [],
    }


    componentDidMount() {
        console.log("Location List: ComponentDidMount");
        APIManager.getAll(location)
            .then((locations) => {
                this.setState({
                    locations: locations
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
                        onClick={() => { this.props.history.push("/locations/new") }}
                    >
                        New Location
            </button>
                </section>
                <div className="container-cards">
                    {this.state.locations.map(locations =>
                        <LocationCard
                            key={locations.id}
                            locations={locations}
                            deleteLocation={this.deleteLocation}
                            {...this.props}
                        />
                    )}
                </div>
            </>
        )
    }
    deleteLocation = id => {
        APIManager.delete(location, id)
            .then(() => {
                APIManager.getAll(location)
                    .then((newLocations) => {
                        this.setState({
                            locations: newLocations
                        })
                    })
            })
    }
}

export default LocationList