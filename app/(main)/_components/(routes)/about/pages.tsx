"use client";
import React, { useState } from "react";

const AboutContent = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">About TimerHive</h1>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900">
            What is TimerHive?
          </h2>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <p className="mt-1 max-w-2xl text-sm text-gray-500 sm:mt-0 sm:p-6">
            TimerHive is a productivity tool designed to help you manage your
            time effectively using the Pomodoro Technique. Our app provides a
            simple, intuitive interface for tracking work sessions and breaks,
            allowing you to maintain focus and avoid burnout.
          </p>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900">
            The Pomodoro Technique
          </h2>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <div className="sm:p-6">
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              The Pomodoro Technique is a time management method developed by
              Francesco Cirillo in the late 1980s. It uses a timer to break work
              into intervals, traditionally 25 minutes in length, separated by
              short breaks.
            </p>
            <ul className="list-disc list-inside mt-4 text-sm text-gray-500">
              <li>Work for 25 minutes (one "Pomodoro")</li>
              <li>Take a 5-minute break</li>
              <li>After 4 Pomodoros, take a longer break (15-30 minutes)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Features of TimerHive
          </h2>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <ul className="list-disc list-inside mt-1 max-w-2xl text-sm text-gray-500 sm:mt-0 sm:p-6">
            <li>Customizable work and break durations</li>
            <li>Visual and audio notifications</li>
            <li>Simple, distraction-free interface</li>
            <li>Task tracking and productivity statistics (coming soon)</li>
            <li>Cross-platform synchronization (coming soon)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-grow">
        <AboutContent />
      </main>
    </div>
  );
};

export default AboutPage;
