import React from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  MarkerF,
  useJsApiLoader} from "@react-google-maps/api";

const containerStyle = {
  width: "500px",
  height: "500px",
  margin: "50px",
};

const center = {
  lat: 40.00302399719007, 
  lng: 3.801641815344289
};
 


function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "YOUR_API_KEY",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={28}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <MarkerF position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);

// npm theke
