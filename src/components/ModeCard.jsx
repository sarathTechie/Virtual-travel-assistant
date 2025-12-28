import { useNavigate } from "react-router-dom";

export default function ModeCard({ title, link }) {
  const navigate = useNavigate();
  return (
    <div className="card" onClick={() => navigate(link)}>
      <h2>{title}</h2>
      <p>Click to continue</p>
    </div>
  );
}
