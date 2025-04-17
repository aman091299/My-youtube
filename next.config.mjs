/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    devIndicators: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.iconpacks.net',
                pathname: '/icons/2/free-user-icon-3296-thumb.png/**',
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
                pathname: '/wikipedia/commons/thumb/**',
            },
            {   
                protocol:'https',
                hostname:'lh3.googleusercontent.com',
                pathname:'/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500/**'
            },{
                protocol:'https',
                hostname:"i.ytimg.com",
                pathname:"/vi/**"
            }
        ],
    },
};

export default nextConfig;