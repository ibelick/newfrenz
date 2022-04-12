import Button from "components/Button";
import Layout from "components/Layout";
import Link from "next/Link";

const Home = () => {
  return <Layout card={<Card />} text={<Text />} />;
};

const Card = () => {
  return (
    <div className="text-center">
      <span className="text-3xl">⚉</span>
      <h2 className="text-xl font-bold mt-8">Welcome to Onboarding</h2>
      <p className="text-gray-400 mt-2 mb-8">
        We created this interactive onboarding to help you get into web3 a
        simple and fun way. In 5 minutes, you will understand the basics and
        mint your first NFT for free!
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
      <Link href="/onboard/metamask">
        <a>
          <Button>Get started</Button>
        </a>
      </Link>
    </div>
  );
};

const Text = () => {
  return (
    <div>
      <h2 className="text-sm font-bold">Who created this?</h2>
      <p className="mt-4 text-sm text-gray-500">
        We are LOOP CLUB, a squad part of playgrounds.wtf a community building
        cool web3 stuff, you can follow us on Twitter
      </p>
      <h2 className="text-sm font-bold mt-8">What's next?</h2>
      <p className="mt-4 text-sm text-gray-500">
        We are LOOP CLUB, a squad part of playgrounds.wtf a community building
        cool web3 stuff, you can follow us on Twitter
      </p>
      <div className="mt-8">
        <h2 className="text-sm font-bold">Content from</h2>
        <ul className="mt-4 text-sm text-gray-500">
          <li>
            <a href="https://ethereum.org" target="_blank">
              Ethereum.org
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
