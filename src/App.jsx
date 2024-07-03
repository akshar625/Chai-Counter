import { useState } from 'react';
import './App.css';

function App() {
  // Initialize state variables
  const [countt, setCountt] = useState(0);
  const [message, setMessage] = useState("");

  // Function to add value
  const addValue = () => {
    if (countt < 19) {
      setCountt(countt + 1);
      setMessage("");  // Clear the message if the count is below the limit
    } else {
      setMessage("Bus ho gaya Ji..!");  // Set the message when limit is reached
    }
  };

  // Function to reduce value
  const reduceValue = () => {
    if (countt > 0) {
      setCountt(countt - 1);
      setMessage("");  // Clear the message if the count is reduced
    }
  };

  return (
    <>
      <h1>Chai Aur Counter</h1>
      <h2>Total Chai: {countt}</h2>
      {/* Conditionally render the message */}
      {message && <h3 style={{ color: 'cyan' }}>{message}</h3>}
      <div className="flex-container" style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button onClick={addValue}>Add Chai</button>
        <button onClick={reduceValue}>Decrease Chai</button>
      </div>
    </>
  );
}

export default App;
