import React from "react";
import { useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { CurrCenter } from "./CurrCenter";

export default function Map() {
  const [position, setPosition] = useState([0, 0]);

  return (
    <div>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <CurrCenter position={position} setPosition={setPosition} />
      </MapContainer>
    </div>
  );
}
