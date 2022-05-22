import React, {useState} from "react";
import { useHistory, Redirect } from 'react-router-dom';
import { postWithCredentials } from './../data/postWithCredentials';

export const UserInfoPage = () => {
  const [fullNameValue, setFullNameValue] = useState("");
  const [userInfoError, setUserInfoError] = useState("");
  const history = useHistory();

  if(localStorage.getItem('username')){
    return <Redirect to='/' />
  }

  const onClickSave = async () => {
    try{
        await postWithCredentials("/userInfo", {
            userName: fullNameValue,
        });
        localStorage.setItem('username', fullNameValue);
        history.push('/');
    }catch(e){
        setUserInfoError(e.message);
    }
  };

  return (
    <div className="full-height-page">
      <div className="centered-container space-before vertical-center">
      <fieldset className='fieldset'>
            <legend><h5 style={{fontStyle: 'italic'}}>Details</h5></legend>
        {userInfoError ? (
          <div>
            <p className="error-message">{userInfoError}</p>
          </div>
        ) : null}
        <input
          type="text"
          value={fullNameValue}
          placeholder="Full Name"
          className="full-width space-after"
          onChange={(e) => {
            setFullNameValue(e.target.value);
            setUserInfoError("");
          }}
          required
        />
        <button
          className="full-width space-after"
          onClick={onClickSave}
          >Save</button>
      </fieldset>
      </div>
    </div>
  );
};
