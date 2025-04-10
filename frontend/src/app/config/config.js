
const isProduction = process.env.NEXT_ENV === 'production';

const config = {
    endpoint: isProduction ? process.env.NEXT_PUBLIC_BASE_URL_PROD : process.env.NEXT_PUBLIC_BASE_URL_DEV,
};

export default config;
