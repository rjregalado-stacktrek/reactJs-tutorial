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
