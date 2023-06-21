import * as React from 'react';
import './App.css'
import { useState } from 'react';
import PlayIcon from '@mui/icons-material/PlayArrow';
import NextIcon from '@mui/icons-material/FastForward';
import PreviousIcon from '@mui/icons-material/FastRewind';
import { Main } from '../components/Layout'
import { Card2 } from '../components/Card'
import { NavbarCustom, NavbarItem } from '../components/NavbarCustom'
import { IconButton } from '@mui/material';
import {Delete} from '@mui/icons-material/Delete'

/*這裡是在使用App function不是寫App functino*/
/* yourname,departmentgrade,imgSrc,wish*/ 

export default function App() {
  const user={
    name:"yijhenli",
    grade:"經濟系大三",
    imgSrc:"https://cc.ntpu.edu.tw/images/2018/12/04/image.jpg",
    wish:"New beginning ,new chapters,new life and new endeavors,Happy graduation. I bless you with all that you need to earn many more achievements and facts in life ahead. Congratulations and well done. We're so happy that you've achieved this great milestone- Wishing you great success with your dreams and career. It's official: you're now too cool for school"
  }
  const user2={
    name:"Evelyn",
    grade:"企管系碩一",
    imgSrc:"https://cc.ntpu.edu.tw/images/2018/12/04/image.jpg",
    wish:"Happy graduation. I bless you with all that you need to earn many more achievements and facts in life ahead. Congratulations and well done. We're so happy that you've achieved this great milestone- Wishing you great success with your dreams and career. It's official: you're now too cool for school,Happy graduation. I bless you with all that you need to earn many more achievements and facts in life ahead. Congratulations and well done. We're so happy that you've achieved this great milestone- Wishing you great success with your dreams and career. It's official: you're now too cool for school"
  }

  return (
    <div className="App">
      <Main>
        <Card2 user={user}/>
      </Main>
      <NavbarCustom>
        <NavbarItem>
        <IconButton>
          <PreviousIcon/>
          </IconButton>
        </NavbarItem>
        <NavbarItem>
        <IconButton>
          <NextIcon/>
          </IconButton>
        </NavbarItem>
        <NavbarItem>
          <IconButton>
            <PlayIcon/>
          </IconButton>
        </NavbarItem>
      </NavbarCustom>
    </div>
  )
    
}


