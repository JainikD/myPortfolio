const projects = [
    {
      title: "CoderV",
      desc: "Developed a full-stack MERN application that enables visual learning of programming concepts through an interactive node-based interface for understanding code execution flow. Built personalized dashboards to track learning progress, quiz performance, solved problems, and activity streaks. Designed a responsive UI with modular learning sections, persistent navigation, and dark/light mode support. Implemented secure RESTful APIs using Node.js, Express.js, MongoDB, and JWT authentication with protected routes."
    },
    {
      title: "Online Exam Monitoring System",
      desc: "Developed an AI-powered online examination proctoring system using the MERN stack and YOLOv5 to monitor exams in real time. Implemented person, device, and anomaly detection to identify potential cheating activities, ensuring a secure and fair examination environment. Built a centralized platform for automated exam scheduling, candidate management, performance tracking, and detailed reporting. Designed a responsive user interface and integrated secure authentication for seamless access by both students and educators."
    },
    {
      title: "Kids Learning App",
      desc: "Developed an interactive e-learning application for children that promotes self-directed learning through engaging educational content and activities. Built the application using HTML, CSS, PHP, and SQL, creating a responsive and intuitive interface for seamless navigation. Integrated text-to-speech functionality with interactive animations to enhance accessibility and improve the learning experience through audio-visual engagement. Designed the platform to support independent learning, helping children grasp concepts without requiring constant guidance from a tutor."
    },
    {
      title: "E-com ",
      desc: "Developed a full-stack e-commerce application for a shoe store using Flutter, Dart, Firebase, and SQL, delivering a seamless shopping experience across the platform. Designed and implemented database structures with real-time synchronization for product catalogs, user authentication, shopping carts, and order records. Integrated the Razorpay payment gateway to enable secure online payments, transaction verification, and efficient order processing. Built a comprehensive admin dashboard for managing products, inventory, and customer orders, while following software engineering best practices to ensure scalability, performance, and maintainability.",
     },
    //   {
    //   title: "Online Exam Monitoring Syste",
    //   desc: "Developed an AI-powered online examination proctoring system using the MERN stack and YOLOv5 to monitor exams in real time. Implemented person, device, and anomaly detection to identify potential cheating activities, ensuring a secure and fair examination environment. Built a centralized platform for automated exam scheduling, candidate management, performance tracking, and detailed reporting. Designed a responsive user interface and integrated secure authentication for seamless access by both students and educators."
    // },
    // {
    //   title: "Kids Learning App",
    //   desc: "Developed an interactive e-learning application for children that promotes self-directed learning through engaging educational content and activities. Built the application using HTML, CSS, PHP, and SQL, creating a responsive and intuitive interface for seamless navigation. Integrated text-to-speech functionality with interactive animations to enhance accessibility and improve the learning experience through audio-visual engagement. Designed the platform to support independent learning, helping children grasp concepts without requiring constant guidance from a tutor."
    // }
  ];
  
  function Projects() {
    return (
      <section id="projects" className="max-w-6xl mx-auto px-6 py-2">
  
        <h2 className="text-5xl font tracking-tight text-white mb-12">
          Projects
        </h2>
  
        <div className="space-y-10">
  
          {projects.map((project) => (
            <div
              key={project.title}
              className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border border-white/10
                bg-gradient-to-br
                from-zinc-900
                via-zinc-900
                to-black
                p-10
                transition-all
                duration-500
                hover:border-white/20
                hover:-translate-y-1
                hover:shadow-[0_25px_80px_rgba(0,0,0,0.45)]
              "
            >
  
              {/* Background Glow */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-[32px]
                  opacity-0
                  transition-opacity
                  duration-500
                  bg-gradient-to-br
                  from-purple-500/10
                  via-transparent
                  to-transparent
                  group-hover:opacity-100
                "
              />
  
              {/* Content */}
              <div className="relative z-10">
  
                <h3 className="text-3xl font-semibold text-white">
                  {project.title}
                </h3>
  
                <p className="mt-6 text-gray-400 leading-8 text-[17px]">
                  {project.desc}
                </p>
  
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mt-8">
  
                  {project.tech?.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-white/5
                        px-4
                        py-2
                        text-sm
                        text-gray-300
                      "
                    >
                      {tech}
                    </span>
                  ))}
  
                </div>
  
                {/* Bottom */}
                {/* <div className="flex items-center justify-between mt-10">
  
                  <div className="flex gap-4">
  
                    <button
                      className="
                        rounded-full
                        bg-white
                        text-black
                        px-5
                        py-2
                        font-medium
                        transition
                        hover:scale-105
                      "
                    >
                      Live Demo
                    </button>
  
                    <button
                      className="
                        rounded-full
                        border
                        border-white/10
                        px-5
                        py-2
                        text-white
                        transition
                        hover:bg-white
                        hover:text-black
                      "
                    >
                      GitHub
                    </button>
  
                  </div>
  
                  <span
                    className="
                      text-4xl
                      text-gray-500
                      transition
                      duration-300
                      group-hover:translate-x-2
                      group-hover:text-white
                    "
                  >
                    →
                  </span>
  
                </div> */}
  
              </div>
  
            </div>
          ))}
  
        </div>
  
      </section>
    );
  }
  
  export default Projects;