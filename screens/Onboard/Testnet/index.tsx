import Button from "components/Button";
import Layout from "components/Layout";
import Link from "next/Link";
import { useNetwork } from "wagmi";
import { chain } from "wagmi";

const OnboardTestnet = () => {
  return <Layout card={<NoTestnet />} text={<TestnetText />} />;
};

const TestnetText = () => {
  return (
    <div>
      <p className="mb-4 text-sm text-gray-300">
        Ethereum test networks are parallel chains, nearly identical to the
        public version of the Ethereum blockchain (usually referred to as the
        Ethereum Mainnet).
      </p>
      <h2 className="text-sm font-bold">What is Ethereum Testnets?</h2>
      <p className="mt-4 text-sm text-gray-300">
        You can see a test network as a public beta of the Ethereum protocol,
        where you can test different types of transactions.
      </p>
    </div>
  );
};

const NoTestnet = () => {
  const [{ data: chainData }, switchNetwork] = useNetwork();
  const isUserConnectedToCorrectChain =
    chainData?.chain && chainData?.chain?.id === chain.rinkeby.id;

  return (
    <div>
      <div className="text-center">
        <span className="text-3xl">⚉</span>
        <h2 className="text-xl font-bold mt-8">
          We're going to use fake money
        </h2>
        <p className="text-gray-400 mt-2 mb-8">
          Interacting with web3 applications require ETH to pay for transactions
          if you need to. For this tutorial, we're gonna use a test Blockchain
          also called Testnet so you can test things for free!
        </p>
        {switchNetwork && !isUserConnectedToCorrectChain ? (
          <div className="flex flex-col items-center">
            <Button onClick={() => switchNetwork(4)}>Switch to Testnet</Button>
          </div>
        ) : (
          <>
            <p className="mb-6">
              Your connect to the {chainData?.chain?.name} Testnet! ✨
            </p>
            <div className="flex justify-between">
              <Link href="/onboard/wallet">
                <Button variant="tertiary">← Back</Button>
              </Link>
              <Link href="/onboard/mint">
                <a>
                  <Button>Let's get fake ETH</Button>
                </a>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OnboardTestnet;
