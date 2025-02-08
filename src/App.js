import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
import Navigation  from './Components/Navigation/Navigation';
import { Helmet } from "react-helmet"; //Import Helmet
import HeroSection from './Components/HeroSection/HeroSection';
import Testimonials from './Components/Testimonials/Testimonials';
import Team from './Components/Team/Team';
import InquiryForm from './Components/InquiryForm/InquiryForm';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';


function App() {
  return (
    <div>
      <Helmet>
        <title>Creative Digital Studio</title>
        <meta name="description" content="We craft digital experiences that inspire." />
      </Helmet>
       <Navigation/>
       <HeroSection/>
       <Testimonials/>
       <Team/>
       <InquiryForm/>
       <Services/>
       <Portfolio/>
    </div>
  )
}

export default App;
