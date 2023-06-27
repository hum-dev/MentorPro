import './Profile.css'
import pic from '../../../assets/images/portrait.png'
import { useContext } from 'react'
import { Context } from '../../Context/userContext/Context'

function Profile() {
    const {user} = useContext(Context)
 
  return (
   
      <div className="prof">
        <div className="user__Avatar">
            <img src={pic} alt="" />
        </div>
        <div className="user__Details">
            <h2>UserId</h2>
            <p>{user.id}</p>
            <h2>Username</h2>
            <p>{user.username}</p>
            <h2>Email</h2>
            <p>{user.email}</p>
            <h2>Phone</h2>
            <p>{user.phone_number}</p>

         </div>   
    

      </div>
      
    )
}

export default Profile
