import AboutSection from "./components/about/AboutSection";
import Faq from "./components/FAQ/Faq";
import Hero from "./components/Hero";
import { CustomNavbar } from "./components/navbar/Navbar";
import OfferSection from "./components/offer/OfferSection";
import Footer from "./components/footer/Footer";
import ProcessSection from "./components/process/ProcessSection";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";


function App() {
  return (
   <div>
     <CustomNavbar />
     <Hero />
     <AboutSection />
     <OfferSection />
     <ProcessSection />
     <Testimonial />

     <Faq />
     <Contact />
     <Footer />

   </div>
   
  );
}

export default App;
