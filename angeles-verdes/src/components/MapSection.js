import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import '../styles/MapSection.css';

const mapContainerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 19.3221, // Centered around UNAM area
  lng: -99.1860
};

const markers = [
  { id: 1, position: { lat: 19.3221, lng: -99.1860 }, status: "OK" },
  // Add more markers for units
];

function MapSection() {
  return (
    <LoadScript googleMapsApiKey="YOUR_API_KEY_HERE">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={center}
      >
        {markers.map(marker => (
          <Marker key={marker.id} position={marker.position} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default MapSection;
