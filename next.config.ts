import type { NextConfig } from "next";

const web3formsAccessKey =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() ||
  process.env.WEB3FORMS_ACCESS_KEY?.trim() ||
  "";

const nextConfig: NextConfig = {
  images: { formats: ["image/webp"] },
  env: {
    NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY: web3formsAccessKey,
  },
};

export default nextConfig;
