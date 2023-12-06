// Import Header.css......................
import './Header.css'

// Import Header.image......................
import headerImage from '../../assets/header-imge.png'

export default function Header() {
  return (
    <header>
      <div className="header-container ">  
     

        <div className="header-wrapper container">
           
            {/* ............Header Left.............*/}
            <div className="header-left">
            <h1>This is header This is header text</h1>
            <p >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, corrupti dolore. Dignissimos magnam et enim autem at neque, ad maxime excepturi dolor consequatur numquam! Non eaque sequi minima dicta ex?
            </p>
            <a href='' className="btn btn-border">Start Project</a>
        </div>

        {/* ............Header right.............*/}
        <div className="header-right">
            <img src={headerImage} alt="" />
        </div> 

       </div>
      </div>       
    </header>
  )
}













