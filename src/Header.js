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

    componentWillReceiveProps(nextProps) {
        if (nextProps.lat !== this.state.inputLat || nextProps.lng !== this.state.inputLng) {
            this.setState({
                inputLat: nextProps.lat,
                inputLng: nextProps.lng
            });
        }
    }

    handleClick = () => {
        this.props.setPosition(this.state.inputLat, this.state.inputLng);
    }

    render() {
        return (
            <div className="Header">
                <div className="Title">Simple Markers</div>
                <div className="Control">
                    <label htmlFor="lat" className="Label">Latitude</label>
                    <input id="lat" type="text" value={this.state.inputLat}
                        onChange={(event) => this.setState({inputLat: Number.parseFloat(event.target.value)})} />
                    <label htmlFor="lng" className="Label">Longitude</label>
                    <input id="lng" type="text" value={this.state.inputLng}
                        onChange={(event) => this.setState({inputLng: Number.parseFloat(event.target.value)})} />
                    <button onClick={this.handleClick}>Search around me!</button>
                </div>
            </div>
        )
    }
}

export default Header;
