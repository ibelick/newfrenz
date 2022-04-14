import Button from "components/Button";
import LayoutCard from "components/LayoutCard";
import ImageNFT from "components/ImageNFT";
import Link from "next/Link";

const OnboardBlockchain = () => {
  return <LayoutCard card={<WhatsBlockchain />} />;
};

const WhatsBlockchain = () => {
  return (
    <div>
      <div className="text-center">
        <span className="text-3xl">⚉</span>
        <h2 className="text-xl font-bold mt-8">What's the blockchain</h2>
        <p className="text-gray-400 mt-2 mb-8">
          Unlike a traditional database, a blockchain does not have a single
          owner; instead, it’s accessible to everyone with permission.
        </p>
        <img src="/blockchain.svg" className="w-1/3 m-auto mt-12 mb-12" />
        <p>
          This is why it’s also called a{" "}
          <span className="text-white bg-gray-700 rounded font-bold px-2 py-1">
            decentralized
          </span>{" "}
          system, as there’s no central hub to control the blockchain.
        </p>
        <div className="mt-12 flex justify-between">
          <Link href="/">
            <a>
              <Button variant="tertiary">← Back</Button>
            </a>
          </Link>
          <Link href="/onboard/ethereum-1">
            <a>
              <Button>Next</Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OnboardBlockchain;
