import * as SecureStore from "expo-secure-store";
import axios, { AxiosError } from "axios";
// import { jwtDecode } from "jwt-decode";
// import UniversalProvider from "@walletconnect/universal-provider";

export async function saveItem(key: string, value: string) {
  await SecureStore.setItemAsync(key, value);
}
export async function getItem(key: string) {
  return await SecureStore.getItemAsync(key);
}
export async function deleteItem(key: string) {
  await SecureStore.deleteItemAsync(key);
}

export async function queryRustBackend(endpoint: string) {
  try {
    const apiUrl = process.env.EXPO_PUBLIC_RUST_BACKEND;

    const response = await axios.get(`${apiUrl}/${endpoint}`);

    return response.data;
  } catch (error) {
    console.error("Error querying Rust backend:", error);

    console.log(JSON.stringify(error, null, 2));
  }
}

export async function queryBackend(endpoint: string, token: string) {
  try {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;

    const response = await axios.get(`${apiUrl}/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error querying backend:", error);

    console.log(JSON.stringify(error, null, 2));
  }
}

export async function postToBackend(
  endpoint: string,
  token: string,
  data: any
) {
  try {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;

    const response = await axios.post(`${apiUrl}/${endpoint}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error posting to backend:", error);
    console.log(JSON.stringify(error, null, 2));
  }
}

// export function decodeJWT(token: string) {
//   try {
//     const decoded = jwtDecode(token);
//     return decoded;
//   } catch (error) {
//     console.error("Error decoding JWT:", error);
//     return null;
//   }
// }
