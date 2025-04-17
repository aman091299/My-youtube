'use client'
import { useSelector } from "react-redux"
import ButtonList from "./ButtonList"
import VideoContainer from "./VideoContainer"


const MainContainer = () => {
  const showSideBar=useSelector(store=>store.sideBar.showSideBar);
  return (
    <div className={showSideBar?'w-[85%]':'w-full'}>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer