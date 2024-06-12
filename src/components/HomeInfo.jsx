import { Link, NavLink } from "react-router-dom";
import Arrow from "../assets/icons/arrow.svg";

const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>

      <Link className="neo-brutalism-white neo-btn" to={link}>
        {btnText}
        <img className="w-4 h-4 object-contain" src={Arrow} alt="arrow" />
      </Link>
    </div>
  );
};

const renderContent = {
  1: (
    <p className="text-center absolute top-[30vh] left-1/3 z-20 text-[18px] lg:text-2xl text-white  bg-green-500 px-5 py-3 rounded-md">
      Assalamualaikum , I am <span className="font-semibold">Wasih</span> 👋
      <br />A junior web developer from Banglaesh
    </p>
  ),
  2: (
    <InfoBox
      text={"Worked with many company and learned many things"}
      link={"/projects"}
      btnText={"Visit my PortFolio"}
    />
  ),
  3: (
    <InfoBox
      text={"Led multiple projects to success over the years"}
      link={"/"}
      btnText={"Learn More"}
    />
  ),
  4: (
    <InfoBox
      text={
        "Need a project done or looking for a dev ? I'm just a key keystrokes away"
      }
      link={"/contact"}
      btnText={"Contact me"}
    />
  ),
};

const HomeInfo = ({ currentState }) => {
  return renderContent[currentState] || null;
};

export default HomeInfo;
