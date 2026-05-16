/* Compatibility shim — some shared templates import `@/lib/site-config`.
 * The canonical content file lives at `@/content/site-config`. */
export * from "@/content/site-config";
export { siteConfig as default, siteConfig } from "@/content/site-config";
