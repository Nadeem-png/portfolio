
// import React from "react";
// import About from "./component/About";
// import Contact from "./component/Contact";
// import Navbar from "./component/Navbar";
// import Projects from "./component/Projects";
// import Skills from "./component/Skills";
// import Testimonials from "./component/Testimonials";

// export default function App() {
//   return (
//     <main>
//       <Navbar className="mb-5"/>
//       <About className="mt-5"/>
//       <Projects/>
//       <Skills/>
//       <Testimonials/>
//       <Contact/>

//     </main>
//   );
// }
import Navbar from "./components/Navbar/Navbar";


import "./App.css";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Testimonial from "./components/Testimonials/Testimonial";

function App() {
 
  return (
    <div
     
    >
      <Navbar />
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
     
    
    </div>
  );
}

export default App;
