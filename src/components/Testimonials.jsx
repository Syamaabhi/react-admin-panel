import React from "react";
import Slider from "react-slick";

function Testimonials() {

const settings = {
dots:true,
infinite:true,
speed:500,
slidesToShow:2,
slidesToScroll:1,
autoplay:true,
responsive:[
{
breakpoint:768,
settings:{slidesToShow:1}
}
]
};

const testimonials = [
{
name:"Ramesh Kumar",
text:"Vinra Group built our dream home exactly as promised. Their team maintained transparency and completed the project on time.",
image:"/images/client1.jpg"
},
{
name:"Priya Sharma",
text:"Excellent construction quality and professional engineers. The project tracking app helped us monitor progress easily.",
image:"/images/client2.jpg"
},
{
name:"Arjun Reddy",
text:"The best construction company in Bangalore. From design to execution everything was handled perfectly.",
image:"/images/client3.jpg"
}
];

return(

<section className="testimonial-section">

<div className="container">

<div className="section-header">

<h2>TESTIMONIALS</h2>

<h3>What Our Clients Say About Vinra Group's Construction in Bangalore</h3>

</div>

<Slider {...settings}>

{testimonials.map((item,index)=>(

<div className="testimonial-card" key={index}>

<img src={item.image} alt={item.name}/>

<p>{item.text}</p>

<h4>{item.name}</h4>

<div className="stars">
★★★★★
</div>

</div>

))}

</Slider>

</div>

</section>

)

}

export default Testimonials;