import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function ConstructionFAQ() {

const [active, setActive] = useState(null);

const faqs = [

{
q:"What makes Vinra Group the best construction company in Bangalore?",
a:"Vinra Group provides end-to-end house construction services including planning, architecture design, material procurement, and project management with experienced engineers."
},

{
q:"Does the construction package cost include everything?",
a:"Most packages include materials, labour, supervision and project management. Some custom features may cost extra depending on design."
},

{
q:"What are the construction services Vinra group provides?",
a:"They provide house construction, villa construction, apartment construction, renovation services and turnkey construction solutions."
},

{
q:"How do I track the progress of my house construction site?",
a:"Clients receive regular construction updates, site visit opportunities and progress reports from the project team."
},

{
q:"Do Vinra Group provides warranty on home construction?",
a:"Yes, structural warranty and quality assurance are provided based on the project agreement."
},

{
q:"Will my Home be ready on time?",
a:"Professional planning and project scheduling ensure timely project delivery."
},

{
q:"How much time it will take to construct my house?",
a:"Typically construction takes 6-12 months depending on house size and design complexity."
},

{
q:"Is construction done by Vinra more expensive than local contractor?",
a:"Professional companies focus on quality, transparency and proper project management which gives better long-term value."
},

{
q:"How does Vinra Group ensure the quality of my construction project?",
a:"Quality checks, experienced engineers, approved materials and site supervision ensure construction quality."
},

{
q:"Do you use subcontractors, or do you have your own team?",
a:"Construction companies generally have in-house engineers while some specialized work may be done by trusted subcontractors."
}

];

const toggleFAQ = (index) => {
setActive(active === index ? null : index);
};

return (

<section className="faq-section">

<h2 className="faq-title">
Construction Company in Bangalore – Frequently Asked Questions
</h2>

<div className="faq-container">

{faqs.map((item,index)=>(

<div key={index} className={`faq-card ${active===index ? "active":""}`}>

<div className="faq-question" onClick={()=>toggleFAQ(index)}>

<h4>{item.q}</h4>

<span>

{active===index ? <FaChevronUp/> : <FaChevronDown/>}

</span>

</div>

{active===index && (

<div className="faq-answer">

<p>{item.a}</p>

</div>

)}

</div>

))}

</div>

</section>

)

}

export default ConstructionFAQ;