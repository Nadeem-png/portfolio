
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

function App() {
 
  return (
    <div
     
    >
      <Navbar />
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
     
    
    </div>
  );
}

export default App;
