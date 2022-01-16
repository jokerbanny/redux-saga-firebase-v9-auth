import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Signin from './pages/SignIn'
import Profile from './pages/Profile'

import PriveRoute from './hooks/PrivateRoute'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setAuth, setUserStart } from './redux/actions/usersAction'
import { getAuth } from 'firebase/auth'

function App() {
  const auth = getAuth()
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setAuth(authUser))
      } else {
        dispatch(setAuth(authUser))
      }
    })
  }, [dispatch])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/profile' element={<PriveRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
