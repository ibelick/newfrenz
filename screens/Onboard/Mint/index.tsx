import Button from "components/Button";
import LayoutOnboard from "components/LayoutOnboard";
import TextInput from "components/TextInput";
import { useContract, useSigner } from "wagmi";
import OnboardingCollectible from "utils/OnboardingCollectible.json";
import { useState } from "react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import Spinner from "components/Spinner";
import { CONTRACT_ADDRESS } from "utils/contract";

const BASE_URL_OPENSEA_TESTNET = "https://testnets.opensea.io";
const BASE_URL_RARIBLE_TESTNET = "https://rinkeby.rarible.com";

const OnboardMint = () => {
  const [{ data: signerData }] = useSigner();
  const contract = useContract({
    addressOrName: CONTRACT_ADDRESS,
    contractInterface: OnboardingCollectible.abi,
    signerOrProvider: signerData,
  });
  const [mintedTokenId, setMintedTokenId] = useState<number | null>(null);
  const [nftTxnHash, setNftTxnHash] = useState<string | null>(null);
  const [isMintingLoading, setIsMintingLoading] = useState<boolean>(false);
  const [isApprovedWalletLoading, setIsApprovedWalletLoading] =
    useState<boolean>(false);

  const mint = async (name: string) => {
    setIsApprovedWalletLoading(true);
    try {
      console.log("Going to pop wallet now to pay gas...");
      let nftTxn = await contract.create(name);
      setIsApprovedWalletLoading(false);
      setIsMintingLoading(true);
      console.log("Mining...please wait.");
      await nftTxn.wait();
      setNftTxnHash(nftTxn.hash);
      console.log(
        `Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`
      );
      await getTokenId();
    } catch (error) {
      console.error("error", error);
      setIsApprovedWalletLoading(false);
      setIsMintingLoading(false);
    }
  };

  const getTokenId = async () => {
    try {
      await contract.on(
        "collectibleMinted",
        (from: string, tokenId: number) => {
          setMintedTokenId(tokenId);
          setIsMintingLoading(false);
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LayoutOnboard
      loadingMsg={
        isApprovedWalletLoading ? "Confirm on Metamask to continue" : null
      }
      card={
        <MintCard
          mint={mint}
          isMintingLoading={isMintingLoading}
          isApprovedWalletLoading={isApprovedWalletLoading}
          mintedTokenId={mintedTokenId}
          nftTxnHash={nftTxnHash}
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
          <h2 className="text-sm font-bold mt-8">What's gas fees</h2>
        </div>
      )}
    </div>
  );
};

interface MintCardProps {
  mint: (name: string) => Promise<void>;
  isMintingLoading: boolean;
  isApprovedWalletLoading: boolean;
  mintedTokenId?: number | null;
  nftTxnHash?: string | null;
}

type FormValues = {
  name: string;
};

const MintCard: React.FC<MintCardProps> = ({
  mint,
  isMintingLoading,
  isApprovedWalletLoading,
  mintedTokenId,
  nftTxnHash,
}) => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (props) => {
    mint(props.name);
  };

  // if (isApprovedWalletLoading) {
  //   return (
  //     <div className="flex items-center flex-col">
  //       <Spinner size="xl" />
  //       <div className="text-center mt-4">
  //         <h2 className="text-xl mb-4">Confirm on Metamask to continue</h2>
  //         <p className="mb-2">
  //           You're going to pay testnet gas fees to mint your NFT.
  //         </p>
  //       </div>
  //     </div>
  //   );
  // }

  if (isMintingLoading) {
    return (
      <div className="flex items-center flex-col">
        <Spinner size="xl" />
        <div className="text-center mt-4">
          <h2 className="text-xl mb-4">NFT being minted...</h2>
          <p className="mb-2">
            You just sent a transaction to the blockchain and your NFT is
            currently being minted!
          </p>
          <p className="mb-2">This transaction may take some time.</p>
          {nftTxnHash ? (
            <a
              href={`https://rinkeby.etherscan.io/tx/${nftTxnHash}`}
              target="_blank"
              rel="noopener noreferrer"
            >{`Open transaction on Etherscan >`}</a>
          ) : null}
          {mintedTokenId ? (
            <a
              href={`${BASE_URL_OPENSEA_TESTNET}/assets/${CONTRACT_ADDRESS}/${mintedTokenId}`}
              target="_blank"
              rel="noopener noreferrer"
            >{`View your NFT on OpenSea >`}</a>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center">
        <img src="/mint.svg" className="w-16 m-auto mt-8 mb-4" />
        {!mintedTokenId ? (
          <div>
            <h2 className="text-xl font-bold mt-8">Mint your free NFT</h2>
          </div>
        ) : (
          <div className="flex flex-col">
            <h2 className="text-xl font-bold mt-8">
              Congrats! You just minted your first NFT
            </h2>
            <p className="text-gray-400 mt-2 mb-4">You now own an NFT!</p>
            {nftTxnHash ? (
              <a
                href={`https://rinkeby.etherscan.io/tx/${nftTxnHash}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-2"
              >{`Open transaction on Etherscan >`}</a>
            ) : null}
            {mintedTokenId ? (
              <a
                href={`${BASE_URL_OPENSEA_TESTNET}/assets/${CONTRACT_ADDRESS}/${mintedTokenId}`}
                target="_blank"
                rel="noopener noreferrer"
              >{`View your NFT on OpenSea >`}</a>
            ) : null}
          </div>
        )}
        {!mintedTokenId ? (
          <img className="m-auto mb-8" src="/frame.svg" alt="nft" />
        ) : null}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="text-left">
            {!mintedTokenId ? (
              <TextInput
                id="name"
                placeholder={`John Doe`}
                register={register}
                required
                label="Enter your name: (max 16 char.)"
                maxLength={16}
              />
            ) : null}
          </div>
          <div className="mt-8">
            {!mintedTokenId ? (
              <Button
                type="submit"
                isLoading={isApprovedWalletLoading || isMintingLoading}
              >
                Mint NFT
              </Button>
            ) : (
              <Link href="/onboard/nft">
                <a>
                  <Button type="button">What did I mint?</Button>
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
