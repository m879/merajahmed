import React from 'react';
import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AnimatedNumber from "animated-number-react";

const formatValue = (value) => value.toFixed(1);


const Skill = () => {

    return (
        <div  style={{backgroundColor:"rgb(19, 8, 69)",paddingBottom:"300px"}}>
           <div>
           <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
           <script src='https://kit.fontawesome.com/a076d05399.js'></script>
           </div>
            <Container className="py-5 " style={{color:'white'}}>
            <h1 className="text-center font-weight-bolder text-danger"  data-aos="zoom-in" data-aos-duration="3000">Education</h1>
                <Row>
                    <Col lg={4} xs={12} className="mt-5"  data-aos="fade-up" data-aos-duration="3000" style={{color:'white'}}>
                        <h2 className="text-center text-warning"><i class="fa fa-calendar"></i> 2006-2016</h2>
                        <h2 className="text-center text-muted">Primary Education</h2>
                        <h4 className="text-center">Midas School of Learning</h4>
                    </Col>
                    <Col lg={4} xs={12} className="mt-5" data-aos="fade-up" data-aos-duration="3000">
                        <h2 className="text-center text-warning"><i class="fa fa-calendar"></i> 2016-2018</h2>
                        <h2 className="text-center text-secondary">Secondary Education</h2>
                        <h4 className="text-center">Sayyid Hammid Senior Secondary School,AMU</h4>
                    </Col>
                    <Col lg={4} xs={12} className="mt-5" data-aos="fade-up" data-aos-duration="3000">
                        <h2 className="text-center text-warning" ><i class="fa fa-calendar"></i> 2019-2023</h2>
                        <h2 className="text-center text-muted">Undergraduate (Computer Engineering)</h2>
                        <h4 className="text-center">Zakir Hussain College of Engineering and Technology,AMU</h4>
                    </Col>
                </Row>
            </Container>
            <Container>
                <h1 className="text-center font-weight-bolder text-danger"  data-aos="zoom-in" data-aos-duration="3000">Skills</h1>
                <Row>
                <Col lg={4} xs={12} data-aos="fade-up" data-aos-duration="1000" className="mt-3" style={{color:'white',fontWeight:'bolder'}}>
                    <div>   
                        <p>HTML</p>
                        <ProgressBar variant="success" animated now={85} />
                    </div>
                    <div>
                      <p>CSS</p>
                        <ProgressBar variant="danger" animated now={75} />
                    </div>
                    <div>
                      <p>BOOTSTRAP</p>
                        <ProgressBar variant="warning" animated now={75} />
                    </div>
                    <div>
                        <p>JAVASCRIPT</p>
                        <ProgressBar animated now={65} />
                    </div>
                    <div>
                        <p>JQUERY</p>
                        <ProgressBar variant="info" animated now={50} />
                    </div>
                </Col>

                <Col lg={4} xs={12} data-aos="fade-up" data-aos-duration="2000" className="mt-3" style={{color:'white',fontWeight:'bolder'}}>
                    <div>   
                    <p>REACT JS</p>
                    <ProgressBar variant="success" animated now={50} />
                    </div>
                    <div>
                      <p>PHP</p>
                        <ProgressBar variant="danger" animated now={40} />
                    </div>
                    <div>
                        <p>NODE JS</p>
                        <ProgressBar  variant="warning" animated now={30} />
                    </div>
                    <div>
                        <p>MYSQL</p>
                        <ProgressBar animated now={50} />
                    </div>
                    <div>
                        <p>MONGODB</p>
                        <ProgressBar  variant="info" animated now={50} />
                    </div>
                </Col>
                <Col lg={4} xs={12} data-aos="fade-up" data-aos-duration="3000" className="mt-3" style={{color:'white',fontWeight:'bolder'}}>
                    <div>   
                    <p>C (Programming Language)</p>
                    <ProgressBar variant="success" animated now={65} />
                    </div>
                    <div>
                      <p>C++ (Programming Language)</p>
                        <ProgressBar variant="danger" animated now={55} />
                    </div>
                    <div>
                        <p>PYTHON (Programming Language)</p>
                        <ProgressBar  variant="warning" animated now={50} />
                    </div>
                    <div>
                        <p>Data Structure and Algorithm</p>
                        <ProgressBar animated now={40} />
                    </div>
                </Col>
            </Row>
        </Container>

        <Container>
            <h1 className='text-center font-weight-bolder py-5 text-danger' data-aos="zoom-in" data-aos-duration="3000">Experience</h1>

        </Container>
        
        <div style={{marginTop:'100px',backgroundColor:'blue'}}>
            <h1 className='text-center font-weight-bolder py-5 text-warning' data-aos="zoom-in" data-aos-duration="3000">PROJECT COMPLETED</h1>
            <Row  className=" justify-content-around align-items-center font-weight-bolder text-center text-white">
                <Col lg={3} xs={6} className="py-5" data-aos="fade-up" data-aos-duration="2000">
                <div >
                <i class="fa fa-desktop"  style={{fontSize:'50px'}}></i>
                    <p style={{fontSize:'20px'}} className="py-4">PROJECT COMPLETED</p>
                    <div style={{fontSize:'30px'}}>
                    <AnimatedNumber value='18'   formatValue={formatValue}  duration='5000' />
                    </div>
                </div>
                </Col>
                <Col lg={3} xs={6} className="py-5" data-aos="fade-up" data-aos-duration="2000">
                <div>
                <i class="fa fa-language"  style={{fontSize:'50px'}}></i>
                    <p style={{fontSize:'20px'}} className="py-4">LANGUAGES I USE</p>
                    <div style={{fontSize:'30px'}}>
                    <AnimatedNumber value='6'    formatValue={formatValue}  duration='5000' />
                    </div>
                </div>
                </Col>
                <Col lg={3} xs={6} className="py-5" data-aos="fade-up" data-aos-duration="2000">
                <div>
                    <i class="fa fa-chrome"  style={{fontSize:'50px'}}></i>
                    <p style={{fontSize:'20px'}} className="py-4">WEB DEVELOPMENT PROJECT</p>
                    <div style={{fontSize:'30px'}}>
                    <AnimatedNumber value='10'    formatValue={formatValue}  duration='5000' />
                    </div>
                </div>
                </Col>
                <Col lg={3} xs={6} className="py-5" data-aos="fade-up" data-aos-duration="2000">
                <div>
                <i class="fa fa-laptop"  style={{fontSize:'60px'}}></i>
                    <p style={{fontSize:'20px'}} className="py-4">PYTHON PROJECT</p>
                    <div style={{fontSize:'30px'}}>
                    <AnimatedNumber value='8'    formatValue={formatValue}  duration='5000' />
                    </div>
                </div>
                </Col>
            </Row>
        </div>
        
       
        </div>
    );
};
 
export default Skill;