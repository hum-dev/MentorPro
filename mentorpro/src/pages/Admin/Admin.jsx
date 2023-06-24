import  { useEffect, useState } from 'react';
import axios from 'axios';
import './Admin.css';

function Admin() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        // Fetch user data from the server
        const fetchUsers = async () => {
          try {
            const response = await axios.get('/api/users');
            setUsers(response.data);
          } catch (error) {
            console.error('Error fetching users:', error);
          }
        };
    
        fetchUsers();
      }, []);
    
      const deleteUser = async (userId) => {
        try {
          await axios.delete(`/api/users/${userId}`);
          setUsers(users.filter(user => user.id !== userId));
        } catch (error) {
          console.error('Error deleting user:', error);
        }
      };
    
      return (
        <div className="admin-container">
          <h2>Admin Dashboard</h2>
          <table className="user-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button className="delete-button" onClick={() => deleteUser(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}

export default Admin
