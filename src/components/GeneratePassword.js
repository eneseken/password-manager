import React, { useState } from 'react';

function GeneratePassword() {
  const [password, setPassword] = useState('');

  const generateNewPassword = () => {
    // Parola oluşturma mantığını burada gerçekleştirin
    const newPassword = generatePasswordLogic(); // Parola oluşturma mantığına göre yeni bir parola oluşturuluyor
    setPassword(newPassword);
  };

  const generatePasswordLogic = () => {
    // Parola oluşturma mantığına uygun bir parola döndürülüyor
    // Burada kendi parola oluşturma mantığınızı uygulayabilirsiniz
    // Örneğin, rastgele harf, rakam ve sembollerden oluşan bir parola oluşturabilirsiniz
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    let newPassword = '';

    for (let i = 0; i < 8; i++) {
      const charType = Math.floor(Math.random() * 3);

      if (charType === 0) {
        newPassword += letters.charAt(Math.floor(Math.random() * letters.length));
      } else if (charType === 1) {
        newPassword += numbers.charAt(Math.floor(Math.random() * numbers.length));
      } else {
        newPassword += symbols.charAt(Math.floor(Math.random() * symbols.length));
      }
    }

    fetch('http://localhost:3001/passwords', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password: newPassword }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('New password added:', data);
      })
      .catch(error => {
        console.error('Error adding new password:', error);
      });

    return newPassword;
  };



  return (
    <div>
      <h2>Generate Password</h2>
      <button onClick={generateNewPassword}>Generate New Password</button>
      <br />
      <br />
      {password && <div>Generated Password: {password}</div>}
    </div>
  );
}

export default GeneratePassword;