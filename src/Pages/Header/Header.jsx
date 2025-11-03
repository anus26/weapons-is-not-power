import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext'

const Header = () => {
  const { header,open,setOpen } = useContext(AppContext)
  if(!header) return null
  return (
<>
<section className='m-5'>
    <div className='bg-blue-400 text-white h-16 rounded-full ' >
  <h1 className='text-2xl m-5 font-josefin'>
    Weapon is not Power
  </h1>
  <div>

  </div>

    </div>
</section>
</>
  )
}

export default Header