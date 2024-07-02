import React from "react";
// import tengu from "../assets/portfolio/tengu-preview-old.png";
import hzdriller from "../assets/portfolio/hzdriller.png";
import hanziTestApp from "../assets/portfolio/hanzi-ability-test.png";
import kanjiTestApp from "../assets/portfolio/kanjiTestApp.png";
import talkTalk from "../assets/portfolio/talkTalk.png";
import mangaMap from "../assets/portfolio/manga_map_img.png";
import wirgoals from "../assets/portfolio/wirgoals.png";
import langQuiz from "../assets/portfolio/lang-quiz-thumbnail.png";

// {
//   id: 1,
//   src: tengu,
//   alt: "Tengu Game Preview",
//   site: "https://taiarima.github.io/TenguGame/",
//   code: "https://github.com/taiarima/TenguGame",
// },

const Portfolio = () => {
  const projects = [
    {
      id: 2,
      src: hzdriller,
      alt: "HanziDriller App Preview",
      site: "https://github.com/taiarima/HanziDriller",
      code: "https://github.com/taiarima/HanziDriller",
    },
    {
      id: 3,
      src: hanziTestApp,
      alt: "Hanzi Ability Test Preview",
      site: "https://taiarima.github.io/hanzi-evaluator/",
      code: "https://github.com/taiarima/hanzi-evaluator",
    },
    {
      id: 5,
      src: talkTalk,
      alt: "Type and Learn Korean App Preview",
      site: "https://taiarima.github.io/type-and-learn-korean/",
      code: "https://github.com/taiarima/type-and-learn-korean",
    },
    {
      id: 6,
      src: mangaMap,
      alt: "Manga Map App Preview",
      site: "https://taiarima.github.io/manga-map/",
      code: "https://github.com/taiarima/manga-map",
    },
    {
      id: 7,
      src: wirgoals,
      alt: "Wirgoals App Preview",
      site: "https://taiarima.github.io/wir-goals/",
      code: "https://github.com/taiarima/wir-goals",
    },
    {
      id: 8,
      src: langQuiz,
      alt: "Language Quiz Preview",
      site: "https://taiarima.github.io/lang-quiz/",
      code: "https://github.com/taiarima/lang-quiz",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white pt-8"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="pt-6">Some of my recent projects:</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, alt, site, code }) => (
            <div key={id} className="shadow-md shadow-gray-700 rounded-lg">
              <img
                src={src}
                alt={alt}
                className="rounded-md duration-200 hover:scale-105 object-cover sm:h-48 w-96"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => window.open(site, "_blank")}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Site
                </button>

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
