import React, { useEffect } from 'react';

function Simple({ count }) {
  
  useEffect(() => {
    console.log("Render ", count) // mount

    return () => {
      console.log("Unmount", count) // unmount, cleanup function
    }
  }, [count])
  
  return (
    <div>
      Count - {count}
    </div>
  );
}

export default Simple;