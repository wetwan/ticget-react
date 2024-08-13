import HeaderIndx from '../component/HeaderIndx'
import NavIndex from '../component/NavIndex'
import Addbtn from '../component/Addbtn'
import Trending from '../component/Trending'
import Events from '../component/Events'
import MoreEvents from '../component/MoreEvents'
import Footer from '../component/Footer'

const Homepage = () => {
  return (
    <>
        <HeaderIndx />
    
            <NavIndex />
        <Addbtn />
        <Trending />
        <Events isHome={true}/>
        < MoreEvents />
            
      
        < Footer />
    </>
   
  )
}

export default Homepage