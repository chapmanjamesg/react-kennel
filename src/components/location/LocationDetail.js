import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';
import './LocationDetail.css'
const location = "locations"
class LocationDetail extends Component {

  state = {
      name: "",
  }

  componentDidMount(){
    console.log("AnimalDetail: ComponentDidMount");
    //get(id) from AnimalManager and hang on to the data; put it into state
    APIManager.get(location, this.props.locationId)
    .then((location) => {
      this.setState({
        name: location.name
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
        </div>
      </div>
    );
  }
}

export default LocationDetail;