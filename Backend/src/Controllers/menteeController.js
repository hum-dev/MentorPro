import sql from 'mssql';
import config from '../db/config.js';

//get all mentees
export const getMentees = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .query("SELECT * FROM Mentees");
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


//get Mentee by id
export const getMentee = async (req, res) => {
    const { mentee_id } = req.params;
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input('mentee_id', sql.Int, mentee_id)
            .query("SELECT * FROM Mentees WHERE mentee_id = @mentee_id");
        const user = result.recordset[0];
        if (user) {
            res.status(200).json(result.recordsets[0]);
        } else {
            res.status(404).json({ message: 'Mentee not found!' });
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



//Update a Mentee
export const updateMentee = async (req, res) => {
    try {
      const { mentee_id } = req.params;
      const { full_name, email,phone_number, bio, interest, expectation} = req.body; // Assuming the updated details are sent in the request body
  
      let pool = await sql.connect(config.sql);
      await pool
        .request()
        .input('mentee_id', sql.Int, mentee_id)
        .input('full_name', sql.VarChar, full_name)
        .input('email', sql.VarChar, email)
        .input('phone_number', sql.VarChar, phone_number)
        .input('bio', sql.VarChar, bio)
        .input('interest', sql.VarChar, interest)
        .input('expectation', sql.VarChar, expectation)
        .query('UPDATE Mentees SET full_name = @full_name, email = @email, phone_number  = @phone_number, bio = @bio, interest = @interest, expectation = @expectation WHERE mentor_id = @mentor_id');
  
      res.status(200).json({ message: `User with ID ${mentee_id} updated successfully` });
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong!' });
    } finally {
      sql.close();
    }
  };

// Delete a Mentee
export const deleteMentee = async (req, res) => {
    try {
      const { mentee_id } = req.params;
      let pool = await sql.connect(config.sql);
      const result = await pool
        .request()
        .input('mentee_id', sql.Int, mentee_id)
        .query('DELETE FROM Mentees WHERE mentee_id = @mentee_id');
  
      if (result.rowsAffected[0] === 0) {
        res.status(404).json({ message: 'User not found!' });
      } else {
        res.status(200).json({ message: `User with ID ${mentee_id} deleted successfully` });
      }
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong!' });
    } finally {
      sql.close();
    }
  };
// Register a mentee

export const create = async (req, res) => {
    const { full_name, email, phone_number,gender, bio, interest, expectation} = req.body;
    try {
      let pool = await sql.connect(config.sql);
      const result = await pool
        .request()
        .input('full_name', sql.VarChar, full_name)
        .input('email', sql.VarChar, email)
        .query(
          'SELECT * FROM Mentees WHERE full_name = @full_name OR email = @email'
        );
      const user = result.recordset[0];
      if (user) {
        res.status(409).json({ message: 'User or email already exists!' });
      } else {
        await pool
          .request()
          .input('full_name', sql.VarChar, full_name)
          .input('email', sql.VarChar, email)
          .input('phone_number', sql.VarChar, phone_number)
          .input('gender', sql.VarChar, gender)
          .input('bio', sql.VarChar, bio)
          .input('interest', sql.VarChar, interest)
          .input('expectation', sql.VarChar, expectation)
          .query(
            'INSERT INTO Mentees (full_name, email, phone_number, gender, bio, interest, expectation ) VALUES (@full_name, @email, @phone_number, @gender, @bio,  @interest, @expectation )'
          );
        res.status(200).json({ message: 'User created successfully!' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong!' });
    res.json(error.message)
      console.log(error);
    } finally {
      sql.close();
    }
  
};