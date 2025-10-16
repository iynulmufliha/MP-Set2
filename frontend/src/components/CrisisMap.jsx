import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Custom marker icon (optional)
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/252/252025.png", // small pin icon
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

// Example crisis data
const crises = [
  {
    id: 1,
    name: "Wildfire in California",
    lat: 36.7783,
    lng: -119.4179,
    type: "Wildfire",
    description: "Severe wildfires burning over 50,000 acres.",
  },
  {
    id: 2,
    name: "Flood in Bangladesh",
    lat: 23.685,
    lng: 90.3563,
    type: "Flood",
    description: "Monsoon floods affecting thousands of residents.",
  },
  {
    id: 3,
    name: "Earthquake in Turkey",
    lat: 38.9637,
    lng: 35.2433,
    type: "Earthquake",
    description: "Magnitude 6.8 earthquake reported near Ankara.",
  },
  {
    id: 4,
    name: "Cyclone in Madagascar",
    lat: -18.7669,
    lng: 46.8691,
    type: "Cyclone",
    description: "Cyclone causing heavy rainfall and winds.",
  },
  {
    id: 5,
    name: "Volcanic Eruption in Indonesia",
    lat: -7.7956,
    lng: 110.3695,
    type: "Volcano",
    description: "Mount Merapi erupted with ash cloud affecting nearby towns.",
  },
  // Add 5-10 more crises as needed
];

const CrisisMap = () => {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      style={{ height: "500px", width: "100%", borderRadius: "8px" }}
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {crises.map((crisis) => (
        <Marker
          key={crisis.id}
          position={[crisis.lat, crisis.lng]}
          icon={customIcon}
        >
          <Popup>
            <div style={{ maxWidth: "200px" }}>
              <h5>{crisis.name}</h5>
              <p><strong>Type:</strong> {crisis.type}</p>
              <p>{crisis.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default CrisisMap;
