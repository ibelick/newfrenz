import LayoutCard from "components/LayoutCard";
import Button from "components/Button";
import ImageNFT from "components/ImageNFT";
import Link from "next/Link";

const NftIntro2 = () => {
  return <LayoutCard card={<EthereumCard />} />;
};

const EthereumCard = () => {
  return (
    <div>
      <div className="text-center">
        <span className="text-3xl">⚉</span>
        <h2 className="text-xl font-bold mt-8">What is an NFT?</h2>

        <p className="mt-2 mb-6 text-gray-300">
          NFTs are tokens that we can use to represent ownership of unique
          items. They let us tokenise things like art, collectibles, even real
          estate. They can only have one official owner at a time and they're
          secured by the Ethereum blockchain – no one can modify the record of
          ownership or copy/paste a new NFT into existence.
        </p>
      </div>
      <div className="flex justify-center">
        <ImageNFT
          contractAddress="0xd871eeb105a748d2578ecf9a8e3ebba83396dab4"
          tokenId="3"
        />
      </div>
      <div className="mt-12 flex justify-between">
        <Link href="/onboard/nft-intro">
          <Button variant="tertiary">← Back</Button>
        </Link>
        <Link href="/onboard/nft-intro-3">
          <a>
            <Button>Next</Button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NftIntro2;
