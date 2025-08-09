import React from "react";

const Background = () => {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen">
        <div className="absolute top-[5%] flex justify-center text-xl text-zinc-600 font-semibold w-full py-10">
          Documents
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-semibold leading-none tracking-tighter text-zinc-900">
          Docs.
        </h1>
      </div>
    </>
  );
};

export default Background;
