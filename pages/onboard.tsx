import React from "react";
import Information from "components/Information/Information1";
import Content1 from "components/Content/Content1";

const Onboard = () => {
  return (
    <div className="bg-zinc-900 min-h-screen text-white pt-8 pb-12 font-IBM bg-[url('../utils/bg-gradient.svg')]">
      <div className="h-1 w-48 bg-indigo-600 absolute top-0"></div>
      <div className="lg:w-9/12 m-auto lg:px-0 px-4">
        <header className="flex items-center justify-between">
          <div>→ ONBOARDING</div>
          <div>
            <span>Wallet connected</span>
          </div>
        </header>

        <div className="mt-24 lg:flex ">
          <div className="bg-black lg:w-3/5 rounded-xl py-8 px-8 lg:px-12 border border-gray-800 shadow-2xl ">
            <Content1 />
          </div>
          <div className="lg:ml-12 py-8 lg:w-2/5">
            <Information />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboard;
