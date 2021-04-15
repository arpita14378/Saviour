import React ,{useState} from 'react'
import Login from './components/Login'
import RegisterForm from './components/RegisterForm'
import NewNavbar from './NewNavbar'
function LoginController() {
    const [compType, setCompType]=useState('login')
    const [isLoggedIn, setIsLoggedIn]=useState(false)
    return (
        <div>
          
            {Meteor.userId()&&isLoggedIn ?<NewNavbar setIsLoggedIn={setIsLoggedIn}/>: compType==='login' ?<Login compType={compType} setCompType={setCompType} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>:<RegisterForm compType={compType} setCompType={setCompType}/>}
        </div>
    )
}

export default LoginController
