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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs6ryZ3nrIqmHldXn3MyFvUqttGAdtuu4fPQ&s"
            alt="Indoor Plants"
          />
          <h3>Indoor Plants</h3>
          <p>Bring freshness and oxygen into your home with our best picks.</p>
        </div>

        <div className="feature-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuCjfQDhVrKhXTsw8-MTkBdtmBr7n_yJwTOg&s"
            alt="Plant Care"
          />
          <h3>Plant Care</h3>
          <p>Easy tips and guides to keep your plants healthy & happy.</p>
        </div>

        <div className="feature-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB374oQAvqJgvoV37iv8-SgftQWP-Qea678Q&s"
            alt="Outdoor Plants"
          />
          <h3>Outdoor Plants</h3>
          <p>Transform your garden into a peaceful green paradise.</p>
        </div>
      </section>

      {/* About Plants */}
      <section className="about">
        <h2>Why Choose Plants?</h2>
        <p>
          Plants are more than just decoration – they purify the air, reduce
          stress, and create a calming environment. Whether it's your office,
          balcony, or garden, plants bring positivity and freshness everywhere.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <h2>Benefits of Plants 🌱</h2>
        <div className="benefit-list">
          <div className="benefit-card">✔ Air Purification</div>
          <div className="benefit-card">✔ Stress Reduction</div>
          <div className="benefit-card">✔ Boost Productivity</div>
          <div className="benefit-card">✔ Natural Decoration</div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery">
        <h2>Our Plant Collection</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuk4StcoHqnL_oy8LfX6_DrPxvJamID98IsQ&s"
              alt="Aloe Vera"
            />
            <div className="overlay">Aloe Vera</div>
          </div>

          <div className="gallery-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbKJwpUOFCzawpyOA2pR7GSPtyCaM6dTb3Lg&s"
              alt="Snake Plant"
            />
            <div className="overlay">Snake Plant</div>
          </div>

          <div className="gallery-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7hHkP6S1_VYy-loHtJfcbcy1sFXYsOmxrPg&s"
              alt="Peace Lily"
            />
            <div className="overlay">Peace Lily</div>
          </div>

          <div className="gallery-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNVqP1BMWUkmnz-EoanAPw-4e1G1G-QYkvww&s"
              alt="Monstera"
            />
            <div className="overlay">Monstera</div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial">
            <p>"My home feels so fresh after adding Plantify’s indoor plants!"</p>
            <h4>- Ayesha</h4>
          </div>
          <div className="testimonial">
            <p>"Amazing plant care tips – my plants are healthier than ever."</p>
            <h4>- Zishu</h4>
          </div>
          <div className="testimonial">
            <p>"Fast delivery and beautiful collection of outdoor plants."</p>
            <h4>- Safa</h4>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Ready to Start Your Green Journey?</h2>
        <button className="hero-btn">Shop Now 🌿</button>
      </section>
    </div>
  );
};

export default HomePage;
