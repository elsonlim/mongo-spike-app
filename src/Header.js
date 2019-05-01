import React from 'react';
import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputLat: this.props.lat,
            inputLng: this.props.lng
        };
    }

    render() {
        return (
            <div className="Header">
                <div className="Title">Simple Markers</div>
                <div className="Control">
                    <div>
                        <label htmlFor="lat" className="Label">Latitude</label>
                        <input id="lat" type="text" value={this.props.lat}
                            onChange={(val) => this.setState({lat: val})} />
                        <label htmlFor="lng" className="Label">Longitude</label>
                        <input id="lng" type="text" value={this.props.lng}
                            onChange={(val) => this.setState({lng: val})} />
                        <button>Search around me!</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;
