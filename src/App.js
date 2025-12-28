import "./styles/dark.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import ModeSelect from "./pages/ModeSelect";
import FixedDestination from "./pages/FixedDestination";
import PlanTravel from "./pages/PlanTravel";
import MapView from "./pages/MapView";
import Itinerary from "./pages/Itinerary";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/mode" element={<ModeSelect />} />
        <Route path="/fixed" element={<FixedDestination />} />
        <Route path="/plan" element={<PlanTravel />} />
        <Route path="/map" element={<MapView />} />
        <Route path="/itinerary" element={<Itinerary />} />
      </Routes>
    </BrowserRouter>
  );
}
