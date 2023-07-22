import React, {useState} from 'react'

import './login.css'

const Login = () => {

    const [email, setEmail] = useState ('');
    const [password, setPassword]= useState ('');


  return (
    <form>
        <label className='form-label'>
            Email/username:
            <input type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='form-input'
            />
        </label>
        <label className='form-label'>
            Password:
            <input type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='form-input'
            />
        </label>
        <button type='submit'>Log in</button>
        <p>Don't have an account <a href='signup'><span style={{color:'red'}}>Sign Up</span></a></p>
    </form>
  )
}

export default Login