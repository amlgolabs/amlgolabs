"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const OfficeLocationMap = () => {
  const mapContainerRef = useRef(null);

  // Define 6 office locations with coordinates
  const officeLocations = [
    { name: "Amlgo Labs - Delhi", coordinates: [77.1025, 28.7041] },
    { name: "Amlgo Labs - Mumbai", coordinates: [72.8777, 19.0760] },
    { name: "Amlgo Labs - Bangalore", coordinates: [77.5946, 12.9716] },
    { name: "Amlgo Labs - Chennai", coordinates: [80.2785, 13.0878] },
    { name: "Amlgo Labs - Pune", coordinates: [73.8567, 18.5204] },
    { name: "Amlgo Labs - Kolkata", coordinates: [88.3639, 22.5726] },
  ];

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainerRef.current,
    //   style: "https://api.maptiler.com/maps/satellite/style.json?key=JLdbje2Qo9dj5xaKECXn", // Replace YOUR_API_KEY with your MapTiler API Key
      style: "https://api.maptiler.com/maps/toner/style.json?key=JLdbje2Qo9dj5xaKECXn", // Replace YOUR_API_KEY with your MapTiler API Key
      center: officeLocations[0].coordinates, // Initial center of the map
      zoom: 1, // Zoom level
    });

    // Add markers for each office location
    officeLocations.forEach((office) => {
      new maplibregl.Marker({ color: "#FF5733" })
        .setLngLat(office.coordinates)
        .setPopup(new maplibregl.Popup().setText(office.name)) // Show office name in popup
        .addTo(map);
    });

    return () => map.remove(); // Clean up on unmount
  }, []);

  return (
    <div
      ref={mapContainerRef}
      style={{
        maxWidth:"1240px",
        width: "100%",
        marginInline: "auto",
        height: "450px",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    />
  );
};

export default OfficeLocationMap;
