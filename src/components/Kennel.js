import React, { Component } from 'react'
import './Kennel.css'
import NavBar from './nav/NavBar';
import ApplicationViews from './ApplicationViews';


class Kennel extends Component {
    render() {
        return (
            //using a react fragment...or kind of like an invisible tag
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        );
    }
}

export default Kennel;