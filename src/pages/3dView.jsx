import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import Loader from "../components/Loader";
import Island from "../models/island";
import HomeInfo from "../components/HomeInfo";
import islanAudio from "../assets/islanAudio.mp3";
import { soundoff, soundon } from "../assets/icons";
import WalkingMan from "../models/WalkingMan";


const Home = () => {
  const audioRef = useRef(new Audio(islanAudio));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentAnimation, setCurrentAnimation] = useState("Walk");
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [isPlaying]);
  const [isRotating, setIsRotating] = useState(false);
  const [currentState, setCurrentState] = useState(1);
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -3, -50];
    let rotation = [0.2, 0, 0];

    if (window.innerWidth < 768) {
      screenScale = [1.75, 1.75, 1.75];
    } else {
      screenScale = [1.9, 1.9, 1.9];
    }
    return [screenScale, screenPosition, rotation];
  };
  const adjustWalkingManForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [1, -4, -2.5];
    let rotation = [0.2, 2, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.3, 0.3, 0.3];
    } else {
      screenScale = [0.5, 0.5, 0.5];
    }
    return [screenScale, screenPosition, rotation];
  };
  const adjustLizardForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [-0.5, -6, -5.5];
    let rotation = [0.2, 2, 0];

    if (window.innerWidth < 768) {
     screenScale = [0.1, 0.1, 0.1];
    } else {
      screenScale = [0.2, 0.2, 0.2];
    }
    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, rotation] = adjustIslandForScreenSize();
  const [walkingManScale, walkingManPosition, walkingManRotation] =
    adjustWalkingManForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentState && <HomeInfo currentState={currentState} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[10, 10, 10]} intensity={1.5} />
          <ambientLight intensity={0.5} />
          <pointLight position={[-10, -10, -10]} />
          <spotLight position={[10, 10, 10]} />
          <hemisphereLight intensity={0.5} />

          <Island
            scale={islandScale}
            position={islandPosition}
            rotation={rotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentState={setCurrentState}
            currentState={currentState}
            setCurrentAnimation={setCurrentAnimation}
          />

          <WalkingMan
            scale={walkingManScale}
            position={walkingManPosition}
            rotation={walkingManRotation}
            isRotating={isRotating}
          />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-2 left-2">
        <img
          src={isPlaying ? soundoff : soundon}
          alt="sound"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setIsPlaying(!isPlaying)}
        />
      </div>
    </section>
  );
};

export default Home;
