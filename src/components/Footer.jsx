import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {

return (

<footer className="footer">

<div className="container">

<div className="row footer-top">

{/* COMPANY INFO */}

<div className="col-lg-3 col-md-6 footer-col">

<h3 className="footer-logo">Vinra Group</h3>

<p>
Vinra Group is a trusted construction company in Bangalore
providing end-to-end turnkey house construction services
from planning and design to construction and handover.
</p>

<div className="social-icons">

<a href="#"><FaFacebookF/></a>
<a href="#"><FaInstagram/></a>
<a href="#"><FaLinkedin/></a>

</div>

</div>


{/* QUICK LINKS */}

<div className="col-lg-2 col-md-6 footer-col">

<h4>Quick Links</h4>

<ul>

<li><a href="#">Home</a></li>
<li><a href="#">About</a></li>
<li><a href="#">Projects</a></li>
<li><a href="#">Packages</a></li>
<li><a href="#">Testimonials</a></li>
<li><a href="#">Contact</a></li>

</ul>

</div>


{/* SERVICES */}

<div className="col-lg-2 col-md-6 footer-col">

<h4>Our Services</h4>

<ul>

<li>House Construction</li>
<li>Villa Construction</li>
<li>Commercial Construction</li>
<li>Industrial Construction</li>
<li>Home Renovation</li>
<li>Interior Design</li>

</ul>

</div>


{/* CITIES */}

<div className="col-lg-2 col-md-6 footer-col">

<h4>Cities We Serve</h4>

<ul>

<li>Bangalore</li>
<li>Mysore</li>
<li>Chennai</li>
<li>Hyderabad</li>
<li>Coimbatore</li>
<li>Pune</li>

</ul>

</div>


{/* CONTACT */}

<div className="col-lg-3 col-md-6 footer-col">

<h4>Contact Us</h4>

<p><FaMapMarkerAlt/> Bangalore, Karnataka</p>

<p><FaPhone/> +91 98765 43210</p>

<p><FaEnvelope/> info@vinragroup.com</p>

</div>

</div>


{/* FOOTER BOTTOM */}

<div className="footer-bottom">

<p>© 2026 Vinra Group. All Rights Reserved.</p>

</div>

</div>

</footer>

);

}

export default Footer;