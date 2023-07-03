/*
===================== useEffect Hook ======================================

1. useEffect is a React hook to make side effects in functional components.

2. We can use mount and unmount behavior in React hooks to run code at specific lifecycle 
   times in the component.

3. We can return a callback function to run code on component unmount

4. The dependencies array in useEffect can be used to specify when the callback should be run, 
   only when there are changes in the variables in the dependency array.

5. To only trigger useEffect on original mount and unmount, use an empty dependency array

*/

import React, { useEffect } from 'react'

const App = () => {
    const [resourceType, setResourceType] = useState('posts')
    console.log('render')

    useEffect(()=>{
        console.log('resource type changed')
    }, [resourceType])
  
    return (
        <>
            <div>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>
                <button onClick={() => setResourceType('users')}>Users</button>
            </div>

            <h1>{resourceType}</h1>
        </>
  )
}

export default App;
