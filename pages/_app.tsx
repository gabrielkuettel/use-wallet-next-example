import { useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  reconnectProviders,
  initializeProviders,
  WalletProvider,
} from "@txnlab/use-wallet";

const walletProviders = initializeProviders();

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    reconnectProviders(walletProviders);
  }, []);

  return (
    <WalletProvider value={walletProviders}>
      <Component {...pageProps} />{" "}
    </WalletProvider>
  );
}
