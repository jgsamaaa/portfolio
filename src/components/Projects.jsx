import React from 'react';
import projectOne from '../assets/google-projet.png';
import projectTwo from '../assets/denverfood.png';

export default function Projects() {
  return (
    <div className="w-full pb-10">
      <h1
        id="projects"
        className="font-bold sm:text-4xl underline decoration-2 text-center pt-14 text-2xl text-gray-100 decoration pb-20"
      >
        Projects
      </h1>
      {/* Project 1 */}
      <div className="max-w-6xl mx-auto lg:flex">
        <div className="max-w-lg px-2 ">
          <h1 className="text-2xl font-semibold text-gray-200 md:text-4xl">
            Goggles
          </h1>
          <p className="mt-5 text-lg pr-8 break-normal text-gray-300">
            Google search clone using API from
            https://rapidapi.com/apigeek/api/google-search3/. Works just like
            google, you can search images, videos and arcticles.
          </p>
          <div className="flex text-gray-100 font-semibold mt-4  gap-x-5 mb-2 text-xl">
            <p>ReactJS</p>
            <p>API</p>
            <p>TailwindCSS</p>
          </div>
          <div className="flex text-gray-100 mt-4  gap-x-5 mb-2">
            <a
              href="https://github.com/jgsamaaa/googlecloneproject"
              target="_blank"
              rel="noreferrer"
              className=" text-lg md:text-2xl text-slate-200 hover:text-blue-500"
            >
              Github
            </a>
            <a
              href="https://goggles-search.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className=" text-lg md:text-2xl text-slate-200 hover:text-blue-500"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div>
          <img src={projectOne} alt="First Project " className="w-[130rem]" />
        </div>
      </div>
      {/* Project 2 */}
      <div className="max-w-6xl mx-auto lg:flex mt-12">
        <div className="max-w-lg px-2 ">
          <h1 className="text-2xl font-semibold text-gray-200 md:text-4xl">
            Food Guide
          </h1>
          <p className="mt-5 text-lg pr-8 break-normal text-gray-300">
            A Restaurant finder using an API from
            https://rapidapi.com/apidojo/api/travel-advisor/. You can search
            Restaurnts anywhere and you can search with the restaurants ratings
            as well. Unfortunately this project does not have a Live demo. But
            you can see pictures of it on my Github.
          </p>
          <div className="flex text-gray-100 font-semibold mt-4  gap-x-5 mb-2 text-xl">
            <p>ReactJS</p>
            <p>API</p>
            <p>TailwindCSS</p>
          </div>
          <div className="flex text-gray-100 mt-4  gap-x-5 mb-2">
            <a
              href="https://github.com/jgsamaaa/foodguide"
              target="_blank"
              rel="noreferrer"
              className="  text-lg md:text-2xl text-slate-200 hover:text-blue-500"
            >
              Github
            </a>
          </div>
        </div>
        <div>
          <img src={projectTwo} alt="First Project " className="w-[235rem]" />
        </div>
      </div>
      {/* Project 3 */}
      <div className="max-w-6xl mx-auto lg:flex mt-12">
        <div className="max-w-lg px-2 ">
          <h1 className="text-2xl font-semibold text-gray-200 md:text-4xl">
            Food Guide
          </h1>
          <p className="mt-5 text-lg pr-8 break-normal text-gray-300">
            Google search clone using API from
            https://rapidapi.com/apigeek/api/google-search3/. Works just like
            google, you can search images, videos and arcticles.
          </p>
          <div className="flex text-gray-100 font-semibold mt-4  gap-x-5 mb-2 text-xl">
            <p>ReactJS</p>
            <p>API</p>
            <p>TailwindCSS</p>
          </div>
          <div className="flex text-gray-100 mt-4  gap-x-5 mb-2">
            <a
              href="https://www.linkedin.com/in/james-gabriel-dumaug-83526521b/"
              target="_blank"
              rel="noreferrer"
              className="  text-lg md:text-2xl text-slate-200 hover:text-blue-500 "
            >
              Github
            </a>
            <a
              href="https://goggles-search.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="  text-lg md:text-2xl text-slate-200 hover:text-blue-500"
            >
              Live Demo
            </a>
          </div>
        </div>
        <div>
          <img src={projectTwo} alt="First Project " className="w-[135rem]" />
        </div>
      </div>
    </div>
  );
}
