import './Startup.css'
import TitileTypeOne from '../../UI/TitileTypeOne/TitileTypeOne'
import { startupdata } from '../../Data/Data'
import { SiParitysubstrate } from "react-icons/si";

export default function Startup() {
  return (
    <section className='Startup'>
        <div className="container stratup-container">
            <div className="title-aria">
           <TitileTypeOne TitleTop={'Our Mission'} Title={'Empowering Students for a Bright Future'} />
<p className='start-up-des'>At the University of Ghana, our mission is to provide quality education and empower students to excel in their academic journey. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio eum aperiam aut, nobis nostrum quidem quas adipisci consequatur iusto perspiciatis nesciunt aliquam quod dolores laudantium dolorem expedita mollitia accusamus repudiandae!</p>

            </div>

            <div className="startup-article-aira">
                {
                    startupdata.map(({title, des}, index)=>{
                        return(
                            <article key={index}>
                                <span><SiParitysubstrate /></span>
                                <h3>{title}</h3>
                                <p>{des}</p>                                
                            </article>   
                        )
                    })
                }                             
            </div>
        </div>
    </section>
  )
}
