import LayoutCard from "components/LayoutCard";
import Button from "components/Button";
import ImageNFT from "components/ImageNFT";
import Link from "next/link";

const OnboardEthereum5 = () => {
  return <LayoutCard card={<EthereumCard />} />;
};

const EthereumCard = () => {
  return (
    <div>
      <div className="text-center">
        <img src="/checked.svg" className="w-20 m-auto mt-12 mb-4" />
        <h2 className="text-xl font-bold mt-8">
          We've seen the basics, now let's get our hands dirty!
        </h2>
        <p className="text-gray-400 mt-2 mb-8">
          In the next section, you will learn how to start using a wallet to
          finally mint an NFT for free!
        </p>
      </div>
      <div className="flex justify-center">
        {/* <ImageNFT
          contractAddress="0xd871eeb105a748d2578ecf9a8e3ebba83396dab4"
          tokenId="3"
        /> */}
      </div>
      <div className="mt-12 flex justify-between">
        <Link href="/onboard/ethereum-4">
          <a>
            <Button variant="tertiary">← Back</Button>
          </a>
        </Link>
        <Link href="/onboard/metamask">
          <a>
            <Button>Next</Button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default OnboardEthereum5;
