import React, { Component } from 'react'
import OwnerCard from './OwnerCard'
import OwnerManager from '../../modules/OwnerManager';


class OwnerList extends Component {
    state = {
        owners: [],
    }


componentDidMount(){
    console.log("Owner List: ComponentDidMount");

    OwnerManager.getAll()
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