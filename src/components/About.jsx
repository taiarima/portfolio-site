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
          As a self-taught programmer, I have developed a strong foundation in
          programming concepts and have completed several projects demonstrating
          my ability to apply these concepts in real-world scenarios. With a
          passion for problem-solving and a drive to learn and grow, I am eager
          to take on new challenges and contribute my skills to a dynamic
          programming team.
        </p>
        <br />

        <p className="text-xl">
          In addition to my programming skills, I have gained a unique
          perspective and problem-solving approach from my diverse experiences
          working as a linguist, military intelligence analyst, and molecular
          biology researcher. These experiences have honed my skills in
          communication, collaboration, and adaptability, which I am excited to
          bring to the world of software development.
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
