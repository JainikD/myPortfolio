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


function Navbar({ activePage, setActivePage }) {

  const navItems = [
    {
      name: "Home",
      page: "hero",
    },
    {
      name: "About",
      page: "about",
    },
    {
      name: "Skills",
      page: "skills",
    },
    {
      name: "Projects",
      page: "projects",
    },
    {
      name: "Experience",
      page: "experience",
    },
    {
      name: "Contact",
      page: "contact",
    },
  ];


  return (

    <nav
      className="
        fixed
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
          p-5
        "
      >


        <h1
          className="
            text-xl
            font-medium
            text-white
          "
        >
          MyPortfolio
        </h1>




        <div
          className="
            flex
            gap-7
            text-gray-400
          "
        >


          {navItems.map((item)=>(


            <button

              key={item.page}

              onClick={() => setActivePage(item.page)}

              className="
                relative
                transition
                cursor-pointer
                hover:text-white
                pb-2
              "

            >


              {item.name}



              {/* Active Dot */}

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


      </div>


    </nav>

  );
}


export default Navbar;