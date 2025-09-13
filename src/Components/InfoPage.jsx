import React from "react";
import "../Css/InfoPage.css";

const InfoPage = () => {
  return (
    <div className="infopage">
      {/* Hero Section */}
      <section className="info-hero">
        <h1>
          Plant <span>Information</span>
        </h1>
        <p>Learn more about plants and their amazing benefits 🌱</p>
      </section>

      {/* Information Cards */}
      <section className="info-cards">
        <div className="info-card">
          <img src="https://img.icons8.com/color/96/plant-under-sun.png" alt="Air Purification" />
          <h3>Air Purification</h3>
          <p>Many indoor plants act as natural air filters, removing toxins and improving oxygen levels.</p>
        </div>

        <div className="info-card">
          <img src="https://img.icons8.com/color/96/flower.png" alt="Stress Relief" />
          <h3>Stress Relief</h3>
          <p>Keeping plants around reduces stress, boosts mood, and creates a calming environment.</p>
        </div>

        <div className="info-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuCjfQDhVrKhXTsw8-MTkBdtmBr7n_yJwTOg&s" alt="Easy Care" />
          <h3>Easy To Care</h3>
          <p>With simple tips, even beginners can grow healthy indoor and outdoor plants easily.</p>
        </div>

        <div className="info-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ftDJt32BUV1cvb9k88j_xyVjV-hBVWi0_w&s" alt="Eco Friendly" />
          <h3>Eco Friendly</h3>
          <p>Plants help fight climate change by absorbing CO₂ and producing fresh oxygen.</p>
        </div>
      </section>

      {/* Daily Use Plants Section */}
      <section className="plant-section">
        <h2>Popular Daily Use Plants 🌿</h2>
        <div className="plant-grid">
          <div className="plant-card">
            <div className="plant-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuk4StcoHqnL_oy8LfX6_DrPxvJamID98IsQ&s" alt="Aloe Vera"/>
            </div>
            <h3>Aloe Vera</h3>
            <p>Known for healing skin burns and improving air quality indoors.</p>
          </div>

          <div className="plant-card">
            <div className="plant-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXmKC_4rpMp63wTZAiaw7pgU9P0XQ068fWoQ&s" alt="Tulsi"/>
            </div>
            <h3>Tulsi (Holy Basil)</h3>
            <p>Used in Ayurveda for immunity and natural remedies.</p>
          </div>

          <div className="plant-card">
            <div className="plant-img">
              <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400" alt="Money Plant"/>
            </div>
            <h3>Money Plant</h3>
            <p>Brings positivity, wealth, and purifies the air at home.</p>
          </div>

          <div className="plant-card">
            <div className="plant-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKomGVMbuh4_FLiMe0CTjYvhhr3SNSIZ8cww&s" alt="Neem"/>
            </div>
            <h3>Neem</h3>
            <p>Famous for medicinal uses like skin care and natural pesticide.</p>
          </div>

          <div className="plant-card">
            <div className="plant-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbKJwpUOFCzawpyOA2pR7GSPtyCaM6dTb3Lg&s" alt="Snake Plant"/>
            </div>
            <h3>Snake Plant</h3>
            <p>Releases oxygen at night, making it great for bedrooms.</p>
          </div>

          <div className="plant-card">
            <div className="plant-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7hHkP6S1_VYy-loHtJfcbcy1sFXYsOmxrPg&s" alt="Peace Lily"/>
            </div>
            <h3>Peace Lily</h3>
            <p>Absorbs indoor pollutants and looks elegant in homes.</p>
          </div>

          <div className="plant-card">
            <div className="plant-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR5AECXBdNBJ2XtYjb12LcTJlI6nvxxRf4Wg&s" alt="Bamboo"/>
            </div>
            <h3>Bamboo</h3>
            <p>Symbol of luck and prosperity, grows easily indoors.</p>
          </div>

          <div className="plant-card">
            <div className="plant-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSahbaBkSBLI3AD2QIE3Lo-hpDoY-doaHhDSQ&s" alt="Jasmine"/>
            </div>
            <h3>Jasmine</h3>
            <p>Beautiful fragrance and used in teas & Ayurvedic medicines.</p>
          </div>

          <div className="plant-card">
            <div className="plant-img">
              <img src="https://dms.mydukaan.io/original/jpeg/upload_file_service/56dd9524-af8f-4194-9f06-828eec12244c/t-pudiinaa-kaa-paudhaa-herbal-medicinal-plant.png" alt="Mint"/>
            </div>
            <h3>Mint</h3>
            <p>Widely used in food, drinks, and relieves digestion issues.</p>
          </div>

          <div className="plant-card">
            <div className="plant-img">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyCdgR73onGincTPH6UJOYyKMfv6Yj_ZqsBw&s" alt="Curry Leaves"/>
            </div>
            <h3>Curry Leaves</h3>
            <p>Essential for Indian cooking and has medicinal properties.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InfoPage;
