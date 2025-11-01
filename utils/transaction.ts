import { BrowserProvider, Contract, JsonRpcSigner, Provider } from "ethers";
import { erc20Abi } from "viem";
import evmrampabi from "../utils/abi/rampcontractabi.json";

export async function approve(
  address: string,
  spender: string,
  amount: bigint,
  provider: Provider,
  contractAddress: string
) {
  try {
    const ethersProvider = new BrowserProvider(provider as any);
    const signer = new JsonRpcSigner(ethersProvider, address);
    const contract = new Contract(contractAddress, erc20Abi, signer);
    const response = await contract.approve(spender, amount);
    console.log("approve response", response);
    return response.hash;
  } catch (err) {
    console.log("approve error", err);
  }
}

export async function offRampDeposit(
  provider: Provider,
  contractAddress: string,
  address: string,
  asset: string,
  amount: bigint,
  medium: number,
  region: number,
  data: string
) {
  try {
    const ethersProvider = new BrowserProvider(provider as any);
    const signer = new JsonRpcSigner(ethersProvider, address);
    const contract = new Contract(contractAddress, evmrampabi.abi, signer);
    const response = await contract.offRampDeposit(
      asset,
      amount,
      address,
      medium,
      region,
      data
    );
    return response.hash;
  } catch (err) {
    console.log("offRampDeposit error", err);
  }
}

export async function offRampNative(
  provider: Provider,
  contractAddress: string,
  address: string,

  amount: bigint,

  medium: number,
  region: number,
  data: any
) {
  try {
    const ethersProvider = new BrowserProvider(provider as any);
    const signer = new JsonRpcSigner(ethersProvider, address);
    const contract = new Contract(contractAddress, evmrampabi.abi, signer);
    const response = await contract.offRampNative(medium, region, data, {
      value: amount,
    });
    return response.hash;
  } catch (err) {
    console.log("offRamp error", err);
  }
}
