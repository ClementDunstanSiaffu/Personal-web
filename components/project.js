

import React from 'react';
import {Container, Row,Col} from 'reactstrap';
import img5 from '../assets/images/image5.jpg';
import img6 from '../assets/images/image6.jpg';


function Project(){

    return(
        <div className = "left26" id = "section4">
            <Container>
                <div data-aos = "zoom-out" className = "left29">
                    <h1 className = "left5">Projects</h1>
                    <p className = "left6">“You can do anything you set your mind to.”- Benjamin Franklin</p>
                    <div >
                         <Row >
                            <Col xs = "auto">
                                
                                {/*<img src = {img5}  className = "left28"/> */}
                                <div className="left30">
	<img src= {img5}  className="left28" />
    <a href = "https://stark-island-63709.herokuapp.com/">
	<div className="left31">
		<div className="left32">
            <h1>Dolyrus TimberLand</h1>
            <p>This is the demo website for Timber Industry.</p>
            <h2>Tags:</h2>
            <h3>Expressjs,EJS,MongoDB</h3>
         </div>
	</div>
    </a>
   </div>
                                
                                
    </Col>

                             <Col xs = "auto">
                             
                             <div className="left30">
	<img src={img6}  className="left28" />
    <a href = "https://true-saloon-next.now.sh/">
	<div className="left31">
   
		<div className="left32">
        <h1>Dolyrus BarberShop</h1>
            <p>This is the demo website for barbershop.</p>
            <h2>Tags:</h2>
            <h3><span className = "left33">Nextjs,API,MongoDB</span></h3>
            </div>
     
	</div>
    </a>
   </div>
                                 
                               
                             </Col>
                         </Row>
                    </div>
                    <p className = "left9">"People don't care about what you say they care 
                    about what you build" - Mark Zuckerberg</p>
                </div>
            </Container>
        </div>
    )
}

export default Project;