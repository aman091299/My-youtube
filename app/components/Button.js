
import { useDispatch } from "react-redux"
import { settingSearchQuery } from "../utils/stores/searchQuerySlice";

const Button = ({name,currentValue,index,setCurrentValue}) => {
  const dispatch=useDispatch();
  return (
    <div>
        <button 
        className={`  px-5 py-2 cursor-pointer rounded-lg  ${currentValue===index?"bg-black  text-white":"bg-gray-300 hover:bg-gray-200"}`} 
        onClick={()=>{
          setCurrentValue(index)
      
          }}
        >{name}</button>
    </div>
  )
}

export default Button