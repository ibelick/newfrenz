import Button from "components/Button";
import Layout from "components/Layout";
import Link from "next/Link";
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
    <Layout
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
      <p>hey</p>
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
        <span className="text-3xl">⚉</span>
        <h2 className="text-xl font-bold mt-8">
          Looks like you don’t have a Metamask wallet yet!
        </h2>
        <p className="text-gray-400 mt-2 mb-8">
          In order to follow this interactive onboarding you will need to create
          a Metamask wallet. It only takes a few seconds. First let’s download
          Metamask
        </p>
        {connectors?.map((connector) => {
          return (
            <div key={connector.id}>
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
        <span className="text-3xl">⚉</span>
        <h2 className="text-xl font-bold mt-8">You're connected</h2>
        <p className="text-gray-400 mt-2 mb-8">yo {address}</p>
        <Link href="/onboard/testnet">
          <a>
            <Button>testnet</Button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default OnboardWallet;
