import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import myimage from './images/meraj.png';
import Image from 'react-bootstrap/Image'


import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();

const About = () => {
    return (
  <div style={{backgroundColor:"rgb(19, 8, 69)",paddingBottom:"300px"}}>
    


 <Container >
   <Row>
     <Col lg={4} xs={12} className="py-3">
     <Image src={myimage}  data-aos="fade-right" data-aos-duration="2000"  style={{width:'300px',height:'400px',marginTop:"150px",marginLeft:'5%'}}/>
     </Col>
     <Col lg={8} xs={12}>
       <Jumbotron  style={{marginTop:"50px"}}>
       <h1 className="text-center py-3 font-weight-bolder"  data-aos="zoom-in" data-aos-duration="3000">About Me</h1>
       <div data-aos="fade-up" data-aos-duration="1000">
         <h2>I am <span className="font-weight-bolder" style={{color:"blue",fontStyle:'italic'}}>Meraj Ahmed</span></h2>
         <h6>I am a frontend web developer. 
           I can provide clean code and pixel perfect design. 
           I also make website more & more interactive with web animations.</h6>
       </div>
       <div className="d-flex my-3" data-aos="fade-up" data-aos-duration="1000">
         <h4 className="font-weight-bolder">Name : </h4>
         <h4 className="px-1"> Meraj Ahmed</h4>
       </div>
       <div className="d-flex my-3" data-aos="fade-up" data-aos-duration="2000">
         <h5 className="font-weight-bolder">College: </h5>
         <h5 className="px-1"> Zakir Hussain College of Engineering and Technology(AMU)</h5>
       </div>
       <div className="d-flex my-3" data-aos="fade-up" data-aos-duration="3000">
         <h5 className="font-weight-bolder">Languages : </h5>
         <h5 className="px-1"> Hindi , English</h5>
       </div>
       <div className="d-flex my-3" data-aos="fade-up" data-aos-duration="3000">
         <h5 className="font-weight-bolder">Email: </h5>
         <h5 className="px-1">merajahmed2112@gmail.com</h5>
       </div>
       <div className="d-flex my-3" data-aos="fade-up" data-aos-duration="3000">
         <h5 className="font-weight-bolder">Address : </h5>
         <h5 className="px-1"> Kushinagar</h5>
       </div>
       <Button variety="primary"  data-aos="fade-up" data-aos-duration="3000">Download CV</Button>
       </Jumbotron>
     </Col>
   </Row>
 </Container>

 
    </div>

    );
};
 
export default About;