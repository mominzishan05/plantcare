import React from "react";
import "../Css/InfoPage.css";

const InfoPage = () => {
  return (
    <div className="infopage">
      {/* Hero Section */}
      <section className="info-hero">
        <h1>Plant <span>Information</span></h1>
        <p>Learn more about plants and their amazing benefits 🌱</p>
      </section>

      {/* Information Cards */}
      <section className="info-cards">
        <div className="info-card">
          <img
            src="https://img.icons8.com/color/96/plant-under-sun.png"
            alt="Air Purification"
          />
          <h3>Air Purification</h3>
          <p>
            Many indoor plants act as natural air filters, removing toxins and
            improving oxygen levels.
          </p>
        </div>

        <div className="info-card">
          <img
            src="https://img.icons8.com/color/96/flower.png"
            alt="Stress Relief"
          />
          <h3>Stress Relief</h3>
          <p>
            Keeping plants around reduces stress, boosts mood, and creates a
            calming environment.
          </p>
        </div>

        <div className="info-card">
          <img
            src="https://img.icons8.com/color/96/gardening.png"
            alt="Easy Care"
          />
          <h3>Easy To Care</h3>
          <p>
            With simple tips, even beginners can grow healthy indoor and outdoor
            plants easily.
          </p>
        </div>

        <div className="info-card">
          <img
            src="https://img.icons8.com/color/96/tree.png"
            alt="Eco Friendly"
          />
          <h3>Eco Friendly</h3>
          <p>
            Plants help fight climate change by absorbing CO₂ and producing
            fresh oxygen.
          </p>
        </div>
      </section>
    </div>
  );
};

export default InfoPage;
