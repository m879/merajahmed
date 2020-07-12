import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import myimage from './images/meraj.png';
import Image from 'react-bootstrap/Image'
import { NavLink } from 'react-router-dom';


import ParticlesBg from 'particles-bg';

const Home = () => {
    return(
         <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            
        <Container style={{width:'100%',height:'600px'}}>
             <div style={{paddingTop:'100px',color:'white',height:'600px'}} className="text-center">
             <Image src={myimage} className="img-responsive"  data-aos="zoom-in" data-aos-duration="3000"  style={{width:'300px',height:'300px',border:'5px dotted yellow'}} roundedCircle/> 
             <ParticlesBg type="circle"  position= "center" bg={true}/>             
             </div>
        </Container>
            
        <div style={{backgroundColor:"rgb(19, 8, 69)",paddingBottom:"300px",marginTop:'-75px'}}>
           <Container   >
             <div style={{paddingTop:'100px',color:'white'}} className="text-center">
                 <div style={{paddingTop:'100px'}} data-aos="fade-down" data-aos-duration="3000" >
                   <h1>Hi , I am</h1>
                   <h1 ><span style={{color:'yellow'}} >Meraj Ahmed</span></h1>
                </div>
             </div>
            </Container>

            <Container className="text-center">
            <div style={{color:'lightgray',paddingTop:'30px'}} >
             <h5 className="py-1" data-aos="fade-down"  data-aos-duration="3000" >I am undergraduate Computer Engineering Student.</h5>
             <h5 className="py-1" data-aos="fade-up" data-aos-duration="3000" >I am frontend developer as well as little bit about backend developer.</h5>
            </div>
            </Container>

            <div className="d-flex justify-content-center py-4" >
                <Button data-aos="fade-up" data-aos-duration="3000" className="mx-2"  style={{color:'black',backgroundColor:'white',borderRadius:'25px',width:'150px',fontSize:'25px'}}>
                    <NavLink to="/about" style={{textDecoration:'none',fontWeight:'bolder'}}>About</NavLink></Button>
                <Button  data-aos="fade-up" data-aos-duration="3000" className="mx-2 "  style={{color:'black',backgroundColor:'white',borderRadius:'25px',width:'150px',fontSize:'25px'}}>
                    <NavLink to="/contact"  style={{textDecoration:'none',fontWeight:'bolder'}}>Contact</NavLink></Button>
            </div>
            <Container data-aos="fade-up" data-aos-duration="3000" >
            <div className="d-flex justify-content-center py-3" style={{fontSize:'50px'}}>
              <a href="https://www.facebook.com/people/Meraj-Ahmed/100049580372577"><i style={{color:'blue'}} className="px-3 fa fa-facebook-official"></i></a>
              <a href="https://github.com/m879"><i style={{color:'darkgray'}} className="px-3 fa fa-github"></i></a>
              <a href="https://www.linkedin.com/in/meraj-ahmed-6711081aa/"><i style={{color:'blue'}} className="px-3 fa fa-linkedin-square"></i></a>
              <a href="https://www.instagram.com/ita_coding/?igshid=1i78odoo1o6dt"><i style={{color:'red'}}  className="px-3 fa fa-instagram"></i></a>
             </div>

            </Container>
        </div>



        </div>
    );

};
 
export default Home;