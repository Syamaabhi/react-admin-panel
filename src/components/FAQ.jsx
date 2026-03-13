import React,{useState} from "react";

function FAQ(){

const [open,setOpen]=useState(null)

const faq=[

{
q:"How much does house construction cost?",
a:"Construction starts from ₹1700 per sq ft"
},
{
q:"How long does construction take?",
a:"Usually 6 to 10 months"
}

]

return(

<section className="container mt-5">

<h2 className="text-center">FAQ</h2>

{faq.map((item,i)=>(

<div key={i} className="border p-3 mt-3">

<h5 onClick={()=>setOpen(i)}>
{item.q}
</h5>

{open===i && <p>{item.a}</p>}

</div>

))}

</section>

)

}

export default FAQ