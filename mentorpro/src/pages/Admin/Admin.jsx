import  { useEffect, useState } from 'react';
import axios from 'axios';
import './Admin.css';
import {Menu, MenuItem, Sidebar, SubMenu} from 'react-pro-sidebar';
import { FaBars } from 'react-icons/fa';

function Admin() {
    const [users, setUsers] = useState([]);
    const [collapsed, setCollapsed] = useState(false);
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
          <Sidebar className="sidebar" collapsed = {collapsed}> 
          <Menu>
            <MenuItem icon = {<FaBars/>} onClick= {() => {
              setCollapsed(!collapsed);
            }}>

            Dashboard
            </MenuItem>
            <SubMenu title="Users">
              <MenuItem>  
              view Users
              </MenuItem>
              <MenuItem>Delete Users</MenuItem>
            </SubMenu>
            <SubMenu title="Mentors">
              <MenuItem>View Mentors</MenuItem>
              <MenuItem>Delete Mentors</MenuItem>
              <MenuItem>Appointments</MenuItem>
            </SubMenu>
            <SubMenu title="Mentees">
              <MenuItem>View Mentees</MenuItem>
              <MenuItem>Delete Mentees</MenuItem>
              <MenuItem>Appointments</MenuItem>
            </SubMenu>
          </Menu>
          </Sidebar>
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
