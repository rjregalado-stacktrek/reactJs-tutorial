import React, { useState } from 'react';
import Simple from './simple'

function Wrapper() {
  
  const [count, setCount] = useState(0);
  const updateCount = () => setCount(count + 1);
  
  return (
    <div>
      <button onClick={updateCount}>{count}</button>
      {count < 5 && <Simple count={count} />}
      {count < 5 && <Simple count={-1} />}
    </div>
  )
}

export default Wrapper;