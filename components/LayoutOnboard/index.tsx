import Header from "../Header";

interface LayoutOnboardProps {
  card: JSX.Element;
  text: JSX.Element;
}

const LayoutOnboard: React.FC<LayoutOnboardProps> = ({ card, text }) => {
  return (
    <div className="bg-zinc-900 min-h-screen text-white pt-8 pb-12 font-IBM bg-[url('../public/bg-gradient.svg')]">
      <div className="lg:w-9/12 m-auto lg:px-0 px-4">
        <Header />
        <div className="mt-24 lg:flex items-start">
          <div className="bg-black lg:w-3/5 rounded-xl py-8 px-8 lg:px-12 border border-gray-800 shadow-2xl ">
            {card}
          </div>
          <div className="lg:ml-12 py-8 lg:w-2/5">{text}</div>
        </div>
      </div>
    </div>
  );
};

export default LayoutOnboard;
