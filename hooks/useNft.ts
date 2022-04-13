import useSWR from "swr";
import { fetcher } from "utils/fetch";

const useNft = (
  contractAddress: string,
  tokenId: string,
  isTestnet?: boolean
) => {
  const { data, error } = useSWR(
    `https://${
      isTestnet ? `testnets-` : ``
    }api.opensea.io/api/v1/asset/${contractAddress}/${tokenId}/`,
    fetcher
  );

  return {
    nft: data,
    isLoading: !error && !data,
    isError: !data?.collection,
  };
};

export default useNft;
