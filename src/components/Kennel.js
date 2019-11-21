import React, { Component } from 'react'
import './Kennel.css'
import NavBar from './nav/NavBar';
import ApplicationViews from './ApplicationViews';


class Kennel extends Component {
    render() {
        return (
            //using a react fragment...or kind of like an invisible tag
            <React.Fragment>
                {/* these are the only things that are being imported in to this main file. The nav bar will be displayed on every page so that needs to be on this page */}
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        );
    }
}

export default Kennel;