// Global import of react
import React from 'react';
// import prop types
// import PropTypes from 'prop-types';
// Import componets for google map
// Import google map react component
import GoogleMapReact from 'google-map-react';
// Import Material UI components and styling
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class GoogleMapsContainer extends React.Component {
  static defaultProps = {
    center: {
      lat: 44.0190,
      lng: -92.4637,
    },
    zoom: 15,
  };
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
      markerNumber: '',
    };
  }

  render() {
    const style = {
      width: '100vw',
      height: '75vh',
      marginLeft: '-30',
      marginRight: '-50',
    };

    const { google } = this.props;
    const { activeMarker, showingInfoWindow } = this.state;

    return (
      <Map
        item
        // xs = { 12 }
        style={style}
        google={google}
        onClick={this.onMapClick}
        zoom={15}
        className="homeless-map"
        initialCenter={{ lat: 44.9818, lng: -93.2775 }}
      >
        <Marker
          onClick={this.onMarkerClick}
          title="Harbor Light Shelter"
          position={{ lat: 44.9782, lng: -93.2799 }}
          name="Harbor Light Shelter"
        />
        <InfoWindow
          marker={activeMarker}
          visible={showingInfoWindow}
        >
          <Paper>
            <Typography
              variant="h5"
            >
              Harbor Light Shelter
            </Typography>
            <Typography
              component="p"
            >
              1010 Currie Ave, Minneapolis, MN 55403
              <br />
              302-293-8627
            </Typography>
          </Paper>
        </InfoWindow>
        <Marker
          onClick={this.onMarkerClick}
          title="Marys Place"
          position={{ lat: 44.9814, lng: -93.2807 }}
          name="Marys Place"
        />
        <InfoWindow
          marker={activeMarker}
          visible={showingInfoWindow}
        >
          <Paper>
            <Typography
              variant="h5"
              component="h4"
            >
              Marys Place
            </Typography>
            <Typography
              component="p"
            >
              401 N 7th St, Minneapolis, MN 55405
              <br />
              302-293-8627
            </Typography>
          </Paper>
        </InfoWindow>
        <Marker
          onClick={this.onMarkerClick}
          title="Higher Ground"
          position={{ lat: 44.9788, lng: -93.2854 }}
          name="Higher Ground"
        />
        <InfoWindow
          marker={activeMarker}
          visible={showingInfoWindow}
        >
          <Paper>
            <Typography
              variant="h5"
              component="h4"
            >
              Higher Ground
            </Typography>
            <Typography
              component="p"
            >
              165 Glenwood Ave, Minneapolis, MN 55405
              <br />
              302-293-8627
            </Typography>
          </Paper>
        </InfoWindow>
      </Map>
    );
  }
}

// Check prop types
// GoogleApiWrapper.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// Export component
export default GoogleApiWrapper({
  api: 'AIzaSyBlNQbJHExNycQQQRotKkzcGD31jK6DduI',
})(GoogleMapsContainer);
