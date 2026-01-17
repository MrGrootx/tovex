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

### generateId

Generate unique IDs with customizable options.

```typescript
import { generateId } from "tovex";

// Basic usage
generateId();
// "a3k9x2m1"

// With prefix
generateId({ prefix: "user_" });
// "user_a3k9x2m1"

// UUID format
generateId({ format: "uuid" });
// "a3k9x2m1-b4l0y3n2-c5m1z4o3-d6n2a5p4"

// Custom length
generateId({ length: 16 });
// "a3k9x2m1b4l0y3n2"

// Uppercase
generateId({ uppercase: true, length: 10 });
// "A3K9X2M1B4"

// Custom alphabet (numbers only)
generateId({ alphabet: "0123456789", length: 6 });
// "384729"

// Seeded (deterministic)
generateId({ seed: 12345, length: 8 });
// Always generates the same ID for the same seed
```

**Options:** `prefix`, `length` (default: `8`), `alphabet`, `uppercase`, `secure` (default: `true`), `seed`, `format` (`"plain"` | `"uuid"`)

## License

MIT
