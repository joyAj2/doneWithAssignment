// import FeaturesBooks css..................
import './TitileTypeOne.css'

export default function TitileTypeOne({ClassName, Title, TitleTop}) {
  return (
    <div className={`titleTypeOne ${ClassName}` }>
        <small>{TitleTop}</small>
        <div className="headeing-H">
            <div className="line"></div>
            <h2>{Title}</h2>
            <div className="line"></div>
        </div>        
    </div>
  )
}
