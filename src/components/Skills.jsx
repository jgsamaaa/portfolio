import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiTailwindcss } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { RiReactjsFill } from 'react-icons/ri';
import { DiGit } from 'react-icons/di';

export default function Skills() {
  return (
    <div className="w-full pb-10 ">
      <div className=" max-w-2xl  mx-auto text-white ">
        <h1 className="font-bold sm:text-4xl underline decoration-2 text-center pt-14 text-2xl text-gray-100 decoration pb-20">
          Skills
        </h1>
        <div className=" pb-10 grid grid-cols-3 items-center text-center gap-10 lg:gap-16 ">
          <div>
            <h1 className="text-xl">HTML</h1>
            <AiFillHtml5 className="text-5xl mx-auto text-blue-400" />
          </div>
          <div>
            <h1 className="text-xl">CSS</h1>
            <DiCss3 className="text-5xl mx-auto text-blue-400" />
          </div>
          <div>
            <h1 className="text-xl">JavaScript</h1>
            <SiJavascript className="text-5xl mx-auto text-blue-400" />
          </div>
          <div>
            <h1 className="text-xl">ReactJS</h1>
            <RiReactjsFill className="text-5xl mx-auto text-blue-400" />
          </div>
          <div>
            <h1 className="text-xl">GIT</h1>
            <DiGit className="text-5xl mx-auto text-blue-400" />
          </div>
          <div>
            <h1 className="text-xl">Tailwindcss</h1>
            <SiTailwindcss className="text-5xl mx-auto text-blue-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
