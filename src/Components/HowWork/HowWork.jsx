import './HowWork.css'
import TitileTypeOne from '../../UI/TitileTypeOne/TitileTypeOne'
import { HowWorkdata } from '../../Data/Data';
import { SiParitysubstrate } from "react-icons/si";


export default function HowWork() {
  return (
    <section className='howWork'>
          <div className="container howWork-container">
            <div className="title-aria">
            <TitileTypeOne TitleTop={'lorem ipsum'} Title={'How its all Work'} />
            <p className='how-work-des'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio eum aperiam aut, nobis nostrum quidem quas adipisci consequatur iusto perspiciatis nesciunt aliquam quod dolores laudantium dolorem expedita mollitia accusamus repudiandae!</p>
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
