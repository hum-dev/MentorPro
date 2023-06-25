import sql from 'mssql';
import config from '../db/config.js';

//get all mentors
export const getMentors = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .query("SELECT * FROM Mentors");
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


//get Mentor by id
export const getMentor = async (req, res) => {
    const { mentor_id } = req.params;
    try {
        let pool = await sql.connect(config.sql);
        const result = await pool.request()
            .input('mentor_id', sql.Int, mentor_id)
            .query("SELECT * FROM Mentors WHERE mentor_id = @mentor_id");
        const user = result.recordset[0];
        if (user) {
            res.status(200).json(result.recordsets[0]);
        } else {
            res.status(404).json({ message: 'Mentor not found!' });
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



//Update a Mentor
export const updateMentor = async (req, res) => {
    try {
      const { mentor_id } = req.params;
      const { full_name,gender, email,phone_number, bio, tech_field } = req.body; // Assuming the updated details are sent in the request body
  
      let pool = await sql.connect(config.sql);
      await pool
        .request()
        .input('mentor_id', sql.Int, mentor_id)
        .input('full_name', sql.VarChar, full_name)
        .input('email', sql.VarChar, email)
        .input('phone_number', sql.VarChar, phone_number)
        .input('bio', sql.VarChar, bio)
        .input('tech_field', sql.VarChar, tech_field)
        .query('UPDATE Mentors SET full_name = @full_name, email = @email, phone_number  = @phone_number, bio = @bio, tech_field = @tech_field WHERE mentor_id = @mentor_id');
  
      res.status(200).json({ message: `User with ID ${mentor_id} updated successfully` });
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong!' });
    } finally {
      sql.close();
    }
  };

// Delete a Mentor
export const deleteMentor = async (req, res) => {
    try {
      const { mentor_id } = req.params;
      let pool = await sql.connect(config.sql);
      const result = await pool
        .request()
        .input('mentor_id', sql.Int, mentor_id)
        .query('DELETE FROM Mentors WHERE mentor_id = @mentor_id');
  
      if (result.rowsAffected[0] === 0) {
        res.status(404).json({ message: 'Mentor not found!' });
      } else {
        res.status(200).json({ message: `Mentor with ID ${mentor_id} deleted successfully` });
      }
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong!' });
    } finally {
      sql.close();
    }
  };
// Register a Mentor

export const create = async (req, res) => {
    const { full_name, email, phone_number,gender, bio, tech_field} = req.body;
    try {
      let pool = await sql.connect(config.sql);
      const result = await pool
        .request()
        .input('full_name', sql.VarChar, full_name)
        .input('email', sql.VarChar, email)
        .query(
          'SELECT * FROM Mentors WHERE full_name = @full_name OR email = @email'
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
          .input('tech_field', sql.VarChar, tech_field)
          .query(
            'INSERT INTO Mentors (full_name, email, phone_number, gender, bio, tech_field ) VALUES (@full_name, @email, @phone_number, @gender, @bio,  @tech_field )'
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