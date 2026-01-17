import type { GenerateIdOptions } from "../types";

const DEFAULT_ALPHABET =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const cryptoObj =
    typeof globalThis !== "undefined" && "crypto" in globalThis
        ? (globalThis.crypto as Crypto)
        : undefined;

function getRandomBytes(length: number, secure: boolean): number[] {
    if (secure && cryptoObj?.getRandomValues) {
        const bytes = new Uint8Array(length);
        cryptoObj.getRandomValues(bytes);
        return Array.from(bytes);
    }

    return Array.from({ length }, () => Math.floor(Math.random() * 256));
}

function formatAsUUID(hex: string): string {
    return (
      hex.slice(0, 8) + "-" +
      hex.slice(8, 12) + "-" +
      hex.slice(12, 16) + "-" +
      hex.slice(16, 20) + "-" +
      hex.slice(20, 32)
    );
  }
  

function createSeededRandom(seed: number) {
    let value = seed;
    return () => {
        value = (value * 9301 + 49297) % 233280;
        return value / 233280;
    };
}

export function generateId(options: GenerateIdOptions = {}): string {
    const {
      prefix = "",
      length = 8,
      alphabet = DEFAULT_ALPHABET,
      uppercase = false,
      secure = true,
      seed,
      format = "uuid",
    } = options;
  
    const finalLength = format === "uuid" ? 32 : length;
    const random = seed !== undefined ? createSeededRandom(seed) : null;
    const bytes = getRandomBytes(finalLength, secure);
  
    let id = "";
    for (let i = 0; i < finalLength; i++) {
      const index = random
        ? Math.floor(random() * alphabet.length)
        : bytes[i]! % alphabet.length;
  
      id += alphabet[index];
    }
  
    if (uppercase) id = id.toUpperCase();
  
    if (format === "uuid") {
      id = formatAsUUID(id);
    }
  
    return prefix + id;
  }