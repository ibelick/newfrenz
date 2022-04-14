import useNft from "hooks/useNft";

interface ImageNFTProps {
  contractAddress: string;
  tokenId: string;
}

const ImageNFT: React.FC<ImageNFTProps> = ({ contractAddress, tokenId }) => {
  const { nft, isLoading } = useNft(contractAddress, tokenId);

  if (isLoading) {
    return null;
  }

  return (
    <figure>
      <img src={nft.image_url} alt={nft.name} />
      <figcaption className="mt-2 text-gray-400">
        {nft.name}
        {nft?.creator?.user?.username
          ? ` by ${nft.creator.user.username}`
          : null}
        .{" "}
        <a
          href="https://opensea.io/assets/0xb932a70a57673d89f4acffbe830e8ed7f75fb9e0/33191"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Minted as an NFT
        </a>
      </figcaption>
    </figure>
  );
};

export default ImageNFT;
