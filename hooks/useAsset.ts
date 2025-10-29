import { useEffect, useState } from "react";
import { useAccount } from "@reown/appkit-react-native";
import { RPC_URLS, SUPPORTED_ASSETS } from "../utils/constants";
import { ethers, Provider } from "ethers";
import { erc20Abi } from "viem";

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
      price: number;
    }[]
  >([]);

  useEffect(() => {
    const loadAssets = async () => {
      try {
        let balanceArray = [];

        for (let i = 0; i < SUPPORTED_ASSETS.length; i++) {
          const asset = SUPPORTED_ASSETS[i];
          const provider = new ethers.JsonRpcProvider(RPC_URLS[asset.chainId]);
          if (asset.native) {
            const balance = await provider.getBalance(address!);
            balanceArray.push({
              ...asset,
              balance: ethers.formatEther(balance),
            });
          } else {
            const contract = new ethers.Contract(
              asset.contractAddress,
              erc20Abi,
              provider
            );

            const balance = await contract.balanceOf(address!);
            const decimals = await contract.decimals();

            balanceArray.push({
              ...asset,
              balance: ethers.formatUnits(balance, decimals),
            });
          }
        }

        setAssets(balanceArray);
      } catch (err) {
        console.log("Error loading assets", err);
      }
    };

    loadAssets();
  }, [address]);

  return { assets };
};
