// function Navbar({ setActivePage }) {
//   return (
//     <nav className="fixed w-full bg-black/70 backdrop-blur-xl border-b border-white/10 z-50">
//       <div className="max-w-6xl mx-auto flex justify-between items-center p-5">

//         <h1 className="text-xl font-medium text-white">
//           MyPortfolio
//         </h1>

//         <div className="space-x-6 text-gray-300">

//           <button 
//             onClick={() => setActivePage("hero")}
//             className="hover:text-white transition"
//           >
//             Home
//           </button>

//           <button 
//             onClick={() => setActivePage("about")}
//             className="hover:text-white transition"
//           >
//             About
//           </button>

//           <button 
//             onClick={() => setActivePage("skills")}
//             className="hover:text-white transition"
//           >
//             Skills
//           </button>

//           <button 
//             onClick={() => setActivePage("projects")}
//             className="hover:text-white transition"
//           >
//             Projects
//           </button>

//           <button 
//             onClick={() => setActivePage("experience")}
//             className="hover:text-white transition"
//           >
//             Experience
//           </button>

//           <button 
//             onClick={() => setActivePage("contact")}
//             className="hover:text-white transition"
//           >
//             Contact
//           </button>

//         </div>

//       </div>
//     </nav>


//   );
// }  
// export default Navbar;


// function Navbar({ activePage, setActivePage }) {

//   const navItems = [
//     {
//       name: "Home",
//       page: "hero",
//     },
//     {
//       name: "About",
//       page: "about",
//     },
//     {
//       name: "Skills",
//       page: "skills",
//     },
//     {
//       name: "Projects",
//       page: "projects",
//     },
//     {
//       name: "Experience",
//       page: "experience",
//     },
//     {
//       name: "Contact",
//       page: "contact",
//     },
//   ];


//   return (

//     <nav
//       className="
//         fixed
//         w-full
//         bg-black/70
//         backdrop-blur-xl
//         border-b
//         border-white/10
//         z-50
//       "
//     >

//       <div
//         className="
//           max-w-6xl
//           mx-auto
//           flex
//           justify-between
//           items-center
//           p-5
//         "
//       >


//         <h1
//           className="
//             text-xl
//             font-medium
//             text-white
//           "
//         >
//           MyPortfolio
//         </h1>




//         <div
//           className="
//             flex
//             gap-7
//             text-gray-400
//           "
//         >


//           {navItems.map((item)=>(


//             <button

//               key={item.page}

//               onClick={() => setActivePage(item.page)}

//               className="
//                 relative
//                 transition
//                 cursor-pointer
//                 hover:text-white
//                 pb-2
//               "

//             >


//               {item.name}



//               {/* Active Dot */}

//               {activePage === item.page && (

//                 <span
//                   className="
//                     absolute
//                     left-1/2
//                     -translate-x-1/2
//                     -bottom-1
//                     h-1
//                     w-1
//                     rounded-full
//                     bg-white
//                     shadow-[0_0_10px_rgba(255,255,255,0.8)]
//                   "
//                 />

//               )}



//             </button>


//           ))}


//         </div>


//       </div>


//     </nav>

//   );
// }

import { useState } from "react";

function Navbar({ activePage, setActivePage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", page: "hero" },
    { name: "About", page: "about" },
    { name: "Skills", page: "skills" },
    { name: "Projects", page: "projects" },
    { name: "Experience", page: "experience" },
    { name: "Contact", page: "contact" },
  ];

  const handleNavigation = (page) => {
    setActivePage(page);
    setMenuOpen(false);
  };

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        bg-black/70
        backdrop-blur-xl
        border-b
        border-white/10
        z-50
      "
    >
      <div
        className="
          max-w-6xl
          mx-auto
          flex
          justify-between
          items-center
          px-5
          py-4
        "
      >
        {/* Logo */}
        <h1 className="text-xl font-medium text-white">
          MyPortfolio
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-7 text-gray-400">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => handleNavigation(item.page)}
              className="
                relative
                transition
                cursor-pointer
                hover:text-white
                pb-2
              "
            >
              {item.name}

              {activePage === item.page && (
                <span
                  className="
                    absolute
                    left-1/2
                    -translate-x-1/2
                    -bottom-1
                    h-1
                    w-1
                    rounded-full
                    bg-white
                    shadow-[0_0_10px_rgba(255,255,255,0.8)]
                  "
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            md:hidden
            text-white
            text-3xl
            transition
          "
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden
          overflow-hidden
          transition-all
          duration-300
          ${
            menuOpen
              ? "max-h-96 border-t border-white/10"
              : "max-h-0"
          }
          bg-black/95
          backdrop-blur-xl
        `}
      >
        {navItems.map((item) => (
          <button
            key={item.page}
            onClick={() => handleNavigation(item.page)}
            className={`
              w-full
              text-left
              px-6
              py-4
              transition
              ${
                activePage === item.page
                  ? "text-white bg-white/10"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }
            `}
          >
            {item.name}
          </button>
        ))}
      </div>
    </nav>
  );
}

// export default Navbar;

export default Navbar;