import React from "react";
import { FaCheckCircle } from "react-icons/fa";

function AboutVinra() {
  return (
    <section className="about-vinra">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT IMAGE */}
          <div className="col-lg-6">
            <img
              src="/images/about-vinra.jpg"
              alt="Vinra Construction"
              className="about-img"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6">

            <h5 className="section-small">ABOUT VINRA GROUP</h5>

            <h2 className="section-title">
              Trusted Construction Company in Bangalore
            </h2>

            <p>
              Get your dream home planned, designed, and built by the most
              trusted House Construction Company in Bangalore. Unfold your
              sweetest dream into reality with our in-hand construction experts.
              At Vinra Group, we combine experience, technology, and skilled
              professionals to deliver quality homes and commercial structures.
            </p>

            <p>
              With over 15 years of experience and thousands of successful
              projects, we specialize in residential, commercial, and industrial
              construction. Our expert team ensures every project meets the
              highest standards of quality, safety, and timely delivery.
            </p>

            {/* FEATURES */}

            <div className="about-features">

              <div className="feature">
                <FaCheckCircle className="icon"/>
                <span>15+ Years of Construction Experience</span>
              </div>

              <div className="feature">
                <FaCheckCircle className="icon"/>
                <span>3000+ Successful Projects</span>
              </div>

              <div className="feature">
                <FaCheckCircle className="icon"/>
                <span>In-house Engineers & Designers</span>
              </div>

              <div className="feature">
                <FaCheckCircle className="icon"/>
                <span>Quality Materials & Modern Technology</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutVinra;