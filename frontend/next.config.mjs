/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.tokopedia.net",
      "asset.kompas.com",
      "www.static-src.com",
      "encrypted-tbn0.gstatic.com",
    ],
  },
};

export default nextConfig;
