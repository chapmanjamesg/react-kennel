import React, { Component } from 'react'
import LocationCard from './LocationCard'
import LocationManager from '../../modules/LocationManager';


class LocationList extends Component {
    state = {
        locations: [],
    }


componentDidMount(){
    console.log("Location List: ComponentDidMount");

    LocationManager.getAll()
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