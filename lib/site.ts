/**
 * Backwards-compatible barrel- prefer importing from the underlying modules:
 * `@/lib/config/company`, `@/lib/config/site`, `@/lib/data/products`,
 * `@/lib/data/services`, `@/lib/data/socials`.
 */
export * from "./config/company";
export * from "./config/site";
export * from "./data/products";
export * from "./data/services";
export * from "./data/socials";
