import React, { useState } from 'react';
import { BlockReveal } from "./ScrollReveal.jsx";
import { handleError, handleSuccess } from "../utils";
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://adl-api-ten.vercel.app/contact/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(async (res) => {
        const data = await res.json();
        if (res.ok && data.success) {
          handleSuccess("Message sent successfully!");
          setFormData({ name: "", email: "", company: "", service: "", message: "" });
          setShowSuccess(true);
        } else {
          handleError(data.message || "Failed to send message");
        }
      })
      .catch(() => {
        handleError("Server error. Please try again later.");
      });
  };

  return (
    <BlockReveal>
    <div className="w-full flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl w-full bg-white rounded-lg shadow-2xl shadow-blue-900 overflow-hidden">
        <div className="grid md:grid-cols-2 min-h-[600px]">
          {/* Left Side - Image and Info */}
          <div className="relative bg-[#0C2B4E] p-6 md:p-8 flex flex-col justify-between">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-transparent"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop"
                alt="Professional workspace"
                className="w-full h-48 md:h-64 object-cover rounded-lg mb-6"
              />
              
              <div className="bg-white rounded-lg p-4 md:p-6 shadow-lg flex-1 flex flex-col justify-center">
                <div className="space-y-3 md:space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">Email</h3>
                    <p className="text-gray-600 text-xs md:text-sm break-words">elite.advisers@gmail.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">Phone</h3>
                    <p className="text-gray-600 text-xs md:text-sm">+99 021 324 258</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">Address</h3>
                    <p className="text-gray-600 text-xs md:text-sm">Sector 13 Dwarka, New Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-6 md:p-8 lg:p-12 overflow-y-auto">
            <div className="mb-6 md:mb-8">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Let's talk about your problem.
              </h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-2.5 md:py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0C2B4E] focus:border-transparent transition text-sm md:text-base"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 md:py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0C2B4E] focus:border-transparent transition text-sm md:text-base"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-800 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                  className="w-full px-4 py-2.5 md:py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0C2B4E] focus:border-transparent transition text-sm md:text-base"
                  required
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-800 mb-2">
                  Service You are interested in
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 md:py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0C2B4E] focus:border-transparent transition text-sm md:text-base"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="Taxation and Return Filing">Taxation and Return Filing</option>
                  <option value="General Consultancy">General Consultancy</option>
                  <option value="Accounting and BookKeeping">Accounting and BookKeeping</option>
                  <option value="Audit and Assurance">Audit and Assurance</option>
                  
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  rows="4"
                  className="w-full px-4 py-2.5 md:py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0C2B4E] focus:border-transparent transition resize-none text-sm md:text-base"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0C2B4E] text-white font-semibold py-2.5 md:py-3 px-6 rounded-lg hover:bg-[#1a3d66] transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm md:text-base"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      {showSuccess && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank you for reaching out!</h2>
            <p className="text-gray-600 mb-6">
              Your message has been sent successfully. Our team will contact you within 24–48 hours.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="px-6 py-3 bg-[#0C2B4E] text-white rounded-xl font-semibold hover:bg-[#1a3d66] transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    </BlockReveal>
  );
}
