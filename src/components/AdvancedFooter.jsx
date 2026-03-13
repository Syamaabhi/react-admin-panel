import React from "react";

function AdvancedFooter() {
  return (
    <section className="advanced-footer">

      <div className="footer-overlay">

        <div className="container">

          {/* Row 1 */}
          <div className="footer-about">

            <h2>Vinra Group</h2>

            <p>
              Trusted Construction Company in Bangalore delivering
              complete turnkey house construction solutions from
              planning, design and construction to final handover.
            </p>

          </div>


          {/* Row 2 */}
          <div className="footer-grid">

            <div>
              <h4>Quick Links</h4>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Projects</li>
                <li>Packages</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h4>Construction Services</h4>
              <ul>
                <li>House Construction</li>
                <li>Villa Construction</li>
                <li>Commercial Buildings</li>
                <li>Industrial Construction</li>
                <li>Home Renovation</li>
              </ul>
            </div>

            <div>
              <h4>Contact</h4>
              <p>Bangalore, Karnataka</p>
              <p>+91 9876543210</p>
              <p>info@vinragroup.com</p>
            </div>

            <div>
              <h4>Follow Us</h4>
              <p>Facebook</p>
              <p>Instagram</p>
              <p>LinkedIn</p>
            </div>

          </div>


          {/* Row 3 – Bangalore Locations */}

          <div className="location-row">

            <h4>House Construction in Bangalore Areas</h4>

            <div className="location-grid">

              <span>Whitefield</span>
              <span>Electronic City</span>
              <span>Yelahanka</span>
              <span>BTM Layout</span>
              <span>Indiranagar</span>
              <span>Jayanagar</span>
              <span>Hebbal</span>
              <span>Marathahalli</span>
              <span>Bannerghatta</span>
              <span>Sarjapur</span>
              <span>HSR Layout</span>
              <span>KR Puram</span>

            </div>

          </div>


          {/* Row 4 – Google Map */}

          <div className="map-row">

            <h4>Our Location</h4>

            <iframe
              title="map"
              src="https://www.google.com/maps?q=bangalore&output=embed"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>

          </div>


          {/* Row 5 */}

          <div className="footer-bottom">

            © 2026 Vinra Group. All Rights Reserved.

          </div>

        </div>

      </div>

    </section>
  );
}

export default AdvancedFooter;