import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Contact = () => {
    return (
        <div  style={{backgroundColor:"rgb(19, 8, 69)",paddingBottom:"300px"}}>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

        <Container className="py-5">
        <div>
            <h1 data-aos="zoom-in" data-aos-duration="2000" className="text-center text-danger font-weight-bolder">Contact</h1>
        </div>
            <Row>
              <Col lg={6} xs={12} className="mt-5" >
                  <Form style={{marginTop:'60px',color:'white',marginBottom:'30px'}}>
                  <h2 data-aos="zoom-in" data-aos-duration="3000">Get in touch</h2>
                    <Form.Group controlId="formBasicName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter name" required/>
                    </Form.Group>
                  
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" required/>
                    </Form.Group>
      
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Send Message</Form.Label>
                      <Form.Control type="type"  as="textarea" rows="3"  placeholder="Enter messages" required/>
                    </Form.Group>
                    <Button variant="primary" type="submit" style={{width:'150px'}}>
                      Send
                    </Button>
                  </Form>
               </Col>
               <Col lg={6} xs={12} className="py-3 px-3" style={{marginTop:'150px',color:'white'}}>
                 <div className="mt-3" style={{border:'1px solid white'}} data-aos="zoom-in" data-aos-duration="3000">
                   <div className="px-3 d-flex">
                   <i style={{color:'blue',fontSize:'50px'}} class="mt-2 fa fa-phone"></i>
                     <div className="px-3" >
                       <h3>Phone</h3>
                       <h5>Not Available</h5>
                     </div>
                   </div>
                 </div>
                 <div className="mt-3" style={{border:'1px solid white'}} data-aos="zoom-in" data-aos-duration="3000">
                   <div className="px-3 d-flex" >
                   <i style={{color:'blue',fontSize:'50px'}} class="mt-2 fa fa-envelope"></i>
                   <div className="px-3">
                    <h3>Email</h3>
                    <h6>merajahmed2112@gmail.com</h6>
                   </div>
                   </div>
                 </div>
                 <div className="mt-3" style={{border:'1px solid white'}} data-aos="zoom-in" data-aos-duration="3000">
                   <div className="px-3 d-flex">
                   <i style={{color:'blue',fontSize:'50px'}} class="mt-2 fa fa-map-marker"></i>
                   <div className="px-3">
                   <h3>Address</h3>
                   <h5>Sulaiman Hall,Aligarh</h5>
                   </div>
                   </div>
                 </div>

               </Col>

             </Row>
            </Container>
            </div>
  
    );
};
 
export default Contact;