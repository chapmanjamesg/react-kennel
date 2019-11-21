import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
//only include these once they are built - previous practice exercise
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import LocationDetail from './location/LocationDetail'
import EmployeeDetail from './employee/EmployeeDetail'
import OwnerDetail from './owner/OwnerDetail'


class ApplicationViews extends Component {

    render() {
        return (
            //JXS is not HTML so these empty tags will be taken as react.fragments
            <>
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    // Pass the animalId to the AnimalDetailComponent
                    return <AnimalDetail animalId={parseInt(props.match.params.animalId)} />
                }} />
                <Route exact path="/location" render={(props) => {
                    return <LocationList />
                }} />
                <Route path="/locations/:locationId(\d+)" render={(props) => {
                    return <LocationDetail locationId={parseInt(props.match.params.locationId)} />
                }} />
                <Route exact path="/employee" render={(props) => {
                    return <EmployeeList />
                }} />
                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    return <EmployeeDetail employeeId={parseInt(props.match.params.employeeId)} />
                }} />
                <Route exact path="/owner" render={(props) => {
                    return <OwnerList />
                }} />
                <Route path="/owners/:ownerId(\d+)" render={(props) => {
                    return <OwnerDetail ownerId={parseInt(props.match.params.ownerId)} />
                }} />
            </>
        )
    }
}

export default ApplicationViews