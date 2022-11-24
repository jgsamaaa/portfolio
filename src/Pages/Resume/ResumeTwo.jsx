import React from 'react';
import UseData from '../../Hooks/UseData';
import Footer from '../../Share/Footer';
import PageTitle from '../../Share/PageTitle';

import ResumeCard from './ResumeCard';

const ResumeTwo = () => {
  const { resumeArray } = UseData();
  return (
    <>
      <PageTitle title="Resume"></PageTitle>
      {/* End pagetitle */}

      <section className="bg-white  lg:rounded-2xl dark:bg-[#111111]">
        <div data-aos="fade">
          <div className="container sm:px-5 md:px-10 lg:px-14">
            <div className="px-4 py-12 md:px-0">
              {/*Resume page title */}
              <h2 className="after-effect after:left-44">Resume</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-[30px]">
                {/* resume items map */}

                {resumeArray.slice(0, 2).map((item, i) => (
                  <ResumeCard item={item} key={i} />
                ))}
              </div>
            </div>
          </div>
          {/* End .container */}

          <div className="container bg-color-810 dark:bg-[#0D0D0D] py-12 px-2 sm:px-5 md:px-10 lg:px-20">
            <div className="">
              {/* Workings skills section start */}

              <div className="text-center">
                <h4 className="mb-8 text-5xl font-medium dark:text-white">
                  Working Skills
                </h4>

                {/* Workings skills items */}

                <div className="flex gap-y-5 gap-x-2.5 flex-wrap">
                  <button className="resume-btn">HTML5</button>
                  <button className="resume-btn">CSS3</button>
                  <button className="resume-btn">JavaScript</button>
                  <button className="resume-btn">ReactJS</button>
                  <button className="resume-btn">TailwindCSS</button>
                  <button className="resume-btn">NextJS</button>
                  <button className="resume-btn">Chackra UI</button>
                  <button className="resume-btn">GIT</button>
                  <button className="resume-btn">GITHUB</button>
                </div>
              </div>

              {/* knowledge section end */}
            </div>
          </div>
          {/* End .container */}

          <Footer condition={false} bg={'#FFFF'} />
        </div>
      </section>
    </>
  );
};

export default ResumeTwo;
