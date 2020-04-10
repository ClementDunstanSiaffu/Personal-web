

import React,{useEffect,Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import img5 from '../assets/images/graduu.jpg';
import AOS from 'aos'
import 'aos/dist/aos.css';   
 

function About (){
    useEffect(() =>{
        AOS.init({
            duration : 3000
          })
        
    })
        

    return(
        <div className = "left3" id = "section2">
             <Container>
                 <div className = "left4" data-aos="flip-up">
                        <h1 className = "left5">Profile</h1>
                        <p className = "left6">"Knowlegde is a treasure,but practise is the key to it."-IBN KHALDOUN AL MUQADDIMA</p>
                      
                  
    
          </div>
               

                <Row data-aos="flip-up">
                    <div className = "all">
                    <Col md="auto">
                    <div><img   src = {img5} className = "left7" /></div>
                    </Col>
                    </div>
                
              
                    <Col xs = "auto" >
                        <div  >

      
            <p className= "left8" >
             Hello,My name is Clement Dunstan Siaffu,I am creative JavaScript web developer.
            </p>
            <span className = "left43">"In the magical universe there are no coincidences
             and there are no accidents.Nothing happens unless someone wills it to happen"-WILLIAM S.BURROUGHS
             </span>
            </div>

                    </Col>
                  
                </Row>
        
                 </Container>    
        </div>
    )

}
export default About;