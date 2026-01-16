import type { FormatNumberOptions, ThousandsGroupStyle } from "./types";

export function formatNumber({
  value,
  allowNegative = true,
  decimalScale = Infinity,
  decimalSeparator = ".",
  fixedDecimalScale = false,
  thousandSeparator = ",",
  thousandsGroupStyle = "thousand",
}: FormatNumberOptions): string {
  if (value === null || value === undefined) return "";

  let numStr = String(value).replace(/,/g, "");

  const isNegative = numStr.startsWith("-");
  if (isNegative) {
    if (!allowNegative) numStr = numStr.slice(1);
    else numStr = numStr.slice(1);
  }

  if (!/^\d*(\.\d*)?$/.test(numStr)) return "";

  let [integerPart, decimalPart = ""] = numStr.split(".");

  if (decimalScale !== Infinity) {
    decimalPart = decimalPart.slice(0, decimalScale);
    if (fixedDecimalScale) {
      decimalPart = decimalPart.padEnd(decimalScale, "0");
    }
  }

  if (thousandSeparator && thousandsGroupStyle !== "none") {
    const sep = typeof thousandSeparator === "string" ? thousandSeparator : ",";

    integerPart = applyGrouping(integerPart ?? "", sep, thousandsGroupStyle);
  }

  let result = integerPart;

  if (decimalPart.length > 0) {
    result += decimalSeparator + decimalPart;
  }

  return isNegative && allowNegative ? `-${result}` : result ?? "";
}

function applyGrouping(
  value: string,
  separator: string,
  style: ThousandsGroupStyle
): string {
  switch (style) {
    case "lakh":
      return value.replace(/(\d)(?=(\d\d)+\d$)/g, `$1${separator}`);

    case "wan":
      return value.replace(/(\d)(?=(\d{4})+$)/g, `$1${separator}`);

    case "thousand":
    default:
      return value.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  }
}
