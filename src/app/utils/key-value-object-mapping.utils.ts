import { KeyValueTypes } from "../types/TableTypes";
import { WalletResponseData } from "../types/WalletResponseData";

export const keyValueObjectMapping = (data: WalletResponseData) => {
  const newObjectArray: Array<KeyValueTypes> = Object.entries(data).map(
    (value) => ({
      key: value[0],
      value: value[1],
    })
  );
  return newObjectArray;
};
