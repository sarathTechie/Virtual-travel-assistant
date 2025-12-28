import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function FixedDestination() {
  const navigate = useNavigate();

  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");
  const [budget, setBudget] = useState("");
  const [currency, setCurrency] = useState("");
  const [tripType, setTripType] = useState("");

  function handleSubmit() {
    // SAVE DATA FOR ITINERARY
    localStorage.setItem(
      "fixedData",
      JSON.stringify({
        location: destination,
        days: Number(days),
        budget,
        currency,
        tripType
      })
    );

    navigate("/itinerary");
  }

  return (
    <div className="form-container">
      <h2>Fixed Destination</h2>

      <div className="form-grid">
        <input
          placeholder="Destination (London, Mumbai...)"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
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
          Generate Itinerary
        </button>
      </div>
    </div>
  );
}
