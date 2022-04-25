import Button from "components/Button";
import LayoutOnboard from "components/LayoutOnboard";
import Link from "next/link";
import { useConnect, useAccount, Connector, ConnectorData } from "wagmi";

const OnboardWallet = () => {
  const [{ data: connectData, loading: isLoadingConnectData }, connect] =
    useConnect();
  const [{ data: accountData, loading: isLoadingAccountData }, disconnect] =
    useAccount({
      fetchEns: true,
    });
  const isUserNotConnected = Boolean(!connectData.connected && !accountData);

  return (
    <LayoutOnboard
      card={
        isUserNotConnected ? (
          <NoWallet
            connect={connect}
            connectors={connectData.connectors}
            isLoading={isLoadingConnectData}
          />
        ) : (
          <WalletConnected address={accountData?.address!} />
        )
      }
      text={<WalletText />}
    />
  );
};

const WalletText = () => {
  return (
    <div>
      <h2 className="text-sm font-bold">What is an Ethereum account?</h2>
      <p className="mt-4 text-sm text-gray-500">
        An Ethereum account is an entity that can send transactions and has a
        balance. An Ethereum account has an Ethereum address, like an inbox has
        an email address. You can use this to send funds to an account.
      </p>
      <h2 className="text-sm font-bold mt-8">How to stay safe?</h2>
      <p className="mt-4 text-sm text-gray-500">
        Wallets require a bit of a different mindset when it comes to safety.
        Financial freedom and the ability to access and use funds anywhere comes
        with a bit of responsibility – there’s no customer support in crypto.
      </p>
    </div>
  );
};

interface NoWalletProps {
  connectors: Connector<any, any>[];
  connect: (connector: Connector<any, any>) => Promise<{
    data?: ConnectorData<any> | undefined;
    error?: Error | undefined;
  }>;
  isLoading?: boolean;
}

const NoWallet: React.FC<NoWalletProps> = ({
  connect,
  connectors,
  isLoading,
}) => {
  return (
    <div>
      <div className="text-center">
        <img src="/connect.svg" className="w-16 m-auto mt-8 mb-4" />
        <h2 className="text-xl font-bold mt-8">Let's connect your wallet!</h2>
        <p className="text-gray-400 my-2">
          Now that you have installed Metamask and created an account you can
          connect it to any web3 services.
        </p>
        <p className="text-gray-400 mb-8">
          If you're on a browser, the MetaMask extension will open. If you're on
          mobile, open the MetaMask application, and go to newfrenz.xyz through
          it.
        </p>
        <div className="text-sm mb-8">
          <div className="w-full h-0.5 bg-white mt-8 mb-8 opacity-10"></div>
          <p className="mb-4 font-bold">
            Before going further, make sure you have:
          </p>
          <div className="text-white mb-8">
            <p>
              <span className="text-indigo-600">▪</span> Installed Metamask for
              Chrome
            </p>
            <p>
              <span className="text-indigo-600">▪︎</span> Created an account
            </p>
            <p>
              <span className="text-indigo-600">▪︎</span> Saved your seed phrase
            </p>
          </div>
        </div>
        {connectors?.map((connector) => {
          return (
            <div className="mt-8" key={connector.id}>
              <Button
                isLoading={isLoading}
                onClick={() => {
                  connect(connector);
                }}
              >
                Connect wallet
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

interface WalletConnectedProps {
  address: string;
}

const WalletConnected: React.FC<WalletConnectedProps> = ({ address }) => {
  return (
    <div>
      <div className="text-center">
        <img src="/checked.svg" className="w-16 m-auto mt-8 mb-4" />
        <h2 className="text-xl font-bold mt-8">You're connected!</h2>
        <p className="text-gray-400 mt-2 mb-8">
          Congrats! Your wallet is connected to this web3 onboarding, that's
          where the magic begins!
        </p>
        <p>Your account is</p>
        <div className="bg-gray-900 text-gray-400 text-md mt-2 mb-8 px-8 py-4 rounded-xl overflow-hidden text-ellipsis">
          {address}
        </div>
        {/* <p>Your current ETH balance</p>
        <div className="bg-gray-900 text-gray-400 text-md mt-2 mb-8 px-8 py-4 rounded-xl overflow-hidden text-ellipsis">
          0 ETH
        </div> */}
        <div className="flex justify-between">
          <Link href="/onboard/metamask">
            <a>
              <Button variant="tertiary">← Back</Button>
            </a>
          </Link>
          <Link href="/onboard/testnet">
            <a>
              <Button>Next</Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OnboardWallet;
