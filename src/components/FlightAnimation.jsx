export default function FlightAnimation() {
  return (
    <div className="travel-map-bg">
      {/* World Map */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
        alt="world map"
        className="world-map"
      />

      {/* Flight paths */}
      <div className="flight-path path1"></div>
      <div className="flight-path path2"></div>
      <div className="flight-path path3"></div>

      {/* Planes */}
      <div className="plane plane1">✈</div>
      <div className="plane plane2">✈</div>
      <div className="plane plane3">✈</div>
    </div>
  );
}
