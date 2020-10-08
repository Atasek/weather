import React from 'react';
// import {NavLink, Form, Navbar, Col, Nav, Row} from "react-bootstrap";
//import Weather from './Weather';


class App extends React.Component {
    coordinates;

     getLocation() {
        navigator.geolocation.getCurrentPosition((position)=>this.showPosition());
        }

    showPosition(position) {
    this.coordinates = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
    }


    render() {
        return <div>
            coordinates,{this.coordinates}
        <div/>;
    }
}


export default App;
