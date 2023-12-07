import './HowWork.css'
import TitileTypeOne from '../../UI/TitileTypeOne/TitileTypeOne'
import { HowWorkdata } from '../../Data/Data';
import { SiParitysubstrate } from "react-icons/si";


export default function HowWork() {
  return (
    <section className='howWork'>
          <div className="container howWork-container">
            <div className="title-aria">
           <TitileTypeOne TitleTop={'Explore'} Title={'How it Works'} />
<p className='how-work-des'>Discover the simplicity:

1. Login: Securely access the system.
2. Dashboard: View grades and alerts.
3. Report Missing Grades: Simple form.
4. Contact Instructors: Direct communication.

Effortless. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio eum aperiam aut, nobis nostrum quidem quas adipisci consequatur iusto perspiciatis nesciunt aliquam quod dolores laudantium dolorem expedita mollitia accusamus repudiandae!</p>

            </div>

            <div className="howWork-article-aira">
                {
                    HowWorkdata.map(({title, des}, index)=>{
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
