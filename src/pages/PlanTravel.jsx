import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function PlanTravel() {
  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [radius, setRadius] = useState("");
  const [days, setDays] = useState("");
  const [budget, setBudget] = useState("");
  const [currency, setCurrency] = useState("");
  const [tripType, setTripType] = useState("");

  function handleSubmit() {
    // SAVE DATA FOR MAP + ITINERARY
    localStorage.setItem(
      "planTravelData",
      JSON.stringify({
        location,
        radius: Number(radius),
        days: Number(days),
        budget,
        currency,
        tripType
      })
    );

    navigate("/map");
  }

  return (
    <div className="form-container">
      <h2>Plan Your Travel</h2>

      <div className="form-grid">
        <input
          placeholder="Starting Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          placeholder="Search Radius (km)"
          value={radius}
          onChange={(e) => setRadius(e.target.value)}
        />

        <input
          placeholder="Trip Duration (days)"
          value={days}
          onChange={(e) => setDays(e.target.value)}
        />

        <input
          placeholder="Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />

        <select onChange={(e) => setCurrency(e.target.value)}>
          <option value="">Currency</option>
          <option>INR</option>
          <option>USD</option>
          <option>EUR</option>
        </select>

        <select onChange={(e) => setTripType(e.target.value)}>
          <option value="">Trip Type</option>
          <option>Family</option>
          <option>Solo</option>
          <option>Couple</option>
          <option>Friends</option>
        </select>
      </div>

      <div className="form-actions">
        <button className="primary-btn" onClick={handleSubmit}>
          Show Map
        </button>
      </div>
    </div>
  );
}
