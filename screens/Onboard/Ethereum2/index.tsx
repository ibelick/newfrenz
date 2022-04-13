import Layout from "components/Layout";
import Button from "components/Button";
import Link from "next/Link";

const OnboardEthereum2 = () => {
  return <Layout card={<EthereumCard />} text={<EthereumText />} />;
};

const EthereumCard = () => {
  return (
    <div>
      <div className="text-center">
        ETHEREUM ILLU NFT WITH SOURCE
        <div className="mt-12 flex justify-between">
          <Link href="/onboard/ethereum-1">
            <Button variant="tertiary">← Back</Button>
          </Link>
          <Link href="/onboard/wallet">
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
      <p className="text-sm mb-6 text-gray-300">
        ETH is a cryptocurrency. It is scarce digital money that you can use on
        the internet – similar to Bitcoin. If you’re new to crypto, here's how
        ETH is different from traditional money. 👩‍💻
      </p>
      <h2 className="text-sm font-bold">
        How ETH is different from traditional money?
      </h2>
      <ul className="mt-4 text-sm text-gray-300">
        <li className="mb-4">
          <h3 className="font-bold mb-1">- It's really yours</h3>
          <p>
            ETH lets you be your own bank. You can control your own funds with
            your wallet as proof of ownership – no third parties necessary.
          </p>
        </li>
        <li className="mb-4">
          <div>
            <h3 className="font-bold mb-1">- Secured by cryptography</h3>
            <p>
              Internet money may be new but it's secured by proven cryptography.
              This protects your wallet, your ETH, and your transactions.
            </p>
          </div>
        </li>
        <li className="mb-4">
          <div>
            <h3 className="font-bold mb-1">- Peer-to-peer payments</h3>
            <p>
              You can send your ETH without any intermediary service like a
              bank. It's like handing cash over in-person, but you can do it
              securely with anyone, anywhere, anytime.
            </p>
          </div>
        </li>
        <li className="mb-4">
          <div>
            <h3 className="font-bold mb-1">- No centralized control</h3>
            <p>
              ETH is decentralized and global. There's no company or bank that
              can decide to print more ETH, or change the terms of use.
            </p>
          </div>
        </li>
        <li className="mb-4">
          <div>
            <h3 className="font-bold mb-1">- Open to anyone</h3>
            <p>
              You only need an internet connection and a wallet to accept ETH.
              You don't need access to a bank account to accept payments.
            </p>
          </div>
        </li>
        <li className="mb-4">
          <div>
            <h3 className="font-bold mb-1">- Available in flexible amounts</h3>
            <p>
              ETH is divisible up to 18 decimal places so you don't have to buy
              1 whole ETH. You can buy fractions at a time – as little as
              0.000000000000000001 ETH if you want.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default OnboardEthereum2;
