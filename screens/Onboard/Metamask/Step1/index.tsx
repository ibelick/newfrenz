import Button from "components/Button";
import LayoutOnboard from "components/LayoutOnboard";
import Link from "next/Link";

const OnboardMetamask = () => {
  return (
    <LayoutOnboard card={<WhatsMetamask />} text={<WhatsMetamaskText />} />
  );
};

const WhatsMetamask = () => {
  return (
    <div>
      <div className="text-center">
        <img src="/wallet.svg" className="w-16 m-auto mt-8 mb-4" />
        <h2 className="text-xl font-bold mt-8">
          First, let's get a wallet with Metamask
        </h2>
        <p className="text-gray-400 mt-2 mb-8">
          In order to follow this interactive onboarding you will need to create
          a Metamask wallet. It only takes a few seconds. First let’s download
          Metamask
        </p>
        <a
          href="https://metamask.io/download/"
          target="_blank"
          rel="noreferrer"
          className="mb-4"
        >
          <Button variant="secondary">Download Metamask for Chrome</Button>
        </a>
        <iframe
          width="560"
          className="rounded-xl mt-4"
          height="315"
          src="https://www.youtube.com/embed/GNPz-Dv5BjM?controls=0&amp;start=20"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <div className="mt-12 flex justify-between">
          <Link href="/">
            <Button variant="tertiary">← Back</Button>
          </Link>
          <Link href="/onboard/wallet">
            <a>
              <Button>Let's connect my wallet</Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

const WhatsMetamaskText = () => {
  return (
    <div>
      <h2 className="text-sm font-bold">What's an Ethereum wallet?</h2>
      <p className="mt-4 text-sm text-gray-500">
        Ethereum wallets are applications that let you interact with your
        Ethereum account. Think of it like an internet banking app – without the
        bank. Your wallet lets you read your balance, send transactions and
        connect to applications.
      </p>
      <h2 className="text-sm font-bold mt-8">What is Metamask?</h2>
      <p className="mt-4 text-sm text-gray-500">
        Available as a browser extension and as a mobile app, MetaMask equips
        you with a key vault, secure login, token wallet, and token
        exchange—everything you need to manage your digital assets.
      </p>
    </div>
  );
};

export default OnboardMetamask;
