import React, { useState, useEffect } from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import "./Traffic.css"
import { useHistory } from "react-router-dom";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Map() {
    
    return (
        <GoogleMap 
            defaultZoom = {10} 
            defaultCenter = {{lat: 42.317432, lng: -83.026772}} 
        />
    )

}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default function Traffic() {

    let history = useHistory()

    return (
        <div className = "TrafficContainer">
            <div style = {{ height: '99vh', width: "70%" }}>
            <WrappedMap 
                googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC2-HdSCQjV2HdgkF6iQdvdcBYm7bBF39w"}
                loadingElement = {<div style = {{height: "100%"}}/>}
                containerElement = {<div style = {{height: "100%"}}/>}
                mapElement = {<div style = {{height: "100%"}}/>}
            />
            </div>
            <div className = "TrafficInfo">
                <center><h2 className = "TrafficInfoTitle"> Traffic Analysis </h2></center>
                <p> Data goes here. </p>
            </div>
        </div>
    )
}