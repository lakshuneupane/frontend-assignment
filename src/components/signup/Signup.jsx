import React, {useState} from 'react'
import './signup.css'

export const Signup = () => {

    const [firstName, setFirstName] = useState ('');
    const [lastName, setLastName] = useState ('');
    const [userName, setUserName] = useState ('');
    const [email, setEmail] = useState ('');
    const [password, setPassword]= useState ('');
    const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <form>
        <label className='form-label'>
            First Name:
            <input type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className='form-input'
            />
        </label>
        <label className='form-label'>
            Last Name:
            <input type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className='form-input'
            />
        </label>
        <label className='form-label'>
            User Name:
            <input type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
            className='form-input'
            />
        </label>
        <label className='form-label'>
            Email:
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
        <label className='form-label'>
            Confirm Password:
            <input type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className='form-input'
            />
        </label>
        <button type='submit'>Sign Up</button>
    </form>
  )
}
