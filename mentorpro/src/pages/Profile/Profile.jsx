// import { useContext } from "react"
// import { Context } from "../../components/Context/userContext/Context"
import Main from "../../components/Account/Main/Body"
import SideNav from "../../components/Account/SideNav/SideNav"

import "./Profile.css"
function Profile() {
// const {user} = useContext(Context)
  return (

    <>
    
    <div className="det">
      <SideNav />
   
      <Main />
    </div>
    </>
  )
}

export default Profile
