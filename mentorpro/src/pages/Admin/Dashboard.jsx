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
          <Menu>
            <MenuItem icon = {<FaBars/>} onClick= {() => {
              setCollapsed(!collapsed);
            }}>

            Dashboard
            </MenuItem>
            <SubMenu title="Users">
              <Link to='Viewuser'><MenuItem>  
              view Users
              </MenuItem></Link>
              
             
            </SubMenu>
            <SubMenu title="Mentors">
              <MenuItem>View Mentors</MenuItem>
             
              <MenuItem>Appointments</MenuItem>
            </SubMenu>
            <SubMenu title="Mentees">
              <MenuItem>View Mentees</MenuItem>
              
              <MenuItem>Appointments</MenuItem>
            </SubMenu>
          </Menu>
          </Sidebar>
         
        </div>
      );
}

export default Dashboard
