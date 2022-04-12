import Button from "components/Button";
import Layout from "components/Layout";
import Link from "next/Link";
import { useNetwork } from "wagmi";
import { chain } from "wagmi";

const OnboardWallet = () => {
  return <Layout card={<NoWallet />} text={<WalletText />} />;
};

const WalletText = () => {
  return (
    <div>
      <h2 className="text-sm font-bold">What is an Ethereum account?</h2>
      <p className="mt-4 text-sm text-gray-500">
        An Ethereum account is an entity that can send transactions and has a
        balance. An Ethereum account has an Ethereum address, like an inbox has
        an email address. You can use this to send funds to an account.
      </p>
      <h2 className="text-sm font-bold mt-8">How to stay safe?</h2>
      <p className="mt-4 text-sm text-gray-500">
        Wallets require a bit of a different mindset when it comes to safety.
        Financial freedom and the ability to access and use funds anywhere comes
        with a bit of responsibility – there’s no customer support in crypto.
      </p>
    </div>
  );
};

const NoWallet = () => {
  const [{ data: chainData }, switchNetwork] = useNetwork();
  const isUserConnectedToCorrectChain =
    chainData?.chain && chainData?.chain?.id === chain.rinkeby.id;

  return (
    <div>
      <div className="text-center">
        <span className="text-3xl">⚉</span>
        <h2 className="text-xl font-bold mt-8">
          We're going to use testnet with fake money
        </h2>
        <p className="text-gray-400 mt-2 mb-8">
          Interacting with web3 applications require ETH to pay for transactions
          if you need to. For this tutorial, we're gonna use a test Blockchain
          also called Testnet so you can test things for free!
        </p>
        {switchNetwork && !isUserConnectedToCorrectChain ? (
          <div className="flex flex-col items-center">
            {/* <span className="mb-4">
              your connect to the wrong chain, current chain:{" "}
              {chainData?.chain?.name}
            </span> */}
            <Button onClick={() => switchNetwork(4)}>Switch to Testnet</Button>
          </div>
        ) : (
          <div className="flex justify-between">
            <Link href="/">
              <Button variant="tertiary">← Back</Button>
            </Link>
            <Link href="/onboard/mint">
              <a>
                <Button>Next</Button>
              </a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default OnboardWallet;
