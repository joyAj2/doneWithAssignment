// Import Header.css......................
import './Header.css'
import { Link } from 'react-router-dom'

// Import Header.image......................
import headerImage from '../../assets/header-imge.png'

export default function Header() {
  return (
    <header>
      <div className="header-container ">  
     

        <div className="header-wrapper container">
           
            {/* ............Header Left.............*/}
            <div className="header-left">
            <h1>UG, Missing Grade Reporting System</h1>
            <p >
                We are excited to introduce the Missing Grade Reporting System, a cutting-edge solution designed to empower students in managing and monitoring their academic progress seamlessly.
            </p>
            <Link to='/dashboard' className="btn btn-border">Start Project</Link>
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













