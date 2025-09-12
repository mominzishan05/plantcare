import React from "react";
import "../Css/AboutPage.css";

const AboutPage = () => {
  return (
    <div className="aboutpage">
      {/* Header Section */}
      <section className="about-hero">
        <h1>About <span>Plantify</span></h1>
        <p>Bringing Nature Closer To You 🌿</p>
      </section>

      {/* About Content Section */}
      <section className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            At <b>Plantify</b>, we believe every home deserves the freshness of
            green plants. Our mission is to make plant care simple, fun and
            accessible to everyone. Whether you are a beginner or an expert, we
            bring you the best indoor & outdoor plants with easy care guides.
          </p>
          <p>
            Plants not only beautify spaces but also improve air quality and
            bring peace of mind. Join us in our journey to make the world
            greener, one plant at a time.
          </p>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
            alt="Plants"
          />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
