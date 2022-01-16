import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC9hrXYuq2f3TA1MdsLWoU_6F_p9v124y0',
  authDomain: 'redux-saga-firebase-v9-auth.firebaseapp.com',
  projectId: 'redux-saga-firebase-v9-auth',
  storageBucket: 'redux-saga-firebase-v9-auth.appspot.com',
  messagingSenderId: '718503604441',
  appId: '1:718503604441:web:431dfb558e1629cdd84ec8',
}
// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
