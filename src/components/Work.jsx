import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import YoLowTrips from "../assets/YoLowTrips.png";
import InterviewScheduler from "../assets/InterviewScheduler.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="py-8">
          <AnimationOnScroll animateIn="animate__fadeInDown">
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
              Projects
            </p>

            <p className="py-6">Check out some of my recent work</p>
          </AnimationOnScroll>
        </div>
        {/* Card grid container*/}{" "}
        <AnimationOnScroll
          animateIn="animate__fadeInLeftBig"
          animatePreScroll={false}
        >
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Card grid item */}

            <div>
              <div
                style={{ backgroundImage: `url(${YoLowTrips})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              >
                {/* Hover styling */}
                <div className="opacity-0 group-hover:opacity-100">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    Flight Deals Tracker
                  </span>
                  <div className="pt-8 text-center">
                    <a href="/">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Demo
                      </button>
                    </a>
                    <a
                      href="https://github.com/AnshaalHussain/Yo-Low-Trips"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              {/* Description */}
              <div className="py-2 text-sm text-left">
                Search for cheapest deals on flights, as well as filter for
                destination, price, departure date. Plans to add additional
                features!
              </div>
            </div>

            {/* Card grid item */}
            <div>
              <div
                style={{ backgroundImage: `url(${InterviewScheduler})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
              >
                {/* Hover styling */}
                <div className="opacity-0 group-hover:opacity-100">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    Interview Scheduler
                  </span>
                  <div className="pt-8 text-center">
                    <a href="/">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Demo
                      </button>
                    </a>
                    <a
                      href="https://github.com/AnshaalHussain/Interview-Scheduler"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              {/* Description */}
              <div className="py-2 text-sm text-left">
                One of my proudest projects coming out of Lighthouse Labs! It
                was while building this application that I grasped React
                concepts I was learning such as state management with the
                useState hook, passing props, data fetching with axios and
                useEffect ...and much more.
              </div>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Work;
