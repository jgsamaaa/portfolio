import React from 'react';

import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

import me from '../assets/me1.jpg';

export default function Header() {
  return (
    <div className=" w-full mx-auto pt-20">
      <div>
        <img
          src={me}
          alt="handsome guy"
          className="w-40 h-40 rounded-full object-cover mx-auto"
        />
      </div>
      <div>
        <h1 className="text-4xl text-gray-200 text-center pt-10 font-semibold md:text-6xl">
          Hi, I'm Gabriel
        </h1>
        <p className="text-center text-lg  max-w-lg mx-auto pt-1 font-semibold text-gray-400">
          A Frontend Developer located in USA
        </p>
        <p className="text-center text-lg  max-w-lg mx-auto pt-2 pb-10 font-semibold text-gray-400">
          Creating new things with high attention to details and always open to
          learn new skills. I like to craft beautiful frontend products with
          great user experience.
        </p>
      </div>
      <div className="flex justify-center pb-7">
        <a
          href="https://www.linkedin.com/in/james-gabriel-dumaug-83526521b/"
          target="_blank"
          rel="noreferrer"
          className="pr-4 text-4xl text-slate-600 hover:text-blue-500"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/jgsamaaa"
          target="_blank"
          rel="noreferrer"
          className="text-4xl text-slate-600 hover:text-blue-500"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
}
