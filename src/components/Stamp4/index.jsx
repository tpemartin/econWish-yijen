import"./index.css"
import Image from 'mui-image'
export function Stamp({imgSrc}){
    return(
    <div className="stamp">
  <Image 
  duration={0}
  src={imgSrc}/>
</div>

)
}