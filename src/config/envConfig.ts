import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

export const envConfig = {
    PORT: process.env.PORT,
    BASE_URL: process.env.BASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    DOMAIN: process.env.DOMAIN,
    V0_API_KEY: process.env.V0_API_KEY,
    AI_SERVICE_URL: process.env.AI_SERVICE_URL,
    USER_SERVICE_URL: process.env.USER_SERVICE_URL,
    KNOWLEDGE_SERVICE_URL: process.env.KNOWLEDGE_SERVICE_URL,
};
