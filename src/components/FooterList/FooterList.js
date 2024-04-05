import React from 'react'

function FooterList({title, Link1, Link2, Link3, Link4, Link5}) {
  return (
    <>
     <strong className="text-[#333333] font-medium text-[18px] leading-[24px]">{title}</strong>
     <ul className="mt-[33px]">
        <li className="footer-item">
            <a href="#" className="text-[14px] font-normal leading-[16px] text-[#757575] hover:text-black">{Link1}</a>
        </li>
        <li className="footer-item">
            <a href="#" className="text-[14px] font-normal leading-[16px] text-[#757575] hover:text-black">{Link2}</a>
        </li>
        <li className="footer-item">
            <a href="#" className="text-[14px] font-normal leading-[16px] text-[#757575] hover:text-black">{Link3}</a>
        </li>
        <li className="footer-item">
            <a href="#" className="text-[14px] font-normal leading-[16px] text-[#757575] hover:text-black">{Link4}</a>
        </li>
        <li className="footer-item">
            <a href="#" className="text-[14px] font-normal leading-[16px] text-[#757575] hover:text-black">{Link5}</a>
        </li>
     </ul>
    </>
  )
}

export default FooterList