// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAJoHSg0pfiyBE0sq57fQ7IG1H0HQWY3RM',
  authDomain: 'glass-setting-339118.firebaseapp.com',
  projectId: 'glass-setting-339118',
  storageBucket: 'glass-setting-339118.appspot.com',
  messagingSenderId: '449924465403',
  appId: '1:449924465403:web:dffd26404523a954a8e65e',
}
//getDoc(doc(db, 'users', auth.currentUser.uid, 'coworkingSessions', slug))
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()

//collections ref
// const colRef = collection(db, 'posts', 'categories', 'business')
const colRef = collection(db, 'thumbs')
const getData = getDocs(colRef)

// .then(snapshot => {
//   console.log('snapshot', snapshot)
//   console.log('snapshot.docs', snapshot.docs)
//   let data = []
//   snapshot.docs.forEach(doc => {
//     data.push({ ...doc.data(), id: doc.id })
//   })
//   console.log('data', data)
// })
export { app, db, getData }
