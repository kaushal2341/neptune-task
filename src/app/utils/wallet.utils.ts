import { getBalance, getChainId } from "../services/ether";
import { MODAL_CONSTANTS, WALLET_ERROR_MESSAGE } from "./constants";
export const getResponseData = () =>({message : MODAL_CONSTANTS.WALLET_CONTENT,
  data: {
    account: "",
    chainId: BigInt(""),
    balance:BigInt(""),
  },
  loading :false})

export const connectToWallet = async () => {
  const responseData = getResponseData()
  if (!window.ethereum) {
    responseData.message =WALLET_ERROR_MESSAGE.WALLET_NOT_FOUND;
  } else {
    const accounts: Array<string> | string = await getAccounts();

    if (Array.isArray(accounts)) {
      responseData.data.account = accounts[0]
    
      responseData.loading=true;
    } else {
      responseData.message=accounts;
      responseData.loading=false;
    }
  }
  return responseData;
};
export const getBalanceFromwalletService = async (account: string) => {
  const responseData =  getResponseData()
  try {
    let balance = await getBalance(account);
    responseData.data.balance = balance;
    responseData.data={
      ...responseData.data,
      balance:balance,
      account
    }
    responseData.loading=true;
  } catch (e: any) {
    responseData.message=e.message;
    responseData.loading=false;
  }
  return responseData;
};

export const getChainIdFromwalletService = async (
  account: string,
  balance: bigint
) => {
  const responseData = getResponseData();
  try {
    const chain = await getChainId();
    responseData.data.chainId = chain.chainId;
    responseData.data.account = account;
    responseData.data.balance = balance;
    responseData.loading=false;
  } catch (e: any) {
    responseData.message=e.message;
    responseData.loading=false;
  }
  return responseData;
};
const getAccounts = async () => {
  try {
    const accounts = await window.ethereum?.request({
      method: "eth_requestAccounts",
    });
    return accounts;
  } catch (e: any) {
    return e.message;
  }
};
