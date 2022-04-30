import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';




class AddMap extends Component {
  render() {
    const containerStyle = {
      left: '45rem',
      width: '450px',
      height: '400px'
    };
    return (
      <Map style={containerStyle} google={this.props.google} zoom={14}>
        
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              
            </div>
        </InfoWindow>
        
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDJFB3KNMqy3BIR8IuV6CkHSJMBG7TWV7E")
})(AddMap)