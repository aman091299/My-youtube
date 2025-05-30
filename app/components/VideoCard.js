'use client';

import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { thumbnails, channelTitle, title } = snippet;
  const showSideBar=useSelector(store=>store.sideBar.showSideBar)

  return (
    <div className="m-4 p-2 shadow">
    <Link href={"/watch?v=" +info.id}>
      <Image
        src={thumbnails.high.url}
        width={showSideBar?220 : 200}
        height={700}
        alt="Utube Image"
        className="rounded-lg"
      />
      <ul>
        <li className="font-bold py-1 w-[190px] line-clamp-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
      </Link>
    </div>
  );
};

export default VideoCard;
