import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = ({ loggedIn, setLoggedIn }) => {
  const login = () => {
    setLoggedIn(true);
  };

  return (
    <>
      <div>LoginPage</div>
      <div>
        <Link to="/issue/list" onClick={login}>
          Click here to login
        </Link>
      </div>
    </>
  );
};

export default LoginPage;
