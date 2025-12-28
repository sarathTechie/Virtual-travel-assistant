import { MapContainer, TileLayer, Marker, Circle, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cityDatabase } from "../data/cityDatabase";
import { getDistanceKm } from "../utils/distance";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";


const emojiPin = L.divIcon({
  html: "📍",
  className: "emoji-pin",
  iconSize: [24, 24],
  iconAnchor: [12, 24]
});


export default function MapView() {
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("planTravelData"));

  const [center, setCenter] = useState([20, 78]);
  const [radiusMeters, setRadiusMeters] = useState(0);
  const [pins, setPins] = useState([]);

  useEffect(() => {
    if (!data?.location || !data?.radius) return;

    const cityCenters = {
      goa: [15.4909, 73.8278],
      mumbai: [19.0760, 72.8777],
      delhi: [28.6139, 77.2090],
      bengaluru: [12.9716, 77.5946],
      chennai: [13.0827, 80.2707]
    };

    const city = data.location.trim().toLowerCase();
    const centerCoords = cityCenters[city];

    if (!centerCoords) return;

    const radiusKm = Number(data.radius);
    const radiusM = radiusKm * 1000;

    setCenter(centerCoords);
    setRadiusMeters(radiusM);

    // ✅ FILTER CITIES INSIDE RADIUS
    const nearbyCities = cityDatabase.filter(c => {
      const distance = getDistanceKm(
        centerCoords[0],
        centerCoords[1],
        c.lat,
        c.lon
      );
      return distance <= radiusKm;
    });

    setPins(nearbyCities);
  }, [data]);

  return (
    <div style={{ height: "90vh" }}>
      <MapContainer center={center} zoom={6} style={{ height: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Circle
          center={center}
          radius={radiusMeters}
          pathOptions={{ color: "#00eaff" }}
        />

        {pins.map((p, i) => (
          <Marker
  key={i}
  position={[p.lat, p.lon]}
  icon={emojiPin}
>
            <Popup>
              <strong>{p.name}</strong><br /><br />
              <button
                onClick={() => {
                  localStorage.setItem(
                    "selectedPlace",
                    JSON.stringify({
                      location: p.name,
                      days: data.days
                    })
                  );
                  navigate("/itinerary");
                }}
              >
                📌 Show Itinerary
              </button>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
