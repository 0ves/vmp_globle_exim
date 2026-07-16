import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'  
import { Routes, Route } from "react-router-dom";
import AboutSection from './components/AboutSection'
import Products from './components/Products'
import Contact from './components/Contact'
import Services from './components/Services'
import NotFound from './components/NotFound'
import WhyChooseUs from './components/WhyChooseUs'
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import ThankYou from "./components/ThankYou";
import ScrollToHash from "./components/ScrollToHash";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
function App() {
 

  return (
   <>
    <ScrollToHash />
   <Navbar/>
   
    <Routes>
        <Route path="/" element={<HeroSection/>} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/WhyChooseUs" element={<WhyChooseUs/>} />
        <Route path="/services" element={<Services/>} /> 
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CTASection/>
      <Footer/>
      <FloatingWhatsApp />
   </>
  
  )
}

export default App
