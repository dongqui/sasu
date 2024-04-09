/** @type {import('next').NextConfig} */
// import anal from "@next/bundle-analyzer";
// const nextConfig = anal({
//   enabled: true,
//   openAnalyzer: true,
// });
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dptlwzemlfpgmncbydjx.supabase.co",
      },
    ],
  },
};
export default nextConfig;
