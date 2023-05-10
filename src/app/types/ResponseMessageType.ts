import { WalletResponseData } from "./WalletResponseData";

export interface ResponseMessageType {
  message: string;
  loading: boolean;
  data: WalletResponseData;
}
