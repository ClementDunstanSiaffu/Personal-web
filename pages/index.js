

import React from 'react';
import Head from 'next/head';
import Header from '../components/header';
import Home from '../components/home';
import About from '../components/about';
import Ability from '../components/ability';
import Project from '../components/project';
import Contact from '../components/contact';

function App(){

  return(
         
    <div className = "left46">
    <Head>
      <title>Clement D Siaffu</title>
     
    </Head>
 
    <Header />
    <Home />
    <About />
    <Ability />
    <Project />
   <Contact /> 
    
   
    </div>
  )
}
  
    
export default App;
