import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'


const Body = () => {

  const dispatch = useDispatch()
  // const navigate = useNavigate()

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<Login/>
    },
    {
        path:'/browse',
        element:<Browse/>
    }
])

  useEffect(()=>{
    // All Actions can be dispatched on all the Auth state changes from this Api
    onAuthStateChanged(auth, (user) => {
      //User Sign In/Up
      if (user) {
        const {uid,email,displayName} = user
        dispatch(addUser({uid:uid,email:email,displayName:displayName}))
        // navigate('/browse'). Navigate have to be used inside the components for which the paths are defined
      } 
      //User Sign Out
      else {
       dispatch(removeUser())
      //  navigate('/'). Navigate have to be used inside the components for which the paths are defined
      }
    });
    },[])

  return (
    <div>

        <RouterProvider router={appRouter}/>

    </div>
  )
}

export default Body