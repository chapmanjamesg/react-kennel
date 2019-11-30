import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './home/Home'
//only include these once they are built - previous practice exercise
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
import AnimalForm from './animal/AnimalForm'
import EmployeeList from './employee/EmployeeList'
import EmployeeForm from './employee/EmployeeForm'
import EmployeeWithAnimals from './employee/EmployeeWithAnimals'
import LocationList from './location/LocationList'
import LocationWithEmployees from './location/LocationWithEmployees'
import LocationForm from './location/LocationForm'
import OwnerList from './owner/OwnerList'
import OwnerDetail from './owner/OwnerDetail'
import OwnerForm from './owner/OwnerForm'
import Login from './auth/login'
import AnimalEditForm from './animal/AnimalEditForm'
import EmployeeEditForm from './employee/EmployeeEditForm'
import LocationEditForm from './location/LocationEditForm'
import OwnerEditForm from './owner/OwnerEditForm'


class ApplicationViews extends Component {


    // Check if credentials are in local storage
    //returns true/false
    isAuthenticated = () => localStorage.getItem("credentials") !== null

    render() {
        return (
            //JXS is not HTML so these empty tags will be taken as react.fragments which will prevent us from having extra <div>s, <article>s, or <section>s
            <>
                {/* the exact part of this code makes it so you will be shown only things with that exact reference */}
                <Route exact path="/" render={(props) => {
                    return <Home />
                }} />
                <Route exact path="/animals" render={props => {
                    if (this.isAuthenticated()) {
                        return <AnimalList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/animals/:animalId(\d+)" render={(props) => {
                    // Pass the animalId to the AnimalDetailComponent
                    return <AnimalDetail animalId={parseInt(props.match.params.animalId)}
                        {...props}
                    />
                }} />
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props} />
                }} />
                <Route
                    path="/animals/:animalId(\d+)/edit" render={props => {
                        return <AnimalEditForm {...props} />
                    }}
                />
                <Route exact path="/employees" render={props => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

                <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props} />
                }} />
                <Route path="/employees/:employeeId(\d+)/edit" render={props => {
                    return <EmployeeEditForm {...props} />
                }} />
                <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
                    return <EmployeeWithAnimals {...props} />
                }} />
                <Route exact path="/locations" render={props => {
                    if (this.isAuthenticated()) {
                        return <LocationList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/locations/new" render={(props) => {
                    return <LocationForm {...props} />
                }} />
                <Route path="/locations/:locationId(\d+)/edit" render={(props) => {
                    return <LocationEditForm {...props} />
                }} />
                <Route path="/locations/:locationId(\d+)/details" render={(props) => {
                    return <LocationWithEmployees  {...props} />
                }} />
                <Route exact path="/owners" render={props => {
                    if (this.isAuthenticated()) {
                        return <OwnerList {...props} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/owners/:ownerId(\d+)" render={(props) => {
                    return <OwnerDetail ownerId={parseInt(props.match.params.ownerId)}
                        {...props}
                    />
                }} />
                <Route path="/owners/new" render={(props) => {
                    return <OwnerForm {...props} />
                }} />
                <Route path="/owners/:ownerId(\d+)/edit" render={props => {
                    return <OwnerEditForm {...props} />
                }} />
                <Route path="/login" component={Login} />
            </>
        )
    }
}

export default ApplicationViews