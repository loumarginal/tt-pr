
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2025 AI Translator. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
