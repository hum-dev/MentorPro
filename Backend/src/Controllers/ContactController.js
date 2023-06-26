import sql from 'mssql';
import config from '../db/config.js';

export const getMessages = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .query('SELECT * FROM Messages');
        res.status(200).json(result.recordset);
    }
    catch (error) {
        res.status(500).json({ error: 'Something went wrong!' });
        console.log(error);
    }
    finally {
        sql.close();
    }
};

export const getMessage = async (req, res) => {
    const { message_id } = req.params;
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input('id', sql.Int, message_id)
            .query("SELECT * FROM Messages WHERE message_id = @id");
        const message = result.recordset[0];
        if (message) {
            res.status(200).json(result.recordsets[0]);
        } else {
            res.status(404).json({ message: 'Message not found!' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Something went wrong!' });
        console.log(error);
    }
    finally {
        sql.close();
    }
};

export const createMessage = async (req, res) => {
    const {name,email,phonenumber,subject, message } = req.body;
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input('name', sql.NVarChar, name)
            .input('email', sql.NVarChar, email)
            .input('phonenumber', sql.NVarChar, phonenumber)
            .input('subject', sql.NVarChar, subject)
            .input('message', sql.NVarChar, message)
            .query("INSERT INTO Messages (name, email, phonenumber, subject, message) VALUES (@name,@email,@phonenumber,@subject , @message)");
        res.status(201).json({ message: 'Message created successfully!' });
    }
    catch (error) {
        res.status(500).json({ error: 'Something went wrong!' });
        console.log(error);
    }
    finally {
        sql.close();
    }
};