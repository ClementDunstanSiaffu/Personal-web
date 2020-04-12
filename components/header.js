

import React,{useState} from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import {
    Collapse,
    Container,
    NavbarBrand,
    Navbar,
    Nav,
    NavLink,
    NavItem
} from 'reactstrap';
import classnames from 'classnames';
import img6 from '../assets/images/logo-image1.png';


function Header(){
    const [navbarColor,setNavbarColor] = useState("navbar-transparent");
   /* const [navbarCollapse,setNavbarCollapse] = useState(false);*/

/*const toggleNavbarCollapse = () => {
  setNavbarCollapse(!navbarCollapse);
  document.documentElement.classList.toggle("nav-open");
}*/

React.useEffect(() => {
  const updateNavbarColor = () => {
    if (
      document.documentElement.scrollTop > 299 ||
      document.body.scrollTop > 299
    ) {
      setNavbarColor("");
    } 
    else if (
      document.documentElement.scrollTop < 300 ||
      document.body.scrollTop < 300
    ) {
      setNavbarColor("navbar-transparent");
    }
  };

  window.addEventListener("scroll", updateNavbarColor);

  return function cleanup() {
    window.removeEventListener("scroll", updateNavbarColor);
  };
});





    return(
        <Navbar className = {classnames("fixed-top",navbarColor)} expand = "lg">
            <Container>

             <div className = "left48"><NavbarBrand style={{paddingLeft: "0"}}>    <img src={img6}  className="logo" ></img></NavbarBrand></div>   
               
               {/* <button 
                arial-expanded = {navbarCollapse}
                className = {classnames("navbar-toggler navbar-toggler",
                 {toggled:navbarCollapse}
                  )}
                  onClick = {toggleNavbarCollapse}
                >
                <div className = "catcher">
                 <span className="navbar-toggler-bar bar1"></span>
                 <span className="navbar-toggler-bar bar2"></span>
                 <span className="navbar-toggler-bar bar3"></span>
                 </div>
               </button>*/}
                {/*<Collapse 
                    navbar
                isOpen={navbarCollapse} > */}
                       {/*} <div className = "together">*/}
                       <div className = "together">
                <Nav navbar>
                
                <NavItem /*style = {right3}*/>
           
           <Link 
           activeClass = "active"
           to = "section1"
           spy ={true}
           smooth={true}
           duration ={1000}>
              <a target = "_self" className = "nav-link">Home</a>
             
            </Link>
           </NavItem>
       
        <NavItem /*style = {right3}*/>
        <Link 
         activeClass = "active"
        to ="section2"
        spy ={true} 
        smooth = {true}
        duration = {1000}
        >
           
           <a target = "_self" className = "nav-link" >Profile </a>
          
          
           
        </Link>
        </NavItem>
        
        <NavItem /*style = {right3}*/>
        <Link 
       activeClass = "active"
        to ="section3" 
        spy = {true}
        smooth = {true}
        duration = {1000}
        >
           <a target = "_self"  className = "nav-link" >Abilities </a>
        </Link>
        </NavItem>
       
        <NavItem /*style = {right3}*/>
        <Link 
         activeClass = "active"
        to ="section4"
        spy = {true}
        smooth = {true}
        duration = {1000} > 
           <a target = "_self"  className = "nav-link" >Projects</a>
       </Link> 
        </NavItem>
      
        <NavItem >
        <Link 
        activeClass = "active"
        to ="section5"
        spy = {true}
        smooth = {true}
        duration = {1000} > 
           <a target = "_self"  className = "nav-link" >Contacts</a>
        </Link>
        </NavItem>
       
       
                
                    </Nav>
                    {/*</div>
                </Collapse> */}
                </div>
            </Container>

        </Navbar>
        
    )
}

export default Header;