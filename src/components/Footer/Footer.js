import React from 'react'

import FooterList from '../FooterList/FooterList'

import FooterLogo from '../../assets/Images/Site-logo.svg'
import {Message, Phone, Instagarm} from '../../assets/Images/Icon'
import Email from '../../assets/Images/mail.svg'
import Calling from '../../assets/Images/phone.svg'

function Footer() {
  return (
    <>
    <footer className="site-footer">
      <div className="container mx-auto">
        <div className="footer flex items-start justify-between">
           <div className="w-[335px]">
            <a href="#">
              <img src={FooterLogo} alt="Site logo" width={207} height={50} />
            </a>
            <p className="mt-[21.7px] font-normal text-[14px] leading-[20px] text-[#757575]">Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950</p>
             <ul className="mt-[33px] flex items-center gap-[8px]">
              <li>
                <a className="w-[40px] h-[40px] inline-block bg-white rounded-[24px] p-[10px] hover:bg-[#8BAC3E] footer-item-link" href="#">
                   <Message/>
                </a>
              </li>
              <li>
                <a className="w-[40px] h-[40px] inline-block bg-white rounded-[24px] p-[10px] hover:bg-[#8BAC3E] footer-item-link" href="#">
                   <Phone/>
                </a>
              </li>
              <li>
                <a className="w-[40px] h-[40px] inline-block bg-white rounded-[24px] p-[10px] hover:bg-[#8BAC3E] footer-item-link" href="#">
                   <Instagarm/>
                </a>
              </li>
             </ul>
           </div>
           <div>
            <FooterList title={"Categories"} Link1={"Cupcake"} Link2={"Pizza"} Link3={"Kebab"} Link4={"Salmon"} Link5={"Dougnut"}/>
           </div>
           <div>
           <FooterList title={"About Us"} Link1={"About Us"} Link2={"FAQ"} Link3={"Report Problem"}/>
           </div>
           <div className="w-[250px]">
            <strong className="font-medium text-[18px] text-[#333333] leading-[24px]">Newsletter</strong>
            <p className="mt-[33px] text-[#757575] text-[14px] leading-[24px] font-normal">Get now free 50% discount for alll products on your first order</p>
            <label className="footer-label mt-[19px] w-full border-[1px] border-solid border-[#000000] flex items-center justify-between rounded-[8px]">
              <input className="footer-input w-[70%] bg-transparent outline-none" type="email" placeholder="Your email address" />
              <button className="bg-[#8BAC3E] w-[60px] py-[8px] rounded-tr-[8px] rounded-br-[8px] text-white text-[14px] leading-[24px] font-normal">SEND</button>
            </label>
            <div className="mt-[19px]">
              <a className="flex items-center gap-[10px]" href="#">
                <img src={Email} alt="email icon" width={20} height={20} />
                <span className="text-[#000000] font-normal tex-[14px] leading-[24px]"> elemesid@gmail.com</span>
              </a>
            </div>
            <div className="mt-[10px]">
              <a className="flex items-center gap-[10px]" href="#">
                <img src={Calling} alt="email icon" width={20} height={20} />
                <span className="text-[#000000] font-normal tex-[14px] leading-[24px]">0888 1111 2222 </span>
              </a>
            </div>
           </div>
        </div>
      </div>
    </footer>
    <div className="outer flex items-center justify-center">
      <p className="font-normal text-[12px] leading-[16px] text-[#757575] tracking-[5%]">© 2021 ELEMES ID. ALL RIGHTS RESERVED</p>
    </div>
    </>
  )
}

export default Footer