// src/AppKitConfig.ts (or wherever you prefer to configure it)
import "@walletconnect/react-native-compat";

import {
  createAppKit,
  bitcoin,
  solana,
  type AppKitNetwork,
} from "@reown/appkit-react-native";
import { EthersAdapter } from "@reown/appkit-ethers-react-native";
import { SolanaAdapter } from "@reown/appkit-solana-react-native";
import { BitcoinAdapter } from "@reown/appkit-bitcoin-react-native";

// You can use 'viem/chains' or define your own chains using `AppKitNetwork` type. Check Options/networks for more detailed info
import { mainnet, polygon, hederaTestnet } from "viem/chains";
import { storage } from "../utils/StorageUtil";

// const projectId = "7170f2a21a9c2ae1ec3481cdd24cabae"; // Obtain from https://dashboard.reown.com/
const projectId = "b8e39dfb697ba26ac5a77a4b29b35604";

const ethersAdapter = new EthersAdapter();
const solanaAdapter = new SolanaAdapter();
const bitcoinAdapter = new BitcoinAdapter();

export const appKit = createAppKit({
  projectId,
  networks: [mainnet, polygon, solana, bitcoin, hederaTestnet],
  defaultNetwork: hederaTestnet, // Optional: set a default network
  adapters: [ethersAdapter, solanaAdapter, bitcoinAdapter],
  storage: storage,

  // Other AppKit options (e.g., metadata for your dApp)
  metadata: {
    name: "My Awesome dApp",
    description: "My dApp description",
    url: "https://myapp.com",
    icons: ["https://myapp.com/icon.png"],
    redirect: {
      native: "YOUR_APP_SCHEME://",
      universal: "YOUR_APP_UNIVERSAL_LINK.com",
    },
  },
});
