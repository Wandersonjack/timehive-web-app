import React from "react";
import Link from "next/link";

const Custom404: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-4">
        Oops! The page you are looking for does not exist.
      </p>
      <Link href="/">
        <a className="text-indigo-600 hover:text-indigo-800">Go back to Home</a>
      </Link>
    </div>
  );
};

export default Custom404;
