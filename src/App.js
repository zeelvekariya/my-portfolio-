/*
Header.js
Zeel Rameshbhai Vekariya
301489564
29 january 2025
*/
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import AboutPage from "./pages/navbar/aboutPage/AboutPage";
import HomePage from "./pages/navbar/homePage/HomePage";
import "./App.css";
import ServicesPage from "./pages/navbar/servicesPage/ServicesPage";
import ContactPage from "./pages/navbar/contactPage/ContactPage";
import ProjectPage from "./pages/navbar/projectPage/ProjectPage";

function App() {
  return (
    <div>
      <div className="container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
