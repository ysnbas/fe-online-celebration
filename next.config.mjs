/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["oaidalleapiprodscus.blob.core.windows.net"],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};

export default nextConfig;
