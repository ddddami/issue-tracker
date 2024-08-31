/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers () {
        return [
            { source: '/:paths*' ,
                headers: [
                    {key: 'referrer-policy', value: 'no-referrer'},
                ]
            }
        ]
    }
};

export default nextConfig;
