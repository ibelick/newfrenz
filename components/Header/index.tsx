import Link from "next/Link";
import { useConnect, useAccount } from "wagmi";

const Header = () => {
  const [{ data: connectData }] = useConnect();
  const [{ data: accountData }] = useAccount({
    fetchEns: true,
  });
  const isUserNotConnected = Boolean(!connectData.connected && !accountData);

  return (
    <header className="flex items-center justify-between mb-24">
      <div>
        <Link href="/">
          <a>→ ONBOARDING</a>
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
  );
};

export default Header;
