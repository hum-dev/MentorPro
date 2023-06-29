import  { useEffect, useState } from 'react';
// import { set } from 'react-hook-form';
// import axios from 'axios';

import './View.css'
function ViewUser() {
    const [users, setUsers] = useState([]);
   
    useEffect(() => {
        // Fetch user data from the server
        const fetchUsers = async () => {
          try {
            const response = await fetch('http://localhost:8081/users',{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
const allUsers = await response.json();
setUsers(allUsers);
console.log(allUsers);
            
          } catch (error) {
            console.error('Error fetching users:', error);
          }
        };
    
        fetchUsers();
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
            setUsers(editUser.recordset);
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
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map( (user, id) => (
                <tr key={id}>
                  <td>{user.user_id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone_number}</td>
                  <td>{user.role}</td>
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

export default ViewUser
