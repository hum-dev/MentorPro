import dotenv from 'dotenv';
import assert from 'assert';

dotenv.config();

const { PORT, HOST, HOST_URL, SQL_USER, SQL_PORT, SQL_PASSWORD, SQL_DB, SQL_SERVER,JWT_SECRET } = process.env; 

const sqlEncrypt = process.env.SQL_ENCRYPT === 'true';

assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');

const config = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    sql: {
        server: SQL_SERVER,
        sqlPort: SQL_PORT,
        database: SQL_DB,
        user: SQL_USER,
        password: SQL_PASSWORD,
        options: {
            encrypt: false,
            enableArithAbort: true,
            trustServerCertificate: true,
            trustedConnection: true
            
        }
    },
    jwt_secret: JWT_SECRET
};

export default config;
