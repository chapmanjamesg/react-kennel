import React, { Component } from 'react'
//import the components we will need
import AnimalCard from './AnimalCard'
import APIManager from '../../modules/APIManager';

const animal = "animals"
class AnimalList extends Component {
    //define what this component needs to render
    state = {
        animals: [],
    }

componentDidMount(){
    console.log("ANIMAL LIST: ComponentDidMount");
    //getAll from AnimalManager and hang on to that data; put it in state
    APIManager.getAll(animal)
    .then((animals) => {
        this.setState({
            animals: animals
        })
    })
}

render(){
    console.log("AnimalList: Render");
  
    return(
      <div className="container-cards">
        {this.state.animals.map(animal =>
          <AnimalCard
            key={animal.id}
            animal={animal}
            deleteAnimal={this.deleteAnimal}
          />
        )}
      </div>
    )
  }
deleteAnimal = id => {
    APIManager.delete(animal, id)
    .then(() => {
      APIManager.getAll(animal)
      .then((newAnimals) => {
        this.setState({
            animals: newAnimals
        })
      })
    })
  }
}

export default AnimalList