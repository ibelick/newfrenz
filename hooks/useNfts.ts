import useSWR from "swr";
import { fetcher } from "utils/fetch";

const useNfts = (contractAddress: string) => {
  const { data, error } = useSWR(
    `https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=${contractAddress}&order_direction=desc&offset=0&limit=20`,
    fetcher
  );

  return {
    collection: data,
    isLoading: !error && !data,
    isError: !data?.collection,
  };
};

export default useNfts;
