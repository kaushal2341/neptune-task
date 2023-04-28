import { TWO_DECIMAL_NUMBER_ONLY_PATTERN } from "./constants";
export const checkTwoDecimalNumber = (value: string) =>
  TWO_DECIMAL_NUMBER_ONLY_PATTERN.test(value) ? true : false;
