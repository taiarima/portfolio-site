import React from "react";
// import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
// import installNode from "../assets/portfolio/installNode.jpg";
// import navbar from "../assets/portfolio/navbar.jpg";
// import reactParallax from "../assets/portfolio/reactParallax.jpg";
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
// import reactWeather from "../assets/portfolio/reactWeather.jpg";
import tengu from "../assets/portfolio/tengu-preview-old.png";
import numberGuessing from "../assets/portfolio/number-guessing-game.png";
import hzdriller from "../assets/portfolio/hzdriller.png";

const Portfolio = () => {
  // add links to the projects and change images to own
  const projects = [
    {
      id: 1,
      src: tengu,
      site: "stand-in",
      code: "https://github.com/taiarima/TenguGame",
    },
    {
      id: 2,
      src: numberGuessing,
      site: "stand-in",
      code: "https://github.com/taiarima/Tai-s-Number-Guessing-Game",
    },
    {
      id: 3,
      src: hzdriller,
      site: "stand-in",
      code: "https://github.com/taiarima/HanziDriller",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pt-5"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="pt-6">Some of my recent projects:</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, code }) => (
            <div key={id} className="shadow-md shadow-gray-700 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 object-cover sm:h-48 w-96"
              />
              <div className="flex items-center justify-center">
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Site
                </button> */}

                <button
                  onClick={() => window.open(code, "_blank")}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
