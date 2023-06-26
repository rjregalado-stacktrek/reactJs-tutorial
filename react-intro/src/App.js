/*
import './App.css';
import Hello from './components/Hello';
import Hello1 from './components/Hello1';
import Hello2 from './components/Hello2';
const Hello = (props) => {
  console.log('Hello')
  return (
    <div>
      <p>Hello {props.name} and you are {props.age} years old!</p>
    </div>
  )
}

const Hello1 = (props) => {
  console.log('Hello1')
  return (
    <div>
      <p>Greeting1: {props.greeting1}</p>
    </div>
  )
}

const Hello2 = (props) => {
  console.log('Hello2')
  return (
    <div>
      <p>Greeting2: {props.greeting2}</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      Greeting app created by <a href='https://github.com/'>RF1 Batch</a>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>

      <Hello name={"John"} age={30}/>
      
      <Hello1 spanishGreeting={"Buenos días"}/>
      
      <Hello2 frenchGreeting={"bonjour"}/>

      <Footer />

    </div>
  )
}

export default App;
*/

/*
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hello from './components/Hello';



const App = () => {
  return (
    <div>
      <Header/>
        <Hello name={"Melissa"} age={25} sex={"Female"}/>
      <Footer/>            
    </div>
  )
}

export default App;
*/
/*
import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Display = (props) => {
  return (
    <div>Counter: {props.counter}</div>
  )
}


const App = () => {

  const [ counter, setCounter ] = useState(0)


  setTimeout(
    () => setCounter(counter + 1),
    1000
  )


  console.log("rendering....", counter);

  return (
    <>
    <Container fluid>
      <Row className="mt-5 d-flex justify-content-center row justify-content-md-center">
        <Col xl={2}>
          <p className='text-primary fs-5'> <Display counter={counter}/></p>
        </Col>

      </Row>

      <Row className="mt-4 row justify-content-md-center">
        <Col xl={1}>
          <Button onClick={()=>setCounter(counter+1)} variant='primary'>plus</Button>
        </Col>
        
        <Col xl={1}>
          <Button onClick={()=>setCounter(0)} variant='secondary'>zero</Button>
        </Col>
        
        <Col xl={1}>
          <Button onClick={()=>setCounter(counter-1)} variant='success'>minus</Button>
        </Col>
      </Row>

    </Container>

    </>
  )
}


export default App;

*/
/*
import React, {useState} from 'react';

const App = props => {
    const [on, setOn] = useState(false)
    const handleClick = e => {
        setOn(previous => !previous)
    }
    
    return (
    	<div>
        	I am {on ? 'on' : 'off'}
            <br />
            <button onClick={handleClick}>On/Off</button>
        </div>
    )
}

export default App;
*/

import React, { useState, useEffect } from 'react';
//import TodoList from './components/UI/TodoList';
//import Profile from './components/UI/Profile';
//import PackingList from './components/UI/PackingList';
//import TeaSet from './components/UI/TeaSet';
import Movie from './components/UI/Movie';

const App = () => {
    const [resourceType, setResourceType] = useState('')

    console.log('render')

    useEffect(()=>{
        console.log('resource type changed')
    },[resourceType])
  
    return (
        <>
            <div>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>
                <button onClick={() => setResourceType('users')}>Users</button>
            </div>

            <h1>{resourceType}</h1>
            <div>
            <Movie/>
            </div>
        </>
  )
}

export default App;
