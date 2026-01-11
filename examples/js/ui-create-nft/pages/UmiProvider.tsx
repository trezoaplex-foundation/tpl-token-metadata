import { createUmi } from "@trezoaplex-foundation/umi-bundle-defaults";
import { walletAdapterIdentity } from "@trezoaplex-foundation/umi-signer-wallet-adapters";
import { nftStorageUploader } from "@trezoaplex-foundation/umi-uploader-nft-storage";
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
  let nftStorageToken = process.env.NFTSTORAGE_TOKEN;
  if (!nftStorageToken || nftStorageToken === 'AddYourTokenHere'){
    console.error("Add your nft.storage Token to .env!");
    nftStorageToken = 'AddYourTokenHere';
  }
  const umi = createUmi(endpoint)
    .use(walletAdapterIdentity(wallet))
    .use(nftStorageUploader({token: nftStorageToken}))
    .use(mplTokenMetadata());

  return <UmiContext.Provider value={{ umi }}>{children}</UmiContext.Provider>;
};
