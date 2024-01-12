import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
// import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Marquee from "./Components/Marquee"; 
import Schedule from "./Components/Schedule";
// import ImageSlider from "./Components/ImmageSlider";
// import Features from "./Components/Features";
import General from "./Components/General";

function App() {
  return (
    <div className="App">
      <Home />
      <Work />
      <Schedule />
      <Marquee />
      <About />
      <General />
      {/* <Features />
      <ImageSlider /> */}
      {/* <Testimonial /> */}
      <Contact />
      <Footer />  
    </div>
  );
}

export default App;
