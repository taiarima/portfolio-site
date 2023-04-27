import React from "react";
import helsinkiLogo from "../assets/universityHelsinkiLogo.jpg";
import coloradoLogo from "../assets/universityOfColoradoLogo.jpg";
import jlptLogo from "../assets/jlptLogo.png";
import tefLogo from "../assets/tefLogo.png";

const Education = () => {
  const education = [
    {
      id: 1,
      src: helsinkiLogo,
      alt: "University of Helsinki Logo",
      org: "University of Helsinki",
      suppText: "Master of Science in Molecular Biosciences and Genetics",
    },
    {
      id: 2,
      src: coloradoLogo,
      alt: "University of Colorado Boulder Logo",
      org: "University of Colorado Boulder",
      suppText:
        "Bachelor of Arts in Molecular, Cellular, and Developmental Biology, Summa Cum Laude",
    },
    {
      id: 3,
      src: jlptLogo,
      alt: "Japanese Language Proficiency Test Logo",
      org: "Japanese Language Proficiency Test",
      suppText: "Certified Level N1 (Highest Proficiency Level)",
    },
    {
      id: 4,
      src: tefLogo,
      alt: "Test d'évaluation du français Logo",
      org: "Test d'évaluation du français (TEF)",
      suppText: "Reading/Listening: C1\n Writing/Speaking: B2",
    },
  ];
  return (
    <div
      name="education"
      className="w-full bg-gradient-to-b from-black via-gray-800 to-black text-white pb-40 pt-40"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Education and Certificates
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-4 px-12 sm:px-0">
          {education.map(({ id, src, alt, org, suppText }) => (
            <div key={id} className="shadow-md shadow-gray-700 rounded-lg">
              <img
                src={src}
                alt={alt}
                className="rounded-md duration-200 hover:scale-105 object-cover sm:h-48 w-96"
              />
              <div className="flex flex-col items-center justify-center">
                <p className="text-xl font-bold">{org}</p>
                <p>{suppText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
