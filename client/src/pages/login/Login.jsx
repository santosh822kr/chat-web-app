import { useContext, useRef } from 'react';
import './login.css';
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router';
//import CircularProgress from '@mui/material/CircularProgress';

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);
  const history = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  const handleRegisterClick = (e) => {
    e.preventDefault();
    history('../register');
  };

  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <h3 className='loginLogo'>Social Media</h3>
          <span className='loginDesc'>
            Connect with friends and the world around you.
          </span>
        </div>
        <div className='loginRight'>
          <form className='loginBox' onSubmit={handleClick}>
            <input
              placeholder='Email'
              type='email'
              required
              className='loginInput'
              ref={email}
            />
            <input
              placeholder='Password'
              type='password'
              required
              minLength='6'
              className='loginInput'
              ref={password}
            />
            <button className='loginButton' type='submit' disabled={isFetching}>
              {/* {isFetching ? (
                <CircularProgress color='white' size='20px' />
              ) : (
                'Log In'
              )} */}
              Login
            </button>
            <span className='loginForgot'>Forgot Password?</span>
            <button
              className='loginRegisterButton'
              onClick={handleRegisterClick}
            >
              {/* {isFetching ? (
                <CircularProgress color='white' size='20px' />
              ) : (
                'Create a New Account'
              )} */}
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
