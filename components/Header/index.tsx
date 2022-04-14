import Link from "next/link";
import { useConnect, useAccount } from "wagmi";
import Head from "next/head";

const Header = () => {
  const [{ data: connectData }] = useConnect();
  const [{ data: accountData }] = useAccount({
    fetchEns: true,
  });
  const isUserNotConnected = Boolean(!connectData.connected && !accountData);

  return (
    <>
      <Head>
        <title>newfrenz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="flex items-center justify-between mb-24">
        <div>
          <Link href="/">
            <a>
              <span className="text-xl">⚉ </span>NEWFRENZ
            </a>
          </Link>
        </div>
        <div className="text-sm">
          {isUserNotConnected ? null : (
            <div className="flex items-center">
              <div className="h-2 mr-2 w-2 bg-green-500  border-green-300 rounded-full"></div>
              Wallet connected
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
