// Nav.Css Import .........................
import './Nav.css'

// Import Router Link.........................
import { Link, NavLink } from 'react-router-dom'


// Import NavData.........................
import {navLinks} from '../../Data/Data'

// Imoports Menu Icons..........................
import { VscMenu } from "react-icons/vsc";
import { GrClose } from "react-icons/gr";

// Imoports use State..........................
import { useState } from 'react';

export default function Nav() {

    // Use State For NavLinks Show And Hide...................
    const [isNavLinksShowing, setIsNavLinkShowing] = useState(false);


    // .......Window Scroll Nav-links Effects..............
    if(innerWidth < 1024){
        window.addEventListener('scroll',()=>{
            document.querySelector('.nav-links').classList.add('navLinksHide');
            setIsNavLinkShowing(false);
        })
    };
    window.addEventListener('scroll',()=>{
        document.querySelector('nav').classList.toggle('navShadow', window.scrollY > 0);
        
    })

  return (
    <nav>
        <div className="container nav-container">
            {/* .............Logo............ */}
            <a href='#' className='logo'>
                <h3>Logo</h3>
            </a>

             {/* .............Nav-Links............ */}
             <ul className={`nav-links ${isNavLinksShowing ? 'navLinksShow' : 'navLinksHide'}`} >
                {
                    navLinks.map(({name, path}, index)=>{
                        return(
                            <li key={index}>
                                <NavLink to={path} className={({isActive}) => isActive ? 'active' : '' 
                                } >{name}</NavLink>
                            </li>
                        )                
                    })
                }                
             </ul>

             {/* .............Nav-Right............ */}
             <div className="nav-right">

                <Link to='/' className='btn btn-border'>Get Start</Link>                        
                   
                   <button className='menu-button' onClick={()=> setIsNavLinkShowing(!isNavLinksShowing)}>
                    {
                        !isNavLinksShowing ? <VscMenu /> : <GrClose />    
                    }
                  </button>
                
            </div>  
        </div>  
    </nav>
  )
}
