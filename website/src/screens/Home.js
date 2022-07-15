import React from 'react'
import {Button, Col, Container, Row,} from 'react-bootstrap'
import './Home.css';

function Home() {
  return (
    <div>

<img src='ocean.jpg'/>
    
    <div className='home'>
      <Row>
      </Row>
      <Row>
        <Col className='aboutMe'>
          <div className='aboutMeText'>
          <h1>About Me</h1>
          <p>Hi! My name is Grady, I am a software developer that is currently finishing up
        my honors year at university. My interests are Web and mobile development,
        developing on the cloud, bioinformatics and algorithims.</p>
        </div>
        </Col>
      </Row>
      </div>
    </div>
  )
}

export default Home