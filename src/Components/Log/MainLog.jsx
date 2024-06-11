import React from 'react'
// import Login from './Login'
import Logout from './Logout'
import { useState } from 'react'
import Login from './LogInNew'

function mainLog() {
    const [auth, setAuth] = useState(false)
    const [username, setUsername] = useState('')

    const handleLogin = (username) => {
        setAuth(true)
        setUsername(username)
    }

    const handleLogout = () => {
        setAuth(false)
        console.log(username);
        setUsername('')
    }


    return (
        <div>
          
            {
                auth ? <Logout logout={handleLogout} user={username} /> :
                    <Login handleLogin={handleLogin}  auth={auth} />
            }
        </div>
    )
}

export default mainLog