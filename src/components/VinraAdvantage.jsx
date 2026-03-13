import React from "react";
import { FaHardHat, FaClock, FaMoneyBillWave, FaCheckCircle } from "react-icons/fa";

function VinraAdvantage() {
  return (
    <section className="advantage-section">

      <div className="container">

        <div className="row align-items-center">

          {/* LEFT IMAGE */}
          <div className="col-lg-6">

            <img
              src="/react-admin-panel/images/construction-team.jpg"
              alt="House Construction"
              className="advantage-img"
            />

          </div>


          {/* RIGHT CONTENT */}
          <div className="col-lg-6">

            <h2 className="section-title">HOUSE CONSTRUCTION</h2>

            <h3 className="section-subtitle">The Vinra Advantage</h3>

            <p>
              Forget the hassle of managing multiple contractors and juggling
              schedules. With our turnkey construction service, you have one
              point of contact for the entire process. Save time and money,
              and achieve a cohesive, high-quality result.
            </p>

            <div className="advantage-list">

              <div className="adv-item">
                <FaHardHat className="icon"/>
                <div>
                  <h4>Single Point of Contact</h4>
                  <p>One dedicated team manages the entire construction process.</p>
                </div>
              </div>

              <div className="adv-item">
                <FaClock className="icon"/>
                <div>
                  <h4>Save Time</h4>
                  <p>Efficient planning ensures your home is completed on schedule.</p>
                </div>
              </div>

              <div className="adv-item">
                <FaMoneyBillWave className="icon"/>
                <div>
                  <h4>Save Money</h4>
                  <p>Transparent pricing and optimized resource management.</p>
                </div>
              </div>

              <div className="adv-item">
                <FaCheckCircle className="icon"/>
                <div>
                  <h4>High Quality Result</h4>
                  <p>Strict quality checks ensure durable and premium construction.</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default VinraAdvantage;