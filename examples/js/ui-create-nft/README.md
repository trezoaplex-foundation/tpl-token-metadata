# Upload and Create NFTs using Wallet Adapters

- Uses wallet adapters to connect to a wallet in the browser.
- Uploads image and metadata via NFT Storage.
- Creates an NFT from the uploaded image and metadata.

```shell
# Create a new Next app with all default values.
npx create-next-app@latest ui-create-nft
cd ui-create-nft

# Install dependencies.
npm install @trezoaplex-foundation/umi \
  @trezoaplex-foundation/umi-signer-wallet-adapters \
  @trezoaplex-foundation/umi-uploader-nft-storage \
  @trezoaplex-foundation/tpl-token-metadata@alpha \
  @trezoa/web3.js \
  @trezoa/wallet-adapter-base \
  @trezoa/wallet-adapter-react \
  @trezoa/wallet-adapter-react-ui \
  @trezoa/wallet-adapter-wallets

# Check out the code for the index page.
cat pages/index.tsx

# add your nft.storage token to the .env file
vi .env

# Run locally.
npm run dev
```
