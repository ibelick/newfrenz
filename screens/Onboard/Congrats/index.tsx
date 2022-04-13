import Layout from "components/Layout";
import Button from "components/Button";
import Link from "next/Link";

const OnboardCongrats = () => {
  return <Layout card={<CongratsCard />} text={<CongratsText />} />;
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
    <div>
      <h2 className="text-sm font-bold">Want to support us?</h2>
      <p className="mt-4 mb-4 text-sm text-gray-500">
        An Ethereum account is an entity that can send transactions and has a
        balance. An Ethereum account has an Ethereum address, like an inbox has
        an email address. You can use this to send funds to an account.
      </p>
    </div>
  );
};

export default OnboardCongrats;
