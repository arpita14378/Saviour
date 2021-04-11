import { Button } from '@material-ui/core'
import React from 'react'
import HomePage from './HomePage'
import NavBar from './NavBar'
import NewNavbar from './NewNavbar'
import Login from './components/Login'
export const  App=() =>{

  return (
    <div>
     {!Meteor.userId()?<Login/>:<NewNavbar/>}
      
    </div>
  )
}
