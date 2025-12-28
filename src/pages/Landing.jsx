import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <h1 className="glow-text">✈ PLAN YOUR TRAVEL ✈</h1>
      <button className="primary-btn" onClick={() => navigate("/mode")}>
        Start Planning
      </button>
    </div>
  );
}
