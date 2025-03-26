import React from 'react'
import ReactPlayer from "react-player";
import { useNavigate } from 'react-router-dom';
import "remixicon/fonts/remixicon.css";


const Home = () => {
  const navigate = useNavigate()
 
const clickhandler =()=>{
 navigate('/dashboard')
}


  return (
    <div className="w-[100%] h-[100%] bg-zinc-600 overflow-hidden ">
      <div className="flex ml-30 mt-30 w-full h-[500px] ">
        <div>
          <h1 className="h-screen w-full font-extralight text-4xl">
            Bring your film project to life <br /> from
            <span className="text-7xl font-bold"> idea </span> to
            <span className="text-7xl font-black"> production</span>
            <button onClick={clickhandler} className="p-4 bg-sky-400 flex items-center rounded-full mt-25 cursor-pointer ">
              Start Creation
              <span className="gap-2 items-center mt-2">
                <i class="ri-arrow-right-s-line"></i>
              </span>
            </button>
          </h1>
        </div>
        <div className="w-96 h-96 ml-30 ">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=jI2e-LKc5OU"
            playing={true}
            volume={1}
            controls
          />
        </div>
      </div>
      <h1 className="font-bold text-6xl ml-30 ">
        NolanAI is a collaborative film production suite
      </h1>
      <p className=" text-3xl ml-20">
        "covering the full film production process from concept creation and
        screenwriting to planning and stage production"
      </p>
    </div>
  );
}

export default Home