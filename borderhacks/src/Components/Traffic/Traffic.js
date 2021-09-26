import React, { useState, useEffect, Component } from "react";
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import "./Traffic.css"

function Map() {
    
    const [selectedIntersection, setSelectedIntersection] = useState(null);

    const locations = [
        {
            name: "Location 1",
            location: {
                lat: 42.282771078837,
                lng: -83.05469584217374
            }
        }, 
        {
            name: "Location 2",
            location: {
                lat: 42.28594873393785,
                lng: -83.05640801855508
            }
        }, {
            name: "Location 3",
            location: {
                lat: 42.28778731052449,
                lng: -83.0574700128186
            }
        }
    ]

    return (
        <GoogleMap
            defaultZoom = {14} 
            defaultCenter = {{lat: 42.317432, lng: -83.026772}} 
        >
            {locations.map(item => {
                return (
                <Marker key = {item.name} position = {item.location} onClick = {() => {
                    setSelectedIntersection(item);
                }} />
            )
            })}
            {selectedIntersection && (
                <InfoWindow 
                    position = {selectedIntersection.location}
                    onCloseClick = {() => {
                        setSelectedIntersection(null);
                    }}
                >
                    <div>Intersection Details</div>
                </InfoWindow>
            )}
        </GoogleMap>
    )

}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default function Traffic() {

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