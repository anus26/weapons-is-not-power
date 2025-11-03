import React, { useContext, useState } from 'react'
import Header from '../../Pages/Header/Header'
import { Outlet } from 'react-router-dom'
import { AppContext } from '../../Context/AppContext'

const Layouts = () => {
  const {open,setOpen}=useContext(AppContext)
  return (
  <>
{/* <button  className={`${open?"bg-white text-black":"bg-black"} w-full`} onClick={()=>setOpen(!open)}>

{open?"on":'off'}
</button> */}
<div className={`${open?'bg-white text-black':'bg-black'} h-screen`}>

    <Header/>


    <Outlet/>
</div>

  </>
  )
}

export default Layouts