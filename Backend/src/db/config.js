import dotenv from 'dotenv';
import assert from 'assert';

// dotenv.config({path:'./.env'});
dotenv.config();

const { PORT , SQL_USER , SQL_PASSWORD, SQL_DB, SQL_SERVER,JWT_SECRET } = process.env; 

assert(PORT, 'PORT is required');

const config = {
    port: PORT,
    sql: {
        server: SQL_SERVER,
        
        database: SQL_DB,
        user: SQL_USER,
        password: SQL_PASSWORD,
        options: {
            encrypt: true,
            enableArithAbort: true,
            trustServerCertificate: false,
            trustedConnection: true
            
        }
    },
    jwt_secret: JWT_SECRET
};

export default config;
