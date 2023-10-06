/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "d2vcaowhp5v7jq.cloudfront.net"
            }
        ]
    }
}

module.exports = nextConfig
