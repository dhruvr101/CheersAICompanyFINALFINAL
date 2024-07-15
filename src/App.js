import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/UI/About";
import Blog from "./components/UI/Blog";
import Counter from "./components/UI/Counter";
import Hero from "./components/UI/Hero";
import Newsletter from "./components/UI/Newsletter";
import Services from "./components/UI/Services";
import Team from "./components/UI/Team";
import Testimonials from "./components/UI/Testimonials";
import Footer from "./components/Footer/Footer"; // Updated path

function App() {
  const [theme, setTheme] = useState("light-theme");

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light-theme" ? "" : "light-theme");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Router>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={
          <>
            <Hero theme={theme} />
            <Counter />
            <Testimonials />
          </>
        } />
        <Route path="/about" element={<About />} />
        {/* Add other routes here */}
      </Routes>
      <Footer /> {/* Add Footer component */}
    </Router>
  );
}

export default App;
