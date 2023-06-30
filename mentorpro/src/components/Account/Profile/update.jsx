import { useContext, useState } from 'react'
import { Context } from '../../Context/userContext/Context'
import {AiFillEdit} from 'react-icons/ai'
import UpdateForm from '../../UpdateForm';

function Update() {
    const {user} = useContext(Context)
    const [showEditForm, setShowEditForm] = useState(false);
    const [userDetails, setUserDetails] = useState('');
 

const handleToggle = async (user_) => {
    setUserDetails(user_);
 setShowEditForm(!showEditForm);
}


  return (
    <div>
      <div className="user__Details">
           
           <h2>Username</h2>
           <p>{user.username}</p>
           <h2>Email</h2>
           <p>{user.email}</p>
           <h2>Phone</h2>
           <p>{user.phone}</p>
            <AiFillEdit className='icon' onClick={() => handleToggle(user)}/>

            {
            showEditForm && <UpdateForm setShowEditForm={setShowEditForm} user_={userDetails}/>
            }
        </div>   
    </div>
  )
}

export default Update
