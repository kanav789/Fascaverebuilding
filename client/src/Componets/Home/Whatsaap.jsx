import React from 'react'

import '../../App.css'
 
import whataap from "../../Asset/whatsaap.png"


function Whatsaap() {
  return (
   
     <button className='fixed bottom-4 right-4 z-50  w-[50px] h-[50px] bg-green-500 text-[#000] rounded-full cursor-pointer flex justify-center items-center circle'>
   
   <a href="https://wa.link/iy5xlw"><img src={whataap} alt="" /></a> 

  

    </button>


  )
}

export default Whatsaap