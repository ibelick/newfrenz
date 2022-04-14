import LayoutCard from "components/LayoutCard";
import Button from "components/Button";
import ImageNFT from "components/ImageNFT";
import Link from "next/Link";

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
          Just like any service, different blockchain exists. Right now, people
          are trying to build the most efficient blockchain.
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
      {/* <div>
        <h3 className="mb-4">
          It's open to everyone, wherever you are in the world – all you need is
          the internet.
        </h3>
        <p className="text-sm mb-4 text-gray-300">
          Ethereum is open access to digital money and data-friendly services
          for everyone – no matter your background or location. It's a
          community-built technology behind the cryptocurrency ether (ETH) and
          thousands of applications you can use today.
        </p>
        <p className="text-sm mb-4 text-gray-300">
          The best way to learn more is to download a wallet, get some ETH and
          try an Ethereum dapp. You're lucky today! It's what we're going to do
          here. ✨
        </p>
        <p className="text-sm mb-4 text-gray-300">
          Ethereum has led to the creation of new products and services that can
          improve different areas of our lives. We're going to see some, but for
          the moment let learn more about digital money.
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <ImageNFT
          contractAddress="0x1acbd5ce03bdd2a898f4acf91a39cc9c0807c39c"
          tokenId="13"
        />
      </div> */}
      <div className="mt-12 flex justify-between">
        <Link href="/onboard/blockchain">
          <Button variant="tertiary">← Back</Button>
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
