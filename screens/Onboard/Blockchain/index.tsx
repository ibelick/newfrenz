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
        <h2 className="text-xl font-bold mt-8">Whats blockchain</h2>
        <p className="text-gray-400 mt-2 mb-8">
          In order to follow this interactive onboarding you will need to create
          a Metamask wallet. It only takes a few seconds. First let’s download
          Metamask
        </p>
        <div className="mt-12">
          <Link href="/onboard/wallet">
            <a>
              <Button>Wallet</Button>
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
