import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import "./Traffic.css"

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 42.317432,
      lng: -83.026772
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
        <div className = "TrafficContainer">
            <div className = "map" style={{ height: '100vh', width: "70%" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyC2-HdSCQjV2HdgkF6iQdvdcBYm7bBF39w" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                <AnyReactComponent
                    lat={42.317432}
                    lng={-83.026772}
                    text="Windsor"
                />
                </GoogleMapReact>
            </div>
            <div className = "TrafficInfo">
                <center><h2 className = "TrafficInfoTitle"> Traffic Analysis </h2></center>
            </div>
        </div>
    );
  }
}

export default SimpleMap;