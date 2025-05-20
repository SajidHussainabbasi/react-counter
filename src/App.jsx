import React, { useState } from 'react';
import Button from './components/Button';
import Display from './components/Display';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((old)=>old+1);
  };

  const reset = () => {
    setCount(0);
  };

  const decrement = () => {
    setCount((old)=>old-1);
  };

  return (
    <div>
      <Display count={count} />
      <Button text="Increment" className="increment" clickHandler={increment} />
      <Button text="Reset" className="reset" clickHandler={reset} />
      <Button text="Decrement" className="decrement" clickHandler={decrement} />
    </div>
  );
};

export default App;