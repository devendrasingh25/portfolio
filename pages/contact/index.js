// src/pages/Contact.jsx
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      alert("Please fill out all required fields.");
      return;
    }

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  const inputClasses = `
    input w-full
    bg-transparent focus:bg-transparent
    border border-white/20
    placeholder:text-white/50 text-white
    focus:outline-none focus:ring-0
    max-sm:text-sm max-sm:py-2 max-sm:px-3
  `;

  return (
    <div className="min-h-screen bg-primary/30 relative flex flex-col justify-end pt-24 pb-20 sm:pb-28">
      <Circles />
      <Bulb />
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-[700px] mx-auto text-center">
          <motion.h2
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-10 text-2xl sm:text-3xl lg:text-5xl font-bold"
          >
            Let's <span className="text-accent">work together</span>
          </motion.h2>

          <motion.form
            ref={form}
            onSubmit={handleSubmit}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col gap-4"
          >
            {/* Name + Email */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className={inputClasses}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={inputClasses}
                required
              />
            </div>

            {/* Subject */}
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className={inputClasses}
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className={`textarea w-full resize-none
                bg-transparent focus:bg-transparent
                border border-white/20
                placeholder:text-white/50 text-white
                focus:outline-none focus:ring-0
                max-sm:text-sm max-sm:py-2 max-sm:px-3 max-sm:h-28`}
              required
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[150px] px-6 py-2 transition-all duration-300 flex items-center justify-center group relative text-sm"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's Talk
              </span>
              <BsArrowRight className="absolute -translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-[20px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
