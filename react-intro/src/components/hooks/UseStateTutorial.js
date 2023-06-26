import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const Hello = () => {
   return ( 
   
   <div>
        <p>Hello World!</p>
   </div>
   )
}

const App = () => {

  const [ counter, setCounter ] = useState(0)

/*
  setTimeout(
    () => setCounter(counter + 1),
    1000
  )
*/

  console.log("rendering....", counter);

  return (
    <>
    <div>
    <Hello/>
    </div>

    </>
  )
}


export default App;

/**
 * 
 *       <Row className="mt-5 d-flex justify-content-center row justify-content-md-center">
        <Col xl={2}>
          <p className='text-primary fs-5'> Counter: {counter}</p>
        </Col>
      </Row>


          <Container fluid>
        <Row>
            <Display counter={counter}/>
        </Row>
      <Row className="row justify-content-md-center">
        <Col>
          <Button onClick={()=>setCounter(counter+1)} variant='primary'>plus</Button>
        </Col>
        
        <Col>
          <Button onClick={()=>setCounter(0)} variant='secondary'>zero</Button>
        </Col>
        
        <Col>
          <Button onClick={()=>setCounter(counter-1)} variant='success'>minus</Button>
        </Col>
      </Row>

    </Container>

 */