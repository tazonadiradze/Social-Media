import { initializeApp } from 'firebase/app'
import {
 getAuth,
 signInWithRedirect,
 signInWithPopup,
 GoogleAuthProvider
} from 'firebase/auth'
import {
 getFirestore,
 doc,
 getDoc,
 setDoc,
 collection,

} from 'firebase/firestore'

const firebaseConfig = {
 apiKey: "AIzaSyDhuI4s-a7vhIWKhTIy_csox_H3V04QzTo",
 authDomain: "socialmedia-e8310.firebaseapp.com",
 projectId: "socialmedia-e8310",
 storageBucket: "socialmedia-e8310.appspot.com",
 messagingSenderId: "761972920053",
 appId: "1:761972920053:web:cf2448e1d2054d4dd2bfbc",
 measurementId: "G-JQ2XRHMXLJ"
};


const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
 prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
export const db = getFirestore()
export const createUserDocumentFromAuth = async (userAuth) => {
 const userDocref = doc(db, 'users', userAuth.uid)
 console.log(userDocref)
 const userSnapshot = await getDoc(userDocref)
 console.log(userSnapshot)
 console.log(userSnapshot.exists)
 if (!userSnapshot.exists()) {
  const { displayName, email } = userAuth
  const createdAt = new Date()

  try {
   await setDoc(userDocref, {
    displayName,
    email,
    createdAt
   })
  } catch (error) {
   console.log('error', error.message);
  }
 }
 return userDocref
}