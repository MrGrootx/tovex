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