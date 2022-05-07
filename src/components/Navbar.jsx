import React from 'react';

export default function Navbar() {
  return (
    <div className="  flex gap-x-6 p-5  w-full  justify-center">
      <h2 href="/" className="text-md font-bold text-gray-100 md:text-lg">
        Gabriel Dumaug
      </h2>
      <a
        href="#projects"
        className="text-md font-semibold hover:text-gray-100 text-gray-300 md:text-lg"
      >
        Projects
      </a>
      <a
        href="/"
        className="text-md font-semibold hover:text-gray-100 text-gray-300 md:text-lg"
      >
        Resume
      </a>
      <a
        href="#contact"
        className="text-md font-semibold hover:text-gray-100 text-gray-300 md:text-lg"
      >
        Contact
      </a>
    </div>
  );
}
