import React from "react";
import Slider from "react-slick";

function QualitySection() {

const settings = {
  dots:false,
  arrows:false,
  infinite:true,
  speed:3000,
  slidesToShow:6,
  slidesToScroll:1,
  autoplay:true,
  autoplaySpeed:0,
  cssEase:"linear",
  pauseOnHover:false,
  responsive:[
    {
      breakpoint:768,
      settings:{slidesToShow:3}
    },
    {
      breakpoint:480,
      settings:{slidesToShow:2}
    }
  ]
};

return (
<div className="quality-section">

<div className="container">

<h2 className="quality-title">QUALITY</h2>
<h3 className="quality-sub">Brands We Use</h3>

<Slider {...settings}>

<div><img src="/images/ultratech.png" alt="UltraTech"/></div>
<div><img src="/images/schneider.png" alt="Schneider"/></div>
<div><img src="/images/jaquar.png" alt="Jaquar"/></div>
<div><img src="/images/drfixit.png" alt="Dr Fixit"/></div>
<div><img src="/images/kajaria.png" alt="Kajaria"/></div>
<div><img src="/images/legrand.png" alt="Legrand"/></div>

</Slider>

<h2 className="loan-title">LOAN ASSISTANCE</h2>
<h3 className="quality-sub">Our Banking Partners</h3>

<Slider {...settings}>

<div><img src="/images/hdfc.png" alt="HDFC"/></div>
<div><img src="/images/sbi.png" alt="SBI"/></div>
<div><img src="/images/icici.png" alt="ICICI"/></div>
<div><img src="/images/lic.png" alt="LIC Housing"/></div>
<div><img src="/images/axis.png" alt="Axis Bank"/></div>

</Slider>

</div>

</div>
);

}

export default QualitySection;