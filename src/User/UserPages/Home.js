import React from "react";
import "./Home.css"
function Home() {
  return (
    <div className="layout-container">

      {/* ===== HERO SECTION ===== */}
      <div className="hero">
        <div className="hero-text">
          <h1>🏸 Welcome to Court Masters</h1>
          <p>
            Book courts, improve your skills, and enjoy the best badminton
            experience.
          </p>
          <a href="/courts" className="btn">Book-Now</a>
        </div>
      </div>

      {/* ===== ABOUT SECTION ===== */}
      <div className="card about-section">
        <div className="about-text">
          <h2>About Our Academy</h2>
          <p>
            Our academy provides top-quality badminton courts with professional
            lighting, flooring, and coaching. Whether you're a beginner or a pro,
            we ensure the best playing environment.
          </p>
        </div>

        <img
          src="https://i.pinimg.com/736x/f1/85/57/f18557289999fc5ddb728a86e417c392.jpg"
          alt="Badminton Court"
          className="about-img"
        />
      </div>

      {/* ===== FEATURES ===== */}
      <div className="card">
        <h2>Why Choose Us?</h2>

        <div className="features">
          <div className="feature-box">✔ Indoor Courts</div>
          <div className="feature-box">✔ Easy Booking</div>
          <div className="feature-box">✔ Affordable Price</div>
          <div className="feature-box">✔ Coaching</div>
        </div>
      </div>

     
      <div className="card">
        <h2>Our Courts</h2>

        <div className="gallery">
          <img src="https://i.pinimg.com/1200x/67/e6/6b/67e66bacc631ef68204a8e1ff57fc859.jpg" alt="court" />
          <img src="https://i.pinimg.com/1200x/f5/ab/d3/f5abd30a3a9c413900271433126b65c0.jpg" alt="court" />
          <img src="https://i.pinimg.com/1200x/74/65/6b/74656b921c9ee139a902bc855ab639ea.jpg" alt="court" />
        </div>
      </div>

      {/* ===== CTA ===== */}
      <div className="card cta">
        <h2>Start Playing Today!</h2>
        <p>Reserve your court in seconds.</p>
        <a href="/courts" className="btn">Book Court</a>
      </div>

    </div>
  );
}

export default Home;