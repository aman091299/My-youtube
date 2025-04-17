

const Suggetion = ({suggestion,setSearchQuery,setQuerySuggestions}) => {
  return (
    <div className="w-full  px-4 py-2 hover:bg-gray-200 rounded-lg" onClick={()=>setSearchQuery(suggestion)} onBlur={()=>setQuerySuggestions('')}>
       <button className="py-1 text-lg font-semibold"  >🔍 {suggestion}</button>
    </div>
  )
}

export default Suggetion