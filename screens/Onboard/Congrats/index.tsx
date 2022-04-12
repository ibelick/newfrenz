import Layout from "components/Layout";

const OnboardCongrats = () => {
  return <Layout card={<CongratsCard />} text={<CongratsText />} />;
};

const CongratsCard = () => {
  return (
    <div>
      <div className="text-center">
        <span className="text-3xl">⚉</span>
        <h2 className="text-xl font-bold mt-8">Congrats!</h2>
        <p className="text-gray-400 mt-2 mb-8">
          You mint a free NFT and blablabla. We have more idea for this project,
          what about other chain or deep dive into NFT utility. Dont hesitate to
          follow us for updates blabal.
        </p>
      </div>
    </div>
  );
};

const CongratsText = () => {
  return (
    <div>
      <p>hey</p>
    </div>
  );
};

export default OnboardCongrats;
