import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-darkerGray text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} UrbanE. All rights reserved.
        </p>
        <div className="mt-4 flex flex-1 justify-center items-center">
          <a href="https://twitter.com" className="text-white mx-2">
            <FaSquareXTwitter size={20} />
          </a>
          <a href="https://facebook.com" className="text-white mx-2">
            <FaFacebook size={20} />
          </a>
          <a href="https://instagram.com" className="text-white mx-2">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
