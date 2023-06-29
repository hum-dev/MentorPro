import { Outlet } from "react-router-dom"
import Dashboard from "./Dashboard"
import './Admin.css'

function Admin() {
  return (
    <div className="view_user">
      <Dashboard/>
      <div className="data">
      <Outlet/>
      </div>
      
    </div>
  )
}

export default Admin
