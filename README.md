# tovex

Essential developer utilities for your daily coding needs.

## Installation

```bash
npm install tovex
```

## Usage

### formatNumber

Format numbers with customizable separators and decimal handling.

```typescript
import { formatNumber } from "tovex";

formatNumber({ value: 1000000 });
// "1,000,000"

formatNumber({ value: 1234.567, decimalScale: 2 });
// "1,234.57"

formatNumber({ 
  value: 100000, 
  thousandsGroupStyle: "lakh" 
});
// "1,00,000"
```

**Options:** `value` (required), `decimalScale`, `thousandSeparator`, `decimalSeparator`, `thousandsGroupStyle` (`"thousand"` | `"lakh"` | `"wan"` | `"none"`), `allowNegative`, `fixedDecimalScale`

### createLogger

Configurable logger with log levels and formatting.

```typescript
import { createLogger } from "tovex";

const logger = createLogger();

logger.info("Application started");
logger.warn("Warning message");
logger.error("Error occurred");
logger.debug("Debug info");

// With options
const logger = createLogger({
  level: "warn",
  prefix: "API",
  json: true
});
```

**Options:** `level` (`"debug"` | `"info"` | `"warn"` | `"error"`), `enabled`, `prefix`, `json`

### createId

Generate unique IDs with optional prefix.

```typescript
import { createId } from "tovex";

createId();
// "k3j9x2m1"

createId("user_");
// "user_k3j9x2m1"
```

## License

MIT
