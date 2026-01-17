
// number formatting
export type ThousandsGroupStyle = 'none' | 'thousand' | 'lakh' | 'wan'
export interface FormatNumberOptions {
  value: string | number
  allowNegative?: boolean
  decimalScale?: number
  decimalSeparator?: string
  fixedDecimalScale?: boolean
  thousandSeparator?: string | boolean
  thousandsGroupStyle?: ThousandsGroupStyle
}

// logs
export type LogLevel = 'debug' | 'info' | 'warn' | 'error'
export interface LoggerOptions {
  level?: LogLevel
  enabled?: boolean
  prefix?: string,
  json?: boolean
}

// id

export interface GenerateIdOptions {
  prefix?: string;
  length?: number;
  alphabet?: string;
  uppercase?: boolean;
  secure?: boolean;
  seed?: number;
  format?: "plain" | "uuid";
}