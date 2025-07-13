import React, { useEffect, useState } from 'react';
const App = () => {
  const [msg, setMsg] = useState('Loading...');

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(err => setMsg('API error: ' + err.message));
  }, []);

  return <h1>{msg} js</h1>;
};

export default App;
