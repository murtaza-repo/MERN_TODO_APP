import { getAuth,sendPasswordResetEmail } from "firebase/auth";
import React, {useState} from "react";
import { useHistory, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ForgotPasswordPage = () => {
  const [emailValue, setEmailValue] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();
 
  const onClickReset = async () => {
    if(!emailValue){
      setError("Please enter email address...");
    } else{
      sendPasswordResetEmail(getAuth(), emailValue)
        .then(() => toast.success('Reset mail sent', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          }))
        .catch(e => {
          if(e.message.includes("user-not-found")){
            setError("User not found! Please register...");

            setTimeout(()=>{
              history.push('/register');
            }, 2000);
          }
          else if(e.message.includes("invalid-email")){
            setError("Please type valid email address...");
          }
          else{
            setError(e.message);
          }

        });

      setTimeout(() => {
        history.push('/login');
      }, 5000);
    }
  };

  if(localStorage.getItem('username')){
    return <Redirect to='/' />
  }

  return (
    <div className="full-height-page">
      <ToastContainer />
      <div className="centered-container space-before vertical-center">
      <fieldset className='fieldset'>
            <legend><h5 style={{fontStyle: 'italic'}}>Forgot Password</h5></legend>
        {error ? (
          <div>
            <p className="error-message">{error}</p>
          </div>
        ) : null}
        <input
          type="email"
          value={emailValue}
          placeholder="Enter your email"
          className="full-width space-after"
          onChange={(e) => {
            setEmailValue(e.target.value);
            setError("");
          }}
          required
        />
        <button
          className="full-width space-after"
          onClick={onClickReset}
          >Reset</button>
      </fieldset>
      </div>
    </div>
  );
};
