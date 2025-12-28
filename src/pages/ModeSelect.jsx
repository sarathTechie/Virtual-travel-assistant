import { useNavigate } from "react-router-dom";

export default function ModeSelect() {
  const nav = useNavigate();

  return (
    <div className="mode-container">

      <div className="mode-card" onClick={() => nav("/fixed")}>
        <h2>Fixed Destination</h2>
        <ul>
          <li>✔ Perfect when you know where to go</li>
          <li>✔ Enter destination & preferences</li>
          <li>✔ 3–5 itinerary options</li>
          <li>✔ Day-wise planning</li>
          <li>✔ Budget breakdown</li>
        </ul>
      </div>

      <div className="mode-card" onClick={() => nav("/plan")}>
        <h2>Plan Your Travel</h2>
        <ul>
          <li>✔ Discover places within radius</li>
          <li>✔ Interactive map view</li>
          <li>✔ Select destination visually</li>
          <li>✔ Smart itinerary logic</li>
          <li>✔ Flexible trip planning</li>
        </ul>
      </div>

    </div>
  );
}
