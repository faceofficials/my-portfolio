import React from 'react';


function About() {
  return (
    <div id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Alex Zvigun.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-6 leading-relaxed text-gray-900">
            You are welcome to observe my portfolio and contact me
          </p>
          <div className="flex justify-center">
            <a
              href="#projects"
              className="inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 hover:text-white rounded text-lg">
              My Portfolio
            </a>
            <a
              href="#contact"
              className="ml-4 inline-flex text-white bg-green-800 border-0 py-2 px-6 focus:outline-none hover:bg-green-400 rounded text-lg">
              Contact Me
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./avatar.png"
          />
        </div>
      </div>
    </div>
  );
}


export default About;