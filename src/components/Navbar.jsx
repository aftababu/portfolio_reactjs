import {  NavLink, useLocation } from "react-router-dom";
import { navLinks, socialLinks } from "../constance";
import { useState } from "react";

const Navbar = ({ singlePage }) => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation()

  return (
    <header className={`absolute ${location.pathname === "/3d" ? "bg-transparent" : "bg-gray-100 "} shadow-md z-50 flex justify-between items-baseline overflow-hidden w-screen pl-2 pr-[5vw] sm:pl-8 py-2 sm:py-4 m-0`}>
      <NavLink to={"/"}>
        <img
          className="max-w-[70px] xs:max-w-[100px] lg:max-w-[100px] "
          src="/webLogo.png"
          alt="logo"
        />
      </NavLink>
      <MobileView toggle={toggle} setToggle={setToggle} />

      <nav className="hidden sm:flex self-start text-[17px] md:text-[20px] gap-7 font-medium ">
        <NavList
          singlePage={singlePage}
          toggle={toggle}
          setToggle={setToggle}
        />
      </nav>
    </header>
  );
};

export default Navbar;

const NavList = ({ toggle, singlePage }) => {
  const getNavLinkClasses = (item) =>
    `transition-colors hover:text-green-900 text-white sm:text-green-900/80 ${
      item.label === "Single page" ? "hidden" : ""
    }`;
  return (
    <>
      {navLinks.map((item) =>
        singlePage ? (
          <>
            <a
              key={item.label}
              href={item.id}
              className={getNavLinkClasses(item)}
            >
              {item.label}
            </a>
          </>
        ) : (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "text-green-600 "
                : "transition-colors hover:text-green-900 text-white  sm:text-green-900/80"
            }
          >
            {item.label}
          </NavLink>
        )
      )}
      {singlePage && (
        <NavLink key={"987595"} to={"/contact"} className={'text-md text-green-600'}>
          cencel
        </NavLink>
      )}
    </>
  );
};
const MobileView = ({ setToggle, toggle }) => (
  <>
    <div className="flex sm:hidden self-start px-4 py-3 fixed top-0 right-0">
      {!toggle ? (
        <button onClick={() => setToggle(true)} className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M3.497 15.602a.7.7 0 1 1 0 1.398H.7a.7.7 0 1 1 0-1.398h2.797Zm15.803 0a.7.7 0 1 1 0 1.398H5.529a.7.7 0 1 1 0-1.398H19.3ZM3.497 9.334a.7.7 0 1 1 0 1.399H.7a.7.7 0 1 1 0-1.399h2.797Zm15.803 0a.7.7 0 1 1 0 1.399H5.528a.7.7 0 1 1 0-1.399H19.3ZM3.497 3a.7.7 0 1 1 0 1.398H.7A.7.7 0 1 1 .7 3h2.797ZM19.3 3a.7.7 0 1 1 0 1.398H5.528a.7.7 0 1 1 0-1.398H19.3Z"
            />
          </svg>
        </button>
      ) : (
        <div className="sm:hidden inline-block bg-green-900/50 text-white rounded-lg">
          <span
            className="flex justify-end w-8 ml-auto  pt-2 pr-1 cursor-pointer"
            onClick={() => setToggle(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M18.36 19.78L12 13.41l-6.36 6.37l-1.42-1.42L10.59 12L4.22 5.64l1.42-1.42L12 10.59l6.36-6.36l1.41 1.41L13.41 12l6.36 6.36z"
              />
            </svg>
          </span>
          <nav className="flex flex-col gap-3 text-center px-4 pb-3">
            <NavList />
            <div className="flex gap-1 mt-2">
              <SocialIcons />
            </div>
          </nav>
        </div>
      )}
    </div>
  </>
);

const SocialIcons = () => {
  return (
    <>
      {socialLinks.map((item) => (
        <a href={item.link} key={item.name} target="_blank">
          <img
            className="w-6 sm:w-8 h-auto"
            src={item.iconUrl}
            alt={item.name}
          />
        </a>
      ))}
    </>
  );
};
