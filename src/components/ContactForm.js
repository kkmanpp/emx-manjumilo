"use client";
import React, { useState } from "react";
import Modal from "@/components/Modal";
import dynamic from "next/dynamic";
import Loader from "@/components/Loader";

export default function ContactForm({ t }) {
  const contact = t.contact;
  const validation = t.validation;
  const { formFields, ourInfo } = contact;
  const modal = t.modal;

  const MacauMap = dynamic(() => import("@/components/MacauMap"), {
    ssr: false,
    loading: () => <Loader />,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    feedback: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [modalState, setModalState] = useState({
    isVisible: false,
    title: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = validation.nameRequired;
    }
    if (!formData.email.trim() && !formData.phone.trim()) {
      newErrors.email = validation.emailOrPhoneRequired;
      newErrors.phone = validation.phoneOrEmailRequired;
    }
    if (!formData.feedback.trim()) {
      newErrors.feedback = validation.feedbackRequired;
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = validation.invalidEmail;
    }
    if (formData.phone && !/^\d{8,15}$/.test(formData.phone)) {
      newErrors.phone = validation.invalidPhone;
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
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
        setModalState({
          isVisible: true,
          title: modal.title.submissionSuccessful,
          message: modal.message.feedbackSent,
        });
        setFormData({ name: "", email: "", phone: "", feedback: "" });
      } else {
        setModalState({
          isVisible: true,
          title: modal.title.submissionFailed,
          message: modal.message.failedToSendFeedback,
        });
      }
    } catch (error) {
      setModalState({
        isVisible: true,
        title: modal.title.submissionFailed,
        message: modal.message.errorOccurred,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-md overflow-hidden">
      <div className="p-6 sm:p-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center">
          {contact.title}
        </h1>
        {/* Contact form */}
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
              {formFields.name.key}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              {formFields.phone.key}
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              {formFields.email.key}
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              {formFields.feedback.key}
            </label>
            <textarea
              id="feedback"
              name="feedback"
              rows="5"
              value={formData.feedback}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
            {errors.feedback && (
              <p className="text-red-500 text-sm mt-1">{errors.feedback}</p>
            )}
          </div>
          <button
            type="submit"
            className={`w-full font-medium py-2 px-4 rounded-md shadow-sm focus:outline-none focus:ring-2 
                          ${
                            isSubmitting
                              ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                              : "bg-green-600 hover:bg-green-700 text-white focus:ring-blue-500"
                          }`}
            disabled={isSubmitting}
          >
            {formFields.submit}
          </button>
        </form>
      </div>
      {/* Contact infomation */}
      <div className="bg-gray-50 p-6 border-t border-gray-200">
        <h2 className="text-lg font-semibold text-gray-700">{ourInfo.title}</h2>
        <div className="text-gray-600 mt-2">
          <strong>{ourInfo.email.key}:</strong>&nbsp;
          <a
            href={`mailto:${ourInfo.email.value}`}
            className="text-gray-600 hover:underline"
          >
            {ourInfo.email.value}
          </a>
        </div>
        <div className="text-gray-600 mt-1 flex">
          <strong>{ourInfo.phone.key}:</strong> &nbsp;
          <div>
            {ourInfo.phone.value.map((value, index) => (
              <div key={index}>{value}</div>
            ))}
          </div>
        </div>
        <div className="text-gray-600 mt-1 flex whitespace-nowrap">
          <strong>{ourInfo.address.key}:</strong> &nbsp;
          <div>
            {ourInfo.address.value.map((value, index) => (
              <div key={index}>{value}</div>
            ))}
          </div>
        </div>
        <MacauMap popupInfo={ourInfo} />
      </div>

      <Modal
        isVisible={modalState.isVisible}
        title={modalState.title}
        message={modalState.message}
        onClick={() => setModalState({ ...modalState, isVisible: false })}
        buttonLabel={modal.buttonLabel.ok}
      />
    </div>
  );
}
