import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import scrollToSection from "./scrollToSection";

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");

      // kurzer Delay damit React DOM fertig gerendert hat
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 500);
    }
  }, [location]);

  return null;
}

export default ScrollToHash;
