import React from "react";

function MegaFooter() {
  return (
    <section className="mega-footer">

      <div className="footer-overlay">

        <div className="container">

          {/* Row 1 */}
          <div className="footer-row">
            <h2>Vinra Group</h2>
            <p>
              Trusted Construction Company in Bangalore delivering complete
              turnkey house construction services from planning to handover.
            </p>
          </div>

          {/* Row 2 */}
          <div className="footer-row grid-4">
            <div>
              <h4>Quick Links</h4>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Packages</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h4>Our Services</h4>
              <ul>
                <li>House Construction</li>
                <li>Villa Construction</li>
                <li>Commercial Construction</li>
                <li>Interior Design</li>
                <li>Renovation</li>
              </ul>
            </div>

            <div>
              <h4>Cities We Serve</h4>
              <ul>
                <li>Bangalore</li>
                <li>Mysore</li>
                <li>Chennai</li>
                <li>Hyderabad</li>
                <li>Pune</li>
              </ul>
            </div>

            <div>
              <h4>Contact</h4>
              <p>Bangalore, Karnataka</p>
              <p>+91 98765 43210</p>
              <p>info@vinragroup.com</p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="footer-row">
            <h4>House Construction in Bangalore Areas</h4>

            <div className="city-grid">
              <span>Whitefield</span>
              <span>Electronic City</span>
              <span>Yelahanka</span>
              <span>BTM Layout</span>
              <span>Indiranagar</span>
              <span>Jayanagar</span>
              <span>Hebbal</span>
              <span>Marathahalli</span>
            </div>
          </div>

          {/* Row 4 */}
          <div className="footer-row social-row">
            <span>Facebook</span>
            <span>Instagram</span>
            <span>LinkedIn</span>
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

export default MegaFooter;