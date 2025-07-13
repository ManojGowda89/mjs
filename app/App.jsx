import React, { useEffect, useState } from 'react';
import { VITE_API_URL } from '../mjs/env'; // relative import
const App = () => {
  const [msg, setMsg] = useState('Loading...');

  useEffect(() => {
    console.log(VITE_API_URL); // e.g., http://localhost:3000/api

    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(err => setMsg('API error: ' + err.message));
  }, []);

  return <h1>{msg}</h1>;
};

export default App;
