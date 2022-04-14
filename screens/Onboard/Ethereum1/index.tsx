import LayoutOnboard from "components/LayoutOnboard";
import Button from "components/Button";
import Link from "next/Link";

const OnboardEthereum1 = () => {
  return <LayoutOnboard card={<EthereumCard />} text={<EthereumText />} />;
};

const EthereumCard = () => {
  return (
    <div>
      <div className="text-center">
        <span className="text-3xl">⚉</span>
        <h2 className="text-xl font-bold mt-8">
          Welcome to Ethereum, the digital money
        </h2>
        <p className="text-gray-400 mt-2 mb-8">
          Ethereum is the community-run technology powering the cryptocurrency
          ether (ETH) and thousands of decentralized applications.
        </p>
        <p>
          It's open to everyone, wherever you are in the world – all you need is
          the internet.
        </p>
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
    </div>
  );
};

const EthereumText = () => {
  return (
    <div>
      <p className="text-sm mb-4 text-gray-300">
        Ethereum is open access to digital money and data-friendly services for
        everyone – no matter your background or location. It's a community-built
        technology behind the cryptocurrency ether (ETH) and thousands of
        applications you can use today.
      </p>
      <p className="text-sm mb-4 text-gray-300">
        The best way to learn more is to download a wallet, get some ETH and try
        an Ethereum dapp. You're lucky today! It's what we're going to do here.
        ✨
      </p>
      <p className="text-sm mb-4 text-gray-300">
        Ethereum has led to the creation of new products and services that can
        improve different areas of our lives. We're going to see some, but for
        the moment let learn more about digital money.
      </p>
    </div>
  );
};

export default OnboardEthereum1;
