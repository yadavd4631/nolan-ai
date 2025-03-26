import React, { useState } from "react";
import {
  CirclePlus,
  FolderClosed,
  FolderOpen,
  Clapperboard,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import VideoUpload from "../comonents/VideoUpload";




const Dashboard = () => {
  const navigate = useNavigate()
  const [show ,setShow] = useState(false)

  const onclickvideoupload = () => {
    setShow(()=>(!show))
  };
 
      const readmehandler =()=>{
          navigate("/About")
      }
 

    const clicktyt = ()=>{
      window.location.href = "https://www.youtube.com/@NolanAI";
    }

  return (
    <div className="w-[100%] h-[100%] flex overflow-hidden">
      <div className="w-[5%] h-screen bg-[#dde0eb]">
        <span
          onClick={onclickvideoupload}
          className="flex justify-center items-center  rounded-xl bg-zinc-400 h-12 w-12 m-2 cursor-pointer"
        >
          <CirclePlus />
        </span>
      </div>
      <hr className="border-1 bg-zinc-600 h-[100%]" />
      <div className="w-[95%] h-screen bg-sky-100">
        <div className="w-[100%] h-[10%] bg-[#dde0eb] flex items-center justify-start -mt-0">
          <button className=" flex gap-2 bg-white text-blue-500 w-[140px] h-12 mb-6 rounded-3xl items-center ml-6 mt-7 ">
            <span className="ml-2">
              <FolderClosed />
            </span>
            My Projects
          </button>
          <button className=" flex gap-2 p-3 rounded-3xl items-center ml-6 text-zinc-600 ">
            <FolderOpen />
            Shared with me
          </button>
        </div>
        <div className="w-full h-[20%] bg-[#b8bdcc] flex gap-5">
          <div className="flex items-center ml-3 gap-5 border-2 w-[47%] h-[80%] mt-3 rounded-2xl bg-white">
            <img
              className="w-20 rounded-full bg-black h-20 ml-3  "
              src="https://www.nolanai.app/_next/image?url=%2Fimages%2Fannapolis-logo.png&w=1200&q=75"
              alt=""
            />
            <div className=" ">
              <h1 className="font-semibold text-black">
                NolanAI x Annapolis Film Fest
              </h1>
              <p className="text-zinc-700">
                Supporting the next wave of storytellers! 🎬
              </p>
              <button
                onClick={readmehandler}
                className="bg-sky-300 rounded-3xl p-2 mt-2 cursor-pointer"
              >
                Read more →
              </button>
            </div>
          </div>
          <div className="flex items-center ml-3 gap-5 border-2 w-[47%] h-[80%] mt-3 rounded-2xl bg-white">
            <img
              className="w-20 rounded-full bg-black h-20 ml-3  "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6M5eWi10n0ifX5Zo0e9k4kKX6vk2S3bYTfoSrDohFfrgjYZEoqAXkCIY&s"
              alt=""
            />
            <div>
              <h1 className="font-semibold text-black">
                Follow Us on YouTube!
              </h1>
              <p className="text-zinc-700">
                Watch exclusive filmmaker interviews & behind-the-scenes
                insights.
              </p>
              <button
                onClick={clicktyt}
                className="bg-sky-300 rounded-3xl p-2 mt-2 cursor-pointer"
              >
                🔔 Subscribe Now →
              </button>
            </div>
          </div>
        </div>
        <hr className="border-2 bg-black w-full" />

        <div className="w-full h-[70%] bg-[#dde0eb] flex flex-col items-center justify-center">
          <h1 className="text-blue-500 border-2 rounded-full h-20 w-20 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="90"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-folder-up"
            >
              <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
              <path d="M12 10v6" />
              <path d="m9 13 3-3 3 3" />
            </svg>
          </h1>
          <h1 className="text-black font-bold mt-4">
            Start Your First Project
          </h1>
          <p className="text-zinc-600 text-center">
            Every great story begins with a first scene.{" "}
          </p>
          <p className="text-zinc-600 text-center">
            Set the stage for your pre-production project or create a video
            instantly.
          </p>
          <div className="flex gap-4 mt-4">
            <button
              onClick={onclickvideoupload}
              className="bg-sky-500 p-4 rounded-full flex gap-2 items-center cursor-pointer"
            >
              <Clapperboard /> Create AI Video
            </button>
            <button
              onClick={onclickvideoupload}
              className="bg-blue-600 p-4 rounded-full flex gap-2 items-center cursor-pointer"
            >
              <CirclePlus /> Start New Project
            </button>
          </div>
        </div>
      </div>
     
      {show && <VideoUpload close={() => setShow(false)} />}
    </div>
  );
};

export default Dashboard;
