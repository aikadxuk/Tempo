import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const Lat = 40.71324659653819;
  const Long = -74.00682420639909;
  return (
    <div className="w-full h-[300px] -z-50">
      <MapContainer
        center={[Lat, Long]}
        zoom={8}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[Lat, Long]}>
          <Popup>Downtown Conference Center</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
