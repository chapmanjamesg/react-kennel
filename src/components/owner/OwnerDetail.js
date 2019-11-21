import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';
import './OwnerDetail.css'
const owner = "owners"
class OwnerDetail extends Component {

  state = {
      name: "",
  }

  componentDidMount(){
    console.log("AnimalDetail: ComponentDidMount");
    //get(id) from AnimalManager and hang on to the data; put it into state
    APIManager.get(owner, this.props.ownerId)
    .then((owner) => {
      this.setState({
        name: owner.name
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

export default OwnerDetail;