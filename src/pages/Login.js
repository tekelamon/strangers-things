/* eslint-disable react/prop-types */
import { login } from '../components/utilities';
import { useState } from 'react';

export const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const attemptLogin = () => {
    const response = login(username, password);

    if( response.success ) {
      setToken( response.data.token );
    }
    if( response.error ) {
      setToken(null);
      // display error state to user
    }
  };

  return <div>
    <h1>Login</h1>
    <input type='text' value={username} onChange={e=>setUsername(e.target.value)} />
    <input type='text' value={password} onChange={e=>setPassword(e.target.value)} />
    <button type='button' onClick={()=>{attemptLogin();}} >Login</button>
  </div>;
};
