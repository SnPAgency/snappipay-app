import { useEffect, useState } from "react";
import { useAccount } from "@reown/appkit-react-native";
import { RPC_URLS, SUPPORTED_ASSETS } from "../utils/constants";
import { ethers, Provider } from "ethers";
import { erc20Abi } from "viem";
import { queryRustBackend } from "../utils/functions";

export const currency = "KES";

export const useAsset = () => {
  const { address, chainId } = useAccount();
  const [assets, setAssets] = useState<
    {
      id: number;
      symbol: string;
      chainId: number;
      native: boolean;
      contractAddress: string;
      balance: string;
      network: string;
      logo: any;
      fiatToAsset: number;
      assetToFiat: number;
    }[]
  >([]);
  const [totalBalance, setTotalBalance] = useState<number>(0);

  useEffect(() => {
    const loadAssets = async () => {
      try {
        let balanceArray = [];
        let balanceUsd = 0;

        for (let i = 0; i < SUPPORTED_ASSETS.length; i++) {
          const asset = SUPPORTED_ASSETS[i];
          const provider = new ethers.JsonRpcProvider(RPC_URLS[asset.chainId]);
          if (asset.native) {
            const balance = await provider.getBalance(address!);
            const price1 = await queryRustBackend(
              `asset_to_fiat/${asset.symbol}/1/${currency}`
            );

            const price2 = await queryRustBackend(
              `fiat_to_asset_amount/${currency}/1/${asset.symbol}`
            );

            const priceInUsd = await queryRustBackend(
              `asset_to_fiat/${asset.symbol}/${ethers.formatEther(balance)}/USD`
            );

            balanceUsd += parseFloat(priceInUsd.price);

            balanceArray.push({
              ...asset,
              balance: ethers.formatEther(balance),
              assetToFiat: price1.price,
              fiatToAsset: price2.price,
            });
          } else {
            const contract = new ethers.Contract(
              asset.contractAddress,
              erc20Abi,
              provider
            );

            const balance = await contract.balanceOf(address!);
            const decimals = await contract.decimals();
            const price1 = await queryRustBackend(
              `asset_to_fiat/${asset.symbol}/1/${currency}`
            );

            const price2 = await queryRustBackend(
              `fiat_to_asset_amount/${currency}/1/${asset.symbol}`
            );

            const priceInUsd = await queryRustBackend(
              `asset_to_fiat/${asset.symbol}/${ethers.formatEther(balance)}/USD`
            );
            balanceUsd += parseFloat(priceInUsd.price);
            balanceArray.push({
              ...asset,
              balance: ethers.formatUnits(balance, decimals),
              assetToFiat: price1.price,
              fiatToAsset: price2.price,
            });
          }
        }

        setAssets(balanceArray);
        setTotalBalance(balanceUsd);
      } catch (err) {
        console.log("Error loading assets", err);
      }
    };

    loadAssets();
  }, [address]);

  return { assets, totalBalance };
};
