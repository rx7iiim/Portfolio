"use client";
import React, { useState } from "react";
import { FiMail, FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Message from ${formData.email}`;
    const body = formData.message;
    const recipient = "a_zine@estin.dz";

    // Open default mail client with prefilled data
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Show success message
    setShowSuccessModal(true);
    setFormData({ email: "", message: "" });
  };

  return (
    <section
      className="
    h-full
    lg:h-screen
    w-full
    lg:ml-36
     sm:px-6 lg:px-12
    py-6
    bg-transparent
    flex flex-col items-start justify-center 
   
  "
      id="contact"
    >
      {/* Terminal-style decoration */}
      <div
        className="mr-4 mb-4
      
      flex items-center gap-2 text-green-400 font-mono text-xs sm:text-sm
    "
      >
        <FiMail className="text-base sm:text-lg" />
        <span>~/contact</span>
      </div>

      <div className="max-w-xl w-full mx-auto">
        {/* Form header */}
        <div className="mb-6 px-2 text-center sm:text-left">
          <h2
            className="
          text-xl sm:text-2xl md:text-3xl 
          font-bold text-white font-mono leading-tight
        "
          >
            <span className="text-green-400">function</span>{" "}
            <span className="text-white">sendMessage</span>() {"{"}
          </h2>
        </div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="
        group bg-transparent
        rounded-lg border border-gray-700/50 
        hover:border-green-400/30 transition-all overflow-hidden 
        shadow-2xl p-4 sm:p-6
      "
        >
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              {/* Email input */}
              <div>
                <p className="text-gray-400 mb-2 font-mono text-xs sm:text-sm">
                  <span className="text-green-400">//</span>{" "}
                  your_email@domain.com
                </p>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email..."
                  className="
                w-full bg-gray-800 border border-gray-700 
                rounded px-3 sm:px-4 py-2 sm:py-3 
                text-white focus:outline-none 
                focus:ring-1 focus:ring-green-400 
                font-mono text-xs sm:text-sm shadow
              "
                  required
                />
              </div>

              {/* Message input */}
              <div>
                <p className="text-gray-400 mb-2 font-mono text-xs sm:text-sm">
                  <span className="text-green-400">//</span> your_message_here
                </p>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Type your message..."
                  className="
                w-full bg-gray-800 border border-gray-700 
                rounded px-3 sm:px-4 py-2 sm:py-3 
                text-white focus:outline-none 
                focus:ring-1 focus:ring-green-400 
                font-mono text-xs sm:text-sm shadow
              "
                  required
                />
              </div>

              {/* Submit button */}
              <div className="pt-2 flex justify-center sm:justify-start">
                <motion.button
                  type="submit"
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                px-4 py-2 rounded font-mono text-xs sm:text-sm 
                flex items-center gap-2
                bg-green-400/10 border border-green-400/30 
                text-green-400 hover:bg-green-400/20
                transition-colors shadow
              "
                >
                  <FiMail size={14} />
                  <span>send_message()</span>
                </motion.button>
              </div>
            </div>
          </form>

          {/* Form footer */}
          <div className="mt-6 pt-4 border-t border-gray-700/30 text-center sm:text-left">
            <p className="text-gray-500 font-mono text-xs">
              <span className="text-green-400">$</span> All fields are required
            </p>
          </div>
        </motion.div>

        {/* Terminal-style footer */}
        <div
          className="
        mt-4 px-2 py-1 bg-gray-900/50 
        rounded border border-gray-700/30 
        text-gray-500 font-mono text-xs 
        text-center
      "
        >
          <span className="text-green-400">$</span> Will open your default mail
          client
        </div>
      </div>

      {/* Success modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
          fixed inset-0 bg-black/80 z-50 
          flex items-center justify-center p-4
        "
            onClick={() => setShowSuccessModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="
            relative bg-gray-900 rounded-xl 
            w-full max-w-sm sm:max-w-md 
            p-4 sm:p-6 
            border border-green-400/30
          "
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-base sm:text-lg font-mono text-green-400">
                  Ready to Send!
                </h3>
                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <FiX size={18} />
                </button>
              </div>

              <div className="space-y-3">
                <p className="text-gray-300 font-mono text-sm">
                  <span className="text-green-400">$</span> Your default email
                  client should open.
                </p>
                <p className="text-gray-400 font-mono text-xs">
                  <span className="text-green-400">//</span> Just hit send to
                  complete the process.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-700/30 text-center">
                <motion.button
                  onClick={() => setShowSuccessModal(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                px-4 py-2 bg-green-400/10 
                border border-green-400/30 
                text-green-400 rounded 
                font-mono text-xs sm:text-sm
              "
                >
                  close_modal()
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
