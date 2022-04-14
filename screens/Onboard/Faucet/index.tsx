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
      <img src="/copy_metamask.jpg" className="max-w-md w-full" />
    </div>
  );
};

const FaucetCard = () => {
  return (
    <div>
      <div className="text-center">
        <span className="text-3xl">⚉</span>
        <h2 className="text-xl font-bold mt-8">Get ETH on Rinkeby Testnet</h2>
        <p className="text-gray-400 mt-2 mb-8">
          In order to get fake ETH, we have to ask the network for some. Theses
          fake ETH will only work on this specific testnet. You can grab some
          fake Ethereum for Rinkeby through a faucet.
        </p>
      </div>
      <p className="mb-2">
        There is a lot of different faucet website. I recommend you this{" "}
        <a
          href="https://rinkebyfaucet.com/"
          target="_blank"
          className="underline"
        >
          one created by Alchemy.
        </a>
      </p>
      <p>All you have to do is: </p>
      <ul className="mb-4">
        <li>- Copy your address from your wallet</li>
        <li>- Past it in https://rinkebyfaucet.com/ input</li>
        <li>- Send Me ETH</li>
        <li>- Wait for the transaction to complete</li>
        <li>- Check your wallet if ETH Rinkeby Testnet are here</li>
      </ul>
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
