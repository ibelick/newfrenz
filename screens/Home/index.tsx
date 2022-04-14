import Button from "components/Button";
import LayoutCard from "components/LayoutCard";
import Link from "next/Link";

const Home = () => {
  return <LayoutCard card={<Card />} />;
};

const Card = () => {
  return (
    <div className="text-center">
      <span className="text-3xl">⚉</span>
      <h2 className="text-xl font-bold mt-8">Welcome to Onboarding</h2>
      <p className="text-gray-400 mt-2 mb-8">
        Enter the web3 world in a simple and fun way!
      </p>
      <div className="w-full h-0.5 bg-white mt-8 mb-8 opacity-10"></div>
      <div className="text-sm mb-8">
        <p className="mb-4 font-bold">In this onboarding you will see:</p>
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
