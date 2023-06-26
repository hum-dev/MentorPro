import './SideNav.css'
import {CgProfile} from 'react-icons/cg'

import {ImProfile} from 'react-icons/im'
import { useContext } from 'react'
import { Context } from '../../Context/ProfileContext/ProfileContext'

function SideNav() {
  const {dispatch} = useContext(Context)

  const handleProf = () => {
    dispatch({type: 'PROFILE', payload: 'profile'})
  }

  const handleUpdate = () => {
    dispatch({type: 'UPDATE', payload: 'update'})
  }
  return (
    <div className='sidenav'>
        <div className='sidenav__wrapper'>
            <div className='sidenav__wrapper__profile' onClick={handleProf}>
               <CgProfile className='icon'/> Profile
            </div>
        </div>
        <div className='sidenav__wrapper'>
          
            <div className='sidenav__wrapper__item' onClick={handleUpdate}>
              <ImProfile className='icon2'/>  update profile
            </div>
        </div>
    </div>
  )
}

export default SideNav
