import { Stamp } from "../Stamp4"
import "./index.css"
import ntpustonestamp from "../Layout/img/ntpustamp-1.png"
/*首先這裡寫的function Card是要放在Main裡面的
所以Main裡面也要有</card>*/ 
/*這裡const name grade imgSrc wish，
把這幾個設成在user裡面可以自己設定的*/ 


export function Card2({user}){
    const{name,grade,imgSrc,wish}=user
    return(
    <div className="week5-card">
      <div className="main-area">
        <div className="stamp-position">
          <img className=".ntpustamp-1" src={ntpustonestamp} />
        </div>
        <div className="which-department">
          <div className="department-word">{grade}</div>
        </div>
        <div className="main-word-area">
          <div className="word-frame">
            <div className="the-main-word">{wish}</div>
          </div>
        </div>
        <div className="name">
          <div classNames="your-name">{name}</div>
        </div>
        <div className="picture-post">
          <Stamp imgSrc={imgSrc}/>
        </div>
      </div>
    </div>
      )
  }