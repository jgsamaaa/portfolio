import React from 'react';
import vectorme from '../assets/vetorimage.png';

export default function Aboutme() {
  return (
    <div className="pb-10">
      <h1 className="font-bold sm:text-4xl underline decoration-2 text-center pt-14 text-2xl text-gray-100 decoration pb-5">
        About me
      </h1>
      <div className="grid lg:grid-cols-5 lg:max-w-[90rem] mx-auto">
        <div className="pt-3  pl-4  col-span-2  ">
          <h1 className="text-2xl font-semibold lg:mt-20 text-gray-100 ">
            James Gabriel Dumaug
          </h1>
          <p className="font-semibold text-gray-300">
            Frontend Developer / Gamer
          </p>
          <p className="text-xl py-3 pr-4 md:text-2xl text-gray-300 break-words">
            I&apos;m Gabriel a self taught Front-end Developer. Not too long
            ago, I started to learn how to code and at the beginning I was doing
            it on my free time. Surprisingly, I started to like it and lately, I
            have been doing it everyday right after work. And with this, I am
            looking for an opportunity that could help me grow, learn more
            knowledge and enhance my skills in this industry for I am a person
            who is very optimistic in every trials that I might be facing and
            not afraid of being criticised.I like reading Manga and Watching
            anime during my free time.
          </p>
        </div>
        <div className="col-span-3 ">
          <img
            src={vectorme}
            alt="vector  logo"
            className="w-[80rem]  p-6 md:h-full object-cover "
          />
        </div>
      </div>
    </div>
  );
}
