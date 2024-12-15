import React, { useState, useEffect } from 'react';

function App() {
  const [position, setPosition] = useState(null);
  const [waitTime, setWaitTime] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Call the backend API to get the user’s queue position
    fetch('http://localhost:3000/queue-status')
      .then((res) => res.json())
      .then((data) => {
        setPosition(data.position);
        setWaitTime(data.estimatedWait);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading) return <div>Loading your queue status...</div>;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Queue Status</h1>
      <p>Your current position: {position}</p>
      <p>Estimated wait time: {waitTime} minutes</p>
    </div>
  );
}

export default App;