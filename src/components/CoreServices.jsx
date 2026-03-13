import React from "react";

function CoreServices() {
  return (
    <section className="core-services">

      <div className="container">

        {/* SECTION TITLE */}
        <div className="section-header">

          <h2>COMPREHENSIVE SOLUTION</h2>

          <h3>Our Core Construction Services in Bangalore</h3>

          <p>
            As a distinguished provider of residential, commercial, and industrial
            construction services in Bangalore. Our fifteen-year legacy is
            characterized by successful project execution, encompassing over
            3000 completed ventures. We are committed to transforming client
            aspirations into tangible, high-quality structures that meet the
            highest industry standards.
          </p>

        </div>

        {/* SERVICES GRID */}
        <div className="services-grid">

          <div className="service-card">
            <img src="/react-admin-panel/images/residential.jpg" alt="Residential Construction"/>
            <h4>Residential Construction</h4>
            <p>
              We build independent houses, villas, duplex homes and apartments
              with modern architecture and durable materials.
            </p>
          </div>

          <div className="service-card">
            <img src="/react-admin-panel/images/commercial.jpg" alt="Commercial Construction"/>
            <h4>Commercial Construction</h4>
            <p>
              Professional office spaces, IT parks, showrooms and retail
              buildings designed for functionality and growth.
            </p>
          </div>

          <div className="service-card">
            <img src="/images/industrial.jpg" alt="Industrial Construction"/>
            <h4>Industrial Construction</h4>
            <p>
              Warehouses, factories and industrial infrastructure designed for
              safety, efficiency and long-term durability.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default CoreServices;