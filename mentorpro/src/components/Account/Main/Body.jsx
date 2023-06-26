import './Main.css'
import { useContext } from 'react'
import { Context } from '../../Context/ProfileContext/ProfileContext'

function Main() {
  const {ui} = useContext(Context)
  

  return (
    <div className='mainnav'>

    {
      ui === 'profile' ? (
        <div className="mainnav__wrapper">
        <h2>User Profile</h2>

      </div>
     
      ) : ui === 'update' ? (
         
      <div className="mainnav__wrapper">
      <h2>update Profile</h2>
    </div>
      ) : 'profile'
    }

      
    
    </div>
  )
}

export default Main
