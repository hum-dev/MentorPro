import './Main.css'
import { useContext } from 'react'
import { Context } from '../../Context/ProfileContext/ProfileContext'
import Profile from '../Profile/Profile'
import Update from '../Profile/update'

function Main() {
  const {ui} = useContext(Context)
  

  return (
    <div className='mainnav'>

    {
      ui === 'profile' ? (
        <div className="mainnav__wrapper">
        <h2>User Profile</h2>
           <Profile />
      </div>
     
      ) : ui === 'update' ? (
         
      <div className="mainnav__wrapper">
      <h2>update Profile</h2>
              <Update />
    </div>
      ) : 'profile'
    }

      
    
    </div>
  )
}

export default Main
