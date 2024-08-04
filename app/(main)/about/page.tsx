"use client";
import React, { Suspense } from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Header from "../_components/header";
import Footer from "../_components/footer";
import { useSearchParams } from "next/navigation";

const AboutPageContent: React.FC = () => {
  const searchParams = useSearchParams();

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6 bg-indigo-600 text-white">
            <h1 className="text-3xl font-bold">About TimerHive 🐝</h1>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-2xl font-semibold mb-4">
              Welcome to TimerHive! ⏱️
            </h2>
            <p className="text-gray-600 mb-4">
              TimerHive is a powerful Pomodoro timer app designed to boost your
              productivity and help you manage your time effectively. Our app
              combines the proven Pomodoro Technique with a user-friendly
              interface to make time management a breeze.
            </p>
            <h3 className="text-xl font-semibold mb-2">Key Features 🚀</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Customizable work and break intervals</li>
              <li>Visual and audio notifications</li>
              <li>Clean and intuitive user interface</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">About the Creator 👨‍💻</h3>
            <p className="text-gray-600 mb-4">
              TimerHive was designed and developed by Wanderson Jackson, a
              passionate product designer and developer dedicated to creating
              tools that enhance productivity and improve user experiences.
            </p>
            <div className="flex space-x-4 mb-6">
              <Link
                href="https://www.linkedin.com/in/wandersonjackson/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                <FaLinkedin className="mr-2" /> LinkedIn
              </Link>
              <Link
                href="https://github.com/Wandersonjack"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-800 hover:text-gray-600"
              >
                <FaGithub className="mr-2" /> GitHub
              </Link>
            </div>
            <h3 className="text-xl font-semibold mb-2">Get in Touch 📬</h3>
            <p className="text-gray-600">
              Have questions, suggestions, or just want to say hello? We'd love
              to hear from you! Reach out to us at{" "}
              <a
                href="mailto:contact@timerhive.com"
                className="text-indigo-600 hover:text-indigo-800"
              >
                contact@timerhive.com
              </a>
              .
            </p>
          </div>
          <div className="px-4 py-4 sm:px-6 bg-gray-50 text-center">
            <p className="text-sm text-gray-500">
              © 2024 TimerHive. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default function WrappedAboutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AboutPageContent />
    </Suspense>
  );
}
