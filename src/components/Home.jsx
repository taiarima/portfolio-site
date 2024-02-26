import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full bg-gradient-to-b from-black via-gray-800 to-black pt-8 h-screen overflow-y-hidden"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row mt-16">
        <div className="flex flex-col justify-center h-full">
          <br />
          <h2 className="text-4xl sm:text-7xl font-bold text-white pt-8">
            Hi, I'm Tai
          </h2>
          <p className="text-gray-400 py-4 pr-4 max-w-md">
            I am a multi-disciplinary professional with a passion for
            problem-solving and a background in linguistics and molecular
            biology. Download my{" "}
            <a
              className="font-bold text-white"
              href="/Tai Arima Resume Feb 2024.pdf"
            >
              resume
            </a>{" "}
            to view my complete profile!
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                {" "}
                <MdArrowRight className="ml-1" size={35} />
              </span>
            </Link>
          </div>
        </div>
        <div className="">
          <img
            src={HeroImage}
            alt="Tai Arima"
            className="rounded-2xl mx-auto w-2/3 md:w-full pb-4"
          />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Home;
