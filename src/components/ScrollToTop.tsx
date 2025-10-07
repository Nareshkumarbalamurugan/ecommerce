import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to top whenever the pathname changes. If a hash is present, let the browser handle the anchor.
export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

  return null;
}
