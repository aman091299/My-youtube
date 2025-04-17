
'use client'

import ChatMessage from './ChatMessage'
import { useEffect,useState } from 'react'
import { randomName ,randomString} from '../utils/contants';
const LiveChat = () => {
    const [message,setMessage]=useState([]);
    const [liveMessage,setLiveMessage]=useState('')
    console.log(message)
 
    useEffect (()=>{
        const timer=setInterval(()=>{
           
           setMessage(prev=>{
          
              const newMessage=  { name:randomName(4),  text:randomString(18)+"  "+"Lorem epsum 🚀🚀" }
              const previousMessage=[...prev];
              if(previousMessage.length > 30){
                previousMessage.shift();
              }
              const updatedMessage=[...previousMessage,newMessage];
              return updatedMessage;
           }
    )
        },1000)
     return ()=>clearInterval(timer)
    },[])
  return (
    <div>
    <div className="w-[340px] h-[440px] border-black rounded-lg bg-slate-100 p-2 ml-10 mr-4 mt-3 flex flex-col overflow-y-scroll">
      { message?.map((msg,i)=>(
        <ChatMessage key={i} name={msg.name} message={msg.text}/>
       )) }
       </div>
       <form onSubmit={(e)=>{
        e.preventDefault()
        setMessage(prev=>[
            ...prev,{name:"aman singh",text:liveMessage}
        ])
       }}
       className="w-[340px] mt-4  ml-10 flex gap-3">
        <input type="text" placeholder="Enter Message Here" value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)} className="border rounded-lg px-4 py-2 "/>
        <button className="text-lg">Submit</button>
       </form>
    </div>
  ) 
}

export default LiveChat