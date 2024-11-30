import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePageLogoClienteEFont from "./pages/HomePageLogoClienteEFont";
import Galeria1 from "./pages/Galeria1";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Galeria from "./pages/Galeria";
import ContactUs from "./pages/ContactUs";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/galeria1":
        title = "";
        metaDescription = "";
        break;
      case "/services":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/galeria":
        title = "";
        metaDescription = "";
        break;
      case "/contact-us":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePageLogoClienteEFont />} />
      <Route path="/galeria1" element={<Galeria1 />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/galeria" element={<Galeria />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
}
export default App;
