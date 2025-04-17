'use client'
import {useState,useEffect} from 'react';
import Image from "next/image";
import { YOUTUBE_SUGGESTION_API } from '../utils/contants';
import Suggetion from './Suggetion';
import { useDispatch ,useSelector} from 'react-redux';
import { toggleSideBar } from '../utils/stores/sideBarSlice';
import { settingSearchQuery,chacheResult } from '../utils/stores/searchQuerySlice';
import { useRef } from 'react';

const Header = () => {
  const suggestionBoxRef = useRef();
  const [searchQuery,setSearchQuery]=useState('');
  const [querySuggestions,setQuerySuggestions]=useState('')
  const checkCacheData=useSelector(store=>store.searchQuery.chacheSuggestion);

  const dispatch=useDispatch();

   
  const getSuggetionData=async(searchQuery)=>{
  
    const data=await fetch(YOUTUBE_SUGGESTION_API+searchQuery)
    const json=await data.json();

    setQuerySuggestions(json[1])
    dispatch(chacheResult({[searchQuery]:json[1]}));
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionBoxRef.current &&
        !suggestionBoxRef.current.contains(event.target)
      ) {
        setQuerySuggestions([]);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  useEffect(()=>{
  const timer=  setTimeout(()=>{
  
      if(!checkCacheData[searchQuery.trim()] && searchQuery !==''){
        getSuggetionData(searchQuery);
      }
      else{
        setQuerySuggestions(checkCacheData[searchQuery]);
      }
   
    },200)
 return ()=>{
    clearInterval(timer);
 }
  },[searchQuery])

  return (
   
    <div className="grid grid-flow-col items-center shadow fixed bg-white w-full z-40">
      <div className="flex items-center gap-3 col-span-3 ml-4">
        <Image
          width={40}
          height={20}
          className="h-8"
          alt="Hamburger logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png"
          onClick={()=>{dispatch(toggleSideBar())}}
        />

        <Image
          width={120}
          height={20}
          className="h-[80px]"
          alt="Youtube logo"
          src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
        />
      </div>
      <div className="relative  col-span-8">
        <input type="text"  value={searchQuery}
        
       
         onChange={(e)=>{
          setSearchQuery(e.target.value)
       
          }
          }
         className="opacity-90 placeholder:text-lg border border-gray-500 rounded-l-4xl py-2 px-6 w-[500px] shadow focus:border-blue-700 focus:outline-none" placeholder="Search" />
        <button className="opacity-100 border border-gray-500 bg-[#f0f0f0] hover:bg-gray-200 py-2 px-6 rounded-r-4xl shadow" onClick={(e)=>{
          dispatch(settingSearchQuery(searchQuery));
        }}>🔍</button>
        <div  ref={suggestionBoxRef} className="w-[500px] absolute bg-white shadow-lg  py-1 rounded-lg z-30" >
        {
          querySuggestions?.length !==0 && querySuggestions?.map((sug)=>(<Suggetion key={sug} suggestion={sug} setSearchQuery={setSearchQuery} setQuerySuggestions={setQuerySuggestions}/>))
        }
        
      </div>
      </div>
    
      <div className="col-span-1">
        <Image
          width={40}
          height={20}
          alt="user icon logo"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
 
  );
};

export default Header;
