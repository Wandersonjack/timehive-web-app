import React, { Suspense } from "react";
import PomodoroTimer from "./(main)/_components/pomodoroTimer";
import { structuredData } from "./structuredData";

const HomeContent: React.FC = () => {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PomodoroTimer />
    </div>
  );
};

export default function WrappedHome() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
