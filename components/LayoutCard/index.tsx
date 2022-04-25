import Header from "../Header";
import Footer from "../Footer";

interface LayoutCard {
  card: JSX.Element;
  banner?: JSX.Element;
}

const LayoutCard: React.FC<LayoutCard> = ({ card, banner }) => {
  return (
    <div className="bg-zinc-900 min-h-screen text-white pt-8 pb-12 font-IBM bg-[url('../public/bg-gradient.svg')]">
      <div className="lg:w-9/12 m-auto lg:px-0 px-4">
        <Header />
        <div className="flex flex-col items-center justify-center">
          {banner ? (
            <div className="bg-black bg-opacity-40 p-2 rounded mb-4 flex items-center relative justify-center w-full max-w-2xl px-12">
              {banner}
            </div>
          ) : null}
          <div className="w-full bg-black rounded-xl py-8 px-8 lg:px-12 border border-gray-800 shadow-2xl max-w-2xl">
            {card}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LayoutCard;
