"use client";
import React, { useState } from "react";

export default function ContactForm({ t }) {
  const contact = t.contact;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");
    if (!formData.email && !formData.phone) {
      setErrorMessage("Either email or phone is required.");
      setIsSubmitting(false);
      return;
    }
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Email sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        const data = await response.json();
        setErrorMessage(data.message || "Failed to send email.");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 sm:p-12">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-md overflow-hidden">
        <div className="p-6 sm:p-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center">
            {contact.title}
          </h1>
          <div className="text-gray-600 mt-2">
            {contact.description.map((value, index) => (
              <div key={index}>{value}</div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                {contact.name.key}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder={contact.name.placeholder}
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                {contact.phone.key}
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder={contact.phone.placeholder}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                {contact.email.key}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder={contact.email.placeholder}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                {contact.message.key}
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder={contact.message.placeholder}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={isSubmitting}
            >
              {contact.submit}
            </button>
          </form>
        </div>
        <div className="bg-gray-50 p-6 sm:p-10 border-t border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700">
            {contact.ourinfo.title}
          </h2>
          <div className="text-gray-600 mt-2">
            <strong>{contact.ourinfo.email.key}:</strong>{" "}
            <a
              href={`mailto:${contact.ourinfo.email.value}`}
              className="text-gray-600 hover:underline"
            >
              {contact.ourinfo.email.value}
            </a>
          </div>
          <div className="text-gray-600 mt-1 flex">
            <strong>{contact.ourinfo.phone.key}:</strong>{" "}
            <div>
              {contact.ourinfo.phone.value.map((value, index) => (
                <div key={index}>{value}</div>
              ))}
            </div>
          </div>
          <div className="text-gray-600 mt-1">
            <strong>{contact.ourinfo.address.key}:</strong>{" "}
            {contact.ourinfo.address.value}
          </div>
        </div>
      </div>
    </div>
  );
}
