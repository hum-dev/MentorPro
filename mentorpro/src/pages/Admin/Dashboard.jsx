import  {  useState } from 'react';
import {Link} from 'react-router-dom'

import './Dashboard.css';
import {Menu, MenuItem, Sidebar, SubMenu} from 'react-pro-sidebar';
import { FaBars } from 'react-icons/fa';

function Dashboard() {
    
    const [collapsed, setCollapsed] = useState(false);
    
    
      return (
        <div className="admin-container">
          <Sidebar className="sidebar" collapsed = {collapsed}> 
          <Menu className='menu'>
            <MenuItem icon = {<FaBars/>} onClick= {() => {
              setCollapsed(!collapsed);
            }}>

            Dashboard
            </MenuItem>
           
            <SubMenu label='Users' title="Users">
              <MenuItem component={<Link to='Viewuser'/>}>  
              view Users
              </MenuItem>
             
            </SubMenu>
            
            <SubMenu label='Mentors' title="Mentors" style={{color: "#0c0c22"}}>
               
              <MenuItem component={<Link to='ViewMentors'/>}>View Mentors</MenuItem>
              
              <MenuItem>Appointments</MenuItem>
            </SubMenu>
            
            <SubMenu label='Mentees' title="Mentees">
              
              <MenuItem component={<Link to='ViewMentees'/>}>View Mentees</MenuItem>
             
              
              
              <MenuItem>Appointments</MenuItem>
            </SubMenu>
          </Menu>
          </Sidebar>
         
        </div>
      );
}

export default Dashboard
