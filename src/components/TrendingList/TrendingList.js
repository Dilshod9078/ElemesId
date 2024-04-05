import React from 'react'

function TrendingList({itemBg, img, alt, title, text, StarImg}) {
  return (
    <li className={`trending-item w-[287.5px] py-[33px] px-[21px] shadow-[0px_11px_39px_0px_#00000012] rounded-[17px] ${itemBg}`}>
        <img src={img} alt={alt} width={118.5} height={120} />
        <h4 className="mt-[19px] text-[#000000] text-[26px] leading-[50px] font-medium">{title}</h4>
        <p className="text-[#8BAC3E] text-[18px] leading-[21px] font-medium">{text}</p>
        <img className="mt-[19px]" src={StarImg} alt={"Stars"} width={68} height={11}/>
    </li>
  )
}

export default TrendingList