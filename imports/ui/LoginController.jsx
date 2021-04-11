import React,{useState} from 'react'
import SignIn from './components/SignIn'
import Register from './RegisterForm'
export default function LoginController() {
    const [isLogin,setIslogin]=useState(true)
    console.log("Controller function " , isLogin, "\n\n")
    return (
        <div>
           {isLogin?<Register setIslogin= {setIslogin}/>:<SignIn setIslogin= {setIslogin}/>} 
        </div>
    )
}
