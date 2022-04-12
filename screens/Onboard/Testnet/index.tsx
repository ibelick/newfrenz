import Button from "components/Button";
import Layout from "components/Layout";
import Link from "next/link";

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
  return (
    <div>
      <div className="text-center">
        <span className="text-3xl">⚉</span>
        <h2 className="text-xl font-bold mt-8">
          We're going to use testnet with fake money
        </h2>
        <p className="text-gray-400 mt-2 mb-8">blabla</p>
        <Link href="/onboard/mint">
          <a>
            <Button>go page mint</Button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default OnboardWallet;
