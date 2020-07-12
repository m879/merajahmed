import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import './style.css';

const Cards = (props) => {
    return (
      <div>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

    <Container>
        <Card id='card' style={{ width: '18rem' }} className="py-4" data-aos="fade-up" data-aos-duration="3000">
          <div id="overflow">
          <Card.Img variant="top" src={props.imgsrc} className='card-img-top'/>
          </div>
          <Card.Body>
            <Card.Title id="title">{props.title}</Card.Title>
            <Card.Text>{props.para}</Card.Text>
            <div className='text-center' >
            <Button variant="primary" href="https://github.com/m879" style={{color:'black',fontSize:'20px'}} className="px-3 fa fa-github font-weight-bolder"> Go to Github</Button>
            </div>
          </Card.Body>
        </Card>
  </Container>
  
        </div>
    );
}
 
export default Cards;