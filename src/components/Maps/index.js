import React, { Component } from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const GoogleMaps = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBPelc7NdvFONJiNxYEqnSkhKDRr-lxbTE&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `45%`, width: `100%` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)(({latitude, longitude, marker, onMarkerClick}) =>
    <GoogleMap
        defaultZoom={16}
        defaultCenter={{ lat: Number(latitude), lng: Number(longitude) }}
    >
        {marker && (
            <Marker
                position={{
                    lat: Number(latitude),
                    lng: Number(longitude)
                }}
                onClick={onMarkerClick}
            />
        )}
    </GoogleMap>
);

class Maps extends Component {
    constructor(props){
        super(props);
        this.state = {
            marker: false,
        };
    }

    componentDidMount() {
        this.delayedShowMarker()
    };

    delayedShowMarker = () =>
        setTimeout(() =>
            this.setState({ marker: true })
        , 3000);

    handleMarkerClick = () => {
        this.setState({ marker: false });
        this.delayedShowMarker();
    };

    render() {
        const { marker } = this.state;
        const { latitude, longitude} = this.props;
        return (
            <GoogleMaps
                marker={marker}
                latitude={latitude}
                longitude={longitude}
                onMarkerClick={this.handleMarkerClick}
            />
        )
    }
}

export default Maps;