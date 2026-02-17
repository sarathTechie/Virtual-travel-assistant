import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <div className="plane">✈</div>
      
      <h1 className="hero-title">✈ PLAN YOUR TRAVEL ✈</h1>
      
      <p className="subtitle">Your AI-powered virtual travel assistant</p>

      <button
        className="primary-btn"
        onClick={() => navigate("/mode")}
      >
        Start Planning
      </button>
    </div>
  );
}
