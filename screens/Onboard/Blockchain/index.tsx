import Button from "components/Button";
import Layout from "components/Layout";
import Link from "next/Link";

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
  return (
    <div>
      <p>hey</p>
    </div>
  );
};

export default OnboardBlockchain;
