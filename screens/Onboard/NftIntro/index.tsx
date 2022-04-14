import LayoutCard from "components/LayoutCard";
import Button from "components/Button";
import ImageNFT from "components/ImageNFT";
import Link from "next/Link";

const NftIntro = () => {
  return <LayoutCard card={<EthereumCard />} />;
};

const EthereumCard = () => {
  return (
    <div>
      <div className="text-center">
        <img src="/checked.svg" className="w-20 m-auto mt-12 mb-4" />
        <h2 className="text-xl font-bold mt-8">Great! Let's see where we at</h2>
        <div className="text-white mt-8">
          <p className="mb-4">
            <span className="text-indigo-600">▪︎</span> You understand the
            basics principles of web3
          </p>
          <p className="mb-4">
            <span className="text-indigo-600">▪︎</span> You have a wallet and
            started using it
          </p>
          <p className="mb-4">
            <span className="text-indigo-600">▪︎</span> You learn what a Testnet
            is and how you can learn with fake money
          </p>

          <p>
            <span className="text-indigo-600">▪︎</span> You used a faucet to get
            some fake ETH
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        {/* <ImageNFT
          contractAddress="0xd871eeb105a748d2578ecf9a8e3ebba83396dab4"
          tokenId="3"
        /> */}
      </div>
      <div className="mt-12 flex justify-between">
        <Link href="/onboard/faucet">
          <a>
            <Button variant="tertiary">← Back</Button>
          </a>
        </Link>
        <Link href="/onboard/nft-intro-2">
          <a>
            <Button>I'm ready to mint an NFT</Button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NftIntro;
