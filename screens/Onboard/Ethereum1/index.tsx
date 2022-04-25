import LayoutCard from "components/LayoutCard";
import Button from "components/Button";
import Link from "next/link";

const OnboardEthereum1 = () => {
  return <LayoutCard card={<EthereumCard />} />;
};

const EthereumCard = () => {
  return (
    <div>
      <div className="text-center">
        <span className="text-3xl">⚉</span>
        <h2 className="text-xl font-bold mt-8">Many blockchains exist</h2>
        <p className="text-gray-400 mt-2 mb-8">
          Just like any service, different blockchains exist. More and more
          efficient ones keep emerging.
        </p>
        <img src="/eth.png" className="w-1/3 m-auto mt-12 mb-12" />
        <p>
          The most popular blockchain is{" "}
          <span className="text-white bg-gray-700 rounded font-bold px-2 py-1">
            Ethereum
          </span>{" "}
          and that’s the one we are gonna use for this onboarding!
        </p>
      </div>
      <div className="mt-12 flex justify-between">
        <Link href="/onboard/blockchain">
          <a>
            <Button variant="tertiary">← Back</Button>
          </a>
        </Link>
        <Link href="/onboard/ethereum-2">
          <a>
            <Button>Next</Button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default OnboardEthereum1;
