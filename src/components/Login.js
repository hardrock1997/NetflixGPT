import React, { useRef } from 'react'
import Header from './Header'
import { useState } from 'react'
import {checkValidDataForSignUp, checkValidDataForSignIn } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile } from "firebase/auth"
import {auth} from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { HERO } from '../utils/constants'

const Login = () => {

const [isSignInForm,setIsSignForm]=useState(true)
const [errorMessage,setErrorMessage]=useState(null)

const email=useRef(null)
const password=useRef(null)
const name=useRef(null)

const dispatch = useDispatch()

    const toggleSignInForm=()=>{
        setIsSignForm(!isSignInForm)
    }

    const handleButtonClick=()=>{
        let message=''
        if(isSignInForm) {
          message=checkValidDataForSignIn(email.current.value,password.current.value)
          setErrorMessage(message)
        }
        else {
         message=checkValidDataForSignUp(email.current.value,password.current.value,name.current.value)
         setErrorMessage(message)
        }
        if(message) return

        if(!isSignInForm) {
           createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
           .then((userCredential)=>{
            const user=userCredential.user
            updateProfile(user, {
                displayName: name.current.value
              }).then(() => {
                const {uid,email,displayName} = auth.currentUser
                dispatch(addUser({uid:uid,email:email,displayName:displayName}))
              }).catch((error) => {
                setErrorMessage(error.message)
              });
            
           })
           .catch((error)=>{
            const errorCode=error.code
            const errorMessage=error.message
            setErrorMessage(errorCode+" - "+errorMessage)
           })

        }
        else {
            signInWithEmailAndPassword(auth,email.current.value,password.current.value)
            .then((userCredential)=>{
                const user=userCredential.user
            })
            .catch((error)=>{
                const errorCode=error.code
                const errorMessage=error.message
                setErrorMessage(errorCode+" - "+errorMessage) 
            })
        }
    }
  return (
    <div>
        <Header/>
        <div className='absolute w-screen'>
         <img
            src={HERO}
            alt='hero'
            className='w-screen h-screen object-cover'
        />
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='p-12 bg-black absolute w-full md:w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
            <h1 className='font-bold text-2xl md:text-3xl py-0 mb-4'>
                {isSignInForm?'Sign In':'Sign Up'}
                </h1>
            {!isSignInForm && 
            <input 
            type='text'
            ref={name}
            placeholder='Full Name' 
            className='p-4 my-4 w-full bg-gray-700 rounded-lg'
            />
            }
            <input 
            type='text'
            ref={email}
            placeholder='Email Address' 
            className='p-4 my-4 w-full bg-gray-700 rounded-lg'
            />
            <input 
            type='password'
            ref={password}
            placeholder='Password' 
            className='p-4 my-4 w-full bg-gray-700 rounded-lg'
            />
            <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
            {isSignInForm?'Sign In':'Sign Up'}
            </button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
            {isSignInForm?'New to Netflix? Sign Up Now':'Already a User, Sign In Now'}
                
                </p>
        </form>
    </div>
  )
}

export default Login