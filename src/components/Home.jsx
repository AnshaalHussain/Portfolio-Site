import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <AnimationOnScroll
          animateOnce
          animatePreScroll={false}
          animateIn="animate__fadeInDown"
        >
          <p className="text-pink-600 mb-3">Hi, there. My name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Anshaal Hussain
          </h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
            I'm a Full Stack <br /> Developer.
          </h2>
        </AnimationOnScroll>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I transitioned into web development from a psychology background by
          attending Lighthouse Labs (a.k.a. the hardest, most rewarding 12 weeks
          of my life!). I'm passionate about the field of software development
          and design, and currently I'm focused on building full stack
          responsive web applications.
        </p>

        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
