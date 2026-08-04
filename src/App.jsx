// import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from './assets/vite.svg'
// // import heroImg from './assets/hero.png'
// import './App.css'
// import Navbar from "./components/Navbar";

// import Hero from "./components/Hero";

// import About from "./components/About";

// import Skills from "./components/Skills";

// import Projects from "./components/Projects";

// import Experience from "./components/Experience";

// import Contact from "./components/Contact";

// function App() {
//   // const [count, setCount] = useState(0)

//   return (
//     <div className="bg-black text-white font-sans">

//     <Navbar />

//     <Hero />

//     <About />

//     <Skills />

//     <Projects />

//     <Experience />

//     <Contact />

//   </div>
    
//   )
// }

// export default App

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Portfolio from "./pages/Portfolio";
import CardStack from "./components/CardSection";

// function App() {
//   return (
//     <div className="bg-black text-white font-sans">
//       <Navbar />
//       <Portfolio/>
//       {/* <Hero />
//       <About />
//       <Skills />
//       <Projects />
//       <Experience />
//       <Contact /> */}
//     </div>
//   );
// }

function App() {
  return (
    // <div className="bg-black text-white">
      // {/* <Navbar/> */}

      /* <CardStack
        cards={[
          <Hero />,
          <About />,
          <Skills />,
          <Projects />,
          <Contact />
        ]}
      /> */
      <Portfolio />

    // </div>
  );
}

export default App;