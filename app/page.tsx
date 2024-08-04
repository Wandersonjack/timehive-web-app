// pages/index.tsx

import PomodoroTimer from "./(main)/_components/pomodoroTimer";
import { structuredData } from "./structuredData";

const Home: React.FC = () => {
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

export default Home;
