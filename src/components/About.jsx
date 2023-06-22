import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-black via-gray-800 to-black text-white overflow-y-auto pt-8"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
          I am a self-taught programmer with a passion for problem-solving and a
          drive to learn and grow. I have gained a unique perspective from my
          diverse experiences working as a linguist, military intelligence
          analyst, and molecular biology researcher. Through these roles, I have
          honed skills in communication, collaboration, and adaptability, all of
          which I am excited to bring to the world of software development.
        </p>
        <br />
        <p className="text-xl">
          Aside from coding and building applications, my primary interests are
          foreign language learning, science, and pedagogy. I have spent years
          both as a teacher and a student thinking of the best ways to teach and
          learn, and it's a subject that never ceases to fascinate me. In terms
          of personal interests, I am an avid unicyclist, an ardent reader of
          Japanese literature, and a fan of miniature painting.
        </p>
        <br />
        <p className="text-xl">
          Feel free to contact me via{" "}
          <a className="text-blue-500" href="mailto:tai.arima@colorado.edu">
            email
          </a>
          ,{" "}
          <a
            href="https://www.linkedin.com/in/taiarima/"
            className="text-blue-500"
          >
            LinkedIn
          </a>{" "}
          , or the form below to discuss any opportunities or projects.
        </p>
      </div>
    </div>
  );
};

export default About;
