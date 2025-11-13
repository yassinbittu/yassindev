import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
// import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";


//  Import service detail pages
import EcommercePage from "./components/servicePages/EcommercePage";
import BusinessPage from "./components/servicePages/BusinessPage";
import WebAppPage from "./components/servicePages/WebAppPage";
import PortfolioPage from "./components/servicePages/PortfolioPage";
import PosterPage from "./components/servicePages/PosterPage";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Services />
                  {/* <Projects /> */}
                  <About />
                  <Contact />
                  <Footer />
                </>
              }
            />
            {/*  Add dedicated service routes */}
            <Route path="/services/ecommerce" element={<EcommercePage />} />
            <Route path="/services/business" element={<BusinessPage />} />
            <Route path="/services/webapp" element={<WebAppPage />} />
            <Route path="/services/portfolio" element={<PortfolioPage />} />
            <Route path="/services/poster" element={<PosterPage />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
