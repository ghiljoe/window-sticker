import React, { useState, useEffect } from 'react';
import loadjs from 'load-js';
import markerIcon from '../assets/images/map-pin.png';

function GoogleMap(props) {
  const { markers, zoom, onMarkerSelect } = props;
  const [map, setMap] = useState(null);
  const [markerInstances, setMarkerInstances] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [selectedMarkerData, setSelectedMarkerData] = useState(null);

  const mapRef = React.createRef();

  useEffect(() => {
    const loadGoogleMapsAPI = async () => {
      await loadjs(
        `https://maps.googleapis.com/maps/api/js?key=AIzaSyDjx0QsOIj6kV1G-UkHSzZBtiRwaDQ9TrM`,
        { returnPromise: true }
      );
    };

    loadGoogleMapsAPI();
  }, []);

  useEffect(() => {
    if (window.google && mapRef.current && !map) {
      const mapInstance = new window.google.maps.Map(mapRef.current, {
        center: { lat: markers[0].lat, lng: markers[0].lng },
        zoom: zoom,
      });

      setMap(mapInstance);

      // Add markers to the map
      const markerInstances = markers.map(({ lat, lng, address }, index) => {
        const markerInstance = new window.google.maps.Marker({
          position: { lat, lng },
          map: mapInstance,
          title: address,
          id: index,
          customData: { lat, lng, address },
          icon: markerIcon,
        });

        markerInstance.addListener('click', () => {
          setSelectedMarker(markerInstance);
          setSelectedMarkerData(markerInstance.customData); 
          if (onMarkerSelect) {
            onMarkerSelect(markerInstance.customData); 
          }
        });

        return markerInstance;
      });

      setMarkerInstances(markerInstances);

    }
  }, [markers, map, mapRef, onMarkerSelect]);

//   useEffect(() => {
//     if (selectedMarker) {
//       const infowindow = new window.google.maps.InfoWindow({
//         content: `<div>${selectedMarker.getTitle()}</div>`,
//       });

//       infowindow.open(map, selectedMarker);

//       return () => {
//         infowindow.close();
//       };
//     }
//   }, [selectedMarker, map]);

  return <div style={{ height: '400px', width: '100%' }} ref={mapRef} />;
}

export default GoogleMap;
