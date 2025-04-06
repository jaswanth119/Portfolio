import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-600 mb-2">Made by Jaswanth</p>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Jaswanth. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
