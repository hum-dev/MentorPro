import { useEffect,useState, useContext} from 'react';
import { toast } from 'react-toastify';
import {Context} from '../../Context/userContext/Context'
import "react-toastify/dist/ReactToastify.css";
import './UpdateForm.css'

import PropTypes from 'prop-types';

function UpdateForm({ setShowEditForm, users }) {
    const { user} = useContext(Context)
    // const { username, email, phone } = user;
    const [userName, setUserName] = useState('');
    const [useremail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');

  

 useEffect(() => {
  
       setUserName(user.username);
 
 }, [user.username]);

useEffect(() => {
  setUserEmail(user.email);
}, []);
useEffect(() => {
    setUserPhone(user.phone);
}, []);

const handleSubmit = async (e) => {
    e.preventDefault();
try {
  const response= await fetch(`http://localhost:8081/user/${user_id}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const updateUser = await response.json();
            setUserName(updateUser);
            setUserEmail(updateUser);
            setUserPhone(updateUser);
            if (response.status === 200){
                toast.success("User updated successfully");
                setTimeout(() => {
                    window.location.reload();
                }, 2000)
            }
    
}
 catch (error) {
    // console.error('Error updating user:', error);
    toast.error("Error updating user");
}
// setShowEditForm(false);
};

    return (
        <div className='updateForm'>
            <form className='form'>
                <input
                    type='text'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value) } 
                    name='username'
                    id='username'
                />

                <input
                    type='email'
                    value={useremail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    name='email'
                />
                <input
                    type='text'
                    value={userPhone}
                    onChange={(e) => setUserPhone(e.target.value)}
                    name='phone_number'
                />

                <button onClick={() => setShowEditForm(false)}>exit</button>
                <button type='submit' onClick={handleSubmit}>
                    Update
                </button>
            </form>
        </div>
    );
}

UpdateForm.propTypes = {
    setShowEditForm: PropTypes.func.isRequired,
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    }).isRequired,
};



export default UpdateForm
//