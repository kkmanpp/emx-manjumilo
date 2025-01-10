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
    domains: ["localhost", "emx-manjumilo.vercel.app"], // Add "localhost" to the allowed domains
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
