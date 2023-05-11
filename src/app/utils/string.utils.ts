import {
  CAPITAL_CAPITAL_SMALL_CONSECUTIVE_REGEX,
  SMALL_CAPTIAL_CONSECUTIVE_REGEX,
} from "./constants";

export const capitalizeFirstLetter = (text: string) =>
  text.charAt(0).toUpperCase() +
  text
    .replace(/(_|-)/g, " ")
    .trim()
    .replace(/\w\S*/g, function (str) {
     return str.substring(1);
    })
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2");
export function truncateWord(
  str: string,
  maxLength: number,
  location = "middle"
) {
  if (str.length <= maxLength) {
    return str;
  }

  let partLength = Math.ceil((maxLength - 3) / 2);
  let startStr, endStr;

  switch (location) {
    case "start":
      endStr = str.substring(str.length - maxLength + 3);
      return "..." + endStr;
    case "end":
      startStr = str.substring(0, maxLength - 3);
      return startStr + "...";
    case "middle":
    default:
      startStr = str.substring(0, partLength);
      endStr = str.substring(str.length - partLength);
      return startStr + "..." + endStr;
  }
}
