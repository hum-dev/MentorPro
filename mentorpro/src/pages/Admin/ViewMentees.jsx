import  { useEffect, useState } from 'react';
// import { set } from 'react-hook-form';
// import axios from 'axios';
import './View.css'

function ViewMentees() {
    const [mentees, setMentees] = useState([]);
   
    useEffect(() => {
        // Fetch user data from the server
        const fetchMentees = async () => {
          try {
            const response = await fetch('http://localhost:8081/mentees',{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
const allMentees = await response.json();
setMentees(allMentees);
console.log(allMentees);
            
          } catch (error) {
            console.error('Error fetching users:', error);
          }
        };
    
        fetchMentees();
      }, []);
    
      useEffect(() => {
        const handleEdit = async () => {
            const response = await fetch('http://localhost:8081/users',{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            const editUser = await response.json();
            setMentees(editUser.recordset);
            console
        }

        handleEdit();
        }, []);
  return (
    <div className='table__wrapper' > 
       <table className="user-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Bio</th>
                <th>Interests</th>
                <th>Expectations</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {mentees.map( (mentee, id) => (
                <tr key={id}>
                  <td>{mentee.mentee_id}</td>
                  <td>{mentee.full_name}</td>
                  <td>{mentee.gender}</td>
                  <td>{mentee.email}</td>
                  <td>{mentee.phone_number}</td>
                  <td>{mentee.bio}</td>
                  <td>{mentee.interests}</td>
                  <td>{mentee.expectations}</td>
                  <td>{mentee.role}</td>
                  <td>
                    <button className="delete-button" >Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
    </div>
  )
}

export default ViewMentees
