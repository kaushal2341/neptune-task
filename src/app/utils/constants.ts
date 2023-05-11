export const TWO_DECIMAL_NUMBER_ONLY_PATTERN = /^\d+(\.\d{0,2})?$/;
export const SMALL_CAPTIAL_CONSECUTIVE_REGEX = /([a-z])([A-Z])/g;
export const CAPITAL_CAPITAL_SMALL_CONSECUTIVE_REGEX = /([A-Z])([A-Z][a-z])/g
export const CONVERTION_VALUE_OF_BUSD_TO_NEPALI = 3;
export enum CURRENCY_TYPE {
  NEPALI = "fromCurrency",
  BUSD = "toCurrency",
}
export const FORM_CONSTANTS = {
  TITLE: "Crypto Converter",
  WALLET_LINK: "Click wallet details",
};
export const MODAL_CONSTANTS = {
  WALLET_CONTENT: `Wallet not connected. Please click the "Connect" button below.`,
  WALLET_HEADING: `Wallet Details`,
};
export enum WALLET_ERROR_MESSAGE{
  WALLET_NOT_FOUND = 'Wallet not found. Please install metamask  extension on your browser',
}
