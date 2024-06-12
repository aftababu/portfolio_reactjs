import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { github } from "../../assets/icons";
import ShareBtn from "../../components/ui/ShareBtn";
import VisitProjectBtn from "../../components/ui/VisitProjectBtn";

const ProjectDetail = ({ projectDetail,modal }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [rating, setRating] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };
  const handleRating = (value) => {
    setRating(value);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    nextArrow: (
      <svg
        className=""
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <path fill="rgb(22 101 52)" d="M7 1L5.6 2.5L13 10l-7.4 7.5L7 19l9-9z" />
      </svg>
    ),
    prevArrow: (
      <svg
        className=""
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <path fill="rgb(22 101 52)" d="m4 10l9 9l1.4-1.5L7 10l7.4-7.5L13 1z" />
      </svg>
    ),
  };

  return (
    <>
      <div className={`${!modal ? "z-40 mx-auto w-[99vw] xs:w-[95vw] sm:max-w-[90%] lg:w-[85%]  md:ml-8 sm:ml-4":''}`}>
        <Slider {...settings}>
          {projectDetail.images.map((item, index) => (
            <img
              className="  rounded-md shadow-md px-1"
              src={item.url}
              alt={`image ${index + 1}`}
              key={index + 769834}
            />
          ))}
        </Slider>
      </div>

      <div className="flex flex-col w-[95%] mx-auto mb-3">
        <div className="flex items-center justify-between md:mr-6">
          <h1 className="text-xl xs:text-2xl sm:text-3xl font-semibold green-gra mr-3 mb-3 mt-5">
            {projectDetail.title}
          </h1>
          <a
            title="Github repositrory of this project"
            href={projectDetail.github}
            target="_blank"
            className="w-fit h-fit text-green-800 cursor-pointer"
          >
            <img className="md:w-8 w-6 h-auto" src={github} alt="github" />code
          </a>
        </div>
        <p className="sm:pb-0 pb-3 text-[10px] xs:text-[12px] sm:text-[15px]/5 text-gray-500  ">
          {projectDetail.description}
        </p>
      </div>

     
        <div className="flex flex-wrap lg:flex-nowrap gap-2 sm:gap-3">
          {projectDetail.language.split(",").map((item, index) => (
            <button
              key={index + 2412}
              type="button"
              className="whitespace-nowrap rounded-full border-2 border-green px-3 sm:px-6 pb-[3px] xs:pb-[6px] pt-1 xs:pt-2 text-[8px] xs:text-xs font-medium uppercase leading-normal text-green-700 transition duration-150 ease-in-out    hover:text-green-600 focus:border-green-600 focus:text-green-600 focus:outline-none focus:ring-0 active:border-green-500 active:text-green-500 -100"
            >
              {item}
            </button>
          ))}
        </div>
      <div className="flex justify-end gap-3 md:pr-8">
        <ShareBtn
          className={"bg-green-200 text-green-950 px-3 p-2 text-xs"}
          url={projectDetail.projectUrl}
        />
        <VisitProjectBtn btn url={projectDetail.projectUrl} />
      </div>
    </>
  );
};

export default ProjectDetail;
