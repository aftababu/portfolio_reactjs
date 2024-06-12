import React, { useState } from "react";
import NextBtn, { CencelBtn } from "./TipsBtn";
import useAlert from "../../hooks/useAlert";
import Alert from "../../components/Alert";

const ProjectTips = () => {
  const [showTips, setShowTips] = useState(localStorage.getItem('projectsTips') ? false : true);
  const [currentTip, setCurrentTip] = useState(1);
  const { alert, showAlert, hideAlert } = useAlert();



  const handleStartProject = () => {
    localStorage.setItem('projectsTips',false)
    showAlert({
      show: true,
      text: "Ready to go",
      type: "success",
    });
    setShowTips(false);
    setTimeout(() => {
      setTimeout(() => {
        hideAlert();
      }, [3000]);
    })
  
  };

  const handleCancel = () => {
    setShowTips(false);
  };

  const handleNext = () => {
    setCurrentTip((prevTip) => prevTip + 1);
  };
  return (
    <>
    {alert.show&&<div className="z-50"><Alert  {...alert} /></div> }
      {showTips && (
        <div className="bg-green-950/70 w-screen h-screen absolute inset-0 z-50" >

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-green-100 p-4 rounded-md shadow-2xl ">
          {currentTip === 1 && (
            <>
              <p className="text-lg font-bold text-gray-800 flex justify-between items-center gap-3">
              <b className="text-lg text-green-950 font-bold">Tips 1 : </b>  <span>Double-click to open folder </span>{' '} <img src="/fmini1.svg" alt="" />
              </p>
              <div className="flex items-center justify-end mt-4 text-sm">
                <CencelBtn handleCancel={handleCancel} />
                <NextBtn handleNext={handleNext} />
              </div>
            </>
          )}
          {currentTip === 2 && (
            <>
              <p className="text-lg font-bold text-gray-800">
              <b className="text-lg text-green-950 font-bold">Tips 2 : </b> Recommend to see the ⭐ project
              </p>
              <div className="flex justify-end mt-4">
                <CencelBtn handleCancel={handleCancel} />
                <NextBtn handleNext={handleStartProject} />
              </div>
            </>
          )}
        </div>
      </div>
      )}
    </>
  );
};

export default ProjectTips;
