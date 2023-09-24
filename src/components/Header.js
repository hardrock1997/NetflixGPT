import React from 'react'
import { signOut,onAuthStateChanged} from 'firebase/auth';
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {addUser,removeUser} from '../utils/userSlice'
import { LOGO, USERICON } from '../utils/constants';

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
  const unsubscribe=onAuthStateChanged(auth, (user) => {
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
    //Unsubscribe when component Unmounts
    return ()=>unsubscribe()
    },[])

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
       <img
       className='w-44'
       src={LOGO}
       alt="netflix-logo" />


       {user && (
       <div className='flex p-2'>
        <img 
        className='w-12 h-12'
        alt='usericon'
          src={USERICON}
        />
        <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
       </div>
       )}
    </div>
  )
}

export default Header