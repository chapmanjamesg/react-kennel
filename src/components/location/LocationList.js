import React, { Component } from 'react'
import LocationCard from './LocationCard'
import APIManager from '../../modules/APIManager';


class LocationList extends Component {
    state = {
        locations: [],
    }


componentDidMount(){
    console.log("Location List: ComponentDidMount");
    const location = "locations"
    APIManager.getAll(location)
    .then((locations) => {
        this.setState({
            locations: locations
        })
    })
}

render(){
    return(
        <div className="container-cards">
            {this.state.locations.map(location => 
            <LocationCard key={location.id} location={location} />)}
        </div>
    )
}
}

export default LocationList