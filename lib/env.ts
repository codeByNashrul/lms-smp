import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().min(1),
    LMS_JWT_SECRET: z.string().min(32),
    ARCJET_KEY: z.string().optional()
  },
  experimental__runtimeEnv: {},
});
