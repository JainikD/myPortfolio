import { FaGithub, FaLinkedin } from "react-icons/fa";
// import emailjs from "@emailjs/browser";

// function Contact() {
//   return (
//     <section id="contact" className="py-20 text-center">
//       <h3 className="text-4xl font-bold mb-10 text-white-400">
//         Contact
//       </h3>
//       <p>jainikdesai@outlook.com</p>

//       <div className="flex justify-center gap-8 mt-5 text-3xl">
//         <FaGithub />
//         <FaLinkedin />
//       </div>
//     </section>
//   );
// }

// export default Contact;

// function Contact() {

//   const contacts = [
//     {
//       name: "Email",
//       value: "your.email@example.com",
//       link: "mailto:your.email@example.com",
//     },
//     {
//       name: "LinkedIn",
//       value: "linkedin.com/in/yourprofile",
//       link: "https://linkedin.com",
//     },
//     {
//       name: "GitHub",
//       value: "github.com/yourusername",
//       link: "https://github.com",
//     },
//   ];


//   return (

//     <section className="max-w-5xl mx-auto px-6 py-16">


//       {/* Heading */}

//       <div className="text-center">


//         <h2
//           className="
//             text-6xl
//             md:text-7xl
//             font-semibold
//             tracking-tight
//             text-white
//           "
//         >
//           Let's Connect
//         </h2>



//         <p
//           className="
//             mt-6
//             text-xl
//             text-gray-400
//             max-w-2xl
//             mx-auto
//             leading-relaxed
//           "
//         >
//           Have a project idea, collaboration opportunity,
//           or just want to say hello?
//           I would love to hear from you.
//         </p>


//       </div>





//       {/* Contact Links */}

//       <div
//         className="
//           mt-16
//           space-y-5
//           max-w-3xl
//           mx-auto
//         "
//       >


//         {contacts.map((contact)=>(


//           <a
//             key={contact.name}
//             href={contact.link}
//             target="_blank"
//             className="
//               group
//               flex
//               items-center
//               justify-between
//               py-6
//               border-b
//               border-white/10
//               transition-all
//               duration-300
//               hover:px-4
//             "
//           >


//             <div>


//               <h3
//                 className="
//                   text-xl
//                   text-white
//                   font-medium
//                 "
//               >
//                 {contact.name}
//               </h3>



//               <p
//                 className="
//                   mt-1
//                   text-gray-500
//                 "
//               >
//                 {contact.value}
//               </p>


//             </div>




//             <span
//               className="
//                 text-2xl
//                 text-gray-500
//                 transition-all
//                 duration-300
//                 group-hover:text-white
//                 group-hover:translate-x-2
//               "
//             >
//               →
//             </span>



//           </a>


//         ))}



//       </div>





//       {/* Resume Button */}

//       <div
//         className="
//           mt-16
//           flex
//           justify-center
//         "
//       >

//         <button
//           onClick={() =>
//             window.open("src/assets/pdfs/Resume.pdf")
//           }
//           className="
//             rounded-full
//             bg-white
//             text-black
//             px-8
//             py-3.5
//             font-medium
//             transition-all
//             duration-300
//             hover:bg-gray-200
//             hover:scale-105
//           "
//         >
//           View Resume
//         </button>


//       </div>



//     </section>

//   );
// }

// function Contact() {

//   const contacts = [
//     {
//       name: "Email",
//       value: "your.email@example.com",
//       link: "mailto:your.email@example.com",
//     },
//     {
//       name: "LinkedIn",
//       value: "linkedin.com/in/yourprofile",
//       link: "https://linkedin.com",
//     },
//     {
//       name: "GitHub",
//       value: "github.com/yourusername",
//       link: "https://github.com",
//     },
//   ];


//   return (

//     <section className="max-w-5xl mx-auto px-6 py-16">


//       {/* Heading */}

//       <div className="text-center">


//         <h2
//           className="
//             text-6xl
//             md:text-7xl
//             font-semibold
//             tracking-tight
//             text-white
//           "
//         >
//           Let's Connect
//         </h2>



//         <p
//           className="
//             mt-6
//             text-xl
//             text-gray-400
//             max-w-2xl
//             mx-auto
//             leading-relaxed
//           "
//         >
//           Have a project idea, collaboration opportunity,
//           or just want to say hello?
//           I would love to hear from you.
//         </p>


//       </div>





//       {/* Contact Links */}

//       <div
//         className="
//           mt-16
//           space-y-5
//           max-w-3xl
//           mx-auto
//         "
//       >


//         {contacts.map((contact)=>(


//           <a
//             key={contact.name}
//             href={contact.link}
//             target="_blank"
//             className="
//               group
//               flex
//               items-center
//               justify-between
//               py-6
//               border-b
//               border-white/10
//               transition-all
//               duration-300
//               hover:px-4
//             "
//           >


//             <div>


//               <h3
//                 className="
//                   text-xl
//                   text-white
//                   font-medium
//                 "
//               >
//                 {contact.name}
//               </h3>



//               <p
//                 className="
//                   mt-1
//                   text-gray-500
//                 "
//               >
//                 {contact.value}
//               </p>


//             </div>




//             <span
//               className="
//                 text-2xl
//                 text-gray-500
//                 transition-all
//                 duration-300
//                 group-hover:text-white
//                 group-hover:translate-x-2
//               "
//             >
//               →
//             </span>



//           </a>


//         ))}



//       </div>





//       {/* Resume Button */}

//       <div
//         className="
//           mt-16
//           flex
//           justify-center
//         "
//       >

//         <button
//           onClick={() =>
//             window.open("src/assets/pdfs/Resume.pdf")
//           }
//           className="
//             rounded-full
//             bg-white
//             text-black
//             px-8
//             py-3.5
//             font-medium
//             transition-all
//             duration-300
//             hover:bg-gray-200
//             hover:scale-105
//           "
//         >
//           View Resume
//         </button>


//       </div>



//     </section>

//   );
// }




// Running Code
// function Contact() {

//   return (

//     <section className="max-w-3xl mx-auto px-6 py-16 text-center">


//       {/* Heading */}

//       <h2
//         className="
//           text-5xl
//           md:text-6xl
//           font-semibold
//           tracking-tight
//           text-white
//         "
//       >
//         Let's Connect
//       </h2>


//       <p
//         className="
//           mt-5
//           text-lg
//           text-gray-400
//           leading-8
//         "
//       >
//         Have a project idea or want to collaborate?
//         Send me a message and I'll get back to you.
//       </p>


//       {/* Form */}

//       <div
//         className="
//           mt-12
//           space-y-6
//           text-left
//         "
//       >


//         {/* Full Name */}

//         <input
//           type="text"
//           placeholder="Full Name"
//           className="
//             w-full
//             rounded-2xl
//             border
//             border-white/10
//             bg-white/[0.03]
//             backdrop-blur-xl
//             px-6
//             py-4
//             text-white
//             placeholder:text-gray-500
//             outline-none
//             transition-all
//             duration-300
//             focus:border-white/40
//             focus:bg-white/[0.05]
//           "
//         />


//         {/* Email */}

//         <input
//           type="email"
//           placeholder="Email Address"
//           className="
//             w-full
//             rounded-2xl
//             border
//             border-white/10
//             bg-white/[0.03]
//             backdrop-blur-xl
//             px-6
//             py-4
//             text-white
//             placeholder:text-gray-500
//             outline-none
//             transition-all
//             duration-300
//             focus:border-white/40
//             focus:bg-white/[0.05]
//           "
//         />


//         {/* Message */}

//         <textarea
//           rows="6"
//           placeholder="Your Message"
//           className="
//             w-full
//             rounded-2xl
//             border
//             border-white/10
//             bg-white/[0.03]
//             backdrop-blur-xl
//             px-6
//             py-4
//             text-white
//             placeholder:text-gray-500
//             outline-none
//             resize-none
//             transition-all
//             duration-300
//             focus:border-white/40
//             focus:bg-white/[0.05]
//           "
//         />

//         {/* Button */}

//         <button
//           className="
//             w-full
//             rounded-full
//             bg-white
//             py-4
//             text-black
//             font-medium
//             transition-all
//             duration-300
//             hover:bg-gray-200
//             hover:scale-[1.02]
//           "
//         >
//           Send Message
//         </button>

//       </div>

//     </section>

//   );

// }

// const [form, setForm] = useState({
//   name: "",
//   email: "",
//   message: "",
// });

// const handleChange = (e) => {
//   setForm({
//     ...form,
//     [e.target.name]: e.target.value,
//   });
// };

// const sendEmail = async (e) => {
//   e.preventDefault();

//   try {
//     await emailjs.send(
//       "service_n6zdk7l",
//       "template_i3wo153",
//       {
//         from_name: form.name,
//         from_email: form.email,
//         message: form.message,
//       },
//       "UmJJjtLIzOoSOFIUE"
//     );

//     alert("Message sent successfully!");

//     setForm({
//       name: "",
//       email: "",
//       message: "",
//     });
//   } catch (error) {
//     console.error(error);
//     alert("Failed to send message.");
//   }
// };


// // export default Contact;

// // export default Contact;

// export default Contact;

import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="max-w-3xl mx-auto px-6 py-20 text-center"
    >
      {/* Heading */}

      <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-white">
        Let's Connect
      </h2>

      <p className="mt-5 text-lg text-gray-400 leading-8">
        Have a project idea or want to collaborate?
        <br />
        Send me a message and I'll get back to you.
      </p>

      {/* Contact Form */}

      <form
        onSubmit={sendEmail}
        className="mt-12 space-y-6 text-left"
      >
        {/* Name */}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="
            w-full
            rounded-2xl
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            px-6
            py-4
            text-white
            placeholder:text-gray-500
            outline-none
            transition-all
            duration-300
            focus:border-white/40
            focus:bg-white/[0.05]
          "
        />

        {/* Email */}

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
          className="
            w-full
            rounded-2xl
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            px-6
            py-4
            text-white
            placeholder:text-gray-500
            outline-none
            transition-all
            duration-300
            focus:border-white/40
            focus:bg-white/[0.05]
          "
        />

        {/* Message */}

        <textarea
          rows={6}
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          className="
            w-full
            rounded-2xl
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            px-6
            py-4
            text-white
            placeholder:text-gray-500
            outline-none
            resize-none
            transition-all
            duration-300
            focus:border-white/40
            focus:bg-white/[0.05]
          "
        />

        {/* Submit Button */}

        <button
          type="submit"
          disabled={loading}
          className="
            w-full
            rounded-full
            bg-white
            py-4
            text-black
            font-medium
            transition-all
            duration-300
            hover:bg-gray-200
            hover:scale-[1.02]
            disabled:opacity-60
            disabled:cursor-not-allowed
            disabled:hover:scale-100
          "
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}

export default Contact;