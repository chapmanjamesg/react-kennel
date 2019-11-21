import React, { Component } from 'react';
import APIManager from '../../modules/APIManager';
import './OwnerDetail.css'
const owner = "owners"
class OwnerDetail extends Component {

  state = {
      name: "",
      loadingStatus: true,
  }

  componentDidMount(){
    console.log("AnimalDetail: ComponentDidMount");
    //get(id) from AnimalManager and hang on to the data; put it into state
    APIManager.get(owner, this.props.ownerId)
    .then((owner) => {
      this.setState({
        name: owner.name,
        loadingStatus: false,
      });
    });
  }

  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    APIManager.delete(owner, this.props.ownerId)
    .then(() => this.props.history.push("/owner"))
}

  render() {
    return (
      <div className="card">
        <div className="card-content">
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Remove Owner</button>
        </div>
      </div>
    );
  }
}

export default OwnerDetail;