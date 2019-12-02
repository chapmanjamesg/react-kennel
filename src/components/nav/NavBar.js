import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {

  //this is the function that actually handles the logout function and then sends you back to the home page when you are done
  handleLogout = () => {
    this.props.clearUser();
    this.props.history.push('/');
  }

  render() {
    return (
      <header>
        <h1 className="site-title">Student Kennels<br />
          <small>Loving care when you're not there.</small>
        </h1>
        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/locations"></Link>Locations</li>
            {/* this makes it so that when the user is passed down that those nav links will populate home and location should always populate and be clickable*/}
            {(this.props.user) ? 
            <>
            <li><Link className="nav-link" to="/animals">Animals</Link></li>
            <li><Link className="nav-link" to="/employees">Employees</Link></li>
            <li>Owners</li>
            <li><span className="nav-link" onClick={this.handleLogout}>Logout</span></li>
            </>
            :
            <li><Link className="nav-link" to="/login">Login</Link></li>
            }
            
          </ul>
        </nav>
      </header>
    )
  }
}
export default withRouter(NavBar);