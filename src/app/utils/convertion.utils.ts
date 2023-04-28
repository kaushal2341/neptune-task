import { Dispatch, SetStateAction } from "react";
import { CURRENCY_TYPE } from "./constants";
import { preciseRound } from "./number.utils";
export const convertBusdToNepali = (value: string) =>
  value ? preciseRound(Number(value) / 3, 2) : "";
export const convertNepaliToBusd = (value: string) =>
  value ? preciseRound(Number(value) * 3, 2) : "";
export const convertionRateToAnother = (
  name: string,
  value: string,
  onChangeNepaliValue: Dispatch<SetStateAction<any>>,
  onChangeBusdValue: Dispatch<SetStateAction<any>>
) => {
  let convertedValue = "";
  switch (name) {
    case CURRENCY_TYPE.BUSD:
      convertedValue = convertBusdToNepali(value);
      onChangeNepaliValue(convertedValue);
      break;
    case CURRENCY_TYPE.NEPALI:
      convertedValue = convertNepaliToBusd(value);
      onChangeBusdValue(convertedValue);
      break;
    default:
      return "";
  }
};
export const setChangeHandler = (
  name: string,
  value: string,
  onChangeNepaliValue: Dispatch<SetStateAction<any>>,
  onChangeBusdValue: Dispatch<SetStateAction<any>>
) => {
  switch (name) {
    case CURRENCY_TYPE.BUSD:
      onChangeBusdValue(value);
      break;
    case CURRENCY_TYPE.NEPALI:
      onChangeNepaliValue(value);
      break;
    default:
      return "";
  }
};
