import { touristData } from "../data/touristData";

export default function Itinerary() {
  const data =
    JSON.parse(localStorage.getItem("selectedPlace")) ||
    JSON.parse(localStorage.getItem("fixedData"));

  if (!data || !data.location) {
    return <h2>No itinerary data found</h2>;
  }

  const city = data.location;
  const days = data.days || 3;

  const places =
    touristData[city] || [
      "City Exploration",
      "Local Attractions",
      "Food & Culture Tour"
    ];

  return (
    <div className="itinerary-container">
      <h2 className="itinerary-title">
        Your {city} Itinerary
      </h2>

      {places.slice(0, days).map((place, i) => (
        <div key={i} className="day-card">
          <h3>Day {i + 1}</h3>
          <p>📍 {place}</p>
        </div>
      ))}

      <div className="itinerary-actions">
        <button className="primary-btn">💾 Save</button>
        <button className="primary-btn">🔄 Regenerate</button>
        <button className="primary-btn">❌ Discard</button>
      </div>
    </div>
  );
}
