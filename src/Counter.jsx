import React, { useState, useEffect } from 'react';

const Counter = () => {
  // Initialize state using useState hook
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component mounted');
    // Cleanup function (optional)
    return () => {
      // Code to execute on component unmount
      console.log('Component unmounted');
    };
  }, []); // Empty dependency array means it only runs once after initial render

  useEffect(() => {
    console.log('Component updated');
    console.log('Previous count:', count); 
  }, [count]); // Run the effect whenever the 'count' state changes

  // Increment count
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Decrement count
  const decrementCount = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
};

export default Counter;
