import arcjet, { shield, detectBot } from "@arcjet/next";
import { env } from "@/lib/env";

const arcjetKey = env.ARCJET_KEY ?? "dummy-key";

export default arcjet({
  key: arcjetKey,
  characteristics: ["fingerprint"],
  rules: [
    shield({
      mode: "LIVE",
    }),
    detectBot({
      mode: "LIVE",
      allow: ["CATEGORY:SEARCH_ENGINE"],
    }),
  ],
});