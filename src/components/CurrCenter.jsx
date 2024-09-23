import { Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import { useEffect } from "react";

export function CurrCenter({ position, setPosition }) {
  const map = useMap();
  useMapEvents({
    drag: () => {
      setPosition(map.getCenter());
      console.log("current location:", position);
    },
    locationfound: (location) => {
      setPosition(location.latlng);
      map.panTo(location.latlng, map.getZoom());
    },
  });
  return (
    <Marker position={position}>
      <Popup>Locate the incident</Popup>
    </Marker>
  );
}
