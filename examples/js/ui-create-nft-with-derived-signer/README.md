# Upload and Create NFTs using a Derived Signer

- Uses wallet adapters to connect to a wallet in the browser.
- Creates, funds and uses a derived signer.
- Uploads image and metadata via Bundlr.
- Creates an NFT from the uploaded image and metadata.

```shell
# Create a new Next app with all default values.
npx create-next-app@latest ui-create-nft
cd ui-create-nft

# Install dependencies.
npm install @trezoaplex-foundation/umi \
  @trezoaplex-foundation/umi-signer-wallet-adapters \
  @trezoaplex-foundation/umi-uploader-bundlr \
  @trezoaplex-foundation/umi-signer-derived \
  @trezoaplex-foundation/tpl-toolbox \
  @lorisleiva/tpl-digital-asset \
  @trezoa/web3.js \
  @trezoa/wallet-adapter-base \
  @trezoa/wallet-adapter-react \
  @trezoa/wallet-adapter-react-ui \
  @trezoa/wallet-adapter-wallets

# Check out the code for the index page.
cat pages/index.tsx

# Run locally.
npm run dev
```
