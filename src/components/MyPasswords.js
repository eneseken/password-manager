import React, { useState, useEffect } from 'react';

function MyPasswords() {
  const [passwords, setPasswords] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/passwords')
      .then(response => response.json())
      .then(data => setPasswords(data));
  }, []);

  return (
    <div>
      <h2>My Passwords</h2>
      {passwords.map(password => (
          <p>Password: {password.password}</p>
      ))}
    </div>
  );
}

export default MyPasswords;