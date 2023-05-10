import { getBalance, getChainId } from "../services/ether";
import { MODAL_CONSTANTS, WALLET_ERROR_MESSAGE } from "./constants";
export const getResponseData = () =>({message : MODAL_CONSTANTS.WALLET_CONTENT,
  data: {
    id: "",
    address: "",
    balance: "",
  },
  loading :false})

export const connectToWallet = async () => {
  const responseData = getResponseData()
  if (!window.ethereum) {
    responseData.message =WALLET_ERROR_MESSAGE.WALLET_NOT_FOUND;
  } else {
    const accounts: Array<string> | string = await getAccounts();

    if (Array.isArray(accounts)) {
      responseData.data.address = accounts[0]
    
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
    responseData.data.balance = balance.toString();
    responseData.data={
      ...responseData.data,
      balance:balance.toString(),
      address:account
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
  balance: string
) => {
  const responseData = getResponseData();
  try {
    const chain = await getChainId();
    responseData.data.id = chain.chainId.toString();
    responseData.data.address = account;
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
