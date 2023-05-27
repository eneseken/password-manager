import React from 'react';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <div>
      <h1>Welcome to Password Manager</h1>
      <Link to="/generate-password">Generate Password</Link>
      <br />
      <Link to="/my-passwords">My Passwords</Link>
    </div>
  );
}

export default Main;