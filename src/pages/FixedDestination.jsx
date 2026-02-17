import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function FixedDestination() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");
  const [budget, setBudget] = useState("");
  const [currency, setCurrency] = useState("");
  const [tripType, setTripType] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    
    localStorage.setItem(
      "fixedData",
      JSON.stringify({
        location: destination,
        days: Number(days),
        budget,
        currency,
        tripType,
      })
    );

    navigate("/itinerary");
  }

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <h2>📍 Fixed Destination</h2>
        <p className="form-subtitle">Plan a trip to your chosen destination</p>

        <form onSubmit={handleSubmit} className="form-grid">
          <input
            type="text"
            placeholder="Destination (London, Mumbai...)"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
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
              Generate Itinerary
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
