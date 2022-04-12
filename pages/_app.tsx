import "styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "wagmi";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider autoConnect>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
