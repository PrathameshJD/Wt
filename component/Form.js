import React, { useState } from 'react';

function Form() {
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation logic
    if (!username.trim()) {
      setUsernameError('Username is required');
      return;
    }

    if (username.length < 3) {
      setUsernameError('Username must be at least 3 characters long');
      return;
    }

    // If validation passes, you can proceed with the form submission
    console.log('Username submitted:', username);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleChange}
          />
          {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
