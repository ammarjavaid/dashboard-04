import React, { useEffect } from 'react'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import "./home.scss"
import { userData } from "../../DummyData"
import WidgetsSm from '../../components/widgetsSm/WidgetsSm'
import WidgetsLg from '../../components/widgetsLg/WidgetsLg'
import Topbar from "../../components/topbar/Topbar"
import Sidebar from '../../components/sidebar/Sidebar'
import { useNavigate } from "react-router-dom"

const Home = ({open, setOpen, handle, isAuth, setIsAuth}) => {

  // const navigate = useNavigate();

  // useEffect(()=>{
  //   if(!isAuth){
  //     navigate("/login");
  //   }
  // }, [])


  return (
    <>
      <div className='container'>
        <Sidebar open={open} setOpen={setOpen} handle={handle}/>

        <div className='home'>
          <Topbar open={open} setOpen={setOpen} handle={handle}/>
          <Featured />
          <div style={{ position: 'relative', width: "100%" }}>
            <div style={{ position: 'absolute', width: "100%", height: '100%' }}>
              <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
            </div>
          </div>
          <div className='homeWidgets'>
            {/* <WidgetsSm />
        <WidgetsLg /> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home