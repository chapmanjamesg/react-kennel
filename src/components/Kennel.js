import React, { Component } from 'react'
import './Kennel.css'
import NavBar from './nav/NavBar';
import ApplicationViews from './ApplicationViews';


class Kennel extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <ApplicationViews />
            </div>
        );
    }
}

export default Kennel;