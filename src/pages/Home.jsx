import React from "react";
import AOS from "aos";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Packages from "../components/Packages";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import ConstructionFAQ from "../components/ConstructionFAQ";
import ThinkingSection from "../components/ThinkingSection";
import QualitySection from "../components/QualitySection";
import TurnkeySolution from "../components/TurnkeySolution";
import CoreServices from "../components/CoreServices";
import WhyUs from "../components/WhyUs";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import VinraAdvantage from "../components/VinraAdvantage";
import Quality from "../components/Quality";
import LoanAssistance from "../components/LoanAssistance";
import ReadyToConstruct from "../components/ReadyToConstruct";
import AboutVinra from "../components/AboutVinra";
import HeroSlider from "../components/HeroSlider";
import Footer from "../components/Footer";
import MegaFooter from "../components/MegaFooter";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../admin/Dashboard";

function Home() {
  const isAuth = localStorage.getItem("auth");

  return (
    <>
      <Navbar />
      <HeroSlider />
   
      <AboutVinra />
      <TurnkeySolution />
      <CoreServices />
      <Services />
       <Packages />
       <WhyUs />
       <Projects />
       <Testimonials />
       <VinraAdvantage />
   
      
     <ConstructionFAQ/>
     <ReadyToConstruct />
     <Quality />
     <LoanAssistance />
     <ThinkingSection />
    {/* <Footer /> */}
    <MegaFooter />
    </>
  );
}

export default Home;