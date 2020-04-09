
import React from 'react';
import {Container,Row,Col,Button} from 'reactstrap';
import {Progress} from 'reactstrap';


function Ability(){

    return(
        <div className = "left10" id = "section3">
            <Container className="left27">
                <div data-aos="slide-right">
                <div>
                <h1 className = "left5">Abilities</h1>
                <p className = "left11">“Life without knowledge is death in disguise.”- Talib Kweli</p>
                </div>
                
                <div className = "left15">
                    <h1 className = "left16">Skills</h1>
                <Row>
                    <Col xs = "auto">
                 <table>
                     <tbody className = "left12">
                         <tr>
                             <td className="left14" >
                                 Bootstrap framework,<br />CSS,HTML<br /> and EJS
                             </td>
                             <td style = {{padding:10}}>
                             <div className="text-center">90%</div>
                             <Progress animated color="success" value={90} className="left13" style = {{height:15}} />                             </td>
                         </tr>
                         <tr>
                             <td className="left14">
                                 Material UI<br />framework<br />and ReactStrap
                             </td>
                             <td style = {{padding:10}}>
                             <div className="text-center">90%</div>
                             <Progress animated color="success" value={90} className="left13" style = {{height:15}} />                             </td>
                         </tr>
                         
                         <tr>
                             <td className="left14">
                             ReactJs,NextJs,<br />ExpressJs <br />and JSON  
                             </td>
                             <td style = {{padding:10}}>
                             <div className="text-center">70%</div>
                             <Progress animated color="success" value={70} className="left13" style = {{height:15}} />                             </td>
                         </tr>
                         <tr>
                             <td className = "left14">
                                MongoDB
                             </td>
                             <td style = {{padding:10}}>
                             <div className="text-center">60%</div>
                             <Progress animated color="success" value={50} className="left13" style = {{height:15}} />                             </td>
                         </tr>
                        
                     </tbody>
                 </table>
                 </Col>
                 <Col xs = "auto">
                 <table>
                     <tbody className = "left12">
                         <tr>
                             <td className="left14">
                                <span className = "left25">Vanilla JS,<br />Jquery <br />and Ajax</span>
                             </td>
                             <td style = {{padding:10}}>
                             <div className="text-center">60%</div>
                             <Progress animated color="success" value={60} className="left13" style = {{height:15}} />                             </td>
                         </tr>
                         
                         <tr>
                             <td className="left14">
                               SCSS and<br />Arduino <br />Programming
                             </td>
                             <td style = {{padding:10}}>
                             <div className="text-center">50%</div>
                             <Progress animated color="success" value={50} className="left13" style = {{height:15}} />                             </td>
                         </tr>
                         <tr>
                             <td className="left14">
                             Object Oriented <br />Programming
                             </td>
                             <td style = {{padding:10}}>
                             <div className="text-center">45%</div>
                             <Progress animated color="success" value={45} className="left13" style = {{height:15}} />  
                            </td>
                            </tr>
                         <tr>
                             <td className = "left14">
                               Java 
                             </td>
                             <td style = {{padding:10}}>
                             <div className="text-center">20%</div>
                             <Progress animated color="success" value={20} className="left13" style = {{height:15}} />                             </td>
                         </tr>
                     </tbody>
                 </table>
                </Col>
                 </Row>
                 <div >
                     <p className = "left17">This project was built using nextjs <br />
            <Button className="left18" style={{backgroundColor:"lightseagreen",borderColor:"lightseagreen",
           
        }}>
            <span className = "left39">See project on Github</span></Button></p>
                     
                    
                 </div>
                </div>
                </div>
                <div  data-aos="slide-left"> 
                    <h1 className = "left19">Languages</h1>
                      <Row><Col xs = "auto">
                        <div className ="left20">Swahili(Mother tongue)</div>  
                        <div className = "left20">English</div> 
                      </Col></Row>
                </div>

                <div data-aos = "slide-right" > 
                    <h1 className = "left21">Tools</h1>
                    
                      <Row >
                    
                        <Col xs = "auto">
                        <table>
                     <tbody className = "left12">
                         <tr>
                             <td className="left22" >
                                Ms Word,Windows<br /> (5 years)
                             </td>
                             <td style = {{padding:20}}>
                             <div className="text-center">90%</div>
                             <Progress animated color="success" value={90} className="left23" style = {{height:15}} />                             </td>
                         </tr>
                         <tr>
                             <td className="left22" >
                                Sublime(1 year),<br />Visual Studio Code<br />(2 years),<br />Notepad++(4 years)
                             </td>
                             <td style = {{padding:20}}>
                             <div className="text-center">90%</div>
                             <Progress animated color="success" value={90} className="left23" style = {{height:15}} />                             </td>
                         </tr>
                         <tr>
                             <td className="left22" >
                                Ubuntu(2 years)
                             </td>
                             <td style = {{padding:20}}>
                             <div className="text-center">80%</div>
                             <Progress animated color="success" value={80} className="left23" style = {{height:15}} />                             </td>
                         </tr>
                         <tr>
                             <td className="left22" >
                               Ms Office<br />(5 years)
                             </td>
                             <td style = {{padding:20}}>
                             <div className="text-center">70%</div>
                             <Progress animated color="success" value={70} className="left23" style = {{height:15}} />                             </td>
                         </tr>
                         
                         </tbody>
                         </table>
                      </Col>
                      
                          <Col xs="auto">
                          <table>
                     <tbody className = "left12">
                          <tr>
                             <td className="left22"><span className = "left24">IMVS4200<br />(2 months)</span></td>
                             <td style={{padding:20}}>
                             <div className="text-center">70%</div>
                             <Progress animated color="success" value={70} className="left23" style = {{height:15}} /> 
                             </td>
                             </tr>   
                               
                             
                         
                         <tr>
                             <td className="left22" >
                                 Github<br />(2 months)
                                 </td> 
                                <td style={{padding:20}}>
                                <div className="text-center">60%</div>
                             <Progress animated color="success" value={60} className="left23" style = {{height:15}} />
                             </td>
                             </tr>
                      
                         
                         <tr>
                             <td className="left22" >
                                 Adobe photoshop,<br />Coral draw<br />(2 months)
                                 </td>
                                  <td style={{padding:20}}>
                                <div className="text-center">50%</div>
                             <Progress animated color="success" value={50} className="left23" style = {{height:15}} /> 
                             </td>
                             </tr>
                             
                        
                         <tr>
                     <td className="left22" >Arduino IDE<br />(1 month),<br />Eclipse(1 year)<br />Netbeans<br />(3 weeks) </td>
                     <td style={{padding:20}}>
                    <div className="text-center">40%</div>
                    <Progress animated color="success" value={40} className="left23" style = {{height:15}} /> 
                    </td>
                    </tr>       
                              
                          
                         
                         </tbody>
                         </table>
                          </Col>
                           
                      </Row>
                      
                </div>
            </Container>
            
             
        </div>
    )
}

export default Ability