import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  env: {
    NEXT_PUBLIC_GEMINI_API_KEY: process.env.NEXT_PUBLIC_GEMINI_API_KEY || "",
    N8N_RTR_WEBHOOK_URL: process.env.N8N_RTR_WEBHOOK_URL || "https://n8n.rifaterdemsahin.com/webhook/rtr-notification",
    N8N_API_KEY: process.env.N8N_API_KEY || "",
  },
};

export default nextConfig;
