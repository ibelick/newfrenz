import LayoutCard from "components/LayoutCard";
import Button from "components/Button";
import ImageNFT from "components/ImageNFT";
import Link from "next/Link";

const OnboardEthereum4 = () => {
  return <LayoutCard card={<EthereumCard />} />;
};

const EthereumCard = () => {
  return (
    <div>
      <div className="text-center">
        <span className="text-3xl">⚉</span>
        <h2 className="text-xl font-bold mt-8">What is a dApp exactly?</h2>
        <p className="text-gray-400 mt-2 mb-8">
          dApp means decentralized applications. Those are services hosted on
          the blockchain.
        </p>
        <img src="/dapp.svg" className="w-3/4 m-auto mt-12 mb-4" />
        <div className="bg-zinc-900 text-sm mb-8 m-8 px-8 py-8">
          <p className="mb-4 font-bold">In this onboarding you will see:</p>
          <div className="text-white">
            <p className="mb-4">
              <span className="text-indigo-600">▪︎</span> Anyone can use a Dapp,
              you only need internet and a wallet
            </p>
            <p className="mb-4">
              <span className="text-indigo-600">▪︎</span> You don't need to
              provide all your personal details to use an Ethereum app.
            </p>
            <p>
              <span className="text-indigo-600">▪︎</span> How the dApp works
              (the code) can be seen by anyone on the blockchain
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        {/* <ImageNFT
          contractAddress="0xd871eeb105a748d2578ecf9a8e3ebba83396dab4"
          tokenId="3"
        /> */}
      </div>
      <div className="mt-12 flex justify-between">
        <Link href="/onboard/ethereum-3">
          <Button variant="tertiary">← Back</Button>
        </Link>
        <Link href="/onboard/ethereum-5">
          <a>
            <Button>Next</Button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default OnboardEthereum4;
