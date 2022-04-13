import Link from "next/Link";
import { useConnect, useAccount, Connector, ConnectorData } from "wagmi";

interface LayoutProps {
  card: JSX.Element;
  text: JSX.Element;
  isLoading?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ isLoading, card, text }) => {
  const [{ data: connectData, loading: isLoadingConnectData }, connect] =
    useConnect();
  const [{ data: accountData, loading: isLoadingAccountData }, disconnect] =
    useAccount({
      fetchEns: true,
    });
  const isUserNotConnected = Boolean(!connectData.connected && !accountData);

  return (
    <div className="bg-zinc-900 min-h-screen text-white pt-8 pb-12 font-IBM bg-[url('../public/bg-gradient.svg')]">
      <div className="h-1 w-48 bg-indigo-600 absolute top-0"></div>
      <div className="lg:w-9/12 m-auto lg:px-0 px-4">
        <header className="flex items-center justify-between">
          <div>
            <Link href="/">
              <a>→ ONBOARDING</a>
            </Link>
          </div>
          <div className="text-sm">
            {isUserNotConnected ? (
              <span></span>
            ) : (
              <div className="flex items-center">
                <div className="h-2 mr-2 w-2 bg-green-500  border-green-300 rounded-full"></div>
                Wallet connected
              </div>
            )}
          </div>
        </header>
        <div className="mt-24 lg:flex items-start">
          <div className="bg-black lg:w-3/5 rounded-xl py-8 px-8 lg:px-12 border border-gray-800 shadow-2xl ">
            {isLoading ? null : card}
          </div>
          <div className="lg:ml-12 py-8 lg:w-2/5">
            {isLoading ? null : text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
