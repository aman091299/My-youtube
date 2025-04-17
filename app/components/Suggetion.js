

const Suggetion = ({suggestion,setSearchQuery,setQuerySuggestions}) => {
  return (
    <button className="w-full flex items-start py-1 rounded-lg"  onClick={()=>setSearchQuery(suggestion)}>
    <div className="w-full px-4 hover:bg-gray-200 rounded-lg py-1 flex items-start">
    🔍 {suggestion}
    </div>
     
    </button>
  )
}

export default Suggetion