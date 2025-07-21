import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-400 border-t py-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center gap-4">
        <p className="text-md font-bold">
          &copy; {new Date().getFullYear()} NoteFlow. All rights reserved.
        </p>
        
        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/SrijanSahu05"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/srijan-sahu-058942286" // Optional: update with your actual profile
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition"
          >
            <FaLinkedin />
          </a>
          {/*<a
            href="https://twitter.com" // Optional: update with your actual profile
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition"
          >
            <FaTwitter />
          </a>*/}
        </div>
      </div>
    </footer>
  );
};

export default Footer;