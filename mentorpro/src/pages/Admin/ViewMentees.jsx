import  { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
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
    
      const handleDelete = async (mentee_id) => {
        try {
            const response = await fetch(`http://localhost:8081/mentor/${mentee_id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const deleteMentee = await response.json();
            setMentees(deleteMentee);
            if (response.status === 200){
              toast.success("Mentee deleted successfully");
                
                setTimeout(() => {
                    window.location.reload();
                }, 2000)
            }
            
        } catch (error) {
            console.error('Error deleting mentor:', error);
        }
    
    }
  return (
    <div className='table__wrapper' > 
    <div className="user-table">
       <table >
            <thead>
              <tr className='row'>
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
                    <button className="delete-button" onClick={()=> handleDelete(mentee.mentee_id)} >Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
    </div>
  )
}

export default ViewMentees
