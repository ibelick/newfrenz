import LayoutCard from "components/LayoutCard";
import Button from "components/Button";
import ImageNFT from "components/ImageNFT";
import Link from "next/Link";

const OnboardEthereum3 = () => {
  return <LayoutCard card={<EthereumCard />} />;
};

const EthereumCard = () => {
  return (
    <div>
      <div className="text-center">
        <span className="text-3xl">⚉</span>
        <h2 className="text-xl font-bold mt-8">
          How ETH is different from traditional money?
        </h2>
        <img src="/own.svg" className="w-4 m-auto mt-12 mb-4" />
        <p className="font-bold">It’s really yours</p>
        <p className="mt-2 mb-6 text-gray-300">
          ETH lets you be your own bank. You can control your own funds with
          your wallet as proof of{" "}
          <span className="text-white bg-gray-700 rounded font-bold px-2 py-1">
            ownership
          </span>{" "}
          – no third parties necessary.
        </p>
        <img src="/decentralized.svg" className="w-4 m-auto mt-12 mb-4" />
        <p className="font-bold">No centralized control</p>
        <p className="mt-2 mb-6 text-gray-300">
          You can send your ETH without any intermediary service like a bank.
          There's no company or bank that can decide to print more ETH, or
          change the terms of use.
        </p>
        <img src="/open.svg" className="w-4 m-auto mt-12 mb-4" />
        <p className="font-bold">Open to everyone</p>
        <p className="mt-2 mb-6 text-gray-300">
          You only need an internet connection and a wallet to accept ETH. You
          don't need access to a bank account to accept payments.
        </p>
      </div>
      <div className="flex justify-center">
        {/* <ImageNFT
          contractAddress="0xd871eeb105a748d2578ecf9a8e3ebba83396dab4"
          tokenId="3"
        /> */}
      </div>
      <div className="mt-12 flex justify-between">
        <Link href="/onboard/ethereum-2">
          <a>
            <Button variant="tertiary">← Back</Button>
          </a>
        </Link>
        <Link href="/onboard/ethereum-4">
          <a>
            <Button>Next</Button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default OnboardEthereum3;
