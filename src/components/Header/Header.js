import React from 'react'

import Navbar from '../Navbar/Navbar'
import Button from '../Button/Button'

import SiteLogo from '../../assets/Images/Site-logo.svg'

function Header() {
  return (
    <header className="py-[27px]">
        <div className="container mx-auto">
            <div className="flex items-center justify-between">
                <a href="\">
                  <img src={SiteLogo} alt="Site logo" width={207} height={50} />
                </a>
                <nav>
                    <ul className="flex items-center gap-[32px]">
                        <Navbar title={"Home"}/>
                        <Navbar title={"About"}/>
                        <Navbar title={"Promotions "}/>
                        <Navbar title={"Blogs"}/>
                        <Navbar title={"Contact Us"}/>
                    </ul>
                </nav>
                <div className="flex items-center gap-[24px]">
                    <strong className="text-[#333333] font-medium text-[14px] leading-[22px]">Masuk</strong>
                    <Button btnWidth={"w-[147px]"}  btnPadding={"py-[10px]"}  title={"Daftar Sekarang"}/>
                </div>
            </div>
            <div>
            </div>
        </div>
    </header>
  )
}

export default Header