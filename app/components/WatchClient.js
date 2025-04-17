'use client'


import { useSearchParams } from "next/navigation"
import LiveChat from "../components/LiveChat";

const WatchClient = () => {
    const searchParams=useSearchParams();
    const videoId=searchParams.get('v');

  return videoId?(
    <div className="flex w-full gap-4">
  <iframe
          width="800"
          height="500"
          className="w-12/10"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <LiveChat/>
    </div>
  ):(
    <div className="absolute font-bold text-6xl flex justify-center items-center w-full h-full">
        VIDEO IS NOT AVAILABLE
    </div>
  )
}

export default  WatchClient;