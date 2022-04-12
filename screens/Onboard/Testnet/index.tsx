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
      <p>hey</p>
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
        <p className="text-gray-400 mt-2 mb-8">blabla</p>
        {switchNetwork && !isUserConnectedToCorrectChain ? (
          <div className="flex flex-col items-center">
            <span className="mb-4">
              your connect to the wrong chain, current chain:{" "}
              {chainData?.chain?.name}
            </span>
            <Button onClick={() => switchNetwork(4)}>switch to Rinkeby</Button>
          </div>
        ) : (
          <Link href="/onboard/mint">
            <a>
              <Button>go page mint</Button>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default OnboardWallet;
