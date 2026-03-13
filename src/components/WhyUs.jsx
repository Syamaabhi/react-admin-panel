import React from "react";
import { FaUsers, FaCheckCircle, FaClock, FaMobileAlt, FaShieldAlt, FaTools } from "react-icons/fa";

function WhyUs() {
  return (
    <section className="whyus-section">

      <div className="container">

        <div className="section-header">

          <h2>WHY US</h2>

          <h3>Why Choose Vinra Group for Your Construction Project in Bangalore?</h3>

          <p>
            At Vinra, we combine 15 years of construction expertise with
            cutting-edge technology, delivering flawless results through
            in-house teams, rigorous quality checks, and complete project
            transparency.
          </p>

        </div>

        <div className="whyus-grid">

          <div className="why-card">
            <FaUsers className="icon"/>
            <h4>In-House Team</h4>
            <p>Dedicated engineers, designers, and project managers working together.</p>
          </div>

          <div className="why-card">
            <FaCheckCircle className="icon"/>
            <h4>550+ Quality Checks</h4>
            <p>Strict inspection system ensuring the highest construction quality.</p>
          </div>

          <div className="why-card">
            <FaClock className="icon"/>
            <h4>On-Time Delivery</h4>
            <p>Efficient project management to ensure timely completion.</p>
          </div>

          <div className="why-card">
            <FaMobileAlt className="icon"/>
            <h4>Project Tracking App</h4>
            <p>Track your project progress in real-time with our mobile app.</p>
          </div>

          <div className="why-card">
            <FaShieldAlt className="icon"/>
            <h4>10 Year Warranty</h4>
            <p>We stand by our construction quality with structural warranty.</p>
          </div>

          <div className="why-card">
            <FaTools className="icon"/>
            <h4>Premium Materials</h4>
            <p>We use trusted construction brands and high-grade materials.</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyUs;