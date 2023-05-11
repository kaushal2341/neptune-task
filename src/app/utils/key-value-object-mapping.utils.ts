import { KeyValueTypes } from "../types/TableTypes";
import { WalletResponseData } from "../types/WalletResponseData";
import { capitalizeFirstLetter } from "./string.utils";

export const keyValueObjectMapping = (data: WalletResponseData) => {
  const newObjectArray: Array<KeyValueTypes> = Object.entries(data).map(
    (value) => ({
      key: capitalizeFirstLetter(value[0]),
      value: value[1],
    })
  );
  return newObjectArray;
};
