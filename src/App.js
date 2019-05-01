import React from 'react';
import Header from './Header';
import Map from './Map';
import './App.css';

class App extends React.Component {
    componentDidMount() {
        if (window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(this.showPosition);
        } else {
            this.setState({
                lat: 1.3521,
                lng: 103.8198
            });
        }
    }

    showPosition = (position) => {
        this.setState({
            lat: position.coords.latitude,
            lng: position.coords.longitude
        });
    }

    setPosition = (lat, lng) => {
        this.setState({lat, lng})
    }

    render() {
        if (!this.state) {
            return <div className="App">Loading...</div>
        }

        return(
            <div className="App" >
                <Header lat={this.state.lat} lng={this.state.lng} setPosition={this.setPosition}></Header>
                <Map lat={this.state.lat} lng={this.state.lng} setPosition={this.setPosition}></Map>
            </div>
        );
    }
}

export default App;
