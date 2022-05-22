import React, { useState } from 'react';
import { useHistory, Link, Redirect } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export const RegisterPage = ({ isLoading }) => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('');
  const [registerError, setRegisterError] = useState('');
  const history = useHistory();

  if(localStorage.getItem('username')){
    return <Redirect to='/' />
  }

  const onClickRegister = async () => {
    try{
        setRegisterError('');
        if(!emailValue || !passwordValue || !confirmPasswordValue){
          setRegisterError("Please fill all the values...")
        }
        else if(passwordValue !== confirmPasswordValue){
            setRegisterError("Passwords do not match!");
        } else{
            createUserWithEmailAndPassword(getAuth(),emailValue, passwordValue)
            .then(data => {
              localStorage.setItem("id", data.user.uid);
              history.push('/userInfo');
            });
        }
    } catch(e) {
      if(e.message.includes("email-already-in-use")){
        setRegisterError("User already exist! Please login...");
        setTimeout(()=>{
          history.push('/login');
        }, 2000);
      }else if(e.message.includes("invalid-email")){
        setRegisterError("Please type valid email address...");
      }else{
        setRegisterError(e.message);
      }
    }
  }

  return (
    isLoading ? (
      <p style={{textAlign: 'center'}}>Loading...</p>
    ) : (
      <div className="full-height-page">
        <div className="centered-container space-before vertical-center fade-in">
        <fieldset className='fieldset'>
            <legend><h5 style={{fontStyle: 'italic'}}>Register</h5></legend>
          {registerError 
            ? <div><p className="error-message">{registerError}</p></div>
            : null
          }
            
            <input 
            type="email" 
            value={emailValue}
            placeholder="Email address"
            className="full-width space-after"
            onChange={e => {setEmailValue(e.target.value); setRegisterError('')}}
            required
            />
            <input 
            type="password" 
            value={passwordValue}
            placeholder="Password"
            className="full-width space-after"
            onChange={e => {setPasswordValue(e.target.value); setRegisterError('')}}
            required
            />
            <input 
            type="password" 
            value={confirmPasswordValue}
            placeholder="Confirm Password"
            className="full-width space-after"
            onChange={e => {setConfirmPasswordValue(e.target.value); setRegisterError('')}}
            required
            />
            <button
            className="full-width space-after"
            onClick={onClickRegister}
            >Register</button>
            <p style={{textAlign: 'center'}}>Already have an account? <Link to="/login">Login</Link></p>
          </fieldset>
        </div>
      </div>
    )
  )
}
