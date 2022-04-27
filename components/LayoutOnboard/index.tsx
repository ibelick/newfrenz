import Spinner from "components/Spinner";
import Header from "../Header";
import Footer from "../Footer";

interface LayoutOnboardProps {
  card: JSX.Element;
  text: JSX.Element;
  banner?: JSX.Element | null;
}

const LayoutOnboard: React.FC<LayoutOnboardProps> = ({
  card,
  text,
  banner,
}) => {
  return (
    <div className="bg-zinc-900 min-h-screen text-white pt-8 pb-12 font-IBM bg-[url('../public/bg-gradient.svg')]">
      <div className="lg:w-9/12 m-auto lg:px-0 px-4">
        <Header />
        <div className="lg:flex items-start">
          <div className="flex flex-col w-full lg:w-3/5 ">
            {banner ? (
              <div className="bg-black bg-opacity-40 p-2 rounded mb-4 flex items-center relative justify-center">
                {banner}
              </div>
            ) : null}
            <div className="bg-black rounded-xl py-8 px-8 lg:px-12 border border-gray-800 shadow-2xl ">
              {card}
            </div>
          </div>
          <div className="lg:ml-12 py-8 lg:w-2/5">{text}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LayoutOnboard;
