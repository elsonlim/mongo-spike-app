import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './Map.css';

class Map extends React.Component {
    constructor() {
        super();

        this.state = {
            lat: 1.3521,
            lng: 103.8198
        }

        this.showPosition = this.showPosition.bind(this);
    }

    componentDidMount() {
        if (window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(this.showPosition);
        }
    }

    showPosition(position) {
        this.setState({
            lat: position.coords.latitude,
            lng: position.coords.longitude
        });
    }

    render() {
        return (
            <LoadScript id="script-loader"
                googleMapsApiKey="APIKEY">
                <GoogleMap id="map"
                    mapContainerStyle={{
                        height: "100%",
                        width: "100%"
                    }}
                    zoom={18}
                    center={{
                        lat: this.state.lat,
                        lng: this.state.lng
                    }}>
                    <Marker
                        onLoad={marker => {
                            console.log(`Marker Position: [${marker.position.lat()}, ${marker.position.lng()}]`);
                        }}
                        position={{
                            lat: this.state.lat,
                            lng: this.state.lng
                        }}
                    />
                </GoogleMap>
            </LoadScript>
        )
    }
}

export default Map;
