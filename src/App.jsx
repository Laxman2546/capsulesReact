import React from "react";
import capsuleImg from "./assets/images/capsule.png";

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
        <div className="z-[10] absolute top-0">
          <div className=" flex flex-row items-end px-5">
            <h1 className="text-[150px] font-semibold text-[#F4EFE7] font-hostgrotesk leading-normal tracking-tighter">
              Capsules
            </h1>
            <h1>®</h1>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
