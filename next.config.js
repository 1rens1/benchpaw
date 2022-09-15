// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    sassOptions: {
        additionalData: `@import "styles/vars.scss";`,
    },
};

module.exports = nextConfig;
