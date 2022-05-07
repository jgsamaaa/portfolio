import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [results, showResults] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResults(true);
  };

  return (
    <div className="w-full">
      <h1 className="font-bold sm:text-4xl underline decoration-2 text-center pt-14 text-2xl text-gray-100 decoration- ">
        Contact me
      </h1>
      <div
        className="w-full   gap-x-20 justify-center pb-20 md:flex "
        id="contact"
      >
        {/* first box */}
        <div className="w-full md:w-[30rem] pt-20 ">
          <div className="p-6 border border-gray-300 sm:rounded-md bg-slate-800">
            <h1 className="mb-5 text-lg font-semibold underline decoration-slate-00 decoration-4 text-gray-100 pb-5">
              Info
            </h1>
            <div className=" bg-slate-700  p-10 mb-8 rounded-lg">
              <p className="font-semibold text-md text-gray-200">Email</p>
              <p className="text-lg font-bold text-gray-100">
                jamesgabrieldumaug@gmail.com
              </p>
            </div>
            <div className="bg-slate-700 p-10  rounded-lg mb-2">
              <p className="font-semibold text-md text-gray-200">Whatsapp</p>
              <p className="font-bold text-lg text-gray-100">+1-719-760-9297</p>
            </div>
          </div>
        </div>

        <div className="w-full  pt-20 md:w-[30rem] ">
          {/* Second box */}

          <div className="p-6 border border-gray-300 sm:rounded-md bg-slate-800">
            <form ref={form} onSubmit={sendEmail}>
              <label className="block mb-6">
                <span className="text-white">Your name</span>
                <input
                  type="text"
                  name="name"
                  className="block w-full mt-1 p-2"
                  placeholder="John Doe"
                />
              </label>
              <label className="block mb-6">
                <span className="text-white">Email address</span>
                <input
                  name="email"
                  type="email"
                  className="block w-full mt-1 p-2"
                  placeholder="johndoe@example.com"
                  required
                />
              </label>
              <label className="block mb-6">
                <span className="text-white">Message</span>
                <textarea
                  name="message"
                  className="block w-full mt-1 px-2"
                  rows="3"
                  placeholder="Write here . . ."
                ></textarea>
              </label>
              <div className="mb-6">
                <button
                  type="submit"
                  className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
                >
                  Message me
                </button>
              </div>
              <div>
                {results ? (
                  <p className="text-xl text-gray-100">
                    Thank you for getting in touch! I will get back in touch
                    with you soon! Have a great day!
                  </p>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
