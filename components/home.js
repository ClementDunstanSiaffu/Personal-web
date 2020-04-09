
import React from 'react';

import Typical from 'react-typical';
import {Container} from 'reactstrap';


function Home(){

    return(

        <div id = "section1" className = "left46">
        
        <div  style = {{backgroundImage: "url(" + require("../assets/images/image3.jpg") + ")"
    ,minHeight:640,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
        backgroundRepeat: 'noRepeat',
        marginTop:-15,
       
    }}>
    <div className="filter" />
    <Container >
    <div className = "left2" > 
    <Typical 
        steps={[
            'Converting something from my mind to something that I can present to the real world make me happier "Creativity is the intelligence having fun"-Albert Einstein',1000,
            '"If you take any activity,any art,any discipline,any skill-take it and push it as far as it will go,push it beyond where it has ever been before,push it to the wildest edges of edges,then you force it into the realm of magic"-Tom Robbins',1000,
           `"We all die.The goal isn't to live forever,the goal is to create something that will" - Chunk Palahniuk `,1000,
           '"Do the best you can untill you know better.Then when you know better,do better"- Maya Angelou'
        ]}
        loop={Infinity}
        wrapper="h3" 
      />
     </div>  
    </Container>
  
    </div>
    </div>
    )
}

export default Home;