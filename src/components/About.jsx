import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Anshaal, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I'm passionate about the field of software development, design,
              and I love to talk about mental health. In my free time, I enjoy
              making digital art, reading about cognitive psychology, or playing
              PC games, such as Stardew Valley, Silent Hill, and RPGs. I
              currently am searching for my first internship or employment
              opportunity!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
