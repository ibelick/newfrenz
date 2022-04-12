import Button from "components/Button";
import Layout from "components/Layout";
import TextInput from "components/TextInput";
import { useContract, useSigner } from "wagmi";
import OnboardingCollectible from "utils/OnboardingCollectible.json";
import { useState } from "react";
import Link from "next/Link";
import { SubmitHandler, useForm } from "react-hook-form";

const CONTRACT_ADDRESS = "0x6bD8256A271E3053c0872FB716BDefab09DF61B4";
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

  const mint = async (name: string) => {
    setIsMintingLoading(true);
    try {
      console.log("Going to pop wallet now to pay gas...");
      let nftTxn = await contract.create(name);
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
  mint: (name: string) => Promise<void>;
  isLoading: boolean;
  mintedTokenId?: number | null;
}

type FormValues = {
  name: string;
};

const MintCard: React.FC<MintCardProps> = ({
  mint,
  isLoading,
  mintedTokenId,
}) => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (props) => {
    mint(props.name);
  };

  return (
    <div>
      <div className="text-center">
        <span className="text-3xl">⚉</span>
        <h2 className="text-xl font-bold mt-8">Mint your free nft</h2>
        <p className="text-gray-400 mt-2 mb-8">blabla</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-left">
            {!mintedTokenId ? (
              <TextInput
                id="name"
                placeholder={`John Doe`}
                register={register}
                required
                label="Enter your name: (max 16 char.)"
                maxlength={16}
              />
            ) : null}
          </div>
          <div className="mt-12">
            {!mintedTokenId ? (
              <Button type="submit" isLoading={isLoading}>
                Mint
              </Button>
            ) : (
              <Link href="/onboard/congrats">
                <a>
                  <Button type="button">next</Button>
                </a>
              </Link>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default OnboardMint;
