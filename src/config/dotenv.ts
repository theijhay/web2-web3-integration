import dotenv from 'dotenv';

dotenv.config();

if (!process.env.MONGO_URI || !process.env.CONTRACT_ADDRESS || !process.env.PRIVATE_KEY || !process.env.PROVIDER_URL) {
    throw new Error('Missing required environment variables!');
}

export const config = {
    mongoUri: process.env.MONGO_URI,
    contractAddress: process.env.CONTRACT_ADDRESS,
    privateKey: process.env.PRIVATE_KEY,
    providerUrl: process.env.PROVIDER_URL,
};
