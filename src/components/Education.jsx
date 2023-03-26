import React from "react";

const Education = () => {
  return (
    <div
      name="education"
      className="w-full h-screen bg-gradient-to-b from-black via-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Education
          </p>
        </div>
        <p className="text-xl mt-10">
          I will fill this out with my educational background.
        </p>
      </div>
    </div>
  );
};

export default Education;
