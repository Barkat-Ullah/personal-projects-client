"use client";
import { backend } from "@/utils/backend";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaCommentDots,
  FaMapMarkerAlt,
} from "react-icons/fa";

// Define the type for the form data
interface ContactFormData {
  name: string;
  lastName: string;
  email: string;
  message: string;
}

const CreateContact = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

 
  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    try {
      const response = await fetch(`${backend}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
       
        setSuccessMessage("Message sent successfully!");
        reset(); 
        setTimeout(() => {
          setSuccessMessage(null);
        }, 4000);
      } else {
        setSuccessMessage("Failed to send message.");
        setTimeout(() => {
          setSuccessMessage(null); 
        }, 4000);
      }
    } catch (error) {
      console.error("Error:", error);
      setSuccessMessage("An error occurred.");
      setTimeout(() => {
        setSuccessMessage(null); 
      }, 4000);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl px-6 py-12 mx-auto">
        <div>
          <p className="font-medium text-blue-500 dark:text-blue-400">
            Contact us
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
            Chat to our friendly team
          </h1>
          <p className="mt-3 text-gray-500 dark:text-gray-400">
            We’d love to hear from you. Please fill out this form or shoot us an
            email.
          </p>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="mt-4 px-6 py-3 text-center bg-green-500 text-white rounded-lg">
            {successMessage}
          </div>
        )}

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Contact Information */}
            <div>
              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <FaEnvelope className="w-5 h-5" />
              </span>
              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                Email
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Our friendly team is here to help.
              </p>
              <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                hello@merakiui.com
              </p>
            </div>

            <div>
              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <FaPhoneAlt className="w-5 h-5" />
              </span>
              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                Phone
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Mon-Fri from 8am to 5pm.
              </p>
              <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                +1 (555) 000-0000
              </p>
            </div>

            <div>
              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <FaCommentDots className="w-5 h-5" />
              </span>
              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                Live chat
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Our friendly team is here to help.
              </p>
              <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                Start new chat
              </p>
            </div>

            <div>
              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                <FaMapMarkerAlt className="w-5 h-5" />
              </span>
              <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
                Office
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Come say hello at our office HQ.
              </p>
              <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                100 Smith Street Collingwood VIC 3066 AU
              </p>
            </div>
          </div>

          <div className="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="-mx-2 md:items-center md:flex">
                <div className="w-full px-2">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Name
                  </label>
                  <input
                    type="text"
                    {...register("name", {
                      required: "First name is required",
                    })}
                    className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Email address
                </label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="w-full mt-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Message
                </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Message"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateContact;
