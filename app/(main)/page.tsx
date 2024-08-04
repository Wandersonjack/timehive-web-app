"use client";
import React, { Suspense } from "react";
import PomodoroTimer from "./_components/pomodoroTimer";
import { structuredData } from "../structuredData";
import { useSearchParams } from "next/navigation";
import GoogleAnalytics from "./_components/GoogleAnalytics";

const HomeContent: React.FC = () => {
  const searchParams = useSearchParams();
  return (
    <div>
      <GoogleAnalytics GA_MEASUREMENT_ID="YOUR_GA_MEASUREMENT_ID" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PomodoroTimer />
    </div>
  );
};

const WrappedHome: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
};

export default WrappedHome;
