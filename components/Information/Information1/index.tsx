import React from "react";

const Information = () => {
  return (
    <div>
      <div>
        {" "}
        <h2 className="text-sm font-bold">Who created this?</h2>
        <ul className="mt-4 text-sm text-gray-500">
          <li>
            We are LOOP CLUB, a squad part of playgrounds.wtf a community
            building cool web3 stuff, you can follow us on Twitter
          </li>
        </ul>
      </div>
      <div className="mt-8">
        {" "}
        <h2 className="text-sm  font-bold">Links</h2>
        <ul className="mt-4  text-sm text-gray-500">
          <li>Playgrounds.wtf</li>
          <li>Twitter</li>
        </ul>
      </div>
    </div>
  );
};

export default Information;
