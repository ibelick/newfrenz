import Header from "../Header";

interface LayoutOnboard {
  card: JSX.Element;
}

const LayoutOnboard: React.FC<LayoutOnboard> = ({ card }) => {
  return (
    <div className="bg-zinc-900 min-h-screen text-white pt-8 pb-12 font-IBM bg-[url('../public/bg-gradient.svg')]">
      <div className="lg:w-9/12 m-auto lg:px-0 px-4">
        <Header />
        <div className="mt-24 flex justify-center">
          <div className="w-full bg-black rounded-xl py-8 px-8 lg:px-12 border border-gray-800 shadow-2xl max-w-2xl">
            {card}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutOnboard;
