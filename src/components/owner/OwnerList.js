import React, { Component } from 'react'
import OwnerCard from './OwnerCard'
import APIManager from '../../modules/APIManager';

const owner = "owners"

class OwnerList extends Component {
    state = {
        owners: [],
    }


componentDidMount(){
    console.log("Owner List: ComponentDidMount");
    APIManager.getAll(owner)
    .then((owners) => {
        this.setState({
            owners: owners
        })
    })
}

render(){
    return (
        <div className="container-cards">
            {this.state.owners.map(owner => 
            <OwnerCard key={owner.id} owner={owner} />)}
        </div>
    )
}
deleteOwners = id => {
    APIManager.delete(owner, id)
    .then(() => {
      APIManager.getAll(owner)
      .then((newOwners) => {
        this.setState({
            animals: newOwners
        })
      })
    })
  }
}

export default OwnerList