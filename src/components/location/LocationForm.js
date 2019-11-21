import React, { Component } from 'react'
import APIManager from '../../modules/APIManager'
import './LocationForm.css'

const page = "locations"

class LocationForm extends Component {
    state = {
        locationName: "",
        loadingStatus: false
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange)
    };

    constructNewLocation = evt => {
        evt.preventDefault()
        if (this.state.locationName === "") {
            window.alert("Please input a location name")
        } else {
            this.setState({ loadingStatus: true })
            const location = {
                name: this.state.locationName
            }

            APIManager.post(page, location)
                .then(() => this.props.history.push("/location"))
        }
    };

    render() {
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="locationName"
                                placeholder="Location Name"
                            />
                            <label htmlFor="locationName">Name</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewLocation}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default LocationForm