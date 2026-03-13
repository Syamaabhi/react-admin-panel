import React from "react";
import Slider from "react-slick";

function Quality() {

const settings = {
dots:false,
infinite:true,
speed:500,
slidesToShow:5,
slidesToScroll:1,
autoplay:true,
autoplaySpeed:2000,
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

<section className="quality-section">

<div className="container">

<div className="section-header">

<h2>QUALITY</h2>

<h3>Brands We Use</h3>

</div>

<Slider {...settings}>

<div className="brand-card">
<img src="/images/Kajaria.png" alt="UltraTech"/>
</div>

<div className="brand-card">
<img src="/images/Scneider.png" alt="Schneider Electric"/>
</div>

<div className="brand-card">
<img src="/images/UltraTech.png" alt="Jaquar"/>
</div>

<div className="brand-card">
<img src="/images/Dr.-FIXIT.png" alt="Dr Fixit"/>
</div>

<div className="brand-card">
<img src="/images/Scneider.png" alt="Kajaria"/>
</div>

<div className="brand-card">
<img src="/images/Dr.-FIXIT.png" alt="Legrand"/>
</div>

</Slider>

</div>

</section>

);

}

export default Quality;