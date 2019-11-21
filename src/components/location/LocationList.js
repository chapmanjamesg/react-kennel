import React, { Component } from 'react'
import LocationCard from './LocationCard'
import APIManager from '../../modules/APIManager';

const location = "locations"

class LocationList extends Component {
    state = {
        locations: [],
    }


componentDidMount(){
    console.log("Location List: ComponentDidMount");
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
deleteLocation = id => {
    APIManager.delete(location, id)
    .then(() => {
      APIManager.getAll(location)
      .then((newLocations) => {
        this.setState({
            animals: newLocations
        })
      })
    })
  }
}

export default LocationList