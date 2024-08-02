import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-sm text-gray-600">
          <div className="flex space-x-4">
            <Link href="/privacy-and-policy" className="hover:text-gray-900">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-gray-900">
              Terms & Conditions
            </Link>
            <Link href="https://www.narius.co/" className="hover:text-gray-900">
              Developed by @Narius.co
            </Link>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} TimerHive. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
