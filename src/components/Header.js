import React from 'react'
import { signOut,onAuthStateChanged} from 'firebase/auth';
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {addUser,removeUser} from '../utils/userSlice'
import { LOGO, USERICON } from '../utils/constants';
import {toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch=useDispatch()
  const navigate= useNavigate()
  const user = useSelector((store)=>store.user)
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)

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

    const handleGptSearchClick = ()=>{
      dispatch(toggleGptSearchView())
    }

    const handleLanguageChange = (e)=>{
      dispatch(changeLanguage(e.target.value))
    }

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex flex-col md:flex-row  md:justify-between bg-black sm:bg-blue-900 md:bg-green-900 '>
       <img
       className='w-44 mx-auto md:mx-0'
       src={LOGO}
       alt="netflix-logo" />


       {user && (
       <div className='flex p-2 justify-between'>
        {showGptSearch && <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map(lang=>{
            return <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
          })}
        </select>}
        <button className='py-2 px-4 m-2 bg-purple-800 text-white rounded-lg mx-4 my-2'
          onClick={handleGptSearchClick}
        >
          {showGptSearch? 'Homepage':'GPT Search'}
          </button>
        <img 
        className='w-12 h-12 rounded-lg hidden md:block'
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