import { motion } from "framer-motion";

function Hero({ compact = false }) {

  return (

    <motion.section
      layout
      transition={{
        layout: {
          duration: 0.6,
          type: "spring",
          stiffness: 120,
          damping: 20,
        },
      }}
      className={
        compact
          // ? "flex items-center gap-4"
          ? "flex items-center justify-between w-full"
          : "relative pt-18 pb-10 flex items-center justify-center text-center overflow-hidden"
      }
    >

<motion.div
  layout
  className={
    compact
      ? "flex items-center justify-between w-full"
      : "relative z-10"
  }
>


  {/* LEFT SIDE - IMAGE + NAME */}

  <motion.div
    layout
    className={
      compact
        ? "flex items-center gap-4"
        : ""
    }
  >


    {/* Profile Image */}

    <motion.img
      layout
      src="src/assets/profile.png"
      alt="Jainik Desai"
      className={`
        rounded-full
        object-cover
        border
        border-white/20
        shadow-[0_20px_60px_rgba(255,255,255,0.15)]

        ${
          compact
            ? "w-12 h-12"
            : "w-44 h-44 mx-auto"
        }
      `}
    />



    <motion.div
      layout
      className={
        compact
          ? ""
          : "text-center"
      }
    >


      {/* Name */}

      <motion.h1
        layout
        className={`
          font-semibold
          tracking-tight
          text-white

          ${
            compact
              ? "text-lg"
              : "mt-8 text-6xl md:text-7xl"
          }
        `}
      >
        Jainik Desai
      </motion.h1>



      {/* Compact subtitle */}

      {compact && (

        <p className="text-sm text-gray-400">
          Software Engineer
        </p>

      )}



      {/* Normal subtitle */}

      {!compact && (

        <motion.p
          layout
          className="
            mt-5
            text-xl
            md:text-2xl
            text-gray-400
            max-w-2xl
            mx-auto
            leading-relaxed
          "
        >
          Software Engineer building intelligent,
          scalable and user-focused applications.
        </motion.p>

      )}

      {/* Roles - only home */}

      {!compact && (

        <motion.div
          layout
          className="
            flex
            gap-3
            justify-center
            mt-8
            flex-wrap
          "
        >

          {[
            "Software Engineer",
            "AI Engineer",
            "Full Stack Developer",
            "Application Developer",
          ].map((role)=>(

            <span
              key={role}
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-xl
                px-5
                py-2.5
                text-sm
                text-gray-300
                transition
                duration-300
                hover:bg-white
                hover:text-black
                hover:scale-105
              "
            >
              {role}
            </span>

          ))}

        </motion.div>

      )}


    </motion.div>


  </motion.div>





  {/* RIGHT SIDE - RESUME BUTTON */}

  <motion.button
    layout
    onClick={() =>
      window.open("src/assets/pdfs/Resume.pdf")
    }
    className={`
      rounded-full
      bg-white
      text-black
      font-medium
      transition-all
      duration-300
      hover:bg-gray-200
      hover:scale-105

      ${
        compact
          ? "px-5 py-2 text-sm"
          : "px-8 py-3.5 mt-10"
      }
    `}
  >
    View Resume
  </motion.button>


</motion.div>


     

    </motion.section>

  );
}


export default Hero;
