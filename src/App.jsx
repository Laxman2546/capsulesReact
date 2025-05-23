import React from "react";
import capsuleImg from "./assets/images/capsule.png";
import Arrow from "./assets/images/asset34.svg";
import Hamburger from "./assets/images/asset31.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const App = () => {
  return (
    <>
      <main className="w-full h-[100vh] relative">
        <div className="w-full h-screen p-2 absolute ">
          <img
            src={capsuleImg}
            className="w-full h-[98vh] rounded-[40px] object-cover"
          />
        </div>
        <div>
          <div className="z-[10] absolute top-0 flex flex-row justify-between w-full">
            <div className=" flex flex-row  px-5 ">
              <h1 className="text-[180px] font-semibold text-[#F4EFE7] font-hostgrotesk leading-normal tracking-tight relative bottom-10">
                Capsules
              </h1>
              <h1 className="text-[100px] font-semibold text-[#F4EFE7] font-hostgrotesk leading-normal tracking-tight relative top-20">
                ®
              </h1>
            </div>
            <div className="p-7">
              <a
                href="/"
                className=" flex flex-row bg-[#F4EFE7] rounded-4xl pl-5 pr-1 p-1"
              >
                <button className="  text-[13px] font-hostgrotesk cursor-pointer">
                  Reserve
                </button>
                <img
                  src={Arrow}
                  className="w-8 bg-[#181717] rounded-full p-2 ml-2"
                />
              </a>
            </div>
          </div>
          <div className="z-[10] absolute bottom-0 flex flex-row justify-between items-end w-full p-10">
            <div>
              <h1 className="text-[#F4EFE7] text-3xl font-hostgrotesk font-medium leading-8">
                Closer to <br /> Nature—Closer
                <br /> to Yourself
              </h1>
            </div>
            <div>
              <a
                href="/"
                className=" flex flex-row gap-2 bg-[#F4EFE7] rounded-4xl pl-7 pr-1 p-1"
              >
                <button className="  text-[13px] font-hostgrotesk cursor-pointer">
                  Menu
                </button>
                <img
                  src={Hamburger}
                  className="w-8 bg-[#181717] rounded-[50%] p-2 ml-2"
                />
              </a>
            </div>
            <div>
              <h1 className="text-[#F4EFE7] text-[12px] font-hostgrotesk font-medium leading-4">
                Spend unforgettable and remarkable time <br />
                in the Californian desert with—Capsules.
              </h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
