import Button from "components/Button";
import LayoutOnboard from "components/LayoutOnboard";
import Link from "next/link";
import useNfts from "hooks/useNfts";
import { CONTRACT_ADDRESS } from "utils/contract";

const OnboardNFT = () => {
  return <LayoutOnboard card={<NFTCard />} text={<NFTText />} />;
};

const NFTCard = () => {
  return (
    <div>
      <div className="text-center">
        <span className="text-3xl">⚉</span>
        <h2 className="text-xl font-bold mt-8">What did I mint?</h2>

        <p className="text-gray-400 mt-2 mb-8">
          Here is the NFT you just minted! It's yours and you can verify it on
          the blockchain.
        </p>
        <img className="m-auto mb-8" src="/frame.svg" alt="nft" />
        <p className="text-gray-400 mt-2 mb-8">
          In the future, owning this NFT will give you access to specific
          sections of this website and to a community. Stay tuned!
        </p>
        <Button variant="tertiary">See the collection on Opensea</Button>
        <div className="mt-12 flex justify-between">
          <Link href="/onboard/nft">
            <a>
              <Button variant="tertiary">← Back</Button>
            </a>
          </Link>
          <Link href="/onboard/congrats">
            <a>
              <Button>Next</Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

const NFTText = () => {
  const { collection } = useNfts(CONTRACT_ADDRESS);

  return (
    <div>
      <h2 className="text-sm font-bold mb-2">Recent frenz</h2>
      <div className="flex flex-wrap gap-4">
        {collection?.assets.slice(0, 10).map((asset: any) => {
          return (
            <div key={asset.id}>
              <img src={asset.image_url} alt={asset.id} className="w-20" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OnboardNFT;
