import  { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
// import { set } from 'react-hook-form';
// import axios from 'axios';
import './View.css'

function ViewMentors() {
    const [mentors, setMentors] = useState([]);

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
   
    useEffect(() => {
        // Fetch user data from the server
        
    
        fetchMentors();
      }, []);
    
const handleDelete = async (mentor_id) => {
    try {
        const response = await fetch(`http://localhost:8081/mentor/${mentor_id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const deleteMentor = await response.json();
        setMentors(deleteMentor);
        if (response.status === 200){
          toast.success("Mentor deleted successfully");
            
            fetchMentors();
        }
        
    } catch (error) {
        console.error('Error deleting mentor:', error);
    }

}

      
  return (
    <div className='table__wrapper'>
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
                    <button className="delete-button" onClick={()=> handleDelete(mentor.mentor_id)} >Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
    </div>
  )
}

export default ViewMentors
