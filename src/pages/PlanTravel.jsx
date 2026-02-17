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

  function handleSubmit(e) {
    e.preventDefault();

    localStorage.setItem(
      "planTravelData",
      JSON.stringify({
        location,
        radius: Number(radius),
        days: Number(days),
        budget,
        currency,
        tripType,
      })
    );

    navigate("/map");
  }

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h2>🌍 Discover Places</h2>
        <p className="form-subtitle">Explore destinations based on your preferences</p>

        <form onSubmit={handleSubmit} className="form-grid">
          <input
            type="text"
            placeholder="Starting Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="Search Radius (km)"
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="Trip Duration (days)"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="Budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            required
          />

          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            required
          >
            <option value="">Select Currency</option>
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>

          <select
            value={tripType}
            onChange={(e) => setTripType(e.target.value)}
            required
          >
            <option value="">Select Trip Type</option>
            <option value="Family">Family</option>
            <option value="Solo">Solo</option>
            <option value="Couple">Couple</option>
            <option value="Friends">Friends</option>
          </select>

          <div className="form-actions">
            <button type="submit">
              Show Map
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
