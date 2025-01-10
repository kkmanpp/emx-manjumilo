/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";
// const nextConfig = {
//   compiler: {
//     removeConsole: {
//       exclude: ["error"],
//     },
//   },
// };

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost", // Add "localhost" to the allowed domains
      },
      {
        protocol: "https",
        hostname: "emx-manjumilo.vercel.app",
      },
    ],
  },
  compiler: isProd
    ? {
        removeConsole: {
          exclude: ["error"],
        },
      }
    : undefined,
};

export default nextConfig;
