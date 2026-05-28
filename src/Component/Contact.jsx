import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contactImage from "../assets/images/avertercontact.png";

const Contact = ({ darkMode }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_icpkk47",
        "template_97t7udu",
        form.current,
        "2169565a5eczIgA8s",
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        () => {
          toast.error("Failed to send message. Please try again.");
        },
      );
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-lg font-bold font-[var(--font-poppins)] uppercase tracking-[4px]  text-[var(--accent)] mb-4">
          Get in touch
        </p>

        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[var(--primary)]">
          Let Build Something Amazing Together
        </h2>

        <p
          className={`text-sm leading-6 max-w-2xl mx-auto ${darkMode ? "text-white/80" : "text-gray-600"}`}
        >
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions. Feel free to reach out
          through any of the platforms below, and let's start a conversation
          about how we can collaborate and create something amazing together.
        </p>
      </motion.div>

      <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center justify-center gap-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="w-full md:w-1/2 flex flex-col gap-6 justify-center"
        >
          <motion.img
            animate={{ rotate: [0, 10, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            viewport={{ once: false }}
            src={contactImage}
            alt="Contact Image"
            className="w-4/5 md:w-3/6 mx-auto relative z-10"
          />
        </motion.div>

        <div className="w-full md:w-3/5">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10
              shadow-lg flex flex-col gap-6"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your name"
              className="p-4 rounded-xl bg-[var(--secondary)] border border-white/10
                outline-none text-gray-800 placeholder:text-gray-500"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="p-4 rounded-xl bg-[var(--secondary)] border border-white/10
                outline-none text-gray-800 placeholder:text-gray-500"
            />
            <textarea
              rows="6"
              name="message"
              id=""
              placeholder="Your Message"
              className="p-4 rounded-xl bg-[var(--secondary)] border border-white/10
                outline-none text-gray-800 placeholder:text-gray-500 resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[var(--accent)] text-white font-bold px-6 py-3 rounded-xl hover:bg-[var(--hover)] transition-all duration-300 hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
};

export default Contact;
