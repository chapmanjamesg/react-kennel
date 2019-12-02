import React, { Component } from 'react'
import './Kennel.css'
import NavBar from './nav/NavBar'
import ApplicationViews from './ApplicationViews';

class Kennel extends Component {
  state = {
    user: false
  }

  // Check if credentials are in local storage
  //returns true/false
  isAuthenticated = () => localStorage.getItem("credentials") !== null
  // this is the section that will take the user, set it to localStorage then change the state of user to the authenticated function
  setUser = (authObj) => {
    /*
      For now, just store the email and password that
      the customer enters into local storage.
    */
    localStorage.setItem(
      "credentials",
      JSON.stringify(authObj)
    )
    this.setState({
      user: this.isAuthenticated()
    });
  }
  //this will go through the reverse of setUser and will function as a way to log out.
  clearUser = () => {
    // localStorage.clear()
    localStorage.removeItem("credentials")

    this.setState({user: this.isAuthenticated()})
  }

  componentDidMount() {
    this.setState({
      user: this.isAuthenticated()
    })
  }
  //this will render the nav bar fully when user is logged in and then the applicationViews while passing through user and setUser 
  render() {
    return (
      <>
        <NavBar user={this.state.user} clearUser={this.clearUser} />
        <ApplicationViews user={this.state.user}
          setUser={this.setUser} />
      </>
    )
  }
}

export default Kennel