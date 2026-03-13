import React from "react";
import Slider from "react-slick";

function LoanAssistance() {

const settings = {
dots: false,
infinite: true,
speed: 500,
slidesToShow: 5,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 2000,
arrows: false,
responsive: [
{
breakpoint: 992,
settings: { slidesToShow: 3 }
},
{
breakpoint: 600,
settings: { slidesToShow: 2 }
}
]
};

return (

<section className="loan-section">

<div className="container">

<h2 className="section-small">LOAN ASSISTANCE</h2>

<h3 className="section-title">Our Banking Partners</h3>

<Slider {...settings}>

<div className="bank-logo">
<img src="/images/hdfc.png" alt="HDFC"/>
</div>

<div className="bank-logo">
<img src="/images/sbi.png" alt="SBI"/>
</div>

<div className="bank-logo">
<img src="/images/IDFC.png" alt="ICICI"/>
</div>

<div className="bank-logo">
<img src="/images/bajaj.png" alt="Axis"/>
</div>

<div className="bank-logo">
<img src="/images/pnb.png" alt="LIC"/>
</div>
<div className="bank-logo">
<img src="/images/hdfc.png" alt="HDFC"/>
</div>

<div className="bank-logo">
<img src="/images/sbi.png" alt="SBI"/>
</div>
</Slider>

</div>

</section>

);

}

export default LoanAssistance;