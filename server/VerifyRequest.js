import * as dotenv from 'dotenv';

export default function VerifyRequest(req) {
    dotenv.config();
    
    if (req.get('origin') === process.env.CLIENT_URL || req.get('origin') === process.env.CLIENT_URL_SECURE)
        return true;
    else
        return false;
}