import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {
  facebookOAuthStart,
  googleOAuthStart,
  signinStart,
} from '../redux/actions/usersAction'
import OAuth from './OAuth'

function Signin() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const { currentUser } = useSelector((state) => state.user)

  useEffect(() => {
    if (currentUser) {
      navigate('/profile')
    }
  }, [currentUser, navigate])

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(signinStart({ email, password }))
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Form Signin</h1>
        <div>
          <input
            type='email'
            id='email'
            placeholder='Email'
            onChange={handleChange}
            value={email}
          />
          <input
            type={showPassword ? 'text' : 'password'}
            id='password'
            placeholder='Password'
            onChange={handleChange}
            value={password}
          />
          <button
            type='button'
            onClick={() => setShowPassword((prevState) => !prevState)}
          >
            Show Password
          </button>
          <button type='submit'>Signin</button>
          <Link to='/signup'>
            <button type='button'>Signup</button>
          </Link>
        </div>
      </div>
      {/* Google oAuth */}
      <button type='button' onClick={() => dispatch(googleOAuthStart())}>
        Google Sigin
      </button>
      <button type='button' onClick={() => dispatch(facebookOAuthStart())}>
        Facebook Signin
      </button>
    </form>
  )
}

export default Signin
