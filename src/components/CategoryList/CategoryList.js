import React from 'react'

function CategoryList({state, img, alt, width, height, title, text, itemPadding, itemBg}) {
  return (
    <li style={{"transform":`translateX(${state}px)`}} className={`category-item hover:scale-125 duration-400 min-w-[230px] flex flex-col items-center justify-center ${itemPadding} rounded-[8px] ${itemBg}`}>
        <img src={img} alt={alt} width={width} height={height} />
        <h4 className="mt-[21px] text-[#333333] text-[16px] leading-[22px] font-medium">{title}</h4>
        <p className="mt-[4px] text-[#333333] text-[14px] leading-[16px] font-normal">{text}</p>
    </li>
  )
}

export default CategoryList