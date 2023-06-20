import mssql from 'mssql';
import { sqlConfig } from '../config/config.js';



    //create the cconnection => function connecting to the database
    
    export class Connection {
        pool;
        constructor() {
            this.pool = this.getConnection(); // Get a connection pool from the database 
            //when class is instantiated
        }

        async getConnection() {
            const pool = await mssql.connect(sqlConfig);
            return pool;
        }

        //create the connection => function connecting to the database

        //insert/add params in the request body
        createRequest(request, params) {
            for (const key in params) {
                request.input(key, params[key]);
            }

            return request;
        }

        //we will call this function through this class whenever we want to query using procedure

        async executeProcedure(procedureName, params) {
            let pool = await this.pool.getConnection();
            let request = await pool.request();
            params ? (request = this.createRequest(request, params)) : request;
            return await request.execute(procedureName);
        }

        //we will call this function through this class whenever we want to query using a simple query 

        async executeQuery(query, params) {
            const request = await this.pool.request();
            params ? (request = this.createRequest(request, params)) : request;
            return await request.query(query);
        }
    }

//