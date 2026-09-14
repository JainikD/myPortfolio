
// function Experience() {

//   const experiences = [
//     {
//       role: "Software Engineer",
//       company: "Company Name",
//       duration: "2025 - Present",
//       description:
//         "Developed scalable full-stack applications and intelligent systems. Designed reliable backend architectures, optimized performance, and built user-focused interfaces."
//     },
//     {
//       role: "AI Engineer Intern",
//       company: "Company Name",
//       duration: "2024 - 2025",
//       description:
//         "Built AI-powered solutions using machine learning and computer vision technologies. Worked on model development, data processing, and automation workflows."
//     },
//     {
//       role: "Application Developer",
//       company: "Company Name",
//       duration: "2023 - 2024",
//       description:
//         "Created responsive applications with focus on clean architecture, usability, and efficient software development practices."
//     }
//   ];


//   return (

//     <section className="max-w-5xl mx-auto px-6 py-12">


//       <h2
//         className="
//           text-5xl
//           font-semibold
//           tracking-tight
//           text-white
//           mb-16
//         "
//       >
//         Experience
//       </h2>




//       <div className="relative">


//         Timeline Line

//         <div
//           className="
//             absolute
//             left-5
//             top-0
//             bottom-0
//             w-px
//             bg-gradient-to-b
//             from-white/40
//             via-white/10
//             to-transparent
//           "
//         />




//         <div className="space-y-16">


//           {experiences.map((exp,index)=>(


//             <div
//               key={index}
//               className="
//                 relative
//                 pl-16
//               "
//             >



//               {/* Titanium Dot */}

//               <div
//                 className="
//                   absolute
//                   left-[5px]
//                   top-2
//                   h-8
//                   w-8
//                   rounded-full
//                   bg-black
//                   border
//                   border-white/20
//                   flex
//                   items-center
//                   justify-center
//                 "
//               >

//                 <div
//                   className="
//                     h-2.5
//                     w-2.5
//                     rounded-full
//                     bg-white
//                     shadow-[0_0_20px_rgba(255,255,255,0.8)]
//                   "
//                 />

//               </div>

              





//               {/* Content Only */}

//               <div>


//                 <div
//                   className="
//                     flex
//                     flex-col
//                     md:flex-row
//                     md:items-center
//                     md:justify-between
//                     gap-3
//                   "
//                 >



//                   <div>


//                     <h3
//                       className="
//                         text-3xl
//                         font-semibold
//                         text-white
//                       "
//                     >
//                       {exp.role}
//                     </h3>


//                     <p
//                       className="
//                         mt-1
//                         text-lg
//                         text-gray-400
//                       "
//                     >
//                       {exp.company}
//                     </p>


//                   </div>




//                   <span
//                     className="
//                       text-sm
//                       text-gray-500
//                     "
//                   >
//                     {exp.duration}
//                   </span>



//                 </div>




//                 <p
//                   className="
//                     mt-5
//                     max-w-3xl
//                     text-gray-400
//                     leading-8
//                     text-[17px]
//                   "
//                 >
//                   {exp.description}
//                 </p>



//               </div>




//             </div>



//           ))}



//         </div>



//       </div>



//     </section>

//   );
// }

function Experience() {

  const experiences = [
    {
      role: "Grader (TA)",
      company: "State University of New York",
      duration: "Jan 2026 - May 2026",
      description:
      " Graded quizzes, programming assignments, exam and project for undergraduate Computer Science course, ensuring accuracy and consistency. Assisted the professor in maintaining grade records and updating scores in shared systems. Provided constructive feedback to student to help and improve their understanding of course material. Collaborated with teaching staff to ensure timely evaluation and smooth course operations"

      
        // "Developed scalable full-stack applications and intelligent systems. Designed reliable backend architectures, optimized performance, and built user-focused interfaces."
    },
    {
      role: "Application Developer - Intern",
      company: "Griphhy LLP",
      duration: "Dec 2022 - June 2023",
      description:
      "Developed an e-commerce web application for a shoe store using Flutter for the frontend and Dart for the backend. Implemented a real-time database to ensure consistent synchronization of product data user authentication details, cart states and purchase records throughout the app. Integrated secure online payment functionality by integrating Razorpay payment gateway, leveraging its API for payment processing order management and transaction verification. Developed a fully functional admin dashboard for managing products listing, orders, and inventory. Contributed to creating a user-friendly platform offering a wide range of shoes at competitive prices."
        // "Built AI-powered solutions using machine learning and computer vision technologies. Worked on model development, data processing, and automation workflows."
    },
    {
      role: "Application Developer - Intern",
      company: "Toshal Infotech",
      duration: "May 2022 - Jun 2022",
      description:
        "Learned Flutter framework and Dart Language for application development. Developed various small-scale projects utilizing Flutter to enhance my command on same. Acquired proficiency in Firebase Firestore and successfully integrated it into various projects."
    }
  ];

  return (

    <section className="max-w-5xl mx-auto px-6 py-14">

      <h2
        className="
          text-5xl
          font-semibold
          tracking-tight
          text-white
          mb-20
        "
      >
        Experience
      </h2>

      <div className="relative">

        {/* Minimal Timeline */}

        <div
          className="
            absolute
            left-[7px]
            top-0
            bottom-0
            w-px
            bg-white/10
          "
        />


        <div className="space-y-20">



          {experiences.map((exp,index)=>(


            <div
              key={index}
              className="
                relative
                pl-12
                group
              "
            >

              {/* Minimal Titanium Dot */}

              <div
                className="
                  absolute
                  left-0
                  top-2
                  h-4
                  w-4
                  rounded-full
                  bg-zinc-200
                  ring-4
                  ring-black
                  transition-all
                  duration-300
                  group-hover:scale-125
                "
              />


              {/* Experience Content */}

              <div
                className="
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                "
              >



                <div
                  className="
                    flex
                    flex-col
                    md:flex-row
                    md:items-baseline
                    md:justify-between
                    gap-2
                  "
                >


                  <div>


                    <h3
                      className="
                        text-2xl
                        font-medium
                        tracking-tight
                        text-white
                      "
                    >
                      {exp.role}
                    </h3>



                    <p
                      className="
                      font-bold
                        mt-1
                        text-gray-500
                        
                      "
                    >
                      {exp.company}
                    </p>


                  </div>

                  <span
                    className="
                      text-sm
                      text-gray-600
                    "
                  >
                    {exp.duration}
                  </span>
                </div>
                <p
                  className="
                    mt-5
                    max-w-3xl
                    text-[16px]
                    leading-8
                    text-gray-400
                  "
                >
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;