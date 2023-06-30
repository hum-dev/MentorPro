import  { useEffect, useState, useContext } from 'react';
import { Context } from './Context/userContext/Context';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './UpdateForm.css';

function UpdateForm({ setShowEditForm, user_ }) {
    const { user } = useContext(Context);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');

  useEffect(() => {
    setUserName(user_.username);
    setUserEmail(user_.email);
    setUserPhone(user_.phone);
    }, [user_]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const body = { userName, userEmail, userPhone };
            console.log(body)
            const response = await fetch(
                `http://localhost:8081/user/${user.id}`,
                {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body),

                }
            );
            console.log(response)
            if (response.status === 200) {
                toast.success('User updated successfully');
            }
        } catch (err) {
            console.error(err.message);
toast.error('Error updating user');
        }
    };

 

    return (
        <div className="updateForm">
            <form className="form">
                <input
                    type="text"
                    value={userName}
                   onChange={(e) => setUserName( e.target.value )}
                    name="username"
                    id="username"
                />

                <input
                    type="email"
                    value={userEmail}
                   onChange={(e) => setUserEmail( e.target.value )}
                    name="email"
                />
                <input
                    type="text"
                    value={userPhone}
                     onChange={(e) => setUserPhone( e.target.value )}
                    name="phone_number"
                />

                <button onClick={() => setShowEditForm(false)}>exit</button>
                <button type="submit" onClick={handleSubmit}>
                    Update
                </button>
            </form>
        </div>
    );
}

UpdateForm.propTypes = {
    setShowEditForm: PropTypes.func.isRequired,
    user_: PropTypes.shape({
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    }).isRequired,
};

export default UpdateForm;
                    
               

    