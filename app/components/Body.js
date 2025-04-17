import Sidebar from "./Sidebar"
import MainContainer from "./MainContainer"

const Body = () => {
  return (
    <div className="flex py-20">
         <Sidebar/>
        <MainContainer />
    </div>
  )
}

export default Body