import React from 'react'

function Navbar({title}) {
  return (
    <li>
        <a href="#" className="text-[#757575] hover:text-[#8BAC3E] transition font-medium text-[14px] leading-[22px]">{title}</a>
    </li>
  )
}

export default Navbar