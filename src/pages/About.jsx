
import { skills } from "../constance";
import CTA from "../components/CTA";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Modal from "../components/ui/Modal";

const About = ({ ref }) => {
  const [isAnimationPaused, setAnimationPaused] = useState(true);
  const [showFullLetter, setShowFullLetter] = useState(false);

  const toggleShowFullLetter = () => {
    setShowFullLetter(!showFullLetter);
  };

  const toggleAnimation = () => {
    setAnimationPaused((prevState) => !prevState);
  };

  const degree = "Bachelor's Degree";
  const sscExam = {
    year: 2021,
    board: "Board of Secondary Education",
    result: "GPA 5.00",
  };
  const hscExam = {
    year: 2023,
    board: "Board of Intermediate and Secondary Education",
    result: "GPA 3.92",
  };
  const school = "Chittagong Govt. model school and college";
  const college = "Chittagong Govt. model school and college";
  const certificates = ["no certificate is viewing for now"];

  return (
    <section className="max-container" id="about" ref={ref}>
      <div className="relative">
        <button
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow animate-dancing-border z-20"
          onClick={toggleAnimation}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path
              id="play"
              d="M5 3l14 9-14 9V3z"
              style={{ display: isAnimationPaused ? "block" : "none" }}
            ></path>
            <path
              id="pause"
              d="M4 4h4v16H4zM16 4h4v16h-4z"
              style={{ display: isAnimationPaused ? "none" : "block" }}
            ></path>
          </svg>
        </button>
      </div>

      <div
        className={`relative ${isAnimationPaused ? "" : "animate-waving"} `}
      >
        <div className="grid grid-cols-3 items-center bg-gray-100 py-10">
          <div className="col-span-3 sm:col-span-2 mx-auto text-center">
            <h1 className="text-4xl md:text-6xl text-green-900 font-bold mb-4">
              Assalamualaikum, I'm
              <span className="text-green-600 ml-2">Wasih</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Junior Full Stack Web Developer from Bangladesh. Passionate about
              creating beautiful and functional websites. Experienced in React,
              JavaScript, TypeScript, and Express.js. My portfolio showcases my
              projects. Let's explore together!
            </p>
          </div>

          <div className="flex justify-center sm:col-span-1 col-span-3 my-3">
            <img
              src="/wasih.jpeg"
              className={`w-64 md:w-80 rounded-full object-cover border-4 border-green-900 ${
                isAnimationPaused ? "" : "animate-waving"
              }`}
              alt="Wasih"
            />
          </div>
        </div>
        <div
          className={`absolute inset-0 ${
            isAnimationPaused ? "" : "animate-dancing-border"
          } `}
        ></div>
        <style>
          {`
    @keyframes waving {
      0% {
        width: 100%;
        border-radius: 92% 40% 65% 85%/60% 30% 67% 66%;
      }
      25% {
        width: 75%;
        border-radius: 92% 40% 65% 85%/60% 30% 67% 66%;
      }
      50% {
        width: 50%;
        border-radius: 30% 51% 94% 67%/90% 60% 74% 60%;
      }
      75% {
        width: 75%;
        border-radius: 60% 40% 30% 38%/49% 54% 83% 56%;
      }
      100% {
        width: 100%;
        border-radius: 92% 40% 65% 85%/60% 30% 67% 66%;
      }
    }
    @keyframes dancing-border {
      0% {
        border-color: transparent;
      }
      25% {
        border-color: #f6ad55;
      }
      50% {
        border-color: #38a169;
      }
      75% {
        border-color: #3182ce;
      }
      100% {
        border-color: #9f7aea;
      }
    }
    .animate-waving {
      animation-name: waving;
      animation-duration: 10s;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      overflow: hidden;
    }
    .animate-dancing-border {
      animation-name: dancing-border;
      animation-duration: 3s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      position: absolute;
      border: 4px solid;
      border-radius: inherit;
    }
    @media (max-width: 640px) {
      .animate-waving {
        animation-name: none;
      }
  `}
        </style>
      </div>

      <div className="sm:py-10 flex flex-col">
        <h3 className="subhead-text text-center text-2xl md:text-3xl font-bold text-green-900 mb-5">
          My Skills
        </h3>
        <div className="mt-5 sm:mt-16 flex flex-wrap justify-center gap-4 sm:gap-12 items-center">
          {skills.map((s) => (
            <div key={s.name} className="w-18 sm:w-32 flex justify-center">
              <Modal>
                <Modal.Open opens={s.name}>
                  <div title={s.type}>
                    <img
                      src={s.imageUrl}
                      className="w-full h-auto object-contain"
                      alt={s.name}
                    />
                  </div>
                </Modal.Open>
                <Modal.Window name={s.name}>
                  <div className="p-4 text-green-900 text-center z-10 w-[90vw]">
                    <p className="text-lg font-bold mb-2">{s.name}</p>
                    <p className="text-sm">{s.description}</p>
                  </div>
                </Modal.Window>
              </Modal>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:mt-0 mt-5 items-start">
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-green-500 px-6 py-4">
            <h2 className="text-xl font-bold text-white">Education</h2>
          </div>
          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-2">{degree}</h3>
              <p className="text-gray-600">SSC Exam ({sscExam.year})</p>
              <p className="text-gray-600">Board: {sscExam.board}</p>
              <p className="text-gray-600">Result: {sscExam.result}</p>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-2">{degree}</h3>
              <p className="text-gray-600">HSC Exam ({hscExam.year})</p>
              <p className="text-gray-600">Board: {hscExam.board}</p>
              <p className="text-gray-600">Result: {hscExam.result}</p>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-2">School</h3>
              <p className="text-gray-600">{school}</p>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-2">College</h3>
              <p className="text-gray-600">{college}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Certificates</h3>
              <ul className="list-disc ml-6">
                {certificates.map((certificate, index) => (
                  <li key={index} className="text-gray-600">
                    {certificate}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="sm:py-10 py-5">
          <div className="mt-3 flex flex-col gap-3 text-slate-500">
            <div className="bg-green-950/80 min-h-screen flex justify-center items-center">
              <div className="max-w-4xl text-center text-white p-8">
                <h1 className="text-5xl font-bold mb-8">
                  JUNIOR FULL STACK WEB DEVELOPER
                </h1>
                <h2 className="text-3xl font-medium mb-4">FROM BANGLADESH</h2>
                {showFullLetter ? (
                  <>
                    <p className="text-lg">Passionate. Creative. Skilled.</p>
                    <p className="text-lg mt-8">Welcome to my portfolio!</p>
                    <p className="text-lg">
                      I am a Junior Full Stack Web Developer from Bangladesh,
                      dedicated to crafting stunning and functional websites.
                    </p>
                    <p className="text-lg">
                      With expertise in React, JavaScript, TypeScript, and
                      Express.js, I bring ideas to life and deliver exceptional
                      user experiences.
                    </p>
                    <p className="text-lg mt-8">
                      From captivating front-end interfaces to robust back-end
                      functionalities, I create seamless web solutions that
                      leave a lasting impression.
                    </p>
                    <p className="text-lg mt-8">
                      My portfolio showcases a collection of projects, each
                      meticulously designed and coded by me.
                    </p>
                    <p className="text-lg mt-8">
                      Join me on this exciting journey as I continue to push
                      boundaries, solve complex problems, and make the web a
                      more beautiful and functional place.
                    </p>
                    <p className="text-lg mt-8">
                      Let's create something extraordinary together!
                    </p>
                    <span
                      className="text-blue-500 underline"
                      onClick={toggleShowFullLetter}
                    >
                      show less
                    </span>
                  </>
                ) : (
                  <p className="text-lg">
                    I am a Junior Full Stack Web Developer from Bangladesh,
                    dedicated to crafting stunning and functional websites.{" "}
                    <button
                      className="text-blue-500 underline"
                      onClick={toggleShowFullLetter}
                    >
                      Read More
                    </button>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:py-16 py-10">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-3 flex flex-col gap-3 text-slate-500">
          <p className="text-xs sm:text-base">
            When it comes to my experience, I have had the opportunity to work
            on numerous projects independently. Each project has been a valuable
            learning experience and has allowed me to hone my skills as a
            developer.
            <br />
            <br />
            From crafting visually captivating user interfaces to implementing
            complex functionalities, I have taken on diverse challenges in my
            journey. I have leveraged my expertise in technologies such as
            React, JavaScript, and Express.js to bring these projects to life.
            <br />
            <br />
            You can explore some of my notable projects by visiting the&nbsp;
            <NavLink to={"/projects"} className={"text-green-600"}>
              Projects
            </NavLink>
            &nbsp;section of my portfolio. Each project showcases my dedication
            to creating innovative solutions and delivering exceptional results.
          </p>
        </div>
      </div>

      <hr className=" border-slate-200" />
      <CTA />
    </section>
  );
};

export default About;
