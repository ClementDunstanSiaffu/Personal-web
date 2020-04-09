

import React,{useEffect,Component} from 'react';
import { Container, Row, Col } from 'reactstrap';
import img5 from '../assets/images/image4.jpg';
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
                        <p className = "left6">I'm creative JavaScript web developer</p>
                        <p className = "left43">
                    "We gotta start teaching our children that they can be all they want to be 
                    there are so much to life than just poverty" -Tupac Amaru Shakur
                        </p>
                  
    
          </div>
               

                <Row data-aos="flip-up">
                    <div className = "all">
                    <Col md="auto">
                    <div><img   src = {img5} className = "left7" /></div>
                    </Col>
                    </div>
                
              
                    <Col xs = "auto" >
                        <div  >

     <h1 className = "left42">Meet Clement Dunstan Siaffu</h1>  
     <p className= "left8" >
    Clement Dunstan Siaffu is the degree holder in the Electronics and Telecommunication Engineering.His exposure
    to the world of programming started in 2016 when he was learning object oriented programming and 
    Data stucture programming as ones of his class modules and things did not go well for him at that time,<span className="left44">
    "In the magical universe there are no coincidences and there are no accidents.Nothing happens unless someone wills
    it to happen."- WILLIAM S. BURROUGHS</span>,untill 2017 where things got better for him after getting support from his friends,Clement says that
    <span className = "left44">"I could have never reached  this far without that support,because though that support
    I was able to discover alot of things about programming which helped me for self-teaching,so I am thankfully
    for the breath God gave me and am thankfully for the support I got"</span>,he finished by saying<span className="left44">"A thankful heart hath a continual feast."-W.J CAMEROON</span> 
    .Through self-teaching he was able to learn alot of things concerning programming and that made him to be passionate about web development
    .<span className = "left44">"Knowlegde is a treasure,
    but practise is the key to it."-IBN KHALDOUN AL MUQADDIMA</span>,Clement believes
    that practising programming is an endeless process which require learning new things everyday and that why
    he loves reading books,watching tutorials,sharing ideas,team working,working on different programming projects
    and learning things from other developers and programmers.

    <h1 className = "left9">
    "The best education you can get is investing in yourself and that does not mean college or university"
       -Warren Buffet</h1>
        
            </p>
            </div>

                    </Col>
                  
                </Row>
        
                 </Container>    
        </div>
    )

}
export default About;