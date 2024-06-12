import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SocialIcons from "./components/SocialIcons.jsx";
import { Home, Projects, About, Contact } from "./pages";

import { useEffect, useState } from "react";
import PageNotFound from "./components/PageNotFound.jsx";

const App = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOnlineStatus);

    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOnlineStatus);
    };
  }, []);

  if (!isOnline) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Unable to Connect to the Internet
        </h1>
        <p className="text-gray-600">
          Please check your internet connection and try again.
        </p>
      </div>
    );
  }
  return (
    <main className="bg-slate-300/20 h-screen overflow-x-hidden">
      <Navbar/>
      <Routes>
          <Route path="/" element={<About />} />
          <Route path="/3d" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
      </Routes>
      <SocialIcons />
    </main>
  );
};

export default App;
