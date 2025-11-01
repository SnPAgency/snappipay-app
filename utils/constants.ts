import { ethers } from "ethers";

export const HEDERA_CONTRACT = "0xbe46a37d51e3bb2317d8741a062328e74f319cad";
export const HEDERA_USDT_CONTRACT =
  "0x4888D165cCB6D3E648138C17EeffA119E7Ad320c";

export const SUPPORTED_ASSETS = [
  {
    id: 1,
    symbol: "HBAR",
    chainId: 296,
    native: true,
    contractAddress: ethers.ZeroAddress,
    network: "Hedera Testnet",
    logo: require("../assets/eth.png"),
    price: 0.2,
  },
  {
    id: 2,
    symbol: "USDT",
    chainId: 296,
    native: false,
    contractAddress: HEDERA_USDT_CONTRACT,
    network: "Hedera Testnet",
    logo: require("../assets/usdt.png"),
    price: 1.0,
  },
];

export const SUPPORTED_CHAIN_IDS = [296];

export const RPC_URLS: { [chainId: number]: string } = {
  296: "https://testnet.hashio.io/api",
};
