'use client'

import { useSelector } from "react-redux"


const Sidebar = () => {
  const showSideBar=useSelector(store=>store.sideBar.showSideBar)
  return showSideBar && (
    <div className="shadow-lg w-[15%] px-4 py-3 flex-col  gap-4">
   <div>
   <div className="font-bold">Home </div>
     <div>Shorts </div>
     <div>Videos </div>
     <div>Live </div>
   </div>

 <div>
 <div className="font-bold">Subscribe </div>
     <div>Musics</div> 
     <div>Sports </div>
     <div>Gaming </div>
     <div>Movies </div>
 </div>

  <div>
  <div className="font-bold">Watch Later </div>
     <div>Musics</div> 
     <div>Sports </div>
     <div>Gaming </div>
     <div>Movies </div>
  </div>

    </div>
  )
}

export default Sidebar