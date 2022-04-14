import LayoutCard from "components/LayoutCard";

const WhatsNext = () => {
  return (
    <LayoutCard
      card={
        <div>
          <p className="text-xl  mb-4 font-bold">What's next?</p>
          <p>
            This project was orginally created for the{" "}
            <span className="text-white bg-gray-700 rounded font-bold px-2 py-1">
              Hello NFT World: OpenSea x Replit Hackathon
            </span>
            . Our aim is to continue to develop and improve this product and
            make it a public good
          </p>
          <div className=" mb-8 mt-8">
            <p className="mb-4 font-bold">Here are a few ideas we have:</p>
            <div className="text-white">
              <p>
                <span className="text-indigo-600">▪︎</span> Add more sections
              </p>
              <p>
                <span className="text-indigo-600">▪︎</span> Add more
                interactivity
              </p>
              <p>
                <span className="text-indigo-600">▪︎</span> Add more blockchain
              </p>
              <p>
                <span className="text-indigo-600">▪︎</span> Add newfrenz
                collection on Polygon
              </p>
              <p>
                <span className="text-indigo-600">▪︎</span> Have our own faucet
              </p>
            </div>
          </div>
          <div className="text-sm bg-zinc-800 rounded py-8 px-8 ">
            <h2 className="font-bold mb-4">Want to support us?</h2>
            <p className=" ">
              You drop a DM to us on Discord if you have extra ideas for the
              project (Ibelick#2769, smoogy#9640). We also accept donations at
              0x33289d5fb9054d7D01Aa7178d7F4E48EFdAEe9EC.
            </p>
          </div>
        </div>
      }
    />
  );
};

export default WhatsNext;
