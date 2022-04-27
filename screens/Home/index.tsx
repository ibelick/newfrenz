import Button from "components/Button";
import LayoutOnboard from "components/LayoutOnboard";
import Link from "next/link";

const OnboardHome = () => {
  return (
    <LayoutOnboard
      card={<Card />}
      banner={
        <a
          href="https://twitter.com/Ibelick/status/1516744408355463168"
          target="_blank"
          rel="noreferrer"
        >
          We won the Hello NFT World: OpenSea x Replit Hackathon! 🎉
        </a>
      }
      text={<HomeText />}
    />
  );
};

const Card = () => {
  return (
    <div className="text-center">
      <img src="/home.svg" className="w-12 m-auto mt-8" />
      <h2 className="text-xl font-bold mt-8">Welcome new frenz!</h2>
      <p className="text-gray-400 mt-2 mb-8">
        Are you ready to enter the web3 world?
      </p>
      <div className="w-full h-0.5 bg-white mt-8 mb-8 opacity-10"></div>
      <div className="text-sm mb-8">
        <p className="mb-4 font-bold">
          In this onboarding you will see how to:
        </p>
        <div className="text-white">
          <p>
            <span className="text-indigo-600">▪︎</span> Get a wallet
          </p>
          <p>
            <span className="text-indigo-600">▪︎</span> Connect to dApp
          </p>
          <p>
            <span className="text-indigo-600">▪︎</span> Explore the blockchain
          </p>
          <p>
            <span className="text-indigo-600">▪︎</span> Mint an NFT
          </p>
        </div>
      </div>
      <Link href="/onboard/blockchain">
        <a>
          <Button>Get started</Button>
        </a>
      </Link>
    </div>
  );
};

const HomeText = () => {
  return (
    <div>
      <h2 className="text-sm font-bold ">UPCOMING TOPICS AND FEATURES</h2>
      <div className="bg-black bg-opacity-20 p-6  mt-4 border-l-2 border-slate-700">
        {" "}
        <h2 className="text-sm font-bold">Testnet to Mainnet</h2>
        <p className="mt-1 text-sm text-gray-400">
          Learn how to buy and transfer real crypto.
        </p>
      </div>
      <div className="bg-black bg-opacity-20 p-6  mt-4 border-l-2 border-slate-700">
        {" "}
        <h2 className="text-sm font-bold">New concepts</h2>
        <p className="mt-1 text-sm text-gray-400">
          Learn more about DAOs, Tokens, Transactions
        </p>
      </div>
      <div className="bg-black bg-opacity-20 p-6  mt-4 border-l-2 border-slate-700">
        {" "}
        <h2 className="text-sm font-bold">Multi-chain</h2>
        <p className="mt-1 text-sm text-gray-400">
          Learn to use different blockchain like Polygon.
        </p>
      </div>
      <div className="bg-black bg-opacity-20 p-6  mt-4 border-l-2 border-slate-700">
        {" "}
        <h2 className="text-sm font-bold">Wallet integrations</h2>
        <p className="mt-1 text-sm text-gray-400">
          Choose between different wallet.
        </p>
      </div>
    </div>
  );
};

export default OnboardHome;
