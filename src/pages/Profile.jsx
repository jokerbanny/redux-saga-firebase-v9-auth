import { getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import { logoutStart } from '../redux/actions/usersAction'
import { useDispatch } from 'react-redux'

function Profile() {
  const auth = getAuth()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(logoutStart())
    navigate('/signin')
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Hello Welcome back! {auth.currentUser.displayName}</p>
      <button type='button' className='logOut' onClick={onLogout}>
        Logout
      </button>
    </div>
  )
}

export default Profile
