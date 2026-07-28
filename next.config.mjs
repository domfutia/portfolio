import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "**",
      },
      // Substack image domains
      {
        protocol: "https",
        hostname: "substack-post-media.s3.amazonaws.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "substackcdn.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "bucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "*.substack.com",
        pathname: "**",
      },
    ],
  },
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default withMDX(nextConfig);
