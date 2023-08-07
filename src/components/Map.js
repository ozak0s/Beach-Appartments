// --- (1), (2) & (3): install and import ---
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import popupImg from "../images/outsideview2.jpg";
// --- ---------------------------------- ---

export function Map() {
  // Berlin coordinates
  const position = [40, 24];

  // --- (6) Create a custom marker ---
  const customIcon = new Icon({
    iconUrl: markerIconPng,
    iconSize: [20, 20],
    iconAnchor: [1, 1],
    popupAnchor: [-0, 1],
  });

  return (
    <section className="map-component">
      {/* --- (5) Add leaflet map container --- */}
      <div className="map">
        <MapContainer center={position} zoom={4} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={customIcon}>
            <Popup>
              <img src={popupImg} alt="apsimage" />
            </Popup>
          </Marker>
        </MapContainer>
        {/* --- ---------------------------- --- */}
      </div>
    </section>
  );
}
