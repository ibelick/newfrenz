import Button from "components/Button";
import LayoutOnboard from "components/LayoutOnboard";
import Link from "next/Link";

const OnboardMetamask2 = () => {
  return (
    <LayoutOnboard card={<WhatsMetamask2 />} text={<WhatsMetamaskText2 />} />
  );
};

const WhatsMetamask2 = () => {
  return (
    <div>
      <div className="text-center">
        <span className="text-3xl">⚉</span>
        <h2 className="text-xl font-bold mt-8">Create an account</h2>
        <p className="text-gray-400 mt-2 mb-8">
          Click the ‘Get Started’ button to begin creating your Ethereum wallet
          using MetaMask.
        </p>
        <iframe
          width="560"
          className="rounded-xl"
          height="315"
          src="https://www.youtube.com/embed/GNPz-Dv5BjM?controls=0&amp;start=20"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="mt-12">
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

const WhatsMetamaskText2 = () => {
  return (
    <div>
      <p>hey</p>
    </div>
  );
};

export default OnboardMetamask2;
