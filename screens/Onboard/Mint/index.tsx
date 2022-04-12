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
        // <div>
        //   you can see you're NFT on{" "}
        //   <a
        //     href={`${BASE_URL_OPENSEA_TESTNET}/assets/${CONTRACT_ADDRESS}/${mintedTokenId}`}
        //     target="_blank"
        //     rel="noopener noreferrer"
        //   >
        //     opensea
        //   </a>
        // </div>
        <div>
          <h2 className="text-sm font-bold">What is Etherscan?</h2>
          <p className="mt-4 text-sm text-gray-500">
            NFTs are tokens that we can use to represent ownership of unique
            items. They let us tokenise things like art, collectibles, even real
            estate. They can only have one official owner at a time and they're
            secured by the Ethereum blockchain – no one can modify the record of
            ownership or copy/paste a new NFT into existence.
          </p>
        </div>
      ) : (
        <div>
          <h2 className="text-sm font-bold">What is an NFT?</h2>
          <p className="mt-4 text-sm text-gray-500">
            NFTs are tokens that we can use to represent ownership of unique
            items. They let us tokenise things like art, collectibles, even real
            estate. They can only have one official owner at a time and they're
            secured by the Ethereum blockchain – no one can modify the record of
            ownership or copy/paste a new NFT into existence.
          </p>
          <h2 className="text-sm font-bold mt-8">
            What does minting an NFT means?
          </h2>
          <p className="mt-4 text-sm text-gray-500">
            An NFT can only have one owner at a time. Ownership is managed
            through the uniqueID and metadata that no other token can replicate.
            NFTs are minted through smart contracts that assign ownership and
            manage the transferability of the NFT's.
          </p>
          <h2 className="text-sm font-bold mt-8">How to stay safe?</h2>
          <p className="mt-4 text-sm text-gray-500">
            Wallets require a bit of a different mindset when it comes to
            safety. Financial freedom and the ability to access and use funds
            anywhere comes with a bit of responsibility – there’s no customer
            support in crypto.
          </p>
        </div>
      )}
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
        {!mintedTokenId ? (
          <div>
            <h2 className="text-xl font-bold mt-8">Mint your free NFT</h2>
            <p className="text-gray-400 mt-2 mb-4">
              Finally, let's mint a free NFT!
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-bold mt-8">
              Congrats! You just minted your first NFT
            </h2>
            <p className="text-gray-400 mt-2 mb-4">You now own an NFT!</p>
          </div>
        )}

        <img className="m-auto mb-8" src="/frame.svg" alt="blabla" />
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
