import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';
import './LocationDetail.css'
const location = "locations"
class LocationDetail extends Component {

  state = {
      name: "",
      loadingStatus: true,
  }

  componentDidMount(){
    console.log("LocationDetail: ComponentDidMount");
    APIManager.get(location, this.props.locationId)
    .then((location) => {
      this.setState({
        name: location.name,
        loadingStatus: false,
      });
    });
  }

  handleDelete = () => {
    this.setState({loadingStatus: true})
    APIManager.delete(location, this.props.locationId)
    .then(() => this.props.history.push("/locations"))
}

  render() {
    return (
      <div className="card">
        <div className="card-content">
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Close Location</button>
        </div>
      </div>
    );
  }
}

export default LocationDetail;