import Button from "components/Button";
import LayoutOnboard from "components/LayoutOnboard";
import Link from "next/Link";

const OnboardFaucet = () => {
  return <LayoutOnboard card={<FaucetCard />} text={<FaucetText />} />;
};

const FaucetText = () => {
  return (
    <div>
      <p className="mb-4 text-sm text-gray-300">
        Copy your wallet address in your Metamaks extension
      </p>
      <img src="/copy_metamask.jpg" className="max-w-md w-2/3 rounded" />
    </div>
  );
};

const FaucetCard = () => {
  return (
    <div>
      <div className="text-center">
        <img src="/money.svg" className="w-16 m-auto mt-8 mb-4" />
        <h2 className="text-xl font-bold mt-8">Get ETH on Rinkeby Testnet</h2>
        <p className="text-gray-400 mt-2 mb-8">
          In order to get fake ETH, we have to ask the network for some. Theses
          fake ETH will only work on this specific testnet. You can grab some
          fake Ethereum for Rinkeby through a faucet.
        </p>
      </div>
      <div className="bg-zinc-900 text-sm mb-8  px-8 py-8">
        <p className="mb-4 font-bold">
          {" "}
          We recommend you to use this{" "}
          <a
            href="https://rinkebyfaucet.com/"
            target="_blank"
            className="underline"
          >
            one created by Alchemy.
          </a>
        </p>
        <div className="text-white">
          <p className="mb-4">
            <span className="text-indigo-600">▪︎</span> Copy your address from
            your wallet
          </p>
          <p className="mb-4">
            <span className="text-indigo-600">▪︎</span> Past it in
            https://rinkebyfaucet.com/ input
          </p>
          <p className="mb-4">
            <span className="text-indigo-600">▪︎</span> Send Me ETH
          </p>
          <p className="mb-4">
            <span className="text-indigo-600">▪︎</span> Wait for the transaction
            to complete
          </p>
          <p>
            <span className="text-indigo-600">▪︎</span> Check your wallet if ETH
            Rinkeby Testnet are here
          </p>
        </div>
      </div>
      <p>Your current ETH balance</p>
      <div className="bg-zinc-900 text-gray-400 text-md mt-2 mb-8 px-8 py-4 rounded-xl overflow-hidden text-ellipsis">
        0 ETH
      </div>

      <div className="flex justify-between">
        <Link href="/onboard/testnet">
          <Button variant="tertiary">← Back</Button>
        </Link>
        <Link href="/onboard/mint">
          <a>
            <Button>Go mint my NFT</Button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default OnboardFaucet;
