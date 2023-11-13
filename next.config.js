/** @type {import('next').NextConfig} */
const nextConfig = {
    "reactStrictMode": true,
    "typescript": {
        "ignoreBuildErrors": false,
        "tsconfigPath": "./tsconfig.json",
    },
    // allow file host lh3.googleusercontent.com
    "images": {
        "domains": ["lh3.googleusercontent.com"],
    },
}

module.exports = nextConfig
