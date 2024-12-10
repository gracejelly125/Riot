/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ddragon.leagueoflegends.com", // 로드할 이미지의 도메인
      },
    ],
  },
};

export default nextConfig;

// https://nextjs.org/docs/messages/next-image-unconfigured-host
