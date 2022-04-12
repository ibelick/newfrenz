import Button from "components/Button";
import Layout from "components/Layout";
import { useContract, useSigner } from "wagmi";
import OnboardingCollectible from "utils/OnboardingCollectible.json";
import { useState } from "react";
import Link from "next/Link";

const CONTRACT_ADDRESS = "0x22647A442F2BB92272F00D4990b8B6C91d9120a4";
const BASE_URL_OPENSEA_TESTNET = "https://testnets.opensea.io";
const BASE_URL_RARIBLE_TESTNET = "https://rinkeby.rarible.com";

const OnboardMint = () => {
  const [{ data: signerData }, getSigner] = useSigner();
  const contract = useContract({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: OnboardingCollectible.abi,
    signerOrProvider: signerData,
  });
  const [mintedTokenId, setMintedTokenId] = useState<number | null>(null);
  const [isMintingLoading, setIsMintingLoading] = useState<boolean>(false);

  const mint = async () => {
    setIsMintingLoading(true);
    try {
      console.log("Going to pop wallet now to pay gas...");
      let nftTxn = await contract.create();
      console.log("Mining...please wait.");
      await nftTxn.wait();
      console.log(
        `Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`
      );
      getTokenId();
    } catch (error) {
      console.error("error", error);
      setIsMintingLoading(false);
    }
  };

  const getTokenId = async () => {
    try {
      contract.on("collectibleMinted", (from: string, tokenId: number) => {
        setMintedTokenId(tokenId);
        setIsMintingLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout
      card={
        <MintCard
          mint={mint}
          isLoading={isMintingLoading}
          mintedTokenId={mintedTokenId}
        />
      }
      text={<WalletText mintedTokenId={mintedTokenId} />}
    />
  );
};

interface WalletTextProps {
  mintedTokenId?: number | null;
}

const WalletText: React.FC<WalletTextProps> = ({ mintedTokenId }) => {
  return (
    <div>
      {mintedTokenId ? (
        <div>
          you can see you're NFT on{" "}
          <a
            href={`${BASE_URL_OPENSEA_TESTNET}/assets/${CONTRACT_ADDRESS}/${mintedTokenId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            opensea
          </a>
        </div>
      ) : null}
    </div>
  );
};

interface MintCardProps {
  mint: () => Promise<void>;
  isLoading: boolean;
  mintedTokenId?: number | null;
}

const MintCard: React.FC<MintCardProps> = ({
  mint,
  isLoading,
  mintedTokenId,
}) => {
  return (
    <div>
      <div className="text-center">
        <span className="text-3xl">⚉</span>
        <h2 className="text-xl font-bold mt-8">Mint your free nft</h2>
        <p className="text-gray-400 mt-2 mb-8">blabla</p>
        <div className="mt-12">
          {!mintedTokenId ? (
            <Button isLoading={isLoading} onClick={mint}>
              Mint
            </Button>
          ) : (
            <Link href="/onboard/congrats">
              <a>
                <Button>next</Button>
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default OnboardMint;
