import { WalletAdapterNetwork } from "@trezoa/wallet-adapter-base";
import { WalletProvider } from "@trezoa/wallet-adapter-react";
import { WalletModalProvider } from "@trezoa/wallet-adapter-react-ui";
import {
  LedgerWalletAdapter,
  SolflareWalletAdapter,
} from "@trezoa/wallet-adapter-wallets";
import { clusterApiUrl } from "@trezoa/web3.js";
import type { AppProps } from "next/app";
import { useMemo } from "react";
import { UmiProvider } from "./UmiProvider";

import "@/styles/globals.css";
import "@trezoa/wallet-adapter-react-ui/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(
    () => [
      new LedgerWalletAdapter(),
      new SolflareWalletAdapter({ network }),
    ],
    [network]
  );

  return (
    <WalletProvider wallets={wallets} autoConnect>
      <UmiProvider endpoint={endpoint}>
        <WalletModalProvider>
          <Component {...pageProps} />
        </WalletModalProvider>
      </UmiProvider>
    </WalletProvider>
  );
}
