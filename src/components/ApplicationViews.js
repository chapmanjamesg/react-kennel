import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
//only include these once they are built - previous practice exercise
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
import EmployeeList from './employee/EmployeeList'
import EmployeeDetail from './employee/EmployeeDetail'
import EmployeeForm from './employee/EmployeeForm'
import LocationList from './location/LocationList'
import LocationDetail from './location/LocationDetail'
import LocationForm from './location/LocationForm'
import OwnerList from './owner/OwnerList'
import OwnerDetail from './owner/OwnerDetail'
import OwnerForm from './owner/OwnerForm'


class ApplicationViews extends Component {

    render() {
        return (
            //JXS is not HTML so these empty tags will be taken as react.fragments which will prevent us from having extra <div>s, <article>s, or <section>s
            <>
                {/* the exact part of this code makes it so you will be shown only things with that exact reference */}
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList {...props} />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    // Pass the animalId to the AnimalDetailComponent
                    return <AnimalDetail animalId={parseInt(props.match.params.animalId)}
                        {...props}
                    />
                }} />
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props} />
                }} />
                <Route exact path="/employee" render={(props) => {
                    return <EmployeeList {...props} />
                }} />
                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    return <EmployeeDetail employeeId={parseInt(props.match.params.employeeId)}
                        {...props}
                    />
                }} />
                <Route path="/employee/new" render={(props) => {
                    return <EmployeeForm {...props} />
                }} />
                <Route exact path="/location" render={(props) => {
                    return <LocationList {...props} />
                }} />
                <Route path="/locations/:locationId(\d+)" render={(props) => {
                    return <LocationDetail locationId={parseInt(props.match.params.locationId)}
                        {...props}
                    />
                }} />
                <Route path="/location/new" render={(props) => {
                    return <LocationForm {...props} />
                }} />
                <Route exact path="/owner" render={(props) => {
                    return <OwnerList {...props} />
                }} />
                <Route path="/owners/:ownerId(\d+)" render={(props) => {
                    return <OwnerDetail ownerId={parseInt(props.match.params.ownerId)}
                        {...props}
                    />
                }} />
                <Route path="/owner/new" render={(props) => {
                    return <OwnerForm {...props} />
                }} />
            </>
        )
    }
}

export default ApplicationViews