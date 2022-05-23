import React from 'react'
import { Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { useProtectedResource } from './../data/useProtectedResource';

export const NavBar = ({ user }) => {
  
  const {data: userData} = useProtectedResource(`/user/${user.uid}`,{});

  localStorage.setItem('username', userData.name);

  const onClickLogOut = async () => {
    localStorage.clear();
    await getAuth().signOut();
  }
  
  return (
    <nav>
        <Link to="/">
            <h2 className='app-heading'>Todo</h2>
        </Link>
        {
          user ?
          <>
            <button 
              className='sign-out-button'
              onClick={onClickLogOut}
            >
              Logout
            </button>
            <p className='logged-in-as space-before'><strong>{userData.name}</strong></p>
          </>
          :null
        }
    </nav>
  )
};
