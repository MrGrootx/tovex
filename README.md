# tovex

A collection of essential developer utilities for your daily coding needs.

## Installation

```bash
npm install tovex
```

```bash
yarn add tovex
```

```bash
pnpm add tovex
```

```bash
bun add tovex
```

## Usage

### formatNumber

Format numbers with customizable separators and decimal handling.

```typescript
import { formatNumber } from "tovex";

// Basic usage
formatNumber({ value: 1000000 });
// "1,000,000"

// With decimal places
formatNumber({ value: 1234.567, decimalScale: 2 });
// "1,234.57"

// Custom separators
formatNumber({ 
  value: 1000000, 
  thousandSeparator: " ",
  decimalSeparator: ","
});
// "1 000 000"

// Different grouping styles
formatNumber({ 
  value: 100000, 
  thousandsGroupStyle: "lakh" 
});
// "1,00,000" (Indian numbering)
```

#### Options

- `value` (required): The number or string to format
- `allowNegative` (optional): Allow negative numbers (default: `true`)
- `decimalScale` (optional): Number of decimal places (default: `Infinity`)
- `decimalSeparator` (optional): Decimal separator character (default: `"."`)
- `fixedDecimalScale` (optional): Always show decimal places (default: `false`)
- `thousandSeparator` (optional): Thousand separator (default: `","`)
- `thousandsGroupStyle` (optional): Grouping style - `"thousand"`, `"lakh"`, `"wan"`, or `"none"` (default: `"thousand"`)

## More Utilities Coming Soon

We're continuously adding more developer utilities. Stay tuned for updates!

## License

ISC

## Author

[justgroot](https://github.com/MrGrootx)
