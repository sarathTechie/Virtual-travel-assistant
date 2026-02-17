import { useNavigate } from "react-router-dom";

export default function ModeSelect() {
  const navigate = useNavigate();

  return (
    <div className="form-wrapper">
      <div className="mode-container">
        <div
          className="mode-card"
          onClick={() => navigate("/fixed")}
        >
          <h2>📍 Fixed Destination</h2>
          <p className="card-description">Choose your destination and plan accordingly</p>
          <ul>
            <li>✓ Choose destination</li>
            <li>✓ Set budget & days</li>
            <li>✓ Get perfect itinerary</li>
          </ul>
          <button className="card-btn">Select Plan</button>
        </div>

        <div
          className="mode-card"
          onClick={() => navigate("/plan")}
        >
          <h2>🌍 Discover Places</h2>
          <p className="card-description">Explore based on your preferences</p>
          <ul>
            <li>✓ No destination needed</li>
            <li>✓ AI suggests places</li>
            <li>✓ Explore via map</li>
          </ul>
          <button className="card-btn">Select Plan</button>
        </div>
      </div>
    </div>
  );
}
