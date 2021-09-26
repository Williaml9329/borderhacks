import React, { useState, useEffect } from "react";
import { GoogleMap, withScriptjs, withGoogleMap, Polyline } from "react-google-maps";
import "./Traffic.css"
import { useHistory } from "react-router-dom";
import axios from 'axios';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

// call for each road segment
const getRoadsPath = (pointsArr) => {
    var key = "AIzaSyAOj7gHDrnEQnfabVoTgdUPIgy6OmbQ1SM";
    let path="";
    for (let i = 0; i < pointsArr.length; i++) {
        var point = "";
        if (i !== 0) {
            point = point + "|";
        }
        point = point + pointsArr[i].lat + "," + pointsArr[i].lng;
        path = path + point;
    }
    let config = {
        method: 'get',
        url: 'https://roads.googleapis.com/v1/snapToRoads?path=' + path + '&interpolate=true&key=' + key,
        headers: { }
    };

    return axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
}


const getNewPaths = () => {
    for (let j = 0; j < 3; j++) {
        const currSegments = this.props.markers[j].segments;
        console.log(currSegments);
        for (let i = 0; i < currSegments.length; i++) {
            getRoadsPath(currSegments[i]).then((path) => {
                let newPath = path.snappedPoints.map((point) => {
                    return {lat: point.location.latitude, lng: point.location.longitude}
                });
                return newPath;
                //this.fitBounds(map, maps)
            });
        }
    }
}

function Map() {
    let [newPaths, setNewPaths] = useState([]);

    React.useEffect(() => {
        for (let j = 0; j < 3; j++) {
            const currSegments = pathCoordinates[j].segments;

            for (let i = 0; i < currSegments.length; i++) {
                getRoadsPath(currSegments[i]).then((path) => {
                    let newPath = path.snappedPoints.map((point) => {
                        return {lat: point.location.latitude, lng: point.location.longitude}
                    });
                    setNewPaths(newPaths => [...newPaths, { path: newPath, colour: "#2dc937" }]);
                });
            }
        }
    }, []);

    const pathCoordinates =
        [{
            intersectionId: 1,
            segments: [
                // North side
                [{lat: 42.289919917942456, lng: -83.05966685756765},
                    {lat: 42.28767681214915, lng: -83.05826810620495}],
                [{lat: 42.28775623046475, lng: -83.0580515038325},
                    {lat: 42.288504972039576, lng: -83.05856296781901},
                    {lat: 42.28999162851155, lng: -83.05944857804155}],

                // East side
                [{lat: 42.287727050892045, lng: -83.0580083478404},
                    {lat: 42.28788717337904, lng: -83.05749355322271}],
                [{lat: 42.287727050892045, lng: -83.0580083478404},
                    {lat: 42.28788717337904, lng: -83.05749355322271}],

                // South side
                [{lat: 42.2858084383138, lng: -83.05695736838848},
                    {lat: 42.28768824536986, lng: -83.05805325503715}],
                [{lat: 42.28763056349611, lng: -83.05823310063727},
                    {lat: 42.28573716490464, lng: -83.05711994497918}],

                // West side
                [{lat: 42.28761297134182, lng: -83.05828995579793},
                    {lat: 42.28700821116101, lng: -83.05925220530699}],
                [{lat: 42.28761297134182, lng: -83.05828995579793},
                    {lat: 42.28700821116101, lng: -83.05925220530699}]
            ]
        },
            {
                intersectionId: 2,
                segments: [
                    // North side
                    [{lat: 42.28763056349611, lng: -83.05823310063727},
                        {lat: 42.28573716490464, lng: -83.05711994497918}],
                    [{lat: 42.2858084383138, lng: -83.05695736838848},
                        {lat: 42.28768824536986, lng: -83.05805325503715}],

                    // East side
                    [{lat: 42.285782569916044, lng: -83.05686430229588},
                        {lat: 42.286076425597756, lng: -83.0560308048033}],
                    [{lat: 42.285782569916044, lng: -83.05686430229588},
                        {lat: 42.286076425597756, lng: -83.0560308048033}],

                    // South side
                    [{lat: 42.28269216162717, lng: -83.05503484220532},
                        {lat: 42.28573217450626, lng: -83.05690165959554}],
                    [{lat: 42.285632959691355, lng: -83.05707332096476},
                        {lat: 42.28263659866907, lng: -83.05522259682789}],

                    // West side
                    [{lat: 42.28568455143785, lng: -83.05714305846318},
                        {lat: 42.28545834126086, lng: -83.0580711027405}],
                    [{lat: 42.28568455143785, lng: -83.05714305846318},
                        {lat: 42.28545834126086, lng: -83.0580711027405}]
                ]
            },
            {
                intersectionId: 3,
                segments: [
                    // North side
                    [{lat: 42.285632959691355, lng: -83.05707332096476},
                        {lat: 42.28263659866907, lng: -83.05522259682789}],
                    [{lat: 42.28269216162717, lng: -83.05503484220532},
                        {lat: 42.28573217450626, lng: -83.05690165959554}],

                    // East side
                    [{lat: 42.28268501688398, lng: -83.05493969940245},
                        {lat: 42.28299423169196, lng: -83.05404753190474}],
                    [{lat: 42.28268501688398, lng: -83.05493969940245},
                        {lat: 42.28299423169196, lng: -83.05404753190474}],

                    // South side
                    [{lat: 42.278620010678935, lng: -83.05247003509214},
                        {lat: 42.281400284255795, lng: -83.05422224284446},
                        {lat: 42.28259347349484, lng: -83.05501109332114}],
                    [{lat: 42.282531280831684, lng: -83.05515419203837},
                        {lat: 42.27849869940449, lng: -83.05263556528145}],
                    // West side
                    [{lat: 42.28257495361181, lng: -83.05523289924895},
                        {lat: 42.2819635323034, lng: -83.05708251570393}],
                    [{lat: 42.28257495361181, lng: -83.05523289924895},
                        {lat: 42.2819635323034, lng: -83.05708251570393}]]
            }];

    if (newPaths.length !== 24) {
        return (
            <GoogleMap
                defaultZoom={15}
                defaultCenter={{lat: 42.28573716490464, lng: -83.05711994497918}}>
                {
                    newPaths.map((segment) => {
                        return <Polyline
                            path={ segment.path }
                            geodesic={true}
                            options={{
                                strokeColor: segment.colour, // #2dc937, #98c13f, #98c13f, #dc7b2c, #dc7b2c
                                strokeOpacity: 0.75,
                                strokeWeight: 2
                            }}/>
                    })
                }
            </GoogleMap>
        );
    } else {
        return null;
    }
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
