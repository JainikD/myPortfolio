import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";


function Portfolio() {


  const [activePage, setActivePage] = useState("hero");


  const pages = {
    about: <About />,
    skills: <Skills />,
    projects: <Projects />,
    experience: <Experience />,
    contact: <Contact />,
  };

// return (

//   <div className="min-h-screen bg-black text-white">

//     <Navbar setActivePage={setActivePage} />


//     <div className="pt-24 px-6 flex justify-center">


//       {
//         activePage === "hero" ? (

//           // HOME PAGE - ONLY ONE HERO CARD
//           <motion.div
//             initial={{
//               opacity:0,
//               y:40
//             }}
//             animate={{
//               opacity:1,
//               y:0
//             }}
//             transition={{
//               duration:0.5
//             }}
//             className="
//               w-[90%]
//               max-w-6xl
//               rounded-[32px]
//               bg-zinc-900
//               border
//               border-white/10
//               shadow-2xl
//               p-8
//             "
//           >

//             <Hero />

//           </motion.div>


//         ) : (


//           // OTHER PAGES - SIDEBAR + CONTENT
//           <div
//             className="
//               w-full
//               max-w-7xl
//               grid
//               md:grid-cols-[260px_1fr]
//               gap-8
//             "
//           >


//             {/* Compact Hero */}

//             <motion.div
//               layout
//               className="
//                 sticky
//                 top-24
//                 h-fit
//                 rounded-[32px]
//                 bg-zinc-900
//                 border
//                 border-white/10
//                 shadow-2xl
//                 p-5
//               "
//             >

//               <Hero compact />

//             </motion.div>



//             {/* Content */}

//             <AnimatePresence mode="wait">

//               <motion.div
//                 key={activePage}

//                 initial={{
//                   opacity:0,
//                   x:50
//                 }}

//                 animate={{
//                   opacity:1,
//                   x:0
//                 }}

//                 exit={{
//                   opacity:0,
//                   x:-50
//                 }}

//                 transition={{
//                   duration:0.5
//                 }}

//                 className="
//                   rounded-[32px]
//                   bg-zinc-900
//                   border
//                   border-white/10
//                   shadow-2xl
//                   p-8
//                 "
//               >

//                 {pages[activePage]}


//               </motion.div>


//             </AnimatePresence>



//           </div>

//         )

//       }


//     </div>


//   </div>


return(
  <div className="min-h-screen bg-black text-white">

      <Navbar 
      activePage={activePage}
      setActivePage={setActivePage} />
      <div className="pt-24 px-6 flex flex-col items-center">


  {/* Floating Profile Bar */}
  {
    activePage !== "hero" && (

      <motion.div
        layout
        transition={{
          layout: {
            duration: 0.5,
            type: "spring",
            stiffness: 120,
            damping: 20,
          },
        }}
        className="
          w-full
          max-w-6xl
          rounded-[30px]
          bg-zinc-900/80
          backdrop-blur-xl
          border
          border-white/10
          shadow-2xl
          px-6
          py-3
          mb-8
        "
      >

        <Hero compact />

      </motion.div>

    )
  }


  {/* Main Content Card */}

  <AnimatePresence mode="wait">

    <motion.div

      key={activePage}

      initial={{
        opacity:0,
        y:30
      }}

      animate={{
        opacity:1,
        y:0
      }}

      exit={{
        opacity:0,
        y:-30
      }}

      transition={{
        duration:0.5
      }}

      className="
        w-full
        max-w-6xl
        rounded-[32px]
        bg-zinc-900
        border
        border-white/10
        shadow-2xl
        p-8
      "

    >

      {
        activePage === "hero"
        ?
        <Hero />
        :
        pages[activePage]
      }


    </motion.div>


  </AnimatePresence>


</div>

      </div>
);}


export default Portfolio;