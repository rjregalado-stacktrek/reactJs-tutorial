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

import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hello from './components/Hello';
import Hello1 from './components/Hello1';
import Hello2 from './components/Hello2';
import Stack from 'react-bootstrap/Stack';

const App = () => {
  return (
    <div>
      <Header/>            
      <Stack direction="vertical" gap={2}>
        <Hello name={"Alex"} age={35}/>            
        <Hello1 className="p-2" spanishGreeting={"Buenas Dias"}/>
        <Hello2 className="p-2" frenchGreeting={"Bonjour"}/>
      </Stack>
      <Footer/>            
    </div>
  )
}

export default App;

