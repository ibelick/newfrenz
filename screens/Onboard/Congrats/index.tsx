import LayoutOnboard from "components/LayoutOnboard";
import Button from "components/Button";
import Link from "next/Link";

const OnboardCongrats = () => {
  return <LayoutOnboard card={<CongratsCard />} text={<CongratsText />} />;
};

const CongratsCard = () => {
  return (
    <div>
      <div className="text-center">
        <span className="text-3xl">⚉</span>
        <h2 className="text-xl font-bold mt-8">Congrats!</h2>
        <p className="text-gray-400 mt-2 mb-8">
          You made it! You are now ready to explore the world of crypto and
          web3.
        </p>
        <div className="text-sm mb-8">
          <div className="w-full h-0.5 bg-white mt-8 mb-8 opacity-10"></div>
          <p className="mb-4 font-bold">You've learned:</p>
          <div className="text-white mb-8">
            <p>
              <span className="text-indigo-600">▪︎</span> How to create a wallet
            </p>
            <p>
              <span className="text-indigo-600">▪︎</span> How to connect to web3
              applications
            </p>
            <p>
              <span className="text-indigo-600">▪︎</span> Manage transactions
            </p>
            <p>
              <span className="text-indigo-600">▪︎</span> Mint an NFT
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Button>Share on Twitter</Button>
            <Link href="/whatsnext">
              <a className="mt-6 underline">What's next?</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const CongratsText = () => {
  return (
    <div className="text-sm">
      <h2 className="font-bold mb-4">Who are behing this?</h2>
      <p className="text-gray-400 mb-8">
        <a
          href="https://twitter.com/ibelick"
          target="_blank"
          className="underline"
        >
          @ibelick
        </a>
        {" & "}
        <a
          href="https://twitter.com/smoooogy"
          target="_blank"
          className="underline"
        >
          @smoooogy
        </a>{" "}
        for the Hello NFT World: OpenSea x Replit Hackathon
      </p>
      <h2 className="font-bold mb-4">
        Where do we want to move forward with this project?
      </h2>
      <p className="mb-8 text-gray-400">
        We have a lot of ideas. You can check{" "}
        <Link href="/whatsnext">
          <a className="underline">What's next?</a>
        </Link>{" "}
        page.
      </p>
      <h2 className="font-bold mb-4">Want to support us?</h2>
      <p className="mb-8 text-gray-400">
        You drop a DM to us on Discord if you have extra ideas for the project
        (Ibelick#2769, smoogy#9640). We also accept donations at
        0x33289d5fb9054d7D01Aa7178d7F4E48EFdAEe9EC.
      </p>
      <h2 className="font-bold mb-4">References</h2>
      <ul className="list-inside text-gray-400 list-decimal">
        <li className="mb-2">
          Positive Sum Worlds: Remaking Public Goods by Toby Shorin, Sam Hart,
          Laura Lotti
        </li>
        <li className="mb-2">Credible Neutrality by Vitalik Buterin</li>
        <li className="mb-2">The Network State by Balaji Srinivasan</li>
      </ul>
    </div>
  );
};

export default OnboardCongrats;
