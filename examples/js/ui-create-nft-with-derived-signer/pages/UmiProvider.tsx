import { createUmi } from "@trezoaplex-foundation/umi-bundle-defaults";
import { walletAdapterIdentity } from "@trezoaplex-foundation/umi-signer-wallet-adapters";
import { bundlrUploader } from "@trezoaplex-foundation/umi-uploader-bundlr";
import { mplTokenMetadata } from "@trezoaplex-foundation/tpl-token-metadata";
import { useWallet } from "@trezoa/wallet-adapter-react";
import { ReactNode } from "react";
import { UmiContext } from "./useUmi";

export const UmiProvider = ({
  endpoint,
  children,
}: {
  endpoint: string;
  children: ReactNode;
}) => {
  const wallet = useWallet();
  const umi = createUmi(endpoint)
    .use(walletAdapterIdentity(wallet))
    .use(bundlrUploader())
    .use(mplTokenMetadata());

  return <UmiContext.Provider value={{ umi }}>{children}</UmiContext.Provider>;
};
