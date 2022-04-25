import Button from "components/Button";
import LayoutCard from "components/LayoutCard";
import Link from "next/link";

const Home = () => {
  return (
    <LayoutCard
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

export default Home;
