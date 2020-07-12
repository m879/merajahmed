import React ,{Component} from 'react';
import Cards from './Cards';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import img1 from './images/blog1.jpg';
import img2 from './images/img2.png';
import img3 from './images/img3.png';



class Projects extends Component{
    render(){
        return(
            <div style={{backgroundColor:"rgb(19, 8, 69)",paddingBottom:"300px"}}> 
                <div className="py-5">
                    <h1 data-aos="zoom-in" data-aos-duration="2000" className="text-center text-danger font-weight-bolder">Projects</h1>
                </div>
                <Container className="d-flex d-flex justify-content-center">
                    <Row>
                        <Col lg={4} xs={12} className="py-3">
                            <Cards imgsrc={img1} title='C++ Language' para="Data Structure and Algorithm problems and solutions."/>
                        </Col>
                        <Col lg={4} xs={12} className="py-3">
                            <Cards  imgsrc={img2} title='Web Development' para="Some projects like whatsapp chat,e-commerce website ,job website etc." />
                        </Col>
                        <Col lg={4} xs={12} className="py-3">
                            <Cards  imgsrc={img3} title='Python' para="Project involved pygame library of Python"/>
                        </Col>
                    </Row>
                </Container>
              
            </div>
  
        );
    };

};
export default Projects;