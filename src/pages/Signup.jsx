import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {
  facebookOAuthStart,
  googleOAuthStart,
  signupStart,
} from '../redux/actions/usersAction'

function Signup() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const { name, email, password } = formData

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
    dispatch(signupStart({ name, email, password }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Form Sigup</h1>
        <div>
          <input
            type='text'
            id='name'
            placeholder='Name'
            onChange={handleChange}
            value={name}
          />
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
          <button type='submit'>Signup</button>
          <Link to='/signin'>
            <button type='button'>Signin</button>
          </Link>
        </div>
      </div>
      {/* Google oAuth */}
      <button type='button' onClick={() => dispatch(googleOAuthStart())}>
        Google Sigup
      </button>
      <button type='button' onClick={() => dispatch(facebookOAuthStart())}>
        Facebook Sigup
      </button>
    </form>
  )
}

export default Signup
