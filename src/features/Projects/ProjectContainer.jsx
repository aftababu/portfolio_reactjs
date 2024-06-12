import ProjectDetail from "./ProjectDetail";
import Modal from "../../components/ui/Modal";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import ShareBtn from "../../components/ui/ShareBtn";
import VisitProjectBtn from "../../components/ui/VisitProjectBtn";
import Loader from "../../components/ui/Loader";
import ProjectSkeleton from "./ProjectSkeleton";

const ProjectContainer = ({ projects, category }) => {
  const [projectDetailState, setProjectDetailState] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const handleClick = (id) => {
    const projectDetail =
      projects && projects.projects?.filter((p) => p._id === id);
    setProjectDetailState(projectDetail[0]);
  };
  const [imgLoad, setImgLoading] = useState(true);

  const handleImageLoad = () => {
    setImgLoading(false);
  };
  if (!projects) return <Loader />;
  return (
    <>
      <Modal>
        <div className="grid-cols-2 sm:grid lg:grid-cols-3 sm:mr-2 justify-center xs:flex flex-wrap block">
        {projects?.projects.map((item) => (
        <div
          key={item._id + 32832}
          className="hover:scale-105 transition-all cursor-pointer mx-1 mt-3 min-w-[100px] max-w-[300px] sm:min-w-[200px] sm:max-w-[400px] flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(21, 212, 53, 0.04)] dark:bg-green-950 sm:shrink-0 sm:grow sm:basis-0"
        >
          <Modal.Open
            opens={"projectModal"}
            onClick={(e) => handleClick(item._id)}
          >
            <div className="relative">
              {imgLoad ? (
                <>
                <ProjectSkeleton />
                <img src={item.images.at(-1).url} className="hidden opacity-0 translate-x-0" alt="" onLoad={handleImageLoad} />
                </>
              ) : (
                <img
                  className="rounded-t-lg"
                  src={item.images[0].url}
                  alt="Skyscrapers"
                  
                />
              )}
              <div className="absolute bottom-0 w-full px-3 md:py-1 lg:py-2  bg-gradient-to-b from-green-200/10 to-gray-950/60">
                <p className="text-white font-semibold text-md md:text-xl ">
                  {item.title}
                </p>
              </div>
            </div>
          </Modal.Open>
          <hr className="bg-green-950" />
          <div className="justify-around items-center flex  whitespace-pre px-2">
            <ShareBtn className={"text-white  "} url={item.projectUrl} />
            <VisitProjectBtn
              className={"text-white "}
              url={item.projectUrl}
            />
          </div>
        </div>
      ))}
        </div>
        <Modal.Window name={"projectModal"}>
          {!projectDetailState?.images ? (
            <Loader />
          ) : (
            <div className="min-w-[80vw] max-w-[90vw] overflow-scroll overflow-x-hidden h-fit md:h-[85dvh]">
              <ProjectDetail modal={true} projectDetail={projectDetailState} />
            </div>
          )}
        </Modal.Window>
      </Modal>
    </>
  );
};

export default ProjectContainer;
