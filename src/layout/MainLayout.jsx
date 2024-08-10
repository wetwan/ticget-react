import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../component/Nav'
import Footer from '../component/Footer'
import Search from '../component/Search'
import {Datas} from '../component/Data';




const MainLayout = ({events}) => {

  return (
    <>  
        <Nav events={events}/>
      
        <Datas>
        {(events, loading) =>
        
          
          <Search events={events} />
          }
      </Datas>

        <Outlet />
        <Footer />
    </>
  )
}

export default MainLayout

// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Nav from '../component/Nav';
// import Footer from '../component/Footer';
// import Search from '../component/Search';
// import { Datas } from '../component/Data';

// const MainLayout = () => {
//   return (
//     <>
//       <Nav />
//       <Datas>
//         {(events, loading) => <Search events={events} loading={loading} />}
//       </Datas>
//       <Outlet />
//       <Footer />
//     </>
//   );
// };

// export default MainLayout;
