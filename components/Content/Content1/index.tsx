import React from "react";
import Button from "components/Button";

const Information = () => {
  return (
    <div>
      <div className="text-center">
        {" "}
        <span className="text-3xl">⚉</span>
        <h2 className="text-xl font-bold mt-8">Welcome to Onboarding</h2>
        <p className="text-gray-400 mt-2 mb-8">
          We created this interactive onboarding to help you get into web3 a
          simple and fun way. In 5 minutes, you will understand the basics and
          mint your first NFT for free!
        </p>
        <Button>Get started</Button>
      </div>
    </div>
  );
};

export default Information;
