import React from "react";
import Button from "components/Button";

const Information = () => {
  return (
    <div>
      <div className="text-center">
        {" "}
        <span className="text-3xl">⚉</span>
        <h2 className="text-xl font-bold mt-8">
          Looks like you don’t have a Metamask wallet yet!
        </h2>
        <p className="text-gray-400 mt-2 mb-8">
          In order to follow this interactive onboarding you will need to create
          a Metamask wallet. It only takes a few seconds. First let’s download
          Metamask
        </p>
        <div className="mt-12">
          <Button>Get started</Button>
        </div>
      </div>
    </div>
  );
};

export default Information;
