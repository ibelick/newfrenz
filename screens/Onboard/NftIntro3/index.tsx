import LayoutCard from "components/LayoutCard";
import Button from "components/Button";
import ImageNFT from "components/ImageNFT";
import Link from "next/Link";

const NftIntro3 = () => {
  return <LayoutCard card={<EthereumCard />} />;
};

const EthereumCard = () => {
  return (
    <div>
      <div className="text-center">
        <span className="text-3xl">⚉</span>
        <h2 className="text-xl font-bold mt-8">
          Ever heard of minting an NFT?
        </h2>

        <p className="mt-2 mb-6 text-gray-300">
          “Minting” an NFT is, in more simple terms, uniquely publishing your
          token on the blockchain to make it purchasable.
        </p>
      </div>
      <div className="flex justify-center">
        <ImageNFT
          contractAddress="0xd871eeb105a748d2578ecf9a8e3ebba83396dab4"
          tokenId="3"
        />
      </div>
      <div className="mt-12 flex justify-between">
        <Link href="/onboard/nft-intro-2">
          <Button variant="tertiary">← Back</Button>
        </Link>
        <Link href="/onboard/mint">
          <a>
            <Button>Next</Button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NftIntro3;
