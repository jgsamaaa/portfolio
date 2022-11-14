import React from 'react';
import UseData from '../../Hooks/UseData';
import Footer from '../../Share/Footer';
import '../../Share/Style.css';
import AboutCard from './AboutCard';
import HomeCard from '../../Share/HomeCard';
import PageTitle from '../../Share/PageTitle';

const AboutTwo = () => {
  const { local, experienceArray } = UseData();

  return (
    <section>
      <PageTitle title="About"></PageTitle>
      {/* End pagetitle */}

      <div className=" lg:rounded-2xl bg-white dark:bg-[#111111]">
        <div data-aos="fade">
          <div className="px-2 pt-12 md:py-12 sm:px-5 md:px-10 lg:px-14">
            {/* About page title */}
            <h2 className="after-effect after:left-52">About Me</h2>
            <div className="lg:hidden">
              {/* Sidebar personal information for mobile devices */}
              <HomeCard />
            </div>
            <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center hidden ">
              <div className="col-span-12 space-y-2.5">
                <div className="lg:mr-16">
                  <p className="leading-7 text-gray-lite dark:text-color-910">
                    Creating new things with high attention to details and
                    always open to learn new skills. I like to craft beautiful
                    frontend products with great user experience.
                  </p>
                  <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                    I am a person who is very optimistic in every trial that I
                    might be facing and not afraid of being criticized.
                    Fascinated with how intricate programming can be I was
                    quickly drawn to learn it. I enjoy turning complex problems
                    into simple, beautiful and intuitive designs.
                  </p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
          {/* End about descriptions */}

          <div className="px-2 pb-12 sm:px-5 md:px-10 lg:px-14">
            <h3 className="text-[35px] dark:text-white font-medium pb-5">
              What I do!
            </h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2 ">
              {/* Experience information  */}

              {experienceArray.map((item) => (
                <AboutCard key={Math.random()} item={item} local={local} />
              ))}
            </div>
          </div>
          {/* service provide end */}

          {/* Common Footer call here */}
          <Footer bg={'#FFFF'} />
        </div>
      </div>
    </section>
  );
};

export default AboutTwo;
