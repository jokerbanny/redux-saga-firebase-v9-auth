import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from 'firebase/auth'
import { setDoc, doc, serverTimestamp, getDoc } from 'firebase/firestore'
import { db } from '../database/firebase'

const auth = getAuth()

// User Signup
export const usersSignupApi = async (name, email, password) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  )

  const user = userCredential.user

  updateProfile(auth.currentUser, {
    displayName: name,
  })

  const userCopy = { name, email }
  userCopy.timestamp = serverTimestamp()

  await setDoc(doc(db, 'users', user.uid), userCopy)

  return auth.currentUser
}

// User  Sginin
export const usersSigninApi = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, password)

  if (userCredential.user) {
    return auth.currentUser
  }
}

// User Logout
export const usersLogoutApi = () => {
  auth.signOut()
  return
}

export const setUserApi = async () => {
  auth.onAuthStateChanged(async (authUser) => {
    if (authUser) {
      await setAuth(authUser)
    } else {
      await setAuth(authUser)
    }
  })
  const setAuth = (res) => {
    return res
  }
}

// User Sign In & SignUp With Google OAuth
export const googleOAuthApi = async () => {
  const auth = getAuth()
  const provider = new GoogleAuthProvider()
  const result = await signInWithPopup(auth, provider)
  const user = result.user

  // Check for user
  const docRef = doc(db, 'users', user.uid)
  const docSnap = await getDoc(docRef)

  // If user, doesn't exist, create user
  if (!docSnap.exists()) {
    await setDoc(doc(db, 'users', user.uid), {
      name: user.displayName,
      email: user.email,
      timestamp: serverTimestamp(),
    })
  }
  return auth.currentUser
}

// User Sign In & SignUp With Facebook
export const facebookOAuthApi = async () => {
  const auth = getAuth()
  const provider = new FacebookAuthProvider()
  const result = await signInWithPopup(auth, provider)
  const user = result.user

  // Check for user
  const docRef = doc(db, 'users', user.uid)
  const docSnap = await getDoc(docRef)

  // If user, doesn't exist, create user
  if (!docSnap.exists()) {
    await setDoc(doc(db, 'users', user.uid), {
      name: user.displayName,
      email: user.email,
      timestamp: serverTimestamp(),
    })
  }

  return auth.currentUser
}
