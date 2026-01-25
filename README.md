# tovex

Essential developer utilities for your daily coding needs.

## Installation

```bash
npm install tovex
```

## Usage

## Number Utilities

### formatNumber

Format numbers with customizable separators and decimal handling.

```typescript
import { formatNumber } from "tovex";

formatNumber({ value: 1000000 });
// "1,000,000"

formatNumber({ value: 1234.567, decimalScale: 2 });
// "1,234.57"

formatNumber({ value: 100000, thousandsGroupStyle: "lakh" });
// "1,00,000"
```



## Logging

### createLogger

Configurable logger with log levels and formatting.

```typescript
import { createLogger } from "tovex";

const logger = createLogger();
logger.info("Application started");
logger.warn("Warning message");
logger.error("Error occurred");
logger.debug("Debug info");
```


## ID Utilities

### generateId

Generate unique IDs with customizable options.

```typescript
import { generateId } from "tovex";

generateId();
generateId({ prefix: "user_" });
generateId({ format: "uuid" });
generateId({ length: 16 });
```

## Array Utilities

### where

Filter an array of objects by key and optional value.

```typescript
import { where } from "tovex";

where({ data: users, key: "role", value: "admin" });
```

### truncate

Shorten long text and append "..." (or custom string).

```typescript
import { truncate } from "tovex";

truncate("Hello world", 5);
```

### unique

Get a new array with duplicate values removed.

```typescript
import { unique } from "tovex";

unique([1, 1, 2, 3]);
// [1, 2, 3]
```


### randomFromArray

Pick a random item from an array.

```typescript
import { randomFromArray } from "tovex";

randomFromArray(["apple", "banana", "orange"]);
```


## Async Utilities

### sleep

Pause execution for a given amount of time.

```typescript
import { sleep } from "tovex";

await sleep(1000);
```


### tryCatch

Safely execute an async function without repetitive try/catch blocks.

```typescript
import { tryCatch } from "tovex";

const [error, result] = await tryCatch(fetchData);
```


## Time Utilities

### formatDuration

Convert seconds into a human-readable duration string.

```typescript
import { formatDuration } from "tovex";

formatDuration(3661);
```


### timeAgo

Format a date into a relative time string.

```typescript
import { timeAgo } from "tovex";

timeAgo(new Date(Date.now() - 60000));
```



## License

MIT
