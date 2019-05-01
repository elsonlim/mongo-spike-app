import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './Map.css';

class Map extends React.Component {
    handleClick = (event) => {
        this.props.setPosition(event.latLng.lat(), event.latLng.lng());
    }

    render() {
        return (
            <LoadScript id="script-loader"
                googleMapsApiKey={process.env.REACT_APP_MAPSAPIKEY}>
                <GoogleMap id="map"
                    mapContainerStyle={{
                        height: "100%",
                        width: "100%"
                    }}
                    zoom={18}
                    center={{
                        lat: this.props.lat,
                        lng: this.props.lng
                    }}
                    onClick={this.handleClick}>
                    <Marker
                        onLoad={marker => {
                            console.log(`Marker Position: [${marker.position.lat()}, ${marker.position.lng()}]`);
                        }}
                        position={{
                            lat: this.props.lat,
                            lng: this.props.lng
                        }}
                    />
                </GoogleMap>
            </LoadScript>
        )
    }
}

export default Map;
