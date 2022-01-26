import { initializeApp, getApps, getApp } from 'firebase/app'
import { collection, getFirestore, updateDoc, doc } from 'firebase/firestore'
import { format } from 'date-fns'
const firebaseConfig = {
  apiKey: 'AIzaSyAJoHSg0pfiyBE0sq57fQ7IG1H0HQWY3RM',
  authDomain: 'glass-setting-339118.firebaseapp.com',
  projectId: 'glass-setting-339118',
  storageBucket: 'glass-setting-339118.appspot.com',
  messagingSenderId: '449924465403',
  appId: '1:449924465403:web:dffd26404523a954a8e65e',
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()

const colRef = collection(db, 'thumbs')

/**
 * Update Thumbs post from firebase database
 * @date 2022-01-25
 * @param {fireStore connector} db
 * @param {collection name} 'thumbs'
 * @param {document id} data.id
 * @param {data} data from the voted thumbs post
 */
const addData = async data => {
  const ref = doc(db, 'thumbs', data.id)

  await updateDoc(ref, {
    lastUpdated: format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
    'votes.positive': data.votes.positive,
    'votes.negative': data.votes.negative,
  })
}

export { app, db, addData, colRef }
