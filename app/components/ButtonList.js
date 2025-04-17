'use client'

import Button from "./Button"
import {  ButtonListName } from "../utils/contants"
import {useState,useEffect} from 'react';
import {useSelector} from 'react-redux'

// ButtonListName=
// ["Gaming","Live","Soccer","Music","Cricket","Drama","Cooking","Adventure","Travel","Books"]
const ButtonList = () => {
  const showSideBar=useSelector(store=>store.sideBar.showSideBar)
 
  const [startIndex,setStartIndex]=useState(0);
  const [endIndex,setEndIndex]=useState(10);
  const [currentValue,setCurrentValue]=useState(0);
 
  const prevBtnHandler=()=>{
    if(startIndex !== 0){
      setStartIndex(prev=>prev - 1);
      setEndIndex(prev=>prev-1);
    }
  }

  const nextBtnHandler=()=>{
    if(ButtonListName.length > endIndex){
    setEndIndex(prev=>prev + 1);
    setStartIndex(prev=>prev+1);
  }
  }

   useEffect(()=>{
    if(showSideBar){
      setStartIndex(0);
      setEndIndex(9);
    }
    else{
      setStartIndex(0)
     setEndIndex(10);
    }
  
   },[showSideBar])
 
  return (
    <div className="flex gap-3 mt-4 ml-4 w-full">
     <div className="relative group flex flex-col items-center justify-center w-10">
    <div   className="rounded-full hover:w-10 hover:h-10 hover:border cursor-pointer hover:bg-gray-200 flex items-center justify-center " onClick={prevBtnHandler}>{"<"}</div>
    <div className="top-13 left-0  rounded-lg bg-gray-200 border py-2 px-5 absolute opacity-0 group-hover:opacity-100">Prev</div>
     </div>
     {
      ButtonListName.slice(startIndex,endIndex).map((btnName,index)=>(
        <Button key={btnName} name={btnName} currentValue={currentValue} index={index} setCurrentValue={setCurrentValue} />
      ))
     }
     <div className="relative group flex flex-col items-center justify-center w-10">
     <div  className="rounded-full hover:w-10 hover:h-10 hover:border cursor-pointer hover:bg-gray-200 flex items-center justify-center " onClick={nextBtnHandler}>{">"}
     <div className="top-13 right-0  rounded-lg bg-gray-200 border py-2 px-5 absolute opacity-0 group-hover:opacity-100">Next</div>
     </div>
     </div>
    </div>
  )
}

export default ButtonList