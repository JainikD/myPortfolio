// const skills = [
//     "Python",
//     "Java",
//     "React",
//     "Node.js",
//     "MongoDB",
//     "TensorFlow",
//     "PyTorch",
//     "AWS"
//   ];
  
//   function Skills() {
//     return (
//       <section id="skills" className="py-20 bg-zinc-900">
//         <div className="max-w-6xl mx-auto px-5">
//           <h2 className="text-4xl font-bold text-cyan-400 mb-10">
//             Skills
//           </h2>
  
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
//             {skills.map((skill) => (
//               <div
//                 key={skill}
//                 className="bg-black p-5 rounded-xl text-center"
//               >
//                 {skill}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }
  
//   export default Skills;


function Skills() {
    const skillGroups = [
      {
        title: "Languages",
        // skills: ["Python", "JavaScript", "TypeScript", "Java", "PHP", "C#", , "Dart", "HTML5","CSS", "SQL"],
        skills:["Python",
      "JavaScript",
      "TypeScript",
      "Java",
      "PHP",
      "C#",
      "Dart",
      // "HTML5",
      // "CSS3",
      "SQL",]
      },
      {
        title: "Frontend",
        skills: ["React", "Flutter", "HTML", "CSS", "Tailwind"],
      },
      {
        title: "Backend",
        // skills: ["Node.js", "Express.js", "Firebase", "REST APIs"],
        skills: [
          ".NET",
          "REST APIs",
          "GraphQL",
          "Firebase",
          "Supabase",
          "Docker",
          "AWS",
          "Google Cloud",
          "Azure",
          "Vercel",
          "Render",
        ],
      },
      {
        title: "AI / ML",
        skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV"],
        skills: ["YOLOv5",
      "Object Detection",
      "Person Detection Pipeline",
      "Anomaly Detection",
      "LangChain",
      "OpenAI API",
      "Anthropic API",
      "Prompt Engineering",
      "RAG",
      "Scikit-learn",
      "TensorFlow",
      "NumPy",
      "Matplotlib",]
      },
      {
        title: "Databases",
        // skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase DB"],
        skills:[
          "MongoDB",
      "PostgreSQL",
      "SQL Server",
      "Firestore",
      "Realtime Database",
      "Firebase Storage",
      "Pinecone",
      "ChromaDB",
        ]
      },
      {
        title: "Tools",
        // skills: ["Git", "GitHub", "Linux", "VS Code"],
        skills:[ "Visual Studio",
          "Git",
          "GitHub",
          "GitLab",
          "GitHub Actions",
          "Linux",
          "Android",
          "IoT",
          "Selenium",
          "CI/CD",
          "Agile",
          "Scrum",
          "MVC",
          "MVVM",
          "System Design",
          "Object-Oriented Programming",
          "Data Structures",
          "API Security",
          "Database Administration",
          "QA",]
      },
    ];
  

    return (

    <section id="skills" className="max-w-6xl mx-auto px-6 py-2">

      <h2 className="text-5xl font tracking-tight text-white mb-12">
        Skills
      </h2>


      <div className="grid md:grid-cols-2 gap-8">


        {skillGroups.map((group, index) => (

          <div
            key={index}
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
              p-8
              transition-all
              duration-500
              hover:border-white/20
              hover:-translate-y-1
              hover:shadow-[0_25px_80px_rgba(0,0,0,0.45)]
            "
          >

            {/* Glass Hover Effect */}
            <div
              className="
                absolute
                inset-0
                rounded-[32px]
                opacity-0
                transition-opacity
                duration-500
                bg-gradient-to-br
                from-[#B8B5AE]/55
                via-transparent
                to-transparent
                group-hover:opacity-100
              "
            />


            <div className="relative z-10">


              {/* Title */}
              <div className="flex justify-between items-center mb-7">

                <h3 className="
                  text-2xl
                  font-semibold
                  text-white
                  tracking-tight
                ">
                  {group.title}
                </h3>


                {/* <span className="text-sm text-gray-600">
                  0{index + 1}
                </span> */}

              </div>



              {/* Skills */}
              <div className="flex flex-wrap gap-3">

                {group.skills.map((skill) => (

                  <span
                    key={skill}
                    className="
                      rounded-full
                      border border-white/10
                      bg-white/[0.04]
                      px-4
                      py-2
                      text-sm
                      text-gray-300
                      transition-all
                      duration-300
                      hover:bg-white
                      hover:text-black
                      hover:border-white
                      cursor-default
                    "
                  >
                    {skill}
                  </span>

                ))}

              </div>


            </div>


          </div>

        ))}


      </div>


    </section>

   )
  
  }
  
  export default Skills;