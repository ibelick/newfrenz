import Button from "components/Button";
import Layout from "components/Layout";
import Link from "next/Link";
import useNft from "hooks/useNft";

const OnboardBlockchain = () => {
  return <Layout card={<WhatsBlockchain />} text={<WhatsBlockchainText />} />;
};

const WhatsBlockchain = () => {
  return (
    <div>
      <div className="text-center">
        <span className="text-3xl">⚉</span>
        <h2 className="text-xl font-bold mt-8">What's blockchain</h2>
        <p className="text-gray-400 mt-2 mb-8">
          A blockchain is a public database that is updated and shared across
          many computers in a network.
        </p>
        <div className="mt-12 flex justify-between">
          <Link href="/">
            <Button variant="tertiary">← Back</Button>
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

const WhatsBlockchainText = () => {
  const { nft, isLoading } = useNft(
    "0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0",
    "33191"
  );

  if (isLoading) {
    return null;
  }

  return (
    <div>
      <img src={nft.image_url} alt={nft.name} />
      <p className="mt-2 text-gray-400">
        {nft.name} by {nft.creator.user.username}.{" "}
        <a
          href="https://opensea.io/assets/0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0/33191"
          target="_blank"
          className="underline"
        >
          Minted as an NFT
        </a>
        .
      </p>
    </div>
  );
};

export default OnboardBlockchain;
