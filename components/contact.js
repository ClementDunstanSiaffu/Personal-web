
import React from 'react';
import {Container} from 'reactstrap';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ExpandLessTwoToneIcon from '@material-ui/icons/ExpandLessTwoTone';
import { Link, animateScroll as scroll } from "react-scroll";
function Contact (){

    return(
        <div className = "left34" id = "section5">
             <Container>
                 <div  data-aos = "zoom-in">
                     <h1 className = "left35">Contact</h1>
                     <p className = "left50">“If I had asked people what they wanted, 
                     they would have said faster horses. ” - Henry Ford</p>
                    <div className = "left37">
                        <span>
                        <a href = "https://twitter.com/dolyrus" className ="left36"><TwitterIcon fontSize = "large" style = {{width:50,height:50}}  />
                            <span>https://twitter.com/dolyrus</span>
                            </a>
                            <a href = "https://github.com/ClementDunstanSiaffu" className ="left36"><GitHubIcon fontSize = "large" style = {{width:50,height:50}} />
                            <span>https://github.com/ClementDunstanSiaffu</span>
                            </a>
                            <a href = "https://www.linkedin.com/in/clement-siaffu-09ba46144/"  className ="left36"><LinkedInIcon fontSize = "large" style = {{width:50,height:50}} />
                            <span>https://www.linkedin.com/in/clement-siaffu-09ba46144/</span>
                            </a>
                        </span>
                           
                        
                    </div>
                    <div>
                        <p className = "left38">"Purpose is that feeling we are part of something bigger than ourselves,
                            that we are needed,that we have something better ahead to work for,purpose is what create true 
                            happiness" - Mark Zuckerberg
                        </p>

                          <Link
                        to = "section1"
                        spy = {true}
                        smooth={true}
                        duration={1000}
                        >
                        <ExpandLessTwoToneIcon style = {{width:80,height:80}} className = "left40"/>
                        </Link>
                       
                    </div>
                 </div>
                 <footer className = "left45">Clement Siaffu &copy; 2020</footer>
             </Container>
        </div>
    )
}

export default Contact;
