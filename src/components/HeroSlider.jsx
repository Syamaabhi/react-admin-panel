import React from "react";
import Slider from "react-slick";

function HeroSlider() {

const settings = {
dots:true,
infinite:true,
speed:500,
slidesToShow:1,
slidesToScroll:1,
autoplay:true,
autoplaySpeed:4000,
arrows:false
};

return (

<section className="hero-section">

<Slider {...settings}>

{/* SLIDE 1 */}

<div className="hero-slide hero1">

<div className="hero-overlay">

<div className="container hero-content">

<div className="row align-items-center">

<div className="col-lg-7">

<h1>Trusted Construction Company in Bangalore</h1>

<p>
Get your dream home planned, designed, and built by the most
trusted house construction company in Bangalore.
</p>

</div>

<div className="col-lg-5">

<div className="hero-form">

<h3>Talk to Our Expert</h3>

<form>

<input type="text" placeholder="Name"/>

<input type="tel" placeholder="Contact Number"/>

<input type="email" placeholder="Email"/>

<select>
<option>Location of your plot</option>
<option>Bangalore</option>
<option>Electronic City</option>
<option>Whitefield</option>
<option>Yelahanka</option>
</select>

<button>Submit Details</button>

</form>

</div>

</div>

</div>

</div>

</div>

</div>


{/* SLIDE 2 */}

<div className="hero-slide hero2">

<div className="hero-overlay">

<div className="container hero-content">

<h1>Build Your Dream Home With Experts</h1>

<p>15+ Years Experience | 3000+ Projects | 550+ Quality Checks</p>

</div>

</div>

</div>


{/* SLIDE 3 */}

<div className="hero-slide hero3">

<div className="hero-overlay">

<div className="container hero-content">

<h1>Premium House Construction in Bangalore</h1>

<p>End-to-end turnkey construction solutions</p>

</div>

</div>

</div>

</Slider>

</section>

);

}

export default HeroSlider;