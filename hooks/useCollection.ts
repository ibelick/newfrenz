import useSWR from "swr";
import { fetcher } from "utils/fetch";

const useCollection = (slug: string) => {
  const { data, error } = useSWR(
    `https://testnets-api.opensea.io/api/v1/collection/${slug}`,
    fetcher
  );

  return {
    collection: data,
    isLoading: !error && !data,
    isError: !data?.collection,
  };
};

export default useCollection;
