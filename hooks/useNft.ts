import useSWR from "swr";
import { fetcher } from "utils/fetch";

const useNft = (contractAddress: string, tokenId: string) => {
  const { data, error } = useSWR(
    `https://testnets-api.opensea.io/api/v1/asset/${contractAddress}/${tokenId}/`,
    fetcher
  );

  return {
    collection: data,
    isLoading: !error && !data,
    isError: !data?.collection,
  };
};

export default useNft;
