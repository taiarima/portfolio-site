import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-black via-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
          This is my about section where I tell you all about myself.
        </p>
        <br />

        <p className="text-xl">
          I think it would really benefit you to hire me. Seriously.
        </p>
      </div>
    </div>
  );
};

export default About;