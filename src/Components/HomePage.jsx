import React from "react";
import "../Css/HomePage.css";

const HomePage = () => {
  return (
    
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">
          Welcome to <span>Plantify</span>
        </h1>
        <p className="hero-subtitle">Grow Green. Live Clean. 🌿</p>
        <button className="hero-btn">Explore Plants</button>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-card">
          <img
            src="https://img.icons8.com/color/96/plant-under-sun.png"
            alt="Indoor Plants"
          />
          <h3>Indoor Plants</h3>
          <p>Bring freshness and oxygen into your home with our best picks.</p>
        </div>

        <div className="feature-card">
          <img
            src="https://www.svgrepo.com/show/429037/care-ecology-environment.svg"
            alt="Plant Care"
          />
          <h3>Plant Care</h3>
          <p>Easy tips and guides to keep your plants healthy & happy.</p>
        </div>

        <div className="feature-card">
          <img
            src="https://www.svgrepo.com/show/429036/agriculture-eco-farm.svg"
            alt="Outdoor Plants"
          />
          <h3>Outdoor Plants</h3>
          <p>Transform your garden into a peaceful green paradise.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
