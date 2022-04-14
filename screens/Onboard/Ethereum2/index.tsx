import LayoutCard from "components/LayoutCard";
import Button from "components/Button";
import ImageNFT from "components/ImageNFT";
import Link from "next/Link";

const OnboardEthereum2 = () => {
  return <LayoutCard card={<EthereumCard />} />;
};

const EthereumCard = () => {
  return (
    <div>
      <div className="text-center">
        <span className="text-3xl">⚉</span>
        <h2 className="text-xl font-bold mt-8">What is Ethereum?</h2>
        <p className="mt-2 mb-6 text-gray-300">
          Ethereum is a technology that lets you send cryptocurrency to anyone
          for a small fee.
        </p>
        <img src="/eth2.svg" className="w-1/3 m-auto mt-12 mb-12" />
        <p>
          It also powers applications also called{" "}
          <span className="text-white bg-gray-700 rounded font-bold px-2 py-1">
            dApp
          </span>{" "}
          that everyone can use and no one can take down and that’s really
          powerful when you think about it!
        </p>
      </div>
      <div className="flex justify-center">
        {/* <ImageNFT
          contractAddress="0xd871eeb105a748d2578ecf9a8e3ebba83396dab4"
          tokenId="3"
        /> */}
      </div>
      <div className="mt-12 flex justify-between">
        <Link href="/onboard/ethereum-1">
          <Button variant="tertiary">← Back</Button>
        </Link>
        <Link href="/onboard/ethereum-3">
          <a>
            <Button>Next</Button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default OnboardEthereum2;
