import React from "react";

function TurnkeySolution() {
  return (
    <section className="turnkey">

      <div className="container">

        <div className="row align-items-center">

          {/* LEFT TEXT */}
          <div className="col-lg-6">

            <h2 className="turnkey-heading">TURNKEY SOLUTION</h2>

            <h3 className="turnkey-title">
              We Provide End to End Construction Service
            </h3>

            <p>
              As a leading construction company in Bangalore, we provide
              residential, commercial, and industrial construction services.
              Our fifteen-year legacy is characterized by successful project
              execution, encompassing over 3000 completed ventures.
            </p>

            <p>
              We are committed to transforming client aspirations into
              tangible, high-quality structures that meet the highest
              industry standards.
            </p>

            <div className="turnkey-stats">

              <div>
                <h4>15+</h4>
                <p>Years Experience</p>
              </div>

              <div>
                <h4>3000+</h4>
                <p>Projects Completed</p>
              </div>

              <div>
                <h4>100%</h4>
                <p>Client Satisfaction</p>
              </div>

            </div>

          </div>

          {/* RIGHT IMAGES */}
          <div className="col-lg-6">

            <div className="turnkey-gallery">

              <img src="/images/house1.jpg" alt="Construction"/>
              <img src="/images/house2.jpg" alt="Building"/>
              <img src="/images/house3.jpg" alt="Villa"/>
              <img src="/images/house4.jpg" alt="Interior"/>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default TurnkeySolution;