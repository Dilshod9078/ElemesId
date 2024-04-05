import React from 'react'

function Button({btnWidth, btnPadding, btnShadow, title}) {
  return (
    <button className={`${btnWidth} ${btnPadding} ${btnShadow} bg-[#8BAC3E] rounded-[100px] hover:opacity-[0.7] text-[14px] text-white font-medium leading-[22px]`}>{title}</button>
  )
}

export default Button