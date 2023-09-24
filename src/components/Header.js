import React from 'react'
import { signOut,onAuthStateChanged} from 'firebase/auth';
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {addUser,removeUser} from '../utils/userSlice'

const Header = () => {
  const dispatch=useDispatch()
  const navigate= useNavigate()
  const user = useSelector((store)=>store.user)

  const handleSignOut = ()=>{
          signOut(auth).then(() => {
          }).catch((error) => {
            navigate('/error')
          });
  }

  useEffect(()=>{
    // All Actions can be dispatched on all the Auth state changes from this Api
    onAuthStateChanged(auth, (user) => {
      //User Sign In/Up
      if (user) {
        const {uid,email,displayName} = user
        dispatch(
          addUser({
            uid:uid,
            email:email,
            displayName:displayName
          }))
        navigate('/browse')
      } 
      //User Sign Out
      else {
       dispatch(removeUser())
       navigate('/')
      }
    });
    },[])

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
       <img
       className='w-44'
       src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
       alt="netflix-logo" />


       {user && (
       <div className='flex p-2'>
        <img 
        className='w-12 h-12'
        alt='usericon'
          src='https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZBe7K0DPia9LvzIkQ4yzqX9NocZlAjS1MOyEuBQD1WmFuLKZwvq0bxc4n4_EV73khqgwed0PYLNml0V8LCymt31e7x-8jQ.png?r=229'
        />
        <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
       </div>
       )}
    </div>
  )
}

export default Header