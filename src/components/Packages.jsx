import React from "react";

function Packages() {
  return (
    <section className="packages-section">

      <div className="container">

        <div className="section-header">

          <h2>PACKAGES</h2>

          <h3>House Construction Packages in Bangalore</h3>

          <p>
            Explore our turnkey house construction packages in Bangalore for
            your dream home. Build premium house at affordable price with our
            complete house packages.
          </p>

        </div>

        <div className="packages-grid">

          {/* Standard Package */}
          <div className="package-card">

            <h4>Standard Package</h4>

            <h3>₹ 1,699 / sqft</h3>

            <ul>
              <li>Basic architectural design</li>
              <li>Standard quality materials</li>
              <li>Basic electrical fittings</li>
              <li>Standard tiles & flooring</li>
              <li>1 year service support</li>
            </ul>

            <button>Get Quote</button>

          </div>


          {/* Prime Package */}
          <div className="package-card highlight">

            <h4>Prime Package</h4>

            <h3>₹ 1,999 / sqft</h3>

            <ul>
              <li>Premium architectural design</li>
              <li>High quality cement & steel</li>
              <li>Premium electrical fittings</li>
              <li>Kajaria tiles flooring</li>
              <li>Modular kitchen provision</li>
            </ul>

            <button>Get Quote</button>

          </div>


          {/* Luxury Package */}
          <div className="package-card">

            <h4>Luxury Package</h4>

            <h3>₹ 2,399 / sqft</h3>

            <ul>
              <li>Luxury architectural design</li>
              <li>Branded materials</li>
              <li>Premium sanitary fittings</li>
              <li>Italian flooring</li>
              <li>False ceiling design</li>
            </ul>

            <button>Get Quote</button>

          </div>


          {/* Super Luxury */}
          <div className="package-card">

            <h4>Super Luxury Package</h4>

            <h3>₹ 2,799 / sqft</h3>

            <ul>
              <li>Custom villa design</li>
              <li>Top brand materials</li>
              <li>Smart home options</li>
              <li>Designer interiors</li>
              <li>Premium finishes</li>
            </ul>

            <button>Get Quote</button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Packages;