import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Impressum from "../pages/Impressum";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Meeting from "../pages/Meeting";
import PrivacyRequest from "../pages/PrivacyRequest";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meeting" element={<Meeting />} />
      <Route path="/impressum" element={<Impressum />} />
      <Route path="/data-privacy" element={<PrivacyPolicy />} />
      <Route path="/data-privacy-request" element={<PrivacyRequest />} />
    </Routes>
  );
}
