import React from 'react'
import { signInWithGooglePopup } from '../Utils/Firebase/Firebase'
import { createUserDocumentFromAuth } from '../Utils/Firebase/Firebase'
export default function SignIn() {
 const logGoogleUser = async () => {

  const { user } = await signInWithGooglePopup()
  const userDocRef = await createUserDocumentFromAuth(user)

 }
 return (
  <div>
   Sign-in
   <button onClick={logGoogleUser}>
    Sign in with google
   </button>
  </div>
 )
}
