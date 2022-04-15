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
        <title>newfrenz • onboard your frenz in web3 with a simple link</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="title"
          content="newfrenz • onboard your frenz in web3 with a simple link"
        />
        <meta
          name="description"
          content="onboard your frenz in web3 with a simple link "
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.newfrenz.xyz/" />
        <meta
          property="og:title"
          content="newfrenz • onboard your frenz in web3 with a simple link"
        />
        <meta
          property="og:description"
          content="onboard your frenz in web3 with a simple link "
        />
        <meta property="og:image" content="/banner_social.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.newfrenz.xyz/" />
        <meta
          property="twitter:title"
          content="newfrenz • onboard your frenz in web3 with a simple link"
        />
        <meta
          property="twitter:description"
          content="onboard your frenz in web3 with a simple link "
        />
        <meta property="twitter:image" content="/banner_social.jpg" />
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
