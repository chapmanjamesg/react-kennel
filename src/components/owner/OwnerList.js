import React, { Component } from 'react'
import OwnerCard from './OwnerCard'
import APIManager from '../../modules/APIManager';


class OwnerList extends Component {
    state = {
        owners: [],
    }


componentDidMount(){
    console.log("Owner List: ComponentDidMount");
    const owner = "owners"
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
}

export default OwnerList