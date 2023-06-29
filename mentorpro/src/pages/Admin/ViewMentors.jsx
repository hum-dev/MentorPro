import  { useEffect, useState } from 'react';
// import { set } from 'react-hook-form';
// import axios from 'axios';
import './View.css'

function ViewMentors() {
    const [mentors, setMentors] = useState([]);
   
    useEffect(() => {
        // Fetch user data from the server
        const fetchMentors = async () => {
          try {
            const response = await fetch('http://localhost:8081/mentors',{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
const allMentors = await response.json();
setMentors(allMentors);
console.log(allMentors);
            
          } catch (error) {
            console.error('Error fetching users:', error);
          }
        };
    
        fetchMentors();
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
            setMentors(editUser.recordset);
            console
        }

        handleEdit();
        }, []);
  return (
    <div className='table__wrapper'>
       <table className="user-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Bio</th>
                <th>TechField</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {mentors.map( (mentor, id) => (
                <tr key={id}>
                  <td>{mentor.mentor_id}</td>
                  <td>{mentor.full_name}</td>
                  <td>{mentor.gender}</td>
                  <td>{mentor.email}</td>
                  <td>{mentor.phone_number}</td>
                  <td>{mentor.bio}</td>
                  <td>{mentor.tech_field}</td>
                  <td>{mentor.role}</td>
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

export default ViewMentors
