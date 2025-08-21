import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Impressum from "../pages/Impressum";
import PrivacyPolicy from "../pages/PrivacyPolicy";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/impressum" element={<Impressum />} />
      <Route path="/data-privacy" element={<PrivacyPolicy />} />
    </Routes>
  );
}
